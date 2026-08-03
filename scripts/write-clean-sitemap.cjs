const fs = require('fs');
const path = require('path');

const SITE_URL = 'https://ziontechgroup.com';
const outDir = path.join(process.cwd(), 'out');

function safeLoc(url) {
  return url.replace(/"/g, '&quot;');
}

function buildSitemap() {
  const urls = [
    { loc: `${SITE_URL}/`, lastmod: '2026-08-03', changefreq: 'daily', priority: '1.0' },
    { loc: `${SITE_URL}/services`, lastmod: '2026-08-03', changefreq: 'weekly', priority: '0.8' },
    { loc: `${SITE_URL}/solutions`, lastmod: '2026-08-03', changefreq: 'weekly', priority: '0.7' },
    { loc: `${SITE_URL}/blog`, lastmod: '2026-08-03', changefreq: 'weekly', priority: '0.6' },
    { loc: `${SITE_URL}/case-studies`, lastmod: '2026-08-03', changefreq: 'weekly', priority: '0.6' },
    { loc: `${SITE_URL}/about`, lastmod: '2026-08-03', changefreq: 'monthly', priority: '0.5' },
    { loc: `${SITE_URL}/contact`, lastmod: '2026-08-03', changefreq: 'monthly', priority: '0.5' },
    { loc: `${SITE_URL}/pricing`, lastmod: '2026-08-03', changefreq: 'monthly', priority: '0.5' },
    { loc: `${SITE_URL}/academy`, lastmod: '2026-08-03', changefreq: 'monthly', priority: '0.4' },
    { loc: `${SITE_URL}/dashboard`, lastmod: '2026-08-03', changefreq: 'monthly', priority: '0.4' },
  ];

  const rows = urls.map(u => {
    const loc = safeLoc(u.loc);
    return `<url>\n  <loc>${loc}</loc>\n  <lastmod>${u.lastmod}</lastmod>\n  <changefreq>${u.changefreq}</changefreq>\n  <priority>${u.priority}</priority>\n</url>`;
  }).join('\n');

  const xml = [
    '<?xml version="1.0" encoding="UTF-8"?>',
    '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">',
    rows,
    '</urlset>',
  ].join('\n');

  const outPath = path.join(outDir, 'sitemap.xml');
  fs.writeFileSync(outPath, xml);
  console.log(`Wrote clean sitemap to ${outPath} with ${urls.length} URLs`);
}

buildSitemap();
