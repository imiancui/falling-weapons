import './style.css';
import {
  BAL, ELEMENTS, ELEMENT_INFO, ENDLESS_LEVEL, LEVELS, ORE_ELEMENT, ORE_ICON, PERKS,
  defaultMods, weaponElementMeta, type Element, type Mods,
} from './data/config';
import { ELEMENT_WEAPONS, WEAPONS, WEAPON_LIST, type WeaponId } from './data/weapons';
import { spriteUrl } from './gfx/pixel';
import { BackpackForge } from './backpack/forge';
import { itemSpriteUrl } from './backpack/items';
import { Mine } from './mine/world';
import { MineRenderer } from './mine/renderer';
import type { WeaponSpawnMeta } from './mine/weapon';
import { initWiki } from './ui/wiki';

const $ = <T extends HTMLElement = HTMLElement>(id: string) => document.getElementById(id) as T;

// ------------------------------------------------------------------ persistent records
interface BestRecords {
  bestStage: number;
  campaignCleared: boolean;
  bestEndlessDepth: number;
}
const RECORDS_KEY = 'fw_records_v1';
function loadRecords(): BestRecords {
  try {
    const raw = localStorage.getItem(RECORDS_KEY);
    if (raw) {
      const parsed = JSON.parse(raw) as Partial<BestRecords>;
      return {
        bestStage: Number(parsed.bestStage) || 0,
        campaignCleared: Boolean(parsed.campaignCleared),
        bestEndlessDepth: Number(parsed.bestEndlessDepth) || 0,
      };
    }
  } catch { /* ignore storage restrictions */ }
  return { bestStage: 0, campaignCleared: false, bestEndlessDepth: 0 };
}
function saveRecords() {
  try {
    localStorage.setItem(RECORDS_KEY, JSON.stringify(records));
  } catch { /* ignore storage restrictions */ }
}
const records = loadRecords();

function renderBestRecords() {
  const box = $('best-records');
  const campText = records.campaignCleared
    ? '🏆 10 關闖關：全通關制霸！'
    : records.bestStage > 0
      ? `🏆 10 關闖關最高：第 ${records.bestStage} 關`
      : '🏆 10 關闖關：尚未紀錄';
  const endText = records.bestEndlessDepth > 0
    ? `♾️ 無盡最深紀錄：${records.bestEndlessDepth}m`
    : '♾️ 無盡深淵：尚未紀錄';
  box.innerHTML = `<span>${campText}</span><span>${endText}</span>`;
}

// ------------------------------------------------------------------ state
type State = 'title' | 'play' | 'ending' | 'perk' | 'result' | 'paused';
type GameMode = 'campaign' | 'endless';
let state: State = 'title';
let gameMode: GameMode = 'campaign';

const run = {
  level: 0,
  mods: defaultMods() as Mods,
  perks: [] as string[],
  resources: {} as Record<string, number>,
  weaponsMade: 0,
  totalGold: BAL.startGold as number,
};
let resonance: Record<Element, number> = { earth: 0, thunder: 0, poison: 0, fire: 0, ice: 0 };
let cumGauge: Record<Element, number> = { earth: 0, thunder: 0, poison: 0, fire: 0, ice: 0 };

// v0.5: All-Weapon Overdrive Barrage state
let overdriveTimer = 0;
let overdriveDuration: number = BAL.overdriveSec;
let overdriveCooldown = 0;
let pendingEndlessPerk: { isBossGate: boolean } | null = null;
let perkSource: 'campaign' | 'endless' = 'campaign';
let mine: Mine | null = null;

function currentOverdriveDuration(): number {
  return Math.max(4, BAL.overdriveSec + run.mods.overdriveSecBonus);
}
function currentOverdriveDmgMul(): number {
  return 1 + BAL.overdriveBaseDmgBonus + run.mods.overdriveDmgBonus;
}

