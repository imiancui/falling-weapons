// Transient visual effects for the mine scene (bolts, explosions, beams, floating text).
import * as THREE from 'three';
import { Tex } from '../gfx/pixel';

interface Live { obj: THREE.Object3D; t: number; dur: number; tick?: (f: number, dt: number) => void; dispose: () => void }

export interface LightReq { x: number; y: number; color: number; intensity: number; dist: number; prio: number }

export class Fx {
  private live: Live[] = [];
  flashLights: (LightReq & { t: number; dur: number })[] = [];
  shake = 0;
  private textCache = new Map<string, THREE.CanvasTexture>();

  constructor(private scene: THREE.Scene) {}

  private add(obj: THREE.Object3D, dur: number, dispose: () => void, tick?: (f: number, dt: number) => void) {
    this.scene.add(obj);
    this.live.push({ obj, t: dur, dur, tick, dispose });
  }

  private basicMat(color: number, boost = 2.5, opacity = 1) {
    return new THREE.MeshBasicMaterial({
      color: new THREE.Color(color).multiplyScalar(boost), transparent: true, opacity,
      blending: THREE.AdditiveBlending, depthWrite: false, toneMapped: false, side: THREE.DoubleSide,
    });
  }

  light(x: number, y: number, color: number, intensity: number, dur: number, dist = 6) {
    this.flashLights.push({ x, y, color, intensity, dist, prio: 5, t: dur, dur });
  }

  /** Jagged lightning ribbon between points (Three coords). */
  bolt(from: THREE.Vector2, to: THREE.Vector2, color = 0xfff27a, width = 0.12, dur = 0.25) {
    const pts: THREE.Vector2[] = [];
    const segs = Math.max(3, Math.round(from.distanceTo(to) * 2.5));
    const dir = to.clone().sub(from);
    const nrm = new THREE.Vector2(-dir.y, dir.x).normalize();
    for (let i = 0; i <= segs; i++) {
      const p = from.clone().lerp(to, i / segs);
      if (i > 0 && i < segs) p.addScaledVector(nrm, (Math.random() - 0.5) * 0.5);
      pts.push(p);
    }
    const pos: number[] = [];
    for (let i = 0; i < pts.length - 1; i++) {
      const a = pts[i], b = pts[i + 1];
      const d = b.clone().sub(a);
      const n = new THREE.Vector2(-d.y, d.x).normalize().multiplyScalar(width / 2);
      pos.push(a.x + n.x, a.y + n.y, 0, a.x - n.x, a.y - n.y, 0, b.x + n.x, b.y + n.y, 0);
      pos.push(b.x + n.x, b.y + n.y, 0, a.x - n.x, a.y - n.y, 0, b.x - n.x, b.y - n.y, 0);
    }
    const g = new THREE.BufferGeometry();
    g.setAttribute('position', new THREE.Float32BufferAttribute(pos, 3));
    const m = this.basicMat(color, 3);
    const mesh = new THREE.Mesh(g, m);
    mesh.position.z = 0.8;
    this.add(mesh, dur, () => { g.dispose(); m.dispose(); }, (f) => { m.opacity = f; });
    this.light(to.x, to.y, color, 6, dur * 1.5, 5);
  }

  explosion(x: number, y: number, radius: number, color = 0xff8a2a) {
    const g = new THREE.SphereGeometry(1, 16, 12);
    const m = this.basicMat(color, 2.5, 0.9);
    const mesh = new THREE.Mesh(g, m);
    mesh.position.set(x, y, 0.6);
    this.add(mesh, 0.35, () => { g.dispose(); m.dispose(); }, (f) => {
      const s = radius * (1.1 - f * 0.8);
      mesh.scale.set(s, s, s * 0.6);
      m.opacity = f * 0.9;
    });
    this.glow(x, y, radius * 3, color, 0.4);
    this.light(x, y, color, 14, 0.4, radius * 4);
    this.shake = Math.max(this.shake, Math.min(0.5, 0.12 * radius));
  }

