#!/usr/bin/env node

'use strict';

const fs = require('fs');
const path = require('path');

const ROOT = path.resolve(__dirname, '..');
const SITE_ROOT = path.resolve(__dirname, '..');
const PAGES_DIR = path.join(SITE_ROOT, 'pages');
const PUBLIC_DIR = path.join(SITE_ROOT, 'public');
const REPORT_DIR = path.join(PUBLIC_DIR, 'reports', 'ux');

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

function listTsxFiles(dir) {
  const results = [];
  function walk(current) {
    const entries = fs.readdirSync(current, { withFileTypes: true });
    for (const entry of entries) {
      if (entry.name.startsWith('_')) continue; // skip Next.js special
      const abs = path.join(current, entry.name);
      if (entry.isDirectory()) walk(abs);
      else if (entry.isFile() && /\.(tsx|jsx)$/.test(entry.name)) results.push(abs);
    }
  }
  if (fs.existsSync(dir)) walk(dir);
  return results;
}

function analyzeTsx(content) {
  const issues = [];

  // Heuristic: ensure exactly one <h1>
  const h1Matches = content.match(/<h1\b[\s\S]*?>[\s\S]*?<\/h1>/g) || [];
  if (h1Matches.length === 0) issues.push({ type: 'heading', severity: 'warn', message: 'Missing <h1> heading' });
  if (h1Matches.length > 1) issues.push({ type: 'heading', severity: 'warn', message: `Multiple <h1> headings (${h1Matches.length})` });

  // Heuristic: meta description present in <Head>
  const hasMetaDescription = /<meta\s+name=["']description["']\s+content=/.test(content);
  if (!hasMetaDescription) issues.push({ type: 'seo', severity: 'info', message: 'Missing meta description' });

  // Heuristic: <img> tags should have alt
  const imgTags = content.match(/<img\b[^>]*>/g) || [];
  let missingAlt = 0;
  for (const tag of imgTags) {
    if (!/\balt=/.test(tag)) missingAlt++;
  }
  if (missingAlt > 0) issues.push({ type: 'a11y', severity: 'warn', message: `${missingAlt} <img> tag(s) missing alt attribute` });

  // Heuristic: external links with target="_blank" should have rel="noopener"
  const externalBlankLinks = content.match(/<a\b[^>]*target=["']_blank["'][^>]*>/g) || [];
  let missingRel = 0;
  for (const a of externalBlankLinks) {
    if (!/\brel=/.test(a)) missingRel++;
  }
  if (missingRel > 0) issues.push({ type: 'security', severity: 'info', message: `${missingRel} external link(s) missing rel="noopener"` });

  return { issues };
}

function generateHtmlReport(summary) {
  const rows = summary.files
    .map((f) => {
      const rel = f.path.replace(SITE_ROOT + path.sep, '');
      const issues = f.issues.length
        ? f.issues.map((i) => `${i.severity.toUpperCase()}: ${i.message}`).join('<br/>')
        : '<span style="color:#10b981">No issues</span>';
      return `<tr><td style="padding:8px;border:1px solid #223">${rel}</td><td style="padding:8px;border:1px solid #223">${issues}</td></tr>`;
    })
    .join('\n');

  return `<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8" />
<meta name="viewport" content="width=device-width, initial-scale=1" />
<title>UX Heuristics Report</title>
<style>
  body{background:#0f172a;color:#e5e7eb;font-family:ui-sans-serif,system-ui,-apple-system}
  .container{max-width:960px;margin:40px auto;padding:0 16px}
  h1{font-size:24px;margin-bottom:8px}
  p{color:#94a3b8}
  table{width:100%;border-collapse:collapse;margin-top:16px}
  thead td{font-weight:700;background:#111827}
</style>
</head>
<body>
  <div class="container">
    <h1>UX Heuristics Report</h1>
    <p>Automated scan of TSX/JSX pages for basic accessibility and UX signals. Generated at ${new Date().toISOString()}.</p>
    <table>
      <thead><tr><td>File</td><td>Issues</td></tr></thead>
      <tbody>
${rows}
      </tbody>
    </table>
  </div>
</body>
</html>`;
}

(function main(){
  ensureDir(REPORT_DIR);

  const files = listTsxFiles(PAGES_DIR);
  const analyzed = files.map((absPath) => {
    const content = readFileSafe(absPath);
    const { issues } = analyzeTsx(content);
    return { path: absPath, issues };
  });

  const totals = {
    filesScanned: analyzed.length,
    issues: analyzed.reduce((acc, f) => acc + f.issues.length, 0),
    bySeverity: analyzed.reduce((acc, f) => {
      for (const i of f.issues) acc[i.severity] = (acc[i.severity] || 0) + 1;
      return acc;
    }, {}),
  };

  const summary = { generatedAt: new Date().toISOString(), files: analyzed, totals };

  // Write JSON and HTML
  ensureDir(REPORT_DIR);
  fs.writeFileSync(path.join(REPORT_DIR, 'latest.json'), JSON.stringify(summary, null, 2), 'utf8');
  fs.writeFileSync(path.join(REPORT_DIR, 'index.html'), generateHtmlReport(summary), 'utf8');

  console.log(`[ux-heuristics] scanned=${totals.filesScanned} issues=${totals.issues}`);
})();