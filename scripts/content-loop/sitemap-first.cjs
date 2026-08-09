#!/usr/bin/env node
// sitemap-first.cjs
// Read servicesData.json + existing docs/out/ trees.
// Emit sitemap.xml and content-loop/frontier.json as the build contract.
const fs = require('fs');
const path = require('path');

const REPO = process.cwd();
const SERVICES_PATH = path.join(REPO, 'app/data/servicesData.json');
const FRONTIER_PATH = path.join(REPO, 'scripts/content-loop/frontier.json');
const SITEMAP_PATH = path.join(REPO, 'sitemap.xml');

function buildSitemap() {
  if (!fs.existsSync(SERVICES_PATH)) {
    console.error('Missing servicesData.json');
    process.exit(1);
  }
  const services = JSON.parse(fs.readFileSync(SERVICES_PATH, 'utf8'));
  const urls = [];
  // Add static roots
  urls.push({ url: 'https://ziontechgroup.com/', lastModified: new Date().toISOString(), changeFrequency: 'daily', priority: 1 });
  // Add service pages from catalog (idempotent, ordered)
  const catalog = Array.isArray(services) ? services : (services.services || []);
  for (const svc of catalog) {
    const slug = svc.id || svc.slug || svc.name?.toLowerCase().replace(/[^a-z0-9]+/g, '-');
    if (!slug) continue;
    urls.push({
      url: `https://ziontechgroup.com/services/${slug}`,
      lastModified: new Date().toISOString(),
      changeFrequency: 'weekly',
      priority: 0.6,
    });
  }
  // Deduplicate by URL preserving order
  const seen = new Set();
  const unique = urls.filter((u) => {
    if (seen.has(u.url)) return false;
    seen.add(u.url);
    return true;
  });

  const xml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${
    unique.map((u) => `  <url>\n    <loc>${u.url}</loc>\n    <lastmod>${u.lastModified}</lastmod>\n    <changefreq>${u.changeFrequency}</changefreq>\n    <priority>${u.priority}</priority>\n  </url>`).join('\n')
  }\n</urlset>\n`;

  fs.writeFileSync(SITEMAP_PATH, xml);
  fs.writeFileSync(FRONTIER_PATH, JSON.stringify({ urls: unique, generatedAt: new Date().toISOString() }, null, 2));
  console.log(`[sitemap-first] wrote ${SITEMAP_PATH} (${unique.length} urls)`);
}

buildSitemap();
