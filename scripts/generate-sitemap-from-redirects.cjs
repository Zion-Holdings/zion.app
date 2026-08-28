const fs = require('fs');
const path = require('path');

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://ziontechgroup.com';
const REDIRECTS_FILE = path.join(__dirname, '..', '_redirects');
const SITEMAP_FILE = path.join(__dirname, '..', 'public', 'sitemap.xml');

function extractRoutes() {
  const routes = new Set(['/']);
  const content = fs.readFileSync(REDIRECTS_FILE, 'utf8');
  const lines = content.split('\n');
  
  for (const line of lines) {
    const trimmed = line.trim();
    if (!trimmed || trimmed.startsWith('#')) continue;
    
    const parts = trimmed.split(/\s+/);
    if (parts.length >= 2 && parts[1] === '200') {
      const from = parts[0];
      // Skip exact file paths with extensions
      if (from.includes('.') && !from.startsWith('/')) continue;
      // Skip non-HTML responses
      if (from.includes('*')) continue;
      routes.add(from);
    }
  }
  
  return Array.from(routes).sort();
}

function generateSitemap(routes) {
  const urls = routes.map(route => {
    const loc = `${SITE_URL}${route}`;
    return `  <url>
    <loc>${loc}</loc>
    <lastmod>${new Date().toISOString().split('T')[0]}</lastmod>
    <changefreq>daily</changefreq>
    <priority>${route === '/' ? '1.0' : '0.8'}</priority>
  </url>`;
  }).join('\n');
  
  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls}
</urlset>`;
}

const routes = extractRoutes();
const sitemap = generateSitemap(routes);
fs.writeFileSync(SITEMAP_FILE, sitemap);
console.log(`Generated sitemap.xml with ${routes.length} URLs from _redirects`);
