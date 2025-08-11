#!/usr/bin/env node
const fs = require('node:fs');
const path = require('node:path');

const ROOT = process.cwd();
const PAGES_DIR = path.join(ROOT, 'pages');
const PUBLIC_DIR = path.join(ROOT, 'public');
const BASE_URL = process.env.SITE_BASE_URL || 'https://zion.app';

function getRoutes(dir, base = '') {
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  const routes = [];
  for (const entry of entries) {
    if (entry.name.startsWith('_') || entry.name.startsWith('.')) continue;
    const full = path.join(dir, entry.name);
    const nameNoExt = entry.name.replace(/\.(tsx|ts|js|jsx|mdx)$/i, '');
    if (entry.isDirectory()) {
      routes.push(...getRoutes(full, path.join(base, entry.name)));
    } else if (/\.(tsx|ts|js|jsx|mdx)$/i.test(entry.name)) {
      if (nameNoExt === 'index') {
        routes.push(base || '/');
      } else {
        routes.push(path.join(base, nameNoExt).replace(/\\/g, '/'));
      }
    }
  }
  // de-duplicate
  return Array.from(new Set(routes));
}

function buildSitemapXml(urls) {
  const urlset = urls
    .filter(Boolean)
    .map((u) => {
      const loc = new URL(u, BASE_URL).href;
      return `<url><loc>${loc}</loc><changefreq>daily</changefreq><priority>${u === '/' ? '1.0' : '0.7'}</priority></url>`;
    })
    .join('');
  return `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${urlset}</urlset>`;
}

(function main() {
  const routes = getRoutes(PAGES_DIR, '');
  if (!fs.existsSync(PUBLIC_DIR)) fs.mkdirSync(PUBLIC_DIR, { recursive: true });
  const xml = buildSitemapXml(routes);
  const outPath = path.join(PUBLIC_DIR, 'sitemap.xml');
  fs.writeFileSync(outPath, xml);
  console.log(`Generated sitemap with ${routes.length} routes at ${outPath}`);
})();