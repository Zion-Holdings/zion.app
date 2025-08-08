#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const BASE_URL = 'https://ziontechgroup.com';
const PAGES_DIR = path.join(__dirname, '..', 'pages');

function generateSitemap() {
  const urls = [];
  
  // Add static routes
  urls.push({
    url: '/',
    lastmod: new Date().toISOString(),
    changefreq: 'daily',
    priority: '1.0'
  });

  // Scan pages directory for dynamic routes
  function scanDirectory(dir, basePath = '') {
    if (!fs.existsSync(dir)) return;
    
    const items = fs.readdirSync(dir);
    
    for (const item of items) {
      const fullPath = path.join(dir, item);
      const stat = fs.statSync(fullPath);
      
      if (stat.isDirectory()) {
        // Skip special directories
        if (item.startsWith('_') || item.startsWith('.') || item === 'api') {
          continue;
        }
        
        // Handle dynamic routes like [id]
        if (item.startsWith('[') && item.endsWith(']')) {
          // For dynamic routes, we'll add a placeholder
          // In a real implementation, you'd fetch actual data
          urls.push({
            url: `${basePath}/${item.replace(/[\[\]]/g, '')}`,
            lastmod: new Date().toISOString(),
            changefreq: 'weekly',
            priority: '0.8'
          });
        } else {
          scanDirectory(fullPath, `${basePath}/${item}`);
        }
      } else if (item.endsWith('.tsx') || item.endsWith('.ts') || item.endsWith('.jsx') || item.endsWith('.js')) {
        // Handle page files
        const route = item.replace(/\.(tsx|ts|jsx|js)$/, '');
        
        if (route === 'index') {
          // Already added root
          continue;
        }
        
        // Handle dynamic routes
        if (route.startsWith('[') && route.endsWith(']')) {
          urls.push({
            url: `${basePath}/${route.replace(/[\[\]]/g, '')}`,
            lastmod: new Date().toISOString(),
            changefreq: 'weekly',
            priority: '0.8'
          });
        } else {
          urls.push({
            url: `${basePath}/${route}`,
            lastmod: new Date().toISOString(),
            changefreq: 'weekly',
            priority: '0.9'
          });
        }
      }
    }
  }

  scanDirectory(PAGES_DIR);

  // Generate sitemap XML
  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls.map(url => `  <url>
    <loc>${BASE_URL}${url.url}</loc>
    <lastmod>${url.lastmod}</lastmod>
    <changefreq>${url.changefreq}</changefreq>
    <priority>${url.priority}</priority>
  </url>`).join('\n')}
</urlset>`;

  // Write sitemap to public directory
  const publicDir = path.join(__dirname, '..', 'public');
  if (!fs.existsSync(publicDir)) {
    fs.mkdirSync(publicDir, { recursive: true });
  }
  
  fs.writeFileSync(path.join(publicDir, 'sitemap.xml'), sitemap);
  console.log(`✅ Sitemap generated with ${urls.length} URLs`);
}

generateSitemap();
