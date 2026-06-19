export interface Project {
  id: string;
  title: string;
  description: string;
  tags: string[];
  github?: string;
  demo?: string;
  /** 主要語言,顯示在卡片上 */
  language?: string;
  /** GitHub stars */
  stars?: number;
  /** 卡片封面用的漸層 key(對應 ProjectCard 內的色票) */
  accent?: "violet" | "blue" | "emerald" | "amber" | "rose" | "cyan";
  /** 封面 emoji,沒有縮圖時用 */
  emoji?: string;
}

// 內容取自 github.com/brizxz 的公開 repo;描述為依專案主題整理。
export const projects: Project[] = [
  {
    id: "ntu-fai",
    title: "NTU 人工智慧導論專案",
    description:
      "台大「人工智慧」課程的程式作業集,實作搜尋演算法、對抗式賽局、機器學習與決策等經典 AI 主題。",
    tags: ["AI", "Search", "Game Theory", "ML"],
    github: "https://github.com/brizxz/NTU-2024-FAI",
    language: "Python",
    stars: 2,
    accent: "violet",
    emoji: "🧠",
  },
  {
    id: "agent-rag",
    title: "Agent-RAG",
    description:
      "結合檢索增強生成(RAG)的 LLM agent:先檢索外部知識,再讓大型語言模型基於檢索結果回答,降低幻覺。",
    tags: ["LLM", "RAG", "Agent", "NLP"],
    github: "https://github.com/brizxz/Agent-RAG",
    language: "Python",
    accent: "cyan",
    emoji: "🤖",
  },
  {
    id: "youbike-ml",
    title: "YouBike 車輛數預測",
    description:
      "以機器學習建模預測 YouBike 站點的可借車輛數,涵蓋資料清理、特徵工程與模型評估。",
    tags: ["Machine Learning", "Data Analysis", "Forecasting"],
    github: "https://github.com/brizxz/ML2024_Youbike_predicting",
    language: "Python",
    accent: "emerald",
    emoji: "🚲",
  },
  {
    id: "trade-sim",
    title: "量化交易策略模擬",
    description:
      "回測與模擬交易策略的實驗專案,研究進出場訊號與績效評估,延伸到加密貨幣市場。",
    tags: ["Quant", "Backtesting", "Finance"],
    github: "https://github.com/brizxz/trade_simulation",
    language: "Python",
    accent: "amber",
    emoji: "📈",
  },
  {
    id: "sys-prog",
    title: "系統程式練習",
    description:
      "系統程式課程的底層實作:行程與執行緒、檔案 I/O、系統呼叫與記憶體管理,以 C 語言練功。",
    tags: ["C", "OS", "Concurrency", "Systems"],
    github: "https://github.com/brizxz/system_programming",
    language: "C",
    accent: "blue",
    emoji: "⚙️",
  },
  {
    id: "discord-bot",
    title: "Discord 售票爬蟲機器人",
    description:
      "Discord 機器人結合售票網站爬蟲,自動監控釋票狀態並即時推播通知,練習自動化與非同步任務。",
    tags: ["Automation", "Crawler", "Discord Bot"],
    github: "https://github.com/brizxz/Discord-Bot-Ticket_Crawling",
    language: "Python",
    accent: "rose",
    emoji: "🎫",
  },
];
