#!/usr/bin/env node

const { execSync } = require('child_process');

function log(msg) { console.log(`[homepage-orchestrator] ${msg}`); }

function run(cmd) {
  log(`$ ${cmd}`);
  try { const out = execSync(cmd, { stdio: 'pipe', encoding: 'utf8' }); if (out.trim()) log(out.trim()); return true; } catch (e) { log(e.stdout?.toString() || e.message); return false; }
}

function main() {
  run('node automation/homepage-features-factory.cjs');
  run('npm run build');
  run('node automation/git-sync.cjs');
}

main();