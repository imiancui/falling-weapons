import * as THREE from 'three';
import Matter from 'matter-js';
import { BAL, RESONANCE, weaponElementMeta } from '../data/config';
import { WEAPONS, type WeaponDef, type WeaponId } from '../data/weapons';
import { Tex } from '../gfx/pixel';
import type { Mine, DmgSrc, Target } from './world';
import type { Enemy } from './enemy';

const barGeo = new THREE.PlaneGeometry(1, 0.09);
let nextWeaponId = 1;

export class Weapon {
  readonly uid = nextWeaponId++;
  readonly def: WeaponDef;
  hp: number;
  maxHp: number;
  dupStacks = 0; // upgrades from duplicate triggers while element resonance < Lv5
  body: Matter.Body;
  group = new THREE.Group();
  sprite: THREE.Mesh;
  private mat: THREE.MeshStandardMaterial;
  private hpFill: THREE.Mesh;
  private ultFill: THREE.Mesh;
  private webMesh: THREE.Mesh;
  private offset: { x: number; y: number };
  hitCd = 0;
  icd = 0;
  lastHit: number;
  invulnUntil: number;
  webbedUntil = 0;
  ultTimer: number; // cd type: seconds remaining
  charge = 0; // charge type
  passiveT = 0;
  auraUntil = 0;
  auraT = 0;
  hurtFlash = 0;
  dead = false;
  readonly scale: number;

  constructor(public m: Mine, id: WeaponId, public power: number, x: number, y: number) {
    this.def = WEAPONS[id];
    this.maxHp = this.hp = this.def.baseHp * (1 + (power - 1) * 0.6) * m.mods.hpMul;
    this.scale = this.def.scale * Math.min(1.28, 1 + (power - 1) * 0.2);
    const s = this.scale;

    if (id === 'core_orb') {
      this.body = Matter.Bodies.circle(x, y, 18 * s, {
        friction: 0.1,
        restitution: 0.75,
        frictionAir: 0.02,
        collisionFilter: { group: -1 },
        label: 'weapon',
      });
      this.offset = { x: 0, y: 0 };
    } else {
      // compound body: diagonal shaft (handle bottom-left -> head top-right) + perpendicular head
      const L = 52 * s, T = 10 * s;
      const shaft = Matter.Bodies.rectangle(0, 0, L, T, { angle: -Math.PI / 4 });
      const hd = L / 2 - 9 * s;
      const head = Matter.Bodies.rectangle(Math.SQRT1_2 * hd, -Math.SQRT1_2 * hd, 30 * s, 14 * s, { angle: Math.PI / 4 });
      this.body = Matter.Body.create({
        parts: [shaft, head],
        friction: id === 'drill' ? 0.08 : 0.25,
        restitution: id === 'spear' || id === 'drill' ? 0.04 : id === 'katar' ? 0.58 : 0.45,
        frictionAir: 0.004,
        collisionFilter: { group: -1 },
        label: 'weapon',
      });
      this.offset = { x: -this.body.position.x, y: -this.body.position.y };
      Matter.Body.setPosition(this.body, { x, y });
    }
    this.body.plugin = { kind: 'weapon', w: this };
    Matter.Body.setAngle(this.body, Math.random() * Math.PI * 2);
    Matter.Body.setAngularVelocity(this.body, (Math.random() - 0.5) * 0.3);
    Matter.Body.setVelocity(this.body, { x: (Math.random() - 0.5) * 2, y: 1 });

    const tex = Tex.weapon(id);
    const meta = weaponElementMeta(this.def.element);
    this.mat = new THREE.MeshStandardMaterial({
      map: tex, transparent: true, alphaTest: 0.5,
      emissive: 0xffffff, emissiveMap: tex, emissiveIntensity: id === 'excalibur' ? 0.25 : 0.18,
      side: THREE.DoubleSide,
    });
    this.sprite = new THREE.Mesh(new THREE.PlaneGeometry(1.5 * s, 1.5 * s), this.mat);
    this.group.add(this.sprite);
    const bg = new THREE.Mesh(barGeo, new THREE.MeshBasicMaterial({ color: 0x101010 }));
    bg.scale.set(1.1, this.def.ult ? 1.6 : 1.0, 1);
    bg.position.set(0, 0.95 * s, 0.01);
    this.hpFill = new THREE.Mesh(barGeo, new THREE.MeshBasicMaterial({ color: id === 'excalibur' ? 0xffe066 : 0x5aff6a }));
    this.hpFill.position.set(0, 0.95 * s + (this.def.ult ? 0.03 : 0), 0.02);
    this.ultFill = new THREE.Mesh(barGeo, new THREE.MeshBasicMaterial({ color: new THREE.Color(meta.color).multiplyScalar(1.15) }));
    this.ultFill.scale.y = 0.5;
    this.ultFill.position.set(0, 0.95 * s - 0.045, 0.02);
    this.ultFill.visible = !!this.def.ult;
    this.group.add(bg, this.hpFill, this.ultFill);
    this.webMesh = new THREE.Mesh(new THREE.PlaneGeometry(1.4, 1.4), new THREE.MeshBasicMaterial({ map: Tex.web(), transparent: true, depthWrite: false }));
    this.webMesh.position.z = 0.05;
    this.webMesh.visible = false;
    this.group.add(this.webMesh);
    this.group.position.z = 0.6;

    this.lastHit = m.time;
    this.invulnUntil = m.time + m.mods.spawnInvuln;
    this.ultTimer = this.def.ult?.type === 'cd' ? this.def.ult.value * m.mods.ultMul * 0.6 : 0;
  }

