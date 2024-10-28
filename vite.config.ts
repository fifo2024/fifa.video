import path from "path";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

// https://vitejs.dev/config/
export default defineConfig({
    css: {
        // css预处理器
        preprocessorOptions: {
            less: {
                charset: false,
                javascriptEnabled: true,
                // additionalData: '@import "src/common/style/global.less";',
            },
        },
    },
    plugins: [react()],
    define: {
        // By default, Vite doesn't include shims for NodeJS/
        // necessary for segment analytics lib to work
        global: {},
    },
    // base: "fifa-video",
    build: {
        outDir: "docs",
    },
    resolve: {
        alias: {
            "@": path.resolve(__dirname, "./src"),
            src: path.resolve(__dirname, "./src"),
        },
    },
});
