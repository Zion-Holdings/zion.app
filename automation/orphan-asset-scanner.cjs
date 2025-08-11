#!/usr/bin/env node
const fs = require('fs');
const path = require('path');

function listFilesRecursively(startDir, excludeDirs = ['.git', 'node_modules', '.next', 'out']) {
  const results = [];
  function walk(dir) {
    let entries = [];
    try { entries = fs.readdirSync(dir, { withFileTypes: true }); } catch { return; }
    for (const entry of entries) {
      const full = path.join(dir, entry.name);
      const rel = path.relative(process.cwd(), full);
      if (entry.isDirectory()) {
        if (excludeDirs.some(x => rel === x || rel.startsWith(x + path.sep))) continue;
        walk(full);
      } else {
        results.push(full);
      }
    }
  }
  walk(startDir);
  return results;
}

function listSourceFiles() {
  const roots = ['pages', 'components', 'styles', 'automation', 'netlify/functions'];
  const includeExt = new Set(['.ts', '.tsx', '.js', '.jsx', '.cjs', '.css', '.md', '.mdx', '.json']);
  const results = [];
  for (const root of roots) {
    const abs = path.join(process.cwd(), root);
    results.push(...listFilesRecursively(abs).filter(p => includeExt.has(path.extname(p))));
  }
  return results;
}

function main() {
  const publicDir = path.join(process.cwd(), 'public');
  const assets = listFilesRecursively(publicDir).filter(p => !p.includes('/automation/') && !p.includes('/reports/'));
  const sources = listSourceFiles();

  const sourceContents = sources.map(p => {
    try { return fs.readFileSync(p, 'utf8'); } catch { return ''; }
  });

  function isReferenced(assetPath) {
    const rel = path.relative(process.cwd(), assetPath).replace(/\\/g, '/');
    const base = path.basename(assetPath);
    for (const content of sourceContents) {
      if (content.includes(rel) || content.includes('/' + base) || content.includes(base)) return true;
    }
    return false;
  }

  const items = assets.map(p => ({ file: path.relative(process.cwd(), p), referenced: isReferenced(p) }));
  const orphans = items.filter(x => !x.referenced);

  const report = {
    generatedAt: new Date().toISOString(),
    totalAssets: items.length,
    totalOrphans: orphans.length,
    orphans,
  };
  const outPath = path.join(process.cwd(), 'public', 'automation', 'orphans.json');
  fs.mkdirSync(path.dirname(outPath), { recursive: true });
  fs.writeFileSync(outPath, JSON.stringify(report, null, 2));
  console.log(`[orphan-assets] Wrote ${outPath} with ${orphans.length} orphans.`);
}

if (require.main === module) {
  try { main(); process.exit(0); } catch (e) { console.error(e); process.exit(1); }
}