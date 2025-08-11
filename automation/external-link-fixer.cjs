#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

const ROOT = process.cwd();

const replacements = [
  // Broken GitHub actions page -> route to our internal Site Health or Reports
  {
    from: 'https://github.com/Zion-Holdings/zion.app/actions',
    to: '/site-health',
    reason: 'Replace dead GH Actions link with Site Health dashboard',
  },
  // Docs folder link -> point to internal SEO report index for now
  {
    from: 'https://github.com/Zion-Holdings/zion.app/tree/main/docs',
    to: '/reports/seo',
    reason: 'Replace non-existent docs with SEO report dashboard',
  },
  // AI changelog file -> point to Newsroom page for updates
  {
    from: 'https://github.com/Zion-Holdings/zion.app/blob/main/docs/CHANGELOG_AI.md',
    to: '/newsroom',
    reason: 'Replace missing changelog with Newsroom updates',
  },
  // Automation folder link -> point to Automation hub
  {
    from: 'https://github.com/Zion-Holdings/zion.app/tree/main/automation',
    to: '/automation',
    reason: 'Replace repo folder with in-site automation hub',
  },
  // Repo root -> point to homepage
  {
    from: 'https://github.com/Zion-Holdings/zion.app',
    to: '/',
    reason: 'Replace repo root with site home',
  },
];

function* walkFiles(startDir, exts = ['.tsx', '.ts', '.jsx', '.js', '.mdx', '.md', '.html']) {
  if (!fs.existsSync(startDir)) return;
  const stack = [startDir];
  while (stack.length) {
    const current = stack.pop();
    let entries = [];
    try { entries = fs.readdirSync(current, { withFileTypes: true }); } catch { continue; }
    for (const entry of entries) {
      const full = path.join(current, entry.name);
      if (entry.isDirectory()) {
        if (entry.name === 'node_modules' || entry.name.startsWith('.')) continue;
        stack.push(full);
      } else if (entry.isFile()) {
        if (exts.includes(path.extname(entry.name))) yield full;
      }
    }
  }
}

function applyReplacements(src) {
  let changed = src;
  let count = 0;
  for (const { from, to } of replacements) {
    const before = changed;
    // Replace in href attributes and plain occurrences
    const re = new RegExp(from.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'), 'g');
    changed = changed.replace(re, to);
    if (changed !== before) count += 1;
  }
  return { changed, count };
}

function main() {
  const targets = ['pages', 'components', 'automation'];
  const edits = [];
  for (const dir of targets) {
    const abs = path.join(ROOT, dir);
    for (const file of walkFiles(abs)) {
      let src = '';
      try { src = fs.readFileSync(file, 'utf8'); } catch { continue; }
      const { changed, count } = applyReplacements(src);
      if (count > 0) {
        fs.writeFileSync(file, changed, 'utf8');
        edits.push({ file: file.replace(ROOT + path.sep, ''), changes: count });
      }
    }
  }
  const outDir = path.join(ROOT, 'data', 'reports', 'external-links');
  fs.mkdirSync(outDir, { recursive: true });
  const summary = { timestamp: new Date().toISOString(), totalFilesEdited: edits.length, edits, rules: replacements };
  fs.writeFileSync(path.join(outDir, 'fixes-latest.json'), JSON.stringify(summary, null, 2));
  fs.writeFileSync(path.join(outDir, `fixes-${Date.now()}.json`), JSON.stringify(summary, null, 2));
  console.log(`External link fixes applied to ${edits.length} files.`);
}

main();