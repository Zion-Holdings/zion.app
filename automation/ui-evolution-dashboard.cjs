#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

const REPORT = path.join(__dirname, '..', 'data', 'reports', 'ui-evolution', 'ui-evolution-analysis.json');
const BEAUTIFY = path.join(__dirname, '..', 'data', 'reports', 'ui-evolution', 'beautify-suggestions.json');

function readJson(p) {
  try { return JSON.parse(fs.readFileSync(p, 'utf8')); } catch { return null; }
}

function main() {
  const r = readJson(REPORT) || { items: [] };
  const b = readJson(BEAUTIFY) || { suggestions: [] };

  const counters = r.items.reduce((acc, item) => {
    for (const issue of item.issues) acc[issue] = (acc[issue] || 0) + 1;
    return acc;
  }, {});

  const summary = {
    timestamp: new Date().toISOString(),
    filesWithIssues: r.items.length,
    issueBreakdown: counters,
    beautifyTargets: b.suggestions.length,
  };

  console.log(JSON.stringify(summary, null, 2));
}

if (require.main === module) main();