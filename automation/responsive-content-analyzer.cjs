#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

const OUTPUT_DIR = path.join(__dirname, '..', 'data', 'reports', 'responsive');

function ensureDir(p) { if (!fs.existsSync(p)) fs.mkdirSync(p, { recursive: true }); }

function listFiles(dir, exts) {
  const out = [];
  if (!fs.existsSync(dir)) return out;
  for (const entry of fs.readdirSync(dir)) {
    const full = path.join(dir, entry);
    const stat = fs.statSync(full);
    if (stat.isDirectory()) out.push(...listFiles(full, exts));
    else if (exts.includes(path.extname(entry))) out.push(full);
  }
  return out;
}

function analyzeSource(filePath) {
  const src = fs.readFileSync(filePath, 'utf8');
  const issues = [];
  const usesHead = /<Head>|from\s+['"]next\/head['"]/i.test(src);
  if (!usesHead && /pages\//.test(filePath)) issues.push('missing_head');

  const hasViewport = /<meta\s+name=["']viewport["']/i.test(src) || /viewport/i.test(src);
  if (!hasViewport && /pages\//.test(filePath)) issues.push('missing_viewport');

  const usesResponsiveClasses = /(sm:|md:|lg:|xl:|2xl:)/.test(src);
  if (!usesResponsiveClasses) issues.push('no_tailwind_responsive_classes');

  const hasResponsiveImg = /(class(Name)?=\"[^"]*(max-w-full|h-auto)[^"]*\")|<Image\s/i.test(src);
  if (!hasResponsiveImg && /<img\s/i.test(src)) issues.push('non_responsive_img');

  const fixedPx = /style=\{{[^}]*\bwidth:\s*\d+px[^}]*\}|style=\{{[^}]*\bheight:\s*\d+px[^}]*\}/i.test(src);
  if (fixedPx) issues.push('fixed_px_dimensions');

  return { filePath, issues };
}

function main() {
  ensureDir(OUTPUT_DIR);
  const files = [
    ...listFiles(path.join(__dirname, '..', 'pages'), ['.tsx', '.ts', '.jsx', '.js']),
    ...listFiles(path.join(__dirname, '..', 'components'), ['.tsx', '.ts', '.jsx', '.js'])
  ];
  const items = [];
  for (const f of files) {
    try {
      const res = analyzeSource(f);
      if (res.issues.length > 0) items.push(res);
    } catch {}
  }
  const report = { timestamp: new Date().toISOString(), filesAnalyzed: files.length, issuesFound: items.length, items };
  fs.writeFileSync(path.join(OUTPUT_DIR, 'responsive-analysis.json'), JSON.stringify(report, null, 2));
  console.log(`Responsive content analysis completed: ${items.length} files with issues`);
}

main();


