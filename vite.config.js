import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import svgr from "vite-plugin-svgr";
import { ViteImageOptimizer } from 'vite-plugin-image-optimizer';

export default defineConfig({
    plugins: [
        react(),
        svgr(),
        ViteImageOptimizer({
            jpeg: {
                quality: 80,
            }
        })],
    server: {
        port: 80
    },
    base: '/'
});