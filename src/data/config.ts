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
  // ---- burst stamina + big-clear refunds + 8s Overdrive ----
  staminaMax: 7, // 每輪基礎 7 格行動力
  refundTier1Count: 8, // 單步總消 8~13 顆 → 回氣 +1 格 + 狂暴蓄能 +1 層
  refundTier2Count: 14, // 單步總消 14+ 顆 → 回氣 +2 格 + 狂暴蓄能 +2 層
  maxRefundsPerCycle: 4, // 每輪最多回氣 4 格（單輪最多連打 11 步）
  overdriveSec: 8.0, // 行動力歸 0（或手動釋放）進入 8 秒散熱狂暴觀賞期
  overdriveHitCdMul: 0.55, // 狂暴期間武器碰撞攻擊間隔 ×0.55
  overdriveUltRateMul: 1.8, // 狂暴期間大招冷卻與集氣速度 ×1.8
  overdriveBaseDmgBonus: 0.25, // 狂暴基礎增傷 +25%
  overdriveStackDmgBonus: 0.10, // 每層回氣蓄能額外增傷 +10%（滿 4 層共 +65%）

  // ---- endless abyss mode ----
  endlessGateEvery: 35, // 每 35 格一道守層結界房（破除拿三選一強化；每 105 格為 Boss 結界房）
  endlessEnemyScalePerGate: 1.35, // 每道結界怪物血量 ×1.35
  endlessBlockScalePerGate: 1.12, // 每道結界方塊血量 ×1.12
  endlessLavaBaseSpeed: 0.23,
  endlessLavaAccelPerGate: 0.015,
  endlessLavaMaxSpeed: 0.52,
  endlessResoExtraBonus: 0.03, // 無盡模式共鳴滿 Lv5 後，每再滿 30 顆同色額外 +3% 該元素傷害

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
  dupHealPct: 0.40, // 重複觸發同名武器時回復 40% 最大 HP
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
  hopIdle: 0.65, // s without hitting before weapon hops
  maxWeapons: 18, // 全場硬體安全上限
  barrelRad: 2.4, // 炸藥桶爆炸半徑（格）
  barrelDmg: 180, // 炸藥桶基礎破岩／炸怪傷害（不傷我方武器）
  crystalHealPct: 0.12, // 水晶簇打破時全體武器回血 12%

  // ---- lava ----
  lavaGrace: 30,
  lavaDps: 45,
  lavaWarnGap: 12, // 距離 12 格內顯示頂端熱浪與落火預警

  // ---- weapons ----
  t0Hp: 110,
  t1Hp: 200,
  cumHp: 260,
  t2Hp: 320,
  t3Hp: 450,
  holyHp: 300,
  holyDecayPct: 0.05, // 聖劍每秒流失 5% 最大 HP（基礎壽命 20 秒）
  spawnInvuln: 0,
  starterWeapon: false,
} as const;

export interface ResonanceFx {
  rangeMul: (lv: number) => number;
  chainAdd: (lv: number) => number;
  poisonDurAdd: (lv: number) => number;
  burnMul: (lv: number) => number;
  freezeAdd: (lv: number) => number;
}
export const RESONANCE: ResonanceFx = {
  rangeMul: (lv) => 1 + 0.12 * Math.min(BAL.resonanceMaxLv, lv),
  chainAdd: (lv) => Math.min(BAL.resonanceMaxLv, lv),
  poisonDurAdd: (lv) => 1.0 * Math.min(BAL.resonanceMaxLv, lv),
  burnMul: (lv) => 1 + 0.20 * Math.min(BAL.resonanceMaxLv, lv),
  freezeAdd: (lv) => 0.4 * Math.min(BAL.resonanceMaxLv, lv),
};

// ---------------- blocks ----------------
export type BlockType =
  | 'dirt' | 'stone' | 'deepslate' | 'obsidian' | 'bedrock' | 'seal' | 'core'
  | 'barrel' | 'crystal'
  | 'coal' | 'iron' | 'copper' | 'gold' | 'redstone' | 'lapis' | 'diamond' | 'emerald';

