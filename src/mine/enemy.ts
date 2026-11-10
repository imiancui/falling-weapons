import * as THREE from 'three';
import Matter from 'matter-js';
import { BAL, type BossKind, type EnemyKind } from '../data/config';
import { Tex } from '../gfx/pixel';
import type { Mine } from './world';
import type { Weapon } from './weapon';

export interface EnemyStats { hp: number; name: string; range: number; dmg: number; cd: number; desc: string }
export const ENEMY_STATS: Record<EnemyKind | BossKind, EnemyStats> = {
  zombie: { hp: 240, name: '殭屍礦工', range: 1.5, dmg: 16, cd: 1.0, desc: '高血量近戰守衛，會主動朝武器橫向逼近並每秒揮擊扣血' },
  skeleton: { hp: 190, name: '骷髏弓手', range: 6.5, dmg: 14, cd: 1.9, desc: '遠程守衛，在洞穴與結界大廳對 6.5 格內的武器發射骨箭' },
  mushroom: { hp: 160, name: '爆裂菇', range: 1.8, dmg: 48, cd: 1.0, desc: '主動逼近武器，進入 1.8 格內引信 1 秒後猛烈自爆重創武器' },
  spider: { hp: 210, name: '洞穴蜘蛛', range: 5.0, dmg: 8, cd: 3.4, desc: '對 5 格內武器吐出劇毒蛛網，造成傷害並大幅減速 2.2 秒' },
  golem: {
    hp: 9500, name: '岩石巨像', range: 0, dmg: 12, cd: 0.5,
    desc: '第 3 關／無盡首領：施放落石雨、召喚小怪，並展開減傷 50% 的【堅岩護殼】（可用 ⚡雷電、💥爆炸 或 ✨神聖 攻擊直接擊碎）',
  },
  spider_queen: {
    hp: 26000, name: '劇毒蛛后', range: 0, dmg: 15, cd: 0.5,
    desc: '第 6 關／無盡首領：噴吐五連扇形毒網、孵化幼蛛群，並結出減傷 40% 且每秒回血的【再生毒繭】（可用 🔥火燃燒 或 ☠爆擊 直接燒毀）',
  },
  balrog: {
    hp: 85000, name: '深淵炎魔', range: 0, dmg: 18, cd: 0.5,
    desc: '第 10 關最終首領／無盡首領：降下七連獄火流星、召喚深淵菁英，並展開減傷 60% 且反傷武器的【熔岩神盾】（可用 ❄冰凍 或 ✨神聖 瞬間冰裂）',
  },
};

const hpBarGeo = new THREE.PlaneGeometry(1, 0.11);

export class Enemy {
  hp: number;
  maxHp: number;
  dmgMul = 1;
  body: Matter.Body;
  group = new THREE.Group();
  sprite: THREE.Mesh;
  private mat: THREE.MeshStandardMaterial;
  private hpFill: THREE.Mesh;
  private hpBg: THREE.Mesh;
  vy = 0;
  patrolDir = Math.random() < 0.5 ? -1 : 1;
  atk = Math.random() * 0.8;
  fuse = -1;
  poisonStacks = 0;
  poisonDps = 0;
  poisonUntil = 0;
  plague = false;
  venomUntil = 0; // Hydra +50% damage taken debuff
  burnDps = 0;
  burnUntil = 0;
  frozenUntil = 0;
  stunnedUntil = 0;
  dead = false;
  hurtFlash = 0;
  size: number; // in blocks
  isBoss = false;
  isElite = false;
  gateId: number | null = null;

  constructor(public m: Mine, public kind: EnemyKind | BossKind, public x: number, public y: number, hpMul: number, size = 0.85) {
    this.size = size;
    this.maxHp = this.hp = Math.round(ENEMY_STATS[kind].hp * hpMul * BAL.enemyHpHardcoreMul);
    this.dmgMul = Math.min(2.8, 1 + Math.log2(Math.max(1, hpMul)) * 0.18);
    const B = m.B;
    this.body = Matter.Bodies.rectangle(x, y, B * size * 0.85, B * size * 0.85, { isStatic: true, label: 'enemy', friction: 0.3, restitution: 0.4 });
    this.body.plugin = { kind: 'enemy', e: this };
    this.mat = new THREE.MeshStandardMaterial({
      map: Tex.enemy(kind), transparent: true, alphaTest: 0.5,
      emissive: 0xffffff, emissiveMap: Tex.enemy(kind), emissiveIntensity: 0.25, side: THREE.DoubleSide,
    });
    this.sprite = new THREE.Mesh(new THREE.PlaneGeometry(size * 1.18, size * 1.18), this.mat);
    this.group.add(this.sprite);
    this.hpBg = new THREE.Mesh(hpBarGeo, new THREE.MeshBasicMaterial({ color: 0x220000 }));
    this.hpFill = new THREE.Mesh(hpBarGeo, new THREE.MeshBasicMaterial({ color: 0xff3a3a }));
    this.hpBg.scale.x = size;
    this.hpBg.position.set(0, size * 0.72, 0.01);
    this.hpFill.position.set(0, size * 0.72, 0.02);
    this.group.add(this.hpBg, this.hpFill);
    this.group.position.z = 0.55;
    this.hpBg.visible = this.hpFill.visible = false;
  }

