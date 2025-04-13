// vite.config.js
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  root: '.', // Root is current directory
  publicDir: 'public', // Tell Vite to use public/index.html
  build: {
    outDir: 'dist',
  },
});
