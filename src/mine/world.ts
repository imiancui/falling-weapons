// The right-hand "Falling Pickaxe" part: Matter.js physics + Three.js HD-2D-style rendering.
import * as THREE from 'three';
import Matter from 'matter-js';
import {
  BAL, BLOCKS, BLOCK_GOLD, BOSS_CYCLE, HEROES, weaponElementMeta,
  type BlockType, type BossKind, type Element, type EnemyKind, type HeroDef, type HeroId, type LevelDef, type Mods, type WeaponElement,
} from '../data/config';
import { WEAPONS, type WeaponId } from '../data/weapons';
import { Tex } from '../gfx/pixel';
import { Particles } from '../gfx/particles';
import { Fx, type LightReq } from './fx';
import { Weapon, onHit, zap, type WeaponSpawnMeta } from './weapon';
import { Balrog, Boss, Enemy, Golem, SpiderQueen, createBoss } from './enemy';

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
interface BlockPool {
  mesh: THREE.InstancedMesh;
  free: number[];
  max: number;
}
export interface SealGate {
  id: number;
  sealRow: number;
  unlocked: boolean;
  isBossGate: boolean;
}

export interface Projectile {
  kind: 'arrow' | 'web' | 'rock' | 'fireball' | 'shard' | 'meteor';
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
  onGateCleared?: (gateId: number, isBossGate: boolean) => void;
  onGold?: (amount: number, reason?: string) => void;
  onExpandToken?: (count: number) => void;
}

const BLOCK_TINT: Partial<Record<BlockType, number>> = {
  dirt: 0x7a5232, stone: 0x7d7d82, deepslate: 0x4a4a52, obsidian: 0x3a2050, seal: 0x48d8f8, core: 0xc070ff,
  barrel: 0xd85028, crystal: 0x78e8ff,
  coal: 0x333333, iron: 0xd8b89a, copper: 0xe0763a, gold: 0xffd84a, redstone: 0xff2a2a, lapis: 0x2a5aff, diamond: 0x5affee, emerald: 0x2aff6a,
};

const BG_WINDOW_ROWS = 48;
const SIDE_COLS = 7;

export class Mine {
  readonly B = BAL.block;
  readonly cols = BAL.cols;
  readonly isEndless: boolean;
  rows: number; // grows dynamically in Endless mode
  readonly scene = new THREE.Scene();
  readonly camera = new THREE.PerspectiveCamera(30, 1, 0.5, 80);
  readonly fx: Fx;
  time = 0;
  timeLeft: number;
  readonly engine: Matter.Engine;
  private leftWall: Matter.Body;
  private rightWall: Matter.Body;

  private boxGeo = new THREE.BoxGeometry(1, 1, 1);
  private grid = new Map<number, BlockState>();
  private pools = new Map<BlockType, BlockPool>();
  private minStoredRow = 0;
  private generatedToRow = BAL.airRows - 1;
  private endlessChunkIdx = 0;
  private recycleTimer = 0;

  private backWallMesh!: THREE.InstancedMesh;
  private outerWallMesh!: THREE.InstancedMesh;
  private lastBgCenterRow = -9999;

  private status = new Map<number, CellStatus>();
  private damaged = new Set<number>();
  private activeRows = new Set<number>();
  private gates = new Map<number, SealGate>();
  gatesCleared = 0;
  kills = 0;

  weapons: Weapon[] = [];
  enemies: Enemy[] = [];
  boss: Boss | null = null;
  private projectiles: Projectile[] = [];
  private scheduled: { t: number; fn: () => void }[] = [];
  private pendingHits = new Map<Weapon, Target>();
  private acc = 0;

  overdriveActive = false;
  overdriveDmgMul = 1.0;

  // v0.6 BALL x PIT Hero Battle-Line & Catch-and-Volley state
  readonly heroDef: HeroDef;
  heroX: number;
  heroY: number;
  heroInputDir = 0;
  heroPointerActive = false;
  heroPointerX = 0;
  totalCatches = 0;
  catchStreak = 0;
  private heroGroup = new THREE.Group();
  private heroSprite!: THREE.Mesh;
  private heroPad!: THREE.Mesh;
  private heroLine!: THREE.Mesh;

