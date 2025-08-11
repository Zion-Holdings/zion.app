#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const glob = require('glob');

function collectFiles(root, patterns) {
  const results = [];
  for (const p of patterns) {
    const matches = glob.sync(p, { cwd: root, nodir: true });
    for (const rel of matches) {
      const abs = path.join(root, rel);
      try {
        const stat = fs.statSync(abs);
        results.push({ file: rel.replace(/\\/g, '/'), mtimeMs: stat.mtimeMs, size: stat.size });
      } catch {}
    }
  }
  return results;
}

function main() {
  const root = path.resolve(__dirname, '..');
  const outDir = path.join(root, 'public', 'automation');
  const outPath = path.join(outDir, 'stale-content.json');
  fs.mkdirSync(outDir, { recursive: true });

  const patterns = [
    'pages/**/*.{js,jsx,ts,tsx,md,mdx}',
    'components/**/*.{js,jsx,ts,tsx}',
    'docs/**/*.{md,mdx}',
  ];
  const files = collectFiles(root, patterns);

  const now = Date.now();
  const days = (ms) => Math.round(ms / (1000 * 60 * 60 * 24));
  const annotated = files.map((f) => ({
    file: f.file,
    ageDays: days(now - f.mtimeMs),
    size: f.size,
  }));

  annotated.sort((a, b) => b.ageDays - a.ageDays || b.size - a.size);
  const thresholdDays = Number(process.env.STALE_THRESHOLD_DAYS || 30);
  const stale = annotated.filter((f) => f.ageDays >= thresholdDays).slice(0, 200);

  const report = {
    generatedAt: new Date().toISOString(),
    thresholdDays,
    totalAnalyzed: files.length,
    staleCount: stale.length,
    sample: stale,
  };

  fs.writeFileSync(outPath, JSON.stringify(report, null, 2), 'utf8');
  console.log('Stale content report written to', outPath);
}

if (require.main === module) {
  main();
}