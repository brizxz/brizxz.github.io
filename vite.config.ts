import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// 部署到 username.github.io 主頁 repo,網址為根目錄,故 base 設為 "/"。
// 若改部署到一般 repo(username.github.io/<repo>/),需改成 "/<repo>/"。
export default defineConfig({
  plugins: [react()],
  base: "/",
});
