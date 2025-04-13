// vite.config.js
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { resolve } from 'path';

export default defineConfig({
  plugins: [react()],
  root: '.', // Ensure it's looking at root for config
  publicDir: 'public',
  build: {
    outDir: 'dist',
    rollupOptions: {
      input: resolve(__dirname, 'public', 'index.html'), // Force exact entry point
    },
  },
});
