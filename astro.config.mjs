import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";

export default defineConfig({
  site: "https://spanish-for-muna.pages.dev",
  integrations: [tailwind({ applyBaseStyles: false })],
});
