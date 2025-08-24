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

function pickTopFiles(root) {
  const interesting = [];
  for (const file of walk(root)) {
    if (!/\.(ts|tsx|js|jsx|md|mdx|cjs|json)$/i.test(file)) continue;
    const rel = path.relative(root, file);
    if (rel.startsWith('node_modules') || rel.startsWith('.git')) continue;
    const stat = fs.statSync(file);
    interesting.push({ file: rel, size: stat.size });
  }
  return interesting.sort((a, b) => b.size - a.size).slice(0, 50);
}

function synthesizeIdeas(context) {
  const ideas = [];
  const now = new Date().toISOString();
  context.forEach((item, idx) => {
    const base = path.basename(item.file);
    ideas.push({
      id: `idea-${idx + 1}`,
      title: `Enhance ${base} with autonomous curation`,
      desc: `Leverage cloud functions to continuously analyze and improve ${base}, syncing safe changes to main.`,
      href: '/automation',
      generatedAt: now,
      signal: Math.max(1, Math.round(Math.log10(item.size + 10) * 10)),
    });
  });
  // pick top 12 by signal
  return ideas.sort((a, b) => b.signal - a.signal).slice(0, 12);
}

function main() {
  const root = path.resolve(__dirname, '..');
  const context = pickTopFiles(root);
  const ideas = synthesizeIdeas(context);

  const payload = {
    generatedAt: new Date().toISOString(),
    ideas,
  };

  const outDir = path.join(root, 'public', 'automation');
  fs.mkdirSync(outDir, { recursive: true });
  const outPath = path.join(outDir, 'innovation-lab-ideas.json');
  fs.writeFileSync(outPath, JSON.stringify(payload, null, 2));
  console.log('Innovation Lab ideas written to', outPath);
}

main();