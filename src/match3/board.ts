// Match-3 board: rendering (Three.js, front view) + input + animated resolution.
import * as THREE from 'three';
import { EffectComposer } from 'three/examples/jsm/postprocessing/EffectComposer.js';
import { RenderPass } from 'three/examples/jsm/postprocessing/RenderPass.js';
import { UnrealBloomPass } from 'three/examples/jsm/postprocessing/UnrealBloomPass.js';
import { OutputPass } from 'three/examples/jsm/postprocessing/OutputPass.js';
import { Tex } from '../gfx/pixel';
import { Particles } from '../gfx/particles';
import { isLowQuality, pixelRatio } from '../gfx/quality';
import { BAL, ELEMENT_INFO, ELEMENTS, TILE_KINDS } from '../data/config';
import {
  N, Sp, type Grid, type Tile, type ClearStep, createBoard, findGroups, isValidSwap, findMove, shuffle,
  clearCells, comboEffects, collapse, areAdjacent,
} from './logic';

const TILE_COLORS = [...ELEMENTS.map((e) => ELEMENT_INFO[e].color), 0xff4a8a];

interface TileView {
  mesh: THREE.Mesh;
  overlay: THREE.Mesh | null;
  x: number; y: number; // current
  vy: number;
  scale: number;
  dying: number; // >0 while shrinking
}

export interface Match3Callbacks {
  onStep: (counts: number[]) => void; // running counts during a move
  onMoveEnd: (counts: number[]) => void;
}

const SWAP_TIME = 0.12;
const CLEAR_TIME = 0.16;

export class Match3 {
  readonly renderer: THREE.WebGLRenderer;
  private scene = new THREE.Scene();
  private camera = new THREE.OrthographicCamera(-5, 5, 5, -5, 0.1, 100);
  private composer: EffectComposer;
  private bloom: UnrealBloomPass;
  private grid: Grid = [];
  private views = new Map<number, TileView>();
  private dying: TileView[] = [];
  private geo = new THREE.BoxGeometry(0.9, 0.9, 0.32);
  private mats: THREE.Material[][] = [];
  private rainbowMats: THREE.Material[];
  private overlayGeo = new THREE.PlaneGeometry(0.9, 0.9);
  private overlayMats: Record<'lineH' | 'lineV' | 'bomb', THREE.MeshBasicMaterial>;
  private particles = new Particles(800, 7 * pixelRatio, true, false);
  private debris = new Particles(600, 6 * pixelRatio, false, false);
  private flashes: { mesh: THREE.Mesh; t: number; dur: number }[] = [];
  private selMesh: THREE.Mesh;
  private selected: [number, number] | null = null;
  private dragStart: { cell: [number, number]; x: number; y: number } | null = null;
  private locked = false;
  private timers: { t: number; resolve: () => void }[] = [];
  private idle = 0;
  private hint: [[number, number], [number, number]] | null = null;
  private time = 0;
  private padTop = 0;
  private padBottom = 0;
  private unitsPerPx = 0.01;
  enabled = false;

