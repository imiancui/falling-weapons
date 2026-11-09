// Comprehensive end-to-end verification script for v0.4 features
import { chromium } from 'playwright-core';
import fs from 'node:fs';

const url = process.argv[2] ?? 'https://ian-9950x3d.tailfe8b74.ts.net:5174/';
const outDir = process.argv[3] ?? '.';
fs.mkdirSync(outDir, { recursive: true });

const browser = await chromium.launch({
  executablePath: 'C:/Program Files/Google/Chrome/Application/chrome.exe',
  args: ['--use-angle=swiftshader', '--enable-unsafe-swiftshader', '--ignore-gpu-blocklist'],
});
const page = await browser.newPage({ viewport: { width: 1600, height: 900 } });
const errors = [];
page.on('console', (m) => { if (m.type() === 'error') errors.push(`[console.error] ${m.text()}`); });
page.on('pageerror', (e) => errors.push(`[pageerror] ${e.message}\n${e.stack}`));

await page.goto(url, { waitUntil: 'networkidle' });
await page.waitForTimeout(700);

// 1. Title screen dual-mode buttons & Wiki (seal block + all 3 Bosses)
const hasCampaignBtn = await page.locator('#dlg-title button[value="campaign"]').isVisible();
const hasEndlessBtn = await page.locator('#dlg-title button[value="endless"]').isVisible();
await page.screenshot({ path: `${outDir}/v04_title.png` });

await page.click('#title-wiki-btn');
await page.waitForTimeout(250);
await page.click('#wiki-tab-blocks');
await page.waitForTimeout(200);
const blocksText = await page.locator('#wiki-panel-blocks').innerText();
const hasSealInWiki = blocksText.includes('符文結界石');

await page.click('#wiki-tab-enemies');
await page.waitForTimeout(250);
const enemiesText = await page.locator('#wiki-panel-enemies').innerText();
const hasAll3Bosses =
  enemiesText.includes('岩石巨像') &&
  enemiesText.includes('劇毒蛛后') &&
  enemiesText.includes('深淵炎魔');
await page.screenshot({ path: `${outDir}/v04_wiki_bosses.png` });

await page.click('#dlg-wiki button[value="close"]');
await page.waitForTimeout(200);

// 2. Start 10-Stage Campaign -> verify 7/7 AP, Manual Overdrive, and 8s cooldown refill
await page.click('#dlg-title button[value="campaign"]');
await page.waitForTimeout(450);

const startStamina = await page.evaluate(() => window.fw.stamina);
await page.evaluate(() => {
  window.fw.spawn('axe', 1.2);
  window.fw.spawn('blade', 1.2);
  window.fw.setStamina(4);
});
await page.waitForTimeout(200);
await page.click('#od-btn');
await page.waitForTimeout(250);

const odState = await page.evaluate(() => ({
  odTimer: window.fw.overdriveTimer,
  odActive: window.fw.mine.overdriveActive,
  odDmgMul: window.fw.mine.overdriveDmgMul,
  hasOdClass: document.getElementById('stamina-row').classList.contains('overdrive'),
  lbl: document.getElementById('stamina-lbl').textContent,
}));
await page.screenshot({ path: `${outDir}/v04_overdrive.png` });

await page.evaluate(() => window.fw.endOverdrive());
await page.waitForTimeout(250);
const afterOdState = await page.evaluate(() => ({
  odTimer: window.fw.overdriveTimer,
  odActive: window.fw.mine.overdriveActive,
  staminaAfterRefill: window.fw.stamina,
}));

// 3. Verify Gatekeeper Seal Chamber on Stage 1 (seal blocks + Elite guards + unlock on kill)
const gateCheckBefore = await page.evaluate(() => {
  const m = window.fw.mine;
  // Find first seal row
  let sealRow = -1;
  for (let r = 8; r < m.rows; r++) {
    if (m.block(r, 4)?.type === 'seal') { sealRow = r; break; }
  }
  for (const w of [...m.weapons]) m.killWeapon(w);
  m.deepestY = (sealRow - 1) * m.B;
  m.snapCamera();
  const guards = m.enemies.filter((e) => !e.dead && e.gateId !== null && Math.abs(e.y / m.B - sealRow) < 4);
  return {
    sealRow,
    sealTypeBefore: m.block(sealRow, 4)?.type ?? null,
    guardCount: guards.length,
    hasElite: guards.some((g) => g.isElite),
    gateId: guards[0]?.gateId ?? null,
  };
});
await page.waitForTimeout(450);
await page.screenshot({ path: `${outDir}/v04_seal_chamber.png` });

const gateCheckAfter = await page.evaluate(({ sealRow, gateId }) => {
  const m = window.fw.mine;
  for (const e of [...m.enemies]) {
    if (!e.dead && e.gateId === gateId) m.damageEnemy(e, 999999, { kind: 'holy', element: 'holy' });
  }
  return {
    sealAfterKill: m.block(sealRow, 4)?.type ?? null,
    gatesCleared: m.gatesCleared,
  };
}, gateCheckBefore);