export interface BlockInfo { hp: number; wear: number; ore?: string; name: string; depthNote: string }
export const BLOCKS: Record<BlockType, BlockInfo> = {
  dirt: { hp: 32, wear: 0.4, name: '泥土', depthNote: '表層（前 8% 深度）' },
  stone: { hp: 65, wear: 0.8, name: '石頭', depthNote: '淺中層（8%~50% 深度）' },
  deepslate: { hp: 110, wear: 1.2, name: '深板岩', depthNote: '深層與硬岩夾層' },
  obsidian: { hp: 250, wear: 2.4, name: '黑曜石', depthNote: '硬岩夾層與深層高硬度岩塊' },
  bedrock: { hp: Infinity, wear: 1.5, name: '基岩', depthNote: '礦坑左右邊界與最底層（無法破壞）' },
  seal: { hp: Infinity, wear: 0.3, name: '符文結界石', depthNote: '守層結界房地板（無法直接挖掘；擊殺該層所有守衛怪／Boss 後自動碎裂放行！）' },
  core: { hp: 450, wear: 1, name: '礦脈核心', depthNote: '一般關卡最底部目標（先擊破上方守門菁英解開結界，再擊碎核心即過關）' },
  barrel: { hp: 35, wear: 0.5, name: '古老炸藥桶', depthNote: '硬岩夾層與洞穴旁（擊破引爆 2.4 格破岩炸怪，不傷我方武器）' },
  crystal: { hp: 45, wear: 0.6, ore: 'diamond', name: '共鳴水晶簇', depthNote: '中深層與洞穴旁（擊破掉寶石並為全場武器回 12% HP）' },
  coal: { hp: 70, wear: 0.8, ore: 'coal', name: '煤礦', depthNote: '淺中層常見礦脈' },
  copper: { hp: 75, wear: 0.9, ore: 'copper', name: '銅礦', depthNote: '淺層礦脈' },
  iron: { hp: 85, wear: 0.9, ore: 'iron', name: '鐵礦', depthNote: '全深度常見礦脈' },
  gold: { hp: 110, wear: 1, ore: 'gold', name: '金礦', depthNote: '中深層礦脈（30% 以下）' },
  redstone: { hp: 110, wear: 1, ore: 'redstone', name: '紅石礦', depthNote: '中深層礦脈（30% 以下）' },
  lapis: { hp: 120, wear: 1, ore: 'lapis', name: '青金石礦', depthNote: '中深層礦脈（30% 以下）' },
  diamond: { hp: 160, wear: 1.3, ore: 'diamond', name: '鑽石礦', depthNote: '深層珍稀礦脈（60% 以下）' },
  emerald: { hp: 160, wear: 1.3, ore: 'emerald', name: '綠寶石礦', depthNote: '深層稀有礦脈（60% 以下）' },
};
export const ORE_ICON: Record<string, string> = {
  coal: '⚫', iron: '⚪', copper: '🟠', gold: '🟡', redstone: '🔴', lapis: '🔵', diamond: '💎', emerald: '🟢',
};

// ---------------- levels (10-stage exponential campaign + endless config) ----------------
export type EnemyKind = 'zombie' | 'skeleton' | 'mushroom' | 'spider';
export type BossKind = 'golem' | 'spider_queen' | 'balrog';
export const BOSS_CYCLE: BossKind[] = ['golem', 'spider_queen', 'balrog'];

export interface LevelDef {
  name: string;
  depth: number; // rows of diggable blocks
  gates: number; // mid-shaft Gatekeeper Seal Chambers
  endElites?: number; // Elite guards on the final seal above Core
  boss?: BossKind; // Boss on Boss stages
  time: number; // seconds (0 = unlimited in endless)
  lavaSpeed: number; // rows / s
  hpMul: number; // block HP multiplier
  caves: number;
  hardBands: number;
  enemies: Partial<Record<EnemyKind, number>>;
  enemyHpMul: number; // monster HP multiplier (~1.38x per stage -> 18x at Stage 10)
  goal: 'core' | 'boss' | 'endless';
}

