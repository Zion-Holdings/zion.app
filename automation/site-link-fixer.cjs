#!/usr/bin/env node

'use strict';

const fs = require('fs');
const path = require('path');

const ROOT = process.cwd();
const REPORT_DIR = path.join(ROOT, 'data', 'reports', 'link-sentinel');

function latestReport(prefix) {
  if (!fs.existsSync(REPORT_DIR)) return null;
  const files = fs.readdirSync(REPORT_DIR).filter((f) => f.startsWith(prefix)).sort();
  if (!files.length) return null;
  return path.join(REPORT_DIR, files[files.length - 1]);
}

function listEditableFiles() {
  function list(dir) {
    const out = [];
    if (!fs.existsSync(dir)) return out;
    const entries = fs.readdirSync(dir, { withFileTypes: true });
    for (const entry of entries) {
      const full = path.join(dir, entry.name);
      if (entry.isDirectory()) out.push(...list(full));
      else if (/\.(tsx|ts|js|jsx|mdx)$/i.test(entry.name)) out.push(full);
    }
    return out;
  }
  return [...list(path.join(ROOT, 'pages')), ...list(path.join(ROOT, 'components'))];
}

function applyEdits(editsByFile) {
  let changedFiles = 0;
  for (const [file, replacements] of Object.entries(editsByFile)) {
    let content = fs.readFileSync(file, 'utf8');
    let original = content;
    for (const { from, to } of replacements) {
      // Replace common jsx href patterns
      const patterns = [
        `href="${from}"`,
        `href='${from}'`,
        `href={"${from}"}`,
        `href={'${from}'}`,
        `href={\`${from}\`}`,
      ];
      for (const p of patterns) {
        content = content.split(p).join(p.replace(from, to));
      }
    }
    if (content !== original) {
      fs.writeFileSync(file, content);
      changedFiles += 1;
      console.log(`Updated ${path.relative(ROOT, file)} (${replacements.length} replacements)`);
    }
  }
  return changedFiles;
}

(function main() {
  const reportPath = latestReport('internal-report-');
  if (!reportPath) {
    console.log('No internal link report found. Skipping.');
    process.exit(0);
  }
  const data = JSON.parse(fs.readFileSync(reportPath, 'utf8'));
  const results = Array.isArray(data.results) ? data.results : [];

  const fixes = results.filter((r) => r.suggestion && r.href !== r.suggestion);
  if (!fixes.length) {
    console.log('No fixable internal links found.');
    process.exit(0);
  }

  // Group by file
  const editsByFile = {};
  for (const { file, href, suggestion } of fixes) {
    const abs = path.join(ROOT, file);
    if (!editsByFile[abs]) editsByFile[abs] = [];
    editsByFile[abs].push({ from: href, to: suggestion });
  }

  const changed = applyEdits(editsByFile);
  console.log(`Applied fixes to ${changed} files.`);
})();