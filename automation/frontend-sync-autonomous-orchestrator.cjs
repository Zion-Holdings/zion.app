#!/usr/bin/env node

const { spawnSync, spawn } = require('child_process');
const fs = require('fs');
const path = require('path');

const LOG = path.join(__dirname, 'logs', 'frontend-sync-autonomous-orchestrator.log');
if (!fs.existsSync(path.dirname(LOG))) fs.mkdirSync(path.dirname(LOG), { recursive: true });

function log(m) {
  const line = `[${new Date().toISOString()}] ${m}\n`;
  console.log(m);
  fs.appendFileSync(LOG, line);
}

function run(cmd, args, opts = {}) {
  log(`▶ ${cmd} ${args.join(' ')}`);
  const res = spawnSync(cmd, args, { stdio: 'pipe', encoding: 'utf8', ...opts });
  if (res.stdout) fs.appendFileSync(LOG, res.stdout);
  if (res.stderr) fs.appendFileSync(LOG, res.stderr);
  return res.status === 0;
}

function executeAgents() {
  const dir = path.join(__dirname, 'frontend-sync-autonomous-agents');
  if (!fs.existsSync(dir)) return 0;
  const agents = fs.readdirSync(dir).filter(f => f.endsWith('.cjs'));
  for (const agent of agents) {
    run('node', [path.join(dir, agent)]);
  }
  return agents.length;
}

function cycle() {
  run('node', [path.join(__dirname, 'frontend-sync-autonomous-analyzer.cjs')]);
  run('node', [path.join(__dirname, 'frontend-sync-autonomous-factory.cjs')]);
  const count = executeAgents();
  log(`✅ Executed ${count} autonomous frontend sync agents`);
}

function start(mode = 'continuous', intervalMs = 5 * 60 * 1000) {
  log('🚀 Frontend sync autonomous orchestrator started');
  if (mode === 'continuous') {
    const loop = () => { try { cycle(); } catch (e) { log(`❌ Cycle error: ${e.message}`); } setTimeout(loop, intervalMs); };
    loop();
  } else {
    cycle();
  }
}

if (require.main === module) {
  const mode = process.argv[2] || 'continuous';
  const interval = Number(process.argv[3]) || 5 * 60 * 1000;
  start(mode, interval);
}

module.exports = { start };