  /** Promotes a cave monster into an oversized golden-crowned Gatekeeper Elite (2.5x HP, 1.5x dmg). */
  promoteElite() {
    if (this.isElite || this.isBoss) return this;
    this.isElite = true;
    this.maxHp = this.hp = this.maxHp * 2.5;
    this.dmgMul *= 1.5;
    this.size *= 1.24;
    this.sprite.scale.set(1.24, 1.24, 1);
    const B = this.m.B;
    Matter.Composite.remove(this.m.engine.world, this.body);
    this.body = Matter.Bodies.rectangle(this.x, this.y, B * this.size * 0.85, B * this.size * 0.85, {
      isStatic: true, label: 'enemy', friction: 0.3, restitution: 0.45,
    });
    this.body.plugin = { kind: 'enemy', e: this };
    Matter.Composite.add(this.m.engine.world, this.body);

    const crown = new THREE.Mesh(
      new THREE.PlaneGeometry(0.55, 0.55),
      new THREE.MeshBasicMaterial({ map: Tex.crown(), transparent: true, alphaTest: 0.3 }),
    );
    crown.position.set(0, this.size * 0.96, 0.03);
    this.group.add(crown);
    (this.hpFill.material as THREE.MeshBasicMaterial).color.setHex(0xffb830);
    this.hpBg.scale.x = this.size;
    this.hpBg.position.y = this.size * 0.74;
    this.hpFill.position.y = this.size * 0.74;
    return this;
  }

  get frozen() { return this.m.time < this.frozenUntil; }
  get disabled() { return this.m.time < this.frozenUntil || this.m.time < this.stunnedUntil; }

  nearestWeapon(maxBlocks: number): Weapon | null {
    let best: Weapon | null = null;
    let bd = maxBlocks * this.m.B;
    for (const w of this.m.weapons) {
      const d = Math.hypot(w.x - this.x, w.y - this.y);
      if (d < bd) { bd = d; best = w; }
    }
    return best;
  }