const mineRenderer = new MineRenderer($('mine-pane'));
const forge = new BackpackForge($('board-pane'), run.mods, {
  onForgeWeapon: (id, power, meta, note) => {
    acquire(id, power, note ?? '', Boolean(meta.forceSpawn), meta);
  },
  onUseConsumable: (id, col) => {
    if (!mine) return;
    if (id === 'mine_bomb') {
      mine.dropTacticalBomb(col);
      toast(`🧨 矮人深層炸彈引爆${col ? `（第 ${col} 列）` : ''}！`, '#ffaa44', itemSpriteUrl('mine_bomb'));
    } else if (id === 'heal_potion') {
      mine.healAll(0.45 * run.mods.healMul);
      mine.shield(3);
      toast('🧪 女神甘露：全場武器回復 45% HP ＋ 3 秒無敵！', '#ff88c8', itemSpriteUrl('heal_potion'));
    }
  },
  onAddResonanceXp: (el, amount) => addResonanceXp(el, amount),
  onToast: (text, color, icon) => toast(text, color, icon),
  getMineColumnFromClientX: (clientX, clientY) => {
    const pane = $('mine-pane');
    const r = pane.getBoundingClientRect();
    if (clientX < r.left || clientX > r.right || clientY < r.top || clientY > r.bottom) return null;
    const ratio = (clientX - r.left) / Math.max(1, r.width);
    return Math.max(1, Math.min(7, Math.floor(ratio * 7) + 1));
  },
});

$('od-btn').addEventListener('click', () => {
  if (state !== 'play' || overdriveTimer > 0 || overdriveCooldown > 0) return;
  triggerOverdrive();
});

// ------------------------------------------------------------------ mine camera inspection (wheel + drag + lock)
(function bindMineCameraControls() {
  const canvas = mineRenderer.renderer.domElement;
  canvas.style.touchAction = 'none';
  canvas.addEventListener('wheel', (ev) => {
    if (!mine) return;
    ev.preventDefault();
    mine.panCamera(-ev.deltaY * 0.012);
  }, { passive: false });

  let dragging = false;
  let lastY = 0;
  canvas.addEventListener('pointerdown', (ev) => {
    if (!mine) return;
    dragging = true;
    lastY = ev.clientY;
    canvas.setPointerCapture(ev.pointerId);
  });
  canvas.addEventListener('pointermove', (ev) => {
    if (!dragging || !mine) return;
    const dy = ev.clientY - lastY;
    if (Math.abs(dy) < 2) return;
    lastY = ev.clientY;
    const [, half] = mine.viewHalf();
    const blocksPerPx = (half * 2) / Math.max(100, canvas.clientHeight);
    mine.panCamera(dy * blocksPerPx);
  });
  const endDrag = () => { dragging = false; };
  canvas.addEventListener('pointerup', endDrag);
  canvas.addEventListener('pointercancel', endDrag);

  $('cam-reset-btn').addEventListener('click', () => {
    mine?.resetCameraFollow();
  });
})();

// ------------------------------------------------------------------ flow
/** `?depth=N` overrides campaign level depth (testing). */
function levelDef(i: number) {
  const d = Number(new URLSearchParams(location.search).get('depth'));
  return d > 0
    ? { ...LEVELS[i], depth: d, caves: Math.max(1, Math.round(d / 12)), hardBands: Math.max(1, Math.round(d / 28)), gates: Math.max(1, Math.round(d / 35)) }
    : LEVELS[i];
}

function startRun(mode: GameMode = gameMode) {
  gameMode = mode;
  run.level = 0;
  run.mods = defaultMods();
  run.perks = [];
  run.resources = {};
  run.weaponsMade = 0;
  run.totalGold = BAL.startGold;
  pendingEndlessPerk = null;

  const startLv = run.mods.resonanceStartLv;
  resonance = { earth: startLv, thunder: startLv, poison: startLv, fire: startLv, ice: startLv };
  cumGauge = { earth: 0, thunder: 0, poison: 0, fire: 0, ice: 0 };
  forge.resetForNewRun(run.mods);

  if (mode === 'endless') startEndless();
  else startLevel(0, true);
}

function resetOverdriveState() {
  overdriveTimer = 0;
  overdriveCooldown = 0;
  overdriveDuration = currentOverdriveDuration();
  forge.overdriveActive = false;
}

function wireMineCallbacks(isEndless: boolean) {
  return {
    onEnd: (win: boolean, reason: string) => onLevelEnd(win, reason),
    onResource: (ore: string) => {
      run.resources[ore] = (run.resources[ore] ?? 0) + 1;
      const el = ORE_ELEMENT[ore];
      if (el) addResonanceXp(el, 4);
    },
    onGold: (amount: number) => {
      forge.addGold(amount);
      run.totalGold += amount;
    },
    onExpandToken: (count: number) => {
      forge.addExpandTokens(count);
      toast(`🎒 獲得免費背包擴格券 +${count}！`, '#6aff98');
    },
    onGateCleared: isEndless
      ? (_gateId: number, isBossGate: boolean) => {
          if (gameMode === 'endless') pendingEndlessPerk = { isBossGate };
        }
      : undefined,
  };
}

