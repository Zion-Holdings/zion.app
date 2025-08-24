#!/usr/bin/env node

'use strict';

const fs = require('fs');
const path = require('path');

function listFiles(dir, exts) {
  const out = [];
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const p = path.join(dir, entry.name);
    if (entry.isDirectory()) out.push(...listFiles(p, exts));
    else if (exts.includes(path.extname(entry.name))) out.push(p);
  }
  return out;
}

function routeFromFile(pagesDir, filePath) {
  let r = path.relative(pagesDir, filePath).replace(/\\/g, '/');
  if (r.endsWith('index.tsx') || r.endsWith('index.jsx')) r = r.replace(/\/index\.(tsx|jsx)$/i, '/');
  r = r.replace(/\.(tsx|jsx)$/, '');
  r = r.replace(/\[(.+?)\]/g, ':$1');
  if (!r.startsWith('/')) r = '/' + r;
  return r;
}

(function main() {
  const pagesDir = path.join(process.cwd(), 'pages');
  if (!fs.existsSync(pagesDir)) return;

  const pageFiles = listFiles(pagesDir, ['.tsx', '.jsx']).filter((f) => !/\/(api|_app|_document)\//.test(f) && !/\/_app\.(tsx|jsx)$/.test(f));
  const routes = pageFiles.map((f) => ({ file: path.relative(process.cwd(), f), route: routeFromFile(pagesDir, f) }));

  const codeFiles = listFiles(process.cwd(), ['.tsx', '.ts', '.jsx', '.js', '.md', '.mdx', '.html', '.css', '.scss']);
  const codeBlob = codeFiles.map((f) => {
    try { return fs.readFileSync(f, 'utf8'); } catch { return ''; }
  }).join('\n');

  const orphan = routes.filter((r) => {
    // Consider route linked if exact href appears
    const href = `href=\"${r.route}\"`;
    const hrefSingle = `href='${r.route}'`;
    const linkComp = `Link href=\"${r.route}\"`;
    return !(codeBlob.includes(href) || codeBlob.includes(hrefSingle) || codeBlob.includes(linkComp));
  });

  const rows = orphan.map((o) => `<tr><td><code>${o.route}</code></td><td><code>${o.file}</code></td></tr>`).join('\n');

  const reportDir = path.join(process.cwd(), 'public', 'reports', 'orphan-pages');
  fs.mkdirSync(reportDir, { recursive: true });
  const html = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Orphan Pages Report</title>
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
  <h1>Orphan Pages Report</h1>
  <p class="summary">Pages scanned: ${routes.length}. Potential orphans: ${orphan.length}.</p>
  <table>
    <thead>
      <tr>
        <th>Route</th>
        <th>File</th>
      </tr>
    </thead>
    <tbody>
      ${rows}
    </tbody>
  </table>
</body>
</html>`;
  fs.writeFileSync(path.join(reportDir, 'index.html'), html, 'utf8');
  process.stdout.write(`[orphan-page-finder] Report written to public/reports/orphan-pages/index.html\n`);
})();