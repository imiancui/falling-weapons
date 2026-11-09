// All tunable numbers live here (⚙️ in the design doc).

export type Element = 'earth' | 'thunder' | 'poison' | 'fire' | 'ice';
export const ELEMENTS: Element[] = ['earth', 'thunder', 'poison', 'fire', 'ice'];
/** Match-3 tile colours: 0..4 = ELEMENTS index, 5 = heart. -1 = colourless (rainbow). */
export const HEART = 5;
export const TILE_KINDS = 6;

export const ELEMENT_INFO: Record<Element, { name: string; color: number; css: string; resonance: string; icon: string }> = {
  earth: { name: '土', color: 0xc08a4a, css: '#c08a4a', resonance: '範圍', icon: '🟫' },
  thunder: { name: '雷', color: 0xffd84a, css: '#ffd84a', resonance: '連鎖', icon: '⚡' },
  poison: { name: '毒', color: 0x7ee05a, css: '#7ee05a', resonance: '持續', icon: '☠' },
  fire: { name: '火', color: 0xff5a32, css: '#ff5a32', resonance: '燃燒', icon: '🔥' },
  ice: { name: '冰', color: 0x6ad4ff, css: '#6ad4ff', resonance: '冰凍', icon: '❄' },
};

export const BAL = {
  // ---- match-3 ----
  boardSize: 8,
  t1Threshold: 4,
  t2Threshold: 7,
  powerPerExtra: 0.15, // +15% per tile above threshold
  resonanceCap: 20,
  heartHealPct: 0.08, // per heart, of max HP
  heartShieldCount: 7,
  heartShieldSec: 3,
  heartWeight: 0.7, // spawn weight of heart vs 1.0 for elements
  hintDelay: 5,

  // ---- mine / physics ----
  block: 40, // px per block in physics space
  cols: 9, // incl. bedrock walls
  airRows: 4,
  gravity: 0.42,
  maxFall: 7.5, // px / step
  hitCooldown: 0.2, // s between weapon hits
  hopIdle: 0.7, // s without hitting before weapon hops

  // ---- lava ----
  lavaGrace: 25,
  lavaDps: 30,

  // ---- weapons ----
  t1Hp: 100,
  t2Hp: 160,
  spawnInvuln: 0,
  starterWeapon: true, // a free random tier-1 weapon at the start of each level
} as const;

export interface ResonanceFx {
  rangeMul: (r: number) => number;
  chainAdd: (r: number) => number;
  poisonDurAdd: (r: number) => number;
  burnMul: (r: number) => number;
  freezeAdd: (r: number) => number;
}
export const RESONANCE: ResonanceFx = {
  rangeMul: (r) => 1 + 0.03 * r,
  chainAdd: (r) => Math.floor(r / 4),
  poisonDurAdd: (r) => 0.25 * r,
  burnMul: (r) => 1 + 0.05 * r,
  freezeAdd: (r) => 0.1 * r,
};

// ---------------- blocks ----------------
export type BlockType =
  | 'dirt' | 'stone' | 'deepslate' | 'obsidian' | 'bedrock' | 'core'
  | 'coal' | 'iron' | 'copper' | 'gold' | 'redstone' | 'lapis' | 'diamond' | 'emerald';

export interface BlockInfo { hp: number; wear: number; ore?: string; name: string }
export const BLOCKS: Record<BlockType, BlockInfo> = {
  dirt: { hp: 30, wear: 0.4, name: '泥土' },
  stone: { hp: 60, wear: 0.8, name: '石頭' },
  deepslate: { hp: 100, wear: 1.2, name: '深板岩' },
  obsidian: { hp: 240, wear: 2.5, name: '黑曜石' },
  bedrock: { hp: Infinity, wear: 1.5, name: '基岩' },
  core: { hp: 400, wear: 1, name: '礦脈核心' },
  coal: { hp: 70, wear: 0.8, ore: 'coal', name: '煤礦' },
  iron: { hp: 80, wear: 0.9, ore: 'iron', name: '鐵礦' },
  copper: { hp: 75, wear: 0.9, ore: 'copper', name: '銅礦' },
  gold: { hp: 100, wear: 1, ore: 'gold', name: '金礦' },
  redstone: { hp: 100, wear: 1, ore: 'redstone', name: '紅石' },
  lapis: { hp: 110, wear: 1, ore: 'lapis', name: '青金石' },
  diamond: { hp: 150, wear: 1.3, ore: 'diamond', name: '鑽石' },
  emerald: { hp: 150, wear: 1.3, ore: 'emerald', name: '綠寶石' },
};
export const ORE_ICON: Record<string, string> = {
  coal: '⚫', iron: '⚪', copper: '🟠', gold: '🟡', redstone: '🔴', lapis: '🔵', diamond: '💎', emerald: '🟢',
};

