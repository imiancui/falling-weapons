// All tunable numbers live here (⚙️ in the design doc).

export type Element = 'earth' | 'thunder' | 'poison' | 'fire' | 'ice';
export type WeaponElement = Element | 'holy';
export const ELEMENTS: Element[] = ['earth', 'thunder', 'poison', 'fire', 'ice'];
/** Match-3 tile colours: 0..4 = ELEMENTS index, 5 = heart. -1 = colourless (rainbow). */
export const HEART = 5;
export const TILE_KINDS = 6;

export interface ElementMeta {
  name: string;
  color: number;
  css: string;
  resonance: string;
  resonanceDesc: string;
  icon: string;
}

export const ELEMENT_INFO: Record<Element, ElementMeta> = {
  earth: { name: '土', color: 0xc08a4a, css: '#c08a4a', resonance: '範圍', resonanceDesc: '每級 +12% 範圍（Lv5 +60%）', icon: '🟫' },
  thunder: { name: '雷', color: 0xffd84a, css: '#ffd84a', resonance: '連鎖', resonanceDesc: '每級 +1 連鎖目標（Lv5 +5）', icon: '⚡' },
  poison: { name: '毒', color: 0x7ee05a, css: '#7ee05a', resonance: '持續', resonanceDesc: '每級 +1.0 秒中毒時間（Lv5 +5s）', icon: '☠' },
  fire: { name: '火', color: 0xff5a32, css: '#ff5a32', resonance: '燃燒', resonanceDesc: '每級 +20% 燃燒傷害（Lv5 +100%）', icon: '🔥' },
  ice: { name: '冰', color: 0x6ad4ff, css: '#6ad4ff', resonance: '冰凍', resonanceDesc: '每級 +0.4 秒冰凍時間（Lv5 +2s）', icon: '❄' },
};

export const HOLY_INFO = {
  name: '聖',
  color: 0xffe680,
  css: '#ffe680',
  icon: '✨',
} as const;

export function weaponElementMeta(el: WeaponElement): { name: string; color: number; css: string; icon: string } {
  return el === 'holy' ? HOLY_INFO : ELEMENT_INFO[el];
}

export const BAL = {
  // ---- stamina & focus (Clash Royale Elixir-style) ----
  staminaMax: 5,
  staminaRegenSec: 4.0, // seconds per 1 stamina point
  focusRatePerSec: 0.025, // +2.5% weapon power per sec while stamina is full
  focusMax: 0.25, // up to +25% bonus on next valid move

  // ---- match-3 thresholds ----
  boardSize: 8,
  t0Threshold: 3, // 低階：同色一步消 3
  t1Threshold: 4, // 初階：同色一步消 4~5
  t2Threshold: 6, // 高階：同色一步消 6~8
  t3Threshold: 9, // 傳說：同色一步消 9+
  holyTotalThreshold: 20, // 聖劍：一步內全色（含愛心）加總消 20+
  cumThreshold: 30, // 累計武器 + 共鳴升 1 級：每累計 30 個同色方塊
  resonanceMaxLv: 5, // 共鳴滿級 Lv5（解鎖同名武器多把並存）
  powerPerExtra: 0.12, // +12% 傷害與 HP / 每超過門檻 1 顆
  dupBoost: 0.20, // 未滿 Lv5 重複觸發同名武器：傷害強化 +20%
  holyDupBoost: 0.25, // 聖劍重複觸發：傷害強化 +25%
  dupHealPct: 0.40, // 重複觸發同名武器時回復 40% 最大 HP（不再直接 100% 滿血）
  maxDupStacks: 5,
  heartHealPct: 0.08, // 每顆愛心回復最大 HP 8%
  heartShieldCount: 7,
  heartShieldSec: 3,
  heartWeight: 0.7, // 愛心生成權重（元素為 1.0）
  hintDelay: 5,

  // ---- mine / physics ----
  block: 40, // px per block in physics space
  cols: 9, // incl. bedrock walls
  airRows: 5,
  gravity: 0.42,
  maxFall: 7.5, // px / step
  hitCooldown: 0.2, // s between weapon hits
  hopIdle: 0.7, // s without hitting before weapon hops
  maxWeapons: 18, // 全場硬體安全上限
  barrelRad: 2.4, // 炸藥桶爆炸半徑（格）
  barrelDmg: 165, // 炸藥桶基礎破岩／炸怪傷害（不傷我方武器）
  crystalHealPct: 0.12, // 水晶簇打破時全體武器回血 12%

  // ---- lava ----
  lavaGrace: 30,
  lavaDps: 45,
  lavaWarnGap: 12, // 距離 12 格內顯示頂端熱浪與落火預警

  // ---- weapons (2x HP vs v0.1) ----
  t0Hp: 110,
  t1Hp: 200,
  cumHp: 260,
  t2Hp: 320,
  t3Hp: 450,
  holyHp: 300,
  holyDecayPct: 0.05, // 聖劍每秒流失 5% 最大 HP（基礎壽命 20 秒）
  spawnInvuln: 0,
  starterWeapon: false, // 取消免費開局武器，由玩家開局 5 格行動力自行布局
} as const;

