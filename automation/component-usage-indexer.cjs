#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

function walk(dir, filterExts = new Set(['.tsx', '.jsx', '.ts', '.js'])) {
  const out = [];
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  for (const e of entries) {
    if (e.name.startsWith('.')) continue;
    const abs = path.join(dir, e.name);
    if (e.isDirectory()) {
      out.push(...walk(abs, filterExts));
    } else {
      const ext = path.extname(e.name);
      if (filterExts.has(ext)) out.push(abs);
    }
  }
  return out;
}

function readFileSafe(p) {
  try { return fs.readFileSync(p, 'utf8'); } catch { return ''; }
}

function buildIndex() {
  const projectRoot = process.cwd();
  const componentsDir = path.join(projectRoot, 'components');
  const pagesDir = path.join(projectRoot, 'pages');

  const componentFiles = fs.existsSync(componentsDir) ? walk(componentsDir) : [];
  const searchFiles = [...(fs.existsSync(pagesDir) ? walk(pagesDir) : []), ...componentFiles];

  const components = componentFiles
    .filter(f => /\.(tsx|jsx)$/.test(f))
    .map(f => ({ name: path.basename(f).replace(/\.(tsx|jsx)$/i, ''), file: f }));

  const index = [];
  for (const comp of components) {
    const usage = { component: comp.name, definedAt: path.relative(projectRoot, comp.file), importHits: 0, jsxHits: 0, usedIn: [] };
    const importRegex = new RegExp(`from\\s+['\"][^'\"]*${comp.name}['\"];?`, 'g');
    const jsxRegex = new RegExp(`<${comp.name}(\s|>)`, 'g');

    for (const file of searchFiles) {
      const src = readFileSafe(file);
      let imports = 0, jsx = 0;
      if (src) {
        imports = (src.match(importRegex) || []).length;
        jsx = (src.match(jsxRegex) || []).length;
      }
      if (imports > 0 || jsx > 0) {
        usage.importHits += imports;
        usage.jsxHits += jsx;
        usage.usedIn.push(path.relative(projectRoot, file));
      }
    }
    usage.usageCount = usage.importHits + usage.jsxHits;
    index.push(usage);
  }

  index.sort((a, b) => b.usageCount - a.usageCount);
  const out = { generatedAt: new Date().toISOString(), totals: { components: index.length }, index };

  const outDir = path.join(projectRoot, 'public', 'automation');
  fs.mkdirSync(outDir, { recursive: true });
  const outPath = path.join(outDir, 'component-usage-index.json');
  fs.writeFileSync(outPath, JSON.stringify(out, null, 2));
  return outPath;
}

(function main() {
  const outPath = buildIndex();
  process.stdout.write(`Wrote component usage index: ${outPath}\n`);
})();