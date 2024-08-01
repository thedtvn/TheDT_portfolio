import { defineConfig } from 'astro/config';

import cloudflare from "@astrojs/cloudflare";

let vite_config = {
  build: {
    rollupOptions: {
      output: {
        entryFileNames: "main.[hash].js"
      }
    },
    minify: 'terser'
  }
};

// https://astro.build/config
export default defineConfig({
  output: "server",
  adapter: cloudflare(),
  build: {
    assets: 'assets',
  },
  vite: vite_config
});