  get x() { return this.body.position.x; }
  get y() { return this.body.position.y; }
  get dupMul() {
    const per = this.def.id === 'excalibur' ? BAL.holyDupBoost : BAL.dupBoost;
    return 1 + this.dupStacks * per;
  }
  get dmg() { return this.def.dmg * this.power * this.dupMul * this.m.mods.dmgMul; }
  get hitInterval() {
    return this.def.id === 'drill' || this.def.id === 'katar' ? BAL.hitCooldown * 0.5 : BAL.hitCooldown;
  }
  get reso(): number {
    if (this.def.element === 'holy') {
      return Math.max(...Object.values(this.m.resonance));
    }
    return this.m.resonance[this.def.element];
  }
  get invuln() { return this.m.time < this.invulnUntil || this.m.time < this.m.shieldUntil; }
  get ultReady() {
    const u = this.def.ult;
    if (!u) return 0;
    return u.type === 'cd'
      ? 1 - Math.max(0, this.ultTimer) / (u.value * this.m.mods.ultMul)
      : Math.min(1, this.charge / (u.value * this.m.mods.ultMul));
  }
  src(kind: DmgSrc['kind'] = 'hit', crit = false): DmgSrc {
    return { element: this.def.element, kind, weapon: this, crit };
  }

  /** Called when player triggers this weapon again before element resonance reaches Lv5. */
  upgradeFromDuplicate(newPower: number): boolean {
    if (newPower > this.power) {
      const oldMax = this.maxHp;
      this.power = newPower;
      this.maxHp = this.def.baseHp * (1 + (this.power - 1) * 0.6) * this.m.mods.hpMul;
      if (this.maxHp < oldMax) this.maxHp = oldMax;
    }
    const upgraded = this.dupStacks < BAL.maxDupStacks;
    if (upgraded) this.dupStacks++;
    const healAmt = this.maxHp * BAL.dupHealPct;
    this.hp = Math.min(this.maxHp, this.hp + healAmt);
    const p = this.m.to3(this.x, this.y);
    const meta = weaponElementMeta(this.def.element);
    this.m.fx.ring(p.x, p.y, 1.35, meta.color, 0.45);
    const healPctText = Math.round(BAL.dupHealPct * 100);
    this.m.fx.text(
      p.x, p.y + 0.9,
      upgraded ? `${this.def.name} +${Math.round((this.dupMul - 1) * 100)}% & +${healPctText}%HP！` : `${this.def.name} +${healPctText}%HP！`,
      meta.css, 1.25, 0.46,
    );
    return upgraded;
  }

  /** Render + per-frame logic (passives, ult timers, lifespan drain). */
  update(dt: number) {
    const m = this.m;
    this.hitCd -= dt;
    this.icd -= dt;

    // Lifespan decay for Excalibur (ignores invulnerability as it's its natural timer, hearts still heal it)
    if (this.def.lifespanDecay) {
      this.hp -= this.maxHp * BAL.holyDecayPct * dt;
    }

    const b = this.body;
    // Magnetic orb floats gently downward
    if (this.def.id === 'core_orb') {
      Matter.Body.setVelocity(b, {
        x: Math.max(-3.5, Math.min(3.5, b.velocity.x)),
        y: Math.min(m.time < this.webbedUntil ? 0.8 : 2.1, b.velocity.y),
      });
      Matter.Body.setAngularVelocity(b, 0.06);
    } else {
      const maxFall = m.time < this.webbedUntil ? 1.2 : BAL.maxFall;
      if (b.velocity.y > maxFall || Math.abs(b.velocity.x) > 7) {
        Matter.Body.setVelocity(b, { x: Math.max(-7, Math.min(7, b.velocity.x)), y: Math.min(maxFall, b.velocity.y) });
      }
    }
    if (m.time < this.webbedUntil) Matter.Body.setAngularVelocity(b, b.angularVelocity * 0.9);

    // Ice spear: keep pointing down, don't bounce
    if (this.def.id === 'spear' || this.def.id === 'icicle') {
      const target = (3 * Math.PI) / 4;
      let d = target - b.angle;
      d = Math.atan2(Math.sin(d), Math.cos(d));
      Matter.Body.setAngle(b, b.angle + d * Math.min(1, dt * (this.def.id === 'spear' ? 6 : 3)));
      if (this.def.id === 'spear') Matter.Body.setAngularVelocity(b, 0);
    }
    // Drill: spin fast and press straight down
    if (this.def.id === 'drill') {
      Matter.Body.setAngularVelocity(b, 0.35);
      Matter.Body.setVelocity(b, { x: b.velocity.x * 0.9, y: Math.max(b.velocity.y, 2.6) });
    }

    // Hop when idle (e.g. lying on bedrock or the boss floor)
    const speed = Math.hypot(b.velocity.x, b.velocity.y);
    if (m.time - this.lastHit > BAL.hopIdle && speed < 2) {
      this.lastHit = m.time;
      const e = m.nearestEnemy(this.x, this.y, 9 * m.B);
      const dx = e ? (e.x - this.x) / m.B : (Math.random() - 0.5) * 4;
      Matter.Body.setVelocity(b, { x: Math.max(-4.5, Math.min(4.5, dx * 1.1)), y: this.def.id === 'core_orb' ? -3.2 : -6.5 });
      Matter.Body.setAngularVelocity(b, (Math.random() - 0.5) * 0.4);
    }
    tick(m, this, dt);

    // ---- visuals (low-strobe!)
    const cos = Math.cos(b.angle), sin = Math.sin(b.angle);
    const cx = b.position.x + this.offset.x * cos - this.offset.y * sin;
    const cy = b.position.y + this.offset.x * sin + this.offset.y * cos;
    const p = m.to3(cx, cy);
    this.group.position.x = p.x;
    this.group.position.y = p.y;
    this.sprite.rotation.z = -b.angle;
    const f = Math.max(0, this.hp / this.maxHp);
    this.hpFill.scale.x = f;
    this.hpFill.position.x = -(1 - f) / 2;
    if (this.def.lifespanDecay) {
      (this.hpFill.material as THREE.MeshBasicMaterial).color.setHex(f > 0.35 ? 0xffe066 : 0xff7040);
    } else {
      (this.hpFill.material as THREE.MeshBasicMaterial).color.setHex(f > 0.5 ? 0x5aff6a : f > 0.25 ? 0xffd040 : 0xff4040);
    }
    if (this.def.ult) {
      const u = this.ultReady;
      this.ultFill.scale.x = u;
      this.ultFill.position.x = -(1 - u) / 2;
    }
    this.webMesh.visible = m.time < this.webbedUntil;
    if (this.hurtFlash > 0) {
      this.hurtFlash -= dt;
      this.mat.color.setRGB(1.25, 0.72, 0.72);
    } else if (this.invuln) {
      const k = 1.1 + Math.sin(m.time * 2.5) * 0.06;
      this.mat.color.setRGB(k, k, 0.86 * k);
    } else this.mat.color.setRGB(1, 1, 1);
    this.mat.emissiveIntensity = this.ultReady >= 1 ? 0.28 + Math.sin(m.time * 2.5) * 0.05 : this.def.id === 'excalibur' ? 0.25 : 0.18;
  }
}