export interface ResonanceFx {
  rangeMul: (lv: number) => number;
  chainAdd: (lv: number) => number;
  poisonDurAdd: (lv: number) => number;
  burnMul: (lv: number) => number;
  freezeAdd: (lv: number) => number;
}
export const RESONANCE: ResonanceFx = {
  rangeMul: (lv) => 1 + 0.12 * lv,
  chainAdd: (lv) => lv,
  poisonDurAdd: (lv) => 1.0 * lv,
  burnMul: (lv) => 1 + 0.20 * lv,
  freezeAdd: (lv) => 0.4 * lv,
};

// ---------------- blocks ----------------
export type BlockType =
  | 'dirt' | 'stone' | 'deepslate' | 'obsidian' | 'bedrock' | 'core'
  | 'barrel' | 'crystal'
  | 'coal' | 'iron' | 'copper' | 'gold' | 'redstone' | 'lapis' | 'diamond' | 'emerald';

export interface BlockInfo { hp: number; wear: number; ore?: string; name: string; depthNote: string }
export const BLOCKS: Record<BlockType, BlockInfo> = {
  dirt: { hp: 30, wear: 0.4, name: '泥土', depthNote: '表層（前 8% 深度）' },
  stone: { hp: 60, wear: 0.8, name: '石頭', depthNote: '淺中層（8%~50% 深度）' },
  deepslate: { hp: 100, wear: 1.2, name: '深板岩', depthNote: '深層與硬岩夾層' },
  obsidian: { hp: 240, wear: 2.5, name: '黑曜石', depthNote: '硬岩夾層與深層高硬度岩塊' },
  bedrock: { hp: Infinity, wear: 1.5, name: '基岩', depthNote: '礦坑左右邊界與最底層（無法破壞）' },
  core: { hp: 400, wear: 1, name: '礦脈核心', depthNote: '第 1、2 關最底部目標（擊破任一格即過關）' },
  barrel: { hp: 35, wear: 0.5, name: '古老炸藥桶', depthNote: '硬岩夾層與洞穴旁（擊破引爆 2.4 格破岩炸怪，不傷我方武器）' },
  crystal: { hp: 45, wear: 0.6, ore: 'diamond', name: '共鳴水晶簇', depthNote: '中深層與洞穴旁（擊破掉寶石並為全場武器回 12% HP）' },
  coal: { hp: 70, wear: 0.8, ore: 'coal', name: '煤礦', depthNote: '淺中層常見礦脈' },
  copper: { hp: 75, wear: 0.9, ore: 'copper', name: '銅礦', depthNote: '淺層礦脈' },
  iron: { hp: 80, wear: 0.9, ore: 'iron', name: '鐵礦', depthNote: '全深度常見礦脈' },
  gold: { hp: 100, wear: 1, ore: 'gold', name: '金礦', depthNote: '中深層礦脈（30% 以下）' },
  redstone: { hp: 100, wear: 1, ore: 'redstone', name: '紅石礦', depthNote: '中深層礦脈（30% 以下）' },
  lapis: { hp: 110, wear: 1, ore: 'lapis', name: '青金石礦', depthNote: '中深層礦脈（30% 以下）' },
  diamond: { hp: 150, wear: 1.3, ore: 'diamond', name: '鑽石礦', depthNote: '深層珍稀礦脈（60% 以下）' },
  emerald: { hp: 150, wear: 1.3, ore: 'emerald', name: '綠寶石礦', depthNote: '深層稀有礦脈（60% 以下）' },
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
  hardBands: number; // horizontal hard rock strata bands
  enemies: Partial<Record<EnemyKind, number>>; // spawn weights
  enemyHpMul: number;
  goal: 'core' | 'boss';
}
export const LEVELS: LevelDef[] = [
  { name: '第 1 關・淺層礦道', depth: 60, time: 270, lavaSpeed: 0.24, hpMul: 1.0, caves: 7, hardBands: 2, enemies: { zombie: 3, mushroom: 2, spider: 1 }, enemyHpMul: 1.0, goal: 'core' },
  { name: '第 2 關・深層礦脈', depth: 100, time: 330, lavaSpeed: 0.28, hpMul: 1.25, caves: 11, hardBands: 3, enemies: { zombie: 3, skeleton: 2.5, mushroom: 2, spider: 2.5 }, enemyHpMul: 1.3, goal: 'core' },
  { name: '第 3 關・巨像之巢', depth: 150, time: 390, lavaSpeed: 0.32, hpMul: 1.5, caves: 15, hardBands: 4, enemies: { zombie: 3, skeleton: 3, mushroom: 2.5, spider: 3 }, enemyHpMul: 1.6, goal: 'boss' },
];

