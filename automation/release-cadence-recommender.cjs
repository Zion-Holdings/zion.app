const { spawnSync } = require('child_process');
const fs = require('fs');
const path = require('path');

function git(args) {
  const res = spawnSync('git', args, { encoding: 'utf8' });
  return (res.stdout || '').trim();
}

(function main() {
  const root = path.resolve(__dirname, '..');
  const weeks = 12;
  const since = `${weeks} weeks ago`;
  const log = git(['log', `--since=${since}`, "--pretty=format:%cI"]);
  const dates = log.split(/\r?\n/).filter(Boolean).map(s => new Date(s));

  const byWeek = new Map();
  for (const d of dates) {
    const year = d.getUTCFullYear();
    const oneJan = new Date(Date.UTC(year, 0, 1));
    const week = Math.floor(((d - oneJan) / 86400000 + oneJan.getUTCDay() + 1) / 7);
    const key = `${year}-W${String(week).padStart(2, '0')}`;
    byWeek.set(key, (byWeek.get(key) || 0) + 1);
  }
  const rows = Array.from(byWeek.entries()).sort(([a], [b]) => a.localeCompare(b));
  const avg = rows.length ? rows.reduce((s, [,c]) => s + c, 0) / rows.length : 0;
  const recommendation = avg >= 10 ? 'Twice weekly' : avg >= 5 ? 'Weekly' : avg >= 2 ? 'Bi-weekly' : 'Monthly';

  const reportDir = path.join(root, 'docs', 'reports');
  try { fs.mkdirSync(reportDir, { recursive: true }); } catch {}

  const md = [];
  md.push('# Release Cadence Recommendation');
  md.push('');
  md.push(`Analyzed last ${weeks} weeks of commits`);
  md.push('');
  md.push('| Week | Commits |');
  md.push('|------|--------:|');
  for (const [wk, c] of rows) md.push(`| ${wk} | ${c} |`);
  md.push('');
  md.push(`Average weekly commits: ${avg.toFixed(2)}`);
  md.push(`Recommended cadence: ${recommendation}`);

  fs.writeFileSync(path.join(reportDir, 'release-cadence.md'), md.join('\n'));
})();