const fs = require('fs');
const path = require('path');

function ensureDir(dirPath) {
  if (!fs.existsSync(dirPath)) fs.mkdirSync(dirPath, { recursive: true });
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
  if (fs.existsSync(startDir)) walk(startDir);
  return results.sort();
}

function extractExports(source) {
  const names = new Set();
  const defaultMatch = source.match(/export\s+default\s+(function\s+([A-Za-z0-9_]+))?/);
  if (defaultMatch) {
    if (defaultMatch[2]) names.add(defaultMatch[2]);
    else names.add('default');
  }
  const named = source.matchAll(/export\s+(?:const|function|class)\s+([A-Za-z0-9_]+)/g);
  for (const m of named) names.add(m[1]);
  return Array.from(names);
}

function catalogFor(files) {
  return files.map(fp => {
    const rel = path.relative(process.cwd(), fp).replace(/\\/g, '/');
    const src = fs.readFileSync(fp, 'utf8');
    const exports = extractExports(src);
    return { file: rel, exports };
  });
}

(function main() {
  const outDir = path.resolve(process.cwd(), 'data', 'reports', 'components-catalog');
  ensureDir(outDir);
  const componentsDir = path.resolve(process.cwd(), 'components');
  const pagesDir = path.resolve(process.cwd(), 'pages');
  const files = [
    ...listFilesRecursively(componentsDir, ['.tsx', '.ts', '.jsx', '.js']),
    ...listFilesRecursively(pagesDir, ['.tsx', '.ts', '.jsx', '.js'])
  ];
  const items = catalogFor(files);
  const report = { generatedAt: new Date().toISOString(), total: items.length, items };
  const ts = new Date().toISOString().replace(/[:.]/g, '-');
  fs.writeFileSync(path.join(outDir, 'latest.json'), JSON.stringify(report, null, 2));
  fs.writeFileSync(path.join(outDir, `components-catalog-${ts}.json`), JSON.stringify(report, null, 2));
  console.log(`Components catalog generated with ${items.length} entries.`);
})();