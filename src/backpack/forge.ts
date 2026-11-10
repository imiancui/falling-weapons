import {
  BAL, ELEMENTS, ELEMENT_INFO, HEROES, weaponElementMeta,
  type Element, type HeroId, type Mods,
} from '../data/config';
import { ELEMENT_WEAPONS, WEAPONS, type WeaponId } from '../data/weapons';
import type { WeaponSpawnMeta } from '../mine/weapon';
import {
  BAG_ITEMS, checkSynthesis, getAdjacencyOffsets, itemSpriteUrl, rotateShape, shapeBounds,
  type BagItemDef, type BagItemId, type RelicId, type ShapeCell, type SynthesisResult,
} from './items';

export interface PlacedItem {
  uid: number;
  id: BagItemId;
  star: number; // 1 | 2 | 3
  rot: number; // 0 | 1 | 2 | 3
  location: 'bag' | 'storage';
  row: number;
  col: number;
  slot: number;
  forgeTimer: number;
}

export interface ShopOffer {
  id: BagItemId;
  star: number;
  cost: number;
  sold: boolean;
}

export interface WeaponBuffSummary {
  dmgMul: number;
  cdMul: number;
  hpMul: number;
  ultRateMul: number;
  twinChance: number;
  resoXpBonus: number;
  linkedUids: Set<number>;
  affectedCells: Set<string>;
}

export interface BackpackCallbacks {
  onForgeWeapon: (id: WeaponId, power: number, meta: WeaponSpawnMeta, note?: string) => void;
  onUseConsumable: (id: RelicId, col?: number) => void;
  onAddResonanceXp: (el: Element, amount: number) => void;
  onToast: (text: string, color: string, icon?: string) => void;
  getMineColumnFromClientX: (clientX: number, clientY: number) => number | null;
}

let nextItemUid = 1;

export class BackpackForge {
  readonly G = BAL.bagGridSize; // 7x7
  unlocked: boolean[][] = [];
  items: PlacedItem[] = [];
  shop: ShopOffer[] = [];
  shopLocked = false;
  gold: number = BAL.startGold;
  expandTokens = 0;
  expansionsBought = 0;
  refreshesThisStage = 0;
  heroId: HeroId = 'bardin';

  selectedUid: number | null = null;
  hoveredUid: number | null = null;
  enabled = false;
  overdriveActive = false;

  private goldAcc = 0;
  private buffCache = new Map<number, WeaponBuffSummary>();

  // DOM references
  private gridEl: HTMLElement;
  private itemsLayerEl: HTMLElement;
  private storageEl: HTMLElement;
  private shopEl: HTMLElement;
  private inspectorEl: HTMLElement;
  private goldEl: HTMLElement;
  private expandBtnEl: HTMLButtonElement;
  private refreshBtnEl: HTMLButtonElement;
  private lockBtnEl: HTMLButtonElement;
  private liveRegionEl: HTMLElement;
  private dragGhostEl: HTMLElement;
  private mineDropHintEl: HTMLElement;

  // Map uid -> DOM element inside #bag-items-layer for 60fps progress bar updates
  private bagCardEls = new Map<number, HTMLElement>();
  private storageCardEls = new Map<number, HTMLElement>();

  // Drag state
  private dragState: {
    item: PlacedItem;
    pointerId: number;
    startX: number;
    startY: number;
    offsetX: number;
    offsetY: number;
    moved: boolean;
    tempRot: number;
  } | null = null;

  constructor(
    private hostPane: HTMLElement,
    private mods: Mods,
    private cb: BackpackCallbacks,
  ) {
    this.gridEl = hostPane.querySelector('#bag-grid')!;
    this.itemsLayerEl = hostPane.querySelector('#bag-items-layer')!;
    this.storageEl = hostPane.querySelector('#bag-storage')!;
    this.shopEl = hostPane.querySelector('#bag-shop')!;
    this.inspectorEl = hostPane.querySelector('#bag-inspector')!;
    this.goldEl = hostPane.querySelector('#bag-gold')!;
    this.expandBtnEl = hostPane.querySelector('#bag-expand-btn') as HTMLButtonElement;
    this.refreshBtnEl = hostPane.querySelector('#shop-refresh-btn') as HTMLButtonElement;
    this.lockBtnEl = hostPane.querySelector('#shop-lock-btn') as HTMLButtonElement;
    this.liveRegionEl = hostPane.querySelector('#bag-live')!;

    this.dragGhostEl = document.createElement('div');
    this.dragGhostEl.className = 'bag-drag-ghost';
    this.dragGhostEl.hidden = true;
    document.body.appendChild(this.dragGhostEl);

    this.mineDropHintEl = document.createElement('div');
    this.mineDropHintEl.className = 'mine-drop-hint';
    this.mineDropHintEl.hidden = true;
    document.getElementById('mine-pane')?.appendChild(this.mineDropHintEl);

    this.bindEvents();
    this.resetForNewRun(mods);
  }

  setMods(mods: Mods) {
    this.mods = mods;
    this.recomputeAllBuffs();
    this.renderEconomy();
    this.renderInspector();
  }

  resetForNewRun(mods: Mods, heroId: HeroId = this.heroId) {
    this.mods = mods;
    this.heroId = heroId;
    this.gold = BAL.startGold;
    this.expandTokens = 0; // v0.6 Hardcore: zero free expand tokens at start
    this.expansionsBought = 0;
    this.refreshesThisStage = 0;
    this.goldAcc = 0;
    this.items = [];
    this.selectedUid = null;
    this.hoveredUid = null;
    this.shopLocked = false;

    // Unlock center 5x5 (rows 1..5, cols 1..5), lock outer ring (row/col 0 or 6)
    this.unlocked = Array.from({ length: this.G }, (_, r) =>
      Array.from({ length: this.G }, (__, c) => r >= 1 && r <= 5 && c >= 1 && c <= 5),
    );

    // Populate starter kit from selected Hero's loadout
    const hero = HEROES[heroId];
    for (const s of hero.starterItems) {
      const def = BAG_ITEMS[s.id as BagItemId];
      if (!def) continue;
      this.items.push({
        uid: nextItemUid++,
        id: s.id as BagItemId,
        star: 1,
        rot: 0,
        location: s.location,
        row: s.row,
        col: s.col,
        slot: s.slot,
        forgeTimer: def.forgeCd * 0.78,
      });
    }
    this.selectedUid = this.items[0]?.uid ?? null;

    this.rollShop(0, true);
    this.recomputeAllBuffs();
    this.renderAll();
  }

  /** Called at the start of a new Campaign stage (keeps the player's entire backpack & gold!). */
  onStageStart(stageIndex: number) {
    this.refreshesThisStage = 0;
    // Give all bag weapons 85% initial charge so an opening volley fires quickly!
    for (const it of this.items) {
      if (it.location === 'bag' && BAG_ITEMS[it.id].kind === 'weapon') {
        const cd = this.getEffectiveForgeCd(it);
        it.forgeTimer = Math.max(it.forgeTimer, cd * 0.85);
      }
    }
    if (!this.shopLocked) {
      this.rollShop(stageIndex, true);
    }
    this.recomputeAllBuffs();
    this.renderAll();

    // Immediately launch the primary bag weapon so the mine has instant action at 0:00!
    const firstW = this.items.find((it) => it.location === 'bag' && BAG_ITEMS[it.id].kind === 'weapon');
    if (firstW) {
      this.launchFromBagItem(firstW, '開場投擲');
    }
  }

