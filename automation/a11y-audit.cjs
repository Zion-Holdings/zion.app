#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

const ROOT = process.cwd();
const TARGET_DIRS = ['pages', 'components'];
const OUTPUT_JSON = path.join(ROOT, 'data', 'a11y-report.json');
const OUTPUT_MD = path.join(ROOT, 'docs', 'a11y-report.md');

function ensureDir(filePath) {
  fs.mkdirSync(path.dirname(filePath), { recursive: true });
}

function walk(dir) {
  const out = [];
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const p = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      out.push(...walk(p));
    } else if (/\.(tsx|jsx|ts|js)$/.test(entry.name)) {
      out.push(p);
    }
  }
  return out;
}

function approximateLineNumber(source, index) {
  let line = 1;
  for (let i = 0; i < index && i < source.length; i++) {
    if (source.charCodeAt(i) === 10) line++;
  }
  return line;
}

function analyzeFile(filePath) {
  const source = fs.readFileSync(filePath, 'utf8');
  const findings = [];

  // <img ...> without alt=
  const imgRegex = /<img\b((?:(?!>).)*)>/gis;
  let m;
  while ((m = imgRegex.exec(source))) {
    const tag = m[0];
    if (!/\balt\s*=/.test(tag)) {
      findings.push({
        type: 'img-missing-alt',
        line: approximateLineNumber(source, m.index),
        snippet: tag.slice(0, 120)
      });
    }
  }

  // <Image ...> (Next.js) without alt=
  const nextImgRegex = /<Image\b((?:(?!>).)*)>/gis;
  while ((m = nextImgRegex.exec(source))) {
    const tag = m[0];
    if (!/\balt\s*=/.test(tag)) {
      findings.push({
        type: 'next-image-missing-alt',
        line: approximateLineNumber(source, m.index),
        snippet: tag.slice(0, 120)
      });
    }
  }

  // <a ...> without discernible text (very naive: innerHTML empty)
  const anchorRegex = /<a\b[^>]*>(\s*)<\/a>/gis;
  while ((m = anchorRegex.exec(source))) {
    findings.push({
      type: 'anchor-empty-text',
      line: approximateLineNumber(source, m.index),
      snippet: m[0].slice(0, 120)
    });
  }

  return findings;
}

function main() {
  const files = [];
  for (const d of TARGET_DIRS) {
    const abs = path.join(ROOT, d);
    if (fs.existsSync(abs)) files.push(...walk(abs));
  }

  const report = {
    generatedAt: new Date().toISOString(),
    summary: { filesScanned: files.length, issues: 0 },
    results: {}
  };

  for (const f of files) {
    const rel = path.relative(ROOT, f);
    const findings = analyzeFile(f);
    if (findings.length) {
      report.results[rel] = findings;
      report.summary.issues += findings.length;
    }
  }

  ensureDir(OUTPUT_JSON);
  fs.writeFileSync(OUTPUT_JSON, JSON.stringify(report, null, 2));

  const lines = [];
  lines.push('# Accessibility Report');
  lines.push('');
  lines.push(`Generated: ${report.generatedAt}`);
  lines.push(`Files scanned: ${report.summary.filesScanned}`);
  lines.push(`Issues found: ${report.summary.issues}`);
  lines.push('');
  for (const [file, findings] of Object.entries(report.results)) {
    lines.push(`## ${file}`);
    for (const item of findings) {
      lines.push(`- [${item.type}] line ${item.line}: ${'`' + item.snippet.replace(/`/g, '\\`') + '`'}`);
    }
    lines.push('');
  }
  ensureDir(OUTPUT_MD);
  fs.writeFileSync(OUTPUT_MD, lines.join('\n'));

  console.log(`A11y report written to: ${path.relative(ROOT, OUTPUT_JSON)} and ${path.relative(ROOT, OUTPUT_MD)}`);
}

main();