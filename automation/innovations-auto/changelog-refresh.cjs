#!/usr/bin/env node
/*
  Changelog Refresh
  - Writes docs/CHANGELOG_AUTO.md using recent git commits
*/
const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

function getRecentCommits() {
  try {
    const raw = execSync('git log --pretty=format:"%h %ad %s" --date=short -n 50', { stdio: ['ignore', 'pipe', 'ignore'] }).toString();
    return raw.split('\n').filter(Boolean);
  } catch (e) {
    return [];
  }
}

function main(cwd = process.cwd()) {
  const commits = getRecentCommits();
  const outPath = path.join(cwd, 'docs', 'CHANGELOG_AUTO.md');
  const lines = [];
  lines.push('# Automated Changelog');
  lines.push('');
  const today = new Date().toISOString().slice(0, 10);
  lines.push(`Updated: ${today}`);
  lines.push('');
  for (const c of commits) lines.push(`- ${c}`);
  lines.push('');
  fs.mkdirSync(path.dirname(outPath), { recursive: true });
  fs.writeFileSync(outPath, lines.join('\n'), 'utf8');
  console.log(`Wrote ${outPath} with ${commits.length} entries.`);
}

if (require.main === module) main();

module.exports = { main };