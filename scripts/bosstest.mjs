// Boss-level / long-run test: jumps to a level, spawns weapons periodically, logs state, screenshots.
// node scripts/bosstest.mjs <url> <outDir> <level> <seconds>
import { chromium } from 'playwright-core';

const [url = 'http://localhost:5173/', outDir = '.', level = '2', secs = '40'] = process.argv.slice(2);
const browser = await chromium.launch({
  executablePath: 'C:/Program Files/Google/Chrome/Application/chrome.exe',
  args: ['--use-angle=swiftshader', '--enable-unsafe-swiftshader', '--ignore-gpu-blocklist'],
});
const page = await browser.newPage({ viewport: { width: 1600, height: 900 } });
const errors = [];
page.on('console', (m) => { if (m.type() === 'error') errors.push(m.text()); });
page.on('pageerror', (e) => errors.push(`${e.message}\n${e.stack}`));
await page.goto(url);
await page.waitForTimeout(800);
await page.click('#dlg-title button[value=start]');
await page.waitForTimeout(300);
await page.evaluate((lv) => window.fw.level(Number(lv)), level);
const ids = ['axe', 'hammer', 'blade', 'halberd', 'dagger', 'scythe', 'sword', 'meteor', 'spear', 'boomerang'];
const t0 = Date.now();
let k = 0;
while (Date.now() - t0 < Number(secs) * 1000) {
  const st = await page.evaluate((id) => {
    const m = window.fw.mine;
    if (!m.ended && m.weapons.length < 6) window.fw.spawn(id, 1.3);
    return { t: m.time.toFixed(1), w: m.weapons.length, e: m.enemies.length, depth: m.depthRows, gap: m.lavaGap.toFixed(1), boss: m.boss ? Math.round(m.boss.hp) : null, ended: m.ended, fps: 0 };
  }, ids[k++ % ids.length]);
  console.log(JSON.stringify(st));
  if (k % 4 === 0) await page.screenshot({ path: `${outDir}/boss_${k}.png` });
  if (st.ended) break;
  await page.waitForTimeout(2500);
}
await page.screenshot({ path: `${outDir}/boss_end.png` });
console.log(errors.slice(0, 20).join('\n') || 'no errors');
await browser.close();