  glow(x: number, y: number, size: number, color: number, dur: number) {
    const m = new THREE.SpriteMaterial({ map: Tex.glow(), color: new THREE.Color(color).multiplyScalar(2), blending: THREE.AdditiveBlending, transparent: true, depthWrite: false, toneMapped: false });
    const s = new THREE.Sprite(m);
    s.position.set(x, y, 0.9);
    s.scale.setScalar(size);
    this.add(s, dur, () => m.dispose(), (f) => { m.opacity = f; });
  }

  /** Axis-aligned flash rectangle (shockwaves, pillars, areas). x,y = centre. */
  rect(x: number, y: number, w: number, h: number, color: number, dur = 0.3, boost = 2) {
    const g = new THREE.PlaneGeometry(w, h);
    const m = this.basicMat(color, boost, 0.7);
    const mesh = new THREE.Mesh(g, m);
    mesh.position.set(x, y, 0.75);
    this.add(mesh, dur, () => { g.dispose(); m.dispose(); }, (f) => { m.opacity = f * 0.7; });
  }

  ring(x: number, y: number, r: number, color: number, dur = 0.5) {
    const g = new THREE.RingGeometry(0.85, 1, 32);
    const m = this.basicMat(color, 2, 0.8);
    const mesh = new THREE.Mesh(g, m);
    mesh.position.set(x, y, 0.7);
    this.add(mesh, dur, () => { g.dispose(); m.dispose(); }, (f) => {
      mesh.scale.setScalar(r * (1.2 - f * 0.4));
      m.opacity = f * 0.8;
    });
  }

  text(x: number, y: number, str: string, color = '#ffffff', dur = 1.2, size = 0.55) {
    const key = str + color;
    let tex = this.textCache.get(key);
    if (!tex) {
      const c = document.createElement('canvas');
      const ctx = c.getContext('2d')!;
      ctx.font = 'bold 40px "Noto Sans TC", "Microsoft JhengHei", sans-serif';
      const w = Math.ceil(ctx.measureText(str).width) + 16;
      c.width = w;
      c.height = 56;
      ctx.font = 'bold 40px "Noto Sans TC", "Microsoft JhengHei", sans-serif';
      ctx.textBaseline = 'middle';
      ctx.lineWidth = 8;
      ctx.strokeStyle = '#000';
      ctx.strokeText(str, 8, 28);
      ctx.fillStyle = color;
      ctx.fillText(str, 8, 28);
      tex = new THREE.CanvasTexture(c);
      tex.colorSpace = THREE.SRGBColorSpace;
      this.textCache.set(key, tex);
    }
    const m = new THREE.SpriteMaterial({ map: tex, transparent: true, depthTest: false, toneMapped: false });
    const s = new THREE.Sprite(m);
    const aspect = (tex.image as HTMLCanvasElement).width / 56;
    s.scale.set(size * aspect, size, 1);
    s.position.set(x, y, 1.2);
    s.renderOrder = 10;
    this.add(s, dur, () => m.dispose(), (f, dt) => {
      s.position.y += dt * 0.8;
      m.opacity = Math.min(1, f * 3);
    });
  }

  update(dt: number) {
    this.live = this.live.filter((l) => {
      l.t -= dt;
      const f = Math.max(0, l.t / l.dur);
      l.tick?.(f, dt);
      if (l.t <= 0) {
        this.scene.remove(l.obj);
        l.dispose();
        return false;
      }
      return true;
    });
    this.flashLights = this.flashLights.filter((l) => (l.t -= dt) > 0);
    this.shake = Math.max(0, this.shake - dt * 1.5);
  }

  clear() {
    for (const l of this.live) { this.scene.remove(l.obj); l.dispose(); }
    this.live = [];
    this.flashLights = [];
  }
}
