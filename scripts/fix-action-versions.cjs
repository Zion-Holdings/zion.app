#!/usr/bin/env node
/**
 * Fix deprecated GitHub Action versions to pinned commits:
 * - actions/checkout@v4 → pinned v6.0.2
 * - actions/setup-node@v4 → pinned v6.3.0
 * - actions/github-script@v7 → pinned v8.0.0
 */
const fs = require('fs');
const path = require('path');

const workflowsDir = '.github/workflows';
const files = fs.readdirSync(workflowsDir).filter(f => f.endsWith('.yml'));

const replacements = [
  { from: 'actions/checkout@v4', to: 'actions/checkout@de0fac2e4500dabe0009e67214ff5f5447ce83dd # v6.0.2' },
  { from: 'actions/checkout@v4.4.0', to: 'actions/checkout@de0fac2e4500dabe0009e67214ff5f5447ce83dd # v6.0.2' },
  { from: 'actions/setup-node@v4', to: 'actions/setup-node@53b83947a5a98c8d113130e565377fae1a50d02f # v6.3.0' },
  { from: 'actions/setup-node@v4.0.0', to: 'actions/setup-node@53b83947a5a98c8d113130e565377fae1a50d02f # v6.3.0' },
  { from: 'actions/github-script@v7', to: 'actions/github-script@ed597411d8f924073f98dfc5c65a23a2325f34cd # v8.0.0' },
  { from: 'actions/github-script@v7.0.1', to: 'actions/github-script@ed597411d8f924073f98dfc5c65a23a2325f34cd # v8.0.0' },
  { from: 'actions/upload-artifact@v4', to: 'actions/upload-artifact@bbbca2ddaa5d8feaa63e36b76fdaad77386f024f # v7.0.0' },
  { from: 'actions/upload-artifact@v4.4.0', to: 'actions/upload-artifact@bbbca2ddaa5d8feaa63e36b76fdaad77386f024f # v7.0.0' },
  { from: 'actions/cache@v4', to: 'actions/cache@668228422ae6a00e4ad889ee87cd7109ec5666a7 # v5.0.4' },
  { from: 'actions/deploy-pages@v4', to: 'actions/deploy-pages@v4' },
  { from: 'actions/upload-pages-artifact@v4', to: 'actions/upload-pages-artifact@v4' },
];

let fixed = 0;

files.forEach(file => {
  const filePath = path.join(workflowsDir, file);
  let content = fs.readFileSync(filePath, 'utf8');
  let original = content;

  replacements.forEach(({ from, to }) => {
    content = content.split(from).join(to);
  });

  if (content !== original) {
    fs.writeFileSync(filePath, content);
    const changed = replacements.filter(r => original.includes(r.from));
    console.log(`FIXED: ${file} - ${changed.map(r => r.from).join(', ')}`);
    fixed++;
  }
});

console.log(`\nTotal files fixed: ${fixed}`);
