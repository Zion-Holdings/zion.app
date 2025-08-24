#!/usr/bin/env node
/* eslint-disable */
const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

function getCommits() {
  try {
    // last 100 commits
    const out = execSync('git log -n 100 --pretty=format:%H|%ad|%an|%s --date=short', { stdio: ['ignore', 'pipe', 'ignore'] }).toString();
    return out.split('\n').filter(Boolean).map((line) => {
      const [hash, date, author, ...rest] = line.split('|');
      const subject = rest.join('|');
      return { hash, date, author, subject };
    });
  } catch {
    return [];
  }
}

function formatChangelog(commits) {
  const sections = {
    feat: [], fix: [], chore: [], docs: [], refactor: [], perf: [], test: [], ci: [], other: [],
  };
  for (const c of commits) {
    const m = c.subject.match(/^(\w+)(\(.*\))?!?:\s*(.*)$/);
    if (m) {
      const type = m[1];
      const scope = m[2] || '';
      const msg = m[3] || c.subject;
      (sections[type] || sections.other).push({ ...c, scope, msg });
    } else {
      sections.other.push({ ...c, msg: c.subject });
    }
  }
  function linesFor(title, items) {
    if (!items.length) return [];
    const out = [`### ${title}`, ''];
    for (const i of items) {
      out.push(`- ${i.msg} (${i.scope}) [${i.hash.slice(0,7)}] - ${i.author} ${i.date}`);
    }
    out.push('');
    return out;
  }
  const content = [
    '# Changelog',
    '',
    'Auto-generated from recent commits.',
    '',
    ...linesFor('Features', sections.feat),
    ...linesFor('Fixes', sections.fix),
    ...linesFor('Chores', sections.chore),
    ...linesFor('Docs', sections.docs),
    ...linesFor('Refactors', sections.refactor),
    ...linesFor('Performance', sections.perf),
    ...linesFor('Tests', sections.test),
    ...linesFor('CI', sections.ci),
    ...linesFor('Other', sections.other),
  ];
  return content.join('\n');
}

function main() {
  const commits = getCommits();
  const changelog = formatChangelog(commits);
  const outPath = path.join(process.cwd(), 'CHANGELOG.md');
  fs.writeFileSync(outPath, changelog);
  console.log('changelog-generator: wrote CHANGELOG.md');
}

if (require.main === module) main();