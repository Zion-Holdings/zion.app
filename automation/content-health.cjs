#!/usr/bin/env node
const fs = require('fs');
const path = require('path');

function walk(dir, filterExts = ['.tsx', '.mdx']) {
  const out = [];
  for (const entry of fs.readdirSync(dir)) {
    const p = path.join(dir, entry);
    const stat = fs.statSync(p);
    if (stat.isDirectory()) out.push(...walk(p, filterExts));
    else if (filterExts.includes(path.extname(p))) out.push(p);
  }
  return out;
}

function read(p) {
  try { return fs.readFileSync(p, 'utf8'); } catch { return ''; }
}

function writeJson(p, data) {
  fs.mkdirSync(path.dirname(p), { recursive: true });
  fs.writeFileSync(p, JSON.stringify(data, null, 2));
}

function analyze() {
  const root = process.cwd();
  const pagesDir = path.join(root, 'pages');
  const files = walk(pagesDir);
  const issues = [];

  for (const file of files) {
    const txt = read(file);
    const isPlaceholder = /This page is under construction|coming soon\.\.\./i.test(txt);
    const hasHeadTitle = /<title>[^<]+<\/title>/.test(txt);
    const size = txt.length;
    if (isPlaceholder || !hasHeadTitle || size < 120) {
      issues.push({ file: path.relative(root, file), isPlaceholder, hasHeadTitle, size });
    }
  }

  const report = {
    scannedAt: new Date().toISOString(),
    totalFiles: files.length,
    issues,
  };

  writeJson(path.join(root, 'data/reports/content-health.json'), report);

  const statusPath = path.join(root, 'data/reports/automation-status.json');
  let status = {};
  try { status = JSON.parse(fs.readFileSync(statusPath, 'utf8')); } catch { status = { automations: {} }; }
  status.automations = status.automations || {};
  status.automations['content-health'] = {
    name: 'Content Health Monitor',
    lastRunAt: report.scannedAt,
    status: 'success',
    output: 'data/reports/content-health.json',
  };
  status.lastUpdatedAt = report.scannedAt;
  writeJson(statusPath, status);
}

if (require.main === module) analyze();

module.exports = { analyze };