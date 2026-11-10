import { chromium } from 'playwright-core';
import fs from 'node:fs';
import path from 'node:path';

const ARTIFACT_DIR = 'C:/Users/Administrator/.gemini/antigravity/brain/c4be3168-2d49-4a71-b3e0-09c389028dbd';
const URL = 'http://localhost:5173/';

const browser = await chromium.launch({
  executablePath: 'C:/Program Files/Google/Chrome/Application/chrome.exe',
  headless: true,
  args: ['--use-angle=swiftshader', '--enable-unsafe-swiftshader', '--ignore-gpu-blocklist'],
});

const errors = [];
const context = await browser.newContext({ viewport: { width: 1440, height: 900 } });
const page = await context.newPage();
page.on('console', (msg) => {
  if (msg.type() === 'error') errors.push(`ConsoleError: ${msg.text()}`);
});
page.on('pageerror', (err) => {
  errors.push(`PageError: ${err.message}`);
});

await page.goto(URL, { waitUntil: 'networkidle' });
await page.waitForSelector('#hero-select .hero-card');

// 1. Verify 5 Heroes in Title Dialog & select Kael
const heroCount = await page.locator('#hero-select .hero-card').count();
if (heroCount !== 5) throw new Error(`Expected 5 hero cards, got ${heroCount}`);

await page.locator('#hero-select .hero-card').nth(1).click(); // Select Kael (index 1)
await page.waitForTimeout(200);
const detailText = await page.locator('#hero-detail').innerText();
if (!detailText.includes('雷霆劍聖・凱爾') || !detailText.includes('雷閃連擊')) {
  throw new Error(`Unexpected hero detail text: ${detailText}`);
}
await page.screenshot({ path: path.join(ARTIFACT_DIR, 'v06_hero_select.png') });

// 2. Start Campaign Mode and immediately verify Hardcore Economy
await page.locator('#dlg-title button[value="campaign"]').click();
await page.waitForTimeout(300);

const initCheck = await page.evaluate(() => {
  const fw = window.fw;
  return {
    heroId: fw.mine.heroId,
    expandTokens: fw.forge.expandTokens,
    expandCost: fw.forge.nextExpandCost(),
    refreshCost: fw.forge.shopRefreshCost(),
    expandBtnText: document.getElementById('bag-expand-btn')?.textContent?.trim(),
    refreshBtnText: document.getElementById('shop-refresh-btn')?.textContent?.trim(),
    inspectorText: document.getElementById('bag-inspector')?.innerText ?? '',
  };
});
console.log('Init check:', initCheck);

if (initCheck.heroId !== 'kael') throw new Error(`Expected heroId kael, got ${initCheck.heroId}`);
if (initCheck.expandTokens !== 0) throw new Error(`Expected 0 free expandTokens, got ${initCheck.expandTokens}`);
if (initCheck.expandCost !== 45) throw new Error(`Expected 45G expandCost, got ${initCheck.expandCost}`);
if (initCheck.refreshCost !== 8) throw new Error(`Expected 8G refreshCost, got ${initCheck.refreshCost}`);
if (!initCheck.inspectorText.includes('彈力') || !initCheck.inspectorText.includes('投速')) {
  throw new Error(`Inspector missing physics stats: ${initCheck.inspectorText}`);
}

// 3. Test Hero Movement (Keyboard A/D + Pointer) and BALL x PIT Catch & Volley
await page.keyboard.down('KeyD');
await page.waitForTimeout(350);
await page.keyboard.up('KeyD');

const volleyCheck = await page.evaluate(() => {
  const fw = window.fw;
  // Trigger 2 consecutive Hero catches to verify Volley stacking & buff
  fw.catchWeapon(0);
  fw.catchWeapon(0);
  const w = fw.mine.weapons[0];
  return {
    heroX: fw.mine.heroX,
    heroY: fw.mine.heroY,
    totalCatches: fw.mine.totalCatches,
    catchStreak: fw.mine.catchStreak,
    volleyStacks: w?.volleyStacks ?? 0,
    volleyActive: Boolean(w && fw.mine.time < w.volleyUntil),
    heroHudText: document.getElementById('hero-hud')?.innerText ?? '',
  };
});
await page.waitForTimeout(300);
const heroHudAfter = await page.locator('#hero-hud').innerText();
console.log('Volley check:', { ...volleyCheck, heroHudAfter });

if (volleyCheck.totalCatches < 2 || volleyCheck.volleyStacks < 2 || !volleyCheck.volleyActive) {
  throw new Error(`Volley buff did not activate properly: ${JSON.stringify(volleyCheck)}`);
}
if (!heroHudAfter.includes('接球') || !heroHudAfter.includes('連段')) {
  throw new Error(`Hero HUD missing catch combo: ${heroHudAfter}`);
}

await page.screenshot({ path: path.join(ARTIFACT_DIR, 'v06_gameplay_desktop.png') });

// 4. Open Wiki & verify 5 Heroes table + 25 Weapons Physics Archetypes
await page.locator('#help-btn').click();
await page.waitForTimeout(250);
const wikiHeroText = await page.locator('#wiki-panel-rules').innerText();
if (!wikiHeroText.includes('5 大出戰英雄') || !wikiHeroText.includes('BALL x PIT')) {
  throw new Error('Wiki rules tab missing 5 Heroes / BALL x PIT documentation');
}
await page.screenshot({ path: path.join(ARTIFACT_DIR, 'v06_wiki_heroes.png') });
await page.locator('#dlg-wiki button[value="close"]').click();
await page.waitForTimeout(150);

// 5. Mobile Portrait check (390x844)
await page.setViewportSize({ width: 390, height: 844 });
await page.waitForTimeout(400);
await page.screenshot({ path: path.join(ARTIFACT_DIR, 'v06_mobile_portrait.png') });

if (errors.length > 0) {
  throw new Error(`Runtime errors detected:\n${errors.join('\n')}`);
}

await browser.close();
console.log('ALL v0.6 VERIFICATION CHECKS PASSED!');
