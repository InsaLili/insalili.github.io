// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';
import icon from 'astro-icon';

// https://astro.build/config
export default defineConfig({
  site: 'https://tonglili.com',
  output: 'static',
  integrations: [icon(), sitemap()],
  vite: { plugins: [tailwindcss()] },
});
