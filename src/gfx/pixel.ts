// Procedural pixel-art: every texture in the game is generated here (no external assets).
import * as THREE from 'three';
import type { BlockType } from '../data/config';
import type { WeaponId } from '../data/weapons';

type Palette = Record<string, string>;

function canvas(w: number, h: number): [HTMLCanvasElement, CanvasRenderingContext2D] {
  const c = document.createElement('canvas');
  c.width = w;
  c.height = h;
  const ctx = c.getContext('2d')!;
  ctx.imageSmoothingEnabled = false;
  return [c, ctx];
}

/** Draw an ASCII sprite. '.' = transparent. Rows are padded/truncated to `size`. */
function drawSprite(ctx: CanvasRenderingContext2D, rows: string[], pal: Palette, ox = 0, oy = 0, size = 16) {
  for (let y = 0; y < size; y++) {
    const row = (rows[y] ?? '').padEnd(size, '.');
    for (let x = 0; x < size; x++) {
      const ch = row[x];
      if (ch === '.' || !pal[ch]) continue;
      ctx.fillStyle = pal[ch];
      ctx.fillRect(ox + x, oy + y, 1, 1);
    }
  }
}

function sprite(rows: string[], pal: Palette, size = 16): HTMLCanvasElement {
  const [c, ctx] = canvas(size, size);
  drawSprite(ctx, rows, pal, 0, 0, size);
  return c;
}

let seed = 1337;
function rnd() {
  seed = (seed * 16807) % 2147483647;
  return (seed - 1) / 2147483646;
}

function shade(hex: string, f: number): string {
  const n = parseInt(hex.slice(1), 16);
  const r = Math.max(0, Math.min(255, Math.round(((n >> 16) & 255) * f)));
  const g = Math.max(0, Math.min(255, Math.round(((n >> 8) & 255) * f)));
  const b = Math.max(0, Math.min(255, Math.round((n & 255) * f)));
  return `rgb(${r},${g},${b})`;
}

function toTex(c: HTMLCanvasElement): THREE.CanvasTexture {
  const t = new THREE.CanvasTexture(c);
  t.magFilter = THREE.NearestFilter;
  t.minFilter = THREE.NearestFilter;
  t.generateMipmaps = false;
  t.colorSpace = THREE.SRGBColorSpace;
  return t;
}

// ---------------------------------------------------------------- blocks
function noiseBlock(base: string, vary = 0.18, specks?: { color: string; n: number; size?: number }[]): HTMLCanvasElement {
  const [c, ctx] = canvas(16, 16);
  for (let y = 0; y < 16; y++)
    for (let x = 0; x < 16; x++) {
      ctx.fillStyle = shade(base, 1 - vary + rnd() * vary * 2);
      ctx.fillRect(x, y, 1, 1);
    }
  for (const s of specks ?? []) {
    for (let i = 0; i < s.n; i++) {
      const cx = 2 + Math.floor(rnd() * 11);
      const cy = 2 + Math.floor(rnd() * 11);
      const sz = s.size ?? 2;
      for (let k = 0; k < sz + 1; k++) {
        const px = cx + Math.floor(rnd() * sz);
        const py = cy + Math.floor(rnd() * sz);
        ctx.fillStyle = shade(s.color, 0.85 + rnd() * 0.3);
        ctx.fillRect(px, py, 1, 1);
        ctx.fillStyle = shade(s.color, 1.35);
        if (rnd() < 0.3) ctx.fillRect(px, py, 1, 1);
      }
    }
  }
  // subtle bevel
  ctx.fillStyle = 'rgba(255,255,255,0.10)';
  ctx.fillRect(0, 0, 16, 1);
  ctx.fillRect(0, 0, 1, 16);
  ctx.fillStyle = 'rgba(0,0,0,0.22)';
  ctx.fillRect(0, 15, 16, 1);
  ctx.fillRect(15, 0, 1, 16);
  return c;
}

const ore = (color: string) => noiseBlock('#7d7d82', 0.14, [{ color, n: 4, size: 2 }]);
const deepOre = (color: string) => noiseBlock('#4a4a52', 0.14, [{ color, n: 4, size: 2 }]);

function blockCanvas(type: BlockType): HTMLCanvasElement {
  switch (type) {
    case 'dirt': return noiseBlock('#7a5232', 0.2, [{ color: '#5b3a20', n: 5, size: 1 }]);
    case 'stone': return noiseBlock('#7d7d82', 0.14, [{ color: '#5f5f66', n: 6, size: 2 }]);
    case 'deepslate': return noiseBlock('#4a4a52', 0.16, [{ color: '#33333a', n: 7, size: 2 }]);
    case 'obsidian': return noiseBlock('#1c1228', 0.25, [{ color: '#5a2d8a', n: 5, size: 2 }]);
    case 'bedrock': return noiseBlock('#3a3a3a', 0.45, [{ color: '#151515', n: 9, size: 2 }]);
    case 'core': return noiseBlock('#5a1f8a', 0.3, [{ color: '#e07bff', n: 8, size: 2 }, { color: '#ffffff', n: 2, size: 1 }]);
    case 'coal': return ore('#1a1a1a');
    case 'iron': return ore('#d8b89a');
    case 'copper': return ore('#e0763a');
    case 'gold': return deepOre('#ffd84a');
    case 'redstone': return deepOre('#ff2a2a');
    case 'lapis': return deepOre('#2a5aff');
    case 'diamond': return deepOre('#5affee');
    case 'emerald': return deepOre('#2aff6a');
  }
}

