#!/usr/bin/env node

const { spawnSync } = require('child_process');
const fs = require('fs');
const path = require('path');

const LOG = path.join(__dirname, 'logs', 'monetization-orchestrator.log');
if (!fs.existsSync(path.dirname(LOG))) fs.mkdirSync(path.dirname(LOG), { recursive: true });

function log(m) { const line = `[${new Date().toISOString()}] ${m}\n`; console.log(m); fs.appendFileSync(LOG, line); }
function run(cmd, args, opts = {}) {
  log(`▶ ${cmd} ${args.join(' ')}`);
  const res = spawnSync(cmd, args, { stdio: 'pipe', encoding: 'utf8', ...opts });
  if (res.stdout) fs.appendFileSync(LOG, res.stdout);
  if (res.stderr) fs.appendFileSync(LOG, res.stderr);
}

function executeAllIn(dir) {
  if (!fs.existsSync(dir)) return;
  const files = fs.readdirSync(dir).filter(f => f.endsWith('.cjs'));
  for (const f of files) {
    const fp = path.join(dir, f);
    run('node', [fp]);
  }
}

function cycle() {
  const analyzer = path.join(__dirname, 'monetization-analyzer.cjs');
  const factory = path.join(__dirname, 'monetization-factory.cjs');
  run('node', [analyzer]);
  run('node', [factory]);

  // Execute created factories and agents for further generation.
  // Note: factories that modify app files require MONETIZATION_APPLY=true to actually apply.
  executeAllIn(path.join(__dirname, 'monetization-factories'));
  executeAllIn(path.join(__dirname, 'monetization-agents'));
}

function start(mode = 'continuous') {
  log('🚀 Monetization orchestrator started');
  if (mode === 'continuous') {
    const loop = () => { cycle(); setTimeout(loop, 15 * 60 * 1000); };
    loop();
  } else {
    cycle();
  }
}

if (require.main === module) start(process.argv[2] || 'continuous');

module.exports = { start };