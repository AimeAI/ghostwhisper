import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  root: './', // Root is the current directory (this is the project root)
  publicDir: 'public', // Points to the 'public' folder where the index.html is located
  build: {
    outDir: 'dist', // The output build directory
    rollupOptions: {
      input: './public/index.html', // The entry file is inside public/
    },
  },
});
