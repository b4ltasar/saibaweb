// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  output: 'static', // VIGTIGT for GitHub Pages
  
  // GitHub Pages URL (ændres til custom domain senere)
  site: process.env.NODE_ENV === 'production' 
    ? 'https://b4ltasar.github.io'
    : 'http://localhost:4321',
  
  // Repository navn for GitHub Pages
  base: process.env.NODE_ENV === 'production' 
    ? '/saibaweb'
    : undefined,
  
  vite: {
    plugins: [tailwindcss()]
  },

  integrations: [sitemap()],

  // Performance optimizations
  build: {
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