#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

const PAGES_DIR = path.join(__dirname, '..', 'pages');
const OUT_DIR = path.join(__dirname, '..', 'public', 'reports', 'seo');

function walk(dir) {
  const out = [];
  for (const e of fs.readdirSync(dir, { withFileTypes: true })) {
    if (e.name.startsWith('_') || e.name === 'api') continue;
    const full = path.join(dir, e.name);
    if (e.isDirectory()) out.push(...walk(full));
    else if (e.isFile() && e.name.match(/\.(tsx|jsx)$/)) out.push(full);
  }
  return out;
}

function analyzeFile(file) {
  const src = fs.readFileSync(file, 'utf8');
  const rel = file.split('pages')[1];
  const hasHead = /<Head[\s>]/.test(src);
  const titleMatch = src.match(/<title>([\s\S]*?)<\/title>/);
  const descMatch = src.match(/<meta\s+name=["']description["']\s+content=["']([\s\S]*?)["']/);
  const title = titleMatch ? titleMatch[1].trim() : null;
  const description = descMatch ? descMatch[1].trim() : null;
  const issues = [];
  if (!hasHead) issues.push('Missing <Head>');
  if (!title) issues.push('Missing <title>');
  if (!description) issues.push('Missing meta description');
  if (title && (title.length < 10 || title.length > 70)) issues.push(`Title length suboptimal (${title.length})`);
  if (description && (description.length < 50 || description.length > 170)) issues.push(`Description length suboptimal (${description.length})`);
  return { file: rel, title, description, issues };
}

function renderHTML(rows) {
  const tr = rows.map(r => `
    <tr>
      <td>${r.file}</td>
      <td>${(r.title||'').replace(/</g,'&lt;')}</td>
      <td>${(r.description||'').replace(/</g,'&lt;')}</td>
      <td>${r.issues.length ? r.issues.join('<br/>') : 'OK'}</td>
    </tr>`).join('\n');
  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>SEO Audit Report</title>
  <style>
    body { font-family: system-ui, -apple-system, Segoe UI, Roboto, Inter, sans-serif; margin: 24px; }
    table { border-collapse: collapse; width: 100%; }
    th, td { border: 1px solid #ddd; padding: 8px; font-size: 14px; }
    th { background: #f3f4f6; text-align: left; }
  </style>
</head>
<body>
  <h1>SEO Audit Report</h1>
  <p>Autonomously generated. Checks for presence and length of title and description tags.</p>
  <table>
    <thead>
      <tr><th>Page</th><th>Title</th><th>Description</th><th>Issues</th></tr>
    </thead>
    <tbody>
      ${tr}
    </tbody>
  </table>
</body>
</html>`;
}

function ensureDir(dir) { fs.mkdirSync(dir, { recursive: true }); }

function main() {
  const files = walk(PAGES_DIR);
  const rows = files.map(analyzeFile);
  ensureDir(OUT_DIR);
  fs.writeFileSync(path.join(OUT_DIR, 'index.html'), renderHTML(rows));
  fs.writeFileSync(path.join(OUT_DIR, 'latest.json'), JSON.stringify(rows, null, 2));
}

main();