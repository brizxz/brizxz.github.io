export const profile = {
  name: "你的名字",
  title: "Frontend Engineer",
  tagline: "用程式把想法變成可以點的東西",
  email: "you@example.com",
  location: "Taipei, Taiwan",
  about:
    "我是一位專注於前端開發的工程師,熱愛打造體驗流暢、效能良好的網頁產品。喜歡把複雜的問題拆解成乾淨、可維護的程式碼,也重視自動化測試與 CI/CD 帶來的工程品質。",
  social: {
    github: "https://github.com/yourname",
    linkedin: "https://linkedin.com/in/yourname",
  },
  skills: [
    "TypeScript",
    "React",
    "Node.js",
    "TailwindCSS",
    "Vite",
    "CI/CD",
    "Testing",
  ],
} as const;