// 4. Verify Stage 6 Boss (Spider Queen) & Stage 10 Boss (Abyss Balrog) + elemental shield break
const spiderBossTest = await page.evaluate(() => {
  window.fw.level(5); // Stage 6
  const m = window.fw.mine;
  const b = m.boss;
  m.deepestY = b.y;
  m.snapCamera();
  b.shieldUntil = m.time + 10;
  const shieldedBefore = b.shielded;
  return { kind: b.kind, maxHp: b.maxHp, shieldedBefore };
});
await page.waitForTimeout(250);
await page.screenshot({ path: `${outDir}/v04_boss_spider_queen.png` });
const spiderShieldBroken = await page.evaluate(() => {
  const m = window.fw.mine;
  m.damageEnemy(m.boss, 100, { kind: 'hit', element: 'poison', crit: true });
  return !m.boss.shielded;
});

const balrogBossTest = await page.evaluate(() => {
  window.fw.level(9); // Stage 10
  const m = window.fw.mine;
  const b = m.boss;
  m.deepestY = b.y;
  m.snapCamera();
  b.shieldUntil = m.time + 10;
  const shieldedBefore = b.shielded;
  return { kind: b.kind, maxHp: b.maxHp, shieldedBefore };
});
await page.waitForTimeout(250);
await page.screenshot({ path: `${outDir}/v04_boss_balrog.png` });
const balrogShieldBroken = await page.evaluate(() => {
  const m = window.fw.mine;
  m.freezeEnemy(m.boss, 2.0);
  return !m.boss.shielded;
});

// 5. Verify Seamless Endless Abyss Mode: dynamic streaming + Gate Clear Perk Modal + 105m Boss Gate
await page.evaluate(() => {
  window.fw.startEndless();
  const m = window.fw.mine;
  window.fw.spawn('titan', 1.5, true);
  window.fw.spawn('excalibur', 1.5, true);
  // Move deepestY near Gate 1 (35m -> row 40)
  m.deepestY = 39 * m.B;
});
await page.waitForTimeout(350);

// Kill Gate 1 guardians -> should pop up Endless Perk Modal!
await page.evaluate(() => {
  const m = window.fw.mine;
  for (const e of [...m.enemies]) {
    if (!e.dead && e.gateId === 1) m.damageEnemy(e, 999999, { kind: 'holy', element: 'holy' });
  }
});
await page.waitForTimeout(300);

const endlessPerkCheck = await page.evaluate(() => {
  const dlg = document.getElementById('dlg-perk');
  const btns = Array.from(dlg.querySelectorAll('button.perk')).map((b) => b.value);
  return {
    perkModalOpen: dlg.open,
    heading: document.getElementById('perk-h').textContent,
    perkOptions: btns,
    hasTimePerk: btns.includes('time'),
  };
});
await page.screenshot({ path: `${outDir}/v04_endless_perk.png` });

// Choose first perk -> verify same Mine instance continues & stream down to 105m Boss Gate!
const mineRefBeforePerk = await page.evaluate(() => {
  window.__testMineRef = window.fw.mine;
  return true;
});
await page.click('#dlg-perk button.perk:first-child');
await page.waitForTimeout(250);

const endlessDeepStream = await page.evaluate(() => {
  const m = window.fw.mine;
  const sameInstance = m === window.__testMineRef;
  // Advance deepestY to 105m Boss Gate (row 5 + 105 = 110)
  m.deepestY = 109 * m.B;
  m.snapCamera();
  return { sameInstance };
});
await page.waitForTimeout(450);

const endlessBoss105 = await page.evaluate(() => {
  const m = window.fw.mine;
  const bossAt105 = m.enemies.find((e) => !e.dead && e.isBoss && e.gateId === 3);
  return {
    rowsGenerated: m.rows,
    depthRows: m.depthRows,
    hasBossGateAt105m: Boolean(bossAt105),
    bossKindAt105m: bossAt105?.kind ?? null,
    sealAt110: m.block(110, 4)?.type ?? null,
  };
});
await page.screenshot({ path: `${outDir}/v04_endless_boss_105m.png` });

const summary = {
  url,
  hasCampaignBtn,
  hasEndlessBtn,
  hasSealInWiki,
  hasAll3Bosses,
  startStamina,
  odState,
  afterOdState,
  gateCheckBefore,
  gateCheckAfter,
  spiderBossTest,
  spiderShieldBroken,
  balrogBossTest,
  balrogShieldBroken,
  endlessPerkCheck,
  mineRefBeforePerk,
  endlessDeepStream,
  endlessBoss105,
  errors,
};

console.log(JSON.stringify(summary, null, 2));
await browser.close();

if (
  errors.length > 0 ||
  !hasCampaignBtn ||
  !hasEndlessBtn ||
  !hasSealInWiki ||
  !hasAll3Bosses ||
  startStamina !== 7 ||
  !odState.odActive ||
  afterOdState.staminaAfterRefill !== 7 ||
  gateCheckBefore.sealTypeBefore !== 'seal' ||
  gateCheckAfter.sealAfterKill !== null ||
  !spiderShieldBroken ||
  !balrogShieldBroken ||
  !endlessPerkCheck.perkModalOpen ||
  endlessPerkCheck.hasTimePerk ||
  !endlessDeepStream.sameInstance ||
  !endlessBoss105.hasBossGateAt105m
) {
  process.exit(1);
}
