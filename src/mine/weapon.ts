import * as THREE from 'three';
import Matter from 'matter-js';
import { BAL, ELEMENT_INFO, RESONANCE } from '../data/config';
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
    const tierHp = this.def.tier === 2 ? BAL.t2Hp : BAL.t1Hp;
    this.maxHp = this.hp = tierHp * (1 + (power - 1) * 0.6) * m.mods.hpMul;
    this.scale = (this.def.tier === 2 ? 1.15 : 1) * Math.min(1.3, 1 + (power - 1) * 0.25);
    const s = this.scale;
    // compound body: diagonal shaft (handle bottom-left -> head top-right) + perpendicular head
    const L = 52 * s, T = 10 * s;
    const shaft = Matter.Bodies.rectangle(0, 0, L, T, { angle: -Math.PI / 4 });
    const hd = L / 2 - 9 * s;
    const head = Matter.Bodies.rectangle(Math.SQRT1_2 * hd, -Math.SQRT1_2 * hd, 30 * s, 14 * s, { angle: Math.PI / 4 });
    this.body = Matter.Body.create({
      parts: [shaft, head],
      friction: 0.25,
      restitution: id === 'spear' ? 0.05 : 0.45,
      frictionAir: 0.004,
      collisionFilter: { group: -1 },
      label: 'weapon',
    });
    this.offset = { x: -this.body.position.x, y: -this.body.position.y };
    this.body.plugin = { kind: 'weapon', w: this };
    Matter.Body.setPosition(this.body, { x, y });
    Matter.Body.setAngle(this.body, Math.random() * Math.PI * 2);
    Matter.Body.setAngularVelocity(this.body, (Math.random() - 0.5) * 0.3);
    Matter.Body.setVelocity(this.body, { x: (Math.random() - 0.5) * 2, y: 1 });

    const tex = Tex.weapon(id);
    this.mat = new THREE.MeshStandardMaterial({ map: tex, transparent: true, alphaTest: 0.5, emissive: 0xffffff, emissiveMap: tex, emissiveIntensity: 0.35, side: THREE.DoubleSide });
    this.sprite = new THREE.Mesh(new THREE.PlaneGeometry(1.5 * s, 1.5 * s), this.mat);
    this.group.add(this.sprite);
    const bg = new THREE.Mesh(barGeo, new THREE.MeshBasicMaterial({ color: 0x101010 }));
    bg.scale.set(1.1, 1.6, 1);
    bg.position.set(0, 0.95 * s, 0.01);
    this.hpFill = new THREE.Mesh(barGeo, new THREE.MeshBasicMaterial({ color: 0x5aff6a }));
    this.hpFill.position.set(0, 0.95 * s + 0.03, 0.02);
    this.ultFill = new THREE.Mesh(barGeo, new THREE.MeshBasicMaterial({ color: new THREE.Color(ELEMENT_INFO[this.def.element].color).multiplyScalar(1.6), toneMapped: false }));
    this.ultFill.scale.y = 0.5;
    this.ultFill.position.set(0, 0.95 * s - 0.045, 0.02);
    this.group.add(bg, this.hpFill, this.ultFill);
    this.webMesh = new THREE.Mesh(new THREE.PlaneGeometry(1.4, 1.4), new THREE.MeshBasicMaterial({ map: Tex.web(), transparent: true, depthWrite: false }));
    this.webMesh.position.z = 0.05;
    this.webMesh.visible = false;
    this.group.add(this.webMesh);
    this.group.position.z = 0.6;

    this.lastHit = m.time;
    this.invulnUntil = m.time + m.mods.spawnInvuln;
    this.ultTimer = this.def.ult.type === 'cd' ? this.def.ult.value * m.mods.ultMul * 0.6 : 0;
  }

  get x() { return this.body.position.x; }
  get y() { return this.body.position.y; }
  get dmg() { return this.def.dmg * this.power * this.m.mods.dmgMul; }
  get reso() { return this.m.resonance[this.def.element]; }
  get invuln() { return this.m.time < this.invulnUntil || this.m.time < this.m.shieldUntil; }
  get ultReady() {
    return this.def.ult.type === 'cd' ? 1 - Math.max(0, this.ultTimer) / (this.def.ult.value * this.m.mods.ultMul) : Math.min(1, this.charge / (this.def.ult.value * this.m.mods.ultMul));
  }
  src(kind: DmgSrc['kind'] = 'hit'): DmgSrc {
    return { element: this.def.element, kind, weapon: this };
  }

  /** Render + per-frame logic (passives, ult timers). */
  update(dt: number) {
    const m = this.m;
    this.hitCd -= dt;
    this.icd -= dt;
    const b = this.body;
    // terminal velocity
    const maxFall = m.time < this.webbedUntil ? 1.2 : BAL.maxFall;
    if (b.velocity.y > maxFall || Math.abs(b.velocity.x) > 7) {
      Matter.Body.setVelocity(b, { x: Math.max(-7, Math.min(7, b.velocity.x)), y: Math.min(maxFall, b.velocity.y) });
    }
    if (m.time < this.webbedUntil) Matter.Body.setAngularVelocity(b, b.angularVelocity * 0.9);
    // ice spear: keep pointing down, don't bounce
    if (this.def.id === 'spear') {
      const target = (3 * Math.PI) / 4;
      let d = target - b.angle;
      d = Math.atan2(Math.sin(d), Math.cos(d));
      Matter.Body.setAngle(b, b.angle + d * Math.min(1, dt * 6));
      Matter.Body.setAngularVelocity(b, 0);
    }
    // hop when idle (e.g. lying on bedrock or the boss floor)
    const speed = Math.hypot(b.velocity.x, b.velocity.y);
    if (m.time - this.lastHit > BAL.hopIdle && speed < 2) {
      this.lastHit = m.time;
      const e = m.nearestEnemy(this.x, this.y, 9 * m.B);
      const dx = e ? (e.x - this.x) / m.B : (Math.random() - 0.5) * 4;
      Matter.Body.setVelocity(b, { x: Math.max(-4.5, Math.min(4.5, dx * 1.1)), y: -6.5 });
      Matter.Body.setAngularVelocity(b, (Math.random() - 0.5) * 0.4);
    }
    tick(m, this, dt);

    // ---- visuals
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
    (this.hpFill.material as THREE.MeshBasicMaterial).color.setHex(f > 0.5 ? 0x5aff6a : f > 0.25 ? 0xffd040 : 0xff4040);
    const u = this.ultReady;
    this.ultFill.scale.x = u;
    this.ultFill.position.x = -(1 - u) / 2;
    this.webMesh.visible = m.time < this.webbedUntil;
    if (this.hurtFlash > 0) {
      this.hurtFlash -= dt;
      this.mat.color.setRGB(2, 0.5, 0.5);
    } else if (this.invuln) {
      const k = 1.3 + Math.sin(m.time * 12) * 0.4;
      this.mat.color.setRGB(k, k, 0.8 * k);
    } else this.mat.color.setRGB(1, 1, 1);
    this.mat.emissiveIntensity = u >= 1 ? 0.6 + Math.sin(m.time * 10) * 0.3 : 0.35;
  }
}

