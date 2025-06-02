import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'node:path';
import { SAMPLE_SERVICES } from './src/data/sampleServices';
import { visualizer } from 'rollup-plugin-visualizer';

export default defineConfig({
  plugins: [
    react(),
    visualizer({ open: false, filename: 'bundle-stats.html' }),
    {
      name: 'mock-api',
      configureServer(server) {
        server.middlewares.use('/api/public/services', (req, res) => {
          const url = new URL(req.originalUrl || req.url, 'http://localhost');
          const category = url.searchParams.get('category');
          const q = (url.searchParams.get('q') || '').toLowerCase();
          const data = SAMPLE_SERVICES.filter((item) => {
            if (category && item.category !== category) return false;
            if (q && !item.title.toLowerCase().includes(q)) return false;
            return true;
          });
          res.setHeader('Content-Type', 'application/json');
          res.end(JSON.stringify(data));
        });
      },
    },
  ],
  build: {
    sourcemap: false,
    minify: 'esbuild',
    cssCodeSplit: true,
    assetsInlineLimit: 4096,
    chunkSizeWarningLimit: 500,
    rollupOptions: {
      output: {
        inlineDynamicImports: false,
      },
    },
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
      axios: path.resolve(__dirname, './src/lib/axios.ts'),
    },
  },
  server: {
    hmr: {
      clientPort: 443,
    },
    allowedHosts: ['devserver-preview--ziontechgroup.netlify.app'],
  },
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: ['./src/setupTests.ts'],
    css: true,
  },
});
