#!/usr/bin/env node

const { spawnSync } = require('child_process');
const fs = require('fs');
const path = require('path');

const LOG = path.join(__dirname, 'logs', 'frontend-sync-orchestrator.log');
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

function executeAgents() {
  const dir = path.join(__dirname, 'frontend-sync-agents');
  if (!fs.existsSync(dir)) return;
  const agents = fs.readdirSync(dir).filter(f => f.endsWith('.cjs'));
  for (const agent of agents) {
    run('node', [path.join(dir, agent)]);
  }
}

function cycle() {
  run('node', [path.join(__dirname, 'frontend-sync-analyzer.cjs')]);
  run('node', [path.join(__dirname, 'frontend-sync-factory.cjs')]);
  executeAgents();
}

function start(mode = 'continuous') {
  log('🚀 Frontend sync orchestrator started');
  if (mode === 'continuous') {
    const loop = () => { cycle(); setTimeout(loop, 10 * 60 * 1000); };
    loop();
  } else {
    cycle();
  }
}

if (require.main === module) start(process.argv[2] || 'continuous');

module.exports = { start };


