import {
  BAL, BLOCKS, ELEMENTS, ELEMENT_INFO, ORE_ICON, PERKS,
  weaponElementMeta, type BlockType, type WeaponElement,
} from '../data/config';
import { CATEGORY_LABEL, WEAPON_LIST, type WeaponCategory } from '../data/weapons';
import { spriteUrl } from '../gfx/pixel';
import { ENEMY_STATS } from '../mine/enemy';

interface TabSpec {
  id: string;
  label: string;
  render: () => string;
}

const BLOCK_ORDER: BlockType[] = [
  'dirt', 'stone', 'deepslate', 'obsidian', 'bedrock', 'seal', 'core',
  'barrel', 'crystal',
  'coal', 'copper', 'iron', 'gold', 'redstone', 'lapis', 'diamond', 'emerald',
];

export function initWiki(dialog: HTMLDialogElement) {
  const tabs: TabSpec[] = [
    { id: 'rules', label: '核心與三消', render: renderRulesTab },
    { id: 'reso', label: '共鳴與同名', render: renderResonanceTab },
    { id: 'weapons', label: '25 武器圖鑑', render: renderWeaponsTab },
    { id: 'blocks', label: '方塊與礦石', render: renderBlocksTab },
    { id: 'enemies', label: '怪物與 Boss', render: renderEnemiesTab },
    { id: 'perks', label: '關間強化', render: renderPerksTab },
  ];

  const tablist = dialog.querySelector<HTMLElement>('#wiki-tabs')!;
  const panelsHost = dialog.querySelector<HTMLElement>('#wiki-panels')!;

  const tabBtns: HTMLButtonElement[] = [];
  const panels: HTMLElement[] = [];

  tabs.forEach((t, idx) => {
    const btn = document.createElement('button');
    btn.type = 'button';
    btn.role = 'tab';
    btn.id = `wiki-tab-${t.id}`;
    btn.className = 'wiki-tab';
    btn.setAttribute('aria-controls', `wiki-panel-${t.id}`);
    btn.setAttribute('aria-selected', idx === 0 ? 'true' : 'false');
    btn.tabIndex = idx === 0 ? 0 : -1;
    btn.textContent = t.label;
    btn.addEventListener('click', () => selectTab(idx, false));
    tabBtns.push(btn);
    tablist.appendChild(btn);

    const panel = document.createElement('section');
    panel.role = 'tabpanel';
    panel.id = `wiki-panel-${t.id}`;
    panel.className = 'wiki-panel';
    panel.setAttribute('aria-labelledby', btn.id);
    panel.hidden = idx !== 0;
    panel.innerHTML = t.render();
    panels.push(panel);
    panelsHost.appendChild(panel);
  });

  function selectTab(index: number, moveFocus: boolean) {
    const n = (index + tabBtns.length) % tabBtns.length;
    tabBtns.forEach((b, i) => {
      const active = i === n;
      b.setAttribute('aria-selected', active ? 'true' : 'false');
      b.tabIndex = active ? 0 : -1;
      panels[i].hidden = !active;
      if (active && moveFocus) b.focus();
    });
  }

  tablist.addEventListener('keydown', (e) => {
    const cur = tabBtns.findIndex((b) => b.getAttribute('aria-selected') === 'true');
    if (e.key === 'ArrowRight') { e.preventDefault(); selectTab(cur + 1, true); }
    else if (e.key === 'ArrowLeft') { e.preventDefault(); selectTab(cur - 1, true); }
    else if (e.key === 'Home') { e.preventDefault(); selectTab(0, true); }
    else if (e.key === 'End') { e.preventDefault(); selectTab(tabBtns.length - 1, true); }
  });

  bindWeaponFilters(panels[2]);
}

