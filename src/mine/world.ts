// The right-hand "Falling Pickaxe" part: Matter.js physics + Three.js HD-2D-style rendering.
import * as THREE from 'three';
import Matter from 'matter-js';
import { BAL, BLOCKS, weaponElementMeta, type BlockType, type Element, type EnemyKind, type LevelDef, type Mods, type WeaponElement } from '../data/config';
import { WEAPONS, type WeaponId } from '../data/weapons';
import { Tex } from '../gfx/pixel';
import { Particles } from '../gfx/particles';
import { Fx, type LightReq } from './fx';
import { Weapon, onHit } from './weapon';
import { Enemy, Golem } from './enemy';

export interface DmgSrc {
  element?: WeaponElement;
  kind: 'hit' | 'explosion' | 'thunder' | 'dot' | 'ice' | 'shock' | 'fire' | 'holy' | 'enemy';
  weapon?: Weapon;
  crit?: boolean;
}
export type Target = { kind: 'block'; r: number; c: number } | { kind: 'enemy'; e: Enemy };

interface BlockState { type: BlockType; hp: number; maxHp: number; inst: number; body: Matter.Body | null }
interface CellStatus {
  poisonDps: number;
  poisonUntil: number;
  plague: boolean;
  venomUntil: number;
  burnDps: number;
  burnUntil: number;
  frostUntil: number;
}
export interface Projectile {
  kind: 'arrow' | 'web' | 'rock' | 'shard' | 'meteor';
  x: number; y: number; vx: number; vy: number; r: number; life: number;
  from: 'enemy' | 'weapon';
  dmg: number;
  src?: DmgSrc;
  pierce?: number;
  passThrough?: boolean;
  mesh?: THREE.Object3D;
  hit?: Set<unknown>;
}

export interface MineCallbacks {
  onEnd: (win: boolean, reason: string) => void;
  onResource: (ore: string) => void;
}

const BLOCK_TINT: Partial<Record<BlockType, number>> = {
  dirt: 0x7a5232, stone: 0x7d7d82, deepslate: 0x4a4a52, obsidian: 0x3a2050, core: 0xc070ff,
  coal: 0x333333, iron: 0xd8b89a, copper: 0xe0763a, gold: 0xffd84a, redstone: 0xff2a2a, lapis: 0x2a5aff, diamond: 0x5affee, emerald: 0x2aff6a,
};

export class Mine {
  readonly B = BAL.block;
  readonly cols = BAL.cols;
  readonly rows: number;
  readonly scene = new THREE.Scene();
  readonly camera = new THREE.PerspectiveCamera(30, 1, 0.5, 80);
  readonly fx: Fx;
  time = 0;
  timeLeft: number;
  readonly engine: Matter.Engine;
  private grid: (BlockState | null)[];
  private status = new Map<number, CellStatus>();
  private damaged = new Set<number>();
  private typeMeshes = new Map<BlockType, THREE.InstancedMesh>();
  private activeRows = new Set<number>();
  weapons: Weapon[] = [];
  enemies: Enemy[] = [];
  boss: Golem | null = null;
  private projectiles: Projectile[] = [];
  private scheduled: { t: number; fn: () => void }[] = [];
  private pendingHits = new Map<Weapon, Target>();
  private acc = 0;
  lavaY = -1.5 * BAL.block;
  deepestY: number;
  shieldUntil = 0;
  private camY = 0;
  private camTargetY = 0;
  private aspect = 1;
  private lastFocusY: number;
  private lava: THREE.Mesh;
  private lavaCrust: THREE.Mesh;
  private lavaGlow: THREE.Mesh;
  private lights: THREE.PointLight[] = [];
  private hemi: THREE.HemisphereLight;
  private cracks: THREE.Mesh[] = [];
  private debris = new Particles(1500, 0.13, false);
  private sparks = new Particles(1200, 0.11, true);
  private coreRow = -1;
  ended = false;
  readonly goalRow: number;
  private tmpMat = new THREE.Matrix4();
  private tmpCol = new THREE.Color();
  private zeroMat = new THREE.Matrix4().makeScale(0, 0, 0);

  constructor(
    public level: LevelDef,
    public mods: Mods,
    public resonance: Record<Element, number>,
    private cb: MineCallbacks,
  ) {
    this.fx = new Fx(this.scene);
    this.timeLeft = level.time + mods.timeBonus;
    const bottomRows = level.goal === 'core' ? 2 : 7;
    this.rows = BAL.airRows + level.depth + bottomRows;
    this.goalRow = BAL.airRows + level.depth;
    this.deepestY = (BAL.airRows - 0.5) * this.B;
    this.lastFocusY = this.deepestY;
    this.camY = this.camTargetY = -this.deepestY / this.B;

    this.engine = Matter.Engine.create({ gravity: { x: 0, y: BAL.gravity, scale: 0.001 } });
    this.engine.positionIterations = 6;
    this.engine.velocityIterations = 4;
    Matter.Events.on(this.engine, 'collisionStart', (e) => this.onCollide(e));
    Matter.Events.on(this.engine, 'collisionActive', (e) => this.onCollide(e));
    // tall bedrock walls
    const H = this.rows * this.B;
    for (const x of [this.B / 2, (this.cols - 0.5) * this.B]) {
      const wall = Matter.Bodies.rectangle(x, H / 2 - 400, this.B, H + 800, { isStatic: true, friction: 0.1, restitution: 0.3 });
      wall.plugin = { kind: 'wall' };
      Matter.Composite.add(this.engine.world, wall);
    }

    this.grid = new Array(this.cols * this.rows).fill(null);
    this.setupScene();
    this.generate();
    this.lava = this.makeLava();
    this.lavaCrust = this.makeLavaCrust();
    this.lavaGlow = this.makeLavaGlow();
    this.hemi = this.scene.children.find((o) => o instanceof THREE.HemisphereLight) as THREE.HemisphereLight;
  }

  // ------------------------------------------------------------------ helpers
  idx(r: number, c: number) { return r * this.cols + c; }
  inB(r: number, c: number) { return r >= 0 && c >= 0 && r < this.rows && c < this.cols; }
  block(r: number, c: number): BlockState | null { return this.inB(r, c) ? this.grid[this.idx(r, c)] : null; }
  isSolid(r: number, c: number): boolean {
    if (c <= 0 || c >= this.cols - 1) return true;
    if (r < 0) return false;
    if (r >= this.rows) return true;
    return !!this.grid[this.idx(r, c)];
  }
  cellOf(x: number, y: number): [number, number] { return [Math.floor(y / this.B), Math.floor(x / this.B)]; }
  center(r: number, c: number): [number, number] { return [(c + 0.5) * this.B, (r + 0.5) * this.B]; }
  to3(x: number, y: number): THREE.Vector2 { return new THREE.Vector2(x / this.B - this.cols / 2, -y / this.B); }
  schedule(delay: number, fn: () => void) { this.scheduled.push({ t: delay, fn }); }