  update(dt: number) {
    const m = this.m;
    const B = m.B;
    // vertical gravity on the grid (bosses stay anchored unless seal opens beneath them)
    if (!this.isBoss) {
      const footY = this.y + (B * this.size) / 2 + 1;
      const [fr, fc] = m.cellOf(this.x, footY);
      if (!m.isSolid(fr, fc)) {
        this.vy = Math.min(this.vy + 900 * dt, 500);
        this.y += this.vy * dt;
        Matter.Body.setPosition(this.body, { x: this.x, y: this.y });
      } else {
        if (this.vy > 0) {
          this.vy = 0;
          this.y = fr * B - (B * this.size) / 2 + 0.01;
          Matter.Body.setPosition(this.body, { x: this.x, y: this.y });
        }
        // horizontal active patrol / weapon pursuit on solid floor!
        if (!this.disabled) {
          const targetW = this.nearestWeapon(7.5);
          let dir = this.patrolDir;
          if (targetW && Math.abs(targetW.y - this.y) < B * 4.5) {
            const dx = targetW.x - this.x;
            dir = Math.abs(dx) > B * 0.45 ? Math.sign(dx) : 0;
          }
          if (dir !== 0) {
            const spd = (this.isElite ? 1.35 : 1.05) * B;
            const nx = this.x + dir * spd * dt;
            const edgeX = nx + dir * (B * this.size * 0.42);
            const [curR] = m.cellOf(this.x, this.y);
            const [, nextC] = m.cellOf(edgeX, this.y);
            if (nextC >= 1 && nextC < m.cols - 1 && !m.isSolid(curR, nextC) && m.isSolid(fr, nextC)) {
              this.x = nx;
              Matter.Body.setPosition(this.body, { x: this.x, y: this.y });
            } else {
              this.patrolDir = -dir;
            }
          }
        }
      }
    }

    if (!this.disabled) this.act(dt);

    // visuals
    const p = m.to3(this.x, this.y);
    this.group.position.x = p.x;
    this.group.position.y = p.y + (this.isBoss ? 0 : Math.abs(Math.sin(m.time * 3.5 + this.x * 0.1)) * 0.05);
    const w = this.nearestWeapon(10);
    const flip = w ? (w.x < this.x ? -1 : 1) : (this.patrolDir < 0 ? -1 : 1);
    const sMul = this.isElite ? 1.24 : 1;
    this.sprite.scale.set(flip * sMul, sMul, 1);

    const c = this.mat.color;
    if (this.frozen) c.setRGB(0.65, 0.92, 1.35);
    else if (m.time < this.burnUntil) c.setRGB(1.3, 0.82, 0.58);
    else if (m.time < this.poisonUntil) c.setRGB(0.68, 1.25, 0.58);
    else c.setRGB(1, 1, 1);
    if (this.hurtFlash > 0) {
      this.hurtFlash -= dt;
      this.mat.emissiveIntensity = 0.52;
    } else this.mat.emissiveIntensity = this.fuse >= 0 ? 0.3 + Math.abs(Math.sin(m.time * 4)) * 0.25 : 0.22;

    const hpVis = this.isElite || this.hp < this.maxHp;
    this.hpBg.visible = this.hpFill.visible = hpVis && !this.isBoss;
    if (hpVis && !this.isBoss) {
      const f = Math.max(0, this.hp / this.maxHp);
      this.hpFill.scale.x = this.size * f;
      this.hpFill.position.x = -(this.size * (1 - f)) / 2;
    }
  }

  protected act(dt: number) {
    const m = this.m;
    const st = ENEMY_STATS[this.kind];
    const dmg = st.dmg * this.dmgMul;
    this.atk -= dt;
    switch (this.kind) {
      case 'zombie': {
        const w = this.nearestWeapon(st.range + (this.isElite ? 0.3 : 0));
        if (w && this.atk <= 0) {
          this.atk = st.cd;
          m.hurtWeapon(w, dmg);
          const p = m.to3(w.x, w.y);
          m.fx.rect(p.x, p.y, 0.5, 0.5, 0xff4040, 0.15);
        }
        break;
      }
      case 'skeleton': {
        const w = this.nearestWeapon(st.range);
        if (w && this.atk <= 0) {
          this.atk = st.cd;
          const dx = w.x - this.x, dy = w.y - this.y;
          const d = Math.hypot(dx, dy) || 1;
          const sp = 7.2 * m.B;
          m.addProjectile({ kind: 'arrow', x: this.x, y: this.y, vx: (dx / d) * sp, vy: (dy / d) * sp, r: 7, life: 2.2, from: 'enemy', dmg });
        }
        break;
      }
      case 'mushroom': {
        if (this.fuse < 0) {
          if (this.nearestWeapon(st.range)) this.fuse = 1.0;
        } else {
          this.fuse -= dt;
          if (this.fuse <= 0) {
            this.hp = 0;
            m.enemyExplode(this, 2.1, dmg);
          }
        }
        break;
      }
      case 'spider': {
        const w = this.nearestWeapon(st.range);
        if (w && this.atk <= 0) {
          this.atk = st.cd;
          const dx = w.x - this.x, dy = w.y - this.y;
          const d = Math.hypot(dx, dy) || 1;
          const sp = 5.4 * m.B;
          m.addProjectile({ kind: 'web', x: this.x, y: this.y, vx: (dx / d) * sp, vy: (dy / d) * sp, r: 10, life: 2.2, from: 'enemy', dmg });
        }
        break;
      }
    }
  }
}

// =====================================================================================
// 3 Distinct Bosses (Rock Golem, Venom Spider Queen, Abyss Balrog)
// =====================================================================================

export abstract class Boss extends Enemy {
  shieldUntil = 0;
  contactT = 0;
  protected shieldMesh: THREE.Mesh;

