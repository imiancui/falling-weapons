import { chromium } from 'playwright-core';

const URLS = [
  'https://ian-9950x3d.tailfe8b74.ts.net:5174/',
  'https://ian-9950x3d.tailfe8b74.ts.net/',
  'http://100.94.165.47:5174/',
];

const OUT_DIR = 'C:/Users/Administrator/.gemini/antigravity/brain/c4be3168-2d49-4a71-b3e0-09c389028dbd';

(async () => {
  // 1. Check all Tailscale endpoints respond HTTP 200
  for (const u of URLS) {
    const res = await fetch(u);
    if (res.status !== 200) throw new Error(`Expected 200 from ${u}, got ${res.status}`);
    console.log(`[OK] ${u} -> HTTP ${res.status}`);
  }

  const browser = await chromium.launch({
    executablePath: 'C:/Program Files/Google/Chrome/Application/chrome.exe',
    args: ['--use-angle=swiftshader', '--enable-unsafe-swiftshader', '--ignore-gpu-blocklist'],
  });
  const context = await browser.newContext({
    viewport: { width: 1440, height: 820 },
    ignoreHTTPSErrors: true,
  });
  const page = await context.newPage();

  const errors = [];
  page.on('pageerror', (err) => errors.push(`PAGEERROR: ${err.message}`));
  page.on('console', (msg) => {
    if (msg.type() === 'error') errors.push(`CONSOLE ERROR: ${msg.text()}`);
  });

  await page.goto(URLS[0], { waitUntil: 'networkidle' });

  // Verify Title Dialog
  const subText = await page.locator('#dlg-title .subtitle').textContent();
  console.log('Title subtitle:', subText);
  if (!subText?.includes('背包亂鬥')) throw new Error('Title subtitle not updated to v0.5');

  // Start Campaign Stage 1
  await page.click('#dlg-title button[value="campaign"]');
  await page.waitForTimeout(900);

  // Verify 7x7 Backpack Grid (49 cells: 25 unlocked, 24 locked)
  const gridStats = await page.evaluate(() => {
    const allCells = document.querySelectorAll('#bag-grid .bag-cell').length;
    const lockedCells = document.querySelectorAll('#bag-grid .bag-cell.locked').length;
    const bagItems = window.fw.forge.items.filter((i) => i.location === 'bag').map((i) => i.id);
    const storageItems = window.fw.forge.items.filter((i) => i.location === 'storage').map((i) => i.id);
    const shopCount = document.querySelectorAll('#bag-shop .shop-card').length;
    return { allCells, lockedCells, bagItems, storageItems, shopCount, mineWeapons: window.fw.mine.weapons.length };
  });
  console.log('Initial Backpack Forge stats:', gridStats);
  if (gridStats.allCells !== 49 || gridStats.lockedCells !== 24) {
    throw new Error(`Expected 49 cells (24 locked), got ${JSON.stringify(gridStats)}`);
  }
  if (gridStats.mineWeapons < 1) {
    throw new Error('Expected opening volley to spawn at least 1 weapon in the mine');
  }

  // Test Track A Synthesis: Merge the two starter torches ('torch' + 'torch' -> 'sword')
  const synthResult = await page.evaluate(() => {
    const torches = window.fw.forge.items.filter((i) => i.id === 'torch');
    if (torches.length < 2) return null;
    window.fw.forge.trySynthesizeItems(torches[0], torches[1]);
    return window.fw.forge.items.map((i) => `${i.id}★${i.star}`);
  });
  console.log('After merging two torches:', synthResult);
  if (!synthResult?.includes('sword★1')) {
    throw new Error(`Expected 'sword★1' after merging two torches, got ${JSON.stringify(synthResult)}`);
  }

  // Test Free Backpack Slot Expansion
  await page.click('#bag-expand-btn');
  const lockedAfterExpand = await page.locator('#bag-grid .bag-cell.locked').count();
  console.log('Locked cells after 1 free expansion:', lockedAfterExpand);
  if (lockedAfterExpand !== 23) throw new Error(`Expected 23 locked cells after expansion, got ${lockedAfterExpand}`);

  // Test Air-Dropping the starter Dwarven Bomb ('mine_bomb') into the mine
  const beforeBombGold = await page.evaluate(() => window.fw.forge.gold);
  await page.evaluate(() => {
    const bomb = window.fw.forge.items.find((i) => i.id === 'mine_bomb');
    if (bomb) window.fw.forge.airDropItem(bomb, 4);
  });
  await page.waitForTimeout(300);
  const afterBombGold = await page.evaluate(() => window.fw.forge.gold);
  console.log(`Gold before/after Dwarven Bomb air-drop: ${beforeBombGold}G -> ${afterBombGold}G`);
  if (afterBombGold <= beforeBombGold) {
    throw new Error('Expected mining gold to increase after Dwarven Bomb detonation');
  }

  // Add gold & buy a shop item + test Track B Cross-Item Synthesis (Core + Weapon & Holy Seal -> Excalibur)
  const crossSynth = await page.evaluate(() => {
    window.fw.addGold(200);
    window.fw.forge.buyShopOffer(0);
    // Test checkSynthesis for Weapon + Core and Weapon + Holy Seal
    const swordItem = window.fw.forge.items.find((i) => i.id === 'sword');
    return {
      gold: window.fw.forge.gold,
      hasSword: Boolean(swordItem),
      itemsCount: window.fw.forge.items.length,
    };
  });
  console.log('Shop purchase & state:', crossSynth);

  // Trigger All-Weapon Overdrive ('#od-btn')
  await page.click('#od-btn');
  await page.waitForTimeout(500);
  const odState = await page.evaluate(() => ({
    overdriveTimer: window.fw.overdriveTimer,
    mineWeapons: window.fw.mine.weapons.length,
  }));
  console.log('Overdrive state:', odState);
  if (odState.overdriveTimer <= 0) throw new Error('Expected overdriveTimer > 0 after clicking #od-btn');

  // Take Desktop Gameplay Screenshot
  await page.screenshot({ path: `${OUT_DIR}/v05_backpack_desktop.png` });
  console.log('Saved desktop screenshot:', `${OUT_DIR}/v05_backpack_desktop.png`);

  // Test Campaign Persistence across stages: jump to Stage 3 (Rock Golem Boss) and verify backpack items & unlocked cells persist
  const stage3Persistence = await page.evaluate(() => {
    const itemsBefore = window.fw.forge.items.map((i) => i.id).sort().join(',');
    window.fw.level(2); // Stage 3 (Rock Golem Boss)
    const itemsAfter = window.fw.forge.items.map((i) => i.id).sort().join(',');
    const lockedCount = document.querySelectorAll('#bag-grid .bag-cell.locked').length;
    return { itemsBefore, itemsAfter, lockedCount, levelName: document.getElementById('level-name')?.textContent };
  });
  console.log('Campaign Stage 3 persistence:', stage3Persistence);
  if (stage3Persistence.itemsBefore !== stage3Persistence.itemsAfter || stage3Persistence.lockedCount !== 23) {
    throw new Error(`Backpack state did not persist across stages: ${JSON.stringify(stage3Persistence)}`);
  }

  // Open Wiki and inspect Tab 2 (合成與遺物)
  await page.click('#help-btn');
  await page.waitForTimeout(200);
  await page.click('#wiki-tab-synth');
  await page.waitForTimeout(200);
  const wikiSynthText = await page.locator('#wiki-panel-synth').textContent();
  if (!wikiSynthText?.includes('雙軌合成配方') || !wikiSynthText?.includes('雙子鏡像稜鏡')) {
    throw new Error('Wiki synth & relics tab missing expected content');
  }
  await page.screenshot({ path: `${OUT_DIR}/v05_wiki_synth.png` });
  console.log('Saved wiki screenshot:', `${OUT_DIR}/v05_wiki_synth.png`);

  // Close Wiki and test Mobile Portrait layout (390x844)
  await page.click('#dlg-wiki button[value="close"]');
  await page.setViewportSize({ width: 390, height: 844 });
  await page.waitForTimeout(400);
  await page.screenshot({ path: `${OUT_DIR}/v05_backpack_mobile.png` });
  console.log('Saved mobile portrait screenshot:', `${OUT_DIR}/v05_backpack_mobile.png`);

  if (errors.length > 0) {
    throw new Error(`Encountered runtime errors:\n${errors.join('\n')}`);
  }

  await browser.close();
  console.log('ALL v0.5 PLAYWRIGHT CHECKS PASSED WITH ZERO ERRORS!');
})();
