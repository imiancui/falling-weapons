// Quick visual check of the mine pane: node scripts/shot.mjs <url> <out.png> [waitMs] [portrait]
import { chromium } from 'playwright-core';

const [url = 'http://localhost:5173/', out = 'shot.png', wait = '4000', orient] = process.argv.slice(2);
const viewport = orient === 'portrait' ? { width: 430, height: 900 } : { width: 1600, height: 900 };
const browser = await chromium.launch({
  executablePath: 'C:/Program Files/Google/Chrome/Application/chrome.exe',
  args: ['--use-angle=swiftshader', '--enable-unsafe-swiftshader', '--ignore-gpu-blocklist'],
});
const page = await browser.newPage({ viewport });
const errors = [];
page.on('console', (m) => { if (m.type() === 'error') errors.push(m.text()); });
page.on('pageerror', (e) => errors.push(e.message));
await page.goto(url);
await page.waitForTimeout(800);
await page.click('#dlg-title button[value=start]');
await page.waitForTimeout(Number(wait));
await page.screenshot({ path: out });
console.log(errors.join('\n') || 'ok');
await browser.close();