// ---------------- levels ----------------
export type EnemyKind = 'zombie' | 'skeleton' | 'mushroom' | 'spider';
export interface LevelDef {
  name: string;
  depth: number; // rows of diggable blocks
  time: number; // seconds
  lavaSpeed: number; // rows / s
  hpMul: number;
  caves: number;
  enemies: Partial<Record<EnemyKind, number>>; // spawn weights
  enemyHpMul: number;
  goal: 'core' | 'boss';
}
export const LEVELS: LevelDef[] = [
  { name: '第 1 關・淺層礦道', depth: 60, time: 240, lavaSpeed: 0.35, hpMul: 1.0, caves: 6, enemies: { zombie: 3, mushroom: 2 }, enemyHpMul: 1, goal: 'core' },
  { name: '第 2 關・深層礦脈', depth: 100, time: 270, lavaSpeed: 0.4, hpMul: 1.25, caves: 10, enemies: { zombie: 3, skeleton: 2, mushroom: 2, spider: 2 }, enemyHpMul: 1.3, goal: 'core' },
  { name: '第 3 關・巨像之巢', depth: 150, time: 300, lavaSpeed: 0.45, hpMul: 1.5, caves: 14, enemies: { zombie: 3, skeleton: 3, mushroom: 2, spider: 3 }, enemyHpMul: 1.6, goal: 'boss' },
];

// ---------------- run modifiers (perks) ----------------
export interface Mods {
  dmgMul: number;
  hpMul: number;
  healMul: number;
  lavaSpeedMul: number;
  timeBonus: number;
  t2Threshold: number;
  spawnInvuln: number;
  thunderChainBonus: number;
  fireSpreadMul: number;
  ultMul: number; // multiplies cooldowns / charge requirements
  enemyDmgMul: number; // damage dealt TO enemies
  aoeBonus: number; // + radius in blocks for explosions/axe
  resonanceCapBonus: number;
  resonanceStart: number;
  wearMul: number;
}
export function defaultMods(): Mods {
  return {
    dmgMul: 1, hpMul: 1, healMul: 1, lavaSpeedMul: 1, timeBonus: 0, t2Threshold: BAL.t2Threshold,
    spawnInvuln: BAL.spawnInvuln, thunderChainBonus: 0, fireSpreadMul: 1, ultMul: 1, enemyDmgMul: 1,
    aoeBonus: 0, resonanceCapBonus: 0, resonanceStart: 0, wearMul: 1,
  };
}

export interface PerkDef { id: string; name: string; desc: string; icon: string; apply: (m: Mods) => void; max?: number }
export const PERKS: PerkDef[] = [
  { id: 'dmg', name: '鍛造大師', desc: '所有武器傷害 +20%', icon: '⚔️', apply: (m) => { m.dmgMul += 0.2; } },
  { id: 'hp', name: '強韌鋼材', desc: '武器最大 HP +25%', icon: '🛡️', apply: (m) => { m.hpMul += 0.25; } },
  { id: 'heal', name: '生命之心', desc: '愛心回血量 +50%', icon: '💗', apply: (m) => { m.healMul += 0.5; } },
  { id: 'lava', name: '冷卻岩漿', desc: '岩漿下降速度 -20%', icon: '🧊', apply: (m) => { m.lavaSpeedMul *= 0.8; } },
  { id: 'time', name: '沙漏', desc: '關卡時限 +30 秒', icon: '⏳', apply: (m) => { m.timeBonus += 30; } },
  { id: 't2', name: '精煉配方', desc: '高階武器門檻 -1（最低 5）', icon: '📜', max: 2, apply: (m) => { m.t2Threshold = Math.max(5, m.t2Threshold - 1); } },
  { id: 'invuln', name: '降臨祝福', desc: '武器生成時附帶 2 秒無敵', icon: '✨', max: 1, apply: (m) => { m.spawnInvuln += 2; } },
  { id: 'chain', name: '導電體質', desc: '雷屬性連鎖目標 +2', icon: '⚡', apply: (m) => { m.thunderChainBonus += 2; } },
  { id: 'spread', name: '野火燎原', desc: '火焰蔓延機率 ×2', icon: '🔥', max: 2, apply: (m) => { m.fireSpreadMul *= 2; } },
  { id: 'ult', name: '大招專精', desc: '大招冷卻／集氣需求 -20%', icon: '🌀', max: 3, apply: (m) => { m.ultMul *= 0.8; } },
  { id: 'hunter', name: '怪物剋星', desc: '對怪物與 Boss 傷害 +30%', icon: '🎯', apply: (m) => { m.enemyDmgMul += 0.3; } },
  { id: 'aoe', name: '爆破專家', desc: '擴散斧／爆炸範圍 +1 格', icon: '💥', max: 2, apply: (m) => { m.aoeBonus += 1; } },
  { id: 'reso', name: '元素共鳴', desc: '共鳴上限 +10，每關開始各元素共鳴 +3', icon: '🔮', max: 2, apply: (m) => { m.resonanceCapBonus += 10; m.resonanceStart += 3; } },
  { id: 'wear', name: '金剛刃', desc: '挖礦耐久消耗 -35%', icon: '💠', max: 2, apply: (m) => { m.wearMul *= 0.65; } },
];