  // ------------------------------------------------------------------ scene
  private setupScene() {
    const s = this.scene;
    s.background = new THREE.Color(0x07050a);
    s.fog = new THREE.Fog(0x07050a, 18, 42);
    s.add(new THREE.HemisphereLight(0xbfb0ff, 0x3a2418, 1.0));
    const dir = new THREE.DirectionalLight(0xffe8d0, 1.1);
    dir.position.set(3, 8, 10);
    s.add(dir);
    for (let i = 0; i < 6; i++) {
      const l = new THREE.PointLight(0xffffff, 0, 6, 1.6);
      s.add(l);
      this.lights.push(l);
    }
    s.add(this.debris.points, this.sparks.points);
    const crackGeo = new THREE.PlaneGeometry(1.002, 1.002);
    for (let i = 0; i < 30; i++) {
      const m = new THREE.Mesh(crackGeo, new THREE.MeshBasicMaterial({ map: Tex.crack(0), transparent: true, depthWrite: false, polygonOffset: true, polygonOffsetFactor: -2 }));
      m.visible = false;
      s.add(m);
      this.cracks.push(m);
    }
  }

  private makeLava(): THREE.Mesh {
    const tex = Tex.lava().clone();
    tex.wrapS = tex.wrapT = THREE.RepeatWrapping;
    tex.repeat.set(4, 20);
    tex.needsUpdate = true;
    const m = new THREE.Mesh(
      new THREE.BoxGeometry(this.cols + 12, 60, 1.3),
      new THREE.MeshBasicMaterial({ map: tex, color: new THREE.Color(1.35, 1.0, 0.85), transparent: true, opacity: 0.84 }),
    );
    m.position.z = 0.25;
    this.scene.add(m);
    return m;
  }
  private makeLavaCrust(): THREE.Mesh {
    const m = new THREE.Mesh(
      new THREE.PlaneGeometry(this.cols + 12, 0.35),
      new THREE.MeshBasicMaterial({ color: new THREE.Color(1.35, 0.85, 0.3), transparent: true, opacity: 0.92, depthWrite: false }),
    );
    m.position.z = 0.92;
    this.scene.add(m);
    return m;
  }
  private makeLavaGlow(): THREE.Mesh {
    const m = new THREE.Mesh(
      new THREE.PlaneGeometry(this.cols + 12, 2.8),
      new THREE.MeshBasicMaterial({ map: Tex.glow(), color: new THREE.Color(1.5, 0.6, 0.18), transparent: true, opacity: 0.75, blending: THREE.AdditiveBlending, depthWrite: false }),
    );
    m.position.z = 0.95;
    this.scene.add(m);
    return m;
  }

  // ------------------------------------------------------------------ generation
  private generate() {
    const L = this.level;
    const A = BAL.airRows;
    const types: (BlockType | null)[] = new Array(this.cols * this.rows).fill(null);
    for (let r = 0; r < this.rows; r++) {
      types[this.idx(r, 0)] = 'bedrock';
      types[this.idx(r, this.cols - 1)] = 'bedrock';
    }
    for (let r = A; r < A + L.depth; r++) {
      const f = (r - A) / L.depth;
      for (let c = 1; c < this.cols - 1; c++) {
        let t: BlockType = f < 0.08 ? 'dirt' : f < 0.5 ? 'stone' : 'deepslate';
        const rr = Math.random();
        if (f > 0.55 && rr < 0.035) t = 'obsidian';
        else if (f >= 0.08 && rr < 0.15) t = pickOre(f);
        types[this.idx(r, c)] = t;
      }
    }
    // caves
    const caves: [number, number][] = [];
    for (let i = 0; i < L.caves; i++) {
      const rc = A + 6 + Math.floor(Math.random() * (L.depth - 12));
      const cc = 2 + Math.floor(Math.random() * 5);
      const rx = 1 + Math.random() * 1.5, ry = 0.6 + Math.random() * 0.8;
      for (let r = Math.floor(rc - ry - 1); r <= rc + ry + 1; r++)
        for (let c = 1; c < this.cols - 1; c++) {
          const dx = (c - cc) / (rx + 0.5), dy = (r - rc) / (ry + 0.5);
          if (dx * dx + dy * dy <= 1 && r >= A + 3 && r < A + L.depth - 2) types[this.idx(r, c)] = null;
        }
      caves.push([rc, cc]);
    }
    // goal
    if (L.goal === 'core') {
      this.coreRow = A + L.depth;
      for (let c = 1; c < this.cols - 1; c++) {
        types[this.idx(this.coreRow, c)] = 'core';
        types[this.idx(this.coreRow + 1, c)] = 'bedrock';
      }
    } else {
      for (let c = 1; c < this.cols - 1; c++) {
        types[this.idx(A + L.depth + 5, c)] = 'bedrock';
        types[this.idx(A + L.depth + 6, c)] = 'bedrock';
      }
    }

    // instanced meshes per type
    const counts = new Map<BlockType, number>();
    for (const t of types) if (t) counts.set(t, (counts.get(t) ?? 0) + 1);
    const geo = new THREE.BoxGeometry(1, 1, 1);
    for (const [t, n] of counts) {
      const mat = new THREE.MeshStandardMaterial({ map: Tex.block(t), roughness: 0.92, metalness: 0 });
      if (t === 'core') {
        mat.emissive = new THREE.Color(0xffffff);
        mat.emissiveMap = Tex.block(t);
        mat.emissiveIntensity = 0.9;
      }
      if (t === 'diamond' || t === 'emerald' || t === 'redstone' || t === 'gold' || t === 'lapis') {
        mat.emissive = new THREE.Color(0xffffff);
        mat.emissiveMap = Tex.block(t);
        mat.emissiveIntensity = 0.12;
      }
      const im = new THREE.InstancedMesh(geo, mat, n);
      im.instanceMatrix.setUsage(THREE.DynamicDrawUsage);
      im.count = 0;
      this.typeMeshes.set(t, im);
      this.scene.add(im);
    }
    for (let r = 0; r < this.rows; r++)
      for (let c = 0; c < this.cols; c++) {
        const t = types[this.idx(r, c)];
        if (!t) continue;
        const im = this.typeMeshes.get(t)!;
        const inst = im.count++;
        const p = this.to3(...this.center(r, c));
        this.tmpMat.makeTranslation(p.x, p.y, 0);
        im.setMatrixAt(inst, this.tmpMat);
        im.setColorAt(inst, this.tmpCol.setRGB(1, 1, 1));
        const hp = t === 'bedrock' ? Infinity : BLOCKS[t].hp * L.hpMul;
        this.grid[this.idx(r, c)] = { type: t, hp, maxHp: hp, inst, body: null };
      }
    for (const im of this.typeMeshes.values()) {
      im.instanceMatrix.needsUpdate = true;
      if (im.instanceColor) im.instanceColor.needsUpdate = true;
      im.computeBoundingSphere();
    }

    // back wall + decorative outer rock
    const backRows = this.rows + 14;
    const back = new THREE.InstancedMesh(geo, new THREE.MeshStandardMaterial({ map: Tex.backWall(), color: 0xa09088, roughness: 1 }), this.cols * backRows);
    let k = 0;
    for (let r = -14; r < this.rows; r++)
      for (let c = 0; c < this.cols; c++) {
        const p = this.to3(...this.center(r, c));
        this.tmpMat.makeTranslation(p.x, p.y, -1);
        back.setMatrixAt(k++, this.tmpMat);
      }
    this.scene.add(back);
    const sideCols = 7;
    const outer = new THREE.InstancedMesh(geo, new THREE.MeshStandardMaterial({ map: Tex.block('deepslate'), color: 0x8a8090, roughness: 1 }), sideCols * 2 * backRows);
    k = 0;
    for (let r = -14; r < this.rows; r++)
      for (let i = 1; i <= sideCols; i++)
        for (const c of [-i, this.cols - 1 + i]) {
          const p = this.to3(...this.center(r, c));
          this.tmpMat.makeTranslation(p.x, p.y, (i % 2) * 0.15 - 0.05);
          outer.setMatrixAt(k++, this.tmpMat);
        }
    this.scene.add(outer);

    // enemies in caves
    const weights = Object.entries(L.enemies) as [EnemyKind, number][];
    const totalW = weights.reduce((s, [, w]) => s + w, 0);
    for (const [rc, cc] of caves) {
      const floors: [number, number][] = [];
      for (let r = rc - 2; r <= rc + 2; r++)
        for (let c = Math.max(1, cc - 3); c <= Math.min(this.cols - 2, cc + 3); c++)
          if (this.inB(r, c) && !this.block(r, c) && this.isSolid(r + 1, c) && r >= BAL.airRows + 3) floors.push([r, c]);
      const n = Math.min(floors.length, 1 + (Math.random() < 0.5 ? 1 : 0));
      for (let i = 0; i < n; i++) {
        const [r, c] = floors.splice(Math.floor(Math.random() * floors.length), 1)[0];
        let pick = Math.random() * totalW;
        let kind: EnemyKind = weights[0][0];
        for (const [kk, w] of weights) { if (pick < w) { kind = kk; break; } pick -= w; }
        this.spawnEnemy(kind, (c + 0.5) * this.B, (r + 1) * this.B - this.B * 0.4);
      }
    }
    if (L.goal === 'boss') {
      const floorY = (BAL.airRows + L.depth + 5) * this.B;
      const g = new Golem(this, (this.cols / 2) * this.B, floorY - this.B * 1.5, L.enemyHpMul / 1.6);
      this.boss = g;
      this.addEnemy(g);
      Matter.Composite.add(this.engine.world, g.body);
    }
  }

