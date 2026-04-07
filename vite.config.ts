import { defineConfig } from "vite";
import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  // BASE_PATH is injected by actions/configure-pages in CI.
  // Falls back to '/' for local dev and user/org Pages sites.
  base: process.env.BASE_PATH ?? '/',
});
