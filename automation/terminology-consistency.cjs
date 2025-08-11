#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const glob = require('glob');

function ensureDir(dirPath) {
  if (!fs.existsSync(dirPath)) fs.mkdirSync(dirPath, { recursive: true });
}

function loadDictionary() {
  const dictPath = path.join(process.cwd(), 'data', 'terminology.json');
  if (fs.existsSync(dictPath)) {
    try {
      return JSON.parse(fs.readFileSync(dictPath, 'utf8'));
    } catch (e) {
      console.warn('Failed to parse data/terminology.json; falling back to defaults:', e.message);
    }
  }
  return {
    replacements: [
      { from: ['homepage', 'HomePage', 'home-page'], to: 'Home page' },
      { from: ['repo', 'Repo'], to: 'repository' },
      { from: ['a11y', 'A11y'], to: 'accessibility' },
      { from: ['Netlify functions', 'netlify functions'], to: 'Netlify Functions' },
      { from: ['javascript', 'Javascript'], to: 'JavaScript' },
      { from: ['Type script', 'Typescript'], to: 'TypeScript' },
    ]
  };
}

function escapeRegExp(str) {
  return str.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

function replaceInText(original, dictItem) {
  const variants = Array.isArray(dictItem.from) ? dictItem.from : [dictItem.from];
  let text = original;
  let total = 0;
  for (const variant of variants) {
    const re = new RegExp(`\\b${escapeRegExp(variant)}\\b`, 'gi');
    text = text.replace(re, () => {
      total += 1;
      return dictItem.to;
    });
  }
  return { text, count: total };
}

function processFile(filePath, dictionary) {
  const original = fs.readFileSync(filePath, 'utf8');
  let updated = original;
  let changes = 0;
  const perTermCounts = [];
  for (const item of dictionary.replacements) {
    const { text, count } = replaceInText(updated, item);
    if (count > 0) perTermCounts.push({ to: item.to, count });
    updated = text;
    changes += count;
  }
  if (changes > 0 && updated !== original) {
    fs.writeFileSync(filePath, updated, 'utf8');
  }
  return { changes, perTermCounts };
}

function buildReport(results) {
  const lines = [];
  lines.push('# Terminology Consistency Report');
  lines.push('');
  lines.push(`Generated at: ${new Date().toISOString()}`);
  lines.push('');
  const totalFilesChanged = results.filter(r => r.changes > 0).length;
  const totalReplacements = results.reduce((sum, r) => sum + r.changes, 0);
  lines.push(`- Files scanned: ${results.length}`);
  lines.push(`- Files changed: ${totalFilesChanged}`);
  lines.push(`- Replacements: ${totalReplacements}`);
  lines.push('');
  lines.push('## Changes by file');
  lines.push('');
  for (const r of results) {
    if (r.changes === 0) continue;
    lines.push(`- ${r.file}: ${r.changes} replacement(s)`);
    for (const t of r.perTermCounts) {
      lines.push(`  - ${t.to}: ${t.count}`);
    }
  }
  lines.push('');
  return lines.join('\n');
}

(async function main() {
  const dictionary = loadDictionary();
  const patterns = [
    'docs/**/*.md',
    'docs/**/*.mdx',
    'README.md',
  ];
  const ignore = ['**/node_modules/**', '**/.next/**', '**/out/**'];
  const files = patterns.flatMap(p => glob.sync(p, { nodir: true, ignore }));

  const results = [];
  for (const file of files) {
    const { changes, perTermCounts } = processFile(file, dictionary);
    results.push({ file, changes, perTermCounts });
  }

  ensureDir(path.join(process.cwd(), 'docs', 'reports'));
  const reportPath = path.join(process.cwd(), 'docs', 'reports', 'terminology-consistency.md');
  fs.writeFileSync(reportPath, buildReport(results), 'utf8');

  // Exit with 0 even if no changes; this is a maintenance task
  console.log(`Processed ${results.length} file(s). Updated ${results.filter(r => r.changes>0).length}. Report: ${reportPath}`);
})();