#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

function* walkFiles(startDir) {
  if (!fs.existsSync(startDir)) return;
  const stack = [startDir];
  while (stack.length) {
    const current = stack.pop();
    let entries = [];
    try { entries = fs.readdirSync(current, { withFileTypes: true }); } catch { continue; }
    for (const entry of entries) {
      const full = path.join(current, entry.name);
      if (entry.isDirectory()) {
        if (entry.name === 'node_modules' || entry.name.startsWith('.')) continue;
        stack.push(full);
      } else if (entry.isFile()) {
        yield full;
      }
    }
  }
}

function isMedia(file) {
  const exts = ['.png', '.jpg', '.jpeg', '.gif', '.webp', '.avif', '.svg', '.mp4', '.webm', '.mov'];
  return exts.includes(path.extname(file).toLowerCase());
}

async function main() {
  const publicDir = path.join(process.cwd(), 'public');
  const findings = [];
  const thresholdBytes = parseInt(process.env.PERF_ASSET_THRESHOLD_BYTES || '700000', 10); // ~683KB
  for (const file of walkFiles(publicDir)) {
    if (!isMedia(file)) continue;
    let size = 0;
    try { size = fs.statSync(file).size; } catch { continue; }
    if (size >= thresholdBytes) {
      findings.push({ file: path.relative(process.cwd(), file), sizeBytes: size });
    }
  }
  findings.sort((a, b) => b.sizeBytes - a.sizeBytes);
  const report = {
    generatedAt: new Date().toISOString(),
    thresholdBytes,
    totalLargeAssets: findings.length,
    findings,
    recommendation: 'Consider compressing large assets, using AVIF/WebP, or lazy-loading where appropriate.'
  };
  const outDir = path.join(process.cwd(), 'data', 'reports', 'performance-assets');
  fs.mkdirSync(outDir, { recursive: true });
  const outFile = path.join(outDir, `perf-assets-${Date.now()}.json`);
  fs.writeFileSync(outFile, JSON.stringify(report, null, 2));
  fs.writeFileSync(path.join(outDir, 'latest.json'), JSON.stringify(report, null, 2));
  console.log(`[perf-asset-watcher] largeAssets=${findings.length} report=${outFile}`);
}

main().catch((e) => { console.error(e); process.exit(1); });