import { defineConfig } from 'astro/config';
import cloudflare from '@astrojs/cloudflare';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';

const site = process.env.PUBLIC_SITE_URL || 'https://sinquerimfort.com';

export default defineConfig({
  site,
  output: 'static',
  adapter: cloudflare({ imageService: 'compile' }),
  integrations: site ? [sitemap({filter:url=>!/^\/(?:404|offline)(?:\/|\.html)?$/.test(new URL(url).pathname)})] : [],
  vite: { plugins: [tailwindcss()] }
});
