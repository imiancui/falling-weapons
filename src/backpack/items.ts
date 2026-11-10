import { ELEMENT_INFO, weaponElementMeta, type Element, type WeaponElement } from '../data/config';
import { ELEMENT_WEAPONS, WEAPONS, WEAPON_LIST, type WeaponCategory, type WeaponId } from '../data/weapons';
import { spriteUrl } from '../gfx/pixel';

export type RelicId =
  | 'whetstone'
  | 'gear'
  | 'plate'
  | 'amp_crystal'
  | 'mirror'
  | 'core_earth'
  | 'core_thunder'
  | 'core_poison'
  | 'core_fire'
  | 'core_ice'
  | 'holy_seal'
  | 'mine_bomb'
  | 'heal_potion';

export type BagItemId = WeaponId | RelicId;
export type BagItemKind = 'weapon' | 'relic' | 'core' | 'seal' | 'consumable';
export type AdjacencyPattern = 'none' | 'ortho4' | 'ring8' | 'horiz2';
export type ShapeCell = [number, number]; // [dr, dc]

export interface BagItemDef {
  id: BagItemId;
  kind: BagItemKind;
  name: string;
  subtitle: string;
  cssColor: string;
  element?: WeaponElement;
  weaponId?: WeaponId;
  category?: WeaponCategory;
  baseShape: ShapeCell[];
  shapeName: string;
  cost: number;
  forgeCd: number; // seconds to auto-forge (0 for relics/consumables)
  adjPattern: AdjacencyPattern;
  desc: string;
  recipeHint: string;
}

// ---------------- Polyomino shapes ----------------
export const SHAPE_1X1: ShapeCell[] = [[0, 0]];
export const SHAPE_1X2: ShapeCell[] = [[0, 0], [1, 0]];
export const SHAPE_1X3: ShapeCell[] = [[0, 0], [1, 0], [2, 0]];
export const SHAPE_L3: ShapeCell[] = [[0, 0], [1, 0], [1, 1]];
export const SHAPE_2X2: ShapeCell[] = [[0, 0], [0, 1], [1, 0], [1, 1]];

export function rotateShape(base: ShapeCell[], rot: number): ShapeCell[] {
  const k = ((rot % 4) + 4) % 4;
  let cells = base.map(([r, c]): ShapeCell => [r, c]);
  for (let i = 0; i < k; i++) {
    cells = cells.map(([r, c]): ShapeCell => [c, -r]);
  }
  const minR = Math.min(...cells.map(([r]) => r));
  const minC = Math.min(...cells.map(([, c]) => c));
  return cells.map(([r, c]): ShapeCell => [r - minR, c - minC]);
}

export function shapeBounds(cells: ShapeCell[]): { rows: number; cols: number } {
  let maxR = 0, maxC = 0;
  for (const [r, c] of cells) {
    if (r > maxR) maxR = r;
    if (c > maxC) maxC = c;
  }
  return { rows: maxR + 1, cols: maxC + 1 };
}

export function getAdjacencyOffsets(pattern: AdjacencyPattern): ShapeCell[] {
  switch (pattern) {
    case 'ortho4':
      return [[-1, 0], [1, 0], [0, -1], [0, 1]];
    case 'ring8':
      return [
        [-1, -1], [-1, 0], [-1, 1],
        [0, -1],           [0, 1],
        [1, -1],  [1, 0],  [1, 1],
      ];
    case 'horiz2':
      return [[0, -1], [0, 1]];
    default:
      return [];
  }
}

function weaponShapeSpec(id: WeaponId, cat: WeaponCategory): { shape: ShapeCell[]; shapeName: string; cost: number; cd: number } {
  if (cat === 'low') {
    return { shape: SHAPE_1X1, shapeName: '1×1 輕巧', cost: 24, cd: 3.5 };
  }
  if (cat === 't1') {
    return { shape: SHAPE_1X2, shapeName: '1×2 長柄', cost: 48, cd: 4.6 };
  }
  if (cat === 'cum') {
    if (id === 'drill') return { shape: SHAPE_1X3, shapeName: '1×3 鑽頭', cost: 82, cd: 5.2 };
    if (id === 'frostclaw') return { shape: SHAPE_L3, shapeName: 'L形 3格', cost: 82, cd: 5.0 };
    return { shape: SHAPE_1X2, shapeName: '1×2 特武', cost: 78, cd: 4.8 };
  }
  if (cat === 't2') {
    if (id === 'halberd' || id === 'scythe') return { shape: SHAPE_1X3, shapeName: '1×3 長兵', cost: 95, cd: 5.8 };
    if (id === 'boomerang') return { shape: SHAPE_L3, shapeName: 'L形 3格', cost: 95, cd: 5.4 };
    return { shape: SHAPE_2X2, shapeName: '2×2 重武', cost: 98, cd: 6.0 };
  }
  if (cat === 'leg') {
    if (id === 'hydra') return { shape: SHAPE_L3, shapeName: 'L形 3格', cost: 155, cd: 6.6 };
    return { shape: SHAPE_2X2, shapeName: '2×2 傳說', cost: 160, cd: 6.8 };
  }
  // holy (excalibur)
  return { shape: SHAPE_2X2, shapeName: '2×2 神聖', cost: 188, cd: 7.2 };
}

