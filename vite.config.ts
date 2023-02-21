import { defineConfig } from "vite";

export default defineConfig({
    base: "https://paretosecurity.github.io/sms2slack-configure/",
    optimizeDeps: {
        include: ['esptool-js']
    },
    build: {
        commonjsOptions: {
            include: [/esptool-js/, /node_modules/]
          },
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
