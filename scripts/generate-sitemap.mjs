#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const BASE_URL = process.env.SITE_BASE_URL || 'https://ziontechgroup.com';
const PAGES_DIR = path.join(__dirname, '..', 'pages');
const DATA_DIR = path.join(__dirname, '..', 'data');

function safeRequireJson(relPath) {
  try {
    const p = path.join(DATA_DIR, relPath);
    if (fs.existsSync(p)) {
      return JSON.parse(fs.readFileSync(p, 'utf8'));
    }
  } catch {}
  return null;
}

function generateSitemap() {
  const urls = [];
  const now = new Date().toISOString();
  
  // Add static routes
  urls.push({ url: '/', lastmod: now, changefreq: 'daily', priority: '1.0' });

  // Collections: add if exist
  const talent = safeRequireJson('talent.json'); // optional alt file
  const talentTs = null; // typescript export not easily importable here
  const projects = safeRequireJson('projects.json');
  const jobs = safeRequireJson('jobs.json');
  const rentals = safeRequireJson('rentals.json');
  const equipment = safeRequireJson('equipment.json');

  // Talent listings from data/talent.ts are TS; fallback: crawl pages for /talent/[slug]
  // We'll add listing page and dynamic placeholder; SSR page will exist.
  urls.push({ url: '/talent', lastmod: now, changefreq: 'weekly', priority: '0.7' });

  // Jobs
  if (jobs && Array.isArray(jobs)) {
    urls.push({ url: '/jobs', lastmod: now, changefreq: 'daily', priority: '0.8' });
    jobs.forEach((j) => {
      if (j.slug) urls.push({ url: `/jobs/${j.slug}`, lastmod: j.updatedAt || now, changefreq: 'weekly', priority: '0.7' });
    });
  }

  // Rentals
  if (rentals && Array.isArray(rentals)) {
    urls.push({ url: '/rentals', lastmod: now, changefreq: 'weekly', priority: '0.7' });
    rentals.forEach((r) => {
      if (r.slug) urls.push({ url: `/rentals/${r.slug}`, lastmod: r.updatedAt || now, changefreq: 'weekly', priority: '0.6' });
    });
  }

  // Equipment
  if (equipment && Array.isArray(equipment)) {
    urls.push({ url: '/equipment', lastmod: now, changefreq: 'weekly', priority: '0.7' });
    equipment.forEach((e) => {
      if (e.slug) urls.push({ url: `/equipment/${e.slug}`, lastmod: e.updatedAt || now, changefreq: 'weekly', priority: '0.6' });
    });
  }

  // Scan pages directory for non-api static routes
  function scanDirectory(dir, basePath = '') {
    if (!fs.existsSync(dir)) return;
    const items = fs.readdirSync(dir);
    for (const item of items) {
      const fullPath = path.join(dir, item);
      const stat = fs.statSync(fullPath);
      if (stat.isDirectory()) {
        if (item.startsWith('_') || item.startsWith('.') || item === 'api' || item === 'admin') continue;
        scanDirectory(fullPath, `${basePath}/${item}`);
      } else if (/(tsx|ts|jsx|js)$/.test(item)) {
        const route = item.replace(/\.(tsx|ts|jsx|js)$/, '');
        if (route === 'index') continue;
        if (route === '_app' || route === '_document' || route === '404') continue;
        urls.push({ url: `${basePath}/${route}`.replace(/\/index$/, ''), lastmod: now, changefreq: 'weekly', priority: '0.5' });
      }
    }
  }

  scanDirectory(PAGES_DIR);

  // Deduplicate
  const seen = new Set();
  const deduped = urls.filter((u) => {
    const key = u.url;
    if (seen.has(key)) return false;
    seen.add(key);
    return true;
  });

  // Generate sitemap XML
  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${deduped
    .map((url) => `  <url>\n    <loc>${BASE_URL}${url.url}</loc>\n    <lastmod>${url.lastmod}</lastmod>\n    <changefreq>${url.changefreq}</changefreq>\n    <priority>${url.priority}</priority>\n  </url>`) 
    .join('\n')}\n</urlset>\n`;

  // Write sitemap to public directory
  const publicDir = path.join(__dirname, '..', 'public');
  if (!fs.existsSync(publicDir)) {
    fs.mkdirSync(publicDir, { recursive: true });
  }
  fs.writeFileSync(path.join(publicDir, 'sitemap.xml'), sitemap);
  console.log(`✅ Sitemap generated with ${deduped.length} URLs`);
}

generateSitemap();