function weaponRecipeHint(id: WeaponId, cat: WeaponCategory, elName: string): string {
  if (cat === 'low') {
    const nextW = WEAPONS[ELEMENT_WEAPONS[WEAPONS[id].element as Element].t1].name;
    const cumW = WEAPONS[ELEMENT_WEAPONS[WEAPONS[id].element as Element].cum].name;
    return `2 把二合一進化【${nextW}】｜配【${elName}魔晶】進化【${cumW}】`;
  }
  if (cat === 't1') {
    const nextW = WEAPONS[ELEMENT_WEAPONS[WEAPONS[id].element as Element].t2].name;
    const cumW = WEAPONS[ELEMENT_WEAPONS[WEAPONS[id].element as Element].cum].name;
    return `2 把二合一進化【${nextW}】｜配【${elName}魔晶】進化【${cumW}】`;
  }
  if (cat === 't2' || cat === 'cum') {
    const legId = ELEMENT_WEAPONS[WEAPONS[id].element as Element].leg;
    const legName = legId ? WEAPONS[legId].name : '★2 冰晶迴旋鏢';
    return `同名二合一升星（最高 ★3）｜配【${elName}魔晶】進化【${legName}】｜配【王者聖印】鍛造【✨聖劍】`;
  }
  return '同名二合一升星（★2 傷害×1.65／★3 傷害×2.60）並提升共鳴等級';
}

export const BAG_ITEMS: Record<BagItemId, BagItemDef> = {} as Record<BagItemId, BagItemDef>;

// Register all 25 weapons as Backpack Items
for (const w of WEAPON_LIST) {
  const meta = weaponElementMeta(w.element);
  const spec = weaponShapeSpec(w.id, w.category);
  BAG_ITEMS[w.id] = {
    id: w.id,
    kind: 'weapon',
    name: w.name,
    subtitle: `${meta.icon} ${meta.name}屬・${spec.shapeName}・${w.archetypeName}`,
    cssColor: meta.css,
    element: w.element,
    weaponId: w.id,
    category: w.category,
    baseShape: spec.shape,
    shapeName: spec.shapeName,
    cost: spec.cost,
    forgeCd: spec.cd,
    adjPattern: 'none',
    desc: `【彈力 ${w.bounceRating}｜投速 ${w.throwSpeed}｜${w.weightLabel}】傷害 ${w.dmg}｜HP ${w.baseHp}。${w.passive}${w.ult ? `｜大招【${w.ult.name}】` : ''}`,
    recipeHint: weaponRecipeHint(w.id, w.category, meta.name),
  };
}