  spawnEnemy(kind: EnemyKind, x: number, y: number) {
    const e = new Enemy(this, kind, x, y, this.level.enemyHpMul);
    this.addEnemy(e);
    Matter.Composite.add(this.engine.world, e.body);
    return e;
  }
  private addEnemy(e: Enemy) {
    this.enemies.push(e);
    this.scene.add(e.group);
    e.update(0);
  }

  // ------------------------------------------------------------------ weapons
  /** Checks whether multiple copies of `id` are unlocked (element resonance === Lv5). */
  canMultiCopy(id: WeaponId): boolean {
    const def = WEAPONS[id];
    if (def.element === 'holy') {
      return Object.values(this.resonance).some((lv) => lv >= BAL.resonanceMaxLv);
    }
    return this.resonance[def.element] >= BAL.resonanceMaxLv;
  }

  /**
   * Acquires a weapon: if element resonance < Lv5 and a copy of `id` is already alive,
   * heals it to full and boosts its damage instead of spawning a duplicate.
   */
  acquireWeapon(id: WeaponId, power: number, forceSpawn = false): { weapon: Weapon; mode: 'spawned' | 'upgraded' } {
    if (!forceSpawn && !this.canMultiCopy(id)) {
      const existing = this.weapons.find((w) => !w.dead && w.def.id === id);
      if (existing) {
        existing.upgradeFromDuplicate(power);
        return { weapon: existing, mode: 'upgraded' };
      }
    }
    return { weapon: this.spawnWeapon(id, power), mode: 'spawned' };
  }

  spawnWeapon(id: WeaponId, power: number): Weapon {
    const [x, y] = this.findSpawnPoint();
    const w = new Weapon(this, id, power, x, y);
    // Give brief protection if spawning very close to lava
    if (y - this.lavaY < this.B * 3) w.invulnUntil = Math.max(w.invulnUntil, this.time + 1.5);
    this.weapons.push(w);
    this.scene.add(w.group);
    Matter.Composite.add(this.engine.world, w.body);
    this.updateActiveRows();
    const p = this.to3(x, y);
    const meta = weaponElementMeta(w.def.element);
    this.fx.ring(p.x, p.y, 1.4, meta.color, 0.5);
    this.fx.text(p.x, p.y - 0.9, w.def.name, meta.css, 1.3, 0.48);
    this.sparks.burst(p.x, p.y, 0.8, 22, meta.color, 3.6, 0.55, 0);
    // safety cap: prefer replacing lowest-HP low-tier weapon first
    if (this.weapons.length > BAL.maxWeapons) {
      const lowCandidates = this.weapons.filter((o) => o !== w && o.def.category === 'low');
      const pool = lowCandidates.length ? lowCandidates : this.weapons.filter((o) => o !== w);
      const weakest = pool.reduce((a, b) => (a.hp / a.maxHp < b.hp / b.maxHp ? a : b));
      this.killWeapon(weakest);
    }
    return w;
  }

  private findSpawnPoint(): [number, number] {
    const [, half] = this.viewHalf();
    const camRow = Math.floor(-this.camY);
    const lavaRow = Math.floor(this.lavaY / this.B);
    const deepRow = Math.floor(this.deepestY / this.B);
    const start = Math.max(0, camRow - Math.floor(half) + 2, lavaRow + 2);
    for (let r = Math.min(start, deepRow); r <= deepRow + 1; r++) {
      const empties: number[] = [];
      for (let c = 1; c < this.cols - 1; c++) {
        if ((!this.isSolid(r, c) && !this.isSolid(r + 1, c)) || (!this.isSolid(r, c) && r === deepRow)) empties.push(c);
      }
      if (empties.length) {
        const c = empties[Math.floor(Math.random() * empties.length)];
        return this.center(r, c);
      }
    }
    const deepest = this.deepestWeapon();
    if (deepest) return [deepest.x, Math.max(this.lavaY + this.B * 0.5, deepest.y - this.B)];
    return [this.cols * this.B / 2, Math.max(this.lavaY + this.B * 0.5, this.deepestY - this.B)];
  }

