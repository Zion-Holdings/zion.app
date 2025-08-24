#!/usr/bin/env node
/* Generate/Update CHANGELOG.md from recent commits. */
const fs = require('fs');
const { execSync } = require('child_process');

function getRecentCommits(limit = 50){
  try{
    const out = execSync(`git log -n ${limit} --pretty=format:%h|%ad|%s --date=short`, { encoding: 'utf8' });
    return out.split('\n').filter(Boolean).map(line => {
      const [hash, date, ...rest] = line.split('|');
      const subject = rest.join('|');
      return { hash, date, subject };
    });
  }catch(e){
    console.error('git log failed', e.message);
    return [];
  }
}

function buildChangelog(commits){
  const today = new Date().toISOString().slice(0,10);
  let body = `# Changelog\n\n## ${today}\n`;
  for (const c of commits){
    body += `- ${c.subject} (${c.hash}, ${c.date})\n`;
  }
  return body;
}

(function main(){
  const commits = getRecentCommits(100);
  if (commits.length === 0){
    console.log('No commits found');
    return;
  }
  let existing = '';
  try { existing = fs.readFileSync('CHANGELOG.md','utf8'); } catch {}
  const header = buildChangelog(commits);
  const content = existing ? header + '\n\n' + existing : header + '\n';
  fs.writeFileSync('CHANGELOG.md', content);
  console.log('CHANGELOG.md updated');
})();