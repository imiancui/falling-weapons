import { BAL, type Element, type WeaponElement } from './config';

export type WeaponId =
  // 1..5 低階
  | 'pick' | 'baton' | 'needle' | 'torch' | 'icicle'
  // 6..10 初階
  | 'axe' | 'blade' | 'dagger' | 'sword' | 'spear'
  // 11..15 高階
  | 'hammer' | 'halberd' | 'scythe' | 'meteor' | 'boomerang'
  // 16..20 專屬特武（魔晶／共鳴）
  | 'drill' | 'core_orb' | 'katar' | 'flameblade' | 'frostclaw'
  // 21..24 元素傳說 + 25 聖劍
  | 'titan' | 'mjolnir' | 'hydra' | 'dragon' | 'excalibur';

export type WeaponCategory = 'low' | 't1' | 't2' | 'cum' | 'leg' | 'holy';
export type PhysicsArchetype = 'pinball' | 'boomerang' | 'balanced' | 'heavy' | 'pierce';

export const CATEGORY_LABEL: Record<WeaponCategory, string> = {
  low: '低階・1×1',
  t1: '初階・1×2',
  t2: '高階・長/重',
  cum: '特武・魔晶',
  leg: '傳說・2×2',
  holy: '神聖・2×2',
};

export interface WeaponDef {
  id: WeaponId;
  num: number; // 1..25
  name: string;
  element: WeaponElement;
  category: WeaponCategory;
  baseHp: number;
  dmg: number;
  scale: number; // base sprite/body scale
  lifespanDecay?: boolean; // true for Excalibur (drains 5% HP/sec, ignores block wear)
  archetype: PhysicsArchetype;
  archetypeName: string;
  bounceRating: string; // 'A+' | 'A' | 'B+' | 'C+' | 'C'
  restitution: number;
  throwSpeed: number; // initial downward throw speed in physics units
  gravityScale: number; // multiplier on gravity
  weightLabel: string; // '極輕' | '浮空' | '標準' | '集中' | '極重'
  unlockText: string;
  passive: string;
  ult?: { name: string; type: 'cd' | 'charge'; value: number; unit: string; desc: string };
}

const ARCHETYPE_PRESET: Record<PhysicsArchetype, {
  archetypeName: string;
  bounceRating: string;
  restitution: number;
  throwSpeed: number;
  gravityScale: number;
  weightLabel: string;
}> = {
  pinball: {
    archetypeName: '⚡ 超彈疾速',
    bounceRating: 'A+',
    restitution: 0.93,
    throwSpeed: 17.5,
    gravityScale: 0.45,
    weightLabel: '極輕',
  },
  boomerang: {
    archetypeName: '🪃 迴旋返航',
    bounceRating: 'A',
    restitution: 0.84,
    throwSpeed: 15.0,
    gravityScale: 0.52,
    weightLabel: '浮空',
  },
  balanced: {
    archetypeName: '⚖️ 均衡戰技',
    bounceRating: 'B+',
    restitution: 0.76,
    throwSpeed: 14.0,
    gravityScale: 0.82,
    weightLabel: '標準',
  },
  heavy: {
    archetypeName: '🔨 重磅破城',
    bounceRating: 'C',
    restitution: 0.54,
    throwSpeed: 12.2,
    gravityScale: 1.38,
    weightLabel: '極重',
  },
  pierce: {
    archetypeName: '🔩 貫穿噴射',
    bounceRating: 'C+',
    restitution: 0.65,
    throwSpeed: 16.2,
    gravityScale: 0.90,
    weightLabel: '集中',
  },
};

type RawWeaponDef = Omit<WeaponDef, 'archetypeName' | 'bounceRating' | 'restitution' | 'throwSpeed' | 'gravityScale' | 'weightLabel'> & {
  restitution?: number;
  throwSpeed?: number;
  gravityScale?: number;
};