  /** Instantly fires all weapons currently placed in the Backpack Grid (used by Overdrive!). */
  fireAllBagWeapons(note = '全彈齊射') {
    const bagWeapons = this.items.filter((it) => it.location === 'bag' && BAG_ITEMS[it.id].kind === 'weapon');
    bagWeapons.forEach((it, idx) => {
      it.forgeTimer = 0;
      setTimeout(() => {
        this.launchFromBagItem(it, note, true);
      }, idx * 95);
    });
  }

  addGold(amount: number) {
    if (amount <= 0) return;
    this.gold += amount;
    this.renderEconomy();
  }

  addExpandTokens(count: number) {
    if (count <= 0) return;
    this.expandTokens += count;
    this.renderEconomy();
    this.renderGridCells();
  }

  nextExpandCost(): number {
    return BAL.expandSlotBaseCost + this.expansionsBought * BAL.expandSlotCostStep;
  }

  shopRefreshCost(): number {
    return Math.max(2, BAL.shopRefreshCost + this.refreshesThisStage * BAL.shopRefreshCostStep - this.mods.shopDiscount);
  }

  // ------------------------------------------------------------------ Grid & Shape Math
  getOccupiedCells(id: BagItemId, rot: number, anchorR: number, anchorC: number): [number, number][] {
    const def = BAG_ITEMS[id];
    const rel = rotateShape(def.baseShape, rot);
    return rel.map(([dr, dc]) => [anchorR + dr, anchorC + dc]);
  }

  itemAtBagCell(r: number, c: number, ignoreUid?: number): PlacedItem | null {
    for (const it of this.items) {
      if (it.location !== 'bag' || it.uid === ignoreUid) continue;
      const cells = this.getOccupiedCells(it.id, it.rot, it.row, it.col);
      if (cells.some(([rr, cc]) => rr === r && cc === c)) return it;
    }
    return null;
  }

  itemAtStorageSlot(slot: number, ignoreUid?: number): PlacedItem | null {
    return this.items.find((it) => it.location === 'storage' && it.slot === slot && it.uid !== ignoreUid) ?? null;
  }

  canPlaceInBag(id: BagItemId, rot: number, anchorR: number, anchorC: number, ignoreUid?: number): {
    valid: boolean;
    overlappingItems: PlacedItem[];
  } {
    const cells = this.getOccupiedCells(id, rot, anchorR, anchorC);
    const overlaps = new Map<number, PlacedItem>();
    for (const [r, c] of cells) {
      if (r < 0 || c < 0 || r >= this.G || c >= this.G) {
        return { valid: false, overlappingItems: [] };
      }
      if (!this.unlocked[r][c]) {
        return { valid: false, overlappingItems: [] };
      }
      const occ = this.itemAtBagCell(r, c, ignoreUid);
      if (occ) overlaps.set(occ.uid, occ);
    }
    return { valid: overlaps.size === 0, overlappingItems: Array.from(overlaps.values()) };
  }

  findFirstBagPlacement(id: BagItemId, rot = 0): { row: number; col: number; rot: number } | null {
    for (const tryRot of [rot, (rot + 1) % 4]) {
      for (let r = 0; r < this.G; r++) {
        for (let c = 0; c < this.G; c++) {
          if (this.canPlaceInBag(id, tryRot, r, c).valid) {
            return { row: r, col: c, rot: tryRot };
          }
        }
      }
    }
    return null;
  }

  findFreeStorageSlot(ignoreUid?: number): number {
    for (let s = 0; s < BAL.storageSlots; s++) {
      if (!this.itemAtStorageSlot(s, ignoreUid)) return s;
    }
    return -1;
  }

  // ------------------------------------------------------------------ Adjacency & Buffs
  recomputeAllBuffs() {
    this.buffCache.clear();
    const bagItems = this.items.filter((i) => i.location === 'bag');

    // Initialize empty summaries for all bag items
    for (const it of bagItems) {
      this.buffCache.set(it.uid, {
        dmgMul: 1,
        cdMul: (it.star === 3 ? BAL.star3CdMul : it.star === 2 ? BAL.star2CdMul : 1) * this.mods.forgeCdMul,
        hpMul: 1,
        ultRateMul: 1,
        twinChance: 0,
        resoXpBonus: 0,
        linkedUids: new Set<number>(),
        affectedCells: new Set<string>(),
      });
    }

    // For each relic/core/seal in bag, project its adjacency pattern
    for (const src of bagItems) {
      const def = BAG_ITEMS[src.id];
      if (def.adjPattern === 'none') continue;
      const srcSummary = this.buffCache.get(src.uid)!;
      const srcCells = this.getOccupiedCells(src.id, src.rot, src.row, src.col);
      const offsets = getAdjacencyOffsets(def.adjPattern);
      const targetCoords = new Set<string>();

      for (const [r, c] of srcCells) {
        for (const [dr, dc] of offsets) {
          const nr = r + dr, nc = c + dc;
          if (nr >= 0 && nc >= 0 && nr < this.G && nc < this.G && this.unlocked[nr][nc]) {
            targetCoords.add(`${nr},${nc}`);
            srcSummary.affectedCells.add(`${nr},${nc}`);
          }
        }
      }

      // Find all distinct weapons occupying any of targetCoords
      const touchedWeapons = new Set<PlacedItem>();
      for (const coord of targetCoords) {
        const [nr, nc] = coord.split(',').map(Number);
        const w = this.itemAtBagCell(nr, nc, src.uid);
        if (w && BAG_ITEMS[w.id].kind === 'weapon') {
          touchedWeapons.add(w);
        }
      }

      const starFactor = src.star === 3 ? 2.4 : src.star === 2 ? 1.65 : 1.0;
      const relicMul = this.mods.relicEffectMul * starFactor;

      for (const w of touchedWeapons) {
        const wSum = this.buffCache.get(w.uid)!;
        wSum.linkedUids.add(src.uid);
        srcSummary.linkedUids.add(w.uid);

        switch (src.id) {
          case 'whetstone':
            wSum.dmgMul += 0.28 * relicMul;
            break;
          case 'gear': {
            const gearReduction = src.star === 3 ? 0.55 : src.star === 2 ? 0.66 : 0.78;
            wSum.cdMul = Math.max(0.32, wSum.cdMul * gearReduction);
            break;
          }
          case 'plate':
            wSum.hpMul += 0.35 * relicMul;
            break;
          case 'amp_crystal':
            wSum.ultRateMul += 0.35 * relicMul;
            wSum.resoXpBonus += Math.round(3 * starFactor);
            break;
          case 'mirror': {
            const chance = src.star === 3 ? 1.0 : src.star === 2 ? 0.7 : 0.45;
            wSum.twinChance = Math.min(1.0, wSum.twinChance + chance);
            break;
          }
          case 'holy_seal':
            wSum.dmgMul += 0.32 * relicMul;
            wSum.resoXpBonus += 3;
            break;
          default:
            if (def.kind === 'core') {
              wSum.dmgMul += 0.18 * relicMul;
              wSum.resoXpBonus += Math.round(4 * starFactor);
            }
            break;
        }
      }
    }
  }

  getStarPowerMul(star: number): number {
    return star === 3 ? BAL.star3Mul : star === 2 ? BAL.star2Mul : 1.0;
  }

