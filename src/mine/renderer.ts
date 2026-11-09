import * as THREE from 'three';
import { EffectComposer } from 'three/examples/jsm/postprocessing/EffectComposer.js';
import { RenderPass } from 'three/examples/jsm/postprocessing/RenderPass.js';
import { UnrealBloomPass } from 'three/examples/jsm/postprocessing/UnrealBloomPass.js';
import { ShaderPass } from 'three/examples/jsm/postprocessing/ShaderPass.js';
import { OutputPass } from 'three/examples/jsm/postprocessing/OutputPass.js';
import { HorizontalTiltShiftShader } from 'three/examples/jsm/shaders/HorizontalTiltShiftShader.js';
import { VerticalTiltShiftShader } from 'three/examples/jsm/shaders/VerticalTiltShiftShader.js';
import { VignetteShader } from 'three/examples/jsm/shaders/VignetteShader.js';
import { isLowQuality, pixelRatio } from '../gfx/quality';
import type { Mine } from './world';

/** Persistent renderer for the mine pane: bloom + tilt-shift (diorama DOF) + vignette. */
export class MineRenderer {
  readonly renderer: THREE.WebGLRenderer;
  private composer: EffectComposer;
  private renderPass: RenderPass;
  private hTilt: ShaderPass | null = null;
  private vTilt: ShaderPass | null = null;
  private w = 1;
  private h = 1;

  constructor(private container: HTMLElement) {
    this.renderer = new THREE.WebGLRenderer({ antialias: !isLowQuality, powerPreference: 'high-performance' });
    this.renderer.setPixelRatio(pixelRatio);
    this.renderer.toneMapping = THREE.ACESFilmicToneMapping;
    this.renderer.toneMappingExposure = 1.15;
    container.appendChild(this.renderer.domElement);
    this.composer = new EffectComposer(this.renderer);
    this.renderPass = new RenderPass(new THREE.Scene(), new THREE.PerspectiveCamera());
    this.composer.addPass(this.renderPass);
    // threshold > 1 so only emissive / HDR effects (lava, lightning, ults) bloom, not lit blocks
    if (!FLAGS.has('nobloom')) this.composer.addPass(new UnrealBloomPass(new THREE.Vector2(256, 256), isLowQuality ? 0.5 : 0.7, 0.45, 1.05));
    if (!isLowQuality && !FLAGS.has('notilt')) {
      this.hTilt = new ShaderPass(HorizontalTiltShiftShader);
      this.vTilt = new ShaderPass(VerticalTiltShiftShader);
      this.composer.addPass(this.hTilt);
      this.composer.addPass(this.vTilt);
    }
    const vig = new ShaderPass(VignetteShader);
    vig.uniforms.offset.value = 1.1;
    vig.uniforms.darkness.value = 1.0; // shader mixes towards (1 - darkness): 1 = black; <1 lifts blacks to grey, >1 goes negative
    if (!FLAGS.has('novig')) this.composer.addPass(vig);
    this.composer.addPass(new OutputPass());
    new ResizeObserver(() => this.resize()).observe(container);
    this.resize();
  }

  resize() {
    this.w = Math.max(1, this.container.clientWidth);
    this.h = Math.max(1, this.container.clientHeight);
    this.renderer.setSize(this.w, this.h, false);
    this.renderer.domElement.style.width = this.w + 'px';
    this.renderer.domElement.style.height = this.h + 'px';
    this.composer.setSize(this.w, this.h);
    if (this.hTilt && this.vTilt) {
      this.hTilt.uniforms.h.value = 2.5 / this.w;
      this.vTilt.uniforms.v.value = 2.5 / this.h;
      this.hTilt.uniforms.r.value = 0.45;
      this.vTilt.uniforms.r.value = 0.45;
    }
  }

  get aspect() { return this.w / this.h; }

  render(mine: Mine) {
    mine.setAspect(this.aspect);
    if (NO_POST) {
      this.renderer.render(mine.scene, mine.camera);
      return;
    }
    this.renderPass.scene = mine.scene;
    this.renderPass.camera = mine.camera;
    this.composer.render();
  }
}

const FLAGS = new URLSearchParams(location.search);
const NO_POST = FLAGS.has('nopost');
