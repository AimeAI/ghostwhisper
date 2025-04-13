// vite.config.js
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  root: '.', // root is the current directory (default)
  publicDir: 'public', // Vite uses this to serve static assets like index.html
  build: {
    outDir: 'dist',
    rollupOptions: {
      input: './public/index.html' // 👈 THIS is the fix
    }
  }
});