  getEffectiveForgeCd(item: PlacedItem): number {
    const def = BAG_ITEMS[item.id];
    if (def.forgeCd <= 0) return 0;
    const sum = this.buffCache.get(item.uid);
    const cdMul = sum ? sum.cdMul : (item.star === 3 ? BAL.star3CdMul : item.star === 2 ? BAL.star2CdMul : 1) * this.mods.forgeCdMul;
    return Math.max(1.1, def.forgeCd * cdMul);
  }

  getHeroSpecialtyMul(item: PlacedItem): number {
    const def = BAG_ITEMS[item.id];
    if (def.kind !== 'weapon' || !def.weaponId) return 1.0;
    const wDef = WEAPONS[def.weaponId];
    if (this.heroId === 'bardin' && (wDef.element === 'earth' || wDef.archetype === 'heavy' || def.baseShape.length >= 4)) {
      return 1.30;
    }
    if (this.heroId === 'ignis' && (wDef.element === 'fire' || wDef.id === 'meteor' || wDef.id === 'dragon')) {
      return 1.35;
    }
    return 1.0;
  }

  getItemTotalPower(item: PlacedItem): number {
    const sum = this.buffCache.get(item.uid);
    return this.getStarPowerMul(item.star) * (sum ? sum.dmgMul : 1) * this.getHeroSpecialtyMul(item);
  }

  // ------------------------------------------------------------------ Frame Update & Auto-Forge
  update(dt: number) {
    if (!this.enabled) return;

    // Passive gold trickle
    this.goldAcc += BAL.passiveGoldPerSec * this.mods.goldGainMul * dt;
    if (this.goldAcc >= 1) {
      const whole = Math.floor(this.goldAcc);
      this.goldAcc -= whole;
      this.gold += whole;
      this.renderEconomy();
    }

    const rate = this.overdriveActive ? 1.65 : 1.0;
    for (const it of this.items) {
      if (it.location !== 'bag') continue;
      const def = BAG_ITEMS[it.id];
      if (def.kind !== 'weapon' || !def.weaponId) continue;

      const cd = this.getEffectiveForgeCd(it);
      it.forgeTimer += dt * rate;
      if (it.forgeTimer >= cd) {
        it.forgeTimer %= cd;
        this.launchFromBagItem(it);
      }

      // Fast DOM progress bar update
      const cardEl = this.bagCardEls.get(it.uid);
      if (cardEl) {
        const fill = cardEl.querySelector<HTMLElement>('.bag-cd-fill');
        if (fill) fill.style.width = `${Math.min(100, (it.forgeTimer / cd) * 100).toFixed(1)}%`;
      }
    }
  }

  private launchFromBagItem(it: PlacedItem, customNote?: string, forceSpawn = false, customCol?: number, extraPowerMul = 1) {
    const def = BAG_ITEMS[it.id];
    if (def.kind !== 'weapon' || !def.weaponId) return;
    const sum = this.buffCache.get(it.uid);
    const power = this.getItemTotalPower(it) * extraPowerMul;
    const hpBonusMul = sum ? sum.hpMul : 1;
    const ultRateMul = sum ? sum.ultRateMul : 1;

    const cardEl = this.bagCardEls.get(it.uid);
    if (cardEl) {
      cardEl.classList.remove('firing');
      void cardEl.offsetWidth;
      cardEl.classList.add('firing');
    }

    this.cb.onForgeWeapon(
      def.weaponId,
      power,
      { hpBonusMul, ultRateMul, star: it.star, customCol, forceSpawn },
      customNote,
    );

    // Grant Element Resonance XP on every forge launch!
    const wDef = WEAPONS[def.weaponId];
    if (wDef.element !== 'holy') {
      const xp = 3 + (sum ? sum.resoXpBonus : 0);
      this.cb.onAddResonanceXp(wDef.element, xp);
    }

    // Twin Mirror Prism proc!
    if (sum && sum.twinChance > 0 && Math.random() < sum.twinChance) {
      setTimeout(() => {
        this.cb.onForgeWeapon(
          def.weaponId!,
          power,
          { hpBonusMul, ultRateMul, star: it.star, customCol, forceSpawn: true },
          '👯 鏡像雙連',
        );
      }, 160);
    }
  }

  /** Air-drops an item onto the right mine (called by dragging onto Mine pane or clicking Air-Drop button). */
  airDropItem(item: PlacedItem, customCol?: number): boolean {
    const def = BAG_ITEMS[item.id];
    if (def.kind === 'consumable') {
      // Remove consumable and trigger immediately
      this.items = this.items.filter((x) => x.uid !== item.uid);
      if (this.selectedUid === item.uid) this.selectedUid = this.items[0]?.uid ?? null;
      this.cb.onUseConsumable(item.id as RelicId, customCol);
      this.recomputeAllBuffs();
      this.renderAll();
      this.announce(`${def.name} 已投放至礦坑`);
      return true;
    }

    if (def.kind === 'weapon' && def.weaponId) {
      const cd = this.getEffectiveForgeCd(item);
      const readyRatio = cd > 0 ? item.forgeTimer / cd : 1;
      const rushCost = readyRatio >= 0.45 ? 0 : 6;
      if (rushCost > 0 && this.gold < rushCost) {
        this.cb.onToast(`⚡ 鍛造充能未滿 45%，緊急空投需 ${rushCost}G！`, '#ff9a68');
        return false;
      }
      if (rushCost > 0) this.gold -= rushCost;
      item.forgeTimer = 0;
      this.launchFromBagItem(
        item,
        customCol !== undefined ? `🚀 空投第${customCol}列` : '🚀 緊急空投',
        true,
        customCol,
        BAL.airDropPowerMul,
      );
      this.renderEconomy();
      this.renderInspector();
      this.announce(`${def.name} 已緊急空投至礦坑`);
      return true;
    }

    this.cb.onToast('遺物與魔晶請擺在背包格內強化相鄰武器，或拖到武器上合成！', '#ffd880');
    return false;
  }

