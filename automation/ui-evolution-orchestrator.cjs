#!/usr/bin/env node

const { spawnSync } = require('child_process');
const fs = require('fs');
const path = require('path');

const LOG = path.join(__dirname, 'logs', 'ui-evolution-orchestrator.log');
if (!fs.existsSync(path.dirname(LOG))) fs.mkdirSync(path.dirname(LOG), { recursive: true });

function log(message) {
  const line = `[${new Date().toISOString()}] ${message}\n`;
  console.log(message);
  fs.appendFileSync(LOG, line);
}

function run(cmd, args) {
  log(`▶ ${cmd} ${args.join(' ')}`);
  const res = spawnSync(cmd, args, { stdio: 'pipe', encoding: 'utf8' });
  if (res.stdout) fs.appendFileSync(LOG, res.stdout);
  if (res.stderr) fs.appendFileSync(LOG, res.stderr);
  if (res.status !== 0) log(`⚠️ Exit ${res.status}`);
}

function cycle() {
  run('node', [path.join(__dirname, 'ui-evolution-analyzer.cjs')]);
  run('node', [path.join(__dirname, 'ui-evolution-factory.cjs')]);
}

function start(mode = 'continuous') {
  log('🚀 UI evolution orchestrator started');
  if (mode === 'continuous') {
    const loop = () => { cycle(); setTimeout(loop, 30 * 60 * 1000); };
    loop();
  } else {
    cycle();
  }
}

if (require.main === module) start(process.argv[2] || 'continuous');

module.exports = { start };