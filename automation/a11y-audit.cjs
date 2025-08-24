const fs = require('fs');
const path = require('path');
const glob = require('glob');

function readFileSafe(filePath) {
  try { return fs.readFileSync(filePath, 'utf8'); } catch { return ''; }
}

function ensureDir(dir) {
  try { fs.mkdirSync(dir, { recursive: true }); } catch {}
}

function findImagesMissingAlt(code) {
  const results = [];
  const imgTagRegex = /<img\b[^>]*>/gi;
  const imageComponentRegex = /<Image\b[^>]*\/>/gi;

  function extract(tag) {
    const hasAlt = /\balt\s*=\s*("[^"]*"|'[^']*'|\{[^}]*\})/i.test(tag);
    if (!hasAlt) results.push({ tag: tag.trim().slice(0, 120) + (tag.length > 120 ? '…' : '') });
  }

  let match;
  while ((match = imgTagRegex.exec(code)) !== null) extract(match[0]);
  while ((match = imageComponentRegex.exec(code)) !== null) extract(match[0]);

  return results;
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
    issues: [],
    summary: { filesWithIssues: 0, totalMissingAlt: 0 }
  };

  for (const file of files) {
    const code = readFileSafe(file);
    if (!code) continue;
    const missing = findImagesMissingAlt(code);
    if (missing.length > 0) {
      report.issues.push({ file: path.relative(workspace, file), missing });
      report.summary.filesWithIssues += 1;
      report.summary.totalMissingAlt += missing.length;
    }
  }

  const outPath = path.join(outDir, 'a11y-report.json');
  fs.writeFileSync(outPath, JSON.stringify(report, null, 2));
  console.log(`[a11y-audit] Wrote ${outPath}. files=${report.totalFiles} filesWithIssues=${report.summary.filesWithIssues} totalMissingAlt=${report.summary.totalMissingAlt}`);
})();