  constructor(private container: HTMLElement, private cb: Match3Callbacks) {
    this.renderer = new THREE.WebGLRenderer({ antialias: false, powerPreference: 'high-performance' });
    this.renderer.setPixelRatio(pixelRatio);
    this.renderer.toneMapping = THREE.ACESFilmicToneMapping;
    this.renderer.toneMappingExposure = 1.1;
    // hide tiles that are still falling in from above the board
    this.renderer.clippingPlanes = [new THREE.Plane(new THREE.Vector3(0, -1, 0), N / 2 + 0.3)];
    container.appendChild(this.renderer.domElement);
    this.renderer.domElement.style.touchAction = 'none';

    this.scene.background = new THREE.Color(0x140f18);
    this.camera.position.set(0, 0, 20);
    this.scene.add(new THREE.AmbientLight(0xffffff, 0.9));
    const dir = new THREE.DirectionalLight(0xfff0dd, 2.2);
    dir.position.set(-4, 6, 10);
    this.scene.add(dir);
    const rim = new THREE.DirectionalLight(0x6a8aff, 0.7);
    rim.position.set(5, -4, 6);
    this.scene.add(rim);

    // materials per tile kind
    for (let k = 0; k < TILE_KINDS; k++) {
      const side = new THREE.MeshStandardMaterial({ color: new THREE.Color(TILE_COLORS[k]).multiplyScalar(0.55), roughness: 0.6 });
      const front = new THREE.MeshStandardMaterial({ map: Tex.tile(k), roughness: 0.45, metalness: 0.05, emissive: 0xffffff, emissiveMap: Tex.tile(k), emissiveIntensity: 0.12 });
      this.mats.push([side, side, side, side, front, side]);
    }
    const rbSide = new THREE.MeshStandardMaterial({ color: 0x6a48c8, roughness: 0.45 });
    const rbFront = new THREE.MeshStandardMaterial({ map: Tex.rainbow(), emissive: 0xffffff, emissiveMap: Tex.rainbow(), emissiveIntensity: 0.45 });
    this.rainbowMats = [rbSide, rbSide, rbSide, rbSide, rbFront, rbSide];
    const mkOverlay = (k: 'lineH' | 'lineV' | 'bomb') =>
      new THREE.MeshBasicMaterial({ map: Tex.special(k), transparent: true, color: new THREE.Color(0.92, 0.9, 0.82), depthWrite: false });
    this.overlayMats = { lineH: mkOverlay('lineH'), lineV: mkOverlay('lineV'), bomb: mkOverlay('bomb') };

    // board backdrop
    const slotTex = Tex.backWall().clone();
    slotTex.wrapS = slotTex.wrapT = THREE.RepeatWrapping;
    slotTex.repeat.set(N, N);
    slotTex.needsUpdate = true;
    const backdrop = new THREE.Mesh(new THREE.PlaneGeometry(N, N), new THREE.MeshStandardMaterial({ map: slotTex, color: 0x77666a, roughness: 1 }));
    backdrop.position.z = -0.3;
    this.scene.add(backdrop);
    const frame = new THREE.Mesh(new THREE.BoxGeometry(N + 0.5, N + 0.5, 0.3), new THREE.MeshStandardMaterial({ map: Tex.block('bedrock'), color: 0x8a7a70 }));
    frame.position.z = -0.5;
    this.scene.add(frame);

    this.selMesh = new THREE.Mesh(
      new THREE.RingGeometry(0.51, 0.57, 4, 1, Math.PI / 4),
      new THREE.MeshBasicMaterial({ color: new THREE.Color(0.92, 0.78, 0.36) }),
    );
    this.selMesh.scale.set(1.14, 1.14, 1);
    this.selMesh.position.z = 0.4;
    this.selMesh.visible = false;
    this.scene.add(this.selMesh);
    this.scene.add(this.particles.points, this.debris.points);
    this.particles.points.position.z = 1;
    this.debris.points.position.z = 1;

    this.composer = new EffectComposer(this.renderer);
    this.composer.addPass(new RenderPass(this.scene, this.camera));
    this.bloom = new UnrealBloomPass(new THREE.Vector2(256, 256), isLowQuality ? 0.25 : 0.35, 0.35, 1.05);
    this.composer.addPass(this.bloom);
    this.composer.addPass(new OutputPass());

    this.bindInput();
    new ResizeObserver(() => this.resize()).observe(container);
    this.resize();
    this.reset();
  }

  setPadding(top: number, bottom: number) {
    this.padTop = top;
    this.padBottom = bottom;
    this.resize();
  }

  resize() {
    const w = Math.max(1, this.container.clientWidth);
    const h = Math.max(1, this.container.clientHeight);
    this.renderer.setSize(w, h, false);
    this.renderer.domElement.style.width = w + 'px';
    this.renderer.domElement.style.height = h + 'px';
    this.composer.setSize(w, h);
    const span = N + 0.9;
    const availH = Math.max(50, h - this.padTop - this.padBottom);
    const u = Math.max(span / w, span / availH);
    this.unitsPerPx = u;
    this.camera.left = (-w * u) / 2;
    this.camera.right = (w * u) / 2;
    this.camera.top = (h * u) / 2;
    this.camera.bottom = (-h * u) / 2;
    this.camera.position.y = ((this.padTop - this.padBottom) / 2) * u;
    this.camera.updateProjectionMatrix();
  }

