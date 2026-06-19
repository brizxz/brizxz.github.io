export interface Experience {
  id: string;
  role: string;
  organization: string;
  period: string;
  description: string;
  type: "work" | "education";
}

export const experiences: Experience[] = [
  {
    id: "exp-1",
    role: "Frontend Engineer",
    organization: "某科技公司",
    period: "2023 — 至今",
    description:
      "負責公司核心產品的前端開發,導入 TypeScript 與測試流程,提升程式碼品質與部署穩定度。",
    type: "work",
  },
  {
    id: "exp-2",
    role: "Junior Web Developer",
    organization: "新創團隊",
    period: "2021 — 2023",
    description:
      "從零參與產品開發,負責 RWD 介面與 API 串接,並協助建立前端開發規範。",
    type: "work",
  },
  {
    id: "edu-1",
    role: "資訊工程學系 學士",
    organization: "國立某大學",
    period: "2017 — 2021",
    description: "主修軟體工程,參與多項程式競賽與開源專案。",
    type: "education",
  },
];
