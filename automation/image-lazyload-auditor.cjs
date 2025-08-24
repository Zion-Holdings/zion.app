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

function analyzeFile(filePath) {
  const src = fs.readFileSync(filePath, 'utf8');
  const results = [];
  const imgRegex = /<img\b[^>]*>/gim;
  let match;
  while ((match = imgRegex.exec(src)) !== null) {
    const tag = match[0];
    const hasLoading = /\sloading=/.test(tag);
    const hasDecoding = /\sdecoding=/.test(tag);
    results.push({ tag, hasLoading, hasDecoding });
  }
  const missing = results.filter(r => !r.hasLoading);
  return { totalImgTags: results.length, missingLoading: missing.length, samples: missing.slice(0, 10).map(s => s.tag) };
}

function main() {
  const root = path.resolve(__dirname, '..');
  const targets = [path.join(root, 'pages'), path.join(root, 'components')];
  const files = targets.flatMap((d) => getAllFiles(d, ['.tsx', '.jsx']));

  const findings = [];
  for (const f of files) {
    const res = analyzeFile(f);
    if (res.totalImgTags > 0) {
      findings.push({ file: path.relative(root, f), ...res });
    }
  }

  findings.sort((a, b) => b.missingLoading - a.missingLoading);

  const report = {
    generatedAt: new Date().toISOString(),
    totalFilesScanned: files.length,
    filesWithImg: findings.length,
    filesMissingLoading: findings.filter(f => f.missingLoading > 0).length,
    top: findings.slice(0, 100),
  };

  const outDir = path.join(root, 'data', 'reports', 'images');
  const pubDir = path.join(root, 'public', 'automation');
  try { fs.mkdirSync(outDir, { recursive: true }); } catch {}
  try { fs.mkdirSync(pubDir, { recursive: true }); } catch {}
  fs.writeFileSync(path.join(outDir, 'lazyload-report.json'), JSON.stringify(report, null, 2));
  fs.writeFileSync(path.join(pubDir, 'lazyload-report.json'), JSON.stringify(report, null, 2));
  console.log('Image lazyload audit report written.');
}

main();