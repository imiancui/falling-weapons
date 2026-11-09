import './style.css';
import { BAL, ELEMENTS, ELEMENT_INFO, HEART, LEVELS, ORE_ICON, PERKS, defaultMods, type Element, type Mods } from './data/config';
import { WEAPONS, WEAPON_BY_ELEMENT, type WeaponId } from './data/weapons';
import { spriteUrl } from './gfx/pixel';
import { Match3 } from './match3/board';
import { Mine } from './mine/world';
import { MineRenderer } from './mine/renderer';

const $ = <T extends HTMLElement = HTMLElement>(id: string) => document.getElementById(id) as T;

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
let mine: Mine | null = null;

const mineRenderer = new MineRenderer($('mine-pane'));
const board = new Match3($('board-pane'), {
  onStep: (counts) => renderCombo(counts),
  onMoveEnd: (counts) => onMoveEnd(counts),
});

// ------------------------------------------------------------------ flow
/** `?depth=N` overrides level depth (testing). */
function levelDef(i: number) {
  const d = Number(new URLSearchParams(location.search).get('depth'));
  return d > 0 ? { ...LEVELS[i], depth: d, caves: Math.max(1, Math.round(d / 10)) } : LEVELS[i];
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
  const start = run.mods.resonanceStart;
  resonance = { earth: start, thunder: start, poison: start, fire: start, ice: start };
  mine = new Mine(levelDef(i), run.mods, resonance, {
    onEnd: (win, reason) => onLevelEnd(win, reason),
    onResource: (ore) => { run.resources[ore] = (run.resources[ore] ?? 0) + 1; },
  });
  board.reset();
  board.enabled = true;
  $('level-name').textContent = LEVELS[i].name;
  $('boss-bar').hidden = LEVELS[i].goal !== 'boss';
  $('combo').replaceChildren();
  state = 'play';
  if (BAL.starterWeapon) {
    const el = ELEMENTS[Math.floor(Math.random() * ELEMENTS.length)];
    spawn(WEAPON_BY_ELEMENT[el][0], 1, '開局贈送');
  }
  renderReso();
}

function spawn(id: WeaponId, power: number, note = '') {
  if (!mine) return;
  mine.spawnWeapon(id, power);
  run.weaponsMade++;
  const def = WEAPONS[id];
  toast(`${def.tier === 2 ? '★ ' : ''}${def.name}${power > 1.001 ? ` ×${power.toFixed(2)}` : ''}${note ? `（${note}）` : ''}`, ELEMENT_INFO[def.element].css, spriteUrl('weapon', id));
}

