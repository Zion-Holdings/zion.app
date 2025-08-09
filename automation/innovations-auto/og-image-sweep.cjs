#!/usr/bin/env node
/*
  OG Image Sweep
  - Scans select pages and ensures an OG image exists under public/og/<slug>.png
  - Generates placeholder images using node-canvas-like fallback (here: writes a stub file)
  Note: For real image rendering, integrate @vercel/og or node-canvas in future.
*/
const fs = require('fs');
const path = require('path');

function collectTargets(cwd = process.cwd()) {
  const pagesDir = path.join(cwd, 'pages');
  if (!fs.existsSync(pagesDir)) return [];
  const entries = fs.readdirSync(pagesDir).filter((f) => f.endsWith('.tsx'));
  const slugs = entries
    .map((f) => f.replace(/\.tsx$/i, ''))
    .filter((s) => !['_app', '_document', '404'].includes(s));
  return slugs;
}

function ensureOg(slug, cwd = process.cwd()) {
  const ogDir = path.join(cwd, 'public', 'og');
  const file = path.join(ogDir, `${slug}.png`);
  if (fs.existsSync(file)) return false;
  fs.mkdirSync(ogDir, { recursive: true });
  // Placeholder stub file (PNG header not valid; acts as a marker). Replace with real image generation later.
  fs.writeFileSync(file, `OG placeholder for ${slug} — generate real image with vercel/og`, 'utf8');
  return true;
}

function main() {
  const slugs = collectTargets(process.cwd());
  let created = 0;
  for (const s of slugs) if (ensureOg(s, process.cwd())) created++;
  console.log(`OG: Ensured ${created} new OG placeholders.`);
}

if (require.main === module) main();

module.exports = { main };