  reset() {
    for (const v of this.views.values()) this.disposeView(v);
    this.views.clear();
    this.grid = createBoard();
    for (let r = 0; r < N; r++) for (let c = 0; c < N; c++) this.makeView(this.grid[r][c]!, r, c);
    this.selected = null;
    this.locked = false;
    this.idle = 0;
    this.hint = null;
    this.timers = [];
  }

  // ------------------------------------------------------------ views
  private cellPos(r: number, c: number): [number, number] {
    return [c - (N - 1) / 2, (N - 1) / 2 - r];
  }

  private makeView(t: Tile, r: number, c: number, fromR = r): TileView {
    const mesh = new THREE.Mesh(this.geo, t.special === Sp.Rainbow ? this.rainbowMats : this.mats[t.color]);
    const [x, y] = this.cellPos(r, c);
    const [, y0] = this.cellPos(fromR, c);
    mesh.position.set(x, y0, 0);
    this.scene.add(mesh);
    let overlay: THREE.Mesh | null = null;
    if (t.special === Sp.LineH || t.special === Sp.LineV || t.special === Sp.Bomb) {
      const k = t.special === Sp.LineH ? 'lineH' : t.special === Sp.LineV ? 'lineV' : 'bomb';
      overlay = new THREE.Mesh(this.overlayGeo, this.overlayMats[k]);
      overlay.position.z = 0.17;
      mesh.add(overlay);
    }
    const v: TileView = { mesh, overlay, x, y: y0, vy: 0, scale: 1, dying: 0 };
    this.views.set(t.id, v);
    return v;
  }

  private disposeView(v: TileView) {
    this.scene.remove(v.mesh);
  }

  private refreshView(t: Tile, r: number, c: number) {
    const old = this.views.get(t.id);
    if (old) this.disposeView(old);
    const v = this.makeView(t, r, c);
    v.scale = 0.2;
    v.mesh.scale.setScalar(0.2);
  }

  // ------------------------------------------------------------ input
  private toCell(ev: PointerEvent): { cell: [number, number] | null; x: number; y: number } {
    const rect = this.renderer.domElement.getBoundingClientRect();
    const px = ev.clientX - rect.left, py = ev.clientY - rect.top;
    const x = this.camera.left + px * this.unitsPerPx;
    const y = this.camera.top - py * this.unitsPerPx + this.camera.position.y;
    const c = Math.floor(x + N / 2);
    const r = Math.floor(N / 2 - y);
    return { cell: r >= 0 && c >= 0 && r < N && c < N ? [r, c] : null, x, y };
  }

  private bindInput() {
    const el = this.renderer.domElement;
    el.addEventListener('pointerdown', (ev) => {
      if (!this.enabled) return;
      el.setPointerCapture(ev.pointerId);
      const p = this.toCell(ev);
      if (!p.cell) return;
      this.dragStart = { cell: p.cell, x: p.x, y: p.y };
    });
    el.addEventListener('pointermove', (ev) => {
      if (!this.enabled || !this.dragStart || this.locked) return;
      const p = this.toCell(ev);
      const dx = p.x - this.dragStart.x, dy = p.y - this.dragStart.y;
      if (Math.max(Math.abs(dx), Math.abs(dy)) < 0.4) return;
      const [r, c] = this.dragStart.cell;
      const target: [number, number] = Math.abs(dx) > Math.abs(dy) ? [r, c + Math.sign(dx)] : [r - Math.sign(dy), c];
      this.dragStart = null;
      this.selected = null;
      if (target[0] >= 0 && target[1] >= 0 && target[0] < N && target[1] < N) void this.trySwap([r, c], target);
    });
    el.addEventListener('pointerup', (ev) => {
      if (!this.enabled) return;
      if (this.dragStart && !this.locked) {
        const cell = this.dragStart.cell;
        if (this.selected && areAdjacent(this.selected, cell)) {
          const a = this.selected;
          this.selected = null;
          void this.trySwap(a, cell);
        } else if (this.selected && this.selected[0] === cell[0] && this.selected[1] === cell[1]) {
          this.selected = null;
        } else {
          this.selected = cell;
        }
      }
      this.dragStart = null;
    });
    el.addEventListener('pointercancel', () => { this.dragStart = null; });
  }

  // ------------------------------------------------------------ timing
  private sleep(sec: number): Promise<void> {
    return new Promise((resolve) => this.timers.push({ t: sec, resolve }));
  }

