#!/usr/bin/env node

const { spawnSync } = require('child_process');
const fs = require('fs');
const path = require('path');

const LOG = path.join(__dirname, 'logs', 'monetization-orchestrator.log');
if (!fs.existsSync(path.dirname(LOG))) fs.mkdirSync(path.dirname(LOG), { recursive: true });

<<<<<<< HEAD
function log(m) {
  const line = `[${new Date().toISOString()}] ${m}\n`;
  console.log(m);
  fs.appendFileSync(LOG, line);
}

function run(cmd, args) {
  log(`▶ ${cmd} ${args.join(' ')}`);
  const res = spawnSync(cmd, args, { stdio: 'pipe', encoding: 'utf8' });
=======
function log(m) { const line = `[${new Date().toISOString()}] ${m}\n`; console.log(m); fs.appendFileSync(LOG, line); }
function run(cmd, args, opts = {}) {
  log(`▶ ${cmd} ${args.join(' ')}`);
  const res = spawnSync(cmd, args, { stdio: 'pipe', encoding: 'utf8', ...opts });
>>>>>>> origin/main
  if (res.stdout) fs.appendFileSync(LOG, res.stdout);
  if (res.stderr) fs.appendFileSync(LOG, res.stderr);
}

<<<<<<< HEAD
function executeAgentsOnce() {
  const agentsDir = path.join(__dirname, 'monetization-agents');
  if (!fs.existsSync(agentsDir)) return;
  const files = fs.readdirSync(agentsDir).filter(f => f.endsWith('.cjs'));
  for (const f of files) {
    run('node', [path.join(agentsDir, f)]);
=======
function executeAllIn(dir) {
  if (!fs.existsSync(dir)) return;
  const files = fs.readdirSync(dir).filter(f => f.endsWith('.cjs'));
  for (const f of files) {
    const fp = path.join(dir, f);
    run('node', [fp]);
>>>>>>> origin/main
  }
}

function cycle() {
<<<<<<< HEAD
  run('node', [path.join(__dirname, 'monetization-analyzer.cjs')]);
  run('node', [path.join(__dirname, 'monetization-factory.cjs')]);
  executeAgentsOnce();
=======
  const analyzer = path.join(__dirname, 'monetization-analyzer.cjs');
  const factory = path.join(__dirname, 'monetization-factory.cjs');
  run('node', [analyzer]);
  run('node', [factory]);

  // Execute created factories and agents for further generation.
  // Note: factories that modify app files require MONETIZATION_APPLY=true to actually apply.
  executeAllIn(path.join(__dirname, 'monetization-factories'));
  executeAllIn(path.join(__dirname, 'monetization-agents'));
>>>>>>> origin/main
}

function start(mode = 'continuous') {
  log('🚀 Monetization orchestrator started');
  if (mode === 'continuous') {
<<<<<<< HEAD
    const loop = () => { cycle(); setTimeout(loop, 12 * 60 * 60 * 1000); }; // every 12 hours
=======
    const loop = () => { cycle(); setTimeout(loop, 15 * 60 * 1000); };
>>>>>>> origin/main
    loop();
  } else {
    cycle();
  }
}

if (require.main === module) start(process.argv[2] || 'continuous');

module.exports = { start };