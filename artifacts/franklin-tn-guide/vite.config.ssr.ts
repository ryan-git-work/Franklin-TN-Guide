import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import path from "path";

const basePath = process.env.BASE_PATH || "/";

export default defineConfig({
  base: basePath,
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      "@": path.resolve(import.meta.dirname, "src"),
      "@assets": path.resolve(import.meta.dirname, "..", "..", "attached_assets"),
    },
    dedupe: ["react", "react-dom"],
  },
  root: path.resolve(import.meta.dirname),
  build: {
    outDir: path.resolve(import.meta.dirname, "dist/server"),
    emptyOutDir: true,
    ssr: "src/entry-server.tsx",
    rollupOptions: {
      input: path.resolve(import.meta.dirname, "src/entry-server.tsx"),
      output: {
        format: "esm",
      },
    },
  },
  ssr: {
    noExternal: ["react-helmet-async", "wouter"],
  },
});