  deepestWeapon(): Weapon | null {
    let best: Weapon | null = null;
    for (const w of this.weapons) if (!best || w.y > best.y) best = w;
    return best;
  }

  healAll(pct: number) {
    for (const w of this.weapons) {
      w.hp = Math.min(w.maxHp, w.hp + w.maxHp * pct);
      const p = this.to3(w.x, w.y);
      this.sparks.burst(p.x, p.y, 0.8, 10, 0xff6aa0, 2.5, 0.6, 2);
    }
  }
  shield(sec: number) {
    this.shieldUntil = Math.max(this.shieldUntil, this.time) + sec;
    for (const w of this.weapons) {
      const p = this.to3(w.x, w.y);
      this.fx.ring(p.x, p.y, 1.2, 0xffe0f0, 0.6);
    }
  }

  hurtWeapon(w: Weapon, amount: number) {
    if (w.dead || w.invuln) return;
    w.hp -= amount;
    w.hurtFlash = 0.12;
    if (w.hp <= 0) this.killWeapon(w);
  }

  private killWeapon(w: Weapon) {
    if (w.dead) return;
    w.dead = true;
    Matter.Composite.remove(this.engine.world, w.body);
    this.scene.remove(w.group);
    const p = this.to3(w.x, w.y);
    const meta = weaponElementMeta(w.def.element);
    this.sparks.burst(p.x, p.y, 0.8, 24, meta.color, 4.5, 0.75, -6);
    this.debris.burst(p.x, p.y, 0.8, 16, 0x8a8a8a, 4, 0.8);
    this.fx.text(p.x, p.y + 0.6, w.def.name + (w.def.lifespanDecay ? ' 消散' : ' 碎裂'), '#ff9080', 1.15, 0.38);
    this.weapons = this.weapons.filter((o) => o !== w);
  }

  // ------------------------------------------------------------------ physics
  private onCollide(e: Matter.IEventCollision<Matter.Engine>) {
    for (const pair of e.pairs) {
      const a = pair.bodyA.parent, b = pair.bodyB.parent;
      const pa = a.plugin as { kind?: string; w?: Weapon; r?: number; c?: number; e?: Enemy };
      const pb = b.plugin as typeof pa;
      let w: Weapon | undefined, other: typeof pa | undefined;
      if (pa?.kind === 'weapon') { w = pa.w; other = pb; } else if (pb?.kind === 'weapon') { w = pb.w; other = pa; }
      if (!w || !other || w.hitCd > 0 || this.pendingHits.has(w)) continue;
      if (other.kind === 'block') this.pendingHits.set(w, { kind: 'block', r: other.r!, c: other.c! });
      else if (other.kind === 'enemy') this.pendingHits.set(w, { kind: 'enemy', e: other.e! });
    }
  }

  private processHits() {
    for (const [w, t] of this.pendingHits) {
      if (w.dead) continue;
      w.hitCd = w.hitInterval;
      if (t.kind === 'block') {
        const b = this.block(t.r, t.c);
        if (!b) continue;
        if (!w.invuln && !w.def.lifespanDecay) w.hp -= BLOCKS[b.type].wear * this.mods.wearMul;
        if (b.type === 'bedrock') continue;
        w.lastHit = this.time;
        this.damageCell(t.r, t.c, w.dmg, w.src('hit'));
        const [x, y] = this.center(t.r, t.c);
        const p = this.to3((x + w.x) / 2, (y + w.y) / 2);
        this.debris.burst(p.x, p.y, 0.6, 3, BLOCK_TINT[b.type] ?? 0x888888, 2, 0.4);
      } else {
        if (t.e.dead) continue;
        w.lastHit = this.time;
        this.damageEnemy(t.e, w.dmg, w.src('hit'));
      }
      onHit(this, w, t);
      if (w.hp <= 0) this.killWeapon(w);
    }
    this.pendingHits.clear();
  }

  private updateActiveRows() {
    const need = new Set<number>();
    for (const w of this.weapons) {
      const r = Math.floor(w.y / this.B);
      for (let k = r - 3; k <= r + 3; k++) if (k >= 0 && k < this.rows) need.add(k);
    }
    for (const r of this.activeRows) if (!need.has(r)) this.setRowBodies(r, false);
    for (const r of need) if (!this.activeRows.has(r)) this.setRowBodies(r, true);
    this.activeRows = need;
  }

  private setRowBodies(r: number, on: boolean) {
    for (let c = 1; c < this.cols - 1; c++) {
      const b = this.grid[this.idx(r, c)];
      if (!b) continue;
      if (on && !b.body) {
        const [x, y] = this.center(r, c);
        b.body = Matter.Bodies.rectangle(x, y, this.B, this.B, { isStatic: true, friction: 0.4, restitution: 0.15, label: 'block' });
        b.body.plugin = { kind: 'block', r, c };
        Matter.Composite.add(this.engine.world, b.body);
      } else if (!on && b.body) {
        Matter.Composite.remove(this.engine.world, b.body);
        b.body = null;
      }
    }
  }

  // ------------------------------------------------------------------ damage API
  /** Returns null if nothing damageable there, otherwise whether it was destroyed. */
  damageCell(r: number, c: number, dmg: number, src: DmgSrc): boolean | null {
    const b = this.block(r, c);
    if (!b || b.type === 'bedrock' || c <= 0 || c >= this.cols - 1) return null;
    const i = this.idx(r, c);
    let d = dmg;
    if (src.kind !== 'dot') {
      const st = this.status.get(i);
      if (st) {
        if (st.frostUntil > this.time) d *= 1.5;
        if (st.venomUntil > this.time) d *= 1.5;
      }
    }
    b.hp -= d;
    if (b.hp <= 0) {
      this.destroyBlock(r, c, src);
      return true;
    }
    this.damaged.add(i);
    return false;
  }

  private destroyBlock(r: number, c: number, _src: DmgSrc) {
    const i = this.idx(r, c);
    const b = this.grid[i]!;
    this.grid[i] = null;
    this.damaged.delete(i);
    if (b.body) Matter.Composite.remove(this.engine.world, b.body);
    const im = this.typeMeshes.get(b.type)!;
    im.setMatrixAt(b.inst, this.zeroMat);
    im.instanceMatrix.needsUpdate = true;
    const p = this.to3(...this.center(r, c));
    const tint = BLOCK_TINT[b.type] ?? 0x888888;
    this.debris.burst(p.x, p.y, 0.5, 8, tint, 3, 0.7);
    const info = BLOCKS[b.type];
    if (info.ore) {
      this.sparks.burst(p.x, p.y, 0.7, 10, tint, 3, 0.7, -2);
      this.cb.onResource(info.ore);
    }
    // plague spread
    const st = this.status.get(i);
    if (st && st.plague && st.poisonUntil > this.time) {
      for (let dr = -1; dr <= 1; dr++)
        for (let dc = -1; dc <= 1; dc++)
          if (dr || dc) this.poisonCell(r + dr, c + dc, st.poisonDps, 3, true, st.venomUntil > this.time);
      this.sparks.burst(p.x, p.y, 0.7, 10, 0x7ee05a, 2, 0.7, 0);
    }
    this.status.delete(i);
    if (b.type === 'core' && !this.ended) {
      this.fx.explosion(p.x, p.y, 3, 0xd080ff);
      this.end(true, '擊破礦脈核心！');
    }
  }