// Register Relics, Elemental Cores, Holy Seal, and Consumables (Hell Hardcore prices)
const EXTRA_ITEMS: BagItemDef[] = [
  {
    id: 'whetstone',
    kind: 'relic',
    name: '矮人磨刀石',
    subtitle: '🪨 鄰接遺物・上下左右 4 格',
    cssColor: '#ffd480',
    baseShape: SHAPE_1X1,
    shapeName: '1×1 遺物',
    cost: 38,
    forgeCd: 0,
    adjPattern: 'ortho4',
    desc: '使上下左右相鄰的所有武器，投射出的【傷害 +28%】（兩顆同星磨刀石可二合一升星，效果提升至 +46%／+68%！）',
    recipeHint: '擺在武器上下左右即可生效｜2 顆同星磨刀石可二合一升星',
  },
  {
    id: 'gear',
    kind: 'relic',
    name: '精密發條齒輪',
    subtitle: '⚙️ 鄰接遺物・周圍九宮格 8 格',
    cssColor: '#ffae42',
    baseShape: SHAPE_1X1,
    shapeName: '1×1 遺物',
    cost: 44,
    forgeCd: 0,
    adjPattern: 'ring8',
    desc: '使周圍 8 格相鄰的所有武器，【自動鍛造投射冷卻 -22%】（升星可達 -34%／-45%，產出速度暴增！）',
    recipeHint: '擺在多把武器中央可同時加速周圍 8 格｜2 顆同星齒輪可二合一升星',
  },
  {
    id: 'plate',
    kind: 'relic',
    name: '秘銀護甲片',
    subtitle: '🛡️ 鄰接遺物・上下左右 4 格',
    cssColor: '#7ec8ff',
    baseShape: SHAPE_1X1,
    shapeName: '1×1 遺物',
    cost: 35,
    forgeCd: 0,
    adjPattern: 'ortho4',
    desc: '使上下左右相鄰的所有武器，投射出的【最大 HP 耐久 +35%】（對聖劍壽命同樣有效！）',
    recipeHint: '擺在主力武器旁大幅延長礦坑存活時間｜2 片同星可二合一升星',
  },
  {
    id: 'amp_crystal',
    kind: 'relic',
    name: '共鳴增幅水晶',
    subtitle: '🔮 鄰接遺物・上下左右 4 格',
    cssColor: '#d488ff',
    baseShape: SHAPE_1X1,
    shapeName: '1×1 遺物',
    cost: 44,
    forgeCd: 0,
    adjPattern: 'ortho4',
    desc: '使上下左右相鄰的武器【大招集氣／冷卻速度 +35%】，且每次投射額外增加該元素 +3 點共鳴經驗！',
    recipeHint: '加速武器大招並快速衝滿 Lv5 共鳴（解鎖同名多把上限）',
  },
  {
    id: 'mirror',
    kind: 'relic',
    name: '雙子鏡像稜鏡',
    subtitle: '👯 稀有遺物・左右兩側 2 格',
    cssColor: '#7ef8ff',
    baseShape: SHAPE_1X1,
    shapeName: '1×1 稀有遺物',
    cost: 72,
    forgeCd: 0,
    adjPattern: 'horiz2',
    desc: '使【左右兩側】相鄰的武器每次鍛造完成時，有 45% 機率（★2 70%／★3 100%）直接【雙連投射 2 把】入坑！',
    recipeHint: '擺在兩把主力傳說／高階武器中間，實現雙倍彈雨！',
  },
  ...(['earth', 'thunder', 'poison', 'fire', 'ice'] as Element[]).map((el): BagItemDef => {
    const info = ELEMENT_INFO[el];
    const cumW = WEAPONS[ELEMENT_WEAPONS[el].cum].name;
    const legId = ELEMENT_WEAPONS[el].leg;
    const legW = legId ? WEAPONS[legId].name : '★2 冰晶迴旋鏢';
    return {
      id: `core_${el}` as RelicId,
      kind: 'core',
      name: `${info.name}之魔晶`,
      subtitle: `${info.icon} 元素核心・可鄰接強化或合成進化`,
      cssColor: info.css,
      element: el,
      baseShape: SHAPE_1X1,
      shapeName: '1×1 核心',
      cost: 48,
      forgeCd: 0,
      adjPattern: 'ortho4',
      desc: `【擺放時】上下左右相鄰武器傷害 +18% 且每次投射額外 +4 點${info.name}共鳴；【拖到武器上】直接跨階合成進化！`,
      recipeHint: `拖到【低／初階武器】➔ 合成【${cumW}】｜拖到【高階／特武】➔ 合成【${legW}】`,
    };
  }),
  {
    id: 'holy_seal',
    kind: 'seal',
    name: '王者聖印',
    subtitle: '👑 神聖遺物・聖劍鍛造核心',
    cssColor: '#ffe680',
    element: 'holy',
    baseShape: SHAPE_1X1,
    shapeName: '1×1 聖印',
    cost: 98,
    forgeCd: 0,
    adjPattern: 'ortho4',
    desc: '【擺放時】上下左右相鄰武器傷害 +32%；【拖到任意初階／高階／傳說武器上】直接鍛造出神聖傳說【✨ 聖劍】！',
    recipeHint: '拖到任意初階以上武器 ➔ 鍛造【✨ 聖劍（Excalibur）】！',
  },
  {
    id: 'mine_bomb',
    kind: 'consumable',
    name: '矮人深層炸彈',
    subtitle: '🧨 戰術道具・拖至右側礦坑引爆',
    cssColor: '#ff8844',
    baseShape: SHAPE_1X1,
    shapeName: '1×1 消耗品',
    cost: 28,
    forgeCd: 0,
    adjPattern: 'none',
    desc: '拖到右邊礦坑任意直列（或點擊立即投擲），在最深處引爆 3.2 格巨型破岩炸彈，炸穿硬岩並直接擊碎岩石巨像護殼！',
    recipeHint: '直接拖到右邊礦坑或點「🚀 空投／使用」立即引爆',
  },
  {
    id: 'heal_potion',
    kind: 'consumable',
    name: '女神甘露藥水',
    subtitle: '🧪 戰術道具・全場回血＋無敵盾',
    cssColor: '#ff88c8',
    baseShape: SHAPE_1X1,
    shapeName: '1×1 消耗品',
    cost: 30,
    forgeCd: 0,
    adjPattern: 'none',
    desc: '拖到右邊礦坑（或點擊立即飲用），場上所有存活武器立即【回復 45% 最大 HP】並獲得【3 秒無敵護盾】！',
    recipeHint: '首領放招或聖劍快消散時，拖去右邊礦坑立即全員滿血續命！',
  },
];