// =====================================================================================
// Abilities for all 25 weapons
// =====================================================================================

function targetCell(m: Mine, t: Target): [number, number] {
  return t.kind === 'block' ? [t.r, t.c] : m.cellOf(t.e.x, t.e.y);
}

function axeRadius(m: Mine, w: Weapon): number {
  const base = w.power >= 1.45 ? 2 : 1;
  return Math.round(base * RESONANCE.rangeMul(w.reso)) + m.mods.aoeBonus;
}

function poisonTarget(m: Mine, w: Weapon, t: Target, stacks: number, plague: boolean, maxStacks = 5, venom = false) {
  const dur = 4 + RESONANCE.poisonDurAdd(w.reso);
  const dps = w.dmg * 0.4;
  if (t.kind === 'block') m.poisonCell(t.r, t.c, dps * stacks, dur, plague, venom);
  else m.poisonEnemy(t.e, dps, dur, stacks, plague, maxStacks, venom);
}

export function onHit(m: Mine, w: Weapon, t: Target) {
  const d = w.dmg;
  const [tr, tc] = targetCell(m, t);
  const p = m.to3(...m.center(tr, tc));
  switch (w.def.id) {
    // -------- A. 低階武器（消 3） --------
    case 'pick':
      if (t.kind === 'block') m.damageCell(t.r, t.c, d * 0.3, w.src('hit'));
      break;
    case 'baton':
      if (w.icd > 0) break;
      w.icd = 0.55;
      zap(m, w, 1 + Math.floor(RESONANCE.chainAdd(w.reso) / 2), 4, d * 0.6);
      break;
    case 'needle':
      if (t.kind === 'block') m.poisonCell(t.r, t.c, d * 0.3, 2.5 + RESONANCE.poisonDurAdd(w.reso) * 0.5, false);
      else m.poisonEnemy(t.e, d * 0.3, 2.5 + RESONANCE.poisonDurAdd(w.reso) * 0.5, 1, false);
      break;
    case 'torch':
      if (Math.random() < 0.3) {
        const dps = d * 0.4 * RESONANCE.burnMul(w.reso);
        if (t.kind === 'block') m.burnCell(t.r, t.c, dps, 2);
        else m.burnEnemy(t.e, dps, 2);
      }
      break;
    case 'icicle':
      if (t.kind === 'enemy') m.freezeEnemy(t.e, 0.8 + RESONANCE.freezeAdd(w.reso) * 0.5);
      else m.frostCell(t.r, t.c, 2);
      break;

    // -------- B. 初階武器（消 4~5） --------
    case 'axe': {
      if (w.icd > 0) break;
      w.icd = 0.4;
      const r = axeRadius(m, w);
      m.damageSquare(tr, tc, r, d * 0.45, w.src('hit'));
      m.fx.rect(p.x, p.y, r * 2 + 1, r * 2 + 1, 0xd8a060, 0.2, 0.9);
      w.charge++;
      break;
    }
    case 'blade': {
      if (w.icd > 0) break;
      w.icd = 0.45;
      const n = 2 + Math.floor(Math.random() * 3) + RESONANCE.chainAdd(w.reso) + m.mods.thunderChainBonus;
      zap(m, w, n, 5, d * 0.8);
      break;
    }
    case 'dagger':
      poisonTarget(m, w, t, 1, false);
      w.charge++;
      break;
    case 'sword': {
      const dps = d * 0.5 * RESONANCE.burnMul(w.reso);
      if (t.kind === 'block') m.burnCell(t.r, t.c, dps, 3);
      else m.burnEnemy(t.e, dps, 3);
      break;
    }
    case 'spear': {
      if (t.kind === 'block') {
        if (w.icd > 0) break;
        w.icd = 0.35;
        const n = Math.min(7, 3 + Math.round((w.power - 1) * 6));
        for (let i = 1; i <= n; i++) m.damageCell(tr + i, tc, d * 0.5, w.src('ice'));
        const top = m.to3(...m.center(tr, tc)), bot = m.to3(...m.center(tr + n, tc));
        m.fx.rect(top.x, (top.y + bot.y) / 2, 0.35, top.y - bot.y + 1, 0x8ae8ff, 0.18, 1.0);
      } else m.freezeEnemy(t.e, 2 + RESONANCE.freezeAdd(w.reso));
      break;
    }

    // -------- C. 高階武器（消 6~8） --------
    case 'hammer':
      if (w.icd > 0) break;
      w.icd = 0.9;
      shockwave(m, w, tr, d * 0.5);
      break;
    case 'halberd':
      w.charge += d;
      break;
    case 'scythe':
      poisonTarget(m, w, t, 2, true);
      break;
    case 'meteor':
      if (w.icd > 0) break;
      w.icd = 0.7;
      m.explode(w.x, w.y + m.B * 0.4, 1.6 + m.mods.aoeBonus, d, w.src('explosion'));
      Matter.Body.setVelocity(w.body, { x: w.body.velocity.x + (Math.random() - 0.5) * 3, y: -5 });
      w.charge++;
      break;
    case 'boomerang':
      if (w.icd > 0) break;
      w.icd = 1.2;
      for (let i = 0; i < 3; i++) {
        const ang = Math.PI / 2 + (i - 1) * 0.9 + (Math.random() - 0.5) * 0.5;
        const sp = 8 * m.B;
        m.addProjectile({ kind: 'shard', x: w.x, y: w.y, vx: Math.cos(ang) * sp, vy: Math.sin(ang) * sp, r: 10, life: 0.55, from: 'weapon', dmg: d * 0.6, src: w.src('ice'), pierce: 2 });
      }
      w.charge++;
      break;

    // -------- D. 累計武器（每滿 30 個同色） --------
    case 'drill':
      if (t.kind === 'block') {
        m.damageCell(tr + 1, tc, d * 0.55, w.src('hit'));
      }
      w.charge++;
      break;
    case 'core_orb':
      break;
    case 'katar': {
      // Base hit already dealt 1x `d`; on crit, deal an additional 1x `d` (= 2x total!)
      const poisoned = t.kind === 'block' ? m.isCellPoisoned(t.r, t.c) : t.e.poisonUntil > m.time;
      const critChance = poisoned ? 0.6 : 0.3;
      if (Math.random() < critChance) {
        if (t.kind === 'block') m.damageCell(t.r, t.c, d, w.src('hit', true));
        else m.damageEnemy(t.e, d, w.src('hit', true));
        m.fx.text(p.x + (Math.random() - 0.5) * 0.4, p.y + 0.5, '爆擊 ×2!', '#ffd84a', 0.65, 0.38);
        m.fx.ring(p.x, p.y, 0.85, 0xffe066, 0.22);
      }
      poisonTarget(m, w, t, 1, false);
      w.charge++;
      break;
    }
    case 'flameblade': {
      if (w.icd > 0) break;
      w.icd = 0.38;
      const r = Math.round(1 * RESONANCE.rangeMul(w.reso));
      const dps = d * 0.55 * RESONANCE.burnMul(w.reso);
      for (let rr = tr - r; rr <= tr + r; rr++)
        for (let cc = tc - r; cc <= tc + r; cc++) {
          m.damageCell(rr, cc, d * 0.35, w.src('fire'));
          m.burnCell(rr, cc, dps, 3.5);
        }
      for (const e of m.enemiesInRadius(w.x, w.y, (r + 0.8) * m.B)) {
        m.damageEnemy(e, d * 0.35, w.src('fire'));
        m.burnEnemy(e, dps, 3.5);
      }
      m.fx.rect(p.x, p.y, r * 2 + 1, r * 2 + 1, 0xff6a2a, 0.22, 0.95);
      break;
    }
    case 'frostclaw': {
      if (w.icd > 0) break;
      w.icd = 0.42;
      const fDur = 1.6 + RESONANCE.freezeAdd(w.reso);
      for (let rr = tr - 1; rr <= tr + 1; rr++)
        for (let cc = tc - 1; cc <= tc + 1; cc++) {
          m.frostCell(rr, cc, 4 + RESONANCE.freezeAdd(w.reso));
          m.damageCell(rr, cc, d * 0.3, w.src('ice'));
        }
      for (const e of m.enemiesInRadius(w.x, w.y, 1.8 * m.B)) {
        m.freezeEnemy(e, fDur);
        m.damageEnemy(e, d * 0.35, w.src('ice'));
      }
      m.fx.rect(p.x, p.y, 3, 3, 0x7adcff, 0.2, 0.85);
      break;
    }

    // -------- E. 傳說武器 & 聖劍 --------
    case 'titan': {
      if (w.icd > 0) break;
      w.icd = 0.65;
      const r = Math.round(2 * RESONANCE.rangeMul(w.reso)) + m.mods.aoeBonus;
      m.damageSquare(tr, tc, r, d * 0.6, w.src('explosion'));
      for (const e of m.enemiesInRadius(w.x, w.y, (r + 0.6) * m.B)) m.stunEnemy(e, 1.5);
      m.fx.rect(p.x, p.y, r * 2 + 1, r * 2 + 1, 0xe0a868, 0.25, 0.95);
      m.fx.shake = Math.max(m.fx.shake, 0.16);
      break;
    }
    case 'mjolnir':
      if (w.icd > 0) break;
      w.icd = 0.4;
      zap(m, w, 3 + RESONANCE.chainAdd(w.reso) + m.mods.thunderChainBonus, 6, d * 0.7);
      break;
    case 'hydra':
      poisonTarget(m, w, t, 3, true, 10, true);
      w.charge++;
      break;
    case 'dragon': {
      if (w.icd > 0) break;
      w.icd = 0.65;
      const rad = 2.8 + m.mods.aoeBonus;
      m.explode(w.x, w.y + m.B * 0.3, rad, d * 0.9, w.src('explosion'));
      const dps = d * 0.55 * RESONANCE.burnMul(w.reso);
      for (let rr = tr - 2; rr <= tr + 2; rr++) for (let cc = tc - 2; cc <= tc + 2; cc++) m.burnCell(rr, cc, dps, 3.5);
      for (const e of m.enemiesInRadius(w.x, w.y, (rad + 0.5) * m.B)) m.burnEnemy(e, dps, 3.5);
      Matter.Body.setVelocity(w.body, { x: w.body.velocity.x + (Math.random() - 0.5) * 3, y: -4.8 });
      break;
    }
    case 'excalibur': {
      if (w.icd > 0) break;
      w.icd = 0.36;
      // Holy Cross: full row + vertical column
      for (let c = 1; c < m.cols - 1; c++) m.damageCell(tr, c, d * 0.55, w.src('holy'));
      for (let r = tr - 3; r <= tr + 6; r++) m.damageCell(r, tc, d * 0.55, w.src('holy'));
      for (const e of [...m.enemies]) {
        const [er, ec] = m.cellOf(e.x, e.y);
        if (Math.abs(er - tr) <= 1 || Math.abs(ec - tc) <= 1) m.damageEnemy(e, d * 0.65, w.src('holy'));
      }
      const rowC = m.to3(...m.center(tr, 4));
      const colC = m.to3(...m.center(tr + 1, tc));
      m.fx.rect(rowC.x, rowC.y, m.cols - 2, 0.36, 0xffe888, 0.22, 0.95);
      m.fx.rect(colC.x, colC.y, 0.38, 10, 0xffe888, 0.22, 0.95);
      break;
    }
  }
}

