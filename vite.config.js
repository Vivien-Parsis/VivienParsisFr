import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import svgr from "vite-plugin-svgr";
import { ViteImageOptimizer } from 'vite-plugin-image-optimizer';

export default defineConfig({
    plugins: [
        react(),
        svgr(),
        ViteImageOptimizer({
            jpeg: { quality: 80 },
            jpg: { quality: 80 },
            png: { quality: 80 },
            webp: { quality: 80, lossless: false },
        })],
    server: {
        port: 80
    },
    preview: {
        port: 80
    },
    base: '/'
});