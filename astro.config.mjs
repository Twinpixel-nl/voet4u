import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://voet4u.nl', // vervang dit met je echte domein

  integrations: [
    sitemap()
  ],

  vite: {
    plugins: [tailwindcss()]
  }
});