export function backWallCanvas(): HTMLCanvasElement {
  return noiseBlock('#3a2f28', 0.2, [{ color: '#2a211c', n: 6, size: 2 }]);
}

function crackCanvas(stage: number): HTMLCanvasElement {
  const [c, ctx] = canvas(16, 16);
  seed = 99;
  ctx.fillStyle = 'rgba(0,0,0,0.75)';
  const lines = 2 + stage * 2;
  for (let i = 0; i < lines; i++) {
    let x = 8, y = 8;
    const dx = rnd() * 2 - 1, dy = rnd() * 2 - 1;
    const len = 3 + stage * 1.5;
    for (let k = 0; k < len; k++) {
      x += dx + (rnd() - 0.5);
      y += dy + (rnd() - 0.5);
      ctx.fillRect(Math.round(x), Math.round(y), 1, 1);
    }
  }
  return c;
}

function lavaCanvas(): HTMLCanvasElement {
  const [c, ctx] = canvas(32, 32);
  for (let y = 0; y < 32; y++)
    for (let x = 0; x < 32; x++) {
      const v = Math.sin(x * 0.6 + Math.sin(y * 0.4) * 2) + Math.cos(y * 0.5 + Math.sin(x * 0.3) * 2) + rnd() * 0.6;
      ctx.fillStyle = v > 1.2 ? '#ffe680' : v > 0.4 ? '#ff9a2a' : v > -0.6 ? '#e8501a' : '#a02a10';
      ctx.fillRect(x, y, 1, 1);
    }
  return c;
}

// ---------------------------------------------------------------- weapon sprites
const W_SWORD = [
  '................',
  '.............oo.',
  '............oYo.',
  '...........oYLo.',
  '..........oYLo..',
  '.........oYLo...',
  '........oYLo....',
  '..o....oYLo.....',
  '..oo..oYLo......',
  '...oooYLo.......',
  '....oGGo........',
  '....oHGoo.......',
  '...oHo.oo.......',
  '..oHo...........',
  '.ooo............',
  '................',
];
const W_DAGGER = [
  '................', '................', '................', '................',
  '...........oo...',
  '..........oYo...',
  '.........oYLo...',
  '........oYLo....',
  '.......oYLo.....',
  '...o..oYLo......',
  '...oooYLo.......',
  '....oGGo........',
  '....oHGoo.......',
  '...oHo.oo.......',
  '...oo...........',
  '................',
];
const W_SPEAR = [
  '...........oo...',
  '..........oLYo..',
  '..........oLYYo.',
  '...........oYYo.',
  '..........oGoo..',
  '.........oHo....',
  '........oHo.....',
  '.......oHo......',
  '......oHo.......',
  '.....oHo........',
  '....oHo.........',
  '...oHo..........',
  '..oHo...........',
  '.oHo............',
  '.oo.............',
  '................',
];
const W_AXE = [
  '................',
  '.......oooo.....',
  '......oLYYYo....',
  '.....oLYYYYYo...',
  '.....oYYYYYYYo..',
  '......oYYYYYYo..',
  '.......ooYHYo...',
  '........oHooo...',
  '.......oHo......',
  '......oHo.......',
  '.....oHo........',
  '....oHo.........',
  '...oHo..........',
  '..oHo...........',
  '.oHo............',
  '.oo.............',
];
const W_HAMMER = [
  '.........oooo...',
  '........oLYYYo..',
  '.......oLYYYYYo.',
  '......oYYYYYYYo.',
  '......oYYYYYYo..',
  '.......oYYYYo...',
  '.......oHoYo....',
  '......oHo.o.....',
  '.....oHo........',
  '....oHo.........',
  '...oHo..........',
  '..oHo...........',
  '.oHo............',
  '.oo.............',
  '................',
  '................',
];
const W_METEOR = [
  '.........oooo...',
  '........oYYYYo..',
  '.......oYLLYYYo.',
  '.......oYLYYYYo.',
  '.......oYYYYYGo.',
  '.......oYYYYGGo.',
  '........oYYGGo..',
  '.......oHoooo...',
  '......oHo.......',
  '.....oHo........',
  '....oHo.........',
  '...oHo..........',
  '..oHo...........',
  '.oHo............',
  '.oo.............',
  '................',
];
const W_BLADE = [
  '..............o.',
  '.............oL.',
  '............oLo.',
  '...........oLYo.',
  '..........oLYo..',
  '.........oLYo...',
  '........oLYo....',
  '.......oLYo.....',
  '......oLYo......',
  '...o.oLYo.......',
  '...ooGYo........',
  '....oGGo........',
  '...oHo.o........',
  '..oHo...........',
  '.oHo............',
  '.oo.............',
];
const W_HALBERD = [
  '............oo..',
  '...........oLYo.',
  '.....ooo..oLYYo.',
  '.....oYYooYYYo..',
  '......oYYYYYo...',
  '.......oYYHo....',
  '......o.oHo.....',
  '.......oHo......',
  '......oHo.......',
  '.....oHo........',
  '....oHo.........',
  '...oHo..........',
  '..oHo...........',
  '.oHo............',
  '.oo.............',
  '................',
];
const W_SCYTHE = [
  '...ooooooo......',
  '..oLLYYYYYoo....',
  '...ooooYYYYYo...',
  '.......ooYYYYo..',
  '.........ooYYo..',
  '...........oHo..',
  '..........oHo...',
  '.........oHo....',
  '........oHo.....',
  '.......oHo......',
  '......oHo.......',
  '.....oHo........',
  '....oHo.........',
  '...oHo..........',
  '..oo............',
  '................',
];
const W_BOOMERANG = [
  '................',
  '..oooo..........',
  '.oLLYYo.........',
  '.oLYYYYo........',
  '..ooYYYYo.......',
  '....oYYYYo......',
  '.....oYYYYo.....',
  '......oYYYo.....',
  '......oYYYo.....',
  '.....oYYYYo.....',
  '....oYYYYo......',
  '..ooYYYYo.......',
  '.oLYYYYo........',
  '.oLLYYo.........',
  '..oooo..........',
  '................',
];

