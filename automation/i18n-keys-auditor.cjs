#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

function ensureDir(dirPath) {
  if (!fs.existsSync(dirPath)) fs.mkdirSync(dirPath, { recursive: true });
}

function listFiles(dir, exts) {
  const files = [];
  function walk(d) {
    const entries = fs.existsSync(d) ? fs.readdirSync(d, { withFileTypes: true }) : [];
    for (const e of entries) {
      const full = path.join(d, e.name);
      if (e.isDirectory()) walk(full);
      else if (exts.includes(path.extname(e.name))) files.push(full);
    }
  }
  walk(dir);
  return files;
}

function extractHardcodedStrings(tsx) {
  const issues = [];
  const lines = tsx.split(/\r?\n/);
  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    // Heuristic: JSX text content outside of braces that has letters and spaces, length >= 10
    const regex = /(>)([^<{}][^<{}]{9,}?)(<)/g;
    let m;
    while ((m = regex.exec(line)) !== null) {
      const text = m[2].trim();
      if (/class(Name)?=/.test(text)) continue;
      if (/^[\s\-–—.,:;()\[\]0-9]+$/.test(text)) continue;
      issues.push({ line: i + 1, text: text.slice(0, 120) });
    }
  }
  return issues;
}

function main() {
  const repoRoot = '/workspace';
  const srcDirs = [path.join(repoRoot, 'pages'), path.join(repoRoot, 'components')];
  const reportDir = path.join(repoRoot, 'public', 'reports');
  const reportPath = path.join(reportDir, 'i18n-audit.txt');

  const files = srcDirs.flatMap((d) => listFiles(d, ['.tsx', '.ts', '.jsx', '.js']));
  const findings = [];

  for (const file of files) {
    try {
      const content = fs.readFileSync(file, 'utf8');
      if (!file.endsWith('.tsx') && !file.endsWith('.jsx')) continue;
      const issues = extractHardcodedStrings(content);
      if (issues.length) findings.push({ file, count: issues.length, issues });
    } catch {}
  }

  ensureDir(reportDir);
  const lines = [];
  lines.push('I18N Keys Audit Report');
  lines.push(`Date: ${new Date().toISOString()}`);
  lines.push('');

  if (findings.length === 0) {
    lines.push('No potential hard-coded UI strings detected by heuristic.');
  } else {
    for (const f of findings) {
      lines.push(`${path.relative(repoRoot, f.file)} — ${f.count} potential strings`);
      for (const iss of f.issues.slice(0, 10)) {
        lines.push(`  L${iss.line}: ${iss.text}`);
      }
      if (f.issues.length > 10) lines.push(`  ... ${f.issues.length - 10} more`);
      lines.push('');
    }
    lines.push('Note: Heuristic may include false positives.');
  }

  fs.writeFileSync(reportPath, lines.join('\n') + '\n', 'utf8');
  console.log('I18N keys audit complete.');
}

if (require.main === module) {
  main();
}