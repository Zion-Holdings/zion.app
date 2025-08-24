#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

function walkDir(startDir, predicate) {
  const results = [];
  const stack = [startDir];
  while (stack.length) {
    const dir = stack.pop();
    if (!fs.existsSync(dir)) continue;
    for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
      const full = path.join(dir, entry.name);
      if (entry.isDirectory()) {
        stack.push(full);
      } else if (predicate(full)) {
        results.push(full);
      }
    }
  }
  return results;
}

function isAssetFile(fp) {
  return /(\.png|\.jpg|\.jpeg|\.webp|\.gif|\.svg|\.ico|\.mp4|\.webm|\.mp3|\.woff2?|\.ttf|\.otf)$/i.test(fp);
}

(function main() {
  const repoRoot = process.cwd();
  const publicDir = path.join(repoRoot, 'public');
  const files = walkDir(publicDir, isAssetFile);

  const items = files.map((absPath) => {
    const rel = path.relative(repoRoot, absPath).replace(/\\/g, '/');
    const stat = fs.statSync(absPath);
    return {
      path: rel,
      sizeBytes: stat.size,
      sizeKB: Math.round((stat.size / 1024) * 100) / 100,
      modifiedAt: stat.mtime.toISOString(),
      ext: path.extname(absPath).replace('.', '').toLowerCase(),
    };
  });

  const byExt = items.reduce((acc, it) => {
    acc[it.ext] = acc[it.ext] || { count: 0, totalBytes: 0 };
    acc[it.ext].count += 1;
    acc[it.ext].totalBytes += it.sizeBytes;
    return acc;
  }, {});

  const summary = {
    generatedAt: new Date().toISOString(),
    totals: {
      files: items.length,
      totalBytes: items.reduce((s, it) => s + it.sizeBytes, 0),
    },
    byExt,
    topLargest: [...items].sort((a, b) => b.sizeBytes - a.sizeBytes).slice(0, 25),
  };

  const outDir = path.join(repoRoot, 'public', 'automation');
  fs.mkdirSync(outDir, { recursive: true });
  fs.writeFileSync(path.join(outDir, 'asset-inventory.json'), JSON.stringify({ summary, items }, null, 2));
  console.log(`[asset-inventory] Wrote asset inventory for ${items.length} files.`);
})();