  damageEnemy(e: Enemy, dmg: number, src: DmgSrc) {
    if (e.dead) return;
    let d = dmg * this.mods.enemyDmgMul;
    if (src.weapon?.def.id === 'boomerang' && e.frozen) d *= 2;
    if (src.kind !== 'dot' && e.venomUntil > this.time) d *= 1.5;
    if (e instanceof Golem && e.shelled) {
      if (src.kind === 'thunder' || src.kind === 'explosion' || src.kind === 'holy') e.breakShell();
      else d *= 0.5;
    }
    e.hp -= d;
    if (src.kind !== 'dot') e.hurtFlash = 0.08;
    if (e.hp <= 0) this.killEnemy(e);
  }

  private killEnemy(e: Enemy) {
    if (e.dead) return;
    e.dead = true;
    Matter.Composite.remove(this.engine.world, e.body);
    this.scene.remove(e.group);
    this.enemies = this.enemies.filter((o) => o !== e);
    const p = this.to3(e.x, e.y);
    this.debris.burst(p.x, p.y, 0.6, e.isBoss ? 80 : 14, 0xa04040, e.isBoss ? 8 : 3, 0.8);
    if (e.plague && e.poisonUntil > this.time) {
      for (const o of this.enemiesInRadius(e.x, e.y, 2 * this.B)) this.poisonEnemy(o, e.poisonDps, 3, 1, true);
      const [r, c] = this.cellOf(e.x, e.y);
      for (let dr = -1; dr <= 1; dr++) for (let dc = -1; dc <= 1; dc++) this.poisonCell(r + dr, c + dc, e.poisonDps, 3, true);
      this.fx.ring(p.x, p.y, 2, 0x7ee05a, 0.5);
    }
    if (e.isBoss && !this.ended) {
      this.fx.explosion(p.x, p.y, 4, 0xffa040);
      this.end(true, '擊敗岩石巨像！');
    }
  }

  damageSquare(r0: number, c0: number, rad: number, dmg: number, src: DmgSrc) {
    for (let r = r0 - rad; r <= r0 + rad; r++) for (let c = c0 - rad; c <= c0 + rad; c++) this.damageCell(r, c, dmg, src);
    const [x, y] = this.center(r0, c0);
    const half = (rad + 0.5) * this.B;
    for (const e of [...this.enemies]) if (Math.abs(e.x - x) <= half + e.size * this.B * 0.5 && Math.abs(e.y - y) <= half + e.size * this.B * 0.5) this.damageEnemy(e, dmg, src);
  }

  explode(x: number, y: number, radBlocks: number, dmg: number, src: DmgSrc) {
    const [r0, c0] = this.cellOf(x, y);
    const R = Math.ceil(radBlocks);
    for (let r = r0 - R; r <= r0 + R; r++)
      for (let c = c0 - R; c <= c0 + R; c++) {
        const [cx, cy] = this.center(r, c);
        const d = Math.hypot(cx - x, cy - y) / this.B;
        if (d <= radBlocks + 0.3) this.damageCell(r, c, dmg * (1 - (d / (radBlocks + 1)) * 0.5), src);
      }
    for (const e of this.enemiesInRadius(x, y, (radBlocks + 0.5) * this.B)) this.damageEnemy(e, dmg, src);
    const p = this.to3(x, y);
    this.fx.explosion(p.x, p.y, radBlocks, 0xff8a2a);
    this.sparks.burst(p.x, p.y, 0.7, 26, 0xffa040, 5, 0.6, -4);
    this.debris.burst(p.x, p.y, 0.6, 14, 0x555555, 4, 0.8);
  }

  enemyExplode(e: Enemy, radBlocks: number, dmg: number) {
    for (const w of this.weapons) if (Math.hypot(w.x - e.x, w.y - e.y) < (radBlocks + 0.5) * this.B) this.hurtWeapon(w, dmg);
    const [r0, c0] = this.cellOf(e.x, e.y);
    for (let r = r0 - 1; r <= r0 + 1; r++) for (let c = c0 - 1; c <= c0 + 1; c++) this.damageCell(r, c, 20, { kind: 'enemy' });
    const p = this.to3(e.x, e.y);
    this.fx.explosion(p.x, p.y, radBlocks, 0xff4a2a);
    this.killEnemy(e);
  }

  private cellStatus(r: number, c: number): CellStatus | null {
    const b = this.block(r, c);
    if (!b || b.type === 'bedrock') return null;
    const i = this.idx(r, c);
    let s = this.status.get(i);
    if (!s) {
      s = { poisonDps: 0, poisonUntil: 0, plague: false, venomUntil: 0, burnDps: 0, burnUntil: 0, frostUntil: 0 };
      this.status.set(i, s);
    }
    return s;
  }
  isCellPoisoned(r: number, c: number): boolean {
    if (!this.inB(r, c)) return false;
    const s = this.status.get(this.idx(r, c));
    return !!s && s.poisonUntil > this.time;
  }
  poisonCell(r: number, c: number, dps: number, dur: number, plague: boolean, venom = false) {
    const s = this.cellStatus(r, c);
    if (!s) return;
    const capMul = venom ? 10 : 5;
    s.poisonDps = s.poisonUntil > this.time ? Math.min(s.poisonDps + dps, dps * capMul) : dps;
    s.poisonUntil = Math.max(s.poisonUntil, this.time + dur);
    s.plague = s.plague || plague;
    if (venom) s.venomUntil = Math.max(s.venomUntil, this.time + dur);
  }
  burnCell(r: number, c: number, dps: number, dur: number) {
    const s = this.cellStatus(r, c);
    if (!s) return;
    s.burnDps = Math.max(s.burnUntil > this.time ? s.burnDps : 0, dps);
    s.burnUntil = Math.max(s.burnUntil, this.time + dur);
  }
  frostCell(r: number, c: number, dur: number) {
    const s = this.cellStatus(r, c);
    if (!s) return;
    s.frostUntil = Math.max(s.frostUntil, this.time + dur);
  }
  poisonEnemy(e: Enemy, dps: number, dur: number, stacks: number, plague: boolean, maxStacks = 5, venom = false) {
    if (e.poisonUntil < this.time) e.poisonStacks = 0;
    const cap = Math.max(maxStacks, e.venomUntil > this.time ? 10 : 5);
    e.poisonStacks = Math.min(cap, e.poisonStacks + stacks);
    e.poisonDps = dps * e.poisonStacks;
    e.poisonUntil = this.time + dur;
    e.plague = e.plague || plague;
    if (venom) e.venomUntil = Math.max(e.venomUntil, this.time + dur);
  }
  burnEnemy(e: Enemy, dps: number, dur: number) {
    e.burnDps = Math.max(e.burnUntil > this.time ? e.burnDps : 0, dps);
    e.burnUntil = Math.max(e.burnUntil, this.time + dur);
  }
  freezeEnemy(e: Enemy, dur: number) { e.frozenUntil = Math.max(e.frozenUntil, this.time + (e.isBoss ? dur * 0.4 : dur)); }
  stunEnemy(e: Enemy, dur: number) { e.stunnedUntil = Math.max(e.stunnedUntil, this.time + (e.isBoss ? dur * 0.3 : dur)); }

