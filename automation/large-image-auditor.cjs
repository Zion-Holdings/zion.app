const fs = require('fs');
const path = require('path');

const IMAGE_EXTENSIONS = new Set(['.png', '.jpg', '.jpeg', '.gif', '.webp', '.svg', '.avif']);
const DEFAULT_THRESHOLD_KB = parseInt(process.env.LARGE_IMAGE_THRESHOLD_KB || '300', 10);

function walkDir(dirPath) {
  const results = [];
  for (const entry of fs.readdirSync(dirPath, { withFileTypes: true })) {
    const full = path.join(dirPath, entry.name);
    if (entry.isDirectory()) {
      results.push(...walkDir(full));
    } else {
      results.push(full);
    }
  }
  return results;
}

function isImage(filePath) {
  const ext = path.extname(filePath).toLowerCase();
  return IMAGE_EXTENSIONS.has(ext);
}

function ensureDir(dirPath) {
  fs.mkdirSync(dirPath, { recursive: true });
}

function humanKB(bytes) {
  return Math.round((bytes / 1024) * 10) / 10;
}

function main() {
  const repoRoot = path.resolve(__dirname, '..');
  const publicDir = path.resolve(repoRoot, 'public');
  const outDir = path.resolve(repoRoot, 'public', 'automation');
  const outFile = path.join(outDir, 'large-images.json');

  ensureDir(outDir);

  const thresholdKB = DEFAULT_THRESHOLD_KB;

  const files = fs.existsSync(publicDir) ? walkDir(publicDir) : [];
  const largeImages = [];
  for (const file of files) {
    if (!isImage(file)) continue;
    const stat = fs.statSync(file);
    const sizeKB = humanKB(stat.size);
    if (sizeKB >= thresholdKB) {
      largeImages.push({
        path: path.relative(repoRoot, file),
        sizeKB,
      });
    }
  }

  largeImages.sort((a, b) => b.sizeKB - a.sizeKB);

  const report = {
    generatedAt: new Date().toISOString(),
    thresholdKB,
    count: largeImages.length,
    items: largeImages,
  };

  fs.writeFileSync(outFile, JSON.stringify(report, null, 2) + '\n');
  process.stdout.write(`Wrote ${largeImages.length} large images to ${path.relative(repoRoot, outFile)}\n`);
}

if (require.main === module) {
  main();
}