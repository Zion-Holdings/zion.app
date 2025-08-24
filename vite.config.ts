import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
<<<<<<< HEAD
import path from 'node:path'
=======
import path from 'path'
>>>>>>> 242572309c4c473f201a627ce122b1dc5a776c89

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
<<<<<<< HEAD
      '@': path.resolve(__dirname, './src')
    }
  },
  build: {
    sourcemap: false,
    minify: 'esbuild'
  }
=======
      '@': path.resolve(__dirname, './src'),
    },
  },
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          // Vendor chunks
          'react-vendor': ['react', 'react-dom', 'react-router-dom'],
          'utils-vendor': ['clsx', 'tailwind-merge'],
          'data-vendor': ['@supabase/supabase-js'],
        },
        chunkFileNames: (chunkInfo) => {
          const facadeModuleId = chunkInfo.facadeModuleId ? chunkInfo.facadeModuleId.split('/').pop() : 'chunk';
          return `js/[name]-[hash].js`;
        },
        entryFileNames: 'js/[name]-[hash].js',
        assetFileNames: (assetInfo) => {
          const info = assetInfo.name.split('.');
          const ext = info[info.length - 1];
          if (/\.(css)$/.test(assetInfo.name)) {
            return `css/[name]-[hash].${ext}`;
          }
          if (/\.(png|jpe?g|gif|svg|webp|ico)$/.test(assetInfo.name)) {
            return `images/[name]-[hash].${ext}`;
          }
          return `assets/[name]-[hash].${ext}`;
        },
      },
    },
    chunkSizeWarningLimit: 1000,
    target: 'es2015',
    minify: 'terser',
    terserOptions: {
      compress: {
        drop_console: true,
        drop_debugger: true,
      },
    },
  },
  optimizeDeps: {
    include: ['react', 'react-dom', 'react-router-dom'],
  },
>>>>>>> 242572309c4c473f201a627ce122b1dc5a776c89
})
