import { defineConfig, fontProviders } from 'astro/config';

export default defineConfig({
  site: 'https://kilianpdrx.github.io',
  build: { format: 'preserve' },
  compressHTML: true,
  fonts: [
    {
      provider: fontProviders.google(),
      name: 'Inter',
      cssVariable: '--font-inter',
      weights: [400, 500, 600],
      styles: ['normal'],
    },
    {
      provider: fontProviders.google(),
      name: 'Source Serif 4',
      cssVariable: '--font-source-serif',
      weights: [500],
      styles: ['normal'],
    },
  ],
});
