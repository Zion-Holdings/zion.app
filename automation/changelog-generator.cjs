#!/usr/bin/env node

const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

const OUT = path.join(__dirname, '..', 'docs', 'CHANGELOG.md');

function getCommits(limit = 100) {
  try {
    const raw = execSync(`git log -n ${limit} --pretty=format:%H|%ad|%s --date=short`, { encoding: 'utf8' });
    return raw.split('\n').filter(Boolean).map(line => {
      const [hash, date, ...rest] = line.split('|');
      const subject = rest.join('|');
      return { hash, date, subject };
    });
  } catch { return []; }
}

function group(commits) {
  const sections = {
    feat: [], fix: [], docs: [], chore: [], refactor: [], perf: [], test: [], ci: [], build: [], other: []
  };
  for (const c of commits) {
    const m = c.subject.match(/^(feat|fix|docs|chore|refactor|perf|test|ci|build)(\(.*\))?:\s*(.*)$/i);
    if (m) {
      const type = m[1].toLowerCase();
      const title = m[3];
      sections[type].push({ ...c, title });
    } else {
      sections.other.push({ ...c, title: c.subject });
    }
  }
  return sections;
}

function render(sections) {
  const lines = [];
  lines.push('# Changelog');
  lines.push('');
  lines.push(`Updated: ${new Date().toISOString()}`);
  const order = ['feat','fix','docs','refactor','perf','test','build','ci','chore','other'];
  for (const key of order) {
    if (!sections[key] || sections[key].length === 0) continue;
    lines.push('');
    lines.push(`## ${key.toUpperCase()}`);
    for (const c of sections[key].slice(0, 30)) {
      lines.push(`- ${c.title} (${c.date}, ${c.hash.substring(0,7)})`);
    }
  }
  return lines.join('\n') + '\n';
}

function main() {
  const commits = getCommits(120);
  const sections = group(commits);
  fs.writeFileSync(OUT, render(sections), 'utf8');
  console.log('Changelog updated.');
}

main();