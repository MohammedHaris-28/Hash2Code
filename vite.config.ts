import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import Sitemap from "vite-plugin-sitemap";

export default defineConfig({
  server: {
    host: "::",
    port: 8080,
  },

  plugins: [
    react(),

    Sitemap({
      hostname: "https://hash2codeteam.vercel.app",

      // Exclude files/pages that should not appear in sitemap
      exclude: [
        "/google2384f91d01ca4262",
      ],
    }),
  ],

  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});