#!/usr/bin/env node

'use strict';

const fs = require('fs');
const path = require('path');

const ROOT = process.cwd();
const SCAN_DIR = path.join(ROOT, 'pages');
const REPORT_DIR = path.join(ROOT, 'data', 'reports', 'anchors');

function ensureDir(p) { if (!fs.existsSync(p)) fs.mkdirSync(p, { recursive: true }); }
ensureDir(REPORT_DIR);

function listSourceFiles(dir) {
  const out = [];
  if (!fs.existsSync(dir)) return out;
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  for (const e of entries) {
    const full = path.join(dir, e.name);
    if (e.isDirectory()) out.push(...listSourceFiles(full));
    else if (/\.(tsx|ts|jsx|js|md|mdx)$/i.test(e.name)) out.push(full);
  }
  return out;
}

function extractIds(content) {
  const ids = new Set();
  const idRegex = /id\s*=\s*"([^"]+)"/g;
  let m;
  while ((m = idRegex.exec(content))) ids.add(m[1]);
  return ids;
}

function extractSameFileAnchors(content) {
  const anchors = [];
  const hrefRe = /href\s*=\s*(?:"#([^"]+)"|'#([^']+)'|\{\s*`#([^`]+)`\s*\}|\{\s*"#([^"]+)"\s*\}|\{\s*'#([^']+)'\s*\})/g;
  let m;
  while ((m = hrefRe.exec(content))) anchors.push(m[1] || m[2] || m[3] || m[4] || m[5]);
  return anchors;
}

(function main() {
  const files = listSourceFiles(SCAN_DIR);
  const issues = [];
  for (const file of files) {
    const rel = path.relative(ROOT, file);
    try {
      const content = fs.readFileSync(file, 'utf8');
      const ids = extractIds(content);
      const anchors = extractSameFileAnchors(content);
      for (const a of anchors) {
        if (!ids.has(a)) {
          issues.push({ file: rel, anchor: a, type: 'missing-id' });
        }
      }
    } catch (e) {
      issues.push({ file: rel, error: String(e) });
    }
  }

  const report = { generatedAt: new Date().toISOString(), totalFiles: files.length, issues };
  const outPath = path.join(REPORT_DIR, `anchors-report-${new Date().toISOString().replace(/[:.]/g, '-')}.json`);
  fs.writeFileSync(outPath, JSON.stringify(report, null, 2));
  console.log(`Internal anchors report saved to ${outPath}`);
})();