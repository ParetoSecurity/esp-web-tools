import { defineConfig } from "vite";

export default defineConfig({
    build: {
        rollupOptions: {
            output: {
                manualChunks(id) {
                    console.log(id)
                    if (id.includes("node_modules")) {
                        if (id.includes("@material")) {
                            return "mui";
                        }
                        if (id.includes("lit")) {
                            return "lit";
                        }
                        if (id.includes("esptool-js")) {
                            return "esptool";
                        }

                        return "vendor"; // all other package goes here
                    }
                }
            }
        }
    }
});