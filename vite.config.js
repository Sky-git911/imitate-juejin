import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
const path = require("path");

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  server: {
    host: "localhost",
    port: 8080,
    proxy: {
      "/api": {
        // target: "http://39.99.143.254:9999",
        target: "http://localhost:9999",
      },
    },
  },
  plugins: [vue()],
});
