const fs = require('fs');
const path = require('path');
const https = require('https');

const BASE = 'https://ziontechgroup.com';
const PATHS = [
  '/','/about/','/contact/','/pricing/','/blog/','/services/','/status/','/public-roadmap/','/status-page/',
  '/free-tools','/free-tools/','/tools/','/solutions/','/industry-solutions/','/careers/','/partners/',
  '/search/','/use-cases/','/case-studies/','/support/','/products/','/portal/','/proposals/',
  '/ai/','/ai-services/','/api-development/','/blockchain-solutions/','/virtual-reality-solutions/'
];

function fetchHtml(url) {
  return new Promise((resolve, reject) => {
    https.get(url, { timeout: 20000 }, (res) => {
      const chunks = [];
      res.on('data', chunk => chunks.push(chunk));
      res.on('end', () => resolve({ status: res.statusCode, body: Buffer.concat(chunks).toString('utf-8') }));
    }).on('error', reject);
  });
}

function extractTitle(html) {
  const m = html.match(/<title>([\s\S]*?)<\/title>/i);
  return m ? m[1].replace(/<[^>]+>/g, '').trim() : 'Zion Tech Group';
}

async function buildSitemap() {
  const urls = [];
  for (const p of PATHS) {
    const url = BASE + p;
    try {
      const res = await fetchHtml(url);
      if (res.status >= 200 && res.status < 400) {
        urls.push({ url, title: extractTitle(res.body) });
      }
    } catch (e) {
      urls.push({ url, title: 'Zion Tech Group' });
    }
  }

  const today = new Date().toISOString().split('T')[0];
  const xml = [
    '<?xml version="1.0" encoding="UTF-8"?>',
    '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">',
    ...urls.map(u => `<url><loc>${u.url}</loc><lastmod>${today}</lastmod><changefreq>weekly</changefreq><priority>0.7</priority></url>`),
    '</urlset>'
  ].join('\n');

  fs.writeFileSync(path.join(process.cwd(), 'public', 'sitemap.xml'), xml);
  fs.writeFileSync(path.join(process.cwd(), 'docs', 'sitemap.xml'), xml);
  console.log(`sitemap.xml updated with ${urls.length} urls`);
}

buildSitemap().catch(e => { console.error(e); process.exit(1); });
