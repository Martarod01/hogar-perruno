import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";

export default defineConfig({
  site: "https://www.hogarperruno.es",
  integrations: [sitemap()],
  vite: {
    build: {
      cssTarget: ["chrome87", "safari13.1", "firefox78", "edge88"],
    },
  },
});
