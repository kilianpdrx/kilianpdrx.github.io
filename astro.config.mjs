import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://kilianpdrx.github.io',
  build: { format: 'preserve' },
  compressHTML: true,
});
