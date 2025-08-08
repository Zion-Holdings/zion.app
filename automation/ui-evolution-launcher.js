#!/usr/bin/env node

const path = require('path');
const { spawnSync } = require('child_process');

function runNode(rel, args = []) {
  const abs = path.join(__dirname, rel);
  const res = spawnSync('node', [abs, ...args], { stdio: 'inherit' });
  return res.status || 0;
}

const cmd = process.argv[2] || 'start';

switch (cmd) {
  case 'start':
    process.exit(runNode('ui-evolution-orchestrator.cjs'));
  case 'once':
    process.exit(runNode('ui-evolution-orchestrator.cjs', ['once']));
  case 'analyze':
    process.exit(runNode('ui-evolution-analyzer.cjs'));
  case 'factory':
    process.exit(runNode('ui-evolution-factory.cjs'));
  case 'beautify':
    process.exit(runNode('beautify-hightech-ui.cjs'));
  case 'dashboard':
    process.exit(runNode('ui-evolution-dashboard.cjs'));
  default:
    console.log('Usage: node automation/ui-evolution-launcher.js [start|once|analyze|factory|beautify|dashboard]');
    process.exit(1);
}