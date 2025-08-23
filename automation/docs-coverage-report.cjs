#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

function listFiles(dir, exts) {
  const out = [];
  function walk(d) {
    if (!fs.existsSync(d)) return;
    for (const entry of fs.readdirSync(d, { withFileTypes: true })) {
      const full = path.join(d, entry.name);
      if (entry.isDirectory()) {
        if (['.git', 'node_modules', '.next', 'dist', 'build', 'out', '.husky', '.github'].includes(entry.name)) continue;
        walk(full);
      } else if (exts.includes(path.extname(entry.name))) {
        out.push(full);
      }
    }
  }
  walk(dir);
  return out;
}

function toDocKey(filePath) {
  return path.basename(filePath).replace(/\.(tsx|ts|js|cjs|mjs|md|mdx)$/i, '').toLowerCase();
}

(function main() {
  try {
    const root = process.cwd();
    const codeDirs = ['pages', 'components', 'automation'];
    const docDirs = ['docs'];

    const codeFiles = codeDirs.flatMap(d => listFiles(path.join(root, d), ['.js', '.cjs', '.mjs', '.ts', '.tsx']));
    const docFiles = docDirs.flatMap(d => listFiles(path.join(root, d), ['.md', '.mdx']));

    const codeKeys = new Set(codeFiles.map(toDocKey));
    const docKeys = new Set(docFiles.map(toDocKey));

    let documented = 0;
    let undocumented = 0;
    const missing = [];

    for (const k of codeKeys) {
      if (docKeys.has(k)) documented += 1; else { undocumented += 1; missing.push(k); }
    }

    const coverage = codeKeys.size ? Math.round((documented / codeKeys.size) * 100) : 100;

    const report = {
      generatedAt: new Date().toISOString(),
      totals: {
        codeFiles: codeFiles.length,
        docFiles: docFiles.length,
        uniqueCodeKeys: codeKeys.size,
        uniqueDocKeys: docKeys.size
      },
      coveragePercent: coverage,
      documented,
      undocumented,
      missingExamples: missing.slice(0, 50)
    };

    const outDir = path.join(root, 'data', 'reports');
    fs.mkdirSync(outDir, { recursive: true });
    const outPath = path.join(outDir, 'docs-coverage.json');
    fs.writeFileSync(outPath, JSON.stringify(report, null, 2));

    console.log(`Docs coverage report written to ${outPath}`);
  } catch (e) {
    console.error('docs-coverage-report failed:', e.message);
    process.exit(0);
  }
})();