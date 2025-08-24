const fs = require('fs');
const path = require('path');
const glob = require('glob');

function readFileSafe(filePath) {
  try { return fs.readFileSync(filePath, 'utf8'); } catch { return ''; }
}

function ensureDir(dir) {
  try { fs.mkdirSync(dir, { recursive: true }); } catch {}
}

function checkOgTags(code) {
  // Look for og:title and og:image
  const hasOgTitle = /<meta[^>]+property=["']og:title["'][^>]*>/i.test(code);
  const hasOgImage = /<meta[^>]+property=["']og:image["'][^>]*>/i.test(code);
  return { hasOgTitle, hasOgImage };
}

(function main() {
  const workspace = process.cwd();
  const pagesDir = path.join(workspace, 'pages');
  const outDir = path.join(workspace, 'public', 'automation');
  ensureDir(outDir);

  const files = glob.sync('**/*.tsx', { cwd: pagesDir, nodir: true, absolute: true, ignore: ['**/node_modules/**'] });

  const report = {
    generatedAt: new Date().toISOString(),
    totalFiles: files.length,
    pagesMissingOg: [],
    summary: { missingTitle: 0, missingImage: 0 }
  };

  for (const file of files) {
    const code = readFileSafe(file);
    if (!code) continue;
    const { hasOgTitle, hasOgImage } = checkOgTags(code);
    const missing = [];
    if (!hasOgTitle) { report.summary.missingTitle += 1; missing.push('og:title'); }
    if (!hasOgImage) { report.summary.missingImage += 1; missing.push('og:image'); }
    if (missing.length) {
      report.pagesMissingOg.push({ file: path.relative(workspace, file), missing });
    }
  }

  const outPath = path.join(outDir, 'og-report.json');
  fs.writeFileSync(outPath, JSON.stringify(report, null, 2));
  console.log(`[og-tags] Wrote ${outPath}. files=${report.totalFiles} missingFiles=${report.pagesMissingOg.length}`);
})();