function renderRulesTab(): string {
  return `
    <h3>7 格爆發行動力・大消除回氣・8 秒散熱狂暴期</h3>
    <ul class="wiki-list">
      <li><b>每輪爆發行動力</b>：基礎上限 <b>${BAL.staminaMax} 格</b>（開局滿格）。每次<b>成功消除</b>消耗 1 格；<b>沒消成功的無效交換彈回時完全不扣格</b>！</li>
      <li><b>大消除連段回氣</b>：單步（含連鎖與特殊塊爆炸）全色總消除達 <b>${BAL.refundTier1Count}~${BAL.refundTier2Count - 1} 顆</b>立即回氣 <b>+1 格</b>並疊加 1 層狂暴蓄能；達 <b>${BAL.refundTier2Count}+ 顆</b>回氣 <b>+2 格</b>並疊加 2 層狂暴蓄能（每輪最多回氣 <b>${BAL.maxRefundsPerCycle} 格</b>，單輪最多爽快連打 ${BAL.staminaMax + BAL.maxRefundsPerCycle} 步）！</li>
      <li><b>🔥 ${BAL.overdriveSec} 秒散熱狂暴觀賞期</b>：當行動力歸零（或隨時點擊<b>「🔥 釋放狂暴」</b>按鈕），左側盤面進入 ${BAL.overdriveSec} 秒散熱冷卻，讓你完全移開視線專心欣賞右側礦坑！期間場上所有武器進入<b>【狂暴狀態】</b>：碰撞攻擊間隔 <b>×${BAL.overdriveHitCdMul}</b>、大招冷卻與集氣速度 <b>×${BAL.overdriveUltRateMul}</b>、全傷害 <b>+${Math.round(BAL.overdriveBaseDmgBonus * 100)}%</b>（每層回氣蓄能再 <b>+${Math.round(BAL.overdriveStackDmgBonus * 100)}%</b>，最高 +65%），散熱結束瞬間<b>一次補滿全部行動力</b>！</li>
      <li><b>礦坑鏡頭巡視與鎖定</b>：在右側礦坑滑動<b>滑鼠滾輪或上下拖曳</b>可自由巡視各層結界、炸藥桶與岩漿位置；點擊底部任一張<b>武器小卡</b>可鎖定鏡頭跟隨該把武器。</li>
    </ul>

    <h3>雙遊戲模式與守層結界房</h3>
    <ul class="wiki-list">
      <li><b>🔒 守層結界房（符文結界石）</b>：每隔一段深度設有一座橫跨全寬的地下結界大廳，地板由無法直接挖穿的<b>符文結界石</b>封鎖，並由頭戴金冠的<b>守層菁英怪（2.5× HP、1.5× 傷害）</b>與巡邏怪物鎮守。武器無法再偷挖空列繞過怪物——必須<b>全滅該層結界守衛</b>，符文結界石才會碎裂放行！</li>
      <li><b>🏆 10 關闖關模式</b>：共 10 關（深度 55m → 160m，怪物血量由 <b>×1.0 指數成長至 ×18.0</b>）。一般關卡需突破各道守層結界並擊碎最底層的<b>「礦脈核心」</b>；<b>第 3、6、10 關</b>分別迎戰三大元素護盾首領（<b>岩石巨像／劇毒蛛后／深淵炎魔</b>）。每過一關可挑選 1 張強化卡。</li>
      <li><b>♾️ 無盡深淵模式</b>：一鏡到底無時間限制，共鳴等級全程保留不重置！每深潛 <b>${BAL.endlessGateEvery}m</b> 破除一道守層結界即可當場挑選 1 張三選一強化卡，每 <b>${BAL.endlessGateEvery * 3}m</b> 迎戰輪替首領，挑戰最深下潛紀錄！</li>
      <li><b>失敗條件</b>：開局 ${BAL.lavaGrace} 秒後岩漿開始下降（距離 ${BAL.lavaWarnGap} 格內頂端出現熱浪與落火預警）。當<b>「岩漿淹過最深點」且「場上所有武器皆歸零毀滅」</b>（或闖關模式時間歸零）時判定失敗。</li>
    </ul>

    <h3>單步連鎖計數與武器產出表</h3>
    <p class="wiki-note">「一步」代表你交換一次方塊後，包含後續所有自動掉落連鎖結束的總和。<b>5 種元素分開計算</b>，一步內可同時觸發多把不同元素的武器！</p>
    <div tabindex="0" role="region" aria-labelledby="cap-thresholds" class="table-wrapper">
      <table class="wiki-table" style="--label-2:'觸發結果'; --label-3:'超額倍率規則'">
        <caption id="cap-thresholds">單步消除數量與產出對照表</caption>
        <thead>
          <tr>
            <th scope="col">消除條件（一步含連鎖）</th>
            <th scope="col">觸發結果</th>
            <th scope="col">超額倍率規則</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">同色累計 <b>3 個</b></th>
            <td>生成該元素<b>【低階武器】</b>（基礎 HP ${BAL.t0Hp}，無大招）</td>
            <td>固定 1.00×</td>
          </tr>
          <tr>
            <th scope="row">同色累計 <b>4 ~ 5 個</b></th>
            <td>生成該元素<b>【初階武器】</b>（基礎 HP ${BAL.t1Hp}）</td>
            <td>超過 4 個每多 1 顆：傷害與 HP <b>+${Math.round(BAL.powerPerExtra * 100)}%</b></td>
          </tr>
          <tr>
            <th scope="row">同色累計 <b>6 ~ 8 個</b></th>
            <td>生成該元素<b>【高階武器】</b>（基礎 HP ${BAL.t2Hp}）</td>
            <td>超過門檻每多 1 顆：傷害與 HP <b>+${Math.round(BAL.powerPerExtra * 100)}%</b></td>
          </tr>
          <tr>
            <th scope="row">同色累計 <b>9+ 個</b></th>
            <td>生成該元素<b>【傳說武器】</b>（基礎 HP ${BAL.t3Hp}；冰屬性為超強化版冰晶迴旋鏢）</td>
            <td>超過門檻每多 1 顆：傷害與 HP <b>+${Math.round(BAL.powerPerExtra * 100)}%</b></td>
          </tr>
          <tr>
            <th scope="row">全盤各色（含愛心）加總 <b>${BAL.holyTotalThreshold}+ 個</b></th>
            <td>額外降臨<b>【✨ 聖劍】</b>（基礎傷害 55、HP ${BAL.holyHp}，壽命型每秒流失 5% HP）</td>
            <td>超過 ${BAL.holyTotalThreshold} 個每多 1 顆：傷害與 HP <b>+${Math.round(BAL.powerPerExtra * 100)}%</b></td>
          </tr>
          <tr>
            <th scope="row">消除 <b>♥ 愛心方塊</b></th>
            <td>場上全體武器回復最大 HP（每顆 <b>+${Math.round(BAL.heartHealPct * 100)}%</b>，對聖劍同樣有效）</td>
            <td>單步消 <b>${BAL.heartShieldCount}+ 顆</b>愛心額外賦予全體 <b>${BAL.heartShieldSec} 秒無敵護盾</b></td>
          </tr>
        </tbody>
      </table>
    </div>

    <h3>特殊方塊與組合技</h3>
    <ul class="wiki-list">
      <li><img class="inline-ico" src="${spriteUrl('special', 'lineH')}" alt=""> <b>直線炸彈（直線 4 連）</b>：觸發時清除整橫排或整直列，被炸掉的方塊照各自顏色計入消除數。</li>
      <li><img class="inline-ico" src="${spriteUrl('special', 'bomb')}" alt=""> <b>範圍炸彈（L 形／T 形交錯消除）</b>：觸發時炸開周圍 3×3 區域。</li>
      <li><img class="inline-ico" src="${spriteUrl('rainbow', 0)}" alt=""> <b>彩虹球（直線 5 連以上）</b>：與任一色塊交換，直接清除全盤所有該色方塊（極易一次湊出傳說武器與聖劍！）。</li>
      <li><b>雙特殊塊互換組合技</b>：
        直線＋直線＝十字清排＋清列｜炸彈＋炸彈＝擴大為 5×5 大爆破｜直線＋炸彈＝三排＋三列巨型十字清場｜彩虹球＋彩虹球＝<b>清空整個 8×8 盤面 64 格</b>（必定降臨超高倍率聖劍與多把武器）！</li>
    </ul>
  `;
}

