const fs = require('fs');
const path = require('path');
const glob = require('glob');

function ensureDir(dirPath) {
  if (!fs.existsSync(dirPath)) {
    fs.mkdirSync(dirPath, { recursive: true });
  }
}

function getAllAssetFiles(publicDir) {
  const patterns = [
    '**/*.{png,jpg,jpeg,gif,svg,webp,ico,mp4,webm,ogg,mp3,woff,woff2,ttf,otf}',
  ];
  const files = patterns.flatMap((p) => glob.sync(p, { cwd: publicDir, nodir: true }));
  return files.map((rel) => ({
    absolute: path.join(publicDir, rel),
    relative: rel.replace(/\\/g, '/'),
    sizeBytes: fs.statSync(path.join(publicDir, rel)).size,
  }));
}

function getAllCodeFiles(rootDir) {
  const include = [
    'pages/**/*.{js,jsx,ts,tsx}',
    'components/**/*.{js,jsx,ts,tsx}',
    'styles/**/*.{css,scss}',
    'public/**/*.{html,xml,json}',
  ];
  return include.flatMap((p) => glob.sync(p, { cwd: rootDir, nodir: true })).map((rel) => path.join(rootDir, rel));
}

function isAssetReferenced(asset, codeFiles) {
  const filename = path.basename(asset.relative);
  const webPath = '/' + asset.relative.replace(/\\/g, '/');
  // Common reference candidates: exact web path, filename only, or src="..."
  const candidates = new Set([
    filename,
    webPath,
    encodeURI(webPath),
  ]);
  for (const file of codeFiles) {
    try {
      const content = fs.readFileSync(file, 'utf8');
      for (const cand of candidates) {
        if (content.includes(cand)) return true;
      }
    } catch {}
  }
  return false;
}

function main() {
  const repoRoot = process.cwd();
  const publicDir = path.join(repoRoot, 'public');
  if (!fs.existsSync(publicDir)) {
    console.log('No public directory found; skipping.');
    return;
  }
  const reportDir = path.join(repoRoot, 'data', 'reports');
  ensureDir(reportDir);

  const assets = getAllAssetFiles(publicDir);
  const codeFiles = getAllCodeFiles(repoRoot);

  const unused = [];
  const referenced = [];

  for (const asset of assets) {
    const ref = isAssetReferenced(asset, codeFiles);
    (ref ? referenced : unused).push({
      path: asset.relative,
      sizeBytes: asset.sizeBytes,
      sizeKb: Math.round(asset.sizeBytes / 10.24) / 100,
    });
  }

  // Sort by size desc for quick wins
  unused.sort((a, b) => b.sizeBytes - a.sizeBytes);

  const report = {
    generatedAt: new Date().toISOString(),
    totalAssets: assets.length,
    referencedCount: referenced.length,
    unusedCount: unused.length,
    unusedAssets: unused,
    topUnusedBySize: unused.slice(0, 50),
  };

  const outPath = path.join(reportDir, 'unused_assets.json');
  fs.writeFileSync(outPath, JSON.stringify(report, null, 2));
  console.log(`Wrote unused assets report: ${outPath}`);
}

if (require.main === module) {
  main();
}