import { defineConfig } from "vitest/config";
import react from "@vitejs/plugin-react-swc";
import path from "path";

export default defineConfig({
  plugins: [react()],
  test: {
    environment: "jsdom",
    globals: true,
    setupFiles: ["./setup.ts"],
    include: ["*.{test,spec}.{ts,tsx}"],
  },
  resolve: {
    alias: [
      { find: /^@\/components\/ui\/(.*)$/, replacement: path.resolve(__dirname, "./$1") },
      { find: /^@\/components\/(.*)$/, replacement: path.resolve(__dirname, "./$1") },
      { find: /^@\/context\/(.*)$/, replacement: path.resolve(__dirname, "./$1") },
      { find: /^@\/data\/(.*)$/, replacement: path.resolve(__dirname, "./$1") },
      { find: /^@\/assets\/(.*)$/, replacement: path.resolve(__dirname, "./$1") },
      { find: /^@\/hooks\/(.*)$/, replacement: path.resolve(__dirname, "./$1") },
      { find: /^@\/lib\/(.*)$/, replacement: path.resolve(__dirname, "./$1") },
      { find: "@", replacement: path.resolve(__dirname, ".") },
    ],
  },
});
