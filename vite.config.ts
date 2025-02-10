import react from "@vitejs/plugin-react";
import { defineConfig } from "vitest/config";

export default defineConfig({
  plugins: [react()],
  base: "/", // Garante que o Vercel sirva corretamente os arquivos
  test: {
    setupFiles: "./src/setupTests.ts",
    globals: true,
    environment: "jsdom",
    coverage: {
      reporter: ['text', 'html'], // Gera relatórios em texto e em HTML
      // Outras opções de configuração, se necessário
    }
  },
});