import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
// https://astro.build/config
import solidJs from "@astrojs/solid-js";

// https://astro.build/config
import netlify from "@astrojs/netlify/functions";

// https://astro.build/config
export default defineConfig({
  server: {
    port: 3001
  },
  integrations: [mdx(), solidJs()],
  output: "server",
  adapter: netlify()
});