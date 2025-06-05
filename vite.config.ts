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
        // server.middlewares may be undefined in some preview environments
        if (!server?.middlewares?.use) return;
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
  // Update the base path if the application will be hosted under a
  // subdirectory. By default we use '/' to work for most setups.
  base: '/',
  build: {
    sourcemap: false,
    minify: 'esbuild',
    cssCodeSplit: true,
    assetsInlineLimit: 4096,
    chunkSizeWarningLimit: 500,
    rollupOptions: {
      // Exclude Prisma client namespace to avoid TypeScript errors
      external: ['.prisma/client/default'],
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
  // server: {
  //   allowedHosts: ['devserver-preview--ziontechgroup.netlify.app'],
  // },
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: ['./src/setupTests.ts'],
    css: true,
  },
});
