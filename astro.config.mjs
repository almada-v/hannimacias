// @ts-check

import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://www.hmcosmetologa.com', // <--- ESTO ES VITAL
  vite: {
    plugins: [tailwindcss()]
  },
  integrations: [sitemap()]
});