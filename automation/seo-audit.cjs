#!/usr/bin/env node
const fs = require('fs');
const path = require('path');

const ROOT = process.cwd();
const pagesDir = path.join(ROOT, 'pages');
const outDir = path.join(ROOT, 'data', 'reports', 'seo');

function getAllFiles(dir, list = []) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) getAllFiles(full, list);
    else if (entry.name.endsWith('.tsx') || entry.name.endsWith('.jsx')) list.push(full);
  }
  return list;
}

function hasMetaDescription(content) {
  return /<meta\s+name=\"description\"/i.test(content);
}

async function main() {
  fs.mkdirSync(outDir, { recursive: true });
  const files = getAllFiles(pagesDir);
  const issues = [];
  for (const f of files) {
    const content = fs.readFileSync(f, 'utf8');
    if (!hasMetaDescription(content)) {
      issues.push({ file: path.relative(ROOT, f), issue: 'Missing meta description' });
    }
  }
  const stamp = new Date();
  const ts = stamp.toISOString().replace(/[:.]/g, '-');
  const payload = { generatedAt: stamp.toISOString(), summary: { totalPages: files.length, issues: issues.length }, issues };
  fs.writeFileSync(path.join(outDir, `seo-report-${ts}.json`), JSON.stringify(payload, null, 2));
  fs.writeFileSync(path.join(outDir, `latest.json`), JSON.stringify(payload, null, 2));
  console.log('SEO report generated');
}

main().catch((e) => { console.error(e); process.exit(1); });