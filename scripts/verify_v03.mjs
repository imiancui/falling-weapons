// End-to-end verification for v0.3 features
import { chromium } from 'playwright-core';

const url = process.argv[2] ?? 'https://ian-9950x3d.tailfe8b74.ts.net:5174/';
const outDir = process.argv[3] ?? '.';

const browser = await chromium.launch({
  executablePath: 'C:/Program Files/Google/Chrome/Application/chrome.exe',
  args: ['--use-angle=swiftshader', '--enable-unsafe-swiftshader', '--ignore-gpu-blocklist'],
});
const page = await browser.newPage({ viewport: { width: 1600, height: 900 } });
const errors = [];
page.on('console', (m) => { if (m.type() === 'error') errors.push(`[console.error] ${m.text()}`); });
page.on('pageerror', (e) => errors.push(`[pageerror] ${e.message}\n${e.stack}`));

await page.goto(url);
await page.waitForTimeout(600);
await page.click('#dlg-title button[value="start"]');
await page.waitForTimeout(200);

// 1. Check 42:58 layout & starterWeapon === false & Focus accumulation at full stamina
const initialCheck = await page.evaluate(() => {
  const bW = document.getElementById('board-pane').clientWidth;
  const mW = document.getElementById('mine-pane').clientWidth;
  return {
    ratioBoardPct: Math.round((bW / (bW + mW)) * 100),
    ratioMinePct: Math.round((mW / (bW + mW)) * 100),
    initialWeapons: window.fw.mine.weapons.length,
    initialStamina: window.fw.stamina,
  };
});

// Wait 2.2s at 5/5 stamina -> Focus Bonus should accumulate!
await page.waitForTimeout(2200);
const focusCheck = await page.evaluate(() => ({
  focusVal: Number(window.fw.focus.toFixed(3)),
  badgeVisible: !document.getElementById('focus-badge').hidden,
  badgeText: document.getElementById('focus-badge').textContent,
}));

// 2. Check 40% duplicate heal + weapon card lock-on + camera wheel pan + barrel/crystal generation
const gameplayCheck = await page.evaluate(() => {
  const m = window.fw.mine;
  // Count barrels, crystals, and obsidian in Level 1 (hard strata!)
  let barrels = 0, crystals = 0, obsidian = 0;
  for (let r = 0; r < m.rows; r++) {
    for (let c = 1; c < m.cols - 1; c++) {
      const b = m.block(r, c);
      if (b?.type === 'barrel') barrels++;
      if (b?.type === 'crystal') crystals++;
      if (b?.type === 'obsidian') obsidian++;
    }
  }

  // Test 40% duplicate heal on 'axe' (baseHp = 200)
  window.fw.spawn('axe', 1.0);
  const axe = m.weapons.find((w) => w.def.id === 'axe');
  axe.hp = 50;
  window.fw.spawn('axe', 1.0); // duplicate -> +40% of 200 = +80 -> ~130!
  const hpAfterDup = Math.round(axe.hp);

  // Spawn a couple more weapons for visual check
  window.fw.spawn('katar', 1.15);
  window.fw.spawn('flameblade', 1.1);
  return { barrels, crystals, obsidian, hpAfterDup };
});

await page.waitForTimeout(600);

// Click first weapon card to lock camera
await page.click('#weapon-cards .card-btn >> nth=0');
await page.waitForTimeout(300);
const modeAfterLock = await page.evaluate(() => ({
  mode: window.fw.mine.cameraMode,
  resetVisible: !document.getElementById('cam-reset-btn').hidden,
  resetText: document.getElementById('cam-reset-btn').textContent,
}));

await page.screenshot({ path: `${outDir}/v03_play.png` });

// Wheel scroll on mine pane -> manual mode -> click reset -> auto mode
const mineBox = await page.locator('#mine-pane canvas').boundingBox();
await page.mouse.move(mineBox.x + mineBox.width / 2, mineBox.y + mineBox.height / 2);
await page.mouse.wheel(0, 400);
await page.waitForTimeout(250);
const modeAfterWheel = await page.evaluate(() => window.fw.mine.cameraMode);
await page.screenshot({ path: `${outDir}/v03_pan_strata.png` });

await page.click('#cam-reset-btn');
await page.waitForTimeout(150);
const modeAfterReset = await page.evaluate(() => window.fw.mine.cameraMode);

// Test blocked swap when stamina < 1
await page.evaluate(() => window.fw.setStamina(0.3));
await page.waitForTimeout(200);
const boardBox = await page.locator('#board-pane canvas').boundingBox();
await page.mouse.move(boardBox.x + boardBox.width / 2, boardBox.y + boardBox.height / 2);
await page.mouse.down();
await page.mouse.move(boardBox.x + boardBox.width / 2 + 50, boardBox.y + boardBox.height / 2, { steps: 3 });
await page.mouse.up();
await page.waitForTimeout(200);
const staminaBlockedCheck = await page.evaluate(() => ({
  warnClass: document.getElementById('stamina-row').classList.contains('warn'),
  staminaLabel: document.getElementById('stamina-lbl').textContent,
}));
await page.screenshot({ path: `${outDir}/v03_no_stamina.png` });

// Open Wiki -> Blocks tab to verify Barrel & Crystal entries
await page.click('#help-btn');
await page.waitForTimeout(250);
await page.click('#wiki-tab-blocks');
await page.waitForTimeout(250);
const blockRows = await page.locator('#wiki-panel-blocks tbody tr').count();
await page.screenshot({ path: `${outDir}/v03_wiki_blocks.png` });

console.log(JSON.stringify({
  initialCheck,
  focusCheck,
  gameplayCheck,
  modeAfterLock,
  modeAfterWheel,
  modeAfterReset,
  staminaBlockedCheck,
  blockRows,
  errors,
}, null, 2));

await browser.close();
