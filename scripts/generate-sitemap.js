#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

const PAGES_DIR = path.join(__dirname, '..', 'pages');
const PUBLIC_DIR = path.join(__dirname, '..', 'public');

function getRoutes(dir, base = '') {
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  const routes = [];
  for (const e of entries) {
    if (e.name.startsWith('_')) continue; // skip Next internals
    if (e.isDirectory()) {
      if (e.name === 'api') continue;
      routes.push(...getRoutes(path.join(dir, e.name), base + '/' + e.name));
    } else if (e.isFile()) {
      if (!e.name.match(/\.(tsx|jsx|mdx|js|ts)$/)) continue;
      const name = e.name.replace(/\.(tsx|jsx|mdx|js|ts)$/, '');
      if (name === 'index') {
        routes.push(base || '/');
      } else if (!name.startsWith('[')) {
        routes.push(base + '/' + name);
      }
    }
  }
  return Array.from(new Set(routes)).sort();
}

function renderSitemap(urls) {
  const lastmod = new Date().toISOString();
  const body = urls.map(u => `  <url>\n    <loc>${process.env.SITEMAP_BASE_URL || 'https://zion.app' }${u}</loc>\n    <lastmod>${lastmod}</lastmod>\n    <changefreq>weekly</changefreq>\n    <priority>${u === '/' ? '1.0' : '0.6'}</priority>\n  </url>`).join('\n');
  return `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${body}\n</urlset>\n`;
}

function ensureDir(dir) { fs.mkdirSync(dir, { recursive: true }); }

function main() {
  const routes = getRoutes(PAGES_DIR);
  ensureDir(PUBLIC_DIR);
  const xml = renderSitemap(routes);
  fs.writeFileSync(path.join(PUBLIC_DIR, 'sitemap.xml'), xml);
  console.log(`Sitemap generated with ${routes.length} routes.`);
}

main();