// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';

// Replace this with your actual domain
const LIVE_DOMAIN = 'https://yourdomain.com'; // e.g., 'https://saiba.dk'

// https://astro.build/config
export default defineConfig({
  // Your custom domain for production, localhost for development
  site: process.env.NODE_ENV === 'production' 
    ? LIVE_DOMAIN
    : 'http://localhost:4321',
  
  // No base path needed when using custom domain
  base: undefined,
  
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