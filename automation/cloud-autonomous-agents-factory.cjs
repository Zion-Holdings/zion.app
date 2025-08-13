#!/usr/bin/env node

/*
  Cloud Autonomous Agents Factory (Orchestrator)
  - Runs the full loop: crawl -> content factory -> advertiser
  - Designed for CI (GitHub Actions) and fast repeated execution
  - Keeps output deterministic and repository-safe
*/

const { spawnSync } = require('child_process');

function run(cmd, args = [], options = {}) {
  const res = spawnSync(cmd, args, { stdio: 'inherit', shell: false, ...options });
  if (res.status !== 0) {
    throw new Error(`${cmd} ${args.join(' ')} failed with code ${res.status}`);
  }
}

function main() {
  run(process.execPath, ['automation/cloud-site-crawler.cjs']);
  run(process.execPath, ['automation/cloud-content-factory.cjs']);
  run(process.execPath, ['automation/cloud-content-advertiser.cjs']);
  // New diversified pipeline (dossier) — optional best-effort
  try { run(process.execPath, ['automation/cloud-dossier-crawler.cjs']); } catch {}
  try { run(process.execPath, ['automation/cloud-dossier-factory.cjs']); } catch {}
}

if (require.main === module) {
  main();
}

module.exports = { main };


