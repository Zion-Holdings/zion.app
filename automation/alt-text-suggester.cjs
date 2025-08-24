const fs = require('fs');
const path = require('path');

function ensureDir(dirPath) {
  if (!fs.existsSync(dirPath)) {
    fs.mkdirSync(dirPath, { recursive: true });
  }
}

function listFilesRecursively(startDir, exts) {
  const results = [];
  function walk(dir) {
    const entries = fs.readdirSync(dir, { withFileTypes: true });
    for (const entry of entries) {
      const abs = path.join(dir, entry.name);
      if (entry.isDirectory()) {
        walk(abs);
      } else {
        const ext = path.extname(entry.name).toLowerCase();
        if (exts.includes(ext)) results.push(abs);
      }
    }
  }
  walk(startDir);
  return results.sort();
}

function suggestAltFromFilename(filePath) {
  const rel = filePath.replace(/\\/g, '/');
  const filename = path.basename(rel, path.extname(rel));
  const parts = filename
    .replace(/[_-]+/g, ' ')
    .replace(/\s+/g, ' ')
    .trim()
    .split(' ')
    .filter(Boolean)
    .map(w => w.replace(/\d+/g, ''))
    .filter(Boolean);
  const cleaned = parts.join(' ').trim();
  const folder = path.basename(path.dirname(rel));
  const baseSuggestion = cleaned ? cleaned : folder;
  if (!baseSuggestion) return 'Decorative graphic';
  const words = baseSuggestion.split(' ').filter(Boolean);
  const cased = words.map((w, i) => (i === 0 ? w.charAt(0).toUpperCase() + w.slice(1) : w)).join(' ');
  return cased.length > 3 ? cased : `${cased} image`;
}

function buildReport(images, publicDir) {
  const items = images.map(abs => {
    const relFromRoot = path.relative(process.cwd(), abs).replace(/\\/g, '/');
    const relFromPublic = path.relative(publicDir, abs).replace(/\\/g, '/');
    return {
      file: relFromRoot,
      publicPath: `/${relFromPublic}`.replace(/\\/g, '/'),
      suggestion: suggestAltFromFilename(abs),
      bytes: fs.statSync(abs).size,
      updatedAt: new Date().toISOString(),
    };
  });
  return {
    generatedAt: new Date().toISOString(),
    total: items.length,
    images: items,
  };
}

(function main() {
  const publicDir = path.resolve(process.cwd(), 'public');
  const outDir = path.resolve(process.cwd(), 'data', 'reports', 'alt-text');
  ensureDir(outDir);

  if (!fs.existsSync(publicDir)) {
    console.error('No public/ directory found');
    process.exit(0);
  }

  const images = listFilesRecursively(publicDir, ['.jpg', '.jpeg', '.png', '.gif', '.svg', '.webp']);
  const report = buildReport(images, publicDir);
  const ts = new Date().toISOString().replace(/[:.]/g, '-');
  const latestPath = path.join(outDir, 'latest.json');
  const tsPath = path.join(outDir, `alt-text-${ts}.json`);
  fs.writeFileSync(latestPath, JSON.stringify(report, null, 2));
  fs.writeFileSync(tsPath, JSON.stringify(report, null, 2));
  console.log(`Alt-text suggestions written: ${latestPath}`);
})();