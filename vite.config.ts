import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path, { dirname } from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export default defineConfig({
  base: "./",
  plugins: [
    react(),
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"), // ✅ Ensure alias points correctly
    },
  },
  build: {
    outDir: "dist",
    emptyOutDir: true,
    assetsDir: "assets", // ✅ Ensures correct asset paths
  },
  server: {
    open: true, // ✅ Opens browser on `npm run dev`
  },
  preview: {
    port: 4173, // ✅ Prevents conflicts with local development
  },
});
