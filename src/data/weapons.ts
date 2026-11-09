import type { Element } from './config';

export type WeaponId =
  | 'axe' | 'hammer'
  | 'blade' | 'halberd'
  | 'dagger' | 'scythe'
  | 'sword' | 'meteor'
  | 'spear' | 'boomerang';

export interface WeaponDef {
  id: WeaponId;
  name: string;
  element: Element;
  tier: 1 | 2;
  dmg: number;
  passive: string;
  ult: { name: string; type: 'cd' | 'charge'; value: number; unit: string };
}

export const WEAPONS: Record<WeaponId, WeaponDef> = {
  axe: { id: 'axe', name: '擴散斧', element: 'earth', tier: 1, dmg: 10, passive: '撞擊破壞 3×3 範圍', ult: { name: '大地爆裂', type: 'charge', value: 15, unit: '次撞擊' } },
  hammer: { id: 'hammer', name: '震地巨錘', element: 'earth', tier: 2, dmg: 16, passive: '橫向震波打整排並震暈', ult: { name: '三重震波', type: 'cd', value: 12, unit: '秒' } },
  blade: { id: 'blade', name: '雷電刀', element: 'thunder', tier: 1, dmg: 9, passive: '撞擊隨機電擊 2~4 個單位', ult: { name: '雷暴', type: 'cd', value: 8, unit: '秒' } },
  halberd: { id: 'halberd', name: '雷神戟', element: 'thunder', tier: 2, dmg: 15, passive: '每 3 秒落雷貫穿下方整列', ult: { name: '雷神降臨', type: 'charge', value: 600, unit: '點傷害' } },
  dagger: { id: 'dagger', name: '毒匕首', element: 'poison', tier: 1, dmg: 8, passive: '命中疊加中毒', ult: { name: '毒霧爆發', type: 'charge', value: 12, unit: '次撞擊' } },
  scythe: { id: 'scythe', name: '瘟疫鐮刀', element: 'poison', tier: 2, dmg: 14, passive: '中毒目標死亡時傳染周圍', ult: { name: '瘟疫領域', type: 'cd', value: 15, unit: '秒' } },
  sword: { id: 'sword', name: '烈焰劍', element: 'fire', tier: 1, dmg: 10, passive: '點燃方塊並蔓延', ult: { name: '火龍捲', type: 'cd', value: 10, unit: '秒' } },
  meteor: { id: 'meteor', name: '隕石錘', element: 'fire', tier: 2, dmg: 16, passive: '撞擊即爆炸', ult: { name: '流星雨', type: 'charge', value: 8, unit: '次爆炸' } },
  spear: { id: 'spear', name: '寒冰長槍', element: 'ice', tier: 1, dmg: 10, passive: '穿透下方方塊，冰凍怪物', ult: { name: '冰柱', type: 'cd', value: 10, unit: '秒' } },
  boomerang: { id: 'boomerang', name: '冰晶迴旋鏢', element: 'ice', tier: 2, dmg: 14, passive: '撞擊分裂 3 把冰刃', ult: { name: '絕對零度', type: 'charge', value: 10, unit: '次分裂' } },
};

export const WEAPON_BY_ELEMENT: Record<Element, [WeaponId, WeaponId]> = {
  earth: ['axe', 'hammer'],
  thunder: ['blade', 'halberd'],
  poison: ['dagger', 'scythe'],
  fire: ['sword', 'meteor'],
  ice: ['spear', 'boomerang'],
};