  // ------------------------------------------------------------------ Synthesis Execution
  trySynthesizeItems(src: PlacedItem, dst: PlacedItem): boolean {
    if (src.uid === dst.uid) return false;
    const syn: SynthesisResult | null = checkSynthesis(src.id, src.star, dst.id, dst.star);
    if (!syn) return false;

    const newDef = BAG_ITEMS[syn.resultId];
    // Remove both source and destination temporarily to find cleanest placement at dst's location
    const dstLoc = dst.location;
    const dstRow = dst.row;
    const dstCol = dst.col;
    const dstSlot = dst.slot;

    this.items = this.items.filter((x) => x.uid !== src.uid && x.uid !== dst.uid);

    const created: PlacedItem = {
      uid: nextItemUid++,
      id: syn.resultId,
      star: syn.resultStar,
      rot: 0,
      location: 'storage',
      row: -1,
      col: -1,
      slot: 0,
      forgeTimer: newDef.forgeCd * 0.85, // synthesized weapon starts at 85% charge for immediate gratification!
    };

    let placedInBag = false;
    if (dstLoc === 'bag') {
      // Try anchoring near (dstRow, dstCol)
      const candidates: [number, number, number][] = [
        [dstRow, dstCol, 0],
        [dstRow - 1, dstCol, 0],
        [dstRow, dstCol - 1, 0],
        [dstRow - 1, dstCol - 1, 0],
        [dstRow, dstCol, 1],
      ];
      for (const [r, c, rot] of candidates) {
        if (this.canPlaceInBag(created.id, rot, r, c).valid) {
          created.location = 'bag';
          created.row = r;
          created.col = c;
          created.rot = rot;
          placedInBag = true;
          break;
        }
      }
      if (!placedInBag) {
        const fallback = this.findFirstBagPlacement(created.id, 0);
        if (fallback) {
          created.location = 'bag';
          created.row = fallback.row;
          created.col = fallback.col;
          created.rot = fallback.rot;
          placedInBag = true;
        }
      }
    }

    if (!placedInBag) {
      const freeSlot = dstLoc === 'storage' && !this.itemAtStorageSlot(dstSlot) ? dstSlot : this.findFreeStorageSlot();
      created.location = 'storage';
      created.slot = Math.max(0, freeSlot);
    }

    this.items.push(created);
    this.selectedUid = created.uid;

    if (syn.resonanceElement && syn.resonanceGain > 0) {
      this.cb.onAddResonanceXp(syn.resonanceElement, syn.resonanceGain);
    }

    this.recomputeAllBuffs();
    this.renderAll();
    this.cb.onToast(`✨ ${syn.title}！`, newDef.cssColor, itemSpriteUrl(created.id));
    this.announce(`合成成功：${syn.title}`);

    // Immediately launch a celebratory copy into the mine if it's a weapon in the bag!
    if (created.location === 'bag' && newDef.kind === 'weapon') {
      this.launchFromBagItem(created, '鍛造誕生', true);
    }
    return true;
  }

  // ------------------------------------------------------------------ Shop & Expansion
  rollShop(stageProgress = 0, free = false) {
    if (!free) {
      const cost = this.shopRefreshCost();
      if (this.gold < cost) {
        this.cb.onToast(`金幣不足（刷新需 ${cost}G）`, '#ff8866');
        return;
      }
      this.gold -= cost;
      this.refreshesThisStage++;
    }

    const lowIds: BagItemId[] = ['pick', 'baton', 'needle', 'torch', 'icicle'];
    const t1Ids: BagItemId[] = ['axe', 'blade', 'dagger', 'sword', 'spear'];
    const t2Ids: BagItemId[] = ['hammer', 'halberd', 'scythe', 'meteor', 'boomerang', 'drill', 'core_orb', 'katar', 'flameblade', 'frostclaw'];
    const relicIds: BagItemId[] = ['whetstone', 'gear', 'plate', 'amp_crystal', 'mirror'];
    const coreIds: BagItemId[] = ['core_earth', 'core_thunder', 'core_poison', 'core_fire', 'core_ice'];
    const utilIds: BagItemId[] = ['mine_bomb', 'heal_potion'];

    const offers: ShopOffer[] = [];
    for (let i = 0; i < BAL.shopSlots; i++) {
      let id: BagItemId;
      const r = Math.random();
      if (i === 0) {
        // Slot 0: Always a weapon (Low or T1) so player can always build/merge weapons
        id = Math.random() < Math.min(0.65, 0.3 + stageProgress * 0.08)
          ? t1Ids[Math.floor(Math.random() * t1Ids.length)]
          : lowIds[Math.floor(Math.random() * lowIds.length)];
      } else if (i === 1) {
        // Slot 1: Weapon (Low / T1 / T2 scaling with depth/stage)
        if (stageProgress >= 2 && r < 0.28) id = t2Ids[Math.floor(Math.random() * t2Ids.length)];
        else if (r < 0.62) id = t1Ids[Math.floor(Math.random() * t1Ids.length)];
        else id = lowIds[Math.floor(Math.random() * lowIds.length)];
      } else if (i === 2) {
        // Slot 2: Elemental Core or Holy Seal (for Backpack Battles recipe fusion!)
        if (r < Math.min(0.22, 0.08 + stageProgress * 0.03)) id = 'holy_seal';
        else id = coreIds[Math.floor(Math.random() * coreIds.length)];
      } else if (i === 3) {
        // Slot 3: Adjacency Relic
        id = relicIds[Math.floor(Math.random() * relicIds.length)];
      } else {
        // Slot 4: Utility Consumable or extra Weapon/Core
        if (r < 0.48) id = utilIds[Math.floor(Math.random() * utilIds.length)];
        else if (r < 0.78) id = coreIds[Math.floor(Math.random() * coreIds.length)];
        else id = t1Ids[Math.floor(Math.random() * t1Ids.length)];
      }
      const def = BAG_ITEMS[id];
      offers.push({ id, star: 1, cost: def.cost, sold: false });
    }
    this.shop = offers;
    this.renderEconomy();
    this.renderShop();
  }

  buyShopOffer(idx: number) {
    const offer = this.shop[idx];
    if (!offer || offer.sold) return;
    if (this.gold < offer.cost) {
      this.cb.onToast(`金幣不足（需要 ${offer.cost}G）`, '#ff8866');
      return;
    }

    const def = BAG_ITEMS[offer.id];

    // 1. Check if the bought item can directly auto-fit into the Backpack Grid!
    const bagSpot = this.findFirstBagPlacement(offer.id, 0);
    const freeBench = this.findFreeStorageSlot();

    if (!bagSpot && freeBench === -1) {
      // Check if it can immediately merge with an existing item in bag or storage!
      const mergeTarget = this.items.find((it) => checkSynthesis(offer.id, offer.star, it.id, it.star) !== null);
      if (mergeTarget) {
        this.gold -= offer.cost;
        offer.sold = true;
        const tempItem: PlacedItem = {
          uid: nextItemUid++, id: offer.id, star: offer.star, rot: 0,
          location: 'storage', row: -1, col: -1, slot: 0, forgeTimer: 0,
        };
        this.items.push(tempItem);
        this.trySynthesizeItems(tempItem, mergeTarget);
        this.renderShop();
        return;
      }
      this.cb.onToast('背包與暫存區皆已滿！請先合成、擴充格子或出售道具。', '#ff8866');
      return;
    }

    this.gold -= offer.cost;
    offer.sold = true;

    const item: PlacedItem = {
      uid: nextItemUid++,
      id: offer.id,
      star: offer.star,
      rot: bagSpot ? bagSpot.rot : 0,
      location: bagSpot && def.kind !== 'consumable' ? 'bag' : freeBench !== -1 ? 'storage' : 'bag',
      row: bagSpot ? bagSpot.row : -1,
      col: bagSpot ? bagSpot.col : -1,
      slot: freeBench !== -1 ? freeBench : 0,
      forgeTimer: def.forgeCd * 0.65,
    };
    if (item.location === 'bag' && !bagSpot && freeBench !== -1) {
      item.location = 'storage';
      item.slot = freeBench;
    }

    this.items.push(item);
    this.selectedUid = item.uid;
    this.recomputeAllBuffs();
    this.renderAll();
    this.announce(`已購買 ${def.name}`);
  }

