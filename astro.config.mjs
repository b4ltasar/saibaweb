// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  output: 'static',
  
  // Custom domain
  site: 'https://saiba.dk',
  
  // No base path needed for custom domain
  base: '/',
  
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