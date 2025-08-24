#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

function listFilesRecursive(dir, exts) {
  const results = [];
  const stack = [dir];
  while (stack.length) {
    const current = stack.pop();
    let entries = [];
    try {
      entries = fs.readdirSync(current, { withFileTypes: true });
    } catch {
      continue;
    }
    for (const entry of entries) {
      const absolute = path.join(current, entry.name);
      if (entry.isDirectory()) {
        stack.push(absolute);
      } else if (exts.some((ext) => entry.name.toLowerCase().endsWith(ext))) {
        results.push(absolute);
      }
    }
  }
  return results;
}

function ensureDir(filePath) {
  const dir = path.dirname(filePath);
  fs.mkdirSync(dir, { recursive: true });
}

function humanDays(diffMs) {
  return Math.round(diffMs / (1000 * 60 * 60 * 24));
}

function main() {
  const workspaceRoot = path.resolve(__dirname, '..');
  const now = Date.now();

  const contentDirs = [
    path.join(workspaceRoot, 'pages'),
    path.join(workspaceRoot, 'docs'),
    path.join(workspaceRoot, 'public'),
    path.join(workspaceRoot, 'components'),
  ];
  const exts = ['.md', '.mdx', '.tsx', '.jsx', '.ts', '.js', '.html'];

  const entries = [];
  for (const dir of contentDirs) {
    if (!fs.existsSync(dir)) continue;
    for (const file of listFilesRecursive(dir, exts)) {
      let stat;
      try { stat = fs.statSync(file); } catch { continue; }
      const ageDays = humanDays(now - stat.mtimeMs);
      entries.push({ file: path.relative(workspaceRoot, file), mtime: new Date(stat.mtimeMs).toISOString(), ageDays });
    }
  }

  entries.sort((a, b) => b.ageDays - a.ageDays);

  const driftThresholdDays = 60;
  const driftCandidates = entries.filter((e) => e.ageDays >= driftThresholdDays);
  const top20 = driftCandidates.slice(0, 20);

  const jsonOut = path.join(workspaceRoot, 'data', 'reports', 'content-drift.json');
  ensureDir(jsonOut);
  fs.writeFileSync(jsonOut, JSON.stringify({ generatedAt: new Date().toISOString(), driftThresholdDays, totalScanned: entries.length, totalCandidates: driftCandidates.length, topCandidates: top20, all: entries }, null, 2));

  const mdOut = path.join(workspaceRoot, 'docs', 'reports', 'CONTENT_DRIFT_REPORT.md');
  ensureDir(mdOut);
  const lines = [];
  lines.push('# Content Drift Report');
  lines.push('');
  lines.push(`Generated: ${new Date().toISOString()}`);
  lines.push('');
  lines.push(`Threshold: ${driftThresholdDays} days old`);
  lines.push('');
  lines.push('## Top candidates');
  if (top20.length === 0) {
    lines.push('- None found over threshold.');
  } else {
    for (const e of top20) {
      lines.push(`- ${e.file} — ${e.ageDays} days since last update`);
    }
  }
  lines.push('');
  lines.push('## Notes');
  lines.push('- This report is generated automatically by the Content Drift Detector.');
  lines.push('- Consider reviewing the files above for freshness, accuracy, and new opportunities.');
  fs.writeFileSync(mdOut, lines.join('\n'));

  console.log(`Content drift analysis complete. Scanned ${entries.length} files; ${driftCandidates.length} candidates over ${driftThresholdDays} days.`);
}

main();