  unlockCell(r?: number, c?: number): boolean {
    // Find target locked cell (either specified or nearest locked cell adjacent to unlocked)
    let target: [number, number] | null = null;
    if (r !== undefined && c !== undefined && !this.unlocked[r]?.[c]) {
      target = [r, c];
    } else {
      for (let rr = 0; rr < this.G && !target; rr++) {
        for (let cc = 0; cc < this.G && !target; cc++) {
          if (this.unlocked[rr][cc]) continue;
          const adj = [[-1, 0], [1, 0], [0, -1], [0, 1]].some(([dr, dc]) => this.unlocked[rr + dr]?.[cc + dc]);
          if (adj) target = [rr, cc];
        }
      }
    }
    if (!target) {
      this.cb.onToast('7×7 背包格已全部解鎖完畢！', '#ffe680');
      return false;
    }

    if (this.expandTokens > 0) {
      this.expandTokens--;
    } else {
      const cost = this.nextExpandCost();
      if (this.gold < cost) {
        this.cb.onToast(`擴充背包格需 ${cost}G（或擊殺金冠菁英取得免費擴格券）`, '#ff9a68');
        return false;
      }
      this.gold -= cost;
      this.expansionsBought++;
    }

    this.unlocked[target[0]][target[1]] = true;
    this.recomputeAllBuffs();
    this.renderAll();
    this.announce(`已解鎖背包格 (${target[0] + 1}, ${target[1] + 1})`);
    return true;
  }

  rotateItem(item: PlacedItem): boolean {
    const def = BAG_ITEMS[item.id];
    if (def.baseShape.length <= 1) return false;
    for (let step = 1; step <= 3; step++) {
      const nextRot = (item.rot + step) % 4;
      if (item.location === 'storage') {
        item.rot = nextRot;
        this.renderAll();
        return true;
      }
      if (this.canPlaceInBag(item.id, nextRot, item.row, item.col, item.uid).valid) {
        item.rot = nextRot;
        this.recomputeAllBuffs();
        this.renderAll();
        return true;
      }
      // Try shifting 1 cell up/left if rotating near edge
      for (const [dr, dc] of [[0, -1], [-1, 0], [0, 1], [1, 0]]) {
        if (this.canPlaceInBag(item.id, nextRot, item.row + dr, item.col + dc, item.uid).valid) {
          item.rot = nextRot;
          item.row += dr;
          item.col += dc;
          this.recomputeAllBuffs();
          this.renderAll();
          return true;
        }
      }
    }
    this.cb.onToast('周圍空間不足，無法旋轉（可先移至暫存區旋轉）', '#ff9a68');
    return false;
  }

  sellItem(item: PlacedItem) {
    const def = BAG_ITEMS[item.id];
    const starVal = item.star === 3 ? 3.2 : item.star === 2 ? 1.8 : 1;
    const refund = Math.max(5, Math.round(def.cost * starVal * BAL.sellRefundRatio));
    this.items = this.items.filter((x) => x.uid !== item.uid);
    if (this.selectedUid === item.uid) this.selectedUid = this.items[0]?.uid ?? null;
    this.gold += refund;
    this.recomputeAllBuffs();
    this.renderAll();
    this.cb.onToast(`💰 已出售【${def.name}】+${refund}G`, '#ffd858');
    this.announce(`已出售 ${def.name} 獲得 ${refund} 金幣`);
  }

  // ------------------------------------------------------------------ Pointer Drag & Keyboard
  private bindEvents() {
    this.expandBtnEl.addEventListener('click', () => this.unlockCell());
    this.refreshBtnEl.addEventListener('click', () => this.rollShop(Math.floor(this.expansionsBought / 2), false));
    this.lockBtnEl.addEventListener('click', () => {
      this.shopLocked = !this.shopLocked;
      this.renderEconomy();
    });

    // Global keyboard shortcuts (R to rotate selected/dragged item, Arrow keys to nudge selected item in bag)
    window.addEventListener('keydown', (e) => {
      if (!this.enabled) return;
      if (e.key === 'r' || e.key === 'R') {
        if (this.dragState) {
          this.dragState.tempRot = (this.dragState.tempRot + 1) % 4;
          this.updateDragGhostVisual();
          return;
        }
        const sel = this.items.find((x) => x.uid === this.selectedUid);
        if (sel) {
          e.preventDefault();
          this.rotateItem(sel);
        }
      } else if (['ArrowUp', 'ArrowDown', 'ArrowLeft', 'ArrowRight'].includes(e.key)) {
        const sel = this.items.find((x) => x.uid === this.selectedUid);
        if (!sel || sel.location !== 'bag') return;
        const dr = e.key === 'ArrowUp' ? -1 : e.key === 'ArrowDown' ? 1 : 0;
        const dc = e.key === 'ArrowLeft' ? -1 : e.key === 'ArrowRight' ? 1 : 0;
        if (this.canPlaceInBag(sel.id, sel.rot, sel.row + dr, sel.col + dc, sel.uid).valid) {
          e.preventDefault();
          sel.row += dr;
          sel.col += dc;
          this.recomputeAllBuffs();
          this.renderAll();
          this.announce(`${BAG_ITEMS[sel.id].name} 移動至 (${sel.row + 1}, ${sel.col + 1})`);
        }
      }
    });

    // Document-level pointermove / pointerup / pointercancel for smooth dragging across panes
    document.addEventListener('pointermove', (e) => this.onPointerMove(e));
    document.addEventListener('pointerup', (e) => this.onPointerUp(e));
    document.addEventListener('pointercancel', (e) => this.onPointerCancel(e));
  }

  private startItemPointerDown(e: PointerEvent, item: PlacedItem, el: HTMLElement) {
    if (e.button === 2) {
      e.preventDefault();
      this.rotateItem(item);
      return;
    }
    if (e.button !== 0) return;
    this.selectedUid = item.uid;
    this.renderInspector();
    this.updateSelectionHighlights();

    const rect = el.getBoundingClientRect();
    this.dragState = {
      item,
      pointerId: e.pointerId,
      startX: e.clientX,
      startY: e.clientY,
      offsetX: e.clientX - rect.left,
      offsetY: e.clientY - rect.top,
      moved: false,
      tempRot: item.rot,
    };
  }

  private onPointerMove(e: PointerEvent) {
    const st = this.dragState;
    if (!st || e.pointerId !== st.pointerId) return;
    const dist = Math.hypot(e.clientX - st.startX, e.clientY - st.startY);
    if (!st.moved && dist < 5) return;

    if (!st.moved) {
      st.moved = true;
      this.updateDragGhostVisual();
      this.dragGhostEl.hidden = false;
    }

    const maxLeft = Math.max(0, window.innerWidth - this.dragGhostEl.offsetWidth);
    const maxTop = Math.max(0, window.innerHeight - this.dragGhostEl.offsetHeight);
    const left = Math.max(0, Math.min(e.clientX - st.offsetX, maxLeft));
    const top = Math.max(0, Math.min(e.clientY - st.offsetY, maxTop));
    this.dragGhostEl.style.left = `${left}px`;
    this.dragGhostEl.style.top = `${top}px`;

    this.highlightDropTarget(e.clientX, e.clientY);
  }