function startLevel(i: number, isNewRun = false) {
  gameMode = 'campaign';
  run.level = i;
  if (i + 1 > records.bestStage) {
    records.bestStage = i + 1;
    saveRecords();
  }
  mine?.dispose();
  if (isNewRun) {
    const startLv = run.mods.resonanceStartLv;
    resonance = { earth: startLv, thunder: startLv, poison: startLv, fire: startLv, ice: startLv };
    cumGauge = { earth: 0, thunder: 0, poison: 0, fire: 0, ice: 0 };
  }
  pendingEndlessPerk = null;
  resetOverdriveState();

  mine = new Mine(levelDef(i), run.mods, resonance, wireMineCallbacks(false));
  forge.onStageStart(i);
  forge.enabled = true;
  $('level-name').textContent = LEVELS[i].name;
  $('boss-bar').hidden = !mine.boss;
  $('gate-row').hidden = true;
  $('lava-heat').style.opacity = '0';
  state = 'play';
  hudT = 0;
  renderReso();
}

function startEndless() {
  gameMode = 'endless';
  run.level = 0;
  mine?.dispose();
  const startLv = run.mods.resonanceStartLv;
  resonance = { earth: startLv, thunder: startLv, poison: startLv, fire: startLv, ice: startLv };
  cumGauge = { earth: 0, thunder: 0, poison: 0, fire: 0, ice: 0 };
  pendingEndlessPerk = null;
  resetOverdriveState();

  mine = new Mine(ENDLESS_LEVEL, run.mods, resonance, wireMineCallbacks(true));
  forge.onStageStart(0);
  forge.enabled = true;
  $('level-name').textContent = ENDLESS_LEVEL.name;
  $('boss-bar').hidden = true;
  $('gate-row').hidden = true;
  $('lava-heat').style.opacity = '0';
  state = 'play';
  hudT = 0;
  renderReso();
}

function triggerOverdrive() {
  if (overdriveTimer > 0) return;
  overdriveDuration = currentOverdriveDuration();
  overdriveTimer = overdriveDuration;
  overdriveCooldown = BAL.overdriveCooldownSec;
  const dmgMul = currentOverdriveDmgMul();
  mine?.setOverdrive(true, dmgMul);
  forge.overdriveActive = true;
  forge.fireAllBagWeapons('🔥全彈超載');
  hudT = 0;
  toast(
    `🔥 全彈超載齊射（${overdriveDuration.toFixed(1)}s）：全武器傷害 +${Math.round((dmgMul - 1) * 100)}%・鍛造與大招狂暴加速！`,
    '#ffa844',
  );
}

function addResonanceXp(el: Element, amount: number) {
  if (amount <= 0) return;
  const cumReq = run.mods.cumThreshold;
  cumGauge[el] += amount;
  while (cumGauge[el] >= cumReq) {
    cumGauge[el] -= cumReq;
    const prevLv = resonance[el];
    resonance[el] = gameMode === 'endless'
      ? resonance[el] + 1
      : Math.min(BAL.resonanceMaxLv, resonance[el] + 1);
    const effLv = Math.min(BAL.resonanceMaxLv, resonance[el]);
    const lvLabel = resonance[el] > BAL.resonanceMaxLv
      ? `專精 +${Math.round((resonance[el] - BAL.resonanceMaxLv) * BAL.endlessResoExtraBonus * 100)}%`
      : resonance[el] > prevLv ? `共鳴 Lv${resonance[el]}` : '共鳴滿載';
    const map = ELEMENT_WEAPONS[el];
    acquire(map.cum, 1 + effLv * 0.08, lvLabel);
    if (prevLv < BAL.resonanceMaxLv && resonance[el] >= BAL.resonanceMaxLv) {
      const idx = ELEMENTS.indexOf(el);
      toast(`🎉 ${ELEMENT_INFO[el].name}共鳴滿級 Lv5！解鎖同名武器多把並存！`, ELEMENT_INFO[el].css, spriteUrl('tile', idx));
    }
  }
  renderReso();
}

