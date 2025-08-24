#!/usr/bin/env node
const fs = require('fs');
const path = require('path');

function listFilesRecursively(startDir, includeExtensions = ['.md', '.mdx', '.js', '.jsx', '.ts', '.tsx', '.json'], excludeDirs = ['.git', 'node_modules', '.next', 'out', 'public/automation']) {
  const results = [];
  function walk(dir) {
    let entries = [];
    try { entries = fs.readdirSync(dir, { withFileTypes: true }); } catch { return; }
    for (const entry of entries) {
      const full = path.join(dir, entry.name);
      const rel = path.relative(process.cwd(), full);
      if (entry.isDirectory()) {
        if (excludeDirs.some(x => rel === x || rel.startsWith(x + path.sep))) continue;
        walk(full);
      } else {
        if (includeExtensions.includes(path.extname(entry.name))) {
          results.push(full);
        }
      }
    }
  }
  walk(startDir);
  return results;
}

function ensureDir(filePath) {
  const dir = path.dirname(filePath);
  fs.mkdirSync(dir, { recursive: true });
}

function daysSince(date) {
  const ms = Date.now() - date.getTime();
  return Math.floor(ms / (1000 * 60 * 60 * 24));
}

function main() {
  const roots = [
    path.join(process.cwd(), 'pages'),
    path.join(process.cwd(), 'docs'),
    path.join(process.cwd(), 'components')
  ];
  const files = roots.flatMap(root => listFilesRecursively(root));
  const items = [];
  for (const file of files) {
    try {
      const stat = fs.statSync(file);
      const lastModified = stat.mtime;
      const d = daysSince(lastModified);
      items.push({
        file: path.relative(process.cwd(), file),
        sizeBytes: stat.size,
        lastModifiedIso: lastModified.toISOString(),
        daysSinceModified: d
      });
    } catch {}
  }
  items.sort((a, b) => b.daysSinceModified - a.daysSinceModified);

  const summary = {
    generatedAt: new Date().toISOString(),
    totalFiles: items.length,
    staleThresholdDays: 60,
    counts: {
      gt180: items.filter(x => x.daysSinceModified >= 180).length,
      gt120: items.filter(x => x.daysSinceModified >= 120 && x.daysSinceModified < 180).length,
      gt60: items.filter(x => x.daysSinceModified >= 60 && x.daysSinceModified < 120).length,
      lt60: items.filter(x => x.daysSinceModified < 60).length
    }
  };

  const jsonPath = path.join(process.cwd(), 'public', 'automation', 'content-freshness.json');
  ensureDir(jsonPath);
  fs.writeFileSync(jsonPath, JSON.stringify({ summary, items }, null, 2));

  const top = items.slice(0, 50);
  const mdLines = [];
  mdLines.push('# Content Freshness Report');
  mdLines.push('');
  mdLines.push(`Generated: ${summary.generatedAt}`);
  mdLines.push('');
  mdLines.push('| File | Days Since Modified | Last Modified | Size (bytes) |');
  mdLines.push('|---|---:|---|---:|');
  for (const it of top) {
    mdLines.push(`| ${it.file} | ${it.daysSinceModified} | ${it.lastModifiedIso} | ${it.sizeBytes} |`);
  }
  const mdPath = path.join(process.cwd(), 'docs', 'CONTENT_FRESHNESS.md');
  ensureDir(mdPath);
  fs.writeFileSync(mdPath, mdLines.join('\n'));

  // Also write a small summary stamp for quick diffs
  const stampPath = path.join(process.cwd(), 'automation', 'logs', 'content-freshness-stamp.txt');
  ensureDir(stampPath);
  fs.writeFileSync(stampPath, `updated ${new Date().toISOString()}\n`);

  console.log(`[content-freshness] Wrote ${jsonPath} and ${mdPath}.`);
}

if (require.main === module) {
  try { main(); process.exit(0); } catch (e) { console.error(e); process.exit(1); }
}