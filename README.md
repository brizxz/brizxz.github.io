# 個人履歷 + 作品集網站

以 **React + TypeScript + Vite** 打造、部署於 **GitHub Pages** 的個人履歷與作品集網站,
內建 lint、型別檢查、單元測試與自動部署的 CI/CD 管線。

## 技術棧

- **Vite** + **React 18** + **TypeScript**
- **TailwindCSS**(深色/淺色主題)
- **React Router**(HashRouter,適合 GitHub Pages)
- **ESLint** + **Prettier**
- **Vitest** + **React Testing Library**
- **GitHub Actions**(CI 驗證 + 自動部署)

## 本機開發

```bash
npm install        # 安裝依賴
npm run dev        # 啟動開發伺服器(http://localhost:5173)
```

## 常用指令

| 指令                   | 說明                          |
| ---------------------- | ----------------------------- |
| `npm run dev`          | 開發伺服器                    |
| `npm run build`        | 型別檢查 + 建置到 `dist/`     |
| `npm run preview`      | 預覽建置結果                  |
| `npm run lint`         | ESLint 檢查                   |
| `npm run format`       | Prettier 自動格式化           |
| `npm run format:check` | 檢查格式(CI 用)             |
| `npm run typecheck`    | TypeScript 型別檢查           |
| `npm run test`         | 跑單元/元件測試               |
| `npm run test:watch`   | 監看模式跑測試                |

## 自訂內容

所有內容都集中在 `src/data/`,改內容不用動畫面邏輯:

- `profile.ts` — 姓名、職稱、自我介紹、技能、社群連結
- `projects.ts` — 作品集專案
- `experience.ts` — 工作經歷與學歷

PDF 履歷請替換 `public/resume.pdf`。

## 部署到 GitHub Pages

1. 此專案以 `username.github.io` 主頁 repo 為前提,`vite.config.ts` 的 `base` 設為 `"/"`。
   若改部署到一般 repo,需改成 `"/<repo-name>/"`。
2. 推上 GitHub 後,到 **Settings → Pages → Source** 選擇 **GitHub Actions**。
3. 之後每次合併進 `main`,`deploy.yml` 會自動建置並上線。
4. (建議)到 **Settings → Branches** 設定 `main` 的分支保護,要求 CI 通過才能合併。

## CI/CD

- **`ci.yml`**(PR → main):format check → lint → typecheck → test → build。
- **`deploy.yml`**(push → main):build → 上傳 artifact → 部署到 GitHub Pages。
