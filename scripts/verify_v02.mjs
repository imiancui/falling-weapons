// Comprehensive verification script for v0.2 features
import { chromium } from 'playwright-core';

const url = process.argv[2] ?? 'http://localhost:5173/';
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
await page.waitForTimeout(800);

// 1. Open Wiki from Title screen, test tabs & 25-weapon filter
await page.click('#title-wiki-btn');
await page.waitForTimeout(300);
await page.click('#wiki-tab-weapons');
await page.waitForTimeout(300);
const weaponCountAll = await page.locator('#wiki-weapons-table tbody tr:not([hidden])').count();
await page.screenshot({ path: `${outDir}/v02_wiki_weapons.png` });

await page.click('.filter-chip[data-filter="cat:cum"]');
const weaponCountCum = await page.locator('#wiki-weapons-table tbody tr:not([hidden])').count();
await page.click('.filter-chip[data-filter="all"]');

// Test keyboard ArrowRight on tablist
await page.focus('#wiki-tab-weapons');
await page.keyboard.press('ArrowRight');
const activeTabAfterRight = await page.evaluate(() => document.activeElement?.id);

// Close Wiki -> verify Title dialog is still open, then start game
await page.click('#dlg-wiki button[value="close"]');
await page.waitForTimeout(200);
await page.click('#dlg-title button[value="start"]');
await page.waitForTimeout(500);

// 2. Select a tile on the Match-3 board + do swaps to verify non-glaring selection border
const box = await page.locator('#board-pane canvas').boundingBox();
const size = Math.min(box.width, box.height - 120) * 0.9;
const cell = size / 8.9;
const cx = box.x + box.width / 2, cy = box.y + box.height / 2 + 20;
await page.mouse.click(cx - 1.5 * cell, cy - 0.5 * cell);
await page.waitForTimeout(300);
await page.screenshot({ path: `${outDir}/v02_board_select.png` });

// 3. Test duplicate weapon upgrade (< Lv5) vs multi-copy unlock (Lv5) + Excalibur decay + Katar + Flameblade
const dupTest = await page.evaluate(() => {
  window.fw.spawn('katar', 1.0);
  const count1 = window.fw.mine.weapons.filter((w) => w.def.id === 'katar').length;
  window.fw.spawn('katar', 1.2); // should upgrade, NOT add 2nd copy
  const wKatar = window.fw.mine.weapons.find((w) => w.def.id === 'katar');
  const countBeforeLv5 = window.fw.mine.weapons.filter((w) => w.def.id === 'katar').length;
  const stacksBeforeLv5 = wKatar.dupStacks;

  // Now unlock poison Lv5 and spawn again -> should spawn 2nd copy!
  window.fw.maxReso('poison');
  window.fw.spawn('katar', 1.0);
  const countAfterLv5 = window.fw.mine.weapons.filter((w) => w.def.id === 'katar').length;

  // Spawn Flameblade, Excalibur, Drill, Core Orb, Frostclaw, Titan, Hydra
  window.fw.spawn('flameblade', 1.0);
  window.fw.spawn('excalibur', 1.0);
  window.fw.spawn('frostclaw', 1.0);
  const exHp0 = window.fw.mine.weapons.find((w) => w.def.id === 'excalibur').hp;
  return { count1, countBeforeLv5, stacksBeforeLv5, countAfterLv5, exHp0 };
});

await page.waitForTimeout(2500);
const exHpAfter = await page.evaluate(() => {
  const ex = window.fw.mine.weapons.find((w) => w.def.id === 'excalibur');
  return ex ? Math.round(ex.hp) : -1;
});
await page.screenshot({ path: `${outDir}/v02_combat.png` });

// 4. Test approaching lava visibility (set lava 4.2 blocks above deepest point!)
await page.evaluate(() => window.fw.setLava(4.2));
await page.waitForTimeout(800);
await page.screenshot({ path: `${outDir}/v02_lava_approaching.png` });

// Verify touching lava (`setLava(-0.5)`) does NOT instantly end game while weapons are still alive!
const lavaSurvival = await page.evaluate(() => {
  window.fw.setLava(-0.5);
  return { endedImmediately: window.fw.mine.ended, aliveWeapons: window.fw.mine.weapons.length };
});
await page.waitForTimeout(600);
const stillAliveInLava = await page.evaluate(() => ({
  endedAfter600ms: window.fw.mine.ended,
  aliveWeapons: window.fw.mine.weapons.length,
}));

// 5. Mobile portrait Wiki check (responsive stacked table)
await page.setViewportSize({ width: 412, height: 880 });
await page.waitForTimeout(300);
await page.click('#help-btn');
await page.waitForTimeout(300);
await page.click('#wiki-tab-weapons');
await page.waitForTimeout(300);
await page.screenshot({ path: `${outDir}/v02_wiki_mobile.png` });

console.log(JSON.stringify({
  weaponCountAll,
  weaponCountCum,
  activeTabAfterRight,
  dupTest,
  exHpAfter,
  lavaSurvival,
  stillAliveInLava,
  errors,
}, null, 2));

await browser.close();