export const LEVELS: LevelDef[] = [
  { name: '第 1 關・淺層礦道', depth: 55, gates: 1, endElites: 1, time: 270, lavaSpeed: 0.22, hpMul: 1.0, caves: 5, hardBands: 1, enemies: { zombie: 3, mushroom: 2 }, enemyHpMul: 1.0, goal: 'core' },
  { name: '第 2 關・潮濕坑道', depth: 70, gates: 2, endElites: 1, time: 300, lavaSpeed: 0.24, hpMul: 1.15, caves: 7, hardBands: 2, enemies: { zombie: 3, skeleton: 2, mushroom: 2, spider: 2 }, enemyHpMul: 1.4, goal: 'core' },
  { name: '第 3 關・巨像之巢', depth: 85, gates: 2, boss: 'golem', time: 340, lavaSpeed: 0.25, hpMul: 1.3, caves: 8, hardBands: 2, enemies: { zombie: 3, skeleton: 2.5, mushroom: 2, spider: 2 }, enemyHpMul: 1.9, goal: 'boss' },
  { name: '第 4 關・黑曜斷層', depth: 95, gates: 2, endElites: 2, time: 360, lavaSpeed: 0.26, hpMul: 1.5, caves: 9, hardBands: 3, enemies: { zombie: 3, skeleton: 3, mushroom: 2, spider: 2.5 }, enemyHpMul: 2.6, goal: 'core' },
  { name: '第 5 關・幽暗菌窟', depth: 105, gates: 3, endElites: 2, time: 390, lavaSpeed: 0.28, hpMul: 1.7, caves: 10, hardBands: 3, enemies: { zombie: 2.5, skeleton: 2.5, mushroom: 3.5, spider: 3 }, enemyHpMul: 3.6, goal: 'core' },
  { name: '第 6 關・蛛后巢穴', depth: 115, gates: 3, boss: 'spider_queen', time: 420, lavaSpeed: 0.29, hpMul: 1.95, caves: 11, hardBands: 3, enemies: { zombie: 2, skeleton: 2.5, mushroom: 2.5, spider: 4 }, enemyHpMul: 5.0, goal: 'boss' },
  { name: '第 7 關・雷鳴晶洞', depth: 125, gates: 3, endElites: 2, time: 440, lavaSpeed: 0.30, hpMul: 2.2, caves: 12, hardBands: 4, enemies: { zombie: 3, skeleton: 3.5, mushroom: 2.5, spider: 3 }, enemyHpMul: 6.9, goal: 'core' },
  { name: '第 8 關・焦熱岩脈', depth: 135, gates: 3, endElites: 3, time: 460, lavaSpeed: 0.32, hpMul: 2.5, caves: 13, hardBands: 4, enemies: { zombie: 3, skeleton: 3.5, mushroom: 3, spider: 3 }, enemyHpMul: 9.5, goal: 'core' },
  { name: '第 9 關・深淵前哨', depth: 145, gates: 4, endElites: 3, time: 480, lavaSpeed: 0.34, hpMul: 2.85, caves: 14, hardBands: 4, enemies: { zombie: 3.5, skeleton: 3.5, mushroom: 3, spider: 3.5 }, enemyHpMul: 13.1, goal: 'core' },
  { name: '第 10 關・炎魔王座', depth: 160, gates: 4, boss: 'balrog', time: 540, lavaSpeed: 0.35, hpMul: 3.2, caves: 15, hardBands: 5, enemies: { zombie: 3.5, skeleton: 4, mushroom: 3, spider: 3.5 }, enemyHpMul: 18.0, goal: 'boss' },
];

