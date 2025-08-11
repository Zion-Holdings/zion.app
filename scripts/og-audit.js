#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

const PAGES_DIR = path.join(__dirname, '..', 'pages');
const OUT_DIR = path.join(__dirname, '..', 'public', 'reports', 'og');

function walkPages(dir) {
  const out = [];
  for (const e of fs.readdirSync(dir, { withFileTypes: true })) {
    const name = e.name;
    if (name.startsWith('_') || name === 'api') continue;
    const full = path.join(dir, name);
    if (e.isDirectory()) out.push(...walkPages(full));
    else if (e.isFile() && /(tsx|jsx)$/i.test(name)) out.push(full);
  }
  return out;
}

function extract(content, regex) {
  const m = content.match(regex);
  return m ? (m[1] || '').trim() : null;
}

function hasTag(content, rx) {
  return rx.test(content);
}

function analyzeFile(file) {
  const src = fs.readFileSync(file, 'utf8');
  const rel = file.split('pages')[1];
  const issues = [];

  const ogTitle = extract(src, /<meta\s+(?:property|name)=["']og:title["'][^>]*content=["']([\s\S]*?)["']/i);
  const ogDesc = extract(src, /<meta\s+(?:property|name)=["']og:description["'][^>]*content=["']([\s\S]*?)["']/i);
  const ogImage = extract(src, /<meta\s+(?:property|name)=["']og:image["'][^>]*content=["']([\s\S]*?)["']/i);
  const twitterCard = extract(src, /<meta\s+(?:property|name)=["']twitter:card["'][^>]*content=["']([\s\S]*?)["']/i);

  if (!hasTag(src, /<Head[\s>]/)) issues.push('Missing <Head>');
  if (!ogTitle) issues.push('Missing og:title');
  if (!ogDesc) issues.push('Missing og:description');
  if (!ogImage) issues.push('Missing og:image');
  if (!twitterCard) issues.push('Missing twitter:card');

  return { file: rel, ogTitle, ogDesc, ogImage, twitterCard, issues };
}

function ensureDir(dir) { fs.mkdirSync(dir, { recursive: true }); }

function renderHTML(rows) {
  const tr = rows.map(r => `
    <tr>
      <td>${r.file}</td>
      <td>${(r.ogTitle||'').replace(/</g,'&lt;')}</td>
      <td>${(r.ogDesc||'').replace(/</g,'&lt;')}</td>
      <td>${(r.ogImage||'').replace(/</g,'&lt;')}</td>
      <td>${(r.twitterCard||'').replace(/</g,'&lt;')}</td>
      <td>${r.issues.length ? r.issues.join('<br/>') : 'OK'}</td>
    </tr>`).join('\n');
  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>OG Metadata Audit</title>
  <style>
    body { font-family: system-ui, -apple-system, Segoe UI, Roboto, Inter, sans-serif; margin: 24px; }
    table { border-collapse: collapse; width: 100%; }
    th, td { border: 1px solid #ddd; padding: 8px; font-size: 14px; }
    th { background: #f3f4f6; text-align: left; }
  </style>
</head>
<body>
  <h1>OG Metadata Audit</h1>
  <p>Autonomously generated. Checks for presence of Open Graph and Twitter tags.</p>
  <table>
    <thead>
      <tr><th>Page</th><th>og:title</th><th>og:description</th><th>og:image</th><th>twitter:card</th><th>Issues</th></tr>
    </thead>
    <tbody>
      ${tr}
    </tbody>
  </table>
</body>
</html>`;
}

function main() {
  const files = walkPages(PAGES_DIR);
  const rows = files.map(analyzeFile);
  ensureDir(OUT_DIR);
  fs.writeFileSync(path.join(OUT_DIR, 'index.html'), renderHTML(rows));
  fs.writeFileSync(path.join(OUT_DIR, 'latest.json'), JSON.stringify({ generatedAt: new Date().toISOString(), rows }, null, 2));
}

main();