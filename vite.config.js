import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  root: '.', // Root is the current directory (project root)
  publicDir: 'public', // Points to the 'public' folder where static files like index.html are
  build: {
    outDir: 'dist', // The output build directory
    rollupOptions: {
      input: './public/index.html', // Explicitly tell Vite to use the index.html inside the public folder
    },
  },
});