const RAW_WEAPONS: Record<WeaponId, RawWeaponDef> = {
  // ---------------- A. 低階武器 ----------------
  pick: {
    id: 'pick', num: 1, name: '碎石鎬', element: 'earth', category: 'low',
    baseHp: BAL.t0Hp, dmg: 5, scale: 0.88, archetype: 'pierce',
    unlockText: '商店購買／巴林初始配備',
    passive: '貫穿型礦鎬，撞擊方塊時額外造成 +30% 碎石傷害；每鑽擊 3 次自動逆向噴射彈回英雄戰線！',
  },
  baton: {
    id: 'baton', num: 2, name: '電擊棒', element: 'thunder', category: 'low',
    baseHp: BAL.t0Hp, dmg: 5, scale: 0.88, archetype: 'pinball',
    unlockText: '商店購買／凱爾初始配備',
    passive: '超彈疾速輕武，撞擊立即高速回彈並對附近 1 個目標放出小電弧（60% 傷害）',
  },
  needle: {
    id: 'needle', num: 3, name: '毒針', element: 'poison', category: 'low',
    baseHp: BAL.t0Hp, dmg: 4, scale: 0.85, archetype: 'pinball', throwSpeed: 18.5,
    unlockText: '商店購買／薇拉初始配備',
    passive: '極輕超高速飛針，命中附加 1 層中毒（持續 2.5 秒）並高速彈回英雄身邊',
  },
  torch: {
    id: 'torch', num: 4, name: '火把', element: 'fire', category: 'low',
    baseHp: BAL.t0Hp, dmg: 5, scale: 0.88, archetype: 'pierce',
    unlockText: '商店購買／伊格初始配備',
    passive: '撞擊時有 30% 機率點燃目標（持續 2 秒），滿 3 次撞擊噴射返航',
  },
  icicle: {
    id: 'icicle', num: 5, name: '冰錐', element: 'ice', category: 'low',
    baseHp: BAL.t0Hp, dmg: 5, scale: 0.88, archetype: 'pierce',
    unlockText: '商店購買／艾莉絲初始配備',
    passive: '高速直貫命中怪物時冰凍 0.8 秒，並讓命中的方塊短暫霜脆化',
  },

  // ---------------- B. 初階武器 ----------------
  axe: {
    id: 'axe', num: 6, name: '擴散斧', element: 'earth', category: 't1',
    baseHp: BAL.t1Hp, dmg: 10, scale: 1.0, archetype: 'balanced',
    unlockText: '2 把碎石鎬二合一／商店購買',
    passive: '撞擊破壞落點中心 3×3 範圍並穩定反彈（高倍率擴至 5×5）',
    ult: { name: '大地爆裂', type: 'charge', value: 15, unit: '次撞擊', desc: '粉碎下方 7×7 大範圍區域' },
  },
  blade: {
    id: 'blade', num: 7, name: '雷電刀', element: 'thunder', category: 't1',
    baseHp: BAL.t1Hp, dmg: 9, scale: 1.0, archetype: 'pinball',
    unlockText: '2 把電擊棒二合一／商店購買',
    passive: '超彈高速飛刀，每次撞擊隨機電擊附近 2~4 個單位並迅速彈回',
    ult: { name: '雷暴', type: 'cd', value: 8, unit: '秒', desc: '降下雷群同時電擊 10 個目標' },
  },
  dagger: {
    id: 'dagger', num: 8, name: '毒匕首', element: 'poison', category: 't1',
    baseHp: BAL.t1Hp, dmg: 8, scale: 0.96, archetype: 'balanced',
    unlockText: '2 把毒針二合一／商店購買',
    passive: '命中疊加中毒持續扣血（最高 5 層）並靈活反彈',
    ult: { name: '毒霧爆發', type: 'charge', value: 12, unit: '次撞擊', desc: '使周圍 5×5 所有目標疊加 3 層劇毒' },
  },
  sword: {
    id: 'sword', num: 9, name: '烈焰劍', element: 'fire', category: 't1',
    baseHp: BAL.t1Hp, dmg: 10, scale: 1.0, archetype: 'balanced',
    unlockText: '2 把火把二合一／商店購買',
    passive: '點燃撞擊的目標持續燃燒，並有機率蔓延相鄰格',
    ult: { name: '火龍捲', type: 'cd', value: 10, unit: '秒', desc: '向下捲出 10 格火焰貫穿並引燃' },
  },
  spear: {
    id: 'spear', num: 10, name: '寒冰長槍', element: 'ice', category: 't1',
    baseHp: BAL.t1Hp, dmg: 10, scale: 1.0, archetype: 'pierce',
    unlockText: '2 把冰錐二合一／商店購買',
    passive: '高速向下刺穿多格並冰凍怪物 2 秒，每刺擊 3 次逆向噴射彈回戰線！',
    ult: { name: '冰柱', type: 'cd', value: 10, unit: '秒', desc: '向下貫穿 15 格並冰凍沿途怪物' },
  },

  // ---------------- C. 高階武器 ----------------
  hammer: {
    id: 'hammer', num: 11, name: '震地巨錘', element: 'earth', category: 't2',
    baseHp: BAL.t2Hp, dmg: 16, scale: 1.14, archetype: 'heavy',
    unlockText: '2 把擴散斧二合一／商店購買',
    passive: '重磅破城巨錘（英雄接住重投時傷害額外 ×1.60！），重擊產生橫向震波橫掃整排並震暈怪物 1.5 秒',
    ult: { name: '三重震波', type: 'cd', value: 12, unit: '秒', desc: '連續釋放 3 道全寬震波' },
  },
  halberd: {
    id: 'halberd', num: 12, name: '雷神戟', element: 'thunder', category: 't2',
    baseHp: BAL.t2Hp, dmg: 15, scale: 1.14, archetype: 'balanced',
    unlockText: '2 把雷電刀二合一／商店購買',
    passive: '每 3 秒召喚落雷貫穿下方 8 格整列並對怪物連鎖跳電',
    ult: { name: '雷神降臨', type: 'charge', value: 600, unit: '點傷害', desc: '5 秒內每 0.5 秒隨機降下貫穿落雷' },
  },
  scythe: {
    id: 'scythe', num: 13, name: '瘟疫鐮刀', element: 'poison', category: 't2',
    baseHp: BAL.t2Hp, dmg: 14, scale: 1.14, archetype: 'boomerang',
    unlockText: '2 把毒匕首二合一／商店購買',
    passive: '迴旋返航大鐮（每撞擊 2 次自動迴旋飛回英雄手中！）；疊加 2 層瘟疫毒，亡語炸出毒霧傳染周圍',
    ult: { name: '瘟疫領域', type: 'cd', value: 15, unit: '秒', desc: '展開 8 秒毒性光環持續感染周圍 5×5' },
  },
  meteor: {
    id: 'meteor', num: 14, name: '隕石錘', element: 'fire', category: 't2',
    baseHp: BAL.t2Hp, dmg: 16, scale: 1.14, archetype: 'heavy',
    unlockText: '2 把烈焰劍二合一／商店購買',
    passive: '重磅爆破錘（英雄接住重投傷害額外 ×1.60！），撞擊即引發 1.6 格爆破並可擊碎巨像護殼',
    ult: { name: '流星雨', type: 'charge', value: 8, unit: '次爆炸', desc: '從礦坑上方召喚 5 顆爆裂隕石轟炸' },
  },
  boomerang: {
    id: 'boomerang', num: 15, name: '冰晶迴旋鏢', element: 'ice', category: 't2',
    baseHp: BAL.t2Hp, dmg: 14, scale: 1.12, archetype: 'boomerang',
    unlockText: '2 把寒冰長槍二合一／配冰之魔晶升星',
    passive: '經典迴旋返航武器（每撞擊 2 次自動弧線飛回英雄手中！）；撞擊分裂 3 片穿透冰刃，對冰凍目標 2 倍傷害',
    ult: { name: '絕對零度', type: 'charge', value: 10, unit: '次分裂', desc: '凍結畫面內怪物並對周圍 8 排造成寒霜傷害' },
  },

  // ---------------- D. 專屬特武（魔晶合成／共鳴滿條） ----------------
  drill: {
    id: 'drill', num: 16, name: '鑽地螺旋鑽', element: 'earth', category: 'cum',
    baseHp: BAL.cumHp, dmg: 13, scale: 1.08, archetype: 'pierce', throwSpeed: 17.0,
    unlockText: '低/初階武器＋土之魔晶合成（或土共鳴滿條）',
    passive: '高速垂直鑽穿礦層（攻擊間隔減半），每鑽擊 3 次觸發強力逆向噴射彈回英雄身邊！',
    ult: { name: '深層貫穿', type: 'charge', value: 25, unit: '次鑽擊', desc: '強力鑽破正下方 8 深 × 2 寬礦道' },
  },
  core_orb: {
    id: 'core_orb', num: 17, name: '磁暴核心', element: 'thunder', category: 'cum',
    baseHp: BAL.cumHp, dmg: 12, scale: 1.06, archetype: 'pinball', restitution: 0.96,
    unlockText: '低/初階武器＋雷之魔晶合成（或雷共鳴滿條）',
    passive: '最高彈性（0.96）電漿彈珠！高速彈跳並每 0.5 秒自動電擊周圍 2 個目標',
    ult: { name: '電磁脈衝', type: 'cd', value: 10, unit: '秒', desc: '釋放磁暴環電擊周圍所有目標並震碎岩殼' },
  },
  katar: {
    id: 'katar', num: 18, name: '刺客拳刃', element: 'poison', category: 'cum',
    baseHp: BAL.cumHp, dmg: 13, scale: 1.04, archetype: 'pinball', throwSpeed: 18.2,
    unlockText: '低/初階武器＋毒之魔晶合成（或毒共鳴滿條）',
    passive: '超彈疾速爆擊刃，攻速加倍；30% 機率打出 2 倍爆擊（目標已中毒時爆擊率 60%），命中附毒',
    ult: { name: '暗影連斬', type: 'charge', value: 18, unit: '次命中', desc: '疾襲附近最多 6 個目標，全數必定觸發 2 倍爆擊' },
  },
  flameblade: {
    id: 'flameblade', num: 19, name: '火焰刀', element: 'fire', category: 'cum',
    baseHp: BAL.cumHp, dmg: 14, scale: 1.08, archetype: 'boomerang',
    unlockText: '低/初階武器＋火之魔晶合成（或火共鳴滿條）',
    passive: '迴旋返航火刃（撞擊 2 次自動飛回英雄手中！），每次撞擊揮出火弧灼傷周圍 3×3 所有目標',
    ult: { name: '烈焰風暴', type: 'cd', value: 11, unit: '秒', desc: '引爆周圍 5×5 火海造成高傷並全面點燃' },
  },
  frostclaw: {
    id: 'frostclaw', num: 20, name: '霜狼之爪', element: 'ice', category: 'cum',
    baseHp: BAL.cumHp, dmg: 13, scale: 1.06, archetype: 'boomerang',
    unlockText: '低/初階武器＋冰之魔晶合成（或冰共鳴滿條）',
    passive: '迴旋返航寒爪，撞擊冰凍 3×3 內怪物並使方塊霜脆化（承受所有傷害 +50%）',
    ult: { name: '暴風雪', type: 'cd', value: 11, unit: '秒', desc: '冰封周圍 5×5 區域並進行多段寒爪斬擊' },
  },

  // ---------------- E. 傳說武器 ＋ 聖劍 ----------------
  titan: {
    id: 'titan', num: 21, name: '泰坦巨錘', element: 'earth', category: 'leg',
    baseHp: BAL.t3Hp, dmg: 26, scale: 1.26, archetype: 'heavy',
    unlockText: '高階/特武＋土之魔晶合成',
    passive: '重磅傳說巨錘（英雄接住重投時傷害額外 ×1.60！），每次重擊引發 5×5 崩塌粉碎並震暈怪物',
    ult: { name: '大地崩裂', type: 'cd', value: 13, unit: '秒', desc: '直接崩毀下方全寬 7×6 整片礦層（可破岩殼）' },
  },
  mjolnir: {
    id: 'mjolnir', num: 22, name: '天罰雷槌', element: 'thunder', category: 'leg',
    baseHp: BAL.t3Hp, dmg: 24, scale: 1.24, archetype: 'heavy',
    unlockText: '高階/特武＋雷之魔晶合成',
    passive: '重磅雷神戰槌（英雄接住重投時傷害額外 ×1.60！），每 1.5 秒同時降下 3 道天雷貫穿整列',
    ult: { name: '雷霆萬鈞', type: 'cd', value: 14, unit: '秒', desc: '降下 20 道天罰落雷無差別轟擊全場' },
  },
  hydra: {
    id: 'hydra', num: 23, name: '九頭蛇之牙', element: 'poison', category: 'leg',
    baseHp: BAL.t3Hp, dmg: 22, scale: 1.24, archetype: 'balanced',
    unlockText: '高階/特武＋毒之魔晶合成',
    passive: '劇毒可疊至 10 層，且受劇毒侵蝕的目標承受所有傷害 +50%',
    ult: { name: '萬毒深淵', type: 'charge', value: 14, unit: '次撞擊', desc: '使 7×7 範圍瞬間染上滿層劇毒並引發毒爆' },
  },
  dragon: {
    id: 'dragon', num: 24, name: '炎龍大劍', element: 'fire', category: 'leg',
    baseHp: BAL.t3Hp, dmg: 26, scale: 1.28, archetype: 'heavy',
    unlockText: '高階/特武＋火之魔晶合成',
    passive: '重磅龍炎巨劍（英雄接住重投時傷害額外 ×1.60！），撞擊引發半徑 2.8 格大型龍炎爆破（可破岩殼）',
    ult: { name: '龍息', type: 'cd', value: 13, unit: '秒', desc: '向下噴射 3 寬 × 12 深毀滅龍炎光柱' },
  },
  excalibur: {
    id: 'excalibur', num: 25, name: '聖劍', element: 'holy', category: 'holy',
    baseHp: BAL.holyHp, dmg: 55, scale: 1.32, lifespanDecay: true, archetype: 'balanced',
    unlockText: '任意初階以上武器＋👑 王者聖印合成',
    passive: '壽命型（挖礦不損耗，每秒流失 5% HP，英雄接球重投可立即回復 18% 壽命！）；每次撞擊斬出聖光十字貫穿整排與整列',
    ult: { name: '神聖審判', type: 'cd', value: 8, unit: '秒', desc: '聖光制裁畫面內全體怪物與下方 5 排礦層，並直接擊碎岩殼' },
  },
};