// =====================================================================================
// Abilities
// =====================================================================================

function targetCell(m: Mine, t: Target): [number, number] {
  return t.kind === 'block' ? [t.r, t.c] : m.cellOf(t.e.x, t.e.y);
}

function axeRadius(m: Mine, w: Weapon): number {
  const base = w.power >= 1.45 ? 2 : 1;
  return Math.round(base * RESONANCE.rangeMul(w.reso)) + m.mods.aoeBonus;
}

function poisonTarget(m: Mine, w: Weapon, t: Target, stacks: number, plague: boolean) {
  const dur = 4 + RESONANCE.poisonDurAdd(w.reso);
  const dps = w.dmg * 0.4;
  if (t.kind === 'block') m.poisonCell(t.r, t.c, dps * stacks, dur, plague);
  else m.poisonEnemy(t.e, dps, dur, stacks, plague);
}

export function onHit(m: Mine, w: Weapon, t: Target) {
  const d = w.dmg;
  const [tr, tc] = targetCell(m, t);
  const p = m.to3(...m.center(tr, tc));
  switch (w.def.id) {
    case 'axe': {
      if (w.icd > 0) break;
      w.icd = 0.4;
      const r = axeRadius(m, w);
      m.damageSquare(tr, tc, r, d * 0.45, w.src('hit'));
      m.fx.rect(p.x, p.y, r * 2 + 1, r * 2 + 1, 0xd8a060, 0.2, 1.2);
      w.charge++;
      break;
    }
    case 'hammer': {
      if (w.icd > 0) break;
      w.icd = 0.9;
      shockwave(m, w, tr, d * 0.5);
      break;
    }
    case 'blade': {
      if (w.icd > 0) break;
      w.icd = 0.45;
      const n = 2 + Math.floor(Math.random() * 3) + RESONANCE.chainAdd(w.reso) + m.mods.thunderChainBonus;
      zap(m, w, n, 5, d * 0.8);
      break;
    }
    case 'halberd':
      w.charge += d;
      break;
    case 'dagger':
      poisonTarget(m, w, t, 1, false);
      w.charge++;
      break;
    case 'scythe':
      poisonTarget(m, w, t, 2, true);
      break;
    case 'sword': {
      const dur = 3;
      const dps = d * 0.5 * RESONANCE.burnMul(w.reso);
      if (t.kind === 'block') m.burnCell(t.r, t.c, dps, dur);
      else m.burnEnemy(t.e, dps, dur);
      break;
    }
    case 'meteor': {
      if (w.icd > 0) break;
      w.icd = 0.7;
      m.explode(w.x, w.y + m.B * 0.4, 1.6 + m.mods.aoeBonus, d, w.src('explosion'));
      Matter.Body.setVelocity(w.body, { x: w.body.velocity.x + (Math.random() - 0.5) * 3, y: -5 });
      w.charge++;
      break;
    }
    case 'spear': {
      if (t.kind === 'block') {
        if (w.icd > 0) break;
        w.icd = 0.35;
        const n = Math.min(7, 3 + Math.round((w.power - 1) * 6));
        for (let i = 1; i <= n; i++) m.damageCell(tr + i, tc, d * 0.5, w.src('ice'));
        const top = m.to3(...m.center(tr, tc)), bot = m.to3(...m.center(tr + n, tc));
        m.fx.rect(top.x, (top.y + bot.y) / 2, 0.35, top.y - bot.y + 1, 0x8ae8ff, 0.18, 1.6);
      } else m.freezeEnemy(t.e, 2 + RESONANCE.freezeAdd(w.reso));
      break;
    }
    case 'boomerang': {
      if (w.icd > 0) break;
      w.icd = 1.2;
      for (let i = 0; i < 3; i++) {
        const ang = Math.PI / 2 + (i - 1) * 0.9 + (Math.random() - 0.5) * 0.5; // mostly downward (screen +y)
        const sp = 8 * m.B;
        m.addProjectile({ kind: 'shard', x: w.x, y: w.y, vx: Math.cos(ang) * sp, vy: Math.sin(ang) * sp, r: 10, life: 0.55, from: 'weapon', dmg: d * 0.6, src: w.src('ice'), pierce: 2 });
      }
      w.charge++;
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
  m.fx.rect(p.x, p.y, m.cols - 2, 0.4, 0xe0b070, 0.25, 0.9);
  m.fx.shake = Math.max(m.fx.shake, 0.15);
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
      m.fx.bolt(m.to3(last.x, last.y), m.to3(nxt.x, nxt.y), 0xfff6a0, 0.08);
      m.damageEnemy(nxt, dmg * 0.7, w.src('thunder'));
      dealt += dmg * 0.7;
      last = nxt;
    }
  }
  const top = m.to3(...m.center(fromRow - 6, col));
  const bot = m.to3(...m.center(fromRow + rows - 1, col));
  m.fx.bolt(top, bot, 0xfff27a, 0.13, 0.3);
  m.fx.rect(bot.x, (top.y + bot.y) / 2, 0.6, top.y - bot.y, 0xfff0a0, 0.2, 0.8);
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
  }
  if (w.auraUntil > m.time) {
    w.auraT -= dt;
    if (w.auraT <= 0) {
      w.auraT = 0.5;
      const dur = 4 + RESONANCE.poisonDurAdd(w.reso);
      for (let r = wr - 2; r <= wr + 2; r++) for (let c = wc - 2; c <= wc + 2; c++) m.poisonCell(r, c, d * 0.3, dur, true);
      for (const e of m.enemiesInRadius(w.x, w.y, 2.5 * m.B)) m.poisonEnemy(e, d * 0.3, dur, 1, true);
      const p = m.to3(w.x, w.y);
      m.fx.ring(p.x, p.y, 2.5, 0x7ee05a, 0.5);
    }
  }
  // ultimate
  const u = w.def.ult;
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
  const d = w.dmg;
  const [wr, wc] = m.cellOf(w.x, w.y);
  const p = m.to3(w.x, w.y);
  m.fx.text(p.x, p.y + 1.2, w.def.ult.name + '！', ELEMENT_INFO[w.def.element].css, 1.4, 0.6);
  switch (w.def.id) {
    case 'axe': {
      const r = 3 + m.mods.aoeBonus;
      m.damageSquare(wr + 1, wc, r, d * 2, w.src('explosion'));
      const c = m.to3(...m.center(wr + 1, wc));
      m.fx.rect(c.x, c.y, r * 2 + 1, r * 2 + 1, 0xd8a060, 0.4, 2);
      m.fx.explosion(c.x, c.y, 2.5, 0xd8a060);
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
      m.fx.ring(p.x, p.y, 2.8, 0x7ee05a, 0.7);
      m.fx.rect(p.x, p.y, 5, 5, 0x5ad030, 0.5, 1);
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
      m.fx.rect(p.x, (p.y + bot.y) / 2, 1.4, p.y - bot.y, 0xff6a2a, 0.6, 2);
      m.fx.light(p.x, (p.y + bot.y) / 2, 0xff6a2a, 12, 0.6, 8);
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
      m.fx.rect(p.x, (p.y + bot.y) / 2, 0.7, p.y - bot.y, 0x8ae8ff, 0.5, 2.2);
      m.fx.light(p.x, (p.y + bot.y) / 2, 0x8ae8ff, 10, 0.5, 8);
      break;
    }
    case 'boomerang': {
      for (const e of m.enemies) if (Math.abs(e.y - w.y) < 8 * m.B) { m.freezeEnemy(e, 3 + RESONANCE.freezeAdd(w.reso)); m.damageEnemy(e, d, w.src('ice')); }
      for (let r = wr - 3; r <= wr + 4; r++) for (let c = 1; c < m.cols - 1; c++) m.damageCell(r, c, d * 0.5, w.src('ice'));
      m.fx.rect(p.x, p.y, m.cols, 9, 0x9ae8ff, 0.6, 1.2);
      m.fx.light(p.x, p.y, 0x9ae8ff, 14, 0.6, 10);
      break;
    }
  }
}