// ---- Low-tier (5) ----
const W_PICK = [
  '.......ooooo....',
  '......oLLYYYo...',
  '.....oYYoooYYo..',
  '.....oo...oHYYo.',
  '.........oHoYYo.',
  '........oHo.ooo.',
  '.......oHo..oYo.',
  '......oHo...oo..',
  '.....oHo........',
  '....oHo.........',
  '...oHo..........',
  '..oHo...........',
  '.oHo............',
  '.oo.............',
  '................',
  '................',
];
const W_BATON = [
  '................',
  '............oo..',
  '...........oLLo.',
  '..........oLYLo.',
  '.........oYYYYo.',
  '........oYYYYo..',
  '.......oGGGGGo..',
  '......oGGGGGo...',
  '.....oHGGGGoo...',
  '....oHGo........',
  '...oHGo.........',
  '..oHGo..........',
  '.oHoo...........',
  '.oo.............',
  '................',
  '................',
];
const W_NEEDLE = [
  '................',
  '.............oo.',
  '............oLo.',
  '...........oLYo.',
  '..........oYYo..',
  '.........oYYo...',
  '........oYYo....',
  '.......oYYo.....',
  '......oGGo......',
  '.....oGGo.......',
  '....oHo.........',
  '...oHo..........',
  '..oo............',
  '................',
  '................',
  '................',
];
const W_TORCH = [
  '...........o....',
  '..........oLo...',
  '.........oLLYo..',
  '........oLYYYYo.',
  '........oLYYYGo.',
  '.........oYGGo..',
  '........oGGGGoo.',
  '.......oHGGoo...',
  '......oHHo......',
  '.....oHHo.......',
  '....oHHo........',
  '...oHHo.........',
  '..oHHo..........',
  '.oHoo...........',
  '.oo.............',
  '................',
];
const W_ICICLE = [
  '................',
  '............oo..',
  '...........oLLo.',
  '..........oLLYo.',
  '.........oLLYYo.',
  '........oLLYYGo.',
  '.......oLLYYGGo.',
  '......oLLYYGGo..',
  '.....oLLYYGoo...',
  '....oLYYGoo.....',
  '...oYYGoo.......',
  '..oYGoo.........',
  '.oooo...........',
  '................',
  '................',
  '................',
];

// ---- Cumulative (5) ----
const W_DRILL = [
  '............oo..',
  '...........oLLo.',
  '.........ooLYYo.',
  '........oLLYYGo.',
  '.......oYYYYYGo.',
  '......oLLYYYYo..',
  '.....oYYYYYGo...',
  '....oGGGGGGGo...',
  '...oGHHHHHGGo...',
  '...oHHHHHHGo....',
  '..oHHo..oHHo....',
  '.oHHo..oHHo.....',
  '.ooo...ooo......',
  '................',
  '................',
  '................',
];
const W_CORE_ORB = [
  '......oooo......',
  '....ooYYYYoo....',
  '...oYYLLLLYYo...',
  '..oYLLWWWWLLYo..',
  '.oYLWWWWWWWWLYo.',
  '.oYLWWGGGGWWLYo.',
  'oYYLWGGLLGGWLYYo',
  'oYYLWGLWWLGWLYYo',
  'oYYLWGGLLGGWLYYo',
  '.oYLWWGGGGWWLYo.',
  '.oYLWWWWWWWWLYo.',
  '..oYLLWWWWLLYo..',
  '...oYYLLLLYYo...',
  '....ooYYYYoo....',
  '......oooo......',
  '................',
];
const W_KATAR = [
  '............ooo.',
  '..........ooLLo.',
  '.........oLLYYo.',
  '........oLYYoo..',
  '.......oLYYo..o.',
  '......oLYYo..oLo',
  '...oooGYYo..oLYo',
  '..oHHGGYo..oLYo.',
  '.oHHoGGo..oLYo..',
  '.oHooGGooLLYo...',
  '..o..oGGGGoo....',
  '.....oHHo.......',
  '....oHHo........',
  '....ooo.........',
  '................',
  '................',
];
const W_FLAMEBLADE = [
  '...........ooo..',
  '..........oLLYo.',
  '........ooLYYYo.',
  '.......oLLYYYYo.',
  '......oLYYYYGGo.',
  '.....oLYYYYGGo..',
  '....oLYYYYGoo...',
  '...oLYYYYGGo....',
  '..oooYYYYGo.....',
  '..oGGoYYGo......',
  '...oGGoGo.......',
  '...oHHGGoo......',
  '..oHHo.oo.......',
  '.oHHo...........',
  '.ooo............',
  '................',
];
const W_FROSTCLAW = [
  '..........oo.oo.',
  '........ooLo.oLo',
  '.......oLLo.oLLo',
  '.....ooLYo.oLYo.',
  '....oLLYo.oLYo.o',
  '...oLYYo.oLYo.oL',
  '...ooYo.oLYo.oLY',
  '.....oGoYYo.oLYo',
  '....oGGGGo.oLYo.',
  '...oHHHHGGoYYo..',
  '..oHHHHHHGGoo...',
  '..oHHHHHHHo.....',
  '...ooHHHHo......',
  '.....oooo.......',
  '................',
  '................',
];

