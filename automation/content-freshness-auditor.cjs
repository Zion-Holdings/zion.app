const fs = require('fs');
const path = require('path');
const fse = require('fs-extra');
const glob = require('glob');

function getFiles(patterns, ignore = []) {
  const files = new Set();
  for (const pattern of patterns) {
    for (const file of glob.sync(pattern, { ignore, nodir: true })) {
      files.add(path.normalize(file));
    }
  }
  return Array.from(files);
}

function filePathToRoute(filePath) {
  const normalized = filePath.replace(/\\/g, '/');
  if (normalized.startsWith('pages/')) {
    const rel = normalized.replace(/^pages\//, '').replace(/\.(tsx|ts|jsx|js)$/, '');
    if (rel === '_app' || rel === '_document' || rel.startsWith('api/')) return null;
    const route = '/' + rel.replace(/index$/i, '');
    return route === '/' ? route : route.replace(/\/$/, '');
  }
  if (normalized.startsWith('docs/')) {
    return '/docs/' + normalized.replace(/^docs\//, '').replace(/\.(md|mdx)$/, '');
  }
  if (normalized.startsWith('data/')) {
    return '/data/' + normalized.replace(/^data\//, '').replace(/\.(md|mdx|json|csv|yml|yaml)$/, '');
  }
  return null;
}

function classifyAgeDays(ageDays) {
  if (ageDays <= 1) return 'hot';
  if (ageDays <= 7) return 'warm';
  if (ageDays <= 30) return 'stale';
  return 'cold';
}

function main() {
  const cwd = process.cwd();
  const startTime = Date.now();
  const patterns = [
    'pages/**/*.{tsx,ts,jsx,js}',
    'docs/**/*.{md,mdx}',
    'data/**/*.{md,mdx,json,csv,yml,yaml}',
  ];
  const ignore = [
    '**/node_modules/**',
    '**/.git/**',
    'pages/_app.tsx',
    'pages/_document.tsx',
  ];

  const files = getFiles(patterns, ignore);

  const items = [];
  for (const file of files) {
    try {
      const stat = fs.statSync(file);
      if (!stat.isFile()) continue;
      const route = filePathToRoute(file);
      if (route === null) continue;
      const modifiedAt = stat.mtime;
      const ageDays = Math.max(0, (Date.now() - modifiedAt.getTime()) / (1000 * 60 * 60 * 24));
      items.push({
        file,
        route,
        modifiedAt: modifiedAt.toISOString(),
        ageDays: Number(ageDays.toFixed(2)),
        status: classifyAgeDays(ageDays),
      });
    } catch (e) {
      // ignore
    }
  }

  items.sort((a, b) => b.ageDays - a.ageDays);
  const staleTop = items.slice(0, 30);

  const freshness = {
    generatedAt: new Date().toISOString(),
    totalFiles: items.length,
    summary: {
      hot: items.filter(i => i.status === 'hot').length,
      warm: items.filter(i => i.status === 'warm').length,
      stale: items.filter(i => i.status === 'stale').length,
      cold: items.filter(i => i.status === 'cold').length,
    },
    stalestTop30: staleTop,
  };

  const outDir = path.resolve(cwd, 'public', 'automation');
  fse.ensureDirSync(outDir);
  const outFile = path.join(outDir, 'content-freshness-report.json');
  fs.writeFileSync(outFile, JSON.stringify(freshness, null, 2));

  console.log('Content Freshness Auditor');
  console.log('- files scanned:', items.length);
  console.log('- summary:', JSON.stringify(freshness.summary));
  console.log('- output:', path.relative(cwd, outFile));
}

if (require.main === module) {
  try {
    main();
    process.exit(0);
  } catch (err) {
    console.error('content-freshness-auditor failed:', err);
    process.exit(1);
  }
}