function renderResonanceTab(): string {
  const rows = ELEMENTS.map((el, i) => {
    const info = ELEMENT_INFO[el];
    return `
      <tr>
        <th scope="row" style="color:${info.css}">
          <img class="inline-ico" src="${spriteUrl('tile', i)}" alt=""> ${info.name}元素
        </th>
        <td>${info.resonance}</td>
        <td>${info.resonanceDesc}</td>
      </tr>`;
  }).join('');

  return `
    <h3>合併式「共鳴 × 累計條」機制</h3>
    <ul class="wiki-list">
      <li>盤面上方 5 個元素槽結合了<b>「累計武器進度」</b>與<b>「元素共鳴等級」</b>。</li>
      <li><b>每消除 1 顆該色方塊</b>（包含消 3、大連鎖、特殊塊引爆），該元素的累計條就會 <b>+1</b>。</li>
      <li>每當累計滿 <b>${BAL.cumThreshold} 顆</b>（可被關間強化「元素共鳴」降至最低 20 顆）：
        <ol>
          <li>立即生成 1 把該元素的專屬<b>【累計武器】</b>（鑽地螺旋鑽／磁暴核心／刺客拳刃／火焰刀／霜狼之爪），溢出顆數自動保留至下一輪。</li>
          <li>該元素的<b>共鳴等級永久 +1 級</b>（闖關模式本關內有效、無盡模式全程保留，上限 <b>Lv${BAL.resonanceMaxLv}</b>），強化場上現有與後續所有同元素武器！</li>
          <li><b>無盡深淵突破加成</b>：在無盡深淵模式下，共鳴滿 Lv${BAL.resonanceMaxLv} 後每再累計滿 ${BAL.cumThreshold} 顆，除照常產出累計武器外，還會額外賦予該元素所有武器永久 <b>+${Math.round(BAL.endlessResoExtraBonus * 100)}% 專精增傷</b>（無上限）！</li>
        </ol>
      </li>
    </ul>

    <h3>同名武器限制與滿級解鎖規則</h3>
    <ul class="wiki-list">
      <li><b>共鳴未滿 Lv${BAL.resonanceMaxLv} 時（Lv0 ~ Lv4）</b>：每種武器在場上<b>最多同時存在 1 把</b>。再次打出場上已存活的同名武器時，不會多生一把，而是讓場上那把<b>回復 ${Math.round(BAL.dupHealPct * 100)}% 最大 HP</b>，並獲得<b>永久傷害強化 +${Math.round(BAL.dupBoost * 100)}%</b>（最多疊加 ${BAL.maxDupStacks} 次至 +100%）。</li>
      <li><b>共鳴達到滿級（Lv${BAL.resonanceMaxLv}）後</b>：正式解鎖該元素所有武器的數量限制！再次打出同名武器時，會直接投入第 2 把、第 3 把同名武器一起狂轟礦坑！</li>
      <li><b>聖劍的同名規則</b>：聖劍預設最多 1 把在場（重複觸發回復 ${Math.round(BAL.dupHealPct * 100)}% 最大 HP＋傷害 +${Math.round(BAL.holyDupBoost * 100)}%）；只要<b>任一元素達到共鳴 Lv${BAL.resonanceMaxLv}</b>，聖劍也同步解鎖可多把並存。</li>
      <li><b>武器耐久與壽命</b>：一般武器撞擊方塊會依礦石硬度消耗少量耐久（越深越硬扣越多），被怪物攻擊或泡在岩漿中也會扣血；唯獨<b>聖劍</b>為壽命型，挖礦不耗損，改為每秒自然流失 5% HP（基礎 20 秒，可用愛心補血續命）。全場保留 ${BAL.maxWeapons} 把安全上限以維持流暢幀率。</li>
    </ul>

    <h3>五元素共鳴加成一覽</h3>
    <div tabindex="0" role="region" aria-labelledby="cap-reso" class="table-wrapper">
      <table class="wiki-table" style="--label-2:'強化項目'; --label-3:'每級效果（最高 Lv5）'">
        <caption id="cap-reso">五元素共鳴等級加成表</caption>
        <thead>
          <tr>
            <th scope="col">元素</th>
            <th scope="col">強化項目</th>
            <th scope="col">每級效果（最高 Lv${BAL.resonanceMaxLv}）</th>
          </tr>
        </thead>
        <tbody>${rows}</tbody>
      </table>
    </div>
  `;
}

