#!/usr/bin/env node

const { spawnSync } = require('child_process');
const fs = require('fs');
const path = require('path');

const LOG = path.join(__dirname, 'logs', 'autonomous-meta-orchestrator.log');
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
  if (res.status !== 0) log(`⚠️ Exit ${res.status}`);
}

function executeGeneratedFactories() {
  const dir = path.join(__dirname, 'auto-factories');
  if (!fs.existsSync(dir)) return;
  const entries = fs.readdirSync(dir).filter(f => f.endsWith('.cjs'));
  for (const file of entries) {
    run('node', [path.join(dir, file)]);
  }
}

function cycle() {
  run('node', [path.join(__dirname, 'autonomous-meta-factory.cjs')]);
  executeGeneratedFactories();
}

function start(mode = 'continuous') {
  log('🚀 Autonomous Meta Orchestrator started');
  if (mode === 'continuous') {
    const loop = () => { cycle(); setTimeout(loop, 15 * 60 * 1000); };
    loop();
  } else {
    cycle();
  }
}

if (require.main === module) start(process.argv[2] || 'continuous');

module.exports = { start };