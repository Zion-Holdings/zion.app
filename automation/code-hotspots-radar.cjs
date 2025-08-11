const fs = require('fs');
const path = require('path');
const glob = require('glob');

function ensureDir(dirPath) {
  fs.mkdirSync(dirPath, { recursive: true });
}

function readFileSafe(filePath) {
  try {
    return fs.readFileSync(filePath, 'utf8');
  } catch (err) {
    return '';
  }
}

function collectCandidateFiles(rootDir) {
  const patterns = [
    'pages/**/*.{js,jsx,ts,tsx}',
    'components/**/*.{js,jsx,ts,tsx}',
    'automation/**/*.{js,cjs,mjs,ts,tsx}',
    'scripts/**/*.{js,ts}',
  ];
  const files = new Set();
  patterns.forEach((pattern) => {
    glob.sync(pattern, { cwd: rootDir, nodir: true, dot: false }).forEach((f) => files.add(path.join(rootDir, f)));
  });
  return Array.from(files);
}

function computeHotspotScore(content) {
  const lines = content.split(/\r?\n/);
  const lineCount = lines.length;
  const importCount = (content.match(/\bimport\b/g) || []).length + (content.match(/require\(/g) || []).length;
  const todoCount = (content.match(/\bTODO\b|\bFIXME\b/gi) || []).length;
  const anyCount = (content.match(/\bany\b/g) || []).length;
  const tsIgnoreCount = (content.match(/@ts-ignore/g) || []).length;
  const functionCount = (content.match(/function\s+\w+|=>\s*\{/g) || []).length;

  // Heuristic blend: lines dominate; TODO/ignore weigh heavily; imports moderately
  const score = lineCount
    + importCount * 5
    + todoCount * 12
    + anyCount * 7
    + tsIgnoreCount * 15
    + Math.min(functionCount, 50) * 2;

  return { lineCount, importCount, todoCount, anyCount, tsIgnoreCount, functionCount, score };
}

function analyzeRepo(repoRoot) {
  const files = collectCandidateFiles(repoRoot);
  const results = [];
  for (const filePath of files) {
    const content = readFileSafe(filePath);
    if (!content) continue;
    const metrics = computeHotspotScore(content);
    results.push({
      file: path.relative(repoRoot, filePath),
      ...metrics,
    });
  }
  results.sort((a, b) => b.score - a.score);
  return results;
}

function writeReports(repoRoot, hotspots) {
  const publicDir = path.join(repoRoot, 'public', 'automation');
  const docsDir = path.join(repoRoot, 'docs');
  ensureDir(publicDir);
  ensureDir(docsDir);

  // JSON
  const jsonPath = path.join(publicDir, 'hotspots.json');
  fs.writeFileSync(jsonPath, JSON.stringify({ generatedAt: new Date().toISOString(), hotspots: hotspots.slice(0, 200) }, null, 2));

  // Markdown summary
  const mdLines = [];
  mdLines.push('# Code Hotspots Radar');
  mdLines.push('');
  mdLines.push(`Generated: ${new Date().toISOString()}`);
  mdLines.push('');
  mdLines.push('| Rank | File | Score | Lines | Imports | TODO/FIXME | any | ts-ignore | Functions |');
  mdLines.push('| ---: | :--- | ----: | ----: | ------: | ----------: | --: | --------: | --------: |');
  hotspots.slice(0, 50).forEach((h, idx) => {
    mdLines.push(`| ${idx + 1} | ${h.file} | ${h.score} | ${h.lineCount} | ${h.importCount} | ${h.todoCount} | ${h.anyCount} | ${h.tsIgnoreCount} | ${h.functionCount} |`);
  });
  mdLines.push('');
  mdLines.push('This report is heuristic and prioritizes large, complex or warning-rich files as potential refactor targets.');

  const mdPath = path.join(docsDir, 'HOTSPOTS_REPORT.md');
  fs.writeFileSync(mdPath, mdLines.join('\n'));

  return { jsonPath, mdPath };
}

(function main() {
  const repoRoot = path.resolve(__dirname, '..');
  const hotspots = analyzeRepo(repoRoot);
  const { jsonPath, mdPath } = writeReports(repoRoot, hotspots);
  // Console output for Netlify logs
  console.log('Hotspots generated:', { top: hotspots[0], count: hotspots.length, jsonPath, mdPath });
})();