import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
  plugins: [react()],
  root: '.', // Ensure this is the root of your project
  publicDir: 'public', // Points to the 'public' folder where index.html is
  build: {
    outDir: 'dist', // The output build directory
    rollupOptions: {
      input: path.resolve(__dirname, 'public', 'index.html'), // Explicitly point to the index.html in the public folder
    },
  },
});