function renderWeaponsTab(): string {
  const filterDefs: { key: string; label: string }[] = [
    { key: 'all', label: '全部 (25)' },
    { key: 'el:earth', label: '🟫 土 (5)' },
    { key: 'el:thunder', label: '⚡ 雷 (5)' },
    { key: 'el:poison', label: '☠ 毒 (5)' },
    { key: 'el:fire', label: '🔥 火 (5)' },
    { key: 'el:ice', label: '❄ 冰 (4)' },
    { key: 'el:holy', label: '✨ 聖 (1)' },
    { key: 'cat:low', label: '低階・消3' },
    { key: 'cat:t1', label: '初階・4~5' },
    { key: 'cat:t2', label: '高階・6~8' },
    { key: 'cat:cum', label: '累計・滿30' },
    { key: 'cat:leg', label: '傳說／神聖' },
  ];

  const filtersHtml = filterDefs.map((f, idx) =>
    `<button type="button" class="filter-chip" data-filter="${f.key}" aria-pressed="${idx === 0 ? 'true' : 'false'}">${f.label}</button>`,
  ).join('');

  const rowsHtml = WEAPON_LIST.map((w) => {
    const meta = weaponElementMeta(w.element);
    const catKey = w.category === 'holy' ? 'leg' : w.category;
    const ultHtml = w.ult
      ? `<b>【${w.ult.name}】</b><small>（${w.ult.type === 'cd' ? `冷卻 ${w.ult.value} 秒` : `集氣：${w.ult.value} ${w.ult.unit}`}）</small><br>${w.ult.desc}`
      : `<span class="muted">無大招（輕量速攻武器）</span>`;
    return `
      <tr data-el="${w.element}" data-cat="${catKey}">
        <th scope="row" style="color:${meta.css}">
          <div class="w-head">
            <img class="w-ico" src="${spriteUrl('weapon', w.id)}" alt="">
            <div>
              <div>#${w.num} <b>${w.name}</b></div>
              <small>${meta.icon} ${meta.name}・${CATEGORY_LABEL[w.category]}</small>
            </div>
          </div>
        </th>
        <td>${w.unlockText}</td>
        <td>HP <b>${w.baseHp}</b>${w.lifespanDecay ? ' <small>(壽命型)</small>' : ''}<br>傷害 <b>${w.dmg}</b></td>
        <td>${w.passive}</td>
        <td>${ultHtml}</td>
      </tr>`;
  }).join('');

  return `
    <div class="filter-bar" role="toolbar" aria-label="篩選武器">${filtersHtml}</div>
    <div tabindex="0" role="region" aria-labelledby="cap-weapons" class="table-wrapper">
      <table class="wiki-table" id="wiki-weapons-table" style="--label-2:'取得條件'; --label-3:'基礎數值'; --label-4:'被動能力'; --label-5:'自動大招'">
        <caption id="cap-weapons">全 25 把武器能力與取得條件一覽</caption>
        <thead>
          <tr>
            <th scope="col">武器</th>
            <th scope="col">取得條件</th>
            <th scope="col">基礎數值</th>
            <th scope="col">被動能力</th>
            <th scope="col">自動大招</th>
          </tr>
        </thead>
        <tbody>${rowsHtml}</tbody>
      </table>
    </div>
  `;
}

