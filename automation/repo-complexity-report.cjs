#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

function walkFiles(rootDir, includeExts) {
  const results = [];
  function walk(dir) {
    const entries = fs.readdirSync(dir, { withFileTypes: true });
    for (const entry of entries) {
      const full = path.join(dir, entry.name);
      if (entry.isDirectory()) {
        if ([
          '.git', 'node_modules', '.next', 'dist', 'build', 'out', '.husky', '.github'
        ].includes(entry.name)) continue;
        walk(full);
      } else {
        const ext = path.extname(entry.name);
        if (includeExts.includes(ext)) results.push(full);
      }
    }
  }
  walk(rootDir);
  return results;
}

function countFunctions(source) {
  // Very rough heuristic for function-like patterns
  const functionRegex = /(function\s+[a-zA-Z0-9_$]+\s*\(|=>\s*\{|\)\s*=>|class\s+[A-Za-z0-9_$]+)/g;
  let count = 0;
  while (functionRegex.exec(source)) count += 1;
  return count;
}

function measureFileMetrics(filePath) {
  const content = fs.readFileSync(filePath, 'utf8');
  const lines = content.split(/\r?\n/).length;
  const sizeBytes = Buffer.byteLength(content, 'utf8');
  const functions = countFunctions(content);
  return { file: filePath, lines, sizeBytes, functions };
}

(function main() {
  try {
    const root = process.cwd();
    const includeExts = ['.js', '.cjs', '.mjs', '.ts', '.tsx'];
    const files = walkFiles(root, includeExts);
    const metrics = files.map(measureFileMetrics);

    const totals = metrics.reduce((acc, m) => {
      acc.files += 1;
      acc.lines += m.lines;
      acc.sizeBytes += m.sizeBytes;
      acc.functions += m.functions;
      return acc;
    }, { files: 0, lines: 0, sizeBytes: 0, functions: 0 });

    const averages = {
      linesPerFile: totals.files ? Math.round(totals.lines / totals.files) : 0,
      functionsPerFile: totals.files ? (totals.functions / totals.files) : 0,
      bytesPerFile: totals.files ? Math.round(totals.sizeBytes / totals.files) : 0
    };

    const topByLines = [...metrics].sort((a, b) => b.lines - a.lines).slice(0, 25);
    const topByFunctions = [...metrics].sort((a, b) => b.functions - a.functions).slice(0, 25);

    const report = {
      generatedAt: new Date().toISOString(),
      totals,
      averages,
      topByLines,
      topByFunctions
    };

    const outDir = path.join(root, 'data', 'reports');
    fs.mkdirSync(outDir, { recursive: true });
    const outPath = path.join(outDir, 'repo-complexity.json');
    fs.writeFileSync(outPath, JSON.stringify(report, null, 2));

    console.log(`Repo complexity report written to ${outPath}`);
  } catch (e) {
    console.error('repo-complexity-report failed:', e.message);
    process.exit(0);
  }
})();