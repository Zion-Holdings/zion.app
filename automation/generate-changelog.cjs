#!/usr/bin/env node

const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

function sh(cmd) {
  try {
    return execSync(cmd, { encoding: 'utf8' }).trim();
  } catch (e) {
    return '';
  }
}

function getCommits() {
  // Last 200 commits on current branch
  const raw = sh('git log -n 200 --pretty=format:%H%x09%ad%x09%s --date=short');
  return raw
    .split('\n')
    .filter(Boolean)
    .map((line) => {
      const [hash, date, ...rest] = line.split('\t');
      return { hash, date, subject: rest.join('\t') };
    });
}

function formatChangelog(commits) {
  const byDate = new Map();
  for (const c of commits) {
    if (!byDate.has(c.date)) byDate.set(c.date, []);
    byDate.get(c.date).push(c);
  }
  const days = Array.from(byDate.keys()).sort((a, b) => (a < b ? 1 : -1));
  let out = '# Changelog\n\n';
  out += `Generated on ${new Date().toISOString()}\n\n`;
  for (const day of days) {
    out += `## ${day}\n`;
    const items = byDate.get(day).slice(0, 30);
    for (const c of items) {
      const short = c.hash.slice(0, 7);
      out += `- ${c.subject} (${short})\n`;
    }
    out += '\n';
  }
  return out;
}

function main() {
  const commits = getCommits();
  if (!commits.length) return;
  const content = formatChangelog(commits);
  const file = path.join(process.cwd(), 'CHANGELOG.md');
  fs.writeFileSync(file, content);
  console.log(`Wrote ${file}`);
}

main();