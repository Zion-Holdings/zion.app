#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

const ROOT = path.resolve(__dirname, '..');
const TARGET_DIR = path.join(ROOT, 'public', 'reports', 'freshness');
const SCAN_DIRS = [path.join(ROOT, 'pages'), path.join(ROOT, 'docs')];
const STALE_DAYS = parseInt(process.env.FRESHNESS_STALE_DAYS || '60', 10);

function walk(dir) {
  const out = [];
  for (const ent of fs.readdirSync(dir, { withFileTypes: true })) {
    if (ent.name.startsWith('.') || ent.name === 'api' || ent.name.startsWith('_next')) continue;
    const full = path.join(dir, ent.name);
    if (ent.isDirectory()) out.push(...walk(full));
    else if (ent.isFile()) out.push(full);
  }
  return out;
}

function toRel(file) {
  return file.replace(ROOT + path.sep, '');
}

function daysSince(ms) {
  const deltaMs = Date.now() - ms;
  return Math.floor(deltaMs / (1000 * 60 * 60 * 24));
}

function analyze() {
  const rows = [];
  for (const base of SCAN_DIRS) {
    if (!fs.existsSync(base)) continue;
    const files = walk(base);
    for (const file of files) {
      try {
        const stat = fs.statSync(file);
        const ageDays = daysSince(stat.mtimeMs);
        const stale = ageDays >= STALE_DAYS;
        rows.push({ file: toRel(file), size: stat.size, mtime: new Date(stat.mtimeMs).toISOString(), ageDays, stale });
      } catch {}
    }
  }
  return rows.sort((a, b) => b.ageDays - a.ageDays);
}

function renderHTML(rows) {
  const head = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Content Freshness Report</title>
  <style>
    body { font-family: system-ui, -apple-system, Segoe UI, Roboto, Inter, sans-serif; margin: 24px; }
    h1 { margin: 0 0 8px; }
    p { color: #374151; }
    table { border-collapse: collapse; width: 100%; margin-top: 16px; }
    th, td { border: 1px solid #e5e7eb; padding: 8px; font-size: 14px; }
    th { background: #f9fafb; text-align: left; }
    tr.stale { background: #fff7ed; }
    .muted { color: #6b7280; }
  </style>
</head>
<body>`;
  const bodyTop = `<h1>Content Freshness Report</h1>
<p class="muted">Autonomously generated. Threshold: ${STALE_DAYS} days. Scans pages/ and docs/.</p>`;
  const tableHead = `<table>
  <thead>
    <tr><th>File</th><th>Age (days)</th><th>Last Modified</th><th>Size</th><th>Status</th></tr>
  </thead>
  <tbody>`;
  const tableRows = rows.map(r => {
    const status = r.stale ? 'Stale' : 'Fresh';
    const sizeKb = (r.size / 1024).toFixed(1) + ' KB';
    return `<tr class="${r.stale ? 'stale' : ''}">
      <td>${r.file}</td>
      <td>${r.ageDays}</td>
      <td>${r.mtime}</td>
      <td>${sizeKb}</td>
      <td>${status}</td>
    </tr>`;
  }).join('\n');
  const tableFoot = `</tbody></table>`;
  const foot = `</body></html>`;
  return [head, bodyTop, tableHead, tableRows, tableFoot, foot].join('\n');
}

function ensureDir(dir) { fs.mkdirSync(dir, { recursive: true }); }

(function main() {
  const rows = analyze();
  ensureDir(TARGET_DIR);
  const payload = { generatedAt: new Date().toISOString(), thresholdDays: STALE_DAYS, items: rows };
  fs.writeFileSync(path.join(TARGET_DIR, 'latest.json'), JSON.stringify(payload, null, 2));
  fs.writeFileSync(path.join(TARGET_DIR, 'index.html'), renderHTML(rows));
  // also write a dated artifact
  const stamp = new Date().toISOString().split('T')[0];
  fs.writeFileSync(path.join(TARGET_DIR, `${stamp}.json`), JSON.stringify(payload, null, 2));
  console.log(`Freshness report written to ${TARGET_DIR}`);
})();