#!/usr/bin/env node
const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

function getRecentCommits(limit = 50) {
  const format = `%h%x09%ad%x09%s%x09%an`;
  const log = execSync(`git log -n ${limit} --date=short --pretty=format:"${format}"`, { encoding: 'utf8' });
  return log.split('\n').filter(Boolean).map((line) => {
    const [hash, date, subject, author] = line.split('\t');
    return { hash, date, subject, author };
  });
}

function buildMarkdown(commits) {
  const today = new Date().toISOString().slice(0, 10);
  const lines = [];
  lines.push(`\n## ${today}`);
  for (const c of commits) {
    lines.push(`- ${c.subject} ([${c.hash}]) — ${c.author}`);
  }
  return lines.join('\n') + '\n';
}

(function main() {
  const commits = getRecentCommits(60);
  const md = buildMarkdown(commits);
  const changelogPath = path.join(process.cwd(), 'CHANGELOG.md');
  let existing = fs.existsSync(changelogPath) ? fs.readFileSync(changelogPath, 'utf8') : '# Changelog\n';
  if (!existing.includes(md.trim())) {
    existing += md;
    fs.writeFileSync(changelogPath, existing, 'utf8');
    console.log('[changelog] updated CHANGELOG.md');
  } else {
    console.log('[changelog] no changes');
  }
})();