// ---- Legendaries & Holy Sword (5) ----
const W_TITAN = [
  '......oooooooo..',
  '.....oLLLLYYYYo.',
  '....oLLYYYYYYGo.',
  '....oLYYGGGGYGo.',
  '....oYYYYYYYYGo.',
  '.....oYYYYYYGGo.',
  '......ooYYHGGo..',
  '.......oHHoooo..',
  '......oHHo......',
  '.....oHHo.......',
  '....oHHo........',
  '...oHHo.........',
  '..oHHo..........',
  '.oHHo...........',
  '.ooo............',
  '................',
];
const W_MJOLNIR = [
  '......ooooooo...',
  '.....oLLLLLLYo..',
  '....oLLWWWWLYYo.',
  '....oLYWYYYWLYo.',
  '....oLYYYYYYLYo.',
  '.....oYYYYYYYo..',
  '......ooGHHGoo..',
  '.......oHHHo....',
  '......oHHo......',
  '.....oHHo.......',
  '....oHHo........',
  '...oHHo.........',
  '..oGGo..........',
  '.oGWGo..........',
  '..ooo...........',
  '................',
];
const W_HYDRA = [
  '..........oo.oo.',
  '.........oLo.oLo',
  '.....oo.oLYooLYo',
  '....oLo.oYYYYYo.',
  '....oLYooYYYYGo.',
  '.....oYYYYYYGGo.',
  '......oYYYYGGo..',
  '.....oGGYYGoo...',
  '....oGGGGGo.....',
  '...oGHHHHGo.....',
  '...oHo.oHo......',
  '..oHo..oo.......',
  '.oHo............',
  '.oo.............',
  '................',
  '................',
];
const W_DRAGON = [
  '............ooo.',
  '...........oWWLo',
  '.........ooWLLYo',
  '........oWWLYYYo',
  '.......oWLYYYYGo',
  '......oWLYYYYGGo',
  '..oo.oWLYYYYGGo.',
  '..oGooLYYYYGGo..',
  '...oGGLYYYGGo...',
  '....oGGYYGoo....',
  '...oHHGGGGo.....',
  '..oHHo.oGGo.....',
  '.oHHo...oo......',
  '.ooo............',
  '................',
  '................',
];
const W_EXCALIBUR = [
  '.............ooo',
  '............oWWo',
  '...........oWLYo',
  '..........oWLYo.',
  '.........oWLYo..',
  '..oo....oWLYo...',
  '..oGoo.oWLYo....',
  '...oGGGWLYo.....',
  '....oGWWGo......',
  '...oHGGGGGo.....',
  '..oHHoGGooGo....',
  '.oHHo.oo..oo....',
  'oWWHo...........',
  'oWWo............',
  '.oo.............',
  '................',
];