  private onPointerUp(e: PointerEvent) {
    const st = this.dragState;
    if (!st || e.pointerId !== st.pointerId) return;
    this.dragState = null;
    this.dragGhostEl.hidden = true;
    this.mineDropHintEl.hidden = true;
    this.clearDropHighlights();

    if (!st.moved) return; // was a simple click/tap

    const item = st.item;
    item.rot = st.tempRot;

    // 1. Did the user drop onto the Right Mine Pane for an immediate Air-Drop?
    const mineCol = this.cb.getMineColumnFromClientX(e.clientX, e.clientY);
    if (mineCol !== null) {
      this.airDropItem(item, mineCol);
      return;
    }

    // 2. Did the user drop onto a Backpack Grid cell?
    const gridCell = this.clientPointToBagAnchor(e.clientX, e.clientY, st.offsetX, st.offsetY);
    if (gridCell) {
      const [r, c] = gridCell;
      // Check if dropping directly onto an item that can SYNTHESIZE with `item`!
      const rawCell = this.clientPointToSingleBagCell(e.clientX, e.clientY);
      const targetAtPointer = rawCell ? this.itemAtBagCell(rawCell[0], rawCell[1], item.uid) : null;
      if (targetAtPointer && this.trySynthesizeItems(item, targetAtPointer)) {
        return;
      }

      const check = this.canPlaceInBag(item.id, item.rot, r, c, item.uid);
      if (check.valid) {
        item.location = 'bag';
        item.row = r;
        item.col = c;
        item.slot = -1;
        this.recomputeAllBuffs();
        this.renderAll();
        this.announce(`${BAG_ITEMS[item.id].name} 已放入背包 (${r + 1}, ${c + 1})`);
        return;
      }
      // If overlapping exactly 1 item, check if we can synthesize or swap with it!
      if (check.overlappingItems.length === 1) {
        const other = check.overlappingItems[0];
        if (this.trySynthesizeItems(item, other)) return;
      }
    }

    // 3. Did the user drop onto a Storage Bench slot?
    const benchSlot = this.clientPointToStorageSlot(e.clientX, e.clientY);
    if (benchSlot !== null) {
      const occ = this.itemAtStorageSlot(benchSlot, item.uid);
      if (occ) {
        if (this.trySynthesizeItems(item, occ)) return;
        // Swap with storage item if item came from storage
        if (item.location === 'storage') {
          occ.slot = item.slot;
          item.slot = benchSlot;
          this.renderAll();
          return;
        }
      } else {
        item.location = 'storage';
        item.slot = benchSlot;
        item.row = -1;
        item.col = -1;
        this.recomputeAllBuffs();
        this.renderAll();
        this.announce(`${BAG_ITEMS[item.id].name} 已移至暫存區`);
        return;
      }
    }

    // Invalid drop -> restore original rotation & re-render
    this.renderAll();
  }

  private onPointerCancel(e: PointerEvent) {
    if (this.dragState && e.pointerId === this.dragState.pointerId) {
      this.dragState = null;
      this.dragGhostEl.hidden = true;
      this.mineDropHintEl.hidden = true;
      this.clearDropHighlights();
    }
  }

  private updateDragGhostVisual() {
    if (!this.dragState) return;
    const { item, tempRot } = this.dragState;
    const def = BAG_ITEMS[item.id];
    const cells = rotateShape(def.baseShape, tempRot);
    const bounds = shapeBounds(cells);
    const cellPx = this.getBagCellSizePx();
    this.dragGhostEl.style.width = `${bounds.cols * cellPx}px`;
    this.dragGhostEl.style.height = `${bounds.rows * cellPx}px`;
    this.dragGhostEl.style.borderColor = def.cssColor;
    this.dragGhostEl.innerHTML = `<img src="${itemSpriteUrl(item.id)}" alt=""><span>${def.name}</span>`;
  }

  private getBagCellSizePx(): number {
    const firstCell = this.gridEl.querySelector<HTMLElement>('.bag-cell');
    return firstCell ? firstCell.getBoundingClientRect().width : 44;
  }

  private clientPointToSingleBagCell(clientX: number, clientY: number): [number, number] | null {
    const rect = this.gridEl.getBoundingClientRect();
    if (clientX < rect.left || clientX > rect.right || clientY < rect.top || clientY > rect.bottom) return null;
    const c = Math.floor(((clientX - rect.left) / rect.width) * this.G);
    const r = Math.floor(((clientY - rect.top) / rect.height) * this.G);
    if (r < 0 || c < 0 || r >= this.G || c >= this.G) return null;
    return [r, c];
  }

  private clientPointToBagAnchor(clientX: number, clientY: number, offsetX: number, offsetY: number): [number, number] | null {
    const rect = this.gridEl.getBoundingClientRect();
    if (clientX < rect.left - 12 || clientX > rect.right + 12 || clientY < rect.top - 12 || clientY > rect.bottom + 12) {
      return null;
    }
    const cellW = rect.width / this.G;
    const cellH = rect.height / this.G;
    const topLeftX = clientX - offsetX + cellW * 0.45;
    const topLeftY = clientY - offsetY + cellH * 0.45;
    const c = Math.floor((topLeftX - rect.left) / cellW);
    const r = Math.floor((topLeftY - rect.top) / cellH);
    return [r, c];
  }

  private clientPointToStorageSlot(clientX: number, clientY: number): number | null {
    const slots = Array.from(this.storageEl.querySelectorAll<HTMLElement>('.storage-slot'));
    for (let i = 0; i < slots.length; i++) {
      const r = slots[i].getBoundingClientRect();
      if (clientX >= r.left && clientX <= r.right && clientY >= r.top && clientY <= r.bottom) return i;
    }
    return null;
  }

  private highlightDropTarget(clientX: number, clientY: number) {
    this.clearDropHighlights();
    const st = this.dragState;
    if (!st) return;

    // Check Mine pane air-drop target
    const mineCol = this.cb.getMineColumnFromClientX(clientX, clientY);
    if (mineCol !== null) {
      this.mineDropHintEl.hidden = false;
      const def = BAG_ITEMS[st.item.id];
      this.mineDropHintEl.textContent = def.kind === 'consumable'
        ? `🧨 放開立即投擲【${def.name}】（第 ${mineCol} 列）`
        : `🚀 放開緊急空投【${def.name} ×${BAL.airDropPowerMul}】（第 ${mineCol} 列）`;
      return;
    }
    this.mineDropHintEl.hidden = true;

    // Check synthesis under pointer
    const singleCell = this.clientPointToSingleBagCell(clientX, clientY);
    if (singleCell) {
      const target = this.itemAtBagCell(singleCell[0], singleCell[1], st.item.uid);
      if (target && checkSynthesis(st.item.id, st.item.star, target.id, target.star)) {
        const targetEl = this.bagCardEls.get(target.uid);
        targetEl?.classList.add('synth-ready');
        return;
      }
    }

    const anchor = this.clientPointToBagAnchor(clientX, clientY, st.offsetX, st.offsetY);
    if (!anchor) return;
    const [r, c] = anchor;
    const cells = this.getOccupiedCells(st.item.id, st.tempRot, r, c);
    const check = this.canPlaceInBag(st.item.id, st.tempRot, r, c, st.item.uid);
    const cls = check.valid ? 'drop-ok' : 'drop-bad';
    for (const [rr, cc] of cells) {
      const cellEl = this.gridEl.querySelector<HTMLElement>(`.bag-cell[data-r="${rr}"][data-c="${cc}"]`);
      cellEl?.classList.add(cls);
    }
  }

  private clearDropHighlights() {
    this.gridEl.querySelectorAll('.drop-ok, .drop-bad').forEach((el) => el.classList.remove('drop-ok', 'drop-bad'));
    this.itemsLayerEl.querySelectorAll('.synth-ready').forEach((el) => el.classList.remove('synth-ready'));
  }

