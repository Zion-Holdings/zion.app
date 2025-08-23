#!/usr/bin/env node
const fs = require('fs');
const path = require('path');
const glob = require('glob');

function writeFile(filepath, content) {
  const dir = path.dirname(filepath);
  fs.mkdirSync(dir, { recursive: true });
  fs.writeFileSync(filepath, content, 'utf8');
}

function scoreFromMtime(ms) {
  const days = (Date.now() - ms) / (1000 * 60 * 60 * 24);
  const score = Math.max(0, 100 - Math.min(100, Math.round(days)));
  return { days, score };
}

const files = glob.sync('{pages,docs}/**/*.{md,mdx,ts,tsx}', { nodir: true });
const results = [];
for (const f of files) {
  const stat = fs.statSync(f);
  const s = scoreFromMtime(stat.mtimeMs);
  results.push({ path: f, modifiedAt: new Date(stat.mtimeMs).toISOString(), daysOld: Number(s.days.toFixed(1)), freshnessScore: s.score });
}

results.sort((a, b) => a.freshnessScore - b.freshnessScore);

writeFile(path.resolve(process.cwd(), 'data/content-freshness.json'), JSON.stringify({ generatedAt: new Date().toISOString(), items: results }, null, 2));

const md = ['# Content Freshness Report', '', `Generated: ${new Date().toISOString()}`, '', 'Stale top 10:', '']
  .concat(results.slice(0, 10).map(r => `- (${r.freshnessScore}) ${r.path} — ${r.daysOld} days old`))
  .join('\n');
writeFile(path.resolve(process.cwd(), 'docs/content-freshness.md'), md);
console.log('Wrote data/content-freshness.json and docs/content-freshness.md');