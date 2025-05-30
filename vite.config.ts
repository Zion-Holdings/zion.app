import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { fileURLToPath } from 'node:url'
import { SAMPLE_SERVICES } from './src/data/sampleServices'

const srcDir = fileURLToPath(new URL('./src', import.meta.url))
const axiosPath = fileURLToPath(new URL('./src/lib/axios.ts', import.meta.url))

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
  build: {
    sourcemap: false,
    minify: 'esbuild',
    rollupOptions: {
      output: {
        inlineDynamicImports: false,
      },
      // Bundle axios with the app to avoid missing module errors
    },
  },
  resolve: {
    alias: {
      '@': srcDir,
      'axios': axiosPath
    }
  },
  server: {
    hmr: {
      clientPort: 443
    }
  }
})
