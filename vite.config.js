// vite.config.js
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  root: '.', // <-- Make sure root is project base
  publicDir: 'public', // <-- This is where Vite looks for index.html
  build: {
    outDir: 'dist',
  },
});
