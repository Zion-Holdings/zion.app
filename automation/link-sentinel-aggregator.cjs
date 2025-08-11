#!/usr/bin/env node

'use strict';

const fs = require('fs');
const path = require('path');

function ensureDir(dirPath) {
  fs.mkdirSync(dirPath, { recursive: true });
}

function findLatestReport(dirPath) {
  if (!fs.existsSync(dirPath)) return null;
  const files = fs.readdirSync(dirPath)
    .filter((f) => /^internal-report-.*\.json$/i.test(f));
  if (files.length === 0) return null;
  // Since filenames include ISO timestamp with replaced separators, lexicographic sort works
  files.sort();
  return path.join(dirPath, files[files.length - 1]);
}

function summarizeReport(report) {
  const totalBroken = Array.isArray(report.results) ? report.results.length : 0;
  const byHref = new Map();
  for (const r of report.results || []) {
    const key = r.href || 'unknown';
    byHref.set(key, (byHref.get(key) || 0) + 1);
  }
  const topHrefIssues = Array.from(byHref.entries())
    .map(([href, count]) => ({ href, count }))
    .sort((a, b) => b.count - a.count)
    .slice(0, 50);
  return {
    generatedAt: new Date().toISOString(),
    totalBroken,
    topHrefIssues,
  };
}

(function main() {
  const ROOT = process.cwd();
  const srcDir = path.join(ROOT, 'data', 'reports', 'link-sentinel');
  const latest = findLatestReport(srcDir);
  if (!latest) {
    console.log('No link sentinel reports found.');
    process.exit(0);
  }
  const raw = JSON.parse(fs.readFileSync(latest, 'utf8'));

  const publicReportsDir = path.join(ROOT, 'public', 'reports', 'link-sentinel');
  const publicAutomationDir = path.join(ROOT, 'public', 'automation');
  ensureDir(publicReportsDir);
  ensureDir(publicAutomationDir);

  const latestOut = path.join(publicReportsDir, 'latest.json');
  fs.writeFileSync(latestOut, JSON.stringify(raw, null, 2), 'utf8');

  const summary = summarizeReport(raw);
  const summaryOut = path.join(publicReportsDir, 'summary.json');
  fs.writeFileSync(summaryOut, JSON.stringify(summary, null, 2), 'utf8');

  // Convenience mirror in automation folder for easy consumption
  fs.writeFileSync(path.join(publicAutomationDir, 'link-sentinel-latest.json'), JSON.stringify(raw, null, 2), 'utf8');
  fs.writeFileSync(path.join(publicAutomationDir, 'link-sentinel-summary.json'), JSON.stringify(summary, null, 2), 'utf8');

  console.log(`Wrote latest and summary to ${publicReportsDir}`);
})();