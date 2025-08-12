#!/usr/bin/env node

'use strict';

const fs = require('fs');
const path = require('path');

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

  const summary = {
    generatedAt: new Date().toISOString(),
    totals: {
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
})();