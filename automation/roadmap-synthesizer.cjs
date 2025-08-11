#!/usr/bin/env node
const fs = require('fs');
const path = require('path');
const glob = require('glob');

function collectTodos() {
  const files = glob.sync('**/*.{js,jsx,ts,tsx,md,mdx}', { nodir: true, ignore: ['node_modules/**', '.next/**', 'out/**'] });
  const items = [];
  const todoRe = /(TODO|FIXME)[:\-]?\s*(.*)/i;
  for (const file of files) {
    const content = fs.readFileSync(file, 'utf8');
    const lines = content.split('\n');
    for (let i = 0; i < lines.length; i++) {
      const line = lines[i];
      const m = line.match(todoRe);
      if (m) {
        items.push({ file, line: i + 1, tag: m[1].toUpperCase(), text: m[2].trim() });
      }
    }
  }
  return items;
}

function main() {
  const items = collectTodos();
  const generatedAt = new Date().toISOString();
  const summary = {
    generatedAt,
    totals: { items: items.length },
    byTag: items.reduce((acc, it) => { acc[it.tag] = (acc[it.tag] || 0) + 1; return acc; }, {}),
    items,
  };

  const outDir = path.resolve('public/reports/roadmap');
  fs.mkdirSync(outDir, { recursive: true });
  fs.writeFileSync(path.join(outDir, 'summary.json'), JSON.stringify(summary, null, 2));

  const docsDir = path.resolve('docs');
  fs.mkdirSync(docsDir, { recursive: true });
  const md = [
    '# ROADMAP',
    '',
    `Generated: ${generatedAt}`,
    '',
    `Total TODO/FIXME: ${items.length}`,
    '',
    '## Breakdown by tag',
    '',
    ...Object.entries(summary.byTag).map(([k, v]) => `- ${k}: ${v}`),
    '',
    '## Items',
    '',
    ...items.slice(0, 500).map((it) => `- [${it.tag}] ${it.text} (${it.file}:${it.line})`),
  ].join('\n');
  fs.writeFileSync(path.join(docsDir, 'ROADMAP.md'), md, 'utf8');

  console.log('Roadmap synthesized.');
}

main();