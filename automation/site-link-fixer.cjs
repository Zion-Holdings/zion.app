#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

const ROOT = process.cwd();
const REPORT_JSON_LATEST = path.join(ROOT, 'data', 'reports', 'internal-links', 'latest.json');

function readJsonSafe(file) {
  try { return JSON.parse(fs.readFileSync(file, 'utf8')); } catch { return null; }
}

function applySafeReplacements(text, replacements) {
  let out = text;
  for (const [from, to] of replacements) {
    const patterns = [
      new RegExp(`href=\\s*"${from.replace(/[-/\\^$*+?.()|[\]{}]/g, '\\$&')}"`, 'g'),
      new RegExp(`href=\\s*'${from.replace(/[-/\\^$*+?.()|[\]{}]/g, '\\$&')}'`, 'g'),
      new RegExp(`href=\\s*{\\s*['\"]${from.replace(/[-/\\^$*+?.()|[\]{}]/g, '\\$&')}['\"]\\s*}`, 'g'),
      new RegExp(`Link\\s+href=\\s*"${from.replace(/[-/\\^$*+?.()|[\]{}]/g, '\\$&')}"`, 'g'),
      new RegExp(`Link\\s+href=\\s*'${from.replace(/[-/\\^$*+?.()|[\]{}]/g, '\\$&')}'`, 'g'),
    ];
    for (const p of patterns) {
      out = out.replace(p, (m) => m.replace(from, to));
    }
  }
  return out;
}

function* walkFiles(startDir, exts = ['.tsx', '.ts', '.jsx', '.js', '.mdx']) {
  if (!fs.existsSync(startDir)) return;
  const stack = [startDir];
  while (stack.length) {
    const current = stack.pop();
    let entries = [];
    try { entries = fs.readdirSync(current, { withFileTypes: true }); } catch { continue; }
    for (const entry of entries) {
      const full = path.join(current, entry.name);
      if (entry.isDirectory()) {
        if (entry.name === 'api' || entry.name === 'node_modules' || entry.name.startsWith('.')) continue;
        stack.push(full);
      } else if (entry.isFile()) {
        if (exts.includes(path.extname(entry.name))) yield full;
      }
    }
  }
}

function main() {
  const report = readJsonSafe(REPORT_JSON_LATEST);
  if (!report) {
    console.log('No internal link report found. Skipping fixes.');
    return;
  }

  // Only auto-fix links that map to a known redirect, to minimize risk
  const redirectFixes = new Map([
    ['/main', '/'],
    ['/front', '/'],
    ['/front/index', '/'],
  ]);

  const targets = new Set();
  for (const issue of report.issues || []) {
    if (issue.suggestion && redirectFixes.get(issue.link) === issue.suggestion) {
      targets.add(issue.file);
    }
  }

  if (!targets.size) {
    console.log('No auto-fixable internal link issues found.');
    return;
  }

  let filesChanged = 0;
  let replacementsMade = 0;

  const replacements = Array.from(redirectFixes.entries());

  for (const file of targets) {
    let text;
    try { text = fs.readFileSync(file, 'utf8'); } catch { continue; }
    const updated = applySafeReplacements(text, replacements);
    if (updated !== text) {
      fs.writeFileSync(file, updated);
      filesChanged++;
      // approximate replacements count by diff of occurrences
      for (const [from] of replacements) {
        const before = (text.match(new RegExp(from.replace(/[-/\\^$*+?.()|[\]{}]/g, '\\$&'), 'g')) || []).length;
        const after = (updated.match(new RegExp(from.replace(/[-/\\^$*+?.()|[\]{}]/g, '\\$&'), 'g')) || []).length;
        if (after < before) replacementsMade += (before - after);
      }
    }
  }

  console.log(`Internal link fixer complete. Files changed: ${filesChanged}. Replacements: ${replacementsMade}.`);
}

main();