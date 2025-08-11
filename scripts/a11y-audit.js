#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

const ROOT_DIR = path.join(__dirname, '..');
const PAGES_DIR = path.join(ROOT_DIR, 'pages');
const COMPONENTS_DIR = path.join(ROOT_DIR, 'components');
const OUT_DIR = path.join(ROOT_DIR, 'public', 'reports', 'a11y');

function listFilesRecursively(startDir, extensions) {
  const result = [];
  const stack = [startDir];
  while (stack.length > 0) {
    const dir = stack.pop();
    if (!fs.existsSync(dir)) continue;
    for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
      if (entry.name.startsWith('.') || entry.name === 'api') continue;
      const full = path.join(dir, entry.name);
      if (entry.isDirectory()) stack.push(full);
      else if (entry.isFile() && extensions.some(ext => entry.name.endsWith(ext))) {
        result.push(full);
      }
    }
  }
  return result;
}

function analyzeSourceFile(filePath) {
  const source = fs.readFileSync(filePath, 'utf8');
  const relPath = filePath.replace(ROOT_DIR, '');
  const issues = [];

  // <img> without alt
  const imgTags = source.match(/<img\b[^>]*>/gi) || [];
  for (const tag of imgTags) {
    const hasAlt = /\balt\s*=\s*("[^"]*"|'[^']*')/i.test(tag);
    if (!hasAlt) {
      issues.push({ type: 'image-missing-alt', message: '<img> missing alt attribute', code: tag });
    }
  }

  // <button> with no accessible name (no text, no aria-label)
  const buttonTags = source.match(/<button\b[\s\S]*?>[\s\S]*?<\/button>/gi) || [];
  for (const tag of buttonTags) {
    const innerText = (tag.replace(/<button\b[\s\S]*?>/i, '').replace(/<\/button>/i, '').trim());
    const hasAriaLabel = /\baria-label\s*=\s*("[^"]+"|'[^']+')/i.test(tag);
    const hasTitle = /\btitle\s*=\s*("[^"]+"|'[^']+')/i.test(tag);
    const hasText = innerText && innerText.replace(/<[^>]+>/g, '').trim().length > 0;
    if (!hasText && !hasAriaLabel && !hasTitle) {
      issues.push({ type: 'button-missing-label', message: '<button> missing accessible name', code: tag });
    }
  }

  // <a> with empty or no text (and no aria-label)
  const anchorTags = source.match(/<a\b[\s\S]*?>[\s\S]*?<\/a>/gi) || [];
  for (const tag of anchorTags) {
    const innerText = (tag.replace(/<a\b[\s\S]*?>/i, '').replace(/<\/a>/i, '').trim());
    const hasAriaLabel = /\baria-label\s*=\s*("[^"]+"|'[^']+')/i.test(tag);
    const hasText = innerText && innerText.replace(/<[^>]+>/g, '').trim().length > 0;
    if (!hasText && !hasAriaLabel) {
      issues.push({ type: 'anchor-empty-text', message: '<a> has no visible text and no aria-label', code: tag });
    }
  }

  // Headings skipped order h1..h6 naive check: flag files with multiple h1 or no h1
  const h1Count = (source.match(/<h1\b/gi) || []).length;
  if (h1Count === 0) issues.push({ type: 'heading-missing-h1', message: 'File does not contain an <h1> heading' });
  if (h1Count > 1) issues.push({ type: 'heading-multiple-h1', message: 'File contains multiple <h1> headings' });

  return { file: relPath, issues };
}

function ensureDir(dir) {
  fs.mkdirSync(dir, { recursive: true });
}

function renderHTMLReport(rows) {
  const totalIssues = rows.reduce((acc, r) => acc + r.issues.length, 0);
  const trs = rows.map(r => {
    const issuesHtml = r.issues.length
      ? '<ul>' + r.issues.map(i => `<li><strong>${i.type}</strong>: ${i.message}</li>`).join('') + '</ul>'
      : 'OK';
    return `<tr><td>${r.file}</td><td>${issuesHtml}</td></tr>`;
  }).join('\n');
  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Accessibility Audit Report</title>
  <style>
    body { font-family: system-ui, -apple-system, Segoe UI, Roboto, Inter, sans-serif; margin: 24px; }
    table { border-collapse: collapse; width: 100%; }
    th, td { border: 1px solid #ddd; padding: 8px; font-size: 14px; vertical-align: top; }
    th { background: #f3f4f6; text-align: left; }
    .summary { margin-bottom: 12px; }
  </style>
</head>
<body>
  <h1>Accessibility Audit</h1>
  <p class="summary">Files scanned: ${rows.length}. Total issues: ${totalIssues}.</p>
  <table>
    <thead><tr><th>File</th><th>Issues</th></tr></thead>
    <tbody>
      ${trs}
    </tbody>
  </table>
</body>
</html>`;
}

function main() {
  const files = [
    ...listFilesRecursively(PAGES_DIR, ['.tsx', '.jsx']),
    ...listFilesRecursively(COMPONENTS_DIR, ['.tsx', '.jsx'])
  ];
  const rows = files.map(analyzeSourceFile);
  ensureDir(OUT_DIR);
  fs.writeFileSync(path.join(OUT_DIR, 'latest.json'), JSON.stringify({ generatedAt: new Date().toISOString(), rows }, null, 2));
  fs.writeFileSync(path.join(OUT_DIR, 'index.html'), renderHTMLReport(rows));
}

if (require.main === module) {
  main();
}