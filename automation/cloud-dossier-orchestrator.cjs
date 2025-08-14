#!/usr/bin/env node

'use strict';

/*
  Cloud Dossier Orchestrator (New)
  - Runs: cloud-dossier-crawler → cloud-dossier-factory → cloud-content-advertiser → git sync
*/

const { spawnSync } = require('child_process');

function run(nodeArgs) {
  const res = spawnSync(process.execPath, nodeArgs, { stdio: 'inherit' });
  if (res.status !== 0) throw new Error(`node ${nodeArgs.join(' ')} failed with code ${res.status}`);
}

function main() {
  run(['automation/cloud-dossier-crawler.cjs']);
  run(['automation/cloud-dossier-factory.cjs']);
  try { run(['automation/cloud-content-advertiser.cjs']); } catch {}
  try { run(['automation/advanced-git-sync.cjs']); }
  catch { try { run(['automation/git-sync.cjs']); } catch {} }
}

if (require.main === module) {
  main();
}

module.exports = { main };