const WEAPON_ART: Record<WeaponId, { rows: string[]; pal: Palette }> = {
  // low
  pick: { rows: W_PICK, pal: { o: '#24180e', Y: '#9a7858', L: '#ccb090', H: '#6a4222' } },
  baton: { rows: W_BATON, pal: { o: '#242008', Y: '#e8c838', L: '#fff8c8', G: '#585868', H: '#30303a' } },
  needle: { rows: W_NEEDLE, pal: { o: '#0e2008', Y: '#68cc40', L: '#d0ffa8', G: '#406040', H: '#2e382e' } },
  torch: { rows: W_TORCH, pal: { o: '#2a1004', Y: '#ff8a28', L: '#fff0a0', G: '#cc3818', H: '#6a4424' } },
  icicle: { rows: W_ICICLE, pal: { o: '#082030', Y: '#68ccf8', L: '#ebfcff', G: '#3488b8' } },
  // t1
  axe: { rows: W_AXE, pal: { o: '#2a1a0e', Y: '#b8875a', L: '#f0c890', H: '#7a4a22' } },
  blade: { rows: W_BLADE, pal: { o: '#2a2208', Y: '#ffd84a', L: '#fffbe0', G: '#6a5a20', H: '#3a2a10' } },
  dagger: { rows: W_DAGGER, pal: { o: '#0e2208', Y: '#6ad040', L: '#d8ffb0', G: '#3a5a2a', H: '#4a2a1a' } },
  sword: { rows: W_SWORD, pal: { o: '#2a0a04', Y: '#ff5a32', L: '#ffd0a0', G: '#ffb020', H: '#5a2a14' } },
  spear: { rows: W_SPEAR, pal: { o: '#08202a', Y: '#6ad4ff', L: '#e8faff', G: '#a0c0d0', H: '#6a5a4a' } },
  // t2
  hammer: { rows: W_HAMMER, pal: { o: '#1e140c', Y: '#8a6a4a', L: '#d8b080', H: '#5a3a1a' } },
  halberd: { rows: W_HALBERD, pal: { o: '#2a2208', Y: '#ffcc22', L: '#fffbe0', H: '#5a4a30' } },
  scythe: { rows: W_SCYTHE, pal: { o: '#0e1a08', Y: '#4ab830', L: '#c8ff9a', H: '#3a2a3a' } },
  meteor: { rows: W_METEOR, pal: { o: '#2a0a04', Y: '#ff6a2a', L: '#ffe680', G: '#a02a10', H: '#4a2a1a' } },
  boomerang: { rows: W_BOOMERANG, pal: { o: '#08202a', Y: '#7adcff', L: '#f0fcff' } },
  // cumulative
  drill: { rows: W_DRILL, pal: { o: '#22160c', Y: '#c8965c', L: '#f4d8a8', G: '#7a6858', H: '#4a3828' } },
  core_orb: { rows: W_CORE_ORB, pal: { o: '#282008', Y: '#f4c430', L: '#fff4a8', W: '#80e8ff', G: '#3a5878' } },
  katar: { rows: W_KATAR, pal: { o: '#102010', Y: '#58d848', L: '#d8ffc0', G: '#584868', H: '#34243c' } },
  flameblade: { rows: W_FLAMEBLADE, pal: { o: '#2c0a04', Y: '#ff6428', L: '#ffe898', G: '#c82414', H: '#4e2818' } },
  frostclaw: { rows: W_FROSTCLAW, pal: { o: '#082030', Y: '#60ccff', L: '#f0ffff', G: '#386890', H: '#283c54' } },
  // legendaries & holy
  titan: { rows: W_TITAN, pal: { o: '#1c1208', Y: '#d49a54', L: '#ffe4b0', G: '#ff9838', H: '#5c3818' } },
  mjolnir: { rows: W_MJOLNIR, pal: { o: '#1c1c28', Y: '#ffd438', L: '#fff8c8', W: '#b8f4ff', G: '#687898', H: '#4a3824' } },
  hydra: { rows: W_HYDRA, pal: { o: '#0a1e0a', Y: '#50e838', L: '#e0ffb8', G: '#8838b8', H: '#382044' } },
  dragon: { rows: W_DRAGON, pal: { o: '#240604', W: '#fff8d0', L: '#ffb838', Y: '#f04020', G: '#981818', H: '#3c1c1c' } },
  excalibur: { rows: W_EXCALIBUR, pal: { o: '#2c2008', W: '#ffffff', L: '#fff4b8', Y: '#ffd858', G: '#e8a828', H: '#4868c8' } },
};

// ---------------------------------------------------------------- enemies
const E_ZOMBIE = [
  '....oooooooo....',
  '...oYYYYYYYYo...',
  '...oYYYLLYYYo...',
  '...oooooooooo...',
  '...oGGGGGGGGo...',
  '...oGkkGGkkGo...',
  '...oGGGGGGGGo...',
  '...oGGkkkkGGo...',
  '....oooooooo....',
  '..oBBBBBBBBBBo..',
  '.oGoBBBBBBBBoGo.',
  '.oGoBBBBBBBBoGo.',
  '..o.oPPPPPPo.o..',
  '....oPPooPPo....',
  '....oPPo.oPPo...',
  '....oooo.oooo...',
];
const E_SKELETON = [
  '.....oooooo.....',
  '....oWWWWWWo....',
  '....oWkWWkWo....',
  '....oWWWWWWo....',
  '....oWkkkkWo....',
  '.....oWWWWo.....',
  '......oWWo......',
  '....oWWWWWWo.b..',
  '...oWoWWWWoWobb.',
  '...oWoWkkWoWob.b',
  '...o.oWWWWo.ob.b',
  '.....oWkkWo..bb.',
  '.....oWooWo..b..',
  '.....oWo.oWo....',
  '.....oWo.oWo....',
  '.....ooo.ooo....',
];
const E_MUSHROOM = [
  '................',
  '.....oooooo.....',
  '...ooRRRRRRoo...',
  '..oRRWWRRRRRRo..',
  '.oRRRWWRRRWWRRo.',
  '.oRRRRRRRRWWRRo.',
  '.oRWWRRRRRRRRRo.',
  '..oooooooooooo..',
  '....oSSSSSSo....',
  '....oSkSSkSo....',
  '....oSSSSSSo....',
  '....oSSkkSSo....',
  '....oSSSSSSo....',
  '.....oSSSSo.....',
  '......oooo......',
  '................',
];
const E_SPIDER = [
  '................',
  '................',
  '................',
  '.o....oooo....o.',
  '..o..oDDDDo..o..',
  '...ooDDDDDDoo...',
  '.oooDDRDDRDDooo.',
  'o...oDDDDDDo...o',
  '...ooDDDDDDoo...',
  '..o.oDDDDDDo.o..',
  '.o...oDDDDo...o.',
  'o.....oooo.....o',
  '................',
  '................',
  '................',
  '................',
];
const E_GOLEM = [
  '....oooooooo....',
  '...oSSSSSSSSo...',
  '..oSSLSSSSSSSo..',
  '..oSSoRRSRRoSo..',
  '..oSSSSSSSSSSo..',
  '..oSSkkkkkkSSo..',
  '...oSSSSSSSSo...',
  '.ooooSSMSSSoooo.',
  'oSSSSoSSSSoSSSSo',
  'oSLSSSSMMSSSSSSo',
  'oSSoSSSSSSSSoSSo',
  'oSSooSSSMSSooSSo',
  '.oo.oSSSSSSo.oo.',
  '....oSSooSSo....',
  '...oSSSo.oSSSo..',
  '...ooooo.ooooo..',
];

