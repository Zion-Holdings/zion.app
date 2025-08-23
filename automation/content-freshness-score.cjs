#!/usr/bin/env node

'use strict';

const fs = require('fs');
const path = require('path');

const ROOT = process.cwd();
const TARGET_DIRS = [path.join(ROOT, 'pages'), path.join(ROOT, 'components')];
const OUT_DIR = path.join(ROOT, 'data', 'reports', 'content-freshness');

function ensureDir(p) { if (!fs.existsSync(p)) fs.mkdirSync(p, { recursive: true }); }
ensureDir(OUT_DIR);

function listFiles(dir) {
  const out = [];
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  for (const entry of entries) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      if (entry.name.startsWith('_') || entry.name.startsWith('.')) continue;
      out.push(...listFiles(full));
    } else if (/\.(tsx|ts|js|jsx|md|mdx)$/i.test(entry.name)) {
      out.push(full);
    }
  }
  return out;
}

function estimateFreshnessScore(stats) {
  const now = Date.now();
  const modifiedMs = new Date(stats.mtime).getTime();
  const ageDays = Math.max(0, (now - modifiedMs) / (1000 * 60 * 60 * 24));
  // Simple scoring: 100 when modified today, decays with age
  const freshness = Math.max(0, Math.round(100 - Math.min(100, ageDays)));
  return { ageDays: Number(ageDays.toFixed(2)), freshness };
}

function analyzeFile(filePath) {
  let size = 0;
  try { size = fs.statSync(filePath).size; } catch { size = 0; }
  const stats = fs.statSync(filePath);
  const { ageDays, freshness } = estimateFreshnessScore(stats);
  const rel = path.relative(ROOT, filePath);
  return {
    file: rel,
    size,
    mtime: stats.mtime.toISOString ? stats.mtime.toISOString() : String(stats.mtime),
    ageDays,
    freshness,
  };
}

(function main() {
  const files = TARGET_DIRS.filter((d) => fs.existsSync(d)).flatMap((d) => listFiles(d));
  const results = files.map(analyzeFile).sort((a, b) => a.freshness - b.freshness || b.ageDays - a.ageDays).slice(0, 500);
  const summary = {
    generatedAt: new Date().toISOString(),
    scanned: files.length,
    mostStale: results.slice(0, 50),
    stats: {
      avgFreshness: Number((results.reduce((s, r) => s + r.freshness, 0) / Math.max(1, results.length)).toFixed(2)),
      maxAgeDays: results.length ? results[0].ageDays : 0,
    },
  };
  const latestPath = path.join(OUT_DIR, 'latest.json');
  fs.writeFileSync(latestPath, JSON.stringify(summary, null, 2));
  console.log(`Content Freshness report written to ${latestPath}`);
})();