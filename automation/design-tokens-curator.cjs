#!/usr/bin/env node

'use strict';

const fs = require('fs');
const path = require('path');

function* walk(dir) {
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  for (const entry of entries) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      if (entry.name === 'node_modules' || entry.name.startsWith('.git')) continue;
      yield* walk(full);
    } else {
      yield full;
    }
  }
}

function readIfExists(file) {
  try { return fs.readFileSync(file, 'utf8'); } catch { return ''; }
}

function main() {
  const root = path.resolve(__dirname, '..');
  const targets = [
    path.join(root, 'styles'),
    path.join(root, 'components'),
    path.join(root, 'pages'),
    path.join(root, 'public'),
    path.join(root, 'tailwind.config.js'),
  ];

  const colorRegexes = [
    /#[0-9a-fA-F]{3,8}\b/g, // hex colors
    /rgb\(\s*\d{1,3}\s*,\s*\d{1,3}\s*,\s*\d{1,3}\s*\)/g,
    /rgba\(\s*\d{1,3}\s*,\s*\d{1,3}\s*,\s*\d{1,3}\s*,\s*(?:0|1|0?\.\d+)\s*\)/g,
    /hsl\(\s*\d{1,3}\s*,\s*\d{1,3}%\s*,\s*\d{1,3}%\s*\)/g,
    /hsla\(\s*\d{1,3}\s*,\s*\d{1,3}%\s*,\s*\d{1,3}%\s*,\s*(?:0|1|0?\.\d+)\s*\)/g,
  ];

  const colorCounts = new Map();

  for (const target of targets) {
    const stat = fs.existsSync(target) ? fs.statSync(target) : null;
    if (!stat) continue;

    if (stat.isFile()) {
      const content = readIfExists(target);
      for (const re of colorRegexes) {
        const matches = content.match(re) || [];
        matches.forEach((m) => colorCounts.set(m, (colorCounts.get(m) || 0) + 1));
      }
      continue;
    }

    for (const file of walk(target)) {
      if (!/\.(css|pcss|scss|sass|less|tsx|jsx|ts|js|json|md|svg)$/i.test(file)) continue;
      const content = readIfExists(file);
      for (const re of colorRegexes) {
        const matches = content.match(re) || [];
        matches.forEach((m) => colorCounts.set(m, (colorCounts.get(m) || 0) + 1));
      }
    }
  }

  const colors = Array.from(colorCounts.entries())
    .map(([value, count]) => ({ value, count }))
    .sort((a, b) => b.count - a.count);

  const report = {
    generatedAt: new Date().toISOString(),
    totalUniqueColors: colors.length,
    topColors: colors.slice(0, 100),
  };

  const outDir = path.join(root, 'public', 'automation');
  fs.mkdirSync(outDir, { recursive: true });
  const outPath = path.join(outDir, 'design-tokens-report.json');
  fs.writeFileSync(outPath, JSON.stringify(report, null, 2));
  console.log('Design tokens report written to', outPath);
}

main();