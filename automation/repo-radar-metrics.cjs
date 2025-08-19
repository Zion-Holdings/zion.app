#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

function run(cmd) {
  try {
    return execSync(cmd, { encoding: 'utf8' }).trim();
  } catch (e) {
    return '';
  }
}

function getCommitCount(sinceHours = 24) {
  const out = run(`git rev-list --count HEAD --since="${sinceHours} hours"`);
  return Number(out || '0');
}

function getChangedFiles(sinceHours = 24) {
  const out = run(`git log --name-only --pretty=format: --since="${sinceHours} hours" | sort | uniq`);
  return out ? out.split('\n').filter(Boolean) : [];
}

function getDiffStats(sinceHours = 24) {
  const out = run(`git diff --shortstat @\{${sinceHours}.hours.ago\} HEAD`);
  // Example: " 15 files changed, 123 insertions(+), 45 deletions(-)"
  const stats = { filesChanged: 0, insertions: 0, deletions: 0 };
  if (!out) return stats;
  const filesMatch = out.match(/(\d+) files? changed/);
  const insMatch = out.match(/(\d+) insertions?\(\+\)/);
  const delMatch = out.match(/(\d+) deletions?\(-\)/);
  if (filesMatch) stats.filesChanged = Number(filesMatch[1]);
  if (insMatch) stats.insertions = Number(insMatch[1]);
  if (delMatch) stats.deletions = Number(delMatch[1]);
  return stats;
}

(function main() {
  try {
    const sinceHours = Number(process.env.RADAR_HOURS || '24');
    const commitCount = getCommitCount(sinceHours);
    const changedFiles = getChangedFiles(sinceHours);
    const diff = getDiffStats(sinceHours);
    const report = {
      generatedAt: new Date().toISOString(),
      windowHours: sinceHours,
      commitCount,
      changedFileCount: changedFiles.length,
      topChangedFiles: changedFiles.slice(0, 50),
      diff,
    };
    const outDir = path.join(process.cwd(), 'data', 'reports');
    fs.mkdirSync(outDir, { recursive: true });
    const outPath = path.join(outDir, 'repo-radar-metrics.json');
    fs.writeFileSync(outPath, JSON.stringify(report, null, 2));
    console.log(`Repo radar metrics written to ${outPath}`);
  } catch (e) {
    console.error('repo-radar-metrics failed:', e.message);
    process.exit(0);
  }
})();