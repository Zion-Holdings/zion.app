#!/usr/bin/env node
const fs = require('fs');
const path = require('path');

function getFileSizes(dir) {
  const results = [];
  const entries = fs.existsSync(dir) ? fs.readdirSync(dir, { withFileTypes: true }) : [];
  for (const e of entries) {
    const p = path.join(dir, e.name);
    if (e.isDirectory()) results.push(...getFileSizes(p));
    else results.push({ path: p, size: fs.statSync(p).size });
  }
  return results;
}

(function main() {
  const buildDir = path.join(process.cwd(), '.next');
  if (!fs.existsSync(buildDir)) {
    console.log('[bundle-report] .next not found; run after build');
    process.exit(0);
  }
  const sizes = getFileSizes(buildDir);
  const total = sizes.reduce((a, b) => a + b.size, 0);
  const top = sizes
    .filter((f) => /\.(js|css)$/.test(f.path))
    .sort((a, b) => b.size - a.size)
    .slice(0, 30)
    .map((f) => ({ file: path.relative(process.cwd(), f.path), size: f.size }));

  const outDir = path.join(process.cwd(), 'data', 'perf');
  fs.mkdirSync(outDir, { recursive: true });
  const outPath = path.join(outDir, 'bundles.json');
  fs.writeFileSync(outPath, JSON.stringify({ generatedAt: new Date().toISOString(), totalBytes: total, topFiles: top }, null, 2));
  console.log('[bundle-report] wrote', outPath);
})();