const ENEMY_ART: Record<string, { rows: string[]; pal: Palette }> = {
  zombie: { rows: E_ZOMBIE, pal: { o: '#101010', Y: '#e0b030', L: '#fffbd0', G: '#5a9a4a', k: '#1a2a1a', B: '#3a5aa0', P: '#4a3a6a' } },
  skeleton: { rows: E_SKELETON, pal: { o: '#202020', W: '#e8e8e0', k: '#303030', b: '#8a5a2a' } },
  mushroom: { rows: E_MUSHROOM, pal: { o: '#200808', R: '#e02a2a', W: '#fff0e0', S: '#f0d8b0', k: '#3a2010' } },
  spider: { rows: E_SPIDER, pal: { o: '#100808', D: '#3a2a2a', R: '#ff3030' } },
  golem: { rows: E_GOLEM, pal: { o: '#101010', S: '#7a7a80', L: '#b0b0b8', R: '#ff7a20', k: '#2a2a2a', M: '#4a8a3a' } },
};

// ---------------------------------------------------------------- match-3 tiles
const T_EARTH = [
  '................',
  '...oooooooooo...',
  '..oLLLMMMMMMMo..',
  '.oLLMMMMMMMMMDo.',
  '.oLMMMMMMMMMMDo.',
  '.oMMMMDMMMMMMDo.',
  '.oMMMMMMMMMMMDo.',
  '.oMMMMMMMDMMMDo.',
  '.oMMMMMMMMMMMDo.',
  '.oMMDMMMMMMMMDo.',
  '.oMMMMMMMMMMMDo.',
  '.oMMMMMMMMDMMDo.',
  '..oMDDDDDDDDDo..',
  '...oooooooooo...',
  '................',
  '................',
];
const T_THUNDER = [
  '................',
  '.........oooo...',
  '........oLLMo...',
  '.......oLMMo....',
  '......oLMMo.....',
  '.....oLMMo......',
  '....oLMMMooooo..',
  '...oMMMMMMMMMo..',
  '...ooooooMMMo...',
  '........oMMo....',
  '.......oMMo.....',
  '......oMMo......',
  '.....oMDo.......',
  '....oDDo........',
  '....ooo.........',
  '................',
];
const T_POISON = [
  '................',
  '.......oo.......',
  '......oLMo......',
  '......oLMo......',
  '.....oLMMMo.....',
  '.....oLMMMo.....',
  '....oLMMMMMo....',
  '...oLMMMMMMMo...',
  '...oLMMkMkMMo...',
  '..oLMMMMMMMMDo..',
  '..oMMMkkkkMMDo..',
  '..oMMMMMMMMDDo..',
  '...oMMMMMMDDo...',
  '....oDDDDDDo....',
  '.....oooooo.....',
  '................',
];
const T_FIRE = [
  '................',
  '.......o........',
  '......oMo.......',
  '......oMMo...o..',
  '.....oMMMo..oMo.',
  '..o..oMMMMooMMo.',
  '.oMo.oMMLMMoMMo.',
  '.oMMooMLLLMMMMo.',
  '.oMMMMMLLLLMMMo.',
  '.oMMMLLLYYLLMMo.',
  '.oMMLLYYYYYLMMo.',
  '.oMMLYYYYYYLMMo.',
  '..oMLYYYYYYLMo..',
  '...oMLLLLLLMo...',
  '....oooooooo....',
  '................',
];
const T_ICE = [
  '................',
  '.......oo.......',
  '......oLLo......',
  '.....oLLMMo.....',
  '....oLLMMMMo....',
  '...oLLMMMMMMo...',
  '..oLLMMMMMMMDo..',
  '.oLLMMMMMMMMMDo.',
  '.oLMMMMMMMMMDDo.',
  '..oMMMMMMMMDDo..',
  '...oMMMMMMDDo...',
  '....oMMMMDDo....',
  '.....oMMDDo.....',
  '......oDDo......',
  '.......oo.......',
  '................',
];
const T_HEART = [
  '................',
  '................',
  '..oooo....oooo..',
  '.oLLMMo..oLMMMo.',
  'oLLMMMMooMMMMMDo',
  'oLMMMMMMMMMMMMDo',
  'oMMMMMMMMMMMMMDo',
  'oMMMMMMMMMMMMMDo',
  '.oMMMMMMMMMMMDo.',
  '..oMMMMMMMMMDo..',
  '...oMMMMMMMDo...',
  '....oMMMMMDo....',
  '.....oMMMDo.....',
  '......oMDo......',
  '.......oo.......',
  '................',
];
const TILE_ART: { rows: string[]; pal: Palette; bg: string }[] = [
  { rows: T_EARTH, pal: { o: '#2a1608', L: '#e8b880', M: '#b07a40', D: '#6a4220' }, bg: '#4a3020' },
  { rows: T_THUNDER, pal: { o: '#3a2a00', L: '#fffbd0', M: '#ffd020', D: '#c08a00' }, bg: '#4a4010' },
  { rows: T_POISON, pal: { o: '#0a2a08', L: '#d8ffb0', M: '#5ad030', D: '#2a8a18', k: '#0a3a08' }, bg: '#1e4018' },
  { rows: T_FIRE, pal: { o: '#3a0800', L: '#ffb040', M: '#e83a1a', Y: '#fff0a0' }, bg: '#4a1810' },
  { rows: T_ICE, pal: { o: '#08283a', L: '#f0ffff', M: '#5ac8ff', D: '#2a7ab8' }, bg: '#183a50' },
  { rows: T_HEART, pal: { o: '#3a0818', L: '#ffd0e0', M: '#ff4a8a', D: '#b01a50' }, bg: '#4a1830' },
];

