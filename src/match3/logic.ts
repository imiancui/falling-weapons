// Pure match-3 rules (no rendering). Resolves a swap step by step so the view can animate.
import { HEART, TILE_KINDS, BAL } from '../data/config';

export const enum Sp { None = 0, LineH = 1, LineV = 2, Bomb = 3, Rainbow = 4 }

export interface Tile { id: number; color: number; special: Sp } // color -1 = rainbow
export type Grid = (Tile | null)[][]; // [row][col], row 0 = top

let nextId = 1;
export function newTile(color: number, special: Sp = Sp.None): Tile {
  return { id: nextId++, color, special };
}

export function randomColor(rng = Math.random): number {
  const total = (TILE_KINDS - 1) + BAL.heartWeight;
  let r = rng() * total;
  for (let c = 0; c < TILE_KINDS - 1; c++) {
    if (r < 1) return c;
    r -= 1;
  }
  return HEART;
}

export const N = BAL.boardSize;
const inB = (r: number, c: number) => r >= 0 && c >= 0 && r < N && c < N;
const key = (r: number, c: number) => r * N + c;

export function createBoard(rng = Math.random): Grid {
  for (let attempt = 0; attempt < 200; attempt++) {
    const g: Grid = [];
    for (let r = 0; r < N; r++) {
      g.push([]);
      for (let c = 0; c < N; c++) {
        let col: number;
        do {
          col = randomColor(rng);
        } while (
          (c >= 2 && g[r][c - 1]!.color === col && g[r][c - 2]!.color === col) ||
          (r >= 2 && g[r - 1][c]!.color === col && g[r - 2][c]!.color === col)
        );
        g[r].push(newTile(col));
      }
    }
    if (findMove(g)) return g;
  }
  throw new Error('could not create board');
}

export interface MatchGroup {
  cells: [number, number][];
  color: number;
  spawn: Sp; // special created by this group
  spawnAt: [number, number] | null;
}

/** Find all match groups (runs ≥3 merged when they share cells). */
export function findGroups(g: Grid, prefer: [number, number][] = []): MatchGroup[] {
  const runs: { cells: [number, number][]; dir: 'h' | 'v' }[] = [];
  for (let r = 0; r < N; r++) {
    let c = 0;
    while (c < N) {
      const t = g[r][c];
      if (!t || t.color < 0) { c++; continue; }
      let e = c + 1;
      while (e < N && g[r][e] && g[r][e]!.color === t.color) e++;
      if (e - c >= 3) runs.push({ cells: Array.from({ length: e - c }, (_, i) => [r, c + i] as [number, number]), dir: 'h' });
      c = e;
    }
  }
  for (let c = 0; c < N; c++) {
    let r = 0;
    while (r < N) {
      const t = g[r][c];
      if (!t || t.color < 0) { r++; continue; }
      let e = r + 1;
      while (e < N && g[e][c] && g[e][c]!.color === t.color) e++;
      if (e - r >= 3) runs.push({ cells: Array.from({ length: e - r }, (_, i) => [r + i, c] as [number, number]), dir: 'v' });
      r = e;
    }
  }
  // union runs sharing a cell
  const parent = runs.map((_, i) => i);
  const find = (i: number): number => (parent[i] === i ? i : (parent[i] = find(parent[i])));
  const owner = new Map<number, number>();
  runs.forEach((run, i) => {
    for (const [r, c] of run.cells) {
      const k = key(r, c);
      const o = owner.get(k);
      if (o !== undefined) parent[find(i)] = find(o);
      else owner.set(k, i);
    }
  });
  const byRoot = new Map<number, number[]>();
  runs.forEach((_, i) => {
    const root = find(i);
    if (!byRoot.has(root)) byRoot.set(root, []);
    byRoot.get(root)!.push(i);
  });
  const preferSet = new Set(prefer.map(([r, c]) => key(r, c)));
  const groups: MatchGroup[] = [];
  for (const idxs of byRoot.values()) {
    const cellMap = new Map<number, [number, number]>();
    let maxLen = 0, hasH = false, hasV = false, longest = runs[idxs[0]];
    for (const i of idxs) {
      const run = runs[i];
      if (run.cells.length > maxLen) { maxLen = run.cells.length; longest = run; }
      if (run.dir === 'h') hasH = true; else hasV = true;
      for (const cell of run.cells) cellMap.set(key(cell[0], cell[1]), cell);
    }
    const cells = [...cellMap.values()];
    const color = g[cells[0][0]][cells[0][1]]!.color;
    let spawn = Sp.None;
    if (maxLen >= 5) spawn = Sp.Rainbow;
    else if (hasH && hasV) spawn = Sp.Bomb;
    else if (maxLen === 4) spawn = longest.dir === 'h' ? Sp.LineH : Sp.LineV;
    let spawnAt: [number, number] | null = null;
    if (spawn !== Sp.None) {
      spawnAt = cells.find(([r, c]) => preferSet.has(key(r, c))) ?? null;
      if (!spawnAt) {
        if (hasH && hasV) {
          // intersection cell
          const counts = new Map<number, number>();
          for (const i of idxs) for (const [r, c] of runs[i].cells) counts.set(key(r, c), (counts.get(key(r, c)) ?? 0) + 1);
          const k = [...counts.entries()].find(([, n]) => n > 1)?.[0];
          spawnAt = k !== undefined ? [Math.floor(k / N), k % N] : cells[0];
        } else spawnAt = longest.cells[Math.floor(longest.cells.length / 2)];
      }
    }
    groups.push({ cells, color, spawn, spawnAt });
  }
  return groups;
}