function shockwave(m: Mine, w: Weapon, row: number, dmg: number) {
  for (let c = 1; c < m.cols - 1; c++) m.damageCell(row, c, dmg, w.src('shock'));
  for (const e of m.enemies) {
    const [er] = m.cellOf(e.x, e.y);
    if (Math.abs(er - row) <= 1) {
      m.damageEnemy(e, dmg, w.src('shock'));
      m.stunEnemy(e, 1.5);
    }
  }
  const p = m.to3(...m.center(row, 4));
  m.fx.rect(p.x, p.y, m.cols - 2, 0.4, 0xe0b070, 0.25, 0.85);
  m.fx.shake = Math.max(m.fx.shake, 0.14);
}

function zap(m: Mine, w: Weapon, n: number, rangeBlocks: number, dmg: number) {
  const from = m.to3(w.x, w.y);
  for (const t of m.randomTargets(w.x, w.y, rangeBlocks * m.B, n)) {
    const [tx, ty] = t.kind === 'block' ? m.center(t.r, t.c) : [t.e.x, t.e.y];
    m.fx.bolt(from, m.to3(tx, ty));
    if (t.kind === 'block') m.damageCell(t.r, t.c, dmg, w.src('thunder'));
    else m.damageEnemy(t.e, dmg, w.src('thunder'));
  }
}