function onMoveEnd(counts: number[]) {
  if (state !== 'play' || !mine) return;
  const cap = BAL.resonanceCap + run.mods.resonanceCapBonus;
  ELEMENTS.forEach((el, i) => {
    const n = counts[i];
    if (n <= 0) return;
    const [t1, t2] = WEAPON_BY_ELEMENT[el];
    if (n >= run.mods.t2Threshold) spawn(t2, 1 + BAL.powerPerExtra * (n - run.mods.t2Threshold));
    else if (n >= BAL.t1Threshold) spawn(t1, 1 + BAL.powerPerExtra * (n - BAL.t1Threshold));
    else {
      const before = resonance[el];
      resonance[el] = Math.min(cap, resonance[el] + n);
      if (resonance[el] > before) toast(`${ELEMENT_INFO[el].name}共鳴 +${resonance[el] - before}（${ELEMENT_INFO[el].resonance}）`, ELEMENT_INFO[el].css, spriteUrl('tile', i));
    }
  });
  const hearts = counts[HEART];
  if (hearts > 0) {
    mine.healAll(BAL.heartHealPct * hearts * run.mods.healMul);
    if (hearts >= BAL.heartShieldCount) {
      mine.shield(BAL.heartShieldSec);
      toast(`愛心 ×${hearts}：全體回血 + ${BAL.heartShieldSec} 秒無敵！`, '#ff8ab8', spriteUrl('tile', HEART));
    } else if (mine.weapons.length) toast(`愛心 ×${hearts}：全體回血`, '#ff8ab8', spriteUrl('tile', HEART));
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
  // these dialogs must be answered with a button; Esc should not dismiss them
  d.addEventListener('cancel', (e) => e.preventDefault());
}

const dlgTitle = $<HTMLDialogElement>('dlg-title');
const dlgPerk = $<HTMLDialogElement>('dlg-perk');
const dlgResult = $<HTMLDialogElement>('dlg-result');
const dlgHelp = $<HTMLDialogElement>('dlg-help');
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
    <span>生成武器</span><b>${run.weaponsMade} 把</b>
    <span>收集資源</span><b>${res}</b>
    <span>本輪強化</span><b>${perks}</b>`;
  dlgResult.showModal();
}
dlgResult.addEventListener('close', () => {
  dlgResult.returnValue = '';
  startRun();
});

let stateBeforeHelp: State = 'play';
$('help-btn').addEventListener('click', () => {
  if (dlgHelp.open) return;
  stateBeforeHelp = state;
  if (state === 'play') state = 'paused';
  dlgHelp.showModal();
});
dlgHelp.addEventListener('close', () => {
  dlgHelp.returnValue = '';
  if (state === 'paused') state = stateBeforeHelp;
});
// light-dismiss fallback where `closedby` is unsupported
if (!('closedBy' in HTMLDialogElement.prototype)) {
  const outside = (e: PointerEvent, d: HTMLDialogElement) => {
    const r = d.getBoundingClientRect();
    return e.clientX < r.left || e.clientX > r.right || e.clientY < r.top || e.clientY > r.bottom;
  };
  let pressedOutside = false;
  dlgHelp.addEventListener('pointerdown', (e) => { pressedOutside = outside(e, dlgHelp); });
  dlgHelp.addEventListener('pointerup', (e) => { if (pressedOutside && outside(e, dlgHelp)) dlgHelp.close(); });
}

function buildHelp() {
  const rows = ELEMENTS.map((el) => {
    const [a, b] = WEAPON_BY_ELEMENT[el];
    return [a, b].map((id) => {
      const w = WEAPONS[id];
      return `<tr style="color:${ELEMENT_INFO[el].css}"><td><img src="${spriteUrl('weapon', id)}" alt=""></td>
        <td><b>${w.name}</b><br><small>${ELEMENT_INFO[el].name}・${w.tier === 1 ? '初階 4~6' : '高階 7+'}</small></td>
        <td style="color:var(--text)">${w.passive}<br><small style="color:var(--muted)">大招【${w.ult.name}】${w.ult.type === 'cd' ? `冷卻 ${w.ult.value} 秒` : `集氣 ${w.ult.value} ${w.ult.unit}`}</small></td></tr>`;
    }).join('');
  }).join('');
  $('help-body').innerHTML = `
    <table><thead><tr><th></th><th>武器</th><th>效果</th></tr></thead><tbody>${rows}</tbody></table>
    <h3>特殊方塊</h3>
    <p>直線 4 連 → 直線炸彈（清整排／整列）；L/T 形 → 範圍炸彈（3×3）；5 連 → 彩虹球（與任一色交換，清除全盤該色）。兩個特殊方塊互換會產生組合技。</p>
    <h3>怪物</h3>
    <p>殭屍礦工（近戰）、骷髏弓手（射箭）、爆裂菇（靠近自爆）、洞穴蜘蛛（吐網減速）。第 3 關底部是岩石巨像：落石雨、召喚小怪、岩殼（雷電與爆炸可破）。</p>`;
}

// ------------------------------------------------------------------ HUD
function renderReso() {
  const cap = BAL.resonanceCap + run.mods.resonanceCapBonus;
  $('reso').replaceChildren(
    ...ELEMENTS.map((el, i) => {
      const li = document.createElement('li');
      li.className = 'reso-chip';
      li.style.color = ELEMENT_INFO[el].css;
      li.title = `${ELEMENT_INFO[el].name}共鳴：提升${ELEMENT_INFO[el].resonance}`;
      li.innerHTML = `<img src="${spriteUrl('tile', i)}" alt="${ELEMENT_INFO[el].name}"><span class="lv">${resonance[el]}/${cap}</span><span class="bar"><i style="width:${(resonance[el] / cap) * 100}%"></i></span>`;
      return li;
    }),
  );
}

function renderCombo(counts: number[]) {
  const t2 = run.mods.t2Threshold;
  const spans = counts.map((n, i) => {
    if (n <= 0) return null;
    const s = document.createElement('span');
    const isHeart = i === HEART;
    s.style.color = isHeart ? '#ff8ab8' : ELEMENT_INFO[ELEMENTS[i]].css;
    s.textContent = `${isHeart ? '♥' : ELEMENT_INFO[ELEMENTS[i]].name} ${n}`;
    if (!isHeart && n >= t2) s.className = 't2';
    else if (!isHeart && n >= BAL.t1Threshold) s.className = 't1';
    return s;
  }).filter((s): s is HTMLSpanElement => !!s);
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
  hudT = 0.1;
  const t = Math.max(0, mine.timeLeft);
  const timer = $('timer');
  timer.textContent = `${Math.floor(t / 60)}:${String(Math.floor(t % 60)).padStart(2, '0')}`;
  timer.classList.toggle('low', t <= 30);
  $('depth-fill').style.width = `${mine.progress * 100}%`;
  $('depth-text').textContent = `${mine.depthRows} / ${mine.level.depth}`;
  const gap = mine.lavaGap;
  const lava = $('lava-text');
  lava.textContent = mine.time < BAL.lavaGrace ? `${Math.ceil(BAL.lavaGrace - mine.time)} 秒後開始下降` : `距離最深點 ${gap.toFixed(1)} 格`;
  lava.classList.toggle('danger', mine.time >= BAL.lavaGrace && gap < 4);
  $('shield').hidden = !(mine.time < mine.shieldUntil);
  if (mine.boss) $('boss-fill').style.width = `${Math.max(0, mine.boss.hp / mine.boss.maxHp) * 100}%`;
  $('res').innerHTML = Object.entries(run.resources).map(([k, v]) => `<span>${ORE_ICON[k] ?? ''}${v}</span>`).join('');

  // weapon cards
  const list = $('weapon-cards');
  const alive = new Set<number>();
  for (const w of mine.weapons) {
    alive.add(w.uid);
    let li = cardEls.get(w.uid);
    if (!li) {
      li = document.createElement('li');
      li.className = 'card';
      li.style.color = ELEMENT_INFO[w.def.element].css;
      li.title = w.def.name;
      li.innerHTML = `<img src="${spriteUrl('weapon', w.def.id)}" alt="${w.def.name}"><span class="hp"><i></i></span><span class="ult"><i></i></span>`;
      cardEls.set(w.uid, li);
      list.appendChild(li);
    }
    const [hp, ult] = li.querySelectorAll('i');
    const f = Math.max(0, w.hp / w.maxHp);
    (hp as HTMLElement).style.width = `${f * 100}%`;
    (hp as HTMLElement).style.background = f > 0.5 ? '#5aff6a' : f > 0.25 ? '#ffd040' : '#ff4040';
    (ult as HTMLElement).style.width = `${w.ultReady * 100}%`;
    li.classList.toggle('ready', w.ultReady >= 1);
  }
  for (const [id, li] of cardEls) if (!alive.has(id)) { li.remove(); cardEls.delete(id); }
}

// board HUD reserves space at the top for the resonance row + combo line
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
  if (state === 'play' || state === 'ending') {
    board.update(dt);
    mine?.update(dt);
  } else mine?.updateView(dt);
  updateHud(dt);
  board.render();
  if (mine) mineRenderer.render(mine);
  requestAnimationFrame(frame);
}

// ------------------------------------------------------------------ boot
buildHelp();
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
    spawn: (id: WeaponId, power = 1) => spawn(id, power, 'debug'),
    get mine() { return mine; },
    win: () => mine && onLevelEnd(true, '（debug）'),
    level: (i: number) => startLevel(i),
  },
});
