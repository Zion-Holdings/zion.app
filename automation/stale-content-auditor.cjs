#!/usr/bin/env node

'use strict';

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

function sh(cmd) {
  try {
    return execSync(cmd, { stdio: ['ignore', 'pipe', 'pipe'], encoding: 'utf8' }).trim();
  } catch (e) {
    return '';
  }
}

function listFiles(rootDir, subdirs) {
  const files = [];
  for (const sub of subdirs) {
    const dir = path.join(rootDir, sub);
    if (!fs.existsSync(dir)) continue;
    const walk = (p) => {
      const entries = fs.readdirSync(p, { withFileTypes: true });
      for (const ent of entries) {
        const abs = path.join(p, ent.name);
        if (ent.isDirectory()) {
          // skip heavy/binary dirs
          if (/^\.|node_modules|\.git|out|public\/(images|assets)/.test(ent.name)) continue;
          walk(abs);
        } else {
          if (/\.(png|jpg|jpeg|gif|webp|svg|ico|pdf|zip)$/i.test(ent.name)) continue;
          files.push(abs);
        }
      }
    };
    walk(dir);
  }
  return files;
}

function getLastCommitIso(filePath) {
  const out = sh(`git log -1 --format=%cI -- ${JSON.stringify(filePath)}`);
  return out || null;
}

function daysBetween(aIso, bIso) {
  const a = new Date(aIso);
  const b = new Date(bIso);
  const ms = Math.abs(b.getTime() - a.getTime());
  return Math.floor(ms / (1000 * 60 * 60 * 24));
}

(function main() {
  const ROOT = path.resolve(__dirname, '..');
  const nowIso = new Date().toISOString();
  const candidates = listFiles(ROOT, ['pages', 'components', 'docs']);

  const items = candidates.map((absPath) => {
    const rel = path.relative(ROOT, absPath).replace(/\\/g, '/');
    const lastCommit = getLastCommitIso(absPath);
    const fileMtimeIso = new Date(fs.statSync(absPath).mtimeMs).toISOString();
    const ageDays = lastCommit ? daysBetween(lastCommit, nowIso) : daysBetween(fileMtimeIso, nowIso);
    return { path: rel, lastCommitIso: lastCommit, fileMtimeIso, ageDays };
  }).sort((a, b) => b.ageDays - a.ageDays);

  const staleThresholdDays = Number(process.env.STALE_CONTENT_DAYS || 90);
  const stale = items.filter((i) => i.ageDays >= staleThresholdDays);

  const reportDir = path.join(ROOT, 'public', 'reports', 'stale-content');
  fs.mkdirSync(reportDir, { recursive: true });

  // Write JSON
  const json = {
    generatedAt: nowIso,
    staleThresholdDays,
    totalScanned: items.length,
    totalStale: stale.length,
    top50Stale: stale.slice(0, 50),
  };
  fs.writeFileSync(path.join(reportDir, 'index.json'), JSON.stringify(json, null, 2));

  // Write HTML (simple, lightweight)
  const rows = stale.slice(0, 200).map((i) => (
    `<tr><td style="padding:6px 10px;border-bottom:1px solid #223">${i.path}</td><td style="padding:6px 10px;border-bottom:1px solid #223">${i.lastCommitIso || i.fileMtimeIso}</td><td style="padding:6px 10px;border-bottom:1px solid #223;text-align:right">${i.ageDays}</td></tr>`
  )).join('\n');

  const html = `<!doctype html>
<html>
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <title>Stale Content Report</title>
  <meta name="description" content="Files that haven't been updated recently across pages, components, and docs." />
  <style>
    body{background:#0b1220;color:#e6ebff;font-family:ui-sans-serif,system-ui,-apple-system,Segoe UI,Roboto}
    a{color:#7dd3fc}
    .wrap{max-width:1100px;margin:24px auto;padding:0 16px}
    .card{background:#0f172a;border:1px solid #1f2a44;border-radius:12px;padding:16px}
    h1{font-size:20px;margin:0 0 8px}
    table{width:100%;border-collapse:collapse;font-size:14px}
    thead td{color:#9fb3ff}
    tbody tr:hover{background:#111a33}
    .meta{color:#9fb3ff;font-size:12px}
  </style>
</head>
<body>
  <div class="wrap">
    <h1>Stale Content Report</h1>
    <div class="meta">Generated at ${nowIso}. Threshold = ${staleThresholdDays} days. Scanned ${items.length} files, found ${stale.length} stale.</div>
    <div class="card" style="margin-top:12px">
      <table>
        <thead>
          <tr><td>Path</td><td>Last change</td><td style="text-align:right">Age (days)</td></tr>
        </thead>
        <tbody>
          ${rows}
        </tbody>
      </table>
      <div class="meta" style="margin-top:8px">Full JSON: <a href="./index.json">index.json</a></div>
    </div>
    <div style="margin-top:16px" class="meta">Tip: Reduce threshold via env STALE_CONTENT_DAYS to surface more candidates.</div>
  </div>
</body>
</html>`;

  fs.writeFileSync(path.join(reportDir, 'index.html'), html, 'utf8');

  // Update a small public registry summary
  try {
    const registryDir = path.join(ROOT, 'public', 'automation');
    fs.mkdirSync(registryDir, { recursive: true });
    const registryPath = path.join(registryDir, 'content-registry.json');
    let reg = {};
    try { reg = JSON.parse(fs.readFileSync(registryPath, 'utf8')); } catch {}
    reg.staleContent = { updatedAt: nowIso, totalStale: stale.length, report: '/reports/stale-content/index.html' };
    fs.writeFileSync(registryPath, JSON.stringify(reg, null, 2));
  } catch {}

  console.log(`Stale content report generated: ${path.relative(ROOT, reportDir)}`);
})();