function acquire(id: WeaponId, power: number, note = '', forceSpawn = false, meta: WeaponSpawnMeta = {}) {
  if (!mine || !WEAPONS[id]) return;
  const res = mine.acquireWeapon(id, power, forceSpawn, meta);
  const def = WEAPONS[id];
  const elMeta = weaponElementMeta(def.element);
  if (res.mode === 'spawned') {
    run.weaponsMade++;
    const starPrefix = meta.star && meta.star > 1 ? `${'★'.repeat(meta.star)} ` : '';
    const badge = starPrefix || (def.category === 'leg' || def.category === 'holy' ? '✦ '
      : def.category === 't2' || def.category === 'cum' ? '★ ' : '');
    toast(
      `${badge}${def.name}${power > 1.01 ? ` ×${power.toFixed(2)}` : ''}${note ? `（${note}）` : ''}`,
      elMeta.css,
      spriteUrl('weapon', id),
    );
  } else {
    toast(
      `${def.name} 強化 +${Math.round((res.weapon.dupMul - 1) * 100)}% 並回復 ${Math.round(BAL.dupHealPct * 100)}%HP！`,
      elMeta.css,
      spriteUrl('weapon', id),
    );
  }
}

function onLevelEnd(win: boolean, reason: string) {
  state = 'ending';
  forge.enabled = false;
  pendingEndlessPerk = null;
  if (gameMode === 'campaign') {
    records.bestStage = Math.max(records.bestStage, run.level + (win ? 2 : 1));
    if (records.bestStage > LEVELS.length) records.bestStage = LEVELS.length;
    if (win && run.level >= LEVELS.length - 1) records.campaignCleared = true;
    saveRecords();
  } else if (mine) {
    records.bestEndlessDepth = Math.max(records.bestEndlessDepth, mine.depthRows);
    saveRecords();
  }
  setTimeout(() => {
    if (gameMode === 'campaign' && win && run.level < LEVELS.length - 1) showCampaignPerks(reason);
    else showResult(win, reason);
  }, 1500);
}

// ------------------------------------------------------------------ dialogs
function guardDialog(d: HTMLDialogElement) {
  d.addEventListener('cancel', (e) => e.preventDefault());
}

const dlgTitle = $<HTMLDialogElement>('dlg-title');
const dlgPerk = $<HTMLDialogElement>('dlg-perk');
const dlgResult = $<HTMLDialogElement>('dlg-result');
const dlgWiki = $<HTMLDialogElement>('dlg-wiki');
[dlgTitle, dlgPerk, dlgResult].forEach(guardDialog);

dlgTitle.addEventListener('close', () => {
  const mode = dlgTitle.returnValue === 'endless' ? 'endless' : 'campaign';
  dlgTitle.returnValue = '';
  startRun(mode);
});

function populatePerkButtons(includeCampaignOnly: boolean) {
  const form = $('perk-form');
  const pool = PERKS.filter((p) => {
    if (!includeCampaignOnly && p.campaignOnly) return false;
    return run.perks.filter((x) => x === p.id).length < (p.max ?? 99);
  });
  const picks = pool.sort(() => Math.random() - 0.5).slice(0, 3);
  form.replaceChildren(
    ...picks.map((p, i) => {
      const b = document.createElement('button');
      b.className = 'perk';
      b.value = p.id;
      if (i === 0) b.autofocus = true;
      b.innerHTML = `<span class="ico" aria-hidden="true">${p.icon}</span><b>${p.name}</b><span>${p.desc}</span>`;
      return b;
    }),
  );
}

function showCampaignPerks(reason: string) {
  perkSource = 'campaign';
  state = 'perk';
  $('perk-h').textContent = '過關！選擇一項強化';
  $('perk-sub').textContent = `${reason} 下一關：${LEVELS[run.level + 1].name}（背包與金幣完整繼承！）`;
  populatePerkButtons(true);
  dlgPerk.showModal();
}

function showEndlessPerks(isBossGate: boolean) {
  if (!mine) return;
  perkSource = 'endless';
  state = 'perk';
  forge.enabled = false;
  $('perk-h').textContent = isBossGate ? '🔓 首領結界破除！選擇深淵強化' : '🔓 守層結界破除！選擇深淵強化';
  $('perk-sub').textContent = `目前已突破 ${mine.gatesCleared} 道結界（深潛 ${mine.depthRows}m）— 選擇 1 項強化繼續下潛！`;
  populatePerkButtons(false);
  dlgPerk.showModal();
}

