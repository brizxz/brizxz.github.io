# 個人履歷 + 作品集網站 — 完整專案規劃

> 一個以 **React + TypeScript** 打造、部署於 **GitHub Pages** 的個人履歷與作品集網站,
> 內建符合現代軟體工程實務的 **CI/CD 管線**(lint、型別檢查、測試金字塔、自動建置與部署)。

---

## 目錄

1. [專案目標與範圍](#1-專案目標與範圍)
2. [技術選型](#2-技術選型)
3. [專案結構](#3-專案結構)
4. [網站內容規劃](#4-網站內容規劃)
5. [CI/CD 管線設計](#5-cicd-管線設計)
6. [分階段執行步驟](#6-分階段執行步驟)
7. [關鍵設定檔範本](#7-關鍵設定檔範本)
8. [品質關卡與驗收標準](#8-品質關卡與驗收標準)
9. [Vibe Coding 操作建議](#9-vibe-coding-操作建議)
10. [常見問題與排錯](#10-常見問題與排錯)

---

## 1. 專案目標與範圍

### 核心目標
打造一個**對外公開、隨時可分享**的個人品牌網站,同時當作練習現代軟體工程流程的載體。

### 功能範圍(MVP)
- **首頁 / Hero 區**:姓名、職稱、一句話定位、CTA 按鈕(下載 PDF 履歷、聯絡)
- **關於我**:自我介紹、技能標籤、經歷時間軸
- **作品集**:專案卡片(縮圖、標題、技術標籤、GitHub / Demo 連結)
- **履歷區**:結構化的學經歷,並提供可下載的 PDF 版本
- **聯絡方式**:Email、社群連結
- **深色 / 淺色主題切換**(展示前端狀態管理)
- **RWD 響應式設計**(手機 / 平板 / 桌機)

### 明確不做(避免範圍蔓延)
- 後端 / 資料庫(純靜態網站,資料以設定檔形式存放)
- 使用者登入
- CMS 後台(內容直接改 TypeScript 資料檔即可)

### 成功定義
- `main` 分支每次合併後,網站在 1~2 分鐘內自動上線
- 所有 PR 必須通過 lint + 型別檢查 + 測試才能合併
- Lighthouse 效能 / 無障礙 / 最佳實踐 / SEO 四項皆 ≥ 90 分

---

## 2. 技術選型

| 類別 | 選擇 | 理由 |
|------|------|------|
| 建置工具 | **Vite** | 啟動快、設定簡單,靜態輸出最適合 GitHub Pages |
| 框架 | **React 18** | 生態成熟、vibe coding 範例多 |
| 語言 | **TypeScript** | 型別安全,讓 CI 多一道有意義的關卡 |
| 樣式 | **TailwindCSS** | 開發速度快,無需維護大量 CSS 檔 |
| 路由 | **React Router** (HashRouter) | GitHub Pages 對 BrowserRouter 的 deep link 支援差,Hash 模式最穩 |
| Lint | **ESLint** | 程式碼品質靜態檢查 |
| 格式化 | **Prettier** | 統一風格,避免無意義的 diff |
| 單元 / 元件測試 | **Vitest + React Testing Library** | 與 Vite 原生整合,速度快 |
| E2E 測試 | **Playwright** | 跨瀏覽器、官方維護、CI 友善 |
| CI/CD | **GitHub Actions** | 與 GitHub Pages 原生整合 |
| 部署 | **actions/deploy-pages** | 官方 action,免自己處理 token / 分支 |
| 效能檢測 | **Lighthouse CI** | 把效能 / 無障礙納入自動關卡 |

> **為什麼用 HashRouter?**
> GitHub Pages 是純靜態託管,沒有伺服器端 rewrite。使用者直接造訪 `/projects` 這種路徑時,
> 伺服器會找不到對應檔案而回 404。HashRouter 把路由放在 `#` 之後(`/#/projects`),
> 全部交給前端處理,可完全避開這個問題。

---

## 3. 專案結構

```
portfolio/
├── .github/
│   └── workflows/
│       ├── ci.yml              # PR 檢查:lint + 型別 + 測試 + build
│       └── deploy.yml          # 合併到 main 後部署到 GitHub Pages
├── e2e/
│   └── smoke.spec.ts           # Playwright E2E 測試
├── public/
│   ├── resume.pdf              # 可下載的 PDF 履歷
│   └── favicon.svg
├── src/
│   ├── components/             # 可重用 UI 元件
│   │   ├── Header.tsx
│   │   ├── Hero.tsx
│   │   ├── ProjectCard.tsx
│   │   ├── ThemeToggle.tsx
│   │   └── __tests__/          # 元件測試
│   │       └── ProjectCard.test.tsx
│   ├── pages/
│   │   ├── Home.tsx
│   │   ├── Projects.tsx
│   │   └── Resume.tsx
│   ├── data/                   # 內容資料(取代 CMS)
│   │   ├── profile.ts
│   │   ├── projects.ts
│   │   └── experience.ts
│   ├── hooks/
│   │   └── useTheme.ts
│   ├── App.tsx
│   ├── main.tsx
│   └── index.css
├── .eslintrc.cjs
├── .prettierrc
├── lighthouserc.json
├── playwright.config.ts
├── vite.config.ts
├── vitest.config.ts
├── tsconfig.json
├── tailwind.config.js
├── package.json
└── README.md
```

---

## 4. 網站內容規劃

### 內容以「資料檔」管理
把所有會變動的內容抽到 `src/data/` 底下,改內容時不用動畫面邏輯,也方便寫測試。

**`src/data/profile.ts` 範例**
```typescript
export const profile = {
  name: "你的名字",
  title: "Frontend Engineer",
  tagline: "用程式把想法變成可以點的東西",
  email: "you@example.com",
  social: {
    github: "https://github.com/yourname",
    linkedin: "https://linkedin.com/in/yourname",
  },
  skills: ["TypeScript", "React", "Node.js", "CI/CD", "TailwindCSS"],
} as const;
```

**`src/data/projects.ts` 範例**
```typescript
export interface Project {
  id: string;
  title: string;
  description: string;
  tags: string[];
  github?: string;
  demo?: string;
  image: string;
}

export const projects: Project[] = [
  {
    id: "portfolio",
    title: "個人作品集網站",
    description: "用 React + Vite 打造,內建完整 CI/CD 管線。",
    tags: ["React", "TypeScript", "GitHub Actions"],
    github: "https://github.com/yourname/portfolio",
    demo: "https://yourname.github.io/portfolio",
    image: "/portfolio.png",
  },
  // ... 更多專案
];
```

### 頁面區塊重點
- **Hero**:第一眼要能說清楚「你是誰、做什麼」。CTA 不超過兩個。
- **作品集**:每個專案都附 GitHub 或 Demo 連結,這是面試官最常點的地方。
- **履歷**:網頁版方便瀏覽,同時提供 PDF 下載(放 `public/resume.pdf`)。

---

## 5. CI/CD 管線設計

### 兩條工作流分工

```
┌─────────────────────────────────────────────────────────┐
│  ci.yml  (觸發:Pull Request → main)                      │
│  ┌──────┐  ┌────────┐  ┌──────┐  ┌───────┐  ┌────────┐  │
│  │ Lint │→ │ 型別檢查 │→ │ 單元 │→ │ Build │→ │ E2E    │  │
│  │      │  │ tsc    │  │ 測試 │  │       │  │ 測試   │  │
│  └──────┘  └────────┘  └──────┘  └───────┘  └────────┘  │
│  → 全部通過才允許合併                                       │
└─────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────┐
│  deploy.yml  (觸發:push → main)                          │
│  ┌───────┐  ┌─────────────┐  ┌──────────────────────┐   │
│  │ Build │→ │ upload-pages │→ │ deploy-pages (官方)   │   │
│  └───────┘  └─────────────┘  └──────────────────────┘   │
│  → 自動上線到 GitHub Pages                                 │
└─────────────────────────────────────────────────────────┘
```

### 設計原則
- **CI 與 CD 分離**:PR 階段只驗證、不部署;只有合併進 `main` 才部署,避免半成品上線。
- **快速失敗(fail fast)**:lint / 型別這種秒級檢查放最前面,省 CI 時間。
- **快取依賴**:用 `actions/setup-node` 的 npm 快取,加速重複執行。
- **分支保護**:在 GitHub repo 設定中,把 `ci.yml` 設為合併的必要條件。

---

## 6. 分階段執行步驟

### 階段 0:環境準備(約 15 分鐘)
```bash
# 確認 Node.js 版本 (建議 20 LTS 以上)
node -v

# 建立 Vite + React + TS 專案
npm create vite@latest portfolio -- --template react-ts
cd portfolio
npm install
```

### 階段 1:基礎建設與工具鏈(約 1 小時)
```bash
# TailwindCSS
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p

# 測試工具
npm install -D vitest @testing-library/react @testing-library/jest-dom jsdom

# E2E
npm install -D @playwright/test
npx playwright install --with-deps

# 格式化
npm install -D prettier

# 路由
npm install react-router-dom
```
完成後設定好所有設定檔(見第 7 節),並在 `package.json` 加上 scripts。

### 階段 2:核心畫面開發(vibe coding 主戰場,約 2~4 小時)
1. 先搭好 `App.tsx` 與路由骨架
2. 用 vibe coding 逐一產出元件:`Hero` → `ProjectCard` → `Header` → `ThemeToggle`
3. 把內容填進 `src/data/` 的資料檔
4. 套用 TailwindCSS 做 RWD 與深色模式
5. **邊做邊跑 `npm run dev` 看效果**

### 階段 3:補上測試(約 1~2 小時)
- 為 `ProjectCard` 寫元件測試(渲染標題、連結是否正確)
- 寫一個 Playwright smoke test(首頁載入、切換主題、點擊作品卡)
- 確保 `npm run test` 與 `npm run e2e` 在本機綠燈

### 階段 4:接上 CI/CD(約 1 小時)
1. 把 `.github/workflows/ci.yml` 和 `deploy.yml` 放進專案
2. 設定 `vite.config.ts` 的 `base`(見第 7 節,**這步最容易出錯**)
3. 推上 GitHub
4. 在 repo **Settings → Pages → Source** 選 **GitHub Actions**
5. 在 **Settings → Branches** 設定 `main` 的分支保護,要求 CI 通過

### 階段 5:驗收與調優(約 1 小時)
- 開 Lighthouse 跑分,針對 < 90 的項目優化
- 補 meta 標籤(SEO、Open Graph 分享預覽)
- 確認手機版排版正常

---

## 7. 關鍵設定檔範本

### `vite.config.ts`(⚠️ base 路徑最容易出錯)
```typescript
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// 若 repo 名稱是 "portfolio",網站網址會是 username.github.io/portfolio/
// base 必須設成 "/portfolio/",否則 JS / CSS 會 404
export default defineConfig({
  plugins: [react()],
  base: "/portfolio/", // ← 換成你的 repo 名稱;若用 username.github.io 則設為 "/"
});
```

### `package.json` scripts
```json
{
  "scripts": {
    "dev": "vite",
    "build": "tsc && vite build",
    "preview": "vite preview",
    "lint": "eslint . --ext ts,tsx",
    "format": "prettier --write \"src/**/*.{ts,tsx,css}\"",
    "format:check": "prettier --check \"src/**/*.{ts,tsx,css}\"",
    "typecheck": "tsc --noEmit",
    "test": "vitest run",
    "test:watch": "vitest",
    "e2e": "playwright test"
  }
}
```

### `.github/workflows/ci.yml`
```yaml
name: CI

on:
  pull_request:
    branches: [main]

jobs:
  quality:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4

      - uses: actions/setup-node@v4
        with:
          node-version: 20
          cache: npm

      - name: Install dependencies
        run: npm ci

      - name: Format check
        run: npm run format:check

      - name: Lint
        run: npm run lint

      - name: Type check
        run: npm run typecheck

      - name: Unit tests
        run: npm run test

      - name: Build
        run: npm run build

      - name: Install Playwright browsers
        run: npx playwright install --with-deps

      - name: E2E tests
        run: npm run e2e
```

### `.github/workflows/deploy.yml`
```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: [main]

permissions:
  contents: read
  pages: write
  id-token: write

# 避免同時多個部署互相覆蓋
concurrency:
  group: pages
  cancel-in-progress: true

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with:
          node-version: 20
          cache: npm
      - run: npm ci
      - run: npm run build
      - uses: actions/upload-pages-artifact@v3
        with:
          path: ./dist

  deploy:
    needs: build
    runs-on: ubuntu-latest
    environment:
      name: github-pages
      url: ${{ steps.deployment.outputs.page_url }}
    steps:
      - id: deployment
        uses: actions/deploy-pages@v4
```

### `lighthouserc.json`(選用,進階關卡)
```json
{
  "ci": {
    "collect": {
      "staticDistDir": "./dist"
    },
    "assert": {
      "assertions": {
        "categories:performance": ["warn", { "minScore": 0.9 }],
        "categories:accessibility": ["error", { "minScore": 0.9 }],
        "categories:best-practices": ["warn", { "minScore": 0.9 }],
        "categories:seo": ["warn", { "minScore": 0.9 }]
      }
    }
  }
}
```

### `playwright.config.ts`
```typescript
import { defineConfig } from "@playwright/test";

export default defineConfig({
  testDir: "./e2e",
  webServer: {
    command: "npm run preview",
    url: "http://localhost:4173/portfolio/",
    reuseExistingServer: !process.env.CI,
  },
  use: {
    baseURL: "http://localhost:4173/portfolio/",
  },
});
```

---

## 8. 品質關卡與驗收標準

| 關卡 | 工具 | 通過標準 | 在哪檢查 |
|------|------|----------|----------|
| 格式 | Prettier | 無格式差異 | CI + 本機 |
| 程式碼品質 | ESLint | 0 error | CI + 本機 |
| 型別 | tsc | 0 type error | CI + 本機 |
| 單元 / 元件 | Vitest | 全綠 | CI + 本機 |
| E2E | Playwright | 全綠 | CI + 本機 |
| 建置 | Vite | 成功產出 dist | CI |
| 效能 / 無障礙 | Lighthouse | 四項 ≥ 90 | 本機 / 選用 CI |
| 部署 | deploy-pages | 網站可正常存取 | CD |

**最終驗收清單**
- [ ] PR 沒過 CI 無法合併(分支保護已啟用)
- [ ] 合併後網站自動更新
- [ ] 手機 / 桌機排版皆正常
- [ ] 深色 / 淺色切換正常
- [ ] 所有外部連結可點且正確
- [ ] PDF 履歷可下載
- [ ] Lighthouse 四項 ≥ 90

---

## 9. Vibe Coding 操作建議

讓 vibe coding 不失控、產出又能維持工程品質的幾個訣竅:

1. **先骨架、後血肉**:先請 AI 幫你搭好專案結構與路由,再一個元件一個元件長出來,別一次要它生整站。

2. **資料與畫面分離**:叫 AI 把內容寫進 `src/data/`,畫面只負責渲染。這樣改內容不會動到邏輯,也好寫測試。

3. **每個元件都要求附測試**:請 AI 產元件時,同時要它生對應的 `*.test.tsx`。測試是 vibe coding 的安全網——AI 改壞東西時測試會抓到。

4. **小步提交**:每完成一個可運作的小功能就 commit + PR,讓 CI 頻繁驗證,而不是攢一大包才推。

5. **讓 CI 當守門員**:就算 AI 寫得很快,只要 lint / 型別 / 測試沒過就不准進 main。這是「快速」與「品質」並存的關鍵。

6. **善用型別當規格**:先定義好 TypeScript interface(例如 `Project`),再叫 AI 照著實作。型別會約束 AI 的產出方向。

---

## 10. 常見問題與排錯

**Q：部署後網站一片空白 / JS 與 CSS 都 404?**
A：99% 是 `vite.config.ts` 的 `base` 設錯。Repo 叫 `portfolio` 就要設 `base: "/portfolio/"`。
若是 `username.github.io` 這種特殊 repo,則設 `base: "/"`。

**Q：重新整理子頁面時出現 404?**
A：GitHub Pages 不支援 SPA 的 deep link rewrite。本規劃用 **HashRouter** 已從根本避開此問題。

**Q：CI 上的 Playwright 一直失敗?**
A：CI 環境要先跑 `npx playwright install --with-deps` 安裝瀏覽器(ci.yml 已包含此步驟)。

**Q：部署工作流權限錯誤?**
A：確認 repo **Settings → Pages → Source** 已選 **GitHub Actions**,且 `deploy.yml` 裡有
`permissions: pages: write` 與 `id-token: write`。

**Q：要不要用 Next.js?**
A：可以,但 Next.js 需要 `output: "export"` 做靜態輸出,設定較繁瑣。對純展示型的個人網站,
Vite 更輕、更直覺,這也是本規劃選 Vite 的原因。

---

## 預估總時程

| 階段 | 內容 | 預估時間 |
|------|------|----------|
| 0 | 環境準備 | 15 分鐘 |
| 1 | 工具鏈設定 | 1 小時 |
| 2 | 核心畫面開發 | 2~4 小時 |
| 3 | 補測試 | 1~2 小時 |
| 4 | CI/CD 串接 | 1 小時 |
| 5 | 驗收調優 | 1 小時 |
| **合計** | | **約 6~9 小時** |

> 適合用一個週末完成 MVP,之後持續迭代補作品。

---

*本規劃可直接作為開工藍圖。建議照階段順序進行,並在每個階段結束時用該階段的「品質關卡」自我檢查。*
