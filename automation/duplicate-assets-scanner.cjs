const fs = require('fs');
const path = require('path');
const crypto = require('crypto');

const ASSET_EXTENSIONS = new Set(['.png', '.jpg', '.jpeg', '.gif', '.webp', '.svg', '.avif', '.ico', '.bmp']);

function walkDir(dirPath) {
  const results = [];
  for (const entry of fs.readdirSync(dirPath, { withFileTypes: true })) {
    const full = path.join(dirPath, entry.name);
    if (entry.isDirectory()) results.push(...walkDir(full));
    else results.push(full);
  }
  return results;
}

function isAsset(filePath) {
  const ext = path.extname(filePath).toLowerCase();
  return ASSET_EXTENSIONS.has(ext);
}

function ensureDir(dirPath) {
  fs.mkdirSync(dirPath, { recursive: true });
}

function sha1File(filePath) {
  const hash = crypto.createHash('sha1');
  const buf = fs.readFileSync(filePath);
  hash.update(buf);
  return hash.digest('hex');
}

function main() {
  const repoRoot = path.resolve(__dirname, '..');
  const publicDir = path.resolve(repoRoot, 'public');
  const outDir = path.resolve(repoRoot, 'public', 'automation');
  const outFile = path.join(outDir, 'duplicate-assets.json');

  ensureDir(outDir);

  const files = fs.existsSync(publicDir) ? walkDir(publicDir) : [];
  const hashToFiles = new Map();

  for (const file of files) {
    if (!isAsset(file)) continue;
    try {
      const hash = sha1File(file);
      if (!hashToFiles.has(hash)) hashToFiles.set(hash, []);
      hashToFiles.get(hash).push(path.relative(repoRoot, file));
    } catch (e) {
      // skip unreadable files
    }
  }

  const duplicates = [];
  for (const [hash, paths] of hashToFiles.entries()) {
    if (paths.length > 1) {
      duplicates.push({ hash, files: paths });
    }
  }

  duplicates.sort((a, b) => b.files.length - a.files.length);

  const report = {
    generatedAt: new Date().toISOString(),
    groups: duplicates,
    totalDuplicateGroups: duplicates.length,
  };

  const summary = `Found ${duplicates.length} duplicate asset groups.`;

  ensureDir(outDir);
  fs.writeFileSync(outFile, JSON.stringify(report, null, 2) + '\n');
  process.stdout.write(`${summary} Report: ${path.relative(repoRoot, outFile)}\n`);
}

if (require.main === module) {
  main();
}