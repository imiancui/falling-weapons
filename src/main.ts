import './style.css';
import {
  BAL, ELEMENTS, ELEMENT_INFO, HEART, HOLY_INFO, LEVELS, ORE_ICON, PERKS,
  defaultMods, weaponElementMeta, type Element, type Mods,
} from './data/config';
import { ELEMENT_WEAPONS, WEAPONS, WEAPON_LIST, type WeaponId } from './data/weapons';
import { spriteUrl } from './gfx/pixel';
import { Match3 } from './match3/board';
import { Mine } from './mine/world';
import { MineRenderer } from './mine/renderer';
import { initWiki } from './ui/wiki';

const $ = <T extends HTMLElement = HTMLElement>(id: string) => document.getElementById(id) as T;
const UNLIMITED_STAMINA = new URLSearchParams(location.search).has('nostamina');

// ------------------------------------------------------------------ state
type State = 'title' | 'play' | 'ending' | 'perk' | 'result' | 'paused';
let state: State = 'title';
const run = {
  level: 0,
  mods: defaultMods() as Mods,
  perks: [] as string[],
  resources: {} as Record<string, number>,
  weaponsMade: 0,
};
let resonance: Record<Element, number> = { earth: 0, thunder: 0, poison: 0, fire: 0, ice: 0 };
let cumGauge: Record<Element, number> = { earth: 0, thunder: 0, poison: 0, fire: 0, ice: 0 };
let stamina: number = BAL.staminaMax;
let focusBonus = 0; // 0 .. BAL.focusMax (0.25)
let activeMoveFocusMul = 1; // captured when a valid swap starts
let noStaminaWarnT = 0;
let mine: Mine | null = null;

function maxStamina(): number {
  return BAL.staminaMax + run.mods.staminaMaxBonus;
}
function staminaRegenSec(): number {
  return BAL.staminaRegenSec / run.mods.staminaRegenMul;
}

