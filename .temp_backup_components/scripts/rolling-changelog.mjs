#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import { execSync } from 'child_process';

const CHANGELOG = path.join(process.cwd(), 'docs', 'CHANGELOG.md');

function ensureFile() {
  const dir = path.dirname(CHANGELOG);
  if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
  if (!fs.existsSync(CHANGELOG)) fs.writeFileSync(CHANGELOG, '# Changelog\n\n');
}

function getCommitsSince(hours = 24) {
  try {
    const since = new Date(Date.now() - hours * 3600 * 1000).toISOString();
    const cmd = `git log --since='${since}' --pretty=format:%h:::%s:::%an:::%ad --date=iso`;
    const out = execSync(cmd, { encoding: 'utf8' }).trim();
    if (!out) return [];
    return out.split('\n').map(line => {
      const [hash, subject, author, date] = line.split(':::');
      return { hash, subject, author, date };
    });
  } catch {
    return [];
  }
}

function appendChangelog(commits) {
  if (!commits.length) return false;
  const date = new Date().toISOString().slice(0, 10);
  const lines = [
    `## ${date}`,
    '',
    ...commits.map(c => `- ${c.subject} (${c.hash}) — ${c.author}`),
    '',
  ];
  fs.appendFileSync(CHANGELOG, lines.join('\n'));
  return true;
}

function main() {
  ensureFile();
  const commits = getCommitsSince(24);
  const changed = appendChangelog(commits);
  if (changed) {
    console.log(`Changelog updated with ${commits.length} entries.`);
  } else {
    console.log('No new commits in the last 24h; changelog unchanged.');
  }
}

main();