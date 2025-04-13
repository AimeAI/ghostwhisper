import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  root: './', // Root is the project root
  publicDir: 'public', // Vite looks in the public directory for index.html
  build: {
    outDir: 'dist', // Output folder for production build
    rollupOptions: {
      input: './public/index.html', // Explicit entry for index.html
    },
  },
});
