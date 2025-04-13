import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  root: './', // Root is the current directory (this is already correct)
  publicDir: 'public', // Points to public folder where index.html is located
  build: {
    outDir: 'dist', // Where Vite will output the build files
    rollupOptions: {
      input: './public/index.html', // Explicitly define the entry point to index.html inside public
    },
  },
});