dlgPerk.addEventListener('close', () => {
  const id = dlgPerk.returnValue;
  dlgPerk.returnValue = '';
  const perk = PERKS.find((p) => p.id === id);
  if (!perk) { dlgPerk.showModal(); return; }
  perk.apply(run.mods);
  run.perks.push(perk.id);

  if (run.mods.pendingGoldBonus > 0) {
    forge.addGold(run.mods.pendingGoldBonus);
    run.totalGold += run.mods.pendingGoldBonus;
    run.mods.pendingGoldBonus = 0;
  }
  if (run.mods.pendingExpandTokens > 0) {
    forge.addExpandTokens(run.mods.pendingExpandTokens);
    run.mods.pendingExpandTokens = 0;
  }
  if (perk.id === 'reso') {
    ELEMENTS.forEach((el) => {
      resonance[el] = gameMode === 'endless'
        ? resonance[el] + 1
        : Math.min(BAL.resonanceMaxLv, resonance[el] + 1);
    });
    renderReso();
  }
  forge.setMods(run.mods);

  if (perkSource === 'endless') {
    if (perk.id === 'stamina_spd' && overdriveTimer > 0) {
      mine?.setOverdrive(true, currentOverdriveDmgMul());
    }
    state = 'play';
    forge.enabled = true;
    hudT = 0;
  } else {
    startLevel(run.level + 1, false);
  }
});

function showResult(win: boolean, reason: string) {
  state = 'result';
  const res = Object.entries(run.resources).map(([k, v]) => `${ORE_ICON[k] ?? ''}${v}`).join('  ') || '—';
  const perks = run.perks.map((id) => PERKS.find((p) => p.id === id)?.name ?? id).join('、') || '—';
  if (gameMode === 'endless') {
    const depth = mine ? mine.depthRows : 0;
    records.bestEndlessDepth = Math.max(records.bestEndlessDepth, depth);
    saveRecords();
    $('result-h').textContent = `♾️ 無盡深淵結算：${depth}m`;
    $('result-reason').textContent = reason;
    $('result-stats').innerHTML = `
      <span>下潛深度</span><b>${depth}m（最佳紀錄 ${records.bestEndlessDepth}m）</b>
      <span>突破結界</span><b>${mine ? mine.gatesCleared : 0} 道</b>
      <span>討伐怪物</span><b>${mine ? mine.kills : 0} 隻</b>
      <span>鍛造投射</span><b>${run.weaponsMade} 把</b>
      <span>累積金幣</span><b>💰 ${run.totalGold}G</b>
      <span>收集資源</span><b>${res}</b>
      <span>本輪強化</span><b>${perks}</b>`;
  } else {
    $('result-h').textContent = win ? '🏆 10 關制霸完成！' : '💀 冒險失敗';
    $('result-reason').textContent = reason;
    $('result-stats').innerHTML = `
      <span>到達關卡</span><b>${LEVELS[run.level].name}</b>
      <span>本關深度</span><b>${mine ? mine.depthRows : 0} / ${LEVELS[run.level].depth}m</b>
      <span>討伐怪物</span><b>${mine ? mine.kills : 0} 隻</b>
      <span>鍛造投射</span><b>${run.weaponsMade} 把</b>
      <span>累積金幣</span><b>💰 ${run.totalGold}G</b>
      <span>收集資源</span><b>${res}</b>
      <span>本輪強化</span><b>${perks}</b>`;
  }
  dlgResult.showModal();
}

dlgResult.addEventListener('close', () => {
  const action = dlgResult.returnValue;
  dlgResult.returnValue = '';
  if (action === 'title') {
    state = 'title';
    forge.enabled = false;
    renderBestRecords();
    dlgTitle.showModal();
  } else {
    startRun(gameMode);
  }
});

let stateBeforeWiki: State = 'play';
function openWiki() {
  if (dlgWiki.open) return;
  stateBeforeWiki = state;
  if (state === 'play') {
    state = 'paused';
    forge.enabled = false;
  }
  dlgWiki.showModal();
}
$('help-btn').addEventListener('click', openWiki);
$('title-wiki-btn').addEventListener('click', openWiki);

