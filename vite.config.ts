import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
    hmr: {
      overlay: false,
    },
  },
  plugins: [react(), mode === "development" && componentTagger()].filter(Boolean),
  resolve: {
    alias: [
      { find: /^@\/components\/ui\/(.*)$/, replacement: path.resolve(__dirname, "./src/components/ui/$1") },
      { find: /^@\/components\/(.*)$/, replacement: path.resolve(__dirname, "./src/components/$1") },
      { find: /^@\/context\/(.*)$/, replacement: path.resolve(__dirname, "./src/context/$1") },
      { find: /^@\/data\/(.*)$/, replacement: path.resolve(__dirname, "./src/data/$1") },
      { find: /^@\/assets\/(.*)$/, replacement: path.resolve(__dirname, "./src/assets/$1") },
      { find: /^@\/hooks\/(.*)$/, replacement: path.resolve(__dirname, "./src/hooks/$1") },
      { find: /^@\/lib\/(.*)$/, replacement: path.resolve(__dirname, "./src/lib/$1") },
      { find: "@", replacement: path.resolve(__dirname, "./src") },
    ],
    dedupe: ["react", "react-dom", "react/jsx-runtime", "react/jsx-dev-runtime", "@tanstack/react-query", "@tanstack/query-core"],
  },
}));
