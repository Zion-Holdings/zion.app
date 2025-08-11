#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const glob = require('glob');

function ensureDir(dirPath) {
  fs.mkdirSync(dirPath, { recursive: true });
}

function readText(filePath) {
  try { return fs.readFileSync(filePath, 'utf8'); } catch { return ''; }
}

function getAllFiles(patterns, cwd) {
  const files = new Set();
  for (const pattern of patterns) {
    for (const f of glob.sync(pattern, { cwd, nodir: true, dot: false })) {
      files.add(path.join(cwd, f));
    }
  }
  return Array.from(files);
}

function analyzeContentGaps(rootDir) {
  const pagesDir = path.join(rootDir, 'pages');
  const componentsDir = path.join(rootDir, 'components');
  const docsDir = path.join(rootDir, 'docs');

  const pageFiles = getAllFiles(['pages/**/*.{tsx,ts,jsx,js,md,mdx}'], rootDir);
  const componentFiles = getAllFiles(['components/**/*.{tsx,ts,jsx,js}'], rootDir);
  const docFiles = getAllFiles(['docs/**/*.{md,mdx}'], rootDir);

  const pagesByDir = {};
  for (const file of pageFiles) {
    const rel = path.relative(rootDir, file);
    const dir = rel.split(path.sep)[1] || '';
    pagesByDir[dir] = pagesByDir[dir] || [];
    pagesByDir[dir].push(rel);
  }

  const componentsByDir = {};
  for (const file of componentFiles) {
    const rel = path.relative(rootDir, file);
    const dir = rel.split(path.sep)[1] || '';
    componentsByDir[dir] = componentsByDir[dir] || [];
    componentsByDir[dir].push(rel);
  }

  const docsByDir = {};
  for (const file of docFiles) {
    const rel = path.relative(rootDir, file);
    const dir = rel.split(path.sep)[1] || '';
    docsByDir[dir] = docsByDir[dir] || [];
    docsByDir[dir].push(rel);
  }

  // Heuristics for gaps
  const gaps = [];

  // 1) Orphaned sections: top-level page directories with only index or very few pages
  for (const [dir, files] of Object.entries(pagesByDir)) {
    if (!dir || dir === 'api') continue;
    const nonIndex = files.filter(f => !/index\.(tsx|ts|jsx|js|mdx?)$/.test(f));
    if (nonIndex.length === 0) {
      gaps.push({
        type: 'thin-section',
        severity: 'medium',
        area: 'pages',
        dir,
        message: `Section \'/${dir}\' has only an index page. Consider adding at least one deep page.`
      });
    }
  }

  // 2) Components with no direct references from pages (simple grep)
  const pagesText = pageFiles.map(readText).join('\n');
  for (const [dir, files] of Object.entries(componentsByDir)) {
    for (const rel of files) {
      const name = path.basename(rel, path.extname(rel));
      if (!new RegExp(`\b${name}\b`).test(pagesText)) {
        gaps.push({
          type: 'unused-component-suspect',
          severity: 'low',
          area: 'components',
          file: rel,
          message: `Component '${name}' is not referenced directly in pages. Verify usage or consider surfacing.`
        });
      }
    }
  }

  // 3) Missing docs companion for key pages (heuristic by page dir name)
  for (const [dir, files] of Object.entries(pagesByDir)) {
    if (!dir || dir === 'api') continue;
    const hasDocs = !!docsByDir[dir];
    if (!hasDocs) {
      gaps.push({
        type: 'missing-docs',
        severity: 'low',
        area: 'docs',
        dir,
        message: `No docs found for '/${dir}'. Consider adding docs/${dir}/overview.md` 
      });
    }
  }

  return { summary: { pages: pageFiles.length, components: componentFiles.length, docs: docFiles.length }, gaps };
}

function writeReports(rootDir, result) {
  const outDir = path.join(rootDir, 'public', 'automation');
  ensureDir(outDir);
  const jsonPath = path.join(outDir, 'content-gaps.json');
  fs.writeFileSync(jsonPath, JSON.stringify({ generatedAt: new Date().toISOString(), ...result }, null, 2));

  const mdLines = [];
  mdLines.push('# Content Gap Report');
  mdLines.push('');
  mdLines.push(`Generated: ${new Date().toISOString()}`);
  mdLines.push('');
  mdLines.push('## Summary');
  mdLines.push(`- Pages: ${result.summary.pages}`);
  mdLines.push(`- Components: ${result.summary.components}`);
  mdLines.push(`- Docs: ${result.summary.docs}`);
  mdLines.push('');
  mdLines.push('## Gaps');
  if (result.gaps.length === 0) {
    mdLines.push('- No gaps detected.');
  } else {
    for (const gap of result.gaps.slice(0, 200)) {
      mdLines.push(`- [${gap.severity}] (${gap.type}) ${gap.message}`);
    }
  }
  const mdPath = path.join(outDir, 'content-gaps.md');
  fs.writeFileSync(mdPath, mdLines.join('\n'));

  return { jsonPath, mdPath };
}

(function main() {
  const rootDir = path.resolve(__dirname, '..');
  const result = analyzeContentGaps(rootDir);
  const outputs = writeReports(rootDir, result);
  console.log(JSON.stringify({ ok: true, ...outputs, counts: result.summary, gaps: result.gaps.length }, null, 2));
})();