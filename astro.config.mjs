import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";

import alpinejs from "@astrojs/alpinejs";
import { server } from "typescript";

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(), alpinejs()],
  experimental: {
    actions: true,
  },
  output: "server",
  adapter: netlify(),
});
