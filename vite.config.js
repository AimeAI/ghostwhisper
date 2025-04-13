// vite.config.js
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  root: '.', // root of project
  publicDir: 'public',
  build: {
    outDir: 'dist',
  },
});