function tileCanvas(kind: number): HTMLCanvasElement {
  const [c, ctx] = canvas(20, 20);
  const a = TILE_ART[kind];
  ctx.fillStyle = a.bg;
  ctx.fillRect(0, 0, 20, 20);
  ctx.fillStyle = shade(a.bg, 1.5);
  ctx.fillRect(0, 0, 20, 1);
  ctx.fillRect(0, 0, 1, 20);
  ctx.fillStyle = shade(a.bg, 0.55);
  ctx.fillRect(0, 19, 20, 1);
  ctx.fillRect(19, 0, 1, 20);
  drawSprite(ctx, a.rows, a.pal, 2, 2);
  return c;
}

function rainbowCanvas(): HTMLCanvasElement {
  const [c, ctx] = canvas(20, 20);
  ctx.fillStyle = '#20182a';
  ctx.fillRect(0, 0, 20, 20);
  const cols = ['#ff4a4a', '#ffa020', '#ffe040', '#50e050', '#40b0ff', '#a060ff'];
  for (let y = 0; y < 20; y++)
    for (let x = 0; x < 20; x++) {
      const dx = x - 9.5, dy = y - 9.5;
      const d = Math.sqrt(dx * dx + dy * dy);
      if (d < 7.5) {
        const ang = (Math.atan2(dy, dx) + Math.PI) / (Math.PI * 2);
        ctx.fillStyle = d < 2.2 ? '#ffffff' : cols[Math.floor(ang * 6) % 6];
        ctx.fillRect(x, y, 1, 1);
      } else if (d < 8.5) {
        ctx.fillStyle = '#100810';
        ctx.fillRect(x, y, 1, 1);
      }
    }
  return c;
}

/** Overlays for special tiles — crisp edge markers that leave the centre icon clear and non-glaring. */
function specialOverlay(kind: 'lineH' | 'lineV' | 'bomb'): HTMLCanvasElement {
  const [c, ctx] = canvas(20, 20);
  ctx.fillStyle = 'rgba(0,0,0,0.65)';
  if (kind === 'lineH') {
    ctx.fillRect(0, 1, 20, 3);
    ctx.fillRect(0, 16, 20, 3);
    ctx.fillStyle = '#f2e8c8';
    ctx.fillRect(1, 2, 18, 1);
    ctx.fillRect(1, 17, 18, 1);
    // left/right arrows
    ctx.fillRect(1, 9, 3, 2); ctx.fillRect(2, 8, 1, 4);
    ctx.fillRect(16, 9, 3, 2); ctx.fillRect(17, 8, 1, 4);
  } else if (kind === 'lineV') {
    ctx.fillRect(1, 0, 3, 20);
    ctx.fillRect(16, 0, 3, 20);
    ctx.fillStyle = '#f2e8c8';
    ctx.fillRect(2, 1, 1, 18);
    ctx.fillRect(17, 1, 1, 18);
    // top/bottom arrows
    ctx.fillRect(9, 1, 2, 3); ctx.fillRect(8, 2, 4, 1);
    ctx.fillRect(9, 16, 2, 3); ctx.fillRect(8, 17, 4, 1);
  } else {
    // corner brackets + warm amber border for 3x3 bomb
    ctx.fillStyle = '#181008';
    ctx.fillRect(0, 0, 20, 2); ctx.fillRect(0, 18, 20, 2); ctx.fillRect(0, 0, 2, 20); ctx.fillRect(18, 0, 2, 20);
    ctx.fillStyle = '#f4c868';
    ctx.fillRect(1, 1, 5, 1); ctx.fillRect(1, 1, 1, 5);
    ctx.fillRect(14, 1, 5, 1); ctx.fillRect(18, 1, 1, 5);
    ctx.fillRect(1, 18, 5, 1); ctx.fillRect(1, 14, 1, 5);
    ctx.fillRect(14, 18, 5, 1); ctx.fillRect(18, 14, 1, 5);
  }
  return c;
}

