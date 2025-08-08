#!/usr/bin/env node

const { spawnSync } = require('child_process');
const fs = require('fs');
const path = require('path');

const LOG = path.join(__dirname, 'logs', 'monetization-orchestrator.log');
if (!fs.existsSync(path.dirname(LOG))) fs.mkdirSync(path.dirname(LOG), { recursive: true });

function log(m) {
  const line = `[${new Date().toISOString()}] ${m}\n`;
  console.log(m);
  fs.appendFileSync(LOG, line);
}

function run(cmd, args) {
  log(`▶ ${cmd} ${args.join(' ')}`);
  const res = spawnSync(cmd, args, { stdio: 'pipe', encoding: 'utf8' });
  if (res.stdout) fs.appendFileSync(LOG, res.stdout);
  if (res.stderr) fs.appendFileSync(LOG, res.stderr);
}

function executeAgentsOnce() {
  const agentsDir = path.join(__dirname, 'monetization-agents');
  if (!fs.existsSync(agentsDir)) return;
  const files = fs.readdirSync(agentsDir).filter(f => f.endsWith('.cjs'));
  for (const f of files) {
    run('node', [path.join(agentsDir, f)]);
  }
}

function cycle() {
  run('node', [path.join(__dirname, 'monetization-analyzer.cjs')]);
  run('node', [path.join(__dirname, 'monetization-factory.cjs')]);
  executeAgentsOnce();
}

function start(mode = 'continuous') {
  log('🚀 Monetization orchestrator started');
  if (mode === 'continuous') {
    const loop = () => { cycle(); setTimeout(loop, 12 * 60 * 60 * 1000); }; // every 12 hours
    loop();
  } else {
    cycle();
  }
}

if (require.main === module) start(process.argv[2] || 'continuous');

module.exports = { start };