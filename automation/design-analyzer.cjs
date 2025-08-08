#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

const OUTPUT_DIR = path.join(__dirname, '..', 'data', 'reports', 'design');

function ensureDir(p) {
  if (!fs.existsSync(p)) fs.mkdirSync(p, { recursive: true });
}

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

function analyzeFile(filePath) {
  const src = fs.readFileSync(filePath, 'utf8');
  const results = {
    filePath,
    hasHead: /<Head>|from\s+['"]next\/head['"]/i.test(src),
    usesTailwind: /className=|class=/i.test(src),
    usesEnhancedLayout: /EnhancedLayout|AuthLayout/i.test(src),
    usesEnhancedNav: /EnhancedNavigation|InteractiveNavigation/i.test(src),
    usesEnhancedFooter: /EnhancedFooter/i.test(src),
    hasMetaTitle: /<title>|meta\s+name=["']title/i.test(src),
    hasMetaDesc: /meta\s+name=["']description/i.test(src),
  };
  const issues = [];
  if (!results.hasHead && /pages\//.test(filePath)) issues.push('missing_head_import');
  if (!results.usesTailwind) issues.push('no_tailwind_usage');
  if (!results.usesEnhancedLayout && /pages\/.+\.tsx?$/.test(filePath)) issues.push('missing_enhanced_layout');
  if (!results.usesEnhancedNav && /components\/.+\.tsx?$/.test(filePath)) issues.push('missing_enhanced_nav');
  if (!results.hasMetaTitle && /pages\//.test(filePath)) issues.push('missing_meta_title');
  if (!results.hasMetaDesc && /pages\//.test(filePath)) issues.push('missing_meta_description');
  return { results, issues };
}

function main() {
  ensureDir(OUTPUT_DIR);
  const files = [
    ...listFiles(path.join(__dirname, '..', 'pages'), ['.tsx', '.ts', '.jsx', '.js']),
    ...listFiles(path.join(__dirname, '..', 'components'), ['.tsx', '.ts', '.jsx', '.js'])
  ];
  const report = { timestamp: new Date().toISOString(), filesAnalyzed: files.length, items: [] };
  for (const f of files) {
    try {
      const { results, issues } = analyzeFile(f);
      if (issues.length > 0) report.items.push({ file: f, issues, details: results });
    } catch {}
  }
  fs.writeFileSync(path.join(OUTPUT_DIR, 'design-analysis.json'), JSON.stringify(report, null, 2));
  console.log(`Design analysis completed: ${report.items.length} items with issues`);
}

main();


