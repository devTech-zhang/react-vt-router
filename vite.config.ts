import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { fileURLToPath } from "node:url";
import { URL } from "node:url";

// https://vite.dev/config/
export default defineConfig({
    base: "./",
    plugins: [react()],
    resolve: {
        alias: {
            "react-vt-router": fileURLToPath(new URL("./src/lib/index.ts", import.meta.url)),
        },
    },
});
