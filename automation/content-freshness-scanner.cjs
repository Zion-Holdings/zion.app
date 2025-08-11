#!/usr/bin/env node

'use strict';

const fs = require('fs');
const path = require('path');
const { spawnSync } = require('child_process');
const { glob } = require('glob');

function ensureDir(dirPath) { fs.mkdirSync(dirPath, { recursive: true }); }

async function listContentFiles(rootDir) {
  const pageFiles = await glob(['pages/**/*.{js,jsx,ts,tsx,md,mdx}'], {
    cwd: rootDir,
    nodir: true,
    dot: false,
    ignore: ['**/_app.*', '**/_document.*', '**/_error.*', '**/api/**']
  });
  const docFiles = await glob(['docs/**/*.{md,mdx}'], { cwd: rootDir, nodir: true, dot: false });
  return [...pageFiles, ...docFiles];
}

function gitLastCommitUnixTs(filePath) {
  try {
    const res = spawnSync('git', ['log', '-1', '--format=%ct', '--', filePath], { encoding: 'utf8' });
    if (res.status === 0 && res.stdout) {
      const n = parseInt(String(res.stdout).trim(), 10);
      if (!Number.isNaN(n)) return n;
    }
  } catch {}
  try {
    const st = fs.statSync(filePath);
    return Math.floor(st.mtimeMs / 1000);
  } catch {}
  return null;
}

function freshnessScore(days) {
  if (days <= 7) return 100;
  if (days <= 30) return 85;
  if (days <= 90) return 70;
  if (days <= 180) return 55;
  if (days <= 365) return 40;
  return 25;
}

(async function main() {
  const ROOT = process.cwd();
  const files = await listContentFiles(ROOT);
  const now = Math.floor(Date.now() / 1000);
  const entries = [];

  for (const rel of files) {
    const abs = path.join(ROOT, rel);
    const ts = gitLastCommitUnixTs(abs);
    if (!ts) continue;
    const days = Math.max(0, (now - ts) / (24 * 3600));
    const score = freshnessScore(days);
    entries.push({ file: rel, lastUpdatedUnix: ts, daysStale: Number(days.toFixed(1)), freshnessScore: score });
  }

  entries.sort((a, b) => b.daysStale - a.daysStale);

  const payload = {
    generatedAt: new Date().toISOString(),
    totalFiles: entries.length,
    topStale: entries.slice(0, 50),
    summary: {
      p50Days: entries.length ? entries[Math.floor(entries.length * 0.5)].daysStale : null,
      p90Days: entries.length ? entries[Math.floor(entries.length * 0.9)].daysStale : null,
    },
    entries,
  };

  const outDir = path.join(ROOT, 'public', 'automation');
  ensureDir(outDir);
  const outPath = path.join(outDir, 'content-freshness.json');
  fs.writeFileSync(outPath, JSON.stringify(payload, null, 2), 'utf8');
  console.log(`Wrote content freshness to ${outPath} (files=${entries.length}).`);
})();