#!/usr/bin/env node
const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

function run(cmd) {
  try {
    return execSync(cmd, { stdio: 'pipe', encoding: 'utf8' });
  } catch (e) {
    return e.stdout?.toString?.() || '';
  }
}

function ensureDir(dir) {
  fs.mkdirSync(dir, { recursive: true });
}

(function main(){
  const ts = new Date().toISOString().replace(/[:.]/g, '-');
  const outDir = path.join(process.cwd(), 'data', 'reports', 'security');
  ensureDir(outDir);
  const file = path.join(outDir, `npm-audit-${ts}.json`);
  const output = run('npm audit --json');
  fs.writeFileSync(file, output, 'utf8');
  console.log('Security audit saved to', file);
})();