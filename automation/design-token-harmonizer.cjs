#!/usr/bin/env node
const fs = require('fs');
const path = require('path');

function walk(dir, exts, files = []) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    if (entry.name.startsWith('.git')) continue;
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      walk(full, exts, files);
    } else if (exts.some(ext => full.endsWith(ext))) {
      files.push(full);
    }
  }
  return files;
}

function extractColors(content) {
  const results = new Set();
  const hexRegex = /#(?:[0-9a-fA-F]{3}|[0-9a-fA-F]{6})\b/g;
  const rgbRegex = /rgb\s*\(\s*\d+\s*,\s*\d+\s*,\s*\d+\s*\)/g;
  const rgbaRegex = /rgba\s*\(\s*\d+\s*,\s*\d+\s*,\s*\d+\s*,\s*(?:0|1|0?\.\d+)\s*\)/g;
  const tailwindHexRegex = /bg-\[(#[0-9a-fA-F]{3,6})\]/g;
  for (const match of content.matchAll(hexRegex)) results.add(match[0]);
  for (const match of content.matchAll(rgbRegex)) results.add(match[0]);
  for (const match of content.matchAll(rgbaRegex)) results.add(match[0]);
  for (const match of content.matchAll(tailwindHexRegex)) results.add(match[1]);
  return Array.from(results);
}

function main() {
  const root = process.cwd();
  const targetDirs = ['components', 'pages', 'styles'];
  const exts = ['.tsx', '.jsx', '.ts', '.js', '.css'];
  const files = targetDirs.flatMap(d => {
    const dir = path.join(root, d);
    return fs.existsSync(dir) ? walk(dir, exts) : [];
  });

  const report = [];
  for (const file of files) {
    const content = fs.readFileSync(file, 'utf8');
    const colors = extractColors(content);
    if (colors.length) {
      report.push({ file: path.relative(root, file), colors });
    }
  }

  const outDir = path.join(root, 'data', 'reports', 'design-tokens');
  fs.mkdirSync(outDir, { recursive: true });
  const outPath = path.join(outDir, `report-${new Date().toISOString().replace(/[:.]/g, '-')}.json`);
  const payload = { generatedAt: new Date().toISOString(), report };
  fs.writeFileSync(outPath, JSON.stringify(payload, null, 2));

  // Also write/update a latest.json for quick linking (data archive)
  fs.writeFileSync(path.join(outDir, 'latest.json'), JSON.stringify(payload, null, 2));

  // Publish a latest.json under public for direct access from the site
  const publicDir = path.join(root, 'public', 'automation', 'design-tokens');
  fs.mkdirSync(publicDir, { recursive: true });
  fs.writeFileSync(path.join(publicDir, 'latest.json'), JSON.stringify(payload, null, 2));

  console.log(`[design-token-harmonizer] analyzed ${files.length} files, found ${report.length} files with hard-coded colors`);
}

if (require.main === module) {
  main();
}