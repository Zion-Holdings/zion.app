#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

function listFilesRecursively(rootDir, ignoreDirs = new Set(['.git','node_modules','.next','.vercel','.netlify'])) {
  const results = [];
  const stack = [rootDir];
  while (stack.length) {
    const current = stack.pop();
    let entries = [];
    try { entries = fs.readdirSync(current, { withFileTypes: true }); } catch { continue; }
    for (const e of entries) {
      const full = path.join(current, e.name);
      if (e.isDirectory()) {
        if (!ignoreDirs.has(e.name)) stack.push(full);
        continue;
      }
      results.push(full);
    }
  }
  return results;
}

function safeRead(filePath) {
  try { return fs.readFileSync(filePath, 'utf8'); } catch { return ''; }
}

function main() {
  const workspace = path.resolve(__dirname, '..');
  const publicDir = path.join(workspace, 'public');
  const outDir = path.join(workspace, 'data', 'reports');
  fs.mkdirSync(outDir, { recursive: true });

  const assetExts = new Set(['.png','.jpg','.jpeg','.svg','.gif','.webp','.ico','.avif','.mp4','.webm','.mov','.pdf']);
  const codeExts = new Set(['.ts','.tsx','.js','.jsx','.css','.md','.mdx','.html','.htm']);

  let assets = [];
  try {
    assets = listFilesRecursively(publicDir).filter((f) => assetExts.has(path.extname(f).toLowerCase()));
  } catch { assets = []; }

  const codeFiles = listFilesRecursively(workspace).filter((f) => codeExts.has(path.extname(f).toLowerCase()));

  const codeContents = codeFiles.map((f) => safeRead(f));

  const used = [];
  const unused = [];

  for (const assetPath of assets) {
    const base = path.basename(assetPath);
    const publicRel = '/' + path.relative(publicDir, assetPath).split(path.sep).join('/');
    let found = false;
    for (const content of codeContents) {
      if (!content) continue;
      if (content.includes(base) || content.includes(publicRel)) { found = true; break; }
    }
    if (found) used.push(publicRel); else unused.push(publicRel);
  }

  const report = {
    generatedAt: new Date().toISOString(),
    totalAssets: assets.length,
    usedCount: used.length,
    unusedCount: unused.length,
    used: used.sort(),
    unused: unused.sort(),
    note: 'This tool does not delete assets by default. To enable deletion, set DELETE_UNUSED_ASSETS=1 in the environment.'
  };

  const outPath = path.join(outDir, 'unused-assets-report.json');
  fs.writeFileSync(outPath, JSON.stringify(report, null, 2));

  if (process.env.DELETE_UNUSED_ASSETS === '1') {
    for (const rel of unused) {
      const abs = path.join(publicDir, rel.replace(/^\//, ''));
      try { fs.unlinkSync(abs); console.log('[unused-asset-cleaner] deleted', rel); } catch {}
    }
  }

  console.log('[unused-asset-cleaner] Report written:', outPath, `unused=${unused.length}`);
}

main();