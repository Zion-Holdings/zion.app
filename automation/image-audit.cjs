#!/usr/bin/env node
const fs = require('fs');
const path = require('path');

const exts = new Set(['.png', '.jpg', '.jpeg', '.gif', '.svg', '.webp']);
const maxBytes = parseInt(process.env.IMAGE_MAX_BYTES || '500000', 10);
const root = path.join(process.cwd(), 'public');

function walk(dir, files = []) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) walk(full, files);
    else files.push(full);
  }
  return files;
}

function main() {
  if (!fs.existsSync(root)) { console.log('No public/ dir.'); return; }
  const files = walk(root).filter(f => exts.has(path.extname(f).toLowerCase()));
  const issues = [];
  for (const f of files) {
    const stat = fs.statSync(f);
    if (stat.size > maxBytes) {
      issues.push({ file: path.relative(process.cwd(), f), bytes: stat.size });
    }
  }
  const outDir = path.join(process.cwd(), 'data', 'reports', 'images');
  fs.mkdirSync(outDir, { recursive: true });
  const ts = new Date().toISOString().replace(/[:.]/g, '-');
  const outPath = path.join(outDir, `image-audit-${ts}.json`);
  fs.writeFileSync(outPath, JSON.stringify({ maxBytes, issues }, null, 2));
  console.log('Image audit written to', outPath);
}

main();