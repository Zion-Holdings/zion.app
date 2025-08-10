#!/usr/bin/env node

const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

function sh(cmd) {
  try {
    const out = execSync(cmd, { stdio: 'pipe', encoding: 'utf8' });
    return { ok: true, out };
  } catch (e) {
    return { ok: false, out: e.stdout?.toString?.() || e.message };
  }
}

function ensureDir(d) { if (!fs.existsSync(d)) fs.mkdirSync(d, { recursive: true }); }

function main() {
  const logDir = path.join(__dirname, '..', 'automation_logs');
  ensureDir(logDir);
  const lines = [];

  lines.push(`[rapid-sync] start ${new Date().toISOString()}`);

  const steps = [
    { name: 'sitemap', cmd: 'npm run sitemap' },
    { name: 'sync-health-fix', cmd: 'npm run sync-health:run' },
    { name: 'git-fast', cmd: 'npm run git:health' }
  ];

  for (const step of steps) {
    const res = sh(step.cmd);
    lines.push(`[${step.name}] ok=${res.ok}`);
    if (res.out) lines.push(res.out.slice(0, 4000));
  }

  const report = lines.join('\n') + '\n';
  const outFile = path.join(logDir, `rapid-sync-${Date.now()}.log`);
  fs.writeFileSync(outFile, report, 'utf8');
  console.log('Rapid sync report:', outFile);
}

main();