  private announce(msg: string) {
    this.liveRegionEl.textContent = msg;
  }

  // ------------------------------------------------------------------ Rendering
  renderAll() {
    this.renderEconomy();
    this.renderGridCells();
    this.renderBagItems();
    this.renderStorage();
    this.renderShop();
    this.renderInspector();
    this.updateSelectionHighlights();
  }

  renderEconomy() {
    this.goldEl.textContent = `💰 ${this.gold}G`;
    if (this.expandTokens > 0) {
      this.expandBtnEl.textContent = `🎒 免費擴格 (${this.expandTokens})`;
      this.expandBtnEl.classList.add('free-token');
    } else {
      this.expandBtnEl.textContent = `🎒 擴格 (${this.nextExpandCost()}G)`;
      this.expandBtnEl.classList.remove('free-token');
    }
    this.refreshBtnEl.textContent = `🔄 刷新 (${this.shopRefreshCost()}G)`;
    this.lockBtnEl.setAttribute('aria-pressed', this.shopLocked ? 'true' : 'false');
    this.lockBtnEl.textContent = this.shopLocked ? '🔒 已鎖定' : '🔓 鎖定';
  }

  renderGridCells() {
    if (this.gridEl.children.length !== this.G * this.G) {
      this.gridEl.replaceChildren();
      for (let r = 0; r < this.G; r++) {
        for (let c = 0; c < this.G; c++) {
          const cell = document.createElement('button');
          cell.type = 'button';
          cell.className = 'bag-cell';
          cell.dataset.r = String(r);
          cell.dataset.c = String(c);
          cell.addEventListener('click', () => this.onBagCellClick(r, c));
          this.gridEl.appendChild(cell);
        }
      }
    }

    for (let r = 0; r < this.G; r++) {
      for (let c = 0; c < this.G; c++) {
        const cell = this.gridEl.children[r * this.G + c] as HTMLButtonElement;
        const isOpen = this.unlocked[r][c];
        cell.classList.toggle('locked', !isOpen);
        cell.setAttribute('aria-label', isOpen ? `背包格 (${r + 1}, ${c + 1})` : `鎖定格 (${r + 1}, ${c + 1})，點擊擴充`);
        cell.textContent = isOpen ? '' : '🔒';
      }
    }
  }

  private onBagCellClick(r: number, c: number) {
    if (!this.unlocked[r][c]) {
      this.unlockCell(r, c);
      return;
    }
    // Single-pointer accessibility: if an item is selected, clicking an empty unlocked cell moves it there!
    const sel = this.items.find((x) => x.uid === this.selectedUid);
    if (!sel) return;
    if (this.canPlaceInBag(sel.id, sel.rot, r, c, sel.uid).valid) {
      sel.location = 'bag';
      sel.row = r;
      sel.col = c;
      sel.slot = -1;
      this.recomputeAllBuffs();
      this.renderAll();
      this.announce(`${BAG_ITEMS[sel.id].name} 已移至背包 (${r + 1}, ${c + 1})`);
    }
  }

  renderBagItems() {
    this.bagCardEls.clear();
    this.itemsLayerEl.replaceChildren();

    const bagItems = this.items.filter((i) => i.location === 'bag');
    for (const it of bagItems) {
      const def = BAG_ITEMS[it.id];
      const cells = rotateShape(def.baseShape, it.rot);
      const bounds = shapeBounds(cells);
      const sum = this.buffCache.get(it.uid);

      const el = document.createElement('div');
      el.className = `bag-item kind-${def.kind}`;
      el.dataset.uid = String(it.uid);
      el.style.setProperty('--item-color', def.cssColor);
      el.style.left = `${(it.col / this.G) * 100}%`;
      el.style.top = `${(it.row / this.G) * 100}%`;
      el.style.width = `${(bounds.cols / this.G) * 100}%`;
      el.style.height = `${(bounds.rows / this.G) * 100}%`;

      // Render individual occupied sub-tiles for L-shapes / polyominoes so non-occupied corners remain transparent & clickable
      const cellSet = new Set(cells.map(([dr, dc]) => `${dr},${dc}`));
      const tilesHtml = Array.from({ length: bounds.rows * bounds.cols }, (_, idx) => {
        const dr = Math.floor(idx / bounds.cols);
        const dc = idx % bounds.cols;
        const filled = cellSet.has(`${dr},${dc}`);
        return `<span class="sub-tile${filled ? ' filled' : ' empty'}" style="grid-row:${dr + 1};grid-column:${dc + 1}"></span>`;
      }).join('');

      const cd = this.getEffectiveForgeCd(it);
      const pct = cd > 0 ? Math.min(100, (it.forgeTimer / cd) * 100) : 0;
      const starStr = it.star > 1 ? `<span class="item-star">${'★'.repeat(it.star)}</span>` : '';
      const buffPct = sum && def.kind === 'weapon' ? Math.round((this.getItemTotalPower(it) - 1) * 100) : 0;
      const buffBadge = buffPct > 0 ? `<span class="item-buff">+${buffPct}%</span>` : '';
      const cdBar = def.kind === 'weapon'
        ? `<span class="bag-cd-bar"><i class="bag-cd-fill" style="width:${pct.toFixed(1)}%"></i></span>`
        : '';

      el.innerHTML = `
        <div class="sub-grid" style="grid-template-rows:repeat(${bounds.rows},1fr);grid-template-columns:repeat(${bounds.cols},1fr)">${tilesHtml}</div>
        <div class="bag-item-content">
          ${starStr}
          ${buffBadge}
          <img src="${itemSpriteUrl(it.id)}" alt="${def.name}">
          <span class="item-lbl">${def.name}</span>
          ${cdBar}
        </div>
      `;

      el.addEventListener('contextmenu', (e) => e.preventDefault());
      el.addEventListener('pointerdown', (e) => this.startItemPointerDown(e, it, el));
      el.addEventListener('pointerenter', () => {
        this.hoveredUid = it.uid;
        this.updateSelectionHighlights();
      });
      el.addEventListener('pointerleave', () => {
        if (this.hoveredUid === it.uid) {
          this.hoveredUid = null;
          this.updateSelectionHighlights();
        }
      });
      // Click-to-synthesize when clicking another item while one is selected!
      el.addEventListener('click', (e) => {
        e.stopPropagation();
        const prev = this.items.find((x) => x.uid === this.selectedUid);
        if (prev && prev.uid !== it.uid && checkSynthesis(prev.id, prev.star, it.id, it.star)) {
          this.trySynthesizeItems(prev, it);
        }
      });

      this.bagCardEls.set(it.uid, el);
      this.itemsLayerEl.appendChild(el);
    }
  }

