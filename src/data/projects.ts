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
    description: "用 React + Vite 打造,內建完整 CI/CD 管線與自動部署。",
    tags: ["React", "TypeScript", "GitHub Actions", "TailwindCSS"],
    github: "https://github.com/yourname/portfolio",
    demo: "https://yourname.github.io/",
    image: "https://placehold.co/600x400?text=Portfolio",
  },
  {
    id: "task-app",
    title: "待辦事項應用",
    description: "支援拖拉排序與離線同步的待辦清單,練習狀態管理與 IndexedDB。",
    tags: ["React", "Zustand", "PWA"],
    github: "https://github.com/yourname/task-app",
    image: "https://placehold.co/600x400?text=Task+App",
  },
  {
    id: "api-service",
    title: "RESTful API 服務",
    description: "以 Node.js 打造的後端 API,含 JWT 驗證與自動化測試。",
    tags: ["Node.js", "Express", "PostgreSQL"],
    github: "https://github.com/yourname/api-service",
    demo: "https://example.com/api-docs",
    image: "https://placehold.co/600x400?text=API+Service",
  },
];