  enemiesInRadius(x: number, y: number, r: number): Enemy[] {
    return this.enemies.filter((e) => Math.hypot(e.x - x, e.y - y) <= r + e.size * this.B * 0.4);
  }
  nearestEnemy(x: number, y: number, r: number): Enemy | null {
    let best: Enemy | null = null, bd = r;
    for (const e of this.enemies) {
      const d = Math.hypot(e.x - x, e.y - y);
      if (d < bd) { bd = d; best = e; }
    }
    return best;
  }
  randomTargets(x: number, y: number, r: number, n: number): Target[] {
    const out: Target[] = [];
    const es = this.enemiesInRadius(x, y, r).sort(() => Math.random() - 0.5);
    for (const e of es) { if (out.length >= n) break; out.push({ kind: 'enemy', e }); }
    if (out.length < n) {
      const [r0, c0] = this.cellOf(x, y);
      const R = Math.ceil(r / this.B);
      const cells: [number, number][] = [];
      for (let rr = r0 - 1; rr <= r0 + R; rr++)
        for (let cc = Math.max(1, c0 - R); cc <= Math.min(this.cols - 2, c0 + R); cc++) {
          const b = this.block(rr, cc);
          if (b && b.type !== 'bedrock') cells.push([rr, cc]);
        }
      cells.sort(() => Math.random() - 0.5);
      for (const [rr, cc] of cells) { if (out.length >= n) break; out.push({ kind: 'block', r: rr, c: cc }); }
    }
    return out;
  }

  addProjectile(p: Projectile) {
    let mesh: THREE.Object3D;
    if (p.kind === 'meteor') {
      const m = new THREE.SpriteMaterial({ map: Tex.glow(), color: new THREE.Color(3, 1.4, 0.4), blending: THREE.AdditiveBlending, depthWrite: false, toneMapped: false });
      mesh = new THREE.Sprite(m);
      mesh.scale.setScalar(1.6);
    } else {
      const tex = p.kind === 'arrow' ? Tex.arrow() : p.kind === 'web' ? Tex.web() : p.kind === 'rock' ? Tex.rock() : Tex.iceShard();
      const size = p.kind === 'rock' ? 0.9 : p.kind === 'web' ? 0.7 : 0.6;
      mesh = new THREE.Mesh(
        new THREE.PlaneGeometry(size, size),
        new THREE.MeshBasicMaterial({ map: tex, transparent: true, alphaTest: 0.3, side: THREE.DoubleSide, color: p.kind === 'shard' ? new THREE.Color(1.6, 1.8, 2) : 0xffffff, toneMapped: p.kind !== 'shard' }),
      );
    }
    mesh.position.z = 0.9;
    p.mesh = mesh;
    p.hit = new Set();
    this.scene.add(mesh);
    this.projectiles.push(p);
  }

  private updateProjectiles(dt: number) {
    const keep: Projectile[] = [];
    for (const p of this.projectiles) {
      p.life -= dt;
      p.x += p.vx * dt;
      p.y += p.vy * dt;
      let alive = p.life > 0;
      const [r, c] = this.cellOf(p.x, p.y);
      if (alive && p.from === 'enemy') {
        for (const w of this.weapons) {
          if (Math.hypot(w.x - p.x, w.y - p.y) < p.r + 18 * w.scale) {
            if (p.kind === 'web') { if (!w.invuln) w.webbedUntil = this.time + 1.5; }
            else this.hurtWeapon(w, p.dmg);
            alive = false;
            break;
          }
        }
        if (alive && !p.passThrough && this.isSolid(r, c)) alive = false;
        if (p.kind === 'rock' && this.isSolid(r, c) && p.y > this.deepestY + this.B * 2) alive = false;
      } else if (alive && p.from === 'weapon') {
        if (p.kind === 'meteor') {
          const pp = this.to3(p.x, p.y);
          this.sparks.emit(pp.x + (Math.random() - 0.5) * 0.3, pp.y, 0.8, 0, 1, 0, 0xffa040, 0.4, 0);
          const hitEnemy = this.enemies.find((e) => Math.hypot(e.x - p.x, e.y - p.y) < p.r + e.size * this.B * 0.5);
          const solid = this.block(r, c) && this.block(r, c)!.type !== 'bedrock';
          if (hitEnemy || solid || this.isSolid(r, c) && c > 0 && c < this.cols - 1) {
            this.explode(p.x, p.y, 2 + this.mods.aoeBonus, p.dmg, p.src!);
            alive = false;
          }
        } else {
          // ice shard
          if (this.isSolid(r, c)) {
            const res = this.damageCell(r, c, p.dmg, p.src!);
            p.pierce = (p.pierce ?? 0) - 1;
            if (res === null || p.pierce < 0) alive = false;
            else { p.vx *= 0.6; p.vy *= 0.6; }
          }
          for (const e of this.enemies) {
            if (!p.hit!.has(e) && Math.hypot(e.x - p.x, e.y - p.y) < p.r + e.size * this.B * 0.5) {
              p.hit!.add(e);
              this.damageEnemy(e, p.dmg, p.src!);
              this.freezeEnemy(e, 1);
            }
          }
          const pp = this.to3(p.x, p.y);
          if (Math.random() < 0.5) this.sparks.emit(pp.x, pp.y, 0.8, 0, 0, 0, 0x8ae8ff, 0.25, 0);
        }
      }
      if (!alive) {
        this.scene.remove(p.mesh!);
        if (p.mesh instanceof THREE.Mesh) { p.mesh.geometry.dispose(); (p.mesh.material as THREE.Material).dispose(); }
        if (p.mesh instanceof THREE.Sprite) p.mesh.material.dispose();
        continue;
      }
      const pp = this.to3(p.x, p.y);
      p.mesh!.position.x = pp.x;
      p.mesh!.position.y = pp.y;
      if (p.mesh instanceof THREE.Mesh) p.mesh.rotation.z = p.kind === 'rock' || p.kind === 'web' ? p.mesh.rotation.z + dt * 6 : Math.atan2(-p.vy, p.vx);
      keep.push(p);
    }
    this.projectiles = keep;
  }

