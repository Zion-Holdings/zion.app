#!/usr/bin/env node

'use strict';

const fs = require('fs');
const path = require('path');

const LOG_DIR = path.join(__dirname, 'logs');
const LOG_FILE = path.join(LOG_DIR, 'og-image-generator.log');
if (!fs.existsSync(LOG_DIR)) fs.mkdirSync(LOG_DIR, { recursive: true });

function log(message) {
  const line = `[${new Date().toISOString()}] ${message}`;
  console.log(line);
  fs.appendFileSync(LOG_FILE, line + '\n');
}

const OUTPUT_DIR = path.join(process.cwd(), 'public', 'og');
const MANIFEST = path.join(OUTPUT_DIR, 'manifest.json');

function ensureDir(p) { if (!fs.existsSync(p)) fs.mkdirSync(p, { recursive: true }); }

function loadManifest() {
  try { return JSON.parse(fs.readFileSync(MANIFEST, 'utf8')); } catch { return {}; }
}

function saveManifest(m) { fs.writeFileSync(MANIFEST, JSON.stringify(m, null, 2)); }

function titleToSlug(title) {
  return title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
}

function generateSVG(title, subtitle) {
  const safeTitle = (title || 'Zion Tech Group').slice(0, 100);
  const safeSubtitle = (subtitle || 'Build with confidence').slice(0, 140);
  return `<?xml version="1.0" encoding="UTF-8"?>
<svg width="1200" height="630" viewBox="0 0 1200 630" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="g" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="#111827"/>
      <stop offset="100%" stop-color="#1f2937"/>
    </linearGradient>
  </defs>
  <rect width="1200" height="630" fill="url(#g)"/>
  <rect x="60" y="60" width="1080" height="510" rx="24" fill="#0ea5e9" fill-opacity="0.08" stroke="#0ea5e9" stroke-opacity="0.3"/>
  <text x="100" y="300" font-family="Inter, Arial, sans-serif" font-size="72" fill="#e5e7eb" font-weight="700">${safeTitle}</text>
  <text x="100" y="380" font-family="Inter, Arial, sans-serif" font-size="36" fill="#9ca3af">${safeSubtitle}</text>
</svg>`;
}

function discoverTitles() {
  // Simple discovery: use files in pages/services/*.json titles
  const servicesDir = path.join(process.cwd(), 'pages', 'services');
  const items = [];
  try {
    const files = fs.readdirSync(servicesDir).filter(f => f.endsWith('.json'));
    for (const f of files) {
      const json = JSON.parse(fs.readFileSync(path.join(servicesDir, f), 'utf8'));
      if (json && json.title) {
        items.push({ title: json.title, description: json.description || '' });
      }
    }
  } catch {
    // Fallback to homepage only
    items.push({ title: 'Zion Tech Group', description: 'We build performant web experiences.' });
  }
  return items;
}

(async function main(){
  ensureDir(OUTPUT_DIR);
  const manifest = loadManifest();
  let changes = 0;

  const pages = discoverTitles();
  for (const page of pages) {
    const slug = titleToSlug(page.title);
    const svgPath = path.join(OUTPUT_DIR, `${slug}.svg`);
    const svg = generateSVG(page.title, page.description);
    const prev = fs.existsSync(svgPath) ? fs.readFileSync(svgPath, 'utf8') : '';
    if (prev !== svg) {
      fs.writeFileSync(svgPath, svg);
      manifest[slug] = { title: page.title, path: `/og/${slug}.svg`, updatedAt: new Date().toISOString() };
      changes += 1;
    }
  }
  saveManifest(manifest);
  log(`OG image generation done. Files changed: ${changes}`);
  process.exit(0);
})();