dlgWiki.addEventListener('close', () => {
  dlgWiki.returnValue = '';
  if (state === 'paused') {
    state = stateBeforeWiki;
    if (state === 'play') forge.enabled = true;
  }
});
// light-dismiss fallback where `closedby` is unsupported
if (!('closedBy' in HTMLDialogElement.prototype)) {
  const outside = (e: PointerEvent, d: HTMLDialogElement) => {
    const r = d.getBoundingClientRect();
    return e.clientX < r.left || e.clientX > r.right || e.clientY < r.top || e.clientY > r.bottom;
  };
  let pressedOutside = false;
  dlgWiki.addEventListener('pointerdown', (e) => { pressedOutside = outside(e, dlgWiki); });
  dlgWiki.addEventListener('pointerup', (e) => { if (pressedOutside && outside(e, dlgWiki)) dlgWiki.close(); });
}

// ------------------------------------------------------------------ HUD
function updateOverdriveTimers(dt: number) {
  if (overdriveTimer > 0) {
    overdriveTimer -= dt;
    if (overdriveTimer <= 0) {
      overdriveTimer = 0;
      mine?.setOverdrive(false, 1);
      forge.overdriveActive = false;
      hudT = 0;
    }
  } else if (overdriveCooldown > 0) {
    overdriveCooldown = Math.max(0, overdriveCooldown - dt);
  }
}

function renderReso() {
  const req = run.mods.cumThreshold;
  $('reso').replaceChildren(
    ...ELEMENTS.map((el, i) => {
      const lv = resonance[el];
      const g = cumGauge[el];
      const maxed = lv >= BAL.resonanceMaxLv;
      const lvText = lv > BAL.resonanceMaxLv ? `滿+${lv - BAL.resonanceMaxLv}` : maxed ? '滿級' : `Lv${lv}`;
      const li = document.createElement('li');
      li.className = `reso-chip${maxed ? ' maxed' : ''}`;
      li.style.color = ELEMENT_INFO[el].css;
      li.innerHTML = `
        <img src="${spriteUrl('tile', i)}" alt="${ELEMENT_INFO[el].name}">
        <span class="lv"><b>${lvText}</b><em>${g}/${req}</em></span>
        <span class="bar"><i style="width:${(g / req) * 100}%"></i></span>`;
      return li;
    }),
  );
}

function toast(text: string, color: string, icon?: string) {
  const el = document.createElement('div');
  el.className = 'toast';
  el.style.color = color;
  if (icon) {
    const img = document.createElement('img');
    img.src = icon;
    img.alt = '';
    el.appendChild(img);
  }
  el.appendChild(document.createTextNode(text));
  const box = $('toasts');
  box.appendChild(el);
  while (box.children.length > 5) box.firstElementChild!.remove();
  setTimeout(() => el.remove(), 2300);
}