/** Lightning strike down a column; enemies hit chain to others. Returns damage dealt (approx). */
function columnStrike(m: Mine, w: Weapon, col: number, fromRow: number, rows: number, dmg: number): number {
  let dealt = 0;
  for (let r = fromRow; r < fromRow + rows; r++) if (m.damageCell(r, col, dmg, w.src('thunder')) !== null) dealt += dmg;
  const hit: Enemy[] = [];
  for (const e of m.enemies) {
    const [er, ec] = m.cellOf(e.x, e.y);
    if (Math.abs(ec - col) <= (e.isBoss ? 1 : 0) && er >= fromRow - 1 && er < fromRow + rows) hit.push(e);
  }
  const chain = 2 + RESONANCE.chainAdd(w.reso) + m.mods.thunderChainBonus;
  for (const e of hit) {
    m.damageEnemy(e, dmg, w.src('thunder'));
    dealt += dmg;
    let last = e;
    const done = new Set<Enemy>([e]);
    for (let k = 0; k < chain; k++) {
      const nxt = m.enemies.find((o) => !done.has(o) && Math.hypot(o.x - last.x, o.y - last.y) < 5 * m.B);
      if (!nxt) break;
      done.add(nxt);
      m.fx.bolt(m.to3(last.x, last.y), m.to3(nxt.x, nxt.y), 0xffe880, 0.08);
      m.damageEnemy(nxt, dmg * 0.7, w.src('thunder'));
      dealt += dmg * 0.7;
      last = nxt;
    }
  }
  const top = m.to3(...m.center(fromRow - 6, col));
  const bot = m.to3(...m.center(fromRow + rows - 1, col));
  m.fx.bolt(top, bot, 0xffe878, 0.12, 0.25);
  m.fx.rect(bot.x, (top.y + bot.y) / 2, 0.5, top.y - bot.y, 0xffe898, 0.18, 0.75);
  return dealt;
}

