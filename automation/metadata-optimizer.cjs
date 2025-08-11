#!/usr/bin/env node

'use strict';

const fs = require('fs');
const path = require('path');

const ROOT = path.resolve(__dirname, '..');
const PAGES_DIR = path.join(ROOT, 'pages');
const REPORT_DIR = path.join(ROOT, 'public', 'reports', 'metadata');
const JSON_PATH = path.join(REPORT_DIR, 'latest.json');
const HTML_PATH = path.join(REPORT_DIR, 'index.html');

function ensureDir(dir) { fs.mkdirSync(dir, { recursive: true }); }

function listPageFiles(dir) {
  const results = [];
  if (!fs.existsSync(dir)) return results;
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      // Recurse but skip API or special directories
      if (entry.name.startsWith('_') || entry.name === 'api') continue;
      results.push(...listPageFiles(full));
    } else if (entry.name.endsWith('.tsx') || entry.name.endsWith('.jsx')) {
      results.push(full);
    }
  }
  return results;
}

function getRouteFromPath(filePath) {
  const rel = path.relative(PAGES_DIR, filePath).replace(/\\/g, '/');
  const noExt = rel.replace(/\.(tsx|jsx)$/, '');
  let route = '/' + noExt;
  route = route.replace(/\/index$/, '/');
  return route;
}

function analyzeHead(content) {
  // Basic presence checks
  const hasDescription = /<meta\s+name=["']description["']\s+content=/i.test(content);
  const hasOgTitle = /<meta\s+property=["']og:title["']\s+content=/i.test(content);
  const hasOgDesc = /<meta\s+property=["']og:description["']\s+content=/i.test(content);
  const hasOgImage = /<meta\s+property=["']og:image["']\s+content=/i.test(content);
  const hasTwitterCard = /<meta\s+name=["']twitter:card["']\s+content=/i.test(content);
  return { hasDescription, hasOgTitle, hasOgDesc, hasOgImage, hasTwitterCard };
}

function suggestFromContent(content, fallback) {
  // Try to find h1 text
  const h1 = content.match(/<h1[^>]*>([\s\S]*?)<\/h1>/i);
  const text = h1 ? stripTags(h1[1]).trim() : fallback;
  const desc = text ? `${text} — auto-suggested description` : fallback;
  return { title: text || fallback, description: desc };
}

function stripTags(s) { return String(s || '').replace(/<[^>]*>/g, ''); }

function generateHtmlReport(report) {
  const rows = report.items.map((it) => `
<tr>
  <td><code>${escapeHtml(it.route)}</code></td>
  <td>${it.missing.join(', ') || 'None'}</td>
  <td>${escapeHtml(it.suggestion.title || '')}</td>
  <td>${escapeHtml(it.suggestion.description || '')}</td>
</tr>`).join('\n');

  return `<!doctype html>
<html>
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width,initial-scale=1" />
  <title>Metadata Optimizer</title>
  <style>
    body{font-family:ui-sans-serif,system-ui,Segoe UI,Roboto,Helvetica,Arial,sans-serif;background:#0f172a;color:#e5e7eb;padding:24px}
    a{color:#67e8f9}
    .card{background:rgba(255,255,255,0.05);border:1px solid rgba(255,255,255,0.12);border-radius:12px;padding:16px;margin:0 0 16px 0}
    table{width:100%;border-collapse:collapse}
    th,td{border:1px solid rgba(255,255,255,0.12);padding:8px}
    th{background:rgba(255,255,255,0.06)}
  </style>
</head>
<body>
  <h1>Metadata Optimizer</h1>
  <p>Checks pages for essential meta tags and proposes titles/descriptions if missing.</p>
  <div class="card">
    <div><strong>Generated:</strong> ${new Date(report.generatedAt).toLocaleString()}</div>
    <div><strong>Pages scanned:</strong> ${report.pagesScanned}</div>
  </div>
  <table>
    <thead><tr><th>Route</th><th>Missing</th><th>Suggested Title</th><th>Suggested Description</th></tr></thead>
    <tbody>
      ${rows || '<tr><td colspan="4">All good \u2014 no missing metadata detected.</td></tr>'}
    </tbody>
  </table>
</body>
</html>`;
}

function escapeHtml(s) {
  return String(s || '')
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

(function main(){
  ensureDir(REPORT_DIR);
  const files = listPageFiles(PAGES_DIR);
  const items = [];
  for (const file of files) {
    try {
      const content = fs.readFileSync(file, 'utf8');
      const head = analyzeHead(content);
      const missing = [];
      if (!head.hasDescription) missing.push('description');
      if (!head.hasOgTitle) missing.push('og:title');
      if (!head.hasOgDesc) missing.push('og:description');
      if (!head.hasOgImage) missing.push('og:image');
      if (!head.hasTwitterCard) missing.push('twitter:card');
      if (missing.length > 0) {
        const route = getRouteFromPath(file);
        const fallback = path.basename(route).replace(/\W+/g, ' ').trim() || 'Page';
        const suggestion = suggestFromContent(content, fallback);
        items.push({ route, missing, suggestion });
      }
    } catch {}
  }
  const report = { generatedAt: new Date().toISOString(), pagesScanned: files.length, items };
  fs.writeFileSync(JSON_PATH, JSON.stringify(report, null, 2), 'utf8');
  fs.writeFileSync(HTML_PATH, generateHtmlReport(report), 'utf8');
  process.stdout.write(`[metadata-optimizer] Report written to ${path.relative(ROOT, HTML_PATH)}\n`);
})();