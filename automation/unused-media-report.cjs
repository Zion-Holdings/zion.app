#!/usr/bin/env node

'use strict';

const fs = require('fs');
const path = require('path');

function listFiles(dir) {
  const out = [];
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const p = path.join(dir, entry.name);
    if (entry.isDirectory()) out.push(...listFiles(p));
    else out.push(p);
  }
  return out;
}

function ensureDir(dir) {
  fs.mkdirSync(dir, { recursive: true });
}

function readFileSafe(p) {
  try { return fs.readFileSync(p, 'utf8'); } catch { return ''; }
}

(function main() {
  const publicDir = path.join(process.cwd(), 'public');
  const codeRoots = ['pages', 'components', 'styles'].map((d) => path.join(process.cwd(), d)).filter((d) => fs.existsSync(d));
  if (!fs.existsSync(publicDir)) return;

  const mediaExts = new Set(['.png', '.jpg', '.jpeg', '.gif', '.svg', '.webp', '.avif']);
  const files = listFiles(publicDir).filter((f) => mediaExts.has(path.extname(f).toLowerCase()));

  const codeFiles = [];
  for (const root of codeRoots) {
    for (const file of listFiles(root)) {
      const ext = path.extname(file).toLowerCase();
      if (['.tsx', '.ts', '.jsx', '.js', '.css', '.scss', '.md', '.mdx', '.html'].includes(ext)) codeFiles.push(file);
    }
  }

  const codeBlob = codeFiles.map((f) => readFileSafe(f)).join('\n');

  const unused = files.filter((f) => {
    const name = path.basename(f);
    return !codeBlob.includes(name);
  });

  const rows = unused.map((f) => {
    const rel = path.relative(process.cwd(), f);
    const stat = fs.statSync(f);
    const kb = (stat.size / 1024).toFixed(1);
    return `<tr><td><code>${rel}</code></td><td>${kb} KB</td></tr>`;
  }).join('\n');

  const reportDir = path.join(process.cwd(), 'public', 'reports', 'unused-media');
  ensureDir(reportDir);

  const html = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Unused Media Report</title>
  <style>
    body { font-family: system-ui, -apple-system, Segoe UI, Roboto, Inter, sans-serif; margin: 24px; background:#0b1220; color:#fff; }
    table { border-collapse: collapse; width: 100%; margin-top: 12px; }
    th, td { border-bottom: 1px solid rgba(255,255,255,0.12); padding: 8px; text-align: left; font-size: 14px; }
    th { background: rgba(255,255,255,0.06); }
    code { color: #c7f1ff; }
    .summary { opacity: 0.85; }
  </style>
</head>
<body>
  <h1>Unused Media Report</h1>
  <p class="summary">Media files scanned: ${files.length}. Potentially unused: ${unused.length}.</p>
  <table>
    <thead>
      <tr>
        <th>File</th>
        <th>Size</th>
      </tr>
    </thead>
    <tbody>
      ${rows}
    </tbody>
  </table>
</body>
</html>`;

  fs.writeFileSync(path.join(reportDir, 'index.html'), html, 'utf8');
  process.stdout.write(`[unused-media-report] Report written to public/reports/unused-media/index.html\n`);
})();