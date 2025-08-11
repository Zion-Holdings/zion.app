#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

function ensureDir(dirPath) {
  if (!fs.existsSync(dirPath)) {
    fs.mkdirSync(dirPath, { recursive: true });
  }
}

function scanDirForLargeFiles(startDir, sizeThresholdBytes, exts) {
  const results = [];
  function walk(dir) {
    const entries = fs.existsSync(dir) ? fs.readdirSync(dir, { withFileTypes: true }) : [];
    for (const entry of entries) {
      const full = path.join(dir, entry.name);
      if (entry.isDirectory()) {
        walk(full);
      } else {
        const ext = path.extname(entry.name).toLowerCase();
        if (!exts.length || exts.includes(ext)) {
          try {
            const stat = fs.statSync(full);
            if (stat.size >= sizeThresholdBytes) {
              results.push({ path: full, size: stat.size });
            }
          } catch {}
        }
      }
    }
  }
  walk(startDir);
  return results.sort((a, b) => b.size - a.size);
}

function human(bytes) {
  const units = ['B', 'KB', 'MB', 'GB'];
  let i = 0, n = bytes;
  while (n >= 1024 && i < units.length - 1) { n /= 1024; i++; }
  return `${n.toFixed(1)} ${units[i]}`;
}

function main() {
  const repoRoot = '/workspace';
  const publicDir = path.join(repoRoot, 'public');
  const reportDir = path.join(repoRoot, 'public', 'reports');
  const reportPath = path.join(reportDir, 'perf-budget.txt');

  const threshold = Number(process.env.PERF_BUDGET_BYTES || 500 * 1024); // 500KB default
  const trackedExts = ['.png', '.jpg', '.jpeg', '.gif', '.webp', '.svg', '.mp4', '.mov'];

  const large = scanDirForLargeFiles(publicDir, threshold, trackedExts);

  ensureDir(reportDir);
  const lines = [];
  lines.push('Performance Budget Report');
  lines.push(`Date: ${new Date().toISOString()}`);
  lines.push(`Threshold: ${human(threshold)} per asset`);
  lines.push('');

  if (!fs.existsSync(publicDir)) {
    lines.push('No public directory found.');
  } else if (large.length === 0) {
    lines.push('All tracked assets are within the budget.');
  } else {
    lines.push('Oversized assets:');
    for (const item of large) {
      lines.push(`- ${path.relative(repoRoot, item.path)} — ${human(item.size)}`);
    }
  }

  fs.writeFileSync(reportPath, lines.join('\n') + '\n', 'utf8');
  console.log('Performance budget scan complete.');
}

if (require.main === module) {
  main();
}