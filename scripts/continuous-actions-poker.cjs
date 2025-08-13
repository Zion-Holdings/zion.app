'use strict';

const { execSync } = require('child_process');

function run(cmd) {
  try { return execSync(cmd, { stdio: 'inherit' }); } catch { /* best-effort */ }
}

function main() {
  // Light-touch keep-alive nudges for selected workflows via workflow_dispatch
  const repo = 'Zion-Holdings/zion.app';
  const workflows = [
    'ultra-rapid-sync.yml',
    'automation-advertiser.yml',
    'knowledge-graph-radar.yml',
    'workflow-radar.yml',
    'ai-changelog.yml',
  ];
  for (const wf of workflows) {
    run(`gh workflow run ${wf} -R ${repo}`);
  }
}

main();


