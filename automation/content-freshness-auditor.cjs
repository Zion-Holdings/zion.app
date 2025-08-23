#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const glob = require('glob');

function listFiles(patterns, cwd) {
  const files = new Set();
  for (const pattern of patterns) {
    for (const file of glob.sync(pattern, {
      cwd,
      nodir: true,
      ignore: ['**/node_modules/**', '**/.next/**', '**/out/**', '**/.git/**'],
    })) {
      files.add(path.resolve(cwd, file));
    }
  }
  return Array.from(files);
}

function daysBetween(a, b) {
  const ms = Math.abs(a.getTime() - b.getTime());
  return Math.floor(ms / (1000 * 60 * 60 * 24));
}

function safeReadJson(absolutePath, fallback = null) {
  try {
    return JSON.parse(fs.readFileSync(absolutePath, 'utf8'));
  } catch {
    return fallback;
  }
}

function generateReports() {
  const root = path.resolve(__dirname, '..');
  const now = new Date();

  const pageFiles = listFiles(['pages/**/*.{md,mdx,js,jsx,ts,tsx}'], root);
  const docFiles = listFiles(['docs/**/*.{md,mdx}'], root);

  const allFiles = [...pageFiles, ...docFiles];

  const items = allFiles.map((absolutePath) => {
    const stat = fs.statSync(absolutePath);
    const mtime = stat.mtime || stat.ctime || new Date(0);
    const daysOld = daysBetween(now, new Date(mtime));
    return {
      file: path.relative(root, absolutePath),
      lastModifiedIso: new Date(mtime).toISOString(),
      daysOld,
      stale: daysOld >= 30,
      bucket: daysOld >= 180 ? 'very-stale' : daysOld >= 90 ? 'stale' : daysOld >= 30 ? 'aging' : 'fresh',
    };
  });

  items.sort((a, b) => b.daysOld - a.daysOld);

  const topStale = items.filter((x) => x.stale).slice(0, 50);
  const summary = {
    generatedAtUtc: now.toISOString(),
    scanned: {
      pages: pageFiles.length,
      docs: docFiles.length,
      total: allFiles.length,
    },
    distribution: items.reduce(
      (acc, cur) => {
        acc[cur.bucket] += 1;
        return acc;
      },
      { fresh: 0, aging: 0, stale: 0, 'very-stale': 0 }
    ),
    topStale,
  };

  const publicDir = path.join(root, 'public', 'automation');
  fs.mkdirSync(publicDir, { recursive: true });
  fs.writeFileSync(
    path.join(publicDir, 'content-freshness.json'),
    JSON.stringify({ ...summary, items }, null, 2)
  );

  const md = [];
  md.push('# Content Freshness Report');
  md.push('');
  md.push(`Generated: ${now.toISOString()}`);
  md.push('');
  md.push(`Scanned files: ${allFiles.length} (pages: ${pageFiles.length}, docs: ${docFiles.length})`);
  md.push('');
  md.push('## Stale Content (top 50)');
  md.push('');
  for (const row of topStale) {
    md.push(`- ${row.file} — ${row.daysOld} days old (last modified ${row.lastModifiedIso})`);
  }
  md.push('');
  md.push('## Distribution');
  md.push('');
  md.push(`- fresh: ${summary.distribution.fresh}`);
  md.push(`- aging: ${summary.distribution.aging}`);
  md.push(`- stale: ${summary.distribution.stale}`);
  md.push(`- very-stale: ${summary.distribution['very-stale']}`);

  const docsDir = path.join(root, 'docs');
  fs.mkdirSync(docsDir, { recursive: true });
  fs.writeFileSync(path.join(docsDir, 'CONTENT_FRESHNESS_REPORT.md'), md.join('\n'));

  // Optionally register in a content registry if present
  const registryPath = path.join(publicDir, 'content-registry.json');
  const registry = safeReadJson(registryPath, { datasets: [] });
  const entry = {
    key: 'content-freshness',
    title: 'Content Freshness Report',
    href: '/automation/content-freshness.json',
    updatedAtUtc: now.toISOString(),
  };
  const existingIndex = Array.isArray(registry.datasets)
    ? registry.datasets.findIndex((d) => d.key === entry.key)
    : -1;
  if (existingIndex >= 0) registry.datasets[existingIndex] = entry; else registry.datasets.push(entry);
  fs.writeFileSync(registryPath, JSON.stringify(registry, null, 2));

  console.log(`Content freshness report generated. Total files: ${allFiles.length}. Stale: ${topStale.length}`);
}

if (require.main === module) {
  try {
    generateReports();
  } catch (err) {
    console.error('Failed to generate content freshness report:', err);
    process.exit(1);
  }
}