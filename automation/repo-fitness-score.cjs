const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

function safeExec(cmd) {
  try {
    return execSync(cmd, { encoding: 'utf8' }).trim();
  } catch (e) {
    return '';
  }
}

function getCommitTimestamps(days = 14) {
  const since = new Date(Date.now() - days * 24 * 60 * 60 * 1000);
  const sinceIso = since.toISOString();
  const log = safeExec(`git log --since='${sinceIso}' --pretty=format:%ct`);
  if (!log) return [];
  return log.split('\n').map((s) => Number(s) * 1000).filter(Boolean).sort((a, b) => a - b);
}

function computeFitness() {
  const timestamps = getCommitTimestamps(14);
  const commitCount = timestamps.length;
  const daysObserved = 14;

  const commitsPerDay = commitCount / daysObserved;

  let medianHoursBetween = null;
  if (timestamps.length > 1) {
    const deltas = [];
    for (let i = 1; i < timestamps.length; i += 1) deltas.push((timestamps[i] - timestamps[i - 1]) / (1000 * 60 * 60));
    deltas.sort((a, b) => a - b);
    const mid = Math.floor(deltas.length / 2);
    medianHoursBetween = deltas.length % 2 === 0 ? (deltas[mid - 1] + deltas[mid]) / 2 : deltas[mid];
  }

  const score = Math.round(Math.min(100, Math.max(0, (commitsPerDay * 20) + (medianHoursBetween ? Math.max(0, (24 - Math.min(24, medianHoursBetween))) * 2 : 10))));

  const authorsRaw = safeExec(`git log --since='${new Date(Date.now() - 14*24*60*60*1000).toISOString()}' --pretty='%an'`);
  const authors = {};
  for (const line of (authorsRaw ? authorsRaw.split('\n') : [])) {
    authors[line] = (authors[line] || 0) + 1;
  }
  const topContributors = Object.entries(authors).sort((a,b)=>b[1]-a[1]).slice(0,5).map(([name, commits])=>({ name, commits }));

  return {
    generatedAt: new Date().toISOString(),
    windowDays: daysObserved,
    commitCount,
    commitsPerDay: Number(commitsPerDay.toFixed(2)),
    medianHoursBetween: medianHoursBetween !== null ? Number(medianHoursBetween.toFixed(2)) : null,
    score,
    topContributors,
  };
}

function writeReport() {
  const report = computeFitness();
  const reportsDir = path.join(__dirname, '..', 'public', 'reports');
  if (!fs.existsSync(reportsDir)) fs.mkdirSync(reportsDir, { recursive: true });
  fs.writeFileSync(path.join(reportsDir, 'repo-fitness.json'), JSON.stringify(report, null, 2));
  return report;
}

if (require.main === module) {
  console.log(JSON.stringify(writeReport(), null, 2));
}

module.exports = { writeReport };