// ---------------- run modifiers (perks) ----------------
export interface Mods {
  dmgMul: number;
  hpMul: number;
  healMul: number;
  lavaSpeedMul: number;
  timeBonus: number;
  t2Threshold: number;
  t3Threshold: number;
  cumThreshold: number;
  spawnInvuln: number;
  thunderChainBonus: number;
  fireSpreadMul: number;
  ultMul: number; // multiplies cooldowns / charge requirements
  enemyDmgMul: number; // damage dealt TO enemies
  aoeBonus: number; // + radius in blocks for explosions/axe
  resonanceStartLv: number;
  wearMul: number;
  staminaMaxBonus: number;
  staminaRegenMul: number;
}
export function defaultMods(): Mods {
  return {
    dmgMul: 1,
    hpMul: 1,
    healMul: 1,
    lavaSpeedMul: 1,
    timeBonus: 0,
    t2Threshold: BAL.t2Threshold,
    t3Threshold: BAL.t3Threshold,
    cumThreshold: BAL.cumThreshold,
    spawnInvuln: BAL.spawnInvuln,
    thunderChainBonus: 0,
    fireSpreadMul: 1,
    ultMul: 1,
    enemyDmgMul: 1,
    aoeBonus: 0,
    resonanceStartLv: 0,
    wearMul: 1,
    staminaMaxBonus: 0,
    staminaRegenMul: 1,
  };
}

export interface PerkDef { id: string; name: string; desc: string; icon: string; apply: (m: Mods) => void; max?: number }
export const PERKS: PerkDef[] = [
  { id: 'stamina_spd', name: '行雲流水', desc: '行動力回復速度 +20%', icon: '🍃', max: 2, apply: (m) => { m.staminaRegenMul *= 1.2; } },
  { id: 'stamina_max', name: '氣海擴充', desc: '行動力上限 +1 格（每關開局補滿）', icon: '🔋', max: 2, apply: (m) => { m.staminaMaxBonus += 1; } },
  { id: 'dmg', name: '鍛造大師', desc: '所有武器傷害 +20%', icon: '⚔️', apply: (m) => { m.dmgMul += 0.2; } },
  { id: 'hp', name: '強韌鋼材', desc: '武器最大 HP +25%', icon: '🛡️', apply: (m) => { m.hpMul += 0.25; } },
  { id: 'heal', name: '生命之心', desc: '愛心回血量 +50%', icon: '💗', apply: (m) => { m.healMul += 0.5; } },
  { id: 'lava', name: '冷卻岩漿', desc: '岩漿下降速度 -20%', icon: '🧊', apply: (m) => { m.lavaSpeedMul *= 0.8; } },
  { id: 'time', name: '沙漏', desc: '關卡時限 +30 秒', icon: '⏳', apply: (m) => { m.timeBonus += 30; } },
  {
    id: 't2', name: '精煉配方', desc: '高階與傳說武器門檻各 -1（最低 5／7）', icon: '📜', max: 2,
    apply: (m) => { m.t2Threshold = Math.max(5, m.t2Threshold - 1); m.t3Threshold = Math.max(7, m.t3Threshold - 1); },
  },
  { id: 'invuln', name: '降臨祝福', desc: '武器生成時附帶 2 秒無敵', icon: '✨', max: 1, apply: (m) => { m.spawnInvuln += 2; } },
  { id: 'chain', name: '導電體質', desc: '雷屬性連鎖目標 +2', icon: '⚡', apply: (m) => { m.thunderChainBonus += 2; } },
  { id: 'spread', name: '野火燎原', desc: '火焰蔓延機率 ×2', icon: '🔥', max: 2, apply: (m) => { m.fireSpreadMul *= 2; } },
  { id: 'ult', name: '大招專精', desc: '大招冷卻／集氣需求 -20%', icon: '🌀', max: 3, apply: (m) => { m.ultMul *= 0.8; } },
  { id: 'hunter', name: '怪物剋星', desc: '對怪物與 Boss 傷害 +30%', icon: '🎯', apply: (m) => { m.enemyDmgMul += 0.3; } },
  { id: 'aoe', name: '爆破專家', desc: '擴散／爆炸類範圍 +1 格', icon: '💥', max: 2, apply: (m) => { m.aoeBonus += 1; } },
  {
    id: 'reso', name: '元素共鳴', desc: '累計條需求 -5（最低 20），且每關開始全元素共鳴 +1 級', icon: '🔮', max: 2,
    apply: (m) => { m.cumThreshold = Math.max(20, m.cumThreshold - 5); m.resonanceStartLv = Math.min(BAL.resonanceMaxLv, m.resonanceStartLv + 1); },
  },
  { id: 'wear', name: '金剛刃', desc: '挖礦耐久消耗 -35%', icon: '💠', max: 2, apply: (m) => { m.wearMul *= 0.65; } },
];
