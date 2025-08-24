#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

function getAllCssFiles(dir, out = []) {
  if (!fs.existsSync(dir)) return out;
  for (const entry of fs.readdirSync(dir)) {
    const abs = path.join(dir, entry);
    const stat = fs.statSync(abs);
    if (stat.isDirectory()) getAllCssFiles(abs, out);
    else if (path.extname(entry) === '.css') out.push(abs);
  }
  return out;
}

function main() {
  const root = path.resolve(__dirname, '..');
  const targets = [path.join(root, 'styles'), path.join(root, 'public')];
  const files = targets.flatMap((d) => getAllCssFiles(d));
  const report = files.map((f) => {
    const buf = fs.readFileSync(f);
    return { file: path.relative(root, f), bytes: buf.length, kilobytes: Math.round(buf.length / 10.24) / 100 };
  }).sort((a, b) => b.bytes - a.bytes);

  const out = { generatedAt: new Date().toISOString(), totalFiles: report.length, top: report.slice(0, 100) };
  const outDir = path.join(root, 'data', 'reports', 'css');
  const pubDir = path.join(root, 'public', 'automation');
  try { fs.mkdirSync(outDir, { recursive: true }); } catch {}
  try { fs.mkdirSync(pubDir, { recursive: true }); } catch {}
  fs.writeFileSync(path.join(outDir, 'css-bloat-report.json'), JSON.stringify(out, null, 2));
  fs.writeFileSync(path.join(pubDir, 'css-bloat-report.json'), JSON.stringify(out, null, 2));
  console.log('CSS bloat report written.');
}

main();