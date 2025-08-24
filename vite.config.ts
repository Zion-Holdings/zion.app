import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'node:path'
import { SAMPLE_SERVICES } from './src/data/sampleServices'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    {
      name: 'mock-api',
      configureServer(server) {
        server.middlewares.use('/api/services', (req, res) => {
          const url = new URL(req.originalUrl || req.url, 'http://localhost')
          const category = url.searchParams.get('category')
          const q = (url.searchParams.get('q') || '').toLowerCase()
          const data = SAMPLE_SERVICES.filter((item) => {
            if (category && item.category !== category) return false
            if (q && !item.title.toLowerCase().includes(q)) return false
            return true
          })
          res.setHeader('Content-Type', 'application/json')
          res.end(JSON.stringify(data))
        })
      },
    },
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src')
    }
  },
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom'],
          ui: ['@radix-ui/react-accordion', '@radix-ui/react-alert-dialog', '@radix-ui/react-avatar', '@radix-ui/react-dropdown-menu', '@radix-ui/react-label', '@radix-ui/react-popover', '@radix-ui/react-select', '@radix-ui/react-separator', '@radix-ui/react-slider', '@radix-ui/react-switch', '@radix-ui/react-tabs', '@radix-ui/react-toast', '@radix-ui/react-tooltip'],
          forms: ['react-hook-form', '@hookform/resolvers', 'zod'],
          utils: ['clsx', 'tailwind-merge', 'class-variance-authority'],
          charts: ['recharts'],
          animations: ['framer-motion'],
          i18n: ['i18next', 'react-i18next', 'i18next-browser-languagedetector']
        }
      }
    },
    chunkSizeWarningLimit: 1000,
    sourcemap: false,
    minify: 'terser',
    terserOptions: {
      compress: {
        drop_console: true,
        drop_debugger: true
      }
    }
  },
  optimizeDeps: {
    include: ['react', 'react-dom', 'react-router-dom']
  }
})