export const ENDLESS_LEVEL: LevelDef = {
  name: '♾️ 無盡深淵',
  depth: 99999,
  gates: 0,
  time: 0,
  lavaSpeed: BAL.endlessLavaBaseSpeed,
  hpMul: 1.0,
  caves: 0,
  hardBands: 0,
  enemies: { zombie: 3, skeleton: 2.5, mushroom: 2.5, spider: 2.5 },
  enemyHpMul: 1.0,
  goal: 'endless',
};

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
  overdriveSecBonus: number; // negative shortens cooldown while keeping full refill
  overdriveDmgBonus: number; // extra damage multiplier during Overdrive
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
    overdriveSecBonus: 0,
    overdriveDmgBonus: 0,
  };
}

export interface PerkDef { id: string; name: string; desc: string; icon: string; apply: (m: Mods) => void; max?: number; campaignOnly?: boolean }
export const PERKS: PerkDef[] = [
  {
    id: 'stamina_spd', name: '行雲流水', desc: '散熱期縮短 1 秒，且狂暴期間武器傷害額外 +25%', icon: '🍃', max: 2,
    apply: (m) => { m.overdriveSecBonus -= 1; m.overdriveDmgBonus += 0.25; },
  },
  {
    id: 'stamina_max', name: '氣海擴充', desc: '每輪基礎行動力上限 +1 格', icon: '🔋', max: 2,
    apply: (m) => { m.staminaMaxBonus += 1; },
  },
  { id: 'dmg', name: '鍛造大師', desc: '所有武器傷害 +22%', icon: '⚔️', apply: (m) => { m.dmgMul += 0.22; } },
  { id: 'hp', name: '強韌鋼材', desc: '武器最大 HP +25%', icon: '🛡️', apply: (m) => { m.hpMul += 0.25; } },
  { id: 'heal', name: '生命之心', desc: '愛心回血量 +50%', icon: '💗', apply: (m) => { m.healMul += 0.5; } },
  { id: 'lava', name: '冷卻岩漿', desc: '岩漿下降速度 -18%', icon: '🧊', max: 3, apply: (m) => { m.lavaSpeedMul *= 0.82; } },
  { id: 'time', name: '沙漏', desc: '關卡時限 +40 秒', icon: '⏳', campaignOnly: true, apply: (m) => { m.timeBonus += 40; } },
  {
    id: 't2', name: '精煉配方', desc: '高階與傳說武器門檻各 -1（最低 5／7）', icon: '📜', max: 2,
    apply: (m) => { m.t2Threshold = Math.max(5, m.t2Threshold - 1); m.t3Threshold = Math.max(7, m.t3Threshold - 1); },
  },
  { id: 'invuln', name: '降臨祝福', desc: '武器生成時附帶 2 秒無敵', icon: '✨', max: 1, apply: (m) => { m.spawnInvuln += 2; } },
  { id: 'chain', name: '導電體質', desc: '雷屬性連鎖目標 +2', icon: '⚡', apply: (m) => { m.thunderChainBonus += 2; } },
  { id: 'spread', name: '野火燎原', desc: '火焰蔓延機率 ×2', icon: '🔥', max: 2, apply: (m) => { m.fireSpreadMul *= 2; } },
  { id: 'ult', name: '大招專精', desc: '大招冷卻／集氣需求 -20%', icon: '🌀', max: 3, apply: (m) => { m.ultMul *= 0.8; } },
  { id: 'hunter', name: '怪物剋星', desc: '對怪物與 Boss 傷害 +35%', icon: '🎯', apply: (m) => { m.enemyDmgMul += 0.35; } },
  { id: 'aoe', name: '爆破專家', desc: '擴散／爆炸類範圍 +1 格', icon: '💥', max: 2, apply: (m) => { m.aoeBonus += 1; } },
  {
    id: 'reso', name: '元素共鳴', desc: '累計條需求 -5（最低 20），且初始全元素共鳴 +1 級', icon: '🔮', max: 2,
    apply: (m) => { m.cumThreshold = Math.max(20, m.cumThreshold - 5); m.resonanceStartLv = Math.min(BAL.resonanceMaxLv, m.resonanceStartLv + 1); },
  },
  { id: 'wear', name: '金剛刃', desc: '挖礦耐久消耗 -35%', icon: '💠', max: 2, apply: (m) => { m.wearMul *= 0.65; } },
];