export function tick(m: Mine, w: Weapon, dt: number) {
  const d = w.dmg;
  const [wr, wc] = m.cellOf(w.x, w.y);
  if (w.def.id === 'halberd') {
    w.passiveT += dt;
    if (w.passiveT >= 3) {
      w.passiveT = 0;
      w.charge += columnStrike(m, w, Math.max(1, Math.min(m.cols - 2, wc)), wr + 1, 8, d * 1.2);
    }
  } else if (w.def.id === 'mjolnir') {
    w.passiveT += dt;
    if (w.passiveT >= 1.5) {
      w.passiveT = 0;
      const baseCol = Math.max(1, Math.min(m.cols - 2, wc));
      const cols = new Set<number>([baseCol]);
      while (cols.size < 3) cols.add(1 + Math.floor(Math.random() * (m.cols - 2)));
      for (const c of cols) columnStrike(m, w, c, wr, 9, d * 0.95);
    }
  } else if (w.def.id === 'core_orb') {
    w.passiveT += dt;
    if (w.passiveT >= 0.5) {
      w.passiveT = 0;
      zap(m, w, 2 + Math.floor(RESONANCE.chainAdd(w.reso) / 2), 4.5, d * 0.65);
    }
  }
  if (w.auraUntil > m.time) {
    w.auraT -= dt;
    if (w.auraT <= 0) {
      w.auraT = 0.5;
      const dur = 4 + RESONANCE.poisonDurAdd(w.reso);
      for (let r = wr - 2; r <= wr + 2; r++) for (let c = wc - 2; c <= wc + 2; c++) m.poisonCell(r, c, d * 0.3, dur, true);
      for (const e of m.enemiesInRadius(w.x, w.y, 2.5 * m.B)) m.poisonEnemy(e, d * 0.3, dur, 1, true);
      const p = m.to3(w.x, w.y);
      m.fx.ring(p.x, p.y, 2.5, 0x7ee05a, 0.45);
    }
  }
  // ultimate
  const u = w.def.ult;
  if (!u) return;
  if (u.type === 'cd') {
    w.ultTimer -= dt;
    if (w.ultTimer <= 0) {
      w.ultTimer = u.value * m.mods.ultMul;
      castUlt(m, w);
    }
  } else if (w.charge >= u.value * m.mods.ultMul) {
    w.charge = 0;
    castUlt(m, w);
  }
}

