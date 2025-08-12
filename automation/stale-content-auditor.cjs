#!/usr/bin/env node

'use strict';

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

const ROOT = process.cwd();
const SCAN_DIRS = ['pages', 'components', 'docs'].map((p) => path.join(ROOT, p));
const REPORT_DIR = path.join(ROOT, 'data', 'reports', 'stale-content');
const MD_REPORT = path.join(ROOT, 'docs', 'stale-content-report.md');

function ensureDir(p) { if (!fs.existsSync(p)) fs.mkdirSync(p, { recursive: true }); }
ensureDir(REPORT_DIR);
ensureDir(path.dirname(MD_REPORT));

function listFiles(dir) {
  const out = [];
  if (!fs.existsSync(dir)) return out;
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  for (const e of entries) {
    const full = path.join(dir, e.name);
    if (e.isDirectory()) out.push(...listFiles(full));
    else if (/\.(md|mdx|tsx|ts|jsx|js)$/i.test(e.name)) out.push(full);
  }
  return out;
}

function getGitLastCommitEpochSeconds(filePath) {
  try {
    const out = execSync(`git log -1 --format=%ct -- ${JSON.stringify(path.relative(ROOT, filePath))}`, {
      stdio: ['ignore', 'pipe', 'ignore'],
      encoding: 'utf8',
      shell: true,
    }).trim();
    const n = Number(out);
    return Number.isFinite(n) && n > 0 ? n : null;
  } catch {
    return null;
  }
}

function getLastUpdatedEpochSeconds(filePath) {
  const gitTs = getGitLastCommitEpochSeconds(filePath);
  if (gitTs) return gitTs;
  try {
    const stat = fs.statSync(filePath);
    return Math.floor(stat.mtimeMs / 1000);
  } catch {
    return null;
  }
}

function classifyAge(days) {
  if (days <= 14) return 'fresh';
  if (days <= 60) return 'warning';
  return 'stale';
}

(function main() {
  const files = SCAN_DIRS.flatMap(listFiles);
  const now = Math.floor(Date.now() / 1000);
  const results = [];
  for (const file of files) {
    const updated = getLastUpdatedEpochSeconds(file);
    if (!updated) continue;
    const ageDays = Math.max(0, (now - updated) / 86400);
    results.push({
      file: path.relative(ROOT, file),
      lastUpdatedIso: new Date(updated * 1000).toISOString(),
      ageDays: Number(ageDays.toFixed(1)),
      status: classifyAge(ageDays),
    });
  }
  results.sort((a, b) => b.ageDays - a.ageDays);

  const summary = {
    generatedAt: new Date().toISOString(),
    totals: {
      files: results.length,
      fresh: results.filter((r) => r.status === 'fresh').length,
      warning: results.filter((r) => r.status === 'warning').length,
      stale: results.filter((r) => r.status === 'stale').length,
    },
    oldest: results.slice(0, 20),
  };

  const jsonPath = path.join(REPORT_DIR, `report-${new Date().toISOString().replace(/[:.]/g, '-')}.json`);
  fs.writeFileSync(jsonPath, JSON.stringify({ summary, results }, null, 2));
  console.log(`Stale Content report saved to ${jsonPath}`);

  const mdLines = [];
  mdLines.push('# Stale Content Report');
  mdLines.push('');
  mdLines.push(`Generated: ${summary.generatedAt}`);
  mdLines.push('');
  mdLines.push('- Total files: ' + summary.totals.files);
  mdLines.push('- Fresh: ' + summary.totals.fresh);
  mdLines.push('- Warning: ' + summary.totals.warning);
  mdLines.push('- Stale: ' + summary.totals.stale);
  mdLines.push('');
  mdLines.push('## Top 20 Stalest Files');
  mdLines.push('');
  for (const r of summary.oldest) {
    mdLines.push(`- ${r.file} — ${r.ageDays} days (updated ${r.lastUpdatedIso})`);
  }
  fs.writeFileSync(MD_REPORT, mdLines.join('\n'));
  console.log(`Markdown summary written to ${MD_REPORT}`);
})();