  // ------------------------------------------------------------------ status ticking
  private updateStatus(dt: number) {
    for (const [i, s] of this.status) {
      const r = Math.floor(i / this.cols), c = i % this.cols;
      const b = this.grid[i];
      if (!b) { this.status.delete(i); continue; }
      const poisoned = s.poisonUntil > this.time;
      const burning = s.burnUntil > this.time;
      const frosted = s.frostUntil > this.time;
      if (!poisoned && !burning && !frosted) {
        this.typeMeshes.get(b.type)!.setColorAt(b.inst, this.tmpCol.setRGB(1, 1, 1));
        this.typeMeshes.get(b.type)!.instanceColor!.needsUpdate = true;
        this.status.delete(i);
        continue;
      }
      const flick = 0.94 + Math.random() * 0.1;
      if (burning && poisoned) this.tmpCol.setRGB(1.3 * flick, 1.05, 0.45);
      else if (burning) this.tmpCol.setRGB(1.45 * flick, 0.85 * flick, 0.48);
      else if (poisoned) this.tmpCol.setRGB(0.68, 1.3, 0.55);
      else this.tmpCol.setRGB(0.68, 0.96, 1.32);
      const im = this.typeMeshes.get(b.type)!;
      im.setColorAt(b.inst, this.tmpCol);
      im.instanceColor!.needsUpdate = true;
      const dps = (poisoned ? s.poisonDps : 0) + (burning ? s.burnDps : 0);
      const p = this.to3(...this.center(r, c));
      if (burning && Math.random() < dt * 5) this.sparks.emit(p.x + (Math.random() - 0.5) * 0.8, p.y + 0.3, 0.6, 0, 1.2, 0, 0xff7a2a, 0.5, 0);
      if (poisoned && Math.random() < dt * 2.5) this.sparks.emit(p.x + (Math.random() - 0.5) * 0.8, p.y + 0.3, 0.6, 0, 0.6, 0, 0x6ae04a, 0.6, 0);
      if (burning && Math.random() < dt * 0.25 * this.mods.fireSpreadMul) {
        const [dr, dc] = [[1, 0], [-1, 0], [0, 1], [0, -1]][Math.floor(Math.random() * 4)];
        this.burnCell(r + dr, c + dc, s.burnDps, 3);
      }
      if (dps > 0) this.damageCell(r, c, dps * dt, { kind: 'dot' });
    }
    for (const e of [...this.enemies]) {
      let dps = 0;
      if (e.poisonUntil > this.time) dps += e.poisonDps;
      if (e.burnUntil > this.time) dps += e.burnDps;
      if (dps > 0) this.damageEnemy(e, dps * dt / this.mods.enemyDmgMul, { kind: 'dot' });
    }
  }

  // ------------------------------------------------------------------ camera / view
  setAspect(a: number) { this.aspect = a; }
  private viewDist(): number {
    const t = Math.tan(THREE.MathUtils.degToRad(this.camera.fov / 2));
    return Math.max(9.8 / (this.aspect * 2 * t), 11.5 / (2 * t));
  }
  /** [halfWidth, halfHeight] in blocks at the z=0 plane */
  viewHalf(): [number, number] {
    const t = Math.tan(THREE.MathUtils.degToRad(this.camera.fov / 2));
    const h = this.viewDist() * t;
    return [h * this.aspect, h];
  }
  viewTopY(): number { return (-this.camY - this.viewHalf()[1]) * this.B; }

  private updateCamera(dt: number) {
    const dw = this.deepestWeapon();
    if (dw) this.lastFocusY = dw.y;
    else this.lastFocusY = this.deepestY;
    const half = this.viewHalf()[1];
    // Place the focus weapon slightly below screen centre so ~5.5~6.5 blocks of shaft are clearly visible ABOVE it!
    this.camTargetY = -this.lastFocusY / this.B + half * 0.16;
    this.camY += (this.camTargetY - this.camY) * Math.min(1, dt * 3);
    const d = this.viewDist();
    const pitch = THREE.MathUtils.degToRad(14);
    const sx = (Math.random() - 0.5) * this.fx.shake, sy = (Math.random() - 0.5) * this.fx.shake;
    this.camera.aspect = this.aspect;
    this.camera.position.set(sx, this.camY + Math.sin(pitch) * d + sy, Math.cos(pitch) * d);
    this.camera.lookAt(sx * 0.5, this.camY, 0);
    this.camera.updateProjectionMatrix();
    (this.scene.fog as THREE.Fog).near = d - 2;
    (this.scene.fog as THREE.Fog).far = d + 30;
    // darker deeper
    const f = Math.min(1, Math.max(0, (-this.camY - BAL.airRows) / (this.level.depth + 6)));
    this.hemi.intensity = 1.0 - f * 0.55;
  }

  private updateLights() {
    const reqs: LightReq[] = [];
    const lavaP = this.to3(this.cols * this.B / 2, this.lavaY);
    reqs.push({ x: lavaP.x, y: lavaP.y - 0.5, color: 0xff6a20, intensity: 8, dist: 11, prio: 9 });
    for (const l of this.fx.flashLights) reqs.push({ ...l, intensity: l.intensity * (l.t / l.dur) });
    for (const w of this.weapons) {
      const p = this.to3(w.x, w.y);
      const meta = weaponElementMeta(w.def.element);
      reqs.push({ x: p.x, y: p.y, color: meta.color, intensity: w.ultReady >= 1 ? 3.2 : 2.2, dist: 5, prio: 3 });
    }
    if (this.boss) {
      const p = this.to3(this.boss.x, this.boss.y);
      reqs.push({ x: p.x, y: p.y + 1, color: 0xff7a20, intensity: 3.5, dist: 6, prio: 2 });
    }
    const cy = this.camY;
    reqs.sort((a, b) => b.prio - a.prio || Math.abs(a.y - cy) - Math.abs(b.y - cy));
    const [, half] = this.viewHalf();
    let k = 0;
    for (const r of reqs) {
      if (k >= this.lights.length) break;
      if (Math.abs(r.y - cy) > half + r.dist) continue;
      const l = this.lights[k++];
      l.position.set(r.x, r.y, 1.6);
      l.color.setHex(r.color);
      l.intensity = r.intensity;
      l.distance = r.dist;
    }
    for (; k < this.lights.length; k++) this.lights[k].intensity = 0;
  }