export function areAdjacent(a: [number, number], b: [number, number]) {
  return Math.abs(a[0] - b[0]) + Math.abs(a[1] - b[1]) === 1;
}

function swapIn(g: Grid, a: [number, number], b: [number, number]) {
  const t = g[a[0]][a[1]];
  g[a[0]][a[1]] = g[b[0]][b[1]];
  g[b[0]][b[1]] = t;
}

/** Is this swap legal (creates a match or combines specials)? */
export function isValidSwap(g: Grid, a: [number, number], b: [number, number]): boolean {
  const ta = g[a[0]][a[1]], tb = g[b[0]][b[1]];
  if (!ta || !tb) return false;
  if (ta.special === Sp.Rainbow || tb.special === Sp.Rainbow) return true;
  if (ta.special !== Sp.None && tb.special !== Sp.None) return true;
  swapIn(g, a, b);
  const ok = findGroups(g).length > 0;
  swapIn(g, a, b);
  return ok;
}

export function findMove(g: Grid): [[number, number], [number, number]] | null {
  for (let r = 0; r < N; r++)
    for (let c = 0; c < N; c++) {
      if (c + 1 < N && isValidSwap(g, [r, c], [r, c + 1])) return [[r, c], [r, c + 1]];
      if (r + 1 < N && isValidSwap(g, [r, c], [r + 1, c])) return [[r, c], [r + 1, c]];
    }
  return null;
}

export function shuffle(g: Grid, rng = Math.random) {
  const tiles = g.flat().filter((t): t is Tile => !!t);
  for (let attempt = 0; attempt < 100; attempt++) {
    for (let i = tiles.length - 1; i > 0; i--) {
      const j = Math.floor(rng() * (i + 1));
      [tiles[i], tiles[j]] = [tiles[j], tiles[i]];
    }
    let k = 0;
    for (let r = 0; r < N; r++) for (let c = 0; c < N; c++) g[r][c] = tiles[k++];
    if (findGroups(g).length === 0 && findMove(g)) return;
  }
  // fallback: brand new board
  const fresh = createBoard(rng);
  for (let r = 0; r < N; r++) for (let c = 0; c < N; c++) g[r][c] = fresh[r][c];
}

// ------------------------------------------------------------------ clearing

export interface ClearStep {
  cleared: { r: number; c: number; tile: Tile }[];
  spawned: { r: number; c: number; tile: Tile }[];
  effects: { kind: 'lineH' | 'lineV' | 'bomb' | 'rainbow' | 'all'; r: number; c: number; radius?: number; color?: number }[];
  counts: number[]; // per colour (0..5)
}

function mostCommonColor(g: Grid): number {
  const counts = new Array(TILE_KINDS).fill(0);
  for (const row of g) for (const t of row) if (t && t.color >= 0) counts[t.color]++;
  let best = 0;
  for (let i = 1; i < TILE_KINDS; i++) if (counts[i] > counts[best]) best = i;
  return best;
}

/**
 * Clears `initial` cells, chain-triggering specials. Removes cleared tiles from the grid,
 * places spawned specials. Returns details for animation + counting.
 */