  constructor(m: Mine, kind: BossKind, x: number, y: number, hpMul: number, shieldColor: number) {
    super(m, kind, x, y, hpMul, 3);
    this.isBoss = true;
    this.shieldMesh = new THREE.Mesh(
      new THREE.SphereGeometry(1.9, 16, 12),
      new THREE.MeshBasicMaterial({
        color: new THREE.Color(shieldColor),
        transparent: true, opacity: 0.24, blending: THREE.AdditiveBlending, depthWrite: false,
      }),
    );
    this.shieldMesh.visible = false;
    this.group.add(this.shieldMesh);
  }

  get shielded() { return this.m.time < this.shieldUntil; }

  update(dt: number) {
    super.update(dt);
    this.shieldMesh.visible = this.shielded;
    if (this.shielded) this.shieldMesh.rotation.y += dt;
  }

  protected tickContact(dt: number) {
    this.contactT -= dt;
    if (this.contactT <= 0) {
      this.contactT = 0.5;
      const dmg = ENEMY_STATS[this.kind].dmg * this.dmgMul;
      for (const w of this.m.weapons) {
        if (Math.hypot(w.x - this.x, w.y - this.y) < this.m.B * 2.0) this.m.hurtWeapon(w, dmg);
      }
    }
  }
}

/** Stage 3 Boss — Rock Golem: rock rain, summons, Stone Shell (broken by Thunder / Explosion / Holy). */
export class Golem extends Boss {
  rainT = 4;
  summonT = 10;
  shellT = 15;

  constructor(m: Mine, x: number, y: number, hpMul: number) {
    super(m, 'golem', x, y, hpMul, 0xd8a858);
  }

  breakShell() {
    if (!this.shielded) return;
    this.shieldUntil = 0;
    const p = this.m.to3(this.x, this.y);
    this.m.fx.text(p.x, p.y + 2, '⚡ 堅岩護殼破碎！', '#ffd060');
    this.m.fx.ring(p.x, p.y, 2.5, 0xffd060);
  }

  protected act(dt: number) {
    const m = this.m;
    const B = m.B;
    const p = m.to3(this.x, this.y);
    this.tickContact(dt);

    this.rainT -= dt;
    if (this.rainT <= 0) {
      this.rainT = 6;
      m.fx.text(p.x, p.y + 2.2, '落石雨', '#d0d0d0');
      const topY = m.viewTopY();
      for (let i = 0; i < 6; i++) {
        const target = m.weapons.length ? m.weapons[Math.floor(Math.random() * m.weapons.length)] : null;
        const x = target ? target.x + (Math.random() - 0.5) * B * 2 : B * (1.5 + Math.random() * 6);
        m.addProjectile({
          kind: 'rock', x: Math.min(B * 7.6, Math.max(B * 1.4, x)), y: topY - Math.random() * B * 2,
          vx: 0, vy: 6.2 * B, r: 12, life: 4, from: 'enemy', dmg: 18 * this.dmgMul, passThrough: true,
        });
      }
    }
    this.summonT -= dt;
    if (this.summonT <= 0) {
      this.summonT = 14;
      if (m.enemies.filter((e) => !e.isBoss && Math.abs(e.y - this.y) < B * 6).length < 5) {
        m.fx.text(p.x, p.y + 2.2, '召喚礦工', '#ff9080');
        const kinds: EnemyKind[] = ['zombie', 'mushroom', 'spider'];
        for (const side of [-1, 1]) {
          m.spawnEnemy(kinds[Math.floor(Math.random() * kinds.length)], this.x + side * B * 2.4, this.y + B * 0.5);
        }
      }
    }
    this.shellT -= dt;
    if (this.shellT <= 0) {
      this.shellT = 18;
      this.shieldUntil = m.time + 6.5;
      m.fx.text(p.x, p.y + 2.2, '堅岩護殼（雷／爆炸／聖可破）', '#ffd060');
    }
  }
}

/** Stage 6 Boss — Venom Spider Queen: 5-way web fan, brood hatch, Regen Cocoon (broken by Fire / Crit). */
export class SpiderQueen extends Boss {
  webFanT = 3.5;
  broodT = 11;
  cocoonT = 15;

  constructor(m: Mine, x: number, y: number, hpMul: number) {
    super(m, 'spider_queen', x, y, hpMul, 0x6ae058);
  }

  breakCocoon() {
    if (!this.shielded) return;
    this.shieldUntil = 0;
    const p = this.m.to3(this.x, this.y);
    this.m.fx.text(p.x, p.y + 2, '🔥 再生毒繭燒毀！', '#ff8848');
    this.m.fx.ring(p.x, p.y, 2.5, 0xff7838);
  }

