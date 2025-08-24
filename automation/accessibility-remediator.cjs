#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

function listFilesRecursive(dir, exts) {
  const results = [];
  const stack = [dir];
  while (stack.length) {
    const current = stack.pop();
    let entries = [];
    try { entries = fs.readdirSync(current, { withFileTypes: true }); } catch { continue; }
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
  fs.mkdirSync(path.dirname(filePath), { recursive: true });
}

function scanFileForImgWithoutAlt(content) {
  const issues = [];
  // Naive regex for <img ...> tags missing alt attribute
  const imgTagRegex = /<img\b[^>]*>/gi;
  const matches = content.match(imgTagRegex) || [];
  for (const tag of matches) {
    const hasAlt = /\balt\s*=\s*['"][^'"]*['"]/i.test(tag);
    if (!hasAlt) {
      issues.push({ tag });
    }
  }
  return issues;
}

function main() {
  const workspaceRoot = path.resolve(__dirname, '..');
  const targetDirs = [
    path.join(workspaceRoot, 'pages'),
    path.join(workspaceRoot, 'components'),
    path.join(workspaceRoot, 'docs'),
  ];
  const exts = ['.tsx', '.jsx', '.ts', '.js', '.md', '.mdx', '.html'];

  const findings = [];
  for (const dir of targetDirs) {
    if (!fs.existsSync(dir)) continue;
    for (const file of listFilesRecursive(dir, exts)) {
      let content = '';
      try { content = fs.readFileSync(file, 'utf8'); } catch { continue; }
      const issues = scanFileForImgWithoutAlt(content);
      if (issues.length > 0) {
        findings.push({ file: path.relative(workspaceRoot, file), issuesCount: issues.length, samples: issues.slice(0, 3).map((i) => i.tag) });
      }
    }
  }

  const jsonOut = path.join(workspaceRoot, 'data', 'reports', 'a11y-img-issues.json');
  ensureDir(jsonOut);
  fs.writeFileSync(jsonOut, JSON.stringify({ generatedAt: new Date().toISOString(), totalFilesWithIssues: findings.length, findings }, null, 2));

  const mdOut = path.join(workspaceRoot, 'docs', 'reports', 'A11Y_IMG_ALT_REPORT.md');
  ensureDir(mdOut);
  const lines = [];
  lines.push('# Accessibility Report: <img> alt text');
  lines.push('');
  lines.push(`Generated: ${new Date().toISOString()}`);
  lines.push('');
  if (findings.length === 0) {
    lines.push('No <img> tags without alt attributes were detected.');
  } else {
    lines.push('Files with <img> tags missing alt:');
    lines.push('');
    for (const f of findings.slice(0, 50)) {
      lines.push(`- ${f.file} — ${f.issuesCount} issue(s)`);
      for (const s of f.samples) {
        lines.push(`  - sample: ${s}`);
      }
    }
    if (findings.length > 50) {
      lines.push('');
      lines.push(`...and ${findings.length - 50} more files`);
    }
  }
  lines.push('');
  lines.push('Notes:');
  lines.push('- This is a heuristic scan. Prefer using <Image alt="..." /> in Next.js components.');
  lines.push('- Consider adding descriptive alt text for better accessibility.');
  fs.writeFileSync(mdOut, lines.join('\n'));

  console.log(`A11y scan completed. Files with issues: ${findings.length}`);
}

main();