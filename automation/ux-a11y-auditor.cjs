#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const glob = require('glob');

function ensureDir(dirPath) {
  if (!fs.existsSync(dirPath)) {
    fs.mkdirSync(dirPath, { recursive: true });
  }
}

function toBytesString(bytes) {
  const units = ['B', 'KB', 'MB', 'GB'];
  let size = bytes;
  let unit = 0;
  while (size >= 1024 && unit < units.length - 1) {
    size /= 1024;
    unit++;
  }
  return `${size.toFixed(1)} ${units[unit]}`;
}

function readFile(file) {
  try {
    return fs.readFileSync(file, 'utf8');
  } catch {
    return '';
  }
}

function findImgIssues(content, filePath) {
  const issues = [];
  const imgRegex = /<img\b[^>]*?>/gims;
  const altRegex = /\balt\s*=\s*("([^"]*)"|'([^']*)'|([^\s>]+))/i;
  let m;
  while ((m = imgRegex.exec(content))) {
    const tag = m[0];
    const altMatch = tag.match(altRegex);
    const alt = altMatch ? (altMatch[2] || altMatch[3] || altMatch[4] || '').trim() : null;
    if (alt === null || alt.length === 0) {
      issues.push({ type: 'img-missing-alt', file: filePath, context: tag.slice(0, 200) });
    } else if (/^(image|photo|picture)$/i.test(alt)) {
      issues.push({ type: 'img-generic-alt', file: filePath, context: tag.slice(0, 200) });
    }
  }
  return issues;
}

function stripTags(html) {
  return html.replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ').trim();
}

function findLinkIssues(content, filePath) {
  const issues = [];
  const aRegex = /<a\b[^>]*>([\s\S]*?)<\/a>/gims;
  const hrefRegex = /\bhref\s*=\s*("([^"]*)"|'([^']*)'|([^\s>]+))/i;
  let m;
  while ((m = aRegex.exec(content))) {
    const full = m[0];
    const innerHtml = m[1] || '';
    const text = stripTags(innerHtml);
    const hrefMatch = full.match(hrefRegex);
    const href = hrefMatch ? (hrefMatch[2] || hrefMatch[3] || hrefMatch[4] || '').trim() : '';
    if (!href) continue;
    if (text.length < 3 || /^(click here|read more|more|here)$/i.test(text)) {
      issues.push({ type: 'link-poor-text', file: filePath, href, text: text || '(empty)', context: full.slice(0, 200) });
    }
    if (/^#?$/.test(href)) {
      issues.push({ type: 'link-broken-target', file: filePath, href, text: text || '(empty)', context: full.slice(0, 200) });
    }
  }
  return issues;
}

function collectFiles() {
  // TSX/JSX/HTML in pages and public
  const pageFiles = glob.sync('pages/**/*.{tsx,jsx,ts,js,html}', { nodir: true, ignore: ['**/node_modules/**'] });
  const publicFiles = glob.sync('public/**/*.html', { nodir: true });
  return Array.from(new Set([...pageFiles, ...publicFiles]));
}

function generateHtmlReport(results) {
  const counts = results.reduce((acc, r) => {
    acc[r.type] = (acc[r.type] || 0) + 1;
    return acc;
  }, {});

  const rows = results.map((r) => {
    const ctx = (r.context || '').replace(/</g, '&lt;').replace(/>/g, '&gt;');
    const text = (r.text || '').replace(/</g, '&lt;').replace(/>/g, '&gt;');
    return `<tr><td>${r.type}</td><td>${r.file}</td><td>${r.href || ''}</td><td>${text}</td><td><code>${ctx}</code></td></tr>`;
  }).join('\n');

  return `<!doctype html>
<html>
<head>
  <meta charset="utf-8" />
  <title>A11y Report</title>
  <meta name="viewport" content="width=device-width,initial-scale=1" />
  <style>
    body{font-family:ui-sans-serif,system-ui,-apple-system,Segoe UI,Roboto,Ubuntu,Helvetica,Arial,sans-serif;background:#0b1220;color:#e5e7eb;padding:24px}
    h1{font-size:20px;margin:0 0 8px}
    .summary{opacity:.8;margin-bottom:16px}
    table{width:100%;border-collapse:collapse;background:#0f172a;border:1px solid #334155}
    th,td{padding:8px;border-top:1px solid #334155;vertical-align:top}
    th{text-align:left;background:#111827}
    code{white-space:pre-wrap;word-break:break-word}
  </style>
</head>
<body>
  <h1>Accessibility Report</h1>
  <div class="summary">Issues: ${results.length} — ${Object.entries(counts).map(([k,v]) => `${k}: ${v}`).join(' • ')}</div>
  <table>
    <thead><tr><th>Type</th><th>File</th><th>Href</th><th>Text</th><th>Context</th></tr></thead>
    <tbody>
      ${rows || '<tr><td colspan="5">No issues detected by static scan.</td></tr>'}
    </tbody>
  </table>
</body>
</html>`;
}

(function main(){
  const files = collectFiles();
  const results = [];

  for (const file of files) {
    const content = readFile(file);
    results.push(...findImgIssues(content, file));
    results.push(...findLinkIssues(content, file));
  }

  const outDir = path.join(process.cwd(), 'public', 'reports', 'a11y');
  ensureDir(outDir);
  const outFile = path.join(outDir, 'index.html');
  fs.writeFileSync(outFile, generateHtmlReport(results), 'utf8');
  console.log(`Wrote A11y report to ${outFile}`);
})();