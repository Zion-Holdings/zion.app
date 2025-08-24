#!/usr/bin/env node
const fs = require('fs');
const path = require('path');

const reportsDir = path.join(process.cwd(), 'data', 'reports');
const reportPath = path.join(reportsDir, 'seo-audit.json');

function ensure() { if (!fs.existsSync(reportsDir)) fs.mkdirSync(reportsDir, { recursive: true }); }

function listFiles(dir, exts) {
  const out = [];
  if (!fs.existsSync(dir)) return out;
  for (const entry of fs.readdirSync(dir)) {
    const p = path.join(dir, entry);
    const st = fs.statSync(p);
    if (st.isDirectory()) out.push(...listFiles(p, exts));
    else if (exts.some((e) => entry.endsWith(e))) out.push(p);
  }
  return out;
}

function analyzeFile(file) {
  const src = fs.readFileSync(file, 'utf8');
  const issues = [];
  if (/\<img[^>]*\>/i.test(src)) {
    const imgs = src.match(/<img[^>]*>/gi) || [];
    for (const img of imgs) {
      if (!/alt=/.test(img)) issues.push({ type: 'missing-alt', message: 'Image tag missing alt attribute', snippet: img.slice(0, 200) });
    }
  }
  if (file.includes(path.join('pages', 'blog'))) {
    // Expect an H1 and at least 100 chars content
    const hasH1 = /<h1[^>]*>/i.test(src);
    if (!hasH1) issues.push({ type: 'missing-h1', message: 'Blog page missing H1 heading' });
    const textLen = src.replace(/<[^>]+>/g, '').length;
    if (textLen < 300) issues.push({ type: 'thin-content', message: 'Blog content appears thin (<300 chars)' });
  }
  return issues;
}

function run() {
  ensure();
  const pageFiles = listFiles(path.join(process.cwd(), 'pages'), ['.tsx', '.mdx']);
  const results = [];
  for (const f of pageFiles) {
    const issues = analyzeFile(f);
    if (issues.length) results.push({ file: path.relative(process.cwd(), f), issues });
  }
  const summary = {
    generatedAt: new Date().toISOString(),
    filesScanned: pageFiles.length,
    filesWithIssues: results.length,
    totalIssues: results.reduce((a, r) => a + r.issues.length, 0),
  };
  fs.writeFileSync(reportPath, JSON.stringify({ summary, results }, null, 2));
  console.log('[seo-audit] done', summary);
}

run();