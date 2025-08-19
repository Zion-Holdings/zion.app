#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const crypto = require('crypto');

function ensureDir(dir) { fs.mkdirSync(dir, { recursive: true }); }
function listFiles(dir, predicate) {
  const results = [];
  function walk(d) {
    let entries = [];
    try { entries = fs.readdirSync(d, { withFileTypes: true }); } catch { return; }
    for (const e of entries) {
      const p = path.join(d, e.name);
      if (e.isDirectory()) {
        if (e.name === 'node_modules' || e.name === '.git' || e.name === '.next' || e.name === 'out') continue;
        walk(p);
      } else {
        if (predicate(p)) results.push(p);
      }
    }
  }
  walk(dir);
  return results;
}

function hashFile(file) {
  try {
    const data = fs.readFileSync(file);
    const h = crypto.createHash('sha256').update(data).digest('hex');
    return h;
  } catch { return ''; }
}

(function main() {
  const workspace = process.cwd();
  const publicDir = path.join(workspace, 'public');
  const assetsDir = path.join(workspace, 'assets');
  const isImage = (f) => /\.(png|jpe?g|gif|webp|svg|avif)$/i.test(f);
  const files = [publicDir, assetsDir].flatMap(dir => listFiles(dir, isImage));
  const map = new Map();
  for (const f of files) {
    const h = hashFile(f);
    if (!h) continue;
    if (!map.has(h)) map.set(h, []);
    map.get(h).push(path.relative(workspace, f));
  }
  const duplicates = Array.from(map.entries())
    .map(([hash, paths]) => ({ hash, files: paths.sort(), count: paths.length }))
    .filter(x => x.count > 1)
    .sort((a, b) => b.count - a.count);

  const outDir = path.join(workspace, 'public', 'automation');
  ensureDir(outDir);
  const jsonPath = path.join(outDir, 'duplicate-media.json');
  fs.writeFileSync(jsonPath, JSON.stringify({ generatedAt: new Date().toISOString(), duplicates }, null, 2));

  const htmlPath = path.join(outDir, 'duplicate-media.html');
  const html = [];
  html.push('<!doctype html><meta charset="utf-8"/><title>Duplicate Media Report</title>');
  html.push('<style>body{font-family:ui-sans-serif,system-ui;padding:20px;background:#0b1020;color:#fff} .card{background:rgba(255,255,255,.06);border:1px solid rgba(255,255,255,.12);border-radius:12px;padding:12px;margin:8px 0} code{background:rgba(0,0,0,.4);padding:2px 4px;border-radius:6px} .hash{font-size:12px;color:#93c5fd}</style>');
  html.push(`<h1>Duplicate Media Report</h1><p>Found ${duplicates.length} duplicate sets. Generated ${new Date().toLocaleString()}.</p>`);
  duplicates.slice(0, 200).forEach(d => {
    html.push('<div class="card">');
    html.push(`<div class="hash">sha256:${d.hash.slice(0,16)}…</div>`);
    html.push('<ul>' + d.files.map(f => `<li><code>${f}</code></li>`).join('') + '</ul>');
    html.push('</div>');
  });
  fs.writeFileSync(htmlPath, html.join('\n'));

  process.stdout.write(`[duplicate-media-finder] duplicates=${duplicates.length} -> ${jsonPath}\n`);
})();