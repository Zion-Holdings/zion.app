#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

const PAGES_DIR = path.join(__dirname, '..', 'pages');
const OUT_DIR = path.join(__dirname, '..', 'public', 'reports', 'opportunities');

function ensureDir(dirPath) {
  fs.mkdirSync(dirPath, { recursive: true });
}

function readFileSafe(filePath) {
  try {
    return fs.readFileSync(filePath, 'utf8');
  } catch {
    return '';
  }
}

function walkPages(dirPath) {
  const entries = fs.readdirSync(dirPath, { withFileTypes: true });
  const files = [];
  for (const entry of entries) {
    if (entry.name.startsWith('_') || entry.name === 'api') continue;
    const full = path.join(dirPath, entry.name);
    if (entry.isDirectory()) files.push(...walkPages(full));
    else if (entry.isFile() && /\.(tsx|jsx)$/.test(entry.name)) files.push(full);
  }
  return files;
}

function analyzePage(filePath) {
  const rel = filePath.split('pages')[1] || filePath;
  const src = readFileSafe(filePath);

  const hasHead = /<Head[\s>]/.test(src);
  const hasAutomationLink = /href=["']\/?automation["']/.test(src);
  const hasReportsLink = /href=["']\/?reports\//.test(src);

  const titleMatch = src.match(/<title>([\s\S]*?)<\/title>/);
  const descMatch = src.match(/<meta\s+name=["']description["']\s+content=["']([\s\S]*?)["']/);

  const issues = [];
  if (!hasHead) issues.push('Missing <Head>');
  if (!titleMatch) issues.push('Missing <title>');
  if (!descMatch) issues.push('Missing meta description');

  const suggestions = [];
  if (!hasAutomationLink) suggestions.push('Add quick link to /automation (Automation Hub)');
  if (!hasReportsLink) suggestions.push('Add quick link to /reports (SEO or AI Trends)');

  const title = titleMatch ? titleMatch[1].trim() : null;
  const description = descMatch ? descMatch[1].trim() : null;

  return {
    file: rel,
    title,
    description,
    issues,
    suggestions,
  };
}

function renderHTML(rows) {
  const date = new Date().toISOString();
  const tr = rows.map((r) => `
    <tr>
      <td><code>${r.file.replace(/</g, '&lt;')}</code></td>
      <td>${(r.title || '').replace(/</g, '&lt;')}</td>
      <td>${(r.description || '').replace(/</g, '&lt;')}</td>
      <td>${r.issues.length ? r.issues.map((i) => `<span>${i}</span>`).join('<br/>') : 'OK'}</td>
      <td>${r.suggestions.length ? r.suggestions.map((s) => `<span>${s}</span>`).join('<br/>') : '—'}</td>
    </tr>`).join('\n');

  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Opportunity Miner Report</title>
  <style>
    body { font-family: system-ui, -apple-system, Segoe UI, Roboto, Inter, sans-serif; margin: 24px; color: #111827; }
    h1 { margin-bottom: 0; }
    p.meta { margin-top: 4px; color: #6b7280; }
    table { border-collapse: collapse; width: 100%; margin-top: 16px; }
    th, td { border: 1px solid #e5e7eb; padding: 8px; font-size: 14px; vertical-align: top; }
    th { background: #f9fafb; text-align: left; }
    code { background: #f3f4f6; padding: 2px 4px; border-radius: 4px; }
  </style>
</head>
<body>
  <h1>Opportunity Miner</h1>
  <p class="meta">Autonomously generated on ${date}</p>
  <table>
    <thead>
      <tr><th>Page</th><th>Title</th><th>Description</th><th>Issues</th><th>Suggestions</th></tr>
    </thead>
    <tbody>
      ${tr}
    </tbody>
  </table>
</body>
</html>`;
}

function main() {
  ensureDir(OUT_DIR);
  const files = walkPages(PAGES_DIR);
  const rows = files.map(analyzePage);
  const outJson = { generatedAt: new Date().toISOString(), rows };
  fs.writeFileSync(path.join(OUT_DIR, 'latest.json'), JSON.stringify(outJson, null, 2));
  fs.writeFileSync(path.join(OUT_DIR, 'index.html'), renderHTML(rows));
}

main();