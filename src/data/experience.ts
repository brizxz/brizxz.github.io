export interface Experience {
  id: string;
  role: string;
  organization: string;
  period: string;
  description: string;
  type: "work" | "education" | "project";
}

// 以下依公開 repo 的主題整理。工作經歷請自行補上;學歷的科系與年份請確認後修改。
export const experiences: Experience[] = [
  {
    id: "edu-ntu",
    role: "資訊相關學系", // TODO: 換成你的正確科系
    organization: "National Taiwan University (NTU)",
    period: "在學中", // TODO: 換成正確就學年份
    description:
      "修習人工智慧、機器學習、系統程式、計算機網路等核心課程,並在課程專案中實作多項程式作品。",
    type: "education",
  },
  {
    id: "proj-ai",
    role: "AI / 機器學習專案",
    organization: "課程與個人專案",
    period: "2024",
    description:
      "完成台大人工智慧課程作業集、RAG agent,以及 YouBike 車輛數的機器學習預測模型。",
    type: "project",
  },
  {
    id: "proj-sys",
    role: "系統程式與網路",
    organization: "課程專案",
    period: "2024",
    description:
      "以 C / C++ 實作系統程式(行程、執行緒、I/O)與計算機網路期末專案,深入底層運作。",
    type: "project",
  },
  {
    id: "proj-quant",
    role: "量化交易與自動化",
    organization: "個人實驗",
    period: "持續進行",
    description:
      "研究量化交易策略回測、加密貨幣市場,並打造爬蟲與 Discord 機器人做自動化監控與通知。",
    type: "project",
  },
];
