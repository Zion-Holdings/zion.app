const fs = require('fs');
const path = require('path');
const glob = require('glob');

function ensureDir(dirPath) {
  if (!fs.existsSync(dirPath)) {
    fs.mkdirSync(dirPath, { recursive: true });
  }
}

function auditFile(filePath) {
  const content = fs.readFileSync(filePath, 'utf8');
  const needs = [];
  const required = [
    { key: 'og:title' },
    { key: 'og:description' },
    { key: 'og:image' },
    { key: 'og:url' },
    { key: 'twitter:card' },
  ];
  for (const r of required) {
    const present = new RegExp(`<meta\\s+(?:name|property)=[\"\']${r.key}[\"\']`, 'i').test(content);
    if (!present) needs.push(r.key);
  }
  return needs;
}

function main() {
  const repoRoot = process.cwd();
  const reportDir = path.join(repoRoot, 'data', 'reports');
  ensureDir(reportDir);

  const pageFiles = glob.sync('pages/**/*.tsx', { cwd: repoRoot, nodir: true })
    .filter((rel) => !rel.endsWith('_app.tsx') && !rel.endsWith('_document.tsx'))
    .map((rel) => path.join(repoRoot, rel));

  const results = [];
  for (const filePath of pageFiles) {
    try {
      const needs = auditFile(filePath);
      if (needs.length) {
        results.push({ page: path.relative(repoRoot, filePath), missing: needs });
      }
    } catch {}
  }

  const report = {
    generatedAt: new Date().toISOString(),
    totalPages: pageFiles.length,
    pagesMissingMeta: results.length,
    results,
  };
  const outPath = path.join(reportDir, 'og_meta_audit.json');
  fs.writeFileSync(outPath, JSON.stringify(report, null, 2));
  console.log(`Wrote OG/Twitter meta audit: ${outPath}`);
}

if (require.main === module) {
  main();
}