#!/usr/bin/env node
const fs = require('fs');
const path = require('path');

const META_DIR = path.resolve('data/page-metadata');
const OUT_DIR = path.resolve('public/og');

function listMetaFiles() {
  if (!fs.existsSync(META_DIR)) return [];
  return fs.readdirSync(META_DIR).filter((f) => f.endsWith('.json')).map((f) => path.join(META_DIR, f));
}

function svgFor(title, description) {
  const safeTitle = (title || 'Zion').slice(0, 80);
  const safeDesc = (description || '').slice(0, 120);
  return `<?xml version="1.0" encoding="UTF-8"?>
<svg width="1200" height="630" viewBox="0 0 1200 630" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="g" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="#0ea5e9"/>
      <stop offset="100%" stop-color="#6366f1"/>
    </linearGradient>
  </defs>
  <rect width="1200" height="630" fill="url(#g)"/>
  <text x="60" y="220" font-family="Inter, Arial" font-size="64" fill="#fff" font-weight="700">${safeTitle}</text>
  <text x="60" y="320" font-family="Inter, Arial" font-size="36" fill="#e5e7eb">${safeDesc}</text>
  <text x="60" y="560" font-family="Inter, Arial" font-size="28" fill="#e5e7eb">zion.app</text>
</svg>`;
}

(() => {
  fs.mkdirSync(OUT_DIR, { recursive: true });
  let changed = 0;
  const files = listMetaFiles();
  for (const f of files) {
    let meta = null;
    try { meta = JSON.parse(fs.readFileSync(f, 'utf8')); } catch { continue; }
    const base = path.basename(f, '.json');
    const svg = svgFor(meta.title, meta.description);
    const out = path.join(OUT_DIR, `${base}.svg`);
    let current = '';
    try { current = fs.readFileSync(out, 'utf8'); } catch {}
    if (current !== svg) {
      fs.writeFileSync(out, svg);
      console.log('[og] Wrote', out);
      changed += 1;
    }
  }
  console.log(`[og] Completed. Files changed: ${changed}`);
})();