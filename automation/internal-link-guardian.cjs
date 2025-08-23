#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

function* walkFiles(startDir, extensions = ['.tsx', '.ts', '.jsx', '.js', '.mdx', '.md', '.html']) {
  if (!fs.existsSync(startDir)) return;
  const stack = [startDir];
  while (stack.length) {
    const current = stack.pop();
    let entries = [];
    try { entries = fs.readdirSync(current, { withFileTypes: true }); } catch { continue; }
    for (const entry of entries) {
      const full = path.join(current, entry.name);
      if (entry.isDirectory()) {
        if (entry.name === 'node_modules' || entry.name.startsWith('.')) continue;
        stack.push(full);
      } else if (entry.isFile()) {
        if (extensions.includes(path.extname(entry.name))) yield full;
      }
    }
  }
}

function collectInternalLinks(content) {
  const links = new Set();
  // href="/path" or href={'/path'}
  const hrefRegex = /href\s*=\s*(?:\{\s*)?["'`]\s*(\/[^"'`#?\s}]+)["'`]/g;
  let m;
  while ((m = hrefRegex.exec(content)) !== null) {
    links.add(m[1]);
  }
  // <Link href="/path">
  const linkRegex = /<Link\b[^>]*href\s*=\s*(?:\{\s*)?["'`]\s*(\/[^"'`#?\s}]+)["'`]/g;
  while ((m = linkRegex.exec(content)) !== null) {
    links.add(m[1]);
  }
  return Array.from(links);
}

function routeExists(routePath) {
  // strip trailing slash except root
  let rp = routePath.replace(/\/$/, '');
  if (rp === '') rp = '/';
  const pagesDir = path.join(process.cwd(), 'pages');
  if (!fs.existsSync(pagesDir)) return false;
  if (rp === '/') {
    return fs.existsSync(path.join(pagesDir, 'index.tsx')) || fs.existsSync(path.join(pagesDir, 'index.jsx')) || fs.existsSync(path.join(pagesDir, 'index.js'));
  }
  const candidateIndex = path.join(pagesDir, rp, 'index.tsx');
  const candidateIndexJs = path.join(pagesDir, rp, 'index.js');
  const candidateIndexTsx = candidateIndex;
  const candidateFileTsx = path.join(pagesDir, rp + '.tsx');
  const candidateFileJs = path.join(pagesDir, rp + '.js');
  const publicFile = path.join(process.cwd(), 'public', rp);
  return [candidateIndexTsx, candidateIndexJs, candidateFileTsx, candidateFileJs, publicFile].some(fs.existsSync);
}

async function main() {
  const roots = [path.join(process.cwd(), 'pages'), path.join(process.cwd(), 'components')];
  const allLinks = new Set();
  for (const root of roots) {
    for (const file of walkFiles(root)) {
      let content = '';
      try { content = fs.readFileSync(file, 'utf8'); } catch { continue; }
      for (const href of collectInternalLinks(content)) {
        allLinks.add(href);
      }
    }
  }
  const links = Array.from(allLinks).sort();
  const results = links.map((href) => ({ href, exists: routeExists(href) }));
  const missing = results.filter(r => !r.exists);
  const report = {
    generatedAt: new Date().toISOString(),
    checked: results.length,
    missingCount: missing.length,
    missing,
  };
  const outDir = path.join(process.cwd(), 'data', 'reports', 'internal-links');
  fs.mkdirSync(outDir, { recursive: true });
  const outFile = path.join(outDir, `internal-link-guardian-${Date.now()}.json`);
  fs.writeFileSync(outFile, JSON.stringify(report, null, 2));
  fs.writeFileSync(path.join(outDir, 'latest.json'), JSON.stringify(report, null, 2));
  console.log(`[internal-link-guardian] checked=${results.length} missing=${missing.length} report=${outFile}`);
}

main().catch((e) => { console.error(e); process.exit(1); });