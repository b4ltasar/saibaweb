// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  output: 'static', // VIGTIGT for GitHub Pages
  
  // GitHub Pages URL (ændres til custom domain senere)
  site: 'https://b4ltasar.github.io',
  
  // Repository navn for GitHub Pages
  base: '/saibaweb',
  
  // KRITISK for GitHub Pages routing
  trailingSlash: 'always',
  
  vite: {
    plugins: [tailwindcss()]
  },

  integrations: [sitemap()],

  // Performance optimizations
  build: {
    format: 'directory', // Sikrer folder struktur
    inlineStylesheets: 'auto',
  },

  // Image optimization
  image: {
    domains: ['localhost'],
  },

  // Prefetch configuration
  prefetch: {
    prefetchAll: true,
    defaultStrategy: 'viewport'
  }
});