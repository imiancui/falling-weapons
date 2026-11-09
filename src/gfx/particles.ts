import * as THREE from 'three';
import { Tex } from './pixel';

/** CPU particle pool rendered as square points (pixel look). */
export class Particles {
  readonly points: THREE.Points;
  private pos: Float32Array;
  private col: Float32Array;
  private vel: Float32Array;
  private life: Float32Array;
  private maxLife: Float32Array;
  private grav: Float32Array;
  private baseCol: Float32Array;
  private next = 0;
  private alive = 0;

  constructor(private max: number, size: number, additive: boolean, sizeAttenuation = true) {
    const g = new THREE.BufferGeometry();
    this.pos = new Float32Array(max * 3);
    this.col = new Float32Array(max * 3);
    this.baseCol = new Float32Array(max * 3);
    this.vel = new Float32Array(max * 3);
    this.life = new Float32Array(max);
    this.maxLife = new Float32Array(max);
    this.grav = new Float32Array(max);
    for (let i = 0; i < max; i++) this.pos[i * 3 + 1] = -99999;
    g.setAttribute('position', new THREE.BufferAttribute(this.pos, 3).setUsage(THREE.DynamicDrawUsage));
    g.setAttribute('color', new THREE.BufferAttribute(this.col, 3).setUsage(THREE.DynamicDrawUsage));
    const m = new THREE.PointsMaterial({
      size,
      map: Tex.particle(),
      vertexColors: true,
      transparent: true,
      depthWrite: false,
      sizeAttenuation,
      blending: additive ? THREE.AdditiveBlending : THREE.NormalBlending,
      toneMapped: !additive,
    });
    this.points = new THREE.Points(g, m);
    this.points.frustumCulled = false;
  }

  emit(x: number, y: number, z: number, vx: number, vy: number, vz: number, color: THREE.Color | number, life = 0.6, gravity = -9) {
    const i = this.next;
    this.next = (this.next + 1) % this.max;
    const c = typeof color === 'number' ? new THREE.Color(color) : color;
    this.pos.set([x, y, z], i * 3);
    this.vel.set([vx, vy, vz], i * 3);
    this.baseCol.set([c.r, c.g, c.b], i * 3);
    this.col.set([c.r, c.g, c.b], i * 3);
    this.life[i] = life;
    this.maxLife[i] = life;
    this.grav[i] = gravity;
    this.alive = Math.min(this.max, this.alive + 1);
  }

  burst(x: number, y: number, z: number, n: number, color: number, speed = 3, life = 0.6, gravity = -9) {
    for (let k = 0; k < n; k++) {
      const a = Math.random() * Math.PI * 2;
      const s = speed * (0.3 + Math.random() * 0.7);
      this.emit(x, y, z, Math.cos(a) * s, Math.sin(a) * s + speed * 0.3, (Math.random() - 0.5) * s, color, life * (0.6 + Math.random() * 0.6), gravity);
    }
  }

  update(dt: number) {
    if (this.alive === 0) return;
    let any = false;
    for (let i = 0; i < this.max; i++) {
      if (this.life[i] <= 0) continue;
      any = true;
      this.life[i] -= dt;
      const o = i * 3;
      if (this.life[i] <= 0) {
        this.pos[o + 1] = -99999;
        continue;
      }
      this.vel[o + 1] += this.grav[i] * dt;
      this.pos[o] += this.vel[o] * dt;
      this.pos[o + 1] += this.vel[o + 1] * dt;
      this.pos[o + 2] += this.vel[o + 2] * dt;
      const f = Math.min(1, this.life[i] / this.maxLife[i] * 1.5);
      this.col[o] = this.baseCol[o] * f;
      this.col[o + 1] = this.baseCol[o + 1] * f;
      this.col[o + 2] = this.baseCol[o + 2] * f;
    }
    if (!any) this.alive = 0;
    this.points.geometry.attributes.position.needsUpdate = true;
    this.points.geometry.attributes.color.needsUpdate = true;
  }
}