const cardEls = new Map<number, HTMLLIElement>();
let hudT = 0;
function updateHud(dt: number) {
  hudT -= dt;
  if (hudT > 0 || !mine) return;
  hudT = 0.08;

  if (mine.isEndless && mine.depthRows > records.bestEndlessDepth) {
    records.bestEndlessDepth = mine.depthRows;
    saveRecords();
  }

  // Overdrive button HUD
  const odBtn = $<HTMLButtonElement>('od-btn');
  const isOd = overdriveTimer > 0;
  odBtn.classList.toggle('active', isOd);
  if (isOd) {
    odBtn.disabled = true;
    odBtn.textContent = `🔥 超載中 ${overdriveTimer.toFixed(1)}s`;
  } else if (overdriveCooldown > 0) {
    odBtn.disabled = true;
    odBtn.textContent = `⏳ 超載冷卻 ${Math.ceil(overdriveCooldown)}s`;
  } else {
    const bonusPct = Math.round((currentOverdriveDmgMul() - 1) * 100);
    odBtn.disabled = state !== 'play';
    odBtn.textContent = `🔥 全彈超載 (+${bonusPct}%)`;
  }

  // Topbar & depth
  const timer = $('timer');
  if (mine.isEndless) {
    timer.textContent = `♾️ ${mine.depthRows}m`;
    timer.classList.remove('low');
    $('depth-fill').style.width = `${mine.progress * 100}%`;
    $('depth-text').textContent = `${mine.depthRows}m（結界 ${mine.nextEndlessGateDepth}m）`;
  } else {
    const t = Math.max(0, mine.timeLeft);
    timer.textContent = `${Math.floor(t / 60)}:${String(Math.floor(t % 60)).padStart(2, '0')}`;
    timer.classList.toggle('low', t <= 30);
    $('depth-fill').style.width = `${mine.progress * 100}%`;
    $('depth-text').textContent = `${mine.depthRows} / ${mine.level.depth}m`;
  }

  // Gatekeeper Seal Chamber status
  const gInfo = mine.activeGateInfo();
  const gateRow = $('gate-row');
  gateRow.hidden = !gInfo;
  if (gInfo) {
    $('gate-text').textContent = gInfo.isBoss
      ? `🔒 首領結界（${gInfo.depthM}m）：擊敗首領破除`
      : `🔒 守層結界（${gInfo.depthM}m）：剩餘 ${gInfo.remaining} 隻守衛`;
  }

  // Lava warning
  const gap = mine.lavaGap;
  const lava = $('lava-text');
  if (mine.time < BAL.lavaGrace) {
    lava.textContent = `${Math.ceil(BAL.lavaGrace - mine.time)} 秒後開始下降`;
    lava.className = 'meter-text lava';
  } else if (gap <= 0) {
    lava.textContent = '🔥 已淹至最深處！保護武器往下衝！';
    lava.className = 'meter-text lava danger';
  } else if (gap < 6) {
    lava.textContent = `⚠️ 岩漿逼近 ${gap.toFixed(1)} 格！`;
    lava.className = 'meter-text lava danger';
  } else if (gap < BAL.lavaWarnGap) {
    lava.textContent = `🔥 距離最深點 ${gap.toFixed(1)} 格`;
    lava.className = 'meter-text lava warn';
  } else {
    lava.textContent = `距離最深點 ${gap.toFixed(1)} 格`;
    lava.className = 'meter-text lava';
  }
  $('lava-heat').style.opacity = (mine.lavaHeat * 0.9).toFixed(2);

  // Shield & Boss bar
  $('shield').hidden = !(mine.time < mine.shieldUntil);
  const rawBoss = mine.boss && !mine.boss.dead ? mine.boss : null;
  const showBoss = Boolean(
    rawBoss && (
      rawBoss.hp < rawBoss.maxHp ||
      rawBoss.y - mine.deepestY <= 20 * mine.B ||
      Math.abs(rawBoss.y - mine.cameraCenterY) <= 14 * mine.B
    ),
  );
  $('boss-bar').hidden = !showBoss;
  if (rawBoss && showBoss) {
    $('boss-name').textContent = rawBoss.kind === 'spider_queen' ? '蛛后' : rawBoss.kind === 'balrog' ? '炎魔' : '巨像';
    $('boss-fill').style.width = `${Math.max(0, rawBoss.hp / rawBoss.maxHp) * 100}%`;
    const bShield = $('boss-shield');
    bShield.hidden = !rawBoss.shielded;
    if (rawBoss.shielded) {
      bShield.textContent = rawBoss.kind === 'golem'
        ? '🛡 護殼(⚡💥✨破)'
        : rawBoss.kind === 'spider_queen'
          ? '🛡 毒繭(🔥☠破)'
          : '🛡 神盾(❄✨破)';
    }
  }

  $('res').innerHTML = Object.entries(run.resources).map(([k, v]) => `<span>${ORE_ICON[k] ?? ''}${v}</span>`).join('');

  // Camera reset button
  const camBtn = $('cam-reset-btn');
  const camMode = mine.cameraMode;
  camBtn.hidden = camMode === 'auto';
  if (camMode === 'locked') {
    const lw = mine.weapons.find((w) => w.uid === mine!.lockedWeaponUid);
    camBtn.textContent = lw ? `🎯 鎖定：${lw.def.name}（點此回最深）` : '🎯 回到自動跟隨';
  } else if (camMode === 'manual') {
    camBtn.textContent = '🎯 回到自動跟隨';
  }

  // Weapon cards (clickable lock-on buttons)
  const list = $('weapon-cards');
  const alive = new Set<number>();
  for (const w of mine.weapons) {
    alive.add(w.uid);
    let li = cardEls.get(w.uid);
    const meta = weaponElementMeta(w.def.element);
    if (!li) {
      li = document.createElement('li');
      li.className = 'card';
      const btn = document.createElement('button');
      btn.type = 'button';
      btn.className = 'card-btn';
      btn.style.color = meta.css;
      btn.setAttribute('aria-label', `鎖定鏡頭跟隨 ${w.def.name}`);
      btn.setAttribute('aria-pressed', 'false');
      btn.innerHTML = `<span class="lock-ico" aria-hidden="true"></span><img src="${spriteUrl('weapon', w.def.id)}" alt=""><span class="dup"></span><span class="hp"><i></i></span><span class="ult"><i></i></span>`;
      btn.addEventListener('click', () => {
        mine?.toggleLockWeapon(w.uid);
        hudT = 0;
      });
      li.appendChild(btn);
      cardEls.set(w.uid, li);
      list.appendChild(li);
    }
    const btn = li.firstElementChild as HTMLButtonElement;
    const isLocked = mine.cameraMode === 'locked' && mine.lockedWeaponUid === w.uid;
    btn.setAttribute('aria-pressed', isLocked ? 'true' : 'false');
    (btn.querySelector('.lock-ico') as HTMLElement).textContent = isLocked ? '🎯' : '';
    const dupEl = btn.querySelector('.dup') as HTMLElement;
    dupEl.textContent = w.star > 1 ? `${'★'.repeat(w.star)}` : w.dupStacks > 0 ? `+${w.dupStacks}` : '';
    const [hp, ult] = btn.querySelectorAll('i');
    const f = Math.max(0, w.hp / w.maxHp);
    (hp as HTMLElement).style.width = `${f * 100}%`;
    (hp as HTMLElement).style.background = w.def.lifespanDecay
      ? (f > 0.35 ? '#ffe066' : '#ff7040')
      : (f > 0.5 ? '#5aff6a' : f > 0.25 ? '#ffd040' : '#ff4040');
    const ultWrap = btn.querySelector('.ult') as HTMLElement;
    ultWrap.hidden = !w.def.ult;
    if (w.def.ult) (ult as HTMLElement).style.width = `${w.ultReady * 100}%`;
    btn.classList.toggle('ready', !!w.def.ult && w.ultReady >= 1);
  }
  for (const [id, li] of cardEls) if (!alive.has(id)) { li.remove(); cardEls.delete(id); }
}

