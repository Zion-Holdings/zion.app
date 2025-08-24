#!/usr/bin/env node
const fs = require('fs');
const path = require('path');

const SITE_URL = process.env.SITE_URL || 'https://ziontechgroup.netlify.app';
const PAGES_DIR = path.join(process.cwd(), 'pages');
const PUBLIC_DIR = path.join(process.cwd(), 'public');

function walk(dir) {
  const result = [];
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  for (const entry of entries) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      result.push(...walk(full));
    } else {
      result.push(full);
    }
  }
  return result;
}

function toRoute(filePath) {
  const rel = path.relative(PAGES_DIR, filePath).replace(/\\/g, '/');
  if (rel.startsWith('api/') || rel.startsWith('_')) return null;
  if (rel === '_document.tsx' || rel === '_app.tsx') return null;
  if (rel.endsWith('.d.ts')) return null;
  if (!/\.(tsx|ts|js|jsx)$/.test(rel)) return null;
  const noExt = rel.replace(/\.(tsx|ts|js|jsx)$/i, '');
  const indexless = noExt.endsWith('/index') ? noExt.slice(0, -6) : noExt;
  return '/' + indexless.replace(/\[(.+?)\]/g, '$1');
}

function collectRoutes() {
  const files = walk(PAGES_DIR);
  const routes = Array.from(
    new Set(
      files
        .map(toRoute)
        .filter(Boolean)
    )
  ).sort();
  return routes;
}

function writeSitemap(routes) {
  const urls = routes
    .filter((r) => !r.startsWith('/api'))
    .map((r) => `  <url>\n    <loc>${SITE_URL}${r}</loc>\n    <changefreq>weekly</changefreq>\n    <priority>${r === '/' ? '1.0' : '0.7'}</priority>\n  </url>`) 
    .join('\n');
  const xml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>\n`;
  fs.mkdirSync(PUBLIC_DIR, { recursive: true });
  fs.writeFileSync(path.join(PUBLIC_DIR, 'sitemap.xml'), xml);
}

function writeRSS(routes) {
  const items = routes
    .filter((r) => r.startsWith('/blog') || r.startsWith('/services') || r.startsWith('/category'))
    .slice(0, 50)
    .map((r) => `  <item>\n    <title>${r.replace('/', '').slice(0, 80) || 'Home'}</title>\n    <link>${SITE_URL}${r}</link>\n    <guid>${SITE_URL}${r}</guid>\n  </item>`) 
    .join('\n');
  const rss = `<?xml version="1.0" encoding="UTF-8"?>\n<rss version="2.0">\n<channel>\n  <title>Zion Tech Solutions</title>\n  <link>${SITE_URL}</link>\n  <description>Latest content from Zion</description>\n${items}\n</channel>\n</rss>\n`;
  fs.writeFileSync(path.join(PUBLIC_DIR, 'rss.xml'), rss);
}

function writeSearchIndex(routes) {
  const index = routes
    .filter((r) => !r.startsWith('/api'))
    .map((r) => ({ url: `${SITE_URL}${r}`, route: r, title: r.split('/').filter(Boolean).join(' · ') || 'Home' }));
  fs.writeFileSync(path.join(PUBLIC_DIR, 'search-index.json'), JSON.stringify({ generatedAt: new Date().toISOString(), items: index }, null, 2));
}

function main() {
  const routes = collectRoutes();
  writeSitemap(routes);
  writeRSS(routes);
  writeSearchIndex(routes);
  console.log(`Generated ${routes.length} routes → sitemap.xml, rss.xml, search-index.json`);
}

if (require.main === module) main();