#!/usr/bin/env node
// Generate sitemap from service-index.json for static export
const fs = require('fs');
const path = require('path');

const SITE_URL = process.env.SITE_URL || 'https://ziontechgroup.com';
const outDir = path.join(process.cwd(), 'out');
const publicDir = path.join(process.cwd(), 'public');

function main() {
  const idxFile = path.join(outDir, 'service-index.json');
  let idx = {};
  try { idx = JSON.parse(fs.readFileSync(idxFile, 'utf8')); }
  catch (e) { console.error('cannot read service-index.json:', e.message); process.exit(1); }

  const services = idx.services || [];
  const today = new Date().toISOString().split('T')[0];
  
  let urls = ['<?xml version="1.0" encoding="UTF-8"?>', '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">'];
  
  // Homepage
  urls.push('  <url><loc>https://ziontechgroup.com/</loc><lastmod>' + today + '</lastmod><changefreq>daily</changefreq><priority>1.0</priority></url>');
  
  // Top pages
  const topPages = ['ai', 'contact', 'about', 'solutions', 'blog', 'industry-solutions', 'privacy', 'terms'];
  for (const page of topPages) {
    urls.push('  <url><loc>' + SITE_URL + '/' + page + '/</loc><lastmod>' + today + '</lastmod><changefreq>weekly</changefreq><priority>0.8</priority></url>');
  }
  
  // Services
  for (const s of services) {
    urls.push('  <url><loc>' + SITE_URL + '/services/' + s.id + '/</loc><lastmod>' + today + '</lastmod><changefreq>weekly</changefreq><priority>0.7</priority></url>');
  }
  
  urls.push('</urlset>');
  const sitemap = urls.join('\n');
  
  fs.writeFileSync(path.join(outDir, 'sitemap.xml'), sitemap);
  fs.writeFileSync(path.join(publicDir, 'sitemap.xml'), sitemap);
  console.log('sitemap.xml: ' + (services.length + topPages.length + 1) + ' URLs');
}

main();