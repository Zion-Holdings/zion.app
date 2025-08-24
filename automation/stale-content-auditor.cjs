#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const glob = require('glob');

function collectFiles(root, patterns) {
  const results = [];
  for (const p of patterns) {
    const matches = glob.sync(p, { cwd: root, nodir: true });
    for (const rel of matches) {
      const abs = path.join(root, rel);
      try {
        const stat = fs.statSync(abs);
        results.push({ file: rel.replace(/\\/g, '/'), mtimeMs: stat.mtimeMs, size: stat.size });
      } catch {}
    }
  }
  return results;
}

function daysSince(date) {
  const ms = Date.now() - date.getTime();
  return Math.floor(ms / (1000 * 60 * 60 * 24));
}

function isTextFile(file) {
  return /\.(tsx|ts|js|jsx|md|mdx|json|toml|yml|yaml|css|scss|html)$/i.test(file);
}

function computeReferenceCounts(allFiles, fileToAnalyze) {
  // Count how many other files reference the basename (route-ish) of the file
  const baseName = path.basename(fileToAnalyze).replace(/\.(tsx|ts|js|jsx|md|mdx)$/i, '');
  const needle = new RegExp(`(^|["'` + '`' + `\{\(\s/])${baseName}(["'` + '`' + `\}\)\s/]|$)`, 'i');
  let refs = 0;
  for (const f of allFiles) {
    if (f === fileToAnalyze) continue;
    if (!isTextFile(f)) continue;
    try {
      const content = fs.readFileSync(f, 'utf8');
      if (needle.test(content)) refs += 1;
    } catch {}
  }
  return refs;
}

(function main() {
  const allCandidates = TARGET_DIRS.flatMap(listFiles)
    // ignore Next.js internals and noisy artifacts
    .filter((f) => !/\/(\.next|node_modules|\.git|out|public)\//.test(f))
    .filter((f) => !/\/(\.DS_Store|\.map)$/.test(f));

  const now = new Date();
  const thresholdDays = parseInt(process.env.STALE_DAYS || '90', 10);
  const maxReport = parseInt(process.env.STALE_MAX || '200', 10);

  const items = [];
  for (const file of allCandidates) {
    try {
      const stat = fs.statSync(file);
      const modified = stat.mtime;
      const ageDays = daysSince(modified);
      const references = computeReferenceCounts(allCandidates, file);
      const isCode = /\.(tsx|ts|js|jsx)$/i.test(file);
      const isDoc = /\.(md|mdx)$/i.test(file);
      const isPage = file.includes(path.sep + 'pages' + path.sep);

      if (ageDays >= thresholdDays || (ageDays >= 45 && references <= 1)) {
        items.push({ file: path.relative(ROOT, file), ageDays, references, isCode, isDoc, isPage, modified: modified.toISOString() });
      }
    } catch {}
  }

  // Sort by most stale, then least referenced
  items.sort((a, b) => (b.ageDays - a.ageDays) || (a.references - b.references));
  const timestamp = new Date().toISOString().replace(/[:.]/g, '-');

  const jsonOutPath = path.join(STALE_DIR, `stale-content-${timestamp}.json`);
  const latestJsonPath = path.join(STALE_DIR, `latest.json`);
  const mdOutPath = path.join(ROOT, 'docs', 'reports', 'stale-content.md');
  ensureDir(path.dirname(mdOutPath));

  const summary = {
    generatedAt: new Date().toISOString(),
    thresholdDays,
    totalAnalyzed: allCandidates.length,
    totalFlagged: items.length,
    top: items.slice(0, maxReport),
  };

  fs.writeFileSync(jsonOutPath, JSON.stringify(summary, null, 2));
  fs.writeFileSync(latestJsonPath, JSON.stringify(summary, null, 2));

  const lines = [];
  lines.push('# Stale Content Report');
  lines.push('');
  lines.push(`- Generated at: ${summary.generatedAt}`);
  lines.push(`- Threshold: ${thresholdDays} days`);
  lines.push(`- Files analyzed: ${summary.totalAnalyzed}`);
  lines.push(`- Flagged: ${summary.totalFlagged}`);
  lines.push('');
  lines.push('| File | Age (days) | References | Page | Code | Doc | Last Modified |');
  lines.push('|---|---:|---:|:--:|:--:|:--:|---|');
  for (const it of summary.top) {
    lines.push(`| ${it.file} | ${it.ageDays} | ${it.references} | ${it.isPage ? '✓' : ''} | ${it.isCode ? '✓' : ''} | ${it.isDoc ? '✓' : ''} | ${it.modified} |`);
  }
  fs.writeFileSync(mdOutPath, lines.join('\n'));

  console.log(`Stale content report written to:\n- ${jsonOutPath}\n- ${latestJsonPath}\n- ${mdOutPath}`);
})();
=======
function main() {
  const root = path.resolve(__dirname, '..');
  const outDir = path.join(root, 'public', 'automation');
  const outPath = path.join(outDir, 'stale-content.json');
  fs.mkdirSync(outDir, { recursive: true });

  const patterns = [
    'pages/**/*.{js,jsx,ts,tsx,md,mdx}',
    'components/**/*.{js,jsx,ts,tsx}',
    'docs/**/*.{md,mdx}',
  ];
  const files = collectFiles(root, patterns);

  const now = Date.now();
  const days = (ms) => Math.round(ms / (1000 * 60 * 60 * 24));
  const annotated = files.map((f) => ({
    file: f.file,
    ageDays: days(now - f.mtimeMs),
    size: f.size,
  }));

  annotated.sort((a, b) => b.ageDays - a.ageDays || b.size - a.size);
  const thresholdDays = Number(process.env.STALE_THRESHOLD_DAYS || 30);
  const stale = annotated.filter((f) => f.ageDays >= thresholdDays).slice(0, 200);

  const report = {
    generatedAt: new Date().toISOString(),
    thresholdDays,
    totalAnalyzed: files.length,
    staleCount: stale.length,
    sample: stale,
  };

  fs.writeFileSync(outPath, JSON.stringify(report, null, 2), 'utf8');
  console.log('Stale content report written to', outPath);
}

if (require.main === module) {
  main();
}
