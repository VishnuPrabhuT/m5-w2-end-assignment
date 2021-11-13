import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
    assetsInlineLimit: 5000000,
    server: {
        https: true,
    },
    plugins: [react()],
});
