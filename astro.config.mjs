import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://tang-sach.quykhoisututam.com',
  compressHTML: true,
  build: {
    inlineStylesheets: 'auto',
  },
  vite: {
    build: {
      cssMinify: true,
    },
  },
});
