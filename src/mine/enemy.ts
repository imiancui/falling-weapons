import * as THREE from 'three';
import Matter from 'matter-js';
import type { EnemyKind } from '../data/config';
import { Tex } from '../gfx/pixel';
import type { Mine } from './world';
import type { Weapon } from './weapon';

export interface EnemyStats { hp: number; name: string; range: number; dmg: number; cd: number; desc: string }
export const ENEMY_STATS: Record<EnemyKind | 'golem', EnemyStats> = {
  zombie: { hp: 40, name: '殭屍礦工', range: 1.4, dmg: 8, cd: 1.0, desc: '近戰怪物，武器進入 1.4 格內時每秒揮擊扣血' },
  skeleton: { hp: 30, name: '骷髏弓手', range: 6, dmg: 6, cd: 2.2, desc: '遠程怪物，對 6 格內的武器發射箭矢造成傷害' },
  mushroom: { hp: 25, name: '爆裂菇', range: 1.7, dmg: 25, cd: 1.0, desc: '武器靠近 1.7 格內會引信 1 秒後自爆，重創周圍武器與方塊' },
  spider: { hp: 35, name: '洞穴蜘蛛', range: 4.5, dmg: 0, cd: 4.0, desc: '對 4.5 格內的武器吐出蛛網，命中後使武器下墜與旋轉大幅減速 1.5 秒' },
  golem: { hp: 6000, name: '岩石巨像', range: 0, dmg: 5, cd: 0.5, desc: '第 3 關底部 Boss：施放落石雨、召喚洞穴小怪，並展開減傷 50% 的岩殼（可用雷電、爆炸或神聖攻擊直接擊碎）' },
};

const hpBarGeo = new THREE.PlaneGeometry(1, 0.1);

export class Enemy {
  hp: number;
  maxHp: number;
  body: Matter.Body;
  group = new THREE.Group();
  sprite: THREE.Mesh;
  private mat: THREE.MeshStandardMaterial;
  private hpFill: THREE.Mesh;
  private hpBg: THREE.Mesh;
  vy = 0;
  atk = Math.random();
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
  readonly size: number; // in blocks
  isBoss = false;

  constructor(public m: Mine, public kind: EnemyKind | 'golem', public x: number, public y: number, hpMul: number, size = 0.8) {
    this.size = size;
    this.maxHp = this.hp = ENEMY_STATS[kind].hp * hpMul;
    const B = m.B;
    this.body = Matter.Bodies.rectangle(x, y, B * size * 0.85, B * size * 0.85, { isStatic: true, label: 'enemy', friction: 0.3, restitution: 0.4 });
    this.body.plugin = { kind: 'enemy', e: this };
    this.mat = new THREE.MeshStandardMaterial({ map: Tex.enemy(kind), transparent: true, alphaTest: 0.5, emissive: 0xffffff, emissiveMap: Tex.enemy(kind), emissiveIntensity: 0.25, side: THREE.DoubleSide });
    this.sprite = new THREE.Mesh(new THREE.PlaneGeometry(size * 1.15, size * 1.15), this.mat);
    this.group.add(this.sprite);
    this.hpBg = new THREE.Mesh(hpBarGeo, new THREE.MeshBasicMaterial({ color: 0x220000 }));
    this.hpFill = new THREE.Mesh(hpBarGeo, new THREE.MeshBasicMaterial({ color: 0xff3a3a }));
    this.hpBg.scale.x = size;
    this.hpBg.position.set(0, size * 0.7, 0.01);
    this.hpFill.position.set(0, size * 0.7, 0.02);
    this.group.add(this.hpBg, this.hpFill);
    this.group.position.z = 0.55;
    this.hpBg.visible = this.hpFill.visible = false;
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
    // gravity on the grid (bosses are anchored)
    if (!this.isBoss) {
      const footY = this.y + (B * this.size) / 2 + 1;
      const [fr, fc] = m.cellOf(this.x, footY);
      if (!m.isSolid(fr, fc)) {
        this.vy = Math.min(this.vy + 900 * dt, 500);
        this.y += this.vy * dt;
        Matter.Body.setPosition(this.body, { x: this.x, y: this.y });
      } else if (this.vy > 0) {
        this.vy = 0;
        this.y = fr * B - (B * this.size) / 2 + 0.01;
        Matter.Body.setPosition(this.body, { x: this.x, y: this.y });
      }
    }
    if (!this.disabled) this.act(dt);
    // visuals
    const p = m.to3(this.x, this.y);
    this.group.position.x = p.x;
    this.group.position.y = p.y + (this.isBoss ? 0 : Math.abs(Math.sin(m.time * 3 + this.x)) * 0.04);
    const w = this.nearestWeapon(10);
    if (w) this.sprite.scale.x = w.x < this.x ? -1 : 1;
    const c = this.mat.color;
    if (this.frozen) c.setRGB(0.65, 0.92, 1.35);
    else if (m.time < this.burnUntil) c.setRGB(1.3, 0.82, 0.58);
    else if (m.time < this.poisonUntil) c.setRGB(0.68, 1.25, 0.58);
    else c.setRGB(1, 1, 1);
    if (this.hurtFlash > 0) {
      this.hurtFlash -= dt;
      this.mat.emissiveIntensity = 0.52;
    } else this.mat.emissiveIntensity = this.fuse >= 0 ? 0.3 + Math.abs(Math.sin(m.time * 4)) * 0.25 : 0.22;
    const hpVis = this.hp < this.maxHp;
    this.hpBg.visible = this.hpFill.visible = hpVis && !this.isBoss;
    if (hpVis) {
      const f = Math.max(0, this.hp / this.maxHp);
      this.hpFill.scale.x = this.size * f;
      this.hpFill.position.x = -(this.size * (1 - f)) / 2;
    }
  }

