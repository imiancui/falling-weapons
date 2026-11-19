var e=Object.create,t=Object.defineProperty,n=Object.getOwnPropertyDescriptor,r=Object.getOwnPropertyNames,i=Object.getPrototypeOf,a=Object.prototype.hasOwnProperty,o=(e,t)=>()=>(t||(e((t={exports:{}}).exports,t,t.exports),e=null),t.exports),s=(e,i,o,s)=>{if(i&&typeof i==`object`||typeof i==`function`)for(var c=r(i),l=0,u=c.length,d;l<u;l++)d=c[l],!a.call(e,d)&&d!==o&&t(e,d,{get:(e=>i[e]).bind(null,d),enumerable:!(s=n(i,d))||s.enumerable});return e},c=(n,r,o)=>(o=n==null?{}:e(i(n)),s(r||!n||!n.__esModule||!a.call(n,`default`)?t(o,`default`,{value:n,enumerable:!0}):o,n));(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),t.credentials=e.crossOrigin===`use-credentials`?`include`:e.crossOrigin===`anonymous`?`omit`:`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();var l=[`earth`,`thunder`,`poison`,`fire`,`ice`],u={earth:{name:`土`,color:12618314,css:`#c08a4a`,resonance:`範圍`,resonanceDesc:`每級 +12% 範圍（Lv5 +60%）`,icon:`🟫`},thunder:{name:`雷`,color:16767050,css:`#ffd84a`,resonance:`連鎖`,resonanceDesc:`每級 +1 連鎖目標（Lv5 +5）`,icon:`⚡`},poison:{name:`毒`,color:8314970,css:`#7ee05a`,resonance:`持續`,resonanceDesc:`每級 +1.0 秒中毒時間（Lv5 +5s）`,icon:`☠`},fire:{name:`火`,color:16734770,css:`#ff5a32`,resonance:`燃燒`,resonanceDesc:`每級 +20% 燃燒傷害（Lv5 +100%）`,icon:`🔥`},ice:{name:`冰`,color:7001343,css:`#6ad4ff`,resonance:`冰凍`,resonanceDesc:`每級 +0.4 秒冰凍時間（Lv5 +2s）`,icon:`❄`}},d={name:`聖`,color:16770688,css:`#ffe680`,icon:`✨`};function f(e){return e===`holy`?d:u[e]}var p={bardin:{id:`bardin`,name:`矮人鐵匠・巴林`,title:`⛏️ 土屬＆重武破甲流`,element:`earth`,css:`#e8a858`,color:15247448,moveSpeed:1,catchWidth:1.45,specialtyDesc:`土屬與 2×2 重型／傳說武器傷害 +30%，對礦石與首領護盾破甲效率 +25%`,volleyName:`震地重擊`,volleyDesc:`接住反彈武器重投時，下次撞擊額外引爆 2.6 格震地波（60% 範圍傷）並對首領護盾造成 2 倍破盾！`,starterItems:[{id:`axe`,location:`bag`,row:2,col:2,slot:-1},{id:`pick`,location:`bag`,row:2,col:4,slot:-1},{id:`whetstone`,location:`bag`,row:2,col:1,slot:-1},{id:`mine_bomb`,location:`storage`,row:-1,col:-1,slot:0}]},kael:{id:`kael`,name:`雷霆劍聖・凱爾`,title:`⚡ 雷屬＆超彈疾速流`,element:`thunder`,css:`#ffe252`,color:16769618,moveSpeed:1.25,catchWidth:1.75,specialtyDesc:`英雄移速 +25%、接球寬度 +20%；雷屬與彈珠型武器飛行及反彈速度 +25%`,volleyName:`雷閃連擊`,volleyDesc:`接球瞬間直接對下方最近 3 名敵人劈下 120% 連鎖閃電，且該武器 5 秒內碰撞間隔減半！`,starterItems:[{id:`blade`,location:`bag`,row:2,col:2,slot:-1},{id:`baton`,location:`bag`,row:2,col:4,slot:-1},{id:`gear`,location:`bag`,row:2,col:1,slot:-1},{id:`mine_bomb`,location:`storage`,row:-1,col:-1,slot:0}]},vera:{id:`vera`,name:`暗影刺客・薇拉`,title:`☠️ 毒屬＆爆擊迴旋流`,element:`poison`,css:`#7aff58`,color:8060760,moveSpeed:1.15,catchWidth:1.5,specialtyDesc:`毒屬與爆擊／迴旋型武器爆擊率 +25%、爆擊傷害 +35%`,volleyName:`致命塗毒`,volleyDesc:`接球重投後 5 秒內每次碰撞 100% 必定爆擊且劇毒層數 ×2；每接球 3 次額外射出 1 把劇毒飛針！`,starterItems:[{id:`dagger`,location:`bag`,row:2,col:2,slot:-1},{id:`needle`,location:`bag`,row:2,col:4,slot:-1},{id:`whetstone`,location:`bag`,row:2,col:1,slot:-1},{id:`mine_bomb`,location:`storage`,row:-1,col:-1,slot:0}]},ignis:{id:`ignis`,name:`烈焰狂戰・伊格`,title:`🔥 火屬＆範圍爆破流`,element:`fire`,css:`#ff6438`,color:16737336,moveSpeed:1.05,catchWidth:1.45,specialtyDesc:`火屬與刀劍／爆破型武器傷害 +35%，燃燒地面持續時間與蔓延率 +30%`,volleyName:`烈焰流星`,volleyDesc:`接球重投後武器化為火流星，飛行沿途灑落火苗並在首次撞擊時引爆 2.4 格烈焰火柱（150% 火傷）！`,starterItems:[{id:`sword`,location:`bag`,row:2,col:2,slot:-1},{id:`torch`,location:`bag`,row:2,col:4,slot:-1},{id:`whetstone`,location:`bag`,row:2,col:1,slot:-1},{id:`mine_bomb`,location:`storage`,row:-1,col:-1,slot:0}]},iris:{id:`iris`,name:`極光聖女・艾莉絲`,title:`❄️ 冰屬＆神聖續航流`,element:`ice`,css:`#7ee8ff`,color:8317183,moveSpeed:1.1,catchWidth:1.6,specialtyDesc:`冰屬與神聖武器挖礦耐久耗損 -30%，✨ 聖劍自然流失壽命速度減緩 -35%`,volleyName:`極光祝禱`,volleyDesc:`接球瞬間為場上全體武器回復 12% HP（含聖劍），並使該武器 5 秒內附帶極寒冰蝕（目標受傷 +50%）！`,starterItems:[{id:`spear`,location:`bag`,row:2,col:2,slot:-1},{id:`icicle`,location:`bag`,row:2,col:4,slot:-1},{id:`plate`,location:`bag`,row:2,col:1,slot:-1},{id:`heal_potion`,location:`storage`,row:-1,col:-1,slot:0}]}},m=[p.bardin,p.kael,p.vera,p.ignis,p.iris],h={bagGridSize:7,bagStartUnlocked:25,storageSlots:6,shopSlots:5,startGold:24,passiveGoldPerSec:.15,shopRefreshCost:12,shopRefreshCostStep:4,expandSlotBaseCost:60,expandSlotCostStep:25,sellRefundRatio:.5,airDropPowerMul:1.35,star2Mul:1.65,star3Mul:2.6,star2CdMul:.88,star3CdMul:.76,overdriveCooldownSec:18,overdriveSec:6.5,overdriveHitCdMul:.55,overdriveUltRateMul:1.8,overdriveBaseDmgBonus:.35,overdriveStackDmgBonus:.1,heroLineGapRows:6.5,volleyBuffSec:5,volleyBaseDmgBonus:.35,volleyStackDmgBonus:.15,volleyMaxStacks:5,volleySpeedMul:1.25,volleyHealPct:.22,heavyVolleyDmgMul:1.6,missCeilingWearPct:.08,enemyHpHardcoreMul:2.35,blockHpHardcoreMul:1.85,staminaMax:7,refundTier1Count:8,refundTier2Count:14,maxRefundsPerCycle:4,endlessGateEvery:35,endlessEnemyScalePerGate:1.45,endlessBlockScalePerGate:1.18,endlessLavaBaseSpeed:.23,endlessLavaAccelPerGate:.015,endlessLavaMaxSpeed:.52,endlessResoExtraBonus:.03,boardSize:8,t0Threshold:3,t1Threshold:4,t2Threshold:6,t3Threshold:9,holyTotalThreshold:20,cumThreshold:30,resonanceMaxLv:5,powerPerExtra:.12,dupBoost:.2,holyDupBoost:.25,dupHealPct:.4,maxDupStacks:5,heartHealPct:.08,heartShieldCount:7,heartShieldSec:3,heartWeight:.7,hintDelay:5,block:40,cols:9,airRows:5,gravity:.42,maxFall:7.5,hitCooldown:.2,hopIdle:.65,maxWeapons:18,barrelRad:2.4,barrelDmg:180,crystalHealPct:.12,lavaGrace:30,lavaDps:45,lavaWarnGap:12,t0Hp:110,t1Hp:200,cumHp:260,t2Hp:320,t3Hp:450,holyHp:300,holyDecayPct:.05,spawnInvuln:0,starterWeapon:!1},g={rangeMul:e=>1+.12*Math.min(h.resonanceMaxLv,e),chainAdd:e=>Math.min(h.resonanceMaxLv,e),poisonDurAdd:e=>1*Math.min(h.resonanceMaxLv,e),burnMul:e=>1+.2*Math.min(h.resonanceMaxLv,e),freezeAdd:e=>.4*Math.min(h.resonanceMaxLv,e)},_={dirt:{hp:32,wear:.4,name:`泥土`,depthNote:`表層（前 8% 深度）`},stone:{hp:65,wear:.8,name:`石頭`,depthNote:`淺中層（8%~50% 深度）`},deepslate:{hp:110,wear:1.2,name:`深板岩`,depthNote:`深層與硬岩夾層`},obsidian:{hp:250,wear:2.4,name:`黑曜石`,depthNote:`硬岩夾層與深層高硬度岩塊`},bedrock:{hp:1/0,wear:1.5,name:`基岩`,depthNote:`礦坑左右邊界與最底層（無法破壞）`},seal:{hp:1/0,wear:.3,name:`符文結界石`,depthNote:`守層結界房地板（無法直接挖掘；擊殺該層所有守衛怪／Boss 後自動碎裂放行！）`},core:{hp:450,wear:1,name:`礦脈核心`,depthNote:`一般關卡最底部目標（先擊破上方守門菁英解開結界，再擊碎核心即過關）`},barrel:{hp:35,wear:.5,name:`古老炸藥桶`,depthNote:`硬岩夾層與洞穴旁（擊破引爆 2.4 格破岩炸怪，不傷我方武器）`},crystal:{hp:45,wear:.6,ore:`diamond`,name:`共鳴水晶簇`,depthNote:`中深層與洞穴旁（擊破掉寶石並為全場武器回 12% HP）`},coal:{hp:70,wear:.8,ore:`coal`,name:`煤礦`,depthNote:`淺中層常見礦脈`},copper:{hp:75,wear:.9,ore:`copper`,name:`銅礦`,depthNote:`淺層礦脈`},iron:{hp:85,wear:.9,ore:`iron`,name:`鐵礦`,depthNote:`全深度常見礦脈`},gold:{hp:110,wear:1,ore:`gold`,name:`金礦`,depthNote:`中深層礦脈（30% 以下）`},redstone:{hp:110,wear:1,ore:`redstone`,name:`紅石礦`,depthNote:`中深層礦脈（30% 以下）`},lapis:{hp:120,wear:1,ore:`lapis`,name:`青金石礦`,depthNote:`中深層礦脈（30% 以下）`},diamond:{hp:160,wear:1.3,ore:`diamond`,name:`鑽石礦`,depthNote:`深層珍稀礦脈（60% 以下）`},emerald:{hp:160,wear:1.3,ore:`emerald`,name:`綠寶石礦`,depthNote:`深層稀有礦脈（60% 以下）`}},v={coal:`⚫`,iron:`⚪`,copper:`🟠`,gold:`🟡`,redstone:`🔴`,lapis:`🔵`,diamond:`💎`,emerald:`🟢`},y={dirt:0,stone:0,deepslate:0,obsidian:2,bedrock:0,seal:0,core:22,barrel:2,crystal:7,coal:2,copper:2,iron:3,gold:5,redstone:5,lapis:5,diamond:9,emerald:10},b={coal:`fire`,copper:`earth`,iron:`earth`,gold:`thunder`,redstone:`thunder`,lapis:`ice`,diamond:`ice`,emerald:`poison`},x=[`golem`,`spider_queen`,`balrog`],S=[{name:`第 1 關・淺層礦道`,depth:55,gates:1,endElites:1,time:270,lavaSpeed:.22,hpMul:1,caves:5,hardBands:1,enemies:{zombie:3,mushroom:2},enemyHpMul:1,goal:`core`},{name:`第 2 關・潮濕坑道`,depth:70,gates:2,endElites:1,time:300,lavaSpeed:.24,hpMul:1.15,caves:7,hardBands:2,enemies:{zombie:3,skeleton:2,mushroom:2,spider:2},enemyHpMul:1.4,goal:`core`},{name:`第 3 關・巨像之巢`,depth:85,gates:2,boss:`golem`,time:340,lavaSpeed:.25,hpMul:1.3,caves:8,hardBands:2,enemies:{zombie:3,skeleton:2.5,mushroom:2,spider:2},enemyHpMul:1.9,goal:`boss`},{name:`第 4 關・黑曜斷層`,depth:95,gates:2,endElites:2,time:360,lavaSpeed:.26,hpMul:1.5,caves:9,hardBands:3,enemies:{zombie:3,skeleton:3,mushroom:2,spider:2.5},enemyHpMul:2.6,goal:`core`},{name:`第 5 關・幽暗菌窟`,depth:105,gates:3,endElites:2,time:390,lavaSpeed:.28,hpMul:1.7,caves:10,hardBands:3,enemies:{zombie:2.5,skeleton:2.5,mushroom:3.5,spider:3},enemyHpMul:3.6,goal:`core`},{name:`第 6 關・蛛后巢穴`,depth:115,gates:3,boss:`spider_queen`,time:420,lavaSpeed:.29,hpMul:1.95,caves:11,hardBands:3,enemies:{zombie:2,skeleton:2.5,mushroom:2.5,spider:4},enemyHpMul:5,goal:`boss`},{name:`第 7 關・雷鳴晶洞`,depth:125,gates:3,endElites:2,time:440,lavaSpeed:.3,hpMul:2.2,caves:12,hardBands:4,enemies:{zombie:3,skeleton:3.5,mushroom:2.5,spider:3},enemyHpMul:6.9,goal:`core`},{name:`第 8 關・焦熱岩脈`,depth:135,gates:3,endElites:3,time:460,lavaSpeed:.32,hpMul:2.5,caves:13,hardBands:4,enemies:{zombie:3,skeleton:3.5,mushroom:3,spider:3},enemyHpMul:9.5,goal:`core`},{name:`第 9 關・深淵前哨`,depth:145,gates:4,endElites:3,time:480,lavaSpeed:.34,hpMul:2.85,caves:14,hardBands:4,enemies:{zombie:3.5,skeleton:3.5,mushroom:3,spider:3.5},enemyHpMul:13.1,goal:`core`},{name:`第 10 關・炎魔王座`,depth:160,gates:4,boss:`balrog`,time:540,lavaSpeed:.35,hpMul:3.2,caves:15,hardBands:5,enemies:{zombie:3.5,skeleton:4,mushroom:3,spider:3.5},enemyHpMul:18,goal:`boss`}],C={name:`♾️ 無盡深淵`,depth:99999,gates:0,time:0,lavaSpeed:h.endlessLavaBaseSpeed,hpMul:1,caves:0,hardBands:0,enemies:{zombie:3,skeleton:2.5,mushroom:2.5,spider:2.5},enemyHpMul:1,goal:`endless`};function w(){return{dmgMul:1,hpMul:1,healMul:1,lavaSpeedMul:1,timeBonus:0,t2Threshold:h.t2Threshold,t3Threshold:h.t3Threshold,cumThreshold:h.cumThreshold,spawnInvuln:h.spawnInvuln,thunderChainBonus:0,fireSpreadMul:1,ultMul:1,enemyDmgMul:1,aoeBonus:0,resonanceStartLv:0,wearMul:1,staminaMaxBonus:0,overdriveSecBonus:0,overdriveDmgBonus:0,forgeCdMul:1,relicEffectMul:1,goldGainMul:1,shopDiscount:0,pendingGoldBonus:0,pendingExpandTokens:0}}var T=[{id:`forge_spd`,name:`神速鍛造爐`,desc:`背包內所有武器自動鍛造投射冷卻 -18%，且全彈超載增傷 +25%`,icon:`🍃`,max:3,apply:e=>{e.forgeCdMul*=.82,e.overdriveDmgBonus+=.25}},{id:`bag_expand`,name:`次元背包術`,desc:`立即免費解鎖 2 格背包空間，且背包內所有鄰接遺物加成效果 +25%`,icon:`🎒`,max:3,apply:e=>{e.pendingExpandTokens+=2,e.relicEffectMul+=.25}},{id:`greed_pick`,name:`黃金礦工`,desc:`挖礦與討伐怪物金幣收益 +35%，並立即獲得 +45 金幣`,icon:`💰`,max:3,apply:e=>{e.goldGainMul+=.35,e.pendingGoldBonus+=45}},{id:`dmg`,name:`鍛造大師`,desc:`所有武器傷害 +22%`,icon:`⚔️`,apply:e=>{e.dmgMul+=.22}},{id:`hp`,name:`強韌鋼材`,desc:`武器最大 HP +25%`,icon:`🛡️`,apply:e=>{e.hpMul+=.25}},{id:`heal`,name:`生命之心`,desc:`水晶與女神藥水回血量 +50%`,icon:`💗`,apply:e=>{e.healMul+=.5}},{id:`lava`,name:`冷卻岩漿`,desc:`岩漿下降速度 -18%`,icon:`🧊`,max:3,apply:e=>{e.lavaSpeedMul*=.82}},{id:`time`,name:`沙漏`,desc:`關卡時限 +40 秒`,icon:`⏳`,campaignOnly:!0,apply:e=>{e.timeBonus+=40}},{id:`invuln`,name:`降臨祝福`,desc:`武器投射入坑時附帶 2 秒無敵`,icon:`✨`,max:1,apply:e=>{e.spawnInvuln+=2}},{id:`chain`,name:`導電體質`,desc:`雷屬性連鎖目標 +2`,icon:`⚡`,apply:e=>{e.thunderChainBonus+=2}},{id:`spread`,name:`野火燎原`,desc:`火焰蔓延機率 ×2`,icon:`🔥`,max:2,apply:e=>{e.fireSpreadMul*=2}},{id:`ult`,name:`大招專精`,desc:`大招冷卻／集氣需求 -20%`,icon:`🌀`,max:3,apply:e=>{e.ultMul*=.8}},{id:`hunter`,name:`怪物剋星`,desc:`對怪物與 Boss 傷害 +35%`,icon:`🎯`,apply:e=>{e.enemyDmgMul+=.35}},{id:`aoe`,name:`爆破專家`,desc:`擴散／爆炸類範圍 +1 格`,icon:`💥`,max:2,apply:e=>{e.aoeBonus+=1}},{id:`reso`,name:`元素共鳴`,desc:`全元素共鳴立即 +1 級，且共鳴經驗需求 -5（最低 20）`,icon:`🔮`,max:2,apply:e=>{e.cumThreshold=Math.max(20,e.cumThreshold-5),e.resonanceStartLv=Math.min(h.resonanceMaxLv,e.resonanceStartLv+1)}},{id:`wear`,name:`金剛刃`,desc:`挖礦耐久消耗 -35%`,icon:`💠`,max:2,apply:e=>{e.wearMul*=.65}}],E={low:`低階・1×1`,t1:`初階・1×2`,t2:`高階・長/重`,cum:`特武・魔晶`,leg:`傳說・2×2`,holy:`神聖・2×2`},D={pinball:{archetypeName:`⚡ 超彈疾速`,bounceRating:`A+`,restitution:.93,throwSpeed:17.5,gravityScale:.45,weightLabel:`極輕`},boomerang:{archetypeName:`🪃 迴旋返航`,bounceRating:`A`,restitution:.84,throwSpeed:15,gravityScale:.52,weightLabel:`浮空`},balanced:{archetypeName:`⚖️ 均衡戰技`,bounceRating:`B+`,restitution:.76,throwSpeed:14,gravityScale:.82,weightLabel:`標準`},heavy:{archetypeName:`🔨 重磅破城`,bounceRating:`C`,restitution:.54,throwSpeed:12.2,gravityScale:1.38,weightLabel:`極重`},pierce:{archetypeName:`🔩 貫穿噴射`,bounceRating:`C+`,restitution:.65,throwSpeed:16.2,gravityScale:.9,weightLabel:`集中`}},O={pick:{id:`pick`,num:1,name:`碎石鎬`,element:`earth`,category:`low`,baseHp:h.t0Hp,dmg:5,scale:.88,archetype:`pierce`,unlockText:`商店購買／巴林初始配備`,passive:`貫穿型礦鎬，撞擊方塊時額外造成 +30% 碎石傷害；每鑽擊 3 次自動逆向噴射彈回英雄戰線！`},baton:{id:`baton`,num:2,name:`電擊棒`,element:`thunder`,category:`low`,baseHp:h.t0Hp,dmg:5,scale:.88,archetype:`pinball`,unlockText:`商店購買／凱爾初始配備`,passive:`超彈疾速輕武，撞擊立即高速回彈並對附近 1 個目標放出小電弧（60% 傷害）`},needle:{id:`needle`,num:3,name:`毒針`,element:`poison`,category:`low`,baseHp:h.t0Hp,dmg:4,scale:.85,archetype:`pinball`,throwSpeed:18.5,unlockText:`商店購買／薇拉初始配備`,passive:`極輕超高速飛針，命中附加 1 層中毒（持續 2.5 秒）並高速彈回英雄身邊`},torch:{id:`torch`,num:4,name:`火把`,element:`fire`,category:`low`,baseHp:h.t0Hp,dmg:5,scale:.88,archetype:`pierce`,unlockText:`商店購買／伊格初始配備`,passive:`撞擊時有 30% 機率點燃目標（持續 2 秒），滿 3 次撞擊噴射返航`},icicle:{id:`icicle`,num:5,name:`冰錐`,element:`ice`,category:`low`,baseHp:h.t0Hp,dmg:5,scale:.88,archetype:`pierce`,unlockText:`商店購買／艾莉絲初始配備`,passive:`高速直貫命中怪物時冰凍 0.8 秒，並讓命中的方塊短暫霜脆化`},axe:{id:`axe`,num:6,name:`擴散斧`,element:`earth`,category:`t1`,baseHp:h.t1Hp,dmg:10,scale:1,archetype:`balanced`,unlockText:`2 把碎石鎬二合一／商店購買`,passive:`撞擊破壞落點中心 3×3 範圍並穩定反彈（高倍率擴至 5×5）`,ult:{name:`大地爆裂`,type:`charge`,value:15,unit:`次撞擊`,desc:`粉碎下方 7×7 大範圍區域`}},blade:{id:`blade`,num:7,name:`雷電刀`,element:`thunder`,category:`t1`,baseHp:h.t1Hp,dmg:9,scale:1,archetype:`pinball`,unlockText:`2 把電擊棒二合一／商店購買`,passive:`超彈高速飛刀，每次撞擊隨機電擊附近 2~4 個單位並迅速彈回`,ult:{name:`雷暴`,type:`cd`,value:8,unit:`秒`,desc:`降下雷群同時電擊 10 個目標`}},dagger:{id:`dagger`,num:8,name:`毒匕首`,element:`poison`,category:`t1`,baseHp:h.t1Hp,dmg:8,scale:.96,archetype:`balanced`,unlockText:`2 把毒針二合一／商店購買`,passive:`命中疊加中毒持續扣血（最高 5 層）並靈活反彈`,ult:{name:`毒霧爆發`,type:`charge`,value:12,unit:`次撞擊`,desc:`使周圍 5×5 所有目標疊加 3 層劇毒`}},sword:{id:`sword`,num:9,name:`烈焰劍`,element:`fire`,category:`t1`,baseHp:h.t1Hp,dmg:10,scale:1,archetype:`balanced`,unlockText:`2 把火把二合一／商店購買`,passive:`點燃撞擊的目標持續燃燒，並有機率蔓延相鄰格`,ult:{name:`火龍捲`,type:`cd`,value:10,unit:`秒`,desc:`向下捲出 10 格火焰貫穿並引燃`}},spear:{id:`spear`,num:10,name:`寒冰長槍`,element:`ice`,category:`t1`,baseHp:h.t1Hp,dmg:10,scale:1,archetype:`pierce`,unlockText:`2 把冰錐二合一／商店購買`,passive:`高速向下刺穿多格並冰凍怪物 2 秒，每刺擊 3 次逆向噴射彈回戰線！`,ult:{name:`冰柱`,type:`cd`,value:10,unit:`秒`,desc:`向下貫穿 15 格並冰凍沿途怪物`}},hammer:{id:`hammer`,num:11,name:`震地巨錘`,element:`earth`,category:`t2`,baseHp:h.t2Hp,dmg:16,scale:1.14,archetype:`heavy`,unlockText:`2 把擴散斧二合一／商店購買`,passive:`重磅破城巨錘（英雄接住重投時傷害額外 ×1.60！），重擊產生橫向震波橫掃整排並震暈怪物 1.5 秒`,ult:{name:`三重震波`,type:`cd`,value:12,unit:`秒`,desc:`連續釋放 3 道全寬震波`}},halberd:{id:`halberd`,num:12,name:`雷神戟`,element:`thunder`,category:`t2`,baseHp:h.t2Hp,dmg:15,scale:1.14,archetype:`balanced`,unlockText:`2 把雷電刀二合一／商店購買`,passive:`每 3 秒召喚落雷貫穿下方 8 格整列並對怪物連鎖跳電`,ult:{name:`雷神降臨`,type:`charge`,value:600,unit:`點傷害`,desc:`5 秒內每 0.5 秒隨機降下貫穿落雷`}},scythe:{id:`scythe`,num:13,name:`瘟疫鐮刀`,element:`poison`,category:`t2`,baseHp:h.t2Hp,dmg:14,scale:1.14,archetype:`boomerang`,unlockText:`2 把毒匕首二合一／商店購買`,passive:`迴旋返航大鐮（每撞擊 2 次自動迴旋飛回英雄手中！）；疊加 2 層瘟疫毒，亡語炸出毒霧傳染周圍`,ult:{name:`瘟疫領域`,type:`cd`,value:15,unit:`秒`,desc:`展開 8 秒毒性光環持續感染周圍 5×5`}},meteor:{id:`meteor`,num:14,name:`隕石錘`,element:`fire`,category:`t2`,baseHp:h.t2Hp,dmg:16,scale:1.14,archetype:`heavy`,unlockText:`2 把烈焰劍二合一／商店購買`,passive:`重磅爆破錘（英雄接住重投傷害額外 ×1.60！），撞擊即引發 1.6 格爆破並可擊碎巨像護殼`,ult:{name:`流星雨`,type:`charge`,value:8,unit:`次爆炸`,desc:`從礦坑上方召喚 5 顆爆裂隕石轟炸`}},boomerang:{id:`boomerang`,num:15,name:`冰晶迴旋鏢`,element:`ice`,category:`t2`,baseHp:h.t2Hp,dmg:14,scale:1.12,archetype:`boomerang`,unlockText:`2 把寒冰長槍二合一／配冰之魔晶升星`,passive:`經典迴旋返航武器（每撞擊 2 次自動弧線飛回英雄手中！）；撞擊分裂 3 片穿透冰刃，對冰凍目標 2 倍傷害`,ult:{name:`絕對零度`,type:`charge`,value:10,unit:`次分裂`,desc:`凍結畫面內怪物並對周圍 8 排造成寒霜傷害`}},drill:{id:`drill`,num:16,name:`鑽地螺旋鑽`,element:`earth`,category:`cum`,baseHp:h.cumHp,dmg:13,scale:1.08,archetype:`pierce`,throwSpeed:17,unlockText:`低/初階武器＋土之魔晶合成（或土共鳴滿條）`,passive:`高速垂直鑽穿礦層（攻擊間隔減半），每鑽擊 3 次觸發強力逆向噴射彈回英雄身邊！`,ult:{name:`深層貫穿`,type:`charge`,value:25,unit:`次鑽擊`,desc:`強力鑽破正下方 8 深 × 2 寬礦道`}},core_orb:{id:`core_orb`,num:17,name:`磁暴核心`,element:`thunder`,category:`cum`,baseHp:h.cumHp,dmg:12,scale:1.06,archetype:`pinball`,restitution:.96,unlockText:`低/初階武器＋雷之魔晶合成（或雷共鳴滿條）`,passive:`最高彈性（0.96）電漿彈珠！高速彈跳並每 0.5 秒自動電擊周圍 2 個目標`,ult:{name:`電磁脈衝`,type:`cd`,value:10,unit:`秒`,desc:`釋放磁暴環電擊周圍所有目標並震碎岩殼`}},katar:{id:`katar`,num:18,name:`刺客拳刃`,element:`poison`,category:`cum`,baseHp:h.cumHp,dmg:13,scale:1.04,archetype:`pinball`,throwSpeed:18.2,unlockText:`低/初階武器＋毒之魔晶合成（或毒共鳴滿條）`,passive:`超彈疾速爆擊刃，攻速加倍；30% 機率打出 2 倍爆擊（目標已中毒時爆擊率 60%），命中附毒`,ult:{name:`暗影連斬`,type:`charge`,value:18,unit:`次命中`,desc:`疾襲附近最多 6 個目標，全數必定觸發 2 倍爆擊`}},flameblade:{id:`flameblade`,num:19,name:`火焰刀`,element:`fire`,category:`cum`,baseHp:h.cumHp,dmg:14,scale:1.08,archetype:`boomerang`,unlockText:`低/初階武器＋火之魔晶合成（或火共鳴滿條）`,passive:`迴旋返航火刃（撞擊 2 次自動飛回英雄手中！），每次撞擊揮出火弧灼傷周圍 3×3 所有目標`,ult:{name:`烈焰風暴`,type:`cd`,value:11,unit:`秒`,desc:`引爆周圍 5×5 火海造成高傷並全面點燃`}},frostclaw:{id:`frostclaw`,num:20,name:`霜狼之爪`,element:`ice`,category:`cum`,baseHp:h.cumHp,dmg:13,scale:1.06,archetype:`boomerang`,unlockText:`低/初階武器＋冰之魔晶合成（或冰共鳴滿條）`,passive:`迴旋返航寒爪，撞擊冰凍 3×3 內怪物並使方塊霜脆化（承受所有傷害 +50%）`,ult:{name:`暴風雪`,type:`cd`,value:11,unit:`秒`,desc:`冰封周圍 5×5 區域並進行多段寒爪斬擊`}},titan:{id:`titan`,num:21,name:`泰坦巨錘`,element:`earth`,category:`leg`,baseHp:h.t3Hp,dmg:26,scale:1.26,archetype:`heavy`,unlockText:`高階/特武＋土之魔晶合成`,passive:`重磅傳說巨錘（英雄接住重投時傷害額外 ×1.60！），每次重擊引發 5×5 崩塌粉碎並震暈怪物`,ult:{name:`大地崩裂`,type:`cd`,value:13,unit:`秒`,desc:`直接崩毀下方全寬 7×6 整片礦層（可破岩殼）`}},mjolnir:{id:`mjolnir`,num:22,name:`天罰雷槌`,element:`thunder`,category:`leg`,baseHp:h.t3Hp,dmg:24,scale:1.24,archetype:`heavy`,unlockText:`高階/特武＋雷之魔晶合成`,passive:`重磅雷神戰槌（英雄接住重投時傷害額外 ×1.60！），每 1.5 秒同時降下 3 道天雷貫穿整列`,ult:{name:`雷霆萬鈞`,type:`cd`,value:14,unit:`秒`,desc:`降下 20 道天罰落雷無差別轟擊全場`}},hydra:{id:`hydra`,num:23,name:`九頭蛇之牙`,element:`poison`,category:`leg`,baseHp:h.t3Hp,dmg:22,scale:1.24,archetype:`balanced`,unlockText:`高階/特武＋毒之魔晶合成`,passive:`劇毒可疊至 10 層，且受劇毒侵蝕的目標承受所有傷害 +50%`,ult:{name:`萬毒深淵`,type:`charge`,value:14,unit:`次撞擊`,desc:`使 7×7 範圍瞬間染上滿層劇毒並引發毒爆`}},dragon:{id:`dragon`,num:24,name:`炎龍大劍`,element:`fire`,category:`leg`,baseHp:h.t3Hp,dmg:26,scale:1.28,archetype:`heavy`,unlockText:`高階/特武＋火之魔晶合成`,passive:`重磅龍炎巨劍（英雄接住重投時傷害額外 ×1.60！），撞擊引發半徑 2.8 格大型龍炎爆破（可破岩殼）`,ult:{name:`龍息`,type:`cd`,value:13,unit:`秒`,desc:`向下噴射 3 寬 × 12 深毀滅龍炎光柱`}},excalibur:{id:`excalibur`,num:25,name:`聖劍`,element:`holy`,category:`holy`,baseHp:h.holyHp,dmg:55,scale:1.32,lifespanDecay:!0,archetype:`balanced`,unlockText:`任意初階以上武器＋👑 王者聖印合成`,passive:`壽命型（挖礦不損耗，每秒流失 5% HP，英雄接球重投可立即回復 18% 壽命！）；每次撞擊斬出聖光十字貫穿整排與整列`,ult:{name:`神聖審判`,type:`cd`,value:8,unit:`秒`,desc:`聖光制裁畫面內全體怪物與下方 5 排礦層，並直接擊碎岩殼`}}},k=Object.fromEntries(Object.entries(O).map(([e,t])=>{let n=D[t.archetype];return[e,{...n,...t,restitution:t.restitution??n.restitution,throwSpeed:t.throwSpeed??n.throwSpeed,gravityScale:t.gravityScale??n.gravityScale}]})),A=Object.values(k).sort((e,t)=>e.num-t.num),j={earth:{low:`pick`,t1:`axe`,t2:`hammer`,cum:`drill`,leg:`titan`},thunder:{low:`baton`,t1:`blade`,t2:`halberd`,cum:`core_orb`,leg:`mjolnir`},poison:{low:`needle`,t1:`dagger`,t2:`scythe`,cum:`katar`,leg:`hydra`},fire:{low:`torch`,t1:`sword`,t2:`meteor`,cum:`flameblade`,leg:`dragon`},ice:{low:`icicle`,t1:`spear`,t2:`boomerang`,cum:`frostclaw`}},ee=1e3,M=1001,N=1002,P=1003,te=1004,ne=1005,re=1006,ie=1007,ae=1008,oe=1009,se=1010,ce=1011,le=1012,ue=1013,de=1014,fe=1015,pe=1016,me=1017,he=1018,ge=1020,_e=35902,ve=35899,ye=1021,be=1022,xe=1023,Se=1026,Ce=1027,we=1028,Te=1029,Ee=1030,De=1031,Oe=1033,ke=33776,Ae=33777,je=33778,Me=33779,Ne=35840,Pe=35841,F=35842,Fe=35843,Ie=36196,Le=37492,I=37496,Re=37488,L=37489,R=37490,ze=37491,Be=37808,Ve=37809,He=37810,Ue=37811,We=37812,Ge=37813,Ke=37814,qe=37815,Je=37816,Ye=37817,Xe=37818,Ze=37819,Qe=37820,$e=37821,et=36492,tt=36494,nt=36495,rt=36283,it=36284,at=36285,ot=36286,st=2300,ct=2301,lt=2302,ut=2303,dt=2400,ft=2401,pt=2402,mt=3200,ht=`srgb`,gt=`srgb-linear`,_t=`linear`,vt=`srgb`,yt=7680,bt=35044,xt=35048,St=2e3;function Ct(e){for(let t=e.length-1;t>=0;--t)if(e[t]>=65535)return!0;return!1}function wt(e){return ArrayBuffer.isView(e)&&!(e instanceof DataView)}function Tt(e){return document.createElementNS(`http://www.w3.org/1999/xhtml`,e)}function Et(){let e=Tt(`canvas`);return e.style.display=`block`,e}var Dt={};function Ot(...e){let t=`THREE.`+e.shift();console.log(t,...e)}function kt(e){let t=e[0];if(typeof t==`string`&&t.startsWith(`TSL:`)){let t=e[1];t&&t.isStackTrace?e[0]+=` `+t.getLocation():e[1]=`Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.`}return e}function z(...e){e=kt(e);let t=`THREE.`+e.shift();{let n=e[0];n&&n.isStackTrace?console.warn(n.getError(t)):console.warn(t,...e)}}function B(...e){e=kt(e);let t=`THREE.`+e.shift();{let n=e[0];n&&n.isStackTrace?console.error(n.getError(t)):console.error(t,...e)}}function At(...e){let t=e.join(` `);t in Dt||(Dt[t]=!0,z(...e))}function jt(e,t,n){return new Promise(function(r,i){function a(){switch(e.clientWaitSync(t,e.SYNC_FLUSH_COMMANDS_BIT,0)){case e.WAIT_FAILED:i();break;case e.TIMEOUT_EXPIRED:setTimeout(a,n);break;default:r()}}setTimeout(a,n)})}var Mt={0:0,2:6,4:4,3:5,1:1,6:2,7:7,5:3},Nt=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){let n=this._listeners;return n!==void 0&&n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){let n=this._listeners;if(n===void 0)return;let r=n[e];if(r!==void 0){let e=r.indexOf(t);e!==-1&&r.splice(e,1)}}dispatchEvent(e){let t=this._listeners;if(t===void 0)return;let n=t[e.type];if(n!==void 0){e.target=this;let t=n.slice(0);for(let n=0,r=t.length;n<r;n++)t[n].call(this,e);e.target=null}}},Pt=`00.01.02.03.04.05.06.07.08.09.0a.0b.0c.0d.0e.0f.10.11.12.13.14.15.16.17.18.19.1a.1b.1c.1d.1e.1f.20.21.22.23.24.25.26.27.28.29.2a.2b.2c.2d.2e.2f.30.31.32.33.34.35.36.37.38.39.3a.3b.3c.3d.3e.3f.40.41.42.43.44.45.46.47.48.49.4a.4b.4c.4d.4e.4f.50.51.52.53.54.55.56.57.58.59.5a.5b.5c.5d.5e.5f.60.61.62.63.64.65.66.67.68.69.6a.6b.6c.6d.6e.6f.70.71.72.73.74.75.76.77.78.79.7a.7b.7c.7d.7e.7f.80.81.82.83.84.85.86.87.88.89.8a.8b.8c.8d.8e.8f.90.91.92.93.94.95.96.97.98.99.9a.9b.9c.9d.9e.9f.a0.a1.a2.a3.a4.a5.a6.a7.a8.a9.aa.ab.ac.ad.ae.af.b0.b1.b2.b3.b4.b5.b6.b7.b8.b9.ba.bb.bc.bd.be.bf.c0.c1.c2.c3.c4.c5.c6.c7.c8.c9.ca.cb.cc.cd.ce.cf.d0.d1.d2.d3.d4.d5.d6.d7.d8.d9.da.db.dc.dd.de.df.e0.e1.e2.e3.e4.e5.e6.e7.e8.e9.ea.eb.ec.ed.ee.ef.f0.f1.f2.f3.f4.f5.f6.f7.f8.f9.fa.fb.fc.fd.fe.ff`.split(`.`),Ft=1234567,It=Math.PI/180,Lt=180/Math.PI;function Rt(){let e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0,r=Math.random()*4294967295|0;return(Pt[e&255]+Pt[e>>8&255]+Pt[e>>16&255]+Pt[e>>24&255]+`-`+Pt[t&255]+Pt[t>>8&255]+`-`+Pt[t>>16&15|64]+Pt[t>>24&255]+`-`+Pt[n&63|128]+Pt[n>>8&255]+`-`+Pt[n>>16&255]+Pt[n>>24&255]+Pt[r&255]+Pt[r>>8&255]+Pt[r>>16&255]+Pt[r>>24&255]).toLowerCase()}function V(e,t,n){return Math.max(t,Math.min(n,e))}function zt(e,t){return(e%t+t)%t}function Bt(e,t,n,r,i){return r+(e-t)*(i-r)/(n-t)}function Vt(e,t,n){return e===t?0:(n-e)/(t-e)}function Ht(e,t,n){return(1-n)*e+n*t}function Ut(e,t,n,r){return Ht(e,t,1-Math.exp(-n*r))}function Wt(e,t=1){return t-Math.abs(zt(e,t*2)-t)}function Gt(e,t,n){return e<=t?0:e>=n?1:(e=(e-t)/(n-t),e*e*(3-2*e))}function Kt(e,t,n){return e<=t?0:e>=n?1:(e=(e-t)/(n-t),e*e*e*(e*(e*6-15)+10))}function qt(e,t){return e+Math.floor(Math.random()*(t-e+1))}function Jt(e,t){return e+Math.random()*(t-e)}function Yt(e){return e*(.5-Math.random())}function Xt(e){e!==void 0&&(Ft=e);let t=Ft+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function Zt(e){return e*It}function Qt(e){return e*Lt}function $t(e){return e>0&&Number.isInteger(e)&&2**Math.round(Math.log2(e))===e}function en(e){return 2**Math.ceil(Math.log(e)/Math.LN2)}function tn(e){return 2**Math.floor(Math.log(e)/Math.LN2)}function nn(e,t,n,r,i){let a=Math.cos,o=Math.sin,s=a(n/2),c=o(n/2),l=a((t+r)/2),u=o((t+r)/2),d=a((t-r)/2),f=o((t-r)/2),p=a((r-t)/2),m=o((r-t)/2);switch(i){case`XYX`:e.set(s*u,c*d,c*f,s*l);break;case`YZY`:e.set(c*f,s*u,c*d,s*l);break;case`ZXZ`:e.set(c*d,c*f,s*u,s*l);break;case`XZX`:e.set(s*u,c*m,c*p,s*l);break;case`YXY`:e.set(c*p,s*u,c*m,s*l);break;case`ZYZ`:e.set(c*m,c*p,s*u,s*l);break;default:z(`MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: `+i)}}function rn(e){switch(e.constructor){case Uint32Array:return 4294967295;case Uint16Array:return 65535;case Uint8Array:case Uint8ClampedArray:return 255;case Int32Array:return 2147483647;case Int16Array:return 32767;case Int8Array:return 127;default:return}}function an(e,t){if(t.constructor===Float32Array)return e;let n=rn(t);if(n===void 0)throw Error(`THREE.MathUtils: Invalid component type.`);return Math.max(e/n,-1)}function on(e,t){if(t.constructor===Float32Array)return e;let n=rn(t);if(n===void 0)throw Error(`THREE.MathUtils: Invalid component type.`);return Math.round(e*n)}var sn={DEG2RAD:It,RAD2DEG:Lt,generateUUID:Rt,clamp:V,euclideanModulo:zt,mapLinear:Bt,inverseLerp:Vt,lerp:Ht,damp:Ut,pingpong:Wt,smoothstep:Gt,smootherstep:Kt,randInt:qt,randFloat:Jt,randFloatSpread:Yt,seededRandom:Xt,degToRad:Zt,radToDeg:Qt,isPowerOfTwo:$t,ceilPowerOfTwo:en,floorPowerOfTwo:tn,setQuaternionFromProperEuler:nn,normalize:on,denormalize:an},H=class{static{this.prototype.isVector2=!0}constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw Error(`THREE.Vector2: index is out of range: `+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw Error(`THREE.Vector2: index is out of range: `+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,n=this.y,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6],this.y=r[1]*t+r[4]*n+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=V(this.x,e.x,t.x),this.y=V(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=V(this.x,e,t),this.y=V(this.y,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(V(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(V(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let n=Math.cos(t),r=Math.sin(t),i=this.x-e.x,a=this.y-e.y;return this.x=i*n-a*r+e.x,this.y=i*r+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},cn=class{constructor(e=0,t=0,n=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=r}static slerpFlat(e,t,n,r,i,a,o){let s=n[r+0],c=n[r+1],l=n[r+2],u=n[r+3],d=i[a+0],f=i[a+1],p=i[a+2],m=i[a+3];if(u!==m||s!==d||c!==f||l!==p){let e=s*d+c*f+l*p+u*m;e<0&&(d=-d,f=-f,p=-p,m=-m,e=-e);let t=1-o;if(e<.9995){let n=Math.acos(e),r=Math.sin(n);t=Math.sin(t*n)/r,o=Math.sin(o*n)/r,s=s*t+d*o,c=c*t+f*o,l=l*t+p*o,u=u*t+m*o}else{s=s*t+d*o,c=c*t+f*o,l=l*t+p*o,u=u*t+m*o;let e=1/Math.sqrt(s*s+c*c+l*l+u*u);s*=e,c*=e,l*=e,u*=e}}e[t]=s,e[t+1]=c,e[t+2]=l,e[t+3]=u}static multiplyQuaternionsFlat(e,t,n,r,i,a){let o=n[r],s=n[r+1],c=n[r+2],l=n[r+3],u=i[a],d=i[a+1],f=i[a+2],p=i[a+3];return e[t]=o*p+l*u+s*f-c*d,e[t+1]=s*p+l*d+c*u-o*f,e[t+2]=c*p+l*f+o*d-s*u,e[t+3]=l*p-o*u-s*d-c*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,r){return this._x=e,this._y=t,this._z=n,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let n=e._x,r=e._y,i=e._z,a=e._order,o=Math.cos,s=Math.sin,c=o(n/2),l=o(r/2),u=o(i/2),d=s(n/2),f=s(r/2),p=s(i/2);switch(a){case`XYZ`:this._x=d*l*u+c*f*p,this._y=c*f*u-d*l*p,this._z=c*l*p+d*f*u,this._w=c*l*u-d*f*p;break;case`YXZ`:this._x=d*l*u+c*f*p,this._y=c*f*u-d*l*p,this._z=c*l*p-d*f*u,this._w=c*l*u+d*f*p;break;case`ZXY`:this._x=d*l*u-c*f*p,this._y=c*f*u+d*l*p,this._z=c*l*p+d*f*u,this._w=c*l*u-d*f*p;break;case`ZYX`:this._x=d*l*u-c*f*p,this._y=c*f*u+d*l*p,this._z=c*l*p-d*f*u,this._w=c*l*u+d*f*p;break;case`YZX`:this._x=d*l*u+c*f*p,this._y=c*f*u+d*l*p,this._z=c*l*p-d*f*u,this._w=c*l*u-d*f*p;break;case`XZY`:this._x=d*l*u-c*f*p,this._y=c*f*u-d*l*p,this._z=c*l*p+d*f*u,this._w=c*l*u+d*f*p;break;default:z(`Quaternion: .setFromEuler() encountered an unknown order: `+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let n=t/2,r=Math.sin(n);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,n=t[0],r=t[4],i=t[8],a=t[1],o=t[5],s=t[9],c=t[2],l=t[6],u=t[10],d=n+o+u;if(d>0){let e=.5/Math.sqrt(d+1);this._w=.25/e,this._x=(l-s)*e,this._y=(i-c)*e,this._z=(a-r)*e}else if(n>o&&n>u){let e=2*Math.sqrt(1+n-o-u);this._w=(l-s)/e,this._x=.25*e,this._y=(r+a)/e,this._z=(i+c)/e}else if(o>u){let e=2*Math.sqrt(1+o-n-u);this._w=(i-c)/e,this._x=(r+a)/e,this._y=.25*e,this._z=(s+l)/e}else{let e=2*Math.sqrt(1+u-n-o);this._w=(a-r)/e,this._x=(i+c)/e,this._y=(s+l)/e,this._z=.25*e}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(V(this.dot(e),-1,1)))}rotateTowards(e,t){let n=this.angleTo(e);if(n===0)return this;let r=Math.min(1,t/n);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x*=e,this._y*=e,this._z*=e,this._w*=e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let n=e._x,r=e._y,i=e._z,a=e._w,o=t._x,s=t._y,c=t._z,l=t._w;return this._x=n*l+a*o+r*c-i*s,this._y=r*l+a*s+i*o-n*c,this._z=i*l+a*c+n*s-r*o,this._w=a*l-n*o-r*s-i*c,this._onChangeCallback(),this}slerp(e,t){let n=e._x,r=e._y,i=e._z,a=e._w,o=this.dot(e);o<0&&(n=-n,r=-r,i=-i,a=-a,o=-o);let s=1-t;if(o<.9995){let e=Math.acos(o),c=Math.sin(e);s=Math.sin(s*e)/c,t=Math.sin(t*e)/c,this._x=this._x*s+n*t,this._y=this._y*s+r*t,this._z=this._z*s+i*t,this._w=this._w*s+a*t,this._onChangeCallback()}else this._x=this._x*s+n*t,this._y=this._y*s+r*t,this._z=this._z*s+i*t,this._w=this._w*s+a*t,this.normalize();return this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),r=Math.sqrt(1-n),i=Math.sqrt(n);return this.set(r*Math.sin(e),r*Math.cos(e),i*Math.sin(t),i*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},U=class{static{this.prototype.isVector3=!0}constructor(e=0,t=0,n=0){this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw Error(`THREE.Vector3: index is out of range: `+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw Error(`THREE.Vector3: index is out of range: `+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(un.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(un.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,n=this.y,r=this.z,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6]*r,this.y=i[1]*t+i[4]*n+i[7]*r,this.z=i[2]*t+i[5]*n+i[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,n=this.y,r=this.z,i=e.elements,a=1/(i[3]*t+i[7]*n+i[11]*r+i[15]);return this.x=(i[0]*t+i[4]*n+i[8]*r+i[12])*a,this.y=(i[1]*t+i[5]*n+i[9]*r+i[13])*a,this.z=(i[2]*t+i[6]*n+i[10]*r+i[14])*a,this}applyQuaternion(e){let t=this.x,n=this.y,r=this.z,i=e.x,a=e.y,o=e.z,s=e.w,c=2*(a*r-o*n),l=2*(o*t-i*r),u=2*(i*n-a*t);return this.x=t+s*c+a*u-o*l,this.y=n+s*l+o*c-i*u,this.z=r+s*u+i*l-a*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,n=this.y,r=this.z,i=e.elements;return this.x=i[0]*t+i[4]*n+i[8]*r,this.y=i[1]*t+i[5]*n+i[9]*r,this.z=i[2]*t+i[6]*n+i[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=V(this.x,e.x,t.x),this.y=V(this.y,e.y,t.y),this.z=V(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=V(this.x,e,t),this.y=V(this.y,e,t),this.z=V(this.z,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(V(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let n=e.x,r=e.y,i=e.z,a=t.x,o=t.y,s=t.z;return this.x=r*s-i*o,this.y=i*a-n*s,this.z=n*o-r*a,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return ln.copy(this).projectOnVector(e),this.sub(ln)}reflect(e){return this.sub(ln.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(V(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y,r=this.z-e.z;return t*t+n*n+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){let r=Math.sin(t)*e;return this.x=r*Math.sin(n),this.y=Math.cos(t)*e,this.z=r*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},ln=new U,un=new cn,W=class{static{this.prototype.isMatrix3=!0}constructor(e,t,n,r,i,a,o,s,c){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,r,i,a,o,s,c)}set(e,t,n,r,i,a,o,s,c){let l=this.elements;return l[0]=e,l[1]=r,l[2]=o,l[3]=t,l[4]=i,l[5]=s,l[6]=n,l[7]=a,l[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,r=t.elements,i=this.elements,a=n[0],o=n[3],s=n[6],c=n[1],l=n[4],u=n[7],d=n[2],f=n[5],p=n[8],m=r[0],h=r[3],g=r[6],_=r[1],v=r[4],y=r[7],b=r[2],x=r[5],S=r[8];return i[0]=a*m+o*_+s*b,i[3]=a*h+o*v+s*x,i[6]=a*g+o*y+s*S,i[1]=c*m+l*_+u*b,i[4]=c*h+l*v+u*x,i[7]=c*g+l*y+u*S,i[2]=d*m+f*_+p*b,i[5]=d*h+f*v+p*x,i[8]=d*g+f*y+p*S,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[1],r=e[2],i=e[3],a=e[4],o=e[5],s=e[6],c=e[7],l=e[8];return t*a*l-t*o*c-n*i*l+n*o*s+r*i*c-r*a*s}invert(){let e=this.elements,t=e[0],n=e[1],r=e[2],i=e[3],a=e[4],o=e[5],s=e[6],c=e[7],l=e[8],u=l*a-o*c,d=o*s-l*i,f=c*i-a*s,p=t*u+n*d+r*f;if(p===0)return this.set(0,0,0,0,0,0,0,0,0);let m=1/p;return e[0]=u*m,e[1]=(r*c-l*n)*m,e[2]=(o*n-r*a)*m,e[3]=d*m,e[4]=(l*t-r*s)*m,e[5]=(r*i-o*t)*m,e[6]=f*m,e[7]=(n*s-c*t)*m,e[8]=(a*t-n*i)*m,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,r,i,a,o){let s=Math.cos(i),c=Math.sin(i);return this.set(n*s,n*c,-n*(s*a+c*o)+a+e,-r*c,r*s,-r*(-c*a+s*o)+o+t,0,0,1),this}scale(e,t){return At(`Matrix3: .scale() is deprecated. Use .makeScale() instead.`),this.premultiply(dn.makeScale(e,t)),this}rotate(e){return At(`Matrix3: .rotate() is deprecated. Use .makeRotation() instead.`),this.premultiply(dn.makeRotation(-e)),this}translate(e,t){return At(`Matrix3: .translate() is deprecated. Use .makeTranslation() instead.`),this.premultiply(dn.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,n=e.elements;for(let e=0;e<9;e++)if(t[e]!==n[e])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}},dn=new W,fn=new W().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),pn=new W().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function mn(){let e={enabled:!0,workingColorSpace:gt,spaces:{},convert:function(e,t,n){return this.enabled===!1||t===n||!t||!n||(this.spaces[t].transfer===`srgb`&&(e.r=hn(e.r),e.g=hn(e.g),e.b=hn(e.b)),this.spaces[t].primaries!==this.spaces[n].primaries&&(e.applyMatrix3(this.spaces[t].toXYZ),e.applyMatrix3(this.spaces[n].fromXYZ)),this.spaces[n].transfer===`srgb`&&(e.r=gn(e.r),e.g=gn(e.g),e.b=gn(e.b))),e},workingToColorSpace:function(e,t){return this.convert(e,this.workingColorSpace,t)},colorSpaceToWorking:function(e,t){return this.convert(e,t,this.workingColorSpace)},getPrimaries:function(e){return this.spaces[e].primaries},getTransfer:function(e){return e===``?_t:this.spaces[e].transfer},getToneMappingMode:function(e){return this.spaces[e].outputColorSpaceConfig.toneMappingMode||`standard`},getLuminanceCoefficients:function(e,t=this.workingColorSpace){return e.fromArray(this.spaces[t].luminanceCoefficients)},define:function(e){Object.assign(this.spaces,e)},_getMatrix:function(e,t,n){return e.copy(this.spaces[n].fromXYZ).multiply(this.spaces[t].toXYZ)},_getDrawingBufferColorSpace:function(e){return this.spaces[e].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(e=this.workingColorSpace){return this.spaces[e].workingColorSpaceConfig.unpackColorSpace}},t=[.64,.33,.3,.6,.15,.06],n=[.2126,.7152,.0722],r=[.3127,.329];return e.define({[gt]:{primaries:t,whitePoint:r,transfer:_t,toXYZ:fn,fromXYZ:pn,luminanceCoefficients:n,workingColorSpaceConfig:{unpackColorSpace:ht},outputColorSpaceConfig:{drawingBufferColorSpace:ht}},[ht]:{primaries:t,whitePoint:r,transfer:vt,toXYZ:fn,fromXYZ:pn,luminanceCoefficients:n,outputColorSpaceConfig:{drawingBufferColorSpace:ht}}}),e}var G=mn();function hn(e){return e<.04045?e*.0773993808:(e*.9478672986+.0521327014)**2.4}function gn(e){return e<.0031308?e*12.92:1.055*e**.41666-.055}var _n,vn=class{static getDataURL(e,t=`image/png`){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>`u`)return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{_n===void 0&&(_n=Tt(`canvas`)),_n.width=e.width,_n.height=e.height;let t=_n.getContext(`2d`);e instanceof ImageData?t.putImageData(e,0,0):t.drawImage(e,0,0,e.width,e.height),n=_n}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<`u`&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<`u`&&e instanceof HTMLCanvasElement||typeof ImageBitmap<`u`&&e instanceof ImageBitmap){let t=Tt(`canvas`);t.width=e.width,t.height=e.height;let n=t.getContext(`2d`);n.drawImage(e,0,0,e.width,e.height);let r=n.getImageData(0,0,e.width,e.height),i=r.data;for(let e=0;e<i.length;e++)i[e]=hn(i[e]/255)*255;return n.putImageData(r,0,0),t}if(e.data){let t=e.data.slice(0);for(let e=0;e<t.length;e++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[e]=Math.floor(hn(t[e]/255)*255):t[e]=hn(t[e]);return{data:t,width:e.width,height:e.height}}return z(`ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied.`),e}},yn=0,bn=class{constructor(e=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:yn++}),this.uuid=Rt(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){let t=this.data;return typeof HTMLVideoElement<`u`&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<`u`&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t===null?e.set(0,0,0):e.set(t.width||0,t.height||0,t.depth||0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e==`string`;if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let n={uuid:this.uuid,url:``},r=this.data;if(r!==null){let e;if(Array.isArray(r)){e=[];for(let t=0,n=r.length;t<n;t++)r[t].isDataTexture?e.push(xn(r[t].image)):e.push(xn(r[t]))}else e=xn(r);n.url=e}return t||(e.images[this.uuid]=n),n}};function xn(e){return typeof HTMLImageElement<`u`&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<`u`&&e instanceof HTMLCanvasElement||typeof ImageBitmap<`u`&&e instanceof ImageBitmap?vn.getDataURL(e):e.data?{data:Array.from(e.data),width:e.width,height:e.height,type:e.data.constructor.name}:(z(`Texture: Unable to serialize Texture.`),{})}var Sn=0,Cn=new U,wn=class e extends Nt{constructor(t=e.DEFAULT_IMAGE,n=e.DEFAULT_MAPPING,r=M,i=M,a=re,o=ae,s=xe,c=oe,l=e.DEFAULT_ANISOTROPY,u=``){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Sn++}),this.uuid=Rt(),this.name=``,this.source=new bn(t),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=r,this.wrapT=i,this.magFilter=a,this.minFilter=o,this.anisotropy=l,this.format=s,this.internalFormat=null,this.type=c,this.offset=new H(0,0),this.repeat=new H(1,1),this.center=new H(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new W,this.generateMipmaps=!0,this.mipmapsAutoUpdate=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0,this.isPMREMTexture=!1,this.normalized=!1}get width(){return this.source.getSize(Cn).x}get height(){return this.source.getSize(Cn).y}get depth(){return this.source.getSize(Cn).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.mipmapsAutoUpdate=e.mipmapsAutoUpdate,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isPMREMTexture=e.isPMREMTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(let t in e){let n=e[t];if(n===void 0){z(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}let r=this[t];r===void 0?z(`Texture.setValues(): property '${t}' does not exist.`):r&&n&&r.isVector2&&n.isVector2||r&&n&&r.isVector3&&n.isVector3||r&&n&&r.isMatrix3&&n.isMatrix3?r.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e==`string`;if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let n={metadata:{version:4.7,type:`Texture`,generator:`Texture.toJSON`},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,mipmapsAutoUpdate:this.mipmapsAutoUpdate,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:`dispose`})}transformUv(e){if(this.mapping!==300)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case ee:e.x-=Math.floor(e.x);break;case M:e.x=e.x<0?0:1;break;case N:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x-=Math.floor(e.x)}if(e.y<0||e.y>1)switch(this.wrapT){case ee:e.y-=Math.floor(e.y);break;case M:e.y=e.y<0?0:1;break;case N:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y-=Math.floor(e.y)}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};wn.DEFAULT_IMAGE=null,wn.DEFAULT_MAPPING=300,wn.DEFAULT_ANISOTROPY=1;var Tn=class{static{this.prototype.isVector4=!0}constructor(e=0,t=0,n=0,r=1){this.x=e,this.y=t,this.z=n,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,r){return this.x=e,this.y=t,this.z=n,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw Error(`THREE.Vector4: index is out of range: `+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw Error(`THREE.Vector4: index is out of range: `+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w===void 0?1:e.w,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,n=this.y,r=this.z,i=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*r+a[12]*i,this.y=a[1]*t+a[5]*n+a[9]*r+a[13]*i,this.z=a[2]*t+a[6]*n+a[10]*r+a[14]*i,this.w=a[3]*t+a[7]*n+a[11]*r+a[15]*i,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,r,i,a=.01,o=.1,s=e.elements,c=s[0],l=s[4],u=s[8],d=s[1],f=s[5],p=s[9],m=s[2],h=s[6],g=s[10];if(Math.abs(l-d)<a&&Math.abs(u-m)<a&&Math.abs(p-h)<a){if(Math.abs(l+d)<o&&Math.abs(u+m)<o&&Math.abs(p+h)<o&&Math.abs(c+f+g-3)<o)return this.set(1,0,0,0),this;t=Math.PI;let e=(c+1)/2,s=(f+1)/2,_=(g+1)/2,v=(l+d)/4,y=(u+m)/4,b=(p+h)/4;return e>s&&e>_?e<a?(n=0,r=.707106781,i=.707106781):(n=Math.sqrt(e),r=v/n,i=y/n):s>_?s<a?(n=.707106781,r=0,i=.707106781):(r=Math.sqrt(s),n=v/r,i=b/r):_<a?(n=.707106781,r=.707106781,i=0):(i=Math.sqrt(_),n=y/i,r=b/i),this.set(n,r,i,t),this}let _=Math.sqrt((h-p)*(h-p)+(u-m)*(u-m)+(d-l)*(d-l));return Math.abs(_)<.001&&(_=1),this.x=(h-p)/_,this.y=(u-m)/_,this.z=(d-l)/_,this.w=Math.acos((c+f+g-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=V(this.x,e.x,t.x),this.y=V(this.y,e.y,t.y),this.z=V(this.z,e.z,t.z),this.w=V(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=V(this.x,e,t),this.y=V(this.y,e,t),this.z=V(this.z,e,t),this.w=V(this.w,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(V(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},En=class extends Nt{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:re,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new Tn(0,0,e,t),this.scissorTest=!1,this.viewport=new Tn(0,0,e,t),this.textures=[];let r=n.count;for(let i=0;i<r;i++)this.textures[i]=new wn({width:e,height:t,depth:n.depth}),this.textures[i].isRenderTargetTexture=!0,this.textures[i].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveColorBuffer=n.resolveColorBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.storeMultisampledColorBuffer=n.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=n.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=n.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(e={}){let t={minFilter:re,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.mipmapsAutoUpdate!==void 0&&(t.mipmapsAutoUpdate=e.mipmapsAutoUpdate),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let e=0;e<this.textures.length;e++)this.textures[e].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),e!==null&&e.renderTarget===null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let r=0,i=this.textures.length;r<i;r++)this.textures[r].image.width=e,this.textures[r].image.height=t,this.textures[r].image.depth=n,this.textures[r].isData3DTexture!==!0&&(this.textures[r].isArrayTexture=this.textures[r].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;let n=Object.assign({},e.textures[t].image);this.textures[t].source=new bn(n)}if(this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveColorBuffer=e.resolveColorBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,this.storeMultisampledColorBuffer=e.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=e.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=e.storeMultisampledStencilBuffer,e.depthTexture!==null){if(e.depthTexture.renderTarget===e){let t=e.depthTexture.clone();t.renderTarget=null,this.depthTexture=t}else this.depthTexture=e.depthTexture}else this.depthTexture=null;return this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:`dispose`})}},Dn=class extends En{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}},On=class extends wn{constructor(e=null,t=1,n=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=P,this.minFilter=P,this.wrapR=M,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}},kn=class extends wn{constructor(e=null,t=1,n=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=P,this.minFilter=P,this.wrapR=M,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}},An=class e{static{this.prototype.isMatrix4=!0}constructor(e,t,n,r,i,a,o,s,c,l,u,d,f,p,m,h){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,r,i,a,o,s,c,l,u,d,f,p,m,h)}set(e,t,n,r,i,a,o,s,c,l,u,d,f,p,m,h){let g=this.elements;return g[0]=e,g[4]=t,g[8]=n,g[12]=r,g[1]=i,g[5]=a,g[9]=o,g[13]=s,g[2]=c,g[6]=l,g[10]=u,g[14]=d,g[3]=f,g[7]=p,g[11]=m,g[15]=h,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new e().fromArray(this.elements)}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){let t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return this.determinantAffine()===0?(e.set(1,0,0),t.set(0,1,0),n.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();let t=this.elements,n=e.elements,r=1/jn.setFromMatrixColumn(e,0).length(),i=1/jn.setFromMatrixColumn(e,1).length(),a=1/jn.setFromMatrixColumn(e,2).length();return t[0]=n[0]*r,t[1]=n[1]*r,t[2]=n[2]*r,t[3]=0,t[4]=n[4]*i,t[5]=n[5]*i,t[6]=n[6]*i,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,n=e.x,r=e.y,i=e.z,a=Math.cos(n),o=Math.sin(n),s=Math.cos(r),c=Math.sin(r),l=Math.cos(i),u=Math.sin(i);if(e.order===`XYZ`){let e=a*l,n=a*u,r=o*l,i=o*u;t[0]=s*l,t[4]=-s*u,t[8]=c,t[1]=n+r*c,t[5]=e-i*c,t[9]=-o*s,t[2]=i-e*c,t[6]=r+n*c,t[10]=a*s}else if(e.order===`YXZ`){let e=s*l,n=s*u,r=c*l,i=c*u;t[0]=e+i*o,t[4]=r*o-n,t[8]=a*c,t[1]=a*u,t[5]=a*l,t[9]=-o,t[2]=n*o-r,t[6]=i+e*o,t[10]=a*s}else if(e.order===`ZXY`){let e=s*l,n=s*u,r=c*l,i=c*u;t[0]=e-i*o,t[4]=-a*u,t[8]=r+n*o,t[1]=n+r*o,t[5]=a*l,t[9]=i-e*o,t[2]=-a*c,t[6]=o,t[10]=a*s}else if(e.order===`ZYX`){let e=a*l,n=a*u,r=o*l,i=o*u;t[0]=s*l,t[4]=r*c-n,t[8]=e*c+i,t[1]=s*u,t[5]=i*c+e,t[9]=n*c-r,t[2]=-c,t[6]=o*s,t[10]=a*s}else if(e.order===`YZX`){let e=a*s,n=a*c,r=o*s,i=o*c;t[0]=s*l,t[4]=i-e*u,t[8]=r*u+n,t[1]=u,t[5]=a*l,t[9]=-o*l,t[2]=-c*l,t[6]=n*u+r,t[10]=e-i*u}else if(e.order===`XZY`){let e=a*s,n=a*c,r=o*s,i=o*c;t[0]=s*l,t[4]=-u,t[8]=c*l,t[1]=e*u+i,t[5]=a*l,t[9]=n*u-r,t[2]=r*u-n,t[6]=o*l,t[10]=i*u+e}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Nn,e,Pn)}lookAt(e,t,n){let r=this.elements;return Ln.subVectors(e,t),Ln.lengthSq()===0&&(Ln.z=1),Ln.normalize(),Fn.crossVectors(n,Ln),Fn.lengthSq()===0&&(Math.abs(n.z)===1?Ln.x+=1e-4:Ln.z+=1e-4,Ln.normalize(),Fn.crossVectors(n,Ln)),Fn.normalize(),In.crossVectors(Ln,Fn),r[0]=Fn.x,r[4]=In.x,r[8]=Ln.x,r[1]=Fn.y,r[5]=In.y,r[9]=Ln.y,r[2]=Fn.z,r[6]=In.z,r[10]=Ln.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,r=t.elements,i=this.elements,a=n[0],o=n[4],s=n[8],c=n[12],l=n[1],u=n[5],d=n[9],f=n[13],p=n[2],m=n[6],h=n[10],g=n[14],_=n[3],v=n[7],y=n[11],b=n[15],x=r[0],S=r[4],C=r[8],w=r[12],T=r[1],E=r[5],D=r[9],O=r[13],k=r[2],A=r[6],j=r[10],ee=r[14],M=r[3],N=r[7],P=r[11],te=r[15];return i[0]=a*x+o*T+s*k+c*M,i[4]=a*S+o*E+s*A+c*N,i[8]=a*C+o*D+s*j+c*P,i[12]=a*w+o*O+s*ee+c*te,i[1]=l*x+u*T+d*k+f*M,i[5]=l*S+u*E+d*A+f*N,i[9]=l*C+u*D+d*j+f*P,i[13]=l*w+u*O+d*ee+f*te,i[2]=p*x+m*T+h*k+g*M,i[6]=p*S+m*E+h*A+g*N,i[10]=p*C+m*D+h*j+g*P,i[14]=p*w+m*O+h*ee+g*te,i[3]=_*x+v*T+y*k+b*M,i[7]=_*S+v*E+y*A+b*N,i[11]=_*C+v*D+y*j+b*P,i[15]=_*w+v*O+y*ee+b*te,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[4],r=e[8],i=e[12],a=e[1],o=e[5],s=e[9],c=e[13],l=e[2],u=e[6],d=e[10],f=e[14],p=e[3],m=e[7],h=e[11],g=e[15],_=s*f-c*d,v=o*f-c*u,y=o*d-s*u,b=a*f-c*l,x=a*d-s*l,S=a*u-o*l;return t*(m*_-h*v+g*y)-n*(p*_-h*b+g*x)+r*(p*v-m*b+g*S)-i*(p*y-m*x+h*S)}determinantAffine(){let e=this.elements,t=e[0],n=e[4],r=e[8],i=e[1],a=e[5],o=e[9],s=e[2],c=e[6],l=e[10];return t*(a*l-o*c)-n*(i*l-o*s)+r*(i*c-a*s)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){let r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=n),this}invert(){let e=this.elements,t=e[0],n=e[1],r=e[2],i=e[3],a=e[4],o=e[5],s=e[6],c=e[7],l=e[8],u=e[9],d=e[10],f=e[11],p=e[12],m=e[13],h=e[14],g=e[15],_=t*o-n*a,v=t*s-r*a,y=t*c-i*a,b=n*s-r*o,x=n*c-i*o,S=r*c-i*s,C=l*m-u*p,w=l*h-d*p,T=l*g-f*p,E=u*h-d*m,D=u*g-f*m,O=d*g-f*h,k=_*O-v*D+y*E+b*T-x*w+S*C;if(k===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let A=1/k;return e[0]=(o*O-s*D+c*E)*A,e[1]=(r*D-n*O-i*E)*A,e[2]=(m*S-h*x+g*b)*A,e[3]=(d*x-u*S-f*b)*A,e[4]=(s*T-a*O-c*w)*A,e[5]=(t*O-r*T+i*w)*A,e[6]=(h*y-p*S-g*v)*A,e[7]=(l*S-d*y+f*v)*A,e[8]=(a*D-o*T+c*C)*A,e[9]=(n*T-t*D-i*C)*A,e[10]=(p*x-m*y+g*_)*A,e[11]=(u*y-l*x-f*_)*A,e[12]=(o*w-a*E-s*C)*A,e[13]=(t*E-n*w+r*C)*A,e[14]=(m*v-p*b-h*_)*A,e[15]=(l*b-u*v+d*_)*A,this}scale(e){let t=this.elements,n=e.x,r=e.y,i=e.z;return t[0]*=n,t[4]*=r,t[8]*=i,t[1]*=n,t[5]*=r,t[9]*=i,t[2]*=n,t[6]*=r,t[10]*=i,t[3]*=n,t[7]*=r,t[11]*=i,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,r))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let n=Math.cos(t),r=Math.sin(t),i=1-n,a=e.x,o=e.y,s=e.z,c=i*a,l=i*o;return this.set(c*a+n,c*o-r*s,c*s+r*o,0,c*o+r*s,l*o+n,l*s-r*a,0,c*s-r*o,l*s+r*a,i*s*s+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,r,i,a){return this.set(1,n,i,0,e,1,a,0,t,r,1,0,0,0,0,1),this}compose(e,t,n){let r=this.elements,i=t._x,a=t._y,o=t._z,s=t._w,c=i+i,l=a+a,u=o+o,d=i*c,f=i*l,p=i*u,m=a*l,h=a*u,g=o*u,_=s*c,v=s*l,y=s*u,b=n.x,x=n.y,S=n.z;return r[0]=(1-(m+g))*b,r[1]=(f+y)*b,r[2]=(p-v)*b,r[3]=0,r[4]=(f-y)*x,r[5]=(1-(d+g))*x,r[6]=(h+_)*x,r[7]=0,r[8]=(p+v)*S,r[9]=(h-_)*S,r[10]=(1-(d+m))*S,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,n){let r=this.elements;e.x=r[12],e.y=r[13],e.z=r[14];let i=this.determinantAffine();if(i===0)return n.set(1,1,1),t.identity(),this;let a=jn.set(r[0],r[1],r[2]).length(),o=jn.set(r[4],r[5],r[6]).length(),s=jn.set(r[8],r[9],r[10]).length();i<0&&(a=-a),Mn.copy(this);let c=1/a,l=1/o,u=1/s;return Mn.elements[0]*=c,Mn.elements[1]*=c,Mn.elements[2]*=c,Mn.elements[4]*=l,Mn.elements[5]*=l,Mn.elements[6]*=l,Mn.elements[8]*=u,Mn.elements[9]*=u,Mn.elements[10]*=u,t.setFromRotationMatrix(Mn),n.x=a,n.y=o,n.z=s,this}makePerspective(e,t,n,r,i,a,o=St,s=!1){let c=this.elements,l=2*i/(t-e),u=2*i/(n-r),d=(t+e)/(t-e),f=(n+r)/(n-r),p,m;if(s)p=i/(a-i),m=a*i/(a-i);else if(o===2e3)p=-(a+i)/(a-i),m=-2*a*i/(a-i);else if(o===2001)p=-a/(a-i),m=-a*i/(a-i);else throw Error(`THREE.Matrix4.makePerspective(): Invalid coordinate system: `+o);return c[0]=l,c[4]=0,c[8]=d,c[12]=0,c[1]=0,c[5]=u,c[9]=f,c[13]=0,c[2]=0,c[6]=0,c[10]=p,c[14]=m,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,n,r,i,a,o=St,s=!1){let c=this.elements,l=2/(t-e),u=2/(n-r),d=-(t+e)/(t-e),f=-(n+r)/(n-r),p,m;if(s)p=1/(a-i),m=a/(a-i);else if(o===2e3)p=-2/(a-i),m=-(a+i)/(a-i);else if(o===2001)p=-1/(a-i),m=-i/(a-i);else throw Error(`THREE.Matrix4.makeOrthographic(): Invalid coordinate system: `+o);return c[0]=l,c[4]=0,c[8]=0,c[12]=d,c[1]=0,c[5]=u,c[9]=0,c[13]=f,c[2]=0,c[6]=0,c[10]=p,c[14]=m,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){let t=this.elements,n=e.elements;for(let e=0;e<16;e++)if(t[e]!==n[e])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}},jn=new U,Mn=new An,Nn=new U(0,0,0),Pn=new U(1,1,1),Fn=new U,In=new U,Ln=new U,Rn=new An,zn=new cn,Bn=class e{constructor(t=0,n=0,r=0,i=e.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=n,this._z=r,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,r=this._order){return this._x=e,this._y=t,this._z=n,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){let r=e.elements,i=r[0],a=r[4],o=r[8],s=r[1],c=r[5],l=r[9],u=r[2],d=r[6],f=r[10];switch(t){case`XYZ`:this._y=Math.asin(V(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-l,f),this._z=Math.atan2(-a,i)):(this._x=Math.atan2(d,c),this._z=0);break;case`YXZ`:this._x=Math.asin(-V(l,-1,1)),Math.abs(l)<.9999999?(this._y=Math.atan2(o,f),this._z=Math.atan2(s,c)):(this._y=Math.atan2(-u,i),this._z=0);break;case`ZXY`:this._x=Math.asin(V(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,f),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(s,i));break;case`ZYX`:this._y=Math.asin(-V(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(s,i)):(this._x=0,this._z=Math.atan2(-a,c));break;case`YZX`:this._z=Math.asin(V(s,-1,1)),Math.abs(s)<.9999999?(this._x=Math.atan2(-l,c),this._y=Math.atan2(-u,i)):(this._x=0,this._y=Math.atan2(o,f));break;case`XZY`:this._z=Math.asin(-V(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(o,i)):(this._x=Math.atan2(-l,f),this._y=0);break;default:z(`Euler: .setFromRotationMatrix() encountered an unknown order: `+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return Rn.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Rn,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return zn.setFromEuler(this),this.setFromQuaternion(zn,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};Bn.DEFAULT_ORDER=`XYZ`;var Vn=class{constructor(){this.mask=1}set(e){this.mask=1<<e>>>0}enable(e){this.mask|=1<<e}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e}disable(e){this.mask&=~(1<<e)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return!!(this.mask&1<<e)}},Hn=0,Un=new U,Wn=new cn,Gn=new An,Kn=new U,qn=new U,Jn=new U,Yn=new cn,Xn=new U(1,0,0),Zn=new U(0,1,0),Qn=new U(0,0,1),$n={type:`added`},er={type:`removed`},tr={type:`childadded`,child:null},nr={type:`childremoved`,child:null},rr=class e extends Nt{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Hn++}),this.uuid=Rt(),this.name=``,this.type=`Object3D`,this.parent=null,this.children=[],this.up=e.DEFAULT_UP.clone();let t=new U,n=new Bn,r=new cn,i=new U(1,1,1);function a(){r.setFromEuler(n,!1)}function o(){n.setFromQuaternion(r,void 0,!1)}n._onChange(a),r._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:r},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new An},normalMatrix:{value:new W}}),this.matrix=new An,this.matrixWorld=new An,this.matrixAutoUpdate=e.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=e.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Vn,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale),this.pivot!==null&&this.position.copy(this.pivot).applyMatrix4(this.matrix).sub(this.pivot)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Wn.setFromAxisAngle(e,t),this.quaternion.multiply(Wn),this}rotateOnWorldAxis(e,t){return Wn.setFromAxisAngle(e,t),this.quaternion.premultiply(Wn),this}rotateX(e){return this.rotateOnAxis(Xn,e)}rotateY(e){return this.rotateOnAxis(Zn,e)}rotateZ(e){return this.rotateOnAxis(Qn,e)}translateOnAxis(e,t){return Un.copy(e).applyQuaternion(this.quaternion),this.position.add(Un.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Xn,e)}translateY(e){return this.translateOnAxis(Zn,e)}translateZ(e){return this.translateOnAxis(Qn,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Gn.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Kn.copy(e):Kn.set(e,t,n);let r=this.parent;this.updateWorldMatrix(!0,!1),qn.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Gn.lookAt(qn,Kn,this.up):Gn.lookAt(Kn,qn,this.up),this.quaternion.setFromRotationMatrix(Gn),r&&(Gn.extractRotation(r.matrixWorld),Wn.setFromRotationMatrix(Gn),this.quaternion.premultiply(Wn.invert()))}add(e){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return e===this?(B(`Object3D.add: object can't be added as a child of itself.`,e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent($n),tr.child=e,this.dispatchEvent(tr),tr.child=null):B(`Object3D.add: object not an instance of THREE.Object3D.`,e),this)}remove(e){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.remove(arguments[e]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(er),nr.child=e,this.dispatchEvent(nr),nr.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Gn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Gn.multiply(e.parent.matrixWorld)),e.applyMatrix4(Gn),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent($n),tr.child=e,this.dispatchEvent(tr),tr.child=null,this}getObjectById(e){return this.getObjectByProperty(`id`,e)}getObjectByName(e){return this.getObjectByProperty(`name`,e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,r=this.children.length;n<r;n++){let r=this.children[n].getObjectByProperty(e,t);if(r!==void 0)return r}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);let r=this.children;for(let i=0,a=r.length;i<a;i++)r[i].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(qn,e,Jn),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(qn,Yn,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}intersectsFrustum(){return!0}traverse(e){e(this);let t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let e=this.pivot;if(e!==null){let t=e.x,n=e.y,r=e.z,i=this.matrix.elements;i[12]+=t-i[0]*t-i[4]*n-i[8]*r,i[13]+=n-i[1]*t-i[5]*n-i[9]*r,i[14]+=r-i[2]*t-i[6]*n-i[10]*r}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t,n=!1){let r=this.parent;if(e===!0&&r!==null&&r.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),t===!0){let e=this.children;for(let t=0,r=e.length;t<r;t++)e[t].updateWorldMatrix(!1,!0,n)}}toJSON(e){let t=e===void 0||typeof e==`string`,n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:`Object`,generator:`Object3D.toJSON`});let r={};r.uuid=this.uuid,r.type=this.type,r.name=this.name,r.castShadow=this.castShadow,r.receiveShadow=this.receiveShadow,r.visible=this.visible,r.frustumCulled=this.frustumCulled,r.renderOrder=this.renderOrder,r.static=this.static,r.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.pivot!==null&&(r.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(r.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(r.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(r.type=`InstancedMesh`,r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type=`BatchedMesh`,r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.geometryInfo=this._geometryInfo.map(e=>({...e,boundingBox:e.boundingBox?e.boundingBox.toJSON():void 0,boundingSphere:e.boundingSphere?e.boundingSphere.toJSON():void 0})),r.instanceInfo=this._instanceInfo.map(e=>({...e})),r.availableInstanceIds=this._availableInstanceIds.slice(),r.availableGeometryIds=this._availableGeometryIds.slice(),r.nextIndexStart=this._nextIndexStart,r.nextVertexStart=this._nextVertexStart,r.geometryCount=this._geometryCount,r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.matricesTexture=this._matricesTexture.toJSON(e),r.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(r.boundingBox=this.boundingBox.toJSON()));function i(t,n){return t[n.uuid]===void 0&&(t[n.uuid]=n.toJSON(e)),n.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=i(e.geometries,this.geometry);let t=this.geometry.parameters;if(t!==void 0&&t.shapes!==void 0){let n=t.shapes;if(Array.isArray(n))for(let t=0,r=n.length;t<r;t++){let r=n[t];i(e.shapes,r)}else i(e.shapes,n)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(i(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0){if(Array.isArray(this.material)){let t=[];for(let n=0,r=this.material.length;n<r;n++)t.push(i(e.materials,this.material[n]));r.material=t}else r.material=i(e.materials,this.material)}if(this.children.length>0){r.children=[];for(let t=0;t<this.children.length;t++)r.children.push(this.children[t].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let t=0;t<this.animations.length;t++){let n=this.animations[t];r.animations.push(i(e.animations,n))}}if(t){let t=a(e.geometries),r=a(e.materials),i=a(e.textures),o=a(e.images),s=a(e.shapes),c=a(e.skeletons),l=a(e.animations),u=a(e.nodes);t.length>0&&(n.geometries=t),r.length>0&&(n.materials=r),i.length>0&&(n.textures=i),o.length>0&&(n.images=o),s.length>0&&(n.shapes=s),c.length>0&&(n.skeletons=c),l.length>0&&(n.animations=l),u.length>0&&(n.nodes=u)}return n.object=r,n;function a(e){let t=[];for(let n in e){let r=e[n];delete r.metadata,t.push(r)}return t}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot===null?null:e.pivot.clone(),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let t=0;t<e.children.length;t++){let n=e.children[t];this.add(n.clone())}return this}dispose(){this.dispatchEvent({type:`dispose`})}};rr.DEFAULT_UP=new U(0,1,0),rr.DEFAULT_MATRIX_AUTO_UPDATE=!0,rr.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var ir=class extends rr{constructor(){super(),this.isGroup=!0,this.type=`Group`}},ar={type:`move`},or=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new ir,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new ir,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new U,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new U),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new ir,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new U,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new U,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:`connected`,data:e}),this}disconnect(e){return this.dispatchEvent({type:`disconnected`,data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let r=null,i=null,a=null,o=this._targetRay,s=this._grip,c=this._hand;if(e&&t.session.visibilityState!==`visible-blurred`){if(c&&e.hand){a=!0;for(let r of e.hand.values()){let e=t.getJointPose(r,n),i=this._getHandJoint(c,r);e!==null&&(i.matrix.fromArray(e.transform.matrix),i.matrix.decompose(i.position,i.quaternion,i.scale),i.matrixWorldNeedsUpdate=!0,i.jointRadius=e.radius),i.visible=e!==null}let r=c.joints[`index-finger-tip`],i=c.joints[`thumb-tip`],o=r.position.distanceTo(i.position);c.inputState.pinching&&o>.025?(c.inputState.pinching=!1,this.dispatchEvent({type:`pinchend`,handedness:e.handedness,target:this})):!c.inputState.pinching&&o<=.015&&(c.inputState.pinching=!0,this.dispatchEvent({type:`pinchstart`,handedness:e.handedness,target:this}))}else s!==null&&e.gripSpace&&(i=t.getPose(e.gripSpace,n),i!==null&&(s.matrix.fromArray(i.transform.matrix),s.matrix.decompose(s.position,s.quaternion,s.scale),s.matrixWorldNeedsUpdate=!0,i.linearVelocity?(s.hasLinearVelocity=!0,s.linearVelocity.copy(i.linearVelocity)):s.hasLinearVelocity=!1,i.angularVelocity?(s.hasAngularVelocity=!0,s.angularVelocity.copy(i.angularVelocity)):s.hasAngularVelocity=!1,s.eventsEnabled&&s.dispatchEvent({type:`gripUpdated`,data:e,target:this})));o!==null&&(r=t.getPose(e.targetRaySpace,n),r===null&&i!==null&&(r=i),r!==null&&(o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.quaternion,o.scale),o.matrixWorldNeedsUpdate=!0,r.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(r.linearVelocity)):o.hasLinearVelocity=!1,r.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(r.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(ar)))}return o!==null&&(o.visible=r!==null),s!==null&&(s.visible=i!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let n=new ir;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}},sr={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},cr={h:0,s:0,l:0},lr={h:0,s:0,l:0};function ur(e,t,n){return n<0&&(n+=1),n>1&&--n,n<1/6?e+(t-e)*6*n:n<1/2?t:n<2/3?e+(t-e)*6*(2/3-n):e}var K=class{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){let t=e;t&&t.isColor?this.copy(t):typeof t==`number`?this.setHex(t):typeof t==`string`&&this.setStyle(t)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=ht){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,G.colorSpaceToWorking(this,t),this}setRGB(e,t,n,r=G.workingColorSpace){return this.r=e,this.g=t,this.b=n,G.colorSpaceToWorking(this,r),this}setHSL(e,t,n,r=G.workingColorSpace){if(e=zt(e,1),t=V(t,0,1),n=V(n,0,1),t===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+t):n+t-n*t,i=2*n-r;this.r=ur(i,r,e+1/3),this.g=ur(i,r,e),this.b=ur(i,r,e-1/3)}return G.colorSpaceToWorking(this,r),this}setStyle(e,t=ht){function n(t){t!==void 0&&parseFloat(t)<1&&z(`Color: Alpha component of `+e+` will be ignored.`)}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let i,a=r[1],o=r[2];switch(a){case`rgb`:case`rgba`:if(i=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return n(i[4]),this.setRGB(Math.min(255,parseInt(i[1],10))/255,Math.min(255,parseInt(i[2],10))/255,Math.min(255,parseInt(i[3],10))/255,t);if(i=/^\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return n(i[4]),this.setRGB(Math.min(100,parseFloat(i[1]))/100,Math.min(100,parseFloat(i[2]))/100,Math.min(100,parseFloat(i[3]))/100,t);break;case`hsl`:case`hsla`:if(i=/^\s*([+-]?(?:\d+(?:\.\d+)?|\.\d+))\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return n(i[4]),this.setHSL(parseFloat(i[1])/360,parseFloat(i[2])/100,parseFloat(i[3])/100,t);break;default:z(`Color: Unknown color model `+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){let n=r[1],i=n.length;if(i===3)return this.setRGB(parseInt(n.charAt(0),16)/15,parseInt(n.charAt(1),16)/15,parseInt(n.charAt(2),16)/15,t);if(i===6)return this.setHex(parseInt(n,16),t);z(`Color: Invalid hex color `+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=ht){let n=sr[e.toLowerCase()];return n===void 0?z(`Color: Unknown color `+e):this.setHex(n,t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=hn(e.r),this.g=hn(e.g),this.b=hn(e.b),this}copyLinearToSRGB(e){return this.r=gn(e.r),this.g=gn(e.g),this.b=gn(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=ht){return G.workingToColorSpace(dr.copy(this),e),Math.round(V(dr.r*255,0,255))*65536+Math.round(V(dr.g*255,0,255))*256+Math.round(V(dr.b*255,0,255))}getHexString(e=ht){return(`000000`+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=G.workingColorSpace){G.workingToColorSpace(dr.copy(this),t);let n=dr.r,r=dr.g,i=dr.b,a=Math.max(n,r,i),o=Math.min(n,r,i),s,c,l=(o+a)/2;if(o===a)s=0,c=0;else{let e=a-o;switch(c=l<=.5?e/(a+o):e/(2-a-o),a){case n:s=(r-i)/e+(r<i?6:0);break;case r:s=(i-n)/e+2;break;case i:s=(n-r)/e+4}s/=6}return e.h=s,e.s=c,e.l=l,e}getRGB(e,t=G.workingColorSpace){return G.workingToColorSpace(dr.copy(this),t),e.r=dr.r,e.g=dr.g,e.b=dr.b,e}getStyle(e=ht){G.workingToColorSpace(dr.copy(this),e);let t=dr.r,n=dr.g,r=dr.b;return e===`srgb`?`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(r*255)})`:`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${r.toFixed(3)})`}offsetHSL(e,t,n){return this.getHSL(cr),this.setHSL(cr.h+e,cr.s+t,cr.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(cr),e.getHSL(lr);let n=Ht(cr.h,lr.h,t),r=Ht(cr.s,lr.s,t),i=Ht(cr.l,lr.l,t);return this.setHSL(n,r,i),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,n=this.g,r=this.b,i=e.elements;return this.r=i[0]*t+i[3]*n+i[6]*r,this.g=i[1]*t+i[4]*n+i[7]*r,this.b=i[2]*t+i[5]*n+i[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},dr=new K;K.NAMES=sr;var fr=class e{constructor(e,t=1,n=1e3){this.isFog=!0,this.name=``,this.color=new K(e),this.near=t,this.far=n}clone(){return new e(this.color,this.near,this.far)}toJSON(){return{type:`Fog`,name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}},pr=class extends rr{constructor(){super(),this.isScene=!0,this.type=`Scene`,this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Bn,this.environmentIntensity=1,this.environmentRotation=new Bn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<`u`&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent(`observe`,{detail:this}))}copy(e,t){return super.copy(e,t),this.background=e.background===null?null:e.background.clone(),this.environment=e.environment===null?null:e.environment.clone(),this.fog=e.fog===null?null:e.fog.clone(),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),this.overrideMaterial=e.overrideMaterial===null?null:e.overrideMaterial.clone(),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),t.object.backgroundBlurriness=this.backgroundBlurriness,t.object.backgroundIntensity=this.backgroundIntensity,t.object.backgroundRotation=this.backgroundRotation.toArray(),t.object.environmentIntensity=this.environmentIntensity,t.object.environmentRotation=this.environmentRotation.toArray(),t}},mr=new U,hr=new U,gr=new U,_r=new U,vr=new U,yr=new U,br=new U,xr=new U,Sr=new U,Cr=new U,wr=new Tn,Tr=new Tn,Er=new Tn,Dr=class e{constructor(e=new U,t=new U,n=new U){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,r){r.subVectors(n,t),mr.subVectors(e,t),r.cross(mr);let i=r.lengthSq();return i>0?r.multiplyScalar(1/Math.sqrt(i)):r.set(0,0,0)}static getBarycoord(e,t,n,r,i){mr.subVectors(r,t),hr.subVectors(n,t),gr.subVectors(e,t);let a=mr.dot(mr),o=mr.dot(hr),s=mr.dot(gr),c=hr.dot(hr),l=hr.dot(gr),u=a*c-o*o;if(u===0)return i.set(0,0,0),null;let d=1/u,f=(c*s-o*l)*d,p=(a*l-o*s)*d;return i.set(1-f-p,p,f)}static containsPoint(e,t,n,r){return this.getBarycoord(e,t,n,r,_r)!==null&&_r.x>=0&&_r.y>=0&&_r.x+_r.y<=1}static getInterpolation(e,t,n,r,i,a,o,s){return this.getBarycoord(e,t,n,r,_r)===null?(s.x=0,s.y=0,`z`in s&&(s.z=0),`w`in s&&(s.w=0),null):(s.setScalar(0),s.addScaledVector(i,_r.x),s.addScaledVector(a,_r.y),s.addScaledVector(o,_r.z),s)}static getInterpolatedAttribute(e,t,n,r,i,a){return wr.setScalar(0),Tr.setScalar(0),Er.setScalar(0),wr.fromBufferAttribute(e,t),Tr.fromBufferAttribute(e,n),Er.fromBufferAttribute(e,r),a.setScalar(0),a.addScaledVector(wr,i.x),a.addScaledVector(Tr,i.y),a.addScaledVector(Er,i.z),a}static isFrontFacing(e,t,n,r){return mr.subVectors(n,t),hr.subVectors(e,t),mr.cross(hr).dot(r)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,r){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,n,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return mr.subVectors(this.c,this.b),hr.subVectors(this.a,this.b),mr.cross(hr).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return e.getNormal(this.a,this.b,this.c,t)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,n){return e.getBarycoord(t,this.a,this.b,this.c,n)}getInterpolation(t,n,r,i,a){return e.getInterpolation(t,this.a,this.b,this.c,n,r,i,a)}containsPoint(t){return e.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return e.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let n=this.a,r=this.b,i=this.c,a,o;vr.subVectors(r,n),yr.subVectors(i,n),xr.subVectors(e,n);let s=vr.dot(xr),c=yr.dot(xr);if(s<=0&&c<=0)return t.copy(n);Sr.subVectors(e,r);let l=vr.dot(Sr),u=yr.dot(Sr);if(l>=0&&u<=l)return t.copy(r);let d=s*u-l*c;if(d<=0&&s>=0&&l<=0&&s-l>0)return a=s/(s-l),t.copy(n).addScaledVector(vr,a);Cr.subVectors(e,i);let f=vr.dot(Cr),p=yr.dot(Cr);if(p>=0&&f<=p)return t.copy(i);let m=f*c-s*p;if(m<=0&&c>=0&&p<=0)return o=c/(c-p),t.copy(n).addScaledVector(yr,o);let h=l*p-f*u;if(h<=0&&u-l>=0&&f-p>=0)return br.subVectors(i,r),o=(u-l)/(u-l+(f-p)),t.copy(r).addScaledVector(br,o);let g=1/(h+m+d);return a=m*g,o=d*g,t.copy(n).addScaledVector(vr,a).addScaledVector(yr,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},Or=class{constructor(e=new U(1/0,1/0,1/0),t=new U(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(Ar.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(Ar.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let n=Ar.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let n=e.geometry;if(n!==void 0){let r=n.getAttribute(`position`);if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0&&e.isBatchedMesh!==!0)for(let t=0,n=r.count;t<n;t++)e.isMesh===!0?e.getVertexPosition(t,Ar):Ar.fromBufferAttribute(r,t),Ar.applyMatrix4(e.matrixWorld),this.expandByPoint(Ar);else e.boundingBox===void 0?(n.boundingBox===null&&n.computeBoundingBox(),jr.copy(n.boundingBox)):(e.boundingBox===null&&e.computeBoundingBox(),jr.copy(e.boundingBox)),jr.applyMatrix4(e.matrixWorld),this.union(jr)}let r=e.children;for(let e=0,n=r.length;e<n;e++)this.expandByObject(r[e],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Ar),Ar.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Rr),zr.subVectors(this.max,Rr),Mr.subVectors(e.a,Rr),Nr.subVectors(e.b,Rr),Pr.subVectors(e.c,Rr),Fr.subVectors(Nr,Mr),Ir.subVectors(Pr,Nr),Lr.subVectors(Mr,Pr);let t=[0,-Fr.z,Fr.y,0,-Ir.z,Ir.y,0,-Lr.z,Lr.y,Fr.z,0,-Fr.x,Ir.z,0,-Ir.x,Lr.z,0,-Lr.x,-Fr.y,Fr.x,0,-Ir.y,Ir.x,0,-Lr.y,Lr.x,0];return!Hr(t,Mr,Nr,Pr,zr)||(t=[1,0,0,0,1,0,0,0,1],!Hr(t,Mr,Nr,Pr,zr))?!1:(Br.crossVectors(Fr,Ir),t=[Br.x,Br.y,Br.z],Hr(t,Mr,Nr,Pr,zr))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Ar).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Ar).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()||(kr[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),kr[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),kr[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),kr[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),kr[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),kr[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),kr[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),kr[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(kr)),this}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}},kr=[new U,new U,new U,new U,new U,new U,new U,new U],Ar=new U,jr=new Or,Mr=new U,Nr=new U,Pr=new U,Fr=new U,Ir=new U,Lr=new U,Rr=new U,zr=new U,Br=new U,Vr=new U;function Hr(e,t,n,r,i){for(let a=0,o=e.length-3;a<=o;a+=3){Vr.fromArray(e,a);let o=i.x*Math.abs(Vr.x)+i.y*Math.abs(Vr.y)+i.z*Math.abs(Vr.z),s=t.dot(Vr),c=n.dot(Vr),l=r.dot(Vr);if(Math.max(-Math.max(s,c,l),Math.min(s,c,l))>o)return!1}return!0}var Ur=new U,Wr=new H,Gr=0,Kr=class extends Nt{constructor(e,t,n=!1){if(super(),Array.isArray(e))throw TypeError(`THREE.BufferAttribute: array should be a Typed Array.`);this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Gr++}),this.name=``,this.array=e,this.itemSize=t,this.count=e===void 0?0:e.length/t,this.normalized=n,this.usage=bt,this.updateRanges=[],this.gpuType=fe,this.version=0,this._normalizationScale=e===void 0?void 0:rn(e)}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this._normalizationScale=e._normalizationScale,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let r=0,i=this.itemSize;r<i;r++)this.array[e+r]=t.array[n+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Wr.fromBufferAttribute(this,t),Wr.applyMatrix3(e),this.setXY(t,Wr.x,Wr.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)Ur.fromBufferAttribute(this,t),Ur.applyMatrix3(e),this.setXYZ(t,Ur.x,Ur.y,Ur.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)Ur.fromBufferAttribute(this,t),Ur.applyMatrix4(e),this.setXYZ(t,Ur.x,Ur.y,Ur.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Ur.fromBufferAttribute(this,t),Ur.applyNormalMatrix(e),this.setXYZ(t,Ur.x,Ur.y,Ur.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Ur.fromBufferAttribute(this,t),Ur.transformDirection(e),this.setXYZ(t,Ur.x,Ur.y,Ur.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=this._denormalize(n)),n}setComponent(e,t,n){return this.normalized&&(n=this._normalize(n)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=this._denormalize(t)),t}setX(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=this._denormalize(t)),t}setY(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=this._denormalize(t)),t}setZ(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=this._denormalize(t)),t}setW(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),n=this._normalize(n)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,r){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),n=this._normalize(n),r=this._normalize(r)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this}setXYZW(e,t,n,r,i){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),n=this._normalize(n),r=this._normalize(r),i=this._normalize(i)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this.array[e+3]=i,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return e.name=this.name,e.usage=this.usage,e.gpuType=this.gpuType,e}dispose(){this.dispatchEvent({type:`dispose`})}_denormalize(e){let t=this._normalizationScale;return t===void 0?an(e,this.array):Math.max(e/t,-1)}_normalize(e){let t=this._normalizationScale;return t===void 0?on(e,this.array):Math.round(e*t)}},qr=class extends Kr{constructor(e,t,n){super(new Uint16Array(e),t,n)}},Jr=class extends Kr{constructor(e,t,n){super(new Uint32Array(e),t,n)}},Yr=class extends Kr{constructor(e,t,n){super(new Float32Array(e),t,n)}},Xr=new Or,Zr=new U,Qr=new U,$r=class{constructor(e=new U,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let n=this.center;t===void 0?Xr.setFromPoints(e).getCenter(n):n.copy(t);let r=0;for(let t=0,i=e.length;t<i;t++)r=Math.max(r,n.distanceToSquared(e[t]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius*=e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Zr.subVectors(e,this.center);let t=Zr.lengthSq();if(t>this.radius*this.radius){let e=Math.sqrt(t),n=(e-this.radius)*.5;this.center.addScaledVector(Zr,n/e),this.radius+=n}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Qr.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Zr.copy(e.center).add(Qr)),this.expandByPoint(Zr.copy(e.center).sub(Qr))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}},ei=0,ti=new An,ni=new rr,ri=new U,ii=new Or,ai=new Or,oi=new U,si=class e extends Nt{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:ei++}),this.uuid=Rt(),this.name=``,this.type=`BufferGeometry`,this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return this.index=Array.isArray(e)?new(Ct(e)?Jr:qr)(e,1):e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let t=new W().getNormalMatrix(e);n.applyNormalMatrix(t),n.needsUpdate=!0}let r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return ti.makeRotationFromQuaternion(e),this.applyMatrix4(ti),this}rotateX(e){return ti.makeRotationX(e),this.applyMatrix4(ti),this}rotateY(e){return ti.makeRotationY(e),this.applyMatrix4(ti),this}rotateZ(e){return ti.makeRotationZ(e),this.applyMatrix4(ti),this}translate(e,t,n){return ti.makeTranslation(e,t,n),this.applyMatrix4(ti),this}scale(e,t,n){return ti.makeScale(e,t,n),this.applyMatrix4(ti),this}lookAt(e){return ni.lookAt(e),ni.updateMatrix(),this.applyMatrix4(ni.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ri).negate(),this.translate(ri.x,ri.y,ri.z),this}setFromPoints(e){let t=this.getAttribute(`position`);if(t===void 0){let t=[];for(let n=0,r=e.length;n<r;n++){let r=e[n];t.push(r.x,r.y,r.z||0)}this.setAttribute(`position`,new Yr(t,3))}else{let n=Math.min(e.length,t.count);for(let r=0;r<n;r++){let n=e[r];t.setXYZ(r,n.x,n.y,n.z||0)}e.length>t.count&&z(`BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry.`),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Or);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute)B(`BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.`,this),this.boundingBox.set(new U(-1/0,-1/0,-1/0),new U(1/0,1/0,1/0));else{if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let e=0,n=t.length;e<n;e++){let n=t[e];ii.setFromBufferAttribute(n),this.morphTargetsRelative?(oi.addVectors(this.boundingBox.min,ii.min),this.boundingBox.expandByPoint(oi),oi.addVectors(this.boundingBox.max,ii.max),this.boundingBox.expandByPoint(oi)):(this.boundingBox.expandByPoint(ii.min),this.boundingBox.expandByPoint(ii.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&B(`BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.`,this)}}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new $r);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute)B(`BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.`,this),this.boundingSphere.set(new U,1/0);else if(e){let n=this.boundingSphere.center;if(ii.setFromBufferAttribute(e),t)for(let e=0,n=t.length;e<n;e++){let n=t[e];ai.setFromBufferAttribute(n),this.morphTargetsRelative?(oi.addVectors(ii.min,ai.min),ii.expandByPoint(oi),oi.addVectors(ii.max,ai.max),ii.expandByPoint(oi)):(ii.expandByPoint(ai.min),ii.expandByPoint(ai.max))}ii.getCenter(n);let r=0;for(let t=0,i=e.count;t<i;t++)oi.fromBufferAttribute(e,t),r=Math.max(r,n.distanceToSquared(oi));if(t)for(let i=0,a=t.length;i<a;i++){let a=t[i],o=this.morphTargetsRelative;for(let t=0,i=a.count;t<i;t++)oi.fromBufferAttribute(a,t),o&&(ri.fromBufferAttribute(e,t),oi.add(ri)),r=Math.max(r,n.distanceToSquared(oi))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&B(`BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.`,this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){B(`BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)`);return}let n=t.position,r=t.normal,i=t.uv,a=this.getAttribute(`tangent`);(a===void 0||a.count!==n.count)&&(a=new Kr(new Float32Array(4*n.count),4),this.setAttribute(`tangent`,a));let o=[],s=[],c=new Uint8Array(n.count);for(let e=0;e<n.count;e++)o[e]=new U,s[e]=new U;let l=new U,u=new U,d=new U,f=new H,p=new H,m=new H,h=new U,g=new U;function _(e,t,r){c[e]=c[t]=c[r]=1,l.fromBufferAttribute(n,e),u.fromBufferAttribute(n,t),d.fromBufferAttribute(n,r),f.fromBufferAttribute(i,e),p.fromBufferAttribute(i,t),m.fromBufferAttribute(i,r),u.sub(l),d.sub(l),p.sub(f),m.sub(f);let a=1/(p.x*m.y-m.x*p.y);isFinite(a)&&(h.copy(u).multiplyScalar(m.y).addScaledVector(d,-p.y).multiplyScalar(a),g.copy(d).multiplyScalar(p.x).addScaledVector(u,-m.x).multiplyScalar(a),o[e].add(h),o[t].add(h),o[r].add(h),s[e].add(g),s[t].add(g),s[r].add(g))}let v=this.groups;v.length===0&&(v=[{start:0,count:e.count}]);for(let t=0,n=v.length;t<n;++t){let n=v[t],r=n.start,i=n.count;for(let t=r,n=r+i;t<n;t+=3)_(e.getX(t+0),e.getX(t+1),e.getX(t+2))}let y=new U,b=new U,x=new U,S=new U;function C(e){x.fromBufferAttribute(r,e),S.copy(x);let t=o[e];y.copy(t),y.sub(x.multiplyScalar(x.dot(t))).normalize(),b.crossVectors(S,t);let n=b.dot(s[e])<0?-1:1;a.setXYZW(e,y.x,y.y,y.z,n)}for(let e=0,t=n.count;e<t;++e)c[e]&&C(e);this._transformed=!0}computeVertexNormals(){let e=this.index,t=this.getAttribute(`position`);if(t!==void 0){let n=this.getAttribute(`normal`);if(n===void 0||n.count!==t.count)n=new Kr(new Float32Array(t.count*3),3),this.setAttribute(`normal`,n);else for(let e=0,t=n.count;e<t;e++)n.setXYZ(e,0,0,0);let r=new U,i=new U,a=new U,o=new U,s=new U,c=new U,l=new U,u=new U;if(e)for(let d=0,f=e.count;d<f;d+=3){let f=e.getX(d+0),p=e.getX(d+1),m=e.getX(d+2);r.fromBufferAttribute(t,f),i.fromBufferAttribute(t,p),a.fromBufferAttribute(t,m),l.subVectors(a,i),u.subVectors(r,i),l.cross(u),o.fromBufferAttribute(n,f),s.fromBufferAttribute(n,p),c.fromBufferAttribute(n,m),o.add(l),s.add(l),c.add(l),n.setXYZ(f,o.x,o.y,o.z),n.setXYZ(p,s.x,s.y,s.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let e=0,o=t.count;e<o;e+=3)r.fromBufferAttribute(t,e+0),i.fromBufferAttribute(t,e+1),a.fromBufferAttribute(t,e+2),l.subVectors(a,i),u.subVectors(r,i),l.cross(u),n.setXYZ(e+0,l.x,l.y,l.z),n.setXYZ(e+1,l.x,l.y,l.z),n.setXYZ(e+2,l.x,l.y,l.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)oi.fromBufferAttribute(e,t),oi.normalize(),e.setXYZ(t,oi.x,oi.y,oi.z)}toNonIndexed(){function t(e,t){let n=e.array,r=e.itemSize,i=e.normalized,a=new n.constructor(t.length*r),o=0,s=0;for(let i=0,c=t.length;i<c;i++){o=e.isInterleavedBufferAttribute?t[i]*e.data.stride+e.offset:t[i]*r;for(let e=0;e<r;e++)a[s++]=n[o++]}return new Kr(a,r,i)}if(this.index===null)return z(`BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed.`),this;let n=new e,r=this.index.array,i=this.attributes;for(let e in i){let a=i[e],o=t(a,r);n.setAttribute(e,o)}let a=this.morphAttributes;for(let e in a){let i=[],o=a[e];for(let e=0,n=o.length;e<n;e++){let n=o[e],a=t(n,r);i.push(a)}n.morphAttributes[e]=i}n.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let e=0,t=o.length;e<t;e++){let t=o[e];n.addGroup(t.start,t.count,t.materialIndex)}return n}toJSON(){let e={metadata:{version:4.7,type:`BufferGeometry`,generator:`BufferGeometry.toJSON`}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?`BufferGeometry`:this.type,e.name=this.name,Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let t=this.parameters;for(let n in t)t[n]!==void 0&&(e[n]=t[n]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let n=this.attributes;for(let t in n){let r=n[t];e.data.attributes[t]=r.toJSON(e.data)}let r={},i=!1;for(let t in this.morphAttributes){let n=this.morphAttributes[t],a=[];for(let t=0,r=n.length;t<r;t++){let r=n[t];a.push(r.toJSON(e.data))}a.length>0&&(r[t]=a,i=!0)}i&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let n=e.index;n!==null&&this.setIndex(n.clone());let r=e.attributes;for(let e in r){let n=r[e];this.setAttribute(e,n.clone(t))}let i=e.morphAttributes;for(let e in i){let n=[],r=i[e];for(let e=0,i=r.length;e<i;e++)n.push(r[e].clone(t));this.morphAttributes[e]=n}this.morphTargetsRelative=e.morphTargetsRelative;let a=e.groups;for(let e=0,t=a.length;e<t;e++){let t=a[e];this.addGroup(t.start,t.count,t.materialIndex)}let o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());let s=e.boundingSphere;return s!==null&&(this.boundingSphere=s.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:`dispose`})}},ci=class{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e===void 0?0:e.length/t,this.usage=bt,this.updateRanges=[],this.version=0,this.uuid=Rt()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let r=0,i=this.stride;r<i;r++)this.array[e+r]=t.array[n+r];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={});let t=li(this.array);e.arrayBuffers[t]===void 0&&(e.arrayBuffers[t]=this.array.slice(0).buffer);let n=new this.array.constructor(e.arrayBuffers[t]),r=new this.constructor(n,this.stride);return r.setUsage(this.usage),r}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){e.arrayBuffers===void 0&&(e.arrayBuffers={});let t=li(this.array);e.arrayBuffers[t]===void 0&&(e.arrayBuffers[t]=Array.from(new Uint32Array(this.array.slice(0).buffer)));let n={uuid:this.uuid,buffer:t,type:this.array.constructor.name,stride:this.stride};return n.usage=this.usage,n}};function li(e){return e.buffer._uuid===void 0&&(e.buffer._uuid=Rt()),e.byteOffset===0&&e.byteLength===e.buffer.byteLength?e.buffer._uuid:e.buffer._uuid+`:`+e.byteOffset+`:`+e.byteLength}var ui=new U,di=class e{constructor(e,t,n,r=!1){this.isInterleavedBufferAttribute=!0,this.name=``,this.data=e,this.itemSize=t,this.offset=n,this.normalized=r,this._normalizationScale=e===void 0?void 0:rn(e.array)}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)ui.fromBufferAttribute(this,t),ui.applyMatrix4(e),this.setXYZ(t,ui.x,ui.y,ui.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)ui.fromBufferAttribute(this,t),ui.applyNormalMatrix(e),this.setXYZ(t,ui.x,ui.y,ui.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)ui.fromBufferAttribute(this,t),ui.transformDirection(e),this.setXYZ(t,ui.x,ui.y,ui.z);return this}getComponent(e,t){let n=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(n=this._denormalize(n)),n}setComponent(e,t,n){return this.normalized&&(n=this._normalize(n)),this.data.array[e*this.data.stride+this.offset+t]=n,this}setX(e,t){return this.normalized&&(t=this._normalize(t)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=this._normalize(t)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=this._normalize(t)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=this._normalize(t)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=this._denormalize(t)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=this._denormalize(t)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=this._denormalize(t)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=this._denormalize(t)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=this._normalize(t),n=this._normalize(n)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=this._normalize(t),n=this._normalize(n),r=this._normalize(r)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=r,this}setXYZW(e,t,n,r,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=this._normalize(t),n=this._normalize(n),r=this._normalize(r),i=this._normalize(i)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=r,this.data.array[e+3]=i,this}clone(t){if(t===void 0){Ot(`InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.`);let e=[];for(let t=0;t<this.count;t++){let n=t*this.data.stride+this.offset;for(let t=0;t<this.itemSize;t++)e.push(this.data.array[n+t])}return new Kr(new this.array.constructor(e),this.itemSize,this.normalized)}return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new e(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){Ot(`InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.`);let e=[];for(let t=0;t<this.count;t++){let n=t*this.data.stride+this.offset;for(let t=0;t<this.itemSize;t++)e.push(this.data.array[n+t])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}_denormalize(e){let t=this._normalizationScale;return t===void 0?an(e,this.data.array):Math.max(e/t,-1)}_normalize(e){let t=this._normalizationScale;return t===void 0?on(e,this.data.array):Math.round(e*t)}},fi=new U,pi=new U,mi=new W,hi=class{constructor(e=new U(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,r){return this.normal.set(e,t,n),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){let r=fi.subVectors(n,t).cross(pi.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,n=!0){let r=e.delta(fi),i=this.normal.dot(r);if(i===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let a=-(e.start.dot(this.normal)+this.constant)/i;return n===!0&&(a<0||a>1)?null:t.copy(e.start).addScaledVector(r,a)}intersectsLine(e){let t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let n=t||mi.getNormalMatrix(e),r=this.coplanarPoint(fi).applyMatrix4(e),i=this.normal.applyMatrix3(n).normalize();return this.constant=-r.dot(i),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(e){return this.normal.fromArray(e.normal),this.constant=e.constant,this}},gi=0,_i=class extends Nt{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:gi++}),this.uuid=Rt(),this.name=``,this.type=`Material`,this.blending=1,this.side=0,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=204,this.blendDst=205,this.blendEquation=100,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new K(0,0,0),this.blendAlpha=0,this.depthFunc=3,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=519,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=yt,this.stencilZFail=yt,this.stencilZPass=yt,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let n=e[t];if(n===void 0){z(`Material: parameter '${t}' has value of undefined.`);continue}let r=this[t];r===void 0?z(`Material: '${t}' is not a property of THREE.${this.type}.`):r&&r.isColor?r.set(n):r&&r.isVector2&&n&&n.isVector2||r&&r.isEuler&&n&&n.isEuler||r&&r.isVector3&&n&&n.isVector3?r.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e==`string`;t&&(e={textures:{},images:{}});let n={metadata:{version:4.7,type:`Material`,generator:`Material.toJSON`}};n.uuid=this.uuid,n.type=this.type,n.blending=this.blending,n.side=this.side,n.shadowSide=this.shadowSide,n.vertexColors=this.vertexColors,n.opacity=this.opacity,n.transparent=this.transparent,n.blendSrc=this.blendSrc,n.blendDst=this.blendDst,n.blendEquation=this.blendEquation,n.blendSrcAlpha=this.blendSrcAlpha,n.blendDstAlpha=this.blendDstAlpha,n.blendEquationAlpha=this.blendEquationAlpha,n.blendColor=this.blendColor.getHex(),n.blendAlpha=this.blendAlpha,n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.clipIntersection=this.clipIntersection,n.clipShadows=this.clipShadows,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,n.stencilWrite=this.stencilWrite,n.polygonOffset=this.polygonOffset,n.polygonOffsetFactor=this.polygonOffsetFactor,n.polygonOffsetUnits=this.polygonOffsetUnits,n.dithering=this.dithering,n.alphaTest=this.alphaTest,n.alphaHash=this.alphaHash,n.alphaToCoverage=this.alphaToCoverage,n.premultipliedAlpha=this.premultipliedAlpha,n.forceSinglePass=this.forceSinglePass,n.allowOverride=this.allowOverride,n.visible=this.visible,n.toneMapped=this.toneMapped,n.name=this.name,this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.diffuseRoughness!==void 0&&(n.diffuseRoughness=this.diffuseRoughness),this.diffuseRoughnessMap&&this.diffuseRoughnessMap.isTexture&&(n.diffuseRoughnessMap=this.diffuseRoughnessMap.toJSON(e).uuid),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(n.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessMinimum!==void 0&&(n.iridescenceThicknessMinimum=this.iridescenceThicknessMinimum),this.iridescenceThicknessMaximum!==void 0&&(n.iridescenceThicknessMaximum=this.iridescenceThicknessMaximum),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(n.clippingPlanes=this.clippingPlanes.map(e=>e.toJSON())),this.rotation!==void 0&&(n.rotation=this.rotation),this.depthPacking!==void 0&&(n.depthPacking=this.depthPacking),this.linewidth!==void 0&&(n.linewidth=this.linewidth),this.linecap!==void 0&&(n.linecap=this.linecap),this.linejoin!==void 0&&(n.linejoin=this.linejoin),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.wireframe!==void 0&&(n.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(n.flatShading=this.flatShading),this.fog!==void 0&&(n.fog=this.fog),Object.keys(this.userData).length>0&&(n.userData=this.userData);function r(e){let t=[];for(let n in e){let r=e[n];delete r.metadata,t.push(r)}return t}if(t){let t=r(e.textures),i=r(e.images);t.length>0&&(n.textures=t),i.length>0&&(n.images=i)}return n}fromJSON(e,t){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new K().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.diffuseRoughness!==void 0&&(this.diffuseRoughness=e.diffuseRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.retroreflectivity!==void 0&&(this.retroreflectivity=e.retroreflectivity),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessMinimum!==void 0&&(this.iridescenceThicknessMinimum=e.iridescenceThicknessMinimum),e.iridescenceThicknessMaximum!==void 0&&(this.iridescenceThicknessMaximum=e.iridescenceThicknessMaximum),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessMinimum=e.iridescenceThicknessRange[0],this.iridescenceThicknessMaximum=e.iridescenceThicknessRange[1]),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.clippingPlanes!==void 0&&(this.clippingPlanes=e.clippingPlanes.map(e=>new hi().fromJSON(e))),e.clipIntersection!==void 0&&(this.clipIntersection=e.clipIntersection),e.clipShadows!==void 0&&(this.clipShadows=e.clipShadows),e.depthPacking!==void 0&&(this.depthPacking=e.depthPacking),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.linecap!==void 0&&(this.linecap=e.linecap),e.linejoin!==void 0&&(this.linejoin=e.linejoin),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(this.vertexColors=typeof e.vertexColors==`number`?e.vertexColors>0:e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=t[e.map]||null),e.matcap!==void 0&&(this.matcap=t[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=t[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=t[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=t[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let t=e.normalScale;Array.isArray(t)===!1&&(t=[t,t]),this.normalScale=new H().fromArray(t)}return e.displacementMap!==void 0&&(this.displacementMap=t[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=t[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=t[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=t[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=t[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=t[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=t[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=t[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=t[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=t[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=t[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=t[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=t[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=t[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new H().fromArray(e.clearcoatNormalScale)),e.diffuseRoughnessMap!==void 0&&(this.diffuseRoughnessMap=t[e.diffuseRoughnessMap]||null),e.iridescenceMap!==void 0&&(this.iridescenceMap=t[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=t[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=t[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=t[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=t[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=t[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=t[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,n=null;if(t!==null){let e=t.length;n=Array(e);for(let r=0;r!==e;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:`dispose`})}set needsUpdate(e){e===!0&&this.version++}},vi=class extends _i{constructor(e){super(),this.isSpriteMaterial=!0,this.type=`SpriteMaterial`,this.color=new K(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},yi,bi=new U,xi=new U,Si=new U,Ci=new H,wi=new H,Ti=new An,Ei=new U,Di=new U,Oi=new U,ki=new H,Ai=new H,ji=new H,Mi=class extends rr{constructor(e=new vi){if(super(),this.isSprite=!0,this.type=`Sprite`,yi===void 0){yi=new si;let e=new ci(new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),5);yi.setIndex([0,1,2,0,2,3]),yi.setAttribute(`position`,new di(e,3,0,!1)),yi.setAttribute(`uv`,new di(e,2,3,!1))}this.geometry=yi,this.material=e,this.center=new H(.5,.5),this.count=1}intersectsFrustum(e){return e.intersectsSprite(this)}raycast(e,t){e.camera===null&&B(`Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.`),xi.setFromMatrixScale(this.matrixWorld),Ti.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),Si.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&xi.multiplyScalar(-Si.z);let n=this.material.rotation,r,i;n!==0&&(i=Math.cos(n),r=Math.sin(n));let a=this.center;Ni(Ei.set(-.5,-.5,0),Si,a,xi,r,i),Ni(Di.set(.5,-.5,0),Si,a,xi,r,i),Ni(Oi.set(.5,.5,0),Si,a,xi,r,i),ki.set(0,0),Ai.set(1,0),ji.set(1,1);let o=e.ray.intersectTriangle(Ei,Di,Oi,!1,bi);if(o===null&&(Ni(Di.set(-.5,.5,0),Si,a,xi,r,i),Ai.set(0,1),o=e.ray.intersectTriangle(Ei,Oi,Di,!1,bi),o===null))return;let s=e.ray.origin.distanceTo(bi);s<e.near||s>e.far||t.push({distance:s,point:bi.clone(),uv:Dr.getInterpolation(bi,Ei,Di,Oi,ki,Ai,ji,new H),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}toJSON(e){let t=super.toJSON(e);return t.object.center=this.center.toArray(),t}};function Ni(e,t,n,r,i,a){Ci.subVectors(e,n).addScalar(.5).multiply(r),i===void 0?wi.copy(Ci):(wi.x=a*Ci.x-i*Ci.y,wi.y=i*Ci.x+a*Ci.y),e.copy(t),e.x+=wi.x,e.y+=wi.y,e.applyMatrix4(Ti)}var Pi=new U,Fi=new U,Ii=new U,Li=new U,Ri=class{constructor(e=new U,t=new U(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Pi)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=Pi.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Pi.copy(this.origin).addScaledVector(this.direction,t),Pi.distanceToSquared(e))}distanceSqToSegment(e,t,n,r){Fi.copy(e).add(t).multiplyScalar(.5),Ii.copy(t).sub(e).normalize(),Li.copy(this.origin).sub(Fi);let i=e.distanceTo(t)*.5,a=-this.direction.dot(Ii),o=Li.dot(this.direction),s=-Li.dot(Ii),c=Li.lengthSq(),l=Math.abs(1-a*a),u,d,f,p;if(l>0){if(u=a*s-o,d=a*o-s,p=i*l,u>=0){if(d>=-p){if(d<=p){let e=1/l;u*=e,d*=e,f=u*(u+a*d+2*o)+d*(a*u+d+2*s)+c}else d=i,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*s)+c}else d=-i,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*s)+c}else d<=-p?(u=Math.max(0,-(-a*i+o)),d=u>0?-i:Math.min(Math.max(-i,-s),i),f=-u*u+d*(d+2*s)+c):d<=p?(u=0,d=Math.min(Math.max(-i,-s),i),f=d*(d+2*s)+c):(u=Math.max(0,-(a*i+o)),d=u>0?i:Math.min(Math.max(-i,-s),i),f=-u*u+d*(d+2*s)+c)}else d=a>0?-i:i,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*s)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,u),r&&r.copy(Fi).addScaledVector(Ii,d),f}intersectSphere(e,t){if(e.radius<0)return null;Pi.subVectors(e.center,this.origin);let n=Pi.dot(this.direction),r=Pi.dot(Pi)-n*n,i=e.radius*e.radius;if(r>i)return null;let a=Math.sqrt(i-r),o=n-a,s=n+a;return s<0?null:o<0?this.at(s,t):this.at(o,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){let n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,r,i,a,o,s,c=1/this.direction.x,l=1/this.direction.y,u=1/this.direction.z,d=this.origin;return c>=0?(n=(e.min.x-d.x)*c,r=(e.max.x-d.x)*c):(n=(e.max.x-d.x)*c,r=(e.min.x-d.x)*c),l>=0?(i=(e.min.y-d.y)*l,a=(e.max.y-d.y)*l):(i=(e.max.y-d.y)*l,a=(e.min.y-d.y)*l),n>a||i>r||((i>n||isNaN(n))&&(n=i),(a<r||isNaN(r))&&(r=a),u>=0?(o=(e.min.z-d.z)*u,s=(e.max.z-d.z)*u):(o=(e.max.z-d.z)*u,s=(e.min.z-d.z)*u),n>s||o>r)||((o>n||n!==n)&&(n=o),(s<r||r!==r)&&(r=s),r<0)?null:this.at(n>=0?n:r,t)}intersectsBox(e){return this.intersectBox(e,Pi)!==null}intersectTriangle(e,t,n,r,i){let a=this.origin,o=this.direction,s=o.x,c=o.y,l=o.z,u=e.x-a.x,d=e.y-a.y,f=e.z-a.z,p=t.x-a.x,m=t.y-a.y,h=t.z-a.z,g=n.x-a.x,_=n.y-a.y,v=n.z-a.z,y=Math.abs(s),b=Math.abs(c),x=Math.abs(l),S,C,w,T,E,D,O,k,A,j,ee,M;if(y>=b&&y>=x?(w=s,D=u,A=p,M=g,s>=0?(S=c,C=l,T=d,E=f,O=m,k=h,j=_,ee=v):(S=l,C=c,T=f,E=d,O=h,k=m,j=v,ee=_)):b>=x?(w=c,D=d,A=m,M=_,c>=0?(S=l,C=s,T=f,E=u,O=h,k=p,j=v,ee=g):(S=s,C=l,T=u,E=f,O=p,k=h,j=g,ee=v)):(w=l,D=f,A=h,M=v,l>=0?(S=s,C=c,T=u,E=d,O=p,k=m,j=g,ee=_):(S=c,C=s,T=d,E=u,O=m,k=p,j=_,ee=g)),w===0)return null;let N=S/w,P=C/w,te=1/w,ne=T-N*D,re=E-P*D,ie=O-N*A,ae=k-P*A,oe=j-N*M,se=ee-P*M,ce=oe*ae-se*ie,le=ne*se-re*oe,ue=ie*re-ae*ne;if(r){if(ce<0||le<0||ue<0)return null}else if((ce<0||le<0||ue<0)&&(ce>0||le>0||ue>0))return null;let de=ce+le+ue;if(de===0)return null;let fe=te*(ce*D+le*A+ue*M);return(de>0?fe<0:fe>0)?null:this.at(fe/de,i)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},zi=class extends _i{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type=`MeshBasicMaterial`,this.color=new K(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Bn,this.combine=0,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap=`round`,this.wireframeLinejoin=`round`,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}},Bi=new An,Vi=new Ri,Hi=new $r,Ui=new U,Wi=new U,Gi=new U,Ki=new U,qi=new U,Ji=new U,Yi=new U,Xi=new U,q=class extends rr{constructor(e=new si,t=new zi){super(),this.isMesh=!0,this.type=`Mesh`,this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.morphTargetInfluences=e.morphTargetInfluences===void 0?void 0:e.morphTargetInfluences.slice(),this.morphTargetDictionary=e.morphTargetDictionary===void 0?void 0:Object.assign({},e.morphTargetDictionary),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,t=Object.keys(e);if(t.length>0){let n=e[t[0]];if(n!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let e=0,t=n.length;e<t;e++){let t=n[e].name||String(e);this.morphTargetInfluences.push(0),this.morphTargetDictionary[t]=e}}}}getVertexPosition(e,t){let n=this.geometry,r=n.attributes.position,i=n.morphAttributes.position,a=n.morphTargetsRelative;t.fromBufferAttribute(r,e);let o=this.morphTargetInfluences;if(i&&o){Ji.set(0,0,0);for(let n=0,r=i.length;n<r;n++){let r=o[n],s=i[n];r!==0&&(qi.fromBufferAttribute(s,e),a?Ji.addScaledVector(qi,r):Ji.addScaledVector(qi.sub(t),r))}t.add(Ji)}return t}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let n=this.geometry,r=this.material,i=this.matrixWorld;r!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Hi.copy(n.boundingSphere),Hi.applyMatrix4(i),Vi.copy(e.ray).recast(e.near),Hi.containsPoint(Vi.origin)===!1&&(Vi.intersectSphere(Hi,Ui)===null||Vi.origin.distanceToSquared(Ui)>(e.far-e.near)**2)||(Bi.copy(i).invert(),Vi.copy(e.ray).applyMatrix4(Bi),(n.boundingBox===null||Vi.intersectsBox(n.boundingBox)!==!1)&&this._computeIntersections(e,t,Vi)))}_computeIntersections(e,t,n){let r,i=this.geometry,a=this.material,o=i.index,s=i.attributes.position,c=i.attributes.uv,l=i.attributes.uv1,u=i.attributes.normal,d=i.groups,f=i.drawRange;if(o!==null){if(Array.isArray(a))for(let i=0,s=d.length;i<s;i++){let s=d[i],p=a[s.materialIndex],m=Math.max(s.start,f.start),h=Math.min(o.count,Math.min(s.start+s.count,f.start+f.count));for(let i=m,a=h;i<a;i+=3){let a=o.getX(i),d=o.getX(i+1),f=o.getX(i+2);r=Qi(this,p,e,n,c,l,u,a,d,f),r&&(r.faceIndex=Math.floor(i/3),r.face.materialIndex=s.materialIndex,t.push(r))}}else{let i=Math.max(0,f.start),s=Math.min(o.count,f.start+f.count);for(let d=i,f=s;d<f;d+=3){let i=o.getX(d),s=o.getX(d+1),f=o.getX(d+2);r=Qi(this,a,e,n,c,l,u,i,s,f),r&&(r.faceIndex=Math.floor(d/3),t.push(r))}}}else if(s!==void 0){if(Array.isArray(a))for(let i=0,o=d.length;i<o;i++){let o=d[i],p=a[o.materialIndex],m=Math.max(o.start,f.start),h=Math.min(s.count,Math.min(o.start+o.count,f.start+f.count));for(let i=m,a=h;i<a;i+=3){let a=i,s=i+1,d=i+2;r=Qi(this,p,e,n,c,l,u,a,s,d),r&&(r.faceIndex=Math.floor(i/3),r.face.materialIndex=o.materialIndex,t.push(r))}}else{let i=Math.max(0,f.start),o=Math.min(s.count,f.start+f.count);for(let s=i,d=o;s<d;s+=3){let i=s,o=s+1,d=s+2;r=Qi(this,a,e,n,c,l,u,i,o,d),r&&(r.faceIndex=Math.floor(s/3),t.push(r))}}}}};function Zi(e,t,n,r,i,a,o,s){let c;if(c=t.side===1?r.intersectTriangle(o,a,i,!0,s):r.intersectTriangle(i,a,o,t.side===0,s),c===null)return null;Xi.copy(s),Xi.applyMatrix4(e.matrixWorld);let l=n.ray.origin.distanceTo(Xi);return l<n.near||l>n.far?null:{distance:l,point:Xi.clone(),object:e}}function Qi(e,t,n,r,i,a,o,s,c,l){e.getVertexPosition(s,Wi),e.getVertexPosition(c,Gi),e.getVertexPosition(l,Ki);let u=Zi(e,t,n,r,Wi,Gi,Ki,Yi);if(u){let e=new U;Dr.getBarycoord(Yi,Wi,Gi,Ki,e),i&&(u.uv=Dr.getInterpolatedAttribute(i,s,c,l,e,new H)),a&&(u.uv1=Dr.getInterpolatedAttribute(a,s,c,l,e,new H)),o&&(u.normal=Dr.getInterpolatedAttribute(o,s,c,l,e,new U),u.normal.dot(r.direction)>0&&u.normal.multiplyScalar(-1));let t={a:s,b:c,c:l,normal:new U,materialIndex:0};Dr.getNormal(Wi,Gi,Ki,t.normal),u.face=t,u.barycoord=e}return u}var $i=class extends wn{constructor(e=null,t=1,n=1,r,i,a,o,s,c=P,l=P,u,d){super(null,a,o,s,c,l,r,i,u,d),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}},ea=class extends Kr{constructor(e,t,n,r=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=r}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){let e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}},ta=new An,na=new An,ra=[],ia=new Or,aa=new An,oa=new q,sa=new $r,ca=class extends q{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new ea(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let e=0;e<n;e++)this.setMatrixAt(e,aa)}computeBoundingBox(){let e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new Or),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,ta),ia.copy(e.boundingBox).applyMatrix4(ta),this.boundingBox.union(ia)}computeBoundingSphere(){let e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new $r),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,ta),sa.copy(e.boundingSphere).applyMatrix4(ta),this.boundingSphere.union(sa)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),this.morphTexture=e.morphTexture===null?null:e.morphTexture.clone(),this.instanceColor=e.instanceColor===null?null:e.instanceColor.clone(),this.count=e.count,this.boundingBox=e.boundingBox===null?null:e.boundingBox.clone(),this.boundingSphere=e.boundingSphere===null?null:e.boundingSphere.clone(),this}getColorAt(e,t){return this.instanceColor===null?t.setRGB(1,1,1):t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){return t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){let n=t.morphTargetInfluences,r=this.morphTexture.source.data.data,i=e*(n.length+1)+1;for(let e=0;e<n.length;e++)n[e]=r[i+e]}raycast(e,t){let n=this.matrixWorld,r=this.count;if(oa.geometry=this.geometry,oa.material=this.material,oa.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),sa.copy(this.boundingSphere),sa.applyMatrix4(n),e.ray.intersectsSphere(sa)!==!1))for(let i=0;i<r;i++){this.getMatrixAt(i,ta),na.multiplyMatrices(n,ta),oa.matrixWorld=na,oa.raycast(e,ra);for(let e=0,n=ra.length;e<n;e++){let n=ra[e];n.instanceId=i,n.object=this,t.push(n)}ra.length=0}}setColorAt(e,t){return this.instanceColor===null&&(this.instanceColor=new ea(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3),this}setMatrixAt(e,t){return t.toArray(this.instanceMatrix.array,e*16),this}setMorphAt(e,t){let n=t.morphTargetInfluences,r=n.length+1;this.morphTexture===null&&(this.morphTexture=new $i(new Float32Array(r*this.count),r,this.count,we,fe));let i=this.morphTexture.source.data.data,a=0;for(let e=0;e<n.length;e++)a+=n[e];let o=this.geometry.morphTargetsRelative?1:1-a,s=r*e;return i[s]=o,i.set(n,s+1),this}updateMorphTargets(){}dispose(){super.dispose(),this.instanceMatrix.dispose(),this.instanceColor!==null&&this.instanceColor.dispose(),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}},la=new $r,ua=new H(.5,.5),da=new U,fa=class{constructor(e=new hi,t=new hi,n=new hi,r=new hi,i=new hi,a=new hi){this.planes=[e,t,n,r,i,a]}set(e,t,n,r,i,a){let o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(r),o[4].copy(i),o[5].copy(a),this}copy(e){let t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=St,n=!1){let r=this.planes,i=e.elements,a=i[0],o=i[1],s=i[2],c=i[3],l=i[4],u=i[5],d=i[6],f=i[7],p=i[8],m=i[9],h=i[10],g=i[11],_=i[12],v=i[13],y=i[14],b=i[15];if(r[0].setComponents(c-a,f-l,g-p,b-_).normalize(),r[1].setComponents(c+a,f+l,g+p,b+_).normalize(),r[2].setComponents(c+o,f+u,g+m,b+v).normalize(),r[3].setComponents(c-o,f-u,g-m,b-v).normalize(),n)r[4].setComponents(s,d,h,y).normalize(),r[5].setComponents(c-s,f-d,g-h,b-y).normalize();else if(r[4].setComponents(c-s,f-d,g-h,b-y).normalize(),t===2e3)r[5].setComponents(c+s,f+d,g+h,b+y).normalize();else if(t===2001)r[5].setComponents(s,d,h,y).normalize();else throw Error(`THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: `+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),la.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),la.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(la)}intersectsSprite(e){return la.center.set(0,0,0),la.radius=.7071067811865476+ua.distanceTo(e.center),la.applyMatrix4(e.matrixWorld),this.intersectsSphere(la)}intersectsSphere(e){let t=this.planes,n=e.center,r=-e.radius;for(let e=0;e<6;e++)if(t[e].distanceToPoint(n)<r)return!1;return!0}intersectsBox(e){let t=this.planes;for(let n=0;n<6;n++){let r=t[n];if(da.x=r.normal.x>0?e.max.x:e.min.x,da.y=r.normal.y>0?e.max.y:e.min.y,da.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(da)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}},pa=new An,ma=class e{constructor(){this.coordinateSystem=St,this._frustums=[],this._count=0}setFromArrayCamera(e){let t=e.cameras,n=this._frustums;for(let e=0;e<t.length;e++){let r=t[e];pa.multiplyMatrices(r.projectionMatrix,r.matrixWorldInverse),n[e]===void 0&&(n[e]=new fa),n[e].setFromProjectionMatrix(pa,r.coordinateSystem,r.reversedDepth)}return this._count=t.length,this}getFrustum(e){return this._frustums[e]}intersectsObject(e){let t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].intersectsObject(e))return!0;return!1}intersectsSprite(e){let t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].intersectsSprite(e))return!0;return!1}intersectsSphere(e){let t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].intersectsSphere(e))return!0;return!1}intersectsBox(e){let t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].intersectsBox(e))return!0;return!1}containsPoint(e){let t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].containsPoint(e))return!0;return!1}copy(e){this.coordinateSystem=e.coordinateSystem;let t=this._frustums,n=e._frustums;for(let r=0;r<e._count;r++)t[r]===void 0&&(t[r]=new fa),t[r].copy(n[r]);return this._count=e._count,this}clone(){return new e().copy(this)}},ha=class extends _i{constructor(e){super(),this.isPointsMaterial=!0,this.type=`PointsMaterial`,this.color=new K(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},ga=new An,_a=new Ri,va=new $r,ya=new U,ba=class extends rr{constructor(e=new si,t=new ha){super(),this.isPoints=!0,this.type=`Points`,this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.morphTargetInfluences=e.morphTargetInfluences===void 0?void 0:e.morphTargetInfluences.slice(),this.morphTargetDictionary=e.morphTargetDictionary===void 0?void 0:Object.assign({},e.morphTargetDictionary),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let n=this.geometry,r=this.matrixWorld,i=e.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),va.copy(n.boundingSphere),va.applyMatrix4(r),va.radius+=i,e.ray.intersectsSphere(va)===!1)return;ga.copy(r).invert(),_a.copy(e.ray).applyMatrix4(ga);let o=i/((this.scale.x+this.scale.y+this.scale.z)/3),s=o*o,c=n.index,l=n.attributes.position;if(c!==null){let n=Math.max(0,a.start),i=Math.min(c.count,a.start+a.count);for(let a=n,o=i;a<o;a++){let n=c.getX(a);ya.fromBufferAttribute(l,n),xa(ya,n,s,r,e,t,this)}}else{let n=Math.max(0,a.start),i=Math.min(l.count,a.start+a.count);for(let a=n,o=i;a<o;a++)ya.fromBufferAttribute(l,a),xa(ya,a,s,r,e,t,this)}}updateMorphTargets(){let e=this.geometry.morphAttributes,t=Object.keys(e);if(t.length>0){let n=e[t[0]];if(n!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let e=0,t=n.length;e<t;e++){let t=n[e].name||String(e);this.morphTargetInfluences.push(0),this.morphTargetDictionary[t]=e}}}}};function xa(e,t,n,r,i,a,o){let s=_a.distanceSqToPoint(e);if(s<n){let n=new U;_a.closestPointToPoint(e,n),n.applyMatrix4(r);let c=i.ray.origin.distanceTo(n);if(c<i.near||c>i.far)return;a.push({distance:c,distanceToRay:Math.sqrt(s),point:n,index:t,face:null,faceIndex:null,barycoord:null,object:o})}}var Sa=class extends wn{constructor(e=[],t=301,n,r,i,a,o,s,c,l){super(e,t,n,r,i,a,o,s,c,l),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},Ca=class extends wn{constructor(e,t,n,r,i,a,o,s,c){super(e,t,n,r,i,a,o,s,c),this.isCanvasTexture=!0,this.needsUpdate=!0}},wa=class extends wn{constructor(e,t,n=de,r,i,a,o=P,s=P,c,l=Se,u=1){if(l!==1026&&l!==1027)throw Error(`THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat`);super({width:e,height:t,depth:u},r,i,a,o,s,l,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new bn(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return t.compareFunction=this.compareFunction,t}},Ta=class extends wa{constructor(e,t=de,n=301,r,i,a=P,o=P,s,c=Se){let l={width:e,height:e,depth:1},u=[l,l,l,l,l,l];super(e,e,t,n,r,i,a,o,s,c),this.image=u,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}},Ea=class extends wn{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}},Da=class e extends si{constructor(e=1,t=1,n=1,r=1,i=1,a=1){super(),this.type=`BoxGeometry`,this.parameters={width:e,height:t,depth:n,widthSegments:r,heightSegments:i,depthSegments:a};let o=this;r=Math.floor(r),i=Math.floor(i),a=Math.floor(a);let s=[],c=[],l=[],u=[],d=0,f=0;p(`z`,`y`,`x`,-1,-1,n,t,e,a,i,0),p(`z`,`y`,`x`,1,-1,n,t,-e,a,i,1),p(`x`,`z`,`y`,1,1,e,n,t,r,a,2),p(`x`,`z`,`y`,1,-1,e,n,-t,r,a,3),p(`x`,`y`,`z`,1,-1,e,t,n,r,i,4),p(`x`,`y`,`z`,-1,-1,e,t,-n,r,i,5),this.setIndex(s),this.setAttribute(`position`,new Yr(c,3)),this.setAttribute(`normal`,new Yr(l,3)),this.setAttribute(`uv`,new Yr(u,2));function p(e,t,n,r,i,a,p,m,h,g,_){let v=a/h,y=p/g,b=a/2,x=p/2,S=m/2,C=h+1,w=g+1,T=0,E=0,D=new U;for(let a=0;a<w;a++){let o=a*y-x;for(let s=0;s<C;s++)D[e]=(s*v-b)*r,D[t]=o*i,D[n]=S,c.push(D.x,D.y,D.z),D[e]=0,D[t]=0,D[n]=m>0?1:-1,l.push(D.x,D.y,D.z),u.push(s/h),u.push(1-a/g),T+=1}for(let e=0;e<g;e++)for(let t=0;t<h;t++){let n=d+t+C*e,r=d+t+C*(e+1),i=d+(t+1)+C*(e+1),a=d+(t+1)+C*e;s.push(n,r,a),s.push(r,i,a),E+=6}o.addGroup(f,E,_),f+=E,d+=T}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(t){return new e(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}},Oa=class e extends si{constructor(e=1,t=1,n=1,r=1){super(),this.type=`PlaneGeometry`,this.parameters={width:e,height:t,widthSegments:n,heightSegments:r};let i=e/2,a=t/2,o=Math.floor(n),s=Math.floor(r),c=o+1,l=s+1,u=e/o,d=t/s,f=[],p=[],m=[],h=[];for(let e=0;e<l;e++){let t=e*d-a;for(let n=0;n<c;n++){let r=n*u-i;p.push(r,-t,0),m.push(0,0,1),h.push(n/o),h.push(1-e/s)}}for(let e=0;e<s;e++)for(let t=0;t<o;t++){let n=t+c*e,r=t+c*(e+1),i=t+1+c*(e+1),a=t+1+c*e;f.push(n,r,a),f.push(r,i,a)}this.setIndex(f),this.setAttribute(`position`,new Yr(p,3)),this.setAttribute(`normal`,new Yr(m,3)),this.setAttribute(`uv`,new Yr(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(t){return new e(t.width,t.height,t.widthSegments,t.heightSegments)}},ka=class e extends si{constructor(e=.5,t=1,n=32,r=1,i=0,a=Math.PI*2){super(),this.type=`RingGeometry`,this.parameters={innerRadius:e,outerRadius:t,thetaSegments:n,phiSegments:r,thetaStart:i,thetaLength:a},n=Math.max(3,n),r=Math.max(1,r);let o=[],s=[],c=[],l=[],u=e,d=(t-e)/r,f=new U,p=new H;for(let e=0;e<=r;e++){for(let e=0;e<=n;e++){let r=i+e/n*a;f.x=u*Math.cos(r),f.y=u*Math.sin(r),s.push(f.x,f.y,f.z),c.push(0,0,1),p.x=(f.x/t+1)/2,p.y=(f.y/t+1)/2,l.push(p.x,p.y)}u+=d}for(let e=0;e<r;e++){let t=e*(n+1);for(let e=0;e<n;e++){let r=e+t,i=r,a=r+n+1,s=r+n+2,c=r+1;o.push(i,a,c),o.push(a,s,c)}}this.setIndex(o),this.setAttribute(`position`,new Yr(s,3)),this.setAttribute(`normal`,new Yr(c,3)),this.setAttribute(`uv`,new Yr(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(t){return new e(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}},Aa=class e extends si{constructor(e=1,t=32,n=16,r=0,i=Math.PI*2,a=0,o=Math.PI){super(),this.type=`SphereGeometry`,this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:r,phiLength:i,thetaStart:a,thetaLength:o},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));let s=Math.min(a+o,Math.PI),c=0,l=[],u=new U,d=new U,f=[],p=[],m=[],h=[];for(let f=0;f<=n;f++){let g=[],_=f/n,v=a+_*o,y=e*Math.cos(v),b=Math.sqrt(e*e-y*y),x=0;f===0&&a===0?x=.5/t:f===n&&s===Math.PI&&(x=-.5/t);for(let e=0;e<=t;e++){let n=e/t,a=r+n*i;u.x=-b*Math.cos(a),u.y=y,u.z=b*Math.sin(a),p.push(u.x,u.y,u.z),d.copy(u).normalize(),m.push(d.x,d.y,d.z),h.push(n+x,1-_),g.push(c++)}l.push(g)}for(let e=0;e<n;e++)for(let r=0;r<t;r++){let t=l[e][r+1],i=l[e][r],o=l[e+1][r],c=l[e+1][r+1];(e!==0||a>0)&&f.push(t,i,c),(e!==n-1||s<Math.PI)&&f.push(i,o,c)}this.setIndex(f),this.setAttribute(`position`,new Yr(p,3)),this.setAttribute(`normal`,new Yr(m,3)),this.setAttribute(`uv`,new Yr(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(t){return new e(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}};function ja(e){let t={};for(let n in e){t[n]={};for(let r in e[n]){let i=e[n][r];if(Na(i))i.isRenderTargetTexture?(z(`UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms().`),t[n][r]=null):t[n][r]=i.clone();else if(Array.isArray(i)){if(Na(i[0])){let e=[];for(let t=0,n=i.length;t<n;t++)e[t]=i[t].clone();t[n][r]=e}else t[n][r]=i.slice()}else t[n][r]=i}}return t}function Ma(e){let t={};for(let n=0;n<e.length;n++){let r=ja(e[n]);for(let e in r)t[e]=r[e]}return t}function Na(e){return e&&(e.isColor||e.isMatrix3||e.isMatrix4||e.isVector2||e.isVector3||e.isVector4||e.isTexture||e.isQuaternion)}function Pa(e){let t=[];for(let n=0;n<e.length;n++)t.push(e[n].clone());return t}function Fa(e){let t=e.getRenderTarget();return t===null?e.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:G.workingColorSpace}var Ia={clone:ja,merge:Ma},La=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Ra=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,za=class extends _i{constructor(e){super(),this.isShaderMaterial=!0,this.type=`ShaderMaterial`,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=La,this.fragmentShader=Ra,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=ja(e.uniforms),this.uniformsGroups=Pa(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let n in this.uniforms){let r=this.uniforms[n].value;r&&r.isTexture?t.uniforms[n]={type:`t`,value:r.toJSON(e).uuid}:r&&r.isColor?t.uniforms[n]={type:`c`,value:r.getHex()}:r&&r.isVector2?t.uniforms[n]={type:`v2`,value:r.toArray()}:r&&r.isVector3?t.uniforms[n]={type:`v3`,value:r.toArray()}:r&&r.isVector4?t.uniforms[n]={type:`v4`,value:r.toArray()}:r&&r.isMatrix3?t.uniforms[n]={type:`m3`,value:r.toArray()}:r&&r.isMatrix4?t.uniforms[n]={type:`m4`,value:r.toArray()}:t.uniforms[n]={value:r}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let n={};for(let e in this.extensions)this.extensions[e]===!0&&(n[e]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}fromJSON(e,t){if(super.fromJSON(e,t),e.uniforms!==void 0)for(let n in e.uniforms){let r=e.uniforms[n];switch(this.uniforms[n]={},r.type){case`t`:this.uniforms[n].value=t[r.value]||null;break;case`c`:this.uniforms[n].value=new K().setHex(r.value);break;case`v2`:this.uniforms[n].value=new H().fromArray(r.value);break;case`v3`:this.uniforms[n].value=new U().fromArray(r.value);break;case`v4`:this.uniforms[n].value=new Tn().fromArray(r.value);break;case`m3`:this.uniforms[n].value=new W().fromArray(r.value);break;case`m4`:this.uniforms[n].value=new An().fromArray(r.value);break;default:this.uniforms[n].value=r.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(let t in e.extensions)this.extensions[t]=e.extensions[t];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}},Ba=class extends za{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type=`RawShaderMaterial`}},Va=class extends _i{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type=`MeshStandardMaterial`,this.defines={STANDARD:``},this.color=new K(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new K(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=0,this.normalScale=new H(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Bn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap=`round`,this.wireframeLinejoin=`round`,this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:``},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},Ha=class extends _i{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type=`MeshDepthMaterial`,this.depthPacking=mt,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},Ua=class extends _i{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type=`MeshDistanceMaterial`,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}};function Wa(e,t){return!e||e.constructor===t?e:typeof t.BYTES_PER_ELEMENT==`number`?new t(e):Array.prototype.slice.call(e)}function Ga(e){return e!==void 0&&e.inTangents!==void 0&&e.outTangents!==void 0}var Ka=class{constructor(e,t,n,r){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=r===void 0?new t.constructor(n):r,this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,n=this._cachedIndex,r=t[n],i=t[n-1];validate_interval:{seek:{let a;linear_scan:{forward_scan:if(!(e<r)){for(let a=n+2;;){if(r===void 0){if(e<i)break forward_scan;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(i=r,r=t[++n],e<r)break seek}a=t.length;break linear_scan}if(!(e>=i)){let o=t[1];e<o&&(n=2,i=o);for(let a=n-2;;){if(i===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===a)break;if(r=i,i=t[--n-1],e>=i)break seek}a=n,n=0;break linear_scan}break validate_interval}for(;n<a;){let r=n+a>>>1;e<t[r]?a=r:n=r+1}if(r=t[n],i=t[n-1],i===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(r===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,i,r)}return this.interpolate_(n,i,e,r)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,r=this.valueSize,i=e*r;for(let e=0;e!==r;++e)t[e]=n[i+e];return t}interpolate_(){throw Error(`THREE.Interpolant: Call to abstract method.`)}intervalChanged_(){}},qa=class extends Ka{constructor(e,t,n,r){super(e,t,n,r),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:dt,endingEnd:dt}}intervalChanged_(e,t,n){let r=this.parameterPositions,i=e-2,a=e+1,o=r[i],s=r[a];if(o===void 0)switch(this.getSettings_().endingStart){case ft:i=e,o=2*t-n;break;case pt:i=r.length-2,o=t+r[i]-r[i+1];break;default:i=e,o=n}if(s===void 0)switch(this.getSettings_().endingEnd){case ft:a=e,s=2*n-t;break;case pt:a=1,s=n+r[1]-r[0];break;default:a=e-1,s=t}let c=(n-t)*.5,l=this.valueSize;this._weightPrev=c/(t-o),this._weightNext=c/(s-n),this._offsetPrev=i*l,this._offsetNext=a*l}interpolate_(e,t,n,r){let i=this.resultBuffer,a=this.sampleValues,o=this.valueSize,s=e*o,c=s-o,l=this._offsetPrev,u=this._offsetNext,d=this._weightPrev,f=this._weightNext,p=(n-t)/(r-t),m=p*p,h=m*p,g=-d*h+2*d*m-d*p,_=(1+d)*h+(-1.5-2*d)*m+(-.5+d)*p+1,v=(-1-f)*h+(1.5+f)*m+.5*p,y=f*h-f*m;for(let e=0;e!==o;++e)i[e]=g*a[l+e]+_*a[c+e]+v*a[s+e]+y*a[u+e];return i}},Ja=class extends Ka{constructor(e,t,n,r){super(e,t,n,r)}interpolate_(e,t,n,r){let i=this.resultBuffer,a=this.sampleValues,o=this.valueSize,s=e*o,c=s-o,l=(n-t)/(r-t),u=1-l;for(let e=0;e!==o;++e)i[e]=a[c+e]*u+a[s+e]*l;return i}},Ya=class extends Ka{constructor(e,t,n,r){super(e,t,n,r)}interpolate_(e){return this.copySampleValue_(e-1)}},Xa=class extends Ka{interpolate_(e,t,n,r){let i=this.resultBuffer,a=this.sampleValues,o=this.valueSize,s=e*o,c=s-o,l=this.inTangents,u=this.outTangents;if(!l||!u){let e=(n-t)/(r-t),l=1-e;for(let t=0;t!==o;++t)i[t]=a[c+t]*l+a[s+t]*e;return i}let d=o*2,f=e-1;for(let p=0;p!==o;++p){let o=a[c+p],m=a[s+p],h=f*d+p*2,g=u[h],_=u[h+1],v=e*d+p*2,y=l[v],b=l[v+1],x=$a(n,t,g,y,r);i[p]=Za(x,o,_,b,m)}return i}};function Za(e,t,n,r,i){let a=1-e;return a*a*a*t+3*a*a*e*n+3*a*e*e*r+e*e*e*i}function Qa(e,t,n,r,i){let a=1-e;return 3*a*a*(n-t)+6*a*e*(r-n)+3*e*e*(i-r)}function $a(e,t,n,r,i){let a=(e-t)/(i-t);for(let o=0;o<8;o++){let o=Za(a,t,n,r,i)-e;if(Math.abs(o)<1e-10)break;let s=Qa(a,t,n,r,i);if(Math.abs(s)<1e-10)break;a=Math.max(0,Math.min(1,a-o/s))}return a}var eo=class{constructor(e,t,n,r){if(e===void 0)throw Error(`THREE.KeyframeTrack: track name is undefined`);if(t===void 0||t.length===0)throw Error(`THREE.KeyframeTrack: no keyframes in track named `+e);this.name=e,this.times=Wa(t,this.TimeBufferType),this.values=Wa(n,this.ValueBufferType),this.setInterpolation(r||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:Wa(e.times,Array),values:Wa(e.values,Array)};let t=e.getInterpolation();t!==e.DefaultInterpolation&&(n.interpolation=t),Ga(e.settings)&&(n.settings={inTangents:Wa(e.settings.inTangents,Array),outTangents:Wa(e.settings.outTangents,Array)})}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new Ya(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new Ja(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new qa(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodBezier(e){let t=new Xa(this.times,this.values,this.getValueSize(),e);return this.settings&&(t.inTangents=this.settings.inTangents,t.outTangents=this.settings.outTangents),t}setInterpolation(e){let t;switch(e){case st:t=this.InterpolantFactoryMethodDiscrete;break;case ct:t=this.InterpolantFactoryMethodLinear;break;case lt:t=this.InterpolantFactoryMethodSmooth;break;case ut:t=this.InterpolantFactoryMethodBezier}if(t===void 0){let t=`unsupported interpolation for `+this.ValueTypeName+` keyframe track named `+this.name;if(this.createInterpolant===void 0){if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw Error(t)}return z(`KeyframeTrack:`,t),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return st;case this.InterpolantFactoryMethodLinear:return ct;case this.InterpolantFactoryMethodSmooth:return lt;case this.InterpolantFactoryMethodBezier:return ut}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let n=0,r=t.length;n!==r;++n)t[n]+=e;Ga(this.settings)&&(to(this.settings.inTangents,e),to(this.settings.outTangents,e))}return this}scale(e){if(e!==1){let t=this.times;for(let n=0,r=t.length;n!==r;++n)t[n]*=e;Ga(this.settings)&&(no(this.settings.inTangents,e),no(this.settings.outTangents,e))}return this}trim(e,t){let n=this.times,r=n.length,i=0,a=r-1;for(;i!==r&&n[i]<e;)++i;for(;a!==-1&&n[a]>t;)--a;if(++a,i!==0||a!==r){i>=a&&(a=Math.max(a,1),i=a-1);let e=this.getValueSize();this.times=n.slice(i,a),this.values=this.values.slice(i*e,a*e)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(B(`KeyframeTrack: Invalid value size in track.`,this),e=!1);let n=this.times,r=this.values,i=n.length;i===0&&(B(`KeyframeTrack: Track is empty.`,this),e=!1);let a=null;for(let t=0;t!==i;t++){let r=n[t];if(typeof r==`number`&&isNaN(r)){B(`KeyframeTrack: Time is not a valid number.`,this,t,r),e=!1;break}if(a!==null&&a>r){B(`KeyframeTrack: Out of order keys.`,this,t,r,a),e=!1;break}a=r}if(r!==void 0&&wt(r))for(let t=0,n=r.length;t!==n;++t){let n=r[t];if(isNaN(n)){B(`KeyframeTrack: Value is not a valid number.`,this,t,n),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),r=this.getInterpolation()===lt,i=e.length-1,a=1;for(let o=1;o<i;++o){let i=!1,s=e[o];if(s!==e[o+1]&&(o!==1||s!==e[0])){if(r)i=!0;else{let e=o*n,r=e-n,a=e+n;for(let o=0;o!==n;++o){let n=t[e+o];if(n!==t[r+o]||n!==t[a+o]){i=!0;break}}}}if(i){if(o!==a){e[a]=e[o];let r=o*n,i=a*n;for(let e=0;e!==n;++e)t[i+e]=t[r+e]}++a}}if(i>0){e[a]=e[i];for(let e=i*n,r=a*n,o=0;o!==n;++o)t[r+o]=t[e+o];++a}return a===e.length?(this.times=e,this.values=t):(this.times=e.slice(0,a),this.values=t.slice(0,a*n)),this}clone(){let e=this.times.slice(),t=this.values.slice(),n=this.constructor,r=new n(this.name,e,t);return r.createInterpolant=this.createInterpolant,Ga(this.settings)&&(r.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),r}};function to(e,t){for(let n=0,r=e.length;n!==r;n+=2)e[n]+=t}function no(e,t){for(let n=0,r=e.length;n!==r;n+=2)e[n]*=t}eo.prototype.ValueTypeName=``,eo.prototype.TimeBufferType=Float32Array,eo.prototype.ValueBufferType=Float32Array,eo.prototype.DefaultInterpolation=ct;var ro=class extends eo{constructor(e,t,n){super(e,t,n)}};ro.prototype.ValueTypeName=`bool`,ro.prototype.ValueBufferType=Array,ro.prototype.DefaultInterpolation=st,ro.prototype.InterpolantFactoryMethodLinear=void 0,ro.prototype.InterpolantFactoryMethodSmooth=void 0;var io=class extends eo{constructor(e,t,n,r){super(e,t,n,r)}};io.prototype.ValueTypeName=`color`;var ao=class extends eo{constructor(e,t,n,r){super(e,t,n,r)}};ao.prototype.ValueTypeName=`number`;var oo=class extends Ka{constructor(e,t,n,r){super(e,t,n,r)}interpolate_(e,t,n,r){let i=this.resultBuffer,a=this.sampleValues,o=this.valueSize,s=(n-t)/(r-t),c=e*o;for(let e=c+o;c!==e;c+=4)cn.slerpFlat(i,0,a,c-o,a,c,s);return i}},so=class extends eo{constructor(e,t,n,r){super(e,t,n,r)}InterpolantFactoryMethodLinear(e){return new oo(this.times,this.values,this.getValueSize(),e)}};so.prototype.ValueTypeName=`quaternion`,so.prototype.InterpolantFactoryMethodSmooth=void 0;var co=class extends eo{constructor(e,t,n){super(e,t,n)}};co.prototype.ValueTypeName=`string`,co.prototype.ValueBufferType=Array,co.prototype.DefaultInterpolation=st,co.prototype.InterpolantFactoryMethodLinear=void 0,co.prototype.InterpolantFactoryMethodSmooth=void 0;var lo=class extends eo{constructor(e,t,n,r){super(e,t,n,r)}};lo.prototype.ValueTypeName=`vector`;var uo=class extends rr{static registerNode(e){this.prototype._lightNode=e}constructor(e,t=1){super(),this.isLight=!0,this.type=`Light`,this.color=new K(e),this.intensity=t}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}},fo=class extends uo{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type=`HemisphereLight`,this.position.copy(rr.DEFAULT_UP),this.updateMatrix(),this.groundColor=new K(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}toJSON(e){let t=super.toJSON(e);return t.object.groundColor=this.groundColor.getHex(),t}},po=new An,mo=new U,ho=new U,go=class{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new H(512,512),this.mapType=oe,this.map=null,this.mapPass=null,this.matrix=new An,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new fa,this._frameExtents=new H(1,1),this._viewportCount=1,this._viewports=[new Tn(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera;mo.setFromMatrixPosition(e.matrixWorld),t.position.copy(mo),ho.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(ho),t.updateMatrixWorld(),this._updateMatrix(t,this.matrix,this._frustum)}_updateMatrix(e,t,n,r){po.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),n.setFromProjectionMatrix(po,e.coordinateSystem,e.reversedDepth);let i=this._frameExtents,a=r?r.z/i.x:1,o=r?r.w/i.y:1,s=r?r.x/i.x:0,c=r?r.y/i.y:0;e.coordinateSystem===2001||e.reversedDepth?t.set(.5*a,0,0,.5*a+s,0,.5*o,0,.5*o+c,0,0,1,0,0,0,0,1):t.set(.5*a,0,0,.5*a+s,0,.5*o,0,.5*o+c,0,0,.5,.5,0,0,0,1),t.multiply(po)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.mapType=e.mapType,this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return e.intensity=this.intensity,e.bias=this.bias,e.normalBias=this.normalBias,e.radius=this.radius,e.blurSamples=this.blurSamples,e.mapSize=this.mapSize.toArray(),e.mapType=this.mapType,e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}},_o=new U,vo=new cn,yo=new U,bo=class extends rr{constructor(){super(),this.isCamera=!0,this.type=`Camera`,this.matrixWorldInverse=new An,this.projectionMatrix=new An,this.projectionMatrixInverse=new An,this.coordinateSystem=St,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(_o,vo,yo),yo.x===1&&yo.y===1&&yo.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(_o,vo,yo.set(1,1,1)).invert()}updateWorldMatrix(e,t,n=!1){super.updateWorldMatrix(e,t,n),this.matrixWorld.decompose(_o,vo,yo),yo.x===1&&yo.y===1&&yo.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(_o,vo,yo.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},xo=new U,So=new H,Co=new H,wo=class extends bo{constructor(e=50,t=1,n=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type=`PerspectiveCamera`,this.fov=e,this.zoom=1,this.near=n,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=Lt*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(It*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Lt*2*Math.atan(Math.tan(It*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){xo.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(xo.x,xo.y).multiplyScalar(-e/xo.z),xo.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(xo.x,xo.y).multiplyScalar(-e/xo.z)}getViewSize(e,t){return this.getViewBounds(e,So,Co),t.subVectors(Co,So)}setViewOffset(e,t,n,r,i,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=i,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(It*.5*this.fov)/this.zoom,n=2*t,r=this.aspect*n,i=-.5*r,a=this.view;if(this.view!==null&&this.view.enabled){let e=a.fullWidth,o=a.fullHeight;i+=a.offsetX*r/e,t-=a.offsetY*n/o,r*=a.width/e,n*=a.height/o}let o=this.filmOffset;o!==0&&(i+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(i,i+r,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},To=class extends go{constructor(){super(new wo(90,1,.5,500)),this.isPointLightShadow=!0}},Eo=class extends uo{constructor(e,t,n=0,r=2){super(e,t),this.isPointLight=!0,this.type=`PointLight`,this.distance=n,this.decay=r,this.shadow=new To}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.distance=this.distance,t.object.decay=this.decay,t.object.shadow=this.shadow.toJSON(),t}},Do=class extends bo{constructor(e=-1,t=1,n=1,r=-1,i=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type=`OrthographicCamera`,this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=r,this.near=i,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,r,i,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=i,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,r=(this.top+this.bottom)/2,i=n-e,a=n+e,o=r+t,s=r-t;if(this.view!==null&&this.view.enabled){let e=(this.right-this.left)/this.view.fullWidth/this.zoom,t=(this.top-this.bottom)/this.view.fullHeight/this.zoom;i+=e*this.view.offsetX,a=i+e*this.view.width,o-=t*this.view.offsetY,s=o-t*this.view.height}this.projectionMatrix.makeOrthographic(i,a,o,s,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},Oo=class extends go{constructor(){super(new Do(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},ko=class extends uo{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type=`DirectionalLight`,this.position.copy(rr.DEFAULT_UP),this.updateMatrix(),this.target=new rr,this.shadow=new Oo}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}},Ao=-90,jo=1,Mo=class extends rr{constructor(e,t,n){super(),this.type=`CubeCamera`,this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let r=new wo(Ao,jo,e,t);r.layers=this.layers,this.add(r);let i=new wo(Ao,jo,e,t);i.layers=this.layers,this.add(i);let a=new wo(Ao,jo,e,t);a.layers=this.layers,this.add(a);let o=new wo(Ao,jo,e,t);o.layers=this.layers,this.add(o);let s=new wo(Ao,jo,e,t);s.layers=this.layers,this.add(s);let c=new wo(Ao,jo,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[n,r,i,a,o,s]=t;for(let e of t)this.remove(e);if(e===2e3)n.up.set(0,1,0),n.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),i.up.set(0,0,-1),i.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),s.up.set(0,1,0),s.lookAt(0,0,-1);else if(e===2001)n.up.set(0,-1,0),n.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),i.up.set(0,0,1),i.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),s.up.set(0,-1,0),s.lookAt(0,0,-1);else throw Error(`THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: `+e);for(let e of t)this.add(e),e.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[i,a,o,s,c,l]=this.children,u=e.getRenderTarget(),d=e.getActiveCubeFace(),f=e.getActiveMipmapLevel(),p=e.xr.enabled;e.xr.enabled=!1;let m=n.texture.mipmapsAutoUpdate;n.texture.mipmapsAutoUpdate=!1;let h=!1;h=e.isWebGLRenderer===!0?e.state.buffers.depth.getReversed():e.reversedDepthBuffer,e.setRenderTarget(n,0,r),h&&e.autoClear===!1&&e.clearDepth(),e.render(t,i),e.setRenderTarget(n,1,r),h&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(n,2,r),h&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(n,3,r),h&&e.autoClear===!1&&e.clearDepth(),e.render(t,s),e.setRenderTarget(n,4,r),h&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),n.texture.mipmapsAutoUpdate=m,e.setRenderTarget(n,5,r),h&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),e.setRenderTarget(u,d,f),e.xr.enabled=p,n.texture.needsPMREMUpdate=!0}},No=class extends wo{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e,this.perCameraFrustumCulled=!1}},Po=class{constructor(){this._previousTime=0,this._currentTime=0,this._startTime=performance.now(),this._delta=0,this._elapsed=0,this._timescale=1,this._document=null,this._pageVisibilityHandler=null}connect(e){this._document=e,e.hidden!==void 0&&(this._pageVisibilityHandler=Fo.bind(this),e.addEventListener(`visibilitychange`,this._pageVisibilityHandler,!1))}disconnect(){this._pageVisibilityHandler!==null&&(this._document.removeEventListener(`visibilitychange`,this._pageVisibilityHandler),this._pageVisibilityHandler=null),this._document=null}getDelta(){return this._delta/1e3}getElapsed(){return this._elapsed/1e3}getTimescale(){return this._timescale}setTimescale(e){return this._timescale=e,this}reset(){return this._currentTime=performance.now()-this._startTime,this}dispose(){this.disconnect()}update(e){return this._pageVisibilityHandler!==null&&this._document.hidden===!0?this._delta=0:(this._previousTime=this._currentTime,this._currentTime=(e===void 0?performance.now():e)-this._startTime,this._delta=(this._currentTime-this._previousTime)*this._timescale,this._elapsed+=this._delta),this}};function Fo(){this._document.hidden===!1&&this.reset()}var Io=`\\[\\]\\.:\\/`,Lo=RegExp(`[\\[\\]\\.:\\/]`,`g`),Ro=`[^\\[\\]\\.:\\/]`,zo=`[^`+Io.replace(`\\.`,``)+`]`,Bo=`((?:WC+[\\/:])*)`.replace(`WC`,Ro),Vo=`(WCOD+)?`.replace(`WCOD`,zo),Ho=`(?:\\.(WC+)(?:\\[(.+)\\])?)?`.replace(`WC`,Ro),Uo=`\\.(WC+)(?:\\[(.+)\\])?`.replace(`WC`,Ro),Wo=RegExp(`^`+Bo+Vo+Ho+Uo+`$`),Go=[`material`,`materials`,`bones`,`map`],Ko=class{constructor(e,t,n){let r=n||qo.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,r)}getValue(e,t){this.bind();let n=this._targetGroup.nCachedObjects_,r=this._bindings[n];r!==void 0&&r.getValue(e,t)}setValue(e,t){let n=this._bindings;for(let r=this._targetGroup.nCachedObjects_,i=n.length;r!==i;++r)n[r].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}},qo=class e{constructor(t,n,r){this.path=n,this.parsedPath=r||e.parseTrackName(n),this.node=e.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,n,r){return t&&t.isAnimationObjectGroup?new e.Composite(t,n,r):new e(t,n,r)}static sanitizeNodeName(e){return e.replace(/\s/g,`_`).replace(Lo,``)}static parseTrackName(e){let t=Wo.exec(e);if(t===null)throw Error(`THREE.PropertyBinding: Cannot parse trackName: `+e);let n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},r=n.nodeName&&n.nodeName.lastIndexOf(`.`);if(r!==void 0&&r!==-1){let e=n.nodeName.substring(r+1);Go.indexOf(e)!==-1&&(n.nodeName=n.nodeName.substring(0,r),n.objectName=e)}if(n.propertyName===null||n.propertyName.length===0)throw Error(`THREE.PropertyBinding: can not parse propertyName from trackName: `+e);return n}static findNode(e,t){if(t===void 0||t===``||t===`.`||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){let n=function(e){for(let r=0;r<e.length;r++){let i=e[r];if(i.name===t||i.uuid===t)return i;let a=n(i.children);if(a)return a}return null},r=n(e.children);if(r)return r}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let n=this.resolvedProperty;for(let r=0,i=n.length;r!==i;++r)e[t++]=n[r]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let n=this.resolvedProperty;for(let r=0,i=n.length;r!==i;++r)n[r]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let n=this.resolvedProperty;for(let r=0,i=n.length;r!==i;++r)n[r]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let n=this.resolvedProperty;for(let r=0,i=n.length;r!==i;++r)n[r]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let t=this.node,n=this.parsedPath,r=n.objectName,i=n.propertyName,a=n.propertyIndex;if(t||(t=e.findNode(this.rootNode,n.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){z(`PropertyBinding: No target node found for track: `+this.path+`.`);return}if(r){let e=n.objectIndex;switch(r){case`materials`:if(!t.material){B(`PropertyBinding: Can not bind to material as node does not have a material.`,this);return}if(!t.material.materials){B(`PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.`,this);return}t=t.material.materials;break;case`bones`:if(!t.skeleton){B(`PropertyBinding: Can not bind to bones as node does not have a skeleton.`,this);return}t=t.skeleton.bones;for(let n=0;n<t.length;n++)if(t[n].name===e){e=n;break}break;case`map`:if(`map`in t){t=t.map;break}if(!t.material){B(`PropertyBinding: Can not bind to material as node does not have a material.`,this);return}if(!t.material.map){B(`PropertyBinding: Can not bind to material.map as node.material does not have a map.`,this);return}t=t.material.map;break;default:if(t[r]===void 0){B(`PropertyBinding: Can not bind to objectName of node undefined.`,this);return}t=t[r]}if(e!==void 0){if(t[e]===void 0){B(`PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.`,this,t);return}t=t[e]}}let o=t[i];if(o===void 0){let e=n.nodeName;B(`PropertyBinding: Trying to update property for track: `+e+`.`+i+` but it wasn't found.`,t);return}let s=this.Versioning.None;this.targetObject=t,t.isMaterial===!0?s=this.Versioning.NeedsUpdate:t.isObject3D===!0&&(s=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(a!==void 0){if(i===`morphTargetInfluences`){if(!t.geometry){B(`PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.`,this);return}if(!t.geometry.morphAttributes){B(`PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.`,this);return}t.morphTargetDictionary[a]!==void 0&&(a=t.morphTargetDictionary[a])}c=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=a}else o.fromArray!==void 0&&o.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(c=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=i;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][s]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};qo.Composite=Ko,qo.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3},qo.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2},qo.prototype.GetterByBindingType=[qo.prototype._getValue_direct,qo.prototype._getValue_array,qo.prototype._getValue_arrayElement,qo.prototype._getValue_toArray],qo.prototype.SetterByBindingTypeAndVersioning=[[qo.prototype._setValue_direct,qo.prototype._setValue_direct_setNeedsUpdate,qo.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[qo.prototype._setValue_array,qo.prototype._setValue_array_setNeedsUpdate,qo.prototype._setValue_array_setMatrixWorldNeedsUpdate],[qo.prototype._setValue_arrayElement,qo.prototype._setValue_arrayElement_setNeedsUpdate,qo.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[qo.prototype._setValue_fromArray,qo.prototype._setValue_fromArray_setNeedsUpdate,qo.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]],class{static{this.prototype.isMatrix2=!0}constructor(e,t,n,r){this.elements=[1,0,0,1],e!==void 0&&this.set(e,t,n,r)}identity(){return this.set(1,0,0,1),this}fromArray(e,t=0){for(let n=0;n<4;n++)this.elements[n]=e[n+t];return this}set(e,t,n,r){let i=this.elements;return i[0]=e,i[2]=t,i[1]=n,i[3]=r,this}};function Jo(e,t,n,r){let i=Yo(r);switch(n){case ye:return e*t;case we:return e*t/i.components*i.byteLength;case Te:return e*t/i.components*i.byteLength;case Ee:return e*t*2/i.components*i.byteLength;case De:return e*t*2/i.components*i.byteLength;case be:return e*t*3/i.components*i.byteLength;case xe:return e*t*4/i.components*i.byteLength;case Oe:return e*t*4/i.components*i.byteLength;case ke:case Ae:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*8;case je:case Me:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*16;case Pe:case Fe:return Math.max(e,16)*Math.max(t,8)/4;case Ne:case F:return Math.max(e,8)*Math.max(t,8)/2;case Ie:case Le:case Re:case L:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*8;case I:case R:case ze:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*16;case Be:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*16;case Ve:return Math.floor((e+4)/5)*Math.floor((t+3)/4)*16;case He:return Math.floor((e+4)/5)*Math.floor((t+4)/5)*16;case Ue:return Math.floor((e+5)/6)*Math.floor((t+4)/5)*16;case We:return Math.floor((e+5)/6)*Math.floor((t+5)/6)*16;case Ge:return Math.floor((e+7)/8)*Math.floor((t+4)/5)*16;case Ke:return Math.floor((e+7)/8)*Math.floor((t+5)/6)*16;case qe:return Math.floor((e+7)/8)*Math.floor((t+7)/8)*16;case Je:return Math.floor((e+9)/10)*Math.floor((t+4)/5)*16;case Ye:return Math.floor((e+9)/10)*Math.floor((t+5)/6)*16;case Xe:return Math.floor((e+9)/10)*Math.floor((t+7)/8)*16;case Ze:return Math.floor((e+9)/10)*Math.floor((t+9)/10)*16;case Qe:return Math.floor((e+11)/12)*Math.floor((t+9)/10)*16;case $e:return Math.floor((e+11)/12)*Math.floor((t+11)/12)*16;case et:case tt:case nt:return Math.ceil(e/4)*Math.ceil(t/4)*16;case rt:case it:return Math.ceil(e/4)*Math.ceil(t/4)*8;case at:case ot:return Math.ceil(e/4)*Math.ceil(t/4)*16}throw Error(`Unable to determine texture byte length for ${n} format.`)}function Yo(e){switch(e){case oe:case se:return{byteLength:1,components:1};case le:case ce:case pe:return{byteLength:2,components:1};case me:case he:return{byteLength:2,components:4};case de:case ue:case fe:return{byteLength:4,components:1};case _e:case ve:return{byteLength:4,components:3}}throw Error(`THREE.TextureUtils: Unknown texture type ${e}.`)}typeof __THREE_DEVTOOLS__<`u`&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent(`register`,{detail:{revision:`187`}})),typeof window<`u`&&(window.__THREE__?z(`WARNING: Multiple instances of Three.js being imported.`):window.__THREE__=`187`);function Xo(){let e=null,t=!1,n=null,r=null;function i(t,a){r=e.requestAnimationFrame(i),n(t,a)}return{start:function(){t!==!0&&n!==null&&e!==null&&(r=e.requestAnimationFrame(i),t=!0)},stop:function(){e!==null&&e.cancelAnimationFrame(r),t=!1},setAnimationLoop:function(e){n=e},setContext:function(t){e=t}}}function Zo(e){let t=new WeakMap;function n(t,n){let r=t.array,i=t.usage,a=r.byteLength,o=e.createBuffer();e.bindBuffer(n,o),e.bufferData(n,r,i),t.onUploadCallback();let s;if(r instanceof Float32Array)s=e.FLOAT;else if(typeof Float16Array<`u`&&r instanceof Float16Array)s=e.HALF_FLOAT;else if(r instanceof Uint16Array)s=t.isFloat16BufferAttribute?e.HALF_FLOAT:e.UNSIGNED_SHORT;else if(r instanceof Int16Array)s=e.SHORT;else if(r instanceof Uint32Array)s=e.UNSIGNED_INT;else if(r instanceof Int32Array)s=e.INT;else if(r instanceof Int8Array)s=e.BYTE;else if(r instanceof Uint8Array)s=e.UNSIGNED_BYTE;else if(r instanceof Uint8ClampedArray)s=e.UNSIGNED_BYTE;else throw Error(`THREE.WebGLAttributes: Unsupported buffer data format: `+r);return{buffer:o,type:s,bytesPerElement:r.BYTES_PER_ELEMENT,version:t.version,size:a}}function r(t,n,r){let i=n.array,a=n.updateRanges;if(e.bindBuffer(r,t),a.length===0)e.bufferSubData(r,0,i);else{a.sort((e,t)=>e.start-t.start);let t=0;for(let e=1;e<a.length;e++){let n=a[t],r=a[e];r.start<=n.start+n.count+1?n.count=Math.max(n.count,r.start+r.count-n.start):(++t,a[t]=r)}a.length=t+1;for(let t=0,n=a.length;t<n;t++){let n=a[t];e.bufferSubData(r,n.start*i.BYTES_PER_ELEMENT,i,n.start,n.count)}n.clearUpdateRanges()}n.onUploadCallback()}function i(e){return e.isInterleavedBufferAttribute&&(e=e.data),t.get(e)}function a(n){n.isInterleavedBufferAttribute&&(n=n.data);let r=t.get(n);r&&(e.deleteBuffer(r.buffer),t.delete(n))}function o(e,i){if(e.isInterleavedBufferAttribute&&(e=e.data),e.isGLBufferAttribute){let n=t.get(e);(!n||n.version<e.version)&&t.set(e,{buffer:e.buffer,type:e.type,bytesPerElement:e.elementSize,version:e.version});return}let a=t.get(e);if(a===void 0)t.set(e,n(e,i));else if(a.version<e.version){if(a.size!==e.array.byteLength)throw Error(`THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.`);r(a.buffer,e,i),a.version=e.version}}return{get:i,remove:a,update:o}}var J={alphahash_fragment:`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,alphahash_pars_fragment:`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,alphamap_fragment:`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,alphamap_pars_fragment:`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,alphatest_fragment:`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,alphatest_pars_fragment:`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,aomap_fragment:`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,aomap_pars_fragment:`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,batching_pars_vertex:`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,batching_vertex:`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,begin_vertex:`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,beginnormal_vertex:`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,bsdfs:`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,iridescence_fragment:`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,bumpmap_pars_fragment:`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,clipping_planes_fragment:`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,clipping_planes_pars_fragment:`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,clipping_planes_pars_vertex:`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,clipping_planes_vertex:`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,color_fragment:`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,color_pars_fragment:`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,color_pars_vertex:`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,color_vertex:`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,common:`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
#define inverseTransformDirection transformDirectionByInverseViewMatrix
vec3 transformNormalByInverseViewMatrix( in vec3 normal, in mat4 viewMatrix ) {
	return normalize( ( vec4( normal, 0.0 ) * viewMatrix ).xyz );
}
vec3 transformDirectionByInverseViewMatrix( in vec3 dir, in mat4 viewMatrix ) {
	return normalize( ( vec4( dir, 0.0 ) * viewMatrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,defaultnormal_vertex:`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
#endif`,displacementmap_pars_vertex:`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,displacementmap_vertex:`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,emissivemap_fragment:`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,emissivemap_pars_fragment:`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,colorspace_fragment:`gl_FragColor = linearToOutputTexel( gl_FragColor );`,colorspace_pars_fragment:`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,envmap_fragment:`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,envmap_common_pars_fragment:`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	uniform samplerCube envMap;
	#ifdef ENVMAP_TYPE_PMREM
		float roughnessToMip( const in float roughness ) {
			float r = clamp( roughness, 0.0, 1.0 );
			return ENVMAP_MAX_LOD * r * ( 2.0 - r );
		}
	#endif
#endif`,envmap_pars_fragment:`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,envmap_pars_vertex:`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,envmap_physical_pars_fragment:`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_PMREM
			vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
			vec4 envMapColor = textureLod( envMap, envMapRotation * worldNormal, ENVMAP_MAX_LOD );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_PMREM
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = transformDirectionByInverseViewMatrix( reflectVec, viewMatrix );
			vec4 envMapColor = textureLod( envMap, envMapRotation * reflectVec, roughnessToMip( roughness ) );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_RETROREFLECTION
		vec3 getIBLRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
			#ifdef ENVMAP_TYPE_PMREM
				vec3 retroVec = normalize( mix( viewDir, normal, pow4( roughness ) ) );
				retroVec = transformDirectionByInverseViewMatrix( retroVec, viewMatrix );
				vec4 envMapColor = textureLod( envMap, envMapRotation * retroVec, roughnessToMip( roughness ) );
				return envMapColor.rgb * envMapIntensity;
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_PMREM
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
		#ifdef USE_RETROREFLECTION
			vec3 getIBLAnisotropyRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
				#ifdef ENVMAP_TYPE_PMREM
					vec3 bentNormal = cross( bitangent, viewDir );
					bentNormal = normalize( cross( bentNormal, bitangent ) );
					bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
					return getIBLRetroRadiance( viewDir, bentNormal, roughness );
				#else
					return vec3( 0.0 );
				#endif
			}
		#endif
	#endif
#endif`,envmap_vertex:`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,fog_vertex:`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,fog_pars_vertex:`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,fog_fragment:`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,fog_pars_fragment:`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,gradientmap_pars_fragment:`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,lightmap_pars_fragment:`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,lights_lambert_fragment:`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,lights_lambert_pars_fragment:`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,lights_pars_begin:`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_SUN_LIGHTS > 0
	struct SunLight {
		vec3 direction;
		vec3 color;
	};
	uniform SunLight sunLights[ NUM_SUN_LIGHTS ];
	void getSunLightInfo( const in SunLight sunLight, out IncidentLight light ) {
		light.color = sunLight.color;
		light.direction = sunLight.direction;
		light.visible = true;
	}
#endif
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif
#include <lightprobes_pars_fragment>`,lights_toon_fragment:`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,lights_toon_pars_fragment:`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,lights_phong_fragment:`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,lights_phong_pars_fragment:`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,lights_physical_fragment:`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.045 );
material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef USE_DIFFUSE_ROUGHNESS
	float diffuseRoughnessFactor = diffuseRoughness;
	#ifdef USE_DIFFUSE_ROUGHNESSMAP
		diffuseRoughnessFactor *= texture2D( diffuseRoughnessMap, vDiffuseRoughnessMapUv ).r;
	#endif
	material.diffuseRoughness = saturate( diffuseRoughnessFactor );
#endif
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.045 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_RETROREFLECTION
	material.retroreflectivity = retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,lights_physical_pars_fragment:`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	vec2 dfg;
	vec3 multiScatteringCompensation;
	#ifdef USE_DIFFUSE_ROUGHNESS
		float diffuseRoughness;
	#endif
	#ifdef USE_RETROREFLECTION
		float retroreflectivity;
	#endif
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0Dielectric;
		vec3 iridescenceF0Metallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
#ifdef USE_DIFFUSE_ROUGHNESS
	const float EON_EPSILON = 1e-7;
	float FON_DirectionalAlbedo( const in float mu, const in float roughness, const in float A ) {
		float muComp = 1.0 - mu;
		float gOverPi = muComp * ( 0.0571085289 + muComp * ( 0.491881867 + muComp * ( - 0.332181442 + muComp * 0.0714429953 ) ) );
		return A * ( 1.0 + roughness * gOverPi );
	}
	vec3 BRDF_EON( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 diffuseColor, const in float roughness ) {
		vec3 rho = saturate( diffuseColor );
		if ( roughness <= EON_EPSILON ) return BRDF_Lambert( rho );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float s = dot( lightDir, viewDir ) - dotNL * dotNV;
		float sOverT = ( s > 0.0 ) ? s / max( max( dotNL, dotNV ), EON_EPSILON ) : s;
		float A = 1.0 / ( 1.0 + ( 0.5 - 2.0 / ( 3.0 * PI ) ) * roughness );
		vec3 singleScatter = rho * RECIPROCAL_PI * A * ( 1.0 + roughness * sOverT );
		float averageAlbedo = A * ( 1.0 + ( 2.0 / 3.0 - 28.0 / ( 15.0 * PI ) ) * roughness );
		float albedoV = FON_DirectionalAlbedo( dotNV, roughness, A );
		float albedoL = FON_DirectionalAlbedo( dotNL, roughness, A );
		vec3 rhoMultiScatter = rho * rho * averageAlbedo / max( vec3( EON_EPSILON ), vec3( 1.0 ) - rho * ( 1.0 - averageAlbedo ) );
		vec3 multiScatter = rhoMultiScatter * RECIPROCAL_PI
			* max( EON_EPSILON, 1.0 - albedoV )
			* max( EON_EPSILON, 1.0 - albedoL )
			/ max( EON_EPSILON, 1.0 - averageAlbedo );
		return singleScatter + multiScatter;
	}
	vec3 EON_DirectionalAlbedo( const in vec3 diffuseColor, const in float roughness, const in float dotNV ) {
		vec3 rho = saturate( diffuseColor );
		if ( roughness <= EON_EPSILON ) return rho;
		float A = 1.0 / ( 1.0 + ( 0.5 - 2.0 / ( 3.0 * PI ) ) * roughness );
		float directionalAlbedo = FON_DirectionalAlbedo( dotNV, roughness, A );
		float averageAlbedo = A * ( 1.0 + ( 2.0 / 3.0 - 28.0 / ( 15.0 * PI ) ) * roughness );
		vec3 rhoMultiScatter = rho * rho * averageAlbedo / max( vec3( EON_EPSILON ), vec3( 1.0 ) - rho * ( 1.0 - averageAlbedo ) );
		return rho * directionalAlbedo + rhoMultiScatter * ( 1.0 - directionalAlbedo );
	}
#endif
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		return 0.5 / max( gv + gl, EPSILON );
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = max( material.clearcoatRoughness, 0.045 );
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = max( material.roughness, 0.045 );
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float alphaT = max( material.alphaT, alpha );
		float V = V_GGX_SmithCorrelated_Anisotropic( alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec2 fab, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec2 fab, const in vec3 specularColor, const in float specularF90, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	vec3 specularBRDF = BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	#ifdef USE_RETROREFLECTION
		vec3 retroViewDir = reflect( - geometryViewDir, geometryNormal );
		vec3 retroSpecularBRDF = BRDF_GGX( directLight.direction, retroViewDir, geometryNormal, material );
		specularBRDF = mix( specularBRDF, retroSpecularBRDF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directSpecular += irradiance * specularBRDF * material.multiScatteringCompensation;
	vec3 halfDir = normalize( directLight.direction + geometryViewDir );
	float dotVH = saturate( dot( geometryViewDir, halfDir ) );
	vec3 F = F_Schlick( material.specularColor, material.specularF90, dotVH );
	#ifdef USE_RETROREFLECTION
		vec3 retroHalfDir = normalize( directLight.direction + retroViewDir );
		float dotRetroVH = saturate( dot( retroViewDir, retroHalfDir ) );
		vec3 retroF = F_Schlick( material.specularColor, material.specularF90, dotRetroVH );
		F = mix( F, retroF, saturate( material.retroreflectivity ) );
	#endif
	#ifdef USE_DIFFUSE_ROUGHNESS
		vec3 diffuseBRDF = BRDF_EON( directLight.direction, geometryViewDir, geometryNormal, material.diffuseColor, material.diffuseRoughness ) * ( 1.0 - material.metalness );
	#else
		vec3 diffuseBRDF = BRDF_Lambert( material.diffuseContribution );
	#endif
	reflectedLight.directDiffuse += irradiance * diffuseBRDF * ( 1.0 - F );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScattering, multiScattering );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScattering, multiScattering );
	#endif
	#ifdef USE_DIFFUSE_ROUGHNESS
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		vec3 diffuseAlbedo = EON_DirectionalAlbedo( material.diffuseColor, material.diffuseRoughness, dotNV ) * ( 1.0 - material.metalness );
		vec3 diffuse = irradiance * RECIPROCAL_PI * diffuseAlbedo * ( 1.0 - singleScattering - multiScattering );
	#else
		vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - singleScattering - multiScattering );
	#endif
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		sheenSpecularIndirect += irradiance * material.sheenColor * sheenAlbedo * RECIPROCAL_PI;
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( material.dfg, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceF0Metallic, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( material.dfg, material.diffuseColor, material.specularF90, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	#ifdef USE_DIFFUSE_ROUGHNESS
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		vec3 diffuse = EON_DirectionalAlbedo( material.diffuseColor, material.diffuseRoughness, dotNV ) * ( 1.0 - material.metalness ) * ( 1.0 - totalScatteringDielectric );
	#else
		vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	#endif
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,lights_fragment_begin:`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		vec3 iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		vec3 iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( iridescenceFresnelDielectric, iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0Dielectric = Schlick_to_F0( iridescenceFresnelDielectric, 1.0, dotNVi );
		material.iridescenceF0Metallic = Schlick_to_F0( iridescenceFresnelMetallic, 1.0, dotNVi );
	}
#endif
#ifdef STANDARD
	float dotNVms = saturate( dot( geometryNormal, geometryViewDir ) );
	material.dfg = texture2D( dfgLUT, vec2( material.roughness, dotNVms ) ).rg;
	#if ( NUM_SUN_LIGHTS > 0 || NUM_DIR_LIGHTS > 0 || NUM_POINT_LIGHTS > 0 || NUM_SPOT_LIGHTS > 0 )
		float EssMs = material.dfg.x + material.dfg.y;
		material.multiScatteringCompensation = 1.0 + material.specularColorBlended * ( 1.0 / EssMs - 1.0 );
	#endif
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SUN_LIGHTS > 0 ) && defined( RE_Direct )
	SunLight sunLight;
	#if defined( USE_SHADOWMAP ) && NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHTS; i ++ ) {
		sunLight = sunLights[ i ];
		getSunLightInfo( sunLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SUN_LIGHT_SHADOWS )
		sunLightShadow = sunLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getSunShadow( sunShadowMap[ i ], sunLightShadow, UNROLLED_LOOP_INDEX ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_LIGHT_PROBE_GRIDS > 0
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = transformNormalByInverseViewMatrix( geometryNormal, viewMatrix );
		int probeGrid = - 1;
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_LIGHT_PROBE_GRIDS; i ++ ) {
			if ( isInsideLightProbeGrid( probeWorldPos, probeWorldNormal, probesMin[ i ], probesMax[ i ], probesResolution[ i ] ) ) probeGrid = UNROLLED_LOOP_INDEX;
		}
		#pragma unroll_loop_end
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_LIGHT_PROBE_GRIDS; i ++ ) {
			if ( probeGrid == UNROLLED_LOOP_INDEX ) irradiance += getLightProbeGridIrradiance( probesSH[ i ], probesMin[ i ], probesMax[ i ], probesResolution[ i ], probeWorldPos, probeWorldNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,lights_fragment_maps:`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_PMREM )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		vec3 iblRadiance = getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		vec3 iblRadiance = getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_RETROREFLECTION
		#ifdef USE_ANISOTROPY
			vec3 retroIBLRadiance = getIBLAnisotropyRetroRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
		#else
			vec3 retroIBLRadiance = getIBLRetroRadiance( geometryViewDir, geometryNormal, material.roughness );
		#endif
		iblRadiance = mix( iblRadiance, retroIBLRadiance, saturate( material.retroreflectivity ) );
	#endif
	radiance += iblRadiance;
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,lights_fragment_end:`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,lightprobes_pars_fragment:`#if NUM_LIGHT_PROBE_GRIDS > 0
uniform highp sampler3D probesSH[ NUM_LIGHT_PROBE_GRIDS ];
uniform vec3 probesMin[ NUM_LIGHT_PROBE_GRIDS ];
uniform vec3 probesMax[ NUM_LIGHT_PROBE_GRIDS ];
uniform vec3 probesResolution[ NUM_LIGHT_PROBE_GRIDS ];
bool isInsideLightProbeGrid( vec3 worldPos, vec3 worldNormal, vec3 probesMin, vec3 probesMax, vec3 probesResolution ) {
	vec3 spacing = ( probesMax - probesMin ) / probesResolution;
	vec3 samplePos = worldPos + worldNormal * spacing * 0.5;
	vec3 margin = spacing * 0.01;
	return all( greaterThanEqual( samplePos, probesMin - margin ) ) && all( lessThanEqual( samplePos, probesMax + margin ) );
}
vec3 getLightProbeGridIrradiance( highp sampler3D probesSH, vec3 probesMin, vec3 probesMax, vec3 probesResolution, vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 probeSpacing = gridRange / res;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.5 / res, 1.0 - 0.5 / res );
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,logdepthbuf_fragment:`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,logdepthbuf_pars_fragment:`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,logdepthbuf_pars_vertex:`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,logdepthbuf_vertex:`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,map_fragment:`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,map_pars_fragment:`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,map_particle_fragment:`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,map_particle_pars_fragment:`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,metalnessmap_fragment:`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,metalnessmap_pars_fragment:`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,morphinstance_vertex:`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,morphcolor_vertex:`#if defined( USE_MORPHCOLORS )
	#if defined( USE_COLOR_ALPHA )
		vColor *= morphTargetBaseInfluence;
	#elif defined( USE_COLOR )
		vColor.rgb *= morphTargetBaseInfluence;
	#endif
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor.rgb += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,morphnormal_vertex:`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,morphtarget_pars_vertex:`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,morphtarget_vertex:`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,normal_fragment_begin:`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#ifdef DOUBLE_SIDED
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#ifdef DOUBLE_SIDED
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,normal_fragment_maps:`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,normal_pars_fragment:`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,normal_pars_vertex:`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,normal_vertex:`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,normalmap_pars_fragment:`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,clearcoat_normal_fragment_begin:`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,clearcoat_normal_fragment_maps:`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,clearcoat_pars_fragment:`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,iridescence_pars_fragment:`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,opaque_fragment:`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,packing:`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,premultiplied_alpha_fragment:`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,project_vertex:`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,dithering_fragment:`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,dithering_pars_fragment:`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,roughnessmap_fragment:`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,roughnessmap_pars_fragment:`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,shadowmap_pars_fragment:`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		#define SUN_LIGHT_CASCADES 2
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#else
			uniform sampler2D sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#endif
		uniform mat4 sunShadowMatrix[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		uniform vec4 sunShadowCascade[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
		struct SunLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SunLightShadow sunLightShadows[ NUM_SUN_LIGHT_SHADOWS ];
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				vec2 radius = shadowRadius * texelSize;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_SUN_LIGHT_SHADOWS > 0
		float getSunShadow(
			#if defined( SHADOWMAP_TYPE_PCF )
				sampler2DShadow shadowMap,
			#else
				sampler2D shadowMap,
			#endif
			SunLightShadow sunLightShadow,
			int shadowIndex
		) {
			vec4 shadowWorldPosition = vec4( vSunShadowWorldPosition.xyz + vSunShadowWorldNormal * sunLightShadow.shadowNormalBias, 1.0 );
			float viewDepth = vSunShadowWorldPosition.w;
			int cascadeOffset = shadowIndex * SUN_LIGHT_CASCADES;
			float shadow = 1.0;
			for ( int i = SUN_LIGHT_CASCADES - 1; i >= 0; i -- ) {
				vec4 cascade = sunShadowCascade[ cascadeOffset + i ];
				if ( viewDepth >= cascade.x && viewDepth < cascade.y ) {
					float cascadeShadow = getShadow(
						shadowMap,
						sunLightShadow.shadowMapSize,
						sunLightShadow.shadowIntensity,
						sunLightShadow.shadowBias,
						sunLightShadow.shadowRadius,
						sunShadowMatrix[ cascadeOffset + i ] * shadowWorldPosition
					);
					shadow = mix( cascadeShadow, shadow, smoothstep( cascade.z, cascade.y, viewDepth ) );
				}
			}
			return shadow;
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float lightDistance = length( lightToPosition );
			float depthRange = shadowCameraFar - shadowCameraNear;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float depthA = - shadowCameraNear / depthRange - shadowBias;
				float depthB = shadowCameraNear * shadowCameraFar / ( depthRange * lightDistance );
			#else
				float depthA = shadowCameraFar / depthRange + shadowBias;
				float depthB = - shadowCameraNear * shadowCameraFar / ( depthRange * lightDistance );
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			shadow = 0.0;
			for ( int i = 0; i < 5; i ++ ) {
				vec2 offset = vogelDiskSample( i, 5, phi );
				vec3 direction = bd3D + ( tangent * offset.x + bitangent * offset.y ) * texelSize;
				vec3 absDirection = abs( direction );
				float dp = depthA + depthB / max( max( absDirection.x, absDirection.y ), absDirection.z );
				shadow += texture( shadowMap, vec4( direction, dp ) );
			}
			shadow *= 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,shadowmap_pars_vertex:`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,shadowmap_vertex:`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_SUN_LIGHT_SHADOWS > 0
		vSunShadowWorldPosition = vec4( worldPosition.xyz, - mvPosition.z );
		vSunShadowWorldNormal = shadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,shadowmask_pars_fragment:`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHT_SHADOWS; i ++ ) {
		sunLight = sunLightShadows[ i ];
		shadow *= receiveShadow ? getSunShadow( sunShadowMap[ i ], sunLight, UNROLLED_LOOP_INDEX ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,skinbase_vertex:`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,skinning_pars_vertex:`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,skinning_vertex:`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,skinnormal_vertex:`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,specularmap_fragment:`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,specularmap_pars_fragment:`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,tonemapping_fragment:`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,tonemapping_pars_fragment:`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,transmission_fragment:`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,transmission_pars_fragment:`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,uv_pars_fragment:`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_DIFFUSE_ROUGHNESSMAP
	varying vec2 vDiffuseRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,uv_pars_vertex:`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_DIFFUSE_ROUGHNESSMAP
	uniform mat3 diffuseRoughnessMapTransform;
	varying vec2 vDiffuseRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,uv_vertex:`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DIFFUSE_ROUGHNESSMAP
	vDiffuseRoughnessMapUv = ( diffuseRoughnessMapTransform * vec3( DIFFUSE_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,worldpos_vertex:`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,background_vert:`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,background_frag:`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,backgroundCube_vert:`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,backgroundCube_frag:`uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <envmap_common_pars_fragment>
void main() {
	#ifdef ENVMAP_TYPE_PMREM
		vec4 texColor = textureLod( envMap, backgroundRotation * vWorldDirection, roughnessToMip( backgroundBlurriness ) );
	#else
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,cube_vert:`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,cube_frag:`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,depth_vert:`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,depth_frag:`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,distance_vert:`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,distance_frag:`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,equirect_vert:`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,equirect_frag:`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,linedashed_vert:`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,linedashed_frag:`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,meshbasic_vert:`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,meshbasic_frag:`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshlambert_vert:`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,meshlambert_frag:`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshmatcap_vert:`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,meshmatcap_frag:`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshnormal_vert:`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,meshnormal_frag:`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,meshphong_vert:`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,meshphong_frag:`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshphysical_vert:`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,meshphysical_frag:`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DIFFUSE_ROUGHNESS
	uniform float diffuseRoughness;
	#ifdef USE_DIFFUSE_ROUGHNESSMAP
		uniform sampler2D diffuseRoughnessMap;
	#endif
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_RETROREFLECTION
	uniform float retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshtoon_vert:`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,meshtoon_frag:`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,points_vert:`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,points_frag:`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,shadow_vert:`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,shadow_frag:`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,sprite_vert:`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,sprite_frag:`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`},Y={common:{diffuse:{value:new K(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new W},alphaMap:{value:null},alphaMapTransform:{value:new W},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new W}},envmap:{envMap:{value:null},envMapRotation:{value:new W},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new W}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new W}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new W},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new W},normalScale:{value:new H(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new W},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new W}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new W}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new W}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new K(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:[]},probesMin:{value:[]},probesMax:{value:[]},probesResolution:{value:[]}},points:{diffuse:{value:new K(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new W},alphaTest:{value:0},uvTransform:{value:new W}},sprite:{diffuse:{value:new K(16777215)},opacity:{value:1},center:{value:new H(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new W},alphaMap:{value:null},alphaMapTransform:{value:new W},alphaTest:{value:0}}},Qo={basic:{uniforms:Ma([Y.common,Y.specularmap,Y.envmap,Y.aomap,Y.lightmap,Y.fog]),vertexShader:J.meshbasic_vert,fragmentShader:J.meshbasic_frag},lambert:{uniforms:Ma([Y.common,Y.specularmap,Y.envmap,Y.aomap,Y.lightmap,Y.emissivemap,Y.bumpmap,Y.normalmap,Y.displacementmap,Y.fog,Y.lights,{emissive:{value:new K(0)},envMapIntensity:{value:1}}]),vertexShader:J.meshlambert_vert,fragmentShader:J.meshlambert_frag},phong:{uniforms:Ma([Y.common,Y.specularmap,Y.envmap,Y.aomap,Y.lightmap,Y.emissivemap,Y.bumpmap,Y.normalmap,Y.displacementmap,Y.fog,Y.lights,{emissive:{value:new K(0)},specular:{value:new K(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:J.meshphong_vert,fragmentShader:J.meshphong_frag},standard:{uniforms:Ma([Y.common,Y.envmap,Y.aomap,Y.lightmap,Y.emissivemap,Y.bumpmap,Y.normalmap,Y.displacementmap,Y.roughnessmap,Y.metalnessmap,Y.fog,Y.lights,{emissive:{value:new K(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:J.meshphysical_vert,fragmentShader:J.meshphysical_frag},toon:{uniforms:Ma([Y.common,Y.aomap,Y.lightmap,Y.emissivemap,Y.bumpmap,Y.normalmap,Y.displacementmap,Y.gradientmap,Y.fog,Y.lights,{emissive:{value:new K(0)}}]),vertexShader:J.meshtoon_vert,fragmentShader:J.meshtoon_frag},matcap:{uniforms:Ma([Y.common,Y.bumpmap,Y.normalmap,Y.displacementmap,Y.fog,{matcap:{value:null}}]),vertexShader:J.meshmatcap_vert,fragmentShader:J.meshmatcap_frag},points:{uniforms:Ma([Y.points,Y.fog]),vertexShader:J.points_vert,fragmentShader:J.points_frag},dashed:{uniforms:Ma([Y.common,Y.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:J.linedashed_vert,fragmentShader:J.linedashed_frag},depth:{uniforms:Ma([Y.common,Y.displacementmap]),vertexShader:J.depth_vert,fragmentShader:J.depth_frag},normal:{uniforms:Ma([Y.common,Y.bumpmap,Y.normalmap,Y.displacementmap,{opacity:{value:1}}]),vertexShader:J.meshnormal_vert,fragmentShader:J.meshnormal_frag},sprite:{uniforms:Ma([Y.sprite,Y.fog]),vertexShader:J.sprite_vert,fragmentShader:J.sprite_frag},background:{uniforms:{uvTransform:{value:new W},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:J.background_vert,fragmentShader:J.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new W}},vertexShader:J.backgroundCube_vert,fragmentShader:J.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:J.cube_vert,fragmentShader:J.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:J.equirect_vert,fragmentShader:J.equirect_frag},distance:{uniforms:Ma([Y.common,Y.displacementmap,{referencePosition:{value:new U},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:J.distance_vert,fragmentShader:J.distance_frag},shadow:{uniforms:Ma([Y.lights,Y.fog,{color:{value:new K(0)},opacity:{value:1}}]),vertexShader:J.shadow_vert,fragmentShader:J.shadow_frag}};Qo.physical={uniforms:Ma([Qo.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new W},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new W},clearcoatNormalScale:{value:new H(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new W},diffuseRoughness:{value:0},diffuseRoughnessMap:{value:null},diffuseRoughnessMapTransform:{value:new W},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new W},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new W},sheen:{value:0},sheenColor:{value:new K(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new W},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new W},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new W},transmissionSamplerSize:{value:new H},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new W},attenuationDistance:{value:0},attenuationColor:{value:new K(0)},specularColor:{value:new K(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new W},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new W},anisotropyVector:{value:new H},anisotropyMap:{value:null},anisotropyMapTransform:{value:new W}}]),vertexShader:J.meshphysical_vert,fragmentShader:J.meshphysical_frag};var $o={r:0,b:0,g:0},es=new An,ts=new W;ts.set(-1,0,0,0,1,0,0,0,1);function ns(e,t,n,r,i,a){let o=new K(0),s=i===!0?0:1,c,l,u=null,d=0,f=null;function p(e){let n=e.isScene===!0?e.background:null;if(n&&n.isTexture){let r=e.backgroundBlurriness>0;n=t.get(n,r)}return n}function m(t){let r=!1,i=p(t);i===null?g(o,s):i&&i.isColor&&(g(i,1),r=!0);let c=e.xr.getEnvironmentBlendMode();c===`additive`?n.buffers.color.setClear(0,0,0,1,a):c===`alpha-blend`&&n.buffers.color.setClear(0,0,0,0,a),(e.autoClear||r)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil))}function h(t,n){let i=p(n);i&&i.isCubeTexture?(l===void 0&&(l=new q(new Da(1,1,1),new za({name:`BackgroundCubeMaterial`,uniforms:ja(Qo.backgroundCube.uniforms),vertexShader:Qo.backgroundCube.vertexShader,fragmentShader:Qo.backgroundCube.fragmentShader,side:1,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute(`normal`),l.geometry.deleteAttribute(`uv`),l.onBeforeRender=function(e,t,n){this.matrixWorld.copyPosition(n.matrixWorld)},Object.defineProperty(l.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(l)),l.material.uniforms.envMap.value=i,l.material.uniforms.backgroundBlurriness.value=n.backgroundBlurriness,l.material.uniforms.backgroundIntensity.value=n.backgroundIntensity,l.material.uniforms.backgroundRotation.value.setFromMatrix4(es.makeRotationFromEuler(n.backgroundRotation)).transpose(),i.isRenderTargetTexture===!1&&l.material.uniforms.backgroundRotation.value.premultiply(ts),l.material.toneMapped=G.getTransfer(i.colorSpace)!==vt,(u!==i||d!==i.version||f!==e.toneMapping)&&(l.material.needsUpdate=!0,u=i,d=i.version,f=e.toneMapping),l.layers.enableAll(),t.unshift(l,l.geometry,l.material,0,0,null)):i&&i.isTexture&&(c===void 0&&(c=new q(new Oa(2,2),new za({name:`BackgroundMaterial`,uniforms:ja(Qo.background.uniforms),vertexShader:Qo.background.vertexShader,fragmentShader:Qo.background.fragmentShader,side:0,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute(`normal`),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(c)),c.material.uniforms.t2D.value=i,c.material.uniforms.backgroundIntensity.value=n.backgroundIntensity,c.material.toneMapped=G.getTransfer(i.colorSpace)!==vt,i.matrixAutoUpdate===!0&&i.updateMatrix(),c.material.uniforms.uvTransform.value.copy(i.matrix),(u!==i||d!==i.version||f!==e.toneMapping)&&(c.material.needsUpdate=!0,u=i,d=i.version,f=e.toneMapping),c.layers.enableAll(),t.unshift(c,c.geometry,c.material,0,0,null))}function g(t,r){t.getRGB($o,Fa(e)),n.buffers.color.setClear($o.r,$o.g,$o.b,r,a)}function _(){l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return o},setClearColor:function(e,t=1){o.set(e),s=t,g(o,s)},getClearAlpha:function(){return s},setClearAlpha:function(e){s=e,g(o,s)},render:m,addToRenderList:h,dispose:_}}function rs(e,t){let n=e.getParameter(e.MAX_VERTEX_ATTRIBS),r={},i=f(null),a=i,o=!1;function s(n,r,i,s,c){let u=!1,f=d(n,s,i,r);a!==f&&(a=f,l(a.object)),u=p(n,s,i,c),u&&m(n,s,i,c),c!==null&&t.update(c,e.ELEMENT_ARRAY_BUFFER),(u||o)&&(o=!1,b(n,r,i,s),c!==null&&e.bindBuffer(e.ELEMENT_ARRAY_BUFFER,t.get(c).buffer))}function c(){return e.createVertexArray()}function l(t){return e.bindVertexArray(t)}function u(t){return e.deleteVertexArray(t)}function d(e,t,n,i){let a=i.wireframe===!0,o=r[t.id];o===void 0&&(o={},r[t.id]=o);let s=e.isInstancedMesh===!0?e.id:0,l=o[s];l===void 0&&(l={},o[s]=l);let u=l[n.id];u===void 0&&(u={},l[n.id]=u);let d=u[a];return d===void 0&&(d=f(c()),u[a]=d),d}function f(e){let t=[],r=[],i=[];for(let e=0;e<n;e++)t[e]=0,r[e]=0,i[e]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:t,enabledAttributes:r,attributeDivisors:i,object:e,attributes:{},index:null}}function p(e,t,n,r){let i=a.attributes,o=t.attributes,s=0,c=n.getAttributes();for(let t in c)if(c[t].location>=0){let n=i[t],r=o[t];if(r===void 0&&(t===`instanceMatrix`&&e.instanceMatrix&&(r=e.instanceMatrix),t===`instanceColor`&&e.instanceColor&&(r=e.instanceColor)),n===void 0||n.attribute!==r||r&&n.data!==r.data)return!0;s++}return a.attributesNum!==s||a.index!==r}function m(e,t,n,r){let i={},o=t.attributes,s=0,c=n.getAttributes();for(let t in c)if(c[t].location>=0){let n=o[t];n===void 0&&(t===`instanceMatrix`&&e.instanceMatrix&&(n=e.instanceMatrix),t===`instanceColor`&&e.instanceColor&&(n=e.instanceColor));let r={};r.attribute=n,n&&n.data&&(r.data=n.data),i[t]=r,s++}a.attributes=i,a.attributesNum=s,a.index=r}function h(){let e=a.newAttributes;for(let t=0,n=e.length;t<n;t++)e[t]=0}function g(e){_(e,0)}function _(t,n){let r=a.newAttributes,i=a.enabledAttributes,o=a.attributeDivisors;r[t]=1,i[t]===0&&(e.enableVertexAttribArray(t),i[t]=1),o[t]!==n&&(e.vertexAttribDivisor(t,n),o[t]=n)}function v(){let t=a.newAttributes,n=a.enabledAttributes;for(let r=0,i=n.length;r<i;r++)n[r]!==t[r]&&(e.disableVertexAttribArray(r),n[r]=0)}function y(t,n,r,i,a,o,s){s===!0?e.vertexAttribIPointer(t,n,r,a,o):e.vertexAttribPointer(t,n,r,i,a,o)}function b(n,r,i,a){h();let o=a.attributes,s=i.getAttributes(),c=r.defaultAttributeValues;for(let r in s){let i=s[r];if(i.location>=0){let s=o[r];if(s===void 0&&(r===`instanceMatrix`&&n.instanceMatrix&&(s=n.instanceMatrix),r===`instanceColor`&&n.instanceColor&&(s=n.instanceColor)),s!==void 0){let r=s.normalized,o=s.itemSize,c=t.get(s);if(c===void 0)continue;let l=c.buffer,u=c.type,d=c.bytesPerElement,f=u===e.INT||u===e.UNSIGNED_INT||s.gpuType===1013;if(s.isInterleavedBufferAttribute){let t=s.data,c=t.isInterleavedBuffer===!0?t.stride:t.itemSize,p=s.offset;if(t.isInstancedInterleavedBuffer||t.isInstancedBufferAttribute){for(let e=0;e<i.locationSize;e++)_(i.location+e,t.meshPerAttribute);n.isInstancedMesh!==!0&&a._maxInstanceCount===void 0&&(a._maxInstanceCount=t.meshPerAttribute*t.count)}else for(let e=0;e<i.locationSize;e++)g(i.location+e);e.bindBuffer(e.ARRAY_BUFFER,l);for(let e=0;e<i.locationSize;e++)y(i.location+e,o/i.locationSize,u,r,c*d,(p+o/i.locationSize*e)*d,f)}else{if(s.isInstancedBufferAttribute){for(let e=0;e<i.locationSize;e++)_(i.location+e,s.meshPerAttribute);n.isInstancedMesh!==!0&&a._maxInstanceCount===void 0&&(a._maxInstanceCount=s.meshPerAttribute*s.count)}else for(let e=0;e<i.locationSize;e++)g(i.location+e);e.bindBuffer(e.ARRAY_BUFFER,l);for(let e=0;e<i.locationSize;e++)y(i.location+e,o/i.locationSize,u,r,o*d,o/i.locationSize*e*d,f)}}else if(c!==void 0){let t=c[r];if(t!==void 0)switch(t.length){case 2:e.vertexAttrib2fv(i.location,t);break;case 3:e.vertexAttrib3fv(i.location,t);break;case 4:e.vertexAttrib4fv(i.location,t);break;default:e.vertexAttrib1fv(i.location,t)}}}}v()}function x(){T();for(let e in r){let t=r[e];for(let e in t){let n=t[e];for(let e in n){let t=n[e];for(let e in t)u(t[e].object),delete t[e];delete n[e]}}delete r[e]}}function S(e){if(r[e.id]===void 0)return;let t=r[e.id];for(let e in t){let n=t[e];for(let e in n){let t=n[e];for(let e in t)u(t[e].object),delete t[e];delete n[e]}}delete r[e.id]}function C(e){for(let t in r){let n=r[t];for(let t in n){let r=n[t];if(r[e.id]===void 0)continue;let i=r[e.id];for(let e in i)u(i[e].object),delete i[e];delete r[e.id]}}}function w(e){for(let t in r){let n=r[t],i=e.isInstancedMesh===!0?e.id:0,a=n[i];if(a!==void 0){for(let e in a){let t=a[e];for(let e in t)u(t[e].object),delete t[e];delete a[e]}delete n[i],Object.keys(n).length===0&&delete r[t]}}}function T(){E(),o=!0,a!==i&&(a=i,l(a.object))}function E(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:s,reset:T,resetDefaultState:E,dispose:x,releaseStatesOfGeometry:S,releaseStatesOfObject:w,releaseStatesOfProgram:C,initAttributes:h,enableAttribute:g,disableUnusedAttributes:v}}function is(e,t,n){let r;function i(e){r=e}function a(t,i){e.drawArrays(r,t,i),n.update(i,r,1)}function o(t,i,a){a!==0&&(e.drawArraysInstanced(r,t,i,a),n.update(i,r,a))}function s(e,i,a){if(a===0)return;t.get(`WEBGL_multi_draw`).multiDrawArraysWEBGL(r,e,0,i,0,a);let o=0;for(let e=0;e<a;e++)o+=i[e];n.update(o,r,1)}this.setMode=i,this.render=a,this.renderInstances=o,this.renderMultiDraw=s}function as(e,t,n,r){let i;function a(){if(i!==void 0)return i;if(t.has(`EXT_texture_filter_anisotropic`)===!0){let n=t.get(`EXT_texture_filter_anisotropic`);i=e.getParameter(n.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function o(t){return t===1023||r.convert(t)===e.getParameter(e.IMPLEMENTATION_COLOR_READ_FORMAT)}function s(n){let i=n===1016&&(t.has(`EXT_color_buffer_half_float`)||t.has(`EXT_color_buffer_float`));return!(n!==1009&&n!==1015&&!i&&r.convert(n)!==e.getParameter(e.IMPLEMENTATION_COLOR_READ_TYPE))}function c(t){if(t===`highp`){if(e.getShaderPrecisionFormat(e.VERTEX_SHADER,e.HIGH_FLOAT).precision>0&&e.getShaderPrecisionFormat(e.FRAGMENT_SHADER,e.HIGH_FLOAT).precision>0)return`highp`;t=`mediump`}return t===`mediump`&&e.getShaderPrecisionFormat(e.VERTEX_SHADER,e.MEDIUM_FLOAT).precision>0&&e.getShaderPrecisionFormat(e.FRAGMENT_SHADER,e.MEDIUM_FLOAT).precision>0?`mediump`:`lowp`}let l=n.precision===void 0?`highp`:n.precision,u=c(l);u!==l&&(z(`WebGLRenderer:`,l,`not supported, using`,u,`instead.`),l=u);let d=n.reversedDepthBuffer===!0&&t.has(`EXT_clip_control`),f=n.logarithmicDepthBuffer===!0&&d===!1;n.reversedDepthBuffer===!0&&d===!1&&z(`WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.`),n.logarithmicDepthBuffer===!0&&d===!0&&z(`WebGLRenderer: Logarithmic depth buffer is ignored when reversed depth buffer is enabled.`);let p=e.getParameter(e.MAX_TEXTURE_IMAGE_UNITS),m=e.getParameter(e.MAX_VERTEX_TEXTURE_IMAGE_UNITS),h=e.getParameter(e.MAX_TEXTURE_SIZE),g=e.getParameter(e.MAX_CUBE_MAP_TEXTURE_SIZE),_=e.getParameter(e.MAX_VERTEX_ATTRIBS),v=e.getParameter(e.MAX_VERTEX_UNIFORM_VECTORS),y=e.getParameter(e.MAX_VARYING_VECTORS),b=e.getParameter(e.MAX_FRAGMENT_UNIFORM_VECTORS),x=e.getParameter(e.MAX_SAMPLES),S=e.getParameter(e.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:a,getMaxPrecision:c,textureFormatReadable:o,textureTypeReadable:s,precision:l,logarithmicDepthBuffer:f,reversedDepthBuffer:d,maxTextures:p,maxVertexTextures:m,maxTextureSize:h,maxCubemapSize:g,maxAttributes:_,maxVertexUniforms:v,maxVaryings:y,maxFragmentUniforms:b,maxSamples:x,samples:S}}function os(e){let t=this,n=null,r=0,i=!1,a=!1,o=new hi,s=new W,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(e,t){let n=e.length!==0||t||r!==0||i;return i=t,r=e.length,n},this.beginShadows=function(){a=!0,u(null)},this.endShadows=function(){a=!1},this.setGlobalState=function(e,t){n=u(e,t,0)},this.setState=function(t,o,s){let d=t.clippingPlanes,f=t.clipIntersection,p=t.clipShadows,m=e.get(t);if(!i||d===null||d.length===0||a&&!p)a?u(null):l();else{let e=a?0:r,t=e*4,i=m.clippingState||null;c.value=i,i=u(d,o,t,s);for(let e=0;e!==t;++e)i[e]=n[e];m.clippingState=i,this.numIntersection=f?this.numPlanes:0,this.numPlanes+=e}};function l(){c.value!==n&&(c.value=n,c.needsUpdate=r>0),t.numPlanes=r,t.numIntersection=0}function u(e,n,r,i){let a=e===null?0:e.length,l=null;if(a!==0){if(l=c.value,i!==!0||l===null){let t=r+a*4,i=n.matrixWorldInverse;s.getNormalMatrix(i),(l===null||l.length<t)&&(l=new Float32Array(t));for(let t=0,n=r;t!==a;++t,n+=4)o.copy(e[t]).applyMatrix4(i,s),o.normal.toArray(l,n),l[n+3]=o.constant}c.value=l,c.needsUpdate=!0}return t.numPlanes=a,t.numIntersection=0,l}}var ss=class extends Dn{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let n={width:e,height:e,depth:1},r=[n,n,n,n,n,n];this.texture=new Sa(r),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},r=new Da(5,5,5),i=new za({name:`CubemapFromEquirect`,uniforms:ja(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:1,blending:0});i.uniforms.tEquirect.value=t;let a=new q(r,i),o=t.minFilter;return t.minFilter===1008&&(t.minFilter=re),new Mo(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t=!0,n=!0,r=!0){let i=e.getRenderTarget();for(let i=0;i<6;i++)e.setRenderTarget(this,i),e.clear(t,n,r);e.setRenderTarget(i)}},cs=256,ls=3,us=20,ds=256,fs=16,ps=3,ms=new U,hs=new K,gs=class e{constructor(e){this._renderer=e,this._cubeSize=0,this._sourceTarget=null,this._cubeCamera=new Mo(1,10,null),this._boxMesh=new q(new Da(5,5,5),null),this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null,this._integrationMaterial=null}fromScene(e,t=0,n=.1,r=100,i={}){let{size:a=256,position:o=ms}=i,s=this._renderer;this._setSize(a);let c=this._allocateTarget(),l=this._getSourceTarget(!0);t>0&&(l.texture.mipmapsAutoUpdate=!1);let u=s.autoClear,d=s.autoClearColor,f=s.autoClearDepth,p=s.autoClearStencil,m=e.background;s.autoClear=!0,s.autoClearColor=!0,s.autoClearDepth=!0,s.autoClearStencil=!0,m===null&&(e.background=s.getClearColor(hs));let h=new Mo(n,r,l);return h.position.copy(o),h.update(s,e),s.autoClear=u,s.autoClearColor=d,s.autoClearDepth=f,s.autoClearStencil=p,e.background=m,t>0&&(l.texture.mipmapsAutoUpdate=!0,this._blur(c,t)),this._applyPMREM(c),c}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Cs(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Ss(),this._compileMaterial(this._equirectMaterial))}dispose(){this._sourceTarget!==null&&this._sourceTarget.dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._integrationMaterial!==null&&this._integrationMaterial.dispose(),this._boxMesh.geometry.dispose()}static lodToRoughness(e,t){return t>0?1-Math.sqrt(1-e/t):0}_setSize(e){this._cubeSize=Math.max(cs,tn(e))}_fromTexture(e,t){e.mapping===301||e.mapping===302?this._setSize(e.image.length===0?cs:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4);let n=t||this._allocateTarget();return this._textureToCubemap(e),this._applyPMREM(n),n}_allocateTarget(){let e=this._cubeSize,t=_s(e,!1,!1),n=Math.log2(e)-ls;for(let r=0;r<=n;r++)t.texture.mipmaps.push({width:e>>r,height:e>>r});return t.texture.name=`PMREM`,t.texture.isPMREMTexture=!0,t}_getSourceTarget(e=!1){let t=this._cubeSize,n=this._sourceTarget;return(n===null||n.width!==t||e&&n.depthBuffer===!1)&&(n!==null&&n.dispose(),this._sourceTarget=_s(t,!0,e)),this._sourceTarget}_compileMaterial(e){this._boxMesh.material=e,this._renderer.compile(this._boxMesh,this._cubeCamera.children[0])}_renderCube(e,t,n){let r=this._boxMesh,i=this._cubeCamera;r.material=n,i.renderTarget=e,i.activeMipmapLevel=t;let a=e.width>>t;e.viewport.set(0,0,a,a),i.update(this._renderer,r),e.viewport.set(0,0,e.width,e.height)}_textureToCubemap(e){let t;e.mapping===301||e.mapping===302?(this._cubemapMaterial===null&&(this._cubemapMaterial=Cs()),t=this._cubemapMaterial,t.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):(this._equirectMaterial===null&&(this._equirectMaterial=Ss()),t=this._equirectMaterial),t.uniforms.envMap.value=e,this._renderCube(this._getSourceTarget(),0,t)}_applyPMREM(t){this._ggxMaterial===null&&(this._ggxMaterial=ys(),this._integrationMaterial=bs());let n=this._cubeSize,r=t.texture.mipmaps.length-1,i=this._ggxMaterial.uniforms;i.envMap.value=this._sourceTarget.texture;let a=this._integrationMaterial.uniforms;a.envMap.value=this._sourceTarget.texture,a.sourceLod.value=Math.log2(n/fs);for(let o=0;o<=r;o++){let s=e.lodToRoughness(o,r);if(o>r-ps)a.roughness.value=s,this._renderCube(t,o,this._integrationMaterial);else{let e=s>0?Math.log2(n)+.5*Math.log2(6/(ds*s**4))+.5:0;i.roughness.value=s,i.lodBias.value=e,this._renderCube(t,o,this._ggxMaterial)}}}_blur(e,t){this._blurMaterial===null&&(this._blurMaterial=xs());let n=this._blurMaterial,r=n.uniforms,i=this._sourceTarget;r.sigma.value=Math.min(t,Math.PI)/Math.SQRT2,r.envMap.value=i.texture,this._renderCube(e,0,n),r.envMap.value=e.texture,this._renderCube(i,0,n)}};function _s(e,t,n){return new ss(e,{minFilter:ae,generateMipmaps:t,type:pe,colorSpace:gt,depthBuffer:n})}function vs(e,t,n){return new za({name:e,uniforms:t,vertexShader:J.cube_vert,fragmentShader:n,side:1,blending:0,depthTest:!1,depthWrite:!1})}function ys(){return vs(`PMREMGGXConvolution`,{envMap:{value:null},roughness:{value:0},lodBias:{value:0}},`

		#define GGX_SAMPLES ${ds}u

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float roughness;
		uniform float lodBias;

		#include <common>

		// Van der Corput radical inverse
		float radicalInverse_VdC( uint bits ) {

			bits = ( bits << 16u ) | ( bits >> 16u );
			bits = ( ( bits & 0x55555555u ) << 1u ) | ( ( bits & 0xAAAAAAAAu ) >> 1u );
			bits = ( ( bits & 0x33333333u ) << 2u ) | ( ( bits & 0xCCCCCCCCu ) >> 2u );
			bits = ( ( bits & 0x0F0F0F0Fu ) << 4u ) | ( ( bits & 0xF0F0F0F0u ) >> 4u );
			bits = ( ( bits & 0x00FF00FFu ) << 8u ) | ( ( bits & 0xFF00FF00u ) >> 8u );
			return float( bits ) * 2.3283064365386963e-10; // / 0x100000000

		}

		// Hammersley sequence
		vec2 hammersley( uint i, uint N ) {

			return vec2( float( i ) / float( N ), radicalInverse_VdC( i ) );

		}

		void main() {

			vec3 N = normalize( vWorldDirection );

			// For very low roughness, just sample the environment directly
			if ( roughness < 0.001 ) {

				gl_FragColor = vec4( textureLod( envMap, N, 0.0 ).rgb, 1.0 );
				return;

			}

			float alpha = roughness * roughness;
			float alpha2 = alpha * alpha;

			// Tangent space basis for VNDF sampling
			vec3 up = abs( N.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
			vec3 tangent = normalize( cross( up, N ) );
			vec3 bitangent = cross( N, tangent );

			vec3 prefilteredColor = vec3( 0.0 );
			float totalWeight = 0.0;

			for ( uint i = 0u; i < GGX_SAMPLES; i ++ ) {

				vec2 Xi = hammersley( i, GGX_SAMPLES );

				// With V = N, sample the reflected direction directly.
				float invQ = 1.0 / ( 1.0 - Xi.x + alpha2 * Xi.x );
				float NdotL = ( 1.0 - Xi.x - alpha2 * Xi.x ) * invQ;

				if ( NdotL > 0.0 ) {

					float phi = 2.0 * PI * Xi.y;
					float sinTheta = 2.0 * alpha * sqrt( Xi.x * ( 1.0 - Xi.x ) ) * invQ;
					vec3 L = N * NdotL + ( tangent * cos( phi ) + bitangent * sin( phi ) ) * sinTheta;

					// Match the source mip to the sample's solid angle. The terms
					// independent of the sample are precomputed in lodBias.
					float d = alpha2 * invQ;
					float lod = max( log2( d ) + lodBias, 0.0 );

					// Weight by NdotL for the split-sum approximation
					prefilteredColor += textureLod( envMap, L, lod ).rgb * NdotL;
					totalWeight += NdotL;

				}

			}

			gl_FragColor = vec4( prefilteredColor / totalWeight, 1.0 );

		}
	`)}function bs(){return vs(`PMREMGGXIntegration`,{envMap:{value:null},roughness:{value:0},sourceLod:{value:0},sourceSize:{value:fs}},`

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float roughness;
		uniform float sourceLod;
		uniform int sourceSize;

		void main() {

			vec3 N = normalize( vWorldDirection );

			float alpha = roughness * roughness;
			float alpha2 = alpha * alpha;

			float texelSize = 2.0 / float( sourceSize );

			vec3 prefilteredColor = vec3( 0.0 );
			float totalWeight = 0.0;

			// Pair opposite texels: only the one in N's hemisphere contributes.
			for ( int face = 0; face < 3; face ++ ) {

				for ( int y = 0; y < sourceSize; y ++ ) {

					for ( int x = 0; x < sourceSize; x ++ ) {

						vec2 uv = ( vec2( x, y ) + 0.5 ) * texelSize - 1.0;
						vec3 texelDirection = face == 0 ? vec3( 1.0, uv ) : ( face == 1 ? vec3( uv.x, 1.0, uv.y ) : vec3( uv, 1.0 ) );

						float invDistance = inversesqrt( 1.0 + dot( uv, uv ) );
						float NdotL = dot( N, texelDirection );
						texelDirection *= NdotL < 0.0 ? - 1.0 : 1.0;
						NdotL = abs( NdotL ) * invDistance;

						// With V = N, NdotH squared is ( 1 + NdotL ) / 2. Common factors
						// in the GGX distribution and texel solid angle cancel when normalized.
						float d = 1.0 + alpha2 + ( alpha2 - 1.0 ) * NdotL;
						float weight = NdotL * invDistance * invDistance * invDistance / ( d * d );

						prefilteredColor += textureLod( envMap, texelDirection, sourceLod ).rgb * weight;
						totalWeight += weight;

					}

				}

			}

			gl_FragColor = vec4( prefilteredColor / totalWeight, 1.0 );

		}
	`)}function xs(){return vs(`PMREMSphericalGaussianBlur`,{envMap:{value:null},sigma:{value:0}},`

		#define SAMPLES ${us}
		#define GOLDEN_ANGLE 2.39996322973

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float sigma;

		#include <common>

		void main() {

			vec3 outputDirection = normalize( vWorldDirection );

			vec3 up = abs( outputDirection.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
			vec3 tangent = normalize( cross( up, outputDirection ) );
			vec3 bitangent = cross( outputDirection, tangent );

			// Truncate the kernel at three standard deviations or at the antipode.
			float thetaMax = min( 3.0 * sigma, PI );
			float truncation = 1.0 - exp( - 0.5 * thetaMax * thetaMax / ( sigma * sigma ) );

			vec3 accumColor = vec3( 0.0 );
			float accumWeight = 0.0;

			for ( int i = 0; i < SAMPLES; i ++ ) {

				// Stratified inverse-CDF sampling of the Gaussian, placed on a golden-angle spiral.
				float stratum = ( float( i ) + 0.5 ) / float( SAMPLES );
				float theta = sigma * sqrt( - 2.0 * log( 1.0 - stratum * truncation ) );
				float phi = float( i ) * GOLDEN_ANGLE;

				vec3 offset = cos( phi ) * tangent + sin( phi ) * bitangent;
				vec3 sampleDirection = cos( theta ) * outputDirection + sin( theta ) * offset;

				// Correct the planar sample density to solid angle.
				float weight = sin( theta ) / theta;

				accumColor += weight * textureLod( envMap, sampleDirection, 0.0 ).rgb;
				accumWeight += weight;

			}

			gl_FragColor = vec4( accumColor / accumWeight, 1.0 );

		}
	`)}function Ss(){return vs(`PMREMEquirectangularToCubemap`,{envMap:{value:null}},`

		varying vec3 vWorldDirection;

		uniform sampler2D envMap;

		#include <common>

		void main() {

			// Average four subpixel samples to preserve small, bright features.
			vec3 direction = normalize( vWorldDirection );
			vec3 dx = dFdx( direction ) * 0.25;
			vec3 dy = dFdy( direction ) * 0.25;

			vec3 color = textureLod( envMap, equirectUv( normalize( direction - dx - dy ) ), 0.0 ).rgb;
			color += textureLod( envMap, equirectUv( normalize( direction + dx - dy ) ), 0.0 ).rgb;
			color += textureLod( envMap, equirectUv( normalize( direction - dx + dy ) ), 0.0 ).rgb;
			color += textureLod( envMap, equirectUv( normalize( direction + dx + dy ) ), 0.0 ).rgb;
			gl_FragColor = vec4( color * 0.25, 1.0 );

		}
	`)}function Cs(){return vs(`PMREMCubemapToCubemap`,{envMap:{value:null},flipEnvMap:{value:-1}},`

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float flipEnvMap;

		void main() {

			gl_FragColor = vec4( textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) ).rgb, 1.0 );

		}
	`)}function ws(e){let t=new WeakMap,n=new WeakMap,r=null;function i(e,t=!1){return e==null?null:t?o(e):a(e)}function a(n){if(n&&n.isTexture){let r=n.mapping;if(r===303||r===304){if(t.has(n)){let e=t.get(n).texture;return s(e,n.mapping)}{let r=n.image;if(r&&r.height>0){let i=new ss(r.height);return i.fromEquirectangularTexture(e,n),t.set(n,i),n.addEventListener(`dispose`,l),s(i.texture,n.mapping)}return null}}}return n}function o(t){if(t&&t.isTexture&&t.isPMREMTexture!==!0){let i=t.mapping,a=i===303||i===304,o=i===301||i===302;if(a||o){let i=n.get(t),s=i===void 0?0:i.texture.pmremVersion;if(t.isRenderTargetTexture&&t.pmremVersion!==s)return r===null&&(r=new gs(e)),i=a?r.fromEquirectangular(t,i):r.fromCubemap(t,i),i.texture.pmremVersion=t.pmremVersion,n.set(t,i),i.texture;if(i!==void 0)return i.texture;{let s=t.image;return a&&s&&s.height>0||o&&s&&c(s)?(r===null&&(r=new gs(e)),i=a?r.fromEquirectangular(t):r.fromCubemap(t),i.texture.pmremVersion=t.pmremVersion,n.set(t,i),t.addEventListener(`dispose`,u),i.texture):null}}}return t}function s(e,t){return t===303?e.mapping=301:t===304&&(e.mapping=302),e}function c(e){let t=0;for(let n=0;n<6;n++)e[n]!==void 0&&t++;return t===6}function l(e){let n=e.target;n.removeEventListener(`dispose`,l);let r=t.get(n);r!==void 0&&(t.delete(n),r.dispose())}function u(e){let t=e.target;t.removeEventListener(`dispose`,u);let r=n.get(t);r!==void 0&&(n.delete(t),r.dispose())}function d(){t=new WeakMap,n=new WeakMap,r!==null&&(r.dispose(),r=null)}return{get:i,dispose:d}}function Ts(e){let t={};function n(n){if(t[n]!==void 0)return t[n];let r=e.getExtension(n);return t[n]=r,r}return{has:function(e){return n(e)!==null},init:function(){n(`EXT_color_buffer_float`),n(`WEBGL_clip_cull_distance`),n(`OES_texture_float_linear`),n(`EXT_color_buffer_half_float`),n(`WEBGL_multisampled_render_to_texture`),n(`WEBGL_render_shared_exponent`)},get:function(e){let t=n(e);return t===null&&At(`WebGLRenderer: `+e+` extension not supported.`),t}}}function Es(e,t,n,r){let i={},a=new WeakMap,o=new FinalizationRegistry(e=>delete i[e]);function s(e){c(e.target)}function c(e){e.index!==null&&t.remove(e.index);for(let n in e.attributes)t.remove(e.attributes[n]);e.removeEventListener(`dispose`,s),delete i[e.id],o.unregister(e);let c=a.get(e);c&&(t.remove(c),a.delete(e)),r.releaseStatesOfGeometry(e),e.isInstancedBufferGeometry===!0&&delete e._maxInstanceCount,n.memory.geometries--}function l(e,t){return i[t.id]===void 0&&(t.addEventListener(`dispose`,s),i[t.id]=new WeakRef(t),o.register(t,t.id,t),n.memory.geometries++),t}function u(n){let r=n.attributes;for(let n in r)t.update(r[n],e.ARRAY_BUFFER)}function d(e){let n=e.index,r=e.attributes.position,i=0;if(r===void 0)return;let o=n===null?r.array.length/3-1:n.array.length,s=new(r.count>=65535?Jr:qr)(Math.ceil(o/3)*6,1),c=s.array;if(n!==null){let e=n.array;i=n.version;for(let t=0,n=0;t<o;t+=3){let r=e[t+0],i=e[t+1],a=e[t+2];c[n++]=r,c[n++]=i,c[n++]=i,c[n++]=a,c[n++]=a,c[n++]=r}}else{i=r.version;for(let e=0,t=0;e<o;e+=3){let n=e+0,r=e+1,i=e+2;c[t++]=n,c[t++]=r,c[t++]=r,c[t++]=i,c[t++]=i,c[t++]=n}}s.version=i;let l=a.get(e);l&&t.remove(l),a.set(e,s)}function f(e){let t=a.get(e);if(t){let n=e.index;n!==null&&t.version<n.version&&d(e)}else d(e);return a.get(e)}function p(){for(let e in i){let t=i[e].deref();t!==void 0&&c(t)}}return{get:l,update:u,getWireframeAttribute:f,dispose:p}}function Ds(e,t,n){let r;function i(e){r=e}let a,o;function s(e){a=e.type,o=e.bytesPerElement}function c(t,i){e.drawElements(r,i,a,t*o),n.update(i,r,1)}function l(t,i,s){s!==0&&(e.drawElementsInstanced(r,i,a,t*o,s),n.update(i,r,s))}function u(e,i,o){if(o===0)return;t.get(`WEBGL_multi_draw`).multiDrawElementsWEBGL(r,i,0,a,e,0,o);let s=0;for(let e=0;e<o;e++)s+=i[e];n.update(s,r,1)}this.setMode=i,this.setIndex=s,this.render=c,this.renderInstances=l,this.renderMultiDraw=u}function Os(e){let t={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function r(t,r,i){switch(n.calls++,r){case e.TRIANGLES:n.triangles+=t/3*i;break;case e.LINES:n.lines+=t/2*i;break;case e.LINE_STRIP:n.lines+=i*(t-1);break;case e.LINE_LOOP:n.lines+=i*t;break;case e.POINTS:n.points+=i*t;break;default:B(`WebGLInfo: Unknown draw mode:`,r)}}function i(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:t,render:n,programs:null,autoReset:!0,reset:i,update:r}}function ks(e,t,n){let r=new WeakMap,i=new Tn;function a(a,o,s){let c=a.morphTargetInfluences,l=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,u=l===void 0?0:l.length,d=r.get(o);if(d===void 0||d.count!==u){d!==void 0&&d.texture.dispose();let e=o.morphAttributes.position!==void 0,n=o.morphAttributes.normal!==void 0,a=o.morphAttributes.color!==void 0,s=o.morphAttributes.position||[],c=o.morphAttributes.normal||[],l=o.morphAttributes.color||[],f=0;e===!0&&(f=1),n===!0&&(f=2),a===!0&&(f=3);let p=o.attributes.position.count*f,m=1;p>t.maxTextureSize&&(m=Math.ceil(p/t.maxTextureSize),p=t.maxTextureSize);let h=new Float32Array(p*m*4*u),g=new On(h,p,m,u);g.type=fe,g.needsUpdate=!0;let _=f*4;for(let t=0;t<u;t++){let r=s[t],o=c[t],u=l[t],d=p*m*4*t;for(let t=0;t<r.count;t++){let s=t*_;e===!0&&(i.fromBufferAttribute(r,t),h[d+s+0]=i.x,h[d+s+1]=i.y,h[d+s+2]=i.z,h[d+s+3]=0),n===!0&&(i.fromBufferAttribute(o,t),h[d+s+4]=i.x,h[d+s+5]=i.y,h[d+s+6]=i.z,h[d+s+7]=0),a===!0&&(i.fromBufferAttribute(u,t),h[d+s+8]=i.x,h[d+s+9]=i.y,h[d+s+10]=i.z,h[d+s+11]=u.itemSize===4?i.w:1)}}d={count:u,texture:g,size:new H(p,m)},r.set(o,d);function v(){g.dispose(),r.delete(o),o.removeEventListener(`dispose`,v)}o.addEventListener(`dispose`,v)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)s.getUniforms().setValue(e,`morphTexture`,a.morphTexture,n);else{let t=0;for(let e=0;e<c.length;e++)t+=c[e];let n=o.morphTargetsRelative?1:1-t;s.getUniforms().setValue(e,`morphTargetBaseInfluence`,n),s.getUniforms().setValue(e,`morphTargetInfluences`,c)}s.getUniforms().setValue(e,`morphTargetsTexture`,d.texture,n),s.getUniforms().setValue(e,`morphTargetsTextureSize`,d.size)}return{update:a}}function As(e,t,n,r,i){let a=new WeakMap;function o(r){let o=i.render.frame,s=r.geometry,l=t.get(r,s);if(a.get(l)!==o&&(t.update(l),a.set(l,o)),r.isInstancedMesh&&(r.hasEventListener(`dispose`,c)===!1&&r.addEventListener(`dispose`,c),a.get(r)!==o&&(n.update(r.instanceMatrix,e.ARRAY_BUFFER),r.instanceColor!==null&&n.update(r.instanceColor,e.ARRAY_BUFFER),a.set(r,o))),r.isSkinnedMesh){let e=r.skeleton;a.get(e)!==o&&(e.update(),a.set(e,o))}return l}function s(){a=new WeakMap}function c(e){let t=e.target;t.removeEventListener(`dispose`,c),r.releaseStatesOfObject(t),n.remove(t.instanceMatrix),t.instanceColor!==null&&n.remove(t.instanceColor)}return{update:o,dispose:s}}var js={1:`LINEAR_TONE_MAPPING`,2:`REINHARD_TONE_MAPPING`,3:`CINEON_TONE_MAPPING`,4:`ACES_FILMIC_TONE_MAPPING`,6:`AGX_TONE_MAPPING`,7:`NEUTRAL_TONE_MAPPING`,5:`CUSTOM_TONE_MAPPING`};function Ms(e,t,n,r,i,a){let o=new Dn(t,n,{type:e,depthBuffer:i,stencilBuffer:a,samples:r?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),s=null,c=null,l=null,u=new si;u.setAttribute(`position`,new Yr([-1,3,0,-1,-1,0,3,-1,0],3)),u.setAttribute(`uv`,new Yr([0,2,0,0,2,0],2));let d=new Ba({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),f=new q(u,d),p=new Do(-1,1,1,-1,0,1),m=null,h=null,g=!1,_,v=null,y=[],b=!1;this.setSize=function(e,t){o.setSize(e,t),s!==null&&s.setSize(e,t),c!==null&&c.setSize(e,t);for(let n=0;n<y.length;n++){let r=y[n];r.setSize&&r.setSize(e,t)}},this.setEffects=function(e){y=e,b=y.length>0&&y[0].isRenderPass===!0;let t=o.width,n=o.height;y.length>0&&s===null&&(s=new Dn(t,n,{type:pe,depthBuffer:!1,stencilBuffer:!1}),c=new Dn(t,n,{type:pe,depthBuffer:!1,stencilBuffer:!1}));let r=i===!0&&y.some(e=>e.needsDepthTexture===!0);r!==(o.depthTexture!==null)&&(r===!0&&l===null&&(l=new wa(t,n),a===!0&&(l.format=Ce,l.type=ge)),o.dispose(),o.depthTexture=r?l:null,o.resolveDepthBuffer=r,o.storeMultisampledDepthBuffer=r);for(let e=0;e<y.length;e++){let i=y[e];i.setSize&&i.setSize(t,n),r&&i.needsDepthTexture===!0&&i.setDepthTexture&&i.setDepthTexture(l)}},this.begin=function(e,t){if(g||e.toneMapping===0&&y.length===0)return!1;if(v=t,t!==null){let e=t.width,n=t.height;(o.width!==e||o.height!==n)&&this.setSize(e,n)}return b===!1&&e.setRenderTarget(o),_=e.toneMapping,e.toneMapping=0,!0},this.hasRenderPass=function(){return b},this.end=function(e,t){e.toneMapping=_,g=!0;let n=o,r=s;for(let i=0;i<y.length;i++){let a=y[i];a.enabled!==!1&&(a.render(e,r,n,t),a.needsSwap!==!1&&(n=r,r=r===s?c:s))}if(m!==e.outputColorSpace||h!==e.toneMapping){m=e.outputColorSpace,h=e.toneMapping,d.defines={},G.getTransfer(m)===`srgb`&&(d.defines.SRGB_TRANSFER=``);let t=js[h];t&&(d.defines[t]=``),d.needsUpdate=!0}d.uniforms.tDiffuse.value=n.texture,e.setRenderTarget(v),e.render(f,p),v=null,g=!1},this.isCompositing=function(){return g},this.dispose=function(){o.dispose(),s!==null&&s.dispose(),c!==null&&c.dispose(),u.dispose(),d.dispose()}}var Ns=new wn,Ps=new wa(1,1),Fs=new Ta(1),Is=new On,Ls=new kn,Rs=new Sa,zs=[],Bs=[],Vs=new Float32Array(16),Hs=new Float32Array(9),Us=new Float32Array(4);function Ws(e,t,n){let r=e[0];if(r<=0||r>0)return e;let i=t*n,a=zs[i];if(a===void 0&&(a=new Float32Array(i),zs[i]=a),t!==0){r.toArray(a,0);for(let r=1,i=0;r!==t;++r)i+=n,e[r].toArray(a,i)}return a}function Gs(e,t){if(e.length!==t.length)return!1;for(let n=0,r=e.length;n<r;n++)if(e[n]!==t[n])return!1;return!0}function Ks(e,t){for(let n=0,r=t.length;n<r;n++)e[n]=t[n]}function qs(e,t){let n=Bs[t];n===void 0&&(n=new Int32Array(t),Bs[t]=n);for(let r=0;r!==t;++r)n[r]=e.allocateTextureUnit();return n}function Js(e,t){let n=this.cache;n[0]!==t&&(e.uniform1f(this.addr,t),n[0]=t)}function Ys(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(e.uniform2f(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(Gs(n,t))return;e.uniform2fv(this.addr,t),Ks(n,t)}}function Xs(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(e.uniform3f(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else if(t.r!==void 0)(n[0]!==t.r||n[1]!==t.g||n[2]!==t.b)&&(e.uniform3f(this.addr,t.r,t.g,t.b),n[0]=t.r,n[1]=t.g,n[2]=t.b);else{if(Gs(n,t))return;e.uniform3fv(this.addr,t),Ks(n,t)}}function Zs(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(e.uniform4f(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(Gs(n,t))return;e.uniform4fv(this.addr,t),Ks(n,t)}}function Qs(e,t){let n=this.cache,r=t.elements;if(r===void 0){if(Gs(n,t))return;e.uniformMatrix2fv(this.addr,!1,t),Ks(n,t)}else{if(Gs(n,r))return;Us.set(r),e.uniformMatrix2fv(this.addr,!1,Us),Ks(n,r)}}function $s(e,t){let n=this.cache,r=t.elements;if(r===void 0){if(Gs(n,t))return;e.uniformMatrix3fv(this.addr,!1,t),Ks(n,t)}else{if(Gs(n,r))return;Hs.set(r),e.uniformMatrix3fv(this.addr,!1,Hs),Ks(n,r)}}function ec(e,t){let n=this.cache,r=t.elements;if(r===void 0){if(Gs(n,t))return;e.uniformMatrix4fv(this.addr,!1,t),Ks(n,t)}else{if(Gs(n,r))return;Vs.set(r),e.uniformMatrix4fv(this.addr,!1,Vs),Ks(n,r)}}function tc(e,t){let n=this.cache;n[0]!==t&&(e.uniform1i(this.addr,t),n[0]=t)}function nc(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(e.uniform2i(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(Gs(n,t))return;e.uniform2iv(this.addr,t),Ks(n,t)}}function rc(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(e.uniform3i(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else{if(Gs(n,t))return;e.uniform3iv(this.addr,t),Ks(n,t)}}function ic(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(e.uniform4i(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(Gs(n,t))return;e.uniform4iv(this.addr,t),Ks(n,t)}}function ac(e,t){let n=this.cache;n[0]!==t&&(e.uniform1ui(this.addr,t),n[0]=t)}function oc(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(e.uniform2ui(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(Gs(n,t))return;e.uniform2uiv(this.addr,t),Ks(n,t)}}function sc(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(e.uniform3ui(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else{if(Gs(n,t))return;e.uniform3uiv(this.addr,t),Ks(n,t)}}function cc(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(e.uniform4ui(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(Gs(n,t))return;e.uniform4uiv(this.addr,t),Ks(n,t)}}function lc(e){return e.version===0&&(e.compareFunction=519,e.needsUpdate=!0),e}function uc(e,t,n){let r=this.cache,i=n.allocateTextureUnit();r[0]!==i&&(e.uniform1i(this.addr,i),r[0]=i);let a;a=this.type===e.SAMPLER_2D_SHADOW?lc(Ps):Ns,n.setTexture2D(t||a,i)}function dc(e,t,n){let r=this.cache,i=n.allocateTextureUnit();r[0]!==i&&(e.uniform1i(this.addr,i),r[0]=i),n.setTexture3D(t||Ls,i)}function fc(e,t,n){let r=this.cache,i=n.allocateTextureUnit();r[0]!==i&&(e.uniform1i(this.addr,i),r[0]=i);let a;a=this.type===e.SAMPLER_CUBE_SHADOW?lc(Fs):Rs,n.setTextureCube(t||a,i)}function pc(e,t,n){let r=this.cache,i=n.allocateTextureUnit();r[0]!==i&&(e.uniform1i(this.addr,i),r[0]=i),n.setTexture2DArray(t||Is,i)}function mc(e){switch(e){case 5126:return Js;case 35664:return Ys;case 35665:return Xs;case 35666:return Zs;case 35674:return Qs;case 35675:return $s;case 35676:return ec;case 5124:case 35670:return tc;case 35667:case 35671:return nc;case 35668:case 35672:return rc;case 35669:case 35673:return ic;case 5125:return ac;case 36294:return oc;case 36295:return sc;case 36296:return cc;case 35678:case 36198:case 36298:case 36306:case 35682:return uc;case 35679:case 36299:case 36307:return dc;case 35680:case 36300:case 36308:case 36293:return fc;case 36289:case 36303:case 36311:case 36292:return pc}}function hc(e,t){e.uniform1fv(this.addr,t)}function gc(e,t){let n=Ws(t,this.size,2);e.uniform2fv(this.addr,n)}function _c(e,t){let n=Ws(t,this.size,3);e.uniform3fv(this.addr,n)}function vc(e,t){let n=Ws(t,this.size,4);e.uniform4fv(this.addr,n)}function yc(e,t){let n=Ws(t,this.size,4);e.uniformMatrix2fv(this.addr,!1,n)}function bc(e,t){let n=Ws(t,this.size,9);e.uniformMatrix3fv(this.addr,!1,n)}function xc(e,t){let n=Ws(t,this.size,16);e.uniformMatrix4fv(this.addr,!1,n)}function Sc(e,t){e.uniform1iv(this.addr,t)}function Cc(e,t){e.uniform2iv(this.addr,t)}function wc(e,t){e.uniform3iv(this.addr,t)}function Tc(e,t){e.uniform4iv(this.addr,t)}function Ec(e,t){e.uniform1uiv(this.addr,t)}function Dc(e,t){e.uniform2uiv(this.addr,t)}function Oc(e,t){e.uniform3uiv(this.addr,t)}function kc(e,t){e.uniform4uiv(this.addr,t)}function Ac(e,t,n){let r=this.cache,i=t.length,a=qs(n,i);Gs(r,a)||(e.uniform1iv(this.addr,a),Ks(r,a));let o;o=this.type===e.SAMPLER_2D_SHADOW?lc(Ps):Ns;for(let e=0;e!==i;++e)n.setTexture2D(t[e]||o,a[e])}function jc(e,t,n){let r=this.cache,i=t.length,a=qs(n,i);Gs(r,a)||(e.uniform1iv(this.addr,a),Ks(r,a));for(let e=0;e!==i;++e)n.setTexture3D(t[e]||Ls,a[e])}function Mc(e,t,n){let r=this.cache,i=t.length,a=qs(n,i);Gs(r,a)||(e.uniform1iv(this.addr,a),Ks(r,a));let o;o=this.type===e.SAMPLER_CUBE_SHADOW?lc(Fs):Rs;for(let e=0;e!==i;++e)n.setTextureCube(t[e]||o,a[e])}function Nc(e,t,n){let r=this.cache,i=t.length,a=qs(n,i);Gs(r,a)||(e.uniform1iv(this.addr,a),Ks(r,a));for(let e=0;e!==i;++e)n.setTexture2DArray(t[e]||Is,a[e])}function Pc(e){switch(e){case 5126:return hc;case 35664:return gc;case 35665:return _c;case 35666:return vc;case 35674:return yc;case 35675:return bc;case 35676:return xc;case 5124:case 35670:return Sc;case 35667:case 35671:return Cc;case 35668:case 35672:return wc;case 35669:case 35673:return Tc;case 5125:return Ec;case 36294:return Dc;case 36295:return Oc;case 36296:return kc;case 35678:case 36198:case 36298:case 36306:case 35682:return Ac;case 35679:case 36299:case 36307:return jc;case 35680:case 36300:case 36308:case 36293:return Mc;case 36289:case 36303:case 36311:case 36292:return Nc}}var Fc=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=mc(t.type)}},Ic=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=Pc(t.type)}},Lc=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){let r=this.seq;for(let i=0,a=r.length;i!==a;++i){let a=r[i];a.setValue(e,t[a.id],n)}}},Rc=/(\w+)(\])?(\[|\.)?/g;function zc(e,t){e.seq.push(t),e.map[t.id]=t}function Bc(e,t,n){let r=e.name,i=r.length;for(Rc.lastIndex=0;;){let a=Rc.exec(r),o=Rc.lastIndex,s=a[1],c=a[2]===`]`,l=a[3];if(c&&(s|=0),l===void 0||l===`[`&&o+2===i){zc(n,l===void 0?new Fc(s,e,t):new Ic(s,e,t));break}{let e=n.map[s];e===void 0&&(e=new Lc(s),zc(n,e)),n=e}}}var Vc=class{constructor(e,t){this.seq=[],this.map={};let n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let r=0;r<n;++r){let n=e.getActiveUniform(t,r);Bc(n,e.getUniformLocation(t,n.name),this)}let r=[],i=[];for(let t of this.seq)t.type===e.SAMPLER_2D_SHADOW||t.type===e.SAMPLER_CUBE_SHADOW||t.type===e.SAMPLER_2D_ARRAY_SHADOW?r.push(t):i.push(t);r.length>0&&(this.seq=r.concat(i))}setValue(e,t,n,r){let i=this.map[t];i!==void 0&&i.setValue(e,n,r)}setOptional(e,t,n){let r=t[n];r!==void 0&&this.setValue(e,n,r)}static upload(e,t,n,r){for(let i=0,a=t.length;i!==a;++i){let a=t[i],o=n[a.id];o.needsUpdate!==!1&&a.setValue(e,o.value,r)}}static seqWithValue(e,t){let n=[];for(let r=0,i=e.length;r!==i;++r){let i=e[r];i.id in t&&n.push(i)}return n}};function Hc(e,t,n){let r=e.createShader(t);return e.shaderSource(r,n),e.compileShader(r),r}var Uc=37297,Wc=0;function Gc(e,t){let n=e.split(`
`),r=[],i=Math.max(t-6,0),a=Math.min(t+6,n.length);for(let e=i;e<a;e++){let i=e+1;r.push(`${i===t?`>`:` `} ${i}: ${n[e]}`)}return r.join(`
`)}var Kc=new W;function qc(e){G._getMatrix(Kc,G.workingColorSpace,e);let t=`mat3( ${Kc.elements.map(e=>e.toFixed(4))} )`;switch(G.getTransfer(e)){case _t:return[t,`LinearTransferOETF`];case vt:return[t,`sRGBTransferOETF`];default:return z(`WebGLProgram: Unsupported color space: `,e),[t,`LinearTransferOETF`]}}function Jc(e,t,n){let r=e.getShaderParameter(t,e.COMPILE_STATUS),i=(e.getShaderInfoLog(t)||``).trim();if(r&&i===``)return``;let a=/ERROR: 0:(\d+)/.exec(i);if(a){let r=parseInt(a[1]);return n.toUpperCase()+`

`+i+`

`+Gc(e.getShaderSource(t),r)}return i}function Yc(e,t){let n=qc(t);return[`vec4 ${e}( vec4 value ) {`,`	return ${n[1]}( vec4( ${n[0]} * value.rgb, value.a ) );`,`}`].join(`
`)}var Xc={1:`Linear`,2:`Reinhard`,3:`Cineon`,4:`ACESFilmic`,6:`AgX`,7:`Neutral`,5:`Custom`};function Zc(e,t){let n=Xc[t];return n===void 0?(z(`WebGLProgram: Unsupported toneMapping:`,t),`vec3 `+e+`( vec3 color ) { return LinearToneMapping( color ); }`):`vec3 `+e+`( vec3 color ) { return `+n+`ToneMapping( color ); }`}var Qc=new U;function $c(){return G.getLuminanceCoefficients(Qc),[`float luminance( const in vec3 rgb ) {`,`	const vec3 weights = vec3( ${Qc.x.toFixed(4)}, ${Qc.y.toFixed(4)}, ${Qc.z.toFixed(4)} );`,`	return dot( weights, rgb );`,`}`].join(`
`)}function el(e){return[e.extensionClipCullDistance?`#extension GL_ANGLE_clip_cull_distance : require`:``,e.extensionMultiDraw?`#extension GL_ANGLE_multi_draw : require`:``].filter(rl).join(`
`)}function tl(e){let t=[];for(let n in e){let r=e[n];r!==!1&&t.push(`#define `+n+` `+r)}return t.join(`
`)}function nl(e,t){let n={},r=e.getProgramParameter(t,e.ACTIVE_ATTRIBUTES);for(let i=0;i<r;i++){let r=e.getActiveAttrib(t,i),a=r.name,o=1;r.type===e.FLOAT_MAT2&&(o=2),r.type===e.FLOAT_MAT3&&(o=3),r.type===e.FLOAT_MAT4&&(o=4),n[a]={type:r.type,location:e.getAttribLocation(t,a),locationSize:o}}return n}function rl(e){return e!==``}function il(e,t){let n=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return e.replace(/NUM_SUN_LIGHTS/g,t.numSunLights).replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,t.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows).replace(/NUM_LIGHT_PROBE_GRIDS/g,t.numLightProbeGrids)}function al(e,t){return e.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var ol=/^[ \t]*#include +<([\w\d./]+)>/gm;function sl(e){return e.replace(ol,cl)}function cl(e,t){let n=J[t];if(n===void 0)throw Error(`THREE.WebGLProgram: Can not resolve #include <`+t+`>`);return sl(n)}var ll=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function ul(e){return e.replace(ll,dl)}function dl(e,t,n,r){let i=``;for(let e=parseInt(t);e<parseInt(n);e++)i+=r.replace(/\[\s*i\s*\]/g,`[ `+e+` ]`).replace(/UNROLLED_LOOP_INDEX/g,e);return i}function fl(e){let t=`precision ${e.precision} float;
	precision ${e.precision} int;
	precision ${e.precision} sampler2D;
	precision ${e.precision} samplerCube;
	precision ${e.precision} sampler3D;
	precision ${e.precision} sampler2DArray;
	precision ${e.precision} sampler2DShadow;
	precision ${e.precision} samplerCubeShadow;
	precision ${e.precision} sampler2DArrayShadow;
	precision ${e.precision} isampler2D;
	precision ${e.precision} isampler3D;
	precision ${e.precision} isamplerCube;
	precision ${e.precision} isampler2DArray;
	precision ${e.precision} usampler2D;
	precision ${e.precision} usampler3D;
	precision ${e.precision} usamplerCube;
	precision ${e.precision} usampler2DArray;
	`;return e.precision===`highp`?t+=`
#define HIGH_PRECISION`:e.precision===`mediump`?t+=`
#define MEDIUM_PRECISION`:e.precision===`lowp`&&(t+=`
#define LOW_PRECISION`),t}var pl={1:`SHADOWMAP_TYPE_PCF`,3:`SHADOWMAP_TYPE_VSM`};function ml(e){return pl[e.shadowMapType]||`SHADOWMAP_TYPE_BASIC`}var hl={302:`ENVMAP_MODE_REFRACTION`};function gl(e){return e.envMap===!1?`ENVMAP_MODE_REFLECTION`:hl[e.envMapMode]||`ENVMAP_MODE_REFLECTION`}var _l={0:`ENVMAP_BLENDING_MULTIPLY`,1:`ENVMAP_BLENDING_MIX`,2:`ENVMAP_BLENDING_ADD`};function vl(e){return e.envMap===!1?`ENVMAP_BLENDING_NONE`:_l[e.combine]||`ENVMAP_BLENDING_NONE`}function yl(e,t,n,r){let i=e.getContext(),a=n.defines,o=n.vertexShader,s=n.fragmentShader,c=ml(n),l=n.envMapPMREM===!0?`ENVMAP_TYPE_PMREM`:`ENVMAP_TYPE_CUBE`,u=gl(n),d=vl(n),f=el(n),p=tl(a),m=i.createProgram(),h,g,_=n.glslVersion?`#version `+n.glslVersion+`
`:``;n.isRawShaderMaterial?(h=[`#define SHADER_TYPE `+n.shaderType,`#define SHADER_NAME `+n.shaderName,p].filter(rl).join(`
`),h.length>0&&(h+=`
`),g=[`#define SHADER_TYPE `+n.shaderType,`#define SHADER_NAME `+n.shaderName,p].filter(rl).join(`
`),g.length>0&&(g+=`
`)):(h=[fl(n),`#define SHADER_TYPE `+n.shaderType,`#define SHADER_NAME `+n.shaderName,p,n.extensionClipCullDistance?`#define USE_CLIP_DISTANCE`:``,n.batching?`#define USE_BATCHING`:``,n.batchingColor?`#define USE_BATCHING_COLOR`:``,n.instancing?`#define USE_INSTANCING`:``,n.instancingColor?`#define USE_INSTANCING_COLOR`:``,n.instancingMorph?`#define USE_INSTANCING_MORPH`:``,n.useFog&&n.fog?`#define USE_FOG`:``,n.useFog&&n.fogExp2?`#define FOG_EXP2`:``,n.map?`#define USE_MAP`:``,n.envMap?`#define USE_ENVMAP`:``,n.envMap?`#define `+u:``,n.lightMap?`#define USE_LIGHTMAP`:``,n.aoMap?`#define USE_AOMAP`:``,n.bumpMap?`#define USE_BUMPMAP`:``,n.normalMap?`#define USE_NORMALMAP`:``,n.normalMapObjectSpace?`#define USE_NORMALMAP_OBJECTSPACE`:``,n.normalMapTangentSpace?`#define USE_NORMALMAP_TANGENTSPACE`:``,n.displacementMap?`#define USE_DISPLACEMENTMAP`:``,n.emissiveMap?`#define USE_EMISSIVEMAP`:``,n.anisotropy?`#define USE_ANISOTROPY`:``,n.anisotropyMap?`#define USE_ANISOTROPYMAP`:``,n.clearcoatMap?`#define USE_CLEARCOATMAP`:``,n.clearcoatRoughnessMap?`#define USE_CLEARCOAT_ROUGHNESSMAP`:``,n.clearcoatNormalMap?`#define USE_CLEARCOAT_NORMALMAP`:``,n.diffuseRoughnessMap?`#define USE_DIFFUSE_ROUGHNESSMAP`:``,n.iridescenceMap?`#define USE_IRIDESCENCEMAP`:``,n.iridescenceThicknessMap?`#define USE_IRIDESCENCE_THICKNESSMAP`:``,n.specularMap?`#define USE_SPECULARMAP`:``,n.specularColorMap?`#define USE_SPECULAR_COLORMAP`:``,n.specularIntensityMap?`#define USE_SPECULAR_INTENSITYMAP`:``,n.roughnessMap?`#define USE_ROUGHNESSMAP`:``,n.metalnessMap?`#define USE_METALNESSMAP`:``,n.alphaMap?`#define USE_ALPHAMAP`:``,n.alphaHash?`#define USE_ALPHAHASH`:``,n.transmission?`#define USE_TRANSMISSION`:``,n.transmissionMap?`#define USE_TRANSMISSIONMAP`:``,n.thicknessMap?`#define USE_THICKNESSMAP`:``,n.sheenColorMap?`#define USE_SHEEN_COLORMAP`:``,n.sheenRoughnessMap?`#define USE_SHEEN_ROUGHNESSMAP`:``,n.mapUv?`#define MAP_UV `+n.mapUv:``,n.alphaMapUv?`#define ALPHAMAP_UV `+n.alphaMapUv:``,n.lightMapUv?`#define LIGHTMAP_UV `+n.lightMapUv:``,n.aoMapUv?`#define AOMAP_UV `+n.aoMapUv:``,n.emissiveMapUv?`#define EMISSIVEMAP_UV `+n.emissiveMapUv:``,n.bumpMapUv?`#define BUMPMAP_UV `+n.bumpMapUv:``,n.normalMapUv?`#define NORMALMAP_UV `+n.normalMapUv:``,n.displacementMapUv?`#define DISPLACEMENTMAP_UV `+n.displacementMapUv:``,n.metalnessMapUv?`#define METALNESSMAP_UV `+n.metalnessMapUv:``,n.roughnessMapUv?`#define ROUGHNESSMAP_UV `+n.roughnessMapUv:``,n.anisotropyMapUv?`#define ANISOTROPYMAP_UV `+n.anisotropyMapUv:``,n.clearcoatMapUv?`#define CLEARCOATMAP_UV `+n.clearcoatMapUv:``,n.clearcoatNormalMapUv?`#define CLEARCOAT_NORMALMAP_UV `+n.clearcoatNormalMapUv:``,n.clearcoatRoughnessMapUv?`#define CLEARCOAT_ROUGHNESSMAP_UV `+n.clearcoatRoughnessMapUv:``,n.diffuseRoughnessMapUv?`#define DIFFUSE_ROUGHNESSMAP_UV `+n.diffuseRoughnessMapUv:``,n.iridescenceMapUv?`#define IRIDESCENCEMAP_UV `+n.iridescenceMapUv:``,n.iridescenceThicknessMapUv?`#define IRIDESCENCE_THICKNESSMAP_UV `+n.iridescenceThicknessMapUv:``,n.sheenColorMapUv?`#define SHEEN_COLORMAP_UV `+n.sheenColorMapUv:``,n.sheenRoughnessMapUv?`#define SHEEN_ROUGHNESSMAP_UV `+n.sheenRoughnessMapUv:``,n.specularMapUv?`#define SPECULARMAP_UV `+n.specularMapUv:``,n.specularColorMapUv?`#define SPECULAR_COLORMAP_UV `+n.specularColorMapUv:``,n.specularIntensityMapUv?`#define SPECULAR_INTENSITYMAP_UV `+n.specularIntensityMapUv:``,n.transmissionMapUv?`#define TRANSMISSIONMAP_UV `+n.transmissionMapUv:``,n.thicknessMapUv?`#define THICKNESSMAP_UV `+n.thicknessMapUv:``,n.vertexTangents&&n.flatShading===!1?`#define USE_TANGENT`:``,n.vertexNormals?`#define HAS_NORMAL`:``,n.vertexColors?`#define USE_COLOR`:``,n.vertexAlphas?`#define USE_COLOR_ALPHA`:``,n.vertexUv1s?`#define USE_UV1`:``,n.vertexUv2s?`#define USE_UV2`:``,n.vertexUv3s?`#define USE_UV3`:``,n.pointsUvs?`#define USE_POINTS_UV`:``,n.flatShading?`#define FLAT_SHADED`:``,n.skinning?`#define USE_SKINNING`:``,n.morphTargets?`#define USE_MORPHTARGETS`:``,n.morphNormals&&n.flatShading===!1?`#define USE_MORPHNORMALS`:``,n.morphColors?`#define USE_MORPHCOLORS`:``,n.morphTargetsCount>0?`#define MORPHTARGETS_TEXTURE_STRIDE `+n.morphTextureStride:``,n.morphTargetsCount>0?`#define MORPHTARGETS_COUNT `+n.morphTargetsCount:``,n.doubleSided?`#define DOUBLE_SIDED`:``,n.flipSided?`#define FLIP_SIDED`:``,n.shadowMapEnabled?`#define USE_SHADOWMAP`:``,n.shadowMapEnabled?`#define `+c:``,n.sizeAttenuation?`#define USE_SIZEATTENUATION`:``,n.numLightProbes>0?`#define USE_LIGHT_PROBES`:``,n.logarithmicDepthBuffer?`#define USE_LOGARITHMIC_DEPTH_BUFFER`:``,n.reversedDepthBuffer?`#define USE_REVERSED_DEPTH_BUFFER`:``,`uniform mat4 modelMatrix;`,`uniform mat4 modelViewMatrix;`,`uniform mat4 projectionMatrix;`,`uniform mat4 viewMatrix;`,`uniform mat3 normalMatrix;`,`uniform vec3 cameraPosition;`,`uniform bool isOrthographic;`,`#ifdef USE_INSTANCING`,`	attribute mat4 instanceMatrix;`,`#endif`,`#ifdef USE_INSTANCING_COLOR`,`	attribute vec3 instanceColor;`,`#endif`,`#ifdef USE_INSTANCING_MORPH`,`	uniform sampler2D morphTexture;`,`#endif`,`attribute vec3 position;`,`attribute vec3 normal;`,`attribute vec2 uv;`,`#ifdef USE_UV1`,`	attribute vec2 uv1;`,`#endif`,`#ifdef USE_UV2`,`	attribute vec2 uv2;`,`#endif`,`#ifdef USE_UV3`,`	attribute vec2 uv3;`,`#endif`,`#ifdef USE_TANGENT`,`	attribute vec4 tangent;`,`#endif`,`#if defined( USE_COLOR_ALPHA )`,`	attribute vec4 color;`,`#elif defined( USE_COLOR )`,`	attribute vec3 color;`,`#endif`,`#ifdef USE_SKINNING`,`	attribute vec4 skinIndex;`,`	attribute vec4 skinWeight;`,`#endif`,`
`].filter(rl).join(`
`),g=[fl(n),`#define SHADER_TYPE `+n.shaderType,`#define SHADER_NAME `+n.shaderName,p,n.useFog&&n.fog?`#define USE_FOG`:``,n.useFog&&n.fogExp2?`#define FOG_EXP2`:``,n.alphaToCoverage?`#define ALPHA_TO_COVERAGE`:``,n.map?`#define USE_MAP`:``,n.matcap?`#define USE_MATCAP`:``,n.envMap?`#define USE_ENVMAP`:``,n.envMap?`#define `+l:``,n.envMap?`#define `+u:``,n.envMap?`#define `+d:``,n.envMapPMREM?`#define ENVMAP_MAX_LOD `+n.envMapMaxLod+`.0`:``,n.envMapPMREM?`#define ENVMAP_SIZE `+n.envMapSize+`.0`:``,n.lightMap?`#define USE_LIGHTMAP`:``,n.aoMap?`#define USE_AOMAP`:``,n.bumpMap?`#define USE_BUMPMAP`:``,n.normalMap?`#define USE_NORMALMAP`:``,n.normalMapObjectSpace?`#define USE_NORMALMAP_OBJECTSPACE`:``,n.normalMapTangentSpace?`#define USE_NORMALMAP_TANGENTSPACE`:``,n.packedNormalMap?`#define USE_PACKED_NORMALMAP`:``,n.emissiveMap?`#define USE_EMISSIVEMAP`:``,n.anisotropy?`#define USE_ANISOTROPY`:``,n.anisotropyMap?`#define USE_ANISOTROPYMAP`:``,n.clearcoat?`#define USE_CLEARCOAT`:``,n.clearcoatMap?`#define USE_CLEARCOATMAP`:``,n.clearcoatRoughnessMap?`#define USE_CLEARCOAT_ROUGHNESSMAP`:``,n.clearcoatNormalMap?`#define USE_CLEARCOAT_NORMALMAP`:``,n.diffuseRoughness?`#define USE_DIFFUSE_ROUGHNESS`:``,n.diffuseRoughnessMap?`#define USE_DIFFUSE_ROUGHNESSMAP`:``,n.dispersion?`#define USE_DISPERSION`:``,n.retroreflection?`#define USE_RETROREFLECTION`:``,n.iridescence?`#define USE_IRIDESCENCE`:``,n.iridescenceMap?`#define USE_IRIDESCENCEMAP`:``,n.iridescenceThicknessMap?`#define USE_IRIDESCENCE_THICKNESSMAP`:``,n.specularMap?`#define USE_SPECULARMAP`:``,n.specularColorMap?`#define USE_SPECULAR_COLORMAP`:``,n.specularIntensityMap?`#define USE_SPECULAR_INTENSITYMAP`:``,n.roughnessMap?`#define USE_ROUGHNESSMAP`:``,n.metalnessMap?`#define USE_METALNESSMAP`:``,n.alphaMap?`#define USE_ALPHAMAP`:``,n.alphaTest?`#define USE_ALPHATEST`:``,n.alphaHash?`#define USE_ALPHAHASH`:``,n.sheen?`#define USE_SHEEN`:``,n.sheenColorMap?`#define USE_SHEEN_COLORMAP`:``,n.sheenRoughnessMap?`#define USE_SHEEN_ROUGHNESSMAP`:``,n.transmission?`#define USE_TRANSMISSION`:``,n.transmissionMap?`#define USE_TRANSMISSIONMAP`:``,n.thicknessMap?`#define USE_THICKNESSMAP`:``,n.vertexTangents&&n.flatShading===!1?`#define USE_TANGENT`:``,n.vertexColors||n.instancingColor?`#define USE_COLOR`:``,n.vertexAlphas||n.batchingColor?`#define USE_COLOR_ALPHA`:``,n.vertexUv1s?`#define USE_UV1`:``,n.vertexUv2s?`#define USE_UV2`:``,n.vertexUv3s?`#define USE_UV3`:``,n.pointsUvs?`#define USE_POINTS_UV`:``,n.gradientMap?`#define USE_GRADIENTMAP`:``,n.flatShading?`#define FLAT_SHADED`:``,n.doubleSided?`#define DOUBLE_SIDED`:``,n.flipSided?`#define FLIP_SIDED`:``,n.shadowMapEnabled?`#define USE_SHADOWMAP`:``,n.shadowMapEnabled?`#define `+c:``,n.premultipliedAlpha?`#define PREMULTIPLIED_ALPHA`:``,n.numLightProbes>0?`#define USE_LIGHT_PROBES`:``,n.decodeVideoTexture?`#define DECODE_VIDEO_TEXTURE`:``,n.decodeVideoTextureEmissive?`#define DECODE_VIDEO_TEXTURE_EMISSIVE`:``,n.logarithmicDepthBuffer?`#define USE_LOGARITHMIC_DEPTH_BUFFER`:``,n.reversedDepthBuffer?`#define USE_REVERSED_DEPTH_BUFFER`:``,`uniform mat4 viewMatrix;`,`uniform vec3 cameraPosition;`,`uniform bool isOrthographic;`,n.toneMapping===0?``:`#define TONE_MAPPING`,n.toneMapping===0?``:J.tonemapping_pars_fragment,n.toneMapping===0?``:Zc(`toneMapping`,n.toneMapping),n.dithering?`#define DITHERING`:``,n.opaque?`#define OPAQUE`:``,J.colorspace_pars_fragment,Yc(`linearToOutputTexel`,n.outputColorSpace),$c(),n.useDepthPacking?`#define DEPTH_PACKING `+n.depthPacking:``,`
`].filter(rl).join(`
`)),o=sl(o),o=il(o,n),o=al(o,n),s=sl(s),s=il(s,n),s=al(s,n),o=ul(o),s=ul(s),n.isRawShaderMaterial!==!0&&(_=`#version 300 es
`,h=[f,`#define attribute in`,`#define varying out`,`#define texture2D texture`].join(`
`)+`
`+h,g=[`#define varying in`,n.glslVersion===`300 es`?``:`layout(location = 0) out highp vec4 pc_fragColor;`,n.glslVersion===`300 es`?``:`#define gl_FragColor pc_fragColor`,`#define gl_FragDepthEXT gl_FragDepth`,`#define texture2D texture`,`#define textureCube texture`,`#define texture2DProj textureProj`,`#define texture2DLodEXT textureLod`,`#define texture2DProjLodEXT textureProjLod`,`#define textureCubeLodEXT textureLod`,`#define texture2DGradEXT textureGrad`,`#define texture2DProjGradEXT textureProjGrad`,`#define textureCubeGradEXT textureGrad`].join(`
`)+`
`+g);let v=_+h+o,y=_+g+s,b=Hc(i,i.VERTEX_SHADER,v),x=Hc(i,i.FRAGMENT_SHADER,y);i.attachShader(m,b),i.attachShader(m,x),n.index0AttributeName===void 0?n.hasPositionAttribute===!0&&i.bindAttribLocation(m,0,`position`):i.bindAttribLocation(m,0,n.index0AttributeName),i.linkProgram(m);function S(t){if(e.debug.checkShaderErrors){let n=i.getProgramInfoLog(m)||``,r=i.getShaderInfoLog(b)||``,a=i.getShaderInfoLog(x)||``,o=n.trim(),s=r.trim(),c=a.trim(),l=!0,u=!0;if(i.getProgramParameter(m,i.LINK_STATUS)===!1){if(l=!1,typeof e.debug.onShaderError==`function`)e.debug.onShaderError(i,m,b,x);else{let e=Jc(i,b,`vertex`),n=Jc(i,x,`fragment`);B(`WebGLProgram: Shader Error `+i.getError()+` - VALIDATE_STATUS `+i.getProgramParameter(m,i.VALIDATE_STATUS)+`

Material Name: `+t.name+`
Material Type: `+t.type+`

Program Info Log: `+o+`
`+e+`
`+n)}}else o===``?(s===``||c===``)&&(u=!1):z(`WebGLProgram: Program Info Log:`,o);u&&(t.diagnostics={runnable:l,programLog:o,vertexShader:{log:s,prefix:h},fragmentShader:{log:c,prefix:g}})}i.deleteShader(b),i.deleteShader(x),C=new Vc(i,m),w=nl(i,m)}let C;this.getUniforms=function(){return C===void 0&&S(this),C};let w;this.getAttributes=function(){return w===void 0&&S(this),w};let T=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return T===!1&&(T=i.getProgramParameter(m,Uc)),T},this.destroy=function(){r.releaseStatesOfProgram(this),i.deleteProgram(m),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=Wc++,this.cacheKey=t,this.usedTimes=1,this.program=m,this.vertexShader=b,this.fragmentShader=x,this}var bl=0,xl=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,t,n){let r=this._getShaderCacheForMaterial(e);return r.has(t)===!1&&(r.add(t),t.usedTimes++),r.has(n)===!1&&(r.add(n),n.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let e of t)e.usedTimes--,e.usedTimes===0&&this.shaderCache.delete(e.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){let t=this.shaderCache,n=t.get(e);return n===void 0&&(n=new Sl(e),t.set(e,n)),n}},Sl=class{constructor(e){this.id=bl++,this.code=e,this.usedTimes=0}};function Cl(e){return e===1030||e===37490||e===36285}function wl(e,t,n,r,i,a){let o=new Vn,s=new xl,c=new Set,l=[],u=new Map,d=r.logarithmicDepthBuffer,f={MeshDepthMaterial:`depth`,MeshDistanceMaterial:`distance`,MeshNormalMaterial:`normal`,MeshBasicMaterial:`basic`,MeshLambertMaterial:`lambert`,MeshPhongMaterial:`phong`,MeshToonMaterial:`toon`,MeshStandardMaterial:`physical`,MeshPhysicalMaterial:`physical`,MeshMatcapMaterial:`matcap`,LineBasicMaterial:`basic`,LineDashedMaterial:`dashed`,PointsMaterial:`points`,ShadowMaterial:`shadow`,SpriteMaterial:`sprite`};function p(e){return c.add(e),e===0?`uv`:`uv${e}`}function m(i,o,l,u,m,h){let g=u.fog,_=m.geometry,v=i.isMeshStandardMaterial||i.isMeshLambertMaterial||i.isMeshPhongMaterial?u.environment:null,y=i.isMeshStandardMaterial||i.isMeshLambertMaterial&&!i.envMap||i.isMeshPhongMaterial&&!i.envMap,b=t.get(i.envMap||v,y),x=f[i.type],S=r.precision;i.precision!==null&&(S=r.getMaxPrecision(i.precision),S!==i.precision&&z(`WebGLProgram.getParameters:`,i.precision,`not supported, using`,S,`instead.`));let C=_.morphAttributes.position||_.morphAttributes.normal||_.morphAttributes.color,w=C===void 0?0:C.length,T=0;_.morphAttributes.position!==void 0&&(T=1),_.morphAttributes.normal!==void 0&&(T=2),_.morphAttributes.color!==void 0&&(T=3);let E,D,O,k;if(x){let e=Qo[x];E=e.vertexShader,D=e.fragmentShader}else{E=i.vertexShader,D=i.fragmentShader;let e=s.getVertexShaderStage(i),t=s.getFragmentShaderStage(i);s.update(i,e,t),O=e.id,k=t.id}let A=e.getRenderTarget(),j=e.state.buffers.depth.getReversed(),ee=m.isInstancedMesh===!0,M=m.isBatchedMesh===!0,N=!!i.map,P=!!i.matcap,te=!!b,ne=te&&b.isPMREMTexture===!0,re=!!i.aoMap,ie=!!i.lightMap,ae=!!i.bumpMap&&i.wireframe===!1,oe=!!i.normalMap,se=!!i.displacementMap,ce=!!i.emissiveMap,le=!!i.metalnessMap,ue=!!i.roughnessMap,de=i.anisotropy>0,fe=i.clearcoat>0,pe=i.diffuseRoughness>0,me=i.dispersion>0,he=i.retroreflectivity>0,ge=i.iridescence>0,_e=i.sheen>0,ve=i.transmission>0,ye=de&&!!i.anisotropyMap,be=fe&&!!i.clearcoatMap,xe=fe&&!!i.clearcoatNormalMap,Se=fe&&!!i.clearcoatRoughnessMap,Ce=pe&&!!i.diffuseRoughnessMap,we=ge&&!!i.iridescenceMap,Te=ge&&!!i.iridescenceThicknessMap,Ee=_e&&!!i.sheenColorMap,De=_e&&!!i.sheenRoughnessMap,Oe=!!i.specularMap,ke=!!i.specularColorMap,Ae=!!i.specularIntensityMap,je=ve&&!!i.transmissionMap,Me=ve&&!!i.thicknessMap,Ne=!!i.gradientMap,Pe=!!i.alphaMap,F=i.alphaTest>0,Fe=!!i.alphaHash,Ie=!!i.extensions,Le=0;i.toneMapped&&(A===null||A.isXRRenderTarget===!0)&&(Le=e.toneMapping);let I=ne?b.isCompressedCubeTexture?b.image[0].mipmaps:b.mipmaps:null,Re={shaderID:x,shaderType:i.type,shaderName:i.name,vertexShader:E,fragmentShader:D,defines:i.defines,customVertexShaderID:O,customFragmentShaderID:k,isRawShaderMaterial:i.isRawShaderMaterial===!0,glslVersion:i.glslVersion,precision:S,batching:M,batchingColor:M&&m._colorsTexture!==null,instancing:ee,instancingColor:ee&&m.instanceColor!==null,instancingMorph:ee&&m.morphTexture!==null,outputColorSpace:A===null?e.outputColorSpace:A.isXRRenderTarget===!0?A.texture.colorSpace:G.workingColorSpace,alphaToCoverage:!!i.alphaToCoverage,map:N,matcap:P,envMap:te,envMapMode:te&&b.mapping,envMapPMREM:ne,envMapMaxLod:ne?I.length-1:null,envMapSize:ne?I[0].width:null,aoMap:re,lightMap:ie,bumpMap:ae,normalMap:oe,displacementMap:se,emissiveMap:ce,normalMapObjectSpace:oe&&i.normalMapType===1,normalMapTangentSpace:oe&&i.normalMapType===0,packedNormalMap:oe&&i.normalMapType===0&&Cl(i.normalMap.format),metalnessMap:le,roughnessMap:ue,anisotropy:de,anisotropyMap:ye,clearcoat:fe,clearcoatMap:be,clearcoatNormalMap:xe,clearcoatRoughnessMap:Se,diffuseRoughness:pe,diffuseRoughnessMap:Ce,dispersion:me,retroreflection:he,iridescence:ge,iridescenceMap:we,iridescenceThicknessMap:Te,sheen:_e,sheenColorMap:Ee,sheenRoughnessMap:De,specularMap:Oe,specularColorMap:ke,specularIntensityMap:Ae,transmission:ve,transmissionMap:je,thicknessMap:Me,gradientMap:Ne,opaque:i.transparent===!1&&i.blending===1&&i.alphaToCoverage===!1,alphaMap:Pe,alphaTest:F,alphaHash:Fe,combine:i.combine,mapUv:N&&p(i.map.channel),aoMapUv:re&&p(i.aoMap.channel),lightMapUv:ie&&p(i.lightMap.channel),bumpMapUv:ae&&p(i.bumpMap.channel),normalMapUv:oe&&p(i.normalMap.channel),displacementMapUv:se&&p(i.displacementMap.channel),emissiveMapUv:ce&&p(i.emissiveMap.channel),metalnessMapUv:le&&p(i.metalnessMap.channel),roughnessMapUv:ue&&p(i.roughnessMap.channel),anisotropyMapUv:ye&&p(i.anisotropyMap.channel),clearcoatMapUv:be&&p(i.clearcoatMap.channel),clearcoatNormalMapUv:xe&&p(i.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Se&&p(i.clearcoatRoughnessMap.channel),diffuseRoughnessMapUv:Ce&&p(i.diffuseRoughnessMap.channel),iridescenceMapUv:we&&p(i.iridescenceMap.channel),iridescenceThicknessMapUv:Te&&p(i.iridescenceThicknessMap.channel),sheenColorMapUv:Ee&&p(i.sheenColorMap.channel),sheenRoughnessMapUv:De&&p(i.sheenRoughnessMap.channel),specularMapUv:Oe&&p(i.specularMap.channel),specularColorMapUv:ke&&p(i.specularColorMap.channel),specularIntensityMapUv:Ae&&p(i.specularIntensityMap.channel),transmissionMapUv:je&&p(i.transmissionMap.channel),thicknessMapUv:Me&&p(i.thicknessMap.channel),alphaMapUv:Pe&&p(i.alphaMap.channel),vertexTangents:!!_.attributes.tangent&&(oe||de),vertexNormals:!!_.attributes.normal,vertexColors:i.vertexColors,vertexAlphas:i.vertexColors===!0&&!!_.attributes.color&&_.attributes.color.itemSize===4,pointsUvs:m.isPoints===!0&&!!_.attributes.uv&&(N||Pe),fog:!!g,useFog:i.fog===!0,fogExp2:!!g&&g.isFogExp2,flatShading:i.wireframe===!1&&(i.flatShading===!0||_.attributes.normal===void 0&&oe===!1&&(i.isMeshLambertMaterial||i.isMeshPhongMaterial||i.isMeshStandardMaterial||i.isMeshPhysicalMaterial)),sizeAttenuation:i.sizeAttenuation===!0,logarithmicDepthBuffer:d,reversedDepthBuffer:j,skinning:m.isSkinnedMesh===!0,hasPositionAttribute:_.attributes.position!==void 0,morphTargets:_.morphAttributes.position!==void 0,morphNormals:_.morphAttributes.normal!==void 0,morphColors:_.morphAttributes.color!==void 0,morphTargetsCount:w,morphTextureStride:T,numSunLights:o.sun.length,numDirLights:o.directional.length,numPointLights:o.point.length,numSpotLights:o.spot.length,numSpotLightMaps:o.spotLightMap.length,numRectAreaLights:o.rectArea.length,numHemiLights:o.hemi.length,numSunLightShadows:o.sunShadowMap.length,numDirLightShadows:o.directionalShadowMap.length,numPointLightShadows:o.pointShadowMap.length,numSpotLightShadows:o.spotShadowMap.length,numSpotLightShadowsWithMaps:o.numSpotLightShadowsWithMaps,numLightProbes:o.numLightProbes,numLightProbeGrids:h.filter(e=>e.texture!==null).length,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:i.dithering,shadowMapEnabled:e.shadowMap.enabled&&l.length>0,shadowMapType:e.shadowMap.type,toneMapping:Le,decodeVideoTexture:N&&i.map.isVideoTexture===!0&&G.getTransfer(i.map.colorSpace)===`srgb`,decodeVideoTextureEmissive:ce&&i.emissiveMap.isVideoTexture===!0&&G.getTransfer(i.emissiveMap.colorSpace)===`srgb`,premultipliedAlpha:i.premultipliedAlpha,doubleSided:i.side===2,flipSided:i.side===1,useDepthPacking:i.depthPacking>=0,depthPacking:i.depthPacking||0,index0AttributeName:i.index0AttributeName,extensionClipCullDistance:Ie&&i.extensions.clipCullDistance===!0&&n.has(`WEBGL_clip_cull_distance`),extensionMultiDraw:(Ie&&i.extensions.multiDraw===!0||M)&&n.has(`WEBGL_multi_draw`),rendererExtensionParallelShaderCompile:n.has(`KHR_parallel_shader_compile`),customProgramCacheKey:i.customProgramCacheKey()};return Re.vertexUv1s=c.has(1),Re.vertexUv2s=c.has(2),Re.vertexUv3s=c.has(3),c.clear(),Re}function h(t){let n=[];if(t.shaderID?n.push(t.shaderID):(n.push(t.customVertexShaderID),n.push(t.customFragmentShaderID)),t.defines!==void 0)for(let e in t.defines)n.push(e),n.push(t.defines[e]);return t.isRawShaderMaterial===!1&&(g(n,t),_(n,t),n.push(e.outputColorSpace)),n.push(t.customProgramCacheKey),n.join()}function g(e,t){e.push(t.precision),e.push(t.outputColorSpace),e.push(t.envMapMode),e.push(t.envMapPMREM),e.push(t.envMapMaxLod),e.push(t.envMapSize),e.push(t.mapUv),e.push(t.alphaMapUv),e.push(t.lightMapUv),e.push(t.aoMapUv),e.push(t.bumpMapUv),e.push(t.normalMapUv),e.push(t.displacementMapUv),e.push(t.emissiveMapUv),e.push(t.metalnessMapUv),e.push(t.roughnessMapUv),e.push(t.anisotropyMapUv),e.push(t.clearcoatMapUv),e.push(t.clearcoatNormalMapUv),e.push(t.clearcoatRoughnessMapUv),e.push(t.diffuseRoughnessMapUv),e.push(t.iridescenceMapUv),e.push(t.iridescenceThicknessMapUv),e.push(t.sheenColorMapUv),e.push(t.sheenRoughnessMapUv),e.push(t.specularMapUv),e.push(t.specularColorMapUv),e.push(t.specularIntensityMapUv),e.push(t.transmissionMapUv),e.push(t.thicknessMapUv),e.push(t.combine),e.push(t.fogExp2),e.push(t.sizeAttenuation),e.push(t.morphTargetsCount),e.push(t.numSunLights),e.push(t.numDirLights),e.push(t.numPointLights),e.push(t.numSpotLights),e.push(t.numSpotLightMaps),e.push(t.numHemiLights),e.push(t.numRectAreaLights),e.push(t.numSunLightShadows),e.push(t.numDirLightShadows),e.push(t.numPointLightShadows),e.push(t.numSpotLightShadows),e.push(t.numSpotLightShadowsWithMaps),e.push(t.numLightProbes),e.push(t.numLightProbeGrids),e.push(t.shadowMapType),e.push(t.toneMapping),e.push(t.numClippingPlanes),e.push(t.numClipIntersection),e.push(t.depthPacking)}function _(e,t){o.disableAll(),t.instancing&&o.enable(0),t.instancingColor&&o.enable(1),t.instancingMorph&&o.enable(2),t.matcap&&o.enable(3),t.envMap&&o.enable(4),t.normalMapObjectSpace&&o.enable(5),t.normalMapTangentSpace&&o.enable(6),t.clearcoat&&o.enable(7),t.iridescence&&o.enable(8),t.alphaTest&&o.enable(9),t.vertexColors&&o.enable(10),t.vertexAlphas&&o.enable(11),t.vertexUv1s&&o.enable(12),t.vertexUv2s&&o.enable(13),t.vertexUv3s&&o.enable(14),t.vertexTangents&&o.enable(15),t.anisotropy&&o.enable(16),t.alphaHash&&o.enable(17),t.batching&&o.enable(18),t.dispersion&&o.enable(19),t.retroreflection&&o.enable(24),t.diffuseRoughness&&o.enable(25),t.batchingColor&&o.enable(20),t.gradientMap&&o.enable(21),t.packedNormalMap&&o.enable(22),t.vertexNormals&&o.enable(23),e.push(o.mask),o.disableAll(),t.fog&&o.enable(0),t.useFog&&o.enable(1),t.flatShading&&o.enable(2),t.logarithmicDepthBuffer&&o.enable(3),t.reversedDepthBuffer&&o.enable(4),t.skinning&&o.enable(5),t.morphTargets&&o.enable(6),t.morphNormals&&o.enable(7),t.morphColors&&o.enable(8),t.premultipliedAlpha&&o.enable(9),t.shadowMapEnabled&&o.enable(10),t.doubleSided&&o.enable(11),t.flipSided&&o.enable(12),t.useDepthPacking&&o.enable(13),t.dithering&&o.enable(14),t.transmission&&o.enable(15),t.sheen&&o.enable(16),t.opaque&&o.enable(17),t.pointsUvs&&o.enable(18),t.decodeVideoTexture&&o.enable(19),t.decodeVideoTextureEmissive&&o.enable(20),t.alphaToCoverage&&o.enable(21),t.numLightProbeGrids>0&&o.enable(22),t.hasPositionAttribute&&o.enable(23),e.push(o.mask)}function v(e){let t=f[e.type],n;if(t){let e=Qo[t];n=Ia.clone(e.uniforms)}else n=e.uniforms;return n}function y(t,n){let r=u.get(n);return r===void 0?(r=new yl(e,n,t,i),l.push(r),u.set(n,r)):++r.usedTimes,r}function b(e){if(--e.usedTimes===0){let t=l.indexOf(e);l[t]=l[l.length-1],l.pop(),u.delete(e.cacheKey),e.destroy()}}function x(e){s.remove(e)}function S(){s.dispose()}return{getParameters:m,getProgramCacheKey:h,getUniforms:v,acquireProgram:y,releaseProgram:b,releaseShaderCache:x,programs:l,dispose:S}}function Tl(){let e=new WeakMap;function t(t){return e.has(t)}function n(t){let n=e.get(t);return n===void 0&&(n={},e.set(t,n)),n}function r(t){e.delete(t)}function i(t,n,r){e.get(t)[n]=r}function a(){e=new WeakMap}return{has:t,get:n,remove:r,update:i,dispose:a}}function El(e,t){return e.groupOrder===t.groupOrder?e.renderOrder===t.renderOrder?e.material.id===t.material.id?e.materialVariant===t.materialVariant?e.z===t.z?e.id-t.id:e.z-t.z:e.materialVariant-t.materialVariant:e.material.id-t.material.id:e.renderOrder-t.renderOrder:e.groupOrder-t.groupOrder}function Dl(e,t){return e.groupOrder===t.groupOrder?e.renderOrder===t.renderOrder?e.z===t.z?e.id-t.id:t.z-e.z:e.renderOrder-t.renderOrder:e.groupOrder-t.groupOrder}function Ol(){let e=[],t=0,n=[],r=[],i=[];function a(){t=0,n.length=0,r.length=0,i.length=0}function o(e){let t=0;return e.isInstancedMesh&&(t+=2),e.isSkinnedMesh&&(t+=1),t}function s(n,r,i,a,s,c){let l=e[t];return l===void 0?(l={id:n.id,object:n,geometry:r,material:i,materialVariant:o(n),groupOrder:a,renderOrder:n.renderOrder,z:s,group:c},e[t]=l):(l.id=n.id,l.object=n,l.geometry=r,l.material=i,l.materialVariant=o(n),l.groupOrder=a,l.renderOrder=n.renderOrder,l.z=s,l.group=c),t++,l}function c(e,t,a,o,c,l,u){u.reversedDepth===!0&&(c=-c);let d=s(e,t,a,o,c,l);a.transmission>0?r.push(d):a.transparent===!0?i.push(d):n.push(d)}function l(e,t,a,o,c,l){let u=s(e,t,a,o,c,l);a.transmission>0?r.unshift(u):a.transparent===!0?i.unshift(u):n.unshift(u)}function u(e,t){n.length>1&&n.sort(e||El),r.length>1&&r.sort(t||Dl),i.length>1&&i.sort(t||Dl)}function d(){for(let n=t,r=e.length;n<r;n++){let t=e[n];if(t.id===null)break;t.id=null,t.object=null,t.geometry=null,t.material=null,t.group=null}}return{opaque:n,transmissive:r,transparent:i,init:a,push:c,unshift:l,finish:d,sort:u}}function kl(){let e=new WeakMap;function t(t,n){let r=e.get(t),i;return r===void 0?(i=new Ol,e.set(t,[i])):n>=r.length?(i=new Ol,r.push(i)):i=r[n],i}function n(){e=new WeakMap}return{get:t,dispose:n}}function Al(){let e={};return{get:function(t){if(e[t.id]!==void 0)return e[t.id];let n;switch(t.type){case`SunLight`:case`DirectionalLight`:n={direction:new U,color:new K};break;case`SpotLight`:n={position:new U,direction:new U,color:new K,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case`PointLight`:n={position:new U,color:new K,distance:0,decay:0};break;case`HemisphereLight`:n={direction:new U,skyColor:new K,groundColor:new K};break;case`RectAreaLight`:n={color:new K,position:new U,halfWidth:new U,halfHeight:new U}}return e[t.id]=n,n}}}function jl(){let e={};return{get:function(t){if(e[t.id]!==void 0)return e[t.id];let n;switch(t.type){case`SunLight`:case`DirectionalLight`:n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new H};break;case`SpotLight`:n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new H};break;case`PointLight`:n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new H,shadowCameraNear:1,shadowCameraFar:1e3}}return e[t.id]=n,n}}}var Ml=0;function Nl(e,t){return(t.castShadow?2:0)-(e.castShadow?2:0)+ +!!t.map-!!e.map}function Pl(e){let t=new Al,n=jl(),r={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let e=0;e<9;e++)r.probe.push(new U);let i=new U,a=new An,o=new An;function s(i){let a=0,o=0,s=0;for(let e=0;e<9;e++)r.probe[e].set(0,0,0);let c=0,l=0,u=0,d=0,f=0,p=0,m=0,h=0,g=0,_=0,v=0,y=0,b=0,x=0;i.sort(Nl);for(let e=0,S=i.length;e<S;e++){let S=i[e],C=S.color,w=S.intensity,T=S.distance,E=null;if(S.shadow&&S.shadow.map&&(E=S.shadow.map.texture.format===1030?S.shadow.map.texture:S.shadow.map.depthTexture||S.shadow.map.texture),S.isAmbientLight)a+=C.r*w,o+=C.g*w,s+=C.b*w;else if(S.isLightProbe){for(let e=0;e<9;e++)r.probe[e].addScaledVector(S.sh.coefficients[e],w);x++}else if(S.isSunLight){let e=t.get(S);if(e.color.copy(S.color).multiplyScalar(S.intensity),S.castShadow){let e=S.shadow,t=n.get(S);t.shadowIntensity=e.intensity,t.shadowBias=e.bias,t.shadowNormalBias=e.normalBias,t.shadowRadius=e.radius,t.shadowMapSize.copy(e.mapSize).multiply(e.getFrameExtents()),r.sunShadow[l]=t,r.sunShadowMap[l]=E;let i=e.getViewportCount();for(let t=0;t<i;t++)r.sunShadowMatrix[u+t]=e.getMatrix(t),r.sunShadowCascade[u+t]=e._cascadeData[t];u+=i,l++}r.sun[c]=e,c++}else if(S.isDirectionalLight){let e=t.get(S);if(e.color.copy(S.color).multiplyScalar(S.intensity),S.castShadow){let e=S.shadow,t=n.get(S);t.shadowIntensity=e.intensity,t.shadowBias=e.bias,t.shadowNormalBias=e.normalBias,t.shadowRadius=e.radius,t.shadowMapSize=e.mapSize,r.directionalShadow[d]=t,r.directionalShadowMap[d]=E,r.directionalShadowMatrix[d]=S.shadow.matrix,g++}r.directional[d]=e,d++}else if(S.isSpotLight){let e=t.get(S);e.position.setFromMatrixPosition(S.matrixWorld),e.color.copy(C).multiplyScalar(w),e.distance=T,e.coneCos=Math.cos(S.angle),e.penumbraCos=Math.cos(S.angle*(1-S.penumbra)),e.decay=S.decay,r.spot[p]=e;let i=S.shadow;if(S.map&&(r.spotLightMap[y]=S.map,y++,i.updateMatrices(S),S.castShadow&&b++),r.spotLightMatrix[p]=i.matrix,S.castShadow){let e=n.get(S);e.shadowIntensity=i.intensity,e.shadowBias=i.bias,e.shadowNormalBias=i.normalBias,e.shadowRadius=i.radius,e.shadowMapSize=i.mapSize,r.spotShadow[p]=e,r.spotShadowMap[p]=E,v++}p++}else if(S.isRectAreaLight){let e=t.get(S);e.color.copy(C).multiplyScalar(w),e.halfWidth.set(S.width*.5,0,0),e.halfHeight.set(0,S.height*.5,0),r.rectArea[m]=e,m++}else if(S.isPointLight){let e=t.get(S);if(e.color.copy(S.color).multiplyScalar(S.intensity),e.distance=S.distance,e.decay=S.decay,S.castShadow){let e=S.shadow,t=n.get(S);t.shadowIntensity=e.intensity,t.shadowBias=e.bias,t.shadowNormalBias=e.normalBias,t.shadowRadius=e.radius,t.shadowMapSize=e.mapSize,t.shadowCameraNear=e.camera.near,t.shadowCameraFar=e.camera.far,r.pointShadow[f]=t,r.pointShadowMap[f]=E,r.pointShadowMatrix[f]=S.shadow.matrix,_++}r.point[f]=e,f++}else if(S.isHemisphereLight){let e=t.get(S);e.skyColor.copy(S.color).multiplyScalar(w),e.groundColor.copy(S.groundColor).multiplyScalar(w),r.hemi[h]=e,h++}}m>0&&(e.has(`OES_texture_float_linear`)===!0?(r.rectAreaLTC1=Y.LTC_FLOAT_1,r.rectAreaLTC2=Y.LTC_FLOAT_2):(r.rectAreaLTC1=Y.LTC_HALF_1,r.rectAreaLTC2=Y.LTC_HALF_2)),r.ambient[0]=a,r.ambient[1]=o,r.ambient[2]=s;let S=r.hash;(S.sunLength!==c||S.directionalLength!==d||S.pointLength!==f||S.spotLength!==p||S.rectAreaLength!==m||S.hemiLength!==h||S.numSunShadows!==l||S.numDirectionalShadows!==g||S.numPointShadows!==_||S.numSpotShadows!==v||S.numSpotMaps!==y||S.numLightProbes!==x)&&(r.sun.length=c,r.directional.length=d,r.spot.length=p,r.rectArea.length=m,r.point.length=f,r.hemi.length=h,r.sunShadow.length=l,r.sunShadowMap.length=l,r.sunShadowMatrix.length=u,r.sunShadowCascade.length=u,r.directionalShadow.length=g,r.directionalShadowMap.length=g,r.directionalShadowMatrix.length=g,r.pointShadow.length=_,r.pointShadowMap.length=_,r.pointShadowMatrix.length=_,r.spotShadow.length=v,r.spotShadowMap.length=v,r.spotLightMatrix.length=v+y-b,r.spotLightMap.length=y,r.numSpotLightShadowsWithMaps=b,r.numLightProbes=x,S.sunLength=c,S.directionalLength=d,S.pointLength=f,S.spotLength=p,S.rectAreaLength=m,S.hemiLength=h,S.numSunShadows=l,S.numDirectionalShadows=g,S.numPointShadows=_,S.numSpotShadows=v,S.numSpotMaps=y,S.numLightProbes=x,r.version=Ml++)}function c(e,t){let n=0,s=0,c=0,l=0,u=0,d=0,f=t.matrixWorldInverse;for(let t=0,p=e.length;t<p;t++){let p=e[t];if(p.isSunLight){let e=r.sun[n];e.direction.setFromMatrixPosition(p.matrixWorld),e.direction.transformDirection(f),n++}else if(p.isDirectionalLight){let e=r.directional[s];e.direction.setFromMatrixPosition(p.matrixWorld),i.setFromMatrixPosition(p.target.matrixWorld),e.direction.sub(i),e.direction.transformDirection(f),s++}else if(p.isSpotLight){let e=r.spot[l];e.position.setFromMatrixPosition(p.matrixWorld),e.position.applyMatrix4(f),e.direction.setFromMatrixPosition(p.matrixWorld),i.setFromMatrixPosition(p.target.matrixWorld),e.direction.sub(i),e.direction.transformDirection(f),l++}else if(p.isRectAreaLight){let e=r.rectArea[u];e.position.setFromMatrixPosition(p.matrixWorld),e.position.applyMatrix4(f),o.identity(),a.copy(p.matrixWorld),a.premultiply(f),o.extractRotation(a),e.halfWidth.set(p.width*.5,0,0),e.halfHeight.set(0,p.height*.5,0),e.halfWidth.applyMatrix4(o),e.halfHeight.applyMatrix4(o),u++}else if(p.isPointLight){let e=r.point[c];e.position.setFromMatrixPosition(p.matrixWorld),e.position.applyMatrix4(f),c++}else if(p.isHemisphereLight){let e=r.hemi[d];e.direction.setFromMatrixPosition(p.matrixWorld),e.direction.transformDirection(f),d++}}}return{setup:s,setupView:c,state:r}}function Fl(e){let t=new Pl(e),n=[],r=[],i=[];function a(e){u.camera=e,n.length=0,r.length=0,i.length=0}function o(e){e.isLightProbeGrid?i.push(e):n.push(e)}function s(e){r.push(e)}function c(){t.setup(n),i.sort((e,t)=>e.priority-t.priority||e.id-t.id)}function l(e){t.setupView(n,e)}let u={lightsArray:n,shadowsArray:r,lightProbeGridArray:i,camera:null,lights:t,transmissionRenderTarget:{},textureUnits:0};return{init:a,state:u,setupLights:c,setupLightsView:l,pushLight:o,pushShadow:s}}function Il(e){let t=new WeakMap;function n(n,r=0){let i=t.get(n),a;return i===void 0?(a=new Fl(e),t.set(n,[a])):r>=i.length?(a=new Fl(e),i.push(a)):a=i[r],a}function r(){t=new WeakMap}return{get:n,dispose:r}}var Ll=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Rl=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,zl=[new U(1,0,0),new U(-1,0,0),new U(0,1,0),new U(0,-1,0),new U(0,0,1),new U(0,0,-1)],Bl=[new U(0,-1,0),new U(0,-1,0),new U(0,0,1),new U(0,0,-1),new U(0,-1,0),new U(0,-1,0)],Vl=new An,Hl=new U,Ul=new U;function Wl(e,t,n){let r=new fa,i=new H,a=new H,o=new Tn,s=new Ha,c=new Ua,l={},u=n.maxTextureSize,d={0:1,1:0,2:2},f=new za({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new H},radius:{value:4}},vertexShader:Ll,fragmentShader:Rl}),p=f.clone();p.defines.HORIZONTAL_PASS=1;let m=new si;m.setAttribute(`position`,new Kr(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let h=new q(m,f),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=1;let _=this.type;this.render=function(t,n,s){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||t.length===0)return;this.type===2&&(z(`WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead.`),this.type=1);let c=e.getRenderTarget(),l=e.getActiveCubeFace(),d=e.getActiveMipmapLevel(),f=e.state;f.setBlending(0),f.buffers.depth.getReversed()===!0?f.buffers.color.setClear(0,0,0,0):f.buffers.color.setClear(1,1,1,1),f.buffers.depth.setTest(!0),f.setScissorTest(!1);let p=_!==this.type;p&&n.traverse(function(e){e.material&&(Array.isArray(e.material)?e.material.forEach(e=>e.needsUpdate=!0):e.material.needsUpdate=!0)});for(let c=0,l=t.length;c<l;c++){let l=t[c],d=l.shadow;if(d===void 0){z(`WebGLShadowMap:`,l,`has no shadow.`);continue}if(d.autoUpdate===!1&&d.needsUpdate===!1)continue;i.copy(d.mapSize);let m=d.getFrameExtents();i.multiply(m),a.copy(d.mapSize),(i.x>u||i.y>u)&&(i.x>u&&(a.x=Math.floor(u/m.x),i.x=a.x*m.x,d.mapSize.x=a.x),i.y>u&&(a.y=Math.floor(u/m.y),i.y=a.y*m.y,d.mapSize.y=a.y));let h=e.state.buffers.depth.getReversed();if(d.camera._reversedDepth=h,d.map===null||p===!0){if(d.map!==null&&(d.map.depthTexture!==null&&(d.map.depthTexture.dispose(),d.map.depthTexture=null),d.map.dispose()),this.type===3){if(l.isPointLight){z(`WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.`);continue}d.map=new Dn(i.x,i.y,{format:Ee,type:pe,minFilter:re,magFilter:re,generateMipmaps:!1}),d.map.texture.name=l.name+`.shadowMap`,d.map.depthTexture=new wa(i.x,i.y,fe),d.map.depthTexture.name=l.name+`.shadowMapDepth`,d.map.depthTexture.format=Se,d.map.depthTexture.compareFunction=null,d.map.depthTexture.minFilter=P,d.map.depthTexture.magFilter=P}else l.isPointLight?(d.map=new ss(i.x),d.map.depthTexture=new Ta(i.x,de)):(d.map=new Dn(i.x,i.y),d.map.depthTexture=new wa(i.x,i.y,de)),d.map.depthTexture.name=l.name+`.shadowMap`,d.map.depthTexture.format=Se,this.type===1?(d.map.depthTexture.compareFunction=h?518:515,d.map.depthTexture.minFilter=re,d.map.depthTexture.magFilter=re):(d.map.depthTexture.compareFunction=null,d.map.depthTexture.minFilter=P,d.map.depthTexture.magFilter=P);d.camera.updateProjectionMatrix()}d.map.isWebGLCubeRenderTarget!==!0&&(d.map.width!==i.x||d.map.height!==i.y)&&d.map.setSize(i.x,i.y);let g=d.map.isWebGLCubeRenderTarget?6:d.getViewportCount();l.isPointLight!==!0&&d.updateMatrices(l,s);let _=d.camera.layers.mask&4294967294?d.camera.layers:s.layers;for(let t=0;t<g;t++){let i=d.getCamera(t);if(l.isPointLight){let e=d.camera,n=d.matrix,r=l.distance||e.far;r!==e.far&&(e.far=r,e.updateProjectionMatrix()),Hl.setFromMatrixPosition(l.matrixWorld),e.position.copy(Hl),Ul.copy(e.position),Ul.add(zl[t]),e.up.copy(Bl[t]),e.lookAt(Ul),e.updateMatrixWorld(),n.makeTranslation(-Hl.x,-Hl.y,-Hl.z),Vl.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),d._frustum.setFromProjectionMatrix(Vl,e.coordinateSystem,e.reversedDepth)}if(d.map.isWebGLCubeRenderTarget)e.setRenderTarget(d.map,t),e.clear();else{t===0&&(e.setRenderTarget(d.map),e.clear());let n=d.getViewport(t);o.set(a.x*n.x,a.y*n.y,a.x*n.z,a.y*n.w),f.viewport(o)}r=d.getFrustum(t),b(n,s,i,l,_,this.type)}d.isPointLightShadow!==!0&&this.type===3&&v(d,s),d.needsUpdate=!1}_=this.type,g.needsUpdate=!1,e.setRenderTarget(c,l,d)};function v(n,r){let a=t.update(h);f.defines.VSM_SAMPLES!==n.blurSamples&&(f.defines.VSM_SAMPLES=n.blurSamples,p.defines.VSM_SAMPLES=n.blurSamples,f.needsUpdate=!0,p.needsUpdate=!0),n.mapPass===null?n.mapPass=new Dn(i.x,i.y,{format:Ee,type:pe}):(n.mapPass.width!==n.map.width||n.mapPass.height!==n.map.height)&&n.mapPass.setSize(n.map.width,n.map.height),f.uniforms.shadow_pass.value=n.map.depthTexture,f.uniforms.resolution.value.set(n.map.width,n.map.height),f.uniforms.radius.value=n.radius,e.setRenderTarget(n.mapPass),e.clear(),e.renderBufferDirect(r,null,a,f,h,null),p.uniforms.shadow_pass.value=n.mapPass.texture,p.uniforms.resolution.value.set(n.map.width,n.map.height),p.uniforms.radius.value=n.radius,e.setRenderTarget(n.map),e.clear(),e.renderBufferDirect(r,null,a,p,h,null)}function y(t,n,r,i){let a=null,o=r.isPointLight===!0?t.customDistanceMaterial:t.customDepthMaterial;if(o!==void 0)a=o;else if(a=r.isPointLight===!0?c:s,e.localClippingEnabled&&n.clipShadows===!0&&Array.isArray(n.clippingPlanes)&&n.clippingPlanes.length!==0||n.displacementMap&&n.displacementScale!==0||n.alphaMap&&n.alphaTest>0||n.map&&n.alphaTest>0||n.alphaToCoverage===!0){let e=a.uuid,t=n.uuid,r=l[e];r===void 0&&(r={},l[e]=r);let i=r[t];i===void 0&&(i=a.clone(),r[t]=i,n.addEventListener(`dispose`,x)),a=i}if(a.visible=n.visible,a.wireframe=n.wireframe,i===3?a.side=n.shadowSide===null?n.side:n.shadowSide:a.side=n.shadowSide===null?d[n.side]:n.shadowSide,a.alphaMap=n.alphaMap,a.alphaTest=n.alphaToCoverage===!0?.5:n.alphaTest,a.map=n.map,a.clipShadows=n.clipShadows,a.clippingPlanes=n.clippingPlanes,a.clipIntersection=n.clipIntersection,a.displacementMap=n.displacementMap,a.displacementScale=n.displacementScale,a.displacementBias=n.displacementBias,a.wireframeLinewidth=n.wireframeLinewidth,a.linewidth=n.linewidth,r.isPointLight===!0&&a.isMeshDistanceMaterial===!0){let t=e.properties.get(a);t.light=r}return a}function b(n,i,a,o,s,c){if(n.visible===!1)return;if(n.layers.test(s)&&(n.isMesh||n.isLine||n.isPoints)&&(n.castShadow||n.receiveShadow&&c===3)&&(!n.frustumCulled||n.intersectsFrustum(r))){n.modelViewMatrix.multiplyMatrices(a.matrixWorldInverse,n.matrixWorld);let r=t.update(n),s=n.material;if(Array.isArray(s)){let t=r.groups;for(let l=0,u=t.length;l<u;l++){let u=t[l],d=s[u.materialIndex];if(d&&d.visible){let t=y(n,d,o,c);n.onBeforeShadow(e,n,i,a,r,t,u),e.renderBufferDirect(a,null,r,t,n,u),n.onAfterShadow(e,n,i,a,r,t,u)}}}else if(s.visible){let t=y(n,s,o,c);n.onBeforeShadow(e,n,i,a,r,t,null),e.renderBufferDirect(a,null,r,t,n,null),n.onAfterShadow(e,n,i,a,r,t,null)}}let l=n.children;for(let e=0,t=l.length;e<t;e++)b(l[e],i,a,o,s,c)}function x(e){e.target.removeEventListener(`dispose`,x);for(let t in l){let n=l[t],r=e.target.uuid;r in n&&(n[r].dispose(),delete n[r])}}}function Gl(e,t){function n(){let t=!1,n=new Tn,r=null,i=new Tn(0,0,0,0);return{setMask:function(n){r!==n&&!t&&(e.colorMask(n,n,n,n),r=n)},setLocked:function(e){t=e},setClear:function(t,r,a,o,s){s===!0&&(t*=o,r*=o,a*=o),n.set(t,r,a,o),i.equals(n)===!1&&(e.clearColor(t,r,a,o),i.copy(n))},reset:function(){t=!1,r=null,i.set(-1,0,0,0)}}}function r(){let n=!1,r=!1,i=null,a=null,o=null;return{setReversed:function(e){if(r!==e){let n=t.get(`EXT_clip_control`);e?n.clipControlEXT(n.LOWER_LEFT_EXT,n.ZERO_TO_ONE_EXT):n.clipControlEXT(n.LOWER_LEFT_EXT,n.NEGATIVE_ONE_TO_ONE_EXT),r=e;let i=o;o=null,this.setClear(i)}},getReversed:function(){return r},setTest:function(t){t?le(e.DEPTH_TEST):ue(e.DEPTH_TEST)},setMask:function(t){i!==t&&!n&&(e.depthMask(t),i=t)},setFunc:function(t){if(r&&(t=Mt[t]),a!==t){switch(t){case 0:e.depthFunc(e.NEVER);break;case 1:e.depthFunc(e.ALWAYS);break;case 2:e.depthFunc(e.LESS);break;case 3:e.depthFunc(e.LEQUAL);break;case 4:e.depthFunc(e.EQUAL);break;case 5:e.depthFunc(e.GEQUAL);break;case 6:e.depthFunc(e.GREATER);break;case 7:e.depthFunc(e.NOTEQUAL);break;default:e.depthFunc(e.LEQUAL)}a=t}},setLocked:function(e){n=e},setClear:function(t){o!==t&&(o=t,r&&(t=1-t),e.clearDepth(t))},reset:function(){n=!1,i=null,a=null,o=null,r=!1}}}function i(){let t=!1,n=null,r=null,i=null,a=null,o=null,s=null,c=null,l=null;return{setTest:function(n){t||(n?le(e.STENCIL_TEST):ue(e.STENCIL_TEST))},setMask:function(r){n!==r&&!t&&(e.stencilMask(r),n=r)},setFunc:function(t,n,o){(r!==t||i!==n||a!==o)&&(e.stencilFunc(t,n,o),r=t,i=n,a=o)},setOp:function(t,n,r){(o!==t||s!==n||c!==r)&&(e.stencilOp(t,n,r),o=t,s=n,c=r)},setLocked:function(e){t=e},setClear:function(t){l!==t&&(e.clearStencil(t),l=t)},reset:function(){t=!1,n=null,r=null,i=null,a=null,o=null,s=null,c=null,l=null}}}let a=new n,o=new r,s=new i,c={},l=new WeakMap,u={},d={},f={},p=new WeakMap,m=[],h=null,g=!1,_=null,v=null,y=null,b=null,x=null,S=null,C=null,w=new K(0,0,0),T=0,E=!1,D=null,O=null,k=null,A=null,j=null,ee=e.getParameter(e.MAX_COMBINED_TEXTURE_IMAGE_UNITS),M=!1,N=0,P=e.getParameter(e.VERSION);P.indexOf(`WebGL`)===-1?P.indexOf(`OpenGL ES`)!==-1&&(N=parseFloat(/^OpenGL ES (\d)/.exec(P)[1]),M=N>=2):(N=parseFloat(/^WebGL (\d)/.exec(P)[1]),M=N>=1);let te=null,ne={},re=e.getParameter(e.SCISSOR_BOX),ie=e.getParameter(e.VIEWPORT),ae=new Tn().fromArray(re),oe=new Tn().fromArray(ie);function se(t,n,r,i){let a=new Uint8Array(4),o=e.createTexture();e.bindTexture(t,o),e.texParameteri(t,e.TEXTURE_MIN_FILTER,e.NEAREST),e.texParameteri(t,e.TEXTURE_MAG_FILTER,e.NEAREST);for(let o=0;o<r;o++)t===e.TEXTURE_3D||t===e.TEXTURE_2D_ARRAY?e.texImage3D(n,0,e.RGBA,1,1,i,0,e.RGBA,e.UNSIGNED_BYTE,a):e.texImage2D(n+o,0,e.RGBA,1,1,0,e.RGBA,e.UNSIGNED_BYTE,a);return o}let ce={};ce[e.TEXTURE_2D]=se(e.TEXTURE_2D,e.TEXTURE_2D,1),ce[e.TEXTURE_CUBE_MAP]=se(e.TEXTURE_CUBE_MAP,e.TEXTURE_CUBE_MAP_POSITIVE_X,6),ce[e.TEXTURE_2D_ARRAY]=se(e.TEXTURE_2D_ARRAY,e.TEXTURE_2D_ARRAY,1,1),ce[e.TEXTURE_3D]=se(e.TEXTURE_3D,e.TEXTURE_3D,1,1),a.setClear(0,0,0,1),o.setClear(1),s.setClear(0),le(e.DEPTH_TEST),o.setFunc(3),ve(!1),ye(1),le(e.CULL_FACE),ge(0);function le(t){u[t]!==!0&&(e.enable(t),u[t]=!0)}function ue(t){u[t]!==!1&&(e.disable(t),u[t]=!1)}function de(t,n){return f[t]!==n&&(e.bindFramebuffer(t,n),f[t]=n,t===e.DRAW_FRAMEBUFFER&&(f[e.FRAMEBUFFER]=n),t===e.FRAMEBUFFER&&(f[e.DRAW_FRAMEBUFFER]=n),!0)}function fe(t,n){let r=m,i=!1;if(t){r=p.get(n),r===void 0&&(r=[],p.set(n,r));let a=t.textures;if(r.length!==a.length||r[0]!==e.COLOR_ATTACHMENT0){for(let t=0,n=a.length;t<n;t++)r[t]=e.COLOR_ATTACHMENT0+t;r.length=a.length,i=!0}}else r[0]!==e.BACK&&(r[0]=e.BACK,i=!0);i&&e.drawBuffers(r)}function pe(t){return h!==t&&(e.useProgram(t),h=t,!0)}let me={100:e.FUNC_ADD,101:e.FUNC_SUBTRACT,102:e.FUNC_REVERSE_SUBTRACT};me[103]=e.MIN,me[104]=e.MAX;let he={200:e.ZERO,201:e.ONE,202:e.SRC_COLOR,204:e.SRC_ALPHA,210:e.SRC_ALPHA_SATURATE,208:e.DST_COLOR,206:e.DST_ALPHA,203:e.ONE_MINUS_SRC_COLOR,205:e.ONE_MINUS_SRC_ALPHA,209:e.ONE_MINUS_DST_COLOR,207:e.ONE_MINUS_DST_ALPHA,211:e.CONSTANT_COLOR,212:e.ONE_MINUS_CONSTANT_COLOR,213:e.CONSTANT_ALPHA,214:e.ONE_MINUS_CONSTANT_ALPHA};function ge(t,n,r,i,a,o,s,c,l,u){if(t===0)g===!0&&(ue(e.BLEND),g=!1);else if(g===!1&&(le(e.BLEND),g=!0),t!==5){if(t!==_||u!==E){if((v!==100||x!==100)&&(e.blendEquation(e.FUNC_ADD),v=100,x=100),u)switch(t){case 1:e.blendFuncSeparate(e.ONE,e.ONE_MINUS_SRC_ALPHA,e.ONE,e.ONE_MINUS_SRC_ALPHA);break;case 2:e.blendFunc(e.ONE,e.ONE);break;case 3:e.blendFuncSeparate(e.ZERO,e.ONE_MINUS_SRC_COLOR,e.ZERO,e.ONE);break;case 4:e.blendFuncSeparate(e.DST_COLOR,e.ONE_MINUS_SRC_ALPHA,e.ZERO,e.ONE);break;default:B(`WebGLState: Invalid blending: `,t)}else switch(t){case 1:e.blendFuncSeparate(e.SRC_ALPHA,e.ONE_MINUS_SRC_ALPHA,e.ONE,e.ONE_MINUS_SRC_ALPHA);break;case 2:e.blendFuncSeparate(e.SRC_ALPHA,e.ONE,e.ONE,e.ONE);break;case 3:B(`WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true`);break;case 4:B(`WebGLState: MultiplyBlending requires material.premultipliedAlpha = true`);break;default:B(`WebGLState: Invalid blending: `,t)}y=null,b=null,S=null,C=null,w.set(0,0,0),T=0,_=t,E=u}}else a||=n,o||=r,s||=i,(n!==v||a!==x)&&(e.blendEquationSeparate(me[n],me[a]),v=n,x=a),(r!==y||i!==b||o!==S||s!==C)&&(e.blendFuncSeparate(he[r],he[i],he[o],he[s]),y=r,b=i,S=o,C=s),(c.equals(w)===!1||l!==T)&&(e.blendColor(c.r,c.g,c.b,l),w.copy(c),T=l),_=t,E=!1}function _e(t,n){t.side===2?ue(e.CULL_FACE):le(e.CULL_FACE);let r=t.side===1;n&&(r=!r),ve(r),t.blending===1&&t.transparent===!1?ge(0):ge(t.blending,t.blendEquation,t.blendSrc,t.blendDst,t.blendEquationAlpha,t.blendSrcAlpha,t.blendDstAlpha,t.blendColor,t.blendAlpha,t.premultipliedAlpha),o.setFunc(t.depthFunc),o.setTest(t.depthTest),o.setMask(t.depthWrite),a.setMask(t.colorWrite);let i=t.stencilWrite;s.setTest(i),i&&(s.setMask(t.stencilWriteMask),s.setFunc(t.stencilFunc,t.stencilRef,t.stencilFuncMask),s.setOp(t.stencilFail,t.stencilZFail,t.stencilZPass)),xe(t.polygonOffset,t.polygonOffsetFactor,t.polygonOffsetUnits),t.alphaToCoverage===!0?le(e.SAMPLE_ALPHA_TO_COVERAGE):ue(e.SAMPLE_ALPHA_TO_COVERAGE)}function ve(t){D!==t&&(t?e.frontFace(e.CW):e.frontFace(e.CCW),D=t)}function ye(t){t===0?ue(e.CULL_FACE):(le(e.CULL_FACE),t!==O&&(t===1?e.cullFace(e.BACK):t===2?e.cullFace(e.FRONT):e.cullFace(e.FRONT_AND_BACK))),O=t}function be(t){t!==k&&(M&&e.lineWidth(t),k=t)}function xe(t,n,r){t?(le(e.POLYGON_OFFSET_FILL),(A!==n||j!==r)&&(A=n,j=r,o.getReversed()&&(n=-n,r=-r),e.polygonOffset(n,r))):ue(e.POLYGON_OFFSET_FILL)}function Se(t){t?le(e.SCISSOR_TEST):ue(e.SCISSOR_TEST)}function Ce(t){t===void 0&&(t=e.TEXTURE0+ee-1),te!==t&&(e.activeTexture(t),te=t)}function we(t,n,r){r===void 0&&(r=te===null?e.TEXTURE0+ee-1:te);let i=ne[r];i===void 0&&(i={type:void 0,texture:void 0},ne[r]=i),(i.type!==t||i.texture!==n)&&(te!==r&&(e.activeTexture(r),te=r),e.bindTexture(t,n||ce[t]),i.type=t,i.texture=n)}function Te(){let t=ne[te];t!==void 0&&t.type!==void 0&&(e.bindTexture(t.type,null),t.type=void 0,t.texture=void 0)}function Ee(){try{e.compressedTexImage2D(...arguments)}catch(e){B(`WebGLState:`,e)}}function De(){try{e.compressedTexImage3D(...arguments)}catch(e){B(`WebGLState:`,e)}}function Oe(){try{e.texSubImage2D(...arguments)}catch(e){B(`WebGLState:`,e)}}function ke(){try{e.texSubImage3D(...arguments)}catch(e){B(`WebGLState:`,e)}}function Ae(){try{e.compressedTexSubImage2D(...arguments)}catch(e){B(`WebGLState:`,e)}}function je(){try{e.compressedTexSubImage3D(...arguments)}catch(e){B(`WebGLState:`,e)}}function Me(){try{e.texStorage2D(...arguments)}catch(e){B(`WebGLState:`,e)}}function Ne(){try{e.texStorage3D(...arguments)}catch(e){B(`WebGLState:`,e)}}function Pe(){try{e.texImage2D(...arguments)}catch(e){B(`WebGLState:`,e)}}function F(){try{e.texImage3D(...arguments)}catch(e){B(`WebGLState:`,e)}}function Fe(t){return d[t]===void 0?e.getParameter(t):d[t]}function Ie(t,n){d[t]!==n&&(e.pixelStorei(t,n),d[t]=n)}function Le(t){ae.equals(t)===!1&&(e.scissor(t.x,t.y,t.z,t.w),ae.copy(t))}function I(t){oe.equals(t)===!1&&(e.viewport(t.x,t.y,t.z,t.w),oe.copy(t))}function Re(t,n){let r=l.get(n);r===void 0&&(r=new WeakMap,l.set(n,r));let i=r.get(t);i===void 0&&(i=e.getUniformBlockIndex(n,t.name),e.uniformBlockBinding(n,i,i),r.set(t,i))}function L(t,n,r){let i=l.get(n).get(t);c[i]!==r&&(e.bindBufferBase(e.UNIFORM_BUFFER,i,r),c[i]=r)}function R(){e.disable(e.BLEND),e.disable(e.CULL_FACE),e.disable(e.DEPTH_TEST),e.disable(e.POLYGON_OFFSET_FILL),e.disable(e.SCISSOR_TEST),e.disable(e.STENCIL_TEST),e.disable(e.SAMPLE_ALPHA_TO_COVERAGE),e.blendEquation(e.FUNC_ADD),e.blendFunc(e.ONE,e.ZERO),e.blendFuncSeparate(e.ONE,e.ZERO,e.ONE,e.ZERO),e.blendColor(0,0,0,0),e.colorMask(!0,!0,!0,!0),e.clearColor(0,0,0,0),e.depthMask(!0),e.depthFunc(e.LESS),o.setReversed(!1),e.clearDepth(1),e.stencilMask(4294967295),e.stencilFunc(e.ALWAYS,0,4294967295),e.stencilOp(e.KEEP,e.KEEP,e.KEEP),e.clearStencil(0),e.cullFace(e.BACK),e.frontFace(e.CCW),e.polygonOffset(0,0),e.activeTexture(e.TEXTURE0),e.bindFramebuffer(e.FRAMEBUFFER,null),e.bindFramebuffer(e.DRAW_FRAMEBUFFER,null),e.bindFramebuffer(e.READ_FRAMEBUFFER,null),e.useProgram(null),e.lineWidth(1),e.scissor(0,0,e.canvas.width,e.canvas.height),e.viewport(0,0,e.canvas.width,e.canvas.height),e.pixelStorei(e.PACK_ALIGNMENT,4),e.pixelStorei(e.UNPACK_ALIGNMENT,4),e.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,!1),e.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),e.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,e.BROWSER_DEFAULT_WEBGL),e.pixelStorei(e.PACK_ROW_LENGTH,0),e.pixelStorei(e.PACK_SKIP_PIXELS,0),e.pixelStorei(e.PACK_SKIP_ROWS,0),e.pixelStorei(e.UNPACK_ROW_LENGTH,0),e.pixelStorei(e.UNPACK_IMAGE_HEIGHT,0),e.pixelStorei(e.UNPACK_SKIP_PIXELS,0),e.pixelStorei(e.UNPACK_SKIP_ROWS,0),e.pixelStorei(e.UNPACK_SKIP_IMAGES,0),u={},d={},te=null,ne={},f={},c={},p=new WeakMap,m=[],h=null,g=!1,_=null,v=null,y=null,b=null,x=null,S=null,C=null,w=new K(0,0,0),T=0,E=!1,D=null,O=null,k=null,A=null,j=null,ae.set(0,0,e.canvas.width,e.canvas.height),oe.set(0,0,e.canvas.width,e.canvas.height),a.reset(),o.reset(),s.reset()}return{buffers:{color:a,depth:o,stencil:s},enable:le,disable:ue,bindFramebuffer:de,drawBuffers:fe,useProgram:pe,setBlending:ge,setMaterial:_e,setFlipSided:ve,setCullFace:ye,setLineWidth:be,setPolygonOffset:xe,setScissorTest:Se,activeTexture:Ce,bindTexture:we,unbindTexture:Te,compressedTexImage2D:Ee,compressedTexImage3D:De,texImage2D:Pe,texImage3D:F,pixelStorei:Ie,getParameter:Fe,updateUBOMapping:Re,uniformBlockBinding:L,texStorage2D:Me,texStorage3D:Ne,texSubImage2D:Oe,texSubImage3D:ke,compressedTexSubImage2D:Ae,compressedTexSubImage3D:je,scissor:Le,viewport:I,reset:R}}function Kl(e,t,n,r,i,a,o){let s=t.has(`WEBGL_multisampled_render_to_texture`)?t.get(`WEBGL_multisampled_render_to_texture`):null,c=typeof navigator>`u`?!1:/OculusBrowser/g.test(navigator.userAgent),l=new H,u=new WeakMap,d=new Set,f,p=new WeakMap,m=new Set,h=new FinalizationRegistry(e=>m.delete(e)),g=!1;try{g=typeof OffscreenCanvas<`u`&&new OffscreenCanvas(1,1).getContext(`2d`)!==null}catch{}function _(e,t){return g?new OffscreenCanvas(e,t):Tt(`canvas`)}function v(e,t,n){let r=1,i=R(e);if((i.width>n||i.height>n)&&(r=n/Math.max(i.width,i.height)),r<1){if(typeof HTMLImageElement<`u`&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<`u`&&e instanceof HTMLCanvasElement||typeof ImageBitmap<`u`&&e instanceof ImageBitmap||typeof VideoFrame<`u`&&e instanceof VideoFrame){let n=Math.floor(r*i.width),a=Math.floor(r*i.height);f===void 0&&(f=_(n,a));let o=t?_(n,a):f;return o.width=n,o.height=a,o.getContext(`2d`).drawImage(e,0,0,n,a),z(`WebGLRenderer: Texture has been resized from (`+i.width+`x`+i.height+`) to (`+n+`x`+a+`).`),o}return`data`in e&&z(`WebGLRenderer: Image in DataTexture is too big (`+i.width+`x`+i.height+`).`),e}return e}function y(e){return e.generateMipmaps}function b(t){e.generateMipmap(t)}function x(t){return t.isWebGLCubeRenderTarget?e.TEXTURE_CUBE_MAP:t.isWebGL3DRenderTarget?e.TEXTURE_3D:t.isWebGLArrayRenderTarget||t.isCompressedArrayTexture?e.TEXTURE_2D_ARRAY:e.TEXTURE_2D}function S(n,r,i,a,o,s=!1){if(n!==null){if(e[n]!==void 0)return e[n];z(`WebGLRenderer: Attempt to use non-existing WebGL internal format '`+n+`'`)}let c;a&&(c=t.get(`EXT_texture_norm16`),c||z(`WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension`));let l=r;if(r===e.RED&&(i===e.FLOAT&&(l=e.R32F),i===e.HALF_FLOAT&&(l=e.R16F),i===e.UNSIGNED_BYTE&&(l=e.R8),i===e.UNSIGNED_SHORT&&c&&(l=c.R16_EXT),i===e.SHORT&&c&&(l=c.R16_SNORM_EXT)),r===e.RED_INTEGER&&(i===e.UNSIGNED_BYTE&&(l=e.R8UI),i===e.UNSIGNED_SHORT&&(l=e.R16UI),i===e.UNSIGNED_INT&&(l=e.R32UI),i===e.BYTE&&(l=e.R8I),i===e.SHORT&&(l=e.R16I),i===e.INT&&(l=e.R32I)),r===e.RG&&(i===e.FLOAT&&(l=e.RG32F),i===e.HALF_FLOAT&&(l=e.RG16F),i===e.UNSIGNED_BYTE&&(l=e.RG8),i===e.UNSIGNED_SHORT&&c&&(l=c.RG16_EXT),i===e.SHORT&&c&&(l=c.RG16_SNORM_EXT)),r===e.RG_INTEGER&&(i===e.UNSIGNED_BYTE&&(l=e.RG8UI),i===e.UNSIGNED_SHORT&&(l=e.RG16UI),i===e.UNSIGNED_INT&&(l=e.RG32UI),i===e.BYTE&&(l=e.RG8I),i===e.SHORT&&(l=e.RG16I),i===e.INT&&(l=e.RG32I)),r===e.RGB_INTEGER&&(i===e.UNSIGNED_BYTE&&(l=e.RGB8UI),i===e.UNSIGNED_SHORT&&(l=e.RGB16UI),i===e.UNSIGNED_INT&&(l=e.RGB32UI),i===e.BYTE&&(l=e.RGB8I),i===e.SHORT&&(l=e.RGB16I),i===e.INT&&(l=e.RGB32I)),r===e.RGBA_INTEGER&&(i===e.UNSIGNED_BYTE&&(l=e.RGBA8UI),i===e.UNSIGNED_SHORT&&(l=e.RGBA16UI),i===e.UNSIGNED_INT&&(l=e.RGBA32UI),i===e.BYTE&&(l=e.RGBA8I),i===e.SHORT&&(l=e.RGBA16I),i===e.INT&&(l=e.RGBA32I)),r===e.RGB&&(i===e.UNSIGNED_SHORT&&c&&(l=c.RGB16_EXT),i===e.SHORT&&c&&(l=c.RGB16_SNORM_EXT),i===e.UNSIGNED_INT_5_9_9_9_REV&&(l=e.RGB9_E5),i===e.UNSIGNED_INT_10F_11F_11F_REV&&(l=e.R11F_G11F_B10F)),r===e.RGBA){let t=s?_t:G.getTransfer(o);i===e.FLOAT&&(l=e.RGBA32F),i===e.HALF_FLOAT&&(l=e.RGBA16F),i===e.UNSIGNED_BYTE&&(l=t===`srgb`?e.SRGB8_ALPHA8:e.RGBA8),i===e.UNSIGNED_SHORT&&c&&(l=c.RGBA16_EXT),i===e.SHORT&&c&&(l=c.RGBA16_SNORM_EXT),i===e.UNSIGNED_SHORT_4_4_4_4&&(l=e.RGBA4),i===e.UNSIGNED_SHORT_5_5_5_1&&(l=e.RGB5_A1)}return(l===e.R16F||l===e.R32F||l===e.RG16F||l===e.RG32F||l===e.RGBA16F||l===e.RGBA32F)&&t.get(`EXT_color_buffer_float`),l}function C(t,n){let r;return t?n===null||n===1014||n===1020?r=e.DEPTH24_STENCIL8:n===1015?r=e.DEPTH32F_STENCIL8:n===1012&&(r=e.DEPTH24_STENCIL8,z(`DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.`)):n===null||n===1014||n===1020?r=e.DEPTH_COMPONENT24:n===1015?r=e.DEPTH_COMPONENT32F:n===1012&&(r=e.DEPTH_COMPONENT16),r}function w(e,t){return y(e)===!0||e.isFramebufferTexture&&e.minFilter!==1003&&e.minFilter!==1006?Math.log2(Math.max(t.width,t.height))+1:e.mipmaps.length>0?e.mipmaps.length:e.isCompressedTexture&&Array.isArray(e.image)?t.mipmaps.length:1}function T(e){let t=new WeakRef(e);r.get(e).__ref=t,m.add(t),h.register(e,t,t)}function E(e){let t=r.get(e).__ref;t!==void 0&&(m.delete(t),h.unregister(t))}function D(e){k(e.target)}function O(e){A(e.target)}function k(e){e.removeEventListener(`dispose`,D),E(e),oe(e),e.isVideoTexture&&u.delete(e),e.isHTMLTexture&&d.delete(e)}function A(e){e.removeEventListener(`dispose`,O),E(e),ce(e)}function j(){for(let e of m){let t=e.deref();t!==void 0&&(t.isRenderTarget===!0?A(t):k(t))}m.clear(),d.clear()}function oe(e){let t=r.get(e);if(t.__webglInit===void 0)return;let n=e.source,i=p.get(n);if(i){let r=i[t.__cacheKey];r.usedTimes--,r.usedTimes===0&&se(e),Object.keys(i).length===0&&p.delete(n)}r.remove(e)}function se(t){let n=r.get(t);e.deleteTexture(n.__webglTexture);let i=t.source,a=p.get(i);delete a[n.__cacheKey],o.memory.textures--}function ce(t){let n=r.get(t);n.__depthDisposeCallback&&n.__depthDisposeCallback();let i=t.depthTexture;if(i&&i.renderTarget===t&&k(i),t.isWebGLCubeRenderTarget)for(let t=0;t<6;t++){if(Array.isArray(n.__webglFramebuffer[t]))for(let r=0;r<n.__webglFramebuffer[t].length;r++)e.deleteFramebuffer(n.__webglFramebuffer[t][r]);else e.deleteFramebuffer(n.__webglFramebuffer[t]);n.__webglDepthbuffer&&e.deleteRenderbuffer(n.__webglDepthbuffer[t])}else{if(Array.isArray(n.__webglFramebuffer))for(let t=0;t<n.__webglFramebuffer.length;t++)e.deleteFramebuffer(n.__webglFramebuffer[t]);else e.deleteFramebuffer(n.__webglFramebuffer);if(n.__webglDepthbuffer&&e.deleteRenderbuffer(n.__webglDepthbuffer),n.__webglMultisampledFramebuffer&&e.deleteFramebuffer(n.__webglMultisampledFramebuffer),n.__webglColorRenderbuffer)for(let t=0;t<n.__webglColorRenderbuffer.length;t++)n.__webglColorRenderbuffer[t]&&e.deleteRenderbuffer(n.__webglColorRenderbuffer[t]);n.__webglDepthRenderbuffer&&e.deleteRenderbuffer(n.__webglDepthRenderbuffer)}let a=t.textures;for(let t=0,n=a.length;t<n;t++){let n=r.get(a[t]);n.__webglTexture&&(e.deleteTexture(n.__webglTexture),o.memory.textures--),r.remove(a[t])}r.remove(t)}let le=0;function ue(){le=0}function de(){return le}function fe(e){le=e}function pe(){let e=le;return e>=i.maxTextures&&z(`WebGLTextures: Trying to use `+(e+1)+` texture units while this GPU supports only `+i.maxTextures),le+=1,e}function me(e){let t=[];return t.push(e.wrapS),t.push(e.wrapT),t.push(e.wrapR||0),t.push(e.magFilter),t.push(e.minFilter),t.push(e.anisotropy),t.push(e.internalFormat),t.push(e.format),t.push(e.type),t.push(e.generateMipmaps),t.push(e.mipmapsAutoUpdate),t.push(e.premultiplyAlpha),t.push(e.flipY),t.push(e.unpackAlignment),t.push(e.colorSpace),t.join()}function he(t,i){let a=r.get(t);if(t.isVideoTexture&&Re(t),t.isRenderTargetTexture===!1&&t.isExternalTexture!==!0&&t.version>0&&a.__version!==t.version){let e=t.image;if(e===null)z(`WebGLRenderer: Texture marked for update but no image data found.`);else if(e.complete===!1)z(`WebGLRenderer: Texture marked for update but image is incomplete`);else{De(a,t,i);return}}else t.isExternalTexture&&(a.__webglTexture=t.sourceTexture?t.sourceTexture:null);n.bindTexture(e.TEXTURE_2D,a.__webglTexture,e.TEXTURE0+i)}function ge(t,i){let a=r.get(t);t.isRenderTargetTexture===!1&&t.version>0&&a.__version!==t.version?De(a,t,i):(t.isExternalTexture&&(a.__webglTexture=t.sourceTexture?t.sourceTexture:null),n.bindTexture(e.TEXTURE_2D_ARRAY,a.__webglTexture,e.TEXTURE0+i))}function _e(t,i){let a=r.get(t);t.isRenderTargetTexture===!1&&t.version>0&&a.__version!==t.version?De(a,t,i):n.bindTexture(e.TEXTURE_3D,a.__webglTexture,e.TEXTURE0+i)}function ve(t,i){let a=r.get(t);t.version>0&&a.__version!==t.version?Oe(a,t,i):n.bindTexture(e.TEXTURE_CUBE_MAP,a.__webglTexture,e.TEXTURE0+i)}let ye={[ee]:e.REPEAT,[M]:e.CLAMP_TO_EDGE,[N]:e.MIRRORED_REPEAT},be={[P]:e.NEAREST,[te]:e.NEAREST_MIPMAP_NEAREST,[ne]:e.NEAREST_MIPMAP_LINEAR,[re]:e.LINEAR,[ie]:e.LINEAR_MIPMAP_NEAREST,[ae]:e.LINEAR_MIPMAP_LINEAR},xe={512:e.NEVER,519:e.ALWAYS,513:e.LESS,515:e.LEQUAL,514:e.EQUAL,518:e.GEQUAL,516:e.GREATER,517:e.NOTEQUAL};function Se(n,a){if(a.type===1015&&t.has(`OES_texture_float_linear`)===!1&&(a.magFilter===1006||a.magFilter===1007||a.magFilter===1005||a.magFilter===1008||a.minFilter===1006||a.minFilter===1007||a.minFilter===1005||a.minFilter===1008)&&z(`WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device.`),e.texParameteri(n,e.TEXTURE_WRAP_S,ye[a.wrapS]),e.texParameteri(n,e.TEXTURE_WRAP_T,ye[a.wrapT]),(n===e.TEXTURE_3D||n===e.TEXTURE_2D_ARRAY)&&e.texParameteri(n,e.TEXTURE_WRAP_R,ye[a.wrapR]),e.texParameteri(n,e.TEXTURE_MAG_FILTER,be[a.magFilter]),e.texParameteri(n,e.TEXTURE_MIN_FILTER,be[a.minFilter]),a.compareFunction&&(e.texParameteri(n,e.TEXTURE_COMPARE_MODE,e.COMPARE_REF_TO_TEXTURE),e.texParameteri(n,e.TEXTURE_COMPARE_FUNC,xe[a.compareFunction])),t.has(`EXT_texture_filter_anisotropic`)===!0){if(a.magFilter===1003||a.minFilter!==1005&&a.minFilter!==1008||a.type===1015&&t.has(`OES_texture_float_linear`)===!1)return;if(a.anisotropy>1||r.get(a).__currentAnisotropy){let o=t.get(`EXT_texture_filter_anisotropic`);e.texParameterf(n,o.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(a.anisotropy,i.getMaxAnisotropy())),r.get(a).__currentAnisotropy=a.anisotropy}}}function we(t,n){let r=!1;t.__webglInit===void 0&&(t.__webglInit=!0,n.addEventListener(`dispose`,D),T(n));let i=n.source,a=p.get(i);a===void 0&&(a={},p.set(i,a));let s=me(n);if(s!==t.__cacheKey){a[s]===void 0&&(a[s]={texture:e.createTexture(),usedTimes:0},o.memory.textures++,r=!0),a[s].usedTimes++;let i=a[t.__cacheKey];i!==void 0&&(a[t.__cacheKey].usedTimes--,i.usedTimes===0&&se(n)),t.__cacheKey=s,t.__webglTexture=a[s].texture}return r}function Te(e,t,n){return Math.floor(Math.floor(e/n)/t)}function Ee(t,r,i,a){let o=t.updateRanges;if(o.length===0)n.texSubImage2D(e.TEXTURE_2D,0,0,0,r.width,r.height,i,a,r.data);else{o.sort((e,t)=>e.start-t.start);let s=0;for(let e=1;e<o.length;e++){let t=o[s],n=o[e],i=t.start+t.count,a=Te(n.start,r.width,4),c=Te(t.start,r.width,4);n.start<=i+1&&a===c&&Te(n.start+n.count-1,r.width,4)===a?t.count=Math.max(t.count,n.start+n.count-t.start):(++s,o[s]=n)}o.length=s+1;let c=n.getParameter(e.UNPACK_ROW_LENGTH),l=n.getParameter(e.UNPACK_SKIP_PIXELS),u=n.getParameter(e.UNPACK_SKIP_ROWS);n.pixelStorei(e.UNPACK_ROW_LENGTH,r.width);for(let t=0,s=o.length;t<s;t++){let s=o[t],c=Math.floor(s.start/4),l=Math.ceil(s.count/4),u=c%r.width,d=Math.floor(c/r.width),f=l;n.pixelStorei(e.UNPACK_SKIP_PIXELS,u),n.pixelStorei(e.UNPACK_SKIP_ROWS,d),n.texSubImage2D(e.TEXTURE_2D,0,u,d,f,1,i,a,r.data)}t.clearUpdateRanges(),n.pixelStorei(e.UNPACK_ROW_LENGTH,c),n.pixelStorei(e.UNPACK_SKIP_PIXELS,l),n.pixelStorei(e.UNPACK_SKIP_ROWS,u)}}function De(t,o,s){let c=e.TEXTURE_2D;(o.isDataArrayTexture||o.isCompressedArrayTexture)&&(c=e.TEXTURE_2D_ARRAY),o.isData3DTexture&&(c=e.TEXTURE_3D);let l=we(t,o),u=o.source;n.bindTexture(c,t.__webglTexture,e.TEXTURE0+s);let f=r.get(u);if(u.version!==f.__version||l===!0){if(n.activeTexture(e.TEXTURE0+s),!(typeof ImageBitmap<`u`&&o.image instanceof ImageBitmap)){let t=G.getPrimaries(G.workingColorSpace),r=o.colorSpace===``?null:G.getPrimaries(o.colorSpace),i=o.colorSpace===``||t===r?e.NONE:e.BROWSER_DEFAULT_WEBGL;n.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,o.flipY),n.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,o.premultiplyAlpha),n.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,i)}n.pixelStorei(e.UNPACK_ALIGNMENT,o.unpackAlignment);let t=v(o.image,!1,i.maxTextureSize);t=L(o,t);let r=a.convert(o.format,o.colorSpace),p=a.convert(o.type),m=S(o.internalFormat,r,p,o.normalized,o.colorSpace,o.isVideoTexture);Se(c,o);let h,g=o.mipmaps,_=o.isVideoTexture!==!0,x=f.__version===void 0||l===!0,T=u.dataReady,E=w(o,t);if(o.isDepthTexture)m=C(o.format===Ce,o.type),x&&(_?n.texStorage2D(e.TEXTURE_2D,1,m,t.width,t.height):n.texImage2D(e.TEXTURE_2D,0,m,t.width,t.height,0,r,p,null));else if(o.isDataTexture){if(g.length>0){_&&x&&n.texStorage2D(e.TEXTURE_2D,E,m,g[0].width,g[0].height);for(let t=0,i=g.length;t<i;t++)h=g[t],_?T&&n.texSubImage2D(e.TEXTURE_2D,t,0,0,h.width,h.height,r,p,h.data):n.texImage2D(e.TEXTURE_2D,t,m,h.width,h.height,0,r,p,h.data);o.generateMipmaps=!1}else _?(x&&n.texStorage2D(e.TEXTURE_2D,E,m,t.width,t.height),T&&Ee(o,t,r,p)):n.texImage2D(e.TEXTURE_2D,0,m,t.width,t.height,0,r,p,t.data)}else if(o.isCompressedTexture){if(o.isCompressedArrayTexture){_&&x&&n.texStorage3D(e.TEXTURE_2D_ARRAY,E,m,g[0].width,g[0].height,t.depth);for(let i=0,a=g.length;i<a;i++)if(h=g[i],o.format!==1023){if(r!==null){if(_){if(T){if(o.layerUpdates.size>0){let t=Jo(h.width,h.height,o.format,o.type);for(let a of o.layerUpdates){let o=h.data.subarray(a*t/h.data.BYTES_PER_ELEMENT,(a+1)*t/h.data.BYTES_PER_ELEMENT);n.compressedTexSubImage3D(e.TEXTURE_2D_ARRAY,i,0,0,a,h.width,h.height,1,r,o)}}else n.compressedTexSubImage3D(e.TEXTURE_2D_ARRAY,i,0,0,0,h.width,h.height,t.depth,r,h.data)}}else n.compressedTexImage3D(e.TEXTURE_2D_ARRAY,i,m,h.width,h.height,t.depth,0,h.data,0,0)}else z(`WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()`)}else _?T&&n.texSubImage3D(e.TEXTURE_2D_ARRAY,i,0,0,0,h.width,h.height,t.depth,r,p,h.data):n.texImage3D(e.TEXTURE_2D_ARRAY,i,m,h.width,h.height,t.depth,0,r,p,h.data);o.layerUpdates.size>0&&o.clearLayerUpdates()}else{_&&x&&n.texStorage2D(e.TEXTURE_2D,E,m,g[0].width,g[0].height);for(let t=0,i=g.length;t<i;t++)h=g[t],o.format===1023?_?T&&n.texSubImage2D(e.TEXTURE_2D,t,0,0,h.width,h.height,r,p,h.data):n.texImage2D(e.TEXTURE_2D,t,m,h.width,h.height,0,r,p,h.data):r===null?z(`WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()`):_?T&&n.compressedTexSubImage2D(e.TEXTURE_2D,t,0,0,h.width,h.height,r,h.data):n.compressedTexImage2D(e.TEXTURE_2D,t,m,h.width,h.height,0,h.data)}}else if(o.isDataArrayTexture){if(_){if(x&&n.texStorage3D(e.TEXTURE_2D_ARRAY,E,m,t.width,t.height,t.depth),T){if(o.layerUpdates.size>0){let i=Jo(t.width,t.height,o.format,o.type);for(let a of o.layerUpdates){let o=t.data.subarray(a*i/t.data.BYTES_PER_ELEMENT,(a+1)*i/t.data.BYTES_PER_ELEMENT);n.texSubImage3D(e.TEXTURE_2D_ARRAY,0,0,0,a,t.width,t.height,1,r,p,o)}o.clearLayerUpdates()}else n.texSubImage3D(e.TEXTURE_2D_ARRAY,0,0,0,0,t.width,t.height,t.depth,r,p,t.data)}}else n.texImage3D(e.TEXTURE_2D_ARRAY,0,m,t.width,t.height,t.depth,0,r,p,t.data)}else if(o.isData3DTexture)_?(x&&n.texStorage3D(e.TEXTURE_3D,E,m,t.width,t.height,t.depth),T&&n.texSubImage3D(e.TEXTURE_3D,0,0,0,0,t.width,t.height,t.depth,r,p,t.data)):n.texImage3D(e.TEXTURE_3D,0,m,t.width,t.height,t.depth,0,r,p,t.data);else if(o.isFramebufferTexture){if(x){if(_)n.texStorage2D(e.TEXTURE_2D,E,m,t.width,t.height);else{let i=t.width,a=t.height;for(let t=0;t<E;t++)n.texImage2D(e.TEXTURE_2D,t,m,i,a,0,r,p,null),i>>=1,a>>=1}}}else if(o.isHTMLTexture){if(`texElementImage2D`in e){let n=e.canvas;if(n.hasAttribute(`layoutsubtree`)||n.setAttribute(`layoutsubtree`,`true`),t.parentNode!==n){n.appendChild(t),d.add(o),n.onpaint=e=>{let t=e.changedElements;for(let e of d)t.includes(e.image)&&(e.needsUpdate=!0)},n.requestPaint();return}if(e.texElementImage2D.length===3)e.texElementImage2D(e.TEXTURE_2D,e.RGBA8,t);else{let n=e.RGBA,r=e.RGBA,i=e.UNSIGNED_BYTE;e.texElementImage2D(e.TEXTURE_2D,0,n,r,i,t)}e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MIN_FILTER,e.LINEAR),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_S,e.CLAMP_TO_EDGE),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_T,e.CLAMP_TO_EDGE)}}else if(g.length>0){if(_&&x){let t=R(g[0]);n.texStorage2D(e.TEXTURE_2D,E,m,t.width,t.height)}for(let t=0,i=g.length;t<i;t++)h=g[t],_?T&&n.texSubImage2D(e.TEXTURE_2D,t,0,0,r,p,h):n.texImage2D(e.TEXTURE_2D,t,m,r,p,h);o.generateMipmaps=!1}else if(_){if(x){let r=R(t);n.texStorage2D(e.TEXTURE_2D,E,m,r.width,r.height)}T&&n.texSubImage2D(e.TEXTURE_2D,0,0,0,r,p,t)}else n.texImage2D(e.TEXTURE_2D,0,m,r,p,t);y(o)&&o.mipmapsAutoUpdate===!0&&b(c),f.__version=u.version,o.onUpdate&&o.onUpdate(o)}t.__version=o.version}function Oe(t,o,s){if(o.image.length!==6)return;let c=we(t,o),l=o.source;n.bindTexture(e.TEXTURE_CUBE_MAP,t.__webglTexture,e.TEXTURE0+s);let u=r.get(l);if(l.version!==u.__version||c===!0){n.activeTexture(e.TEXTURE0+s);let t=G.getPrimaries(G.workingColorSpace),r=o.colorSpace===``?null:G.getPrimaries(o.colorSpace),d=o.colorSpace===``||t===r?e.NONE:e.BROWSER_DEFAULT_WEBGL;n.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,o.flipY),n.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,o.premultiplyAlpha),n.pixelStorei(e.UNPACK_ALIGNMENT,o.unpackAlignment),n.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,d);let f=o.isCompressedTexture||o.image[0].isCompressedTexture,p=o.image[0]&&o.image[0].isDataTexture,m=[];for(let e=0;e<6;e++)!f&&!p?m[e]=v(o.image[e],!0,i.maxCubemapSize):m[e]=p?o.image[e].image:o.image[e],m[e]=L(o,m[e]);let h=m[0],g=a.convert(o.format,o.colorSpace),_=a.convert(o.type),x=S(o.internalFormat,g,_,o.normalized,o.colorSpace),T=o.isVideoTexture!==!0,E=u.__version===void 0||c===!0,D=l.dataReady,O=w(o,h);Se(e.TEXTURE_CUBE_MAP,o);let k;if(o.isDepthTexture){if(x=C(o.format===Ce,o.type),E){if(T)n.texStorage2D(e.TEXTURE_CUBE_MAP,1,x,h.width,h.height);else for(let t=0;t<6;t++)n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,0,x,h.width,h.height,0,g,_,null)}}else if(f){T&&E&&n.texStorage2D(e.TEXTURE_CUBE_MAP,O,x,h.width,h.height);for(let t=0;t<6;t++){k=m[t].mipmaps;for(let r=0;r<k.length;r++){let i=k[r];o.format===1023?T?D&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r,0,0,i.width,i.height,g,_,i.data):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r,x,i.width,i.height,0,g,_,i.data):g===null?z(`WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()`):T?D&&n.compressedTexSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r,0,0,i.width,i.height,g,i.data):n.compressedTexImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r,x,i.width,i.height,0,i.data)}}}else{if(k=o.mipmaps,T&&E){k.length>0&&O++;let t=R(m[0]);n.texStorage2D(e.TEXTURE_CUBE_MAP,O,x,t.width,t.height)}for(let t=0;t<6;t++)if(p){T?D&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,0,0,0,m[t].width,m[t].height,g,_,m[t].data):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,0,x,m[t].width,m[t].height,0,g,_,m[t].data);for(let r=0;r<k.length;r++){let i=k[r].image[t].image;T?D&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r+1,0,0,i.width,i.height,g,_,i.data):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r+1,x,i.width,i.height,0,g,_,i.data)}}else{T?D&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,0,0,0,g,_,m[t]):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,0,x,g,_,m[t]);for(let r=0;r<k.length;r++){let i=k[r];T?D&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r+1,0,0,g,_,i.image[t]):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r+1,x,g,_,i.image[t])}}}y(o)&&o.mipmapsAutoUpdate===!0&&b(e.TEXTURE_CUBE_MAP),u.__version=l.version,o.onUpdate&&o.onUpdate(o)}t.__version=o.version}function ke(t,i,o,c,l,u){let d=a.convert(o.format,o.colorSpace),f=a.convert(o.type),p=S(o.internalFormat,d,f,o.normalized,o.colorSpace),m=r.get(i),h=r.get(o);if(h.__renderTarget=i,!m.__hasExternalTextures){let t=Math.max(1,i.width>>u),r=Math.max(1,i.height>>u);l===e.TEXTURE_3D||l===e.TEXTURE_2D_ARRAY?n.texImage3D(l,u,p,t,r,i.depth,0,d,f,null):n.texImage2D(l,u,p,t,r,0,d,f,null)}n.bindFramebuffer(e.FRAMEBUFFER,t),I(i)?s.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,c,l,h.__webglTexture,0,Le(i)):(l===e.TEXTURE_2D||l>=e.TEXTURE_CUBE_MAP_POSITIVE_X&&l<=e.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&e.framebufferTexture2D(e.FRAMEBUFFER,c,l,h.__webglTexture,u),n.bindFramebuffer(e.FRAMEBUFFER,null)}function Ae(t,n,r){if(e.bindRenderbuffer(e.RENDERBUFFER,t),n.depthBuffer){let i=n.depthTexture,a=i&&i.isDepthTexture?i.type:null,o=C(n.stencilBuffer,a),c=n.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT;I(n)?s.renderbufferStorageMultisampleEXT(e.RENDERBUFFER,Le(n),o,n.width,n.height):r?e.renderbufferStorageMultisample(e.RENDERBUFFER,Le(n),o,n.width,n.height):e.renderbufferStorage(e.RENDERBUFFER,o,n.width,n.height),e.framebufferRenderbuffer(e.FRAMEBUFFER,c,e.RENDERBUFFER,t)}else{let t=n.textures;for(let i=0;i<t.length;i++){let o=t[i],c=a.convert(o.format,o.colorSpace),l=a.convert(o.type),u=S(o.internalFormat,c,l,o.normalized,o.colorSpace);I(n)?s.renderbufferStorageMultisampleEXT(e.RENDERBUFFER,Le(n),u,n.width,n.height):r?e.renderbufferStorageMultisample(e.RENDERBUFFER,Le(n),u,n.width,n.height):e.renderbufferStorage(e.RENDERBUFFER,u,n.width,n.height)}}e.bindRenderbuffer(e.RENDERBUFFER,null)}function je(t,i,a){let o=i.isWebGLCubeRenderTarget===!0;if(n.bindFramebuffer(e.FRAMEBUFFER,t),!(i.depthTexture&&i.depthTexture.isDepthTexture))throw Error(`THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.`);let c=r.get(i.depthTexture);c.__renderTarget=i;let l=o?i.depthTexture.image[0]:i.depthTexture.image;c.__webglTexture&&l.width===i.width&&l.height===i.height||(l.width=i.width,l.height=i.height,i.depthTexture.needsUpdate=!0),o?ve(i.depthTexture,0):he(i.depthTexture,0);let u=c.__webglTexture,d=Le(i),f=o?e.TEXTURE_CUBE_MAP_POSITIVE_X+a:e.TEXTURE_2D,p=i.depthTexture.format===1027?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT;if(i.depthTexture.format===1026)I(i)?s.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,p,f,u,0,d):e.framebufferTexture2D(e.FRAMEBUFFER,p,f,u,0);else if(i.depthTexture.format===1027)I(i)?s.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,p,f,u,0,d):e.framebufferTexture2D(e.FRAMEBUFFER,p,f,u,0);else throw Error(`THREE.WebGLTextures: Unknown depthTexture format.`)}function Me(t){let i=r.get(t),a=t.isWebGLCubeRenderTarget===!0;if(i.__boundDepthTexture!==t.depthTexture){let e=t.depthTexture;if(i.__depthDisposeCallback&&i.__depthDisposeCallback(),e){let t=()=>{delete i.__boundDepthTexture,delete i.__depthDisposeCallback,e.removeEventListener(`dispose`,t)};e.addEventListener(`dispose`,t),i.__depthDisposeCallback=t}i.__boundDepthTexture=e}if(t.depthTexture&&!i.__autoAllocateDepthBuffer){if(a)for(let e=0;e<6;e++)je(i.__webglFramebuffer[e],t,e);else t.texture.mipmaps.length>0?je(i.__webglFramebuffer[0],t,0):je(i.__webglFramebuffer,t,0)}else if(a){i.__webglDepthbuffer=[];for(let r=0;r<6;r++)if(n.bindFramebuffer(e.FRAMEBUFFER,i.__webglFramebuffer[r]),i.__webglDepthbuffer[r]===void 0)i.__webglDepthbuffer[r]=e.createRenderbuffer(),Ae(i.__webglDepthbuffer[r],t,!1);else{let n=t.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,a=i.__webglDepthbuffer[r];e.bindRenderbuffer(e.RENDERBUFFER,a),e.framebufferRenderbuffer(e.FRAMEBUFFER,n,e.RENDERBUFFER,a)}}else if(t.texture.mipmaps.length>0?n.bindFramebuffer(e.FRAMEBUFFER,i.__webglFramebuffer[0]):n.bindFramebuffer(e.FRAMEBUFFER,i.__webglFramebuffer),i.__webglDepthbuffer===void 0)i.__webglDepthbuffer=e.createRenderbuffer(),Ae(i.__webglDepthbuffer,t,!1);else{let n=t.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,r=i.__webglDepthbuffer;e.bindRenderbuffer(e.RENDERBUFFER,r),e.framebufferRenderbuffer(e.FRAMEBUFFER,n,e.RENDERBUFFER,r)}n.bindFramebuffer(e.FRAMEBUFFER,null)}function Ne(t,n,i){let a=r.get(t);n!==void 0&&ke(a.__webglFramebuffer,t,t.texture,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,0),i!==void 0&&Me(t)}function Pe(t){let i=t.texture,s=r.get(t),c=r.get(i);t.addEventListener(`dispose`,O),T(t);let l=t.textures,u=t.isWebGLCubeRenderTarget===!0,d=l.length>1;if(d||(c.__webglTexture===void 0&&(c.__webglTexture=e.createTexture()),c.__version=i.version,o.memory.textures++),u){s.__webglFramebuffer=[];for(let t=0;t<6;t++)if(i.mipmaps.length>0){s.__webglFramebuffer[t]=[];for(let n=0;n<i.mipmaps.length;n++)s.__webglFramebuffer[t][n]=e.createFramebuffer()}else s.__webglFramebuffer[t]=e.createFramebuffer()}else{if(i.mipmaps.length>0){s.__webglFramebuffer=[];for(let t=0;t<i.mipmaps.length;t++)s.__webglFramebuffer[t]=e.createFramebuffer()}else s.__webglFramebuffer=e.createFramebuffer();if(d)for(let t=0,n=l.length;t<n;t++){let n=r.get(l[t]);n.__webglTexture===void 0&&(n.__webglTexture=e.createTexture(),o.memory.textures++)}if(t.samples>0&&I(t)===!1){s.__webglMultisampledFramebuffer=e.createFramebuffer(),s.__webglColorRenderbuffer=[],n.bindFramebuffer(e.FRAMEBUFFER,s.__webglMultisampledFramebuffer);for(let n=0;n<l.length;n++){let r=l[n];s.__webglColorRenderbuffer[n]=e.createRenderbuffer(),e.bindRenderbuffer(e.RENDERBUFFER,s.__webglColorRenderbuffer[n]);let i=a.convert(r.format,r.colorSpace),o=a.convert(r.type),c=S(r.internalFormat,i,o,r.normalized,r.colorSpace,t.isXRRenderTarget===!0),u=Le(t);e.renderbufferStorageMultisample(e.RENDERBUFFER,u,c,t.width,t.height),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+n,e.RENDERBUFFER,s.__webglColorRenderbuffer[n])}e.bindRenderbuffer(e.RENDERBUFFER,null),t.depthBuffer&&(s.__webglDepthRenderbuffer=e.createRenderbuffer(),Ae(s.__webglDepthRenderbuffer,t,!0)),n.bindFramebuffer(e.FRAMEBUFFER,null)}}if(u){n.bindTexture(e.TEXTURE_CUBE_MAP,c.__webglTexture),Se(e.TEXTURE_CUBE_MAP,i);for(let n=0;n<6;n++)if(i.mipmaps.length>0)for(let r=0;r<i.mipmaps.length;r++)ke(s.__webglFramebuffer[n][r],t,i,e.COLOR_ATTACHMENT0,e.TEXTURE_CUBE_MAP_POSITIVE_X+n,r);else ke(s.__webglFramebuffer[n],t,i,e.COLOR_ATTACHMENT0,e.TEXTURE_CUBE_MAP_POSITIVE_X+n,0);y(i)?b(e.TEXTURE_CUBE_MAP):i.mipmaps.length>0&&e.texParameteri(e.TEXTURE_CUBE_MAP,e.TEXTURE_MAX_LEVEL,i.mipmaps.length-1),n.unbindTexture()}else if(d){for(let i=0,a=l.length;i<a;i++){let a=l[i],o=r.get(a),c=e.TEXTURE_2D;(t.isWebGL3DRenderTarget||t.isWebGLArrayRenderTarget)&&(c=t.isWebGL3DRenderTarget?e.TEXTURE_3D:e.TEXTURE_2D_ARRAY),n.bindTexture(c,o.__webglTexture),Se(c,a),ke(s.__webglFramebuffer,t,a,e.COLOR_ATTACHMENT0+i,c,0),y(a)&&b(c)}n.unbindTexture()}else{let r=e.TEXTURE_2D;if((t.isWebGL3DRenderTarget||t.isWebGLArrayRenderTarget)&&(r=t.isWebGL3DRenderTarget?e.TEXTURE_3D:e.TEXTURE_2D_ARRAY),n.bindTexture(r,c.__webglTexture),Se(r,i),i.mipmaps.length>0)for(let n=0;n<i.mipmaps.length;n++)ke(s.__webglFramebuffer[n],t,i,e.COLOR_ATTACHMENT0,r,n);else ke(s.__webglFramebuffer,t,i,e.COLOR_ATTACHMENT0,r,0);y(i)?b(r):i.mipmaps.length>0&&e.texParameteri(r,e.TEXTURE_MAX_LEVEL,i.mipmaps.length-1),n.unbindTexture()}t.depthBuffer&&Me(t)}function F(e){let t=e.textures;for(let i=0,a=t.length;i<a;i++){let a=t[i];if(y(a)&&a.mipmapsAutoUpdate===!0){let t=x(e),i=r.get(a).__webglTexture;n.bindTexture(t,i),b(t),n.unbindTexture()}}}let Fe=[];function Ie(t){if(t.samples>0){if(I(t)===!1){let i=t.textures,a=t.width,o=t.height,s=e.COLOR_BUFFER_BIT,l=t.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,u=r.get(t),d=i.length>1;if(d)for(let t=0;t<i.length;t++)n.bindFramebuffer(e.FRAMEBUFFER,u.__webglMultisampledFramebuffer),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+t,e.RENDERBUFFER,null),n.bindFramebuffer(e.FRAMEBUFFER,u.__webglFramebuffer),e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0+t,e.TEXTURE_2D,null,0);n.bindFramebuffer(e.READ_FRAMEBUFFER,u.__webglMultisampledFramebuffer),t.texture.mipmaps.length>0?n.bindFramebuffer(e.DRAW_FRAMEBUFFER,u.__webglFramebuffer[0]):n.bindFramebuffer(e.DRAW_FRAMEBUFFER,u.__webglFramebuffer);for(let n=0;n<i.length;n++){if(t.resolveDepthBuffer&&(t.depthBuffer&&(s|=e.DEPTH_BUFFER_BIT),t.stencilBuffer&&t.resolveStencilBuffer&&(s|=e.STENCIL_BUFFER_BIT)),d){e.framebufferRenderbuffer(e.READ_FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.RENDERBUFFER,u.__webglColorRenderbuffer[n]);let t=r.get(i[n]).__webglTexture;e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,t,0)}e.blitFramebuffer(0,0,a,o,0,0,a,o,s,e.NEAREST),c===!0&&(Fe.length=0,Fe.push(e.COLOR_ATTACHMENT0+n),t.depthBuffer&&t.storeMultisampledDepthBuffer===!1&&Fe.push(l),e.invalidateFramebuffer(e.READ_FRAMEBUFFER,Fe))}if(n.bindFramebuffer(e.READ_FRAMEBUFFER,null),n.bindFramebuffer(e.DRAW_FRAMEBUFFER,null),d)for(let t=0;t<i.length;t++){n.bindFramebuffer(e.FRAMEBUFFER,u.__webglMultisampledFramebuffer),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+t,e.RENDERBUFFER,u.__webglColorRenderbuffer[t]);let a=r.get(i[t]).__webglTexture;n.bindFramebuffer(e.FRAMEBUFFER,u.__webglFramebuffer),e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0+t,e.TEXTURE_2D,a,0)}n.bindFramebuffer(e.DRAW_FRAMEBUFFER,u.__webglMultisampledFramebuffer)}else if(t.depthBuffer&&t.storeMultisampledDepthBuffer===!1&&c){let n=t.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT;e.invalidateFramebuffer(e.DRAW_FRAMEBUFFER,[n])}}}function Le(e){return Math.min(i.maxSamples,e.samples)}function I(e){let n=r.get(e);return e.samples>0&&t.has(`WEBGL_multisampled_render_to_texture`)===!0&&n.__useRenderToTexture!==!1}function Re(e){let t=o.render.frame;u.get(e)!==t&&(u.set(e,t),e.update())}function L(e,t){let n=e.colorSpace,r=e.format,i=e.type;return e.isCompressedTexture===!0||e.isVideoTexture===!0||n!==`srgb-linear`&&n!==``&&(G.getTransfer(n)===`srgb`?(r!==1023||i!==1009)&&z(`WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType.`):B(`WebGLTextures: Unsupported texture color space:`,n)),t}function R(e){return typeof HTMLImageElement<`u`&&e instanceof HTMLImageElement?(l.width=e.naturalWidth||e.width,l.height=e.naturalHeight||e.height):typeof VideoFrame<`u`&&e instanceof VideoFrame?(l.width=e.displayWidth,l.height=e.displayHeight):(l.width=e.width,l.height=e.height),l}this.allocateTextureUnit=pe,this.resetTextureUnits=ue,this.getTextureUnits=de,this.setTextureUnits=fe,this.setTexture2D=he,this.setTexture2DArray=ge,this.setTexture3D=_e,this.setTextureCube=ve,this.rebindTextures=Ne,this.setupRenderTarget=Pe,this.updateRenderTargetMipmap=F,this.updateMultisampleRenderTarget=Ie,this.setupDepthRenderbuffer=Me,this.setupFrameBufferTexture=ke,this.useMultisampledRTT=I,this.dispose=j}function ql(e,t){function n(n,r=``){let i,a=G.getTransfer(r);if(n===1009)return e.UNSIGNED_BYTE;if(n===1017)return e.UNSIGNED_SHORT_4_4_4_4;if(n===1018)return e.UNSIGNED_SHORT_5_5_5_1;if(n===35902)return e.UNSIGNED_INT_5_9_9_9_REV;if(n===35899)return e.UNSIGNED_INT_10F_11F_11F_REV;if(n===1010)return e.BYTE;if(n===1011)return e.SHORT;if(n===1012)return e.UNSIGNED_SHORT;if(n===1013)return e.INT;if(n===1014)return e.UNSIGNED_INT;if(n===1015)return e.FLOAT;if(n===1016)return e.HALF_FLOAT;if(n===1021)return e.ALPHA;if(n===1022)return e.RGB;if(n===1023)return e.RGBA;if(n===1026)return e.DEPTH_COMPONENT;if(n===1027)return e.DEPTH_STENCIL;if(n===1028)return e.RED;if(n===1029)return e.RED_INTEGER;if(n===1030)return e.RG;if(n===1031)return e.RG_INTEGER;if(n===1033)return e.RGBA_INTEGER;if(n===33776||n===33777||n===33778||n===33779){if(a===`srgb`){if(i=t.get(`WEBGL_compressed_texture_s3tc_srgb`),i!==null){if(n===33776)return i.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===33777)return i.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===33778)return i.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===33779)return i.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null}else if(i=t.get(`WEBGL_compressed_texture_s3tc`),i!==null){if(n===33776)return i.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===33777)return i.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===33778)return i.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===33779)return i.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null}if(n===35840||n===35841||n===35842||n===35843){if(i=t.get(`WEBGL_compressed_texture_pvrtc`),i!==null){if(n===35840)return i.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===35841)return i.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===35842)return i.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===35843)return i.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null}if(n===36196||n===37492||n===37496||n===37488||n===37489||n===37490||n===37491){if(i=t.get(`WEBGL_compressed_texture_etc`),i!==null){if(n===36196||n===37492)return a===`srgb`?i.COMPRESSED_SRGB8_ETC2:i.COMPRESSED_RGB8_ETC2;if(n===37496)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:i.COMPRESSED_RGBA8_ETC2_EAC;if(n===37488)return i.COMPRESSED_R11_EAC;if(n===37489)return i.COMPRESSED_SIGNED_R11_EAC;if(n===37490)return i.COMPRESSED_RG11_EAC;if(n===37491)return i.COMPRESSED_SIGNED_RG11_EAC}else return null}if(n===37808||n===37809||n===37810||n===37811||n===37812||n===37813||n===37814||n===37815||n===37816||n===37817||n===37818||n===37819||n===37820||n===37821){if(i=t.get(`WEBGL_compressed_texture_astc`),i!==null){if(n===37808)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:i.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===37809)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:i.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===37810)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:i.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===37811)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:i.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===37812)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:i.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===37813)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:i.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===37814)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:i.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===37815)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:i.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===37816)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:i.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===37817)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:i.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===37818)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:i.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===37819)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:i.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===37820)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:i.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===37821)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:i.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null}if(n===36492||n===36494||n===36495){if(i=t.get(`EXT_texture_compression_bptc`),i!==null){if(n===36492)return a===`srgb`?i.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:i.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===36494)return i.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===36495)return i.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null}if(n===36283||n===36284||n===36285||n===36286){if(i=t.get(`EXT_texture_compression_rgtc`),i!==null){if(n===36283)return i.COMPRESSED_RED_RGTC1_EXT;if(n===36284)return i.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===36285)return i.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===36286)return i.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null}return n===1020?e.UNSIGNED_INT_24_8:e[n]===void 0?null:e[n]}return{convert:n}}var Jl=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Yl=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`,Xl=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){let n=new Ea(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,n=new za({vertexShader:Jl,fragmentShader:Yl,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new q(new Oa(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},Zl=class extends Nt{constructor(e,t){super();let n=this,r=null,i=1,a=null,o=`local-floor`,s=1,c=null,l=null,u=null,d=null,f=null,p=null,m=typeof XRWebGLBinding<`u`,h=new Xl,g={},_=t.getContextAttributes(),v=null,y=null,b=[],x=[],S=new H,C=null,w=null,T=new wo;T.viewport=new Tn;let E=new wo;E.viewport=new Tn;let D=[T,E],O=new No,k=null,A=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(e){let t=b[e];return t===void 0&&(t=new or,b[e]=t),t.getTargetRaySpace()},this.getControllerGrip=function(e){let t=b[e];return t===void 0&&(t=new or,b[e]=t),t.getGripSpace()},this.getHand=function(e){let t=b[e];return t===void 0&&(t=new or,b[e]=t),t.getHandSpace()};function j(e){let t=x.indexOf(e.inputSource);if(t===-1)return;let n=b[t];n!==void 0&&(n.update(e.inputSource,e.frame,c||a),n.dispatchEvent({type:e.type,data:e.inputSource}))}function ee(){r.removeEventListener(`select`,j),r.removeEventListener(`selectstart`,j),r.removeEventListener(`selectend`,j),r.removeEventListener(`squeeze`,j),r.removeEventListener(`squeezestart`,j),r.removeEventListener(`squeezeend`,j),r.removeEventListener(`end`,ee),r.removeEventListener(`inputsourceschange`,M);for(let e=0;e<b.length;e++){let t=x[e];t!==null&&(x[e]=null,b[e].disconnect(t))}k=null,A=null,h.reset();for(let e in g)delete g[e];if(e.setRenderTarget(v),f=null,d=null,u=null,r=null,y=null,re.stop(),n.isPresenting=!1,e.setPixelRatio(C),e.setSize(S.width,S.height,!1),w!==null){let e=w.camera;e.fov=w.fov,e.zoom=w.zoom,e.updateProjectionMatrix(),w=null}n.dispatchEvent({type:`sessionend`})}this.setFramebufferScaleFactor=function(e){i=e,n.isPresenting===!0&&z(`WebXRManager: Cannot change framebuffer scale while presenting.`)},this.setReferenceSpaceType=function(e){o=e,n.isPresenting===!0&&z(`WebXRManager: Cannot change reference space type while presenting.`)},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(e){c=e},this.getBaseLayer=function(){return d===null?f:d},this.getBinding=function(){return u===null&&m&&(u=new XRWebGLBinding(r,t)),u},this.getFrame=function(){return p},this.getSession=function(){return r},this.setSession=async function(l){if(r=l,r!==null){if(v=e.getRenderTarget(),r.addEventListener(`select`,j),r.addEventListener(`selectstart`,j),r.addEventListener(`selectend`,j),r.addEventListener(`squeeze`,j),r.addEventListener(`squeezestart`,j),r.addEventListener(`squeezeend`,j),r.addEventListener(`end`,ee),r.addEventListener(`inputsourceschange`,M),_.xrCompatible!==!0&&await t.makeXRCompatible(),C=e.getPixelRatio(),e.getSize(S),m&&`createProjectionLayer`in XRWebGLBinding.prototype){let n=null,a=null,o=null;_.depth&&(o=_.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,n=_.stencil?Ce:Se,a=_.stencil?ge:de);let s={colorFormat:t.RGBA8,depthFormat:o,scaleFactor:i};u=this.getBinding(),d=u.createProjectionLayer(s),r.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),y=new Dn(d.textureWidth,d.textureHeight,{format:xe,type:oe,depthTexture:new wa(d.textureWidth,d.textureHeight,a,void 0,void 0,void 0,void 0,void 0,void 0,n),stencilBuffer:_.stencil,colorSpace:e.outputColorSpace,samples:_.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1,storeMultisampledDepthBuffer:d.ignoreDepthValues===!1,storeMultisampledStencilBuffer:d.ignoreDepthValues===!1})}else{let n={antialias:_.antialias,alpha:!0,depth:_.depth,stencil:_.stencil,framebufferScaleFactor:i};f=new XRWebGLLayer(r,t,n),r.updateRenderState({baseLayer:f}),e.setPixelRatio(1),e.setSize(f.framebufferWidth,f.framebufferHeight,!1),y=new Dn(f.framebufferWidth,f.framebufferHeight,{format:xe,type:oe,colorSpace:e.outputColorSpace,stencilBuffer:_.stencil,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1,storeMultisampledDepthBuffer:f.ignoreDepthValues===!1,storeMultisampledStencilBuffer:f.ignoreDepthValues===!1})}y.isXRRenderTarget=!0,this.setFoveation(s),c=null,a=await r.requestReferenceSpace(o),re.setContext(r),re.start(),n.isPresenting=!0,n.dispatchEvent({type:`sessionstart`})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return h.getDepthTexture()};function M(e){for(let t=0;t<e.removed.length;t++){let n=e.removed[t],r=x.indexOf(n);r>=0&&(x[r]=null,b[r].disconnect(n))}for(let t=0;t<e.added.length;t++){let n=e.added[t],r=x.indexOf(n);if(r===-1){for(let e=0;e<b.length;e++)if(e>=x.length){x.push(n),r=e;break}else if(x[e]===null){x[e]=n,r=e;break}if(r===-1)break}let i=b[r];i&&i.connect(n)}}function N(e,t){t===null?e.matrixWorld.copy(e.matrix):e.matrixWorld.multiplyMatrices(t.matrixWorld,e.matrix),e.matrixWorldInverse.copy(e.matrixWorld).invert()}this.updateCamera=function(e){if(r===null)return;let t=e.near,n=e.far;h.texture!==null&&(h.depthNear>0&&(t=h.depthNear),h.depthFar>0&&(n=h.depthFar)),O.near=E.near=T.near=t,O.far=E.far=T.far=n,(k!==O.near||A!==O.far)&&(r.updateRenderState({depthNear:O.near,depthFar:O.far}),k=O.near,A=O.far),O.layers.mask=e.layers.mask|6,T.layers.mask=O.layers.mask&-5,E.layers.mask=O.layers.mask&-3;let i=e.parent,a=O.cameras;N(O,i);for(let e=0;e<a.length;e++)N(a[e],i);O.projectionMatrix.copy(T.projectionMatrix),O.projectionMatrixInverse.copy(T.projectionMatrixInverse),w===null&&e.isPerspectiveCamera&&(w={camera:e,fov:e.fov,zoom:e.zoom}),P(e,O,i)};function P(e,t,n){n===null?e.matrix.copy(t.matrixWorld):(e.matrix.copy(n.matrixWorld),e.matrix.invert(),e.matrix.multiply(t.matrixWorld)),e.matrix.decompose(e.position,e.quaternion,e.scale),e.updateMatrixWorld(!0),e.projectionMatrix.copy(t.projectionMatrix),e.projectionMatrixInverse.copy(t.projectionMatrixInverse),e.isPerspectiveCamera&&(e.fov=Lt*2*Math.atan(1/e.projectionMatrix.elements[5]),e.zoom=1)}this.getCamera=function(){return O},this.getFoveation=function(){if(d!==null||f!==null)return s},this.setFoveation=function(e){s=e,d!==null&&(d.fixedFoveation=e),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=e)},this.hasDepthSensing=function(){return h.texture!==null},this.getDepthSensingMesh=function(){return h.getMesh(O)},this.getCameraTexture=function(e){return g[e]};let te=null;function ne(t,i){if(l=i.getViewerPose(c||a),p=i,l!==null){let t=l.views;f!==null&&(e.setRenderTargetFramebuffer(y,f.framebuffer),e.setRenderTarget(y));let i=!1;t.length!==O.cameras.length&&(O.cameras.length=0,i=!0);for(let n=0;n<t.length;n++){let r=t[n],a=null;if(f!==null)a=f.getViewport(r);else{let t=u.getViewSubImage(d,r);a=t.viewport,n===0&&(e.setRenderTargetTextures(y,t.colorTexture,t.depthStencilTexture),e.setRenderTarget(y))}let o=D[n];o===void 0&&(o=new wo,o.layers.enable(n),o.viewport=new Tn,D[n]=o),o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.quaternion,o.scale),o.projectionMatrix.fromArray(r.projectionMatrix),o.projectionMatrixInverse.copy(o.projectionMatrix).invert(),o.viewport.set(a.x,a.y,a.width,a.height),n===0&&(O.matrix.copy(o.matrix),O.matrix.decompose(O.position,O.quaternion,O.scale)),i===!0&&O.cameras.push(o)}let a=r.enabledFeatures;if(a&&a.includes(`depth-sensing`)&&r.depthUsage==`gpu-optimized`&&m){u=n.getBinding();let e=u.getDepthInformation(t[0]);e&&e.isValid&&e.texture&&h.init(e,r.renderState)}if(a&&a.includes(`camera-access`)&&m){e.state.unbindTexture(),u=n.getBinding();for(let e=0;e<t.length;e++){let n=t[e].camera;if(n){let e=g[n];e||(e=new Ea,g[n]=e);let t=u.getCameraImage(n);e.sourceTexture=t}}}}for(let e=0;e<b.length;e++){let t=x[e],n=b[e];t!==null&&n!==void 0&&n.update(t,i,c||a)}te&&te(t,i),i.detectedPlanes&&n.dispatchEvent({type:`planesdetected`,data:i}),p=null}let re=new Xo;re.setAnimationLoop(ne),this.setAnimationLoop=function(e){te=e},this.dispose=function(){}}},Ql=new An,$l=new W;$l.set(-1,0,0,0,1,0,0,0,1);function eu(e,t){function n(e,t){e.matrixAutoUpdate===!0&&e.updateMatrix(),t.value.copy(e.matrix)}function r(t,n){n.color.getRGB(t.fogColor.value,Fa(e)),n.isFog?(t.fogNear.value=n.near,t.fogFar.value=n.far):n.isFogExp2&&(t.fogDensity.value=n.density)}function i(e,t,n,r,i){t.isNodeMaterial?t.uniformsNeedUpdate=!1:t.isMeshBasicMaterial?a(e,t):t.isMeshLambertMaterial?(a(e,t),t.envMap&&(e.envMapIntensity.value=t.envMapIntensity)):t.isMeshToonMaterial?(a(e,t),d(e,t)):t.isMeshPhongMaterial?(a(e,t),u(e,t),t.envMap&&(e.envMapIntensity.value=t.envMapIntensity)):t.isMeshStandardMaterial?(a(e,t),f(e,t),t.isMeshPhysicalMaterial&&p(e,t,i)):t.isMeshMatcapMaterial?(a(e,t),m(e,t)):t.isMeshDepthMaterial?a(e,t):t.isMeshDistanceMaterial?(a(e,t),h(e,t)):t.isMeshNormalMaterial?a(e,t):t.isLineBasicMaterial?(o(e,t),t.isLineDashedMaterial&&s(e,t)):t.isPointsMaterial?c(e,t,n,r):t.isSpriteMaterial?l(e,t):t.isShadowMaterial?(e.color.value.copy(t.color),e.opacity.value=t.opacity):t.isShaderMaterial&&(t.uniformsNeedUpdate=!1)}function a(e,r){e.opacity.value=r.opacity,r.color&&e.diffuse.value.copy(r.color),r.emissive&&e.emissive.value.copy(r.emissive).multiplyScalar(r.emissiveIntensity),r.map&&(e.map.value=r.map,n(r.map,e.mapTransform)),r.alphaMap&&(e.alphaMap.value=r.alphaMap,n(r.alphaMap,e.alphaMapTransform)),r.bumpMap&&(e.bumpMap.value=r.bumpMap,n(r.bumpMap,e.bumpMapTransform),e.bumpScale.value=r.bumpScale,r.side===1&&(e.bumpScale.value*=-1)),r.normalMap&&(e.normalMap.value=r.normalMap,n(r.normalMap,e.normalMapTransform),e.normalScale.value.copy(r.normalScale),r.side===1&&e.normalScale.value.negate()),r.displacementMap&&(e.displacementMap.value=r.displacementMap,n(r.displacementMap,e.displacementMapTransform),e.displacementScale.value=r.displacementScale,e.displacementBias.value=r.displacementBias),r.emissiveMap&&(e.emissiveMap.value=r.emissiveMap,n(r.emissiveMap,e.emissiveMapTransform)),r.specularMap&&(e.specularMap.value=r.specularMap,n(r.specularMap,e.specularMapTransform)),r.alphaTest>0&&(e.alphaTest.value=r.alphaTest);let i=t.get(r),a=i.envMap,o=i.envMapRotation;a&&(e.envMap.value=a,e.envMapRotation.value.setFromMatrix4(Ql.makeRotationFromEuler(o)).transpose(),a.isCubeTexture&&a.isRenderTargetTexture===!1&&e.envMapRotation.value.premultiply($l),e.reflectivity.value=r.reflectivity,e.ior.value=r.ior,e.refractionRatio.value=r.refractionRatio),r.lightMap&&(e.lightMap.value=r.lightMap,e.lightMapIntensity.value=r.lightMapIntensity,n(r.lightMap,e.lightMapTransform)),r.aoMap&&(e.aoMap.value=r.aoMap,e.aoMapIntensity.value=r.aoMapIntensity,n(r.aoMap,e.aoMapTransform))}function o(e,t){e.diffuse.value.copy(t.color),e.opacity.value=t.opacity,t.map&&(e.map.value=t.map,n(t.map,e.mapTransform))}function s(e,t){e.dashSize.value=t.dashSize,e.totalSize.value=t.dashSize+t.gapSize,e.scale.value=t.scale}function c(e,t,r,i){e.diffuse.value.copy(t.color),e.opacity.value=t.opacity,e.size.value=t.size*r,e.scale.value=i*.5,t.map&&(e.map.value=t.map,n(t.map,e.uvTransform)),t.alphaMap&&(e.alphaMap.value=t.alphaMap,n(t.alphaMap,e.alphaMapTransform)),t.alphaTest>0&&(e.alphaTest.value=t.alphaTest)}function l(e,t){e.diffuse.value.copy(t.color),e.opacity.value=t.opacity,e.rotation.value=t.rotation,t.map&&(e.map.value=t.map,n(t.map,e.mapTransform)),t.alphaMap&&(e.alphaMap.value=t.alphaMap,n(t.alphaMap,e.alphaMapTransform)),t.alphaTest>0&&(e.alphaTest.value=t.alphaTest)}function u(e,t){e.specular.value.copy(t.specular),e.shininess.value=Math.max(t.shininess,1e-4)}function d(e,t){t.gradientMap&&(e.gradientMap.value=t.gradientMap)}function f(e,t){e.metalness.value=t.metalness,t.metalnessMap&&(e.metalnessMap.value=t.metalnessMap,n(t.metalnessMap,e.metalnessMapTransform)),e.roughness.value=t.roughness,t.roughnessMap&&(e.roughnessMap.value=t.roughnessMap,n(t.roughnessMap,e.roughnessMapTransform)),t.envMap&&(e.envMapIntensity.value=t.envMapIntensity)}function p(e,t,r){e.ior.value=t.ior,t.diffuseRoughness>0&&(e.diffuseRoughness.value=t.diffuseRoughness,t.diffuseRoughnessMap&&(e.diffuseRoughnessMap.value=t.diffuseRoughnessMap,n(t.diffuseRoughnessMap,e.diffuseRoughnessMapTransform))),t.sheen>0&&(e.sheenColor.value.copy(t.sheenColor).multiplyScalar(t.sheen),e.sheenRoughness.value=t.sheenRoughness,t.sheenColorMap&&(e.sheenColorMap.value=t.sheenColorMap,n(t.sheenColorMap,e.sheenColorMapTransform)),t.sheenRoughnessMap&&(e.sheenRoughnessMap.value=t.sheenRoughnessMap,n(t.sheenRoughnessMap,e.sheenRoughnessMapTransform))),t.clearcoat>0&&(e.clearcoat.value=t.clearcoat,e.clearcoatRoughness.value=t.clearcoatRoughness,t.clearcoatMap&&(e.clearcoatMap.value=t.clearcoatMap,n(t.clearcoatMap,e.clearcoatMapTransform)),t.clearcoatRoughnessMap&&(e.clearcoatRoughnessMap.value=t.clearcoatRoughnessMap,n(t.clearcoatRoughnessMap,e.clearcoatRoughnessMapTransform)),t.clearcoatNormalMap&&(e.clearcoatNormalMap.value=t.clearcoatNormalMap,n(t.clearcoatNormalMap,e.clearcoatNormalMapTransform),e.clearcoatNormalScale.value.copy(t.clearcoatNormalScale),t.side===1&&e.clearcoatNormalScale.value.negate())),t.dispersion>0&&(e.dispersion.value=t.dispersion),t.retroreflectivity>0&&(e.retroreflectivity.value=t.retroreflectivity),t.iridescence>0&&(e.iridescence.value=t.iridescence,e.iridescenceIOR.value=t.iridescenceIOR,e.iridescenceThicknessMinimum.value=t.iridescenceThicknessMinimum,e.iridescenceThicknessMaximum.value=t.iridescenceThicknessMaximum,t.iridescenceMap&&(e.iridescenceMap.value=t.iridescenceMap,n(t.iridescenceMap,e.iridescenceMapTransform)),t.iridescenceThicknessMap&&(e.iridescenceThicknessMap.value=t.iridescenceThicknessMap,n(t.iridescenceThicknessMap,e.iridescenceThicknessMapTransform))),t.transmission>0&&(e.transmission.value=t.transmission,e.transmissionSamplerMap.value=r.texture,e.transmissionSamplerSize.value.set(r.width,r.height),t.transmissionMap&&(e.transmissionMap.value=t.transmissionMap,n(t.transmissionMap,e.transmissionMapTransform)),e.thickness.value=t.thickness,t.thicknessMap&&(e.thicknessMap.value=t.thicknessMap,n(t.thicknessMap,e.thicknessMapTransform)),e.attenuationDistance.value=t.attenuationDistance,e.attenuationColor.value.copy(t.attenuationColor)),t.anisotropy>0&&(e.anisotropyVector.value.set(t.anisotropy*Math.cos(t.anisotropyRotation),t.anisotropy*Math.sin(t.anisotropyRotation)),t.anisotropyMap&&(e.anisotropyMap.value=t.anisotropyMap,n(t.anisotropyMap,e.anisotropyMapTransform))),e.specularIntensity.value=t.specularIntensity,e.specularColor.value.copy(t.specularColor),t.specularColorMap&&(e.specularColorMap.value=t.specularColorMap,n(t.specularColorMap,e.specularColorMapTransform)),t.specularIntensityMap&&(e.specularIntensityMap.value=t.specularIntensityMap,n(t.specularIntensityMap,e.specularIntensityMapTransform))}function m(e,t){t.matcap&&(e.matcap.value=t.matcap)}function h(e,n){let r=t.get(n).light;e.referencePosition.value.setFromMatrixPosition(r.matrixWorld),e.nearDistance.value=r.shadow.camera.near,e.farDistance.value=r.shadow.camera.far}return{refreshFogUniforms:r,refreshMaterialUniforms:i}}function tu(e,t,n,r){let i={},a={};function o(e,t){let n=t.program;r.uniformBlockBinding(e,n,i[e.id])}function s(e,n){let o=i[e.id];o===void 0&&(m(e),o=c(e),i[e.id]=o,e.addEventListener(`dispose`,g));let s=n.program;r.updateUBOMapping(e,s);let u=t.render.frame;a[e.id]!==u&&(l(e),a[e.id]=u)}function c(t){let n=e.createBuffer(),r=t.__size,i=t.usage;return e.bindBuffer(e.UNIFORM_BUFFER,n),e.bufferData(e.UNIFORM_BUFFER,r,i),e.bindBuffer(e.UNIFORM_BUFFER,null),n}function l(t){let n=i[t.id],r=t.uniforms,a=t.__cache;e.bindBuffer(e.UNIFORM_BUFFER,n);for(let e=0,t=r.length;e<t;e++){let t=r[e];if(Array.isArray(t))for(let n=0,r=t.length;n<r;n++)u(t[n],e,n,a);else u(t,e,0,a)}e.bindBuffer(e.UNIFORM_BUFFER,null)}function u(t,n,r,i){if(f(t,n,r,i)===!0){let n=t.__offset,r=t.value;if(Array.isArray(r)){let e=0;for(let n=0;n<r.length;n++){let i=r[n],a=h(i,!0);d(i,t.__data,e),e+=a.storage/Float32Array.BYTES_PER_ELEMENT}}else d(r,t.__data,0);e.bufferSubData(e.UNIFORM_BUFFER,n,t.__data)}}function d(e,t,n){typeof e==`number`||typeof e==`boolean`?t[n]=e:e.isMatrix3?(t[n]=e.elements[0],t[n+1]=e.elements[1],t[n+2]=e.elements[2],t[n+3]=0,t[n+4]=e.elements[3],t[n+5]=e.elements[4],t[n+6]=e.elements[5],t[n+7]=0,t[n+8]=e.elements[6],t[n+9]=e.elements[7],t[n+10]=e.elements[8],t[n+11]=0):ArrayBuffer.isView(e)?t.set(e.subarray(0,t.length-n),n):e.toArray(t,n)}function f(e,t,n,r){let i=e.value,a=t+`_`+n;if(Array.isArray(i)){r[a]===void 0&&(r[a]=[]);let e=r[a],t=!1;for(let n=0;n<i.length;n++)p(i[n],e,n)===!0&&(t=!0);return t}return p(i,r,a)}function p(e,t,n){if(t[n]===void 0)return t[n]=typeof e==`number`||typeof e==`boolean`?e:ArrayBuffer.isView(e)?e.slice():e.clone(),!0;{let r=t[n];if(typeof e==`number`||typeof e==`boolean`){if(r!==e)return t[n]=e,!0}else if(ArrayBuffer.isView(e))return!0;else if(r.equals(e)===!1)return r.copy(e),!0}return!1}function m(e){let t=e.uniforms,n=0;for(let e=0,r=t.length;e<r;e++){let r=Array.isArray(t[e])?t[e]:[t[e]];for(let i=0,a=r.length;i<a;i++){let a=r[i],o=Array.isArray(a.value)?a.value:[a.value],s=Array.isArray(t[e])||Array.isArray(a.value),c=n;for(let e=0,t=o.length;e<t;e++){let t=o[e],r=h(t,s),i=n%16,a=i%r.boundary,l=i+a;n+=a,l!==0&&16-l<r.storage&&(n+=16-l),e===0&&(c=n),n+=r.storage}a.__data=new(a.type===`int`?Int32Array:a.type===`uint`?Uint32Array:Float32Array)((n-c)/Float32Array.BYTES_PER_ELEMENT),a.__offset=c}}let r=n%16;return r>0&&(n+=16-r),e.__size=n,e.__cache={},this}function h(e,t){let n={boundary:0,storage:0};return typeof e==`number`||typeof e==`boolean`?(n.boundary=4,n.storage=4):e.isVector2?(n.boundary=8,n.storage=8):e.isVector3||e.isColor?(n.boundary=16,n.storage=12):e.isVector4?(n.boundary=16,n.storage=16):e.isMatrix3?(n.boundary=16,n.storage=48):e.isMatrix4?(n.boundary=16,n.storage=64):e.isTexture?z(`WebGLRenderer: Texture samplers can not be part of an uniforms group.`):ArrayBuffer.isView(e)?(n.boundary=16,n.storage=e.byteLength):z(`WebGLRenderer: Unsupported uniform value type.`,e),t===!0&&(n.boundary=16,n.storage=Math.ceil(n.storage/16)*16),n}function g(t){let n=t.target;n.removeEventListener(`dispose`,g),e.deleteBuffer(i[n.id]),delete i[n.id],delete a[n.id]}function _(){for(let t in i)e.deleteBuffer(i[t]);i={},a={}}return{bind:o,update:s,dispose:_}}var nu=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),ru=null;function iu(){return ru===null&&(ru=new $i(nu,16,16,Ee,pe),ru.name=`DFG_LUT`,ru.minFilter=re,ru.magFilter=re,ru.wrapS=M,ru.wrapT=M,ru.generateMipmaps=!1,ru.needsUpdate=!0),ru}var au=class{constructor(e={}){let{canvas:t=Et(),context:n=null,depth:r=!0,stencil:i=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:s=!0,preserveDrawingBuffer:c=!1,powerPreference:l=`default`,failIfMajorPerformanceCaveat:u=!1,reversedDepthBuffer:d=!1,outputBufferType:f=oe}=e;this.isWebGLRenderer=!0;let p;if(n!==null){if(typeof WebGLRenderingContext<`u`&&n instanceof WebGLRenderingContext)throw Error(`THREE.WebGLRenderer: WebGL 1 is not supported since r163.`);p=n.getContextAttributes().alpha}else p=a;let m=f,h=new Set([Oe,De,Te]),g=new Set([oe,de,le,ge,me,he]),_=new Uint32Array(4),v=new Int32Array(4),y={textures:[],min:[],max:[],resolution:[]},b=null,x=null,S=[],C=[],w=null;this.domElement=t,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=0,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let T=this,E=!1,D=null,O=null,k=null,A=null;this._outputColorSpace=ht;let j=0,ee=0,M=null,N=-1,P=null,te=new Tn,ne=new Tn,re=null,ie=new K(0),se=0,ce=t.width,ue=t.height,fe=1,_e=null,ve=null,ye=new Tn(0,0,ce,ue),be=new Tn(0,0,ce,ue),xe=!1,Se=new fa,Ce=new ma,we=!1,Ee=!1,ke=new An,Ae=new U,je=new Tn,Me={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},Ne=!1;function Pe(){return M===null?fe:1}let F=n;function Fe(e,n){return t.getContext(e,n)}let Ie,Le,I,Re,L,R,ze,Be,Ve,He,Ue,We,Ge,Ke,qe,Je,Ye,Xe,Ze,Qe,$e,et,tt;try{let e={alpha:!0,depth:r,stencil:i,antialias:o,premultipliedAlpha:s,preserveDrawingBuffer:c,powerPreference:l,failIfMajorPerformanceCaveat:u};if(`setAttribute`in t&&t.setAttribute(`data-engine`,`three.js r187`),t.addEventListener(`webglcontextlost`,it,!1),t.addEventListener(`webglcontextrestored`,at,!1),t.addEventListener(`webglcontextcreationerror`,ot,!1),F===null){let t=`webgl2`;if(F=Fe(t,e),F===null)throw Fe(t)?Error(`THREE.WebGLRenderer: Error creating WebGL context with your selected attributes.`):Error(`THREE.WebGLRenderer: Error creating WebGL context.`)}nt()}catch(e){throw t.removeEventListener(`webglcontextlost`,it,!1),t.removeEventListener(`webglcontextrestored`,at,!1),t.removeEventListener(`webglcontextcreationerror`,ot,!1),B(`WebGLRenderer: `+e.message),e}function nt(){Ie=new Ts(F),Ie.init(),$e=new ql(F,Ie),Le=new as(F,Ie,e,$e),I=new Gl(F,Ie),Le.reversedDepthBuffer&&d&&I.buffers.depth.setReversed(!0),O=F.createFramebuffer(),k=F.createFramebuffer(),A=F.createFramebuffer(),Re=new Os(F),L=new Tl,R=new Kl(F,Ie,I,L,Le,$e,Re),ze=new ws(T),Be=new Zo(F),et=new rs(F,Be),Ve=new Es(F,Be,Re,et),He=new As(F,Ve,Be,et,Re),Xe=new ks(F,Le,R),qe=new os(L),Ue=new wl(T,ze,Ie,Le,et,qe),We=new eu(T,L),Ge=new kl,Ke=new Il(Ie),Ye=new ns(T,ze,I,He,p,s),Je=new Wl(T,He,Le),tt=new tu(F,Re,Le,I),Ze=new is(F,Ie,Re),Qe=new Ds(F,Ie,Re),Re.programs=Ue.programs,T.capabilities=Le,T.extensions=Ie,T.properties=L,T.renderLists=Ge,T.shadowMap=Je,T.state=I,T.info=Re}m!==1009&&(w=new Ms(m,t.width,t.height,o,r,i));let rt=new Zl(T,F);this.xr=rt,this.getContext=function(){return F},this.getContextAttributes=function(){return F.getContextAttributes()},this.forceContextLoss=function(){let e=Ie.get(`WEBGL_lose_context`);e&&e.loseContext()},this.forceContextRestore=function(){let e=Ie.get(`WEBGL_lose_context`);e&&e.restoreContext()},this.getPixelRatio=function(){return fe},this.setPixelRatio=function(e){e!==void 0&&(fe=e,this.setSize(ce,ue,!1))},this.getSize=function(e){return e.set(ce,ue)},this.setSize=function(e,n,r=!0){rt.isPresenting?z(`WebGLRenderer: Can't change size while VR device is presenting.`):(ce=e,ue=n,t.width=Math.floor(e*fe),t.height=Math.floor(n*fe),r===!0&&(t.style.width=e+`px`,t.style.height=n+`px`),w!==null&&w.setSize(t.width,t.height),this.setViewport(0,0,e,n))},this.getDrawingBufferSize=function(e){return e.set(ce*fe,ue*fe).floor()},this.setDrawingBufferSize=function(e,n,r){ce=e,ue=n,fe=r,t.width=Math.floor(e*r),t.height=Math.floor(n*r),this.setViewport(0,0,e,n)},this.setEffects=function(e){if(m===1009)B(`WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.`);else{if(e){for(let t=0;t<e.length;t++)if(e[t].isOutputPass===!0){z(`WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.`);break}}w.setEffects(e||[])}},this.getCurrentViewport=function(e){return e.copy(te)},this.getViewport=function(e){return e.copy(ye)},this.setViewport=function(e,t,n,r){e.isVector4?ye.set(e.x,e.y,e.z,e.w):ye.set(e,t,n,r),I.viewport(te.copy(ye).multiplyScalar(Pe()).round())},this.getScissor=function(e){return e.copy(be)},this.setScissor=function(e,t,n,r){e.isVector4?be.set(e.x,e.y,e.z,e.w):be.set(e,t,n,r),I.scissor(ne.copy(be).multiplyScalar(Pe()).round())},this.getScissorTest=function(){return xe},this.setScissorTest=function(e){I.setScissorTest(xe=e)},this.setOpaqueSort=function(e){_e=e},this.setTransparentSort=function(e){ve=e},this.getClearColor=function(e){return e.copy(Ye.getClearColor())},this.setClearColor=function(){Ye.setClearColor(...arguments)},this.getClearAlpha=function(){return Ye.getClearAlpha()},this.setClearAlpha=function(){Ye.setClearAlpha(...arguments)},this.clear=function(e=!0,t=!0,n=!0){let r=0;if(e){let e=!1;if(M!==null){let t=M.texture.format;e=h.has(t)}if(e){let e=M.texture.type,t=g.has(e),n=Ye.getClearColor(),r=Ye.getClearAlpha(),i=n.r,a=n.g,o=n.b;t?(_[0]=i,_[1]=a,_[2]=o,_[3]=r,F.clearBufferuiv(F.COLOR,0,_)):(v[0]=i,v[1]=a,v[2]=o,v[3]=r,F.clearBufferiv(F.COLOR,0,v))}else r|=F.COLOR_BUFFER_BIT}t&&(r|=F.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),n&&(r|=F.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),r!==0&&F.clear(r)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(e){e.setRenderer(this),D=e},this.dispose=function(){t.removeEventListener(`webglcontextlost`,it,!1),t.removeEventListener(`webglcontextrestored`,at,!1),t.removeEventListener(`webglcontextcreationerror`,ot,!1),Ye.dispose(),Ge.dispose(),Ke.dispose(),R.dispose(),L.dispose(),ze.dispose(),He.dispose(),Ve.dispose(),et.dispose(),tt.dispose(),Ue.dispose(),rt.dispose(),rt.removeEventListener(`sessionstart`,pt),rt.removeEventListener(`sessionend`,mt),gt.stop()};function it(e){e.preventDefault(),Ot(`WebGLRenderer: Context Lost.`),E=!0}function at(){Ot(`WebGLRenderer: Context Restored.`),E=!1;let e=Re.autoReset,t=Je.enabled,n=Je.autoUpdate,r=Je.needsUpdate,i=Je.type;nt(),Re.autoReset=e,Je.enabled=t,Je.autoUpdate=n,Je.needsUpdate=r,Je.type=i}function ot(e){B(`WebGLRenderer: A WebGL context could not be created. Reason: `,e.statusMessage)}function st(e){let t=e.target;t.removeEventListener(`dispose`,st),ct(t)}function ct(e){lt(e),L.remove(e)}function lt(e){let t=L.get(e).programs;t!==void 0&&(t.forEach(function(e){Ue.releaseProgram(e)}),e.isShaderMaterial&&Ue.releaseShaderCache(e))}this.renderBufferDirect=function(e,t,n,r,i,a){t===null&&(t=Me);let o=i.isMesh&&i.matrixWorld.determinantAffine()<0,s=At(e,t,n,r,i);I.setMaterial(r,o);let c=n.index,l=1;if(r.wireframe===!0){if(c=Ve.getWireframeAttribute(n),c===void 0)return;l=2}let u=n.drawRange,d=n.attributes.position,f=u.start*l,p=(u.start+u.count)*l;a!==null&&(f=Math.max(f,a.start*l),p=Math.min(p,(a.start+a.count)*l)),c===null?d!=null&&(f=Math.max(f,0),p=Math.min(p,d.count)):(f=Math.max(f,0),p=Math.min(p,c.count));let m=p-f;if(m<0||m===1/0)return;et.setup(i,r,s,n,c);let h,g=Ze;if(c!==null&&(h=Be.get(c),g=Qe,g.setIndex(h)),i.isMesh)r.wireframe===!0?(I.setLineWidth(r.wireframeLinewidth*Pe()),g.setMode(F.LINES)):g.setMode(F.TRIANGLES);else if(i.isLine){let e=r.linewidth;e===void 0&&(e=1),I.setLineWidth(e*Pe()),i.isLineSegments?g.setMode(F.LINES):i.isLineLoop?g.setMode(F.LINE_LOOP):g.setMode(F.LINE_STRIP)}else i.isPoints?g.setMode(F.POINTS):i.isSprite&&g.setMode(F.TRIANGLES);if(i.isBatchedMesh){if(Ie.get(`WEBGL_multi_draw`))g.renderMultiDraw(i._multiDrawStarts,i._multiDrawCounts,i._multiDrawCount);else{let e=i._multiDrawStarts,t=i._multiDrawCounts,n=i._multiDrawCount,a=c?Be.get(c).bytesPerElement:1,o=L.get(r).currentProgram.getUniforms();for(let r=0;r<n;r++)o.setValue(F,`_gl_DrawID`,r),g.render(e[r]/a,t[r])}}else if(i.isInstancedMesh)g.renderInstances(f,m,i.count);else if(n.isInstancedBufferGeometry){let e=n._maxInstanceCount===void 0?1/0:n._maxInstanceCount,t=Math.min(n.instanceCount,e);g.renderInstances(f,m,t)}else g.render(f,m)};function ut(e,t,n,r){D!==null&&e.isNodeMaterial&&D.setObject(r,e),we===!0&&qe.setState(e,n,!1),e.transparent===!0&&e.side===2&&e.forceSinglePass===!1?(e.side=1,e.needsUpdate=!0,wt(e,t,r),e.side=0,e.needsUpdate=!0,wt(e,t,r),e.side=2):wt(e,t,r)}this.compile=function(e,t,n=null){n===null&&(n=e),D!==null&&D.renderStart(e,t,n),x=Ke.get(n),x.init(t),C.push(x),n.traverseVisible(function(e){e.isLight&&e.layers.test(t.layers)&&(x.pushLight(e),e.castShadow&&x.pushShadow(e))}),e!==n&&e.traverseVisible(function(e){e.isLight&&e.layers.test(t.layers)&&(x.pushLight(e),e.castShadow&&x.pushShadow(e))}),x.setupLights(),D!==null&&D.updateLights(x.state.lightsArray),Ee=this.localClippingEnabled,we=qe.init(this.clippingPlanes,Ee),we===!0&&qe.setGlobalState(this.clippingPlanes,t),D!==null&&Je.render(x.state.shadowsArray,n,t);let r=new Set;return e.traverse(function(e){if(!(e.isMesh||e.isPoints||e.isLine||e.isSprite))return;let i=e.material;if(i){if(Array.isArray(i))for(let a=0;a<i.length;a++){let o=i[a];ut(o,n,t,e),r.add(o)}else ut(i,n,t,e),r.add(i)}}),x=C.pop(),D!==null&&D.renderEnd(),r},this.compileAsync=function(e,t,n=null){let r=this.compile(e,t,n);return new Promise(t=>{function n(){r.forEach(function(e){let t=L.get(e).currentProgram;(t===void 0||t.isReady())&&r.delete(e)}),r.size===0?t(e):setTimeout(n,10)}Ie.get(`KHR_parallel_shader_compile`)===null?setTimeout(n,10):n()})};let dt=null;function ft(e){dt&&dt(e)}function pt(){gt.stop()}function mt(){gt.start()}let gt=new Xo;gt.setAnimationLoop(ft),typeof self<`u`&&gt.setContext(self),this.setAnimationLoop=function(e){dt=e,rt.setAnimationLoop(e),e===null?gt.stop():gt.start()},rt.addEventListener(`sessionstart`,pt),rt.addEventListener(`sessionend`,mt),this.render=function(e,t){if(t!==void 0&&t.isCamera!==!0){B(`WebGLRenderer.render: camera is not an instance of THREE.Camera.`);return}if(E===!0)return;D!==null&&D.renderStart(e,t);let n=rt.enabled===!0&&rt.isPresenting===!0,r=w!==null&&(M===null||n)&&w.begin(T,M);if(e.matrixWorldAutoUpdate===!0&&e.updateMatrixWorld(),t.parent===null&&t.matrixWorldAutoUpdate===!0&&t.updateMatrixWorld(),rt.enabled===!0&&rt.isPresenting===!0&&(w===null||w.isCompositing()===!1)&&(rt.cameraAutoUpdate===!0&&rt.updateCamera(t),t=rt.getCamera()),e.isScene===!0&&e.onBeforeRender(T,e,t,M),x=Ke.get(e,C.length),x.init(t),x.state.textureUnits=R.getTextureUnits(),C.push(x),ke.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),t.isArrayCamera?Ce.setFromArrayCamera(t):Se.setFromProjectionMatrix(ke,St,t.reversedDepth),Ee=this.localClippingEnabled,we=qe.init(this.clippingPlanes,Ee),b=Ge.get(e,S.length),b.init(),S.push(b),this.info.render.frame++,rt.enabled===!0&&rt.isPresenting===!0){let e=T.xr.getDepthSensingMesh();e!==null&&_t(e,t,-1/0,T.sortObjects)}_t(e,t,0,T.sortObjects),b.finish(),D!==null&&D.updateLights(x.state.lightsArray),T.sortObjects===!0&&b.sort(_e,ve),Ne=rt.enabled===!1||rt.isPresenting===!1||rt.hasDepthSensing()===!1,Ne&&Ye.addToRenderList(b,e),this.info.autoReset===!0&&this.info.reset(),we===!0&&qe.beginShadows();let i=x.state.shadowsArray;if(Je.render(i,e,t),we===!0&&qe.endShadows(),(r&&w.hasRenderPass())===!1){let n=b.opaque,r=b.transmissive;if(x.setupLights(),t.isArrayCamera){let i=t.cameras;if(r.length>0)for(let t=0,a=i.length;t<a;t++){let a=i[t];yt(n,r,e,a)}Ne&&Ye.render(e);for(let t=0,n=i.length;t<n;t++){let n=i[t];vt(b,e,n,n.viewport)}}else r.length>0&&yt(n,r,e,t),Ne&&Ye.render(e),vt(b,e,t)}M!==null&&ee===0&&(R.updateMultisampleRenderTarget(M),R.updateRenderTargetMipmap(M)),r&&w.end(T),e.isScene===!0&&e.onAfterRender(T,e,t),et.resetDefaultState(),N=-1,P=null,C.pop(),C.length>0?(x=C[C.length-1],R.setTextureUnits(x.state.textureUnits),we===!0&&qe.setGlobalState(T.clippingPlanes,x.state.camera)):x=null,S.pop(),b=S.length>0?S[S.length-1]:null,D!==null&&D.renderEnd()};function _t(e,t,n,r){if(e.visible===!1)return;if(e.layers.test(t.layers)){if(e.isGroup)n=e.renderOrder;else if(e.isLOD)e.autoUpdate===!0&&e.update(t);else if(e.isLight)x.pushLight(e),e.castShadow&&x.pushShadow(e);else if(e.isSprite){let i=t.isArrayCamera?Ce:Se;if(!e.frustumCulled||e.intersectsFrustum(i)){r&&je.setFromMatrixPosition(e.matrixWorld).applyMatrix4(ke);let i=He.update(e),a=e.material;a.visible&&b.push(e,i,a,n,je.z,null,t)}}else if(e.isMesh||e.isLine||e.isPoints){let i=t.isArrayCamera?Ce:Se;if(!e.frustumCulled||e.intersectsFrustum(i)){let i=He.update(e),a=e.material;if(r&&(e.boundingSphere===void 0?(i.boundingSphere===null&&i.computeBoundingSphere(),je.copy(i.boundingSphere.center)):(e.boundingSphere===null&&e.computeBoundingSphere(),je.copy(e.boundingSphere.center)),je.applyMatrix4(e.matrixWorld).applyMatrix4(ke)),Array.isArray(a)){let r=i.groups;for(let o=0,s=r.length;o<s;o++){let s=r[o],c=a[s.materialIndex];c&&c.visible&&b.push(e,i,c,n,je.z,s,t)}}else a.visible&&b.push(e,i,a,n,je.z,null,t)}}}let i=e.children;for(let e=0,a=i.length;e<a;e++)_t(i[e],t,n,r)}function vt(e,t,n,r){let{opaque:i,transmissive:a,transparent:o}=e;x.setupLightsView(n),we===!0&&qe.setGlobalState(T.clippingPlanes,n),r&&I.viewport(te.copy(r)),i.length>0&&bt(i,t,n),a.length>0&&bt(a,t,n),o.length>0&&bt(o,t,n),I.buffers.depth.setTest(!0),I.buffers.depth.setMask(!0),I.buffers.color.setMask(!0),I.setPolygonOffset(!1)}function yt(e,t,n,r){if((n.isScene===!0?n.overrideMaterial:null)!==null)return;if(x.state.transmissionRenderTarget[r.id]===void 0){let e=Ie.has(`EXT_color_buffer_half_float`)||Ie.has(`EXT_color_buffer_float`);x.state.transmissionRenderTarget[r.id]=new Dn(1,1,{generateMipmaps:!0,type:e?pe:oe,minFilter:ae,samples:Math.max(4,Le.samples),stencilBuffer:i,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:G.workingColorSpace})}let a=x.state.transmissionRenderTarget[r.id],o=r.viewport||te;a.setSize(o.z*T.transmissionResolutionScale,o.w*T.transmissionResolutionScale);let s=T.getRenderTarget(),c=T.getActiveCubeFace(),l=T.getActiveMipmapLevel();T.setRenderTarget(a),T.getClearColor(ie),se=T.getClearAlpha(),se<1&&T.setClearColor(16777215,.5),T.clear(),Ne&&Ye.render(n);let u=T.toneMapping;T.toneMapping=0;let d=r.viewport;if(r.viewport!==void 0&&(r.viewport=void 0),x.setupLightsView(r),we===!0&&qe.setGlobalState(T.clippingPlanes,r),bt(e,n,r),R.updateMultisampleRenderTarget(a),R.updateRenderTargetMipmap(a),Ie.has(`WEBGL_multisampled_render_to_texture`)===!1){let e=!1;for(let i=0,a=t.length;i<a;i++){let{object:a,geometry:o,material:s,group:c}=t[i];if(s.side===2&&a.layers.test(r.layers)){let t=s.side;s.side=1,s.needsUpdate=!0,xt(a,n,r,o,s,c),s.side=t,s.needsUpdate=!0,e=!0}}e===!0&&(R.updateMultisampleRenderTarget(a),R.updateRenderTargetMipmap(a))}T.setRenderTarget(s,c,l),T.setClearColor(ie,se),d!==void 0&&(r.viewport=d),T.toneMapping=u}function bt(e,t,n){let r=t.isScene===!0?t.overrideMaterial:null;for(let i=0,a=e.length;i<a;i++){let a=e[i],{object:o,geometry:s,group:c}=a,l=a.material;l.allowOverride===!0&&r!==null&&(l=r),o.layers.test(n.layers)&&xt(o,t,n,s,l,c)}}function xt(e,t,n,r,i,a){D!==null&&i.isNodeMaterial&&D.setObject(e,i),e.onBeforeRender(T,t,n,r,i,a),e.modelViewMatrix.multiplyMatrices(n.matrixWorldInverse,e.matrixWorld),e.normalMatrix.getNormalMatrix(e.modelViewMatrix),i.onBeforeRender(T,t,n,r,e,a),i.transparent===!0&&i.side===2&&i.forceSinglePass===!1?(i.side=1,i.needsUpdate=!0,T.renderBufferDirect(n,t,r,i,e,a),i.side=0,i.needsUpdate=!0,T.renderBufferDirect(n,t,r,i,e,a),i.side=2):T.renderBufferDirect(n,t,r,i,e,a),e.onAfterRender(T,t,n,r,i,a)}function Ct(e){let t=0;for(let n of e)n.texture!==null&&t++;return t}function wt(e,t,n){t.isScene!==!0&&(t=Me);let r=L.get(e),i=x.state.lights,a=x.state.shadowsArray,o=i.state.version,s=Ue.getParameters(e,i.state,a,t,n,x.state.lightProbeGridArray),c=Ue.getProgramCacheKey(s),l=r.programs;r.environment=e.isMeshStandardMaterial||e.isMeshLambertMaterial||e.isMeshPhongMaterial?t.environment:null,r.fog=t.fog;let u=e.isMeshStandardMaterial||e.isMeshLambertMaterial&&!e.envMap||e.isMeshPhongMaterial&&!e.envMap;r.envMap=ze.get(e.envMap||r.environment,u),r.envMapRotation=r.environment!==null&&e.envMap===null?t.environmentRotation:e.envMapRotation,l===void 0&&(e.addEventListener(`dispose`,st),l=new Map,r.programs=l,r.programVariants=new Map);let d=l.get(c);if(d!==void 0){if(r.currentProgram===d&&r.lightsStateVersion===o)return kt(e,s),d}else s.uniforms=Ue.getUniforms(e),D!==null&&e.isNodeMaterial&&D.build(e,n,s),e.onBeforeCompile(s,T),d=Ue.acquireProgram(s,c),l.set(c,d),r.uniforms=s.uniforms;let f=r.uniforms;return(!e.isShaderMaterial&&!e.isRawShaderMaterial||e.clipping===!0)&&(f.clippingPlanes=qe.uniform),kt(e,s),r.needsLights=Nt(e),r.lightsStateVersion=o,r.needsLights&&(f.ambientLightColor.value=i.state.ambient,f.lightProbe.value=i.state.probe,f.sunLights.value=i.state.sun,f.sunLightShadows.value=i.state.sunShadow,f.directionalLights.value=i.state.directional,f.directionalLightShadows.value=i.state.directionalShadow,f.spotLights.value=i.state.spot,f.spotLightShadows.value=i.state.spotShadow,f.rectAreaLights.value=i.state.rectArea,f.ltc_1.value=i.state.rectAreaLTC1,f.ltc_2.value=i.state.rectAreaLTC2,f.pointLights.value=i.state.point,f.pointLightShadows.value=i.state.pointShadow,f.hemisphereLights.value=i.state.hemi,f.sunShadowMatrix.value=i.state.sunShadowMatrix,f.sunShadowCascade.value=i.state.sunShadowCascade,f.directionalShadowMatrix.value=i.state.directionalShadowMatrix,f.spotLightMatrix.value=i.state.spotLightMatrix,f.spotLightMap.value=i.state.spotLightMap,f.pointShadowMatrix.value=i.state.pointShadowMatrix),r.numLightProbeGrids=Ct(x.state.lightProbeGridArray),r.currentProgram=d,r.uniformsList=null,d}function Tt(e,t,n,r,i){let a=L.get(e),o=a.currentProgram.id+`,`+r+`,`+i,s=a.programVariants.get(o);return s===void 0?(s=wt(e,t,n),a.programVariants.set(o,s)):(a.currentProgram=s,a.uniformsList=null,a.outputColorSpace=r,a.toneMapping=i),s}function Dt(e){if(e.uniformsList===null){let t=e.currentProgram.getUniforms();e.uniformsList=Vc.seqWithValue(t.seq,e.uniforms)}return e.uniformsList}function kt(e,t){let n=L.get(e);n.outputColorSpace=t.outputColorSpace,n.batching=t.batching,n.batchingColor=t.batchingColor,n.instancing=t.instancing,n.instancingColor=t.instancingColor,n.instancingMorph=t.instancingMorph,n.skinning=t.skinning,n.morphTargets=t.morphTargets,n.morphNormals=t.morphNormals,n.morphColors=t.morphColors,n.morphTargetsCount=t.morphTargetsCount,n.numClippingPlanes=t.numClippingPlanes,n.numIntersection=t.numClipIntersection,n.vertexAlphas=t.vertexAlphas,n.vertexTangents=t.vertexTangents,n.toneMapping=t.toneMapping}function At(e,t,n,r,i){t.isScene!==!0&&(t=Me),R.resetTextureUnits();let a=t.fog,o=r.isMeshStandardMaterial||r.isMeshLambertMaterial||r.isMeshPhongMaterial?t.environment:null,s=M===null?T.outputColorSpace:M.isXRRenderTarget===!0?M.texture.colorSpace:G.workingColorSpace,c=r.isMeshStandardMaterial||r.isMeshLambertMaterial&&!r.envMap||r.isMeshPhongMaterial&&!r.envMap,l=ze.get(r.envMap||o,c),u=r.vertexColors===!0&&!!n.attributes.color&&n.attributes.color.itemSize===4,d=!!n.attributes.tangent&&(!!r.normalMap||r.anisotropy>0),f=!!n.morphAttributes.position,p=!!n.morphAttributes.normal,m=!!n.morphAttributes.color,h=0;r.toneMapped&&(M===null||M.isXRRenderTarget===!0)&&(h=T.toneMapping);let g=n.morphAttributes.position||n.morphAttributes.normal||n.morphAttributes.color,_=g===void 0?0:g.length,v=L.get(r),b=x.state.lights;if(we===!0&&(Ee===!0||e!==P)){let t=e===P&&r.id===N;qe.setState(r,e,t)}let S=!1,C=!1;r.version===v.__version?v.needsLights&&v.lightsStateVersion!==b.state.version||i.isBatchedMesh&&v.batching===!1||!i.isBatchedMesh&&v.batching===!0||i.isBatchedMesh&&v.batchingColor===!0&&i._colorsTexture===null||i.isBatchedMesh&&v.batchingColor===!1&&i._colorsTexture!==null||i.isInstancedMesh&&v.instancing===!1||!i.isInstancedMesh&&v.instancing===!0||i.isSkinnedMesh&&v.skinning===!1||!i.isSkinnedMesh&&v.skinning===!0||i.isInstancedMesh&&v.instancingColor===!0&&i.instanceColor===null||i.isInstancedMesh&&v.instancingColor===!1&&i.instanceColor!==null||i.isInstancedMesh&&v.instancingMorph===!0&&i.morphTexture===null||i.isInstancedMesh&&v.instancingMorph===!1&&i.morphTexture!==null?S=!0:v.envMap===l?r.fog===!0&&v.fog!==a||v.numClippingPlanes!==void 0&&(v.numClippingPlanes!==qe.numPlanes||v.numIntersection!==qe.numIntersection)?S=!0:v.vertexAlphas===u&&v.vertexTangents===d&&v.morphTargets===f&&v.morphNormals===p&&v.morphColors===m&&v.morphTargetsCount===_&&v.numLightProbeGrids===Ct(x.state.lightProbeGridArray)?(v.outputColorSpace!==s||v.toneMapping!==h)&&(C=!0):S=!0:S=!0:(S=!0,v.__version=r.version);let w=v.currentProgram;(S===!0||C===!0)&&(w=C===!0?Tt(r,t,i,s,h):wt(r,t,i),D&&r.isNodeMaterial&&D.onUpdateProgram(r,w,v));let E=!1,O=!1,k=!1,A=w.getUniforms(),j=v.uniforms;if(I.useProgram(w.program)&&(E=!0,O=!0,k=!0),r.id!==N&&(N=r.id,O=!0),E||P!==e){I.buffers.depth.getReversed()&&e.reversedDepth!==!0&&(e._reversedDepth=!0,e.updateProjectionMatrix()),A.setValue(F,`projectionMatrix`,e.projectionMatrix),A.setValue(F,`viewMatrix`,e.matrixWorldInverse);let t=A.map.cameraPosition;t!==void 0&&t.setValue(F,Ae.setFromMatrixPosition(e.matrixWorld)),Le.logarithmicDepthBuffer&&A.setValue(F,`logDepthBufFC`,2/(Math.log(e.far+1)/Math.LN2)),(r.isMeshPhongMaterial||r.isMeshToonMaterial||r.isMeshLambertMaterial||r.isMeshBasicMaterial||r.isMeshStandardMaterial||r.isShaderMaterial)&&A.setValue(F,`isOrthographic`,e.isOrthographicCamera===!0),P!==e&&(P=e,O=!0,k=!0)}if(v.needsLights&&(b.state.sunShadowMap.length>0&&A.setValue(F,`sunShadowMap`,b.state.sunShadowMap,R),b.state.directionalShadowMap.length>0&&A.setValue(F,`directionalShadowMap`,b.state.directionalShadowMap,R),b.state.spotShadowMap.length>0&&A.setValue(F,`spotShadowMap`,b.state.spotShadowMap,R),b.state.pointShadowMap.length>0&&A.setValue(F,`pointShadowMap`,b.state.pointShadowMap,R)),i.isSkinnedMesh){A.setOptional(F,i,`bindMatrix`),A.setOptional(F,i,`bindMatrixInverse`);let e=i.skeleton;e&&(e.boneTexture===null&&e.computeBoneTexture(),A.setValue(F,`boneTexture`,e.boneTexture,R))}i.isBatchedMesh&&(A.setOptional(F,i,`batchingTexture`),A.setValue(F,`batchingTexture`,i._matricesTexture,R),A.setOptional(F,i,`batchingIdTexture`),A.setValue(F,`batchingIdTexture`,i._indirectTexture,R),A.setOptional(F,i,`batchingColorTexture`),i._colorsTexture!==null&&A.setValue(F,`batchingColorTexture`,i._colorsTexture,R));let ee=n.morphAttributes;if((ee.position!==void 0||ee.normal!==void 0||ee.color!==void 0)&&Xe.update(i,n,w),(O||v.receiveShadow!==i.receiveShadow)&&(v.receiveShadow=i.receiveShadow,A.setValue(F,`receiveShadow`,i.receiveShadow)),(r.isMeshStandardMaterial||r.isMeshLambertMaterial||r.isMeshPhongMaterial)&&r.envMap===null&&t.environment!==null&&(j.envMapIntensity.value=t.environmentIntensity),j.dfgLUT!==void 0&&(j.dfgLUT.value=iu()),O){if(A.setValue(F,`toneMappingExposure`,T.toneMappingExposure),v.needsLights&&Mt(j,k),a&&r.fog===!0&&We.refreshFogUniforms(j,a),We.refreshMaterialUniforms(j,r,fe,ue,x.state.transmissionRenderTarget[e.id]),v.needsLights&&v.numLightProbeGrids>0){let e=y,t=0;for(let n of x.state.lightProbeGridArray)n.texture!==null&&(e.textures[t]=n.texture,e.min[t]=n.boundingBox.min,e.max[t]=n.boundingBox.max,e.resolution[t]=n.resolution,t++);for(let n in e)e[n].length=t;j.probesSH.value=e.textures,j.probesMin.value=e.min,j.probesMax.value=e.max,j.probesResolution.value=e.resolution}Vc.upload(F,Dt(v),j,R)}if(r.isShaderMaterial&&r.uniformsNeedUpdate===!0&&(Vc.upload(F,Dt(v),j,R),r.uniformsNeedUpdate=!1),r.isSpriteMaterial&&A.setValue(F,`center`,i.center),A.setValue(F,`modelViewMatrix`,i.modelViewMatrix),A.setValue(F,`normalMatrix`,i.normalMatrix),A.setValue(F,`modelMatrix`,i.matrixWorld),r.uniformsGroups!==void 0){let e=r.uniformsGroups;for(let t=0,n=e.length;t<n;t++){let n=e[t];tt.update(n,w),tt.bind(n,w)}}return w}function Mt(e,t){e.ambientLightColor.needsUpdate=t,e.lightProbe.needsUpdate=t,e.sunLights.needsUpdate=t,e.sunLightShadows.needsUpdate=t,e.directionalLights.needsUpdate=t,e.directionalLightShadows.needsUpdate=t,e.pointLights.needsUpdate=t,e.pointLightShadows.needsUpdate=t,e.spotLights.needsUpdate=t,e.spotLightShadows.needsUpdate=t,e.rectAreaLights.needsUpdate=t,e.hemisphereLights.needsUpdate=t}function Nt(e){return e.isMeshLambertMaterial||e.isMeshToonMaterial||e.isMeshPhongMaterial||e.isMeshStandardMaterial||e.isShadowMaterial||e.isShaderMaterial&&e.lights===!0}this.getActiveCubeFace=function(){return j},this.getActiveMipmapLevel=function(){return ee},this.getRenderTarget=function(){return M},this.setRenderTargetTextures=function(e,t,n){let r=L.get(e);r.__autoAllocateDepthBuffer=e.resolveDepthBuffer===!1,r.__autoAllocateDepthBuffer===!1&&(r.__useRenderToTexture=!1),L.get(e.texture).__webglTexture=t,L.get(e.depthTexture).__webglTexture=r.__autoAllocateDepthBuffer?void 0:n,r.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(e,t){let n=L.get(e);n.__webglFramebuffer=t,n.__useDefaultFramebuffer=t===void 0},this.setRenderTarget=function(e,t=0,n=0){M=e,j=t,ee=n;let r=null,i=!1,a=!1;if(e){let o=L.get(e);if(o.__useDefaultFramebuffer!==void 0){I.bindFramebuffer(F.FRAMEBUFFER,o.__webglFramebuffer),te.copy(e.viewport),ne.copy(e.scissor),re=e.scissorTest,I.viewport(te),I.scissor(ne),I.setScissorTest(re),N=-1;return}if(o.__webglFramebuffer===void 0)R.setupRenderTarget(e);else if(o.__hasExternalTextures)R.rebindTextures(e,L.get(e.texture).__webglTexture,L.get(e.depthTexture).__webglTexture);else if(e.depthBuffer){let t=e.depthTexture;if(o.__boundDepthTexture!==t){if(t!==null&&L.has(t)&&(e.width!==t.image.width||e.height!==t.image.height))throw Error(`THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.`);R.setupDepthRenderbuffer(e)}}let s=e.texture;(s.isData3DTexture||s.isDataArrayTexture||s.isCompressedArrayTexture)&&(a=!0);let c=L.get(e).__webglFramebuffer;e.isWebGLCubeRenderTarget?(r=Array.isArray(c[t])?c[t][n]:c[t],i=!0):r=e.samples>0&&R.useMultisampledRTT(e)===!1?L.get(e).__webglMultisampledFramebuffer:Array.isArray(c)?c[n]:c,te.copy(e.viewport),ne.copy(e.scissor),re=e.scissorTest}else te.copy(ye).multiplyScalar(fe).floor(),ne.copy(be).multiplyScalar(fe).floor(),re=xe;if(n!==0&&(r=O),I.bindFramebuffer(F.FRAMEBUFFER,r)&&I.drawBuffers(e,r),I.viewport(te),I.scissor(ne),I.setScissorTest(re),i){let r=L.get(e.texture);F.framebufferTexture2D(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_CUBE_MAP_POSITIVE_X+t,r.__webglTexture,n)}else if(a){let r=t;for(let t=0;t<e.textures.length;t++){let i=L.get(e.textures[t]);F.framebufferTextureLayer(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0+t,i.__webglTexture,n,r)}}else if(e!==null&&n!==0){let t=L.get(e.texture);F.framebufferTexture2D(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_2D,t.__webglTexture,n)}N=-1};function Pt(e){let t=L.get(e);return(t.__readFormat!==e.format||t.__readType!==e.type)&&(t.__readFormat=e.format,t.__readType=e.type,t.__formatReadable=Le.textureFormatReadable(e.format),t.__typeReadable=Le.textureTypeReadable(e.type)),t}this.readRenderTargetPixels=function(e,t,n,r,i,a,o,s=0){if(!(e&&e.isWebGLRenderTarget)){B(`WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.`);return}let c=L.get(e).__webglFramebuffer;if(e.isWebGLCubeRenderTarget&&o!==void 0&&(c=c[o],Array.isArray(c)&&(c=c[0])),c){I.bindFramebuffer(F.FRAMEBUFFER,c);try{let o=e.textures[s],c=o.format,l=o.type;e.textures.length>1&&F.readBuffer(F.COLOR_ATTACHMENT0+s);let u=Pt(o);if(u.__formatReadable===!1){B(`WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.`);return}if(u.__typeReadable===!1){B(`WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.`);return}t>=0&&t<=e.width-r&&n>=0&&n<=e.height-i&&F.readPixels(t,n,r,i,$e.convert(c),$e.convert(l),a)}finally{let e=M===null?null:L.get(M).__webglFramebuffer;I.bindFramebuffer(F.FRAMEBUFFER,e)}}},this.readRenderTargetPixelsAsync=async function(e,t,n,r,i,a,o,s=0){if(!(e&&e.isWebGLRenderTarget))throw Error(`THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.`);let c=L.get(e).__webglFramebuffer;if(e.isWebGLCubeRenderTarget&&o!==void 0&&(c=c[o],Array.isArray(c)&&(c=c[0])),c){if(t>=0&&t<=e.width-r&&n>=0&&n<=e.height-i){I.bindFramebuffer(F.FRAMEBUFFER,c);let o=e.textures[s],l=o.format,u=o.type;e.textures.length>1&&F.readBuffer(F.COLOR_ATTACHMENT0+s);let d=Pt(o);if(d.__formatReadable===!1)throw Error(`THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.`);if(d.__typeReadable===!1)throw Error(`THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.`);let f=F.createBuffer();F.bindBuffer(F.PIXEL_PACK_BUFFER,f),F.bufferData(F.PIXEL_PACK_BUFFER,a.byteLength,F.STREAM_READ),F.readPixels(t,n,r,i,$e.convert(l),$e.convert(u),0),F.bindBuffer(F.PIXEL_PACK_BUFFER,null);let p=M===null?null:L.get(M).__webglFramebuffer;I.bindFramebuffer(F.FRAMEBUFFER,p);let m=F.fenceSync(F.SYNC_GPU_COMMANDS_COMPLETE,0);return F.flush(),await jt(F,m,4),F.bindBuffer(F.PIXEL_PACK_BUFFER,f),F.getBufferSubData(F.PIXEL_PACK_BUFFER,0,a),F.bindBuffer(F.PIXEL_PACK_BUFFER,null),F.deleteBuffer(f),F.deleteSync(m),a}throw Error(`THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.`)}},this.copyFramebufferToTexture=function(e,t=null,n=0){let r=2**-n,i=Math.floor(e.image.width*r),a=Math.floor(e.image.height*r),o=t===null?0:t.x,s=t===null?0:t.y;R.setTexture2D(e,0),F.copyTexSubImage2D(F.TEXTURE_2D,n,0,0,o,s,i,a),I.unbindTexture()},this.copyTextureToTexture=function(e,t,n=null,r=null,i=0,a=0){let o,s,c,l,u,d,f,p,m,h=e.isCompressedTexture?e.mipmaps[a]:e.image;if(n!==null)o=n.max.x-n.min.x,s=n.max.y-n.min.y,c=n.isBox3?n.max.z-n.min.z:1,l=n.min.x,u=n.min.y,d=n.isBox3?n.min.z:0;else{let t=2**-i;o=Math.floor(h.width*t),s=Math.floor(h.height*t),c=e.isDataArrayTexture?h.depth:e.isData3DTexture?Math.floor(h.depth*t):1,l=0,u=0,d=0}r===null?(f=0,p=0,m=0):(f=r.x,p=r.y,m=r.z);let g=$e.convert(t.format),_=$e.convert(t.type),v;t.isData3DTexture?(R.setTexture3D(t,0),v=F.TEXTURE_3D):t.isDataArrayTexture||t.isCompressedArrayTexture?(R.setTexture2DArray(t,0),v=F.TEXTURE_2D_ARRAY):(R.setTexture2D(t,0),v=F.TEXTURE_2D),I.activeTexture(F.TEXTURE0),I.pixelStorei(F.UNPACK_FLIP_Y_WEBGL,t.flipY),I.pixelStorei(F.UNPACK_PREMULTIPLY_ALPHA_WEBGL,t.premultiplyAlpha),I.pixelStorei(F.UNPACK_ALIGNMENT,t.unpackAlignment);let y=I.getParameter(F.UNPACK_ROW_LENGTH),b=I.getParameter(F.UNPACK_IMAGE_HEIGHT),x=I.getParameter(F.UNPACK_SKIP_PIXELS),S=I.getParameter(F.UNPACK_SKIP_ROWS),C=I.getParameter(F.UNPACK_SKIP_IMAGES);I.pixelStorei(F.UNPACK_ROW_LENGTH,h.width),I.pixelStorei(F.UNPACK_IMAGE_HEIGHT,h.height),I.pixelStorei(F.UNPACK_SKIP_PIXELS,l),I.pixelStorei(F.UNPACK_SKIP_ROWS,u),I.pixelStorei(F.UNPACK_SKIP_IMAGES,d);let w=e.isDataArrayTexture||e.isData3DTexture,T=t.isDataArrayTexture||t.isData3DTexture;if(e.isDepthTexture){let n=L.get(e),r=L.get(t),h=L.get(n.__renderTarget),g=L.get(r.__renderTarget);I.bindFramebuffer(F.READ_FRAMEBUFFER,h.__webglFramebuffer),I.bindFramebuffer(F.DRAW_FRAMEBUFFER,g.__webglFramebuffer);for(let n=0;n<c;n++)w&&(F.framebufferTextureLayer(F.READ_FRAMEBUFFER,F.COLOR_ATTACHMENT0,L.get(e).__webglTexture,i,d+n),F.framebufferTextureLayer(F.DRAW_FRAMEBUFFER,F.COLOR_ATTACHMENT0,L.get(t).__webglTexture,a,m+n)),F.blitFramebuffer(l,u,l+o,u+s,f,p,f+o,p+s,F.DEPTH_BUFFER_BIT,F.NEAREST);I.bindFramebuffer(F.READ_FRAMEBUFFER,null),I.bindFramebuffer(F.DRAW_FRAMEBUFFER,null)}else if(i!==0||e.isRenderTargetTexture||L.has(e)){let n=L.get(e),r=L.get(t);I.bindFramebuffer(F.READ_FRAMEBUFFER,k),I.bindFramebuffer(F.DRAW_FRAMEBUFFER,A);for(let e=0;e<c;e++)w?F.framebufferTextureLayer(F.READ_FRAMEBUFFER,F.COLOR_ATTACHMENT0,n.__webglTexture,i,d+e):F.framebufferTexture2D(F.READ_FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_2D,n.__webglTexture,i),T?F.framebufferTextureLayer(F.DRAW_FRAMEBUFFER,F.COLOR_ATTACHMENT0,r.__webglTexture,a,m+e):F.framebufferTexture2D(F.DRAW_FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_2D,r.__webglTexture,a),i===0?T?F.copyTexSubImage3D(v,a,f,p,m+e,l,u,o,s):F.copyTexSubImage2D(v,a,f,p,l,u,o,s):F.blitFramebuffer(l,u,l+o,u+s,f,p,f+o,p+s,F.COLOR_BUFFER_BIT,F.NEAREST);I.bindFramebuffer(F.READ_FRAMEBUFFER,null),I.bindFramebuffer(F.DRAW_FRAMEBUFFER,null)}else T?e.isDataTexture||e.isData3DTexture?F.texSubImage3D(v,a,f,p,m,o,s,c,g,_,h.data):t.isCompressedArrayTexture?F.compressedTexSubImage3D(v,a,f,p,m,o,s,c,g,h.data):F.texSubImage3D(v,a,f,p,m,o,s,c,g,_,h):e.isDataTexture?F.texSubImage2D(F.TEXTURE_2D,a,f,p,o,s,g,_,h.data):e.isCompressedTexture?F.compressedTexSubImage2D(F.TEXTURE_2D,a,f,p,h.width,h.height,g,h.data):F.texSubImage2D(F.TEXTURE_2D,a,f,p,o,s,g,_,h);I.pixelStorei(F.UNPACK_ROW_LENGTH,y),I.pixelStorei(F.UNPACK_IMAGE_HEIGHT,b),I.pixelStorei(F.UNPACK_SKIP_PIXELS,x),I.pixelStorei(F.UNPACK_SKIP_ROWS,S),I.pixelStorei(F.UNPACK_SKIP_IMAGES,C),a===0&&t.generateMipmaps===!0&&t.mipmapsAutoUpdate===!0&&F.generateMipmap(v),I.unbindTexture()},this.initRenderTarget=function(e){L.get(e).__webglFramebuffer===void 0&&R.setupRenderTarget(e)},this.initTexture=function(e){e.isCubeTexture?R.setTextureCube(e,0):e.isData3DTexture?R.setTexture3D(e,0):e.isDataArrayTexture||e.isCompressedArrayTexture?R.setTexture2DArray(e,0):R.setTexture2D(e,0),I.unbindTexture()},this.resetState=function(){j=0,ee=0,M=null,I.reset(),et.reset()},typeof __THREE_DEVTOOLS__<`u`&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent(`observe`,{detail:this}))}get coordinateSystem(){return St}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=G._getDrawingBufferColorSpace(e),t.unpackColorSpace=G._getUnpackColorSpace()}};function ou(e,t){let n=document.createElement(`canvas`);n.width=e,n.height=t;let r=n.getContext(`2d`);return r.imageSmoothingEnabled=!1,[n,r]}function su(e,t,n,r=0,i=0,a=16){for(let o=0;o<a;o++){let s=(t[o]??``).padEnd(a,`.`);for(let t=0;t<a;t++){let a=s[t];a!==`.`&&n[a]&&(e.fillStyle=n[a],e.fillRect(r+t,i+o,1,1))}}}function cu(e,t,n=16){let[r,i]=ou(n,n);return su(i,e,t,0,0,n),r}var lu=1337;function uu(){return lu=lu*16807%2147483647,(lu-1)/2147483646}function du(e,t){let n=parseInt(e.slice(1),16);return`rgb(${Math.max(0,Math.min(255,Math.round((n>>16&255)*t)))},${Math.max(0,Math.min(255,Math.round((n>>8&255)*t)))},${Math.max(0,Math.min(255,Math.round((n&255)*t)))})`}function fu(e){let t=new Ca(e);return t.magFilter=P,t.minFilter=P,t.generateMipmaps=!1,t.colorSpace=ht,t}function pu(e,t=.18,n){let[r,i]=ou(16,16);for(let n=0;n<16;n++)for(let r=0;r<16;r++)i.fillStyle=du(e,1-t+uu()*t*2),i.fillRect(r,n,1,1);for(let e of n??[])for(let t=0;t<e.n;t++){let t=2+Math.floor(uu()*11),n=2+Math.floor(uu()*11),r=e.size??2;for(let a=0;a<r+1;a++){let a=t+Math.floor(uu()*r),o=n+Math.floor(uu()*r);i.fillStyle=du(e.color,.85+uu()*.3),i.fillRect(a,o,1,1),i.fillStyle=du(e.color,1.35),uu()<.3&&i.fillRect(a,o,1,1)}}return i.fillStyle=`rgba(255,255,255,0.10)`,i.fillRect(0,0,16,1),i.fillRect(0,0,1,16),i.fillStyle=`rgba(0,0,0,0.22)`,i.fillRect(0,15,16,1),i.fillRect(15,0,1,16),r}var mu=e=>pu(`#7d7d82`,.14,[{color:e,n:4,size:2}]),hu=e=>pu(`#4a4a52`,.14,[{color:e,n:4,size:2}]);function gu(){let[e,t]=ou(16,16);for(let e=0;e<16;e++)for(let n=0;n<16;n++)t.fillStyle=du(`#8c562c`,(n%4==0?.78:1)*(.92+uu()*.16)),t.fillRect(n,e,1,1);return t.fillStyle=`#3c4048`,t.fillRect(0,2,16,2),t.fillRect(0,12,16,2),t.fillStyle=`#68707c`,t.fillRect(1,2,14,1),t.fillRect(1,12,14,1),t.fillStyle=`#c82e22`,t.fillRect(0,5,16,6),t.fillStyle=`#f25038`,t.fillRect(1,6,14,1),t.fillStyle=`#ffe898`,t.fillRect(7,6,2,4),t.fillRect(6,7,4,2),t.fillStyle=`rgba(0,0,0,0.3)`,t.fillRect(0,0,1,16),t.fillRect(15,0,1,16),t.fillRect(0,15,16,1),e}function _u(){let e=pu(`#383448`,.14);return su(e.getContext(`2d`),[`................`,`.......oo.......`,`......oWWo......`,`.....oWLLMo.....`,`..oo.oWLLMo.oo..`,`.oWWooLMMMoOWWo.`,`.oWLLMLMMMMLWMo.`,`..oLMMPPPPMLMo..`,`..oMMPPLLPPMMo..`,`...oMPPLLPPMo...`,`...oMMMMMMMMo...`,`....ooMMMMoo....`,`......oooo......`,`................`,`................`,`................`],{o:`#161224`,W:`#ffffff`,L:`#9efcff`,M:`#48c8e8`,P:`#ff88d8`,O:`#161224`}),e}function vu(){let[e,t]=ou(16,16);for(let e=0;e<16;e++)for(let n=0;n<16;n++)t.fillStyle=du(`#1a2232`,.9+uu()*.2),t.fillRect(n,e,1,1);return t.fillStyle=`#3898c8`,t.fillRect(0,0,16,2),t.fillRect(0,14,16,2),t.fillStyle=`#78f0ff`,t.fillRect(1,1,14,1),t.fillRect(1,14,14,1),su(t,[`................`,`................`,`................`,`.......GG.......`,`......GWWG......`,`.....GWCCWG.....`,`....GWCWWCWG....`,`...GWCWWWWCWG...`,`...GWCWWWWCWG...`,`....GWCWWCWG....`,`.....GWCCWG.....`,`......GWWG......`,`.......GG.......`,`................`,`................`,`................`],{G:`#d8a038`,C:`#48d8f8`,W:`#e8ffff`}),e}function yu(e){switch(e){case`dirt`:return pu(`#7a5232`,.2,[{color:`#5b3a20`,n:5,size:1}]);case`stone`:return pu(`#7d7d82`,.14,[{color:`#5f5f66`,n:6,size:2}]);case`deepslate`:return pu(`#4a4a52`,.16,[{color:`#33333a`,n:7,size:2}]);case`obsidian`:return pu(`#1c1228`,.25,[{color:`#5a2d8a`,n:5,size:2}]);case`bedrock`:return pu(`#3a3a3a`,.45,[{color:`#151515`,n:9,size:2}]);case`seal`:return vu();case`core`:return pu(`#5a1f8a`,.3,[{color:`#e07bff`,n:8,size:2},{color:`#ffffff`,n:2,size:1}]);case`barrel`:return gu();case`crystal`:return _u();case`coal`:return mu(`#1a1a1a`);case`iron`:return mu(`#d8b89a`);case`copper`:return mu(`#e0763a`);case`gold`:return hu(`#ffd84a`);case`redstone`:return hu(`#ff2a2a`);case`lapis`:return hu(`#2a5aff`);case`diamond`:return hu(`#5affee`);case`emerald`:return hu(`#2aff6a`)}}function bu(){return pu(`#3a2f28`,.2,[{color:`#2a211c`,n:6,size:2}])}function xu(e){let[t,n]=ou(16,16);lu=99,n.fillStyle=`rgba(0,0,0,0.75)`;let r=2+e*2;for(let t=0;t<r;t++){let t=8,r=8,i=uu()*2-1,a=uu()*2-1,o=3+e*1.5;for(let e=0;e<o;e++)t+=i+(uu()-.5),r+=a+(uu()-.5),n.fillRect(Math.round(t),Math.round(r),1,1)}return t}function Su(){let[e,t]=ou(32,32);for(let e=0;e<32;e++)for(let n=0;n<32;n++){let r=Math.sin(n*.6+Math.sin(e*.4)*2)+Math.cos(e*.5+Math.sin(n*.3)*2)+uu()*.6;t.fillStyle=r>1.2?`#ffe680`:r>.4?`#ff9a2a`:r>-.6?`#e8501a`:`#a02a10`,t.fillRect(n,e,1,1)}return e}var Cu={pick:{rows:[`.......ooooo....`,`......oLLYYYo...`,`.....oYYoooYYo..`,`.....oo...oHYYo.`,`.........oHoYYo.`,`........oHo.ooo.`,`.......oHo..oYo.`,`......oHo...oo..`,`.....oHo........`,`....oHo.........`,`...oHo..........`,`..oHo...........`,`.oHo............`,`.oo.............`,`................`,`................`],pal:{o:`#24180e`,Y:`#9a7858`,L:`#ccb090`,H:`#6a4222`}},baton:{rows:[`................`,`............oo..`,`...........oLLo.`,`..........oLYLo.`,`.........oYYYYo.`,`........oYYYYo..`,`.......oGGGGGo..`,`......oGGGGGo...`,`.....oHGGGGoo...`,`....oHGo........`,`...oHGo.........`,`..oHGo..........`,`.oHoo...........`,`.oo.............`,`................`,`................`],pal:{o:`#242008`,Y:`#e8c838`,L:`#fff8c8`,G:`#585868`,H:`#30303a`}},needle:{rows:[`................`,`.............oo.`,`............oLo.`,`...........oLYo.`,`..........oYYo..`,`.........oYYo...`,`........oYYo....`,`.......oYYo.....`,`......oGGo......`,`.....oGGo.......`,`....oHo.........`,`...oHo..........`,`..oo............`,`................`,`................`,`................`],pal:{o:`#0e2008`,Y:`#68cc40`,L:`#d0ffa8`,G:`#406040`,H:`#2e382e`}},torch:{rows:[`...........o....`,`..........oLo...`,`.........oLLYo..`,`........oLYYYYo.`,`........oLYYYGo.`,`.........oYGGo..`,`........oGGGGoo.`,`.......oHGGoo...`,`......oHHo......`,`.....oHHo.......`,`....oHHo........`,`...oHHo.........`,`..oHHo..........`,`.oHoo...........`,`.oo.............`,`................`],pal:{o:`#2a1004`,Y:`#ff8a28`,L:`#fff0a0`,G:`#cc3818`,H:`#6a4424`}},icicle:{rows:[`................`,`............oo..`,`...........oLLo.`,`..........oLLYo.`,`.........oLLYYo.`,`........oLLYYGo.`,`.......oLLYYGGo.`,`......oLLYYGGo..`,`.....oLLYYGoo...`,`....oLYYGoo.....`,`...oYYGoo.......`,`..oYGoo.........`,`.oooo...........`,`................`,`................`,`................`],pal:{o:`#082030`,Y:`#68ccf8`,L:`#ebfcff`,G:`#3488b8`}},axe:{rows:[`................`,`.......oooo.....`,`......oLYYYo....`,`.....oLYYYYYo...`,`.....oYYYYYYYo..`,`......oYYYYYYo..`,`.......ooYHYo...`,`........oHooo...`,`.......oHo......`,`......oHo.......`,`.....oHo........`,`....oHo.........`,`...oHo..........`,`..oHo...........`,`.oHo............`,`.oo.............`],pal:{o:`#2a1a0e`,Y:`#b8875a`,L:`#f0c890`,H:`#7a4a22`}},blade:{rows:[`..............o.`,`.............oL.`,`............oLo.`,`...........oLYo.`,`..........oLYo..`,`.........oLYo...`,`........oLYo....`,`.......oLYo.....`,`......oLYo......`,`...o.oLYo.......`,`...ooGYo........`,`....oGGo........`,`...oHo.o........`,`..oHo...........`,`.oHo............`,`.oo.............`],pal:{o:`#2a2208`,Y:`#ffd84a`,L:`#fffbe0`,G:`#6a5a20`,H:`#3a2a10`}},dagger:{rows:[`................`,`................`,`................`,`................`,`...........oo...`,`..........oYo...`,`.........oYLo...`,`........oYLo....`,`.......oYLo.....`,`...o..oYLo......`,`...oooYLo.......`,`....oGGo........`,`....oHGoo.......`,`...oHo.oo.......`,`...oo...........`,`................`],pal:{o:`#0e2208`,Y:`#6ad040`,L:`#d8ffb0`,G:`#3a5a2a`,H:`#4a2a1a`}},sword:{rows:[`................`,`.............oo.`,`............oYo.`,`...........oYLo.`,`..........oYLo..`,`.........oYLo...`,`........oYLo....`,`..o....oYLo.....`,`..oo..oYLo......`,`...oooYLo.......`,`....oGGo........`,`....oHGoo.......`,`...oHo.oo.......`,`..oHo...........`,`.ooo............`,`................`],pal:{o:`#2a0a04`,Y:`#ff5a32`,L:`#ffd0a0`,G:`#ffb020`,H:`#5a2a14`}},spear:{rows:[`...........oo...`,`..........oLYo..`,`..........oLYYo.`,`...........oYYo.`,`..........oGoo..`,`.........oHo....`,`........oHo.....`,`.......oHo......`,`......oHo.......`,`.....oHo........`,`....oHo.........`,`...oHo..........`,`..oHo...........`,`.oHo............`,`.oo.............`,`................`],pal:{o:`#08202a`,Y:`#6ad4ff`,L:`#e8faff`,G:`#a0c0d0`,H:`#6a5a4a`}},hammer:{rows:[`.........oooo...`,`........oLYYYo..`,`.......oLYYYYYo.`,`......oYYYYYYYo.`,`......oYYYYYYo..`,`.......oYYYYo...`,`.......oHoYo....`,`......oHo.o.....`,`.....oHo........`,`....oHo.........`,`...oHo..........`,`..oHo...........`,`.oHo............`,`.oo.............`,`................`,`................`],pal:{o:`#1e140c`,Y:`#8a6a4a`,L:`#d8b080`,H:`#5a3a1a`}},halberd:{rows:[`............oo..`,`...........oLYo.`,`.....ooo..oLYYo.`,`.....oYYooYYYo..`,`......oYYYYYo...`,`.......oYYHo....`,`......o.oHo.....`,`.......oHo......`,`......oHo.......`,`.....oHo........`,`....oHo.........`,`...oHo..........`,`..oHo...........`,`.oHo............`,`.oo.............`,`................`],pal:{o:`#2a2208`,Y:`#ffcc22`,L:`#fffbe0`,H:`#5a4a30`}},scythe:{rows:[`...ooooooo......`,`..oLLYYYYYoo....`,`...ooooYYYYYo...`,`.......ooYYYYo..`,`.........ooYYo..`,`...........oHo..`,`..........oHo...`,`.........oHo....`,`........oHo.....`,`.......oHo......`,`......oHo.......`,`.....oHo........`,`....oHo.........`,`...oHo..........`,`..oo............`,`................`],pal:{o:`#0e1a08`,Y:`#4ab830`,L:`#c8ff9a`,H:`#3a2a3a`}},meteor:{rows:[`.........oooo...`,`........oYYYYo..`,`.......oYLLYYYo.`,`.......oYLYYYYo.`,`.......oYYYYYGo.`,`.......oYYYYGGo.`,`........oYYGGo..`,`.......oHoooo...`,`......oHo.......`,`.....oHo........`,`....oHo.........`,`...oHo..........`,`..oHo...........`,`.oHo............`,`.oo.............`,`................`],pal:{o:`#2a0a04`,Y:`#ff6a2a`,L:`#ffe680`,G:`#a02a10`,H:`#4a2a1a`}},boomerang:{rows:[`................`,`..oooo..........`,`.oLLYYo.........`,`.oLYYYYo........`,`..ooYYYYo.......`,`....oYYYYo......`,`.....oYYYYo.....`,`......oYYYo.....`,`......oYYYo.....`,`.....oYYYYo.....`,`....oYYYYo......`,`..ooYYYYo.......`,`.oLYYYYo........`,`.oLLYYo.........`,`..oooo..........`,`................`],pal:{o:`#08202a`,Y:`#7adcff`,L:`#f0fcff`}},drill:{rows:[`............oo..`,`...........oLLo.`,`.........ooLYYo.`,`........oLLYYGo.`,`.......oYYYYYGo.`,`......oLLYYYYo..`,`.....oYYYYYGo...`,`....oGGGGGGGo...`,`...oGHHHHHGGo...`,`...oHHHHHHGo....`,`..oHHo..oHHo....`,`.oHHo..oHHo.....`,`.ooo...ooo......`,`................`,`................`,`................`],pal:{o:`#22160c`,Y:`#c8965c`,L:`#f4d8a8`,G:`#7a6858`,H:`#4a3828`}},core_orb:{rows:[`......oooo......`,`....ooYYYYoo....`,`...oYYLLLLYYo...`,`..oYLLWWWWLLYo..`,`.oYLWWWWWWWWLYo.`,`.oYLWWGGGGWWLYo.`,`oYYLWGGLLGGWLYYo`,`oYYLWGLWWLGWLYYo`,`oYYLWGGLLGGWLYYo`,`.oYLWWGGGGWWLYo.`,`.oYLWWWWWWWWLYo.`,`..oYLLWWWWLLYo..`,`...oYYLLLLYYo...`,`....ooYYYYoo....`,`......oooo......`,`................`],pal:{o:`#282008`,Y:`#f4c430`,L:`#fff4a8`,W:`#80e8ff`,G:`#3a5878`}},katar:{rows:[`............ooo.`,`..........ooLLo.`,`.........oLLYYo.`,`........oLYYoo..`,`.......oLYYo..o.`,`......oLYYo..oLo`,`...oooGYYo..oLYo`,`..oHHGGYo..oLYo.`,`.oHHoGGo..oLYo..`,`.oHooGGooLLYo...`,`..o..oGGGGoo....`,`.....oHHo.......`,`....oHHo........`,`....ooo.........`,`................`,`................`],pal:{o:`#102010`,Y:`#58d848`,L:`#d8ffc0`,G:`#584868`,H:`#34243c`}},flameblade:{rows:[`...........ooo..`,`..........oLLYo.`,`........ooLYYYo.`,`.......oLLYYYYo.`,`......oLYYYYGGo.`,`.....oLYYYYGGo..`,`....oLYYYYGoo...`,`...oLYYYYGGo....`,`..oooYYYYGo.....`,`..oGGoYYGo......`,`...oGGoGo.......`,`...oHHGGoo......`,`..oHHo.oo.......`,`.oHHo...........`,`.ooo............`,`................`],pal:{o:`#2c0a04`,Y:`#ff6428`,L:`#ffe898`,G:`#c82414`,H:`#4e2818`}},frostclaw:{rows:[`..........oo.oo.`,`........ooLo.oLo`,`.......oLLo.oLLo`,`.....ooLYo.oLYo.`,`....oLLYo.oLYo.o`,`...oLYYo.oLYo.oL`,`...ooYo.oLYo.oLY`,`.....oGoYYo.oLYo`,`....oGGGGo.oLYo.`,`...oHHHHGGoYYo..`,`..oHHHHHHGGoo...`,`..oHHHHHHHo.....`,`...ooHHHHo......`,`.....oooo.......`,`................`,`................`],pal:{o:`#082030`,Y:`#60ccff`,L:`#f0ffff`,G:`#386890`,H:`#283c54`}},titan:{rows:[`......oooooooo..`,`.....oLLLLYYYYo.`,`....oLLYYYYYYGo.`,`....oLYYGGGGYGo.`,`....oYYYYYYYYGo.`,`.....oYYYYYYGGo.`,`......ooYYHGGo..`,`.......oHHoooo..`,`......oHHo......`,`.....oHHo.......`,`....oHHo........`,`...oHHo.........`,`..oHHo..........`,`.oHHo...........`,`.ooo............`,`................`],pal:{o:`#1c1208`,Y:`#d49a54`,L:`#ffe4b0`,G:`#ff9838`,H:`#5c3818`}},mjolnir:{rows:[`......ooooooo...`,`.....oLLLLLLYo..`,`....oLLWWWWLYYo.`,`....oLYWYYYWLYo.`,`....oLYYYYYYLYo.`,`.....oYYYYYYYo..`,`......ooGHHGoo..`,`.......oHHHo....`,`......oHHo......`,`.....oHHo.......`,`....oHHo........`,`...oHHo.........`,`..oGGo..........`,`.oGWGo..........`,`..ooo...........`,`................`],pal:{o:`#1c1c28`,Y:`#ffd438`,L:`#fff8c8`,W:`#b8f4ff`,G:`#687898`,H:`#4a3824`}},hydra:{rows:[`..........oo.oo.`,`.........oLo.oLo`,`.....oo.oLYooLYo`,`....oLo.oYYYYYo.`,`....oLYooYYYYGo.`,`.....oYYYYYYGGo.`,`......oYYYYGGo..`,`.....oGGYYGoo...`,`....oGGGGGo.....`,`...oGHHHHGo.....`,`...oHo.oHo......`,`..oHo..oo.......`,`.oHo............`,`.oo.............`,`................`,`................`],pal:{o:`#0a1e0a`,Y:`#50e838`,L:`#e0ffb8`,G:`#8838b8`,H:`#382044`}},dragon:{rows:[`............ooo.`,`...........oWWLo`,`.........ooWLLYo`,`........oWWLYYYo`,`.......oWLYYYYGo`,`......oWLYYYYGGo`,`..oo.oWLYYYYGGo.`,`..oGooLYYYYGGo..`,`...oGGLYYYGGo...`,`....oGGYYGoo....`,`...oHHGGGGo.....`,`..oHHo.oGGo.....`,`.oHHo...oo......`,`.ooo............`,`................`,`................`],pal:{o:`#240604`,W:`#fff8d0`,L:`#ffb838`,Y:`#f04020`,G:`#981818`,H:`#3c1c1c`}},excalibur:{rows:[`.............ooo`,`............oWWo`,`...........oWLYo`,`..........oWLYo.`,`.........oWLYo..`,`..oo....oWLYo...`,`..oGoo.oWLYo....`,`...oGGGWLYo.....`,`....oGWWGo......`,`...oHGGGGGo.....`,`..oHHoGGooGo....`,`.oHHo.oo..oo....`,`oWWHo...........`,`oWWo............`,`.oo.............`,`................`],pal:{o:`#2c2008`,W:`#ffffff`,L:`#fff4b8`,Y:`#ffd858`,G:`#e8a828`,H:`#4868c8`}}},wu={zombie:{rows:[`....oooooooo....`,`...oYYYYYYYYo...`,`...oYYYLLYYYo...`,`...oooooooooo...`,`...oGGGGGGGGo...`,`...oGkkGGkkGo...`,`...oGGGGGGGGo...`,`...oGGkkkkGGo...`,`....oooooooo....`,`..oBBBBBBBBBBo..`,`.oGoBBBBBBBBoGo.`,`.oGoBBBBBBBBoGo.`,`..o.oPPPPPPo.o..`,`....oPPooPPo....`,`....oPPo.oPPo...`,`....oooo.oooo...`],pal:{o:`#101010`,Y:`#e0b030`,L:`#fffbd0`,G:`#5a9a4a`,k:`#1a2a1a`,B:`#3a5aa0`,P:`#4a3a6a`}},skeleton:{rows:[`.....oooooo.....`,`....oWWWWWWo....`,`....oWkWWkWo....`,`....oWWWWWWo....`,`....oWkkkkWo....`,`.....oWWWWo.....`,`......oWWo......`,`....oWWWWWWo.b..`,`...oWoWWWWoWobb.`,`...oWoWkkWoWob.b`,`...o.oWWWWo.ob.b`,`.....oWkkWo..bb.`,`.....oWooWo..b..`,`.....oWo.oWo....`,`.....oWo.oWo....`,`.....ooo.ooo....`],pal:{o:`#202020`,W:`#e8e8e0`,k:`#303030`,b:`#8a5a2a`}},mushroom:{rows:[`................`,`.....oooooo.....`,`...ooRRRRRRoo...`,`..oRRWWRRRRRRo..`,`.oRRRWWRRRWWRRo.`,`.oRRRRRRRRWWRRo.`,`.oRWWRRRRRRRRRo.`,`..oooooooooooo..`,`....oSSSSSSo....`,`....oSkSSkSo....`,`....oSSSSSSo....`,`....oSSkkSSo....`,`....oSSSSSSo....`,`.....oSSSSo.....`,`......oooo......`,`................`],pal:{o:`#200808`,R:`#e02a2a`,W:`#fff0e0`,S:`#f0d8b0`,k:`#3a2010`}},spider:{rows:[`................`,`................`,`................`,`.o....oooo....o.`,`..o..oDDDDo..o..`,`...ooDDDDDDoo...`,`.oooDDRDDRDDooo.`,`o...oDDDDDDo...o`,`...ooDDDDDDoo...`,`..o.oDDDDDDo.o..`,`.o...oDDDDo...o.`,`o.....oooo.....o`,`................`,`................`,`................`,`................`],pal:{o:`#100808`,D:`#3a2a2a`,R:`#ff3030`}},golem:{rows:[`....oooooooo....`,`...oSSSSSSSSo...`,`..oSSLSSSSSSSo..`,`..oSSoRRSRRoSo..`,`..oSSSSSSSSSSo..`,`..oSSkkkkkkSSo..`,`...oSSSSSSSSo...`,`.ooooSSMSSSoooo.`,`oSSSSoSSSSoSSSSo`,`oSLSSSSMMSSSSSSo`,`oSSoSSSSSSSSoSSo`,`oSSooSSSMSSooSSo`,`.oo.oSSSSSSo.oo.`,`....oSSooSSo....`,`...oSSSo.oSSSo..`,`...ooooo.ooooo..`],pal:{o:`#101010`,S:`#7a7a80`,L:`#b0b0b8`,R:`#ff7a20`,k:`#2a2a2a`,M:`#4a8a3a`}},spider_queen:{rows:[`.....o.oo.o.....`,`....oYoYYoYo....`,`...ooPPPPPPoo...`,`.oo.oPGGGGPPo.oo`,`oPoooPPPPPPPPooP`,`o.ooPPRRPRRPoo.o`,`..o.oPPWWPPo.o..`,`.oo..oooooo..oo.`,`oPooooPPPPooooPo`,`o..oPPGGGGPPo..o`,`..ooPGGLLGGPoo..`,`.oP.oPGGGGPo.Po.`,`o...ooPPPPoo...o`,`....o..oo..o....`,`...o........o...`,`................`],pal:{o:`#120818`,P:`#5a2878`,G:`#4ad848`,L:`#d8ffb0`,R:`#ff3050`,W:`#f4e8ff`,Y:`#ffd848`}},balrog:{rows:[`.oo..........oo.`,`oYYo..oooo..oYYo`,`oYLYooDDDDooYLYo`,`.oYYoDRRRRDoYYo.`,`..ooDDWLLWDDoo..`,`.oo.oDDDDDDo.oo.`,`oRRo.oDRRDo.oRRo`,`oRLRooDRRDooRLRo`,`oRRDDDDYYDDDDRRo`,`oR.oDDYYYYDDo.Ro`,`o..oDDRRRRDDo..o`,`...oDDooooDDo...`,`...oDDo..oDDo...`,`..oDDDo..oDDDo..`,`..ooooo..ooooo..`,`................`],pal:{o:`#140606`,D:`#2e1c24`,R:`#e83c1c`,L:`#ff9828`,Y:`#ffe066`,W:`#ffffff`}}},Tu=[{rows:[`................`,`...oooooooooo...`,`..oLLLMMMMMMMo..`,`.oLLMMMMMMMMMDo.`,`.oLMMMMMMMMMMDo.`,`.oMMMMDMMMMMMDo.`,`.oMMMMMMMMMMMDo.`,`.oMMMMMMMDMMMDo.`,`.oMMMMMMMMMMMDo.`,`.oMMDMMMMMMMMDo.`,`.oMMMMMMMMMMMDo.`,`.oMMMMMMMMDMMDo.`,`..oMDDDDDDDDDo..`,`...oooooooooo...`,`................`,`................`],pal:{o:`#2a1608`,L:`#e8b880`,M:`#b07a40`,D:`#6a4220`},bg:`#4a3020`},{rows:[`................`,`.........oooo...`,`........oLLMo...`,`.......oLMMo....`,`......oLMMo.....`,`.....oLMMo......`,`....oLMMMooooo..`,`...oMMMMMMMMMo..`,`...ooooooMMMo...`,`........oMMo....`,`.......oMMo.....`,`......oMMo......`,`.....oMDo.......`,`....oDDo........`,`....ooo.........`,`................`],pal:{o:`#3a2a00`,L:`#fffbd0`,M:`#ffd020`,D:`#c08a00`},bg:`#4a4010`},{rows:[`................`,`.......oo.......`,`......oLMo......`,`......oLMo......`,`.....oLMMMo.....`,`.....oLMMMo.....`,`....oLMMMMMo....`,`...oLMMMMMMMo...`,`...oLMMkMkMMo...`,`..oLMMMMMMMMDo..`,`..oMMMkkkkMMDo..`,`..oMMMMMMMMDDo..`,`...oMMMMMMDDo...`,`....oDDDDDDo....`,`.....oooooo.....`,`................`],pal:{o:`#0a2a08`,L:`#d8ffb0`,M:`#5ad030`,D:`#2a8a18`,k:`#0a3a08`},bg:`#1e4018`},{rows:[`................`,`.......o........`,`......oMo.......`,`......oMMo...o..`,`.....oMMMo..oMo.`,`..o..oMMMMooMMo.`,`.oMo.oMMLMMoMMo.`,`.oMMooMLLLMMMMo.`,`.oMMMMMLLLLMMMo.`,`.oMMMLLLYYLLMMo.`,`.oMMLLYYYYYLMMo.`,`.oMMLYYYYYYLMMo.`,`..oMLYYYYYYLMo..`,`...oMLLLLLLMo...`,`....oooooooo....`,`................`],pal:{o:`#3a0800`,L:`#ffb040`,M:`#e83a1a`,Y:`#fff0a0`},bg:`#4a1810`},{rows:[`................`,`.......oo.......`,`......oLLo......`,`.....oLLMMo.....`,`....oLLMMMMo....`,`...oLLMMMMMMo...`,`..oLLMMMMMMMDo..`,`.oLLMMMMMMMMMDo.`,`.oLMMMMMMMMMDDo.`,`..oMMMMMMMMDDo..`,`...oMMMMMMDDo...`,`....oMMMMDDo....`,`.....oMMDDo.....`,`......oDDo......`,`.......oo.......`,`................`],pal:{o:`#08283a`,L:`#f0ffff`,M:`#5ac8ff`,D:`#2a7ab8`},bg:`#183a50`},{rows:[`................`,`................`,`..oooo....oooo..`,`.oLLMMo..oLMMMo.`,`oLLMMMMooMMMMMDo`,`oLMMMMMMMMMMMMDo`,`oMMMMMMMMMMMMMDo`,`oMMMMMMMMMMMMMDo`,`.oMMMMMMMMMMMDo.`,`..oMMMMMMMMMDo..`,`...oMMMMMMMDo...`,`....oMMMMMDo....`,`.....oMMMDo.....`,`......oMDo......`,`.......oo.......`,`................`],pal:{o:`#3a0818`,L:`#ffd0e0`,M:`#ff4a8a`,D:`#b01a50`},bg:`#4a1830`}];function Eu(e){let[t,n]=ou(20,20),r=Tu[e];return n.fillStyle=r.bg,n.fillRect(0,0,20,20),n.fillStyle=du(r.bg,1.5),n.fillRect(0,0,20,1),n.fillRect(0,0,1,20),n.fillStyle=du(r.bg,.55),n.fillRect(0,19,20,1),n.fillRect(19,0,1,20),su(n,r.rows,r.pal,2,2),t}function Du(){let[e,t]=ou(20,20);t.fillStyle=`#20182a`,t.fillRect(0,0,20,20);let n=[`#ff4a4a`,`#ffa020`,`#ffe040`,`#50e050`,`#40b0ff`,`#a060ff`];for(let e=0;e<20;e++)for(let r=0;r<20;r++){let i=r-9.5,a=e-9.5,o=Math.sqrt(i*i+a*a);if(o<7.5){let s=(Math.atan2(a,i)+Math.PI)/(Math.PI*2);t.fillStyle=o<2.2?`#ffffff`:n[Math.floor(s*6)%6],t.fillRect(r,e,1,1)}else o<8.5&&(t.fillStyle=`#100810`,t.fillRect(r,e,1,1))}return e}function Ou(e){let[t,n]=ou(20,20);return n.fillStyle=`rgba(0,0,0,0.65)`,e===`lineH`?(n.fillRect(0,1,20,3),n.fillRect(0,16,20,3),n.fillStyle=`#f2e8c8`,n.fillRect(1,2,18,1),n.fillRect(1,17,18,1),n.fillRect(1,9,3,2),n.fillRect(2,8,1,4),n.fillRect(16,9,3,2),n.fillRect(17,8,1,4)):e===`lineV`?(n.fillRect(1,0,3,20),n.fillRect(16,0,3,20),n.fillStyle=`#f2e8c8`,n.fillRect(2,1,1,18),n.fillRect(17,1,1,18),n.fillRect(9,1,2,3),n.fillRect(8,2,4,1),n.fillRect(9,16,2,3),n.fillRect(8,17,4,1)):(n.fillStyle=`#181008`,n.fillRect(0,0,20,2),n.fillRect(0,18,20,2),n.fillRect(0,0,2,20),n.fillRect(18,0,2,20),n.fillStyle=`#f4c868`,n.fillRect(1,1,5,1),n.fillRect(1,1,1,5),n.fillRect(14,1,5,1),n.fillRect(18,1,1,5),n.fillRect(1,18,5,1),n.fillRect(1,14,1,5),n.fillRect(14,18,5,1),n.fillRect(18,14,1,5)),t}function ku(){let[e,t]=ou(4,4);return t.fillStyle=`#fff`,t.fillRect(0,0,4,4),e}function Au(){let[e,t]=ou(64,64),n=t.createRadialGradient(32,32,0,32,32,32);return n.addColorStop(0,`rgba(255,255,255,1)`),n.addColorStop(.35,`rgba(255,255,255,0.5)`),n.addColorStop(1,`rgba(255,255,255,0)`),t.fillStyle=n,t.fillRect(0,0,64,64),e}function ju(){let[e,t]=ou(16,16);t.fillStyle=`rgba(240,240,240,0.9)`;for(let e=0;e<16;e++)t.fillRect(e,e,1,1),t.fillRect(15-e,e,1,1),t.fillRect(8,e,1,1),t.fillRect(e,8,1,1);for(let e of[3,6])for(let n=0;n<16;n++){let r=n/16*Math.PI*2;t.fillRect(Math.round(8+Math.cos(r)*e),Math.round(8+Math.sin(r)*e),1,1)}return e}function Mu(){return cu([`................`,`................`,`................`,`................`,`................`,`................`,`............o...`,`.ff.........oo..`,`..ffwwwwwwwwwoo.`,`.ff.........oo..`,`............o...`],{o:`#d0d0d0`,w:`#8a5a2a`,f:`#f0f0f0`})}function Nu(){return cu([`................`,`................`,`.....oooooo.....`,`....oSSLSSSo....`,`...oSLLSSSSSo...`,`...oSSSSSSkSo...`,`...oSSSSSSSSo...`,`...oSkSSSSSSo...`,`...oSSSSSkSSo...`,`....oSSSSSSo....`,`.....oooooo.....`],{o:`#202020`,S:`#7a7a80`,L:`#b0b0b8`,k:`#4a4a50`})}function Pu(){return cu([`................`,`................`,`................`,`................`,`................`,`................`,`..........oo....`,`..ooooooooLLo...`,`.oLLLLMMMMMMMo..`,`..ooooooooMMo...`,`..........oo....`],{o:`#1a4a6a`,L:`#f0ffff`,M:`#7adcff`})}function Fu(){return cu([`................`,`................`,`......oooo......`,`....ooRRRRoo....`,`...oRRLLLLRRo...`,`..oRLLYYYYLLRo..`,`..oRLYYWWYYLRo..`,`..oRLLYYYYLLRo..`,`...oRRLLLLRRo...`,`....ooRRRRoo....`,`......oooo......`],{o:`#380804`,R:`#e83818`,L:`#ff9028`,Y:`#ffe868`,W:`#ffffff`})}function Iu(){return cu([`................`,`................`,`................`,`................`,`..o....oo....o..`,`.oYo..oYYo..oYo.`,`.oYYooYYYYooYYo.`,`.oYYYYRYYRYYYYo.`,`.oYYYYYYYYYYYYo.`,`..oooooooooooo..`],{o:`#2a1804`,Y:`#ffd848`,R:`#ff3848`})}var Lu=[`................`,`................`,`.......oooo.....`,`.....ooLLLLoo...`,`....oLLSSSSLLo..`,`...oLSSSSSSGSLo.`,`..oLSSSSGGGSSo..`,`..oSSSSGGGSSo...`,`...oSSGGGSSo....`,`....oSGGSSo.....`,`.....oooo.......`,`................`,`................`,`................`,`................`,`................`],Ru=[`......oooo......`,`.....oYYYYo.....`,`..oo.oYLLYo.oo..`,`.oYYooYYYYooYYo.`,`.oYYYYGGGGYYYYo.`,`..ooYYGooGYYoo..`,`oYYYYGo..oGYYYYo`,`oYLLYGo..oGYLLYo`,`oYYYYGo..oGYYYYo`,`..ooYYGooGYYoo..`,`.oYYYYGGGGYYYYo.`,`.oYYooYYYYooYYo.`,`..oo.oYYYYo.oo..`,`.....oYYYYo.....`,`......oooo......`,`................`],zu=[`....oooooooo....`,`..ooLLLLLLLLoo..`,`.oLLSSSSSSSSLLo.`,`.oLSSYYYYYYSSLo.`,`.oLSYYSSSSYYSLo.`,`.oLSYSSSSSSYSLo.`,`.oLSYSSYYSSYSLo.`,`.oLSYSSYYSSYSLo.`,`..oLSYSSSSYSLo..`,`..oLSSYYYYSSLo..`,`...oLSSSSSSLo...`,`....oLSSSSLo....`,`.....oLSSLo.....`,`......oooo......`,`................`,`................`],Bu=[`.......oo.......`,`......oLLo......`,`.....oLWWLo.....`,`....oLWMMWLo....`,`...oLWMCCMWLo...`,`..oLWMCCCCMWLo..`,`..oLMCCWWCCMLo..`,`..oLMCCWWCCMLo..`,`..oLWMCCCCMWLo..`,`...oLWMCCMWLo...`,`....oLWMMWLo....`,`.....oLWWLo.....`,`....ooYYYYoo....`,`...oYYGGGGYYo...`,`....oooooooo....`,`................`],Vu=[`....oooooooo....`,`...oYYYYYYYYo...`,`..oYYCCCCCCYYo..`,`.oYYCCWWWWCCYYo.`,`.oYCCWWLLWWCCYo.`,`.oYCCWLLLLWCCYo.`,`.oYCCLLWWLLCCYo.`,`.oYCCLLLLLLCCYo.`,`.oYCCLLLLLLCCYo.`,`.oYYCCLLLLCCYYo.`,`..oYYCCCCCCYYo..`,`...oYYYYYYYYo...`,`.....oYYYYo.....`,`....oYYYYYYo....`,`....oooooooo....`,`................`],Hu=[`.....oooooo.....`,`...ooLLLLLLoo...`,`..oLLWWWWWWLLo..`,`.oLLWWYYYYWWLLo.`,`.oLWYYYYYYYYWLo.`,`oLWYYYWWWWYYYWLo`,`oLWYYWWWWWWYYWLo`,`oLWYYWWWWWWYYWLo`,`oLWYYYWWWWYYYWLo`,`.oLWYYYYYYYYWLo.`,`.oLLWWYYYYWWLLo.`,`..oLLWWWWWWLLo..`,`...ooLLLLLLoo...`,`.....oooooo.....`,`................`,`................`],Uu={whetstone:{rows:Lu,pal:{o:`#1e1612`,L:`#d8cfc8`,S:`#9c928c`,G:`#685e58`}},gear:{rows:Ru,pal:{o:`#281808`,Y:`#e8a838`,L:`#ffe698`,G:`#8c5c20`}},plate:{rows:zu,pal:{o:`#141e2c`,L:`#d8f0ff`,S:`#74a8d8`,Y:`#ffd858`}},amp_crystal:{rows:Bu,pal:{o:`#201030`,L:`#f8d8ff`,W:`#ffffff`,M:`#c868ff`,C:`#8838e0`,Y:`#d8a848`,G:`#6c4c20`}},mirror:{rows:Vu,pal:{o:`#241808`,Y:`#f0b840`,C:`#58c8f8`,L:`#b8f4ff`,W:`#ffffff`}},core_earth:{rows:Hu,pal:{o:`#241608`,L:`#f0c888`,W:`#fff2d8`,Y:`#b87c3c`}},core_thunder:{rows:Hu,pal:{o:`#282004`,L:`#ffe868`,W:`#ffffff`,Y:`#e8a818`}},core_poison:{rows:Hu,pal:{o:`#0c2408`,L:`#98ff68`,W:`#ebffd8`,Y:`#38b828`}},core_fire:{rows:Hu,pal:{o:`#2c0804`,L:`#ff8838`,W:`#fff0b8`,Y:`#d82818`}},core_ice:{rows:Hu,pal:{o:`#082030`,L:`#88e4ff`,W:`#ffffff`,Y:`#2898d8`}},holy_seal:{rows:[`......oooo......`,`....ooYYYYoo....`,`...oYYWWWWYYo...`,`..oYWWLLLLWWYo..`,`.oYWLLYYYYLLWYo.`,`.oYWLYWWWWYLWYo.`,`oYWLWWWRRWWWLWYo`,`oYWLWWRRRRWWLWYo`,`.oYWLYWWWWYLWYo.`,`.oYWLLYYYYLLWYo.`,`..oYWWLLLLWWYo..`,`...oYYWWWWYYo...`,`....ooYYYYoo....`,`......oooo......`,`................`,`................`],pal:{o:`#2c1c04`,Y:`#ffd848`,W:`#ffffff`,L:`#fff4b0`,R:`#ff3858`}},mine_bomb:{rows:[`.........ooYY...`,`........o..YY...`,`......oooo......`,`....ooDDDDoo....`,`...oDDLLLLDDo...`,`..oDDLDDDDDDDo..`,`..oDLDDRRRRDo...`,`..oDDDDDDDDDDo..`,`..oDDDDDDDDDDo..`,`...oDDDDDDDDo...`,`....ooDDDDoo....`,`......oooo......`,`................`,`................`,`................`,`................`],pal:{o:`#141016`,D:`#383440`,L:`#807a8c`,R:`#e83828`,Y:`#ffd848`}},heal_potion:{rows:[`......oooo......`,`.....oWWWWo.....`,`......oSSo......`,`.....oLLLLo.....`,`....oLWWWWLo....`,`...oLWPPPPWLo...`,`..oLWPPWWPPWLo..`,`..oLWPWWWWPWLo..`,`..oLWPPWWPPWLo..`,`..oLWPPPPPPWLo..`,`...oLPPPPPPWo...`,`....oLLLLLLo....`,`.....oooooo.....`,`................`,`................`,`................`],pal:{o:`#281020`,W:`#ffffff`,S:`#c89868`,L:`#ffd0e8`,P:`#ff4890`}}},Wu={bardin:{rows:[`....oooooooo....`,`...oYYYYYYYYo...`,`..oYYSSSSSSYYo..`,`..oSSSSSSSSSSo..`,`..oSSkSSSSkSSo..`,`...oSSRRRRSSo...`,`..oRRRRRRRRRRo..`,`.oRRRRRRRRRRRRo.`,`.oBBBRRRRRRBBBo.`,`oBBBBBRRRRBBBBBo`,`oBBYYBBBBBBYYBBo`,`.oo.oBBBBBBBo.oo`,`....oBBo.oBBo...`,`....oSSo.oSSo...`,`....oooo.oooo...`,`................`],pal:{o:`#18100c`,Y:`#ffd458`,S:`#b0b8c8`,k:`#1a1a1a`,R:`#d86828`,B:`#7c4c28`}},kael:{rows:[`.....oooooo.....`,`...ooYYYYYYoo...`,`..oYYYYLLYYYYo..`,`..oYSSSSSSSSYo..`,`...oSkSSSSkSo...`,`...oSSSSSSSSo...`,`..oCCCCCCCCCCo..`,`.oCCYYYYYYYYCCo.`,`oCCoCCCCCCCCoCCo`,`oCo.oCCCCCCo.oCo`,`....oCCYYCCo....`,`....oCCCCCCo....`,`....oCCo.oCCo...`,`...oYYYo.oYYYo..`,`...ooooo.ooooo..`,`................`],pal:{o:`#141828`,Y:`#ffe858`,L:`#ffffff`,S:`#f4d4b8`,k:`#1a2848`,C:`#3888e8`}},vera:{rows:[`....oooooooo....`,`...oPPPPPPPPo...`,`..oPPPPPPPPPPo..`,`..oPPkGGGGkPPo..`,`..oPPPPPPPPPPo..`,`...oPPPPPPPPo...`,`..oDDDDDDDDDDo..`,`.oDDGPPPPPPGDo..`,`oDDoDDDDDDDDoDDo`,`.oo.oDDGGDDo.oo.`,`....oDDDDDDo....`,`....oDDo.oDDo...`,`...oPPPo.oPPPo..`,`...ooooo.ooooo..`,`................`,`................`],pal:{o:`#100818`,P:`#5c2c7c`,G:`#68ff48`,k:`#d8ffb8`,D:`#281c38`}},ignis:{rows:[`..oo...oo...oo..`,`.oYYo.oYYo.oYYo.`,`.oRRYoYLLYooRRo.`,`..oRRRRRRRRRRo..`,`...oSkSSSSkSo...`,`...oSSSSSSSSo...`,`..oRRRRRRRRRRo..`,`.oRRYYYYYYYYRRo.`,`oRRoRRRRRRRRoRRo`,`oRo.oRRYYRRo.oRo`,`....oRRRRRRo....`,`....oRRo.oRRo...`,`...oDDDo.oDDDo..`,`...ooooo.ooooo..`,`................`,`................`],pal:{o:`#200804`,Y:`#ffe058`,L:`#ffffff`,R:`#e83818`,S:`#e8c098`,k:`#380804`,D:`#38201c`}},iris:{rows:[`.....oooooo.....`,`....oYYYYYYo....`,`...oCCCCCCCCo...`,`..oCCWWWWWWCCo..`,`..oCWkSSSSkWCo..`,`...oSSSSSSSSo...`,`..oWWWWWWWWWWo..`,`.oWWCCCCCCCCWWo.`,`oWWoWWWWWWWWoWWo`,`.oo.oWWYYWWo.oo.`,`....oWWWWWWo....`,`...oWWCCCCWWo...`,`...oWWo..oWWo...`,`...oooo..oooo...`,`................`,`................`],pal:{o:`#102438`,Y:`#ffe878`,C:`#68d4ff`,W:`#f0f8ff`,S:`#ffe0cc`,k:`#1c4878`}}},Gu=new Map;function Ku(e,t){let n=Gu.get(e);return n||(n=fu(t()),Gu.set(e,n)),n}var qu={block:e=>Ku(`b_`+e,()=>(lu=1e3+e.length*97+e.charCodeAt(0),yu(e))),backWall:()=>Ku(`backwall`,()=>(lu=77,bu())),crack:e=>Ku(`crack`+e,()=>xu(e)),lava:()=>{let e=Ku(`lava`,()=>(lu=5,Su()));return e.wrapS=e.wrapT=ee,e},weapon:e=>Ku(`w_`+e,()=>cu(Cu[e].rows,Cu[e].pal)),enemy:e=>Ku(`e_`+e,()=>cu(wu[e].rows,wu[e].pal)),hero:e=>{let t=Wu[e]??Wu.bardin;return Ku(`h_`+e,()=>cu(t.rows,t.pal))},tile:e=>Ku(`t_`+e,()=>Eu(e)),rainbow:()=>Ku(`rainbow`,Du),special:e=>Ku(`s_`+e,()=>Ou(e)),particle:()=>Ku(`particle`,ku),glow:()=>{let e=Ku(`glow`,Au);return e.magFilter=re,e.minFilter=re,e},web:()=>Ku(`web`,ju),arrow:()=>Ku(`arrow`,Mu),rock:()=>Ku(`rock`,Nu),iceShard:()=>Ku(`iceshard`,Pu),fireball:()=>Ku(`fireball`,Fu),crown:()=>Ku(`crown`,Iu)},Ju=new Map;function Yu(e,t){let n=e+`:`+t,r=Ju.get(n);if(!r){let i;if(e===`weapon`)i=cu(Cu[t].rows,Cu[t].pal);else if(e===`relic`){let e=Uu[t]??Uu.whetstone;i=cu(e.rows,e.pal)}else if(e===`hero`){let e=Wu[t]??Wu.bardin;i=cu(e.rows,e.pal)}else e===`enemy`?i=cu(wu[t].rows,wu[t].pal):e===`block`?(lu=1e3+String(t).length*97+String(t).charCodeAt(0),i=yu(t)):i=e===`rainbow`?Du():e===`special`?Ou(t):Eu(t);r=i.toDataURL(),Ju.set(n,r)}return r}var Xu=[[0,0]],Zu=[[0,0],[1,0]],Qu=[[0,0],[1,0],[2,0]],$u=[[0,0],[1,0],[1,1]],ed=[[0,0],[0,1],[1,0],[1,1]];function td(e,t){let n=(t%4+4)%4,r=e.map(([e,t])=>[e,t]);for(let e=0;e<n;e++)r=r.map(([e,t])=>[t,-e]);let i=Math.min(...r.map(([e])=>e)),a=Math.min(...r.map(([,e])=>e));return r.map(([e,t])=>[e-i,t-a])}function nd(e){let t=0,n=0;for(let[r,i]of e)r>t&&(t=r),i>n&&(n=i);return{rows:t+1,cols:n+1}}function rd(e){switch(e){case`ortho4`:return[[-1,0],[1,0],[0,-1],[0,1]];case`ring8`:return[[-1,-1],[-1,0],[-1,1],[0,-1],[0,1],[1,-1],[1,0],[1,1]];case`horiz2`:return[[0,-1],[0,1]];default:return[]}}function id(e,t){return t===`low`?{shape:Xu,shapeName:`1×1 輕巧`,cost:24,cd:3.5}:t===`t1`?{shape:Zu,shapeName:`1×2 長柄`,cost:48,cd:4.6}:t===`cum`?e===`drill`?{shape:Qu,shapeName:`1×3 鑽頭`,cost:82,cd:5.2}:e===`frostclaw`?{shape:$u,shapeName:`L形 3格`,cost:82,cd:5}:{shape:Zu,shapeName:`1×2 特武`,cost:78,cd:4.8}:t===`t2`?e===`halberd`||e===`scythe`?{shape:Qu,shapeName:`1×3 長兵`,cost:95,cd:5.8}:e===`boomerang`?{shape:$u,shapeName:`L形 3格`,cost:95,cd:5.4}:{shape:ed,shapeName:`2×2 重武`,cost:98,cd:6}:t===`leg`?e===`hydra`?{shape:$u,shapeName:`L形 3格`,cost:155,cd:6.6}:{shape:ed,shapeName:`2×2 傳說`,cost:160,cd:6.8}:{shape:ed,shapeName:`2×2 神聖`,cost:188,cd:7.2}}function ad(e,t,n){if(t===`low`)return`2 把二合一進化【${k[j[k[e].element].t1].name}】｜配【${n}魔晶】進化【${k[j[k[e].element].cum].name}】`;if(t===`t1`)return`2 把二合一進化【${k[j[k[e].element].t2].name}】｜配【${n}魔晶】進化【${k[j[k[e].element].cum].name}】`;if(t===`t2`||t===`cum`){let t=j[k[e].element].leg;return`同名二合一升星（最高 ★3）｜配【${n}魔晶】進化【${t?k[t].name:`★2 冰晶迴旋鏢`}】｜配【王者聖印】鍛造【✨聖劍】`}return`同名二合一升星（★2 傷害×1.65／★3 傷害×2.60）並提升共鳴等級`}var od={};for(let e of A){let t=f(e.element),n=id(e.id,e.category);od[e.id]={id:e.id,kind:`weapon`,name:e.name,subtitle:`${t.icon} ${t.name}屬・${n.shapeName}・${e.archetypeName}`,cssColor:t.css,element:e.element,weaponId:e.id,category:e.category,baseShape:n.shape,shapeName:n.shapeName,cost:n.cost,forgeCd:n.cd,adjPattern:`none`,desc:`【彈力 ${e.bounceRating}｜投速 ${e.throwSpeed}｜${e.weightLabel}】傷害 ${e.dmg}｜HP ${e.baseHp}。${e.passive}${e.ult?`｜大招【${e.ult.name}】`:``}`,recipeHint:ad(e.id,e.category,t.name)}}var sd=[{id:`whetstone`,kind:`relic`,name:`矮人磨刀石`,subtitle:`🪨 鄰接遺物・上下左右 4 格`,cssColor:`#ffd480`,baseShape:Xu,shapeName:`1×1 遺物`,cost:38,forgeCd:0,adjPattern:`ortho4`,desc:`使上下左右相鄰的所有武器，投射出的【傷害 +28%】（兩顆同星磨刀石可二合一升星，效果提升至 +46%／+68%！）`,recipeHint:`擺在武器上下左右即可生效｜2 顆同星磨刀石可二合一升星`},{id:`gear`,kind:`relic`,name:`精密發條齒輪`,subtitle:`⚙️ 鄰接遺物・周圍九宮格 8 格`,cssColor:`#ffae42`,baseShape:Xu,shapeName:`1×1 遺物`,cost:44,forgeCd:0,adjPattern:`ring8`,desc:`使周圍 8 格相鄰的所有武器，【自動鍛造投射冷卻 -22%】（升星可達 -34%／-45%，產出速度暴增！）`,recipeHint:`擺在多把武器中央可同時加速周圍 8 格｜2 顆同星齒輪可二合一升星`},{id:`plate`,kind:`relic`,name:`秘銀護甲片`,subtitle:`🛡️ 鄰接遺物・上下左右 4 格`,cssColor:`#7ec8ff`,baseShape:Xu,shapeName:`1×1 遺物`,cost:35,forgeCd:0,adjPattern:`ortho4`,desc:`使上下左右相鄰的所有武器，投射出的【最大 HP 耐久 +35%】（對聖劍壽命同樣有效！）`,recipeHint:`擺在主力武器旁大幅延長礦坑存活時間｜2 片同星可二合一升星`},{id:`amp_crystal`,kind:`relic`,name:`共鳴增幅水晶`,subtitle:`🔮 鄰接遺物・上下左右 4 格`,cssColor:`#d488ff`,baseShape:Xu,shapeName:`1×1 遺物`,cost:44,forgeCd:0,adjPattern:`ortho4`,desc:`使上下左右相鄰的武器【大招集氣／冷卻速度 +35%】，且每次投射額外增加該元素 +3 點共鳴經驗！`,recipeHint:`加速武器大招並快速衝滿 Lv5 共鳴（解鎖同名多把上限）`},{id:`mirror`,kind:`relic`,name:`雙子鏡像稜鏡`,subtitle:`👯 稀有遺物・左右兩側 2 格`,cssColor:`#7ef8ff`,baseShape:Xu,shapeName:`1×1 稀有遺物`,cost:72,forgeCd:0,adjPattern:`horiz2`,desc:`使【左右兩側】相鄰的武器每次鍛造完成時，有 45% 機率（★2 70%／★3 100%）直接【雙連投射 2 把】入坑！`,recipeHint:`擺在兩把主力傳說／高階武器中間，實現雙倍彈雨！`},...[`earth`,`thunder`,`poison`,`fire`,`ice`].map(e=>{let t=u[e],n=k[j[e].cum].name,r=j[e].leg,i=r?k[r].name:`★2 冰晶迴旋鏢`;return{id:`core_${e}`,kind:`core`,name:`${t.name}之魔晶`,subtitle:`${t.icon} 元素核心・可鄰接強化或合成進化`,cssColor:t.css,element:e,baseShape:Xu,shapeName:`1×1 核心`,cost:48,forgeCd:0,adjPattern:`ortho4`,desc:`【擺放時】上下左右相鄰武器傷害 +18% 且每次投射額外 +4 點${t.name}共鳴；【拖到武器上】直接跨階合成進化！`,recipeHint:`拖到【低／初階武器】➔ 合成【${n}】｜拖到【高階／特武】➔ 合成【${i}】`}}),{id:`holy_seal`,kind:`seal`,name:`王者聖印`,subtitle:`👑 神聖遺物・聖劍鍛造核心`,cssColor:`#ffe680`,element:`holy`,baseShape:Xu,shapeName:`1×1 聖印`,cost:98,forgeCd:0,adjPattern:`ortho4`,desc:`【擺放時】上下左右相鄰武器傷害 +32%；【拖到任意初階／高階／傳說武器上】直接鍛造出神聖傳說【✨ 聖劍】！`,recipeHint:`拖到任意初階以上武器 ➔ 鍛造【✨ 聖劍（Excalibur）】！`},{id:`mine_bomb`,kind:`consumable`,name:`矮人深層炸彈`,subtitle:`🧨 戰術道具・拖至右側礦坑引爆`,cssColor:`#ff8844`,baseShape:Xu,shapeName:`1×1 消耗品`,cost:28,forgeCd:0,adjPattern:`none`,desc:`拖到右邊礦坑任意直列（或點擊立即投擲），在最深處引爆 3.2 格巨型破岩炸彈，炸穿硬岩並直接擊碎岩石巨像護殼！`,recipeHint:`直接拖到右邊礦坑或點「🚀 空投／使用」立即引爆`},{id:`heal_potion`,kind:`consumable`,name:`女神甘露藥水`,subtitle:`🧪 戰術道具・全場回血＋無敵盾`,cssColor:`#ff88c8`,baseShape:Xu,shapeName:`1×1 消耗品`,cost:30,forgeCd:0,adjPattern:`none`,desc:`拖到右邊礦坑（或點擊立即飲用），場上所有存活武器立即【回復 45% 最大 HP】並獲得【3 秒無敵護盾】！`,recipeHint:`首領放招或聖劍快消散時，拖去右邊礦坑立即全員滿血續命！`}];for(let e of sd)od[e.id]=e;function cd(e){let t=od[e];return t.kind===`weapon`&&t.weaponId?Yu(`weapon`,t.weaponId):Yu(`relic`,e)}function ld(e,t,n,r){let i=od[e],a=od[n];if(!i||!a)return null;if(e===n&&t===r){if(i.kind===`weapon`&&i.weaponId){let n=k[i.weaponId];if(n.category===`low`&&t===1&&n.element!==`holy`){let e=j[n.element].t1;return{resultId:e,resultStar:1,resonanceElement:n.element,resonanceGain:8,title:`二合一進化：【${k[e].name}】`}}if(n.category===`t1`&&t===1&&n.element!==`holy`){let e=j[n.element].t2;return{resultId:e,resultStar:1,resonanceElement:n.element,resonanceGain:15,title:`二合一升階：【${k[e].name}】`}}if(t<3){let r=t+1;return{resultId:e,resultStar:r,resonanceElement:n.element===`holy`?void 0:n.element,resonanceGain:30,title:`升星突破：【${i.name} ★${r}】`}}}else if((i.kind===`relic`||i.kind===`core`)&&t<3){let n=t+1;return{resultId:e,resultStar:n,resonanceElement:i.element&&i.element!==`holy`?i.element:void 0,resonanceGain:i.kind===`core`?20:0,title:`遺物升星：【${i.name} ★${n}】`}}}let o=i.kind===`weapon`?{def:i,star:t}:a.kind===`weapon`?{def:a,star:r}:null,s=i.kind===`core`?{def:i,star:t}:a.kind===`core`?{def:a,star:r}:null,c=i.kind===`seal`?{def:i,star:t}:a.kind===`seal`?{def:a,star:r}:null;if(o&&s&&s.def.element&&s.def.element!==`holy`){let e=s.def.element,t=o.def.category,n=Math.min(3,Math.max(o.star,s.star));if(t===`low`||t===`t1`){let t=j[e].cum;return{resultId:t,resultStar:n,resonanceElement:e,resonanceGain:30,title:`魔晶鍛造：【${k[t].name}${n>1?` ★${n}`:``}】`}}if(t===`t2`||t===`cum`){let t=j[e].leg;if(t)return{resultId:t,resultStar:n,resonanceElement:e,resonanceGain:30,title:`傳說覺醒：【${k[t].name}${n>1?` ★${n}`:``}】`};let r=Math.min(3,n+1);return{resultId:`boomerang`,resultStar:r,resonanceElement:`ice`,resonanceGain:30,title:`極寒覺醒：【冰晶迴旋鏢 ★${r}】`}}if((t===`leg`||t===`holy`)&&o.star<3){let t=o.star+1;return{resultId:o.def.id,resultStar:t,resonanceElement:e,resonanceGain:30,title:`魔晶淬煉：【${o.def.name} ★${t}】`}}}if(o&&c){let e=o.def.category;if(o.def.id===`excalibur`){if(o.star<3)return{resultId:`excalibur`,resultStar:o.star+1,resonanceGain:30,title:`聖印覺醒：【✨ 聖劍 ★${o.star+1}】`}}else if(e===`t1`||e===`t2`||e===`cum`||e===`leg`){let t=e===`leg`?Math.min(3,Math.max(2,o.star)):o.star;return{resultId:`excalibur`,resultStar:t,resonanceGain:30,title:`聖劍降臨：【✨ 聖劍${t>1?` ★${t}`:``}】`}}}return null}var ud=[{inputs:`同款【低階武器】＋【低階武器】`,output:`該元素【初階武器 ★1】`,effect:`例：碎石鎬＋碎石鎬＝擴散斧、火把＋火把＝烈焰劍`},{inputs:`同款【初階武器】＋【初階武器】`,output:`該元素【高階武器 ★1】`,effect:`例：擴散斧＋擴散斧＝震地巨錘、雷電刀＋雷電刀＝雷神戟`},{inputs:`任意【低階／初階武器】＋【五元素魔晶】`,output:`魔晶元素的【專屬特武】`,effect:`鍛造出：鑽地螺旋鑽／磁暴核心／刺客拳刃／火焰刀／霜狼之爪，且該元素共鳴 +1 級`},{inputs:`任意【高階／專屬特武】＋【五元素魔晶】`,output:`魔晶元素的【傳說武器】`,effect:`鍛造出：泰坦巨錘／天罰雷槌／九頭蛇之牙／炎龍大劍／高星冰晶迴旋鏢，且共鳴 +1 級`},{inputs:`任意【初階／高階／特武／傳說】＋【👑 王者聖印】`,output:`神聖傳說【✨ 聖劍】`,effect:`全寬十字聖光斬超高傷武器（傳說武器合成直接升 ★2 聖劍！）`},{inputs:`同款同星【高階／特武／傳說／聖劍／遺物】二合一`,output:`升星突破【★1 ➔ ★2 ➔ ★3】`,effect:`★2 傷害與耐久 ×1.65、冷卻 -12%｜★3 傷害與耐久 ×2.60、冷卻 -24%`}],dd=1,fd=class{hostPane;mods;cb;G=h.bagGridSize;unlocked=[];items=[];shop=[];shopLocked=!1;gold=h.startGold;expandTokens=0;expansionsBought=0;refreshesThisStage=0;heroId=`bardin`;selectedUid=null;hoveredUid=null;enabled=!1;overdriveActive=!1;goldAcc=0;buffCache=new Map;gridEl;itemsLayerEl;storageEl;shopEl;inspectorEl;goldEl;expandBtnEl;refreshBtnEl;lockBtnEl;liveRegionEl;dragGhostEl;mineDropHintEl;bagCardEls=new Map;storageCardEls=new Map;dragState=null;constructor(e,t,n){this.hostPane=e,this.mods=t,this.cb=n,this.gridEl=e.querySelector(`#bag-grid`),this.itemsLayerEl=e.querySelector(`#bag-items-layer`),this.storageEl=e.querySelector(`#bag-storage`),this.shopEl=e.querySelector(`#bag-shop`),this.inspectorEl=e.querySelector(`#bag-inspector`),this.goldEl=e.querySelector(`#bag-gold`),this.expandBtnEl=e.querySelector(`#bag-expand-btn`),this.refreshBtnEl=e.querySelector(`#shop-refresh-btn`),this.lockBtnEl=e.querySelector(`#shop-lock-btn`),this.liveRegionEl=e.querySelector(`#bag-live`),this.dragGhostEl=document.createElement(`div`),this.dragGhostEl.className=`bag-drag-ghost`,this.dragGhostEl.hidden=!0,document.body.appendChild(this.dragGhostEl),this.mineDropHintEl=document.createElement(`div`),this.mineDropHintEl.className=`mine-drop-hint`,this.mineDropHintEl.hidden=!0,document.getElementById(`mine-pane`)?.appendChild(this.mineDropHintEl),this.bindEvents(),this.resetForNewRun(t)}setMods(e){this.mods=e,this.recomputeAllBuffs(),this.renderEconomy(),this.renderInspector()}resetForNewRun(e,t=this.heroId){this.mods=e,this.heroId=t,this.gold=h.startGold,this.expandTokens=0,this.expansionsBought=0,this.refreshesThisStage=0,this.goldAcc=0,this.items=[],this.selectedUid=null,this.hoveredUid=null,this.shopLocked=!1,this.unlocked=Array.from({length:this.G},(e,t)=>Array.from({length:this.G},(e,n)=>t>=1&&t<=5&&n>=1&&n<=5));let n=p[t];for(let e of n.starterItems){let t=od[e.id];t&&this.items.push({uid:dd++,id:e.id,star:1,rot:0,location:e.location,row:e.row,col:e.col,slot:e.slot,forgeTimer:t.forgeCd*.78})}this.selectedUid=this.items[0]?.uid??null,this.rollShop(0,!0),this.recomputeAllBuffs(),this.renderAll()}onStageStart(e){this.refreshesThisStage=0;for(let e of this.items)if(e.location===`bag`&&od[e.id].kind===`weapon`){let t=this.getEffectiveForgeCd(e);e.forgeTimer=Math.max(e.forgeTimer,t*.85)}this.shopLocked||this.rollShop(e,!0),this.recomputeAllBuffs(),this.renderAll();let t=this.items.find(e=>e.location===`bag`&&od[e.id].kind===`weapon`);t&&this.launchFromBagItem(t,`開場投擲`)}fireAllBagWeapons(e=`全彈齊射`){this.items.filter(e=>e.location===`bag`&&od[e.id].kind===`weapon`).forEach((t,n)=>{t.forgeTimer=0,setTimeout(()=>{this.launchFromBagItem(t,e,!0)},n*95)})}addGold(e){e<=0||(this.gold+=e,this.renderEconomy())}addExpandTokens(e){e<=0||(this.expandTokens+=e,this.renderEconomy(),this.renderGridCells())}nextExpandCost(){return h.expandSlotBaseCost+this.expansionsBought*h.expandSlotCostStep}shopRefreshCost(){return Math.max(2,h.shopRefreshCost+this.refreshesThisStage*h.shopRefreshCostStep-this.mods.shopDiscount)}getOccupiedCells(e,t,n,r){let i=od[e];return td(i.baseShape,t).map(([e,t])=>[n+e,r+t])}itemAtBagCell(e,t,n){for(let r of this.items)if(r.location===`bag`&&r.uid!==n&&this.getOccupiedCells(r.id,r.rot,r.row,r.col).some(([n,r])=>n===e&&r===t))return r;return null}itemAtStorageSlot(e,t){return this.items.find(n=>n.location===`storage`&&n.slot===e&&n.uid!==t)??null}canPlaceInBag(e,t,n,r,i){let a=this.getOccupiedCells(e,t,n,r),o=new Map;for(let[e,t]of a){if(e<0||t<0||e>=this.G||t>=this.G||!this.unlocked[e][t])return{valid:!1,overlappingItems:[]};let n=this.itemAtBagCell(e,t,i);n&&o.set(n.uid,n)}return{valid:o.size===0,overlappingItems:Array.from(o.values())}}findFirstBagPlacement(e,t=0){for(let n of[t,(t+1)%4])for(let t=0;t<this.G;t++)for(let r=0;r<this.G;r++)if(this.canPlaceInBag(e,n,t,r).valid)return{row:t,col:r,rot:n};return null}findFreeStorageSlot(e){for(let t=0;t<h.storageSlots;t++)if(!this.itemAtStorageSlot(t,e))return t;return-1}recomputeAllBuffs(){this.buffCache.clear();let e=this.items.filter(e=>e.location===`bag`);for(let t of e)this.buffCache.set(t.uid,{dmgMul:1,cdMul:(t.star===3?h.star3CdMul:t.star===2?h.star2CdMul:1)*this.mods.forgeCdMul,hpMul:1,ultRateMul:1,twinChance:0,resoXpBonus:0,linkedUids:new Set,affectedCells:new Set});for(let t of e){let e=od[t.id];if(e.adjPattern===`none`)continue;let n=this.buffCache.get(t.uid),r=this.getOccupiedCells(t.id,t.rot,t.row,t.col),i=rd(e.adjPattern),a=new Set;for(let[e,t]of r)for(let[r,o]of i){let i=e+r,s=t+o;i>=0&&s>=0&&i<this.G&&s<this.G&&this.unlocked[i][s]&&(a.add(`${i},${s}`),n.affectedCells.add(`${i},${s}`))}let o=new Set;for(let e of a){let[n,r]=e.split(`,`).map(Number),i=this.itemAtBagCell(n,r,t.uid);i&&od[i.id].kind===`weapon`&&o.add(i)}let s=t.star===3?2.4:t.star===2?1.65:1,c=this.mods.relicEffectMul*s;for(let r of o){let i=this.buffCache.get(r.uid);switch(i.linkedUids.add(t.uid),n.linkedUids.add(r.uid),t.id){case`whetstone`:i.dmgMul+=.28*c;break;case`gear`:{let e=t.star===3?.55:t.star===2?.66:.78;i.cdMul=Math.max(.32,i.cdMul*e);break}case`plate`:i.hpMul+=.35*c;break;case`amp_crystal`:i.ultRateMul+=.35*c,i.resoXpBonus+=Math.round(3*s);break;case`mirror`:{let e=t.star===3?1:t.star===2?.7:.45;i.twinChance=Math.min(1,i.twinChance+e);break}case`holy_seal`:i.dmgMul+=.32*c,i.resoXpBonus+=3;break;default:e.kind===`core`&&(i.dmgMul+=.18*c,i.resoXpBonus+=Math.round(4*s))}}}}getStarPowerMul(e){return e===3?h.star3Mul:e===2?h.star2Mul:1}getEffectiveForgeCd(e){let t=od[e.id];if(t.forgeCd<=0)return 0;let n=this.buffCache.get(e.uid),r=n?n.cdMul:(e.star===3?h.star3CdMul:e.star===2?h.star2CdMul:1)*this.mods.forgeCdMul;return Math.max(1.1,t.forgeCd*r)}getHeroSpecialtyMul(e){let t=od[e.id];if(t.kind!==`weapon`||!t.weaponId)return 1;let n=k[t.weaponId];return this.heroId===`bardin`&&(n.element===`earth`||n.archetype===`heavy`||t.baseShape.length>=4)?1.3:this.heroId===`ignis`&&(n.element===`fire`||n.id===`meteor`||n.id===`dragon`)?1.35:1}getItemTotalPower(e){let t=this.buffCache.get(e.uid);return this.getStarPowerMul(e.star)*(t?t.dmgMul:1)*this.getHeroSpecialtyMul(e)}update(e){if(!this.enabled)return;if(this.goldAcc+=h.passiveGoldPerSec*this.mods.goldGainMul*e,this.goldAcc>=1){let e=Math.floor(this.goldAcc);this.goldAcc-=e,this.gold+=e,this.renderEconomy()}let t=this.overdriveActive?1.65:1;for(let n of this.items){if(n.location!==`bag`)continue;let r=od[n.id];if(r.kind!==`weapon`||!r.weaponId)continue;let i=this.getEffectiveForgeCd(n);n.forgeTimer+=e*t,n.forgeTimer>=i&&(n.forgeTimer%=i,this.launchFromBagItem(n));let a=this.bagCardEls.get(n.uid);if(a){let e=a.querySelector(`.bag-cd-fill`);e&&(e.style.width=`${Math.min(100,n.forgeTimer/i*100).toFixed(1)}%`)}}}launchFromBagItem(e,t,n=!1,r,i=1){let a=od[e.id];if(a.kind!==`weapon`||!a.weaponId)return;let o=this.buffCache.get(e.uid),s=this.getItemTotalPower(e)*i,c=o?o.hpMul:1,l=o?o.ultRateMul:1,u=this.bagCardEls.get(e.uid);u&&(u.classList.remove(`firing`),u.offsetWidth,u.classList.add(`firing`)),this.cb.onForgeWeapon(a.weaponId,s,{hpBonusMul:c,ultRateMul:l,star:e.star,customCol:r,forceSpawn:n},t);let d=k[a.weaponId];if(d.element!==`holy`){let e=3+(o?o.resoXpBonus:0);this.cb.onAddResonanceXp(d.element,e)}o&&o.twinChance>0&&Math.random()<o.twinChance&&setTimeout(()=>{this.cb.onForgeWeapon(a.weaponId,s,{hpBonusMul:c,ultRateMul:l,star:e.star,customCol:r,forceSpawn:!0},`👯 鏡像雙連`)},160)}airDropItem(e,t){let n=od[e.id];if(n.kind===`consumable`)return this.items=this.items.filter(t=>t.uid!==e.uid),this.selectedUid===e.uid&&(this.selectedUid=this.items[0]?.uid??null),this.cb.onUseConsumable(e.id,t),this.recomputeAllBuffs(),this.renderAll(),this.announce(`${n.name} 已投放至礦坑`),!0;if(n.kind===`weapon`&&n.weaponId){let r=this.getEffectiveForgeCd(e),i=(r>0?e.forgeTimer/r:1)>=.45?0:6;return i>0&&this.gold<i?(this.cb.onToast(`⚡ 鍛造充能未滿 45%，緊急空投需 ${i}G！`,`#ff9a68`),!1):(i>0&&(this.gold-=i),e.forgeTimer=0,this.launchFromBagItem(e,t===void 0?`🚀 緊急空投`:`🚀 空投第${t}列`,!0,t,h.airDropPowerMul),this.renderEconomy(),this.renderInspector(),this.announce(`${n.name} 已緊急空投至礦坑`),!0)}return this.cb.onToast(`遺物與魔晶請擺在背包格內強化相鄰武器，或拖到武器上合成！`,`#ffd880`),!1}trySynthesizeItems(e,t){if(e.uid===t.uid)return!1;let n=ld(e.id,e.star,t.id,t.star);if(!n)return!1;let r=od[n.resultId],i=t.location,a=t.row,o=t.col,s=t.slot;this.items=this.items.filter(n=>n.uid!==e.uid&&n.uid!==t.uid);let c={uid:dd++,id:n.resultId,star:n.resultStar,rot:0,location:`storage`,row:-1,col:-1,slot:0,forgeTimer:r.forgeCd*.85},l=!1;if(i===`bag`){let e=[[a,o,0],[a-1,o,0],[a,o-1,0],[a-1,o-1,0],[a,o,1]];for(let[t,n,r]of e)if(this.canPlaceInBag(c.id,r,t,n).valid){c.location=`bag`,c.row=t,c.col=n,c.rot=r,l=!0;break}if(!l){let e=this.findFirstBagPlacement(c.id,0);e&&(c.location=`bag`,c.row=e.row,c.col=e.col,c.rot=e.rot,l=!0)}}if(!l){let e=i===`storage`&&!this.itemAtStorageSlot(s)?s:this.findFreeStorageSlot();c.location=`storage`,c.slot=Math.max(0,e)}return this.items.push(c),this.selectedUid=c.uid,n.resonanceElement&&n.resonanceGain>0&&this.cb.onAddResonanceXp(n.resonanceElement,n.resonanceGain),this.recomputeAllBuffs(),this.renderAll(),this.cb.onToast(`✨ ${n.title}！`,r.cssColor,cd(c.id)),this.announce(`合成成功：${n.title}`),c.location===`bag`&&r.kind===`weapon`&&this.launchFromBagItem(c,`鍛造誕生`,!0),!0}rollShop(e=0,t=!1){if(!t){let e=this.shopRefreshCost();if(this.gold<e){this.cb.onToast(`金幣不足（刷新需 ${e}G）`,`#ff8866`);return}this.gold-=e,this.refreshesThisStage++}let n=[`pick`,`baton`,`needle`,`torch`,`icicle`],r=[`axe`,`blade`,`dagger`,`sword`,`spear`],i=[`hammer`,`halberd`,`scythe`,`meteor`,`boomerang`,`drill`,`core_orb`,`katar`,`flameblade`,`frostclaw`],a=[`whetstone`,`gear`,`plate`,`amp_crystal`,`mirror`],o=[`core_earth`,`core_thunder`,`core_poison`,`core_fire`,`core_ice`],s=[`mine_bomb`,`heal_potion`],c=[];for(let t=0;t<h.shopSlots;t++){let l,u=Math.random();l=t===0?Math.random()<Math.min(.65,.3+e*.08)?r[Math.floor(Math.random()*r.length)]:n[Math.floor(Math.random()*n.length)]:t===1?e>=2&&u<.28?i[Math.floor(Math.random()*i.length)]:u<.62?r[Math.floor(Math.random()*r.length)]:n[Math.floor(Math.random()*n.length)]:t===2?u<Math.min(.22,.08+e*.03)?`holy_seal`:o[Math.floor(Math.random()*o.length)]:t===3?a[Math.floor(Math.random()*a.length)]:u<.48?s[Math.floor(Math.random()*s.length)]:u<.78?o[Math.floor(Math.random()*o.length)]:r[Math.floor(Math.random()*r.length)];let d=od[l];c.push({id:l,star:1,cost:d.cost,sold:!1})}this.shop=c,this.renderEconomy(),this.renderShop()}buyShopOffer(e){let t=this.shop[e];if(!t||t.sold)return;if(this.gold<t.cost){this.cb.onToast(`金幣不足（需要 ${t.cost}G）`,`#ff8866`);return}let n=od[t.id],r=this.findFirstBagPlacement(t.id,0),i=this.findFreeStorageSlot();if(!r&&i===-1){let e=this.items.find(e=>ld(t.id,t.star,e.id,e.star)!==null);if(e){this.gold-=t.cost,t.sold=!0;let n={uid:dd++,id:t.id,star:t.star,rot:0,location:`storage`,row:-1,col:-1,slot:0,forgeTimer:0};this.items.push(n),this.trySynthesizeItems(n,e),this.renderShop();return}this.cb.onToast(`背包與暫存區皆已滿！請先合成、擴充格子或出售道具。`,`#ff8866`);return}this.gold-=t.cost,t.sold=!0;let a={uid:dd++,id:t.id,star:t.star,rot:r?r.rot:0,location:r&&n.kind!==`consumable`||i===-1?`bag`:`storage`,row:r?r.row:-1,col:r?r.col:-1,slot:i===-1?0:i,forgeTimer:n.forgeCd*.65};a.location===`bag`&&!r&&i!==-1&&(a.location=`storage`,a.slot=i),this.items.push(a),this.selectedUid=a.uid,this.recomputeAllBuffs(),this.renderAll(),this.announce(`已購買 ${n.name}`)}unlockCell(e,t){let n=null;if(e!==void 0&&t!==void 0&&!this.unlocked[e]?.[t])n=[e,t];else for(let e=0;e<this.G&&!n;e++)for(let t=0;t<this.G&&!n;t++)this.unlocked[e][t]||[[-1,0],[1,0],[0,-1],[0,1]].some(([n,r])=>this.unlocked[e+n]?.[t+r])&&(n=[e,t]);if(!n)return this.cb.onToast(`7×7 背包格已全部解鎖完畢！`,`#ffe680`),!1;if(this.expandTokens>0)this.expandTokens--;else{let e=this.nextExpandCost();if(this.gold<e)return this.cb.onToast(`擴充背包格需 ${e}G（或擊殺金冠菁英取得免費擴格券）`,`#ff9a68`),!1;this.gold-=e,this.expansionsBought++}return this.unlocked[n[0]][n[1]]=!0,this.recomputeAllBuffs(),this.renderAll(),this.announce(`已解鎖背包格 (${n[0]+1}, ${n[1]+1})`),!0}rotateItem(e){if(od[e.id].baseShape.length<=1)return!1;for(let t=1;t<=3;t++){let n=(e.rot+t)%4;if(e.location===`storage`)return e.rot=n,this.renderAll(),!0;if(this.canPlaceInBag(e.id,n,e.row,e.col,e.uid).valid)return e.rot=n,this.recomputeAllBuffs(),this.renderAll(),!0;for(let[t,r]of[[0,-1],[-1,0],[0,1],[1,0]])if(this.canPlaceInBag(e.id,n,e.row+t,e.col+r,e.uid).valid)return e.rot=n,e.row+=t,e.col+=r,this.recomputeAllBuffs(),this.renderAll(),!0}return this.cb.onToast(`周圍空間不足，無法旋轉（可先移至暫存區旋轉）`,`#ff9a68`),!1}sellItem(e){let t=od[e.id],n=e.star===3?3.2:e.star===2?1.8:1,r=Math.max(5,Math.round(t.cost*n*h.sellRefundRatio));this.items=this.items.filter(t=>t.uid!==e.uid),this.selectedUid===e.uid&&(this.selectedUid=this.items[0]?.uid??null),this.gold+=r,this.recomputeAllBuffs(),this.renderAll(),this.cb.onToast(`💰 已出售【${t.name}】+${r}G`,`#ffd858`),this.announce(`已出售 ${t.name} 獲得 ${r} 金幣`)}bindEvents(){this.expandBtnEl.addEventListener(`click`,()=>this.unlockCell()),this.refreshBtnEl.addEventListener(`click`,()=>this.rollShop(Math.floor(this.expansionsBought/2),!1)),this.lockBtnEl.addEventListener(`click`,()=>{this.shopLocked=!this.shopLocked,this.renderEconomy()}),window.addEventListener(`keydown`,e=>{if(this.enabled){if(e.key===`r`||e.key===`R`){if(this.dragState){this.dragState.tempRot=(this.dragState.tempRot+1)%4,this.updateDragGhostVisual();return}let t=this.items.find(e=>e.uid===this.selectedUid);t&&(e.preventDefault(),this.rotateItem(t))}else if([`ArrowUp`,`ArrowDown`,`ArrowLeft`,`ArrowRight`].includes(e.key)){let t=this.items.find(e=>e.uid===this.selectedUid);if(!t||t.location!==`bag`)return;let n=e.key===`ArrowUp`?-1:+(e.key===`ArrowDown`),r=e.key===`ArrowLeft`?-1:+(e.key===`ArrowRight`);this.canPlaceInBag(t.id,t.rot,t.row+n,t.col+r,t.uid).valid&&(e.preventDefault(),t.row+=n,t.col+=r,this.recomputeAllBuffs(),this.renderAll(),this.announce(`${od[t.id].name} 移動至 (${t.row+1}, ${t.col+1})`))}}}),document.addEventListener(`pointermove`,e=>this.onPointerMove(e)),document.addEventListener(`pointerup`,e=>this.onPointerUp(e)),document.addEventListener(`pointercancel`,e=>this.onPointerCancel(e))}startItemPointerDown(e,t,n){if(e.button===2){e.preventDefault(),this.rotateItem(t);return}if(e.button!==0)return;this.selectedUid=t.uid,this.renderInspector(),this.updateSelectionHighlights();let r=n.getBoundingClientRect();this.dragState={item:t,pointerId:e.pointerId,startX:e.clientX,startY:e.clientY,offsetX:e.clientX-r.left,offsetY:e.clientY-r.top,moved:!1,tempRot:t.rot}}onPointerMove(e){let t=this.dragState;if(!t||e.pointerId!==t.pointerId)return;let n=Math.hypot(e.clientX-t.startX,e.clientY-t.startY);if(!t.moved&&n<5)return;t.moved||(t.moved=!0,this.updateDragGhostVisual(),this.dragGhostEl.hidden=!1);let r=Math.max(0,window.innerWidth-this.dragGhostEl.offsetWidth),i=Math.max(0,window.innerHeight-this.dragGhostEl.offsetHeight),a=Math.max(0,Math.min(e.clientX-t.offsetX,r)),o=Math.max(0,Math.min(e.clientY-t.offsetY,i));this.dragGhostEl.style.left=`${a}px`,this.dragGhostEl.style.top=`${o}px`,this.highlightDropTarget(e.clientX,e.clientY)}onPointerUp(e){let t=this.dragState;if(!t||e.pointerId!==t.pointerId||(this.dragState=null,this.dragGhostEl.hidden=!0,this.mineDropHintEl.hidden=!0,this.clearDropHighlights(),!t.moved))return;let n=t.item;n.rot=t.tempRot;let r=this.cb.getMineColumnFromClientX(e.clientX,e.clientY);if(r!==null){this.airDropItem(n,r);return}let i=this.clientPointToBagAnchor(e.clientX,e.clientY,t.offsetX,t.offsetY);if(i){let[t,r]=i,a=this.clientPointToSingleBagCell(e.clientX,e.clientY),o=a?this.itemAtBagCell(a[0],a[1],n.uid):null;if(o&&this.trySynthesizeItems(n,o))return;let s=this.canPlaceInBag(n.id,n.rot,t,r,n.uid);if(s.valid){n.location=`bag`,n.row=t,n.col=r,n.slot=-1,this.recomputeAllBuffs(),this.renderAll(),this.announce(`${od[n.id].name} 已放入背包 (${t+1}, ${r+1})`);return}if(s.overlappingItems.length===1){let e=s.overlappingItems[0];if(this.trySynthesizeItems(n,e))return}}let a=this.clientPointToStorageSlot(e.clientX,e.clientY);if(a!==null){let e=this.itemAtStorageSlot(a,n.uid);if(e){if(this.trySynthesizeItems(n,e))return;if(n.location===`storage`){e.slot=n.slot,n.slot=a,this.renderAll();return}}else{n.location=`storage`,n.slot=a,n.row=-1,n.col=-1,this.recomputeAllBuffs(),this.renderAll(),this.announce(`${od[n.id].name} 已移至暫存區`);return}}this.renderAll()}onPointerCancel(e){this.dragState&&e.pointerId===this.dragState.pointerId&&(this.dragState=null,this.dragGhostEl.hidden=!0,this.mineDropHintEl.hidden=!0,this.clearDropHighlights())}updateDragGhostVisual(){if(!this.dragState)return;let{item:e,tempRot:t}=this.dragState,n=od[e.id],r=nd(td(n.baseShape,t)),i=this.getBagCellSizePx();this.dragGhostEl.style.width=`${r.cols*i}px`,this.dragGhostEl.style.height=`${r.rows*i}px`,this.dragGhostEl.style.borderColor=n.cssColor,this.dragGhostEl.innerHTML=`<img src="${cd(e.id)}" alt=""><span>${n.name}</span>`}getBagCellSizePx(){let e=this.gridEl.querySelector(`.bag-cell`);return e?e.getBoundingClientRect().width:44}clientPointToSingleBagCell(e,t){let n=this.gridEl.getBoundingClientRect();if(e<n.left||e>n.right||t<n.top||t>n.bottom)return null;let r=Math.floor((e-n.left)/n.width*this.G),i=Math.floor((t-n.top)/n.height*this.G);return i<0||r<0||i>=this.G||r>=this.G?null:[i,r]}clientPointToBagAnchor(e,t,n,r){let i=this.gridEl.getBoundingClientRect();if(e<i.left-12||e>i.right+12||t<i.top-12||t>i.bottom+12)return null;let a=i.width/this.G,o=i.height/this.G,s=e-n+a*.45,c=t-r+o*.45,l=Math.floor((s-i.left)/a);return[Math.floor((c-i.top)/o),l]}clientPointToStorageSlot(e,t){let n=Array.from(this.storageEl.querySelectorAll(`.storage-slot`));for(let r=0;r<n.length;r++){let i=n[r].getBoundingClientRect();if(e>=i.left&&e<=i.right&&t>=i.top&&t<=i.bottom)return r}return null}highlightDropTarget(e,t){this.clearDropHighlights();let n=this.dragState;if(!n)return;let r=this.cb.getMineColumnFromClientX(e,t);if(r!==null){this.mineDropHintEl.hidden=!1;let e=od[n.item.id];this.mineDropHintEl.textContent=e.kind===`consumable`?`🧨 放開立即投擲【${e.name}】（第 ${r} 列）`:`🚀 放開緊急空投【${e.name} ×${h.airDropPowerMul}】（第 ${r} 列）`;return}this.mineDropHintEl.hidden=!0;let i=this.clientPointToSingleBagCell(e,t);if(i){let e=this.itemAtBagCell(i[0],i[1],n.item.uid);if(e&&ld(n.item.id,n.item.star,e.id,e.star)){this.bagCardEls.get(e.uid)?.classList.add(`synth-ready`);return}}let a=this.clientPointToBagAnchor(e,t,n.offsetX,n.offsetY);if(!a)return;let[o,s]=a,c=this.getOccupiedCells(n.item.id,n.tempRot,o,s),l=this.canPlaceInBag(n.item.id,n.tempRot,o,s,n.item.uid).valid?`drop-ok`:`drop-bad`;for(let[e,t]of c)this.gridEl.querySelector(`.bag-cell[data-r="${e}"][data-c="${t}"]`)?.classList.add(l)}clearDropHighlights(){this.gridEl.querySelectorAll(`.drop-ok, .drop-bad`).forEach(e=>e.classList.remove(`drop-ok`,`drop-bad`)),this.itemsLayerEl.querySelectorAll(`.synth-ready`).forEach(e=>e.classList.remove(`synth-ready`))}announce(e){this.liveRegionEl.textContent=e}renderAll(){this.renderEconomy(),this.renderGridCells(),this.renderBagItems(),this.renderStorage(),this.renderShop(),this.renderInspector(),this.updateSelectionHighlights()}renderEconomy(){this.goldEl.textContent=`💰 ${this.gold}G`,this.expandTokens>0?(this.expandBtnEl.textContent=`🎒 免費擴格 (${this.expandTokens})`,this.expandBtnEl.classList.add(`free-token`)):(this.expandBtnEl.textContent=`🎒 擴格 (${this.nextExpandCost()}G)`,this.expandBtnEl.classList.remove(`free-token`)),this.refreshBtnEl.textContent=`🔄 刷新 (${this.shopRefreshCost()}G)`,this.lockBtnEl.setAttribute(`aria-pressed`,this.shopLocked?`true`:`false`),this.lockBtnEl.textContent=this.shopLocked?`🔒 已鎖定`:`🔓 鎖定`}renderGridCells(){if(this.gridEl.children.length!==this.G*this.G){this.gridEl.replaceChildren();for(let e=0;e<this.G;e++)for(let t=0;t<this.G;t++){let n=document.createElement(`button`);n.type=`button`,n.className=`bag-cell`,n.dataset.r=String(e),n.dataset.c=String(t),n.addEventListener(`click`,()=>this.onBagCellClick(e,t)),this.gridEl.appendChild(n)}}for(let e=0;e<this.G;e++)for(let t=0;t<this.G;t++){let n=this.gridEl.children[e*this.G+t],r=this.unlocked[e][t];n.classList.toggle(`locked`,!r),n.setAttribute(`aria-label`,r?`背包格 (${e+1}, ${t+1})`:`鎖定格 (${e+1}, ${t+1})，點擊擴充`),n.textContent=r?``:`🔒`}}onBagCellClick(e,t){if(!this.unlocked[e][t]){this.unlockCell(e,t);return}let n=this.items.find(e=>e.uid===this.selectedUid);n&&this.canPlaceInBag(n.id,n.rot,e,t,n.uid).valid&&(n.location=`bag`,n.row=e,n.col=t,n.slot=-1,this.recomputeAllBuffs(),this.renderAll(),this.announce(`${od[n.id].name} 已移至背包 (${e+1}, ${t+1})`))}renderBagItems(){this.bagCardEls.clear(),this.itemsLayerEl.replaceChildren();let e=this.items.filter(e=>e.location===`bag`);for(let t of e){let e=od[t.id],n=td(e.baseShape,t.rot),r=nd(n),i=this.buffCache.get(t.uid),a=document.createElement(`div`);a.className=`bag-item kind-${e.kind}`,a.dataset.uid=String(t.uid),a.style.setProperty(`--item-color`,e.cssColor),a.style.left=`${t.col/this.G*100}%`,a.style.top=`${t.row/this.G*100}%`,a.style.width=`${r.cols/this.G*100}%`,a.style.height=`${r.rows/this.G*100}%`;let o=new Set(n.map(([e,t])=>`${e},${t}`)),s=Array.from({length:r.rows*r.cols},(e,t)=>{let n=Math.floor(t/r.cols),i=t%r.cols;return`<span class="sub-tile${o.has(`${n},${i}`)?` filled`:` empty`}" style="grid-row:${n+1};grid-column:${i+1}"></span>`}).join(``),c=this.getEffectiveForgeCd(t),l=c>0?Math.min(100,t.forgeTimer/c*100):0,u=t.star>1?`<span class="item-star">${`★`.repeat(t.star)}</span>`:``,d=i&&e.kind===`weapon`?Math.round((this.getItemTotalPower(t)-1)*100):0,f=d>0?`<span class="item-buff">+${d}%</span>`:``,p=e.kind===`weapon`?`<span class="bag-cd-bar"><i class="bag-cd-fill" style="width:${l.toFixed(1)}%"></i></span>`:``;a.innerHTML=`
        <div class="sub-grid" style="grid-template-rows:repeat(${r.rows},1fr);grid-template-columns:repeat(${r.cols},1fr)">${s}</div>
        <div class="bag-item-content">
          ${u}
          ${f}
          <img src="${cd(t.id)}" alt="${e.name}">
          <span class="item-lbl">${e.name}</span>
          ${p}
        </div>
      `,a.addEventListener(`contextmenu`,e=>e.preventDefault()),a.addEventListener(`pointerdown`,e=>this.startItemPointerDown(e,t,a)),a.addEventListener(`pointerenter`,()=>{this.hoveredUid=t.uid,this.updateSelectionHighlights()}),a.addEventListener(`pointerleave`,()=>{this.hoveredUid===t.uid&&(this.hoveredUid=null,this.updateSelectionHighlights())}),a.addEventListener(`click`,e=>{e.stopPropagation();let n=this.items.find(e=>e.uid===this.selectedUid);n&&n.uid!==t.uid&&ld(n.id,n.star,t.id,t.star)&&this.trySynthesizeItems(n,t)}),this.bagCardEls.set(t.uid,a),this.itemsLayerEl.appendChild(a)}}renderStorage(){this.storageCardEls.clear(),this.storageEl.replaceChildren();for(let e=0;e<h.storageSlots;e++){let t=document.createElement(`div`);t.className=`storage-slot`,t.dataset.slot=String(e);let n=this.itemAtStorageSlot(e);if(n){let e=od[n.id],r=document.createElement(`div`);r.className=`storage-item kind-${e.kind}`,r.style.setProperty(`--item-color`,e.cssColor),r.innerHTML=`
          ${n.star>1?`<span class="item-star">${`★`.repeat(n.star)}</span>`:``}
          <img src="${cd(n.id)}" alt="${e.name}">
          <span class="item-lbl">${e.name}</span>
        `,r.addEventListener(`contextmenu`,e=>e.preventDefault()),r.addEventListener(`pointerdown`,e=>this.startItemPointerDown(e,n,r)),r.addEventListener(`click`,e=>{e.stopPropagation();let t=this.items.find(e=>e.uid===this.selectedUid);t&&t.uid!==n.uid&&ld(t.id,t.star,n.id,n.star)&&this.trySynthesizeItems(t,n)}),this.storageCardEls.set(n.uid,r),t.appendChild(r)}else t.addEventListener(`click`,()=>{let t=this.items.find(e=>e.uid===this.selectedUid);t&&(t.location=`storage`,t.slot=e,t.row=-1,t.col=-1,this.recomputeAllBuffs(),this.renderAll())});this.storageEl.appendChild(t)}}renderShop(){this.shopEl.replaceChildren(...this.shop.map((e,t)=>{let n=od[e.id],r=document.createElement(`button`);return r.type=`button`,r.className=`shop-card kind-${n.kind}${e.sold?` sold`:``}`,r.style.setProperty(`--item-color`,n.cssColor),r.disabled=e.sold,r.innerHTML=`
          ${!e.sold&&this.items.some(t=>ld(e.id,e.star,t.id,t.star)!==null)?`<span class="shop-merge-tag">✨可合成</span>`:``}
          <img src="${cd(e.id)}" alt="${n.name}">
          <span class="shop-name">${n.name}</span>
          <span class="shop-shape">${n.shapeName}</span>
          <span class="shop-price">${e.sold?`已售出`:`💰 ${e.cost}G`}</span>
        `,r.addEventListener(`click`,()=>this.buyShopOffer(t)),r}))}renderInspector(){let e=this.hoveredUid??this.selectedUid,t=this.items.find(t=>t.uid===e)??this.items[0]??null;if(!t){this.inspectorEl.innerHTML=`<div class="insp-empty">從下方商店購買武器、魔晶與遺物放入背包，武器充能完畢即自動投射至右側礦坑！</div>`;return}let n=od[t.id],r=this.buffCache.get(t.uid),i=t.star>1?` ${`★`.repeat(t.star)}`:``,a=``;if(n.kind===`weapon`&&n.weaponId){let e=k[n.weaponId],i=this.getItemTotalPower(t),o=Math.round(e.dmg*i*this.mods.dmgMul),s=Math.round(e.baseHp*(1+(i-1)*.6)*this.mods.hpMul*(r?r.hpMul:1)),c=this.getEffectiveForgeCd(t),l=r&&r.twinChance>0?`｜👯 ${Math.round(r.twinChance*100)}%`:``;a=`<div class="insp-stats">⚔️ 傷害 <b>${o}</b> (${Math.round(i*100)}%)｜❤️ <b>${s}</b>｜⚡ 每 <b>${c.toFixed(1)}s</b>｜彈力 <b>${e.bounceRating}</b>・投速 <b>${e.throwSpeed}</b>・<b>${e.weightLabel}</b>${l}</div>`}else a=`<div class="insp-stats">${n.desc}</div>`;let o=t.star===3?3.2:t.star===2?1.8:1,s=Math.max(5,Math.round(n.cost*o*h.sellRefundRatio)),c=n.baseShape.length>1,l=n.kind===`consumable`?`🧨 立即投擲`:`🚀 緊急空投`;this.inspectorEl.innerHTML=`
      <div class="insp-main">
        <div class="insp-body">
          <div class="insp-head">
            <img class="insp-ico" src="${cd(t.id)}" alt="">
            <div class="insp-title"><b style="color:${n.cssColor}">${n.name}${i}</b> <small>${n.subtitle}</small></div>
          </div>
          ${a}
          <div class="insp-recipe">💡 ${n.recipeHint}</div>
        </div>
        <div class="insp-actions">
          ${n.kind===`weapon`||n.kind===`consumable`?`<button type="button" class="insp-btn primary" id="insp-airdrop-btn">${l}</button>`:``}
          ${c?`<button type="button" class="insp-btn" id="insp-rot-btn">🔄 旋轉(R)</button>`:``}
          <button type="button" class="insp-btn sell" id="insp-sell-btn">💰 出售(+${s}G)</button>
        </div>
      </div>
    `,this.inspectorEl.querySelector(`#insp-airdrop-btn`)?.addEventListener(`click`,()=>this.airDropItem(t)),this.inspectorEl.querySelector(`#insp-rot-btn`)?.addEventListener(`click`,()=>this.rotateItem(t)),this.inspectorEl.querySelector(`#insp-sell-btn`)?.addEventListener(`click`,()=>this.sellItem(t))}updateSelectionHighlights(){let e=this.hoveredUid??this.selectedUid,t=this.items.find(t=>t.uid===e)??null,n=e===null?void 0:this.buffCache.get(e);for(let[e,r]of this.bagCardEls){r.classList.toggle(`selected`,e===this.selectedUid),r.classList.toggle(`linked`,!!n?.linkedUids.has(e));let i=this.items.find(t=>t.uid===e),a=!!(t&&i&&t.uid!==i.uid&&ld(t.id,t.star,i.id,i.star));r.classList.toggle(`merge-hint`,a)}for(let[e,n]of this.storageCardEls){n.classList.toggle(`selected`,e===this.selectedUid);let r=this.items.find(t=>t.uid===e),i=!!(t&&r&&t.uid!==r.uid&&ld(t.id,t.star,r.id,r.star));n.classList.toggle(`merge-hint`,i)}this.gridEl.querySelectorAll(`.bag-cell`).forEach(e=>{let t=e.dataset.r,r=e.dataset.c;e.classList.toggle(`adj-aura`,!!n?.affectedCells.has(`${t},${r}`))})}},X=c(o(((e,t,n)=>{(function(n,r){typeof e==`object`&&typeof t==`object`?t.exports=r():typeof define==`function`&&define.amd?define(`Matter`,[],r):typeof e==`object`?e.Matter=r():n.Matter=r()})(n,function(){return(function(e){var t={};function n(r){if(t[r])return t[r].exports;var i=t[r]={i:r,l:!1,exports:{}};return e[r].call(i.exports,i,i.exports,n),i.l=!0,i.exports}return n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){typeof Symbol<`u`&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:`Module`}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(t&1&&(e=n(e)),t&8||t&4&&typeof e==`object`&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),t&2&&typeof e!=`string`)for(var i in e)n.d(r,i,function(t){return e[t]}.bind(null,i));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,`a`,t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p=``,n(n.s=20)})([(function(e,t){var n={};e.exports=n,(function(){n._baseDelta=1e3/60,n._nextId=0,n._seed=0,n._nowStartTime=+new Date,n._warnedOnce={},n._decomp=null,n.extend=function(e,t){var r,i;typeof t==`boolean`?(r=2,i=t):(r=1,i=!0);for(var a=r;a<arguments.length;a++){var o=arguments[a];if(o)for(var s in o)i&&o[s]&&o[s].constructor===Object&&(!e[s]||e[s].constructor===Object)?(e[s]=e[s]||{},n.extend(e[s],i,o[s])):e[s]=o[s]}return e},n.clone=function(e,t){return n.extend({},t,e)},n.keys=function(e){if(Object.keys)return Object.keys(e);var t=[];for(var n in e)t.push(n);return t},n.values=function(e){var t=[];if(Object.keys){for(var n=Object.keys(e),r=0;r<n.length;r++)t.push(e[n[r]]);return t}for(var i in e)t.push(e[i]);return t},n.get=function(e,t,n,r){t=t.split(`.`).slice(n,r);for(var i=0;i<t.length;i+=1)e=e[t[i]];return e},n.set=function(e,t,r,i,a){var o=t.split(`.`).slice(i,a);return n.get(e,t,0,-1)[o[o.length-1]]=r,r},n.shuffle=function(e){for(var t=e.length-1;t>0;t--){var r=Math.floor(n.random()*(t+1)),i=e[t];e[t]=e[r],e[r]=i}return e},n.choose=function(e){return e[Math.floor(n.random()*e.length)]},n.isElement=function(e){return typeof HTMLElement<`u`?e instanceof HTMLElement:!!(e&&e.nodeType&&e.nodeName)},n.isArray=function(e){return Object.prototype.toString.call(e)===`[object Array]`},n.isFunction=function(e){return typeof e==`function`},n.isPlainObject=function(e){return typeof e==`object`&&e.constructor===Object},n.isString=function(e){return toString.call(e)===`[object String]`},n.clamp=function(e,t,n){return e<t?t:e>n?n:e},n.sign=function(e){return e<0?-1:1},n.now=function(){if(typeof window<`u`&&window.performance){if(window.performance.now)return window.performance.now();if(window.performance.webkitNow)return window.performance.webkitNow()}return Date.now?Date.now():new Date-n._nowStartTime},n.random=function(t,n){return t=t===void 0?0:t,n=n===void 0?1:n,t+e()*(n-t)};var e=function(){return n._seed=(n._seed*9301+49297)%233280,n._seed/233280};n.colorToNumber=function(e){return e=e.replace(`#`,``),e.length==3&&(e=e.charAt(0)+e.charAt(0)+e.charAt(1)+e.charAt(1)+e.charAt(2)+e.charAt(2)),parseInt(e,16)},n.logLevel=1,n.log=function(){console&&n.logLevel>0&&n.logLevel<=3&&console.log.apply(console,[`matter-js:`].concat(Array.prototype.slice.call(arguments)))},n.info=function(){console&&n.logLevel>0&&n.logLevel<=2&&console.info.apply(console,[`matter-js:`].concat(Array.prototype.slice.call(arguments)))},n.warn=function(){console&&n.logLevel>0&&n.logLevel<=3&&console.warn.apply(console,[`matter-js:`].concat(Array.prototype.slice.call(arguments)))},n.warnOnce=function(){var e=Array.prototype.slice.call(arguments).join(` `);n._warnedOnce[e]||(n.warn(e),n._warnedOnce[e]=!0)},n.deprecated=function(e,t,r){e[t]=n.chain(function(){n.warnOnce(`🔅 deprecated 🔅`,r)},e[t])},n.nextId=function(){return n._nextId++},n.indexOf=function(e,t){if(e.indexOf)return e.indexOf(t);for(var n=0;n<e.length;n++)if(e[n]===t)return n;return-1},n.map=function(e,t){if(e.map)return e.map(t);for(var n=[],r=0;r<e.length;r+=1)n.push(t(e[r]));return n},n.topologicalSort=function(e){var t=[],r=[],i=[];for(var a in e)!r[a]&&!i[a]&&n._topologicalSort(a,r,i,e,t);return t},n._topologicalSort=function(e,t,r,i,a){var o=i[e]||[];r[e]=!0;for(var s=0;s<o.length;s+=1){var c=o[s];r[c]||t[c]||n._topologicalSort(c,t,r,i,a)}r[e]=!1,t[e]=!0,a.push(e)},n.chain=function(){for(var e=[],t=0;t<arguments.length;t+=1){var n=arguments[t];n._chained?e.push.apply(e,n._chained):e.push(n)}var r=function(){for(var t,n=Array(arguments.length),r=0,i=arguments.length;r<i;r++)n[r]=arguments[r];for(r=0;r<e.length;r+=1){var a=e[r].apply(t,n);a!==void 0&&(t=a)}return t};return r._chained=e,r},n.chainPathBefore=function(e,t,r){return n.set(e,t,n.chain(r,n.get(e,t)))},n.chainPathAfter=function(e,t,r){return n.set(e,t,n.chain(n.get(e,t),r))},n.setDecomp=function(e){n._decomp=e},n.getDecomp=function(){var e=n._decomp;try{!e&&typeof window<`u`&&(e=window.decomp),!e&&typeof global<`u`&&(e=global.decomp)}catch{e=null}return e}})()}),(function(e,t){var n={};e.exports=n,(function(){n.create=function(e){var t={min:{x:0,y:0},max:{x:0,y:0}};return e&&n.update(t,e),t},n.update=function(e,t,n){e.min.x=1/0,e.max.x=-1/0,e.min.y=1/0,e.max.y=-1/0;for(var r=0;r<t.length;r++){var i=t[r];i.x>e.max.x&&(e.max.x=i.x),i.x<e.min.x&&(e.min.x=i.x),i.y>e.max.y&&(e.max.y=i.y),i.y<e.min.y&&(e.min.y=i.y)}n&&(n.x>0?e.max.x+=n.x:e.min.x+=n.x,n.y>0?e.max.y+=n.y:e.min.y+=n.y)},n.contains=function(e,t){return t.x>=e.min.x&&t.x<=e.max.x&&t.y>=e.min.y&&t.y<=e.max.y},n.overlaps=function(e,t){return e.min.x<=t.max.x&&e.max.x>=t.min.x&&e.max.y>=t.min.y&&e.min.y<=t.max.y},n.translate=function(e,t){e.min.x+=t.x,e.max.x+=t.x,e.min.y+=t.y,e.max.y+=t.y},n.shift=function(e,t){var n=e.max.x-e.min.x,r=e.max.y-e.min.y;e.min.x=t.x,e.max.x=t.x+n,e.min.y=t.y,e.max.y=t.y+r}})()}),(function(e,t){var n={};e.exports=n,(function(){n.create=function(e,t){return{x:e||0,y:t||0}},n.clone=function(e){return{x:e.x,y:e.y}},n.magnitude=function(e){return Math.sqrt(e.x*e.x+e.y*e.y)},n.magnitudeSquared=function(e){return e.x*e.x+e.y*e.y},n.rotate=function(e,t,n){var r=Math.cos(t),i=Math.sin(t);n||={};var a=e.x*r-e.y*i;return n.y=e.x*i+e.y*r,n.x=a,n},n.rotateAbout=function(e,t,n,r){var i=Math.cos(t),a=Math.sin(t);r||={};var o=n.x+((e.x-n.x)*i-(e.y-n.y)*a);return r.y=n.y+((e.x-n.x)*a+(e.y-n.y)*i),r.x=o,r},n.normalise=function(e){var t=n.magnitude(e);return t===0?{x:0,y:0}:{x:e.x/t,y:e.y/t}},n.dot=function(e,t){return e.x*t.x+e.y*t.y},n.cross=function(e,t){return e.x*t.y-e.y*t.x},n.cross3=function(e,t,n){return(t.x-e.x)*(n.y-e.y)-(t.y-e.y)*(n.x-e.x)},n.add=function(e,t,n){return n||={},n.x=e.x+t.x,n.y=e.y+t.y,n},n.sub=function(e,t,n){return n||={},n.x=e.x-t.x,n.y=e.y-t.y,n},n.mult=function(e,t){return{x:e.x*t,y:e.y*t}},n.div=function(e,t){return{x:e.x/t,y:e.y/t}},n.perp=function(e,t){return t=t===!0?-1:1,{x:t*-e.y,y:t*e.x}},n.neg=function(e){return{x:-e.x,y:-e.y}},n.angle=function(e,t){return Math.atan2(t.y-e.y,t.x-e.x)},n._temp=[n.create(),n.create(),n.create(),n.create(),n.create(),n.create()]})()}),(function(e,t,n){var r={};e.exports=r;var i=n(2),a=n(0);(function(){r.create=function(e,t){for(var n=[],r=0;r<e.length;r++){var i=e[r],a={x:i.x,y:i.y,index:r,body:t,isInternal:!1};n.push(a)}return n},r.fromPath=function(e,t){var n=/L?\s*([-\d.e]+)[\s,]*([-\d.e]+)*/gi,i=[];return e.replace(n,function(e,t,n){i.push({x:parseFloat(t),y:parseFloat(n)})}),r.create(i,t)},r.centre=function(e){for(var t=r.area(e,!0),n={x:0,y:0},a,o,s,c=0;c<e.length;c++)s=(c+1)%e.length,a=i.cross(e[c],e[s]),o=i.mult(i.add(e[c],e[s]),a),n=i.add(n,o);return i.div(n,6*t)},r.mean=function(e){for(var t={x:0,y:0},n=0;n<e.length;n++)t.x+=e[n].x,t.y+=e[n].y;return i.div(t,e.length)},r.area=function(e,t){for(var n=0,r=e.length-1,i=0;i<e.length;i++)n+=(e[r].x-e[i].x)*(e[r].y+e[i].y),r=i;return t?n/2:Math.abs(n)/2},r.inertia=function(e,t){for(var n=0,r=0,a=e,o,s,c=0;c<a.length;c++)s=(c+1)%a.length,o=Math.abs(i.cross(a[s],a[c])),n+=o*(i.dot(a[s],a[s])+i.dot(a[s],a[c])+i.dot(a[c],a[c])),r+=o;return t/6*(n/r)},r.translate=function(e,t,n){n=n===void 0?1:n;for(var r=e.length,i=t.x*n,a=t.y*n,o=0;o<r;o++)e[o].x+=i,e[o].y+=a;return e},r.rotate=function(e,t,n){if(t!==0){for(var r=Math.cos(t),i=Math.sin(t),a=n.x,o=n.y,s=e.length,c,l,u,d=0;d<s;d++)c=e[d],l=c.x-a,u=c.y-o,c.x=a+(l*r-u*i),c.y=o+(l*i+u*r);return e}},r.contains=function(e,t){for(var n=t.x,r=t.y,i=e.length,a=e[i-1],o,s=0;s<i;s++){if(o=e[s],(n-a.x)*(o.y-a.y)+(r-a.y)*(a.x-o.x)>0)return!1;a=o}return!0},r.scale=function(e,t,n,a){if(t===1&&n===1)return e;a||=r.centre(e);for(var o,s,c=0;c<e.length;c++)o=e[c],s=i.sub(o,a),e[c].x=a.x+s.x*t,e[c].y=a.y+s.y*n;return e},r.chamfer=function(e,t,n,r,o){typeof t==`number`?t=[t]:t||=[8],n=n===void 0?-1:n,r||=2,o||=14;for(var s=[],c=0;c<e.length;c++){var l=e[c-1>=0?c-1:e.length-1],u=e[c],d=e[(c+1)%e.length],f=t[c<t.length?c:t.length-1];if(f===0)s.push(u);else{var p=i.normalise({x:u.y-l.y,y:l.x-u.x}),m=i.normalise({x:d.y-u.y,y:u.x-d.x}),h=Math.sqrt(2*f**2),g=i.mult(a.clone(p),f),_=i.normalise(i.mult(i.add(p,m),.5)),v=i.sub(u,i.mult(_,h)),y=n;n===-1&&(y=f**.32*1.75),y=a.clamp(y,r,o),y%2==1&&(y+=1);for(var b=Math.acos(i.dot(p,m))/y,x=0;x<y;x++)s.push(i.add(i.rotate(g,b*x),v))}}return s},r.clockwiseSort=function(e){var t=r.mean(e);return e.sort(function(e,n){return i.angle(t,e)-i.angle(t,n)}),e},r.isConvex=function(e){var t=0,n=e.length,r,i,a,o;if(n<3)return null;for(r=0;r<n;r++)if(i=(r+1)%n,a=(r+2)%n,o=(e[i].x-e[r].x)*(e[a].y-e[i].y),o-=(e[i].y-e[r].y)*(e[a].x-e[i].x),o<0?t|=1:o>0&&(t|=2),t===3)return!1;return t!==0||null},r.hull=function(e){var t=[],n=[],r,a;for(e=e.slice(0),e.sort(function(e,t){var n=e.x-t.x;return n===0?e.y-t.y:n}),a=0;a<e.length;a+=1){for(r=e[a];n.length>=2&&i.cross3(n[n.length-2],n[n.length-1],r)<=0;)n.pop();n.push(r)}for(a=e.length-1;a>=0;--a){for(r=e[a];t.length>=2&&i.cross3(t[t.length-2],t[t.length-1],r)<=0;)t.pop();t.push(r)}return t.pop(),n.pop(),t.concat(n)}})()}),(function(e,t,n){var r={};e.exports=r;var i=n(3),a=n(2),o=n(7),s=n(0),c=n(1),l=n(11);(function(){r._timeCorrection=!0,r._inertiaScale=4,r._nextCollidingGroupId=1,r._nextNonCollidingGroupId=-1,r._nextCategory=1,r._baseDelta=1e3/60,r.create=function(t){var n={id:s.nextId(),type:`body`,label:`Body`,parts:[],plugin:{},angle:0,vertices:i.fromPath(`L 0 0 L 40 0 L 40 40 L 0 40`),position:{x:0,y:0},force:{x:0,y:0},torque:0,positionImpulse:{x:0,y:0},constraintImpulse:{x:0,y:0,angle:0},totalContacts:0,speed:0,angularSpeed:0,velocity:{x:0,y:0},angularVelocity:0,isSensor:!1,isStatic:!1,isSleeping:!1,motion:0,sleepThreshold:60,density:.001,restitution:0,friction:.1,frictionStatic:.5,frictionAir:.01,collisionFilter:{category:1,mask:4294967295,group:0},slop:.05,timeScale:1,render:{visible:!0,opacity:1,strokeStyle:null,fillStyle:null,lineWidth:null,sprite:{xScale:1,yScale:1,xOffset:0,yOffset:0}},events:null,bounds:null,chamfer:null,circleRadius:0,positionPrev:null,anglePrev:0,parent:null,axes:null,area:0,mass:0,inertia:0,deltaTime:1e3/60,_original:null},r=s.extend(n,t);return e(r,t),r},r.nextGroup=function(e){return e?r._nextNonCollidingGroupId--:r._nextCollidingGroupId++},r.nextCategory=function(){return r._nextCategory<<=1,r._nextCategory};var e=function(e,t){t||={},r.set(e,{bounds:e.bounds||c.create(e.vertices),positionPrev:e.positionPrev||a.clone(e.position),anglePrev:e.anglePrev||e.angle,vertices:e.vertices,parts:e.parts||[e],isStatic:e.isStatic,isSleeping:e.isSleeping,parent:e.parent||e}),i.rotate(e.vertices,e.angle,e.position),l.rotate(e.axes,e.angle),c.update(e.bounds,e.vertices,e.velocity),r.set(e,{axes:t.axes||e.axes,area:t.area||e.area,mass:t.mass||e.mass,inertia:t.inertia||e.inertia});var n=e.isStatic?`#14151f`:s.choose([`#f19648`,`#f5d259`,`#f55a3c`,`#063e7b`,`#ececd1`]),o=e.isStatic?`#555`:`#ccc`,u=e.isStatic&&e.render.fillStyle===null?1:0;e.render.fillStyle=e.render.fillStyle||n,e.render.strokeStyle=e.render.strokeStyle||o,e.render.lineWidth=e.render.lineWidth||u,e.render.sprite.xOffset+=-(e.bounds.min.x-e.position.x)/(e.bounds.max.x-e.bounds.min.x),e.render.sprite.yOffset+=-(e.bounds.min.y-e.position.y)/(e.bounds.max.y-e.bounds.min.y)};r.set=function(e,t,n){for(var i in typeof t==`string`&&(i=t,t={},t[i]=n),t)if(Object.prototype.hasOwnProperty.call(t,i))switch(n=t[i],i){case`isStatic`:r.setStatic(e,n);break;case`isSleeping`:o.set(e,n);break;case`mass`:r.setMass(e,n);break;case`density`:r.setDensity(e,n);break;case`inertia`:r.setInertia(e,n);break;case`vertices`:r.setVertices(e,n);break;case`position`:r.setPosition(e,n);break;case`angle`:r.setAngle(e,n);break;case`velocity`:r.setVelocity(e,n);break;case`angularVelocity`:r.setAngularVelocity(e,n);break;case`speed`:r.setSpeed(e,n);break;case`angularSpeed`:r.setAngularSpeed(e,n);break;case`parts`:r.setParts(e,n);break;case`centre`:r.setCentre(e,n);break;default:e[i]=n}},r.setStatic=function(e,t){for(var n=0;n<e.parts.length;n++){var r=e.parts[n];t?(r.isStatic||(r._original={restitution:r.restitution,friction:r.friction,mass:r.mass,inertia:r.inertia,density:r.density,inverseMass:r.inverseMass,inverseInertia:r.inverseInertia}),r.restitution=0,r.friction=1,r.mass=r.inertia=r.density=1/0,r.inverseMass=r.inverseInertia=0,r.positionPrev.x=r.position.x,r.positionPrev.y=r.position.y,r.anglePrev=r.angle,r.angularVelocity=0,r.speed=0,r.angularSpeed=0,r.motion=0):r._original&&=(r.restitution=r._original.restitution,r.friction=r._original.friction,r.mass=r._original.mass,r.inertia=r._original.inertia,r.density=r._original.density,r.inverseMass=r._original.inverseMass,r.inverseInertia=r._original.inverseInertia,null),r.isStatic=t}},r.setMass=function(e,t){e.inertia=e.inertia/(e.mass/6)*(t/6),e.inverseInertia=1/e.inertia,e.mass=t,e.inverseMass=1/e.mass,e.density=e.mass/e.area},r.setDensity=function(e,t){r.setMass(e,t*e.area),e.density=t},r.setInertia=function(e,t){e.inertia=t,e.inverseInertia=1/e.inertia},r.setVertices=function(e,t){e.vertices=t[0].body===e?t:i.create(t,e),e.axes=l.fromVertices(e.vertices),e.area=i.area(e.vertices),r.setMass(e,e.density*e.area);var n=i.centre(e.vertices);i.translate(e.vertices,n,-1),r.setInertia(e,r._inertiaScale*i.inertia(e.vertices,e.mass)),i.translate(e.vertices,e.position),c.update(e.bounds,e.vertices,e.velocity)},r.setParts=function(e,t,n){var a;for(t=t.slice(0),e.parts.length=0,e.parts.push(e),e.parent=e,a=0;a<t.length;a++){var o=t[a];o!==e&&(o.parent=e,e.parts.push(o))}if(e.parts.length!==1){if(n=n===void 0||n,n){var s=[];for(a=0;a<t.length;a++)s=s.concat(t[a].vertices);i.clockwiseSort(s);var c=i.hull(s),l=i.centre(c);r.setVertices(e,c),i.translate(e.vertices,l)}var u=r._totalProperties(e);e.area=u.area,e.parent=e,e.position.x=u.centre.x,e.position.y=u.centre.y,e.positionPrev.x=u.centre.x,e.positionPrev.y=u.centre.y,r.setMass(e,u.mass),r.setInertia(e,u.inertia),r.setPosition(e,u.centre)}},r.setCentre=function(e,t,n){n?(e.positionPrev.x+=t.x,e.positionPrev.y+=t.y,e.position.x+=t.x,e.position.y+=t.y):(e.positionPrev.x=t.x-(e.position.x-e.positionPrev.x),e.positionPrev.y=t.y-(e.position.y-e.positionPrev.y),e.position.x=t.x,e.position.y=t.y)},r.setPosition=function(e,t,n){var r=a.sub(t,e.position);n?(e.positionPrev.x=e.position.x,e.positionPrev.y=e.position.y,e.velocity.x=r.x,e.velocity.y=r.y,e.speed=a.magnitude(r)):(e.positionPrev.x+=r.x,e.positionPrev.y+=r.y);for(var o=0;o<e.parts.length;o++){var s=e.parts[o];s.position.x+=r.x,s.position.y+=r.y,i.translate(s.vertices,r),c.update(s.bounds,s.vertices,e.velocity)}},r.setAngle=function(e,t,n){var r=t-e.angle;n?(e.anglePrev=e.angle,e.angularVelocity=r,e.angularSpeed=Math.abs(r)):e.anglePrev+=r;for(var o=0;o<e.parts.length;o++){var s=e.parts[o];s.angle+=r,i.rotate(s.vertices,r,e.position),l.rotate(s.axes,r),c.update(s.bounds,s.vertices,e.velocity),o>0&&a.rotateAbout(s.position,r,e.position,s.position)}},r.setVelocity=function(e,t){var n=e.deltaTime/r._baseDelta;e.positionPrev.x=e.position.x-t.x*n,e.positionPrev.y=e.position.y-t.y*n,e.velocity.x=(e.position.x-e.positionPrev.x)/n,e.velocity.y=(e.position.y-e.positionPrev.y)/n,e.speed=a.magnitude(e.velocity)},r.getVelocity=function(e){var t=r._baseDelta/e.deltaTime;return{x:(e.position.x-e.positionPrev.x)*t,y:(e.position.y-e.positionPrev.y)*t}},r.getSpeed=function(e){return a.magnitude(r.getVelocity(e))},r.setSpeed=function(e,t){r.setVelocity(e,a.mult(a.normalise(r.getVelocity(e)),t))},r.setAngularVelocity=function(e,t){var n=e.deltaTime/r._baseDelta;e.anglePrev=e.angle-t*n,e.angularVelocity=(e.angle-e.anglePrev)/n,e.angularSpeed=Math.abs(e.angularVelocity)},r.getAngularVelocity=function(e){return(e.angle-e.anglePrev)*r._baseDelta/e.deltaTime},r.getAngularSpeed=function(e){return Math.abs(r.getAngularVelocity(e))},r.setAngularSpeed=function(e,t){r.setAngularVelocity(e,s.sign(r.getAngularVelocity(e))*t)},r.translate=function(e,t,n){r.setPosition(e,a.add(e.position,t),n)},r.rotate=function(e,t,n,i){if(!n)r.setAngle(e,e.angle+t,i);else{var a=Math.cos(t),o=Math.sin(t),s=e.position.x-n.x,c=e.position.y-n.y;r.setPosition(e,{x:n.x+(s*a-c*o),y:n.y+(s*o+c*a)},i),r.setAngle(e,e.angle+t,i)}},r.scale=function(e,t,n,a){var o=0,s=0;a||=e.position;for(var u=0;u<e.parts.length;u++){var d=e.parts[u];i.scale(d.vertices,t,n,a),d.axes=l.fromVertices(d.vertices),d.area=i.area(d.vertices),r.setMass(d,e.density*d.area),i.translate(d.vertices,{x:-d.position.x,y:-d.position.y}),r.setInertia(d,r._inertiaScale*i.inertia(d.vertices,d.mass)),i.translate(d.vertices,{x:d.position.x,y:d.position.y}),u>0&&(o+=d.area,s+=d.inertia),d.position.x=a.x+(d.position.x-a.x)*t,d.position.y=a.y+(d.position.y-a.y)*n,c.update(d.bounds,d.vertices,e.velocity)}e.parts.length>1&&(e.area=o,e.isStatic||(r.setMass(e,e.density*o),r.setInertia(e,s))),e.circleRadius&&(t===n?e.circleRadius*=t:e.circleRadius=null)},r.update=function(e,t){t=(t===void 0?1e3/60:t)*e.timeScale;var n=t*t,o=r._timeCorrection?t/(e.deltaTime||t):1,u=1-e.frictionAir*(t/s._baseDelta),d=(e.position.x-e.positionPrev.x)*o,f=(e.position.y-e.positionPrev.y)*o;e.velocity.x=d*u+e.force.x/e.mass*n,e.velocity.y=f*u+e.force.y/e.mass*n,e.positionPrev.x=e.position.x,e.positionPrev.y=e.position.y,e.position.x+=e.velocity.x,e.position.y+=e.velocity.y,e.deltaTime=t,e.angularVelocity=(e.angle-e.anglePrev)*u*o+e.torque/e.inertia*n,e.anglePrev=e.angle,e.angle+=e.angularVelocity;for(var p=0;p<e.parts.length;p++){var m=e.parts[p];i.translate(m.vertices,e.velocity),p>0&&(m.position.x+=e.velocity.x,m.position.y+=e.velocity.y),e.angularVelocity!==0&&(i.rotate(m.vertices,e.angularVelocity,e.position),l.rotate(m.axes,e.angularVelocity),p>0&&a.rotateAbout(m.position,e.angularVelocity,e.position,m.position)),c.update(m.bounds,m.vertices,e.velocity)}},r.updateVelocities=function(e){var t=r._baseDelta/e.deltaTime,n=e.velocity;n.x=(e.position.x-e.positionPrev.x)*t,n.y=(e.position.y-e.positionPrev.y)*t,e.speed=Math.sqrt(n.x*n.x+n.y*n.y),e.angularVelocity=(e.angle-e.anglePrev)*t,e.angularSpeed=Math.abs(e.angularVelocity)},r.applyForce=function(e,t,n){var r={x:t.x-e.position.x,y:t.y-e.position.y};e.force.x+=n.x,e.force.y+=n.y,e.torque+=r.x*n.y-r.y*n.x},r._totalProperties=function(e){for(var t={mass:0,area:0,inertia:0,centre:{x:0,y:0}},n=e.parts.length===1?0:1;n<e.parts.length;n++){var r=e.parts[n],i=r.mass===1/0?1:r.mass;t.mass+=i,t.area+=r.area,t.inertia+=r.inertia,t.centre=a.add(t.centre,a.mult(r.position,i))}return t.centre=a.div(t.centre,t.mass),t}})()}),(function(e,t,n){var r={};e.exports=r;var i=n(0);(function(){r.on=function(e,t,n){for(var r=t.split(` `),i,a=0;a<r.length;a++)i=r[a],e.events=e.events||{},e.events[i]=e.events[i]||[],e.events[i].push(n);return n},r.off=function(e,t,n){if(!t)e.events={};else{typeof t==`function`&&(n=t,t=i.keys(e.events).join(` `));for(var r=t.split(` `),a=0;a<r.length;a++){var o=e.events[r[a]],s=[];if(n&&o)for(var c=0;c<o.length;c++)o[c]!==n&&s.push(o[c]);e.events[r[a]]=s}}},r.trigger=function(e,t,n){var r,a,o,s,c=e.events;if(c&&i.keys(c).length>0){n||={},r=t.split(` `);for(var l=0;l<r.length;l++)if(a=r[l],o=c[a],o){s=i.clone(n,!1),s.name=a,s.source=e;for(var u=0;u<o.length;u++)o[u].apply(e,[s])}}}})()}),(function(e,t,n){var r={};e.exports=r;var i=n(5),a=n(0),o=n(1),s=n(4);(function(){r.create=function(e){return a.extend({id:a.nextId(),type:`composite`,parent:null,isModified:!1,bodies:[],constraints:[],composites:[],label:`Composite`,plugin:{},cache:{allBodies:null,allConstraints:null,allComposites:null}},e)},r.setModified=function(e,t,n,i){if(e.isModified=t,t&&e.cache&&(e.cache.allBodies=null,e.cache.allConstraints=null,e.cache.allComposites=null),n&&e.parent&&r.setModified(e.parent,t,n,i),i)for(var a=0;a<e.composites.length;a++){var o=e.composites[a];r.setModified(o,t,n,i)}},r.add=function(e,t){var n=[].concat(t);i.trigger(e,`beforeAdd`,{object:t});for(var o=0;o<n.length;o++){var s=n[o];switch(s.type){case`body`:if(s.parent!==s){a.warn(`Composite.add: skipped adding a compound body part (you must add its parent instead)`);break}r.addBody(e,s);break;case`constraint`:r.addConstraint(e,s);break;case`composite`:r.addComposite(e,s);break;case`mouseConstraint`:r.addConstraint(e,s.constraint)}}return i.trigger(e,`afterAdd`,{object:t}),e},r.remove=function(e,t,n){var a=[].concat(t);i.trigger(e,`beforeRemove`,{object:t});for(var o=0;o<a.length;o++){var s=a[o];switch(s.type){case`body`:r.removeBody(e,s,n);break;case`constraint`:r.removeConstraint(e,s,n);break;case`composite`:r.removeComposite(e,s,n);break;case`mouseConstraint`:r.removeConstraint(e,s.constraint)}}return i.trigger(e,`afterRemove`,{object:t}),e},r.addComposite=function(e,t){return e.composites.push(t),t.parent=e,r.setModified(e,!0,!0,!1),e},r.removeComposite=function(e,t,n){var i=a.indexOf(e.composites,t);if(i!==-1){var o=r.allBodies(t);r.removeCompositeAt(e,i);for(var s=0;s<o.length;s++)o[s].sleepCounter=0}if(n)for(var s=0;s<e.composites.length;s++)r.removeComposite(e.composites[s],t,!0);return e},r.removeCompositeAt=function(e,t){return e.composites.splice(t,1),r.setModified(e,!0,!0,!1),e},r.addBody=function(e,t){return e.bodies.push(t),r.setModified(e,!0,!0,!1),e},r.removeBody=function(e,t,n){var i=a.indexOf(e.bodies,t);if(i!==-1&&(r.removeBodyAt(e,i),t.sleepCounter=0),n)for(var o=0;o<e.composites.length;o++)r.removeBody(e.composites[o],t,!0);return e},r.removeBodyAt=function(e,t){return e.bodies.splice(t,1),r.setModified(e,!0,!0,!1),e},r.addConstraint=function(e,t){return e.constraints.push(t),r.setModified(e,!0,!0,!1),e},r.removeConstraint=function(e,t,n){var i=a.indexOf(e.constraints,t);if(i!==-1&&r.removeConstraintAt(e,i),n)for(var o=0;o<e.composites.length;o++)r.removeConstraint(e.composites[o],t,!0);return e},r.removeConstraintAt=function(e,t){return e.constraints.splice(t,1),r.setModified(e,!0,!0,!1),e},r.clear=function(e,t,n){if(n)for(var i=0;i<e.composites.length;i++)r.clear(e.composites[i],t,!0);return t?e.bodies=e.bodies.filter(function(e){return e.isStatic}):e.bodies.length=0,e.constraints.length=0,e.composites.length=0,r.setModified(e,!0,!0,!1),e},r.allBodies=function(e){if(e.cache&&e.cache.allBodies)return e.cache.allBodies;for(var t=[].concat(e.bodies),n=0;n<e.composites.length;n++)t=t.concat(r.allBodies(e.composites[n]));return e.cache&&(e.cache.allBodies=t),t},r.allConstraints=function(e){if(e.cache&&e.cache.allConstraints)return e.cache.allConstraints;for(var t=[].concat(e.constraints),n=0;n<e.composites.length;n++)t=t.concat(r.allConstraints(e.composites[n]));return e.cache&&(e.cache.allConstraints=t),t},r.allComposites=function(e){if(e.cache&&e.cache.allComposites)return e.cache.allComposites;for(var t=[].concat(e.composites),n=0;n<e.composites.length;n++)t=t.concat(r.allComposites(e.composites[n]));return e.cache&&(e.cache.allComposites=t),t},r.get=function(e,t,n){var i,a;switch(n){case`body`:i=r.allBodies(e);break;case`constraint`:i=r.allConstraints(e);break;case`composite`:i=r.allComposites(e).concat(e)}return i?(a=i.filter(function(e){return e.id.toString()===t.toString()}),a.length===0?null:a[0]):null},r.move=function(e,t,n){return r.remove(e,t),r.add(n,t),e},r.rebase=function(e){for(var t=r.allBodies(e).concat(r.allConstraints(e)).concat(r.allComposites(e)),n=0;n<t.length;n++)t[n].id=a.nextId();return e},r.translate=function(e,t,n){for(var i=n?r.allBodies(e):e.bodies,a=0;a<i.length;a++)s.translate(i[a],t);return e},r.rotate=function(e,t,n,i){for(var a=Math.cos(t),o=Math.sin(t),c=i?r.allBodies(e):e.bodies,l=0;l<c.length;l++){var u=c[l],d=u.position.x-n.x,f=u.position.y-n.y;s.setPosition(u,{x:n.x+(d*a-f*o),y:n.y+(d*o+f*a)}),s.rotate(u,t)}return e},r.scale=function(e,t,n,i,a){for(var o=a?r.allBodies(e):e.bodies,c=0;c<o.length;c++){var l=o[c],u=l.position.x-i.x,d=l.position.y-i.y;s.setPosition(l,{x:i.x+u*t,y:i.y+d*n}),s.scale(l,t,n)}return e},r.bounds=function(e){for(var t=r.allBodies(e),n=[],i=0;i<t.length;i+=1){var a=t[i];n.push(a.bounds.min,a.bounds.max)}return o.create(n)}})()}),(function(e,t,n){var r={};e.exports=r;var i=n(4),a=n(5),o=n(0);(function(){r._motionWakeThreshold=.18,r._motionSleepThreshold=.08,r._minBias=.9,r.update=function(e,t){for(var n=t/o._baseDelta,a=r._motionSleepThreshold,s=0;s<e.length;s++){var c=e[s],l=i.getSpeed(c),u=i.getAngularSpeed(c),d=l*l+u*u;if(c.force.x!==0||c.force.y!==0)r.set(c,!1);else{var f=Math.min(c.motion,d),p=Math.max(c.motion,d);c.motion=r._minBias*f+(1-r._minBias)*p,c.sleepThreshold>0&&c.motion<a?(c.sleepCounter+=1,c.sleepCounter>=c.sleepThreshold/n&&r.set(c,!0)):c.sleepCounter>0&&--c.sleepCounter}}},r.afterCollisions=function(e){for(var t=r._motionSleepThreshold,n=0;n<e.length;n++){var i=e[n];if(i.isActive){var a=i.collision,o=a.bodyA.parent,s=a.bodyB.parent;if(!(o.isSleeping&&s.isSleeping||o.isStatic||s.isStatic)&&(o.isSleeping||s.isSleeping)){var c=o.isSleeping&&!o.isStatic?o:s,l=c===o?s:o;!c.isStatic&&l.motion>t&&r.set(c,!1)}}}},r.set=function(e,t){var n=e.isSleeping;t?(e.isSleeping=!0,e.sleepCounter=e.sleepThreshold,e.positionImpulse.x=0,e.positionImpulse.y=0,e.positionPrev.x=e.position.x,e.positionPrev.y=e.position.y,e.anglePrev=e.angle,e.speed=0,e.angularSpeed=0,e.motion=0,n||a.trigger(e,`sleepStart`)):(e.isSleeping=!1,e.sleepCounter=0,n&&a.trigger(e,`sleepEnd`))}})()}),(function(e,t,n){var r={};e.exports=r;var i=n(3),a=n(9);(function(){var e=[],t={overlap:0,axis:null},n={overlap:0,axis:null};r.create=function(e,t){return{pair:null,collided:!1,bodyA:e,bodyB:t,parentA:e.parent,parentB:t.parent,depth:0,normal:{x:0,y:0},tangent:{x:0,y:0},penetration:{x:0,y:0},supports:[null,null],supportCount:0}},r.collides=function(e,o,s){if(r._overlapAxes(t,e.vertices,o.vertices,e.axes),t.overlap<=0||(r._overlapAxes(n,o.vertices,e.vertices,o.axes),n.overlap<=0))return null;var c=s&&s.table[a.id(e,o)],l;c?l=c.collision:(l=r.create(e,o),l.collided=!0,l.bodyA=e.id<o.id?e:o,l.bodyB=e.id<o.id?o:e,l.parentA=l.bodyA.parent,l.parentB=l.bodyB.parent),e=l.bodyA,o=l.bodyB;var u=t.overlap<n.overlap?t:n,d=l.normal,f=l.tangent,p=l.penetration,m=l.supports,h=u.overlap,g=u.axis,_=g.x,v=g.y,y=o.position.x-e.position.x,b=o.position.y-e.position.y;_*y+v*b>=0&&(_=-_,v=-v),d.x=_,d.y=v,f.x=-v,f.y=_,p.x=_*h,p.y=v*h,l.depth=h;var x=r._findSupports(e,o,d,1),S=0;if(i.contains(e.vertices,x[0])&&(m[S++]=x[0]),i.contains(e.vertices,x[1])&&(m[S++]=x[1]),S<2){var C=r._findSupports(o,e,d,-1);i.contains(o.vertices,C[0])&&(m[S++]=C[0]),S<2&&i.contains(o.vertices,C[1])&&(m[S++]=C[1])}return S===0&&(m[S++]=x[0]),l.supportCount=S,l},r._overlapAxes=function(e,t,n,r){for(var i=t.length,a=n.length,o=t[0].x,s=t[0].y,c=n[0].x,l=n[0].y,u=r.length,d=Number.MAX_VALUE,f=0,p,m,h,g,_=0,v;_<u;_++){var y=r[_],b=y.x,x=y.y,S=o*b+s*x,C=c*b+l*x,w=S,T=C;for(v=1;v<i;v+=1)g=t[v].x*b+t[v].y*x,g>w?w=g:g<S&&(S=g);for(v=1;v<a;v+=1)g=n[v].x*b+n[v].y*x,g>T?T=g:g<C&&(C=g);if(m=w-C,h=T-S,p=m<h?m:h,p<d&&(d=p,f=_,p<=0))break}e.axis=r[f],e.overlap=d},r._findSupports=function(t,n,r,i){for(var a=n.vertices,o=a.length,s=t.position.x,c=t.position.y,l=r.x*i,u=r.y*i,d=a[0],f=d,p=l*(s-f.x)+u*(c-f.y),m,h,g=1;g<o;g+=1)f=a[g],h=l*(s-f.x)+u*(c-f.y),h<p&&(p=h,d=f);return m=a[(o+d.index-1)%o],p=l*(s-m.x)+u*(c-m.y),f=a[(d.index+1)%o],l*(s-f.x)+u*(c-f.y)<p?(e[0]=d,e[1]=f,e):(e[0]=d,e[1]=m,e)}})()}),(function(e,t,n){var r={};e.exports=r;var i=n(16);(function(){r.create=function(e,t){var n=e.bodyA,a=e.bodyB,o={id:r.id(n,a),bodyA:n,bodyB:a,collision:e,contacts:[i.create(),i.create()],contactCount:0,separation:0,isActive:!0,isSensor:n.isSensor||a.isSensor,timeCreated:t,timeUpdated:t,inverseMass:0,friction:0,frictionStatic:0,restitution:0,slop:0};return r.update(o,e,t),o},r.update=function(e,t,n){var r=t.supports,i=t.supportCount,a=e.contacts,o=t.parentA,s=t.parentB;e.isActive=!0,e.timeUpdated=n,e.collision=t,e.separation=t.depth,e.inverseMass=o.inverseMass+s.inverseMass,e.friction=o.friction<s.friction?o.friction:s.friction,e.frictionStatic=o.frictionStatic>s.frictionStatic?o.frictionStatic:s.frictionStatic,e.restitution=o.restitution>s.restitution?o.restitution:s.restitution,e.slop=o.slop>s.slop?o.slop:s.slop,e.contactCount=i,t.pair=e;var c=r[0],l=a[0],u=r[1],d=a[1];(d.vertex===c||l.vertex===u)&&(a[1]=l,a[0]=l=d,d=a[1]),l.vertex=c,d.vertex=u},r.setActive=function(e,t,n){t?(e.isActive=!0,e.timeUpdated=n):(e.isActive=!1,e.contactCount=0)},r.id=function(e,t){return e.id<t.id?e.id.toString(36)+`:`+t.id.toString(36):t.id.toString(36)+`:`+e.id.toString(36)}})()}),(function(e,t,n){var r={};e.exports=r;var i=n(3),a=n(2),o=n(7),s=n(1),c=n(11),l=n(0);(function(){r._warming=.4,r._torqueDampen=1,r._minLength=1e-6,r.create=function(e){var t=e;t.bodyA&&!t.pointA&&(t.pointA={x:0,y:0}),t.bodyB&&!t.pointB&&(t.pointB={x:0,y:0});var n=t.bodyA?a.add(t.bodyA.position,t.pointA):t.pointA,r=t.bodyB?a.add(t.bodyB.position,t.pointB):t.pointB,i=a.magnitude(a.sub(n,r));t.length=t.length===void 0?i:t.length,t.id=t.id||l.nextId(),t.label=t.label||`Constraint`,t.type=`constraint`,t.stiffness=t.stiffness||(t.length>0?1:.7),t.damping=t.damping||0,t.angularStiffness=t.angularStiffness||0,t.angleA=t.bodyA?t.bodyA.angle:t.angleA,t.angleB=t.bodyB?t.bodyB.angle:t.angleB,t.plugin={};var o={visible:!0,lineWidth:2,strokeStyle:`#ffffff`,type:`line`,anchors:!0};return t.length===0&&t.stiffness>.1?(o.type=`pin`,o.anchors=!1):t.stiffness<.9&&(o.type=`spring`),t.render=l.extend(o,t.render),t},r.preSolveAll=function(e){for(var t=0;t<e.length;t+=1){var n=e[t],r=n.constraintImpulse;n.isStatic||r.x===0&&r.y===0&&r.angle===0||(n.position.x+=r.x,n.position.y+=r.y,n.angle+=r.angle)}},r.solveAll=function(e,t){for(var n=l.clamp(t/l._baseDelta,0,1),i=0;i<e.length;i+=1){var a=e[i],o=!a.bodyA||a.bodyA&&a.bodyA.isStatic,s=!a.bodyB||a.bodyB&&a.bodyB.isStatic;(o||s)&&r.solve(e[i],n)}for(i=0;i<e.length;i+=1)a=e[i],o=!a.bodyA||a.bodyA&&a.bodyA.isStatic,s=!a.bodyB||a.bodyB&&a.bodyB.isStatic,!o&&!s&&r.solve(e[i],n)},r.solve=function(e,t){var n=e.bodyA,i=e.bodyB,o=e.pointA,s=e.pointB;if(n||i){n&&!n.isStatic&&(a.rotate(o,n.angle-e.angleA,o),e.angleA=n.angle),i&&!i.isStatic&&(a.rotate(s,i.angle-e.angleB,s),e.angleB=i.angle);var c=o,l=s;if(n&&(c=a.add(n.position,o)),i&&(l=a.add(i.position,s)),c&&l){var u=a.sub(c,l),d=a.magnitude(u);d<r._minLength&&(d=r._minLength);var f=(d-e.length)/d,p=e.stiffness>=1||e.length===0?e.stiffness*t:e.stiffness*t*t,m=e.damping*t,h=a.mult(u,f*p),g=(n?n.inverseMass:0)+(i?i.inverseMass:0),_=g+((n?n.inverseInertia:0)+(i?i.inverseInertia:0)),v,y,b,x,S;if(m>0){var C=a.create();b=a.div(u,d),S=a.sub(i&&a.sub(i.position,i.positionPrev)||C,n&&a.sub(n.position,n.positionPrev)||C),x=a.dot(b,S)}n&&!n.isStatic&&(y=n.inverseMass/g,n.constraintImpulse.x-=h.x*y,n.constraintImpulse.y-=h.y*y,n.position.x-=h.x*y,n.position.y-=h.y*y,m>0&&(n.positionPrev.x-=m*b.x*x*y,n.positionPrev.y-=m*b.y*x*y),v=a.cross(o,h)/_*r._torqueDampen*n.inverseInertia*(1-e.angularStiffness),n.constraintImpulse.angle-=v,n.angle-=v),i&&!i.isStatic&&(y=i.inverseMass/g,i.constraintImpulse.x+=h.x*y,i.constraintImpulse.y+=h.y*y,i.position.x+=h.x*y,i.position.y+=h.y*y,m>0&&(i.positionPrev.x+=m*b.x*x*y,i.positionPrev.y+=m*b.y*x*y),v=a.cross(s,h)/_*r._torqueDampen*i.inverseInertia*(1-e.angularStiffness),i.constraintImpulse.angle+=v,i.angle+=v)}}},r.postSolveAll=function(e){for(var t=0;t<e.length;t++){var n=e[t],l=n.constraintImpulse;if(!(n.isStatic||l.x===0&&l.y===0&&l.angle===0)){o.set(n,!1);for(var u=0;u<n.parts.length;u++){var d=n.parts[u];i.translate(d.vertices,l),u>0&&(d.position.x+=l.x,d.position.y+=l.y),l.angle!==0&&(i.rotate(d.vertices,l.angle,n.position),c.rotate(d.axes,l.angle),u>0&&a.rotateAbout(d.position,l.angle,n.position,d.position)),s.update(d.bounds,d.vertices,n.velocity)}l.angle*=r._warming,l.x*=r._warming,l.y*=r._warming}}},r.pointAWorld=function(e){return{x:(e.bodyA?e.bodyA.position.x:0)+(e.pointA?e.pointA.x:0),y:(e.bodyA?e.bodyA.position.y:0)+(e.pointA?e.pointA.y:0)}},r.pointBWorld=function(e){return{x:(e.bodyB?e.bodyB.position.x:0)+(e.pointB?e.pointB.x:0),y:(e.bodyB?e.bodyB.position.y:0)+(e.pointB?e.pointB.y:0)}},r.currentLength=function(e){var t=(e.bodyA?e.bodyA.position.x:0)+(e.pointA?e.pointA.x:0),n=(e.bodyA?e.bodyA.position.y:0)+(e.pointA?e.pointA.y:0),r=(e.bodyB?e.bodyB.position.x:0)+(e.pointB?e.pointB.x:0),i=(e.bodyB?e.bodyB.position.y:0)+(e.pointB?e.pointB.y:0),a=t-r,o=n-i;return Math.sqrt(a*a+o*o)}})()}),(function(e,t,n){var r={};e.exports=r;var i=n(2),a=n(0);(function(){r.fromVertices=function(e){for(var t={},n=0;n<e.length;n++){var r=(n+1)%e.length,o=i.normalise({x:e[r].y-e[n].y,y:e[n].x-e[r].x}),s=o.y===0?1/0:o.x/o.y;s=s.toFixed(3).toString(),t[s]=o}return a.values(t)},r.rotate=function(e,t){if(t!==0)for(var n=Math.cos(t),r=Math.sin(t),i=0;i<e.length;i++){var a=e[i],o=a.x*n-a.y*r;a.y=a.x*r+a.y*n,a.x=o}}})()}),(function(e,t,n){var r={};e.exports=r;var i=n(3),a=n(0),o=n(4),s=n(1),c=n(2);(function(){r.rectangle=function(e,t,n,r,s){s||={};var c={label:`Rectangle Body`,position:{x:e,y:t},vertices:i.fromPath(`L 0 0 L `+n+` 0 L `+n+` `+r+` L 0 `+r)};if(s.chamfer){var l=s.chamfer;c.vertices=i.chamfer(c.vertices,l.radius,l.quality,l.qualityMin,l.qualityMax),delete s.chamfer}return o.create(a.extend({},c,s))},r.trapezoid=function(e,t,n,r,s,c){c||={},s>=1&&a.warn(`Bodies.trapezoid: slope parameter must be < 1.`),s*=.5;var l=(1-s*2)*n,u=n*s,d=u+l,f=d+u,p=s<.5?`L 0 0 L `+u+` `+-r+` L `+d+` `+-r+` L `+f+` 0`:`L 0 0 L `+d+` `+-r+` L `+f+` 0`,m={label:`Trapezoid Body`,position:{x:e,y:t},vertices:i.fromPath(p)};if(c.chamfer){var h=c.chamfer;m.vertices=i.chamfer(m.vertices,h.radius,h.quality,h.qualityMin,h.qualityMax),delete c.chamfer}return o.create(a.extend({},m,c))},r.circle=function(e,t,n,i,o){i||={};var s={label:`Circle Body`,circleRadius:n};o||=25;var c=Math.ceil(Math.max(10,Math.min(o,n)));return c%2==1&&(c+=1),r.polygon(e,t,c,n,a.extend({},s,i))},r.polygon=function(e,t,n,s,c){if(c||={},n<3)return r.circle(e,t,s,c);for(var l=2*Math.PI/n,u=``,d=l*.5,f=0;f<n;f+=1){var p=d+f*l,m=Math.cos(p)*s,h=Math.sin(p)*s;u+=`L `+m.toFixed(3)+` `+h.toFixed(3)+` `}var g={label:`Polygon Body`,position:{x:e,y:t},vertices:i.fromPath(u)};if(c.chamfer){var _=c.chamfer;g.vertices=i.chamfer(g.vertices,_.radius,_.quality,_.qualityMin,_.qualityMax),delete c.chamfer}return o.create(a.extend({},g,c))},r.fromVertices=function(e,t,n,r,l,u,d,f){var p=a.getDecomp(),m=!!(p&&p.quickDecomp),h,g,_,v,y,b,x,S,C,w;for(r||={},g=[],l=l!==void 0&&l,u=u===void 0?.01:u,d=d===void 0?10:d,f=f===void 0?.01:f,a.isArray(n[0])||(n=[n]),C=0;C<n.length;C+=1)if(y=n[C],_=i.isConvex(y),v=!_,v&&!m&&a.warnOnce(`Bodies.fromVertices: Install the 'poly-decomp' library and use Common.setDecomp or provide 'decomp' as a global to decompose concave vertices.`),_||!m)y=_?i.clockwiseSort(y):i.hull(y),g.push({position:{x:e,y:t},vertices:y});else{var T=y.map(function(e){return[e.x,e.y]});p.makeCCW(T),u!==!1&&p.removeCollinearPoints(T,u),f!==!1&&p.removeDuplicatePoints&&p.removeDuplicatePoints(T,f);var E=p.quickDecomp(T);for(b=0;b<E.length;b++){var D=E[b].map(function(e){return{x:e[0],y:e[1]}});d>0&&i.area(D)<d||g.push({position:i.centre(D),vertices:D})}}for(b=0;b<g.length;b++)g[b]=o.create(a.extend(g[b],r));if(l){var O=5;for(b=0;b<g.length;b++){var k=g[b];for(x=b+1;x<g.length;x++){var A=g[x];if(s.overlaps(k.bounds,A.bounds)){var j=k.vertices,ee=A.vertices;for(S=0;S<k.vertices.length;S++)for(w=0;w<A.vertices.length;w++){var M=c.magnitudeSquared(c.sub(j[(S+1)%j.length],ee[w])),N=c.magnitudeSquared(c.sub(j[S],ee[(w+1)%ee.length]));M<O&&N<O&&(j[S].isInternal=!0,ee[w].isInternal=!0)}}}}}return g.length>1?(h=o.create(a.extend({parts:g.slice(0)},r)),o.setPosition(h,{x:e,y:t}),h):g[0]}})()}),(function(e,t,n){var r={};e.exports=r;var i=n(0),a=n(8);(function(){r.create=function(e){return i.extend({bodies:[],collisions:[],pairs:null},e)},r.setBodies=function(e,t){e.bodies=t.slice(0)},r.clear=function(e){e.bodies=[],e.collisions=[]},r.collisions=function(e){var t=e.pairs,n=e.bodies,i=n.length,o=r.canCollide,s=a.collides,c=e.collisions,l=0,u,d;for(n.sort(r._compareBoundsX),u=0;u<i;u++){var f=n[u],p=f.bounds,m=f.bounds.max.x,h=f.bounds.max.y,g=f.bounds.min.y,_=f.isStatic||f.isSleeping,v=f.parts.length,y=v===1;for(d=u+1;d<i;d++){var b=n[d],x=b.bounds;if(x.min.x>m)break;if(!(h<x.min.y||g>x.max.y)&&!(_&&(b.isStatic||b.isSleeping))&&o(f.collisionFilter,b.collisionFilter)){var S=b.parts.length;if(y&&S===1){var C=s(f,b,t);C&&(c[l++]=C)}else for(var w=+(v>1),T=+(S>1),E=w;E<v;E++)for(var D=f.parts[E],p=D.bounds,O=T;O<S;O++){var k=b.parts[O],x=k.bounds;if(!(p.min.x>x.max.x||p.max.x<x.min.x||p.max.y<x.min.y||p.min.y>x.max.y)){var C=s(D,k,t);C&&(c[l++]=C)}}}}}return c.length!==l&&(c.length=l),c},r.canCollide=function(e,t){return e.group===t.group&&e.group!==0?e.group>0:(e.mask&t.category)!==0&&(t.mask&e.category)!==0},r._compareBoundsX=function(e,t){return e.bounds.min.x-t.bounds.min.x}})()}),(function(e,t,n){var r={};e.exports=r;var i=n(0);(function(){r.create=function(e){var t={};return e||i.log(`Mouse.create: element was undefined, defaulting to document.body`,`warn`),t.element=e||document.body,t.absolute={x:0,y:0},t.position={x:0,y:0},t.mousedownPosition={x:0,y:0},t.mouseupPosition={x:0,y:0},t.offset={x:0,y:0},t.scale={x:1,y:1},t.wheelDelta=0,t.button=-1,t.pixelRatio=parseInt(t.element.getAttribute(`data-pixel-ratio`),10)||1,t.sourceEvents={mousemove:null,mousedown:null,mouseup:null,mousewheel:null},t.mousemove=function(e){var n=r._getRelativeMousePosition(e,t.element,t.pixelRatio);e.changedTouches&&(t.button=0,e.preventDefault()),t.absolute.x=n.x,t.absolute.y=n.y,t.position.x=t.absolute.x*t.scale.x+t.offset.x,t.position.y=t.absolute.y*t.scale.y+t.offset.y,t.sourceEvents.mousemove=e},t.mousedown=function(e){var n=r._getRelativeMousePosition(e,t.element,t.pixelRatio);e.changedTouches?(t.button=0,e.preventDefault()):t.button=e.button,t.absolute.x=n.x,t.absolute.y=n.y,t.position.x=t.absolute.x*t.scale.x+t.offset.x,t.position.y=t.absolute.y*t.scale.y+t.offset.y,t.mousedownPosition.x=t.position.x,t.mousedownPosition.y=t.position.y,t.sourceEvents.mousedown=e},t.mouseup=function(e){var n=r._getRelativeMousePosition(e,t.element,t.pixelRatio);e.changedTouches&&e.preventDefault(),t.button=-1,t.absolute.x=n.x,t.absolute.y=n.y,t.position.x=t.absolute.x*t.scale.x+t.offset.x,t.position.y=t.absolute.y*t.scale.y+t.offset.y,t.mouseupPosition.x=t.position.x,t.mouseupPosition.y=t.position.y,t.sourceEvents.mouseup=e},t.mousewheel=function(e){t.wheelDelta=Math.max(-1,Math.min(1,e.wheelDelta||-e.detail)),e.preventDefault(),t.sourceEvents.mousewheel=e},r.setElement(t,t.element),t},r.setElement=function(e,t){e.element=t,t.addEventListener(`mousemove`,e.mousemove,{passive:!0}),t.addEventListener(`mousedown`,e.mousedown,{passive:!0}),t.addEventListener(`mouseup`,e.mouseup,{passive:!0}),t.addEventListener(`wheel`,e.mousewheel,{passive:!1}),t.addEventListener(`touchmove`,e.mousemove,{passive:!1}),t.addEventListener(`touchstart`,e.mousedown,{passive:!1}),t.addEventListener(`touchend`,e.mouseup,{passive:!1})},r.clearSourceEvents=function(e){e.sourceEvents.mousemove=null,e.sourceEvents.mousedown=null,e.sourceEvents.mouseup=null,e.sourceEvents.mousewheel=null,e.wheelDelta=0},r.setOffset=function(e,t){e.offset.x=t.x,e.offset.y=t.y,e.position.x=e.absolute.x*e.scale.x+e.offset.x,e.position.y=e.absolute.y*e.scale.y+e.offset.y},r.setScale=function(e,t){e.scale.x=t.x,e.scale.y=t.y,e.position.x=e.absolute.x*e.scale.x+e.offset.x,e.position.y=e.absolute.y*e.scale.y+e.offset.y},r._getRelativeMousePosition=function(e,t,n){var r=t.getBoundingClientRect(),i=document.documentElement||document.body.parentNode||document.body,a=window.pageXOffset===void 0?i.scrollLeft:window.pageXOffset,o=window.pageYOffset===void 0?i.scrollTop:window.pageYOffset,s=e.changedTouches,c,l;return s?(c=s[0].pageX-r.left-a,l=s[0].pageY-r.top-o):(c=e.pageX-r.left-a,l=e.pageY-r.top-o),{x:c/(t.clientWidth/(t.width||t.clientWidth)*n),y:l/(t.clientHeight/(t.height||t.clientHeight)*n)}}})()}),(function(e,t,n){var r={};e.exports=r;var i=n(0);(function(){r._registry={},r.register=function(e){if(r.isPlugin(e)||i.warn(`Plugin.register:`,r.toString(e),`does not implement all required fields.`),e.name in r._registry){var t=r._registry[e.name],n=r.versionParse(e.version).number,a=r.versionParse(t.version).number;n>a?(i.warn(`Plugin.register:`,r.toString(t),`was upgraded to`,r.toString(e)),r._registry[e.name]=e):n<a?i.warn(`Plugin.register:`,r.toString(t),`can not be downgraded to`,r.toString(e)):e!==t&&i.warn(`Plugin.register:`,r.toString(e),`is already registered to different plugin object`)}else r._registry[e.name]=e;return e},r.resolve=function(e){return r._registry[r.dependencyParse(e).name]},r.toString=function(e){return typeof e==`string`?e:(e.name||`anonymous`)+`@`+(e.version||e.range||`0.0.0`)},r.isPlugin=function(e){return e&&e.name&&e.version&&e.install},r.isUsed=function(e,t){return e.used.indexOf(t)>-1},r.isFor=function(e,t){var n=e.for&&r.dependencyParse(e.for);return!e.for||t.name===n.name&&r.versionSatisfies(t.version,n.range)},r.use=function(e,t){if(e.uses=(e.uses||[]).concat(t||[]),e.uses.length===0)i.warn(`Plugin.use:`,r.toString(e),`does not specify any dependencies to install.`);else{for(var n=r.dependencies(e),a=i.topologicalSort(n),o=[],s=0;s<a.length;s+=1)if(a[s]!==e.name){var c=r.resolve(a[s]);c?r.isUsed(e,c.name)||(r.isFor(c,e)||(i.warn(`Plugin.use:`,r.toString(c),`is for`,c.for,`but installed on`,r.toString(e)+`.`),c._warned=!0),c.install?c.install(e):(i.warn(`Plugin.use:`,r.toString(c),`does not specify an install function.`),c._warned=!0),c._warned?(o.push(`🔶 `+r.toString(c)),delete c._warned):o.push(`✅ `+r.toString(c)),e.used.push(c.name)):o.push(`❌ `+a[s])}o.length>0&&i.info(o.join(`  `))}},r.dependencies=function(e,t){var n=r.dependencyParse(e),a=n.name;if(t||={},!(a in t)){e=r.resolve(e)||e,t[a]=i.map(e.uses||[],function(t){r.isPlugin(t)&&r.register(t);var a=r.dependencyParse(t),o=r.resolve(t);return o&&!r.versionSatisfies(o.version,a.range)?(i.warn(`Plugin.dependencies:`,r.toString(o),`does not satisfy`,r.toString(a),`used by`,r.toString(n)+`.`),o._warned=!0,e._warned=!0):o||(i.warn(`Plugin.dependencies:`,r.toString(t),`used by`,r.toString(n),`could not be resolved.`),e._warned=!0),a.name});for(var o=0;o<t[a].length;o+=1)r.dependencies(t[a][o],t);return t}},r.dependencyParse=function(e){return i.isString(e)?(/^[\w-]+(@(\*|[\^~]?\d+\.\d+\.\d+(-[0-9A-Za-z-+]+)?))?$/.test(e)||i.warn(`Plugin.dependencyParse:`,e,`is not a valid dependency string.`),{name:e.split(`@`)[0],range:e.split(`@`)[1]||`*`}):{name:e.name,range:e.range||e.version}},r.versionParse=function(e){var t=/^(\*)|(\^|~|>=|>)?\s*((\d+)\.(\d+)\.(\d+))(-[0-9A-Za-z-+]+)?$/;t.test(e)||i.warn(`Plugin.versionParse:`,e,`is not a valid version or range.`);var n=t.exec(e),r=Number(n[4]),a=Number(n[5]),o=Number(n[6]);return{isRange:!!(n[1]||n[2]),version:n[3],range:e,operator:n[1]||n[2]||``,major:r,minor:a,patch:o,parts:[r,a,o],prerelease:n[7],number:r*1e8+a*1e4+o}},r.versionSatisfies=function(e,t){t||=`*`;var n=r.versionParse(t),i=r.versionParse(e);if(n.isRange){if(n.operator===`*`||e===`*`)return!0;if(n.operator===`>`)return i.number>n.number;if(n.operator===`>=`)return i.number>=n.number;if(n.operator===`~`)return i.major===n.major&&i.minor===n.minor&&i.patch>=n.patch;if(n.operator===`^`)return n.major>0?i.major===n.major&&i.number>=n.number:n.minor>0?i.minor===n.minor&&i.patch>=n.patch:i.patch===n.patch}return e===t||e===`*`}})()}),(function(e,t){var n={};e.exports=n,(function(){n.create=function(e){return{vertex:e,normalImpulse:0,tangentImpulse:0}}})()}),(function(e,t,n){var r={};e.exports=r;var i=n(7),a=n(18),o=n(13),s=n(19),c=n(5),l=n(6),u=n(10),d=n(0),f=n(4);(function(){r._deltaMax=1e3/60,r.create=function(e){e||={};var t=d.extend({positionIterations:6,velocityIterations:4,constraintIterations:2,enableSleeping:!1,events:[],plugin:{},gravity:{x:0,y:1,scale:.001},timing:{timestamp:0,timeScale:1,lastDelta:0,lastElapsed:0,lastUpdatesPerFrame:0}},e);return t.world=e.world||l.create({label:`World`}),t.pairs=e.pairs||s.create(),t.detector=e.detector||o.create(),t.detector.pairs=t.pairs,t.grid={buckets:[]},t.world.gravity=t.gravity,t.broadphase=t.grid,t.metrics={},t},r.update=function(e,t){var n=d.now(),f=e.world,p=e.detector,m=e.pairs,h=e.timing,g=h.timestamp,_;t>r._deltaMax&&d.warnOnce(`Matter.Engine.update: delta argument is recommended to be less than or equal to`,r._deltaMax.toFixed(3),`ms.`),t=t===void 0?d._baseDelta:t,t*=h.timeScale,h.timestamp+=t,h.lastDelta=t;var v={timestamp:h.timestamp,delta:t};c.trigger(e,`beforeUpdate`,v);var y=l.allBodies(f),b=l.allConstraints(f);for(f.isModified&&(o.setBodies(p,y),l.setModified(f,!1,!1,!0)),e.enableSleeping&&i.update(y,t),r._bodiesApplyGravity(y,e.gravity),t>0&&r._bodiesUpdate(y,t),c.trigger(e,`beforeSolve`,v),u.preSolveAll(y),_=0;_<e.constraintIterations;_++)u.solveAll(b,t);u.postSolveAll(y);var x=o.collisions(p);s.update(m,x,g),e.enableSleeping&&i.afterCollisions(m.list),m.collisionStart.length>0&&c.trigger(e,`collisionStart`,{pairs:m.collisionStart,timestamp:h.timestamp,delta:t});var S=d.clamp(20/e.positionIterations,0,1);for(a.preSolvePosition(m.list),_=0;_<e.positionIterations;_++)a.solvePosition(m.list,t,S);for(a.postSolvePosition(y),u.preSolveAll(y),_=0;_<e.constraintIterations;_++)u.solveAll(b,t);for(u.postSolveAll(y),a.preSolveVelocity(m.list),_=0;_<e.velocityIterations;_++)a.solveVelocity(m.list,t);return r._bodiesUpdateVelocities(y),m.collisionActive.length>0&&c.trigger(e,`collisionActive`,{pairs:m.collisionActive,timestamp:h.timestamp,delta:t}),m.collisionEnd.length>0&&c.trigger(e,`collisionEnd`,{pairs:m.collisionEnd,timestamp:h.timestamp,delta:t}),r._bodiesClearForces(y),c.trigger(e,`afterUpdate`,v),e.timing.lastElapsed=d.now()-n,e},r.merge=function(e,t){if(d.extend(e,t),t.world){e.world=t.world,r.clear(e);for(var n=l.allBodies(e.world),a=0;a<n.length;a++){var o=n[a];i.set(o,!1),o.id=d.nextId()}}},r.clear=function(e){s.clear(e.pairs),o.clear(e.detector)},r._bodiesClearForces=function(e){for(var t=e.length,n=0;n<t;n++){var r=e[n];r.force.x=0,r.force.y=0,r.torque=0}},r._bodiesApplyGravity=function(e,t){var n=t.scale===void 0?.001:t.scale,r=e.length;if(!(t.x===0&&t.y===0||n===0))for(var i=0;i<r;i++){var a=e[i];a.isStatic||a.isSleeping||(a.force.y+=a.mass*t.y*n,a.force.x+=a.mass*t.x*n)}},r._bodiesUpdate=function(e,t){for(var n=e.length,r=0;r<n;r++){var i=e[r];i.isStatic||i.isSleeping||f.update(i,t)}},r._bodiesUpdateVelocities=function(e){for(var t=e.length,n=0;n<t;n++)f.updateVelocities(e[n])}})()}),(function(e,t,n){var r={};e.exports=r;var i=n(3),a=n(0),o=n(1);(function(){r._restingThresh=2,r._restingThreshTangent=Math.sqrt(6),r._positionDampen=.9,r._positionWarming=.8,r._frictionNormalMultiplier=5,r._frictionMaxStatic=Number.MAX_VALUE,r.preSolvePosition=function(e){var t,n,r,i=e.length;for(t=0;t<i;t++)n=e[t],n.isActive&&(r=n.contactCount,n.collision.parentA.totalContacts+=r,n.collision.parentB.totalContacts+=r)},r.solvePosition=function(e,t,n){var i,o,s,c,l,u,d,f,p=r._positionDampen*(n||1),m=a.clamp(t/a._baseDelta,0,1),h=e.length;for(i=0;i<h;i++)o=e[i],o.isActive&&!o.isSensor&&(s=o.collision,c=s.parentA,l=s.parentB,u=s.normal,o.separation=s.depth+u.x*(l.positionImpulse.x-c.positionImpulse.x)+u.y*(l.positionImpulse.y-c.positionImpulse.y));for(i=0;i<h;i++)o=e[i],o.isActive&&!o.isSensor&&(s=o.collision,c=s.parentA,l=s.parentB,u=s.normal,f=o.separation-o.slop*m,(c.isStatic||l.isStatic)&&(f*=2),c.isStatic||c.isSleeping||(d=p/c.totalContacts,c.positionImpulse.x+=u.x*f*d,c.positionImpulse.y+=u.y*f*d),l.isStatic||l.isSleeping||(d=p/l.totalContacts,l.positionImpulse.x-=u.x*f*d,l.positionImpulse.y-=u.y*f*d))},r.postSolvePosition=function(e){for(var t=r._positionWarming,n=e.length,a=i.translate,s=o.update,c=0;c<n;c++){var l=e[c],u=l.positionImpulse,d=u.x,f=u.y,p=l.velocity;if(l.totalContacts=0,d!==0||f!==0){for(var m=0;m<l.parts.length;m++){var h=l.parts[m];a(h.vertices,u),s(h.bounds,h.vertices,p),h.position.x+=d,h.position.y+=f}l.positionPrev.x+=d,l.positionPrev.y+=f,d*p.x+f*p.y<0?(u.x=0,u.y=0):(u.x*=t,u.y*=t)}}},r.preSolveVelocity=function(e){for(var t=e.length,n=0,r;n<t;n++){var i=e[n];if(i.isActive&&!i.isSensor){var a=i.contacts,o=i.contactCount,s=i.collision,c=s.parentA,l=s.parentB,u=s.normal,d=s.tangent;for(r=0;r<o;r++){var f=a[r],p=f.vertex,m=f.normalImpulse,h=f.tangentImpulse;if(m!==0||h!==0){var g=u.x*m+d.x*h,_=u.y*m+d.y*h;c.isStatic||c.isSleeping||(c.positionPrev.x+=g*c.inverseMass,c.positionPrev.y+=_*c.inverseMass,c.anglePrev+=c.inverseInertia*((p.x-c.position.x)*_-(p.y-c.position.y)*g)),l.isStatic||l.isSleeping||(l.positionPrev.x-=g*l.inverseMass,l.positionPrev.y-=_*l.inverseMass,l.anglePrev-=l.inverseInertia*((p.x-l.position.x)*_-(p.y-l.position.y)*g))}}}}},r.solveVelocity=function(e,t){for(var n=t/a._baseDelta,i=n*n*n,o=-r._restingThresh*n,s=r._restingThreshTangent,c=r._frictionNormalMultiplier*n,l=r._frictionMaxStatic,u=e.length,d,f,p=0,m;p<u;p++){var h=e[p];if(h.isActive&&!h.isSensor){var g=h.collision,_=g.parentA,v=g.parentB,y=g.normal.x,b=g.normal.y,x=g.tangent.x,S=g.tangent.y,C=h.inverseMass,w=h.friction*h.frictionStatic*c,T=h.contacts,E=h.contactCount,D=1/E,O=_.position.x-_.positionPrev.x,k=_.position.y-_.positionPrev.y,A=_.angle-_.anglePrev,j=v.position.x-v.positionPrev.x,ee=v.position.y-v.positionPrev.y,M=v.angle-v.anglePrev;for(m=0;m<E;m++){var N=T[m],P=N.vertex,te=P.x-_.position.x,ne=P.y-_.position.y,re=P.x-v.position.x,ie=P.y-v.position.y,ae=O-ne*A,oe=k+te*A,se=j-ie*M,ce=ee+re*M,le=ae-se,ue=oe-ce,de=y*le+b*ue,fe=x*le+S*ue,pe=h.separation+de,me=Math.min(pe,1);me=pe<0?0:me;var he=me*w;fe<-he||fe>he?(f=fe>0?fe:-fe,d=h.friction*(fe>0?1:-1)*i,d<-f?d=-f:d>f&&(d=f)):(d=fe,f=l);var ge=te*b-ne*y,_e=re*b-ie*y,ve=D/(C+_.inverseInertia*ge*ge+v.inverseInertia*_e*_e),ye=(1+h.restitution)*de*ve;if(d*=ve,de<o)N.normalImpulse=0;else{var be=N.normalImpulse;N.normalImpulse+=ye,N.normalImpulse>0&&(N.normalImpulse=0),ye=N.normalImpulse-be}if(fe<-s||fe>s)N.tangentImpulse=0;else{var xe=N.tangentImpulse;N.tangentImpulse+=d,N.tangentImpulse<-f&&(N.tangentImpulse=-f),N.tangentImpulse>f&&(N.tangentImpulse=f),d=N.tangentImpulse-xe}var Se=y*ye+x*d,Ce=b*ye+S*d;_.isStatic||_.isSleeping||(_.positionPrev.x+=Se*_.inverseMass,_.positionPrev.y+=Ce*_.inverseMass,_.anglePrev+=(te*Ce-ne*Se)*_.inverseInertia),v.isStatic||v.isSleeping||(v.positionPrev.x-=Se*v.inverseMass,v.positionPrev.y-=Ce*v.inverseMass,v.anglePrev-=(re*Ce-ie*Se)*v.inverseInertia)}}}}})()}),(function(e,t,n){var r={};e.exports=r;var i=n(9),a=n(0);(function(){r.create=function(e){return a.extend({table:{},list:[],collisionStart:[],collisionActive:[],collisionEnd:[]},e)},r.update=function(e,t,n){for(var r=i.update,a=i.create,o=i.setActive,s=e.table,c=e.list,l=c.length,u=l,d=e.collisionStart,f=e.collisionEnd,p=e.collisionActive,m=t.length,h=0,g=0,_=0,v,y,b=0;b<m;b++)v=t[b],y=v.pair,y?(y.isActive&&(p[_++]=y),r(y,v,n)):(y=a(v,n),s[y.id]=y,d[h++]=y,c[u++]=y);for(u=0,l=c.length,b=0;b<l;b++)y=c[b],y.timeUpdated>=n?c[u++]=y:(o(y,!1,n),y.collision.bodyA.sleepCounter>0&&y.collision.bodyB.sleepCounter>0?c[u++]=y:(f[g++]=y,delete s[y.id]));c.length!==u&&(c.length=u),d.length!==h&&(d.length=h),f.length!==g&&(f.length=g),p.length!==_&&(p.length=_)},r.clear=function(e){return e.table={},e.list.length=0,e.collisionStart.length=0,e.collisionActive.length=0,e.collisionEnd.length=0,e}})()}),(function(e,t,n){var r=e.exports=n(21);r.Axes=n(11),r.Bodies=n(12),r.Body=n(4),r.Bounds=n(1),r.Collision=n(8),r.Common=n(0),r.Composite=n(6),r.Composites=n(22),r.Constraint=n(10),r.Contact=n(16),r.Detector=n(13),r.Engine=n(17),r.Events=n(5),r.Grid=n(23),r.Mouse=n(14),r.MouseConstraint=n(24),r.Pair=n(9),r.Pairs=n(19),r.Plugin=n(15),r.Query=n(25),r.Render=n(26),r.Resolver=n(18),r.Runner=n(27),r.SAT=n(28),r.Sleeping=n(7),r.Svg=n(29),r.Vector=n(2),r.Vertices=n(3),r.World=n(30),r.Engine.run=r.Runner.run,r.Common.deprecated(r.Engine,`run`,`Engine.run ➤ use Matter.Runner.run(engine) instead`)}),(function(e,t,n){var r={};e.exports=r;var i=n(15),a=n(0);(function(){r.name=`matter-js`,r.version=`0.20.0`,r.uses=[],r.used=[],r.use=function(){i.use(r,Array.prototype.slice.call(arguments))},r.before=function(e,t){return e=e.replace(/^Matter./,``),a.chainPathBefore(r,e,t)},r.after=function(e,t){return e=e.replace(/^Matter./,``),a.chainPathAfter(r,e,t)}})()}),(function(e,t,n){var r={};e.exports=r;var i=n(6),a=n(10),o=n(0),s=n(4),c=n(12),l=o.deprecated;(function(){r.stack=function(e,t,n,r,a,o,c){for(var l=i.create({label:`Stack`}),u=e,d=t,f,p=0,m=0;m<r;m++){for(var h=0,g=0;g<n;g++){var _=c(u,d,g,m,f,p);if(_){var v=_.bounds.max.y-_.bounds.min.y,y=_.bounds.max.x-_.bounds.min.x;v>h&&(h=v),s.translate(_,{x:y*.5,y:v*.5}),u=_.bounds.max.x+a,i.addBody(l,_),f=_,p+=1}else u+=a}d+=h+o,u=e}return l},r.chain=function(e,t,n,r,s,c){for(var l=e.bodies,u=1;u<l.length;u++){var d=l[u-1],f=l[u],p=d.bounds.max.y-d.bounds.min.y,m=d.bounds.max.x-d.bounds.min.x,h=f.bounds.max.y-f.bounds.min.y,g=f.bounds.max.x-f.bounds.min.x,_={bodyA:d,pointA:{x:m*t,y:p*n},bodyB:f,pointB:{x:g*r,y:h*s}},v=o.extend(_,c);i.addConstraint(e,a.create(v))}return e.label+=` Chain`,e},r.mesh=function(e,t,n,r,s){for(var c=e.bodies,l=0,u,d,f,p;l<n;l++){for(u=1;u<t;u++)d=c[u-1+l*t],f=c[u+l*t],i.addConstraint(e,a.create(o.extend({bodyA:d,bodyB:f},s)));if(l>0)for(u=0;u<t;u++)d=c[u+(l-1)*t],f=c[u+l*t],i.addConstraint(e,a.create(o.extend({bodyA:d,bodyB:f},s))),r&&u>0&&(p=c[u-1+(l-1)*t],i.addConstraint(e,a.create(o.extend({bodyA:p,bodyB:f},s)))),r&&u<t-1&&(p=c[u+1+(l-1)*t],i.addConstraint(e,a.create(o.extend({bodyA:p,bodyB:f},s))))}return e.label+=` Mesh`,e},r.pyramid=function(e,t,n,i,a,o,c){return r.stack(e,t,n,i,a,o,function(t,r,o,l,u,d){var f=Math.min(i,Math.ceil(n/2)),p=u?u.bounds.max.x-u.bounds.min.x:0;if(!(l>f)){l=f-l;var m=l,h=n-1-l;if(!(o<m||o>h))return d===1&&s.translate(u,{x:(o+(n%2==1?1:-1))*p,y:0}),c(e+(u?o*p:0)+o*a,r,o,l,u,d)}})},r.newtonsCradle=function(e,t,n,r,o){for(var s=i.create({label:`Newtons Cradle`}),l=0;l<n;l++){var u=1.9,d=c.circle(e+r*u*l,t+o,r,{inertia:1/0,restitution:1,friction:0,frictionAir:1e-4,slop:1}),f=a.create({pointA:{x:e+r*u*l,y:t},bodyB:d});i.addBody(s,d),i.addConstraint(s,f)}return s},l(r,`newtonsCradle`,`Composites.newtonsCradle ➤ moved to newtonsCradle example`),r.car=function(e,t,n,r,o){var l=s.nextGroup(!0),u=20,d=-n*.5+u,f=n*.5-u,p=0,m=i.create({label:`Car`}),h=c.rectangle(e,t,n,r,{collisionFilter:{group:l},chamfer:{radius:r*.5},density:2e-4}),g=c.circle(e+d,t+p,o,{collisionFilter:{group:l},friction:.8}),_=c.circle(e+f,t+p,o,{collisionFilter:{group:l},friction:.8}),v=a.create({bodyB:h,pointB:{x:d,y:p},bodyA:g,stiffness:1,length:0}),y=a.create({bodyB:h,pointB:{x:f,y:p},bodyA:_,stiffness:1,length:0});return i.addBody(m,h),i.addBody(m,g),i.addBody(m,_),i.addConstraint(m,v),i.addConstraint(m,y),m},l(r,`car`,`Composites.car ➤ moved to car example`),r.softBody=function(e,t,n,i,a,s,l,u,d,f){d=o.extend({inertia:1/0},d),f=o.extend({stiffness:.2,render:{type:`line`,anchors:!1}},f);var p=r.stack(e,t,n,i,a,s,function(e,t){return c.circle(e,t,u,d)});return r.mesh(p,n,i,l,f),p.label=`Soft Body`,p},l(r,`softBody`,`Composites.softBody ➤ moved to softBody and cloth examples`)})()}),(function(e,t,n){var r={};e.exports=r;var i=n(9),a=n(0),o=a.deprecated;(function(){r.create=function(e){return a.extend({buckets:{},pairs:{},pairsList:[],bucketWidth:48,bucketHeight:48},e)},r.update=function(e,t,n,i){var a,o,s,c=n.world,l=e.buckets,u,d,f=!1;for(a=0;a<t.length;a++){var p=t[a];if((!p.isSleeping||i)&&!(c.bounds&&(p.bounds.max.x<c.bounds.min.x||p.bounds.min.x>c.bounds.max.x||p.bounds.max.y<c.bounds.min.y||p.bounds.min.y>c.bounds.max.y))){var m=r._getRegion(e,p);if(!p.region||m.id!==p.region.id||i){(!p.region||i)&&(p.region=m);var h=r._regionUnion(m,p.region);for(o=h.startCol;o<=h.endCol;o++)for(s=h.startRow;s<=h.endRow;s++){d=r._getBucketId(o,s),u=l[d];var g=o>=m.startCol&&o<=m.endCol&&s>=m.startRow&&s<=m.endRow,_=o>=p.region.startCol&&o<=p.region.endCol&&s>=p.region.startRow&&s<=p.region.endRow;!g&&_&&_&&u&&r._bucketRemoveBody(e,u,p),(p.region===m||g&&!_||i)&&(u||=r._createBucket(l,d),r._bucketAddBody(e,u,p))}p.region=m,f=!0}}}f&&(e.pairsList=r._createActivePairsList(e))},o(r,`update`,`Grid.update ➤ replaced by Matter.Detector`),r.clear=function(e){e.buckets={},e.pairs={},e.pairsList=[]},o(r,`clear`,`Grid.clear ➤ replaced by Matter.Detector`),r._regionUnion=function(e,t){var n=Math.min(e.startCol,t.startCol),i=Math.max(e.endCol,t.endCol),a=Math.min(e.startRow,t.startRow),o=Math.max(e.endRow,t.endRow);return r._createRegion(n,i,a,o)},r._getRegion=function(e,t){var n=t.bounds,i=Math.floor(n.min.x/e.bucketWidth),a=Math.floor(n.max.x/e.bucketWidth),o=Math.floor(n.min.y/e.bucketHeight),s=Math.floor(n.max.y/e.bucketHeight);return r._createRegion(i,a,o,s)},r._createRegion=function(e,t,n,r){return{id:e+`,`+t+`,`+n+`,`+r,startCol:e,endCol:t,startRow:n,endRow:r}},r._getBucketId=function(e,t){return`C`+e+`R`+t},r._createBucket=function(e,t){return e[t]=[]},r._bucketAddBody=function(e,t,n){for(var r=e.pairs,a=i.id,o=t.length,s=0;s<o;s++){var c=t[s];if(!(n.id===c.id||n.isStatic&&c.isStatic)){var l=a(n,c),u=r[l];u?u[2]+=1:r[l]=[n,c,1]}}t.push(n)},r._bucketRemoveBody=function(e,t,n){var r=e.pairs,o=i.id,s;t.splice(a.indexOf(t,n),1);var c=t.length;for(s=0;s<c;s++){var l=r[o(n,t[s])];l&&--l[2]}},r._createActivePairsList=function(e){for(var t,n=e.pairs,r=a.keys(n),i=r.length,o=[],s=0;s<i;s++)t=n[r[s]],t[2]>0?o.push(t):delete n[r[s]];return o}})()}),(function(e,t,n){var r={};e.exports=r;var i=n(3),a=n(7),o=n(14),s=n(5),c=n(13),l=n(10),u=n(6),d=n(0),f=n(1);(function(){r.create=function(e,t){var n=(e?e.mouse:null)||(t?t.mouse:null);n||(e&&e.render&&e.render.canvas?n=o.create(e.render.canvas):t&&t.element?n=o.create(t.element):(n=o.create(),d.warn(`MouseConstraint.create: options.mouse was undefined, options.element was undefined, may not function as expected`)));var i=l.create({label:`Mouse Constraint`,pointA:n.position,pointB:{x:0,y:0},length:.01,stiffness:.1,angularStiffness:1,render:{strokeStyle:`#90EE90`,lineWidth:3}}),a={type:`mouseConstraint`,mouse:n,element:null,body:null,constraint:i,collisionFilter:{category:1,mask:4294967295,group:0}},c=d.extend(a,t);return s.on(e,`beforeUpdate`,function(){var t=u.allBodies(e.world);r.update(c,t),r._triggerEvents(c)}),c},r.update=function(e,t){var n=e.mouse,r=e.constraint,o=e.body;if(n.button===0){if(r.bodyB)a.set(r.bodyB,!1),r.pointA=n.position;else for(var l=0;l<t.length;l++)if(o=t[l],f.contains(o.bounds,n.position)&&c.canCollide(o.collisionFilter,e.collisionFilter))for(var u=+(o.parts.length>1);u<o.parts.length;u++){var d=o.parts[u];if(i.contains(d.vertices,n.position)){r.pointA=n.position,r.bodyB=e.body=o,r.pointB={x:n.position.x-o.position.x,y:n.position.y-o.position.y},r.angleB=o.angle,a.set(o,!1),s.trigger(e,`startdrag`,{mouse:n,body:o});break}}}else r.bodyB=e.body=null,r.pointB=null,o&&s.trigger(e,`enddrag`,{mouse:n,body:o})},r._triggerEvents=function(e){var t=e.mouse,n=t.sourceEvents;n.mousemove&&s.trigger(e,`mousemove`,{mouse:t}),n.mousedown&&s.trigger(e,`mousedown`,{mouse:t}),n.mouseup&&s.trigger(e,`mouseup`,{mouse:t}),o.clearSourceEvents(t)}})()}),(function(e,t,n){var r={};e.exports=r;var i=n(2),a=n(8),o=n(1),s=n(12),c=n(3);(function(){r.collides=function(e,t){for(var n=[],r=t.length,i=e.bounds,s=a.collides,c=o.overlaps,l=0;l<r;l++){var u=t[l],d=u.parts.length,f=d===1?0:1;if(c(u.bounds,i))for(var p=f;p<d;p++){var m=u.parts[p];if(c(m.bounds,i)){var h=s(m,e);if(h){n.push(h);break}}}}return n},r.ray=function(e,t,n,a){a||=1e-100;for(var o=i.angle(t,n),c=i.magnitude(i.sub(t,n)),l=(n.x+t.x)*.5,u=(n.y+t.y)*.5,d=s.rectangle(l,u,c,a,{angle:o}),f=r.collides(d,e),p=0;p<f.length;p+=1){var m=f[p];m.body=m.bodyB=m.bodyA}return f},r.region=function(e,t,n){for(var r=[],i=0;i<e.length;i++){var a=e[i],s=o.overlaps(a.bounds,t);(s&&!n||!s&&n)&&r.push(a)}return r},r.point=function(e,t){for(var n=[],r=0;r<e.length;r++){var i=e[r];if(o.contains(i.bounds,t))for(var a=i.parts.length===1?0:1;a<i.parts.length;a++){var s=i.parts[a];if(o.contains(s.bounds,t)&&c.contains(s.vertices,t)){n.push(i);break}}}return n}})()}),(function(e,t,n){var r={};e.exports=r;var i=n(4),a=n(0),o=n(6),s=n(1),c=n(5),l=n(2),u=n(14);(function(){var e,t;typeof window<`u`&&(e=window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||window.msRequestAnimationFrame||function(e){window.setTimeout(function(){e(a.now())},1e3/60)},t=window.cancelAnimationFrame||window.mozCancelAnimationFrame||window.webkitCancelAnimationFrame||window.msCancelAnimationFrame),r._goodFps=30,r._goodDelta=1e3/60,r.create=function(e){var t={engine:null,element:null,canvas:null,mouse:null,frameRequestId:null,timing:{historySize:60,delta:0,deltaHistory:[],lastTime:0,lastTimestamp:0,lastElapsed:0,timestampElapsed:0,timestampElapsedHistory:[],engineDeltaHistory:[],engineElapsedHistory:[],engineUpdatesHistory:[],elapsedHistory:[]},options:{width:800,height:600,pixelRatio:1,background:`#14151f`,wireframeBackground:`#14151f`,wireframeStrokeStyle:`#bbb`,hasBounds:!!e.bounds,enabled:!0,wireframes:!0,showSleeping:!0,showDebug:!1,showStats:!1,showPerformance:!1,showBounds:!1,showVelocity:!1,showCollisions:!1,showSeparations:!1,showAxes:!1,showPositions:!1,showAngleIndicator:!1,showIds:!1,showVertexNumbers:!1,showConvexHulls:!1,showInternalEdges:!1,showMousePosition:!1}},n=a.extend(t,e);return n.canvas&&(n.canvas.width=n.options.width||n.canvas.width,n.canvas.height=n.options.height||n.canvas.height),n.mouse=e.mouse,n.engine=e.engine,n.canvas=n.canvas||f(n.options.width,n.options.height),n.context=n.canvas.getContext(`2d`),n.textures={},n.bounds=n.bounds||{min:{x:0,y:0},max:{x:n.canvas.width,y:n.canvas.height}},n.controller=r,n.options.showBroadphase=!1,n.options.pixelRatio!==1&&r.setPixelRatio(n,n.options.pixelRatio),a.isElement(n.element)&&n.element.appendChild(n.canvas),n},r.run=function(t){(function i(a){t.frameRequestId=e(i),n(t,a),r.world(t,a),t.context.setTransform(t.options.pixelRatio,0,0,t.options.pixelRatio,0,0),(t.options.showStats||t.options.showDebug)&&r.stats(t,t.context,a),(t.options.showPerformance||t.options.showDebug)&&r.performance(t,t.context,a),t.context.setTransform(1,0,0,1,0,0)})()},r.stop=function(e){t(e.frameRequestId)},r.setPixelRatio=function(e,t){var n=e.options,r=e.canvas;t===`auto`&&(t=p(r)),n.pixelRatio=t,r.setAttribute(`data-pixel-ratio`,t),r.width=n.width*t,r.height=n.height*t,r.style.width=n.width+`px`,r.style.height=n.height+`px`},r.setSize=function(e,t,n){e.options.width=t,e.options.height=n,e.bounds.max.x=e.bounds.min.x+t,e.bounds.max.y=e.bounds.min.y+n,e.options.pixelRatio===1?(e.canvas.width=t,e.canvas.height=n):r.setPixelRatio(e,e.options.pixelRatio)},r.lookAt=function(e,t,n,r){r=r===void 0||r,t=a.isArray(t)?t:[t],n||={x:0,y:0};for(var i={min:{x:1/0,y:1/0},max:{x:-1/0,y:-1/0}},o=0;o<t.length;o+=1){var s=t[o],c=s.bounds?s.bounds.min:s.min||s.position||s,l=s.bounds?s.bounds.max:s.max||s.position||s;c&&l&&(c.x<i.min.x&&(i.min.x=c.x),l.x>i.max.x&&(i.max.x=l.x),c.y<i.min.y&&(i.min.y=c.y),l.y>i.max.y&&(i.max.y=l.y))}var d=i.max.x-i.min.x+2*n.x,f=i.max.y-i.min.y+2*n.y,p=e.canvas.height,m=e.canvas.width/p,h=d/f,g=1,_=1;h>m?_=h/m:g=m/h,e.options.hasBounds=!0,e.bounds.min.x=i.min.x,e.bounds.max.x=i.min.x+d*g,e.bounds.min.y=i.min.y,e.bounds.max.y=i.min.y+f*_,r&&(e.bounds.min.x+=d*.5-d*g*.5,e.bounds.max.x+=d*.5-d*g*.5,e.bounds.min.y+=f*.5-f*_*.5,e.bounds.max.y+=f*.5-f*_*.5),e.bounds.min.x-=n.x,e.bounds.max.x-=n.x,e.bounds.min.y-=n.y,e.bounds.max.y-=n.y,e.mouse&&(u.setScale(e.mouse,{x:(e.bounds.max.x-e.bounds.min.x)/e.canvas.width,y:(e.bounds.max.y-e.bounds.min.y)/e.canvas.height}),u.setOffset(e.mouse,e.bounds.min))},r.startViewTransform=function(e){var t=e.bounds.max.x-e.bounds.min.x,n=e.bounds.max.y-e.bounds.min.y,r=t/e.options.width,i=n/e.options.height;e.context.setTransform(e.options.pixelRatio/r,0,0,e.options.pixelRatio/i,0,0),e.context.translate(-e.bounds.min.x,-e.bounds.min.y)},r.endViewTransform=function(e){e.context.setTransform(e.options.pixelRatio,0,0,e.options.pixelRatio,0,0)},r.world=function(e,t){var n=a.now(),i=e.engine,d=i.world,f=e.canvas,p=e.context,m=e.options,g=e.timing,_=o.allBodies(d),v=o.allConstraints(d),y=m.wireframes?m.wireframeBackground:m.background,b=[],x=[],S,C={timestamp:i.timing.timestamp};if(c.trigger(e,`beforeRender`,C),e.currentBackground!==y&&h(e,y),p.globalCompositeOperation=`source-in`,p.fillStyle=`transparent`,p.fillRect(0,0,f.width,f.height),p.globalCompositeOperation=`source-over`,m.hasBounds){for(S=0;S<_.length;S++){var w=_[S];s.overlaps(w.bounds,e.bounds)&&b.push(w)}for(S=0;S<v.length;S++){var T=v[S],E=T.bodyA,D=T.bodyB,O=T.pointA,k=T.pointB;E&&(O=l.add(E.position,T.pointA)),D&&(k=l.add(D.position,T.pointB)),O&&k&&(s.contains(e.bounds,O)||s.contains(e.bounds,k))&&x.push(T)}r.startViewTransform(e),e.mouse&&(u.setScale(e.mouse,{x:(e.bounds.max.x-e.bounds.min.x)/e.options.width,y:(e.bounds.max.y-e.bounds.min.y)/e.options.height}),u.setOffset(e.mouse,e.bounds.min))}else x=v,b=_,e.options.pixelRatio!==1&&e.context.setTransform(e.options.pixelRatio,0,0,e.options.pixelRatio,0,0);!m.wireframes||i.enableSleeping&&m.showSleeping?r.bodies(e,b,p):(m.showConvexHulls&&r.bodyConvexHulls(e,b,p),r.bodyWireframes(e,b,p)),m.showBounds&&r.bodyBounds(e,b,p),(m.showAxes||m.showAngleIndicator)&&r.bodyAxes(e,b,p),m.showPositions&&r.bodyPositions(e,b,p),m.showVelocity&&r.bodyVelocity(e,b,p),m.showIds&&r.bodyIds(e,b,p),m.showSeparations&&r.separations(e,i.pairs.list,p),m.showCollisions&&r.collisions(e,i.pairs.list,p),m.showVertexNumbers&&r.vertexNumbers(e,b,p),m.showMousePosition&&r.mousePosition(e,e.mouse,p),r.constraints(x,p),m.hasBounds&&r.endViewTransform(e),c.trigger(e,`afterRender`,C),g.lastElapsed=a.now()-n},r.stats=function(e,t,n){for(var r=e.engine,i=r.world,a=o.allBodies(i),s=0,c=55,l=44,u=0,d=0,f=0;f<a.length;f+=1)s+=a[f].parts.length;var p={Part:s,Body:a.length,Cons:o.allConstraints(i).length,Comp:o.allComposites(i).length,Pair:r.pairs.list.length};for(var m in t.fillStyle=`#0e0f19`,t.fillRect(u,d,c*5.5,l),t.font=`12px Arial`,t.textBaseline=`top`,t.textAlign=`right`,p){var h=p[m];t.fillStyle=`#aaa`,t.fillText(m,u+c,d+8),t.fillStyle=`#eee`,t.fillText(h,u+c,d+26),u+=c}},r.performance=function(e,t){var n=e.engine,i=e.timing,o=i.deltaHistory,s=i.elapsedHistory,c=i.timestampElapsedHistory,l=i.engineDeltaHistory,u=i.engineUpdatesHistory,f=i.engineElapsedHistory,p=n.timing.lastUpdatesPerFrame,m=n.timing.lastDelta,h=d(o),g=d(s),_=d(l),v=d(u),y=d(f),b=d(c)/h||0,x=Math.round(h/m),S=1e3/h||0,C=4,w=12,T=60,E=34,D=10,O=69;t.fillStyle=`#0e0f19`,t.fillRect(0,50,w*5+T*6+22,E),r.status(t,D,O,T,C,o.length,Math.round(S)+` fps`,S/r._goodFps,function(e){return o[e]/h-1}),r.status(t,D+w+T,O,T,C,l.length,m.toFixed(2)+` dt`,r._goodDelta/m,function(e){return l[e]/_-1}),r.status(t,D+(w+T)*2,O,T,C,u.length,p+` upf`,a.clamp(v/x||1,0,1)**4,function(e){return u[e]/v-1}),r.status(t,D+(w+T)*3,O,T,C,f.length,y.toFixed(2)+` ut`,1-p*y/r._goodFps,function(e){return f[e]/y-1}),r.status(t,D+(w+T)*4,O,T,C,s.length,g.toFixed(2)+` rt`,1-g/r._goodFps,function(e){return s[e]/g-1}),r.status(t,D+(w+T)*5,O,T,C,c.length,b.toFixed(2)+` x`,b*b*b,function(e){return(c[e]/o[e]/b||0)-1})},r.status=function(e,t,n,r,i,o,s,c,l){e.strokeStyle=`#888`,e.fillStyle=`#444`,e.lineWidth=1,e.fillRect(t,n+7,r,1),e.beginPath(),e.moveTo(t,n+7-i*a.clamp(.4*l(0),-2,2));for(var u=0;u<r;u+=1)e.lineTo(t+u,n+7-(u<o?i*a.clamp(.4*l(u),-2,2):0));e.stroke(),e.fillStyle=`hsl(`+a.clamp(25+95*c,0,120)+`,100%,60%)`,e.fillRect(t,n-7,4,4),e.font=`12px Arial`,e.textBaseline=`middle`,e.textAlign=`right`,e.fillStyle=`#eee`,e.fillText(s,t+r,n-5)},r.constraints=function(e,t){for(var n=t,r=0;r<e.length;r++){var i=e[r];if(i.render.visible&&i.pointA&&i.pointB){var o=i.bodyA,s=i.bodyB,c=o?l.add(o.position,i.pointA):i.pointA,u;if(i.render.type===`pin`)n.beginPath(),n.arc(c.x,c.y,3,0,2*Math.PI),n.closePath();else{if(u=s?l.add(s.position,i.pointB):i.pointB,n.beginPath(),n.moveTo(c.x,c.y),i.render.type===`spring`)for(var d=l.sub(u,c),f=l.perp(l.normalise(d)),p=Math.ceil(a.clamp(i.length/5,12,20)),m,h=1;h<p;h+=1)m=h%2==0?1:-1,n.lineTo(c.x+d.x*(h/p)+f.x*m*4,c.y+d.y*(h/p)+f.y*m*4);n.lineTo(u.x,u.y)}i.render.lineWidth&&(n.lineWidth=i.render.lineWidth,n.strokeStyle=i.render.strokeStyle,n.stroke()),i.render.anchors&&(n.fillStyle=i.render.strokeStyle,n.beginPath(),n.arc(c.x,c.y,3,0,2*Math.PI),n.arc(u.x,u.y,3,0,2*Math.PI),n.closePath(),n.fill())}}},r.bodies=function(e,t,n){var r=n;e.engine;for(var i=e.options,a=i.showInternalEdges||!i.wireframes,o,s,c=0,l;c<t.length;c++)if(o=t[c],o.render.visible){for(l=+(o.parts.length>1);l<o.parts.length;l++)if(s=o.parts[l],s.render.visible){if(i.showSleeping&&o.isSleeping?r.globalAlpha=.5*s.render.opacity:s.render.opacity!==1&&(r.globalAlpha=s.render.opacity),s.render.sprite&&s.render.sprite.texture&&!i.wireframes){var u=s.render.sprite,d=m(e,u.texture);r.translate(s.position.x,s.position.y),r.rotate(s.angle),r.drawImage(d,d.width*-u.xOffset*u.xScale,d.height*-u.yOffset*u.yScale,d.width*u.xScale,d.height*u.yScale),r.rotate(-s.angle),r.translate(-s.position.x,-s.position.y)}else{if(s.circleRadius)r.beginPath(),r.arc(s.position.x,s.position.y,s.circleRadius,0,2*Math.PI);else{r.beginPath(),r.moveTo(s.vertices[0].x,s.vertices[0].y);for(var f=1;f<s.vertices.length;f++)!s.vertices[f-1].isInternal||a?r.lineTo(s.vertices[f].x,s.vertices[f].y):r.moveTo(s.vertices[f].x,s.vertices[f].y),s.vertices[f].isInternal&&!a&&r.moveTo(s.vertices[(f+1)%s.vertices.length].x,s.vertices[(f+1)%s.vertices.length].y);r.lineTo(s.vertices[0].x,s.vertices[0].y),r.closePath()}i.wireframes?(r.lineWidth=1,r.strokeStyle=e.options.wireframeStrokeStyle,r.stroke()):(r.fillStyle=s.render.fillStyle,s.render.lineWidth&&(r.lineWidth=s.render.lineWidth,r.strokeStyle=s.render.strokeStyle,r.stroke()),r.fill())}r.globalAlpha=1}}},r.bodyWireframes=function(e,t,n){var r=n,i=e.options.showInternalEdges,a,o,s,c,l;for(r.beginPath(),s=0;s<t.length;s++)if(a=t[s],a.render.visible)for(l=+(a.parts.length>1);l<a.parts.length;l++){for(o=a.parts[l],r.moveTo(o.vertices[0].x,o.vertices[0].y),c=1;c<o.vertices.length;c++)!o.vertices[c-1].isInternal||i?r.lineTo(o.vertices[c].x,o.vertices[c].y):r.moveTo(o.vertices[c].x,o.vertices[c].y),o.vertices[c].isInternal&&!i&&r.moveTo(o.vertices[(c+1)%o.vertices.length].x,o.vertices[(c+1)%o.vertices.length].y);r.lineTo(o.vertices[0].x,o.vertices[0].y)}r.lineWidth=1,r.strokeStyle=e.options.wireframeStrokeStyle,r.stroke()},r.bodyConvexHulls=function(e,t,n){var r=n,i,a,o;for(r.beginPath(),a=0;a<t.length;a++)if(i=t[a],i.render.visible&&i.parts.length!==1){for(r.moveTo(i.vertices[0].x,i.vertices[0].y),o=1;o<i.vertices.length;o++)r.lineTo(i.vertices[o].x,i.vertices[o].y);r.lineTo(i.vertices[0].x,i.vertices[0].y)}r.lineWidth=1,r.strokeStyle=`rgba(255,255,255,0.2)`,r.stroke()},r.vertexNumbers=function(e,t,n){for(var r=n,i=0,a,o;i<t.length;i++){var s=t[i].parts;for(o=+(s.length>1);o<s.length;o++){var c=s[o];for(a=0;a<c.vertices.length;a++)r.fillStyle=`rgba(255,255,255,0.2)`,r.fillText(i+`_`+a,c.position.x+(c.vertices[a].x-c.position.x)*.8,c.position.y+(c.vertices[a].y-c.position.y)*.8)}}},r.mousePosition=function(e,t,n){var r=n;r.fillStyle=`rgba(255,255,255,0.8)`,r.fillText(t.position.x+`  `+t.position.y,t.position.x+5,t.position.y-5)},r.bodyBounds=function(e,t,n){var r=n;e.engine;var i=e.options;r.beginPath();for(var a=0;a<t.length;a++)if(t[a].render.visible)for(var o=t[a].parts,s=+(o.length>1);s<o.length;s++){var c=o[s];r.rect(c.bounds.min.x,c.bounds.min.y,c.bounds.max.x-c.bounds.min.x,c.bounds.max.y-c.bounds.min.y)}r.strokeStyle=i.wireframes?`rgba(255,255,255,0.08)`:`rgba(0,0,0,0.1)`,r.lineWidth=1,r.stroke()},r.bodyAxes=function(e,t,n){var r=n;e.engine;var i=e.options,a,o,s,c;for(r.beginPath(),o=0;o<t.length;o++){var l=t[o],u=l.parts;if(l.render.visible){if(i.showAxes)for(s=+(u.length>1);s<u.length;s++)for(a=u[s],c=0;c<a.axes.length;c++){var d=a.axes[c];r.moveTo(a.position.x,a.position.y),r.lineTo(a.position.x+d.x*20,a.position.y+d.y*20)}else for(s=+(u.length>1);s<u.length;s++)for(a=u[s],c=0;c<a.axes.length;c++)r.moveTo(a.position.x,a.position.y),r.lineTo((a.vertices[0].x+a.vertices[a.vertices.length-1].x)/2,(a.vertices[0].y+a.vertices[a.vertices.length-1].y)/2)}}i.wireframes?(r.strokeStyle=`indianred`,r.lineWidth=1):(r.strokeStyle=`rgba(255, 255, 255, 0.4)`,r.globalCompositeOperation=`overlay`,r.lineWidth=2),r.stroke(),r.globalCompositeOperation=`source-over`},r.bodyPositions=function(e,t,n){var r=n;e.engine;var i=e.options,a,o,s,c;for(r.beginPath(),s=0;s<t.length;s++)if(a=t[s],a.render.visible)for(c=0;c<a.parts.length;c++)o=a.parts[c],r.arc(o.position.x,o.position.y,3,0,2*Math.PI,!1),r.closePath();for(r.fillStyle=i.wireframes?`indianred`:`rgba(0,0,0,0.5)`,r.fill(),r.beginPath(),s=0;s<t.length;s++)a=t[s],a.render.visible&&(r.arc(a.positionPrev.x,a.positionPrev.y,2,0,2*Math.PI,!1),r.closePath());r.fillStyle=`rgba(255,165,0,0.8)`,r.fill()},r.bodyVelocity=function(e,t,n){var r=n;r.beginPath();for(var a=0;a<t.length;a++){var o=t[a];if(o.render.visible){var s=i.getVelocity(o);r.moveTo(o.position.x,o.position.y),r.lineTo(o.position.x+s.x,o.position.y+s.y)}}r.lineWidth=3,r.strokeStyle=`cornflowerblue`,r.stroke()},r.bodyIds=function(e,t,n){for(var r=n,i=0,a;i<t.length;i++)if(t[i].render.visible){var o=t[i].parts;for(a=+(o.length>1);a<o.length;a++){var s=o[a];r.font=`12px Arial`,r.fillStyle=`rgba(255,255,255,0.5)`,r.fillText(s.id,s.position.x+10,s.position.y-10)}}},r.collisions=function(e,t,n){var r=n,i=e.options,a,o,s,c;for(r.beginPath(),s=0;s<t.length;s++)if(a=t[s],a.isActive)for(o=a.collision,c=0;c<a.contactCount;c++){var l=a.contacts[c].vertex;r.rect(l.x-1.5,l.y-1.5,3.5,3.5)}for(r.fillStyle=i.wireframes?`rgba(255,255,255,0.7)`:`orange`,r.fill(),r.beginPath(),s=0;s<t.length;s++)if(a=t[s],a.isActive&&(o=a.collision,a.contactCount>0)){var u=a.contacts[0].vertex.x,d=a.contacts[0].vertex.y;a.contactCount===2&&(u=(a.contacts[0].vertex.x+a.contacts[1].vertex.x)/2,d=(a.contacts[0].vertex.y+a.contacts[1].vertex.y)/2),o.bodyB===o.supports[0].body||o.bodyA.isStatic===!0?r.moveTo(u-o.normal.x*8,d-o.normal.y*8):r.moveTo(u+o.normal.x*8,d+o.normal.y*8),r.lineTo(u,d)}r.strokeStyle=i.wireframes?`rgba(255,165,0,0.7)`:`orange`,r.lineWidth=1,r.stroke()},r.separations=function(e,t,n){var r=n,i=e.options,a,o,s,c,l;for(r.beginPath(),l=0;l<t.length;l++)if(a=t[l],a.isActive){o=a.collision,s=o.bodyA,c=o.bodyB;var u=1;!c.isStatic&&!s.isStatic&&(u=.5),c.isStatic&&(u=0),r.moveTo(c.position.x,c.position.y),r.lineTo(c.position.x-o.penetration.x*u,c.position.y-o.penetration.y*u),u=1,!c.isStatic&&!s.isStatic&&(u=.5),s.isStatic&&(u=0),r.moveTo(s.position.x,s.position.y),r.lineTo(s.position.x+o.penetration.x*u,s.position.y+o.penetration.y*u)}r.strokeStyle=i.wireframes?`rgba(255,165,0,0.5)`:`orange`,r.stroke()},r.inspector=function(e,t){e.engine;var n=e.selected,r=e.render,i=r.options,a;if(i.hasBounds){var o=r.bounds.max.x-r.bounds.min.x,s=r.bounds.max.y-r.bounds.min.y,c=o/r.options.width,l=s/r.options.height;t.scale(1/c,1/l),t.translate(-r.bounds.min.x,-r.bounds.min.y)}for(var u=0;u<n.length;u++){var d=n[u].data;switch(t.translate(.5,.5),t.lineWidth=1,t.strokeStyle=`rgba(255,165,0,0.9)`,t.setLineDash([1,2]),d.type){case`body`:a=d.bounds,t.beginPath(),t.rect(Math.floor(a.min.x-3),Math.floor(a.min.y-3),Math.floor(a.max.x-a.min.x+6),Math.floor(a.max.y-a.min.y+6)),t.closePath(),t.stroke();break;case`constraint`:var f=d.pointA;d.bodyA&&(f=d.pointB),t.beginPath(),t.arc(f.x,f.y,10,0,2*Math.PI),t.closePath(),t.stroke()}t.setLineDash([]),t.translate(-.5,-.5)}e.selectStart!==null&&(t.translate(.5,.5),t.lineWidth=1,t.strokeStyle=`rgba(255,165,0,0.6)`,t.fillStyle=`rgba(255,165,0,0.1)`,a=e.selectBounds,t.beginPath(),t.rect(Math.floor(a.min.x),Math.floor(a.min.y),Math.floor(a.max.x-a.min.x),Math.floor(a.max.y-a.min.y)),t.closePath(),t.stroke(),t.fill(),t.translate(-.5,-.5)),i.hasBounds&&t.setTransform(1,0,0,1,0,0)};var n=function(e,t){var n=e.engine,i=e.timing,a=i.historySize,o=n.timing.timestamp;i.delta=t-i.lastTime||r._goodDelta,i.lastTime=t,i.timestampElapsed=o-i.lastTimestamp||0,i.lastTimestamp=o,i.deltaHistory.unshift(i.delta),i.deltaHistory.length=Math.min(i.deltaHistory.length,a),i.engineDeltaHistory.unshift(n.timing.lastDelta),i.engineDeltaHistory.length=Math.min(i.engineDeltaHistory.length,a),i.timestampElapsedHistory.unshift(i.timestampElapsed),i.timestampElapsedHistory.length=Math.min(i.timestampElapsedHistory.length,a),i.engineUpdatesHistory.unshift(n.timing.lastUpdatesPerFrame),i.engineUpdatesHistory.length=Math.min(i.engineUpdatesHistory.length,a),i.engineElapsedHistory.unshift(n.timing.lastElapsed),i.engineElapsedHistory.length=Math.min(i.engineElapsedHistory.length,a),i.elapsedHistory.unshift(i.lastElapsed),i.elapsedHistory.length=Math.min(i.elapsedHistory.length,a)},d=function(e){for(var t=0,n=0;n<e.length;n+=1)t+=e[n];return t/e.length||0},f=function(e,t){var n=document.createElement(`canvas`);return n.width=e,n.height=t,n.oncontextmenu=function(){return!1},n.onselectstart=function(){return!1},n},p=function(e){var t=e.getContext(`2d`);return(window.devicePixelRatio||1)/(t.webkitBackingStorePixelRatio||t.mozBackingStorePixelRatio||t.msBackingStorePixelRatio||t.oBackingStorePixelRatio||t.backingStorePixelRatio||1)},m=function(e,t){var n=e.textures[t];return n||(n=e.textures[t]=new Image,n.src=t,n)},h=function(e,t){var n=t;/(jpg|gif|png)$/.test(t)&&(n=`url(`+t+`)`),e.canvas.style.background=n,e.canvas.style.backgroundSize=`contain`,e.currentBackground=t}})()}),(function(e,t,n){var r={};e.exports=r;var i=n(5),a=n(17),o=n(0);(function(){r._maxFrameDelta=1e3/15,r._frameDeltaFallback=1e3/60,r._timeBufferMargin=1.5,r._elapsedNextEstimate=1,r._smoothingLowerBound=.1,r._smoothingUpperBound=.9,r.create=function(e){var t=o.extend({delta:1e3/60,frameDelta:null,frameDeltaSmoothing:!0,frameDeltaSnapping:!0,frameDeltaHistory:[],frameDeltaHistorySize:100,frameRequestId:null,timeBuffer:0,timeLastTick:null,maxUpdates:null,maxFrameTime:1e3/30,lastUpdatesDeferred:0,enabled:!0},e);return t.fps=0,t},r.run=function(e,t){return e.timeBuffer=r._frameDeltaFallback,(function n(i){e.frameRequestId=r._onNextFrame(e,n),i&&e.enabled&&r.tick(e,t,i)})(),e},r.tick=function(t,n,s){var c=o.now(),l=t.delta,u=0,d=s-t.timeLastTick;if((!d||!t.timeLastTick||d>Math.max(r._maxFrameDelta,t.maxFrameTime))&&(d=t.frameDelta||r._frameDeltaFallback),t.frameDeltaSmoothing){t.frameDeltaHistory.push(d),t.frameDeltaHistory=t.frameDeltaHistory.slice(-t.frameDeltaHistorySize);var f=t.frameDeltaHistory.slice(0).sort();d=e(t.frameDeltaHistory.slice(f.length*r._smoothingLowerBound,f.length*r._smoothingUpperBound))||d}t.frameDeltaSnapping&&(d=1e3/Math.round(1e3/d)),t.frameDelta=d,t.timeLastTick=s,t.timeBuffer+=t.frameDelta,t.timeBuffer=o.clamp(t.timeBuffer,0,t.frameDelta+l*r._timeBufferMargin),t.lastUpdatesDeferred=0;var p=t.maxUpdates||Math.ceil(t.maxFrameTime/l),m={timestamp:n.timing.timestamp};i.trigger(t,`beforeTick`,m),i.trigger(t,`tick`,m);for(var h=o.now();l>0&&t.timeBuffer>=l*r._timeBufferMargin;){i.trigger(t,`beforeUpdate`,m),a.update(n,l),i.trigger(t,`afterUpdate`,m),t.timeBuffer-=l,u+=1;var g=o.now()-c,_=o.now()-h,v=g+r._elapsedNextEstimate*_/u;if(u>=p||v>t.maxFrameTime){t.lastUpdatesDeferred=Math.round(Math.max(0,t.timeBuffer/l-r._timeBufferMargin));break}}n.timing.lastUpdatesPerFrame=u,i.trigger(t,`afterTick`,m),t.frameDeltaHistory.length>=100&&(t.lastUpdatesDeferred&&Math.round(t.frameDelta/l)>p?o.warnOnce(`Matter.Runner: runner reached runner.maxUpdates, see docs.`):t.lastUpdatesDeferred&&o.warnOnce(`Matter.Runner: runner reached runner.maxFrameTime, see docs.`),t.isFixed!==void 0&&o.warnOnce(`Matter.Runner: runner.isFixed is now redundant, see docs.`),(t.deltaMin||t.deltaMax)&&o.warnOnce(`Matter.Runner: runner.deltaMin and runner.deltaMax were removed, see docs.`),t.fps!==0&&o.warnOnce(`Matter.Runner: runner.fps was replaced by runner.delta, see docs.`))},r.stop=function(e){r._cancelNextFrame(e)},r._onNextFrame=function(e,t){if(typeof window<`u`&&window.requestAnimationFrame)e.frameRequestId=window.requestAnimationFrame(t);else throw Error(`Matter.Runner: missing required global window.requestAnimationFrame.`);return e.frameRequestId},r._cancelNextFrame=function(e){if(typeof window<`u`&&window.cancelAnimationFrame)window.cancelAnimationFrame(e.frameRequestId);else throw Error(`Matter.Runner: missing required global window.cancelAnimationFrame.`)};var e=function(e){for(var t=0,n=e.length,r=0;r<n;r+=1)t+=e[r];return t/n||0}})()}),(function(e,t,n){var r={};e.exports=r;var i=n(8),a=n(0).deprecated;(function(){r.collides=function(e,t){return i.collides(e,t)},a(r,`collides`,`SAT.collides ➤ replaced by Collision.collides`)})()}),(function(e,t,n){var r={};e.exports=r,n(1);var i=n(0);(function(){r.pathToVertices=function(e,t){typeof window<`u`&&!(`SVGPathSeg`in window)&&i.warn(`Svg.pathToVertices: SVGPathSeg not defined, a polyfill is required.`);var n,a,o,s,c,l,u,d,f,p,m=[],h,g,_=0,v=0,y=0;t||=15;var b=function(e,t,n){var r=n%2==1&&n>1;if(!f||e!=f.x||t!=f.y){f&&r?(h=f.x,g=f.y):(h=0,g=0);var i={x:h+e,y:g+t};(r||!f)&&(f=i),m.push(i),v=h+e,y=g+t}},x=function(e){var t=e.pathSegTypeAsLetter.toUpperCase();if(t!==`Z`){switch(t){case`M`:case`L`:case`T`:case`C`:case`S`:case`Q`:v=e.x,y=e.y;break;case`H`:v=e.x;break;case`V`:y=e.y}b(v,y,e.pathSegType)}};for(r._svgPathToAbsolute(e),o=e.getTotalLength(),l=[],n=0;n<e.pathSegList.numberOfItems;n+=1)l.push(e.pathSegList.getItem(n));for(u=l.concat();_<o;){if(p=e.getPathSegAtLength(_),c=l[p],c!=d){for(;u.length&&u[0]!=c;)x(u.shift());d=c}switch(c.pathSegTypeAsLetter.toUpperCase()){case`C`:case`T`:case`S`:case`Q`:case`A`:s=e.getPointAtLength(_),b(s.x,s.y,0)}_+=t}for(n=0,a=u.length;n<a;++n)x(u[n]);return m},r._svgPathToAbsolute=function(e){for(var t,n,r,i,a,o,s=e.pathSegList,c=0,l=0,u=s.numberOfItems,d=0;d<u;++d){var f=s.getItem(d),p=f.pathSegTypeAsLetter;if(/[MLHVCSQTA]/.test(p))`x`in f&&(c=f.x),`y`in f&&(l=f.y);else switch(`x1`in f&&(r=c+f.x1),`x2`in f&&(a=c+f.x2),`y1`in f&&(i=l+f.y1),`y2`in f&&(o=l+f.y2),`x`in f&&(c+=f.x),`y`in f&&(l+=f.y),p){case`m`:s.replaceItem(e.createSVGPathSegMovetoAbs(c,l),d);break;case`l`:s.replaceItem(e.createSVGPathSegLinetoAbs(c,l),d);break;case`h`:s.replaceItem(e.createSVGPathSegLinetoHorizontalAbs(c),d);break;case`v`:s.replaceItem(e.createSVGPathSegLinetoVerticalAbs(l),d);break;case`c`:s.replaceItem(e.createSVGPathSegCurvetoCubicAbs(c,l,r,i,a,o),d);break;case`s`:s.replaceItem(e.createSVGPathSegCurvetoCubicSmoothAbs(c,l,a,o),d);break;case`q`:s.replaceItem(e.createSVGPathSegCurvetoQuadraticAbs(c,l,r,i),d);break;case`t`:s.replaceItem(e.createSVGPathSegCurvetoQuadraticSmoothAbs(c,l),d);break;case`a`:s.replaceItem(e.createSVGPathSegArcAbs(c,l,f.r1,f.r2,f.angle,f.largeArcFlag,f.sweepFlag),d);break;case`z`:case`Z`:c=t,l=n}(p==`M`||p==`m`)&&(t=c,n=l)}}})()}),(function(e,t,n){var r={};e.exports=r;var i=n(6);n(0),(function(){r.create=i.create,r.add=i.add,r.remove=i.remove,r.clear=i.clear,r.addComposite=i.addComposite,r.addBody=i.addBody,r.addConstraint=i.addConstraint})()})])})}))(),1),pd=class{max;points;pos;col;vel;life;maxLife;grav;baseCol;next=0;alive=0;constructor(e,t,n,r=!0){this.max=e;let i=new si;this.pos=new Float32Array(e*3),this.col=new Float32Array(e*3),this.baseCol=new Float32Array(e*3),this.vel=new Float32Array(e*3),this.life=new Float32Array(e),this.maxLife=new Float32Array(e),this.grav=new Float32Array(e);for(let t=0;t<e;t++)this.pos[t*3+1]=-99999;i.setAttribute(`position`,new Kr(this.pos,3).setUsage(xt)),i.setAttribute(`color`,new Kr(this.col,3).setUsage(xt));let a=new ha({size:t,map:qu.particle(),vertexColors:!0,transparent:!0,depthWrite:!1,sizeAttenuation:r,blending:n?2:1,toneMapped:!n});this.points=new ba(i,a),this.points.frustumCulled=!1}emit(e,t,n,r,i,a,o,s=.6,c=-9){let l=this.next;this.next=(this.next+1)%this.max;let u=typeof o==`number`?new K(o):o;this.pos.set([e,t,n],l*3),this.vel.set([r,i,a],l*3),this.baseCol.set([u.r,u.g,u.b],l*3),this.col.set([u.r,u.g,u.b],l*3),this.life[l]=s,this.maxLife[l]=s,this.grav[l]=c,this.alive=Math.min(this.max,this.alive+1)}burst(e,t,n,r,i,a=3,o=.6,s=-9){for(let c=0;c<r;c++){let r=Math.random()*Math.PI*2,c=a*(.3+Math.random()*.7);this.emit(e,t,n,Math.cos(r)*c,Math.sin(r)*c+a*.3,(Math.random()-.5)*c,i,o*(.6+Math.random()*.6),s)}}update(e){if(this.alive===0)return;let t=!1;for(let n=0;n<this.max;n++){if(this.life[n]<=0)continue;t=!0,this.life[n]-=e;let r=n*3;if(this.life[n]<=0){this.pos[r+1]=-99999;continue}this.vel[r+1]+=this.grav[n]*e,this.pos[r]+=this.vel[r]*e,this.pos[r+1]+=this.vel[r+1]*e,this.pos[r+2]+=this.vel[r+2]*e;let i=Math.min(1,this.life[n]/this.maxLife[n]*1.5);this.col[r]=this.baseCol[r]*i,this.col[r+1]=this.baseCol[r+1]*i,this.col[r+2]=this.baseCol[r+2]*i}t||(this.alive=0),this.points.geometry.attributes.position.needsUpdate=!0,this.points.geometry.attributes.color.needsUpdate=!0}},md=class{scene;live=[];flashLights=[];shake=0;textCache=new Map;constructor(e){this.scene=e}add(e,t,n,r){this.scene.add(e),this.live.push({obj:e,t,dur:t,tick:r,dispose:n})}basicMat(e,t=1.05,n=.65){return new zi({color:new K(e).multiplyScalar(t),transparent:!0,opacity:n,blending:2,depthWrite:!1,side:2})}light(e,t,n,r,i,a=6){this.flashLights.push({x:e,y:t,color:n,intensity:Math.min(r,6),dist:a,prio:5,t:i,dur:i})}bolt(e,t,n=16771192,r=.1,i=.22){let a=[],o=Math.max(3,Math.round(e.distanceTo(t)*2.5)),s=t.clone().sub(e),c=new H(-s.y,s.x).normalize();for(let n=0;n<=o;n++){let r=e.clone().lerp(t,n/o);n>0&&n<o&&r.addScaledVector(c,(Math.random()-.5)*.45),a.push(r)}let l=[];for(let e=0;e<a.length-1;e++){let t=a[e],n=a[e+1],i=n.clone().sub(t),o=new H(-i.y,i.x).normalize().multiplyScalar(r/2);l.push(t.x+o.x,t.y+o.y,0,t.x-o.x,t.y-o.y,0,n.x+o.x,n.y+o.y,0),l.push(n.x+o.x,n.y+o.y,0,t.x-o.x,t.y-o.y,0,n.x-o.x,n.y-o.y,0)}let u=new si;u.setAttribute(`position`,new Yr(l,3));let d=this.basicMat(n,1.15,.72),f=new q(u,d);f.position.z=.8,this.add(f,i,()=>{u.dispose(),d.dispose()},e=>{d.opacity=e*.72}),this.light(t.x,t.y,n,3.2,i*1.2,4.5)}explosion(e,t,n,r=16747050){let i=new Aa(1,16,12),a=this.basicMat(r,1.1,.58),o=new q(i,a);o.position.set(e,t,.6),this.add(o,.35,()=>{i.dispose(),a.dispose()},e=>{let t=n*(1.1-e*.8);o.scale.set(t,t,t*.6),a.opacity=e*.58}),this.glow(e,t,n*2.2,r,.36),this.light(e,t,r,5.5,.35,n*3.5),this.shake=Math.max(this.shake,Math.min(.35,.09*n))}glow(e,t,n,r,i){let a=new vi({map:qu.glow(),color:new K(r).multiplyScalar(1.05),blending:2,transparent:!0,opacity:.55,depthWrite:!1}),o=new Mi(a);o.position.set(e,t,.9),o.scale.setScalar(n),this.add(o,i,()=>a.dispose(),e=>{a.opacity=e*.55})}rect(e,t,n,r,i,a=.28,o=.95){let s=new Oa(n,r),c=Math.min(1.15,o*.65),l=this.basicMat(i,c,.42),u=new q(s,l);u.position.set(e,t,.75),this.add(u,a,()=>{s.dispose(),l.dispose()},e=>{l.opacity=e*.42})}ring(e,t,n,r,i=.5){let a=new ka(.86,1,32),o=this.basicMat(r,1.05,.52),s=new q(a,o);s.position.set(e,t,.7),this.add(s,i,()=>{a.dispose(),o.dispose()},e=>{s.scale.setScalar(n*(1.2-e*.4)),o.opacity=e*.52})}text(e,t,n,r=`#ffffff`,i=1.2,a=.55){let o=n+r,s=this.textCache.get(o);if(!s){let e=document.createElement(`canvas`),t=e.getContext(`2d`);t.font=`bold 40px "Noto Sans TC", "Microsoft JhengHei", sans-serif`,e.width=Math.ceil(t.measureText(n).width)+16,e.height=56,t.font=`bold 40px "Noto Sans TC", "Microsoft JhengHei", sans-serif`,t.textBaseline=`middle`,t.lineWidth=8,t.strokeStyle=`#000`,t.strokeText(n,8,28),t.fillStyle=r,t.fillText(n,8,28),s=new Ca(e),s.colorSpace=ht,this.textCache.set(o,s)}let c=new vi({map:s,transparent:!0,depthTest:!1,toneMapped:!1}),l=new Mi(c),u=s.image.width/56;l.scale.set(a*u,a,1),l.position.set(e,t,1.2),l.renderOrder=10,this.add(l,i,()=>c.dispose(),(e,t)=>{l.position.y+=t*.8,c.opacity=Math.min(1,e*3)})}update(e){this.live=this.live.filter(t=>{t.t-=e;let n=Math.max(0,t.t/t.dur);return t.tick?.(n,e),t.t<=0?(this.scene.remove(t.obj),t.dispose(),!1):!0}),this.flashLights=this.flashLights.filter(t=>(t.t-=e)>0),this.shake=Math.max(0,this.shake-e*1.5)}clear(){for(let e of this.live)this.scene.remove(e.obj),e.dispose();this.live=[],this.flashLights=[]}},hd={zombie:{hp:240,name:`殭屍礦工`,range:1.5,dmg:16,cd:1,desc:`高血量近戰守衛，會主動朝武器橫向逼近並每秒揮擊扣血`},skeleton:{hp:190,name:`骷髏弓手`,range:6.5,dmg:14,cd:1.9,desc:`遠程守衛，在洞穴與結界大廳對 6.5 格內的武器發射骨箭`},mushroom:{hp:160,name:`爆裂菇`,range:1.8,dmg:48,cd:1,desc:`主動逼近武器，進入 1.8 格內引信 1 秒後猛烈自爆重創武器`},spider:{hp:210,name:`洞穴蜘蛛`,range:5,dmg:8,cd:3.4,desc:`對 5 格內武器吐出劇毒蛛網，造成傷害並大幅減速 2.2 秒`},golem:{hp:9500,name:`岩石巨像`,range:0,dmg:12,cd:.5,desc:`第 3 關／無盡首領：施放落石雨、召喚小怪，並展開減傷 50% 的【堅岩護殼】（可用 ⚡雷電、💥爆炸 或 ✨神聖 攻擊直接擊碎）`},spider_queen:{hp:26e3,name:`劇毒蛛后`,range:0,dmg:15,cd:.5,desc:`第 6 關／無盡首領：噴吐五連扇形毒網、孵化幼蛛群，並結出減傷 40% 且每秒回血的【再生毒繭】（可用 🔥火燃燒 或 ☠爆擊 直接燒毀）`},balrog:{hp:85e3,name:`深淵炎魔`,range:0,dmg:18,cd:.5,desc:`第 10 關最終首領／無盡首領：降下七連獄火流星、召喚深淵菁英，並展開減傷 60% 且反傷武器的【熔岩神盾】（可用 ❄冰凍 或 ✨神聖 瞬間冰裂）`}},gd=new Oa(1,.11),_d=class{m;kind;x;y;hp;maxHp;dmgMul=1;body;group=new ir;sprite;mat;hpFill;hpBg;vy=0;patrolDir=Math.random()<.5?-1:1;atk=Math.random()*.8;fuse=-1;poisonStacks=0;poisonDps=0;poisonUntil=0;plague=!1;venomUntil=0;burnDps=0;burnUntil=0;frozenUntil=0;stunnedUntil=0;dead=!1;hurtFlash=0;size;isBoss=!1;isElite=!1;gateId=null;constructor(e,t,n,r,i,a=.85){this.m=e,this.kind=t,this.x=n,this.y=r,this.size=a,this.maxHp=this.hp=Math.round(hd[t].hp*i*h.enemyHpHardcoreMul),this.dmgMul=Math.min(2.8,1+Math.log2(Math.max(1,i))*.18);let o=e.B;this.body=X.default.Bodies.rectangle(n,r,o*a*.85,o*a*.85,{isStatic:!0,label:`enemy`,friction:.3,restitution:.4}),this.body.plugin={kind:`enemy`,e:this},this.mat=new Va({map:qu.enemy(t),transparent:!0,alphaTest:.5,emissive:16777215,emissiveMap:qu.enemy(t),emissiveIntensity:.25,side:2}),this.sprite=new q(new Oa(a*1.18,a*1.18),this.mat),this.group.add(this.sprite),this.hpBg=new q(gd,new zi({color:2228224})),this.hpFill=new q(gd,new zi({color:16726586})),this.hpBg.scale.x=a,this.hpBg.position.set(0,a*.72,.01),this.hpFill.position.set(0,a*.72,.02),this.group.add(this.hpBg,this.hpFill),this.group.position.z=.55,this.hpBg.visible=this.hpFill.visible=!1}promoteElite(){if(this.isElite||this.isBoss)return this;this.isElite=!0,this.maxHp=this.hp=this.maxHp*2.5,this.dmgMul*=1.5,this.size*=1.24,this.sprite.scale.set(1.24,1.24,1);let e=this.m.B;X.default.Composite.remove(this.m.engine.world,this.body),this.body=X.default.Bodies.rectangle(this.x,this.y,e*this.size*.85,e*this.size*.85,{isStatic:!0,label:`enemy`,friction:.3,restitution:.45}),this.body.plugin={kind:`enemy`,e:this},X.default.Composite.add(this.m.engine.world,this.body);let t=new q(new Oa(.55,.55),new zi({map:qu.crown(),transparent:!0,alphaTest:.3}));return t.position.set(0,this.size*.96,.03),this.group.add(t),this.hpFill.material.color.setHex(16758832),this.hpBg.scale.x=this.size,this.hpBg.position.y=this.size*.74,this.hpFill.position.y=this.size*.74,this}get frozen(){return this.m.time<this.frozenUntil}get disabled(){return this.m.time<this.frozenUntil||this.m.time<this.stunnedUntil}nearestWeapon(e){let t=null,n=e*this.m.B;for(let e of this.m.weapons){let r=Math.hypot(e.x-this.x,e.y-this.y);r<n&&(n=r,t=e)}return t}update(e){let t=this.m,n=t.B;if(!this.isBoss){let r=this.y+n*this.size/2+1,[i,a]=t.cellOf(this.x,r);if(!t.isSolid(i,a))this.vy=Math.min(this.vy+900*e,500),this.y+=this.vy*e,X.default.Body.setPosition(this.body,{x:this.x,y:this.y});else if(this.vy>0&&(this.vy=0,this.y=i*n-n*this.size/2+.01,X.default.Body.setPosition(this.body,{x:this.x,y:this.y})),!this.disabled){let r=this.nearestWeapon(7.5),a=this.patrolDir;if(r&&Math.abs(r.y-this.y)<n*4.5){let e=r.x-this.x;a=Math.abs(e)>n*.45?Math.sign(e):0}if(a!==0){let r=(this.isElite?1.35:1.05)*n,o=this.x+a*r*e,s=o+a*(n*this.size*.42),[c]=t.cellOf(this.x,this.y),[,l]=t.cellOf(s,this.y);l>=1&&l<t.cols-1&&!t.isSolid(c,l)&&t.isSolid(i,l)?(this.x=o,X.default.Body.setPosition(this.body,{x:this.x,y:this.y})):this.patrolDir=-a}}}this.disabled||this.act(e);let r=t.to3(this.x,this.y);this.group.position.x=r.x,this.group.position.y=r.y+(this.isBoss?0:Math.abs(Math.sin(t.time*3.5+this.x*.1))*.05);let i=this.nearestWeapon(10),a=i?i.x<this.x?-1:1:this.patrolDir<0?-1:1,o=this.isElite?1.24:1;this.sprite.scale.set(a*o,o,1);let s=this.mat.color;this.frozen?s.setRGB(.65,.92,1.35):t.time<this.burnUntil?s.setRGB(1.3,.82,.58):t.time<this.poisonUntil?s.setRGB(.68,1.25,.58):s.setRGB(1,1,1),this.hurtFlash>0?(this.hurtFlash-=e,this.mat.emissiveIntensity=.52):this.mat.emissiveIntensity=this.fuse>=0?.3+Math.abs(Math.sin(t.time*4))*.25:.22;let c=this.isElite||this.hp<this.maxHp;if(this.hpBg.visible=this.hpFill.visible=c&&!this.isBoss,c&&!this.isBoss){let e=Math.max(0,this.hp/this.maxHp);this.hpFill.scale.x=this.size*e,this.hpFill.position.x=-(this.size*(1-e))/2}}act(e){let t=this.m,n=hd[this.kind],r=n.dmg*this.dmgMul;switch(this.atk-=e,this.kind){case`zombie`:{let e=this.nearestWeapon(n.range+(this.isElite?.3:0));if(e&&this.atk<=0){this.atk=n.cd,t.hurtWeapon(e,r);let i=t.to3(e.x,e.y);t.fx.rect(i.x,i.y,.5,.5,16728128,.15)}break}case`skeleton`:{let e=this.nearestWeapon(n.range);if(e&&this.atk<=0){this.atk=n.cd;let i=e.x-this.x,a=e.y-this.y,o=Math.hypot(i,a)||1,s=7.2*t.B;t.addProjectile({kind:`arrow`,x:this.x,y:this.y,vx:i/o*s,vy:a/o*s,r:7,life:2.2,from:`enemy`,dmg:r})}break}case`mushroom`:this.fuse<0?this.nearestWeapon(n.range)&&(this.fuse=1):(this.fuse-=e,this.fuse<=0&&(this.hp=0,t.enemyExplode(this,2.1,r)));break;case`spider`:{let e=this.nearestWeapon(n.range);if(e&&this.atk<=0){this.atk=n.cd;let i=e.x-this.x,a=e.y-this.y,o=Math.hypot(i,a)||1,s=5.4*t.B;t.addProjectile({kind:`web`,x:this.x,y:this.y,vx:i/o*s,vy:a/o*s,r:10,life:2.2,from:`enemy`,dmg:r})}break}}}},vd=class extends _d{shieldUntil=0;contactT=0;shieldMesh;constructor(e,t,n,r,i,a){super(e,t,n,r,i,3),this.isBoss=!0,this.shieldMesh=new q(new Aa(1.9,16,12),new zi({color:new K(a),transparent:!0,opacity:.24,blending:2,depthWrite:!1})),this.shieldMesh.visible=!1,this.group.add(this.shieldMesh)}get shielded(){return this.m.time<this.shieldUntil}update(e){super.update(e),this.shieldMesh.visible=this.shielded,this.shielded&&(this.shieldMesh.rotation.y+=e)}tickContact(e){if(this.contactT-=e,this.contactT<=0){this.contactT=.5;let e=hd[this.kind].dmg*this.dmgMul;for(let t of this.m.weapons)Math.hypot(t.x-this.x,t.y-this.y)<this.m.B*2&&this.m.hurtWeapon(t,e)}}},yd=class extends vd{rainT=4;summonT=10;shellT=15;constructor(e,t,n,r){super(e,`golem`,t,n,r,14198872)}breakShell(){if(!this.shielded)return;this.shieldUntil=0;let e=this.m.to3(this.x,this.y);this.m.fx.text(e.x,e.y+2,`⚡ 堅岩護殼破碎！`,`#ffd060`),this.m.fx.ring(e.x,e.y,2.5,16765024)}act(e){let t=this.m,n=t.B,r=t.to3(this.x,this.y);if(this.tickContact(e),this.rainT-=e,this.rainT<=0){this.rainT=6,t.fx.text(r.x,r.y+2.2,`落石雨`,`#d0d0d0`);let e=t.viewTopY();for(let r=0;r<6;r++){let r=t.weapons.length?t.weapons[Math.floor(Math.random()*t.weapons.length)]:null,i=r?r.x+(Math.random()-.5)*n*2:n*(1.5+Math.random()*6);t.addProjectile({kind:`rock`,x:Math.min(n*7.6,Math.max(n*1.4,i)),y:e-Math.random()*n*2,vx:0,vy:6.2*n,r:12,life:4,from:`enemy`,dmg:18*this.dmgMul,passThrough:!0})}}if(this.summonT-=e,this.summonT<=0&&(this.summonT=14,t.enemies.filter(e=>!e.isBoss&&Math.abs(e.y-this.y)<n*6).length<5)){t.fx.text(r.x,r.y+2.2,`召喚礦工`,`#ff9080`);let e=[`zombie`,`mushroom`,`spider`];for(let r of[-1,1])t.spawnEnemy(e[Math.floor(Math.random()*e.length)],this.x+r*n*2.4,this.y+n*.5)}this.shellT-=e,this.shellT<=0&&(this.shellT=18,this.shieldUntil=t.time+6.5,t.fx.text(r.x,r.y+2.2,`堅岩護殼（雷／爆炸／聖可破）`,`#ffd060`))}},bd=class extends vd{webFanT=3.5;broodT=11;cocoonT=15;constructor(e,t,n,r){super(e,`spider_queen`,t,n,r,7004248)}breakCocoon(){if(!this.shielded)return;this.shieldUntil=0;let e=this.m.to3(this.x,this.y);this.m.fx.text(e.x,e.y+2,`🔥 再生毒繭燒毀！`,`#ff8848`),this.m.fx.ring(e.x,e.y,2.5,16742456)}act(e){let t=this.m,n=t.B,r=t.to3(this.x,this.y);if(this.tickContact(e),this.shielded&&(this.hp=Math.min(this.maxHp,this.hp+this.maxHp*.02*e)),this.webFanT-=e,this.webFanT<=0){this.webFanT=5.5,t.fx.text(r.x,r.y+2.2,`漫天毒網`,`#98ff78`);for(let e=-2;e<=2;e++){let r=-Math.PI/2+e*.32,i=5.8*n;t.addProjectile({kind:`web`,x:this.x,y:this.y-n*.6,vx:Math.cos(r)*i,vy:Math.sin(r)*i,r:12,life:2.8,from:`enemy`,dmg:12*this.dmgMul})}}if(this.broodT-=e,this.broodT<=0&&(this.broodT=13,t.enemies.filter(e=>!e.isBoss&&Math.abs(e.y-this.y)<n*6).length<5)){t.fx.text(r.x,r.y+2.2,`孵化幼蛛群`,`#c888ff`);for(let e of[-1,1])t.spawnEnemy(`spider`,this.x+e*n*2.4,this.y+n*.5)}this.cocoonT-=e,this.cocoonT<=0&&(this.cocoonT=18,this.shieldUntil=t.time+5.5,t.fx.text(r.x,r.y+2.2,`再生毒繭（火燃燒／爆擊可破）`,`#7eff68`))}},xd=class extends vd{meteorT=4;summonT=12;moltenT=15;constructor(e,t,n,r){super(e,`balrog`,t,n,r,16733216)}breakMoltenShield(){if(!this.shielded)return;this.shieldUntil=0;let e=this.m.to3(this.x,this.y);this.m.fx.text(e.x,e.y+2,`❄️ 熔岩神盾冰裂！`,`#88e8ff`),this.m.fx.ring(e.x,e.y,2.6,8972543)}act(e){let t=this.m,n=t.B,r=t.to3(this.x,this.y);if(this.tickContact(e),this.meteorT-=e,this.meteorT<=0){this.meteorT=5.8,t.fx.text(r.x,r.y+2.2,`獄火流星`,`#ff7838`);let e=t.viewTopY();for(let r=0;r<7;r++){let r=n*(1.3+Math.random()*6.4);t.addProjectile({kind:`fireball`,x:r,y:e-Math.random()*n*2.5,vx:(Math.random()-.5)*n,vy:6.8*n,r:13,life:4,from:`enemy`,dmg:22*this.dmgMul,passThrough:!0})}}this.summonT-=e,this.summonT<=0&&(this.summonT=14,t.enemies.filter(e=>!e.isBoss&&Math.abs(e.y-this.y)<n*6).length<4&&(t.fx.text(r.x,r.y+2.2,`深淵號令`,`#ffb848`),t.spawnEnemy(`zombie`,this.x-n*2.4,this.y+n*.4).promoteElite(),t.spawnEnemy(`skeleton`,this.x+n*2.4,this.y+n*.5))),this.moltenT-=e,this.moltenT<=0&&(this.moltenT=18,this.shieldUntil=t.time+6,t.fx.text(r.x,r.y+2.2,`熔岩神盾（冰凍／聖可破）`,`#ff6830`))}};function Sd(e,t,n,r,i){switch(t){case`golem`:return new yd(e,n,r,i);case`spider_queen`:return new bd(e,n,r,i);case`balrog`:return new xd(e,n,r,i)}}var Cd=new Oa(1,.09),wd=1,Td=class{m;power;uid=wd++;def;hp;maxHp;hpBonusMul=1;ultRateMul=1;star=1;dupStacks=0;body;group=new ir;sprite;mat;hpFill;ultFill;webMesh;offset;hitCd=0;icd=0;lastHit;invulnUntil;webbedUntil=0;ultTimer;charge=0;passiveT=0;auraUntil=0;auraT=0;hurtFlash=0;dead=!1;scale;volleyStacks=0;volleyUntil=0;hitsSinceThrow=0;returningToHero=!1;heavyVolleyReady=!1;bardinShockReady=!1;veraCritUntil=0;ignisMeteorReady=!1;irisFrostUntil=0;lastCatchTime=-10;constructor(e,t,n,r,i,a){this.m=e,this.power=n,this.def=k[t],this.hpBonusMul=a?.hpBonusMul??1,this.ultRateMul=a?.ultRateMul??1,this.star=a?.star??1,this.maxHp=this.hp=this.def.baseHp*(1+(n-1)*.6)*e.mods.hpMul*this.hpBonusMul,this.scale=this.def.scale*Math.min(1.28,1+(n-1)*.2);let o=this.scale;if(t===`core_orb`)this.body=X.default.Bodies.circle(r,i,18*o,{friction:.1,restitution:this.def.restitution,frictionAir:.015,collisionFilter:{group:-1},label:`weapon`}),this.offset={x:0,y:0};else{let e=52*o,n=10*o,a=X.default.Bodies.rectangle(0,0,e,n,{angle:-Math.PI/4}),s=e/2-9*o,c=X.default.Bodies.rectangle(Math.SQRT1_2*s,-Math.SQRT1_2*s,30*o,14*o,{angle:Math.PI/4});this.body=X.default.Body.create({parts:[a,c],friction:t===`drill`?.08:.2,restitution:this.def.restitution,frictionAir:.003,collisionFilter:{group:-1},label:`weapon`}),this.offset={x:-this.body.position.x,y:-this.body.position.y},X.default.Body.setPosition(this.body,{x:r,y:i})}this.body.plugin={kind:`weapon`,w:this},X.default.Body.setAngle(this.body,Math.random()*Math.PI*2),X.default.Body.setAngularVelocity(this.body,(Math.random()-.5)*.35),this.throwFromHero(r+(Math.random()-.5)*e.B*1.6,i+e.B*5,!1);let s=qu.weapon(t),c=f(this.def.element);this.mat=new Va({map:s,transparent:!0,alphaTest:.5,emissive:16777215,emissiveMap:s,emissiveIntensity:t===`excalibur`?.25:.18,side:2}),this.sprite=new q(new Oa(1.5*o,1.5*o),this.mat),this.group.add(this.sprite);let l=new q(Cd,new zi({color:1052688}));l.scale.set(1.1,this.def.ult?1.6:1,1),l.position.set(0,.95*o,.01),this.hpFill=new q(Cd,new zi({color:t===`excalibur`?16769126:5963626})),this.hpFill.position.set(0,.95*o+(this.def.ult?.03:0),.02),this.ultFill=new q(Cd,new zi({color:new K(c.color).multiplyScalar(1.15)})),this.ultFill.scale.y=.5,this.ultFill.position.set(0,.95*o-.045,.02),this.ultFill.visible=!!this.def.ult,this.group.add(l,this.hpFill,this.ultFill),this.webMesh=new q(new Oa(1.4,1.4),new zi({map:qu.web(),transparent:!0,depthWrite:!1})),this.webMesh.position.z=.05,this.webMesh.visible=!1,this.group.add(this.webMesh),this.group.position.z=.6,this.lastHit=e.time,this.invulnUntil=e.time+e.mods.spawnInvuln,this.ultTimer=this.def.ult?.type===`cd`?this.def.ult.value*e.mods.ultMul*.6:0}get x(){return this.body.position.x}get y(){return this.body.position.y}get dupMul(){let e=this.def.id===`excalibur`?h.holyDupBoost:h.dupBoost;return 1+this.dupStacks*e}get dmg(){let e=1+Math.max(0,this.reso-h.resonanceMaxLv)*h.endlessResoExtraBonus,t=this.m.overdriveActive?this.m.overdriveDmgMul:1,n=this.volleyStacks>0&&this.m.time<this.volleyUntil?1+h.volleyBaseDmgBonus+Math.min(h.volleyMaxStacks-1,this.volleyStacks-1)*h.volleyStackDmgBonus:1,r=this.heavyVolleyReady?h.heavyVolleyDmgMul:1;return this.def.dmg*this.power*this.dupMul*this.m.mods.dmgMul*e*t*n*r}get hitInterval(){let e=this.def.id===`drill`||this.def.id===`katar`?h.hitCooldown*.5:h.hitCooldown;return(this.m.overdriveActive?e*h.overdriveHitCdMul:e)*(this.m.heroId===`kael`&&this.m.time<this.volleyUntil?.5:1)}throwFromHero(e,t,n){this.hitsSinceThrow=0,this.returningToHero=!1;let r=this.m;if(n){let e=Math.max(r.B*1.2,Math.min((r.cols-1.2)*r.B,r.heroX)),t=r.heroY+r.B*.65;X.default.Body.setPosition(this.body,{x:e,y:t})}let i=e-this.x,a=Math.max(r.B*2.5,t-this.y),o=Math.hypot(i,a)||1,s=r.heroId===`kael`&&(this.def.element===`thunder`||this.def.archetype===`pinball`)?1.25:1,c=n?h.volleySpeedMul:1,l=this.def.throwSpeed*.52*s*c;X.default.Body.setVelocity(this.body,{x:Math.max(-8.5,Math.min(8.5,i/o*l)),y:Math.max(4.2,a/o*l)}),X.default.Body.setAngularVelocity(this.body,(Math.random()<.5?-1:1)*(n?.48:.32))}get reso(){return this.def.element===`holy`?Math.max(...Object.values(this.m.resonance)):this.m.resonance[this.def.element]}get invuln(){return this.m.time<this.invulnUntil||this.m.time<this.m.shieldUntil}get ultReady(){let e=this.def.ult;return e?e.type===`cd`?1-Math.max(0,this.ultTimer)/(e.value*this.m.mods.ultMul):Math.min(1,this.charge/(e.value*this.m.mods.ultMul)):0}src(e=`hit`,t=!1){return{element:this.def.element,kind:e,weapon:this,crit:t}}upgradeFromDuplicate(e,t=1,n=1,r=1){if(t>this.hpBonusMul&&(this.hpBonusMul=t),n>this.ultRateMul&&(this.ultRateMul=n),r>this.star&&(this.star=r),e>this.power){let t=this.maxHp;this.power=e,this.maxHp=this.def.baseHp*(1+(this.power-1)*.6)*this.m.mods.hpMul*this.hpBonusMul,this.maxHp<t&&(this.maxHp=t)}let i=this.dupStacks<h.maxDupStacks;i&&this.dupStacks++;let a=this.maxHp*h.dupHealPct;this.hp=Math.min(this.maxHp,this.hp+a);let o=this.m.to3(this.x,this.y),s=f(this.def.element);this.m.fx.ring(o.x,o.y,1.35,s.color,.45);let c=Math.round(h.dupHealPct*100);return this.m.fx.text(o.x,o.y+.9,i?`${this.def.name} +${Math.round((this.dupMul-1)*100)}% & +${c}%HP！`:`${this.def.name} +${c}%HP！`,s.css,1.25,.46),i}update(e){let t=this.m,n=t.overdriveActive?1.6:1;if(this.hitCd-=e,this.icd-=e*n,this.def.lifespanDecay){let n=t.heroId===`iris`?.65:1;this.hp-=this.maxHp*h.holyDecayPct*n*e}let r=this.body;if(this.returningToHero){let e=t.heroX-this.x,n=Math.max(-7.5,Math.min(7.5,e/t.B*2.3)),i=-Math.max(6.8,this.def.throwSpeed*.48);X.default.Body.setVelocity(r,{x:r.velocity.x*.75+n*.25,y:i})}else if(this.def.id===`core_orb`)X.default.Body.setVelocity(r,{x:Math.max(-4.5,Math.min(4.5,r.velocity.x)),y:Math.min(t.time<this.webbedUntil?.8:2.6,r.velocity.y)}),X.default.Body.setAngularVelocity(r,.08);else{let n=(this.def.gravityScale-1)*6.5*e;Math.abs(n)>1e-4&&X.default.Body.setVelocity(r,{x:r.velocity.x,y:r.velocity.y+n});let i=t.time<this.volleyUntil?1.25:1,a=t.time<this.webbedUntil?1.2:h.maxFall*Math.max(1,this.def.gravityScale*1.12)*i;(r.velocity.y>a||r.velocity.y<-13.5||Math.abs(r.velocity.x)>9.5)&&X.default.Body.setVelocity(r,{x:Math.max(-9.5,Math.min(9.5,r.velocity.x)),y:Math.max(-13.5,Math.min(a,r.velocity.y))})}if(t.time<this.webbedUntil&&X.default.Body.setAngularVelocity(r,r.angularVelocity*.9),this.def.id===`spear`||this.def.id===`icicle`){let t=3*Math.PI/4-r.angle;t=Math.atan2(Math.sin(t),Math.cos(t)),X.default.Body.setAngle(r,r.angle+t*Math.min(1,e*(this.def.id===`spear`?6:3))),this.def.id===`spear`&&X.default.Body.setAngularVelocity(r,0)}this.def.id===`drill`&&(X.default.Body.setAngularVelocity(r,.35),X.default.Body.setVelocity(r,{x:r.velocity.x*.9,y:Math.max(r.velocity.y,2.6)}));let i=Math.hypot(r.velocity.x,r.velocity.y),a=t.overdriveActive?h.hopIdle*.52:h.hopIdle;if(t.time-this.lastHit>a&&i<(t.overdriveActive?2.8:2)){this.lastHit=t.time;let e=t.nearestEnemy(this.x,this.y,9*t.B),n=e?(e.x-this.x)/t.B:(Math.random()-.5)*4,i=t.overdriveActive?6:4.5;X.default.Body.setVelocity(r,{x:Math.max(-i,Math.min(i,n*(t.overdriveActive?1.45:1.1))),y:this.def.id===`core_orb`?-3.4:t.overdriveActive?-7.4:-6.5}),X.default.Body.setAngularVelocity(r,(Math.random()-.5)*(t.overdriveActive?.65:.4))}Pd(t,this,e);let o=Math.cos(r.angle),s=Math.sin(r.angle),c=r.position.x+this.offset.x*o-this.offset.y*s,l=r.position.y+this.offset.x*s+this.offset.y*o,u=t.to3(c,l);(t.overdriveActive||t.time<this.volleyUntil)&&Math.random()<e*9&&t.emitOverdriveSpark(u.x,u.y),this.group.position.x=u.x,this.group.position.y=u.y,this.sprite.rotation.z=-r.angle;let d=Math.max(0,this.hp/this.maxHp);if(this.hpFill.scale.x=d,this.hpFill.position.x=-(1-d)/2,this.def.lifespanDecay?this.hpFill.material.color.setHex(d>.35?16769126:16740416):this.hpFill.material.color.setHex(d>.5?5963626:d>.25?16764992:16728128),this.def.ult){let e=this.ultReady;this.ultFill.scale.x=e,this.ultFill.position.x=-(1-e)/2}if(this.webMesh.visible=t.time<this.webbedUntil,this.hurtFlash>0)this.hurtFlash-=e,this.mat.color.setRGB(1.25,.72,.72);else if(this.invuln){let e=1.1+Math.sin(t.time*2.5)*.06;this.mat.color.setRGB(e,e,.86*e)}else this.mat.color.setRGB(1,1,1);this.mat.emissiveIntensity=this.ultReady>=1?.28+Math.sin(t.time*2.5)*.05:this.def.id===`excalibur`?.25:.18}};function Ed(e,t){return t.kind===`block`?[t.r,t.c]:e.cellOf(t.e.x,t.e.y)}function Dd(e,t){let n=t.power>=1.45?2:1;return Math.round(n*g.rangeMul(t.reso))+e.mods.aoeBonus}function Od(e,t,n,r,i,a=5,o=!1){let s=4+g.poisonDurAdd(t.reso),c=t.dmg*.4,l=e.time<t.veraCritUntil?r*2:r;n.kind===`block`?e.poisonCell(n.r,n.c,c*l,s,i,o):e.poisonEnemy(n.e,c,s,l,i,a,o)}function kd(e,t,n){t.hitsSinceThrow++;let r=t.dmg,i=(e.overdriveActive?h.overdriveUltRateMul:1)*t.ultRateMul,[a,o]=Ed(e,n),s=e.to3(...e.center(a,o));if(t.heavyVolleyReady&&(t.heavyVolleyReady=!1,e.fx.text(s.x,s.y+.65,`💥 重擊扣殺 ×1.6!`,`#ffaa48`,.85,.38),e.fx.ring(s.x,s.y,1.4,16755272,.35)),t.bardinShockReady&&(t.bardinShockReady=!1,e.explode(t.x,t.y,2.5,r*.6,t.src(`shock`)),e.fx.text(s.x,s.y+.7,`🛡️ 鍛鐵震波！`,`#ffd060`,.85,.38)),t.ignisMeteorReady){t.ignisMeteorReady=!1,e.explode(t.x,t.y,2.5,r*1.5,t.src(`fire`));let n=r*.55*g.burnMul(t.reso);for(let t=a-2;t<=a+2;t++)for(let r=o-2;r<=o+2;r++)e.burnCell(t,r,n,4);for(let r of e.enemiesInRadius(t.x,t.y,2.6*e.B))e.burnEnemy(r,n,4);e.fx.text(s.x,s.y+.7,`🔥 獄炎隕落！`,`#ff7838`,.9,.4)}switch(e.time<t.irisFrostUntil&&(n.kind===`enemy`?e.freezeEnemy(n.e,1.5):e.frostCell(n.r,n.c,4)),t.def.id){case`pick`:n.kind===`block`&&e.damageCell(n.r,n.c,r*.3,t.src(`hit`));break;case`baton`:if(t.icd>0)break;t.icd=.55,Md(e,t,1+Math.floor(g.chainAdd(t.reso)/2),4,r*.6);break;case`needle`:n.kind===`block`?e.poisonCell(n.r,n.c,r*.3,2.5+g.poisonDurAdd(t.reso)*.5,!1):e.poisonEnemy(n.e,r*.3,2.5+g.poisonDurAdd(t.reso)*.5,1,!1);break;case`torch`:if(Math.random()<.3){let i=r*.4*g.burnMul(t.reso);n.kind===`block`?e.burnCell(n.r,n.c,i,2):e.burnEnemy(n.e,i,2)}break;case`icicle`:n.kind===`enemy`?e.freezeEnemy(n.e,.8+g.freezeAdd(t.reso)*.5):e.frostCell(n.r,n.c,2);break;case`axe`:{if(t.icd>0)break;t.icd=.4;let n=Dd(e,t);e.damageSquare(a,o,n,r*.45,t.src(`hit`)),e.fx.rect(s.x,s.y,n*2+1,n*2+1,14196832,.2,.9),t.charge+=i;break}case`blade`:if(t.icd>0)break;t.icd=.45,Md(e,t,2+Math.floor(Math.random()*3)+g.chainAdd(t.reso)+e.mods.thunderChainBonus,5,r*.8);break;case`dagger`:Od(e,t,n,1,!1),t.charge+=i;break;case`sword`:{let i=r*.5*g.burnMul(t.reso);n.kind===`block`?e.burnCell(n.r,n.c,i,3):e.burnEnemy(n.e,i,3);break}case`spear`:if(n.kind===`block`){if(t.icd>0)break;t.icd=.35;let n=Math.min(7,3+Math.round((t.power-1)*6));for(let i=1;i<=n;i++)e.damageCell(a+i,o,r*.5,t.src(`ice`));let i=e.to3(...e.center(a,o)),s=e.to3(...e.center(a+n,o));e.fx.rect(i.x,(i.y+s.y)/2,.35,i.y-s.y+1,9103615,.18,1)}else e.freezeEnemy(n.e,2+g.freezeAdd(t.reso));break;case`hammer`:if(t.icd>0)break;t.icd=.9,jd(e,t,a,r*.5);break;case`halberd`:t.charge+=r;break;case`scythe`:Od(e,t,n,2,!0);break;case`meteor`:if(t.icd>0)break;t.icd=.7,e.explode(t.x,t.y+e.B*.4,1.6+e.mods.aoeBonus,r,t.src(`explosion`)),X.default.Body.setVelocity(t.body,{x:t.body.velocity.x+(Math.random()-.5)*3,y:-5}),t.charge+=i;break;case`boomerang`:if(t.icd>0)break;t.icd=1.2;for(let n=0;n<3;n++){let i=Math.PI/2+(n-1)*.9+(Math.random()-.5)*.5,a=8*e.B;e.addProjectile({kind:`shard`,x:t.x,y:t.y,vx:Math.cos(i)*a,vy:Math.sin(i)*a,r:10,life:.55,from:`weapon`,dmg:r*.6,src:t.src(`ice`),pierce:2})}t.charge+=i;break;case`drill`:n.kind===`block`&&e.damageCell(a+1,o,r*.55,t.src(`hit`)),t.charge+=i;break;case`core_orb`:break;case`katar`:{let a=(n.kind===`block`?e.isCellPoisoned(n.r,n.c):n.e.poisonUntil>e.time)?.6:.3;Math.random()<a&&(n.kind===`block`?e.damageCell(n.r,n.c,r,t.src(`hit`,!0)):e.damageEnemy(n.e,r,t.src(`hit`,!0)),e.fx.text(s.x+(Math.random()-.5)*.4,s.y+.5,`爆擊 ×2!`,`#ffd84a`,.65,.38),e.fx.ring(s.x,s.y,.85,16769126,.22)),Od(e,t,n,1,!1),t.charge+=i;break}case`flameblade`:{if(t.icd>0)break;t.icd=.38;let n=Math.round(1*g.rangeMul(t.reso)),i=r*.55*g.burnMul(t.reso);for(let s=a-n;s<=a+n;s++)for(let a=o-n;a<=o+n;a++)e.damageCell(s,a,r*.35,t.src(`fire`)),e.burnCell(s,a,i,3.5);for(let a of e.enemiesInRadius(t.x,t.y,(n+.8)*e.B))e.damageEnemy(a,r*.35,t.src(`fire`)),e.burnEnemy(a,i,3.5);e.fx.rect(s.x,s.y,n*2+1,n*2+1,16738858,.22,.95);break}case`frostclaw`:{if(t.icd>0)break;t.icd=.42;let n=1.6+g.freezeAdd(t.reso);for(let n=a-1;n<=a+1;n++)for(let i=o-1;i<=o+1;i++)e.frostCell(n,i,4+g.freezeAdd(t.reso)),e.damageCell(n,i,r*.3,t.src(`ice`));for(let i of e.enemiesInRadius(t.x,t.y,1.8*e.B))e.freezeEnemy(i,n),e.damageEnemy(i,r*.35,t.src(`ice`));e.fx.rect(s.x,s.y,3,3,8051967,.2,.85);break}case`titan`:{if(t.icd>0)break;t.icd=.65;let n=Math.round(2*g.rangeMul(t.reso))+e.mods.aoeBonus;e.damageSquare(a,o,n,r*.6,t.src(`explosion`));for(let r of e.enemiesInRadius(t.x,t.y,(n+.6)*e.B))e.stunEnemy(r,1.5);e.fx.rect(s.x,s.y,n*2+1,n*2+1,14723176,.25,.95),e.fx.shake=Math.max(e.fx.shake,.16);break}case`mjolnir`:if(t.icd>0)break;t.icd=.4,Md(e,t,3+g.chainAdd(t.reso)+e.mods.thunderChainBonus,6,r*.7);break;case`hydra`:Od(e,t,n,3,!0,10,!0),t.charge+=i;break;case`dragon`:{if(t.icd>0)break;t.icd=.65;let n=2.8+e.mods.aoeBonus;e.explode(t.x,t.y+e.B*.3,n,r*.9,t.src(`explosion`));let i=r*.55*g.burnMul(t.reso);for(let t=a-2;t<=a+2;t++)for(let n=o-2;n<=o+2;n++)e.burnCell(t,n,i,3.5);for(let r of e.enemiesInRadius(t.x,t.y,(n+.5)*e.B))e.burnEnemy(r,i,3.5);X.default.Body.setVelocity(t.body,{x:t.body.velocity.x+(Math.random()-.5)*3,y:-4.8});break}case`excalibur`:{if(t.icd>0)break;t.icd=.36;for(let n=1;n<e.cols-1;n++)e.damageCell(a,n,r*.55,t.src(`holy`));for(let n=a-3;n<=a+6;n++)e.damageCell(n,o,r*.55,t.src(`holy`));for(let n of[...e.enemies]){let[i,s]=e.cellOf(n.x,n.y);(Math.abs(i-a)<=1||Math.abs(s-o)<=1)&&e.damageEnemy(n,r*.65,t.src(`holy`))}let n=e.to3(...e.center(a,4)),i=e.to3(...e.center(a+1,o));e.fx.rect(n.x,n.y,e.cols-2,.36,16771208,.22,.95),e.fx.rect(i.x,i.y,.38,10,16771208,.22,.95);break}}Ad(e,t)}function Ad(e,t){if(t.y<=e.heroY+e.B*1.1)return;let n=t.body,r=(e.heroX-t.x)/e.B,i=Math.max(-5.5,Math.min(5.5,r*1.05+(Math.random()-.5)*3));switch(t.def.archetype){case`pinball`:{let e=-Math.max(7.2,t.def.throwSpeed*.46);X.default.Body.setVelocity(n,{x:Math.max(-7.5,Math.min(7.5,i+(Math.random()-.5)*2.8)),y:e});break}case`boomerang`:{let e=t.def.id===`boomerang`?1:2;t.hitsSinceThrow>=e&&(t.returningToHero=!0,X.default.Body.setVelocity(n,{x:i,y:-Math.max(7,t.def.throwSpeed*.47)}));break}case`pierce`:if(t.hitsSinceThrow<3)X.default.Body.setVelocity(n,{x:n.velocity.x*.7,y:Math.max(n.velocity.y,3.6)});else{t.returningToHero=!0,X.default.Body.setVelocity(n,{x:i,y:-8.2});let r=e.to3(t.x,t.y);e.fx.text(r.x,r.y+.45,`🚀 噴射返航`,`#8ae8ff`,.65,.3)}break;case`balanced`:t.hitsSinceThrow>=2&&X.default.Body.setVelocity(n,{x:i,y:-Math.max(6.8,t.def.throwSpeed*.46)});break;case`heavy`:t.hitsSinceThrow>=2&&X.default.Body.setVelocity(n,{x:i*.85,y:-Math.max(6.5,t.def.throwSpeed*.48)})}}function jd(e,t,n,r){for(let i=1;i<e.cols-1;i++)e.damageCell(n,i,r,t.src(`shock`));for(let i of e.enemies){let[a]=e.cellOf(i.x,i.y);Math.abs(a-n)<=1&&(e.damageEnemy(i,r,t.src(`shock`)),e.stunEnemy(i,1.5))}let i=e.to3(...e.center(n,4));e.fx.rect(i.x,i.y,e.cols-2,.4,14725232,.25,.85),e.fx.shake=Math.max(e.fx.shake,.14)}function Md(e,t,n,r,i){let a=e.to3(t.x,t.y);for(let o of e.randomTargets(t.x,t.y,r*e.B,n)){let[n,r]=o.kind===`block`?e.center(o.r,o.c):[o.e.x,o.e.y];e.fx.bolt(a,e.to3(n,r)),o.kind===`block`?e.damageCell(o.r,o.c,i,t.src(`thunder`)):e.damageEnemy(o.e,i,t.src(`thunder`))}}function Nd(e,t,n,r,i,a){let o=0;for(let s=r;s<r+i;s++)e.damageCell(s,n,a,t.src(`thunder`))!==null&&(o+=a);let s=[];for(let t of e.enemies){let[a,o]=e.cellOf(t.x,t.y);Math.abs(o-n)<=+!!t.isBoss&&a>=r-1&&a<r+i&&s.push(t)}let c=2+g.chainAdd(t.reso)+e.mods.thunderChainBonus;for(let n of s){e.damageEnemy(n,a,t.src(`thunder`)),o+=a;let r=n,i=new Set([n]);for(let n=0;n<c;n++){let n=e.enemies.find(t=>!i.has(t)&&Math.hypot(t.x-r.x,t.y-r.y)<5*e.B);if(!n)break;i.add(n),e.fx.bolt(e.to3(r.x,r.y),e.to3(n.x,n.y),16771200,.08),e.damageEnemy(n,a*.7,t.src(`thunder`)),o+=a*.7,r=n}}let l=e.to3(...e.center(r-6,n)),u=e.to3(...e.center(r+i-1,n));return e.fx.bolt(l,u,16771192,.12,.25),e.fx.rect(u.x,(l.y+u.y)/2,.5,l.y-u.y,16771224,.18,.75),o}function Pd(e,t,n){let r=t.dmg,i=(e.overdriveActive?h.overdriveUltRateMul:1)*t.ultRateMul,a=e.overdriveActive?1.6:1,[o,s]=e.cellOf(t.x,t.y);if(t.def.id===`halberd`)t.passiveT+=n*a,t.passiveT>=3&&(t.passiveT=0,t.charge+=Nd(e,t,Math.max(1,Math.min(e.cols-2,s)),o+1,8,r*1.2)*i);else if(t.def.id===`mjolnir`){if(t.passiveT+=n*a,t.passiveT>=1.5){t.passiveT=0;let n=Math.max(1,Math.min(e.cols-2,s)),i=new Set([n]);for(;i.size<3;)i.add(1+Math.floor(Math.random()*(e.cols-2)));for(let n of i)Nd(e,t,n,o,9,r*.95)}}else t.def.id===`core_orb`&&(t.passiveT+=n*a,t.passiveT>=.5&&(t.passiveT=0,Md(e,t,2+Math.floor(g.chainAdd(t.reso)/2),4.5,r*.65)));if(t.auraUntil>e.time&&(t.auraT-=n,t.auraT<=0)){t.auraT=.5;let n=4+g.poisonDurAdd(t.reso);for(let t=o-2;t<=o+2;t++)for(let i=s-2;i<=s+2;i++)e.poisonCell(t,i,r*.3,n,!0);for(let i of e.enemiesInRadius(t.x,t.y,2.5*e.B))e.poisonEnemy(i,r*.3,n,1,!0);let i=e.to3(t.x,t.y);e.fx.ring(i.x,i.y,2.5,8314970,.45)}let c=t.def.ult;c&&(c.type===`cd`?(t.ultTimer-=n*i,t.ultTimer<=0&&(t.ultTimer=c.value*e.mods.ultMul,Fd(e,t))):t.charge>=c.value*e.mods.ultMul&&(t.charge=0,Fd(e,t)))}function Fd(e,t){if(!t.def.ult)return;let n=t.dmg,[r,i]=e.cellOf(t.x,t.y),a=e.to3(t.x,t.y),o=f(t.def.element);switch(e.fx.text(a.x,a.y+1.1,t.def.ult.name+`！`,o.css,1.35,.56),t.def.id){case`axe`:{let a=3+e.mods.aoeBonus;e.damageSquare(r+1,i,a,n*2,t.src(`explosion`));let o=e.to3(...e.center(r+1,i));e.fx.rect(o.x,o.y,a*2+1,a*2+1,14196832,.35,1),e.fx.explosion(o.x,o.y,2.4,14196832);break}case`hammer`:for(let r=1;r<=3;r++)e.schedule(.3*(r-1),()=>!t.dead&&jd(e,t,e.cellOf(t.x,t.y)[0]+r,n*1.2));break;case`blade`:Md(e,t,10+e.mods.thunderChainBonus,8,n*1.5);break;case`halberd`:for(let r=0;r<10;r++)e.schedule(.5*r,()=>{if(t.dead)return;let[r]=e.cellOf(t.x,t.y);Nd(e,t,1+Math.floor(Math.random()*(e.cols-2)),r+1,8,n*1.5)});break;case`dagger`:{let o=4+g.poisonDurAdd(t.reso);for(let t=r-2;t<=r+2;t++)for(let r=i-2;r<=i+2;r++)e.poisonCell(t,r,n*.4*3,o,!1);for(let r of e.enemiesInRadius(t.x,t.y,2.5*e.B))e.poisonEnemy(r,n*.4,o,3,!1);e.fx.ring(a.x,a.y,2.8,8314970,.6),e.fx.rect(a.x,a.y,5,5,5951536,.4,.85);break}case`scythe`:t.auraUntil=e.time+8,t.auraT=0;break;case`sword`:{let o=n*.5*g.burnMul(t.reso);for(let a=r+1;a<=r+10;a++){e.damageCell(a,i,n*1.5,t.src(`fire`)),e.burnCell(a,i,o,4);for(let r of e.enemies){let[s,c]=e.cellOf(r.x,r.y);s===a&&Math.abs(c-i)<=1&&(e.damageEnemy(r,n*1.5,t.src(`fire`)),e.burnEnemy(r,o,4))}}let s=e.to3(...e.center(r+10,i));e.fx.rect(a.x,(a.y+s.y)/2,1.3,a.y-s.y,16738858,.5,1),e.fx.light(a.x,(a.y+s.y)/2,16738858,5,.5,7);break}case`meteor`:{let r=e.viewTopY();for(let i=0;i<5;i++){let a=e.B*(1.5+Math.random()*(e.cols-3));e.schedule(.15*i,()=>e.addProjectile({kind:`meteor`,x:a,y:r-e.B,vx:0,vy:10*e.B,r:14,life:4,from:`weapon`,dmg:n*1.2,src:t.src(`explosion`)}))}break}case`spear`:{for(let a=r+1;a<=r+15;a++){e.damageCell(a,i,n*2,t.src(`ice`));for(let r of e.enemies){let[o,s]=e.cellOf(r.x,r.y);o===a&&Math.abs(s-i)<=+!!r.isBoss&&(e.damageEnemy(r,n*2,t.src(`ice`)),e.freezeEnemy(r,3))}}let o=e.to3(...e.center(r+15,i));e.fx.rect(a.x,(a.y+o.y)/2,.65,a.y-o.y,9103615,.45,1.05),e.fx.light(a.x,(a.y+o.y)/2,9103615,5,.45,7);break}case`boomerang`:for(let r of e.enemies)Math.abs(r.y-t.y)<8*e.B&&(e.freezeEnemy(r,3+g.freezeAdd(t.reso)),e.damageEnemy(r,n,t.src(`ice`)));for(let i=r-3;i<=r+4;i++)for(let r=1;r<e.cols-1;r++)e.damageCell(i,r,n*.5,t.src(`ice`));e.fx.rect(a.x,a.y,e.cols,9,10152191,.5,.85);break;case`drill`:{let o=Math.max(1,Math.min(e.cols-3,i));for(let i=r+1;i<=r+8;i++)for(let r of[o,o+1])e.damageCell(i,r,n*2.2,t.src(`hit`));for(let i of e.enemies){let[a,s]=e.cellOf(i.x,i.y);a>=r&&a<=r+8&&s>=o-1&&s<=o+2&&e.damageEnemy(i,n*2.4,t.src(`hit`))}let s=e.to3(...e.center(r+8,o+.5));e.fx.rect(s.x,(a.y+s.y)/2,2,a.y-s.y+1,14198888,.4,.95);break}case`core_orb`:e.fx.ring(a.x,a.y,4.5,8448255,.5),Md(e,t,12+e.mods.thunderChainBonus,7,n*1.6),e.boss instanceof yd&&e.boss.shielded&&Math.hypot(e.boss.x-t.x,e.boss.y-t.y)<9*e.B&&e.boss.breakShell();break;case`katar`:{let r=e.randomTargets(t.x,t.y,6*e.B,6),i=4+g.poisonDurAdd(t.reso);r.forEach((r,o)=>{e.schedule(o*.06,()=>{if(t.dead)return;let[o,s]=r.kind===`block`?e.center(r.r,r.c):[r.e.x,r.e.y],c=e.to3(o,s);e.fx.bolt(a,c,9502584,.07,.18),e.fx.text(c.x,c.y+.35,`×2!`,`#ffd84a`,.55,.34),r.kind===`block`?(e.damageCell(r.r,r.c,n*2.4,t.src(`hit`,!0)),e.poisonCell(r.r,r.c,n*.5,i,!1)):(e.damageEnemy(r.e,n*2.4,t.src(`hit`,!0)),e.poisonEnemy(r.e,n*.5,i,2,!1))})});break}case`flameblade`:{let o=2+e.mods.aoeBonus,s=n*.65*g.burnMul(t.reso);e.damageSquare(r,i,o,n*1.6,t.src(`fire`));for(let t=r-o;t<=r+o;t++)for(let n=i-o;n<=i+o;n++)e.burnCell(t,n,s,4.5);for(let n of e.enemiesInRadius(t.x,t.y,(o+.8)*e.B))e.burnEnemy(n,s,4.5);e.fx.explosion(a.x,a.y,o+.4,16737320);break}case`frostclaw`:{let o=2.5+g.freezeAdd(t.reso);for(let a=r-2;a<=r+2;a++)for(let r=i-2;r<=i+2;r++)e.frostCell(a,r,6),e.damageCell(a,r,n*1.5,t.src(`ice`));for(let r of e.enemiesInRadius(t.x,t.y,3*e.B))e.freezeEnemy(r,o),e.damageEnemy(r,n*1.8,t.src(`ice`));e.fx.ring(a.x,a.y,3,8445183,.5),e.fx.rect(a.x,a.y,5,5,8445183,.35,.9);break}case`titan`:{for(let i=r+1;i<=r+6;i++)for(let r=1;r<e.cols-1;r++)e.damageCell(i,r,n*2.2,t.src(`explosion`));for(let i of[...e.enemies]){let[a]=e.cellOf(i.x,i.y);a>=r&&a<=r+7&&(e.damageEnemy(i,n*2.2,t.src(`explosion`)),e.stunEnemy(i,2))}let i=e.to3(...e.center(r+3,4));e.fx.rect(i.x,i.y,e.cols-2,6,14723176,.45,1),e.fx.explosion(i.x,i.y,3,14194768);break}case`mjolnir`:for(let r=0;r<5;r++)e.schedule(r*.12,()=>{t.dead||Md(e,t,4,9,n*1.5)});break;case`hydra`:{let o=6+g.poisonDurAdd(t.reso);e.damageSquare(r,i,3,n*1.4,t.src(`hit`));for(let t=r-3;t<=r+3;t++)for(let r=i-3;r<=i+3;r++)e.poisonCell(t,r,n*.6*6,o,!0,!0);for(let r of e.enemiesInRadius(t.x,t.y,3.8*e.B))e.poisonEnemy(r,n*.5,o,6,!0,10,!0);e.fx.ring(a.x,a.y,3.6,5826616,.55),e.fx.rect(a.x,a.y,7,7,5826616,.35,.85);break}case`dragon`:{let a=Math.max(2,Math.min(e.cols-3,i)),o=n*.7*g.burnMul(t.reso);for(let i=r+1;i<=r+12;i++)for(let r=a-1;r<=a+1;r++)e.damageCell(i,r,n*2,t.src(`explosion`)),e.burnCell(i,r,o,5);for(let i of[...e.enemies]){let[s,c]=e.cellOf(i.x,i.y);s>=r&&s<=r+12&&Math.abs(c-a)<=2&&(e.damageEnemy(i,n*2.2,t.src(`explosion`)),e.burnEnemy(i,o,5))}let s=e.to3(...e.center(r+1,a)),c=e.to3(...e.center(r+12,a));e.fx.rect(s.x,(s.y+c.y)/2,3,s.y-c.y+1,16734760,.5,1.05);break}case`excalibur`:{for(let r of[...e.enemies])Math.abs(r.y-t.y)<10*e.B&&e.damageEnemy(r,n*1.8,t.src(`holy`));for(let i=r+1;i<=r+5;i++)for(let r=1;r<e.cols-1;r++)e.damageCell(i,r,n*1.3,t.src(`holy`));let i=e.to3(...e.center(r+2,4));e.fx.ring(a.x,a.y,4.2,16771208,.5),e.fx.rect(i.x,i.y,e.cols-2,5.5,16771208,.4,.95);break}}}var Id={dirt:8016434,stone:8224130,deepslate:4868690,obsidian:3809360,seal:4774136,core:12611839,barrel:14176296,crystal:7923967,coal:3355443,iron:14203034,copper:14710330,gold:16767050,redstone:16722474,lapis:2775807,diamond:5963758,emerald:2817898},Ld=48,Rd=7,zd=class{level;mods;resonance;cb;heroId;B=h.block;cols=h.cols;isEndless;rows;scene=new pr;camera=new wo(30,1,.5,80);fx;time=0;timeLeft;engine;leftWall;rightWall;boxGeo=new Da(1,1,1);grid=new Map;pools=new Map;minStoredRow=0;generatedToRow=h.airRows-1;endlessChunkIdx=0;recycleTimer=0;backWallMesh;outerWallMesh;lastBgCenterRow=-9999;status=new Map;damaged=new Set;activeRows=new Set;gates=new Map;gatesCleared=0;kills=0;weapons=[];enemies=[];boss=null;projectiles=[];scheduled=[];pendingHits=new Map;acc=0;overdriveActive=!1;overdriveDmgMul=1;heroDef;heroX;heroY;heroInputDir=0;heroPointerActive=!1;heroPointerX=0;totalCatches=0;catchStreak=0;heroGroup=new ir;heroSprite;heroPad;heroLine;lavaY=-1.5*h.block;deepestY;shieldUntil=0;camY=0;camTargetY=0;isManualCam=!1;lockedWeaponUid=null;aspect=1;lastFocusY;lava;lavaCrust;lavaGlow;lights=[];hemi;cracks=[];debris=new pd(1500,.13,!1);sparks=new pd(1200,.11,!0);ended=!1;goalRow;tmpMat=new An;tmpCol=new K;zeroMat=new An().makeScale(0,0,0);constructor(e,t,n,r,i=`bardin`){this.level=e,this.mods=t,this.resonance=n,this.cb=r,this.heroId=i,this.heroDef=p[this.heroId]??p.bardin,this.fx=new md(this.scene),this.isEndless=e.goal===`endless`,this.timeLeft=this.isEndless?1/0:e.time+t.timeBonus;let a=e.goal===`core`?2:8;this.rows=this.isEndless?h.airRows+90:h.airRows+e.depth+a,this.goalRow=h.airRows+e.depth,this.deepestY=(h.airRows-.5)*this.B,this.heroX=this.cols/2*this.B,this.heroY=Math.max(.8*this.B,this.deepestY-h.heroLineGapRows*this.B),this.heroPointerX=this.heroX,this.lastFocusY=this.deepestY,this.camY=this.camTargetY=-this.deepestY/this.B,this.engine=X.default.Engine.create({gravity:{x:0,y:h.gravity,scale:.001}}),this.engine.positionIterations=6,this.engine.velocityIterations=4,X.default.Events.on(this.engine,`collisionStart`,e=>this.onCollide(e)),X.default.Events.on(this.engine,`collisionActive`,e=>this.onCollide(e));let o=6e3;if(this.leftWall=X.default.Bodies.rectangle(this.B/2,o/2-800,this.B,o,{isStatic:!0,friction:.1,restitution:.3}),this.rightWall=X.default.Bodies.rectangle((this.cols-.5)*this.B,o/2-800,this.B,o,{isStatic:!0,friction:.1,restitution:.3}),this.leftWall.plugin={kind:`wall`},this.rightWall.plugin={kind:`wall`},X.default.Composite.add(this.engine.world,[this.leftWall,this.rightWall]),this.setupScene(),this.setupHeroMesh(),this.setupSlidingBackdrop(),this.isEndless){for(let e=0;e<h.airRows;e++)this.setCell(e,0,`bedrock`,1),this.setCell(e,this.cols-1,`bedrock`,1);this.ensureEndlessChunks()}else this.generateCampaign();this.updateBackdropPosition(Math.floor(-this.camY)),this.lava=this.makeLava(),this.lavaCrust=this.makeLavaCrust(),this.lavaGlow=this.makeLavaGlow(),this.hemi=this.scene.children.find(e=>e instanceof fo)}idx(e,t){return e*this.cols+t}inB(e,t){return e>=0&&t>=0&&e<this.rows&&t<this.cols}block(e,t){return t<0||t>=this.cols||e<0?null:this.grid.get(this.idx(e,t))??null}isIndestructible(e){return e===`bedrock`||e===`seal`}isSolid(e,t){return t<=0||t>=this.cols-1?!0:e<0?!1:!this.isEndless&&e>=this.rows||this.grid.has(this.idx(e,t))}cellOf(e,t){return[Math.floor(t/this.B),Math.floor(e/this.B)]}center(e,t){return[(t+.5)*this.B,(e+.5)*this.B]}to3(e,t){return new H(e/this.B-this.cols/2,-t/this.B)}schedule(e,t){this.scheduled.push({t:e,fn:t})}setOverdrive(e,t=1){let n=e&&!this.overdriveActive;if(this.overdriveActive=e,this.overdriveDmgMul=e?t:1,n)for(let e of this.weapons){let t=this.to3(e.x,e.y);this.fx.ring(t.x,t.y,1.5,16754744,.45)}}emitOverdriveSpark(e,t){this.sparks.emit(e+(Math.random()-.5)*.6,t+(Math.random()-.5)*.6,.85,(Math.random()-.5)*1.5,1.4,0,16758848,.35,-1)}getPool(e){let t=this.pools.get(e);if(t)return t;let n=e===`stone`||e===`deepslate`||e===`bedrock`?1400:360,r=new Va({map:qu.block(e),roughness:.92,metalness:0});e===`core`?(r.emissive=new K(16777215),r.emissiveMap=qu.block(e),r.emissiveIntensity=.85):e===`seal`?(r.emissive=new K(16777215),r.emissiveMap=qu.block(e),r.emissiveIntensity=.55):e===`crystal`?(r.emissive=new K(16777215),r.emissiveMap=qu.block(e),r.emissiveIntensity=.5):(e===`diamond`||e===`emerald`||e===`redstone`||e===`gold`||e===`lapis`||e===`barrel`)&&(r.emissive=new K(16777215),r.emissiveMap=qu.block(e),r.emissiveIntensity=e===`barrel`?.22:.12);let i=new ca(this.boxGeo,r,n);i.instanceMatrix.setUsage(xt),i.frustumCulled=!1,i.count=n;let a=[];for(let e=n-1;e>=0;e--)i.setMatrixAt(e,this.zeroMat),i.setColorAt(e,this.tmpCol.setRGB(1,1,1)),a.push(e);return i.instanceMatrix.needsUpdate=!0,i.instanceColor&&(i.instanceColor.needsUpdate=!0),this.scene.add(i),t={mesh:i,free:a,max:n},this.pools.set(e,t),t}setCell(e,t,n,r){let i=this.idx(e,t),a=this.grid.get(i);if(a){a.body&&X.default.Composite.remove(this.engine.world,a.body);let e=this.getPool(a.type);e.mesh.setMatrixAt(a.inst,this.zeroMat),e.mesh.instanceMatrix.needsUpdate=!0,e.free.push(a.inst),this.grid.delete(i),this.damaged.delete(i),this.status.delete(i)}if(!n)return;let o=this.getPool(n);if(o.free.length===0&&(this.recycleRowsAbove(Math.floor(this.lavaY/this.B)-4),o=this.getPool(n),o.free.length===0))return;let s=o.free.pop(),c=this.to3(...this.center(e,t));this.tmpMat.makeTranslation(c.x,c.y,0),o.mesh.setMatrixAt(s,this.tmpMat),o.mesh.setColorAt(s,this.tmpCol.setRGB(1,1,1)),o.mesh.instanceMatrix.needsUpdate=!0,o.mesh.instanceColor&&(o.mesh.instanceColor.needsUpdate=!0);let l=this.isIndestructible(n)?1/0:Math.round(_[n].hp*r*h.blockHpHardcoreMul),u={type:n,hp:l,maxHp:l,inst:s,body:null};if(this.grid.set(i,u),this.activeRows.has(e)&&t>0&&t<this.cols-1){let[n,r]=this.center(e,t);u.body=X.default.Bodies.rectangle(n,r,this.B,this.B,{isStatic:!0,friction:.35,restitution:.35,label:`block`}),u.body.plugin={kind:`block`,r:e,c:t},X.default.Composite.add(this.engine.world,u.body)}}recycleRowsAbove(e){if(e<=this.minStoredRow)return;let t=new Set;for(let n=this.minStoredRow;n<=e;n++){this.activeRows.delete(n);for(let e=0;e<this.cols;e++){let r=this.idx(n,e),i=this.grid.get(r);if(!i)continue;i.body&&X.default.Composite.remove(this.engine.world,i.body);let a=this.getPool(i.type);a.mesh.setMatrixAt(i.inst,this.zeroMat),a.free.push(i.inst),t.add(a),this.grid.delete(r),this.damaged.delete(r),this.status.delete(r)}}for(let e of t)e.mesh.instanceMatrix.needsUpdate=!0;this.minStoredRow=e+1}setupSlidingBackdrop(){this.backWallMesh=new ca(this.boxGeo,new Va({map:qu.backWall(),color:10522760,roughness:1}),this.cols*Ld),this.backWallMesh.frustumCulled=!1,this.scene.add(this.backWallMesh),this.outerWallMesh=new ca(this.boxGeo,new Va({map:qu.block(`deepslate`),color:9076880,roughness:1}),672),this.outerWallMesh.frustumCulled=!1,this.scene.add(this.outerWallMesh)}updateBackdropPosition(e){if(e===this.lastBgCenterRow)return;this.lastBgCenterRow=e;let t=e-Math.floor(Ld/2),n=0;for(let e=t;e<t+Ld;e++)for(let t=0;t<this.cols;t++){let r=this.to3(...this.center(e,t));this.tmpMat.makeTranslation(r.x,r.y,-1),this.backWallMesh.setMatrixAt(n++,this.tmpMat)}this.backWallMesh.instanceMatrix.needsUpdate=!0,n=0;for(let e=t;e<t+Ld;e++)for(let t=1;t<=Rd;t++)for(let r of[-t,this.cols-1+t]){let i=this.to3(...this.center(e,r));this.tmpMat.makeTranslation(i.x,i.y,t%2*.15-.05),this.outerWallMesh.setMatrixAt(n++,this.tmpMat)}this.outerWallMesh.instanceMatrix.needsUpdate=!0}setupScene(){let e=this.scene;e.background=new K(460042),e.fog=new fr(460042,18,42),e.add(new fo(12562687,3810328,1));let t=new ko(16771280,1.1);t.position.set(3,8,10),e.add(t);for(let t=0;t<6;t++){let t=new Eo(16777215,0,6,1.6);e.add(t),this.lights.push(t)}e.add(this.debris.points,this.sparks.points);let n=new Oa(1.002,1.002);for(let t=0;t<36;t++){let t=new q(n,new zi({map:qu.crack(0),transparent:!0,depthWrite:!1,polygonOffset:!0,polygonOffsetFactor:-2}));t.visible=!1,e.add(t),this.cracks.push(t)}}setupHeroMesh(){let e=qu.hero(this.heroId),t=new Va({map:e,transparent:!0,alphaTest:.4,emissive:16777215,emissiveMap:e,emissiveIntensity:.32,side:2});this.heroSprite=new q(new Oa(1.55,1.55),t),this.heroSprite.position.set(0,.12,.04),this.heroPad=new q(new Oa(this.heroDef.catchWidth+.35,.24),new zi({color:this.heroDef.color,transparent:!0,opacity:.68,blending:2,depthWrite:!1})),this.heroPad.position.set(0,-.62,.02),this.heroLine=new q(new Oa(this.cols-2,.06),new zi({color:this.heroDef.color,transparent:!0,opacity:.28,blending:2,depthWrite:!1})),this.heroLine.position.set(0,-.62,.01),this.heroGroup.add(this.heroLine,this.heroPad,this.heroSprite),this.heroGroup.position.z=.82,this.scene.add(this.heroGroup);let n=this.to3(this.heroX,this.heroY);this.heroGroup.position.set(n.x,n.y,.82),this.heroLine.position.x=-n.x}setHeroInputDir(e){this.heroInputDir=Math.sign(e)}setHeroPointer(e,t){let n=Math.max(0,Math.min(1,e));this.heroPointerX=(1.15+n*(this.cols-2.3))*this.B,this.heroPointerActive=t}updateHeroAndVolley(e){let t=Math.max(1.1*this.B,Math.max(this.lavaY+2.1*this.B,this.deepestY-h.heroLineGapRows*this.B));this.heroY+=(t-this.heroY)*Math.min(1,e*6);let n=1.15*this.B,r=(this.cols-1.15)*this.B,i=this.heroDef.moveSpeed*6.5*this.B,a=0;if(this.heroInputDir!==0)a=this.heroInputDir,this.heroX+=a*i*e;else if(this.heroPointerActive){let t=this.heroPointerX-this.heroX;Math.abs(t)>1.5&&(a=Math.sign(t),this.heroX+=a*Math.min(Math.abs(t),i*1.35*e))}else{let t=null,n=1/0;for(let e of this.weapons)if(!(e.dead||e.hitsSinceThrow<1)&&(e.body.velocity.y<-.4||e.returningToHero)&&e.y>=this.heroY-this.B*.5){let r=e.y-this.heroY;r<n&&(n=r,t=e)}let r=(t?t.x:this.cols/2*this.B)-this.heroX;Math.abs(r)>2.5&&(a=Math.sign(r),this.heroX+=a*Math.min(Math.abs(r),i*.55*e))}this.heroX=Math.max(n,Math.min(r,this.heroX));let o=this.to3(this.heroX,this.heroY),s=Math.abs(Math.sin(this.time*5.2))*.05;this.heroGroup.position.set(o.x,o.y+s,.82),this.heroLine.position.x=-o.x,a!==0&&(this.heroSprite.scale.x=a<0?-1:1);let c=(this.heroDef.catchWidth*.55+.35)*this.B;for(let e of[...this.weapons])if(!(e.dead||e.hitsSinceThrow<1||this.time-e.lastCatchTime<.36)){if((e.body.velocity.y<1.8||e.returningToHero)&&Math.abs(e.y-this.heroY)<=1.05*this.B&&Math.abs(e.x-this.heroX)<=c)this.triggerHeroCatch(e);else if(e.body.velocity.y<0&&e.y<this.heroY-.65*this.B){e.volleyStacks=0,e.returningToHero=!1,e.hitsSinceThrow=0,e.lastCatchTime=this.time,this.catchStreak=0,e.invuln||(e.hp-=e.maxHp*h.missCeilingWearPct),X.default.Body.setPosition(e.body,{x:e.x,y:this.heroY+.45*this.B}),X.default.Body.setVelocity(e.body,{x:(Math.random()-.5)*3.2,y:4.5});let t=this.to3(e.x,this.heroY);this.fx.text(t.x,t.y+.45,`漏接 -8%HP`,`#ff7a68`,.72,.32),e.hp<=0&&this.killWeapon(e)}}}triggerHeroCatch(e){if(e.dead)return;e.lastCatchTime=this.time,this.totalCatches++,this.catchStreak++,e.volleyStacks=Math.min(h.volleyMaxStacks,e.volleyStacks+1),e.volleyUntil=this.time+h.volleyBuffSec;let t=e.def.lifespanDecay?.18:h.volleyHealPct;e.hp=Math.min(e.maxHp,e.hp+e.maxHp*t),e.def.archetype===`heavy`&&(e.heavyVolleyReady=!0);let n=this.nearestEnemy(this.heroX,this.heroY+4*this.B,10*this.B),r=n?n.x:this.heroX+(Math.random()-.5)*2.4*this.B,i=n?n.y:this.deepestY+2*this.B;switch(e.throwFromHero(r,i,!0),this.heroId){case`bardin`:e.bardinShockReady=!0;break;case`kael`:Md(this,e,3+this.mods.thunderChainBonus,6.5,e.dmg*.85);break;case`vera`:if(e.veraCritUntil=this.time+h.volleyBuffSec,this.totalCatches%3==0&&this.weapons.length<h.maxWeapons){let t=this.spawnWeapon(`needle`,e.power,{forceSpawn:!0});this.schedule(6,()=>{t.dead||this.killWeapon(t)})}break;case`ignis`:e.ignisMeteorReady=!0;break;case`iris`:e.irisFrostUntil=this.time+h.volleyBuffSec,this.healAll(.12)}let a=this.to3(this.heroX,this.heroY);this.fx.ring(a.x,a.y,1.35,this.heroDef.color,.38),this.sparks.burst(a.x,a.y,.7,14,this.heroDef.color,3.2,.45,-1);let o=Math.round((h.volleyBaseDmgBonus+(e.volleyStacks-1)*h.volleyStackDmgBonus)*100);this.fx.text(a.x,a.y+.85,`🏓 ${this.heroDef.volleyName}！×${this.catchStreak} (+${o}%)`,`#ffe878`,.9,.4)}makeLava(){let e=qu.lava().clone();e.wrapS=e.wrapT=ee,e.repeat.set(4,20),e.needsUpdate=!0;let t=new q(new Da(this.cols+12,60,1.3),new zi({map:e,color:new K(1.35,1,.85),transparent:!0,opacity:.84}));return t.position.z=.25,this.scene.add(t),t}makeLavaCrust(){let e=new q(new Oa(this.cols+12,.35),new zi({color:new K(1.35,.85,.3),transparent:!0,opacity:.92,depthWrite:!1}));return e.position.z=.92,this.scene.add(e),e}makeLavaGlow(){let e=new q(new Oa(this.cols+12,2.8),new zi({map:qu.glow(),color:new K(1.5,.6,.18),transparent:!0,opacity:.75,blending:2,depthWrite:!1}));return e.position.z=.95,this.scene.add(e),e}generateCampaign(){let e=this.level,t=h.airRows;for(let e=0;e<this.rows;e++)this.setCell(e,0,`bedrock`,1),this.setCell(e,this.cols-1,`bedrock`,1);for(let n=t;n<t+e.depth;n++){let r=(n-t)/e.depth;for(let t=1;t<this.cols-1;t++){let i=r<.08?`dirt`:r<.5?`stone`:`deepslate`,a=Math.random();r>.55&&a<.035?i=`obsidian`:r>=.1&&a<.022?i=`barrel`:r>=.18&&a>=.022&&a<.038?i=`crystal`:r>=.08&&a<.16&&(i=Ud(r)),this.setCell(n,t,i,e.hpMul)}}let n=(e.hardBands??2)+1;for(let r=1;r<=n;r++){let i=t+Math.floor(e.depth*(r-.45)/(n+.5));if(i<t+6||i>=t+e.depth-6)continue;for(let t=i;t<=i+1;t++)for(let n=1;n<this.cols-1;n++)this.setCell(t,n,Math.random()<.5+r*.1?`obsidian`:`deepslate`,e.hpMul);let a=2+Math.floor(Math.random()*(this.cols-4));this.setCell(i,a,`barrel`,e.hpMul)}let r=Object.entries(e.enemies);for(let n=0;n<e.caves;n++){let n=t+6+Math.floor(Math.random()*(e.depth-14)),i=2+Math.floor(Math.random()*5);this.carveCave(n,i,t+3,t+e.depth-6,e.hpMul,e.enemyHpMul,r)}let i=e.gates??1;for(let n=1;n<=i;n++){let a=t+Math.floor(e.depth*n/(i+1)),o=n===i&&e.enemyHpMul>=3.5?2:1,s=2+n%2;this.buildGateChamber(n,a,o,s,e.hpMul,e.enemyHpMul,r)}if(e.goal===`core`){let n=t+e.depth,i=n-1;this.buildGateChamber(900,i,e.endElites??1,2,e.hpMul,e.enemyHpMul,r);for(let t=1;t<this.cols-1;t++)this.setCell(n,t,`core`,e.hpMul),this.setCell(n+1,t,`bedrock`,1)}else if(e.goal===`boss`){let n=t+e.depth+5;for(let r=t+e.depth-1;r<n;r++)for(let e=1;e<this.cols-1;e++)this.setCell(r,e,null,1);for(let e=1;e<this.cols-1;e++)this.setCell(n,e,`bedrock`,1),this.setCell(n+1,e,`bedrock`,1);let r=e.boss??`golem`,i=n*this.B,a=Sd(this,r,this.cols/2*this.B,i-this.B*1.5,1);this.boss=a,this.addEnemy(a),X.default.Composite.add(this.engine.world,a.body)}this.generatedToRow=this.rows-1}ensureEndlessChunks(){let e=Math.floor(this.deepestY/this.B)+52;for(;this.generatedToRow<e;){this.endlessChunkIdx++;let e=this.endlessChunkIdx,t=this.generatedToRow+1,n=h.airRows+e*h.endlessGateEvery;this.rows=Math.max(this.rows,n+20);let r=h.endlessBlockScalePerGate**(e-1),i=h.endlessEnemyScalePerGate**(e-1),a=[[`zombie`,3],[`skeleton`,2.5],[`mushroom`,2.5],[`spider`,2.5]];for(let e=t;e<=n;e++){this.setCell(e,0,`bedrock`,1),this.setCell(e,this.cols-1,`bedrock`,1);let t=e-h.airRows,n=Math.min(1,t/140);for(let i=1;i<this.cols-1;i++){let a=t<8?`dirt`:n<.45?`stone`:`deepslate`,o=Math.random();n>.35&&o<.04?a=`obsidian`:t>=6&&o<.025?a=`barrel`:t>=10&&o>=.025&&o<.043?a=`crystal`:t>=5&&o<.17&&(a=Ud(n)),this.setCell(e,i,a,r)}}for(let e of[11,23]){let i=t+e;if(i<n-6){for(let e=i;e<=i+1;e++)for(let t=1;t<this.cols-1;t++)this.setCell(e,t,Math.random()<.65?`obsidian`:`deepslate`,r);this.setCell(i,2+Math.floor(Math.random()*(this.cols-4)),`barrel`,r)}}for(let e of[7,20]){let o=t+e;o<n-6&&this.carveCave(o,2+Math.floor(Math.random()*5),t+2,n-6,r,i,a)}if(e%3==0){let t=x[(e/3-1)%x.length];this.buildEndlessBossGate(e,n,t,i)}else{let t=1+Math.floor(e/4),o=2+e%3;this.buildGateChamber(e,n,t,o,r,i,a)}this.generatedToRow=n}}carveCave(e,t,n,r,i,a,o){let s=1+Math.random()*1.5,c=.6+Math.random()*.8;for(let i=Math.floor(e-c-1);i<=e+c+1;i++)for(let a=1;a<this.cols-1;a++){let o=(a-t)/(s+.5),l=(i-e)/(c+.5);o*o+l*l<=1&&i>=n&&i<=r&&this.setCell(i,a,null,1)}if(Math.random()<.55){let n=Math.max(1,Math.min(this.cols-2,t+(Math.random()<.5?-2:2)));this.block(e,n)&&this.setCell(e,n,Math.random()<.55?`barrel`:`crystal`,i)}let l=[];for(let r=e-2;r<=e+2;r++)for(let e=Math.max(1,t-3);e<=Math.min(this.cols-2,t+3);e++)r>=n&&!this.block(r,e)&&this.isSolid(r+1,e)&&l.push([r,e]);let u=Math.min(l.length,1+ +(Math.random()<.5));for(let e=0;e<u;e++){let[e,t]=l.splice(Math.floor(Math.random()*l.length),1)[0];this.spawnEnemy(Hd(o),(t+.5)*this.B,(e+1)*this.B-this.B*.43,a)}}buildGateChamber(e,t,n,r,i,a,o){for(let e=t-4;e<t;e++)for(let t=1;t<this.cols-1;t++)this.setCell(e,t,null,1);for(let e=1;e<this.cols-1;e++)this.setCell(t,e,`seal`,i);this.gates.set(e,{id:e,sealRow:t,unlocked:!1,isBossGate:!1});let s=[1,2,3,4,5,6,7].sort(()=>Math.random()-.5),c=0,l=t*this.B;for(let t=0;t<n&&c<s.length;t++){let t=s[c++],n=this.spawnEnemy(Hd(o),(t+.5)*this.B,l-this.B*.55,a);n.promoteElite(),n.gateId=e}for(let t=0;t<r&&c<s.length;t++){let t=s[c++],n=this.spawnEnemy(Hd(o),(t+.5)*this.B,l-this.B*.43,a);n.gateId=e}}buildEndlessBossGate(e,t,n,r){for(let e=t-6;e<t;e++)for(let t=1;t<this.cols-1;t++)this.setCell(e,t,null,1);for(let e=1;e<this.cols-1;e++)this.setCell(t,e,`seal`,1);this.gates.set(e,{id:e,sealRow:t,unlocked:!1,isBossGate:!0});let i=t*this.B,a=9500/Bd[n],o=Sd(this,n,this.cols/2*this.B,i-this.B*1.5,a*r);o.gateId=e,(!this.boss||this.boss.dead)&&(this.boss=o),this.addEnemy(o),X.default.Composite.add(this.engine.world,o.body)}checkGateUnlock(e){if(e===null)return;let t=this.gates.get(e);if(!t||t.unlocked||this.enemies.some(t=>!t.dead&&t.gateId===e))return;t.unlocked=!0,this.gatesCleared++;for(let e=1;e<this.cols-1;e++)if(this.block(t.sealRow,e)?.type===`seal`){let n=this.to3(...this.center(t.sealRow,e));this.sparks.burst(n.x,n.y,.7,14,7926015,4,.65,-3),this.debris.burst(n.x,n.y,.6,8,3709128,3.5,.7),this.setCell(t.sealRow,e,null,1)}let n=this.to3(...this.center(t.sealRow,4)),r=Math.round((t.isBossGate?55:20)*this.mods.goldGainMul);this.cb.onGold?.(r,`gate`),this.fx.ring(n.x,n.y,3.4,7926015,.6),this.fx.text(n.x,n.y+.8,t.isBossGate?`🔓 首領結界破除！+${r}G`:`🔓 守層結界破除！+${r}G`,`#7ef8ff`,1.5,.54),this.fx.shake=Math.max(this.fx.shake,.22),this.isEndless&&this.cb.onGateCleared?.(e,t.isBossGate)}activeGateInfo(){let e=Math.floor(this.deepestY/this.B),t=Math.floor(-this.camY),n=null;for(let r of this.gates.values()){if(r.unlocked)continue;let i=r.sealRow>=e-2&&r.sealRow-e<=18,a=Math.abs(r.sealRow-t)<=12;(i||a)&&(!n||r.sealRow<n.sealRow)&&(n=r)}if(!n)return null;let r=this.enemies.filter(e=>!e.dead&&e.gateId===n.id).length;return r===0?(this.checkGateUnlock(n.id),null):{remaining:r,depthM:Math.max(0,n.sealRow-h.airRows),isBoss:n.isBossGate}}spawnEnemy(e,t,n,r=this.level.enemyHpMul){let i=new _d(this,e,t,n,r);return this.addEnemy(i),X.default.Composite.add(this.engine.world,i.body),i}addEnemy(e){this.enemies.push(e),this.scene.add(e.group),e.update(0)}canMultiCopy(e){let t=k[e];return t.element===`holy`?Object.values(this.resonance).some(e=>e>=h.resonanceMaxLv):this.resonance[t.element]>=h.resonanceMaxLv}acquireWeapon(e,t,n=!1,r){if(!(n||r?.forceSpawn||r?.customCol!==void 0)&&!this.canMultiCopy(e)){let n=this.weapons.find(t=>!t.dead&&t.def.id===e);if(n)return n.upgradeFromDuplicate(t,r?.hpBonusMul??1,r?.ultRateMul??1,r?.star??1),{weapon:n,mode:`upgraded`}}return{weapon:this.spawnWeapon(e,t,r),mode:`spawned`}}spawnWeapon(e,t,n){let[r,i]=this.findSpawnPoint(n?.customCol),a=new Td(this,e,t,r,i,n);i-this.lavaY<this.B*3&&(a.invulnUntil=Math.max(a.invulnUntil,this.time+1.5)),this.weapons.push(a),this.scene.add(a.group),X.default.Composite.add(this.engine.world,a.body),this.updateActiveRows();let o=this.to3(r,i),s=f(a.def.element);this.fx.ring(o.x,o.y,1.4,s.color,.5);let c=a.star>1?`${`★`.repeat(a.star)} `:``;if(this.fx.text(o.x,o.y-.9,c+a.def.name,s.css,1.3,.48),this.sparks.burst(o.x,o.y,.8,22,s.color,3.6,.55,0),this.weapons.length>h.maxWeapons){let e=this.weapons.filter(e=>e!==a&&e.def.category===`low`),t=(e.length?e:this.weapons.filter(e=>e!==a)).reduce((e,t)=>e.hp/e.maxHp<t.hp/t.maxHp?e:t);this.killWeapon(t)}return a}dropTacticalBomb(e){let t=e===void 0?4:Math.max(1,Math.min(this.cols-2,e)),[n,r]=this.findSpawnPoint(t),i=Math.max(r,this.deepestY-this.B*.4),a=this.to3((t+.5)*this.B,i),o=this.isEndless?h.endlessBlockScalePerGate**+Math.max(0,this.endlessChunkIdx-1):this.level.hpMul;this.fx.explosion(a.x,a.y,3.3,16746544),this.fx.text(a.x,a.y+.8,`🧨 矮人深層炸彈！`,`#ffcc58`,1.45,.52),this.fx.shake=Math.max(this.fx.shake,.28),this.explode((t+.5)*this.B,i,3.2+this.mods.aoeBonus,420*o,{kind:`explosion`})}findSpawnPoint(e){let t=Math.max(this.lavaY+this.B*.8,this.heroY+this.B*.55);if(e!==void 0){let n=Math.max(1,Math.min(this.cols-2,e)),r=Math.floor(t/this.B);if(!this.isSolid(r,n))return[(n+.5)*this.B,t]}let n=Math.max(1,Math.min(this.cols-2,Math.floor(this.heroX/this.B))),r=Math.floor(t/this.B);if(!this.isSolid(r,n))return[this.heroX,t];for(let e=1;e<this.cols;e++)for(let i of[-1,1]){let a=n+e*i;if(a>=1&&a<this.cols-1&&!this.isSolid(r,a))return[(a+.5)*this.B,t]}return[this.heroX,Math.max(this.lavaY+this.B*.8,this.deepestY-this.B)]}deepestWeapon(){let e=null;for(let t of this.weapons)(!e||t.y>e.y)&&(e=t);return e}healAll(e){for(let t of this.weapons){t.hp=Math.min(t.maxHp,t.hp+t.maxHp*e);let n=this.to3(t.x,t.y);this.sparks.burst(n.x,n.y,.8,10,16738976,2.5,.6,2)}}shield(e){this.shieldUntil=Math.max(this.shieldUntil,this.time)+e;for(let e of this.weapons){let t=this.to3(e.x,e.y);this.fx.ring(t.x,t.y,1.2,16769264,.6)}}hurtWeapon(e,t){e.dead||e.invuln||(e.hp-=t,e.hurtFlash=.12,e.hp<=0&&this.killWeapon(e))}killWeapon(e){if(e.dead)return;e.dead=!0,X.default.Composite.remove(this.engine.world,e.body),this.scene.remove(e.group);let t=this.to3(e.x,e.y),n=f(e.def.element);this.sparks.burst(t.x,t.y,.8,24,n.color,4.5,.75,-6),this.debris.burst(t.x,t.y,.8,16,9079434,4,.8),this.fx.text(t.x,t.y+.6,e.def.name+(e.def.lifespanDecay?` 消散`:` 碎裂`),`#ff9080`,1.15,.38),this.weapons=this.weapons.filter(t=>t!==e)}onCollide(e){for(let t of e.pairs){let e=t.bodyA.parent,n=t.bodyB.parent,r=e.plugin,i=n.plugin,a,o;r?.kind===`weapon`?(a=r.w,o=i):i?.kind===`weapon`&&(a=i.w,o=r),!a||!o||a.hitCd>0||this.pendingHits.has(a)||(o.kind===`block`?this.pendingHits.set(a,{kind:`block`,r:o.r,c:o.c}):o.kind===`enemy`&&this.pendingHits.set(a,{kind:`enemy`,e:o.e}))}}processHits(){for(let[e,t]of this.pendingHits){if(e.dead)continue;e.hitCd=e.hitInterval;let n=this.heroId===`vera`&&(e.def.element===`poison`||e.def.archetype===`pinball`||e.def.archetype===`boomerang`),r=this.time<e.veraCritUntil||n&&Math.random()<.25,i=e.dmg*(r?1.35:1),a=e.src(`hit`,r);if(t.kind===`block`){let n=this.block(t.r,t.c);if(!n)continue;if(!e.invuln&&!e.def.lifespanDecay){let t=this.heroId===`iris`&&(e.def.element===`ice`||e.def.element===`holy`)?.7:1;e.hp-=_[n.type].wear*this.mods.wearMul*t}if(this.isIndestructible(n.type)){e.hp<=0&&this.killWeapon(e);continue}e.lastHit=this.time,this.damageCell(t.r,t.c,i,a);let[r,o]=this.center(t.r,t.c),s=this.to3((r+e.x)/2,(o+e.y)/2);this.debris.burst(s.x,s.y,.6,3,Id[n.type]??8947848,2,.4)}else{if(t.e.dead)continue;e.lastHit=this.time,this.damageEnemy(t.e,i,a)}kd(this,e,t),e.hp<=0&&this.killWeapon(e)}this.pendingHits.clear()}updateActiveRows(){let e=new Set;for(let t of this.weapons){let n=Math.floor(t.y/this.B);for(let t=n-3;t<=n+3;t++)t>=this.minStoredRow&&t<this.rows&&e.add(t)}for(let t of this.activeRows)e.has(t)||this.setRowBodies(t,!1);for(let t of e)this.activeRows.has(t)||this.setRowBodies(t,!0);this.activeRows=e}setRowBodies(e,t){for(let n=1;n<this.cols-1;n++){let r=this.block(e,n);if(r){if(t&&!r.body){let[t,i]=this.center(e,n);r.body=X.default.Bodies.rectangle(t,i,this.B,this.B,{isStatic:!0,friction:.35,restitution:.35,label:`block`}),r.body.plugin={kind:`block`,r:e,c:n},X.default.Composite.add(this.engine.world,r.body)}else!t&&r.body&&(X.default.Composite.remove(this.engine.world,r.body),r.body=null)}}}damageCell(e,t,n,r){let i=this.block(e,t);if(!i||this.isIndestructible(i.type)||t<=0||t>=this.cols-1)return null;let a=this.idx(e,t),o=n;if(r.kind!==`dot`){let e=this.status.get(a);e&&(e.frostUntil>this.time&&(o*=1.5),e.venomUntil>this.time&&(o*=1.5))}return i.hp-=o,i.hp<=0?(this.destroyBlock(e,t,r),!0):(this.damaged.add(a),!1)}destroyBlock(e,t,n){let r=this.idx(e,t),i=this.grid.get(r);if(!i)return;let a=this.status.get(r);this.setCell(e,t,null,1);let o=this.to3(...this.center(e,t)),s=Id[i.type]??8947848;this.debris.burst(o.x,o.y,.5,8,s,3,.7);let c=_[i.type],l=y[i.type]??0;if((i.type===`stone`&&Math.random()<.1||i.type===`deepslate`&&Math.random()<.18)&&(l=1),l>0){let e=Math.max(1,Math.round(l*this.mods.goldGainMul));this.cb.onGold?.(e,i.type),l>=5&&this.fx.text(o.x,o.y+.35,`+${e}G`,`#ffd858`,.85,.34)}if(c.ore&&(this.sparks.burst(o.x,o.y,.7,10,s,3,.7,-2),this.cb.onResource(c.ore)),a&&a.plague&&a.poisonUntil>this.time){for(let n=-1;n<=1;n++)for(let r=-1;r<=1;r++)(n||r)&&this.poisonCell(e+n,t+r,a.poisonDps,3,!0,a.venomUntil>this.time);this.sparks.burst(o.x,o.y,.7,10,8314970,2,.7,0)}if(i.type===`barrel`){let[n,r]=this.center(e,t);this.fx.text(o.x,o.y+.5,`🧨 轟爆！`,`#ffaa48`,.9,.42);let i=this.isEndless?h.endlessBlockScalePerGate**+Math.max(0,this.endlessChunkIdx-1):this.level.hpMul;this.explode(n,r,h.barrelRad,h.barrelDmg*i,{kind:`explosion`})}else i.type===`crystal`?(this.healAll(h.crystalHealPct),this.fx.ring(o.x,o.y,2.2,8320255,.5),this.fx.text(o.x,o.y+.5,`💎 水晶治癒 +${Math.round(h.crystalHealPct*100)}%`,`#7ef4ff`,1.15,.44)):i.type===`core`&&!this.ended&&(this.fx.explosion(o.x,o.y,3,13664511),this.end(!0,`擊破礦脈核心！`))}damageEnemy(e,t,n){if(e.dead)return;let r=t*this.mods.enemyDmgMul;n.weapon?.def.id===`boomerang`&&e.frozen&&(r*=2),n.kind!==`dot`&&e.venomUntil>this.time&&(r*=1.5);let i=this.heroId===`bardin`&&(n.element===`earth`||n.kind===`shock`);e instanceof yd&&e.shielded?n.kind===`thunder`||n.kind===`explosion`||n.kind===`holy`||i?e.breakShell():r*=.5:e instanceof bd&&e.shielded?n.element===`fire`||n.kind===`fire`||n.crit?e.breakCocoon():r*=.6:e instanceof xd&&e.shielded&&(n.element===`ice`||n.kind===`ice`||n.kind===`holy`?e.breakMoltenShield():(r*=.4,n.kind===`hit`&&n.weapon&&this.hurtWeapon(n.weapon,8*e.dmgMul))),e.hp-=r,n.kind!==`dot`&&(e.hurtFlash=.08),e.hp<=0&&this.killEnemy(e)}killEnemy(e){if(e.dead)return;e.dead=!0,this.kills++,X.default.Composite.remove(this.engine.world,e.body),this.scene.remove(e.group),this.enemies=this.enemies.filter(t=>t!==e);let t=this.to3(e.x,e.y),n=e.isBoss?90:e.isElite?26:9,r=Math.round(n*this.mods.goldGainMul);if(this.cb.onGold?.(r,e.isBoss?`boss`:e.isElite?`elite`:`enemy`),e.isBoss||e.isElite?this.fx.text(t.x,t.y+.65,`💰+${r}G`,`#ffd858`,1.25,.45):this.fx.text(t.x,t.y+.45,`+${r}G`,`#ffd858`,.9,.36),this.debris.burst(t.x,t.y,.6,e.isBoss?70:e.isElite?28:14,10502208,e.isBoss?7:3.2,.8),e.plague&&e.poisonUntil>this.time){for(let t of this.enemiesInRadius(e.x,e.y,2*this.B))this.poisonEnemy(t,e.poisonDps,3,1,!0);let[n,r]=this.cellOf(e.x,e.y);for(let t=-1;t<=1;t++)for(let i=-1;i<=1;i++)this.poisonCell(n+t,r+i,e.poisonDps,3,!0);this.fx.ring(t.x,t.y,2,8314970,.5)}this.boss===e&&(this.boss=this.enemies.find(e=>e.isBoss&&!e.dead)??null),e.gateId!==null&&this.checkGateUnlock(e.gateId),e.isBoss&&!this.isEndless&&!this.ended&&(this.fx.explosion(t.x,t.y,4,16752704),this.end(!0,`擊敗${Vd[e.kind]}！`))}damageSquare(e,t,n,r,i){for(let a=e-n;a<=e+n;a++)for(let e=t-n;e<=t+n;e++)this.damageCell(a,e,r,i);let[a,o]=this.center(e,t),s=(n+.5)*this.B;for(let e of[...this.enemies])Math.abs(e.x-a)<=s+e.size*this.B*.5&&Math.abs(e.y-o)<=s+e.size*this.B*.5&&this.damageEnemy(e,r,i)}explode(e,t,n,r,i){let[a,o]=this.cellOf(e,t),s=Math.ceil(n);for(let c=a-s;c<=a+s;c++)for(let a=o-s;a<=o+s;a++){let[o,s]=this.center(c,a),l=Math.hypot(o-e,s-t)/this.B;l<=n+.3&&this.damageCell(c,a,r*(1-l/(n+1)*.5),i)}for(let a of this.enemiesInRadius(e,t,(n+.5)*this.B))this.damageEnemy(a,r,i);let c=this.to3(e,t);this.fx.explosion(c.x,c.y,n,16747050),this.sparks.burst(c.x,c.y,.7,24,16752704,4.5,.55,-4),this.debris.burst(c.x,c.y,.6,12,5592405,4,.75)}enemyExplode(e,t,n){for(let r of this.weapons)Math.hypot(r.x-e.x,r.y-e.y)<(t+.5)*this.B&&this.hurtWeapon(r,n);let[r,i]=this.cellOf(e.x,e.y);for(let e=r-1;e<=r+1;e++)for(let t=i-1;t<=i+1;t++)this.damageCell(e,t,25,{kind:`enemy`});let a=this.to3(e.x,e.y);this.fx.explosion(a.x,a.y,t,16730666),this.killEnemy(e)}cellStatus(e,t){let n=this.block(e,t);if(!n||this.isIndestructible(n.type))return null;let r=this.idx(e,t),i=this.status.get(r);return i||(i={poisonDps:0,poisonUntil:0,plague:!1,venomUntil:0,burnDps:0,burnUntil:0,frostUntil:0},this.status.set(r,i)),i}isCellPoisoned(e,t){let n=this.status.get(this.idx(e,t));return!!n&&n.poisonUntil>this.time}poisonCell(e,t,n,r,i,a=!1){let o=this.cellStatus(e,t);if(!o)return;let s=a?10:5;o.poisonDps=o.poisonUntil>this.time?Math.min(o.poisonDps+n,n*s):n,o.poisonUntil=Math.max(o.poisonUntil,this.time+r),o.plague=o.plague||i,a&&(o.venomUntil=Math.max(o.venomUntil,this.time+r))}burnCell(e,t,n,r){let i=this.cellStatus(e,t);i&&(i.burnDps=Math.max(i.burnUntil>this.time?i.burnDps:0,n),i.burnUntil=Math.max(i.burnUntil,this.time+r))}frostCell(e,t,n){let r=this.cellStatus(e,t);r&&(r.frostUntil=Math.max(r.frostUntil,this.time+n))}poisonEnemy(e,t,n,r,i,a=5,o=!1){e.poisonUntil<this.time&&(e.poisonStacks=0);let s=Math.max(a,e.venomUntil>this.time?10:5);e.poisonStacks=Math.min(s,e.poisonStacks+r),e.poisonDps=t*e.poisonStacks,e.poisonUntil=this.time+n,e.plague=e.plague||i,o&&(e.venomUntil=Math.max(e.venomUntil,this.time+n))}burnEnemy(e,t,n){e.burnDps=Math.max(e.burnUntil>this.time?e.burnDps:0,t),e.burnUntil=Math.max(e.burnUntil,this.time+n),e instanceof bd&&e.shielded&&e.breakCocoon()}freezeEnemy(e,t){e.frozenUntil=Math.max(e.frozenUntil,this.time+(e.isBoss?t*.4:t)),e instanceof xd&&e.shielded&&e.breakMoltenShield()}stunEnemy(e,t){e.stunnedUntil=Math.max(e.stunnedUntil,this.time+(e.isBoss?t*.3:t))}enemiesInRadius(e,t,n){return this.enemies.filter(r=>Math.hypot(r.x-e,r.y-t)<=n+r.size*this.B*.4)}nearestEnemy(e,t,n){let r=null,i=n;for(let n of this.enemies){let a=Math.hypot(n.x-e,n.y-t);a<i&&(i=a,r=n)}return r}randomTargets(e,t,n,r){let i=[],a=this.enemiesInRadius(e,t,n).sort(()=>Math.random()-.5);for(let e of a){if(i.length>=r)break;i.push({kind:`enemy`,e})}if(i.length<r){let[a,o]=this.cellOf(e,t),s=Math.ceil(n/this.B),c=[];for(let e=a-1;e<=a+s;e++)for(let t=Math.max(1,o-s);t<=Math.min(this.cols-2,o+s);t++){let n=this.block(e,t);n&&!this.isIndestructible(n.type)&&c.push([e,t])}c.sort(()=>Math.random()-.5);for(let[e,t]of c){if(i.length>=r)break;i.push({kind:`block`,r:e,c:t})}}return i}addProjectile(e){let t;if(e.kind===`meteor`)t=new Mi(new vi({map:qu.glow(),color:new K(1.8,.9,.3),blending:2,depthWrite:!1})),t.scale.setScalar(1.5);else{let n=e.kind===`arrow`?qu.arrow():e.kind===`web`?qu.web():e.kind===`rock`?qu.rock():e.kind===`fireball`?qu.fireball():qu.iceShard(),r=e.kind===`rock`||e.kind===`fireball`?.9:e.kind===`web`?.72:.6;t=new q(new Oa(r,r),new zi({map:n,transparent:!0,alphaTest:.3,side:2,color:e.kind===`shard`?new K(1.3,1.5,1.7):16777215}))}t.position.z=.9,e.mesh=t,e.hit=new Set,this.scene.add(t),this.projectiles.push(e)}updateProjectiles(e){let t=[];for(let n of this.projectiles){n.life-=e,n.x+=n.vx*e,n.y+=n.vy*e;let r=n.life>0,[i,a]=this.cellOf(n.x,n.y);if(r&&n.from===`enemy`){for(let e of this.weapons)if(Math.hypot(e.x-n.x,e.y-n.y)<n.r+18*e.scale){n.kind===`web`?(e.invuln||(e.webbedUntil=this.time+2.2),n.dmg>0&&this.hurtWeapon(e,n.dmg)):this.hurtWeapon(e,n.dmg),r=!1;break}r&&!n.passThrough&&this.isSolid(i,a)&&(r=!1),(n.kind===`rock`||n.kind===`fireball`)&&this.isSolid(i,a)&&n.y>this.deepestY+this.B*2&&(r=!1)}else if(r&&n.from===`weapon`){if(n.kind===`meteor`){let e=this.to3(n.x,n.y);this.sparks.emit(e.x+(Math.random()-.5)*.3,e.y,.8,0,1,0,16752704,.4,0);let t=this.enemies.find(e=>Math.hypot(e.x-n.x,e.y-n.y)<n.r+e.size*this.B*.5),o=this.block(i,a);(t||o&&o.type!==`bedrock`)&&(this.explode(n.x,n.y,2+this.mods.aoeBonus,n.dmg,n.src),r=!1)}else{if(this.isSolid(i,a)){let e=this.damageCell(i,a,n.dmg,n.src);n.pierce=(n.pierce??0)-1,e===null||n.pierce<0?r=!1:(n.vx*=.6,n.vy*=.6)}for(let e of this.enemies)!n.hit.has(e)&&Math.hypot(e.x-n.x,e.y-n.y)<n.r+e.size*this.B*.5&&(n.hit.add(e),this.damageEnemy(e,n.dmg,n.src),this.freezeEnemy(e,1));let e=this.to3(n.x,n.y);Math.random()<.5&&this.sparks.emit(e.x,e.y,.8,0,0,0,9103615,.25,0)}}if(!r){this.scene.remove(n.mesh),n.mesh instanceof q&&(n.mesh.geometry.dispose(),n.mesh.material.dispose()),n.mesh instanceof Mi&&n.mesh.material.dispose();continue}let o=this.to3(n.x,n.y);n.mesh.position.x=o.x,n.mesh.position.y=o.y,n.mesh instanceof q&&(n.mesh.rotation.z=n.kind===`rock`||n.kind===`web`||n.kind===`fireball`?n.mesh.rotation.z+e*6:Math.atan2(-n.vy,n.vx)),t.push(n)}this.projectiles=t}updateStatus(e){for(let[t,n]of this.status){let r=Math.floor(t/this.cols),i=t%this.cols,a=this.grid.get(t);if(!a){this.status.delete(t);continue}let o=n.poisonUntil>this.time,s=n.burnUntil>this.time,c=n.frostUntil>this.time,l=this.getPool(a.type);if(!o&&!s&&!c){l.mesh.setColorAt(a.inst,this.tmpCol.setRGB(1,1,1)),l.mesh.instanceColor.needsUpdate=!0,this.status.delete(t);continue}let u=.94+Math.random()*.1;s&&o?this.tmpCol.setRGB(1.3*u,1.05,.45):s?this.tmpCol.setRGB(1.45*u,.85*u,.48):o?this.tmpCol.setRGB(.68,1.3,.55):this.tmpCol.setRGB(.68,.96,1.32),l.mesh.setColorAt(a.inst,this.tmpCol),l.mesh.instanceColor.needsUpdate=!0;let d=(o?n.poisonDps:0)+(s?n.burnDps:0),f=this.to3(...this.center(r,i));if(s&&Math.random()<e*5&&this.sparks.emit(f.x+(Math.random()-.5)*.8,f.y+.3,.6,0,1.2,0,16742954,.5,0),o&&Math.random()<e*2.5&&this.sparks.emit(f.x+(Math.random()-.5)*.8,f.y+.3,.6,0,.6,0,7004234,.6,0),s&&Math.random()<e*.25*this.mods.fireSpreadMul){let[e,t]=[[1,0],[-1,0],[0,1],[0,-1]][Math.floor(Math.random()*4)];this.burnCell(r+e,i+t,n.burnDps,3)}d>0&&this.damageCell(r,i,d*e,{kind:`dot`})}for(let t of[...this.enemies]){let n=0;t.poisonUntil>this.time&&(n+=t.poisonDps),t.burnUntil>this.time&&(n+=t.burnDps),n>0&&this.damageEnemy(t,n*e/this.mods.enemyDmgMul,{kind:`dot`})}}setAspect(e){this.aspect=e}viewDist(){let e=Math.tan(sn.degToRad(this.camera.fov/2));return Math.max(9.8/(this.aspect*2*e),11.5/(2*e))}viewHalf(){let e=Math.tan(sn.degToRad(this.camera.fov/2)),t=this.viewDist()*e;return[t*this.aspect,t]}viewTopY(){return(-this.camY-this.viewHalf()[1])*this.B}get cameraMode(){return this.isManualCam?`manual`:this.lockedWeaponUid===null?`auto`:`locked`}panCamera(e){this.isManualCam=!0,this.lockedWeaponUid=null;let t=-(this.generatedToRow-1),n=-(this.minStoredRow+2);this.camTargetY=Math.max(t,Math.min(Math.max(n,1.5),this.camTargetY+e)),this.camY=this.camTargetY}toggleLockWeapon(e){this.lockedWeaponUid===e&&!this.isManualCam?this.resetCameraFollow():this.weapons.some(t=>!t.dead&&t.uid===e)&&(this.lockedWeaponUid=e,this.isManualCam=!1)}resetCameraFollow(){this.isManualCam=!1,this.lockedWeaponUid=null}updateCamera(e){let t=this.viewHalf()[1];if(!this.isManualCam){let e=null;this.lockedWeaponUid!==null&&(e=this.weapons.find(e=>!e.dead&&e.uid===this.lockedWeaponUid)??null,e||(this.lockedWeaponUid=null)),e||=this.deepestWeapon(),this.lastFocusY=e?e.y:this.deepestY;let n=this.lockedWeaponUid===null?this.heroY*.38+this.lastFocusY*.62:this.lastFocusY;this.camTargetY=-n/this.B+t*.08}this.camY+=(this.camTargetY-this.camY)*Math.min(1,e*(this.isManualCam?12:3.2)),this.updateBackdropPosition(Math.floor(-this.camY));let n=-this.camY*this.B;Math.abs(this.leftWall.position.y-n)>800&&(X.default.Body.setPosition(this.leftWall,{x:this.B/2,y:n}),X.default.Body.setPosition(this.rightWall,{x:(this.cols-.5)*this.B,y:n}));let r=this.viewDist(),i=sn.degToRad(14),a=(Math.random()-.5)*this.fx.shake,o=(Math.random()-.5)*this.fx.shake;this.camera.aspect=this.aspect,this.camera.position.set(a,this.camY+Math.sin(i)*r+o,Math.cos(i)*r),this.camera.lookAt(a*.5,this.camY,0),this.camera.updateProjectionMatrix(),this.scene.fog.near=r-2,this.scene.fog.far=r+30;let s=Math.min(1,Math.max(0,(-this.camY-h.airRows)/140));this.hemi.intensity=1-s*.52}updateLights(){let e=[],t=this.to3(this.cols*this.B/2,this.lavaY);e.push({x:t.x,y:t.y-.5,color:16738848,intensity:8,dist:11,prio:9});for(let t of this.fx.flashLights)e.push({...t,intensity:t.intensity*(t.t/t.dur)});for(let t of this.weapons){let n=this.to3(t.x,t.y),r=f(t.def.element);e.push({x:n.x,y:n.y,color:this.overdriveActive?16758856:r.color,intensity:this.overdriveActive?3.8:t.ultReady>=1?3.2:2.2,dist:5.5,prio:3})}if(this.boss&&!this.boss.dead){let t=this.to3(this.boss.x,this.boss.y);e.push({x:t.x,y:t.y+1,color:16742944,intensity:3.8,dist:6.5,prio:2})}let n=this.camY;e.sort((e,t)=>t.prio-e.prio||Math.abs(e.y-n)-Math.abs(t.y-n));let[,r]=this.viewHalf(),i=0;for(let t of e){if(i>=this.lights.length)break;if(Math.abs(t.y-n)>r+t.dist)continue;let e=this.lights[i++];e.position.set(t.x,t.y,1.6),e.color.setHex(t.color),e.intensity=t.intensity,e.distance=t.dist}for(;i<this.lights.length;i++)this.lights[i].intensity=0}updateCracks(){let[,e]=this.viewHalf(),t=Math.floor(-this.camY-e-1),n=Math.ceil(-this.camY+e+1),r=0;for(let e of this.damaged){if(r>=this.cracks.length)break;let i=Math.floor(e/this.cols);if(i<t||i>n)continue;let a=this.grid.get(e);if(!a)continue;let o=Math.min(4,Math.floor((1-a.hp/a.maxHp)*5)),s=this.cracks[r++];s.material.map=qu.crack(o);let c=this.to3(...this.center(i,e%this.cols));s.position.set(c.x,c.y,.502),s.visible=!0}for(;r<this.cracks.length;r++)this.cracks[r].visible=!1}end(e,t){this.ended||(this.ended=!0,this.cb.onEnd(e,t))}updateView(e){this.updateCamera(e),this.updateLights()}update(e){if(this.ended){this.fx.update(e),this.debris.update(e),this.sparks.update(e),this.updateCamera(e);return}if(this.time+=e,this.isEndless||(this.timeLeft-=e),this.isEndless&&(this.ensureEndlessChunks(),this.recycleTimer+=e,this.recycleTimer>=1&&(this.recycleTimer=0,this.recycleRowsAbove(Math.floor(this.lavaY/this.B)-16))),this.scheduled.length){let t=this.scheduled.filter(t=>(t.t-=e)<=0);this.scheduled=this.scheduled.filter(e=>e.t>0),t.forEach(e=>e.fn())}this.updateActiveRows(),this.acc+=e;let t=1/60,n=0;for(;this.acc>=t&&n<4;)X.default.Engine.update(this.engine,t*1e3),this.processHits(),this.acc-=t,n++;n===4&&(this.acc=0);for(let t of[...this.weapons])if(!t.dead){if(t.update(e),t.y>this.deepestY&&(this.deepestY=t.y),t.y-12<this.lavaY&&(this.hurtWeapon(t,h.lavaDps*e),Math.random()<e*15)){let e=this.to3(t.x,t.y);this.sparks.emit(e.x+(Math.random()-.5)*.6,e.y,.95,(Math.random()-.5)*2,1.8,0,16742944,.45,-2)}t.hp<=0&&this.killWeapon(t)}this.updateHeroAndVolley(e);for(let t of[...this.enemies])t.dead||(t.update(e),t.y<this.lavaY&&this.killEnemy(t));this.isEndless&&(!this.boss||this.boss.dead)&&(this.boss=this.enemies.find(e=>e.isBoss&&!e.dead)??null),this.updateProjectiles(e),this.updateStatus(e);let r=this.isEndless?Math.min(h.endlessLavaMaxSpeed,h.endlessLavaBaseSpeed+this.gatesCleared*h.endlessLavaAccelPerGate):this.level.lavaSpeed;this.time>h.lavaGrace&&(this.lavaY+=r*this.mods.lavaSpeedMul*this.B*e);let i=-this.lavaY/this.B;this.lava.position.y=i+30,this.lavaCrust.position.y=i,this.lavaGlow.position.y=i-.25;let a=this.lava.material.map;a.offset.x=Math.sin(this.time*.3)*.1,a.offset.y=this.time*.05,Math.random()<e*10&&this.sparks.emit((Math.random()-.5)*(this.cols-2),i-.1,.95,(Math.random()-.5)*.8,-1.2-Math.random()*1.5,.2,16750640,1,-2.5);let o=this.lavaHeat;if(o>0&&Math.random()<e*(4+o*18)){let[,e]=this.viewHalf(),t=Math.min(i,this.camY+e-.2);this.sparks.emit((Math.random()-.5)*(this.cols-2.2),t,.95,(Math.random()-.5)*.5,-1.5-Math.random()*2.5,.1,Math.random()<.4?16765024:16738848,1.2,-3)}this.lavaY>=this.deepestY&&this.weapons.length===0?this.end(!1,`岩漿吞沒了最深處且場上武器全滅`):!this.isEndless&&this.timeLeft<=0&&(this.timeLeft=0,this.end(!1,`時間到`)),this.updateCamera(e),this.updateLights(),this.updateCracks(),this.fx.update(e),this.debris.update(e),this.sparks.update(e)}get cameraCenterY(){return-this.camY*this.B}snapCamera(){this.isManualCam=!1,this.lockedWeaponUid=null,this.lastFocusY=this.deepestY,this.camY=this.camTargetY=-this.deepestY/this.B+this.viewHalf()[1]*.16,this.updateBackdropPosition(Math.floor(-this.camY))}get progress(){return this.isEndless?Math.max(0,this.deepestY/this.B-h.airRows)%h.endlessGateEvery/h.endlessGateEvery:Math.min(1,Math.max(0,(this.deepestY/this.B-h.airRows)/this.level.depth))}get depthRows(){let e=Math.max(0,Math.floor(this.deepestY/this.B-h.airRows));return this.isEndless?e:Math.min(this.level.depth,e)}get nextEndlessGateDepth(){return(Math.floor(this.depthRows/h.endlessGateEvery)+1)*h.endlessGateEvery}get lavaGap(){return(this.deepestY-this.lavaY)/this.B}get lavaHeat(){if(this.time<h.lavaGrace-3)return 0;let e=Math.max(0,this.lavaGap);return e>=h.lavaWarnGap?0:Math.min(1,1-e/h.lavaWarnGap)}dispose(){X.default.World.clear(this.engine.world,!1),X.default.Engine.clear(this.engine),this.fx.clear(),this.scene.traverse(e=>{(e instanceof q||e instanceof ca)&&(e.geometry.dispose(),(Array.isArray(e.material)?e.material:[e.material]).forEach(e=>e.dispose()))})}},Bd={golem:9500,spider_queen:26e3,balrog:85e3},Vd={golem:`岩石巨像`,spider_queen:`劇毒蛛后`,balrog:`深淵炎魔`};function Hd(e){let t=e.reduce((e,[,t])=>e+t,0),n=Math.random()*t;for(let[t,r]of e){if(n<r)return t;n-=r}return e[0][0]}function Ud(e){let t=e<.3?[[`coal`,5],[`copper`,3],[`iron`,2]]:e<.6?[[`iron`,3],[`coal`,2],[`gold`,2],[`redstone`,1.5],[`lapis`,1.5]]:[[`gold`,2],[`redstone`,2],[`lapis`,2],[`diamond`,1.5],[`emerald`,.8],[`iron`,1]],n=t.reduce((e,[,t])=>e+t,0),r=Math.random()*n;for(let[e,n]of t){if(r<n)return e;r-=n}return t[0][0]}var Wd={name:`CopyShader`,uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform float opacity;

		uniform sampler2D tDiffuse;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );
			gl_FragColor = opacity * texel;


		}`},Gd=class{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error(`THREE.Pass: .render() must be implemented in derived pass.`)}dispose(){}},Kd=new Do(-1,1,1,-1,0,1),qd=new class extends si{constructor(){super(),this.setAttribute(`position`,new Yr([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute(`uv`,new Yr([0,2,0,0,2,0],2))}},Jd=class{constructor(e){this._mesh=new q(qd,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,Kd)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}},Yd=class extends Gd{constructor(e,t=`tDiffuse`){super(),this.textureID=t,this.uniforms=null,this.material=null,e instanceof za?(this.uniforms=e.uniforms,this.material=e):e&&(this.uniforms=Ia.clone(e.uniforms),this.material=new za({name:e.name===void 0?`unspecified`:e.name,defines:Object.assign({},e.defines),uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader})),this._fsQuad=new Jd(this.material)}render(e,t,n){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=n.texture),this._fsQuad.material=this.material,this.renderToScreen?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this._fsQuad.render(e))}dispose(){this.material.dispose(),this._fsQuad.dispose()}},Xd=class extends Gd{constructor(e,t){super(),this.scene=e,this.camera=t,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(e,t,n){let r=e.getContext(),i=e.state;i.buffers.color.setMask(!1),i.buffers.depth.setMask(!1),i.buffers.color.setLocked(!0),i.buffers.depth.setLocked(!0);let a,o;this.inverse?(a=0,o=1):(a=1,o=0),i.buffers.stencil.setTest(!0),i.buffers.stencil.setOp(r.REPLACE,r.REPLACE,r.REPLACE),i.buffers.stencil.setFunc(r.ALWAYS,a,4294967295),i.buffers.stencil.setClear(o),i.buffers.stencil.setLocked(!0),e.setRenderTarget(n),this.clear&&e.clear(),e.render(this.scene,this.camera),e.setRenderTarget(t),this.clear&&e.clear(),e.render(this.scene,this.camera),i.buffers.color.setLocked(!1),i.buffers.depth.setLocked(!1),i.buffers.color.setMask(!0),i.buffers.depth.setMask(!0),i.buffers.stencil.setLocked(!1),i.buffers.stencil.setFunc(r.EQUAL,1,4294967295),i.buffers.stencil.setOp(r.KEEP,r.KEEP,r.KEEP),i.buffers.stencil.setLocked(!0)}},Zd=class extends Gd{constructor(){super(),this.needsSwap=!1}render(e){e.state.buffers.stencil.setLocked(!1),e.state.buffers.stencil.setTest(!1)}},Qd=class{constructor(e,t){if(this.renderer=e,this._pixelRatio=e.getPixelRatio(),t===void 0){let n=e.getSize(new H);this._width=n.width,this._height=n.height,t=new Dn(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:pe}),t.texture.name=`EffectComposer.rt1`}else this._width=t.width,this._height=t.height;this.renderTarget1=t,this.renderTarget2=t.clone(),this.renderTarget2.texture.name=`EffectComposer.rt2`,this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new Yd(Wd),this.copyPass.material.blending=0,this.timer=new Po}swapBuffers(){let e=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=e}addPass(e){this.passes.push(e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(e,t){this.passes.splice(t,0,e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(e){let t=this.passes.indexOf(e);t!==-1&&this.passes.splice(t,1)}isLastEnabledPass(e){for(let t=e+1;t<this.passes.length;t++)if(this.passes[t].enabled)return!1;return!0}render(e){this.timer.update(),e===void 0&&(e=this.timer.getDelta());let t=this.renderer.getRenderTarget(),n=!1;for(let t=0,r=this.passes.length;t<r;t++){let r=this.passes[t];if(r.enabled!==!1){if(r.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(t),r.render(this.renderer,this.writeBuffer,this.readBuffer,e,n),r.needsSwap){if(n){let t=this.renderer.getContext(),n=this.renderer.state.buffers.stencil;n.setFunc(t.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,e),n.setFunc(t.EQUAL,1,4294967295)}this.swapBuffers()}Xd!==void 0&&(r instanceof Xd?n=!0:r instanceof Zd&&(n=!1))}}this.renderer.setRenderTarget(t)}reset(e){if(e===void 0){let t=this.renderer.getSize(new H);this._pixelRatio=this.renderer.getPixelRatio(),this._width=t.width,this._height=t.height,e=this.renderTarget1.clone(),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=e,this.renderTarget2=e.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(e,t){this._width=e,this._height=t;let n=this._width*this._pixelRatio,r=this._height*this._pixelRatio;this.renderTarget1.setSize(n,r),this.renderTarget2.setSize(n,r);for(let e=0;e<this.passes.length;e++)this.passes[e].setSize(n,r)}setPixelRatio(e){this._pixelRatio=e,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}},$d=class extends Gd{constructor(e,t,n=null,r=null,i=null){super(),this.scene=e,this.camera=t,this.overrideMaterial=n,this.clearColor=r,this.clearAlpha=i,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this.isRenderPass=!0,this._oldClearColor=new K}render(e,t,n){let r=e.autoClear;e.autoClear=!1;let i,a;this.overrideMaterial!==null&&(a=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(e.getClearColor(this._oldClearColor),e.setClearColor(this.clearColor,e.getClearAlpha())),this.clearAlpha!==null&&(i=e.getClearAlpha(),e.setClearAlpha(this.clearAlpha)),this.clearDepth==1&&e.clearDepth(),e.setRenderTarget(this.renderToScreen?null:n),this.clear===!0&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),e.render(this.scene,this.camera),this.clearColor!==null&&e.setClearColor(this._oldClearColor),this.clearAlpha!==null&&e.setClearAlpha(i),this.overrideMaterial!==null&&(this.scene.overrideMaterial=a),e.autoClear=r}},ef={name:`LuminosityHighPassShader`,uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new K(0)},defaultOpacity:{value:0}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;

			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform sampler2D tDiffuse;
		uniform vec3 defaultColor;
		uniform float defaultOpacity;
		uniform float luminosityThreshold;
		uniform float smoothWidth;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );

			float v = luminance( texel.xyz );

			vec4 outputColor = vec4( defaultColor.rgb, defaultOpacity );

			float alpha = smoothstep( luminosityThreshold, luminosityThreshold + smoothWidth, v );

			gl_FragColor = mix( outputColor, texel, alpha );

		}`},tf=class e extends Gd{constructor(e,t=1,n,r){super(),this.strength=t,this.radius=n,this.threshold=r,this.resolution=e===void 0?new H(256,256):new H(e.x,e.y),this.clearColor=new K(0,0,0),this.needsSwap=!1,this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let i=Math.round(this.resolution.x/2),a=Math.round(this.resolution.y/2);this.renderTargetBright=new Dn(i,a,{type:pe,depthBuffer:!1}),this.renderTargetBright.texture.name=`UnrealBloomPass.bright`,this.renderTargetBright.texture.generateMipmaps=!1;for(let e=0;e<this.nMips;e++){let t=new Dn(i,a,{type:pe,depthBuffer:!1});t.texture.name=`UnrealBloomPass.h`+e,t.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(t);let n=new Dn(i,a,{type:pe,depthBuffer:!1});n.texture.name=`UnrealBloomPass.v`+e,n.texture.generateMipmaps=!1,this.renderTargetsVertical.push(n),i=Math.round(i/2),a=Math.round(a/2)}let o=ef;this.highPassUniforms=Ia.clone(o.uniforms),this.highPassUniforms.luminosityThreshold.value=r,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new za({uniforms:this.highPassUniforms,vertexShader:o.vertexShader,fragmentShader:o.fragmentShader}),this.separableBlurMaterials=[];let s=[6,10,14,18,22];i=Math.round(this.resolution.x/2),a=Math.round(this.resolution.y/2);for(let e=0;e<this.nMips;e++)this.separableBlurMaterials.push(this._getSeparableBlurMaterial(s[e])),this.separableBlurMaterials[e].uniforms.invSize.value=new H(1/i,1/a),i=Math.round(i/2),a=Math.round(a/2);this.compositeMaterial=this._getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=t,this.compositeMaterial.uniforms.bloomRadius.value=.1;let c=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=c,this.bloomTintColors=[new U(1,1,1),new U(1,1,1),new U(1,1,1),new U(1,1,1),new U(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,this.copyUniforms=Ia.clone(Wd.uniforms),this.blendMaterial=new za({uniforms:this.copyUniforms,vertexShader:Wd.vertexShader,fragmentShader:Wd.fragmentShader,premultipliedAlpha:!0,blending:2,depthTest:!1,depthWrite:!1,transparent:!0}),this._oldClearColor=new K,this._oldClearAlpha=1,this._basic=new zi,this._fsQuad=new Jd(null)}dispose(){for(let e=0;e<this.renderTargetsHorizontal.length;e++)this.renderTargetsHorizontal[e].dispose();for(let e=0;e<this.renderTargetsVertical.length;e++)this.renderTargetsVertical[e].dispose();this.renderTargetBright.dispose();for(let e=0;e<this.separableBlurMaterials.length;e++)this.separableBlurMaterials[e].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this._basic.dispose(),this._fsQuad.dispose()}setSize(e,t){let n=Math.round(e/2),r=Math.round(t/2);this.renderTargetBright.setSize(n,r);for(let e=0;e<this.nMips;e++)this.renderTargetsHorizontal[e].setSize(n,r),this.renderTargetsVertical[e].setSize(n,r),this.separableBlurMaterials[e].uniforms.invSize.value=new H(1/n,1/r),n=Math.round(n/2),r=Math.round(r/2)}render(t,n,r,i,a){t.getClearColor(this._oldClearColor),this._oldClearAlpha=t.getClearAlpha();let o=t.autoClear;t.autoClear=!1,t.setClearColor(this.clearColor,0),a&&t.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this._fsQuad.material=this._basic,this._basic.map=r.texture,t.setRenderTarget(null),t.clear(),this._fsQuad.render(t)),this.highPassUniforms.tDiffuse.value=r.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this._fsQuad.material=this.materialHighPassFilter,t.setRenderTarget(this.renderTargetBright),t.clear(),this._fsQuad.render(t);let s=this.renderTargetBright;for(let n=0;n<this.nMips;n++)this._fsQuad.material=this.separableBlurMaterials[n],this.separableBlurMaterials[n].uniforms.colorTexture.value=s.texture,this.separableBlurMaterials[n].uniforms.direction.value=e.BlurDirectionX,t.setRenderTarget(this.renderTargetsHorizontal[n]),t.clear(),this._fsQuad.render(t),this.separableBlurMaterials[n].uniforms.colorTexture.value=this.renderTargetsHorizontal[n].texture,this.separableBlurMaterials[n].uniforms.direction.value=e.BlurDirectionY,t.setRenderTarget(this.renderTargetsVertical[n]),t.clear(),this._fsQuad.render(t),s=this.renderTargetsVertical[n];this._fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,t.setRenderTarget(this.renderTargetsHorizontal[0]),t.clear(),this._fsQuad.render(t),this._fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,a&&t.state.buffers.stencil.setTest(!0),this.renderToScreen?(t.setRenderTarget(null),this._fsQuad.render(t)):(t.setRenderTarget(r),this._fsQuad.render(t)),t.setClearColor(this._oldClearColor,this._oldClearAlpha),t.autoClear=o}_getSeparableBlurMaterial(e){let t=[],n=e/3;for(let r=0;r<e;r++)t.push(.39894*Math.exp(-.5*r*r/(n*n))/n);let r=[],i=[];for(let n=1;n<e;n+=2){let a=t[n],o=n+1<e?t[n+1]:0,s=a+o;r.push((n*a+(n+1)*o)/s),i.push(s)}return new za({defines:{KERNEL_PAIRS:r.length},uniforms:{colorTexture:{value:null},invSize:{value:new H(.5,.5)},direction:{value:new H(.5,.5)},centerWeight:{value:t[0]},gaussianOffsets:{value:r},gaussianWeights:{value:i}},vertexShader:`

				varying vec2 vUv;

				void main() {

					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

				}`,fragmentShader:`

				#include <common>

				varying vec2 vUv;

				uniform sampler2D colorTexture;
				uniform vec2 invSize;
				uniform vec2 direction;
				uniform float centerWeight;
				uniform float gaussianOffsets[KERNEL_PAIRS];
				uniform float gaussianWeights[KERNEL_PAIRS];

				void main() {

					vec3 diffuseSum = texture2D( colorTexture, vUv ).rgb * centerWeight;

					for ( int i = 0; i < KERNEL_PAIRS; i ++ ) {

						vec2 uvOffset = direction * invSize * gaussianOffsets[ i ];
						vec3 sample1 = texture2D( colorTexture, vUv + uvOffset ).rgb;
						vec3 sample2 = texture2D( colorTexture, vUv - uvOffset ).rgb;
						diffuseSum += ( sample1 + sample2 ) * gaussianWeights[ i ];

					}

					gl_FragColor = vec4( diffuseSum, 1.0 );

				}`})}_getCompositeMaterial(e){return new za({defines:{NUM_MIPS:e},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`

				varying vec2 vUv;

				void main() {

					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

				}`,fragmentShader:`

				varying vec2 vUv;

				uniform sampler2D blurTexture1;
				uniform sampler2D blurTexture2;
				uniform sampler2D blurTexture3;
				uniform sampler2D blurTexture4;
				uniform sampler2D blurTexture5;
				uniform float bloomStrength;
				uniform float bloomRadius;
				uniform float bloomFactors[NUM_MIPS];
				uniform vec3 bloomTintColors[NUM_MIPS];

				float lerpBloomFactor( const in float factor ) {

					float mirrorFactor = 1.2 - factor;
					return mix( factor, mirrorFactor, bloomRadius );

				}

				void main() {

					// 3.0 for backwards compatibility with previous alpha-based intensity
					vec3 bloom = 3.0 * bloomStrength * (
						lerpBloomFactor( bloomFactors[ 0 ] ) * bloomTintColors[ 0 ] * texture2D( blurTexture1, vUv ).rgb +
						lerpBloomFactor( bloomFactors[ 1 ] ) * bloomTintColors[ 1 ] * texture2D( blurTexture2, vUv ).rgb +
						lerpBloomFactor( bloomFactors[ 2 ] ) * bloomTintColors[ 2 ] * texture2D( blurTexture3, vUv ).rgb +
						lerpBloomFactor( bloomFactors[ 3 ] ) * bloomTintColors[ 3 ] * texture2D( blurTexture4, vUv ).rgb +
						lerpBloomFactor( bloomFactors[ 4 ] ) * bloomTintColors[ 4 ] * texture2D( blurTexture5, vUv ).rgb
					);

					float bloomAlpha = max( bloom.r, max( bloom.g, bloom.b ) );
					gl_FragColor = vec4( bloom, bloomAlpha );

				}`})}};tf.BlurDirectionX=new H(1,0),tf.BlurDirectionY=new H(0,1);var nf={name:`OutputShader`,uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1}},vertexShader:`
		precision highp float;

		uniform mat4 modelViewMatrix;
		uniform mat4 projectionMatrix;

		attribute vec3 position;
		attribute vec2 uv;

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		precision highp float;

		uniform sampler2D tDiffuse;

		#include <tonemapping_pars_fragment>
		#include <colorspace_pars_fragment>

		varying vec2 vUv;

		void main() {

			gl_FragColor = texture2D( tDiffuse, vUv );

			// tone mapping

			#ifdef LINEAR_TONE_MAPPING

				gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );

			#elif defined( REINHARD_TONE_MAPPING )

				gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );

			#elif defined( CINEON_TONE_MAPPING )

				gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );

			#elif defined( ACES_FILMIC_TONE_MAPPING )

				gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );

			#elif defined( AGX_TONE_MAPPING )

				gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );

			#elif defined( NEUTRAL_TONE_MAPPING )

				gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );

			#elif defined( CUSTOM_TONE_MAPPING )

				gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );

			#endif

			// color space

			#ifdef SRGB_TRANSFER

				gl_FragColor = sRGBTransferOETF( gl_FragColor );

			#endif

		}`},rf=class extends Gd{constructor(){super(),this.isOutputPass=!0,this.uniforms=Ia.clone(nf.uniforms),this.material=new Ba({name:nf.name,uniforms:this.uniforms,vertexShader:nf.vertexShader,fragmentShader:nf.fragmentShader}),this._fsQuad=new Jd(this.material),this._outputColorSpace=null,this._toneMapping=null}render(e,t,n){this.uniforms.tDiffuse.value=n.texture,this.uniforms.toneMappingExposure.value=e.toneMappingExposure,(this._outputColorSpace!==e.outputColorSpace||this._toneMapping!==e.toneMapping)&&(this._outputColorSpace=e.outputColorSpace,this._toneMapping=e.toneMapping,this.material.defines={},G.getTransfer(this._outputColorSpace)===`srgb`&&(this.material.defines.SRGB_TRANSFER=``),this._toneMapping===1?this.material.defines.LINEAR_TONE_MAPPING=``:this._toneMapping===2?this.material.defines.REINHARD_TONE_MAPPING=``:this._toneMapping===3?this.material.defines.CINEON_TONE_MAPPING=``:this._toneMapping===4?this.material.defines.ACES_FILMIC_TONE_MAPPING=``:this._toneMapping===6?this.material.defines.AGX_TONE_MAPPING=``:this._toneMapping===7?this.material.defines.NEUTRAL_TONE_MAPPING=``:this._toneMapping===5&&(this.material.defines.CUSTOM_TONE_MAPPING=``),this.material.needsUpdate=!0),this.renderToScreen===!0?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this._fsQuad.render(e))}dispose(){this.material.dispose(),this._fsQuad.dispose()}},af={name:`HorizontalTiltShiftShader`,uniforms:{tDiffuse:{value:null},h:{value:1/512},r:{value:.35}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform sampler2D tDiffuse;
		uniform float h;
		uniform float r;

		varying vec2 vUv;

		void main() {

			vec4 sum = vec4( 0.0 );

			float hh = h * abs( r - vUv.y );

			sum += texture2D( tDiffuse, vec2( vUv.x - 4.0 * hh, vUv.y ) ) * 0.051;
			sum += texture2D( tDiffuse, vec2( vUv.x - 3.0 * hh, vUv.y ) ) * 0.0918;
			sum += texture2D( tDiffuse, vec2( vUv.x - 2.0 * hh, vUv.y ) ) * 0.12245;
			sum += texture2D( tDiffuse, vec2( vUv.x - 1.0 * hh, vUv.y ) ) * 0.1531;
			sum += texture2D( tDiffuse, vec2( vUv.x, vUv.y ) ) * 0.1633;
			sum += texture2D( tDiffuse, vec2( vUv.x + 1.0 * hh, vUv.y ) ) * 0.1531;
			sum += texture2D( tDiffuse, vec2( vUv.x + 2.0 * hh, vUv.y ) ) * 0.12245;
			sum += texture2D( tDiffuse, vec2( vUv.x + 3.0 * hh, vUv.y ) ) * 0.0918;
			sum += texture2D( tDiffuse, vec2( vUv.x + 4.0 * hh, vUv.y ) ) * 0.051;

			gl_FragColor = sum;

		}`},of={name:`VerticalTiltShiftShader`,uniforms:{tDiffuse:{value:null},v:{value:1/512},r:{value:.35}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform sampler2D tDiffuse;
		uniform float v;
		uniform float r;

		varying vec2 vUv;

		void main() {

			vec4 sum = vec4( 0.0 );

			float vv = v * abs( r - vUv.y );

			sum += texture2D( tDiffuse, vec2( vUv.x, vUv.y - 4.0 * vv ) ) * 0.051;
			sum += texture2D( tDiffuse, vec2( vUv.x, vUv.y - 3.0 * vv ) ) * 0.0918;
			sum += texture2D( tDiffuse, vec2( vUv.x, vUv.y - 2.0 * vv ) ) * 0.12245;
			sum += texture2D( tDiffuse, vec2( vUv.x, vUv.y - 1.0 * vv ) ) * 0.1531;
			sum += texture2D( tDiffuse, vec2( vUv.x, vUv.y ) ) * 0.1633;
			sum += texture2D( tDiffuse, vec2( vUv.x, vUv.y + 1.0 * vv ) ) * 0.1531;
			sum += texture2D( tDiffuse, vec2( vUv.x, vUv.y + 2.0 * vv ) ) * 0.12245;
			sum += texture2D( tDiffuse, vec2( vUv.x, vUv.y + 3.0 * vv ) ) * 0.0918;
			sum += texture2D( tDiffuse, vec2( vUv.x, vUv.y + 4.0 * vv ) ) * 0.051;

			gl_FragColor = sum;

		}`},sf={name:`VignetteShader`,uniforms:{tDiffuse:{value:null},offset:{value:1},darkness:{value:1}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform float offset;
		uniform float darkness;

		uniform sampler2D tDiffuse;

		varying vec2 vUv;

		void main() {

			// Eskil's vignette

			vec4 texel = texture2D( tDiffuse, vUv );
			vec2 uv = ( vUv - vec2( 0.5 ) ) * vec2( offset );
			gl_FragColor = vec4( mix( texel.rgb, vec3( 1.0 - darkness ), dot( uv, uv ) ), texel.a );

		}`},cf=matchMedia(`(pointer: coarse)`).matches||Math.min(screen.width,screen.height)<700||new URLSearchParams(location.search).has(`low`),lf=Math.min(window.devicePixelRatio||1,cf?1.25:2),uf=class{container;renderer;composer;renderPass;hTilt=null;vTilt=null;w=1;h=1;constructor(e){this.container=e,this.renderer=new au({antialias:!cf,powerPreference:`high-performance`}),this.renderer.setPixelRatio(lf),this.renderer.toneMapping=4,this.renderer.toneMappingExposure=1.15,e.appendChild(this.renderer.domElement),this.composer=new Qd(this.renderer),this.renderPass=new $d(new pr,new wo),this.composer.addPass(this.renderPass),df.has(`nobloom`)||this.composer.addPass(new tf(new H(256,256),cf?.3:.42,.4,1.08)),!cf&&!df.has(`notilt`)&&(this.hTilt=new Yd(af),this.vTilt=new Yd(of),this.composer.addPass(this.hTilt),this.composer.addPass(this.vTilt));let t=new Yd(sf);t.uniforms.offset.value=1.1,t.uniforms.darkness.value=1,df.has(`novig`)||this.composer.addPass(t),this.composer.addPass(new rf),new ResizeObserver(()=>this.resize()).observe(e),this.resize()}resize(){this.w=Math.max(1,this.container.clientWidth),this.h=Math.max(1,this.container.clientHeight),this.renderer.setSize(this.w,this.h,!1),this.renderer.domElement.style.width=this.w+`px`,this.renderer.domElement.style.height=this.h+`px`,this.composer.setSize(this.w,this.h),this.hTilt&&this.vTilt&&(this.hTilt.uniforms.h.value=2.5/this.w,this.vTilt.uniforms.v.value=2.5/this.h,this.hTilt.uniforms.r.value=.45,this.vTilt.uniforms.r.value=.45)}get aspect(){return this.w/this.h}render(e){e.setAspect(this.aspect),ff?this.renderer.render(e.scene,e.camera):(this.renderPass.scene=e.scene,this.renderPass.camera=e.camera,this.composer.render())}},df=new URLSearchParams(location.search),ff=df.has(`nopost`),pf=[`dirt`,`stone`,`deepslate`,`obsidian`,`bedrock`,`seal`,`core`,`barrel`,`crystal`,`coal`,`copper`,`iron`,`gold`,`redstone`,`lapis`,`diamond`,`emerald`],mf=[`whetstone`,`gear`,`plate`,`amp_crystal`,`mirror`,`core_earth`,`core_thunder`,`core_poison`,`core_fire`,`core_ice`,`holy_seal`,`mine_bomb`,`heal_potion`];function hf(e){let t=[{id:`rules`,label:`英雄與背包`,render:gf},{id:`synth`,label:`合成與遺物`,render:_f},{id:`weapons`,label:`25 武器圖鑑`,render:vf},{id:`blocks`,label:`方塊與礦石`,render:bf},{id:`enemies`,label:`怪物與 Boss`,render:xf},{id:`perks`,label:`關間強化`,render:Sf}],n=e.querySelector(`#wiki-tabs`),r=e.querySelector(`#wiki-panels`);n.replaceChildren(),r.replaceChildren();let i=[],a=[];t.forEach((e,t)=>{let s=document.createElement(`button`);s.type=`button`,s.role=`tab`,s.id=`wiki-tab-${e.id}`,s.className=`wiki-tab`,s.setAttribute(`aria-controls`,`wiki-panel-${e.id}`),s.setAttribute(`aria-selected`,t===0?`true`:`false`),s.tabIndex=t===0?0:-1,s.textContent=e.label,s.addEventListener(`click`,()=>o(t,!1)),i.push(s),n.appendChild(s);let c=document.createElement(`section`);c.role=`tabpanel`,c.id=`wiki-panel-${e.id}`,c.className=`wiki-panel`,c.setAttribute(`aria-labelledby`,s.id),c.hidden=t!==0,c.innerHTML=e.render(),a.push(c),r.appendChild(c)});function o(e,t){let n=(e+i.length)%i.length;i.forEach((e,r)=>{let i=r===n;e.setAttribute(`aria-selected`,i?`true`:`false`),e.tabIndex=i?0:-1,a[r].hidden=!i,i&&t&&e.focus()})}n.addEventListener(`keydown`,e=>{let t=i.findIndex(e=>e.getAttribute(`aria-selected`)===`true`);e.key===`ArrowRight`?(e.preventDefault(),o(t+1,!0)):e.key===`ArrowLeft`?(e.preventDefault(),o(t-1,!0)):e.key===`Home`?(e.preventDefault(),o(0,!0)):e.key===`End`&&(e.preventDefault(),o(i.length-1,!0))}),yf(a[2])}function gf(){let e=m.map(e=>`
    <tr>
      <th scope="row" style="color:${e.css}">
        <div class="w-head">
          <img class="w-ico" src="${Yu(`hero`,e.id)}" alt="">
          <div>
            <b>${e.name}</b><br>
            <small>${e.title}</small>
          </div>
        </div>
      </th>
      <td><b>${e.title}</b><br><small>移速 ${Math.round(e.moveSpeed*100)}%｜接球寬 ${e.catchWidth} 格</small></td>
      <td>${e.specialtyDesc}</td>
      <td><b>【${e.volleyName}】</b><br>${e.volleyDesc}</td>
    </tr>`).join(``);return`
    <h3>🦸 5 大出戰英雄與《BALL x PIT》接球回擊（Catch & Volley）</h3>
    <ul class="wiki-list">
      <li><b>右側礦坑戰線與英雄投擲</b>：英雄站在最深挖掘層上方 <b>${h.heroLineGapRows} 格</b>的戰線向下投擲武器，隨礦坑向下挖掘同步推進。可用鍵盤 <b>A / D（或 ← / →）</b>、或<b>滑鼠／手指在右側礦坑橫向移動</b>操控英雄（忙於左側合成時，英雄也會以 55% 速度自動巡邏協防）。</li>
      <li><b>🏓 接球回擊（Volley Buff，持續 ${h.volleyBuffSec} 秒）</b>：當武器撞擊方塊或怪物向上反彈回英雄身邊時，移動英雄<b>接住武器</b>會立即觸發強擊回投：<b>回復 +${Math.round(h.volleyHealPct*100)}% 最大 HP（聖劍 +18% 壽命）</b>、<b>傷害 +${Math.round(h.volleyBaseDmgBonus*100)}%（連續接球每層再 +${Math.round(h.volleyStackDmgBonus*100)}%，最高 5 層 +95%）</b>、<b>投速 ×${h.volleySpeedMul}</b>，並觸發英雄專屬<b>【接球特技】</b>！若漏接撞上頂部戰線則會扣除 <b>${Math.round(h.missCeilingWearPct*100)}% HP</b> 並中斷連段。</li>
      <li><b>⚖️ 5 大武器物理手感原型</b>：每把武器皆具備獨立的<b>反彈力（A+ ~ C）、投速（12.2 ~ 18.5）與重量</b>——<b>🏓 高彈速射型</b>（碰撞即高速反彈）、<b>🪃 弧線迴旋型</b>（撞擊 2 次自動弧線返航）、<b>⚖️ 均衡空戰型</b>、<b>🪨 超重碎岩型</b>（接住回投首擊爆發 <b>×${h.heavyVolleyDmgMul} 重擊扣殺</b>）、<b>🚀 貫穿噴射型</b>（連鑽 3 層後點火噴射返航）！</li>
    </ul>
    <div tabindex="0" role="region" aria-labelledby="cap-heroes" class="table-wrapper">
      <table class="wiki-table" style="--label-2:'擅長武器與體質'; --label-3:'英雄被動與起手'; --label-4:'接球回擊特技'">
        <caption id="cap-heroes">5 大可選英雄專精、起手配置與接球特技一覽</caption>
        <thead>
          <tr>
            <th scope="col">英雄</th>
            <th scope="col">擅長武器與體質</th>
            <th scope="col">英雄被動與起手</th>
            <th scope="col">接球回擊特技</th>
          </tr>
        </thead>
        <tbody>${e}</tbody>
      </table>
    </div>

    <h3>🎒 7×7 鍛造背包自動產線・硬核經濟・全彈超載</h3>
    <ul class="wiki-list">
      <li><b>7×7 鍛造背包網格（開局 5×5 解鎖）</b>：將武器擺入已解鎖的背包格內，每把武器都有獨立的<b>自動鍛造冷卻條（3.4s ~ 7.2s）</b>，跑滿即由英雄向下投出實體武器！你也能把<b>武器、🧨 矮人深層炸彈、🧪 女神甘露藥水</b>直接<b>拖曳到右邊礦坑指定直列</b>發動 <b>${h.airDropPowerMul}× 超載精準空投</b>！</li>
      <li><b>🔥 全彈超載（冷卻 ${h.overdriveCooldownSec} 秒）</b>：點擊<b>「🔥 全彈超載」</b>，背包內所有武器<b>立即同步齊射一輪</b>，並在 <b>${h.overdriveSec} 秒</b>內使鍛造速度 <b>×1.65</b>、全傷害 <b>+${Math.round(h.overdriveBaseDmgBonus*100)}%</b>！</li>
      <li><b>💀 硬核經濟與付費擴格</b>：開局金幣 <b>${h.startGold}G</b>、普通泥土不掉金幣（需挖掘礦脈、水晶與討伐怪物／首領），並<b>全面取消免費擴格券</b>；擴充背包格需花費 <b>${h.expandSlotBaseCost}G 起（每格 +${h.expandSlotCostStep}G）</b>或挑選強化卡「次元背包術」。</li>
      <li><b>🏆 10 關闖關 ＆ ♾️ 無盡深淵</b>：10 關闖關模式背包與金幣全程繼承；無盡深淵模式每 <b>${h.endlessGateEvery}m</b> 破除守層結界可挑選 1 張強化卡，每 <b>${h.endlessGateEvery*3}m</b> 迎戰輪替首領！</li>
    </ul>
  `}function _f(){let e=ud.map(e=>`
    <tr>
      <th scope="row"><b>${e.inputs}</b></th>
      <td><b style="color:#ffe680">${e.output}</b></td>
      <td>${e.effect}</td>
    </tr>`).join(``),t=mf.map(e=>{let t=od[e];return`
      <tr>
        <th scope="row" style="color:${t.cssColor}">
          <div class="w-head">
            <img class="w-ico" src="${cd(e)}" alt="">
            <div>
              <b>${t.name}</b><br>
              <small>${t.subtitle}</small>
            </div>
          </div>
        </th>
        <td>💰 <b>${t.cost}G</b><br><small>${t.shapeName}</small></td>
        <td>${t.desc}</td>
        <td>${t.recipeHint}</td>
      </tr>`}).join(``),n=l.map((e,t)=>{let n=u[e];return`
      <tr>
        <th scope="row" style="color:${n.css}">
          <img class="inline-ico" src="${Yu(`tile`,t)}" alt=""> ${n.name}元素
        </th>
        <td>${n.resonance}</td>
        <td>${n.resonanceDesc}</td>
      </tr>`}).join(``);return`
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
        <tbody>${e}</tbody>
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
        <tbody>${t}</tbody>
      </table>
    </div>

    <h3>🔮 五元素共鳴與滿級 Lv5 同名解鎖</h3>
    <ul class="wiki-list">
      <li><b>如何累積共鳴經驗</b>：背包每次鍛造投射武器（<b>+3 點</b>，鄰接共鳴水晶或魔晶再 <b>+3~+4 點</b>）、完成合成進化（<b>+8 ~ +30 點</b>）、以及右側礦坑挖出對應元素礦石（<b>+4 點</b>）都會推進上方共鳴條！</li>
      <li><b>滿條獎勵</b>：每累計滿 <b>${h.cumThreshold} 點</b>，該元素<b>共鳴等級永久 +1 級</b>，並免費額外空投 1 把該元素的專屬特武（鑽地螺旋鑽／磁暴核心／刺客拳刃／火焰刀／霜狼之爪）！</li>
      <li><b>同名武器限制與滿級 Lv${h.resonanceMaxLv} 解鎖</b>：共鳴未滿 Lv${h.resonanceMaxLv} 時，場上同名武器最多同時存在 1 把（再次投射會直接為場上那把<b>回復 ${Math.round(h.dupHealPct*100)}% HP 並永久疊加 +${Math.round(h.dupBoost*100)}% 傷害</b>，紧急空投除外）；當該元素共鳴達到 <b>Lv${h.resonanceMaxLv}</b> 後，徹底解鎖數量限制，場上可同時存在多把同名傳說武器一起轟炸礦坑！</li>
    </ul>
    <div tabindex="0" role="region" aria-labelledby="cap-reso" class="table-wrapper">
      <table class="wiki-table" style="--label-2:'強化項目'; --label-3:'每級效果（最高 Lv5）'">
        <caption id="cap-reso">五元素共鳴等級加成表</caption>
        <thead>
          <tr>
            <th scope="col">元素</th>
            <th scope="col">強化項目</th>
            <th scope="col">每級效果（最高 Lv${h.resonanceMaxLv}）</th>
          </tr>
        </thead>
        <tbody>${n}</tbody>
      </table>
    </div>
  `}function vf(){return`
    <div class="filter-bar" role="toolbar" aria-label="篩選武器">${[{key:`all`,label:`全部 (25)`},{key:`el:earth`,label:`🟫 土 (5)`},{key:`el:thunder`,label:`⚡ 雷 (5)`},{key:`el:poison`,label:`☠ 毒 (5)`},{key:`el:fire`,label:`🔥 火 (5)`},{key:`el:ice`,label:`❄ 冰 (4)`},{key:`el:holy`,label:`✨ 聖 (1)`},{key:`cat:low`,label:`低階・1×1`},{key:`cat:t1`,label:`初階・1×2`},{key:`cat:t2`,label:`高階・長/重`},{key:`cat:cum`,label:`特武・魔晶`},{key:`cat:leg`,label:`傳說／神聖`}].map((e,t)=>`<button type="button" class="filter-chip" data-filter="${e.key}" aria-pressed="${t===0?`true`:`false`}">${e.label}</button>`).join(``)}</div>
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
        <tbody>${A.map(e=>{let t=f(e.element),n=od[e.id],r=e.category===`holy`?`leg`:e.category,i=e.ult?`<b>【${e.ult.name}】</b><small>（${e.ult.type===`cd`?`冷卻 ${e.ult.value} 秒`:`集氣：${e.ult.value} ${e.ult.unit}`}）</small><br>${e.ult.desc}`:`<span class="muted">無大招（輕巧高頻速攻）</span>`;return`
      <tr data-el="${e.element}" data-cat="${r}">
        <th scope="row" style="color:${t.css}">
          <div class="w-head">
            <img class="w-ico" src="${Yu(`weapon`,e.id)}" alt="">
            <div>
              <div>#${e.num} <b>${e.name}</b></div>
              <small>${t.icon} ${t.name}・${E[e.category]}</small>
            </div>
          </div>
        </th>
        <td><b>${n.shapeName}</b>｜商店 💰${n.cost}G<br>⚡ 鍛造每 <b>${n.forgeCd}s</b> 投射<br><small class="muted">${n.recipeHint}</small></td>
        <td>HP <b>${e.baseHp}</b>${e.lifespanDecay?` <small>(壽命型)</small>`:``}<br>傷害 <b>${e.dmg}</b><br><small style="color:#ffd878">彈力 <b>${e.bounceRating}</b>｜投速 <b>${e.throwSpeed}</b>｜${e.weightLabel}（${e.archetypeName}）</small></td>
        <td>${e.passive}</td>
        <td>${i}</td>
      </tr>`}).join(``)}</tbody>
      </table>
    </div>
  `}function yf(e){let t=Array.from(e.querySelectorAll(`.filter-chip`)),n=Array.from(e.querySelectorAll(`#wiki-weapons-table tbody tr`));t.forEach(e=>{e.addEventListener(`click`,()=>{let r=e.dataset.filter??`all`;t.forEach(t=>t.setAttribute(`aria-pressed`,t===e?`true`:`false`)),n.forEach(e=>{r===`all`?e.hidden=!1:r.startsWith(`el:`)?e.hidden=e.dataset.el!==r.slice(3):r.startsWith(`cat:`)&&(e.hidden=e.dataset.cat!==r.slice(4))})})})}function bf(){return`
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
        <tbody>${pf.map(e=>{let t=_[e],n=Number.isFinite(t.hp)?`${Math.round(t.hp*h.blockHpHardcoreMul)}（硬核 +85%｜闖關 ×1.0~×3.2）`:`無法直接挖掘`,r=y[e]??0,i=[r>0?`💰 +${r}G`:e===`stone`?`💰 10% 掉 1G`:e===`deepslate`?`💰 18% 掉 1G`:``,t.ore?`${v[t.ore]} 資源＋共鳴經驗`:``].filter(Boolean).join(`｜`)||`無（0G）`;return`
      <tr>
        <th scope="row">
          <div class="w-head">
            <img class="w-ico" src="${Yu(`block`,e)}" alt="">
            <b>${t.name}</b>
          </div>
        </th>
        <td>${n}</td>
        <td>每次碰撞 -${t.wear} HP</td>
        <td>${t.depthNote}</td>
        <td>${i}</td>
      </tr>`}).join(``)}</tbody>
      </table>
    </div>
  `}function xf(){let e=[`zombie`,`skeleton`,`mushroom`,`spider`,`golem`,`spider_queen`,`balrog`],t=new Set([`golem`,`spider_queen`,`balrog`]);return`
    <h3>巡邏怪物・金冠守層菁英・三大元素首領</h3>
    <p class="wiki-note">洞穴與結界大廳怪物會<b>主動橫向追擊武器</b>；頭戴皇冠的<b>👑 守層菁英</b>擁有 <b>2.5× 血量與 1.5× 傷害</b>，擊殺掉<b>💰26G（無免費擴格券！）</b>；三大首領各自擁有專屬減傷護盾，善用對應<b>剋制元素或矮人炸彈</b>可瞬間破盾並造成高額破盾傷害！</p>
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
        <tbody>${e.map(e=>{let n=hd[e],r=t.has(e),i=Math.round(n.hp*h.enemyHpHardcoreMul),a=e===`spider`?`射程 ${n.range} 格／CD ${n.cd}s（緩速網）`:e===`mushroom`?`偵測 ${n.range} 格／引信 1s 自爆 ${n.dmg} 傷`:r?`接觸每 0.5s 造成 ${n.dmg} 傷＋專屬範圍彈幕／召喚／元素護盾（討伐賞金 💰90G）`:`射程 ${n.range} 格／每次 ${n.dmg} 傷（討伐賞金 💰9G，金冠菁英 💰26G）`;return`
      <tr>
        <th scope="row">
          <div class="w-head">
            <img class="w-ico" src="${Yu(`enemy`,e)}" alt="">
            <b>${n.name}${r?` (Boss)`:``}</b>
          </div>
        </th>
        <td>${i.toLocaleString()}${r?`（硬核 +135%｜無盡隨深度成長）`:`（硬核 +135%｜闖關 ×1.0~×18.0）`}</td>
        <td>${a}</td>
        <td>${n.desc}</td>
      </tr>`}).join(``)}</tbody>
      </table>
    </div>
  `}function Sf(){let e=T.map(e=>`
    <tr>
      <th scope="row"><span aria-hidden="true">${e.icon}</span> <b>${e.name}</b>${e.campaignOnly?` <small class="muted">(闖關限定)</small>`:``}</th>
      <td>${e.desc}</td>
      <td>${e.max?`最多 ${e.max} 次`:`無上限`}</td>
    </tr>`).join(``);return`
    <h3>三選一強化卡（過關／無盡破結界獎勵）</h3>
    <p class="wiki-note">10 關闖關模式每通過 1 關、無盡深淵模式每破除 1 道守層結界（每 ${h.endlessGateEvery}m），皆可從隨機 3 張強化卡中挑選 1 張持續疊加！</p>
    <div tabindex="0" role="region" aria-labelledby="cap-perks" class="table-wrapper">
      <table class="wiki-table" style="--label-2:'強化效果'; --label-3:'疊加上限'">
        <caption id="cap-perks">全 ${T.length} 種強化卡一覽</caption>
        <thead>
          <tr>
            <th scope="col">強化名稱</th>
            <th scope="col">強化效果</th>
            <th scope="col">疊加上限</th>
          </tr>
        </thead>
        <tbody>${e}</tbody>
      </table>
    </div>
  `}var Z=e=>document.getElementById(e),Cf=`fw_records_v1`;function wf(){try{let e=localStorage.getItem(Cf);if(e){let t=JSON.parse(e);return{bestStage:Number(t.bestStage)||0,campaignCleared:!!t.campaignCleared,bestEndlessDepth:Number(t.bestEndlessDepth)||0}}}catch{}return{bestStage:0,campaignCleared:!1,bestEndlessDepth:0}}function Tf(){try{localStorage.setItem(Cf,JSON.stringify(Ef))}catch{}}var Ef=wf();function Df(){let e=Z(`best-records`);e.innerHTML=`<span>${Ef.campaignCleared?`🏆 10 關闖關：全通關制霸！`:Ef.bestStage>0?`🏆 10 關闖關最高：第 ${Ef.bestStage} 關`:`🏆 10 關闖關：尚未紀錄`}</span><span>${Ef.bestEndlessDepth>0?`♾️ 無盡最深紀錄：${Ef.bestEndlessDepth}m`:`♾️ 無盡深淵：尚未紀錄`}</span>`}var Of=`title`,kf=`campaign`,Af=`bardin`;function jf(){let e=Z(`hero-select`),t=Z(`hero-detail`);if(!e||!t)return;e.replaceChildren(...m.map(e=>{let t=document.createElement(`button`);return t.type=`button`,t.className=`hero-card`,t.setAttribute(`role`,`radio`),t.setAttribute(`aria-checked`,e.id===Af?`true`:`false`),t.style.setProperty(`--hero-color`,e.css),t.innerHTML=`
        <img src="${Yu(`hero`,e.id)}" alt="">
        <b>${e.name}</b>
        <small>${e.title}</small>`,t.addEventListener(`click`,()=>{Af=e.id,jf()}),t}));let n=p[Af];t.innerHTML=`
    <div><b style="color:${n.css}">${n.name}（${n.title}）</b>｜移速倍率 <b>${Math.round(n.moveSpeed*100)}%</b>｜接球寬度 <b>${n.catchWidth}</b> 格</div>
    <div>✨ 英雄專精：${n.specialtyDesc}</div>
    <div>🏓 接球特技<b>【${n.volleyName}】</b>：${n.volleyDesc}</div>`}var Q={level:0,mods:w(),perks:[],resources:{},weaponsMade:0,totalGold:h.startGold},Mf={earth:0,thunder:0,poison:0,fire:0,ice:0},Nf={earth:0,thunder:0,poison:0,fire:0,ice:0},Pf=0,Ff=h.overdriveSec,If=0,Lf=null,Rf=`campaign`,$=null;function zf(){return Math.max(4,h.overdriveSec+Q.mods.overdriveSecBonus)}function Bf(){return 1+h.overdriveBaseDmgBonus+Q.mods.overdriveDmgBonus}var Vf=new uf(Z(`mine-pane`)),Hf=new fd(Z(`board-pane`),Q.mods,{onForgeWeapon:(e,t,n,r)=>{Zf(e,t,r??``,!!n.forceSpawn,n)},onUseConsumable:(e,t)=>{$&&(e===`mine_bomb`?($.dropTacticalBomb(t),fp(`🧨 矮人深層炸彈引爆${t?`（第 ${t} 列）`:``}！`,`#ffaa44`,cd(`mine_bomb`))):e===`heal_potion`&&($.healAll(.45*Q.mods.healMul),$.shield(3),fp(`🧪 女神甘露：全場武器回復 45% HP ＋ 3 秒無敵！`,`#ff88c8`,cd(`heal_potion`))))},onAddResonanceXp:(e,t)=>Xf(e,t),onToast:(e,t,n)=>fp(e,t,n),getMineColumnFromClientX:(e,t)=>{let n=Z(`mine-pane`).getBoundingClientRect();if(e<n.left||e>n.right||t<n.top||t>n.bottom)return null;let r=(e-n.left)/Math.max(1,n.width);return Math.max(1,Math.min(7,Math.floor(r*7)+1))}});Z(`od-btn`).addEventListener(`click`,()=>{Of!==`play`||Pf>0||If>0||Yf()}),(function(){let e=Z(`mine-pane`),t=Vf.renderer.domElement;t.style.touchAction=`none`,t.addEventListener(`wheel`,e=>{$&&(e.preventDefault(),$.panCamera(-e.deltaY*.012))},{passive:!1});let n=!1,r=0,i=t=>{if(!$)return;let n=e.getBoundingClientRect();if(n.width<=0)return;let r=(t.clientX-n.left)/n.width;$.setHeroPointer(r,!0)};t.addEventListener(`pointerdown`,e=>{$&&(i(e),n=!0,r=e.clientY,t.setPointerCapture(e.pointerId))}),t.addEventListener(`pointermove`,e=>{if(!$||(i(e),!n))return;let a=e.clientY-r;if(Math.abs(a)<6)return;r=e.clientY;let[,o]=$.viewHalf(),s=o*2/Math.max(100,t.clientHeight);$.panCamera(a*s)});let a=()=>{n=!1};t.addEventListener(`pointerup`,a),t.addEventListener(`pointercancel`,a),e.addEventListener(`pointerleave`,()=>{$?.setHeroPointer(.5,!1)});let o={left:!1,right:!1},s=()=>{let e=+!!o.right-!!o.left;$?.setHeroInputDir(e)};window.addEventListener(`keydown`,e=>{Of===`play`&&(e.code===`KeyA`||e.code===`ArrowLeft`?(o.left=!0,s()):(e.code===`KeyD`||e.code===`ArrowRight`)&&(o.right=!0,s()))}),window.addEventListener(`keyup`,e=>{e.code===`KeyA`||e.code===`ArrowLeft`?(o.left=!1,s()):(e.code===`KeyD`||e.code===`ArrowRight`)&&(o.right=!1,s())}),Z(`cam-reset-btn`).addEventListener(`click`,()=>{$?.resetCameraFollow()})})();function Uf(e){let t=Number(new URLSearchParams(location.search).get(`depth`));return t>0?{...S[e],depth:t,caves:Math.max(1,Math.round(t/12)),hardBands:Math.max(1,Math.round(t/28)),gates:Math.max(1,Math.round(t/35))}:S[e]}function Wf(e=kf){kf=e,Q.level=0,Q.mods=w(),Q.perks=[],Q.resources={},Q.weaponsMade=0,Q.totalGold=h.startGold,Lf=null;let t=Q.mods.resonanceStartLv;Mf={earth:t,thunder:t,poison:t,fire:t,ice:t},Nf={earth:0,thunder:0,poison:0,fire:0,ice:0},Hf.resetForNewRun(Q.mods,Af),e===`endless`?Jf():qf(0,!0)}function Gf(){Pf=0,If=0,Ff=zf(),Hf.overdriveActive=!1}function Kf(e){return{onEnd:(e,t)=>Qf(e,t),onResource:e=>{Q.resources[e]=(Q.resources[e]??0)+1;let t=b[e];t&&Xf(t,4)},onGold:e=>{Hf.addGold(e),Q.totalGold+=e},onExpandToken:e=>{Hf.addExpandTokens(e),fp(`🎒 獲得免費背包擴格券 +${e}！`,`#6aff98`)},onGateCleared:e?(e,t)=>{kf===`endless`&&(Lf={isBossGate:t})}:void 0}}function qf(e,t=!1){if(kf=`campaign`,Q.level=e,e+1>Ef.bestStage&&(Ef.bestStage=e+1,Tf()),$?.dispose(),t){let e=Q.mods.resonanceStartLv;Mf={earth:e,thunder:e,poison:e,fire:e,ice:e},Nf={earth:0,thunder:0,poison:0,fire:0,ice:0}}Lf=null,Gf(),$=new zd(Uf(e),Q.mods,Mf,Kf(!1),Af),Hf.onStageStart(e),Hf.enabled=!0,Z(`level-name`).textContent=S[e].name,Z(`boss-bar`).hidden=!$.boss,Z(`gate-row`).hidden=!0,Z(`lava-heat`).style.opacity=`0`,Of=`play`,mp=0,dp()}function Jf(){kf=`endless`,Q.level=0,$?.dispose();let e=Q.mods.resonanceStartLv;Mf={earth:e,thunder:e,poison:e,fire:e,ice:e},Nf={earth:0,thunder:0,poison:0,fire:0,ice:0},Lf=null,Gf(),$=new zd(C,Q.mods,Mf,Kf(!0),Af),Hf.onStageStart(0),Hf.enabled=!0,Z(`level-name`).textContent=C.name,Z(`boss-bar`).hidden=!0,Z(`gate-row`).hidden=!0,Z(`lava-heat`).style.opacity=`0`,Of=`play`,mp=0,dp()}function Yf(){if(Pf>0)return;Ff=zf(),Pf=Ff,If=h.overdriveCooldownSec;let e=Bf();$?.setOverdrive(!0,e),Hf.overdriveActive=!0,Hf.fireAllBagWeapons(`🔥全彈超載`),mp=0,fp(`🔥 全彈超載齊射（${Ff.toFixed(1)}s）：全武器傷害 +${Math.round((e-1)*100)}%・鍛造與大招狂暴加速！`,`#ffa844`)}function Xf(e,t){if(t<=0)return;let n=Q.mods.cumThreshold;for(Nf[e]+=t;Nf[e]>=n;){Nf[e]-=n;let t=Mf[e];Mf[e]=kf===`endless`?Mf[e]+1:Math.min(h.resonanceMaxLv,Mf[e]+1);let r=Math.min(h.resonanceMaxLv,Mf[e]),i=Mf[e]>h.resonanceMaxLv?`專精 +${Math.round((Mf[e]-h.resonanceMaxLv)*h.endlessResoExtraBonus*100)}%`:Mf[e]>t?`共鳴 Lv${Mf[e]}`:`共鳴滿載`,a=j[e];if(Zf(a.cum,1+r*.08,i),t<h.resonanceMaxLv&&Mf[e]>=h.resonanceMaxLv){let t=l.indexOf(e);fp(`🎉 ${u[e].name}共鳴滿級 Lv5！解鎖同名武器多把並存！`,u[e].css,Yu(`tile`,t))}}dp()}function Zf(e,t,n=``,r=!1,i={}){if(!$||!k[e])return;let a=$.acquireWeapon(e,t,r,i),o=k[e],s=f(o.element);a.mode===`spawned`?(Q.weaponsMade++,fp(`${(i.star&&i.star>1?`${`★`.repeat(i.star)} `:``)||(o.category===`leg`||o.category===`holy`?`✦ `:o.category===`t2`||o.category===`cum`?`★ `:``)}${o.name}${t>1.01?` ×${t.toFixed(2)}`:``}${n?`（${n}）`:``}`,s.css,Yu(`weapon`,e))):fp(`${o.name} 強化 +${Math.round((a.weapon.dupMul-1)*100)}% 並回復 ${Math.round(h.dupHealPct*100)}%HP！`,s.css,Yu(`weapon`,e))}function Qf(e,t){Of=`ending`,Hf.enabled=!1,Lf=null,kf===`campaign`?(Ef.bestStage=Math.max(Ef.bestStage,Q.level+(e?2:1)),Ef.bestStage>S.length&&(Ef.bestStage=S.length),e&&Q.level>=S.length-1&&(Ef.campaignCleared=!0),Tf()):$&&(Ef.bestEndlessDepth=Math.max(Ef.bestEndlessDepth,$.depthRows),Tf()),setTimeout(()=>{kf===`campaign`&&e&&Q.level<S.length-1?ap(t):sp(e,t)},1500)}function $f(e){e.addEventListener(`cancel`,e=>e.preventDefault())}var ep=Z(`dlg-title`),tp=Z(`dlg-perk`),np=Z(`dlg-result`),rp=Z(`dlg-wiki`);[ep,tp,np].forEach($f),ep.addEventListener(`close`,()=>{let e=ep.returnValue===`endless`?`endless`:`campaign`;ep.returnValue=``,Wf(e)});function ip(e){let t=Z(`perk-form`),n=T.filter(t=>!e&&t.campaignOnly?!1:Q.perks.filter(e=>e===t.id).length<(t.max??99)).sort(()=>Math.random()-.5).slice(0,3);t.replaceChildren(...n.map((e,t)=>{let n=document.createElement(`button`);return n.className=`perk`,n.value=e.id,t===0&&(n.autofocus=!0),n.innerHTML=`<span class="ico" aria-hidden="true">${e.icon}</span><b>${e.name}</b><span>${e.desc}</span>`,n}))}function ap(e){Rf=`campaign`,Of=`perk`,Z(`perk-h`).textContent=`過關！選擇一項強化`,Z(`perk-sub`).textContent=`${e} 下一關：${S[Q.level+1].name}（背包與金幣完整繼承！）`,ip(!0),tp.showModal()}function op(e){$&&(Rf=`endless`,Of=`perk`,Hf.enabled=!1,Z(`perk-h`).textContent=e?`🔓 首領結界破除！選擇深淵強化`:`🔓 守層結界破除！選擇深淵強化`,Z(`perk-sub`).textContent=`目前已突破 ${$.gatesCleared} 道結界（深潛 ${$.depthRows}m）— 選擇 1 項強化繼續下潛！`,ip(!1),tp.showModal())}tp.addEventListener(`close`,()=>{let e=tp.returnValue;tp.returnValue=``;let t=T.find(t=>t.id===e);t?(t.apply(Q.mods),Q.perks.push(t.id),Q.mods.pendingGoldBonus>0&&(Hf.addGold(Q.mods.pendingGoldBonus),Q.totalGold+=Q.mods.pendingGoldBonus,Q.mods.pendingGoldBonus=0),Q.mods.pendingExpandTokens>0&&(Hf.addExpandTokens(Q.mods.pendingExpandTokens),Q.mods.pendingExpandTokens=0),t.id===`reso`&&(l.forEach(e=>{Mf[e]=kf===`endless`?Mf[e]+1:Math.min(h.resonanceMaxLv,Mf[e]+1)}),dp()),Hf.setMods(Q.mods),Rf===`endless`?(t.id===`stamina_spd`&&Pf>0&&$?.setOverdrive(!0,Bf()),Of=`play`,Hf.enabled=!0,mp=0):qf(Q.level+1,!1)):tp.showModal()});function sp(e,t){Of=`result`;let n=Object.entries(Q.resources).map(([e,t])=>`${v[e]??``}${t}`).join(`  `)||`—`,r=Q.perks.map(e=>T.find(t=>t.id===e)?.name??e).join(`、`)||`—`;if(kf===`endless`){let e=$?$.depthRows:0;Ef.bestEndlessDepth=Math.max(Ef.bestEndlessDepth,e),Tf(),Z(`result-h`).textContent=`♾️ 無盡深淵結算：${e}m`,Z(`result-reason`).textContent=t,Z(`result-stats`).innerHTML=`
      <span>下潛深度</span><b>${e}m（最佳紀錄 ${Ef.bestEndlessDepth}m）</b>
      <span>突破結界</span><b>${$?$.gatesCleared:0} 道</b>
      <span>討伐怪物</span><b>${$?$.kills:0} 隻</b>
      <span>鍛造投射</span><b>${Q.weaponsMade} 把</b>
      <span>累積金幣</span><b>💰 ${Q.totalGold}G</b>
      <span>收集資源</span><b>${n}</b>
      <span>本輪強化</span><b>${r}</b>`}else Z(`result-h`).textContent=e?`🏆 10 關制霸完成！`:`💀 冒險失敗`,Z(`result-reason`).textContent=t,Z(`result-stats`).innerHTML=`
      <span>到達關卡</span><b>${S[Q.level].name}</b>
      <span>本關深度</span><b>${$?$.depthRows:0} / ${S[Q.level].depth}m</b>
      <span>討伐怪物</span><b>${$?$.kills:0} 隻</b>
      <span>鍛造投射</span><b>${Q.weaponsMade} 把</b>
      <span>累積金幣</span><b>💰 ${Q.totalGold}G</b>
      <span>收集資源</span><b>${n}</b>
      <span>本輪強化</span><b>${r}</b>`;np.showModal()}np.addEventListener(`close`,()=>{let e=np.returnValue;np.returnValue=``,e===`title`?(Of=`title`,Hf.enabled=!1,Df(),ep.showModal()):Wf(kf)});var cp=`play`;function lp(){rp.open||(cp=Of,Of===`play`&&(Of=`paused`,Hf.enabled=!1),rp.showModal())}if(Z(`help-btn`).addEventListener(`click`,lp),Z(`title-wiki-btn`).addEventListener(`click`,lp),rp.addEventListener(`close`,()=>{rp.returnValue=``,Of===`paused`&&(Of=cp,Of===`play`&&(Hf.enabled=!0))}),!(`closedBy`in HTMLDialogElement.prototype)){let e=(e,t)=>{let n=t.getBoundingClientRect();return e.clientX<n.left||e.clientX>n.right||e.clientY<n.top||e.clientY>n.bottom},t=!1;rp.addEventListener(`pointerdown`,n=>{t=e(n,rp)}),rp.addEventListener(`pointerup`,n=>{t&&e(n,rp)&&rp.close()})}function up(e){Pf>0?(Pf-=e,Pf<=0&&(Pf=0,$?.setOverdrive(!1,1),Hf.overdriveActive=!1,mp=0)):If>0&&(If=Math.max(0,If-e))}function dp(){let e=Q.mods.cumThreshold;Z(`reso`).replaceChildren(...l.map((t,n)=>{let r=Mf[t],i=Nf[t],a=r>=h.resonanceMaxLv,o=r>h.resonanceMaxLv?`滿+${r-h.resonanceMaxLv}`:a?`滿級`:`Lv${r}`,s=document.createElement(`li`);return s.className=`reso-chip${a?` maxed`:``}`,s.style.color=u[t].css,s.innerHTML=`
        <img src="${Yu(`tile`,n)}" alt="${u[t].name}">
        <span class="lv"><b>${o}</b><em>${i}/${e}</em></span>
        <span class="bar"><i style="width:${i/e*100}%"></i></span>`,s}))}function fp(e,t,n){let r=document.createElement(`div`);if(r.className=`toast`,r.style.color=t,n){let e=document.createElement(`img`);e.src=n,e.alt=``,r.appendChild(e)}r.appendChild(document.createTextNode(e));let i=Z(`toasts`);for(i.appendChild(r);i.children.length>5;)i.firstElementChild.remove();setTimeout(()=>r.remove(),2300)}var pp=new Map,mp=0;function hp(e){if(mp-=e,mp>0||!$)return;mp=.08,$.isEndless&&$.depthRows>Ef.bestEndlessDepth&&(Ef.bestEndlessDepth=$.depthRows,Tf());let t=Z(`od-btn`),n=Pf>0;if(t.classList.toggle(`active`,n),n)t.disabled=!0,t.textContent=`🔥 超載中 ${Pf.toFixed(1)}s`;else if(If>0)t.disabled=!0,t.textContent=`⏳ 超載冷卻 ${Math.ceil(If)}s`;else{let e=Math.round((Bf()-1)*100);t.disabled=Of!==`play`,t.textContent=`🔥 全彈超載 (+${e}%)`}let r=p[$.heroId],i=$.catchStreak>0?Math.round((h.volleyBaseDmgBonus+Math.min(h.volleyMaxStacks-1,$.catchStreak-1)*h.volleyStackDmgBonus)*100):0;Z(`hero-hud`).innerHTML=`
    <img src="${Yu(`hero`,r.id)}" alt="">
    <b style="color:${r.css}">${r.name}</b>
    <span class="volley-combo">🏓 接球 ${$.totalCatches}${$.catchStreak>0?`（連段 ×${$.catchStreak}｜+${i}%）`:``}</span>
    <span class="hero-hint">A/D 或滑鼠移入接球</span>`;let a=Z(`timer`);if($.isEndless)a.textContent=`♾️ ${$.depthRows}m`,a.classList.remove(`low`),Z(`depth-fill`).style.width=`${$.progress*100}%`,Z(`depth-text`).textContent=`${$.depthRows}m（結界 ${$.nextEndlessGateDepth}m）`;else{let e=Math.max(0,$.timeLeft);a.textContent=`${Math.floor(e/60)}:${String(Math.floor(e%60)).padStart(2,`0`)}`,a.classList.toggle(`low`,e<=30),Z(`depth-fill`).style.width=`${$.progress*100}%`,Z(`depth-text`).textContent=`${$.depthRows} / ${$.level.depth}m`}let o=$.activeGateInfo(),s=Z(`gate-row`);s.hidden=!o,o&&(Z(`gate-text`).textContent=o.isBoss?`🔒 首領結界（${o.depthM}m）：擊敗首領破除`:`🔒 守層結界（${o.depthM}m）：剩餘 ${o.remaining} 隻守衛`);let c=$.lavaGap,l=Z(`lava-text`);$.time<h.lavaGrace?(l.textContent=`${Math.ceil(h.lavaGrace-$.time)} 秒後開始下降`,l.className=`meter-text lava`):c<=0?(l.textContent=`🔥 已淹至最深處！保護武器往下衝！`,l.className=`meter-text lava danger`):c<6?(l.textContent=`⚠️ 岩漿逼近 ${c.toFixed(1)} 格！`,l.className=`meter-text lava danger`):c<h.lavaWarnGap?(l.textContent=`🔥 距離最深點 ${c.toFixed(1)} 格`,l.className=`meter-text lava warn`):(l.textContent=`距離最深點 ${c.toFixed(1)} 格`,l.className=`meter-text lava`),Z(`lava-heat`).style.opacity=($.lavaHeat*.9).toFixed(2),Z(`shield`).hidden=!($.time<$.shieldUntil);let u=$.boss&&!$.boss.dead?$.boss:null,d=!!(u&&(u.hp<u.maxHp||u.y-$.deepestY<=20*$.B||Math.abs(u.y-$.cameraCenterY)<=14*$.B));if(Z(`boss-bar`).hidden=!d,u&&d){Z(`boss-name`).textContent=u.kind===`spider_queen`?`蛛后`:u.kind===`balrog`?`炎魔`:`巨像`,Z(`boss-fill`).style.width=`${Math.max(0,u.hp/u.maxHp)*100}%`;let e=Z(`boss-shield`);e.hidden=!u.shielded,u.shielded&&(e.textContent=u.kind===`golem`?`🛡 護殼(⚡💥✨破)`:u.kind===`spider_queen`?`🛡 毒繭(🔥☠破)`:`🛡 神盾(❄✨破)`)}Z(`res`).innerHTML=Object.entries(Q.resources).map(([e,t])=>`<span>${v[e]??``}${t}</span>`).join(``);let m=Z(`cam-reset-btn`),g=$.cameraMode;if(m.hidden=g===`auto`,g===`locked`){let e=$.weapons.find(e=>e.uid===$.lockedWeaponUid);m.textContent=e?`🎯 鎖定：${e.def.name}（點此回最深）`:`🎯 回到自動跟隨`}else g===`manual`&&(m.textContent=`🎯 回到自動跟隨`);let _=Z(`weapon-cards`),y=new Set;for(let e of $.weapons){y.add(e.uid);let t=pp.get(e.uid),n=f(e.def.element);if(!t){t=document.createElement(`li`),t.className=`card`;let r=document.createElement(`button`);r.type=`button`,r.className=`card-btn`,r.style.color=n.css,r.setAttribute(`aria-label`,`鎖定鏡頭跟隨 ${e.def.name}`),r.setAttribute(`aria-pressed`,`false`),r.innerHTML=`<span class="lock-ico" aria-hidden="true"></span><img src="${Yu(`weapon`,e.def.id)}" alt=""><span class="dup"></span><span class="hp"><i></i></span><span class="ult"><i></i></span>`,r.addEventListener(`click`,()=>{$?.toggleLockWeapon(e.uid),mp=0}),t.appendChild(r),pp.set(e.uid,t),_.appendChild(t)}let r=t.firstElementChild,i=$.cameraMode===`locked`&&$.lockedWeaponUid===e.uid;r.setAttribute(`aria-pressed`,i?`true`:`false`),r.querySelector(`.lock-ico`).textContent=i?`🎯`:``;let a=r.querySelector(`.dup`);a.textContent=e.volleyStacks>0&&$.time<e.volleyUntil?`🏓×${e.volleyStacks}`:e.star>1?`${`★`.repeat(e.star)}`:e.dupStacks>0?`+${e.dupStacks}`:``;let[o,s]=r.querySelectorAll(`i`),c=Math.max(0,e.hp/e.maxHp);o.style.width=`${c*100}%`,o.style.background=e.def.lifespanDecay?c>.35?`#ffe066`:`#ff7040`:c>.5?`#5aff6a`:c>.25?`#ffd040`:`#ff4040`;let l=r.querySelector(`.ult`);l.hidden=!e.def.ult,e.def.ult&&(s.style.width=`${e.ultReady*100}%`),r.classList.toggle(`ready`,!!e.def.ult&&e.ultReady>=1)}for(let[e,t]of pp)y.has(e)||(t.remove(),pp.delete(e))}var gp=performance.now();function _p(e){let t=Math.min(.05,(e-gp)/1e3);if(gp=e,Of===`play`){if(up(t),Hf.update(t),$?.update(t),Lf&&Of===`play`){let e=Lf;Lf=null,op(e.isBossGate)}}else Of===`ending`?$?.update(t):$?.updateView(t);hp(t),$&&Vf.render($),requestAnimationFrame(_p)}hf(rp),Df(),jf(),dp(),$=new zd(S[0],Q.mods,Mf,{onEnd:()=>{},onResource:()=>{}},Af),Z(`level-name`).textContent=`Falling Weapons`,ep.showModal(),requestAnimationFrame(_p),Object.assign(window,{fw:{get forge(){return Hf},get mine(){return $},get selectedHeroId(){return Af},selectHero:e=>{Af=e,jf()},catchWeapon:(e=0)=>!$||!$.weapons[e]?!1:($.triggerHeroCatch($.weapons[e]),mp=0,!0),spawn:(e,t=1,n=!1,r={})=>Zf(e,t,`debug`,n,r),all25:()=>A.forEach((e,t)=>setTimeout(()=>Zf(e.id,1,`debug`,!0),t*120)),overdrive:()=>{If=0,Yf()},endOverdrive:()=>{Pf>0&&(Pf=.01)},addGold:e=>{Hf.addGold(e),Q.totalGold+=e},addTokens:e=>Hf.addExpandTokens(e),get overdriveTimer(){return Pf},setLava:e=>{$&&($.time=Math.max($.time,h.lavaGrace+1),$.lavaY=$.deepestY-e*$.B)},maxReso:e=>{e?Mf[e]=h.resonanceMaxLv:l.forEach(e=>{Mf[e]=h.resonanceMaxLv}),dp()},win:()=>$&&Qf(!0,`（debug）`),level:e=>qf(e,!1),startEndless:()=>Wf(`endless`)}});