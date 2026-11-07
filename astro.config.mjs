import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://fidgetsupply.com',
  trailingSlash: 'never',
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'de', 'fr', 'sv', 'da', 'no', 'fi', 'cs', 'es', 'it', 'nl', 'pl', 'pt', 'ru', 'ja', 'ko', 'id', 'ar'],
    routing: {
      prefixDefaultLocale: false,
      redirectToDefaultLocale: false
    }
  },
  integrations: [
    react(),
    sitemap({
      filter: (page) => !page.includes('/api/'),
      serialize(item) {
        if (item.url !== 'https://fidgetsupply.com/' && item.url.endsWith('/')) {
          item.url = item.url.replace(/\/+$/, '');
        }
        const url = item.url;
        if (url === 'https://fidgetsupply.com' || url === 'https://fidgetsupply.com/') {
          item.priority = 1.0;
          item.changefreq = 'daily';
        } else if (url.includes('/collections/') || url.endsWith('/products') || url.endsWith('/products/')) {
          item.priority = 0.95;
          item.changefreq = 'weekly';
        } else if (url.includes('/products/')) {
          item.priority = 0.9;
          item.changefreq = 'weekly';
        } else {
          item.priority = 0.85;
          item.changefreq = 'weekly';
        }
        item.lastmod = new Date();
        return item;
      }
    })
  ]
});