function bindWeaponFilters(panel: HTMLElement) {
  const buttons = Array.from(panel.querySelectorAll<HTMLButtonElement>('.filter-chip'));
  const rows = Array.from(panel.querySelectorAll<HTMLTableRowElement>('#wiki-weapons-table tbody tr'));
  buttons.forEach((btn) => {
    btn.addEventListener('click', () => {
      const f = btn.dataset.filter ?? 'all';
      buttons.forEach((b) => b.setAttribute('aria-pressed', b === btn ? 'true' : 'false'));
      rows.forEach((tr) => {
        if (f === 'all') tr.hidden = false;
        else if (f.startsWith('el:')) tr.hidden = tr.dataset.el !== f.slice(3);
        else if (f.startsWith('cat:')) tr.hidden = tr.dataset.cat !== f.slice(4);
      });
    });
  });
}

function renderBlocksTab(): string {
  const rows = BLOCK_ORDER.map((t) => {
    const b = BLOCKS[t];
    const hpText = Number.isFinite(b.hp)
      ? `${b.hp}（闖關 ×1.0~×3.2／無盡每結界 ×${BAL.endlessBlockScalePerGate}）`
      : '無法直接挖掘';
    const oreText = b.ore ? `${ORE_ICON[b.ore]} 掉落資源` : '—';
    return `
      <tr>
        <th scope="row">
          <div class="w-head">
            <img class="w-ico" src="${spriteUrl('block', t)}" alt="">
            <b>${b.name}</b>
          </div>
        </th>
        <td>${hpText}</td>
        <td>每次碰撞 -${b.wear} HP</td>
        <td>${b.depthNote}</td>
        <td>${oreText}</td>
      </tr>`;
  }).join('');

  return `
    <h3>礦層方塊與礦石一覽</h3>
    <p class="wiki-note">方塊若受到<b>霜狼之爪／冰錐</b>冰霜侵蝕，或<b>九頭蛇之牙</b>劇毒侵蝕，承受的所有直接傷害會提升 <b>+50%</b>。</p>
    <div tabindex="0" role="region" aria-labelledby="cap-blocks" class="table-wrapper">
      <table class="wiki-table" style="--label-2:'基礎 HP'; --label-3:'武器耐久耗損'; --label-4:'出現深度'; --label-5:'資源掉落'">
        <caption id="cap-blocks">礦坑方塊硬度、耐久耗損與分佈表</caption>
        <thead>
          <tr>
            <th scope="col">方塊／礦石</th>
            <th scope="col">基礎 HP</th>
            <th scope="col">武器耐久耗損</th>
            <th scope="col">出現深度</th>
            <th scope="col">資源掉落</th>
          </tr>
        </thead>
        <tbody>${rows}</tbody>
      </table>
    </div>
  `;
}

