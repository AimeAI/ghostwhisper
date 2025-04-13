import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  root: './', // Root is the project root (where index.html and main.jsx are located)
  publicDir: 'public', // This points Vite to the public directory for static files
  build: {
    outDir: 'dist', // This will be the output directory for production
    rollupOptions: {
      input: './public/index.html', // Entry point for the Vite build
    },
  },
});
