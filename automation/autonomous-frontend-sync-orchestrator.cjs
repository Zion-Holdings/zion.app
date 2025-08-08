#!/usr/bin/env node

const { spawnSync } = require('child_process');
const fs = require('fs');
const path = require('path');

const LOG = path.join(__dirname, 'logs', 'autonomous-frontend-sync-orchestrator.log');
if (!fs.existsSync(path.dirname(LOG))) fs.mkdirSync(path.dirname(LOG), { recursive: true });

function log(m) {
  const line = `[${new Date().toISOString()}] ${m}\n`;
  console.log(m);
  try { fs.appendFileSync(LOG, line); } catch {}
}

function run(cmd, args, options = {}) {
  const { cwd } = options;
  log(`▶ ${cmd} ${args.join(' ')}${cwd ? ` (cwd=${cwd})` : ''}`);
  const res = spawnSync(cmd, args, { stdio: 'pipe', encoding: 'utf8', cwd });
  if (res.stdout) try { fs.appendFileSync(LOG, res.stdout); } catch {}
  if (res.stderr) try { fs.appendFileSync(LOG, res.stderr); } catch {}
  return res.status ?? 0;
}

function executeAgents(dir) {
  if (!fs.existsSync(dir)) return 0;
  const agents = fs.readdirSync(dir).filter(f => f.endsWith('.cjs'));
  let executed = 0;
  for (const agent of agents) {
    executed += (run('node', [path.join(dir, agent)]) === 0) ? 1 : 0;
  }
  return executed;
}

function cycle() {
  const factoryPath = path.join(__dirname, 'autonomous-frontend-sync-factory.cjs');
  const agentsDir = path.join(__dirname, 'autonomous-frontend-sync-agents');
  // Always refresh analyzer to update actions
  run('node', [path.join(__dirname, 'frontend-sync-analyzer.cjs')]);
  // Generate agents using autonomous factory
  run('node', [factoryPath, 'once']);
  // Execute
  const count = executeAgents(agentsDir);
  log(`✅ Executed ${count} autonomous frontend sync agent(s)`);
}

function start(mode = 'continuous') {
  log('🚀 Autonomous Frontend Sync Orchestrator started');
  if (mode === 'continuous') {
    const loop = () => { cycle(); setTimeout(loop, 5 * 60 * 1000); };
    loop();
  } else {
    cycle();
  }
}

if (require.main === module) start(process.argv[2] || 'continuous');

module.exports = { start };