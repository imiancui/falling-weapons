// Headless smoke test: loads the game, starts a run, plays random swaps, takes screenshots, reports console errors.
import { chromium } from 'playwright-core';

const url = process.argv[2] ?? 'http://localhost:5173/';
const outDir = process.argv[3] ?? '.';
const viewport = process.argv[4] === 'portrait' ? { width: 430, height: 900 } : { width: 1600, height: 900 };
const browser = await chromium.launch({
  executablePath: 'C:/Program Files/Google/Chrome/Application/chrome.exe',
  args: ['--use-angle=swiftshader', '--enable-unsafe-swiftshader', '--ignore-gpu-blocklist'],
});
const page = await browser.newPage({ viewport });
const errors = [];
page.on('console', (m) => { if (m.type() === 'error' || m.type() === 'warning') errors.push(`[${m.type()}] ${m.text()}`); });
page.on('pageerror', (e) => errors.push(`[pageerror] ${e.message}\n${e.stack}`));
await page.goto(url);
await page.waitForTimeout(1500);
await page.screenshot({ path: `${outDir}/shot_title.png` });
await page.click('#dlg-title button[value=start]');
await page.waitForTimeout(500);

// try random swaps on the board by dragging
const box = await page.locator('#board-pane canvas').boundingBox();
async function randomSwap() {
  const size = Math.min(box.width, box.height - 120) * 0.9;
  const cell = size / 8.9;
  const cx = box.x + box.width / 2, cy = box.y + box.height / 2 + 20;
  const r = Math.floor(Math.random() * 8), c = Math.floor(Math.random() * 8);
  const x = cx + (c - 3.5) * cell, y = cy + (r - 3.5) * cell;
  const dir = [[1, 0], [-1, 0], [0, 1], [0, -1]][Math.floor(Math.random() * 4)];
  await page.mouse.move(x, y);
  await page.mouse.down();
  await page.mouse.move(x + dir[0] * cell, y + dir[1] * cell, { steps: 4 });
  await page.mouse.up();
}
for (let i = 0; i < 40; i++) {
  await randomSwap();
  await page.waitForTimeout(250);
}
await page.screenshot({ path: `${outDir}/shot_play1.png` });
// spawn every weapon via debug helper to exercise abilities
await page.evaluate(() => {
  const ids = ['axe', 'hammer', 'blade', 'halberd', 'dagger', 'scythe', 'sword', 'meteor', 'spear', 'boomerang'];
  ids.forEach((id, i) => setTimeout(() => window.fw.spawn(id, 1.3), i * 300));
});
for (let i = 0; i < 30; i++) {
  await randomSwap();
  await page.waitForTimeout(300);
}
await page.screenshot({ path: `${outDir}/shot_play2.png` });
await page.waitForTimeout(6000);
await page.screenshot({ path: `${outDir}/shot_play3.png` });
const info = await page.evaluate(() => {
  const m = window.fw.mine;
  return { weapons: m.weapons.length, enemies: m.enemies.length, depth: m.depthRows, time: m.time, lavaGap: m.lavaGap, ended: m.ended, bodies: m.engine.world.bodies.length };
});
console.log(JSON.stringify(info));
console.log(errors.slice(0, 30).join('\n') || 'no console errors');
await browser.close();