  // ------------------------------------------------------------ resolution
  private async trySwap(a: [number, number], b: [number, number]) {
    if (this.locked) return;
    const ta = this.grid[a[0]][a[1]], tb = this.grid[b[0]][b[1]];
    if (!ta || !tb) return;
    this.locked = true;
    this.idle = 0;
    this.hint = null;
    const valid = isValidSwap(this.grid, a, b);
    // animate swap
    this.grid[a[0]][a[1]] = tb;
    this.grid[b[0]][b[1]] = ta;
    await this.sleep(SWAP_TIME);
    if (!valid) {
      this.grid[a[0]][a[1]] = ta;
      this.grid[b[0]][b[1]] = tb;
      await this.sleep(SWAP_TIME);
      this.locked = false;
      return;
    }
    const total = new Array(TILE_KINDS).fill(0);
    const combo = comboEffects(this.grid, b, a);
    let step: ClearStep;
    if (combo) {
      step = clearCells(this.grid, combo.cells, [], combo.effects);
    } else {
      const groups = findGroups(this.grid, [a, b]);
      step = this.clearGroups(groups);
    }
    for (;;) {
      for (let k = 0; k < TILE_KINDS; k++) total[k] += step.counts[k];
      this.cb.onStep(total.slice());
      this.animateClear(step);
      await this.sleep(CLEAR_TIME);
      const moves = collapse(this.grid);
      let maxDrop = 0;
      for (const m of moves) {
        let v = this.views.get(m.tile.id);
        if (!v) v = this.makeView(m.tile, m.r, m.c, m.fromR);
        maxDrop = Math.max(maxDrop, m.r - m.fromR);
      }
      await this.sleep(0.08 + Math.sqrt(maxDrop) * 0.09);
      const groups = findGroups(this.grid);
      if (groups.length === 0) break;
      step = this.clearGroups(groups);
    }
    this.cb.onMoveEnd(total);
    if (!findMove(this.grid)) {
      await this.sleep(0.3);
      shuffle(this.grid);
      for (const v of this.views.values()) v.vy = 6;
      await this.sleep(0.35);
    }
    this.locked = false;
  }

  private clearGroups(groups: ReturnType<typeof findGroups>): ClearStep {
    const cells: [number, number][] = [];
    const spawns: { at: [number, number]; color: number; special: Sp }[] = [];
    for (const g of groups) {
      cells.push(...g.cells);
      if (g.spawn !== Sp.None && g.spawnAt) spawns.push({ at: g.spawnAt, color: g.color, special: g.spawn });
    }
    return clearCells(this.grid, cells, spawns);
  }

  private animateClear(step: ClearStep) {
    for (const { tile } of step.cleared) {
      const v = this.views.get(tile.id);
      if (!v) continue;
      this.views.delete(tile.id);
      v.dying = CLEAR_TIME;
      this.dying.push(v);
      const col = tile.color >= 0 ? TILE_COLORS[tile.color] : 0xffffff;
      this.particles.burst(v.x, v.y, 0.3, 5, col, 4, 0.45, -6);
      this.debris.burst(v.x, v.y, 0.3, 3, new THREE.Color(col).multiplyScalar(0.7).getHex(), 3, 0.5, -10);
    }
    for (const { tile, r, c } of step.spawned) {
      this.refreshView(tile, r, c);
      const [x, y] = this.cellPos(r, c);
      this.particles.burst(x, y, 0.4, 10, 0xf2e6b8, 3.5, 0.45, 0);
    }
    for (const e of step.effects) {
      const [x, y] = this.cellPos(e.r, e.c);
      if (e.kind === 'lineH') this.flash(0, y, N, 0.38, 0xf0e4c0);
      else if (e.kind === 'lineV') this.flash(x, 0, 0.38, N, 0xf0e4c0);
      else if (e.kind === 'bomb') this.flash(x, y, (e.radius ?? 1) * 2 + 0.8, (e.radius ?? 1) * 2 + 0.8, 0xf0c878);
      else if (e.kind === 'rainbow') this.flash(x, y, 1.4, 1.4, 0xb880f0);
      else this.flash(0, 0, N, N, 0xe8d8b0, 0.22);
    }
  }

