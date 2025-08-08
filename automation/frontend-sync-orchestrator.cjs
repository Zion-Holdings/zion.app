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

function run(cmd, args, opts = {}) {
  log(`▶ ${cmd} ${args.join(' ')}`);
  const res = spawnSync(cmd, args, { stdio: 'pipe', encoding: 'utf8', ...opts });
  if (res.stdout) fs.appendFileSync(LOG, res.stdout);
  if (res.stderr) fs.appendFileSync(LOG, res.stderr);
  if (res.status !== 0) {
    log(`❌ Command failed (exit ${res.status}): ${cmd} ${args.join(' ')}`);
  }
  return res;
}

function cycle() {
  // 1) Analyze changes → writes report
  run('node', [path.join(__dirname, 'frontend-sync-analyzer.cjs')]);

  // 2) Ensure agents exist for planned actions
  run('node', [path.join(__dirname, 'frontend-sync-factory.cjs')]);

  // 3) Execute agents based on latest report
  try {
    const reportPath = path.join(__dirname, '..', 'data', 'reports', 'frontend-sync', 'frontend-sync-actions.json');
    if (!fs.existsSync(reportPath)) {
      log('ℹ️ No frontend-sync report found; skipping agent execution');
      return;
    }
    const { actions = [] } = JSON.parse(fs.readFileSync(reportPath, 'utf8'));
    const agentsDir = path.join(__dirname, 'frontend-sync-agents');
    for (const action of actions) {
      const agentPath = path.join(agentsDir, `${action}.cjs`);
      if (fs.existsSync(agentPath)) {
        run('node', [agentPath]);
      } else {
        log(`⚠️ Agent not found for action: ${action} (expected ${agentPath})`);
      }
    }
  } catch (err) {
    log(`❌ Failed to execute frontend-sync agents: ${err?.stack || err?.message || String(err)}`);
  }
}

function start(mode = 'continuous') {
  log('🚀 Frontend sync orchestrator started');
  if (mode === 'continuous') {
    const loop = () => { cycle(); setTimeout(loop, 5 * 60 * 1000); };
    loop();
  } else {
    cycle();
  }
}

if (require.main === module) start(process.argv[2] || 'continuous');

module.exports = { start };