export function castUlt(m: Mine, w: Weapon) {
  if (!w.def.ult) return;
  const d = w.dmg;
  const [wr, wc] = m.cellOf(w.x, w.y);
  const p = m.to3(w.x, w.y);
  const meta = weaponElementMeta(w.def.element);
  m.fx.text(p.x, p.y + 1.1, w.def.ult.name + '！', meta.css, 1.35, 0.56);
  switch (w.def.id) {
    case 'axe': {
      const r = 3 + m.mods.aoeBonus;
      m.damageSquare(wr + 1, wc, r, d * 2, w.src('explosion'));
      const c = m.to3(...m.center(wr + 1, wc));
      m.fx.rect(c.x, c.y, r * 2 + 1, r * 2 + 1, 0xd8a060, 0.35, 1.0);
      m.fx.explosion(c.x, c.y, 2.4, 0xd8a060);
      break;
    }
    case 'hammer':
      for (let i = 1; i <= 3; i++) m.schedule(0.3 * (i - 1), () => !w.dead && shockwave(m, w, m.cellOf(w.x, w.y)[0] + i, d * 1.2));
      break;
    case 'blade':
      zap(m, w, 10 + m.mods.thunderChainBonus, 8, d * 1.5);
      break;
    case 'halberd':
      for (let i = 0; i < 10; i++)
        m.schedule(0.5 * i, () => {
          if (w.dead) return;
          const [r] = m.cellOf(w.x, w.y);
          columnStrike(m, w, 1 + Math.floor(Math.random() * (m.cols - 2)), r + 1, 8, d * 1.5);
        });
      break;
    case 'dagger': {
      const dur = 4 + RESONANCE.poisonDurAdd(w.reso);
      for (let r = wr - 2; r <= wr + 2; r++) for (let c = wc - 2; c <= wc + 2; c++) m.poisonCell(r, c, d * 0.4 * 3, dur, false);
      for (const e of m.enemiesInRadius(w.x, w.y, 2.5 * m.B)) m.poisonEnemy(e, d * 0.4, dur, 3, false);
      m.fx.ring(p.x, p.y, 2.8, 0x7ee05a, 0.6);
      m.fx.rect(p.x, p.y, 5, 5, 0x5ad030, 0.4, 0.85);
      break;
    }
    case 'scythe':
      w.auraUntil = m.time + 8;
      w.auraT = 0;
      break;
    case 'sword': {
      const dps = d * 0.5 * RESONANCE.burnMul(w.reso);
      for (let r = wr + 1; r <= wr + 10; r++) {
        m.damageCell(r, wc, d * 1.5, w.src('fire'));
        m.burnCell(r, wc, dps, 4);
        for (const e of m.enemies) {
          const [er, ec] = m.cellOf(e.x, e.y);
          if (er === r && Math.abs(ec - wc) <= 1) { m.damageEnemy(e, d * 1.5, w.src('fire')); m.burnEnemy(e, dps, 4); }
        }
      }
      const bot = m.to3(...m.center(wr + 10, wc));
      m.fx.rect(p.x, (p.y + bot.y) / 2, 1.3, p.y - bot.y, 0xff6a2a, 0.5, 1.0);
      m.fx.light(p.x, (p.y + bot.y) / 2, 0xff6a2a, 5, 0.5, 7);
      break;
    }
    case 'meteor': {
      const top = m.viewTopY();
      for (let i = 0; i < 5; i++) {
        const x = m.B * (1.5 + Math.random() * (m.cols - 3));
        m.schedule(0.15 * i, () =>
          m.addProjectile({ kind: 'meteor', x, y: top - m.B, vx: 0, vy: 10 * m.B, r: 14, life: 4, from: 'weapon', dmg: d * 1.2, src: w.src('explosion') }),
        );
      }
      break;
    }
    case 'spear': {
      for (let r = wr + 1; r <= wr + 15; r++) {
        m.damageCell(r, wc, d * 2, w.src('ice'));
        for (const e of m.enemies) {
          const [er, ec] = m.cellOf(e.x, e.y);
          if (er === r && Math.abs(ec - wc) <= (e.isBoss ? 1 : 0)) { m.damageEnemy(e, d * 2, w.src('ice')); m.freezeEnemy(e, 3); }
        }
      }
      const bot = m.to3(...m.center(wr + 15, wc));
      m.fx.rect(p.x, (p.y + bot.y) / 2, 0.65, p.y - bot.y, 0x8ae8ff, 0.45, 1.05);
      m.fx.light(p.x, (p.y + bot.y) / 2, 0x8ae8ff, 5, 0.45, 7);
      break;
    }
    case 'boomerang': {
      for (const e of m.enemies) if (Math.abs(e.y - w.y) < 8 * m.B) { m.freezeEnemy(e, 3 + RESONANCE.freezeAdd(w.reso)); m.damageEnemy(e, d, w.src('ice')); }
      for (let r = wr - 3; r <= wr + 4; r++) for (let c = 1; c < m.cols - 1; c++) m.damageCell(r, c, d * 0.5, w.src('ice'));
      m.fx.rect(p.x, p.y, m.cols, 9, 0x9ae8ff, 0.5, 0.85);
      break;
    }

    // -------- Cumulative Ultimates --------
    case 'drill': {
      const c1 = Math.max(1, Math.min(m.cols - 3, wc));
      for (let r = wr + 1; r <= wr + 8; r++) {
        for (const c of [c1, c1 + 1]) m.damageCell(r, c, d * 2.2, w.src('hit'));
      }
      for (const e of m.enemies) {
        const [er, ec] = m.cellOf(e.x, e.y);
        if (er >= wr && er <= wr + 8 && ec >= c1 - 1 && ec <= c1 + 2) m.damageEnemy(e, d * 2.4, w.src('hit'));
      }
      const bot = m.to3(...m.center(wr + 8, c1 + 0.5));
      m.fx.rect(bot.x, (p.y + bot.y) / 2, 2.0, p.y - bot.y + 1, 0xd8a868, 0.4, 0.95);
      break;
    }
    case 'core_orb': {
      m.fx.ring(p.x, p.y, 4.5, 0x80e8ff, 0.5);
      zap(m, w, 12 + m.mods.thunderChainBonus, 7, d * 1.6);
      if (m.boss && m.boss.shelled && Math.hypot(m.boss.x - w.x, m.boss.y - w.y) < 9 * m.B) m.boss.breakShell();
      break;
    }
    case 'katar': {
      const targets = m.randomTargets(w.x, w.y, 6 * m.B, 6);
      const dur = 4 + RESONANCE.poisonDurAdd(w.reso);
      targets.forEach((t, idx) => {
        m.schedule(idx * 0.06, () => {
          if (w.dead) return;
          const [tx, ty] = t.kind === 'block' ? m.center(t.r, t.c) : [t.e.x, t.e.y];
          const tp = m.to3(tx, ty);
          m.fx.bolt(p, tp, 0x90ff78, 0.07, 0.18);
          m.fx.text(tp.x, tp.y + 0.35, '×2!', '#ffd84a', 0.55, 0.34);
          if (t.kind === 'block') {
            m.damageCell(t.r, t.c, d * 2.4, w.src('hit', true));
            m.poisonCell(t.r, t.c, d * 0.5, dur, false);
          } else {
            m.damageEnemy(t.e, d * 2.4, w.src('hit', true));
            m.poisonEnemy(t.e, d * 0.5, dur, 2, false);
          }
        });
      });
      break;
    }
    case 'flameblade': {
      const r = 2 + m.mods.aoeBonus;
      const dps = d * 0.65 * RESONANCE.burnMul(w.reso);
      m.damageSquare(wr, wc, r, d * 1.6, w.src('fire'));
      for (let rr = wr - r; rr <= wr + r; rr++) for (let cc = wc - r; cc <= wc + r; cc++) m.burnCell(rr, cc, dps, 4.5);
      for (const e of m.enemiesInRadius(w.x, w.y, (r + 0.8) * m.B)) m.burnEnemy(e, dps, 4.5);
      m.fx.explosion(p.x, p.y, r + 0.4, 0xff6428);
      break;
    }
    case 'frostclaw': {
      const fDur = 2.5 + RESONANCE.freezeAdd(w.reso);
      for (let rr = wr - 2; rr <= wr + 2; rr++)
        for (let cc = wc - 2; cc <= wc + 2; cc++) {
          m.frostCell(rr, cc, 6);
          m.damageCell(rr, cc, d * 1.5, w.src('ice'));
        }
      for (const e of m.enemiesInRadius(w.x, w.y, 3 * m.B)) {
        m.freezeEnemy(e, fDur);
        m.damageEnemy(e, d * 1.8, w.src('ice'));
      }
      m.fx.ring(p.x, p.y, 3.0, 0x80dcff, 0.5);
      m.fx.rect(p.x, p.y, 5, 5, 0x80dcff, 0.35, 0.9);
      break;
    }

    // -------- Legendary & Holy Ultimates --------
    case 'titan': {
      for (let r = wr + 1; r <= wr + 6; r++)
        for (let c = 1; c < m.cols - 1; c++) m.damageCell(r, c, d * 2.2, w.src('explosion'));
      for (const e of [...m.enemies]) {
        const [er] = m.cellOf(e.x, e.y);
        if (er >= wr && er <= wr + 7) { m.damageEnemy(e, d * 2.2, w.src('explosion')); m.stunEnemy(e, 2); }
      }
      const mid = m.to3(...m.center(wr + 3, 4));
      m.fx.rect(mid.x, mid.y, m.cols - 2, 6, 0xe0a868, 0.45, 1.0);
      m.fx.explosion(mid.x, mid.y, 3.0, 0xd89850);
      break;
    }
    case 'mjolnir': {
      for (let i = 0; i < 5; i++)
        m.schedule(i * 0.12, () => {
          if (w.dead) return;
          zap(m, w, 4, 9, d * 1.5);
        });
      break;
    }
    case 'hydra': {
      const dur = 6 + RESONANCE.poisonDurAdd(w.reso);
      m.damageSquare(wr, wc, 3, d * 1.4, w.src('hit'));
      for (let rr = wr - 3; rr <= wr + 3; rr++)
        for (let cc = wc - 3; cc <= wc + 3; cc++) m.poisonCell(rr, cc, d * 0.6 * 6, dur, true, true);
      for (const e of m.enemiesInRadius(w.x, w.y, 3.8 * m.B)) m.poisonEnemy(e, d * 0.5, dur, 6, true, 10, true);
      m.fx.ring(p.x, p.y, 3.6, 0x58e838, 0.55);
      m.fx.rect(p.x, p.y, 7, 7, 0x58e838, 0.35, 0.85);
      break;
    }
    case 'dragon': {
      const cCenter = Math.max(2, Math.min(m.cols - 3, wc));
      const dps = d * 0.7 * RESONANCE.burnMul(w.reso);
      for (let r = wr + 1; r <= wr + 12; r++)
        for (let c = cCenter - 1; c <= cCenter + 1; c++) {
          m.damageCell(r, c, d * 2.0, w.src('explosion'));
          m.burnCell(r, c, dps, 5);
        }
      for (const e of [...m.enemies]) {
        const [er, ec] = m.cellOf(e.x, e.y);
        if (er >= wr && er <= wr + 12 && Math.abs(ec - cCenter) <= 2) {
          m.damageEnemy(e, d * 2.2, w.src('explosion'));
          m.burnEnemy(e, dps, 5);
        }
      }
      const top = m.to3(...m.center(wr + 1, cCenter)), bot = m.to3(...m.center(wr + 12, cCenter));
      m.fx.rect(top.x, (top.y + bot.y) / 2, 3.0, top.y - bot.y + 1, 0xff5a28, 0.5, 1.05);
      break;
    }
    case 'excalibur': {
      for (const e of [...m.enemies]) {
        if (Math.abs(e.y - w.y) < 10 * m.B) m.damageEnemy(e, d * 1.8, w.src('holy'));
      }
      for (let r = wr + 1; r <= wr + 5; r++)
        for (let c = 1; c < m.cols - 1; c++) m.damageCell(r, c, d * 1.3, w.src('holy'));
      const mid = m.to3(...m.center(wr + 2, 4));
      m.fx.ring(p.x, p.y, 4.2, 0xffe888, 0.5);
      m.fx.rect(mid.x, mid.y, m.cols - 2, 5.5, 0xffe888, 0.4, 0.95);
      break;
    }
  }
}
