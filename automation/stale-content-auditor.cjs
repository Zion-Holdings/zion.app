#!/usr/bin/env node

'use strict';

const fs = require('fs');
const path = require('path');
<<<<<<< HEAD
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
=======

const ROOT = process.cwd();
const OUTPUT_JSON = path.join(ROOT, 'public', 'reports', 'stale-content.json');
const OUTPUT_MD = path.join(ROOT, 'docs', 'stale-content-report.md');

const SCAN_DIRS = ['pages', 'components', 'styles', 'data', 'public'];
const INCLUDE_EXTS = new Set([
  '.js', '.jsx', '.ts', '.tsx', '.css', '.scss', '.md', '.mdx', '.json',
  '.png', '.jpg', '.jpeg', '.gif', '.svg', '.webp'
]);

const DAYS_STALE_HARD = 180;
const DAYS_STALE_SOFT = 90;

function ensureDir(filePath) {
  const dir = path.dirname(filePath);
  fs.mkdirSync(dir, { recursive: true });
}

function listFiles(dir) {
  const results = [];
  const root = path.join(ROOT, dir);
  const stack = [root];
  while (stack.length) {
    const current = stack.pop();
    let entries = [];
    try { entries = fs.readdirSync(current, { withFileTypes: true }); } catch { continue; }
    for (const e of entries) {
      const abs = path.join(current, e.name);
      const rel = path.relative(ROOT, abs);
      if (rel.includes('/.')) continue; // skip dot dirs
      if (e.isDirectory()) { stack.push(abs); continue; }
      const ext = path.extname(e.name).toLowerCase();
      if (INCLUDE_EXTS.size && !INCLUDE_EXTS.has(ext)) continue;
      results.push(rel);
    }
  }
  return results;
}

function daysSince(tsMs) {
  const ms = Date.now() - tsMs;
  return Math.floor(ms / (1000 * 60 * 60 * 24));
}

function classify(relPath, ageDays) {
  const ext = path.extname(relPath).toLowerCase();
  const isCode = ['.js', '.jsx', '.ts', '.tsx'].includes(ext);
  const isContent = ['.md', '.mdx', '.json'].includes(ext);
  const isAsset = !isCode && !isContent;
  let level = 'fresh';
  if (ageDays >= DAYS_STALE_HARD) level = 'stale-hard';
  else if (ageDays >= DAYS_STALE_SOFT && (isCode || isContent)) level = 'stale-soft';
  return { level, kind: isCode ? 'code' : isContent ? 'content' : 'asset' };
}

function generateReports() {
  const items = [];
  for (const dir of SCAN_DIRS) {
    const files = listFiles(dir);
    for (const rel of files) {
      let stat;
      try { stat = fs.statSync(path.join(ROOT, rel)); } catch { continue; }
      const age = daysSince(stat.mtimeMs || stat.ctimeMs || 0);
      const { level, kind } = classify(rel, age);
      if (level === 'fresh') continue;
      items.push({ path: rel, kind, ageDays: age, level });
    }
  }
  items.sort((a, b) => b.ageDays - a.ageDays);
>>>>>>> origin/automation/deploy-autonomous-cloud-automations

  const summary = {
    generatedAt: new Date().toISOString(),
    totals: {
<<<<<<< HEAD
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
=======
      count: items.length,
      hard: items.filter(i => i.level === 'stale-hard').length,
      soft: items.filter(i => i.level === 'stale-soft').length
    }
  };

  ensureDir(OUTPUT_JSON);
  fs.writeFileSync(OUTPUT_JSON, JSON.stringify({ summary, items }, null, 2));

  // Markdown
  ensureDir(OUTPUT_MD);
  const lines = [];
  lines.push('# Stale Content Report');
  lines.push('');
  lines.push(`Generated: ${summary.generatedAt}`);
  lines.push('');
  lines.push(`Totals: ${summary.totals.count} items (hard: ${summary.totals.hard}, soft: ${summary.totals.soft})`);
  lines.push('');
  lines.push('| Age (days) | Level | Kind | Path |');
  lines.push('|-----------:|:------|:-----|:-----|');
  for (const it of items.slice(0, 500)) {
    lines.push(`| ${it.ageDays} | ${it.level} | ${it.kind} | ${it.path} |`);
  }
  fs.writeFileSync(OUTPUT_MD, lines.join('\n'));

  console.log(`Wrote ${OUTPUT_JSON} and ${OUTPUT_MD}`);
}

(function main() {
  generateReports();
>>>>>>> origin/automation/deploy-autonomous-cloud-automations
})();