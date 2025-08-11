#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const glob = require('glob');

function routeFromPageFile(pagesDir, filePath) {
  const rel = path.relative(pagesDir, filePath).replace(/\\/g, '/');
  let route = '/' + rel
    .replace(/index\.(jsx?|tsx?|mdx?)$/, '')
    .replace(/\.(jsx?|tsx?|mdx?)$/, '');
  route = route.replace(/\[(.+?)\]/g, ':$1');
  if (route.endsWith('/')) route = route.slice(0, -1);
  if (route === '') route = '/';
  return route;
}

function extractLinksFromSource(src) {
  const links = new Set();
  const patterns = [
    /href\s*=\s*"([^"]+)"/g,
    /href\s*=\s*'([^']+)'/g,
    /<Link\s+[^>]*href\s*=\s*{\s*"([^"]+)"\s*}/g,
    /<Link\s+[^>]*href\s*=\s*{\s*'([^']+)'\s*}/g,
  ];
  for (const re of patterns) {
    let m;
    while ((m = re.exec(src)) !== null) {
      const href = m[1];
      if (!href) continue;
      if (href.startsWith('http://') || href.startsWith('https://') || href.startsWith('mailto:') || href.startsWith('tel:')) continue;
      if (href.startsWith('#')) continue;
      if (!href.startsWith('/')) continue;
      links.add(href);
    }
  }
  return Array.from(links).sort();
}

function main() {
  const root = path.resolve(__dirname, '..');
  const pagesDir = path.join(root, 'pages');
  const outDir = path.join(root, 'public', 'automation');
  const outPath = path.join(outDir, 'internal-links.json');
  fs.mkdirSync(outDir, { recursive: true });

  const files = glob.sync('**/*.{js,jsx,ts,tsx,md,mdx}', { cwd: pagesDir, nodir: true })
    .map((f) => path.join(pagesDir, f));

  const report = { generatedAt: new Date().toISOString(), pages: [] };

  for (const file of files) {
    try {
      const src = fs.readFileSync(file, 'utf8');
      const links = extractLinksFromSource(src);
      const route = routeFromPageFile(pagesDir, file);
      report.pages.push({ route, file: path.relative(root, file).replace(/\\/g, '/'), links });
    } catch (e) {
      // ignore file read errors
    }
  }

  report.pages.sort((a, b) => a.route.localeCompare(b.route));
  fs.writeFileSync(outPath, JSON.stringify(report, null, 2), 'utf8');
  console.log('Internal links report written to', outPath);
}

if (require.main === module) {
  main();
}