  protected act(dt: number) {
    const m = this.m;
    const B = m.B;
    const p = m.to3(this.x, this.y);
    this.tickContact(dt);

    if (this.shielded) {
      this.hp = Math.min(this.maxHp, this.hp + this.maxHp * 0.02 * dt);
    }

    this.webFanT -= dt;
    if (this.webFanT <= 0) {
      this.webFanT = 5.5;
      m.fx.text(p.x, p.y + 2.2, '漫天毒網', '#98ff78');
      for (let i = -2; i <= 2; i++) {
        const ang = -Math.PI / 2 + i * 0.32;
        const sp = 5.8 * B;
        m.addProjectile({
          kind: 'web', x: this.x, y: this.y - B * 0.6,
          vx: Math.cos(ang) * sp, vy: Math.sin(ang) * sp,
          r: 12, life: 2.8, from: 'enemy', dmg: 12 * this.dmgMul,
        });
      }
    }
    this.broodT -= dt;
    if (this.broodT <= 0) {
      this.broodT = 13;
      if (m.enemies.filter((e) => !e.isBoss && Math.abs(e.y - this.y) < B * 6).length < 5) {
        m.fx.text(p.x, p.y + 2.2, '孵化幼蛛群', '#c888ff');
        for (const side of [-1, 1]) {
          m.spawnEnemy('spider', this.x + side * B * 2.4, this.y + B * 0.5);
        }
      }
    }
    this.cocoonT -= dt;
    if (this.cocoonT <= 0) {
      this.cocoonT = 18;
      this.shieldUntil = m.time + 5.5;
      m.fx.text(p.x, p.y + 2.2, '再生毒繭（火燃燒／爆擊可破）', '#7eff68');
    }
  }
}

/** Stage 10 Final Boss — Abyss Balrog: hellfire meteor rain, elite summons, Molten Shield (broken by Ice / Holy). */
export class Balrog extends Boss {
  meteorT = 4.0;
  summonT = 12;
  moltenT = 15;

  constructor(m: Mine, x: number, y: number, hpMul: number) {
    super(m, 'balrog', x, y, hpMul, 0xff5420);
  }

  breakMoltenShield() {
    if (!this.shielded) return;
    this.shieldUntil = 0;
    const p = this.m.to3(this.x, this.y);
    this.m.fx.text(p.x, p.y + 2, '❄️ 熔岩神盾冰裂！', '#88e8ff');
    this.m.fx.ring(p.x, p.y, 2.6, 0x88e8ff);
  }

  protected act(dt: number) {
    const m = this.m;
    const B = m.B;
    const p = m.to3(this.x, this.y);
    this.tickContact(dt);

    this.meteorT -= dt;
    if (this.meteorT <= 0) {
      this.meteorT = 5.8;
      m.fx.text(p.x, p.y + 2.2, '獄火流星', '#ff7838');
      const topY = m.viewTopY();
      for (let i = 0; i < 7; i++) {
        const x = B * (1.3 + Math.random() * 6.4);
        m.addProjectile({
          kind: 'fireball', x, y: topY - Math.random() * B * 2.5,
          vx: (Math.random() - 0.5) * B, vy: 6.8 * B,
          r: 13, life: 4, from: 'enemy', dmg: 22 * this.dmgMul, passThrough: true,
        });
      }
    }
    this.summonT -= dt;
    if (this.summonT <= 0) {
      this.summonT = 14;
      if (m.enemies.filter((e) => !e.isBoss && Math.abs(e.y - this.y) < B * 6).length < 4) {
        m.fx.text(p.x, p.y + 2.2, '深淵號令', '#ffb848');
        m.spawnEnemy('zombie', this.x - B * 2.4, this.y + B * 0.4).promoteElite();
        m.spawnEnemy('skeleton', this.x + B * 2.4, this.y + B * 0.5);
      }
    }
    this.moltenT -= dt;
    if (this.moltenT <= 0) {
      this.moltenT = 18;
      this.shieldUntil = m.time + 6.0;
      m.fx.text(p.x, p.y + 2.2, '熔岩神盾（冰凍／聖可破）', '#ff6830');
    }
  }
}

export function createBoss(m: Mine, kind: BossKind, x: number, y: number, hpMul: number): Boss {
  switch (kind) {
    case 'golem': return new Golem(m, x, y, hpMul);
    case 'spider_queen': return new SpiderQueen(m, x, y, hpMul);
    case 'balrog': return new Balrog(m, x, y, hpMul);
  }
}
