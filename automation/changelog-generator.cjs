#!/usr/bin/env node
const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

function getRecentCommits() {
  try {
    const log = execSync('git log --since="2 days ago" --pretty=format:"- %s (%h)"', { encoding: 'utf8' });
    return log.trim();
  } catch (e) {
    return '';
  }
}

function main() {
  const commits = getRecentCommits();
  if (!commits) {
    console.log('No recent commits to add to changelog.');
    return;
  }

  const changelogPath = path.join(process.cwd(), 'CHANGELOG.md');
  const date = new Date().toISOString().slice(0, 10);
  const header = `\n\n## ${date}\n`;
  const section = `${header}${commits}\n`;

  let existing = '';
  if (fs.existsSync(changelogPath)) existing = fs.readFileSync(changelogPath, 'utf8');

  if (existing.includes(header.trim())) {
    console.log('Changelog already has an entry for today. Skipping.');
    return;
  }

  const content = existing ? `${existing}${section}` : `# Changelog\n${section}`;
  fs.writeFileSync(changelogPath, content);
  console.log('Changelog updated.');
}

if (require.main === module) {
  main();
}