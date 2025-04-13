import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// Vite configuration
export default defineConfig({
  plugins: [react()],
  root: './', // Set root to the project base folder
  publicDir: 'public', // Points to the 'public' folder where static files like index.html are
  build: {
    outDir: 'dist', // Output build directory
    rollupOptions: {
      input: '/public/index.html', // Ensure Vite uses index.html from the public directory
    },
  },
});