// ---------------------------------------------------------------- misc
function particleCanvas(): HTMLCanvasElement {
  const [c, ctx] = canvas(4, 4);
  ctx.fillStyle = '#fff';
  ctx.fillRect(0, 0, 4, 4);
  return c;
}
function glowCanvas(): HTMLCanvasElement {
  const [c, ctx] = canvas(64, 64);
  const g = ctx.createRadialGradient(32, 32, 0, 32, 32, 32);
  g.addColorStop(0, 'rgba(255,255,255,1)');
  g.addColorStop(0.35, 'rgba(255,255,255,0.5)');
  g.addColorStop(1, 'rgba(255,255,255,0)');
  ctx.fillStyle = g;
  ctx.fillRect(0, 0, 64, 64);
  return c;
}
function webCanvas(): HTMLCanvasElement {
  const [c, ctx] = canvas(16, 16);
  ctx.fillStyle = 'rgba(240,240,240,0.9)';
  for (let i = 0; i < 16; i++) { ctx.fillRect(i, i, 1, 1); ctx.fillRect(15 - i, i, 1, 1); ctx.fillRect(8, i, 1, 1); ctx.fillRect(i, 8, 1, 1); }
  for (const r of [3, 6]) for (let a = 0; a < 16; a++) {
    const ang = (a / 16) * Math.PI * 2;
    ctx.fillRect(Math.round(8 + Math.cos(ang) * r), Math.round(8 + Math.sin(ang) * r), 1, 1);
  }
  return c;
}
function arrowCanvas(): HTMLCanvasElement {
  return sprite([
    '................', '................', '................', '................', '................',
    '................', '............o...', '.ff.........oo..', '..ffwwwwwwwwwoo.', '.ff.........oo..',
    '............o...',
  ], { o: '#d0d0d0', w: '#8a5a2a', f: '#f0f0f0' });
}
function rockCanvas(): HTMLCanvasElement {
  return sprite([
    '................', '................', '.....oooooo.....', '....oSSLSSSo....', '...oSLLSSSSSo...', '...oSSSSSSkSo...',
    '...oSSSSSSSSo...', '...oSkSSSSSSo...', '...oSSSSSkSSo...', '....oSSSSSSo....', '.....oooooo.....',
  ], { o: '#202020', S: '#7a7a80', L: '#b0b0b8', k: '#4a4a50' });
}
function iceShardCanvas(): HTMLCanvasElement {
  return sprite([
    '................', '................', '................', '................', '................', '................',
    '..........oo....', '..ooooooooLLo...', '.oLLLLMMMMMMMo..', '..ooooooooMMo...', '..........oo....',
  ], { o: '#1a4a6a', L: '#f0ffff', M: '#7adcff' });
}

// ---------------------------------------------------------------- cache
const cache = new Map<string, THREE.Texture>();
function cached(key: string, make: () => HTMLCanvasElement): THREE.Texture {
  let t = cache.get(key);
  if (!t) {
    t = toTex(make());
    cache.set(key, t);
  }
  return t;
}

export const Tex = {
  block: (t: BlockType) => cached('b_' + t, () => { seed = 1000 + t.length * 97 + t.charCodeAt(0); return blockCanvas(t); }),
  backWall: () => cached('backwall', () => { seed = 77; return backWallCanvas(); }),
  crack: (stage: number) => cached('crack' + stage, () => crackCanvas(stage)),
  lava: () => {
    const t = cached('lava', () => { seed = 5; return lavaCanvas(); });
    t.wrapS = t.wrapT = THREE.RepeatWrapping;
    return t;
  },
  weapon: (id: WeaponId) => cached('w_' + id, () => sprite(WEAPON_ART[id].rows, WEAPON_ART[id].pal)),
  enemy: (id: string) => cached('e_' + id, () => sprite(ENEMY_ART[id].rows, ENEMY_ART[id].pal)),
  tile: (kind: number) => cached('t_' + kind, () => tileCanvas(kind)),
  rainbow: () => cached('rainbow', rainbowCanvas),
  special: (k: 'lineH' | 'lineV' | 'bomb') => cached('s_' + k, () => specialOverlay(k)),
  particle: () => cached('particle', particleCanvas),
  glow: () => {
    const t = cached('glow', glowCanvas);
    t.magFilter = THREE.LinearFilter;
    t.minFilter = THREE.LinearFilter;
    return t;
  },
  web: () => cached('web', webCanvas),
  arrow: () => cached('arrow', arrowCanvas),
  rock: () => cached('rock', rockCanvas),
  iceShard: () => cached('iceshard', iceShardCanvas),
};

/** Data-URL versions for DOM UI (weapon cards, tile icons in HUD, Wiki tables). */
const urlCache = new Map<string, string>();
export function spriteUrl(kind: 'weapon' | 'tile' | 'enemy' | 'block' | 'rainbow' | 'special', id: string | number): string {
  const key = kind + ':' + id;
  let u = urlCache.get(key);
  if (!u) {
    let c: HTMLCanvasElement;
    if (kind === 'weapon') c = sprite(WEAPON_ART[id as WeaponId].rows, WEAPON_ART[id as WeaponId].pal);
    else if (kind === 'enemy') c = sprite(ENEMY_ART[id as string].rows, ENEMY_ART[id as string].pal);
    else if (kind === 'block') { seed = 1000 + String(id).length * 97 + String(id).charCodeAt(0); c = blockCanvas(id as BlockType); }
    else if (kind === 'rainbow') c = rainbowCanvas();
    else if (kind === 'special') c = specialOverlay(id as 'lineH' | 'lineV' | 'bomb');
    else c = tileCanvas(id as number);
    u = c.toDataURL();
    urlCache.set(key, u);
  }
  return u;
}
