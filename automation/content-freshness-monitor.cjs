#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const glob = require('glob');

function ensureDir(dirPath) {
  if (!fs.existsSync(dirPath)) {
    fs.mkdirSync(dirPath, { recursive: true });
  }
}

function loadFiles(patterns, cwd) {
  const files = new Set();
  for (const pattern of patterns) {
    for (const file of glob.sync(pattern, { cwd, nodir: true, ignore: [
      '**/node_modules/**',
      '**/.next/**',
      '**/.git/**',
      '**/public/**',
      '**/automation/logs/**'
    ] })) {
      files.add(path.join(cwd, file));
    }
  }
  return Array.from(files);
}

function classifyAge(days) {
  if (days <= 14) return 'fresh';
  if (days <= 30) return 'warming';
  if (days <= 90) return 'stale';
  return 'very_stale';
}

function formatDays(days) {
  return `${days.toFixed(1)}d`;
}

function generateMarkdownReport(summary) {
  const lines = [];
  lines.push(`# Content Freshness Report`);
  lines.push('');
  lines.push(`Generated: ${new Date().toISOString()}`);
  lines.push('');
  lines.push(`- Total files scanned: ${summary.totalFiles}`);
  lines.push(`- Average age: ${formatDays(summary.averageAgeDays)}`);
  lines.push(`- Fresh: ${summary.counts.fresh}`);
  lines.push(`- Warming: ${summary.counts.warming}`);
  lines.push(`- Stale: ${summary.counts.stale}`);
  lines.push(`- Very Stale: ${summary.counts.very_stale}`);
  lines.push('');
  lines.push('## Top 30 Oldest Files');
  lines.push('');
  lines.push('| Age | Category | File | Last Modified |');
  lines.push('|-----|----------|------|---------------|');
  for (const item of summary.topOldest.slice(0, 30)) {
    lines.push(`| ${formatDays(item.ageDays)} | ${item.category} | ${item.relativePath} | ${item.mtimeIso} |`);
  }
  lines.push('');
  lines.push('> Categories: fresh (<=14d), warming (<=30d), stale (<=90d), very_stale (>90d).');
  return lines.join('\n');
}

(function main() {
  const cwd = process.cwd();
  const targets = [
    'pages/**/*.{md,mdx,js,jsx,ts,tsx}',
    'docs/**/*.{md,mdx,js,jsx,ts,tsx}',
    'components/**/*.{md,mdx,js,jsx,ts,tsx}'
  ];

  const files = loadFiles(targets, cwd);
  const now = Date.now();

  const entries = files.map(fp => {
    const stat = fs.statSync(fp);
    const ageMs = Math.max(0, now - stat.mtimeMs);
    const ageDays = ageMs / (1000 * 60 * 60 * 24);
    const rel = path.relative(cwd, fp);
    const category = classifyAge(ageDays);
    return {
      path: fp,
      relativePath: rel,
      mtimeIso: new Date(stat.mtimeMs).toISOString(),
      ageDays,
      category
    };
  }).sort((a, b) => b.ageDays - a.ageDays);

  const counts = entries.reduce((acc, e) => {
    acc[e.category] = (acc[e.category] || 0) + 1;
    return acc;
  }, { fresh: 0, warming: 0, stale: 0, very_stale: 0 });

  const avgAge = entries.length ? (entries.reduce((s, e) => s + e.ageDays, 0) / entries.length) : 0;

  const summary = {
    generatedAt: new Date().toISOString(),
    totalFiles: entries.length,
    averageAgeDays: Number(avgAge.toFixed(2)),
    counts,
    topOldest: entries.slice(0, 100)
  };

  // Write outputs
  ensureDir(path.join(cwd, 'data'));
  ensureDir(path.join(cwd, 'docs'));
  const jsonPath = path.join(cwd, 'data', 'content-freshness.json');
  const mdPath = path.join(cwd, 'docs', 'content-freshness-report.md');
  fs.writeFileSync(jsonPath, JSON.stringify(summary, null, 2));
  fs.writeFileSync(mdPath, generateMarkdownReport(summary));

  console.log(`Wrote ${jsonPath}`);
  console.log(`Wrote ${mdPath}`);
})();