  private flash(x: number, y: number, w: number, h: number, color: number, maxOp = 0.32) {
    const m = new THREE.Mesh(
      new THREE.PlaneGeometry(w, h),
      new THREE.MeshBasicMaterial({ color: new THREE.Color(color).multiplyScalar(0.85), transparent: true, opacity: maxOp, blending: THREE.AdditiveBlending, depthWrite: false }),
    );
    m.userData.maxOp = maxOp;
    m.position.set(x, y, 0.5);
    this.scene.add(m);
    this.flashes.push({ mesh: m, t: 0.28, dur: 0.28 });
  }

  // ------------------------------------------------------------ frame
  update(dt: number) {
    this.time += dt;
    // timers (game time)
    if (this.timers.length) {
      const due: (() => void)[] = [];
      this.timers = this.timers.filter((t) => {
        t.t -= dt;
        if (t.t <= 0) { due.push(t.resolve); return false; }
        return true;
      });
      due.forEach((f) => f());
    }
    // idle hint
    if (this.enabled && !this.locked) {
      this.idle += dt;
      if (this.idle > BAL.hintDelay && !this.hint) this.hint = findMove(this.grid);
    }
    const hintIds = new Set<number>();
    if (this.hint) for (const [r, c] of this.hint) { const t = this.grid[r][c]; if (t) hintIds.add(t.id); }

    // tile positions
    for (let r = 0; r < N; r++)
      for (let c = 0; c < N; c++) {
        const t = this.grid[r][c];
        if (!t) continue;
        const v = this.views.get(t.id);
        if (!v) continue;
        const [tx, ty] = this.cellPos(r, c);
        // horizontal: ease
        v.x += (tx - v.x) * Math.min(1, dt / SWAP_TIME * 2.2);
        if (Math.abs(tx - v.x) < 0.01) v.x = tx;
        // vertical: fall with gravity when above target, ease when below (swap)
        if (v.y > ty + 0.01) {
          v.vy += 60 * dt;
          v.y = Math.max(ty, v.y - v.vy * dt);
          if (v.y === ty) v.vy = 0;
        } else {
          v.y += (ty - v.y) * Math.min(1, dt / SWAP_TIME * 2.2);
          v.vy = 0;
        }
        v.scale += (1 - v.scale) * Math.min(1, dt * 12);
        let s = v.scale;
        let rotZ = 0;
        if (hintIds.has(t.id)) {
          s *= 1 + Math.sin(this.time * 3.5) * 0.045;
          rotZ = Math.sin(this.time * 3.5) * 0.06;
        }
        v.mesh.position.set(v.x, v.y, 0);
        v.mesh.scale.setScalar(s);
        v.mesh.rotation.z = rotZ;
        if (t.special === Sp.Rainbow) v.mesh.rotation.z = this.time * 0.6;
        if (v.overlay) (v.overlay.material as THREE.MeshBasicMaterial).opacity = 0.82 + Math.sin(this.time * 2.2) * 0.08;
      }
    // dying
    this.dying = this.dying.filter((v) => {
      v.dying -= dt;
      const f = Math.max(0, v.dying / CLEAR_TIME);
      v.mesh.scale.setScalar(f * 1.15);
      v.mesh.rotation.z += dt * 8;
      if (v.dying <= 0) { this.disposeView(v); return false; }
      return true;
    });
    this.flashes = this.flashes.filter((f) => {
      f.t -= dt;
      const maxOp = (f.mesh.userData.maxOp as number | undefined) ?? 0.32;
      (f.mesh.material as THREE.MeshBasicMaterial).opacity = Math.max(0, f.t / f.dur) * maxOp;
      if (f.t <= 0) {
        this.scene.remove(f.mesh);
        f.mesh.geometry.dispose();
        (f.mesh.material as THREE.Material).dispose();
        return false;
      }
      return true;
    });
    // selection
    if (this.selected && !this.locked) {
      const [x, y] = this.cellPos(this.selected[0], this.selected[1]);
      this.selMesh.visible = true;
      this.selMesh.position.set(x, y, 0.4);
      this.selMesh.scale.setScalar(1.14 + Math.sin(this.time * 2.4) * 0.025);
    } else this.selMesh.visible = false;
    this.particles.update(dt);
    this.debris.update(dt);
  }

  render() {
    this.composer.render();
  }

  get busy() { return this.locked; }
}
