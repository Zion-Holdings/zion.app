const fs = require('fs');
const path = require('path');
const glob = require('glob');

function ensureDir(dirPath) {
  if (!fs.existsSync(dirPath)) {
    fs.mkdirSync(dirPath, { recursive: true });
  }
}

function findIssuesInContent(content) {
  // Matches <a ... target=\"_blank\" ...> where no rel= appears before the closing '>'
  const anchorRegex = /<a[^>]*target=\"_blank\"[^>]*>/gi;
  const results = [];
  let match;
  while ((match = anchorRegex.exec(content)) !== null) {
    const tag = match[0];
    if (!/\brel\s*=\s*\"[^\"]*\"/i.test(tag)) {
      results.push({ index: match.index, length: tag.length, tag });
    }
  }
  return results;
}

function applyFixes(content, issues) {
  // Insert rel=\"noopener noreferrer\" before '>'
  let offset = 0;
  for (const issue of issues) {
    const start = issue.index + offset;
    const end = start + issue.length;
    const before = content.slice(0, end - 1);
    const after = content.slice(end - 1);
    content = `${before} rel=\"noopener noreferrer\"${after}`;
    offset += ' rel="noopener noreferrer"'.length;
  }
  return content;
}

function main() {
  const repoRoot = process.cwd();
  const reportDir = path.join(repoRoot, 'data', 'reports');
  ensureDir(reportDir);

  const files = [
    ...glob.sync('pages/**/*.{js,jsx,ts,tsx}', { cwd: repoRoot, nodir: true }),
    ...glob.sync('components/**/*.{js,jsx,ts,tsx}', { cwd: repoRoot, nodir: true }),
  ].map((rel) => path.join(repoRoot, rel));

  const autoFix = String(process.env.AUTO_FIX || '0') === '1';
  const findings = [];
  let totalIssues = 0;
  let totalFixed = 0;

  for (const filePath of files) {
    try {
      const content = fs.readFileSync(filePath, 'utf8');
      const issues = findIssuesInContent(content);
      if (issues.length) {
        totalIssues += issues.length;
        findings.push({ file: path.relative(repoRoot, filePath), count: issues.length });
        if (autoFix) {
          const updated = applyFixes(content, issues);
          if (updated !== content) {
            fs.writeFileSync(filePath, updated, 'utf8');
            totalFixed += issues.length;
          }
        }
      }
    } catch {}
  }

  const report = {
    generatedAt: new Date().toISOString(),
    autoFixApplied: autoFix,
    totalFilesScanned: files.length,
    totalIssues,
    totalFixed,
    filesWithIssues: findings,
  };

  const outPath = path.join(reportDir, 'external_blank_rel_issues.json');
  fs.writeFileSync(outPath, JSON.stringify(report, null, 2));
  console.log(`Wrote external rel audit report: ${outPath}`);
}

if (require.main === module) {
  main();
}