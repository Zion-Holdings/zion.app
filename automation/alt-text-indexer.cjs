#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

function getAllFiles(dir, exts) {
  const results = [];
  if (!fs.existsSync(dir)) return results;
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  for (const entry of entries) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      results.push(...getAllFiles(full, exts));
    } else if (exts.some((e) => entry.name.toLowerCase().endsWith(e))) {
      results.push(full);
    }
  }
  return results;
}

function humanize(fileName) {
  const base = fileName.replace(/[-_]+/g, ' ').replace(/\s+/g, ' ').trim();
  const noExt = base.replace(/\.[a-z0-9]+$/i, '');
  const words = noExt.split(' ').filter(Boolean);
  const titled = words.map((w) => w.charAt(0).toUpperCase() + w.slice(1)).join(' ');
  return titled || 'Image';
}

function main() {
  const workspace = path.resolve(__dirname, '..');
  const publicRoot = path.join(workspace, 'public');
  const exts = ['.png', '.jpg', '.jpeg', '.gif', '.svg', '.webp', '.avif'];
  const files = getAllFiles(publicRoot, exts);
  const items = files.map((abs) => {
    const rel = '/' + path.relative(publicRoot, abs).replace(/\\/g, '/');
    const alt = humanize(path.basename(abs));
    return { src: rel, alt };
  });

  const outDir = path.join(workspace, 'public', 'automation');
  fs.mkdirSync(outDir, { recursive: true });
  const outPath = path.join(outDir, 'alt-text-index.json');
  fs.writeFileSync(outPath, JSON.stringify({ generatedAt: new Date().toISOString(), count: items.length, items }, null, 2));
  console.log(`Alt text index generated for ${items.length} images.`);
}

main();