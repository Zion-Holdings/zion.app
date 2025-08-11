#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

function log(message) {
  process.stdout.write(`[autonomy-score] ${message}\n`);
}

function readFileSafe(filePath, fallback = '') {
  try {
    return fs.readFileSync(filePath, 'utf8');
  } catch (_) {
    return fallback;
  }
}

function listDirs(dirPath) {
  try {
    return fs
      .readdirSync(dirPath, { withFileTypes: true })
      .filter((d) => d.isDirectory())
      .map((d) => d.name);
  } catch (_) {
    return [];
  }
}

function parseScheduledFunctionNamesFromToml(tomlContent) {
  if (!tomlContent) return [];
  const names = [];
  const lines = tomlContent.split(/\r?\n/);
  for (let i = 0; i < lines.length; i += 1) {
    const line = lines[i].trim();
    if (line === '[[scheduled.functions]]') {
      for (let j = i + 1; j < Math.min(i + 6, lines.length); j += 1) {
        const m = lines[j].match(/name\s*=\s*"([^"]+)"/);
        if (m) {
          names.push(m[1]);
          break;
        }
      }
    }
  }
  return names;
}

function getLastCommitAgeMinutes() {
  try {
    const tsSec = parseInt(execSync('git log -1 --format=%ct', { encoding: 'utf8' }).trim(), 10);
    const nowSec = Math.floor(Date.now() / 1000);
    const ageMin = Math.max(0, Math.floor((nowSec - tsSec) / 60));
    return ageMin;
  } catch (_) {
    return null;
  }
}

(function main() {
  const workspace = process.cwd();
  const netlifyToml = path.join(workspace, 'netlify.toml');
  const reportsRoot = path.join(workspace, 'public', 'reports');
  const outDir = path.join(reportsRoot, 'autonomy');
  fs.mkdirSync(outDir, { recursive: true });

  const tomlContent = readFileSafe(netlifyToml);
  const scheduledFunctions = parseScheduledFunctionNamesFromToml(tomlContent);
  const scheduledCount = scheduledFunctions.length;

  const existingReportDirs = listDirs(reportsRoot);
  const reportsCount = existingReportDirs.length;

  let freshestReportAgeMin = null;
  for (const dir of existingReportDirs) {
    const indexHtml = path.join(reportsRoot, dir, 'index.html');
    try {
      const stat = fs.statSync(indexHtml);
      const ageMin = Math.floor((Date.now() - stat.mtimeMs) / (60 * 1000));
      if (freshestReportAgeMin === null || ageMin < freshestReportAgeMin) {
        freshestReportAgeMin = ageMin;
      }
    } catch (_) {}
  }

  const lastCommitAgeMin = getLastCommitAgeMinutes();

  // Scoring model (0-100)
  // - Scheduled functions density: up to 40 points
  // - Reports coverage: up to 30 points
  // - Freshness (commit staleness and report freshness): up to 30 points
  const schedScore = Math.min(1, scheduledCount / 40) * 40;
  const reportScore = Math.min(1, reportsCount / 12) * 30;
  let freshnessScore = 0;
  if (lastCommitAgeMin !== null) {
    const commitFreshness = Math.max(0, Math.min(1, 1 - lastCommitAgeMin / 180)); // full at <0m, 0 at >=180m
    const reportFreshness = freshestReportAgeMin === null ? 0.5 : Math.max(0, Math.min(1, 1 - freshestReportAgeMin / 180));
    freshnessScore = ((commitFreshness + reportFreshness) / 2) * 30;
  } else {
    freshnessScore = 15;
  }

  const totalScore = Math.round(schedScore + reportScore + freshnessScore);

  const summary = {
    generatedAt: new Date().toISOString(),
    score: totalScore,
    breakdown: {
      scheduledFunctions: { count: scheduledCount, score: Math.round(schedScore) },
      reports: { count: reportsCount, score: Math.round(reportScore), directories: existingReportDirs },
      freshness: { lastCommitAgeMin, freshestReportAgeMin, score: Math.round(freshnessScore) },
    },
    signals: {
      scheduledFunctions,
    },
  };

  fs.writeFileSync(path.join(outDir, 'summary.json'), JSON.stringify(summary, null, 2));

  const html = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <title>Zion — Autonomy Score</title>
  <meta name="description" content="Live autonomy score computed from scheduled cloud automations, reports coverage, and freshness." />
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;800&display=swap" rel="stylesheet">
  <style>
    body { font-family: Inter, ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, 'Helvetica Neue', Arial; background:#050816; color:#e5e7eb; margin:0; padding:2rem; }
    .container { max-width: 960px; margin: 0 auto; }
    .card { border:1px solid rgba(255,255,255,0.1); background:rgba(255,255,255,0.04); border-radius:14px; padding:20px; margin-bottom:12px; }
    .title { font-size:28px; font-weight:800; background: linear-gradient(90deg,#f0abfc,#22d3ee); -webkit-background-clip:text; background-clip:text; color:transparent; }
    .pill { display:inline-block; padding:4px 10px; border-radius:9999px; border:1px solid rgba(255,255,255,0.12); background:rgba(255,255,255,0.05); font-size:12px; margin-right:6px; }
    .grid { display:grid; grid-template-columns: repeat(auto-fill,minmax(240px,1fr)); gap:12px; }
    .muted { color: rgba(255,255,255,0.7); font-size: 14px; }
    .score { font-size:64px; font-weight:800; line-height:1; }
    a { color:#67e8f9; text-decoration: none; }
  </style>
</head>
<body>
<div class="container">
  <div class="card">
    <div class="title">Autonomy Score</div>
    <div class="muted">Computed at ${summary.generatedAt}</div>
    <div class="score">${summary.score}</div>
    <div class="muted">Higher is better (0-100)</div>
  </div>
  <div class="grid">
    <div class="card">
      <div><strong>Scheduled Functions</strong></div>
      <div class="muted">Count: ${scheduledCount} • Score: ${Math.round(schedScore)}</div>
    </div>
    <div class="card">
      <div><strong>Reports Coverage</strong></div>
      <div class="muted">Reports: ${reportsCount} • Score: ${Math.round(reportScore)}</div>
    </div>
    <div class="card">
      <div><strong>Freshness</strong></div>
      <div class="muted">Last commit age: ${lastCommitAgeMin ?? 'n/a'} min • Freshest report age: ${freshestReportAgeMin ?? 'n/a'} min • Score: ${Math.round(freshnessScore)}</div>
    </div>
  </div>
  <div class="card">
    <div><strong>Signals</strong></div>
    <div class="muted">${scheduledFunctions.map((n)=>`<span class='pill'>${n}</span>`).join(' ') || 'No scheduled functions detected'}</div>
  </div>
  <div class="muted">Artifacts: <a href="/reports/autonomy/summary.json">summary.json</a></div>
</div>
</body>
</html>`;

  fs.writeFileSync(path.join(outDir, 'index.html'), html);
  log(`Wrote ${path.relative(workspace, path.join(outDir, 'index.html'))}`);
})();