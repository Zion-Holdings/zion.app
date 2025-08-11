#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const { spawnSync } = require('child_process');

function main() {
  const workspace = path.resolve(__dirname, '..');
  const outDir = path.join(workspace, 'data', 'reports');
  fs.mkdirSync(outDir, { recursive: true });

  let tscPath = path.join(workspace, 'node_modules', 'typescript', 'bin', 'tsc');
  let cmd = 'node';
  let args = [tscPath, '--noEmit'];

  try {
    if (!fs.existsSync(tscPath)) {
      // Fall back to system tsc if available
      cmd = 'npx';
      args = ['-y', 'tsc', '--noEmit'];
    }
  } catch {}

  const res = spawnSync(cmd, args, { cwd: workspace, encoding: 'utf8' });
  const stdout = (res.stdout || '').trim();
  const stderr = (res.stderr || '').trim();
  const combined = [stdout, stderr].filter(Boolean).join('\n');

  const errors = [];
  const lines = combined.split(/\r?\n/);
  for (const line of lines) {
    if (!line) continue;
    if (/error TS\d+/.test(line)) errors.push(line);
  }

  const report = {
    generatedAt: new Date().toISOString(),
    status: res.status === 0 ? 'ok' : 'errors',
    errorCount: errors.length,
    sample: errors.slice(0, 25)
  };
  const outPath = path.join(outDir, 'type-tightener-report.json');
  fs.writeFileSync(outPath, JSON.stringify(report, null, 2));

  console.log('[type-tightener] status:', report.status, 'errors:', report.errorCount);
}

main();