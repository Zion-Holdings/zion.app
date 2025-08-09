#!/usr/bin/env node
const fs = require('fs');
const path = require('path');
const glob = require('glob');

function listFiles(patterns) {
  /** @type {string[]} */
  const files = [];
  for (const pattern of patterns) {
    files.push(...glob.sync(pattern, { nodir: true, ignore: ['**/node_modules/**', '**/.next/**'] }));
  }
  return Array.from(new Set(files));
}

function fileContent(file) {
  return fs.readFileSync(file, 'utf8');
}

function buildIndex(files) {
  const index = new Map();
  for (const file of files) {
    index.set(file, fileContent(file));
  }
  return index;
}

function detectUnusedComponents(index) {
  const components = [...index.keys()].filter(f => /components\/.+\.(tsx|jsx|ts|js)$/.test(f));
  const pages = [...index.keys()].filter(f => /pages\/.+\.(tsx|jsx)$/.test(f));
  const other = [...index.keys()].filter(f => !components.includes(f) && !pages.includes(f));
  const consumers = [...pages, ...other].map(f => index.get(f)).join('\n');

  const unused = [];
  for (const comp of components) {
    const name = path.basename(comp).replace(/\.(tsx|jsx|ts|js)$/i, '');
    const importKey = name; // heuristic
    if (!consumers.includes(importKey)) {
      unused.push({ file: comp, reason: 'No textual reference found in codebase' });
    }
  }
  return unused;
}

function detectUnusedPages(index) {
  const pages = [...index.keys()].filter(f => /pages\/.+\.(tsx|jsx)$/.test(f));
  const usedRoutes = new Set();
  const allCode = [...index.values()].join('\n');
  for (const p of pages) {
    const rel = p.split('pages/')[1];
    const route = '/' + rel.replace(/index\.(tsx|jsx)$/i, '').replace(/\.(tsx|jsx)$/i, '');
    if (route.includes('[')) continue; // ignore dynamic
    if (allCode.includes(`href="${route}`) || allCode.includes(`href='${route}`)) {
      usedRoutes.add(p);
    }
  }
  const unused = pages.filter(p => !usedRoutes.has(p));
  return unused.map(f => ({ file: f, reason: 'No anchor/link reference found' }));
}

async function main() {
  const files = listFiles(['pages/**/*.{tsx,jsx}', 'components/**/*.{tsx,jsx,ts,js}', 'utils/**/*.{ts,js}']);
  const index = buildIndex(files);
  const compUnused = detectUnusedComponents(index);
  const pageUnused = detectUnusedPages(index);
  const report = {
    generatedAt: new Date().toISOString(),
    unusedComponents: compUnused,
    unusedPages: pageUnused,
  };
  const outDir = path.join(process.cwd(), 'public', 'automation-reports');
  await fs.promises.mkdir(outDir, { recursive: true });
  const outFile = path.join(outDir, 'dead-code-report.json');
  await fs.promises.writeFile(outFile, JSON.stringify(report, null, 2), 'utf8');
  console.log('Dead code report written:', path.relative(process.cwd(), outFile));
}

main().catch((e) => { console.error(e); process.exit(1); });