  private updateCracks() {
    const [, half] = this.viewHalf();
    const top = Math.floor(-this.camY - half - 1), bot = Math.ceil(-this.camY + half + 1);
    let k = 0;
    for (const i of this.damaged) {
      if (k >= this.cracks.length) break;
      const r = Math.floor(i / this.cols);
      if (r < top || r > bot) continue;
      const b = this.grid[i];
      if (!b) continue;
      const stage = Math.min(4, Math.floor((1 - b.hp / b.maxHp) * 5));
      const m = this.cracks[k++];
      (m.material as THREE.MeshBasicMaterial).map = Tex.crack(stage);
      const p = this.to3(...this.center(r, i % this.cols));
      m.position.set(p.x, p.y, 0.502);
      m.visible = true;
    }
    for (; k < this.cracks.length; k++) this.cracks[k].visible = false;
  }

  private end(win: boolean, reason: string) {
    if (this.ended) return;
    this.ended = true;
    this.cb.onEnd(win, reason);
  }

  /** Camera/lights only (used while paused or behind the title screen). */
  updateView(dt: number) {
    this.updateCamera(dt);
    this.updateLights();
  }

  // ------------------------------------------------------------------ main update
  update(dt: number) {
    if (this.ended) {
      // keep effects animating on the end screen
      this.fx.update(dt);
      this.debris.update(dt);
      this.sparks.update(dt);
      this.updateCamera(dt);
      return;
    }
    this.time += dt;
    this.timeLeft -= dt;
    if (this.scheduled.length) {
      const due = this.scheduled.filter((s) => (s.t -= dt) <= 0);
      this.scheduled = this.scheduled.filter((s) => s.t > 0);
      due.forEach((s) => s.fn());
    }
    this.updateActiveRows();
    this.acc += dt;
    const step = 1 / 60;
    let n = 0;
    while (this.acc >= step && n < 4) {
      Matter.Engine.update(this.engine, step * 1000);
      this.processHits();
      this.acc -= step;
      n++;
    }
    if (n === 4) this.acc = 0;
    for (const w of [...this.weapons]) {
      if (w.dead) continue;
      w.update(dt);
      if (w.y > this.deepestY) this.deepestY = w.y;
      if (w.y - 12 < this.lavaY) {
        this.hurtWeapon(w, BAL.lavaDps * dt);
        if (Math.random() < dt * 15) {
          const wp = this.to3(w.x, w.y);
          this.sparks.emit(wp.x + (Math.random() - 0.5) * 0.6, wp.y, 0.95, (Math.random() - 0.5) * 2, 1.8, 0, 0xff7a20, 0.45, -2);
        }
      }
      if (w.hp <= 0) this.killWeapon(w);
    }
    for (const e of [...this.enemies]) {
      if (e.dead) continue;
      e.update(dt);
      if (e.y < this.lavaY) this.killEnemy(e);
    }
    this.updateProjectiles(dt);
    this.updateStatus(dt);

    // lava movement + approaching embers
    if (this.time > BAL.lavaGrace) this.lavaY += this.level.lavaSpeed * this.mods.lavaSpeedMul * this.B * dt;
    const ly = -this.lavaY / this.B;
    this.lava.position.y = ly + 30;
    this.lavaCrust.position.y = ly;
    this.lavaGlow.position.y = ly - 0.25;
    const lt = (this.lava.material as THREE.MeshBasicMaterial).map!;
    lt.offset.x = Math.sin(this.time * 0.3) * 0.1;
    lt.offset.y = this.time * 0.05;
    if (Math.random() < dt * 10) {
      this.sparks.emit((Math.random() - 0.5) * (this.cols - 2), ly - 0.1, 0.95, (Math.random() - 0.5) * 0.8, -1.2 - Math.random() * 1.5, 0.2, 0xff9830, 1.0, -2.5);
    }
    // Pre-warning falling embers from the top of the screen when lava is within 12 blocks!
    const heat = this.lavaHeat;
    if (heat > 0 && Math.random() < dt * (4 + heat * 18)) {
      const [, half] = this.viewHalf();
      const topThreeY = Math.min(ly, this.camY + half - 0.2);
      this.sparks.emit(
        (Math.random() - 0.5) * (this.cols - 2.2),
        topThreeY,
        0.95,
        (Math.random() - 0.5) * 0.5,
        -1.5 - Math.random() * 2.5,
        0.1,
        Math.random() < 0.4 ? 0xffd060 : 0xff6a20,
        1.2,
        -3,
      );
    }

    // New lose rule: lava must overtake deepest point AND all weapons on the field must be destroyed
    if (this.lavaY >= this.deepestY && this.weapons.length === 0) {
      this.end(false, '岩漿吞沒了最深處且場上武器全滅');
    } else if (this.timeLeft <= 0) {
      this.timeLeft = 0;
      this.end(false, '時間到');
    }

    this.updateCamera(dt);
    this.updateLights();
    this.updateCracks();
    this.fx.update(dt);
    this.debris.update(dt);
    this.sparks.update(dt);
  }

  /** Progress 0..1 towards the goal row */
  get progress(): number {
    return Math.min(1, Math.max(0, (this.deepestY / this.B - BAL.airRows) / this.level.depth));
  }
  get depthRows(): number { return Math.min(this.level.depth, Math.max(0, Math.floor(this.deepestY / this.B - BAL.airRows))); }
  get lavaGap(): number { return (this.deepestY - this.lavaY) / this.B; }
  /** 0..1 heat intensity when lava is active (or 3s before moving) and within `lavaWarnGap` blocks. */
  get lavaHeat(): number {
    if (this.time < BAL.lavaGrace - 3) return 0;
    const gap = Math.max(0, this.lavaGap);
    if (gap >= BAL.lavaWarnGap) return 0;
    return Math.min(1, 1 - gap / BAL.lavaWarnGap);
  }

  dispose() {
    Matter.World.clear(this.engine.world, false);
    Matter.Engine.clear(this.engine);
    this.fx.clear();
    this.scene.traverse((o) => {
      if (o instanceof THREE.Mesh || o instanceof THREE.InstancedMesh) {
        o.geometry.dispose();
        const mats = Array.isArray(o.material) ? o.material : [o.material];
        mats.forEach((m) => m.dispose());
      }
    });
  }
}

function pickOre(f: number): BlockType {
  const table: [BlockType, number][] =
    f < 0.3 ? [['coal', 5], ['copper', 3], ['iron', 2]]
      : f < 0.6 ? [['iron', 3], ['coal', 2], ['gold', 2], ['redstone', 1.5], ['lapis', 1.5]]
        : [['gold', 2], ['redstone', 2], ['lapis', 2], ['diamond', 1.5], ['emerald', 0.8], ['iron', 1]];
  const tot = table.reduce((s, [, w]) => s + w, 0);
  let r = Math.random() * tot;
  for (const [t, w] of table) { if (r < w) return t; r -= w; }
  return table[0][0];
}
