import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  base: "/Personal-Diary/", // ✅ MUST match repo name
  plugins: [react()],
});
