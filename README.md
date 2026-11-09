# Falling Weapons (v0.2)

三消 × 落下武器的礦坑冒險（網頁版）。左側交換三消合成 **25 種武器**，右側武器靠 2D 物理掉進礦坑，自動挖礦、打怪、施放大招。

> 玩法靈感來自 [vycdev/falling-pickaxe](https://github.com/vycdev/falling-pickaxe)。本作是網頁版重寫，程式碼與美術素材全部原創（像素圖皆由程式生成），未使用原專案程式碼或 Minecraft 材質。

## 執行與 Tailscale 群組分享

```powershell
npm install
npm run dev        # 本機開發伺服器 http://localhost:5173
npm run build      # 型別檢查 + 產出 dist/
npm run share      # 編譯並透過 Tailscale Serve 開放 https://ian-9950x3d.tailfe8b74.ts.net:5174（僅同群組可連）
npm run unshare    # 關閉 5174 埠的 Tailscale Serve 代理（不影響其他服務）
```

URL 參數（測試用）：`?low` 強制低畫質｜`?nopost` 關閉後處理｜`?depth=25` 將每關深度改為 25 格

開發者主控台（F12 Console）：
- `fw.spawn('katar', 1.2)` 生成／強化指定武器（第 3 參數傳 `true` 可強制無視同名限制新增）
- `fw.all25()` 依序生成全部 25 把武器
- `fw.maxReso()` 將五元素共鳴直接升至滿級 Lv5（解鎖同名多把）
- `fw.setLava(4)` 將岩漿移至距離最深點 4 格處測試逼近效果
- `fw.level(2)` 跳至第 3 關（岩石巨像 Boss）

## 核心規則（詳見遊戲內 📖 Wiki）

| 單步消除條件（含連鎖） | 結果 |
|---|---|
| 同色 **3 個** | **低階武器**（碎石鎬、電擊棒、毒針、火把、冰錐） |
| 同色 **4~5 個** | **初階武器**（擴散斧、雷電刀、毒匕首、烈焰劍、寒冰長槍） |
| 同色 **6~8 個** | **高階武器**（震地巨錘、雷神戟、瘟疫鐮刀、隕石錘、冰晶迴旋鏢） |
| 同色 **9+ 個** | **傳說武器**（泰坦巨錘、天罰雷槌、九頭蛇之牙、炎龍大劍；冰為超強化冰晶迴旋鏢） |
| 全盤各色含愛心加總 **20+ 個** | **✨ 聖劍**（超高傷、聖光十字斬；壽命型每秒流失 5% HP，可用愛心補血續命） |
| 同色**累計每滿 30 個** | **累計武器**（鑽地螺旋鑽、磁暴核心、刺客拳刃、火焰刀、霜狼之爪）＋ **該元素共鳴 +1 級（最高 Lv5）** |
| **愛心** | 全體武器回血（每顆 +8%）；單步 7+ 顆額外賦予 3 秒無敵護盾 |

- **同名武器限制**：該元素共鳴未滿 **Lv5** 時，場上同名武器最多 1 把（重複觸發改為**回滿 100% HP ＋ 傷害強化 +20%**）；共鳴達 **Lv5** 後解鎖多把同名武器同時作戰！
- **岩漿與勝負**：距離 12 格內畫面頂端出現紅熱浪與落火預警、6 格內可見岩漿本體逼近。只有當**「岩漿淹過最深點」且「場上武器全滅」**（或時間歸零）才算失敗。

## 程式結構

```
src/
├─ data/      config.ts（全域平衡數值、方塊、強化卡）、weapons.ts（25 把武器完整定義）
├─ gfx/       pixel.ts（程式生成像素圖）、particles.ts、quality.ts
├─ match3/    logic.ts（純規則與連鎖計數）、board.ts（Three.js 三消畫面與低頻閃特效）
├─ mine/      world.ts（Matter.js 物理、方塊、岩漿逼近、同名強化）、weapon.ts（25 武器被動與大招）、
│             enemy.ts（4 種怪物與岩石巨像 Boss）、fx.ts（戰鬥特效）、renderer.ts（後處理）
├─ ui/        wiki.ts（6 分頁無障礙響應式遊戲內 Wiki）
└─ main.ts    遊戲流程、HUD、對話框
scripts/      tailscale-up.ps1 / tailscale-down.ps1 / verify_v02.mjs / smoke.mjs / bosstest.mjs
```
