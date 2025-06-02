import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'node:path';
import { SAMPLE_SERVICES } from './src/data/sampleServices';
import { visualizer } from 'rollup-plugin-visualizer';
export default defineConfig(function (_a) {
    var command = _a.command, mode = _a.mode;
    var config = {
        plugins: [
            react(),
            visualizer({ open: false, filename: 'bundle-stats.html' }),
            {
                name: 'mock-api',
                configureServer: function (server) {
                    server.middlewares.use('/api/public/services', function (req, res) {
                        var url = new URL(req.originalUrl || req.url, 'http://localhost');
                        var category = url.searchParams.get('category');
                        var q = (url.searchParams.get('q') || '').toLowerCase();
                        var data = SAMPLE_SERVICES.filter(function (item) {
                            if (category && item.category !== category)
                                return false;
                            if (q && !item.title.toLowerCase().includes(q))
                                return false;
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
            chunkSizeWarningLimit: 500,
            rollupOptions: {
                output: {
                    inlineDynamicImports: false,
                },
                // Bundle axios with the app to avoid missing module errors
            },
        },
        resolve: {
            '@': path.resolve(__dirname, './src'),
            'axios': path.resolve(__dirname, './src/lib/axios.ts')
        }
    }, server, test;
});
return config;