export const WEAPONS: Record<WeaponId, WeaponDef> = Object.fromEntries(
  Object.entries(RAW_WEAPONS).map(([id, raw]) => {
    const preset = ARCHETYPE_PRESET[raw.archetype];
    const full: WeaponDef = {
      ...preset,
      ...raw,
      restitution: raw.restitution ?? preset.restitution,
      throwSpeed: raw.throwSpeed ?? preset.throwSpeed,
      gravityScale: raw.gravityScale ?? preset.gravityScale,
    };
    return [id, full];
  }),
) as Record<WeaponId, WeaponDef>;

export const WEAPON_LIST: WeaponDef[] = Object.values(WEAPONS).sort((a, b) => a.num - b.num);

export const ELEMENT_WEAPONS: Record<Element, { low: WeaponId; t1: WeaponId; t2: WeaponId; cum: WeaponId; leg?: WeaponId }> = {
  earth: { low: 'pick', t1: 'axe', t2: 'hammer', cum: 'drill', leg: 'titan' },
  thunder: { low: 'baton', t1: 'blade', t2: 'halberd', cum: 'core_orb', leg: 'mjolnir' },
  poison: { low: 'needle', t1: 'dagger', t2: 'scythe', cum: 'katar', leg: 'hydra' },
  fire: { low: 'torch', t1: 'sword', t2: 'meteor', cum: 'flameblade', leg: 'dragon' },
  ice: { low: 'icicle', t1: 'spear', t2: 'boomerang', cum: 'frostclaw' },
};
