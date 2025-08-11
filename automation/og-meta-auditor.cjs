const fs = require('fs');
const path = require('path');

function walk(dir, exts = new Set(['.tsx', '.ts', '.jsx', '.js'])) {
  const files = [];
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    if (entry.name.startsWith('.')) continue;
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) files.push(...walk(full, exts));
    else if (exts.has(path.extname(entry.name))) files.push(full);
  }
  return files;
}

function analyzeFile(filePath) {
  const src = fs.readFileSync(filePath, 'utf8');
  const hasHead = /<Head[\s\S]*?>[\s\S]*?<\/Head>/.test(src);
  const hasOgTitle = /property=["']og:title["']|name=["']og:title["']/.test(src);
  const hasOgDesc = /property=["']og:description["']|name=["']og:description["']/.test(src);
  const hasOgImage = /property=["']og:image["']|name=["']og:image["']/.test(src);
  const missing = [];
  if (!hasOgTitle) missing.push('og:title');
  if (!hasOgDesc) missing.push('og:description');
  if (!hasOgImage) missing.push('og:image');
  return {
    file: filePath.replace(process.cwd(), ''),
    hasHead,
    hasOgTitle,
    hasOgDescription: hasOgDesc,
    hasOgImage,
    missing,
  };
}

function runAudit() {
  const pagesDir = path.join(__dirname, '..', 'pages');
  const files = walk(pagesDir);
  const report = files
    .filter((f) => f.endsWith('.tsx') || f.endsWith('.jsx'))
    .map(analyzeFile);

  const summary = {
    generatedAt: new Date().toISOString(),
    totalFiles: report.length,
    compliant: report.filter(r => r.missing.length === 0).length,
    missingAny: report.filter(r => r.missing.length > 0).length,
    report,
    recommendation: 'Add missing OG tags in pages lacking them to improve social sharing and SEO.',
  };

  const reportsDir = path.join(__dirname, '..', 'public', 'reports');
  if (!fs.existsSync(reportsDir)) fs.mkdirSync(reportsDir, { recursive: true });
  fs.writeFileSync(path.join(reportsDir, 'og-meta-report.json'), JSON.stringify(summary, null, 2));

  return summary;
}

if (require.main === module) {
  console.log(JSON.stringify(runAudit(), null, 2));
}

module.exports = { runAudit };