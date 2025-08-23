#!/usr/bin/env node
const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

function getRecentCommits(limit = 30) {
  try {
    const raw = execSync(`git log -n ${limit} --pretty=format:%h||%s||%an||%ad --date=iso`, { encoding: 'utf8' });
    return raw.split('\n').map(l => {
      const [hash, subject, author, date] = l.split('||');
      return { hash, subject, author, date };
    });
  } catch (e) {
    return [];
  }
}

function categorize(commits) {
  const cats = { feat: [], fix: [], chore: [], docs: [], refactor: [], perf: [], test: [], other: [] };
  for (const c of commits) {
    const s = c.subject || '';
    if (/^feat/i.test(s)) cats.feat.push(c);
    else if (/^fix/i.test(s)) cats.fix.push(c);
    else if (/^docs/i.test(s)) cats.docs.push(c);
    else if (/^chore/i.test(s)) cats.chore.push(c);
    else if (/^refactor/i.test(s)) cats.refactor.push(c);
    else if (/^perf/i.test(s)) cats.perf.push(c);
    else if (/^test/i.test(s)) cats.test.push(c);
    else cats.other.push(c);
  }
  return cats;
}

function render(cats) {
  const lines = [];
  lines.push(`# Autonomous Changelog`);
  lines.push(`Last update: ${new Date().toISOString()}`);
  for (const [k, arr] of Object.entries(cats)) {
    if (!arr.length) continue;
    lines.push(`\n## ${k.toUpperCase()}`);
    for (const c of arr) {
      lines.push(`- ${c.subject} (${c.hash}, ${c.author}, ${c.date})`);
    }
  }
  return lines.join('\n');
}

(function main(){
  const commits = getRecentCommits(50);
  const cats = categorize(commits);
  const out = render(cats);
  const outDir = path.join(process.cwd(), 'docs');
  if (!fs.existsSync(outDir)) fs.mkdirSync(outDir, { recursive: true });
  fs.writeFileSync(path.join(outDir, 'AUTONOMOUS_CHANGELOG.md'), out);
  console.log('Wrote docs/AUTONOMOUS_CHANGELOG.md');
})();