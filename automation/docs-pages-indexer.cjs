#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const { glob } = require('glob');

function ensureDir(dirPath) {
  fs.mkdirSync(dirPath, { recursive: true });
}

async function indexPages(rootDir) {
  const pages = await glob(['pages/**/*.{js,jsx,ts,tsx,md,mdx}'], {
    cwd: rootDir,
    nodir: true,
    dot: false,
    ignore: ['**/_app.*', '**/_document.*', '**/_error.*', '**/api/**']
  });
  const docs = await glob(['docs/**/*.{md,mdx}'], { cwd: rootDir, nodir: true, dot: false });

  function toRoute(file) {
    const noExt = file.replace(/\.(jsx?|tsx?|mdx?)$/, '');
    let route = '/' + noExt.replace(/^pages\//, '').replace(/index$/, '').replace(/\/+/g, '/');
    if (route.length > 1 && route.endsWith('/')) route = route.slice(0, -1);
    return route || '/';
  }

  const pageEntries = pages.map((p) => ({ file: p, route: toRoute(p) }));
  const docEntries = docs.map((d) => ({ file: d, route: '/' + d.replace(/^docs\//, 'docs/').replace(/\/+/g, '/') }));

  return { pages: pageEntries, docs: docEntries, generatedAt: new Date().toISOString() };
}

async function main() {
  const root = process.cwd();
  const registry = await indexPages(root);

  const outDir = path.join(root, 'public', 'automation');
  ensureDir(outDir);
  fs.writeFileSync(path.join(outDir, 'content-registry.json'), JSON.stringify(registry, null, 2), 'utf8');

  console.log(`Indexed ${registry.pages.length} pages and ${registry.docs.length} docs.`);
}

main().catch((err) => {
  console.error('docs-pages-indexer failed:', err);
  process.exit(1);
});