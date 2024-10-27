// @ts-check
import { defineConfig } from 'astro/config';

import sitemap from '@astrojs/sitemap';

import tailwind from '@astrojs/tailwind';

import react from '@astrojs/react';

import mdx from '@astrojs/mdx';

import robotsTxt from 'astro-robots-txt';

import compressor from 'astro-compressor';

import { siteConfig } from './src/config/siteconfig';

// https://astro.build/config
export default defineConfig({
  integrations: [
    mdx(), 
    sitemap(), 
    tailwind(), 
    react(), 
    robotsTxt(), 
    compressor()
  ],
  site: siteConfig.siteUrl,
  output: 'static',
  trailingSlash: 'never',
  build: {
    format: 'directory'
  },
  markdown: {
    shikiConfig: {
      theme: 'dracula',
      wrap: true
    }
  },
  vite: {
    resolve: {
      alias: {
        '@': '/src'
      }
    }
  }
});
