#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

const ROOT = path.join(__dirname, '..');
const PUBLIC_DIR = path.join(ROOT, 'public');
const SEARCH_DIRS = [path.join(ROOT, 'pages'), path.join(ROOT, 'components'), path.join(ROOT, 'styles')];
const OUT_DIR = path.join(ROOT, 'public', 'reports', 'images');

const IMAGE_EXTS = new Set(['.png', '.jpg', '.jpeg', '.gif', '.svg', '.webp', '.avif']);

function ensureDir(dir) { fs.mkdirSync(dir, { recursive: true }); }

function listFiles(dir) {
  const files = [];
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    if (entry.name.startsWith('.')) continue;
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) files.push(...listFiles(full));
    else files.push(full);
  }
  return files;
}

function listImages() {
  const files = listFiles(PUBLIC_DIR);
  return files.filter(f => IMAGE_EXTS.has(path.extname(f).toLowerCase()));
}

function searchOccurrences(targets) {
  const codeFiles = [];
  for (const dir of SEARCH_DIRS) {
    if (!fs.existsSync(dir)) continue;
    for (const f of listFiles(dir)) {
      const ext = path.extname(f).toLowerCase();
      if (['.tsx', '.jsx', '.ts', '.js', '.css', '.scss', '.md', '.mdx', '.json'].includes(ext)) codeFiles.push(f);
    }
  }
  const index = new Map();
  for (const t of targets) {
    index.set(t, { referenced: false, by: [] });
  }
  for (const f of codeFiles) {
    const src = fs.readFileSync(f, 'utf8');
    for (const t of targets) {
      const relFromPublic = '/' + path.relative(PUBLIC_DIR, t).replace(/\\/g, '/');
      const fileName = path.basename(t);
      if (src.includes(relFromPublic) || src.includes(fileName)) {
        const entry = index.get(t);
        entry.referenced = true;
        entry.by.push(path.relative(ROOT, f));
      }
    }
  }
  return index;
}

function renderHTML(report) {
  const used = report.items.filter(i => i.referenced);
  const unused = report.items.filter(i => !i.referenced);
  const rows = unused.map(i => `<tr><td>${i.path}</td><td>${i.sizeKb.toFixed(1)} KB</td><td>${i.referenced ? 'Yes' : 'No'}</td></tr>`).join('\n');
  return `<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <title>Unused Images Report</title>
  <style>
    body { font-family: system-ui, -apple-system, Segoe UI, Roboto, Inter, sans-serif; margin: 24px; }
    h1 { margin: 0 0 8px; }
    .muted { color: #6b7280; font-size: 12px; }
    .cards { display: grid; grid-template-columns: repeat(auto-fit, minmax(260px, 1fr)); gap: 12px; margin: 16px 0; }
    .card { border: 1px solid #e5e7eb; border-radius: 10px; padding: 12px; background: #fff; }
    table { border-collapse: collapse; width: 100%; }
    th, td { border: 1px solid #e5e7eb; padding: 8px; text-align: left; font-size: 14px; }
    th { background: #f9fafb; }
  </style>
</head>
<body>
  <h1>Unused Images Report</h1>
  <div class="muted">Generated at ${report.generatedAt}</div>
  <div class="cards">
    <div class="card"><strong>Total images</strong>: ${report.items.length}</div>
    <div class="card"><strong>Referenced</strong>: ${used.length}</div>
    <div class="card"><strong>Unused</strong>: ${unused.length}</div>
    <div class="card"><strong>Potential savings</strong>: ${(unused.reduce((s, i) => s + i.sizeKb, 0)).toFixed(1)} KB</div>
  </div>
  <h2>Unused</h2>
  <table>
    <thead><tr><th>Path</th><th>Size</th><th>Referenced</th></tr></thead>
    <tbody>${rows || '<tr><td colspan="3">No unused images found 🎉</td></tr>'}</tbody>
  </table>
</body>
</html>`;
}

function main() {
  const images = listImages();
  const occur = searchOccurrences(images);
  const items = images.map(img => {
    const stat = fs.statSync(img);
    const rel = '/' + path.relative(ROOT, img).replace(/\\/g, '/');
    const { referenced } = occur.get(img);
    return { path: rel, sizeKb: stat.size / 1024, referenced };
  });
  const report = { generatedAt: new Date().toISOString(), items };
  ensureDir(OUT_DIR);
  fs.writeFileSync(path.join(OUT_DIR, 'unused.json'), JSON.stringify(report, null, 2));
  fs.writeFileSync(path.join(OUT_DIR, 'unused.html'), renderHTML(report));
}

main();