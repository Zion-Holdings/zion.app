#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

const REPORT_DIR = path.join(__dirname, '..', 'data', 'reports', 'marketing', 'linkedin');
const PAGES_DIR = path.join(__dirname, '..', 'pages');
const CANONICAL_URL = 'https://ziontechgroup.com';

function ensureDir(p) { if (!fs.existsSync(p)) fs.mkdirSync(p, { recursive: true }); }

function readFileSafe(p) {
  try { return fs.readFileSync(p, 'utf8'); } catch { return ''; }
}

function extractHeadlines(src) {
  const h1 = src.match(/<h1[^>]*>([\s\S]*?)<\/h1>/i);
  const title = src.match(/<title>([\s\S]*?)<\/title>/i);
  const meta = src.match(/name="description"[^>]*content="([^"]+)"/i);
  return {
    h1: h1 ? h1[1].replace(/<[^>]+>/g,'').trim() : null,
    title: title ? title[1].trim() : null,
    description: meta ? meta[1].trim() : null,
  };
}

function collectFeatures() {
  const idx = path.join(PAGES_DIR, 'index.tsx');
  const services = path.join(PAGES_DIR, 'services', 'index.tsx');
  const enhanced = path.join(PAGES_DIR, 'enhanced-home.tsx');
  const items = [];
  for (const file of [idx, services, enhanced]) {
    const src = readFileSafe(file);
    if (!src) continue;
    const h = extractHeadlines(src);
    items.push({ file, ...h });
  }
  const bullets = [];
  const idxSrc = readFileSafe(path.join(PAGES_DIR, 'index.tsx'));
  if (/AI Development/i.test(idxSrc)) bullets.push('AI Development: custom ML models for business impact');
  if (/Cloud Architecture/i.test(idxSrc)) bullets.push('Cloud Architecture: scalable, secure infra');
  if (/Digital Transformation/i.test(idxSrc)) bullets.push('Digital Transformation: end-to-end modernization');
  return { items, bullets };
}

function craftPosts(data) {
  const now = new Date().toISOString();
  const base = CANONICAL_URL;
  const posts = [];
  for (const b of data.bullets) {
    posts.push({
      timestamp: now,
      text: `Unlock growth with ${b}. Explore how at ${base} #AI #Cloud #DigitalTransformation`,
      url: base
    });
  }
  if (posts.length === 0) {
    posts.push({ timestamp: now, text: `Discover our latest capabilities at ${base} #Tech #Innovation`, url: base });
  }
  return posts.slice(0, 5);
}

function main() {
  ensureDir(REPORT_DIR);
  const data = collectFeatures();
  const posts = craftPosts(data);
  const out = path.join(REPORT_DIR, 'linkedin-posts.json');
  fs.writeFileSync(out, JSON.stringify({ generatedAt: new Date().toISOString(), posts }, null, 2));
  console.log(`LinkedIn analyzer: prepared ${posts.length} post(s)`);
}

main();


