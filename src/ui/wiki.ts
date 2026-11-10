import {
  BAL, BLOCKS, BLOCK_GOLD, ELEMENTS, ELEMENT_INFO, ORE_ICON, PERKS,
  weaponElementMeta, type BlockType,
} from '../data/config';
import { BAG_ITEMS, itemSpriteUrl, SYNTHESIS_RECIPES_LIST, type RelicId } from '../backpack/items';
import { CATEGORY_LABEL, WEAPON_LIST } from '../data/weapons';
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

const RELIC_ORDER: RelicId[] = [
  'whetstone', 'gear', 'plate', 'amp_crystal', 'mirror',
  'core_earth', 'core_thunder', 'core_poison', 'core_fire', 'core_ice',
  'holy_seal', 'mine_bomb', 'heal_potion',
];

export function initWiki(dialog: HTMLDialogElement) {
  const tabs: TabSpec[] = [
    { id: 'rules', label: '背包與鍛造', render: renderRulesTab },
    { id: 'synth', label: '合成與遺物', render: renderSynthAndRelicsTab },
    { id: 'weapons', label: '25 武器圖鑑', render: renderWeaponsTab },
    { id: 'blocks', label: '方塊與礦石', render: renderBlocksTab },
    { id: 'enemies', label: '怪物與 Boss', render: renderEnemiesTab },
    { id: 'perks', label: '關間強化', render: renderPerksTab },
  ];

  const tablist = dialog.querySelector<HTMLElement>('#wiki-tabs')!;
  const panelsHost = dialog.querySelector<HTMLElement>('#wiki-panels')!;
  tablist.replaceChildren();
  panelsHost.replaceChildren();

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
    <h3>🎒 7×7 鍛造背包自動產線・拖曳精準空投・全彈超載</h3>
    <ul class="wiki-list">
      <li><b>7×7 鍛造背包網格（開局 5×5 解鎖）</b>：將武器擺入已解鎖的背包格內，每把武器都有獨立的<b>自動鍛造冷卻條（3.4s ~ 7.2s）</b>。每當冷卻條跑滿，就會自動向右側礦坑投射一把套用完整鄰接加成的實體武器！<b>你可以隨時放手專心欣賞右側礦坑的彈雨與首領戰！</b></li>
      <li><b>🚀 拖曳至右側礦坑精準空投</b>：遇到<b>守層結界菁英</b>或<b>首領護盾</b>時，你可以直接把背包或暫存欄中的<b>武器、🧨 矮人深層炸彈、🧪 女神甘露藥水</b>用滑鼠／手指<b>拖曳到右邊礦坑的指定直列放開</b>（或選取後點<b>「🚀 緊急空投」</b>），立即在該列發動 <b>${BAL.airDropPowerMul}× 超載精準空投</b>（武器充能達 45% 以上免費，未滿僅需 6G）！</li>
      <li><b>🔥 全彈超載（冷卻 ${BAL.overdriveCooldownSec} 秒）</b>：點擊上方<b>「🔥 全彈超載」</b>按鈕，背包內所有武器會<b>立即同步齊射一輪</b>，並在接下來 <b>${BAL.overdriveSec} 秒</b>內使背包鍛造速度 <b>×1.65</b>、右側礦坑全武器碰撞攻速與大招集氣暴走加速、全傷害 <b>+${Math.round(BAL.overdriveBaseDmgBonus * 100)}%</b>！</li>
      <li><b>💰 挖礦與殺怪即時經濟</b>：右側礦坑每敲碎一塊泥土、礦石或討伐怪物，都會<b>即時掉落金幣（💰）與對應元素共鳴經驗</b>，再加上每秒 <b>+${BAL.passiveGoldPerSec}G</b> 保底鍛造津貼；擊殺<b>👑 金冠守層菁英</b>與<b>三大首領</b>更會直接掉落<b>🎒 免費背包擴格券</b>！</li>
      <li><b>操作快捷鍵與單指友善</b>：拖曳道具時按鍵盤 <b>R</b>（或右鍵點擊／點屬性面板「🔄 旋轉」）可旋轉多格武器；點選道具後再點空白背包格或另一件可合成道具，不用長距離拖曳也能輕鬆擺放與合成！</li>
    </ul>

    <h3>🏆 雙遊戲模式與守層結界房</h3>
    <ul class="wiki-list">
      <li><b>🔒 守層結界房（符文結界石）</b>：每隔一段深度設有一座橫跨全寬的地下結界大廳，地板由無法直接挖穿的<b>符文結界石</b>封鎖，並由頭戴金冠的<b>👑 守層菁英怪（2.5× HP、1.5× 傷害）</b>與巡邏怪物鎮守。必須<b>全滅該層結界守衛</b>，符文結界石才會碎裂放行並贈送 <b>+1 張免費擴格券</b>！</li>
      <li><b>🏆 10 關闖關模式（背包全程繼承！）</b>：共 10 關（深度 55m → 160m）。<b>你的背包網格、已解鎖格子、所有高星傳說武器、鄰接遺物與金幣會在 1~10 關之間完整保留</b>，從第 1 關的小型鐵匠鋪一路養成為第 10 關迎戰深淵炎魔的終極神裝軍火庫！</li>
      <li><b>♾️ 無盡深淵模式</b>：一鏡到底無時間限制，每深潛 <b>${BAL.endlessGateEvery}m</b> 破除一道守層結界即可當場挑選 1 張三選一強化卡並領取免費擴格券，每 <b>${BAL.endlessGateEvery * 3}m</b> 迎戰輪替首領，挑戰最深下潛紀錄！</li>
      <li><b>失敗條件</b>：開局 ${BAL.lavaGrace} 秒後岩漿開始下降（距離 ${BAL.lavaWarnGap} 格內頂端出現熱浪與落火預警）。當<b>「岩漿淹過最深點」且「場上所有武器皆歸零毀滅」</b>（或闖關模式時間歸零）時判定失敗。</li>
    </ul>
  `;
}

function renderSynthAndRelicsTab(): string {
  const recipeRows = SYNTHESIS_RECIPES_LIST.map((r) => `
    <tr>
      <th scope="row"><b>${r.inputs}</b></th>
      <td><b style="color:#ffe680">${r.output}</b></td>
      <td>${r.effect}</td>
    </tr>`).join('');

  const relicRows = RELIC_ORDER.map((id) => {
    const d = BAG_ITEMS[id];
    return `
      <tr>
        <th scope="row" style="color:${d.cssColor}">
          <div class="w-head">
            <img class="w-ico" src="${itemSpriteUrl(id)}" alt="">
            <div>
              <b>${d.name}</b><br>
              <small>${d.subtitle}</small>
            </div>
          </div>
        </th>
        <td>💰 <b>${d.cost}G</b><br><small>${d.shapeName}</small></td>
        <td>${d.desc}</td>
        <td>${d.recipeHint}</td>
      </tr>`;
  }).join('');

  const resoRows = ELEMENTS.map((el, i) => {
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
    <h3>✨ 雙軌合成配方表（《靠裝勇者》二合一 ×《Backpack Battles》跨道具配方）</h3>
    <p class="wiki-note">當你選取或拖曳一件道具時，背包與商店中所有可與它合成的目標都會亮起<b>✨ 綠色／金色可合成提示框</b>！直接拖過去放開（或點選後再點目標）即可瞬間進化！</p>
    <div tabindex="0" role="region" aria-labelledby="cap-recipes" class="table-wrapper">
      <table class="wiki-table" style="--label-2:'合成產物'; --label-3:'效果與範例'">
        <caption id="cap-recipes">全系統雙軌合成配方一覽</caption>
        <thead>
          <tr>
            <th scope="col">合成素材組合</th>
            <th scope="col">合成產物</th>
            <th scope="col">效果與範例</th>
          </tr>
        </thead>
        <tbody>${recipeRows}</tbody>
      </table>
    </div>

    <h3>🧭 鄰接遺物・五元素魔晶・王者聖印・戰術道具圖鑑</h3>
    <p class="wiki-note">將遺物擺在背包內武器旁邊，會以<b>金色光環</b>標示受強化的背包格；多顆遺物的加成可自由疊加，且遺物本身也能<b>同款二合一升星（★1 ➔ ★2 ➔ ★3）</b>！</p>
    <div tabindex="0" role="region" aria-labelledby="cap-relics" class="table-wrapper">
      <table class="wiki-table" style="--label-2:'價格與佔格'; --label-3:'能力效果'; --label-4:'擺放與合成秘訣'">
        <caption id="cap-relics">全 13 種遺物、元素魔晶、聖印與戰術消耗品一覽</caption>
        <thead>
          <tr>
            <th scope="col">道具名稱</th>
            <th scope="col">價格與佔格</th>
            <th scope="col">能力效果</th>
            <th scope="col">擺放與合成秘訣</th>
          </tr>
        </thead>
        <tbody>${relicRows}</tbody>
      </table>
    </div>

    <h3>🔮 五元素共鳴與滿級 Lv5 同名解鎖</h3>
    <ul class="wiki-list">
      <li><b>如何累積共鳴經驗</b>：背包每次鍛造投射武器（<b>+3 點</b>，鄰接共鳴水晶或魔晶再 <b>+3~+4 點</b>）、完成合成進化（<b>+8 ~ +30 點</b>）、以及右側礦坑挖出對應元素礦石（<b>+4 點</b>）都會推進上方共鳴條！</li>
      <li><b>滿條獎勵</b>：每累計滿 <b>${BAL.cumThreshold} 點</b>，該元素<b>共鳴等級永久 +1 級</b>，並免費額外空投 1 把該元素的專屬特武（鑽地螺旋鑽／磁暴核心／刺客拳刃／火焰刀／霜狼之爪）！</li>
      <li><b>同名武器限制與滿級 Lv${BAL.resonanceMaxLv} 解鎖</b>：共鳴未滿 Lv${BAL.resonanceMaxLv} 時，場上同名武器最多同時存在 1 把（再次投射會直接為場上那把<b>回復 ${Math.round(BAL.dupHealPct * 100)}% HP 並永久疊加 +${Math.round(BAL.dupBoost * 100)}% 傷害</b>，紧急空投除外）；當該元素共鳴達到 <b>Lv${BAL.resonanceMaxLv}</b> 後，徹底解鎖數量限制，場上可同時存在多把同名傳說武器一起轟炸礦坑！</li>
    </ul>
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
        <tbody>${resoRows}</tbody>
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
    { key: 'cat:low', label: '低階・1×1' },
    { key: 'cat:t1', label: '初階・1×2' },
    { key: 'cat:t2', label: '高階・長/重' },
    { key: 'cat:cum', label: '特武・魔晶' },
    { key: 'cat:leg', label: '傳說／神聖' },
  ];

  const filtersHtml = filterDefs.map((f, idx) =>
    `<button type="button" class="filter-chip" data-filter="${f.key}" aria-pressed="${idx === 0 ? 'true' : 'false'}">${f.label}</button>`,
  ).join('');

  const rowsHtml = WEAPON_LIST.map((w) => {
    const meta = weaponElementMeta(w.element);
    const bagDef = BAG_ITEMS[w.id];
    const catKey = w.category === 'holy' ? 'leg' : w.category;
    const ultHtml = w.ult
      ? `<b>【${w.ult.name}】</b><small>（${w.ult.type === 'cd' ? `冷卻 ${w.ult.value} 秒` : `集氣：${w.ult.value} ${w.ult.unit}`}）</small><br>${w.ult.desc}`
      : `<span class="muted">無大招（輕巧高頻速攻）</span>`;
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
        <td><b>${bagDef.shapeName}</b>｜商店 💰${bagDef.cost}G<br>⚡ 鍛造每 <b>${bagDef.forgeCd}s</b> 投射<br><small class="muted">${bagDef.recipeHint}</small></td>
        <td>HP <b>${w.baseHp}</b>${w.lifespanDecay ? ' <small>(壽命型)</small>' : ''}<br>傷害 <b>${w.dmg}</b></td>
        <td>${w.passive}</td>
        <td>${ultHtml}</td>
      </tr>`;
  }).join('');

  return `
    <div class="filter-bar" role="toolbar" aria-label="篩選武器">${filtersHtml}</div>
    <div tabindex="0" role="region" aria-labelledby="cap-weapons" class="table-wrapper">
      <table class="wiki-table" id="wiki-weapons-table" style="--label-2:'背包佔格與合成'; --label-3:'基礎數值'; --label-4:'被動能力'; --label-5:'自動大招'">
        <caption id="cap-weapons">全 25 把武器佔格、鍛造週期、合成配方與能力一覽</caption>
        <thead>
          <tr>
            <th scope="col">武器</th>
            <th scope="col">背包佔格與合成</th>
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
    const goldReward = BLOCK_GOLD[t] ?? 0;
    const oreText = [
      goldReward > 0 ? `💰 +${goldReward}G` : '',
      b.ore ? `${ORE_ICON[b.ore]} 資源＋共鳴經驗` : '',
    ].filter(Boolean).join('｜') || '—';
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
    <p class="wiki-note">擊碎任何方塊與礦石都會即時獲得<b>💰 鍛造金幣</b>與元素共鳴經驗；方塊若受到<b>霜狼之爪／冰錐</b>冰霜侵蝕，或<b>九頭蛇之牙</b>劇毒侵蝕，承受的所有直接傷害會提升 <b>+50%</b>。</p>
    <div tabindex="0" role="region" aria-labelledby="cap-blocks" class="table-wrapper">
      <table class="wiki-table" style="--label-2:'基礎 HP'; --label-3:'武器耐久耗損'; --label-4:'出現深度'; --label-5:'金幣與資源掉落'">
        <caption id="cap-blocks">礦坑方塊硬度、耐久耗損與金幣掉落表</caption>
        <thead>
          <tr>
            <th scope="col">方塊／礦石</th>
            <th scope="col">基礎 HP</th>
            <th scope="col">武器耐久耗損</th>
            <th scope="col">出現深度</th>
            <th scope="col">金幣與資源掉落</th>
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
        : isBoss ? `接觸每 0.5s 造成 ${e.dmg} 傷＋專屬範圍彈幕／召喚／元素護盾（討伐賞金 💰95G ＋ 🎒擴格券×2）`
          : `射程 ${e.range} 格／每次 ${e.dmg} 傷（討伐賞金 💰9G，金冠菁英 💰26G ＋ 🎒擴格券×1）`;
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
    <p class="wiki-note">洞穴與結界大廳怪物會<b>主動橫向追擊武器</b>；頭戴皇冠的<b>👑 守層菁英</b>擁有 <b>2.5× 血量與 1.5× 傷害</b>，擊殺必掉<b>💰26G 與 🎒免費擴格券</b>！三大首領各自擁有專屬減傷護盾，善用對應<b>剋制元素或矮人炸彈</b>可瞬間破盾並造成高額破盾傷害！</p>
    <div tabindex="0" role="region" aria-labelledby="cap-enemies" class="table-wrapper">
      <table class="wiki-table" style="--label-2:'基礎 HP'; --label-3:'攻擊與賞金'; --label-4:'行為與破盾弱點'">
        <caption id="cap-enemies">全怪物與三大首領能力與弱點一覽</caption>
        <thead>
          <tr>
            <th scope="col">名稱</th>
            <th scope="col">基礎 HP</th>
            <th scope="col">攻擊與賞金</th>
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
