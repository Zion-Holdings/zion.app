#!/usr/bin/env node

'use strict';

const fs = require('fs');
const path = require('path');

function ensureDir(p) { fs.mkdirSync(p, { recursive: true }); }
function writeIfChanged(p, data) {
  const json = JSON.stringify(data, null, 2);
  if (fs.existsSync(p)) {
    const current = fs.readFileSync(p, 'utf8');
    if (current === json) return false;
  }
  ensureDir(path.dirname(p));
  fs.writeFileSync(p, json);
  return true;
}

function analyze() {
  // Simple heuristic suggestions; extend with real crawl if needed
  const suggestions = [
    { slug: 'faq', title: 'Autonomous Systems FAQ', reason: 'Users search for quick answers about setup and safety' },
    { slug: 'pricing', title: 'Pricing & ROI Calculator', reason: 'Decision makers need transparent costs and benefits' },
    { slug: 'case-studies', title: 'Case Studies', reason: 'Social proof improves conversion and SEO topical authority' }
  ];
  return {
    generatedAt: new Date().toISOString(),
    suggestions
  };
}

function main() {
  const root = path.resolve(__dirname, '..');
  const outPath = path.join(root, 'data', 'reports', 'seo', 'seo-content-gaps.json');
  const result = analyze();
  const changed = writeIfChanged(outPath, result);
  console.log('SEO content gaps report', changed ? 'updated' : 'unchanged', 'at', outPath);
}

main();