for (const item of EXTRA_ITEMS) {
  BAG_ITEMS[item.id] = item;
}

export function itemSpriteUrl(id: BagItemId): string {
  const def = BAG_ITEMS[id];
  if (def.kind === 'weapon' && def.weaponId) {
    return spriteUrl('weapon', def.weaponId);
  }
  return spriteUrl('relic', id);
}

// =====================================================================================
// Dual-Track Synthesis Engine (靠裝勇者 Same-Tier Merge + Backpack Battles Cross-Recipe)
// =====================================================================================

export interface SynthesisResult {
  resultId: BagItemId;
  resultStar: number;
  resonanceElement?: Element;
  resonanceGain: number;
  title: string;
}

export function checkSynthesis(
  srcId: BagItemId,
  srcStar: number,
  dstId: BagItemId,
  dstStar: number,
): SynthesisResult | null {
  const src = BAG_ITEMS[srcId];
  const dst = BAG_ITEMS[dstId];
  if (!src || !dst) return null;

  // 1. Track A: Identical item merge (靠裝勇者 style)
  if (srcId === dstId && srcStar === dstStar) {
    if (src.kind === 'weapon' && src.weaponId) {
      const wDef = WEAPONS[src.weaponId];
      // Low + Low (★1) -> evolves into that element's T1 weapon (★1)!
      if (wDef.category === 'low' && srcStar === 1 && wDef.element !== 'holy') {
        const nextId = ELEMENT_WEAPONS[wDef.element].t1;
        return {
          resultId: nextId,
          resultStar: 1,
          resonanceElement: wDef.element,
          resonanceGain: 8,
          title: `二合一進化：【${WEAPONS[nextId].name}】`,
        };
      }
      // T1 + T1 (★1) -> evolves into that element's T2 weapon (★1)!
      if (wDef.category === 't1' && srcStar === 1 && wDef.element !== 'holy') {
        const nextId = ELEMENT_WEAPONS[wDef.element].t2;
        return {
          resultId: nextId,
          resultStar: 1,
          resonanceElement: wDef.element,
          resonanceGain: 15,
          title: `二合一升階：【${WEAPONS[nextId].name}】`,
        };
      }
      // Any weapon with star < 3 -> Star Up (★1 -> ★2 -> ★3)!
      if (srcStar < 3) {
        const nextStar = srcStar + 1;
        const resoEl = wDef.element === 'holy' ? undefined : wDef.element;
        return {
          resultId: srcId,
          resultStar: nextStar,
          resonanceElement: resoEl,
          resonanceGain: 30,
          title: `升星突破：【${src.name} ★${nextStar}】`,
        };
      }
    } else if ((src.kind === 'relic' || src.kind === 'core') && srcStar < 3) {
      const nextStar = srcStar + 1;
      return {
        resultId: srcId,
        resultStar: nextStar,
        resonanceElement: src.element && src.element !== 'holy' ? src.element : undefined,
        resonanceGain: src.kind === 'core' ? 20 : 0,
        title: `遺物升星：【${src.name} ★${nextStar}】`,
      };
    }
  }

  // 2. Track B: Cross-Item Recipe Fusion (Backpack Battles style: Weapon + Core / Holy Seal)
  const weaponSide = src.kind === 'weapon' ? { def: src, star: srcStar } : dst.kind === 'weapon' ? { def: dst, star: dstStar } : null;
  const coreSide = src.kind === 'core' ? { def: src, star: srcStar } : dst.kind === 'core' ? { def: dst, star: dstStar } : null;
  const sealSide = src.kind === 'seal' ? { def: src, star: srcStar } : dst.kind === 'seal' ? { def: dst, star: dstStar } : null;

  if (weaponSide && coreSide && coreSide.def.element && coreSide.def.element !== 'holy') {
    const targetEl = coreSide.def.element;
    const cat = weaponSide.def.category!;
    const outStar = Math.min(3, Math.max(weaponSide.star, coreSide.star));
    if (cat === 'low' || cat === 't1') {
      const cumId = ELEMENT_WEAPONS[targetEl].cum;
      return {
        resultId: cumId,
        resultStar: outStar,
        resonanceElement: targetEl,
        resonanceGain: 30,
        title: `魔晶鍛造：【${WEAPONS[cumId].name}${outStar > 1 ? ` ★${outStar}` : ''}】`,
      };
    }
    if (cat === 't2' || cat === 'cum') {
      const legId = ELEMENT_WEAPONS[targetEl].leg;
      if (legId) {
        return {
          resultId: legId,
          resultStar: outStar,
          resonanceElement: targetEl,
          resonanceGain: 30,
          title: `傳說覺醒：【${WEAPONS[legId].name}${outStar > 1 ? ` ★${outStar}` : ''}】`,
        };
      }
      // Ice has no separate leg id -> evolves into ★(outStar+1) Boomerang!
      const nextStar = Math.min(3, outStar + 1);
      return {
        resultId: 'boomerang',
        resultStar: nextStar,
        resonanceElement: 'ice',
        resonanceGain: 30,
        title: `極寒覺醒：【冰晶迴旋鏢 ★${nextStar}】`,
      };
    }
    if ((cat === 'leg' || cat === 'holy') && weaponSide.star < 3) {
      const nextStar = weaponSide.star + 1;
      return {
        resultId: weaponSide.def.id,
        resultStar: nextStar,
        resonanceElement: targetEl,
        resonanceGain: 30,
        title: `魔晶淬煉：【${weaponSide.def.name} ★${nextStar}】`,
      };
    }
  }

  if (weaponSide && sealSide) {
    const cat = weaponSide.def.category!;
    if (weaponSide.def.id === 'excalibur') {
      if (weaponSide.star < 3) {
        return {
          resultId: 'excalibur',
          resultStar: weaponSide.star + 1,
          resonanceGain: 30,
          title: `聖印覺醒：【✨ 聖劍 ★${weaponSide.star + 1}】`,
        };
      }
    } else if (cat === 't1' || cat === 't2' || cat === 'cum' || cat === 'leg') {
      const outStar = cat === 'leg' ? Math.min(3, Math.max(2, weaponSide.star)) : weaponSide.star;
      return {
        resultId: 'excalibur',
        resultStar: outStar,
        resonanceGain: 30,
        title: `聖劍降臨：【✨ 聖劍${outStar > 1 ? ` ★${outStar}` : ''}】`,
      };
    }
  }

  return null;
}