  lavaY = -1.5 * BAL.block;
  deepestY: number;
  shieldUntil = 0;
  private camY = 0;
  private camTargetY = 0;
  private isManualCam = false;
  lockedWeaponUid: number | null = null;
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
    public heroId: HeroId = 'bardin',
  ) {
    this.heroDef = HEROES[this.heroId] ?? HEROES.bardin;
    this.fx = new Fx(this.scene);
    this.isEndless = level.goal === 'endless';
    this.timeLeft = this.isEndless ? Infinity : level.time + mods.timeBonus;
    const bottomRows = level.goal === 'core' ? 2 : 8;
    this.rows = this.isEndless ? BAL.airRows + 90 : BAL.airRows + level.depth + bottomRows;
    this.goalRow = BAL.airRows + level.depth;
    this.deepestY = (BAL.airRows - 0.5) * this.B;
    this.heroX = (this.cols / 2) * this.B;
    this.heroY = Math.max(0.8 * this.B, this.deepestY - BAL.heroLineGapRows * this.B);
    this.heroPointerX = this.heroX;
    this.lastFocusY = this.deepestY;
    this.camY = this.camTargetY = -this.deepestY / this.B;

    this.engine = Matter.Engine.create({ gravity: { x: 0, y: BAL.gravity, scale: 0.001 } });
    this.engine.positionIterations = 6;
    this.engine.velocityIterations = 4;
    Matter.Events.on(this.engine, 'collisionStart', (e) => this.onCollide(e));
    Matter.Events.on(this.engine, 'collisionActive', (e) => this.onCollide(e));

    const wallH = 6000;
    this.leftWall = Matter.Bodies.rectangle(this.B / 2, wallH / 2 - 800, this.B, wallH, { isStatic: true, friction: 0.1, restitution: 0.3 });
    this.rightWall = Matter.Bodies.rectangle((this.cols - 0.5) * this.B, wallH / 2 - 800, this.B, wallH, { isStatic: true, friction: 0.1, restitution: 0.3 });
    this.leftWall.plugin = { kind: 'wall' };
    this.rightWall.plugin = { kind: 'wall' };
    Matter.Composite.add(this.engine.world, [this.leftWall, this.rightWall]);

    this.setupScene();
    this.setupHeroMesh();
    this.setupSlidingBackdrop();
    if (this.isEndless) {
      for (let r = 0; r < BAL.airRows; r++) {
        this.setCell(r, 0, 'bedrock', 1);
        this.setCell(r, this.cols - 1, 'bedrock', 1);
      }
      this.ensureEndlessChunks();
    } else {
      this.generateCampaign();
    }
    this.updateBackdropPosition(Math.floor(-this.camY));
    this.lava = this.makeLava();
    this.lavaCrust = this.makeLavaCrust();
    this.lavaGlow = this.makeLavaGlow();
    this.hemi = this.scene.children.find((o) => o instanceof THREE.HemisphereLight) as THREE.HemisphereLight;
  }

  // ------------------------------------------------------------------ helpers
  idx(r: number, c: number) { return r * this.cols + c; }
  inB(r: number, c: number) { return r >= 0 && c >= 0 && r < this.rows && c < this.cols; }
  block(r: number, c: number): BlockState | null {
    if (c < 0 || c >= this.cols || r < 0) return null;
    return this.grid.get(this.idx(r, c)) ?? null;
  }
  isIndestructible(type: BlockType): boolean {
    return type === 'bedrock' || type === 'seal';
  }
  isSolid(r: number, c: number): boolean {
    if (c <= 0 || c >= this.cols - 1) return true;
    if (r < 0) return false;
    if (!this.isEndless && r >= this.rows) return true;
    return this.grid.has(this.idx(r, c));
  }
  cellOf(x: number, y: number): [number, number] { return [Math.floor(y / this.B), Math.floor(x / this.B)]; }
  center(r: number, c: number): [number, number] { return [(c + 0.5) * this.B, (r + 0.5) * this.B]; }
  to3(x: number, y: number): THREE.Vector2 { return new THREE.Vector2(x / this.B - this.cols / 2, -y / this.B); }
  schedule(delay: number, fn: () => void) { this.scheduled.push({ t: delay, fn }); }

  setOverdrive(active: boolean, dmgMul = 1.0) {
    const entering = active && !this.overdriveActive;
    this.overdriveActive = active;
    this.overdriveDmgMul = active ? dmgMul : 1.0;
    if (entering) {
      for (const w of this.weapons) {
        const p = this.to3(w.x, w.y);
        this.fx.ring(p.x, p.y, 1.5, 0xffa838, 0.45);
      }
    }
  }
  emitOverdriveSpark(x3: number, y3: number) {
    this.sparks.emit(x3 + (Math.random() - 0.5) * 0.6, y3 + (Math.random() - 0.5) * 0.6, 0.85, (Math.random() - 0.5) * 1.5, 1.4, 0, 0xffb840, 0.35, -1);
  }

  // ------------------------------------------------------------------ block pools & sliding backdrop
  private getPool(t: BlockType): BlockPool {
    let pool = this.pools.get(t);
    if (pool) return pool;
    const cap = t === 'stone' || t === 'deepslate' || t === 'bedrock' ? 1400 : 360;
    const mat = new THREE.MeshStandardMaterial({ map: Tex.block(t), roughness: 0.92, metalness: 0 });
    if (t === 'core') {
      mat.emissive = new THREE.Color(0xffffff);
      mat.emissiveMap = Tex.block(t);
      mat.emissiveIntensity = 0.85;
    } else if (t === 'seal') {
      mat.emissive = new THREE.Color(0xffffff);
      mat.emissiveMap = Tex.block(t);
      mat.emissiveIntensity = 0.55;
    } else if (t === 'crystal') {
      mat.emissive = new THREE.Color(0xffffff);
      mat.emissiveMap = Tex.block(t);
      mat.emissiveIntensity = 0.5;
    } else if (t === 'diamond' || t === 'emerald' || t === 'redstone' || t === 'gold' || t === 'lapis' || t === 'barrel') {
      mat.emissive = new THREE.Color(0xffffff);
      mat.emissiveMap = Tex.block(t);
      mat.emissiveIntensity = t === 'barrel' ? 0.22 : 0.12;
    }
    const im = new THREE.InstancedMesh(this.boxGeo, mat, cap);
    im.instanceMatrix.setUsage(THREE.DynamicDrawUsage);
    im.frustumCulled = false;
    im.count = cap;
    const free: number[] = [];
    for (let i = cap - 1; i >= 0; i--) {
      im.setMatrixAt(i, this.zeroMat);
      im.setColorAt(i, this.tmpCol.setRGB(1, 1, 1));
      free.push(i);
    }
    im.instanceMatrix.needsUpdate = true;
    if (im.instanceColor) im.instanceColor.needsUpdate = true;
    this.scene.add(im);
    pool = { mesh: im, free, max: cap };
    this.pools.set(t, pool);
    return pool;
  }

  private setCell(r: number, c: number, t: BlockType | null, hpMul: number) {
    const key = this.idx(r, c);
    const existing = this.grid.get(key);
    if (existing) {
      if (existing.body) Matter.Composite.remove(this.engine.world, existing.body);
      const oldPool = this.getPool(existing.type);
      oldPool.mesh.setMatrixAt(existing.inst, this.zeroMat);
      oldPool.mesh.instanceMatrix.needsUpdate = true;
      oldPool.free.push(existing.inst);
      this.grid.delete(key);
      this.damaged.delete(key);
      this.status.delete(key);
    }
    if (!t) return;
    let pool = this.getPool(t);
    if (pool.free.length === 0) {
      // emergency reclaim of oldest buried rows if pool ever fills
      this.recycleRowsAbove(Math.floor(this.lavaY / this.B) - 4);
      pool = this.getPool(t);
      if (pool.free.length === 0) return;
    }
    const inst = pool.free.pop()!;
    const p = this.to3(...this.center(r, c));
    this.tmpMat.makeTranslation(p.x, p.y, 0);
    pool.mesh.setMatrixAt(inst, this.tmpMat);
    pool.mesh.setColorAt(inst, this.tmpCol.setRGB(1, 1, 1));
    pool.mesh.instanceMatrix.needsUpdate = true;
    if (pool.mesh.instanceColor) pool.mesh.instanceColor.needsUpdate = true;
    const hp = this.isIndestructible(t) ? Infinity : Math.round(BLOCKS[t].hp * hpMul * BAL.blockHpHardcoreMul);
    const st: BlockState = { type: t, hp, maxHp: hp, inst, body: null };
    this.grid.set(key, st);
    if (this.activeRows.has(r) && c > 0 && c < this.cols - 1) {
      const [bx, by] = this.center(r, c);
      st.body = Matter.Bodies.rectangle(bx, by, this.B, this.B, { isStatic: true, friction: 0.35, restitution: 0.35, label: 'block' });
      st.body.plugin = { kind: 'block', r, c };
      Matter.Composite.add(this.engine.world, st.body);
    }
  }

  private recycleRowsAbove(maxRow: number) {
    if (maxRow <= this.minStoredRow) return;
    const touched = new Set<BlockPool>();
    for (let r = this.minStoredRow; r <= maxRow; r++) {
      this.activeRows.delete(r);
      for (let c = 0; c < this.cols; c++) {
        const key = this.idx(r, c);
        const b = this.grid.get(key);
        if (!b) continue;
        if (b.body) Matter.Composite.remove(this.engine.world, b.body);
        const pool = this.getPool(b.type);
        pool.mesh.setMatrixAt(b.inst, this.zeroMat);
        pool.free.push(b.inst);
        touched.add(pool);
        this.grid.delete(key);
        this.damaged.delete(key);
        this.status.delete(key);
      }
    }
    for (const pool of touched) pool.mesh.instanceMatrix.needsUpdate = true;
    this.minStoredRow = maxRow + 1;
  }

  private setupSlidingBackdrop() {
    this.backWallMesh = new THREE.InstancedMesh(
      this.boxGeo,
      new THREE.MeshStandardMaterial({ map: Tex.backWall(), color: 0xa09088, roughness: 1 }),
      this.cols * BG_WINDOW_ROWS,
    );
    this.backWallMesh.frustumCulled = false;
    this.scene.add(this.backWallMesh);

    this.outerWallMesh = new THREE.InstancedMesh(
      this.boxGeo,
      new THREE.MeshStandardMaterial({ map: Tex.block('deepslate'), color: 0x8a8090, roughness: 1 }),
      SIDE_COLS * 2 * BG_WINDOW_ROWS,
    );
    this.outerWallMesh.frustumCulled = false;
    this.scene.add(this.outerWallMesh);
  }

  private updateBackdropPosition(centerRow: number) {
    if (centerRow === this.lastBgCenterRow) return;
    this.lastBgCenterRow = centerRow;
    const startR = centerRow - Math.floor(BG_WINDOW_ROWS / 2);
    let k = 0;
    for (let r = startR; r < startR + BG_WINDOW_ROWS; r++) {
      for (let c = 0; c < this.cols; c++) {
        const p = this.to3(...this.center(r, c));
        this.tmpMat.makeTranslation(p.x, p.y, -1);
        this.backWallMesh.setMatrixAt(k++, this.tmpMat);
      }
    }
    this.backWallMesh.instanceMatrix.needsUpdate = true;

    k = 0;
    for (let r = startR; r < startR + BG_WINDOW_ROWS; r++) {
      for (let i = 1; i <= SIDE_COLS; i++) {
        for (const c of [-i, this.cols - 1 + i]) {
          const p = this.to3(...this.center(r, c));
          this.tmpMat.makeTranslation(p.x, p.y, (i % 2) * 0.15 - 0.05);
          this.outerWallMesh.setMatrixAt(k++, this.tmpMat);
        }
      }
    }
    this.outerWallMesh.instanceMatrix.needsUpdate = true;
  }

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
    for (let i = 0; i < 36; i++) {
      const m = new THREE.Mesh(crackGeo, new THREE.MeshBasicMaterial({ map: Tex.crack(0), transparent: true, depthWrite: false, polygonOffset: true, polygonOffsetFactor: -2 }));
      m.visible = false;
      s.add(m);
      this.cracks.push(m);
    }
  }

  // ------------------------------------------------------------------ v0.6 BALL x PIT Hero Battle-Line & Volley
  private setupHeroMesh() {
    const tex = Tex.hero(this.heroId);
    const mat = new THREE.MeshStandardMaterial({
      map: tex, transparent: true, alphaTest: 0.4,
      emissive: 0xffffff, emissiveMap: tex, emissiveIntensity: 0.32, side: THREE.DoubleSide,
    });
    this.heroSprite = new THREE.Mesh(new THREE.PlaneGeometry(1.55, 1.55), mat);
    this.heroSprite.position.set(0, 0.12, 0.04);

    // Glowing catch pad beneath the Hero's feet showing exact catch width
    this.heroPad = new THREE.Mesh(
      new THREE.PlaneGeometry(this.heroDef.catchWidth + 0.35, 0.24),
      new THREE.MeshBasicMaterial({
        color: this.heroDef.color,
        transparent: true, opacity: 0.68, blending: THREE.AdditiveBlending, depthWrite: false,
      }),
    );
    this.heroPad.position.set(0, -0.62, 0.02);

    // Subtle horizontal Battle Line across the shaft
    this.heroLine = new THREE.Mesh(
      new THREE.PlaneGeometry(this.cols - 2, 0.06),
      new THREE.MeshBasicMaterial({
        color: this.heroDef.color,
        transparent: true, opacity: 0.28, blending: THREE.AdditiveBlending, depthWrite: false,
      }),
    );
    this.heroLine.position.set(0, -0.62, 0.01);

    this.heroGroup.add(this.heroLine, this.heroPad, this.heroSprite);
    this.heroGroup.position.z = 0.82;
    this.scene.add(this.heroGroup);
    const hp = this.to3(this.heroX, this.heroY);
    this.heroGroup.position.set(hp.x, hp.y, 0.82);
    this.heroLine.position.x = -hp.x;
  }

  /** Set horizontal keyboard movement direction (-1 left, 0 idle, +1 right). */
  setHeroInputDir(dir: number) {
    this.heroInputDir = Math.sign(dir);
  }

  /** Set normalized pointer X (0..1 across right-hand mine pane) for mouse/touch Hero control. */
  setHeroPointer(normX: number, active: boolean) {
    const clamped = Math.max(0, Math.min(1, normX));
    this.heroPointerX = (1.15 + clamped * (this.cols - 2.3)) * this.B;
    this.heroPointerActive = active;
  }

  /** Updates Hero battle-line position, movement, and BALL x PIT Catch & Volley triggers. */
  private updateHeroAndVolley(dt: number) {
    const targetHeroY = Math.max(
      1.1 * this.B,
      Math.max(this.lavaY + 2.1 * this.B, this.deepestY - BAL.heroLineGapRows * this.B),
    );
    this.heroY += (targetHeroY - this.heroY) * Math.min(1, dt * 6.0);

    const minX = 1.15 * this.B;
    const maxX = (this.cols - 1.15) * this.B;
    const moveSpd = this.heroDef.moveSpeed * 6.5 * this.B;
    let moveDir = 0;

    if (this.heroInputDir !== 0) {
      moveDir = this.heroInputDir;
      this.heroX += moveDir * moveSpd * dt;
    } else if (this.heroPointerActive) {
      const dx = this.heroPointerX - this.heroX;
      if (Math.abs(dx) > 1.5) {
        moveDir = Math.sign(dx);
        this.heroX += moveDir * Math.min(Math.abs(dx), moveSpd * 1.35 * dt);
      }
    } else {
      // Patrol Assist (55% speed) toward the nearest rising weapon when player is managing the Backpack
      let bestW: Weapon | null = null;
      let bestDistY = Infinity;
      for (const w of this.weapons) {
        if (w.dead || w.hitsSinceThrow < 1) continue;
        if ((w.body.velocity.y < -0.4 || w.returningToHero) && w.y >= this.heroY - this.B * 0.5) {
          const dy = w.y - this.heroY;
          if (dy < bestDistY) {
            bestDistY = dy;
            bestW = w;
          }
        }
      }
      const targetX = bestW ? bestW.x : (this.cols / 2) * this.B;
      const dx = targetX - this.heroX;
      if (Math.abs(dx) > 2.5) {
        moveDir = Math.sign(dx);
        this.heroX += moveDir * Math.min(Math.abs(dx), moveSpd * 0.55 * dt);
      }
    }
    this.heroX = Math.max(minX, Math.min(maxX, this.heroX));

    // Update Hero visual position & facing
    const hp = this.to3(this.heroX, this.heroY);
    const bob = Math.abs(Math.sin(this.time * 5.2)) * 0.05;
    this.heroGroup.position.set(hp.x, hp.y + bob, 0.82);
    this.heroLine.position.x = -hp.x;
    if (moveDir !== 0) {
      this.heroSprite.scale.x = moveDir < 0 ? -1 : 1;
    }

    // Check rebounding weapons for Catch & Volley or Ceiling Miss
    const catchHalfW = (this.heroDef.catchWidth * 0.55 + 0.35) * this.B;
    for (const w of [...this.weapons]) {
      if (w.dead || w.hitsSinceThrow < 1 || this.time - w.lastCatchTime < 0.36) continue;
      const rising = w.body.velocity.y < 1.8 || w.returningToHero;
      if (rising && Math.abs(w.y - this.heroY) <= 1.05 * this.B && Math.abs(w.x - this.heroX) <= catchHalfW) {
        this.triggerHeroCatch(w);
      } else if (w.body.velocity.y < 0 && w.y < this.heroY - 0.65 * this.B) {
        // Missed catch -> hits battle-line ceiling (-8% HP wear, resets combo)
        w.volleyStacks = 0;
        w.returningToHero = false;
        w.hitsSinceThrow = 0;
        w.lastCatchTime = this.time;
        this.catchStreak = 0;
        if (!w.invuln) w.hp -= w.maxHp * BAL.missCeilingWearPct;
        Matter.Body.setPosition(w.body, { x: w.x, y: this.heroY + 0.45 * this.B });
        Matter.Body.setVelocity(w.body, { x: (Math.random() - 0.5) * 3.2, y: 4.5 });
        const wp = this.to3(w.x, this.heroY);
        this.fx.text(wp.x, wp.y + 0.45, '漏接 -8%HP', '#ff7a68', 0.72, 0.32);
        if (w.hp <= 0) this.killWeapon(w);
      }
    }
  }

  /** Triggers a BALL x PIT Catch & Volley on `w`, applying 5s Volley Buff + Hero Signature Skill! */
  triggerHeroCatch(w: Weapon) {
    if (w.dead) return;
    w.lastCatchTime = this.time;
    this.totalCatches++;
    this.catchStreak++;
    w.volleyStacks = Math.min(BAL.volleyMaxStacks, w.volleyStacks + 1);
    w.volleyUntil = this.time + BAL.volleyBuffSec;

    // Heal weapon on catch (+22% HP, +18% for Excalibur)
    const healPct = w.def.lifespanDecay ? 0.18 : BAL.volleyHealPct;
    w.hp = Math.min(w.maxHp, w.hp + w.maxHp * healPct);

    if (w.def.archetype === 'heavy') {
      w.heavyVolleyReady = true;
    }

    // Aim toward nearest enemy below Hero or deepest point
    const targetE = this.nearestEnemy(this.heroX, this.heroY + 4 * this.B, 10 * this.B);
    const aimX = targetE ? targetE.x : this.heroX + (Math.random() - 0.5) * 2.4 * this.B;
    const aimY = targetE ? targetE.y : this.deepestY + 2 * this.B;
    w.throwFromHero(aimX, aimY, true);

    // Hero Signature Volley Skill
    switch (this.heroId) {
      case 'bardin':
        w.bardinShockReady = true;
        break;
      case 'kael':
        zap(this, w, 3 + this.mods.thunderChainBonus, 6.5, w.dmg * 0.85);
        break;
      case 'vera':
        w.veraCritUntil = this.time + BAL.volleyBuffSec;
        if (this.totalCatches % 3 === 0 && this.weapons.length < BAL.maxWeapons) {
          const phantom = this.spawnWeapon('needle', w.power, { forceSpawn: true });
          this.schedule(6.0, () => {
            if (!phantom.dead) this.killWeapon(phantom);
          });
        }
        break;
      case 'ignis':
        w.ignisMeteorReady = true;
        break;
      case 'iris':
        w.irisFrostUntil = this.time + BAL.volleyBuffSec;
        this.healAll(0.12);
        break;
    }

    const hp = this.to3(this.heroX, this.heroY);
    this.fx.ring(hp.x, hp.y, 1.35, this.heroDef.color, 0.38);
    this.sparks.burst(hp.x, hp.y, 0.7, 14, this.heroDef.color, 3.2, 0.45, -1);
    const bonusPct = Math.round((BAL.volleyBaseDmgBonus + (w.volleyStacks - 1) * BAL.volleyStackDmgBonus) * 100);
    this.fx.text(
      hp.x, hp.y + 0.85,
      `🏓 ${this.heroDef.volleyName}！×${this.catchStreak} (+${bonusPct}%)`,
      '#ffe878', 0.9, 0.4,
    );
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

  // ------------------------------------------------------------------ generation (Campaign & Endless)
  private generateCampaign() {
    const L = this.level;
    const A = BAL.airRows;
    for (let r = 0; r < this.rows; r++) {
      this.setCell(r, 0, 'bedrock', 1);
      this.setCell(r, this.cols - 1, 'bedrock', 1);
    }
    for (let r = A; r < A + L.depth; r++) {
      const f = (r - A) / L.depth;
      for (let c = 1; c < this.cols - 1; c++) {
        let t: BlockType = f < 0.08 ? 'dirt' : f < 0.5 ? 'stone' : 'deepslate';
        const rr = Math.random();
        if (f > 0.55 && rr < 0.035) t = 'obsidian';
        else if (f >= 0.1 && rr < 0.022) t = 'barrel';
        else if (f >= 0.18 && rr >= 0.022 && rr < 0.038) t = 'crystal';
        else if (f >= 0.08 && rr < 0.16) t = pickOre(f);
        this.setCell(r, c, t, L.hpMul);
      }
    }

    // Hard rock strata bands (+1 extra band & denser obsidian for tougher floors)
    const bands = (L.hardBands ?? 2) + 1;
    for (let bIdx = 1; bIdx <= bands; bIdx++) {
      const bandRow = A + Math.floor((L.depth * (bIdx - 0.45)) / (bands + 0.5));
      if (bandRow < A + 6 || bandRow >= A + L.depth - 6) continue;
      for (let r = bandRow; r <= bandRow + 1; r++) {
        for (let c = 1; c < this.cols - 1; c++) {
          this.setCell(r, c, Math.random() < (0.50 + bIdx * 0.10) ? 'obsidian' : 'deepslate', L.hpMul);
        }
      }
      const barrelCol = 2 + Math.floor(Math.random() * (this.cols - 4));
      this.setCell(bandRow, barrelCol, 'barrel', L.hpMul);
    }

    // Caves & cave monsters
    const weights = Object.entries(L.enemies) as [EnemyKind, number][];
    for (let i = 0; i < L.caves; i++) {
      const rc = A + 6 + Math.floor(Math.random() * (L.depth - 14));
      const cc = 2 + Math.floor(Math.random() * 5);
      this.carveCave(rc, cc, A + 3, A + L.depth - 6, L.hpMul, L.enemyHpMul, weights);
    }

    // Mid-level Gatekeeper Seal Chambers!
    const numGates = L.gates ?? 1;
    for (let gIdx = 1; gIdx <= numGates; gIdx++) {
      const sealRow = A + Math.floor((L.depth * gIdx) / (numGates + 1));
      const elites = gIdx === numGates && L.enemyHpMul >= 3.5 ? 2 : 1;
      const regulars = 2 + (gIdx % 2);
      this.buildGateChamber(gIdx, sealRow, elites, regulars, L.hpMul, L.enemyHpMul, weights);
    }

    // Stage Goal: Core (with Final Elite Gatekeepers!) or Stage Boss
    if (L.goal === 'core') {
      const coreRow = A + L.depth;
      const finalSealRow = coreRow - 1;
      this.buildGateChamber(900, finalSealRow, L.endElites ?? 1, 2, L.hpMul, L.enemyHpMul, weights);
      for (let c = 1; c < this.cols - 1; c++) {
        this.setCell(coreRow, c, 'core', L.hpMul);
        this.setCell(coreRow + 1, c, 'bedrock', 1);
      }
    } else if (L.goal === 'boss') {
      const floorRow = A + L.depth + 5;
      for (let r = A + L.depth - 1; r < floorRow; r++) {
        for (let c = 1; c < this.cols - 1; c++) this.setCell(r, c, null, 1);
      }
      for (let c = 1; c < this.cols - 1; c++) {
        this.setCell(floorRow, c, 'bedrock', 1);
        this.setCell(floorRow + 1, c, 'bedrock', 1);
      }
      const bKind: BossKind = L.boss ?? 'golem';
      const floorY = floorRow * this.B;
      // Campaign Bosses use their exact designed base HP from ENEMY_STATS (hpMul = 1.0)
      const boss = createBoss(this, bKind, (this.cols / 2) * this.B, floorY - this.B * 1.5, 1.0);
      this.boss = boss;
      this.addEnemy(boss);
      Matter.Composite.add(this.engine.world, boss.body);
    }
    this.generatedToRow = this.rows - 1;
  }

  /** Stream new 35-row Endless segments ahead of deepestY! */
  private ensureEndlessChunks() {
    const neededRow = Math.floor(this.deepestY / this.B) + 52;
    while (this.generatedToRow < neededRow) {
      this.endlessChunkIdx++;
      const k = this.endlessChunkIdx;
      const segStart = this.generatedToRow + 1;
      const sealRow = BAL.airRows + k * BAL.endlessGateEvery;
      this.rows = Math.max(this.rows, sealRow + 20);

      const blockMul = Math.pow(BAL.endlessBlockScalePerGate, k - 1);
      const enemyMul = Math.pow(BAL.endlessEnemyScalePerGate, k - 1);
      const weights: [EnemyKind, number][] = [['zombie', 3], ['skeleton', 2.5], ['mushroom', 2.5], ['spider', 2.5]];

      for (let r = segStart; r <= sealRow; r++) {
        this.setCell(r, 0, 'bedrock', 1);
        this.setCell(r, this.cols - 1, 'bedrock', 1);
        const depthM = r - BAL.airRows;
        const f = Math.min(1, depthM / 140);
        for (let c = 1; c < this.cols - 1; c++) {
          let t: BlockType = depthM < 8 ? 'dirt' : f < 0.45 ? 'stone' : 'deepslate';
          const rr = Math.random();
          if (f > 0.35 && rr < 0.04) t = 'obsidian';
          else if (depthM >= 6 && rr < 0.025) t = 'barrel';
          else if (depthM >= 10 && rr >= 0.025 && rr < 0.043) t = 'crystal';
          else if (depthM >= 5 && rr < 0.17) t = pickOre(f);
          this.setCell(r, c, t, blockMul);
        }
      }

      // 2 hard bands + 2 caves in each 35-row segment
      for (const bandOffset of [11, 23]) {
        const bandRow = segStart + bandOffset;
        if (bandRow < sealRow - 6) {
          for (let r = bandRow; r <= bandRow + 1; r++) {
            for (let c = 1; c < this.cols - 1; c++) {
              this.setCell(r, c, Math.random() < 0.65 ? 'obsidian' : 'deepslate', blockMul);
            }
          }
          this.setCell(bandRow, 2 + Math.floor(Math.random() * (this.cols - 4)), 'barrel', blockMul);
        }
      }
      for (const offset of [7, 20]) {
        const rc = segStart + offset;
        if (rc < sealRow - 6) {
          this.carveCave(rc, 2 + Math.floor(Math.random() * 5), segStart + 2, sealRow - 6, blockMul, enemyMul, weights);
        }
      }

      // Every 3rd gate (105m, 210m, 315m...) is a Boss Seal Chamber!
      if (k % 3 === 0) {
        const bossCycleIdx = (k / 3 - 1) % BOSS_CYCLE.length;
        const bKind = BOSS_CYCLE[bossCycleIdx];
        this.buildEndlessBossGate(k, sealRow, bKind, enemyMul);
      } else {
        const elites = 1 + Math.floor(k / 4);
        const regulars = 2 + (k % 3);
        this.buildGateChamber(k, sealRow, elites, regulars, blockMul, enemyMul, weights);
      }

      this.generatedToRow = sealRow;
    }
  }

  private carveCave(
    rc: number, cc: number, minR: number, maxR: number,
    blockMul: number, enemyMul: number, weights: [EnemyKind, number][],
  ) {
    const rx = 1 + Math.random() * 1.5, ry = 0.6 + Math.random() * 0.8;
    for (let r = Math.floor(rc - ry - 1); r <= rc + ry + 1; r++) {
      for (let c = 1; c < this.cols - 1; c++) {
        const dx = (c - cc) / (rx + 0.5), dy = (r - rc) / (ry + 0.5);
        if (dx * dx + dy * dy <= 1 && r >= minR && r <= maxR) this.setCell(r, c, null, 1);
      }
    }
    if (Math.random() < 0.55) {
      const rimC = Math.max(1, Math.min(this.cols - 2, cc + (Math.random() < 0.5 ? -2 : 2)));
      if (this.block(rc, rimC)) this.setCell(rc, rimC, Math.random() < 0.55 ? 'barrel' : 'crystal', blockMul);
    }
    // Spawn 1~2 cave guards
    const floors: [number, number][] = [];
    for (let r = rc - 2; r <= rc + 2; r++) {
      for (let c = Math.max(1, cc - 3); c <= Math.min(this.cols - 2, cc + 3); c++) {
        if (r >= minR && !this.block(r, c) && this.isSolid(r + 1, c)) floors.push([r, c]);
      }
    }
    const n = Math.min(floors.length, 1 + (Math.random() < 0.5 ? 1 : 0));
    for (let i = 0; i < n; i++) {
      const [r, c] = floors.splice(Math.floor(Math.random() * floors.length), 1)[0];
      this.spawnEnemy(pickWeightedEnemy(weights), (c + 0.5) * this.B, (r + 1) * this.B - this.B * 0.43, enemyMul);
    }
  }

  private buildGateChamber(
    gateId: number, sealRow: number, elites: number, regulars: number,
    blockMul: number, enemyMul: number, weights: [EnemyKind, number][],
  ) {
    // Remove any pre-existing cave monsters caught inside this 4-row arena so counts are clean
    for (let r = sealRow - 4; r < sealRow; r++) {
      for (let c = 1; c < this.cols - 1; c++) this.setCell(r, c, null, 1);
    }
    for (let c = 1; c < this.cols - 1; c++) {
      this.setCell(sealRow, c, 'seal', blockMul);
    }
    this.gates.set(gateId, { id: gateId, sealRow, unlocked: false, isBossGate: false });

    const cols = [1, 2, 3, 4, 5, 6, 7].sort(() => Math.random() - 0.5);
    let idx = 0;
    const floorY = sealRow * this.B;
    for (let i = 0; i < elites && idx < cols.length; i++) {
      const c = cols[idx++];
      const e = this.spawnEnemy(pickWeightedEnemy(weights), (c + 0.5) * this.B, floorY - this.B * 0.55, enemyMul);
      e.promoteElite();
      e.gateId = gateId;
    }
    for (let i = 0; i < regulars && idx < cols.length; i++) {
      const c = cols[idx++];
      const e = this.spawnEnemy(pickWeightedEnemy(weights), (c + 0.5) * this.B, floorY - this.B * 0.43, enemyMul);
      e.gateId = gateId;
    }
  }

  private buildEndlessBossGate(gateId: number, sealRow: number, bKind: BossKind, enemyMul: number) {
    for (let r = sealRow - 6; r < sealRow; r++) {
      for (let c = 1; c < this.cols - 1; c++) this.setCell(r, c, null, 1);
    }
    for (let c = 1; c < this.cols - 1; c++) {
      this.setCell(sealRow, c, 'seal', 1);
    }
    this.gates.set(gateId, { id: gateId, sealRow, unlocked: false, isBossGate: true });
    const floorY = sealRow * this.B;
    // Normalize Endless Boss HP relative to golem's 9500 base so scaling is smooth across cycles
    const normFactor = 9500 / ENEMY_STATS_BASE_HP[bKind];
    const boss = createBoss(this, bKind, (this.cols / 2) * this.B, floorY - this.B * 1.5, normFactor * enemyMul);
    boss.gateId = gateId;
    if (!this.boss || this.boss.dead) this.boss = boss;
    this.addEnemy(boss);
    Matter.Composite.add(this.engine.world, boss.body);
  }

  private checkGateUnlock(gateId: number | null) {
    if (gateId === null) return;
    const gate = this.gates.get(gateId);
    if (!gate || gate.unlocked) return;
    const remaining = this.enemies.some((e) => !e.dead && e.gateId === gateId);
    if (remaining) return;

    gate.unlocked = true;
    this.gatesCleared++;
    for (let c = 1; c < this.cols - 1; c++) {
      const b = this.block(gate.sealRow, c);
      if (b?.type === 'seal') {
        const p = this.to3(...this.center(gate.sealRow, c));
        this.sparks.burst(p.x, p.y, 0.7, 14, 0x78f0ff, 4, 0.65, -3);
        this.debris.burst(p.x, p.y, 0.6, 8, 0x3898c8, 3.5, 0.7);
        this.setCell(gate.sealRow, c, null, 1);
      }
    }
    const mid = this.to3(...this.center(gate.sealRow, 4));
    const gateGold = Math.round((gate.isBossGate ? 55 : 20) * this.mods.goldGainMul);
    this.cb.onGold?.(gateGold, 'gate');
    this.fx.ring(mid.x, mid.y, 3.4, 0x78f0ff, 0.6);
    this.fx.text(mid.x, mid.y + 0.8, gate.isBossGate ? `🔓 首領結界破除！+${gateGold}G` : `🔓 守層結界破除！+${gateGold}G`, '#7ef8ff', 1.5, 0.54);
    this.fx.shake = Math.max(this.fx.shake, 0.22);
    if (this.isEndless) {
      this.cb.onGateCleared?.(gateId, gate.isBossGate);
    }
  }

  /** Info about an approaching/active locked SealGate near the current focus or camera depth. */
  activeGateInfo(): { remaining: number; depthM: number; isBoss: boolean } | null {
    const deepRow = Math.floor(this.deepestY / this.B);
    const camRow = Math.floor(-this.camY);
    let nearest: SealGate | null = null;
    for (const g of this.gates.values()) {
      if (g.unlocked) continue;
      const nearDeepest = g.sealRow >= deepRow - 2 && g.sealRow - deepRow <= 18;
      const nearCam = Math.abs(g.sealRow - camRow) <= 12;
      if ((nearDeepest || nearCam) && (!nearest || g.sealRow < nearest.sealRow)) nearest = g;
    }
    if (!nearest) return null;
    const rem = this.enemies.filter((e) => !e.dead && e.gateId === nearest!.id).length;
    if (rem === 0) {
      this.checkGateUnlock(nearest.id);
      return null;
    }
    return { remaining: rem, depthM: Math.max(0, nearest.sealRow - BAL.airRows), isBoss: nearest.isBossGate };
  }

  spawnEnemy(kind: EnemyKind, x: number, y: number, hpMul = this.level.enemyHpMul) {
    const e = new Enemy(this, kind, x, y, hpMul);
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
  canMultiCopy(id: WeaponId): boolean {
    const def = WEAPONS[id];
    if (def.element === 'holy') {
      return Object.values(this.resonance).some((lv) => lv >= BAL.resonanceMaxLv);
    }
    return this.resonance[def.element] >= BAL.resonanceMaxLv;
  }

  acquireWeapon(id: WeaponId, power: number, forceSpawn = false, meta?: WeaponSpawnMeta): { weapon: Weapon; mode: 'spawned' | 'upgraded' } {
    const force = forceSpawn || Boolean(meta?.forceSpawn) || meta?.customCol !== undefined;
    if (!force && !this.canMultiCopy(id)) {
      const existing = this.weapons.find((w) => !w.dead && w.def.id === id);
      if (existing) {
        existing.upgradeFromDuplicate(power, meta?.hpBonusMul ?? 1, meta?.ultRateMul ?? 1, meta?.star ?? 1);
        return { weapon: existing, mode: 'upgraded' };
      }
    }
    return { weapon: this.spawnWeapon(id, power, meta), mode: 'spawned' };
  }

  spawnWeapon(id: WeaponId, power: number, meta?: WeaponSpawnMeta): Weapon {
    const [x, y] = this.findSpawnPoint(meta?.customCol);
    const w = new Weapon(this, id, power, x, y, meta);
    if (y - this.lavaY < this.B * 3) w.invulnUntil = Math.max(w.invulnUntil, this.time + 1.5);
    this.weapons.push(w);
    this.scene.add(w.group);
    Matter.Composite.add(this.engine.world, w.body);
    this.updateActiveRows();
    const p = this.to3(x, y);
    const elMeta = weaponElementMeta(w.def.element);
    this.fx.ring(p.x, p.y, 1.4, elMeta.color, 0.5);
    const starBadge = w.star > 1 ? `${'★'.repeat(w.star)} ` : '';
    this.fx.text(p.x, p.y - 0.9, starBadge + w.def.name, elMeta.css, 1.3, 0.48);
    this.sparks.burst(p.x, p.y, 0.8, 22, elMeta.color, 3.6, 0.55, 0);
    if (this.weapons.length > BAL.maxWeapons) {
      const lowCandidates = this.weapons.filter((o) => o !== w && o.def.category === 'low');
      const pool = lowCandidates.length ? lowCandidates : this.weapons.filter((o) => o !== w);
      const weakest = pool.reduce((a, b) => (a.hp / a.maxHp < b.hp / b.maxHp ? a : b));
      this.killWeapon(weakest);
    }
    return w;
  }

  /** Drops a high-impact dwarven mining bomb into the mine (destroys hard rock, damages monsters, breaks Golem shell). */
  dropTacticalBomb(col?: number) {
    const targetCol = col !== undefined ? Math.max(1, Math.min(this.cols - 2, col)) : 4;
    const [x, y] = this.findSpawnPoint(targetCol);
    const explodeY = Math.max(y, this.deepestY - this.B * 0.4);
    const p = this.to3((targetCol + 0.5) * this.B, explodeY);
    const scale = this.isEndless ? Math.pow(BAL.endlessBlockScalePerGate, Math.max(0, this.endlessChunkIdx - 1)) : this.level.hpMul;
    this.fx.explosion(p.x, p.y, 3.3, 0xff8830);
    this.fx.text(p.x, p.y + 0.8, '🧨 矮人深層炸彈！', '#ffcc58', 1.45, 0.52);
    this.fx.shake = Math.max(this.fx.shake, 0.28);
    this.explode((targetCol + 0.5) * this.B, explodeY, 3.2 + this.mods.aoeBonus, 420 * scale, { kind: 'explosion' });
  }

  private findSpawnPoint(preferredCol?: number): [number, number] {
    const spawnY = Math.max(this.lavaY + this.B * 0.8, this.heroY + this.B * 0.55);
    if (preferredCol !== undefined) {
      const c = Math.max(1, Math.min(this.cols - 2, preferredCol));
      const r = Math.floor(spawnY / this.B);
      if (!this.isSolid(r, c)) return [(c + 0.5) * this.B, spawnY];
    }
    const heroCol = Math.max(1, Math.min(this.cols - 2, Math.floor(this.heroX / this.B)));
    const r = Math.floor(spawnY / this.B);
    if (!this.isSolid(r, heroCol)) {
      return [this.heroX, spawnY];
    }
    for (let dc = 1; dc < this.cols; dc++) {
      for (const s of [-1, 1]) {
        const c = heroCol + dc * s;
        if (c >= 1 && c < this.cols - 1 && !this.isSolid(r, c)) {
          return [(c + 0.5) * this.B, spawnY];
        }
      }
    }
    return [this.heroX, Math.max(this.lavaY + this.B * 0.8, this.deepestY - this.B)];
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
      // Vera passive & Volley crit: +25% crit chance (100% during Vera Volley) for +35% crit damage
      const veraSpec = this.heroId === 'vera' && (w.def.element === 'poison' || w.def.archetype === 'pinball' || w.def.archetype === 'boomerang');
      const veraCritActive = this.time < w.veraCritUntil;
      const isVeraCrit = veraCritActive || (veraSpec && Math.random() < 0.25);
      const hitDmg = w.dmg * (isVeraCrit ? 1.35 : 1.0);
      const hitSrc = w.src('hit', isVeraCrit);

      if (t.kind === 'block') {
        const b = this.block(t.r, t.c);
        if (!b) continue;
        if (!w.invuln && !w.def.lifespanDecay) {
          const irisWearMul = this.heroId === 'iris' && (w.def.element === 'ice' || w.def.element === 'holy') ? 0.7 : 1.0;
          w.hp -= BLOCKS[b.type].wear * this.mods.wearMul * irisWearMul;
        }
        if (this.isIndestructible(b.type)) {
          if (w.hp <= 0) this.killWeapon(w);
          continue;
        }
        w.lastHit = this.time;
        this.damageCell(t.r, t.c, hitDmg, hitSrc);
        const [x, y] = this.center(t.r, t.c);
        const p = this.to3((x + w.x) / 2, (y + w.y) / 2);
        this.debris.burst(p.x, p.y, 0.6, 3, BLOCK_TINT[b.type] ?? 0x888888, 2, 0.4);
      } else {
        if (t.e.dead) continue;
        w.lastHit = this.time;
        this.damageEnemy(t.e, hitDmg, hitSrc);
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
      for (let k = r - 3; k <= r + 3; k++) if (k >= this.minStoredRow && k < this.rows) need.add(k);
    }
    for (const r of this.activeRows) if (!need.has(r)) this.setRowBodies(r, false);
    for (const r of need) if (!this.activeRows.has(r)) this.setRowBodies(r, true);
    this.activeRows = need;
  }

  private setRowBodies(r: number, on: boolean) {
    for (let c = 1; c < this.cols - 1; c++) {
      const b = this.block(r, c);
      if (!b) continue;
      if (on && !b.body) {
        const [x, y] = this.center(r, c);
        b.body = Matter.Bodies.rectangle(x, y, this.B, this.B, { isStatic: true, friction: 0.35, restitution: 0.35, label: 'block' });
        b.body.plugin = { kind: 'block', r, c };
        Matter.Composite.add(this.engine.world, b.body);
      } else if (!on && b.body) {
        Matter.Composite.remove(this.engine.world, b.body);
        b.body = null;
      }
    }
  }

  // ------------------------------------------------------------------ damage API
  damageCell(r: number, c: number, dmg: number, src: DmgSrc): boolean | null {
    const b = this.block(r, c);
    if (!b || this.isIndestructible(b.type) || c <= 0 || c >= this.cols - 1) return null;
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
    const b = this.grid.get(i);
    if (!b) return;
    const st = this.status.get(i);
    // Free cell & instance first to prevent any re-entrant recursion on barrel chains
    this.setCell(r, c, null, 1);

    const p = this.to3(...this.center(r, c));
    const tint = BLOCK_TINT[b.type] ?? 0x888888;
    this.debris.burst(p.x, p.y, 0.5, 8, tint, 3, 0.7);
    const info = BLOCKS[b.type];
    // v0.6 Hell Hardcore Economy: dirt drops 0G; stone (10% -> 1G) & deepslate (18% -> 1G); ores/crystals/core drop BLOCK_GOLD
    let rawG = BLOCK_GOLD[b.type] ?? 0;
    if (b.type === 'stone' && Math.random() < 0.10) rawG = 1;
    else if (b.type === 'deepslate' && Math.random() < 0.18) rawG = 1;
    if (rawG > 0) {
      const gold = Math.max(1, Math.round(rawG * this.mods.goldGainMul));
      this.cb.onGold?.(gold, b.type);
      if (rawG >= 5) {
        this.fx.text(p.x, p.y + 0.35, `+${gold}G`, '#ffd858', 0.85, 0.34);
      }
    }
    if (info.ore) {
      this.sparks.burst(p.x, p.y, 0.7, 10, tint, 3, 0.7, -2);
      this.cb.onResource(info.ore);
    }
    if (st && st.plague && st.poisonUntil > this.time) {
      for (let dr = -1; dr <= 1; dr++)
        for (let dc = -1; dc <= 1; dc++)
          if (dr || dc) this.poisonCell(r + dr, c + dc, st.poisonDps, 3, true, st.venomUntil > this.time);
      this.sparks.burst(p.x, p.y, 0.7, 10, 0x7ee05a, 2, 0.7, 0);
    }
    if (b.type === 'barrel') {
      const [cx, cy] = this.center(r, c);
      this.fx.text(p.x, p.y + 0.5, '🧨 轟爆！', '#ffaa48', 0.9, 0.42);
      const scale = this.isEndless ? Math.pow(BAL.endlessBlockScalePerGate, Math.max(0, this.endlessChunkIdx - 1)) : this.level.hpMul;
      this.explode(cx, cy, BAL.barrelRad, BAL.barrelDmg * scale, { kind: 'explosion' });
    } else if (b.type === 'crystal') {
      this.healAll(BAL.crystalHealPct);
      this.fx.ring(p.x, p.y, 2.2, 0x7ef4ff, 0.5);
      this.fx.text(p.x, p.y + 0.5, `💎 水晶治癒 +${Math.round(BAL.crystalHealPct * 100)}%`, '#7ef4ff', 1.15, 0.44);
    } else if (b.type === 'core' && !this.ended) {
      this.fx.explosion(p.x, p.y, 3, 0xd080ff);
      this.end(true, '擊破礦脈核心！');
    }
  }

  damageEnemy(e: Enemy, dmg: number, src: DmgSrc) {
    if (e.dead) return;
    let d = dmg * this.mods.enemyDmgMul;
    if (src.weapon?.def.id === 'boomerang' && e.frozen) d *= 2;
    if (src.kind !== 'dot' && e.venomUntil > this.time) d *= 1.5;

    // 3-Boss elemental shield counterplay (Bardin's Earth/Shock attacks also shatter Golem shell!)
    const bardinShieldBreak = this.heroId === 'bardin' && (src.element === 'earth' || src.kind === 'shock');
    if (e instanceof Golem && e.shielded) {
      if (src.kind === 'thunder' || src.kind === 'explosion' || src.kind === 'holy' || bardinShieldBreak) e.breakShell();
      else d *= 0.5;
    } else if (e instanceof SpiderQueen && e.shielded) {
      if (src.element === 'fire' || src.kind === 'fire' || src.crit) e.breakCocoon();
      else d *= 0.6;
    } else if (e instanceof Balrog && e.shielded) {
      if (src.element === 'ice' || src.kind === 'ice' || src.kind === 'holy') e.breakMoltenShield();
      else {
        d *= 0.4;
        if (src.kind === 'hit' && src.weapon) this.hurtWeapon(src.weapon, 8 * e.dmgMul);
      }
    }

    e.hp -= d;
    if (src.kind !== 'dot') e.hurtFlash = 0.08;
    if (e.hp <= 0) this.killEnemy(e);
  }

  private killEnemy(e: Enemy) {
    if (e.dead) return;
    e.dead = true;
    this.kills++;
    Matter.Composite.remove(this.engine.world, e.body);
    this.scene.remove(e.group);
    this.enemies = this.enemies.filter((o) => o !== e);
    const p = this.to3(e.x, e.y);
    const rawKillGold = e.isBoss ? 90 : e.isElite ? 26 : 9;
    const killGold = Math.round(rawKillGold * this.mods.goldGainMul);
    this.cb.onGold?.(killGold, e.isBoss ? 'boss' : e.isElite ? 'elite' : 'enemy');
    if (e.isBoss || e.isElite) {
      this.fx.text(p.x, p.y + 0.65, `💰+${killGold}G`, '#ffd858', 1.25, 0.45);
    } else {
      this.fx.text(p.x, p.y + 0.45, `+${killGold}G`, '#ffd858', 0.9, 0.36);
    }
    this.debris.burst(p.x, p.y, 0.6, e.isBoss ? 70 : e.isElite ? 28 : 14, 0xa04040, e.isBoss ? 7 : 3.2, 0.8);
    if (e.plague && e.poisonUntil > this.time) {
      for (const o of this.enemiesInRadius(e.x, e.y, 2 * this.B)) this.poisonEnemy(o, e.poisonDps, 3, 1, true);
      const [r, c] = this.cellOf(e.x, e.y);
      for (let dr = -1; dr <= 1; dr++) for (let dc = -1; dc <= 1; dc++) this.poisonCell(r + dr, c + dc, e.poisonDps, 3, true);
      this.fx.ring(p.x, p.y, 2, 0x7ee05a, 0.5);
    }
    if (this.boss === e) {
      // Find next alive Boss if any (in Endless), otherwise clear
      this.boss = (this.enemies.find((o) => o.isBoss && !o.dead) as Boss | undefined) ?? null;
    }
    if (e.gateId !== null) {
      this.checkGateUnlock(e.gateId);
    }
    if (e.isBoss && !this.isEndless && !this.ended) {
      this.fx.explosion(p.x, p.y, 4, 0xffa040);
      this.end(true, `擊敗${ENEMY_STATS_NAME[e.kind as BossKind]}！`);
    }
  }

  damageSquare(r0: number, c0: number, rad: number, dmg: number, src: DmgSrc) {
    for (let r = r0 - rad; r <= r0 + rad; r++) for (let c = c0 - rad; c <= c0 + rad; c++) this.damageCell(r, c, dmg, src);
    const [x, y] = this.center(r0, c0);
    const half = (rad + 0.5) * this.B;
    for (const e of [...this.enemies]) {
      if (Math.abs(e.x - x) <= half + e.size * this.B * 0.5 && Math.abs(e.y - y) <= half + e.size * this.B * 0.5) {
        this.damageEnemy(e, dmg, src);
      }
    }
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
    this.sparks.burst(p.x, p.y, 0.7, 24, 0xffa040, 4.5, 0.55, -4);
    this.debris.burst(p.x, p.y, 0.6, 12, 0x555555, 4, 0.75);
  }

  enemyExplode(e: Enemy, radBlocks: number, dmg: number) {
    for (const w of this.weapons) if (Math.hypot(w.x - e.x, w.y - e.y) < (radBlocks + 0.5) * this.B) this.hurtWeapon(w, dmg);
    const [r0, c0] = this.cellOf(e.x, e.y);
    for (let r = r0 - 1; r <= r0 + 1; r++) for (let c = c0 - 1; c <= c0 + 1; c++) this.damageCell(r, c, 25, { kind: 'enemy' });
    const p = this.to3(e.x, e.y);
    this.fx.explosion(p.x, p.y, radBlocks, 0xff4a2a);
    this.killEnemy(e);
  }

  private cellStatus(r: number, c: number): CellStatus | null {
    const b = this.block(r, c);
    if (!b || this.isIndestructible(b.type)) return null;
    const i = this.idx(r, c);
    let s = this.status.get(i);
    if (!s) {
      s = { poisonDps: 0, poisonUntil: 0, plague: false, venomUntil: 0, burnDps: 0, burnUntil: 0, frostUntil: 0 };
      this.status.set(i, s);
    }
    return s;
  }
  isCellPoisoned(r: number, c: number): boolean {
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
    if (e instanceof SpiderQueen && e.shielded) e.breakCocoon();
  }
  freezeEnemy(e: Enemy, dur: number) {
    e.frozenUntil = Math.max(e.frozenUntil, this.time + (e.isBoss ? dur * 0.4 : dur));
    if (e instanceof Balrog && e.shielded) e.breakMoltenShield();
  }
  stunEnemy(e: Enemy, dur: number) {
    e.stunnedUntil = Math.max(e.stunnedUntil, this.time + (e.isBoss ? dur * 0.3 : dur));
  }

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
          if (b && !this.isIndestructible(b.type)) cells.push([rr, cc]);
        }
      cells.sort(() => Math.random() - 0.5);
      for (const [rr, cc] of cells) { if (out.length >= n) break; out.push({ kind: 'block', r: rr, c: cc }); }
    }
    return out;
  }

  addProjectile(p: Projectile) {
    let mesh: THREE.Object3D;
    if (p.kind === 'meteor') {
      const m = new THREE.SpriteMaterial({ map: Tex.glow(), color: new THREE.Color(1.8, 0.9, 0.3), blending: THREE.AdditiveBlending, depthWrite: false });
      mesh = new THREE.Sprite(m);
      mesh.scale.setScalar(1.5);
    } else {
      const tex = p.kind === 'arrow' ? Tex.arrow()
        : p.kind === 'web' ? Tex.web()
          : p.kind === 'rock' ? Tex.rock()
            : p.kind === 'fireball' ? Tex.fireball()
              : Tex.iceShard();
      const size = p.kind === 'rock' || p.kind === 'fireball' ? 0.9 : p.kind === 'web' ? 0.72 : 0.6;
      mesh = new THREE.Mesh(
        new THREE.PlaneGeometry(size, size),
        new THREE.MeshBasicMaterial({
          map: tex, transparent: true, alphaTest: 0.3, side: THREE.DoubleSide,
          color: p.kind === 'shard' ? new THREE.Color(1.3, 1.5, 1.7) : 0xffffff,
        }),
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
            if (p.kind === 'web') {
              if (!w.invuln) w.webbedUntil = this.time + 2.2;
              if (p.dmg > 0) this.hurtWeapon(w, p.dmg);
            } else this.hurtWeapon(w, p.dmg);
            alive = false;
            break;
          }
        }
        if (alive && !p.passThrough && this.isSolid(r, c)) alive = false;
        if ((p.kind === 'rock' || p.kind === 'fireball') && this.isSolid(r, c) && p.y > this.deepestY + this.B * 2) alive = false;
      } else if (alive && p.from === 'weapon') {
        if (p.kind === 'meteor') {
          const pp = this.to3(p.x, p.y);
          this.sparks.emit(pp.x + (Math.random() - 0.5) * 0.3, pp.y, 0.8, 0, 1, 0, 0xffa040, 0.4, 0);
          const hitEnemy = this.enemies.find((e) => Math.hypot(e.x - p.x, e.y - p.y) < p.r + e.size * this.B * 0.5);
          const blk = this.block(r, c);
          if (hitEnemy || (blk && blk.type !== 'bedrock')) {
            this.explode(p.x, p.y, 2 + this.mods.aoeBonus, p.dmg, p.src!);
            alive = false;
          }
        } else {
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
      if (p.mesh instanceof THREE.Mesh) {
        p.mesh.rotation.z = p.kind === 'rock' || p.kind === 'web' || p.kind === 'fireball'
          ? p.mesh.rotation.z + dt * 6
          : Math.atan2(-p.vy, p.vx);
      }
      keep.push(p);
    }
    this.projectiles = keep;
  }

  // ------------------------------------------------------------------ status ticking
  private updateStatus(dt: number) {
    for (const [i, s] of this.status) {
      const r = Math.floor(i / this.cols), c = i % this.cols;
      const b = this.grid.get(i);
      if (!b) { this.status.delete(i); continue; }
      const poisoned = s.poisonUntil > this.time;
      const burning = s.burnUntil > this.time;
      const frosted = s.frostUntil > this.time;
      const pool = this.getPool(b.type);
      if (!poisoned && !burning && !frosted) {
        pool.mesh.setColorAt(b.inst, this.tmpCol.setRGB(1, 1, 1));
        pool.mesh.instanceColor!.needsUpdate = true;
        this.status.delete(i);
        continue;
      }
      const flick = 0.94 + Math.random() * 0.1;
      if (burning && poisoned) this.tmpCol.setRGB(1.3 * flick, 1.05, 0.45);
      else if (burning) this.tmpCol.setRGB(1.45 * flick, 0.85 * flick, 0.48);
      else if (poisoned) this.tmpCol.setRGB(0.68, 1.3, 0.55);
      else this.tmpCol.setRGB(0.68, 0.96, 1.32);
      pool.mesh.setColorAt(b.inst, this.tmpCol);
      pool.mesh.instanceColor!.needsUpdate = true;
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
  viewHalf(): [number, number] {
    const t = Math.tan(THREE.MathUtils.degToRad(this.camera.fov / 2));
    const h = this.viewDist() * t;
    return [h * this.aspect, h];
  }
  viewTopY(): number { return (-this.camY - this.viewHalf()[1]) * this.B; }

  get cameraMode(): 'auto' | 'manual' | 'locked' {
    if (this.isManualCam) return 'manual';
    if (this.lockedWeaponUid !== null) return 'locked';
    return 'auto';
  }

  panCamera(deltaBlocks: number) {
    this.isManualCam = true;
    this.lockedWeaponUid = null;
    const minY = -(this.generatedToRow - 1);
    const maxY = -(this.minStoredRow + 2);
    this.camTargetY = Math.max(minY, Math.min(Math.max(maxY, 1.5), this.camTargetY + deltaBlocks));
    this.camY = this.camTargetY;
  }

  toggleLockWeapon(uid: number) {
    if (this.lockedWeaponUid === uid && !this.isManualCam) {
      this.resetCameraFollow();
      return;
    }
    if (this.weapons.some((w) => !w.dead && w.uid === uid)) {
      this.lockedWeaponUid = uid;
      this.isManualCam = false;
    }
  }

  resetCameraFollow() {
    this.isManualCam = false;
    this.lockedWeaponUid = null;
  }

  private updateCamera(dt: number) {
    const half = this.viewHalf()[1];
    if (!this.isManualCam) {
      let focusW: Weapon | null = null;
      if (this.lockedWeaponUid !== null) {
        focusW = this.weapons.find((w) => !w.dead && w.uid === this.lockedWeaponUid) ?? null;
        if (!focusW) this.lockedWeaponUid = null;
      }
      if (!focusW) focusW = this.deepestWeapon();
      if (focusW) this.lastFocusY = focusW.y;
      else this.lastFocusY = this.deepestY;
      // Frame both the Hero Battle Line (heroY) and the deepest digging floor (lastFocusY)
      const midY = this.lockedWeaponUid !== null ? this.lastFocusY : this.heroY * 0.38 + this.lastFocusY * 0.62;
      this.camTargetY = -midY / this.B + half * 0.08;
    }
    this.camY += (this.camTargetY - this.camY) * Math.min(1, dt * (this.isManualCam ? 12 : 3.2));
    this.updateBackdropPosition(Math.floor(-this.camY));

    // Keep side physics walls centred around current camera depth (infinite shaft support!)
    const worldCamY = -this.camY * this.B;
    if (Math.abs(this.leftWall.position.y - worldCamY) > 800) {
      Matter.Body.setPosition(this.leftWall, { x: this.B / 2, y: worldCamY });
      Matter.Body.setPosition(this.rightWall, { x: (this.cols - 0.5) * this.B, y: worldCamY });
    }

    const d = this.viewDist();
    const pitch = THREE.MathUtils.degToRad(14);
    const sx = (Math.random() - 0.5) * this.fx.shake, sy = (Math.random() - 0.5) * this.fx.shake;
    this.camera.aspect = this.aspect;
    this.camera.position.set(sx, this.camY + Math.sin(pitch) * d + sy, Math.cos(pitch) * d);
    this.camera.lookAt(sx * 0.5, this.camY, 0);
    this.camera.updateProjectionMatrix();
    (this.scene.fog as THREE.Fog).near = d - 2;
    (this.scene.fog as THREE.Fog).far = d + 30;
    const f = Math.min(1, Math.max(0, (-this.camY - BAL.airRows) / 140));
    this.hemi.intensity = 1.0 - f * 0.52;
  }

  private updateLights() {
    const reqs: LightReq[] = [];
    const lavaP = this.to3(this.cols * this.B / 2, this.lavaY);
    reqs.push({ x: lavaP.x, y: lavaP.y - 0.5, color: 0xff6a20, intensity: 8, dist: 11, prio: 9 });
    for (const l of this.fx.flashLights) reqs.push({ ...l, intensity: l.intensity * (l.t / l.dur) });
    for (const w of this.weapons) {
      const p = this.to3(w.x, w.y);
      const meta = weaponElementMeta(w.def.element);
      reqs.push({
        x: p.x, y: p.y,
        color: this.overdriveActive ? 0xffb848 : meta.color,
        intensity: this.overdriveActive ? 3.8 : w.ultReady >= 1 ? 3.2 : 2.2,
        dist: 5.5, prio: 3,
      });
    }
    if (this.boss && !this.boss.dead) {
      const p = this.to3(this.boss.x, this.boss.y);
      reqs.push({ x: p.x, y: p.y + 1, color: 0xff7a20, intensity: 3.8, dist: 6.5, prio: 2 });
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
      const b = this.grid.get(i);
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

  updateView(dt: number) {
    this.updateCamera(dt);
    this.updateLights();
  }

  // ------------------------------------------------------------------ main update
  update(dt: number) {
    if (this.ended) {
      this.fx.update(dt);
      this.debris.update(dt);
      this.sparks.update(dt);
      this.updateCamera(dt);
      return;
    }
    this.time += dt;
    if (!this.isEndless) this.timeLeft -= dt;

    if (this.isEndless) {
      this.ensureEndlessChunks();
      this.recycleTimer += dt;
      if (this.recycleTimer >= 1.0) {
        this.recycleTimer = 0;
        this.recycleRowsAbove(Math.floor(this.lavaY / this.B) - 16);
      }
    }

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
    this.updateHeroAndVolley(dt);
    for (const e of [...this.enemies]) {
      if (e.dead) continue;
      e.update(dt);
      if (e.y < this.lavaY) this.killEnemy(e);
    }
    if (this.isEndless && (!this.boss || this.boss.dead)) {
      this.boss = (this.enemies.find((o) => o.isBoss && !o.dead) as Boss | undefined) ?? null;
    }
    this.updateProjectiles(dt);
    this.updateStatus(dt);

    // lava movement + approaching embers
    const rawLavaSpeed = this.isEndless
      ? Math.min(BAL.endlessLavaMaxSpeed, BAL.endlessLavaBaseSpeed + this.gatesCleared * BAL.endlessLavaAccelPerGate)
      : this.level.lavaSpeed;
    if (this.time > BAL.lavaGrace) {
      this.lavaY += rawLavaSpeed * this.mods.lavaSpeedMul * this.B * dt;
    }
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

    if (this.lavaY >= this.deepestY && this.weapons.length === 0) {
      this.end(false, '岩漿吞沒了最深處且場上武器全滅');
    } else if (!this.isEndless && this.timeLeft <= 0) {
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

  get cameraCenterY(): number { return -this.camY * this.B; }
  snapCamera() {
    this.isManualCam = false;
    this.lockedWeaponUid = null;
    this.lastFocusY = this.deepestY;
    this.camY = this.camTargetY = -this.deepestY / this.B + this.viewHalf()[1] * 0.16;
    this.updateBackdropPosition(Math.floor(-this.camY));
  }

  get progress(): number {
    if (this.isEndless) {
      const d = Math.max(0, this.deepestY / this.B - BAL.airRows);
      return (d % BAL.endlessGateEvery) / BAL.endlessGateEvery;
    }
    return Math.min(1, Math.max(0, (this.deepestY / this.B - BAL.airRows) / this.level.depth));
  }
  get depthRows(): number {
    const raw = Math.max(0, Math.floor(this.deepestY / this.B - BAL.airRows));
    return this.isEndless ? raw : Math.min(this.level.depth, raw);
  }
  get nextEndlessGateDepth(): number {
    return (Math.floor(this.depthRows / BAL.endlessGateEvery) + 1) * BAL.endlessGateEvery;
  }
  get lavaGap(): number { return (this.deepestY - this.lavaY) / this.B; }
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

const ENEMY_STATS_BASE_HP: Record<BossKind, number> = {
  golem: 9500,
  spider_queen: 26000,
  balrog: 85000,
};
const ENEMY_STATS_NAME: Record<BossKind, string> = {
  golem: '岩石巨像',
  spider_queen: '劇毒蛛后',
  balrog: '深淵炎魔',
};

function pickWeightedEnemy(weights: [EnemyKind, number][]): EnemyKind {
  const tot = weights.reduce((s, [, w]) => s + w, 0);
  let r = Math.random() * tot;
  for (const [k, w] of weights) { if (r < w) return k; r -= w; }
  return weights[0][0];
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