function renderEnemiesTab(): string {
  const keys = ['zombie', 'skeleton', 'mushroom', 'spider', 'golem', 'spider_queen', 'balrog'] as const;
  const bossKeys = new Set<string>(['golem', 'spider_queen', 'balrog']);
  const rows = keys.map((k) => {
    const e = ENEMY_STATS[k];
    const isBoss = bossKeys.has(k);
    const atkText = k === 'spider' ? `射程 ${e.range} 格／CD ${e.cd}s（緩速網）`
      : k === 'mushroom' ? `偵測 ${e.range} 格／引信 1s 自爆 ${e.dmg} 傷`
        : isBoss ? `接觸每 0.5s 造成 ${e.dmg} 傷＋專屬範圍彈幕／召喚／元素護盾`
          : `射程 ${e.range} 格／每次 ${e.dmg} 傷（CD ${e.cd}s）`;
    return `
      <tr>
        <th scope="row">
          <div class="w-head">
            <img class="w-ico" src="${spriteUrl('enemy', k)}" alt="">
            <b>${e.name}${isBoss ? ' (Boss)' : ''}</b>
          </div>
        </th>
        <td>${e.hp.toLocaleString()}${isBoss ? '（無盡隨深度成長）' : `（闖關 ×1.0~×18.0／無盡每結界 ×${BAL.endlessEnemyScalePerGate}）`}</td>
        <td>${atkText}</td>
        <td>${e.desc}</td>
      </tr>`;
  }).join('');

  return `
    <h3>巡邏怪物・金冠守層菁英・三大元素首領</h3>
    <p class="wiki-note">洞穴與結界大廳怪物會<b>主動橫向追擊武器</b>；頭戴皇冠的<b>👑 守層菁英</b>擁有 <b>2.5× 血量與 1.5× 傷害</b>，必須全數擊殺才能破除符文結界石！三大首領各自擁有專屬減傷護盾，善用對應<b>剋制元素</b>可瞬間破盾並造成高額破盾傷害！</p>
    <div tabindex="0" role="region" aria-labelledby="cap-enemies" class="table-wrapper">
      <table class="wiki-table" style="--label-2:'基礎 HP'; --label-3:'攻擊數據'; --label-4:'行為與破盾弱點'">
        <caption id="cap-enemies">全怪物與三大首領能力與弱點一覽</caption>
        <thead>
          <tr>
            <th scope="col">名稱</th>
            <th scope="col">基礎 HP</th>
            <th scope="col">攻擊數據</th>
            <th scope="col">行為與破盾弱點</th>
          </tr>
        </thead>
        <tbody>${rows}</tbody>
      </table>
    </div>
  `;
}

function renderPerksTab(): string {
  const rows = PERKS.map((p) => `
    <tr>
      <th scope="row"><span aria-hidden="true">${p.icon}</span> <b>${p.name}</b>${p.campaignOnly ? ' <small class="muted">(闖關限定)</small>' : ''}</th>
      <td>${p.desc}</td>
      <td>${p.max ? `最多 ${p.max} 次` : '無上限'}</td>
    </tr>`).join('');

  return `
    <h3>三選一強化卡（過關／無盡破結界獎勵）</h3>
    <p class="wiki-note">10 關闖關模式每通過 1 關、無盡深淵模式每破除 1 道守層結界（每 ${BAL.endlessGateEvery}m），皆可從隨機 3 張強化卡中挑選 1 張持續疊加！</p>
    <div tabindex="0" role="region" aria-labelledby="cap-perks" class="table-wrapper">
      <table class="wiki-table" style="--label-2:'強化效果'; --label-3:'疊加上限'">
        <caption id="cap-perks">全 ${PERKS.length} 種強化卡一覽</caption>
        <thead>
          <tr>
            <th scope="col">強化名稱</th>
            <th scope="col">強化效果</th>
            <th scope="col">疊加上限</th>
          </tr>
        </thead>
        <tbody>${rows}</tbody>
      </table>
    </div>
  `;
}
