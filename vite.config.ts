import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import path from 'path'
import tailwindcss from '@tailwindcss/vite';


export default defineConfig({
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  server: {
    port: 8080,
    host: true,
    allowedHosts: [
      'pardomart-admin.onrender.com'
    ]
  },
  build: {
    outDir: 'dist',
    sourcemap: false,
    chunkSizeWarningLimit: 600,
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (!id.includes('node_modules')) {
            return undefined;
          }
          if (id.includes('react-router')) {
            return 'router';
          }
          if (id.includes('@tanstack/react-query')) {
            return 'react-query';
          }
          if (id.includes('recharts')) {
            return 'charts';
          }
          if (id.includes('framer-motion')) {
            return 'motion';
          }
          if (id.includes('lucide-react')) {
            return 'icons';
          }
          return 'vendor';
        },
      },
    },
  },
})
