#!/usr/bin/env node
/**
 * Generate a sitemap.xml from a list of URLs.
 * Usage: node automation/scripts/generate_sitemap.cjs <output.xml> <url1> <url2> ...
 */
const fs = require('fs');
const urls = process.argv.slice(3);
const out = process.argv[2];
if (!out || !urls.length) {
  console.error('Usage: generate_sitemap.cjs <output.xml> <url1> <url2> ...');
  process.exit(1);
}
const items = urls.map(u => `  <url>\n    <loc>${u}</loc>\n    <lastmod>${new Date().toISOString().slice(0,10)}</lastmod>\n    <changefreq>weekly</changefreq>\n    <priority>0.5</priority>\n  </url>`).join('\n');
const xml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${items}\n</urlset>\n`;
fs.writeFileSync(out, xml, 'utf8');
console.log('SITEMAP', out, 'URLS', urls.length);
