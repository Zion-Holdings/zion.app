#!/usr/bin/env node

const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

function git(cmd) { return execSync(cmd, { encoding: 'utf8' }).trim(); }

function main() {
  const since = process.env.CHANGELOG_SINCE || '';
  const logCmd = since
    ? `git log ${since}..HEAD --pretty=format:"- %s (%h) %ad" --date=short -n 200`
    : `git log --pretty=format:"- %s (%h) %ad" --date=short -n 200`;
  let entries = '';
  try { entries = git(logCmd); } catch { entries = ''; }
  const today = new Date().toISOString().slice(0, 10);
  const header = `## ${today}`;
  const content = `# Changelog\n\n${header}\n${entries ? entries + '\n' : '- No significant changes.\n'}`;

  const out = path.join(process.cwd(), 'docs', 'CHANGELOG.md');
  fs.mkdirSync(path.dirname(out), { recursive: true });
  let finalContent = content;
  if (fs.existsSync(out)) {
    const prev = fs.readFileSync(out, 'utf8');
    if (!prev.startsWith('# Changelog')) finalContent = content + '\n' + prev;
    else finalContent = content + '\n' + prev.split('\n').slice(1).join('\n');
  }
  fs.writeFileSync(out, finalContent, 'utf8');
  console.log('Wrote docs/CHANGELOG.md');
}

main();