// ------------------------------------------------------------------ loop
let last = performance.now();
function frame(now: number) {
  const dt = Math.min(0.05, (now - last) / 1000);
  last = now;
  if (state === 'play') {
    updateOverdriveTimers(dt);
    forge.update(dt);
    mine?.update(dt);
    if (pendingEndlessPerk && state === 'play') {
      const p = pendingEndlessPerk;
      pendingEndlessPerk = null;
      showEndlessPerks(p.isBossGate);
    }
  } else if (state === 'ending') {
    mine?.update(dt);
  } else {
    mine?.updateView(dt);
  }
  updateHud(dt);
  if (mine) mineRenderer.render(mine);
  requestAnimationFrame(frame);
}

// ------------------------------------------------------------------ boot
initWiki(dlgWiki);
renderBestRecords();
renderReso();
// show an idle preview mine behind the title screen
mine = new Mine(LEVELS[0], run.mods, resonance, { onEnd: () => {}, onResource: () => {} });
$('level-name').textContent = 'Falling Weapons';
dlgTitle.showModal();
requestAnimationFrame(frame);

// debug helpers (dev console)
Object.assign(window, {
  fw: {
    get forge() { return forge; },
    get mine() { return mine; },
    spawn: (id: WeaponId, power = 1, force = false, meta: WeaponSpawnMeta = {}) => acquire(id, power, 'debug', force, meta),
    all25: () => WEAPON_LIST.forEach((w, idx) => setTimeout(() => acquire(w.id, 1, 'debug', true), idx * 120)),
    overdrive: () => { overdriveCooldown = 0; triggerOverdrive(); },
    endOverdrive: () => { if (overdriveTimer > 0) overdriveTimer = 0.01; },
    addGold: (n: number) => { forge.addGold(n); run.totalGold += n; },
    addTokens: (n: number) => forge.addExpandTokens(n),
    get overdriveTimer() { return overdriveTimer; },
    setLava: (gapBlocks: number) => {
      if (!mine) return;
      mine.time = Math.max(mine.time, BAL.lavaGrace + 1);
      mine.lavaY = mine.deepestY - gapBlocks * mine.B;
    },
    maxReso: (el?: Element) => {
      if (el) resonance[el] = BAL.resonanceMaxLv;
      else ELEMENTS.forEach((k) => { resonance[k] = BAL.resonanceMaxLv; });
      renderReso();
    },
    win: () => mine && onLevelEnd(true, '（debug）'),
    level: (i: number) => startLevel(i, false),
    startEndless: () => startRun('endless'),
  },
});