  protected act(dt: number) {
    const m = this.m;
    const st = ENEMY_STATS[this.kind];
    this.atk -= dt;
    switch (this.kind) {
      case 'zombie': {
        const w = this.nearestWeapon(st.range);
        if (w && this.atk <= 0) {
          this.atk = st.cd;
          m.hurtWeapon(w, st.dmg);
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
          const sp = 7 * m.B;
          m.addProjectile({ kind: 'arrow', x: this.x, y: this.y, vx: (dx / d) * sp, vy: (dy / d) * sp, r: 6, life: 2, from: 'enemy', dmg: st.dmg });
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
            m.enemyExplode(this, 2, st.dmg);
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
          const sp = 5 * m.B;
          m.addProjectile({ kind: 'web', x: this.x, y: this.y, vx: (dx / d) * sp, vy: (dy / d) * sp, r: 10, life: 2, from: 'enemy', dmg: 0 });
        }
        break;
      }
    }
  }
}

/** Rock Golem boss: rock rain, summons, shell phase. Anchored on the chamber floor. */
export class Golem extends Enemy {
  rainT = 4;
  summonT = 10;
  shellT = 16;
  shellUntil = 0;
  contactT = 0;
  private shellMesh: THREE.Mesh;

  constructor(m: Mine, x: number, y: number, hpMul: number) {
    super(m, 'golem', x, y, hpMul, 3);
    this.isBoss = true;
    this.shellMesh = new THREE.Mesh(
      new THREE.SphereGeometry(1.9, 16, 12),
      new THREE.MeshBasicMaterial({ color: new THREE.Color(1.2, 0.9, 0.5), transparent: true, opacity: 0.25, blending: THREE.AdditiveBlending, depthWrite: false, toneMapped: false }),
    );
    this.shellMesh.visible = false;
    this.group.add(this.shellMesh);
  }

  get shelled() { return this.m.time < this.shellUntil; }
  breakShell() {
    if (!this.shelled) return;
    this.shellUntil = 0;
    const p = this.m.to3(this.x, this.y);
    this.m.fx.text(p.x, p.y + 2, '岩殼破碎！', '#ffd060');
    this.m.fx.ring(p.x, p.y, 2.5, 0xffd060);
  }

  update(dt: number) {
    super.update(dt);
    this.shellMesh.visible = this.shelled;
    if (this.shelled) this.shellMesh.rotation.y += dt;
  }

  protected act(dt: number) {
    const m = this.m;
    const B = m.B;
    const p = m.to3(this.x, this.y);
    // contact damage to weapons touching the golem
    this.contactT -= dt;
    if (this.contactT <= 0) {
      this.contactT = 0.5;
      for (const w of m.weapons) if (Math.hypot(w.x - this.x, w.y - this.y) < B * 2) m.hurtWeapon(w, ENEMY_STATS.golem.dmg);
    }
    this.rainT -= dt;
    if (this.rainT <= 0) {
      this.rainT = 6;
      m.fx.text(p.x, p.y + 2.2, '落石雨', '#d0d0d0');
      const topY = m.viewTopY();
      for (let i = 0; i < 6; i++) {
        const target = m.weapons.length ? m.weapons[Math.floor(Math.random() * m.weapons.length)] : null;
        const x = target ? target.x + (Math.random() - 0.5) * B * 2 : B * (1.5 + Math.random() * 6);
        m.addProjectile({ kind: 'rock', x: Math.min(B * 7.6, Math.max(B * 1.4, x)), y: topY - Math.random() * B * 2, vx: 0, vy: 6 * B, r: 12, life: 4, from: 'enemy', dmg: 10, passThrough: true });
      }
    }
    this.summonT -= dt;
    if (this.summonT <= 0) {
      this.summonT = 14;
      m.fx.text(p.x, p.y + 2.2, '召喚小怪', '#ff8080');
      const kinds: EnemyKind[] = ['zombie', 'mushroom', 'spider'];
      for (const side of [-1, 1]) {
        const x = this.x + side * B * 2.5;
        m.spawnEnemy(kinds[Math.floor(Math.random() * kinds.length)], x, this.y + B * 0.6);
      }
    }
    this.shellT -= dt;
    if (this.shellT <= 0) {
      this.shellT = 20;
      this.shellUntil = m.time + 6;
      m.fx.text(p.x, p.y + 2.2, '岩殼（雷／爆炸可破）', '#ffd060');
    }
  }
}
