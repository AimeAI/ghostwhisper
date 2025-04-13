import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
  plugins: [react()],
  root: './',  // root is set to the current directory (this is correct)
  publicDir: 'public', // Points to 'public' where static files (like index.html) are stored
  build: {
    outDir: 'dist',
    rollupOptions: {
      input: path.resolve(__dirname, 'public', 'index.html'), // Explicitly pointing to public/index.html
    },
  },
});
