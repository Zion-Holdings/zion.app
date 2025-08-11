#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

function getAllFiles(dir, exts, out = []) {
  if (!fs.existsSync(dir)) return out;
  for (const entry of fs.readdirSync(dir)) {
    const abs = path.join(dir, entry);
    const stat = fs.statSync(abs);
    if (stat.isDirectory()) getAllFiles(abs, exts, out);
    else if (exts.includes(path.extname(entry))) out.push(abs);
  }
  return out;
}

function extractLinks(src) {
  const hrefs = new Set();
  const linkHref = /<Link\s+href=\"([^\"]+)\"/g;
  const aHref = /<a\s+[^>]*href=\"([^\"]+)\"/g;
  let m;
  while ((m = linkHref.exec(src)) !== null) hrefs.add(m[1]);
  while ((m = aHref.exec(src)) !== null) hrefs.add(m[1]);
  return Array.from(hrefs);
}

function existsForHref(root, href) {
  if (!href || !href.startsWith('/')) return true; // external or hash
  if (href.startsWith('/.netlify/functions/')) return true; // function route
  // check public asset
  const publicPath = path.join(root, 'public', href);
  if (fs.existsSync(publicPath)) return true;
  // map href to pages path
  const clean = href.replace(/[#?].*$/, '');
  const parts = clean.split('/').filter(Boolean);
  const pageIndex = path.join(root, 'pages', ...parts, 'index.tsx');
  const pageTsx = path.join(root, 'pages', ...parts) + '.tsx';
  const pageJs = path.join(root, 'pages', ...parts) + '.js';
  const html = path.join(root, 'public', ...parts, 'index.html');
  return [pageIndex, pageTsx, pageJs, html].some(p => fs.existsSync(p));
}

function main() {
  const root = path.resolve(__dirname, '..');
  const files = getAllFiles(path.join(root, 'pages'), ['.tsx', '.jsx']);
  const results = [];
  for (const f of files) {
    const src = fs.readFileSync(f, 'utf8');
    const hrefs = extractLinks(src);
    const missing = hrefs.filter(h => !existsForHref(root, h));
    if (missing.length > 0) {
      results.push({ file: path.relative(root, f), missing, totalLinks: hrefs.length });
    }
  }
  const report = {
    generatedAt: new Date().toISOString(),
    filesScanned: files.length,
    filesWithMissing: results.length,
    details: results,
  };
  const outDir = path.join(root, 'data', 'reports', 'link-sentinel');
  const pubDir = path.join(root, 'public', 'automation');
  try { fs.mkdirSync(outDir, { recursive: true }); } catch {}
  try { fs.mkdirSync(pubDir, { recursive: true }); } catch {}
  fs.writeFileSync(path.join(outDir, 'internal-orphans.json'), JSON.stringify(report, null, 2));
  fs.writeFileSync(path.join(pubDir, 'internal-orphans.json'), JSON.stringify(report, null, 2));
  console.log('Internal link orphan report written.');
}

main();