  renderStorage() {
    this.storageCardEls.clear();
    this.storageEl.replaceChildren();
    for (let s = 0; s < BAL.storageSlots; s++) {
      const slotEl = document.createElement('div');
      slotEl.className = 'storage-slot';
      slotEl.dataset.slot = String(s);

      const it = this.itemAtStorageSlot(s);
      if (it) {
        const def = BAG_ITEMS[it.id];
        const card = document.createElement('div');
        card.className = `storage-item kind-${def.kind}`;
        card.style.setProperty('--item-color', def.cssColor);
        const starStr = it.star > 1 ? `<span class="item-star">${'★'.repeat(it.star)}</span>` : '';
        card.innerHTML = `
          ${starStr}
          <img src="${itemSpriteUrl(it.id)}" alt="${def.name}">
          <span class="item-lbl">${def.name}</span>
        `;
        card.addEventListener('contextmenu', (e) => e.preventDefault());
        card.addEventListener('pointerdown', (e) => this.startItemPointerDown(e, it, card));
        card.addEventListener('click', (e) => {
          e.stopPropagation();
          const prev = this.items.find((x) => x.uid === this.selectedUid);
          if (prev && prev.uid !== it.uid && checkSynthesis(prev.id, prev.star, it.id, it.star)) {
            this.trySynthesizeItems(prev, it);
          }
        });
        this.storageCardEls.set(it.uid, card);
        slotEl.appendChild(card);
      } else {
        slotEl.addEventListener('click', () => {
          const sel = this.items.find((x) => x.uid === this.selectedUid);
          if (!sel) return;
          sel.location = 'storage';
          sel.slot = s;
          sel.row = -1;
          sel.col = -1;
          this.recomputeAllBuffs();
          this.renderAll();
        });
      }
      this.storageEl.appendChild(slotEl);
    }
  }

  renderShop() {
    this.shopEl.replaceChildren(
      ...this.shop.map((offer, idx) => {
        const def = BAG_ITEMS[offer.id];
        const btn = document.createElement('button');
        btn.type = 'button';
        btn.className = `shop-card kind-${def.kind}${offer.sold ? ' sold' : ''}`;
        btn.style.setProperty('--item-color', def.cssColor);
        btn.disabled = offer.sold;

        // Check if this shop item can synthesize with any currently owned item!
        const canMerge = !offer.sold && this.items.some((it) => checkSynthesis(offer.id, offer.star, it.id, it.star) !== null);
        const mergeBadge = canMerge ? `<span class="shop-merge-tag">✨可合成</span>` : '';

        btn.innerHTML = `
          ${mergeBadge}
          <img src="${itemSpriteUrl(offer.id)}" alt="${def.name}">
          <span class="shop-name">${def.name}</span>
          <span class="shop-shape">${def.shapeName}</span>
          <span class="shop-price">${offer.sold ? '已售出' : `💰 ${offer.cost}G`}</span>
        `;
        btn.addEventListener('click', () => this.buyShopOffer(idx));
        return btn;
      }),
    );
  }

  renderInspector() {
    const activeUid = this.hoveredUid ?? this.selectedUid;
    const item = this.items.find((x) => x.uid === activeUid) ?? this.items[0] ?? null;
    if (!item) {
      this.inspectorEl.innerHTML = `<div class="insp-empty">從下方商店購買武器、魔晶與遺物放入背包，武器充能完畢即自動投射至右側礦坑！</div>`;
      return;
    }

    const def: BagItemDef = BAG_ITEMS[item.id];
    const sum = this.buffCache.get(item.uid);
    const starBadge = item.star > 1 ? ` ${'★'.repeat(item.star)}` : '';

    let statsLine = '';
    if (def.kind === 'weapon' && def.weaponId) {
      const wDef = WEAPONS[def.weaponId];
      const power = this.getItemTotalPower(item);
      const effDmg = Math.round(wDef.dmg * power * this.mods.dmgMul);
      const effHp = Math.round(wDef.baseHp * (1 + (power - 1) * 0.6) * this.mods.hpMul * (sum ? sum.hpMul : 1));
      const cd = this.getEffectiveForgeCd(item);
      const twinTxt = sum && sum.twinChance > 0 ? `｜👯 ${Math.round(sum.twinChance * 100)}%` : '';
      statsLine = `<div class="insp-stats">⚔️ 傷害 <b>${effDmg}</b> (${Math.round(power * 100)}%)｜❤️ <b>${effHp}</b>｜⚡ 每 <b>${cd.toFixed(1)}s</b>｜彈力 <b>${wDef.bounceRating}</b>・投速 <b>${wDef.throwSpeed}</b>・<b>${wDef.weightLabel}</b>${twinTxt}</div>`;
    } else {
      statsLine = `<div class="insp-stats">${def.desc}</div>`;
    }

    const starVal = item.star === 3 ? 3.2 : item.star === 2 ? 1.8 : 1;
    const sellPrice = Math.max(5, Math.round(def.cost * starVal * BAL.sellRefundRatio));
    const canRot = def.baseShape.length > 1;
    const airDropLabel = def.kind === 'consumable' ? '🧨 立即投擲' : '🚀 緊急空投';

    this.inspectorEl.innerHTML = `
      <div class="insp-main">
        <img class="insp-ico" src="${itemSpriteUrl(item.id)}" alt="">
        <div class="insp-body">
          <div class="insp-title"><b style="color:${def.cssColor}">${def.name}${starBadge}</b> <small>${def.subtitle}</small></div>
          ${statsLine}
          <div class="insp-recipe">💡 ${def.recipeHint}</div>
        </div>
        <div class="insp-actions">
          ${def.kind === 'weapon' || def.kind === 'consumable' ? `<button type="button" class="insp-btn primary" id="insp-airdrop-btn">${airDropLabel}</button>` : ''}
          ${canRot ? `<button type="button" class="insp-btn" id="insp-rot-btn">🔄 旋轉(R)</button>` : ''}
          <button type="button" class="insp-btn sell" id="insp-sell-btn">💰 出售(+${sellPrice}G)</button>
        </div>
      </div>
    `;

    this.inspectorEl.querySelector('#insp-airdrop-btn')?.addEventListener('click', () => this.airDropItem(item));
    this.inspectorEl.querySelector('#insp-rot-btn')?.addEventListener('click', () => this.rotateItem(item));
    this.inspectorEl.querySelector('#insp-sell-btn')?.addEventListener('click', () => this.sellItem(item));
  }

  private updateSelectionHighlights() {
    const focusUid = this.hoveredUid ?? this.selectedUid;
    const focusItem = this.items.find((x) => x.uid === focusUid) ?? null;
    const focusSum = focusUid !== null ? this.buffCache.get(focusUid) : undefined;

    for (const [uid, el] of this.bagCardEls) {
      el.classList.toggle('selected', uid === this.selectedUid);
      el.classList.toggle('linked', Boolean(focusSum?.linkedUids.has(uid)));
      const other = this.items.find((x) => x.uid === uid);
      const canMerge = Boolean(
        focusItem && other && focusItem.uid !== other.uid &&
        checkSynthesis(focusItem.id, focusItem.star, other.id, other.star),
      );
      el.classList.toggle('merge-hint', canMerge);
    }
    for (const [uid, el] of this.storageCardEls) {
      el.classList.toggle('selected', uid === this.selectedUid);
      const other = this.items.find((x) => x.uid === uid);
      const canMerge = Boolean(
        focusItem && other && focusItem.uid !== other.uid &&
        checkSynthesis(focusItem.id, focusItem.star, other.id, other.star),
      );
      el.classList.toggle('merge-hint', canMerge);
    }

    // Highlight grid cells affected by hovered/selected Relic
    this.gridEl.querySelectorAll('.bag-cell').forEach((cell) => {
      const r = (cell as HTMLElement).dataset.r;
      const c = (cell as HTMLElement).dataset.c;
      cell.classList.toggle('adj-aura', Boolean(focusSum?.affectedCells.has(`${r},${c}`)));
    });
  }
}
