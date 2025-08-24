#!/usr/bin/env node

'use strict';

const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

function run(cmd) {
  try {
    return execSync(cmd, { encoding: 'utf8' }).trim();
  } catch (err) {
    return '';
  }
}

function parseGitActivity(days = 30) {
  const sinceArg = `--since=${days}.days`;
  const log = run(`git log ${sinceArg} --pretty=%H|%ct`);
  const lines = log ? log.split(/\r?\n/).filter(Boolean) : [];
  const perDay = new Map();
  for (const line of lines) {
    const [, tsStr] = line.split('|');
    const ts = Number(tsStr) * 1000;
    if (!Number.isFinite(ts)) continue;
    const d = new Date(ts);
    const key = d.toISOString().slice(0, 10);
    perDay.set(key, (perDay.get(key) || 0) + 1);
  }
  // changed files stats (approx)
  const shortstat = run(`git log ${sinceArg} --shortstat --pretty=tformat:`);
  let filesChanged = 0, insertions = 0, deletions = 0;
  if (shortstat) {
    const statsLines = shortstat.split(/\r?\n/).filter(Boolean);
    for (const s of statsLines) {
      // example: " 3 files changed, 20 insertions(+), 5 deletions(-)"
      const mFiles = s.match(/(\d+)\s+files?\s+changed/);
      const mIns = s.match(/(\d+)\s+insertions?\(\+\)/);
      const mDel = s.match(/(\d+)\s+deletions?\(-\)/);
      if (mFiles) filesChanged += Number(mFiles[1]) || 0;
      if (mIns) insertions += Number(mIns[1]) || 0;
      if (mDel) deletions += Number(mDel[1]) || 0;
    }
  }
  const series = Array.from(perDay.entries()).sort((a,b) => a[0].localeCompare(b[0]))
    .map(([date, commits]) => ({ date, commits }));
  return {
    generatedAt: new Date().toISOString(),
    windowDays: days,
    totals: {
      commits: series.reduce((a,b) => a + b.commits, 0),
      daysActive: series.length,
      filesChanged,
      insertions,
      deletions,
    },
    series,
  };
}

(function main() {
  const workspace = path.resolve(__dirname, '..');
  const outDir = path.join(workspace, 'public', 'automation');
  const outPath = path.join(outDir, 'repo-velocity.json');
  try { fs.mkdirSync(outDir, { recursive: true }); } catch {}
  const report = parseGitActivity(30);
  fs.writeFileSync(outPath, JSON.stringify(report, null, 2));
  console.log(`[repo-velocity] wrote ${path.relative(workspace, outPath)}`);
})();