const mineRenderer = new MineRenderer($('mine-pane'));
const board = new Match3($('board-pane'), {
  canSwap: () => UNLIMITED_STAMINA || stamina >= 1 - 1e-6,
  onNoStamina: () => {
    noStaminaWarnT = 0.45;
    const rem = Math.max(0.1, (1 - stamina) * staminaRegenSec());
    toast(`行動力不足（${rem.toFixed(1)} 秒後回復 1 格）`, '#c898ff');
  },
  onValidSwap: () => {
    activeMoveFocusMul = 1 + focusBonus;
    focusBonus = 0;
    if (!UNLIMITED_STAMINA) stamina = Math.max(0, stamina - 1);
  },
  onStep: (counts) => renderCombo(counts),
  onMoveEnd: (counts) => onMoveEnd(counts),
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
/** `?depth=N` overrides level depth (testing). */
function levelDef(i: number) {
  const d = Number(new URLSearchParams(location.search).get('depth'));
  return d > 0 ? { ...LEVELS[i], depth: d, caves: Math.max(1, Math.round(d / 10)), hardBands: Math.max(1, Math.round(d / 25)) } : LEVELS[i];
}

function startRun() {
  run.level = 0;
  run.mods = defaultMods();
  run.perks = [];
  run.resources = {};
  run.weaponsMade = 0;
  startLevel(0);
}

function startLevel(i: number) {
  run.level = i;
  mine?.dispose();
  const startLv = run.mods.resonanceStartLv;
  resonance = { earth: startLv, thunder: startLv, poison: startLv, fire: startLv, ice: startLv };
  cumGauge = { earth: 0, thunder: 0, poison: 0, fire: 0, ice: 0 };
  stamina = maxStamina();
  focusBonus = 0;
  activeMoveFocusMul = 1;
  renderStaminaTicks();

  mine = new Mine(levelDef(i), run.mods, resonance, {
    onEnd: (win, reason) => onLevelEnd(win, reason),
    onResource: (ore) => { run.resources[ore] = (run.resources[ore] ?? 0) + 1; },
  });
  board.reset();
  board.enabled = true;
  board.setStaminaReady(true);
  $('level-name').textContent = LEVELS[i].name;
  $('boss-bar').hidden = LEVELS[i].goal !== 'boss';
  $('lava-heat').style.opacity = '0';
  $('combo').replaceChildren();
  state = 'play';
  if (BAL.starterWeapon) {
    const el = ELEMENTS[Math.floor(Math.random() * ELEMENTS.length)];
    acquire(ELEMENT_WEAPONS[el].t1, 1, '開局贈送');
  }
  renderReso();
}

function acquire(id: WeaponId, power: number, note = '', forceSpawn = false) {
  if (!mine) return;
  const res = mine.acquireWeapon(id, power, forceSpawn);
  const def = WEAPONS[id];
  const meta = weaponElementMeta(def.element);
  if (res.mode === 'spawned') {
    run.weaponsMade++;
    const badge = def.category === 'leg' || def.category === 'holy' ? '✦ '
      : def.category === 't2' || def.category === 'cum' ? '★ ' : '';
    toast(
      `${badge}${def.name}${power > 1.01 ? ` ×${power.toFixed(2)}` : ''}${note ? `（${note}）` : ''}`,
      meta.css,
      spriteUrl('weapon', id),
    );
  } else {
    toast(
      `${def.name} 強化 +${Math.round((res.weapon.dupMul - 1) * 100)}% 並回復 ${Math.round(BAL.dupHealPct * 100)}%HP！`,
      meta.css,
      spriteUrl('weapon', id),
    );
  }
}

function onMoveEnd(counts: number[]) {
  if (state !== 'play' || !mine) return;
  const t2 = run.mods.t2Threshold;
  const t3 = run.mods.t3Threshold;
  const cumReq = run.mods.cumThreshold;
  const totalAll = counts.reduce((s, x) => s + x, 0);
  const fMul = activeMoveFocusMul;
  const focusNote = fMul >= 1.03 ? `專注 +${Math.round((fMul - 1) * 100)}%` : '';
  activeMoveFocusMul = 1;

  ELEMENTS.forEach((el, i) => {
    const n = counts[i];
    if (n <= 0) return;
    const map = ELEMENT_WEAPONS[el];

    // 1. Single-move weapon thresholds (3 / 4~5 / 6~8 / 9+), multiplied by Focus Bonus!
    if (n >= t3) {
      if (map.leg) {
        acquire(map.leg, (1 + BAL.powerPerExtra * (n - t3)) * fMul, focusNote);
      } else {
        acquire(map.t2, (1.35 + BAL.powerPerExtra * (n - t3)) * fMul, focusNote || '超強化');
      }
    } else if (n >= t2) {
      acquire(map.t2, (1 + BAL.powerPerExtra * (n - t2)) * fMul, focusNote);
    } else if (n >= BAL.t1Threshold) {
      acquire(map.t1, (1 + BAL.powerPerExtra * (n - BAL.t1Threshold)) * fMul, focusNote);
    } else if (n >= BAL.t0Threshold) {
      acquire(map.low, 1 * fMul, focusNote);
    }

    // 2. Merged Cumulative + Resonance gauge (every tile counts!)
    cumGauge[el] += n;
    while (cumGauge[el] >= cumReq) {
      cumGauge[el] -= cumReq;
      const prevLv = resonance[el];
      resonance[el] = Math.min(BAL.resonanceMaxLv, resonance[el] + 1);
      acquire(
        map.cum,
        (1 + resonance[el] * 0.08) * fMul,
        resonance[el] > prevLv ? `共鳴 Lv${resonance[el]}` : '累計達成',
      );
      if (prevLv < BAL.resonanceMaxLv && resonance[el] === BAL.resonanceMaxLv) {
        toast(`🎉 ${ELEMENT_INFO[el].name}共鳴滿級 Lv5！解鎖同名武器多把並存！`, ELEMENT_INFO[el].css, spriteUrl('tile', i));
      }
    }
  });

  // 3. Holy Sword: total tiles cleared across all colours (incl. hearts) >= 20 in one move
  if (totalAll >= BAL.holyTotalThreshold) {
    acquire('excalibur', (1 + BAL.powerPerExtra * (totalAll - BAL.holyTotalThreshold)) * fMul, `總消 ${totalAll}`);
  }

  // 4. Hearts: heal all active weapons (+ 3s shield at 7+)
  const hearts = counts[HEART];
  if (hearts > 0) {
    mine.healAll(BAL.heartHealPct * hearts * run.mods.healMul);
    if (hearts >= BAL.heartShieldCount) {
      mine.shield(BAL.heartShieldSec);
      toast(`愛心 ×${hearts}：全體回血 + ${BAL.heartShieldSec} 秒無敵！`, '#ff8ab8', spriteUrl('tile', HEART));
    } else if (mine.weapons.length) {
      toast(`愛心 ×${hearts}：全體回血`, '#ff8ab8', spriteUrl('tile', HEART));
    }
  }

  renderReso();
  setTimeout(() => { if (!board.busy) $('combo').replaceChildren(); }, 900);
}

function onLevelEnd(win: boolean, reason: string) {
  state = 'ending';
  board.enabled = false;
  setTimeout(() => {
    if (win && run.level < LEVELS.length - 1) showPerks(reason);
    else showResult(win, reason);
  }, 1600);
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
  dlgTitle.returnValue = '';
  startRun();
});

function showPerks(reason: string) {
  state = 'perk';
  $('perk-sub').textContent = `${reason} 下一關：${LEVELS[run.level + 1].name}`;
  const form = $('perk-form');
  const pool = PERKS.filter((p) => run.perks.filter((x) => x === p.id).length < (p.max ?? 99));
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
  dlgPerk.showModal();
}
dlgPerk.addEventListener('close', () => {
  const id = dlgPerk.returnValue;
  dlgPerk.returnValue = '';
  const perk = PERKS.find((p) => p.id === id);
  if (!perk) { dlgPerk.showModal(); return; }
  perk.apply(run.mods);
  run.perks.push(perk.id);
  startLevel(run.level + 1);
});

function showResult(win: boolean, reason: string) {
  state = 'result';
  $('result-h').textContent = win ? '🏆 冒險完成！' : '💀 冒險失敗';
  $('result-reason').textContent = reason;
  const res = Object.entries(run.resources).map(([k, v]) => `${ORE_ICON[k] ?? ''}${v}`).join('  ') || '—';
  const perks = run.perks.map((id) => PERKS.find((p) => p.id === id)!.name).join('、') || '—';
  $('result-stats').innerHTML = `
    <span>到達關卡</span><b>${LEVELS[run.level].name}</b>
    <span>本關深度</span><b>${mine ? mine.depthRows : 0} / ${LEVELS[run.level].depth}</b>
    <span>投入武器</span><b>${run.weaponsMade} 把</b>
    <span>收集資源</span><b>${res}</b>
    <span>本輪強化</span><b>${perks}</b>`;
  dlgResult.showModal();
}
dlgResult.addEventListener('close', () => {
  dlgResult.returnValue = '';
  startRun();
});

let stateBeforeWiki: State = 'play';
function openWiki() {
  if (dlgWiki.open) return;
  stateBeforeWiki = state;
  if (state === 'play') {
    state = 'paused';
    board.enabled = false;
  }
  dlgWiki.showModal();
}
$('help-btn').addEventListener('click', openWiki);
$('title-wiki-btn').addEventListener('click', openWiki);

dlgWiki.addEventListener('close', () => {
  dlgWiki.returnValue = '';
  if (state === 'paused') {
    state = stateBeforeWiki;
    if (state === 'play') board.enabled = true;
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
function renderStaminaTicks() {
  const max = maxStamina();
  const prog = $<HTMLProgressElement>('stamina-prog');
  prog.max = max;
  $('stamina-ticks').replaceChildren(...Array.from({ length: max }, () => document.createElement('i')));
}

function updateStamina(dt: number) {
  const max = maxStamina();
  if (stamina < max) {
    stamina = Math.min(max, stamina + dt / staminaRegenSec());
    if (stamina < max) focusBonus = 0;
  } else {
    focusBonus = Math.min(BAL.focusMax, focusBonus + BAL.focusRatePerSec * dt);
  }
  if (noStaminaWarnT > 0) noStaminaWarnT = Math.max(0, noStaminaWarnT - dt);
  board.setStaminaReady(UNLIMITED_STAMINA || stamina >= 1 - 1e-6);
}

function renderReso() {
  const req = run.mods.cumThreshold;
  $('reso').replaceChildren(
    ...ELEMENTS.map((el, i) => {
      const lv = resonance[el];
      const g = cumGauge[el];
      const maxed = lv >= BAL.resonanceMaxLv;
      const li = document.createElement('li');
      li.className = `reso-chip${maxed ? ' maxed' : ''}`;
      li.style.color = ELEMENT_INFO[el].css;
      li.innerHTML = `
        <img src="${spriteUrl('tile', i)}" alt="${ELEMENT_INFO[el].name}">
        <span class="lv"><b>${maxed ? '滿級' : `Lv${lv}`}</b><em>${g}/${req}</em></span>
        <span class="bar"><i style="width:${(g / req) * 100}%"></i></span>`;
      return li;
    }),
  );
}

function renderCombo(counts: number[]) {
  const t2 = run.mods.t2Threshold;
  const t3 = run.mods.t3Threshold;
  const totalAll = counts.reduce((s, x) => s + x, 0);
  const spans = counts.map((n, i) => {
    if (n <= 0) return null;
    const s = document.createElement('span');
    const isHeart = i === HEART;
    s.style.color = isHeart ? '#ff8ab8' : ELEMENT_INFO[ELEMENTS[i]].css;
    s.textContent = `${isHeart ? '♥' : ELEMENT_INFO[ELEMENTS[i]].name} ${n}`;
    if (!isHeart) {
      if (n >= t3) s.className = 't3';
      else if (n >= t2) s.className = 't2';
      else if (n >= BAL.t1Threshold) s.className = 't1';
      else if (n >= BAL.t0Threshold) s.className = 't0';
    }
    return s;
  }).filter((s): s is HTMLSpanElement => !!s);

  if (totalAll >= 12) {
    const tot = document.createElement('span');
    tot.style.color = HOLY_INFO.css;
    tot.className = totalAll >= BAL.holyTotalThreshold ? 't3' : 't1';
    tot.textContent = `✨ 總消 ${totalAll}/${BAL.holyTotalThreshold}`;
    spans.push(tot);
  }
  $('combo').replaceChildren(...spans);
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

  // Stamina & Focus HUD
  const maxS = maxStamina();
  const wholeS = Math.floor(stamina + 1e-6);
  const prog = $<HTMLProgressElement>('stamina-prog');
  prog.value = stamina;
  prog.classList.toggle('full', wholeS >= maxS);
  const lbl = $('stamina-lbl');
  lbl.textContent = `⚡ 行動力 ${wholeS}/${maxS}`;
  lbl.classList.toggle('empty', wholeS < 1);
  $('stamina-row').classList.toggle('warn', noStaminaWarnT > 0);
  const focusEl = $('focus-badge');
  const focusPct = Math.round(focusBonus * 100);
  focusEl.hidden = focusPct < 1;
  if (focusPct >= 1) focusEl.textContent = `✨ 專注 +${focusPct}%`;

  const t = Math.max(0, mine.timeLeft);
  const timer = $('timer');
  timer.textContent = `${Math.floor(t / 60)}:${String(Math.floor(t % 60)).padStart(2, '0')}`;
  timer.classList.toggle('low', t <= 30);
  $('depth-fill').style.width = `${mine.progress * 100}%`;
  $('depth-text').textContent = `${mine.depthRows} / ${mine.level.depth}`;

  const gap = mine.lavaGap;
  const lava = $('lava-text');
  if (mine.time < BAL.lavaGrace) {
    lava.textContent = `${Math.ceil(BAL.lavaGrace - mine.time)} 秒後開始下降`;
    lava.className = 'meter-text lava';
  } else if (gap <= 0) {
    lava.textContent = `🔥 已淹至最深處！保護武器往下衝！`;
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

  $('shield').hidden = !(mine.time < mine.shieldUntil);
  if (mine.boss) $('boss-fill').style.width = `${Math.max(0, mine.boss.hp / mine.boss.maxHp) * 100}%`;
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
        hudT = 0; // immediate UI refresh
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
    dupEl.textContent = w.dupStacks > 0 ? `+${w.dupStacks}` : '';
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

// board HUD reserves space at the top for resonance + stamina + combo line
function layoutBoardPadding() {
  const hud = document.querySelector('.board-hud') as HTMLElement;
  board.setPadding(hud.offsetHeight + 4, 44);
}
new ResizeObserver(layoutBoardPadding).observe(document.querySelector('.board-hud')!);

// ------------------------------------------------------------------ loop
let last = performance.now();
function frame(now: number) {
  const dt = Math.min(0.05, (now - last) / 1000);
  last = now;
  if (state === 'play') {
    updateStamina(dt);
    board.update(dt);
    mine?.update(dt);
  } else if (state === 'ending') {
    board.update(dt);
    mine?.update(dt);
  } else mine?.updateView(dt);
  updateHud(dt);
  board.render();
  if (mine) mineRenderer.render(mine);
  requestAnimationFrame(frame);
}

// ------------------------------------------------------------------ boot
initWiki(dlgWiki);
renderStaminaTicks();
renderReso();
layoutBoardPadding();
// show an idle preview mine behind the title screen
mine = new Mine(LEVELS[0], run.mods, resonance, { onEnd: () => {}, onResource: () => {} });
$('level-name').textContent = 'Falling Weapons';
dlgTitle.showModal();
requestAnimationFrame(frame);

// debug helpers (dev console)
Object.assign(window, {
  fw: {
    spawn: (id: WeaponId, power = 1, force = false) => acquire(id, power, 'debug', force),
    all25: () => WEAPON_LIST.forEach((w, idx) => setTimeout(() => acquire(w.id, 1, 'debug', true), idx * 120)),
    fillStamina: () => { stamina = maxStamina(); },
    setStamina: (v: number) => { stamina = Math.max(0, Math.min(maxStamina(), v)); },
    setFocus: (v: number) => { focusBonus = Math.max(0, Math.min(BAL.focusMax, v)); },
    get stamina() { return stamina; },
    get focus() { return focusBonus; },
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
    get mine() { return mine; },
    win: () => mine && onLevelEnd(true, '（debug）'),
    level: (i: number) => startLevel(i),
  },
});
