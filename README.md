# Falling Weapons

三消 × 落下武器的礦坑冒險（網頁版）。左邊玩三消合成武器，右邊武器靠物理掉進礦坑，自動挖礦、打怪、放大招。

> 玩法靈感來自 [vycdev/falling-pickaxe](https://github.com/vycdev/falling-pickaxe)。本作是網頁版重寫，程式碼與美術素材全部原創（像素圖用程式產生），沒有使用原專案的程式碼或 Minecraft 材質。

## 執行

```bash
npm install
npm run dev        # http://localhost:5173
npm run build      # 型別檢查 + 產出 dist/
```

URL 參數（測試用）：`?low` 強制低畫質｜`?nopost` 關閉後處理｜`?depth=20` 把每關深度改成 20 格

開發者主控台：`fw.spawn('meteor', 1.3)` 生成武器｜`fw.level(2)` 跳到第 3 關｜`fw.mine` 讀取目前礦坑狀態

## 玩法

| 三消（一步內含連鎖，同色累計） | 結果 |
|---|---|
| 1~3 個 | 該元素**共鳴** +N（這一關內永久強化同元素武器） |
| 4~6 個 | **初階武器** |
| 7+ 個 | **高階武器** |
| 超過門檻 | 每多 1 個 +15% 傷害／HP／特效 |
| 愛心 | 全體武器回血；一次 7 顆以上給 3 秒無敵 |

- **特殊方塊**：直線 4 連 → 直線炸彈；L/T 形 → 範圍炸彈；5 連 → 彩虹球
- **過關**：第 1、2 關擊破礦脈核心，第 3 關擊敗岩石巨像
- **失敗**：岩漿追上最深點，或時間用完
- **Roguelite**：每過一關三選一強化，失敗就從第 1 關重新開始

## 程式結構

```
src/
├─ data/      config.ts（所有數值）、weapons.ts（10 把武器定義）
├─ gfx/       pixel.ts（程式產生的像素圖）、particles.ts、quality.ts
├─ match3/    logic.ts（純規則，可單獨測試）、board.ts（Three.js 畫面 + 輸入 + 動畫）
├─ mine/      world.ts（Matter.js 物理 + 方塊 + 岩漿 + 鏡頭）、weapon.ts（武器與技能）、
│             enemy.ts（怪物與 Boss）、fx.ts（特效）、renderer.ts（泛光 + 移軸景深 + 暗角）
└─ main.ts    遊戲流程、HUD、對話框
scripts/      smoke.mjs / shot.mjs / bosstest.mjs（無頭瀏覽器測試，需要已安裝的 Chrome）
```

數值平衡都在 `src/data/config.ts` 和 `src/mine/weapon.ts` 的 `onHit` / `castUlt` 裡調整。