export function clearCells(
  g: Grid,
  initial: [number, number][],
  spawns: { at: [number, number]; color: number; special: Sp }[] = [],
  preEffects: ClearStep['effects'] = [],
): ClearStep {
  const marked = new Set<number>();
  const queue: [number, number][] = [];
  const effects: ClearStep['effects'] = [...preEffects];
  const add = (r: number, c: number) => {
    if (!inB(r, c) || !g[r][c]) return;
    const k = key(r, c);
    if (marked.has(k)) return;
    marked.add(k);
    queue.push([r, c]);
  };
  for (const [r, c] of initial) add(r, c);
  for (const e of preEffects) applyEffect(g, e, add);
  while (queue.length) {
    const [r, c] = queue.shift()!;
    const t = g[r][c]!;
    if (t.special === Sp.None) continue;
    let e: ClearStep['effects'][number];
    if (t.special === Sp.LineH) e = { kind: 'lineH', r, c };
    else if (t.special === Sp.LineV) e = { kind: 'lineV', r, c };
    else if (t.special === Sp.Bomb) e = { kind: 'bomb', r, c, radius: 1 };
    else e = { kind: 'rainbow', r, c, color: mostCommonColor(g) };
    effects.push(e);
    applyEffect(g, e, add);
  }
  const counts = new Array(TILE_KINDS).fill(0);
  const cleared: ClearStep['cleared'] = [];
  for (const k of marked) {
    const r = Math.floor(k / N), c = k % N;
    const t = g[r][c]!;
    if (t.color >= 0) counts[t.color]++;
    cleared.push({ r, c, tile: t });
    g[r][c] = null;
  }
  const spawned: ClearStep['spawned'] = [];
  for (const s of spawns) {
    const [r, c] = s.at;
    if (g[r][c]) continue;
    const t = newTile(s.special === Sp.Rainbow ? -1 : s.color, s.special);
    g[r][c] = t;
    spawned.push({ r, c, tile: t });
  }
  return { cleared, spawned, effects, counts };
}

function applyEffect(g: Grid, e: ClearStep['effects'][number], add: (r: number, c: number) => void) {
  switch (e.kind) {
    case 'lineH':
      for (let c = 0; c < N; c++) add(e.r, c);
      break;
    case 'lineV':
      for (let r = 0; r < N; r++) add(r, e.c);
      break;
    case 'bomb': {
      const rad = e.radius ?? 1;
      for (let r = e.r - rad; r <= e.r + rad; r++) for (let c = e.c - rad; c <= e.c + rad; c++) add(r, c);
      break;
    }
    case 'rainbow':
      add(e.r, e.c);
      for (let r = 0; r < N; r++) for (let c = 0; c < N; c++) if (g[r][c] && g[r][c]!.color === e.color) add(r, c);
      break;
    case 'all':
      for (let r = 0; r < N; r++) for (let c = 0; c < N; c++) add(r, c);
      break;
  }
}

/** Effects caused directly by swapping two tiles where at least one is special. Returns null if normal swap. */
export function comboEffects(g: Grid, a: [number, number], b: [number, number]): { cells: [number, number][]; effects: ClearStep['effects'] } | null {
  const ta = g[a[0]][a[1]]!, tb = g[b[0]][b[1]]!;
  const R = Sp.Rainbow;
  if (ta.special === R && tb.special === R) {
    ta.special = Sp.None;
    tb.special = Sp.None;
    return { cells: [a, b], effects: [{ kind: 'all', r: b[0], c: b[1] }] };
  }
  if (ta.special === R || tb.special === R) {
    const other = ta.special === R ? tb : ta;
    const [rr, rc] = ta.special === R ? a : b;
    (ta.special === R ? ta : tb).special = Sp.None;
    return { cells: [a, b], effects: [{ kind: 'rainbow', r: rr, c: rc, color: other.color }] };
  }
  if (ta.special !== Sp.None && tb.special !== Sp.None) {
    const isLine = (s: Sp) => s === Sp.LineH || s === Sp.LineV;
    const [r, c] = b;
    // strip specials so they don't double-trigger
    const effects: ClearStep['effects'] = [];
    if (isLine(ta.special) && isLine(tb.special)) {
      effects.push({ kind: 'lineH', r, c }, { kind: 'lineV', r, c });
    } else if (ta.special === Sp.Bomb && tb.special === Sp.Bomb) {
      effects.push({ kind: 'bomb', r, c, radius: 2 });
    } else {
      for (const d of [-1, 0, 1]) effects.push({ kind: 'lineH', r: r + d, c }, { kind: 'lineV', r, c: c + d });
    }
    ta.special = Sp.None;
    tb.special = Sp.None;
    return { cells: [a, b], effects };
  }
  return null;
}

/** Apply gravity + refill. Returns moves for animation: tile id -> fromRow (may be negative for new tiles). */
export function collapse(g: Grid, rng = Math.random): { tile: Tile; r: number; c: number; fromR: number }[] {
  const moves: { tile: Tile; r: number; c: number; fromR: number }[] = [];
  for (let c = 0; c < N; c++) {
    let write = N - 1;
    for (let r = N - 1; r >= 0; r--) {
      const t = g[r][c];
      if (t) {
        if (write !== r) {
          g[write][c] = t;
          g[r][c] = null;
          moves.push({ tile: t, r: write, c, fromR: r });
        }
        write--;
      }
    }
    let spawnRow = -1;
    for (let r = write; r >= 0; r--) {
      const t = newTile(randomColor(rng));
      g[r][c] = t;
      moves.push({ tile: t, r, c, fromR: spawnRow-- });
    }
  }
  return moves;
}