export interface WikiRecipeRow {
  inputs: string;
  output: string;
  effect: string;
}

export const SYNTHESIS_RECIPES_LIST: WikiRecipeRow[] = [
  { inputs: '同款【低階武器】＋【低階武器】', output: '該元素【初階武器 ★1】', effect: '例：碎石鎬＋碎石鎬＝擴散斧、火把＋火把＝烈焰劍' },
  { inputs: '同款【初階武器】＋【初階武器】', output: '該元素【高階武器 ★1】', effect: '例：擴散斧＋擴散斧＝震地巨錘、雷電刀＋雷電刀＝雷神戟' },
  { inputs: '任意【低階／初階武器】＋【五元素魔晶】', output: '魔晶元素的【專屬特武】', effect: '鍛造出：鑽地螺旋鑽／磁暴核心／刺客拳刃／火焰刀／霜狼之爪，且該元素共鳴 +1 級' },
  { inputs: '任意【高階／專屬特武】＋【五元素魔晶】', output: '魔晶元素的【傳說武器】', effect: '鍛造出：泰坦巨錘／天罰雷槌／九頭蛇之牙／炎龍大劍／高星冰晶迴旋鏢，且共鳴 +1 級' },
  { inputs: '任意【初階／高階／特武／傳說】＋【👑 王者聖印】', output: '神聖傳說【✨ 聖劍】', effect: '全寬十字聖光斬超高傷武器（傳說武器合成直接升 ★2 聖劍！）' },
  { inputs: '同款同星【高階／特武／傳說／聖劍／遺物】二合一', output: '升星突破【★1 ➔ ★2 ➔ ★3】', effect: '★2 傷害與耐久 ×1.65、冷卻 -12%｜★3 傷害與耐久 ×2.60、冷卻 -24%' },
];
