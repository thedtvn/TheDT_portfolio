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

let fake_header = ["Express", "PHP", "ASP.NET", "Next.js", "JSF", "web2py", "Virgool", "Alpine", "Vanilla", "WP Engine", "PageFly", "ZendServer", "Elementor Cloud"];

// https://astro.build/config
export default defineConfig({
  output: "server",
  adapter: cloudflare(),
  build: {
    assets: 'assets',
  },
  vite: vite_config,
  // headers for run locals
  server: {
    headers: {
      "X-Powered-By": fake_header,
    }
  }
});
