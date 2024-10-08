import { defineConfig } from "vitest/config";

export default defineConfig({
    test: {
        coverage: {
            reporter: ["html-spa", "text", "json"]
        }
    }
})