#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

const ROOT = process.cwd();
const OUTPUT_JSON = path.join(ROOT, 'data', 'code-churn.json');
const OUTPUT_MD = path.join(ROOT, 'docs', 'code-churn.md');

function ensureDir(filePath) {
  fs.mkdirSync(path.dirname(filePath), { recursive: true });
}

function getChangedFiles() {
  try {
    const out = execSync('git log --pretty=format: --name-only', { encoding: 'utf8' });
    return out.split(/\r?\n/).filter(Boolean);
  } catch (e) {
    return [];
  }
}

function main() {
  const files = getChangedFiles();
  const counts = new Map();
  for (const f of files) {
    if (!f || f.startsWith('node_modules/') || f.startsWith('.git/')) continue;
    const cur = counts.get(f) || 0;
    counts.set(f, cur + 1);
  }
  const sorted = Array.from(counts.entries()).sort((a, b) => b[1] - a[1]);
  const top = sorted.slice(0, 50).map(([file, changes]) => ({ file, changes }));

  ensureDir(OUTPUT_JSON);
  fs.writeFileSync(OUTPUT_JSON, JSON.stringify({ generatedAt: new Date().toISOString(), top }, null, 2));

  const md = ['# Code Churn (Top 50)', '', `Generated: ${new Date().toISOString()}`, ''];
  for (const item of top) md.push(`- ${item.file}: ${item.changes}`);
  ensureDir(OUTPUT_MD);
  fs.writeFileSync(OUTPUT_MD, md.join('\n'));
  console.log(`Code churn written to: ${path.relative(ROOT, OUTPUT_JSON)} and ${path.relative(ROOT, OUTPUT_MD)}`);
}

main();