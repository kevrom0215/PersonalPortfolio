import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path, { dirname } from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export default defineConfig({
  base: "/PersonalPortfolio/", // ✅ Ensure correct base path
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "client", "src"), // ✅ Ensure alias points to the correct location
    },
  },
  root: path.resolve(__dirname, "client"), // ✅ Ensure correct root folder
  build: {
    outDir: path.resolve(__dirname, "dist/public"), // ✅ Match the working config's output path
    emptyOutDir: true,
    assetsDir: "assets",
  },
  server: {
    open: true, // ✅ Opens browser on `npm run dev`
  },
  preview: {
    port: 5000, // ✅ Prevents conflicts with local development
  },
});
