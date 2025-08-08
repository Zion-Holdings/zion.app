#!/usr/bin/env node

const { spawnSync } = require('child_process');
const fs = require('fs');
const path = require('path');

const LOG = path.join(__dirname, 'logs', 'linkedin-pro-orchestrator.log');
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

function cycle() {
  run('node', [path.join(__dirname, 'linkedin-pro-analyzer.cjs')]);
  run('node', [path.join(__dirname, 'linkedin-pro-factory.cjs')]);
  const poster = path.join(__dirname, 'linkedin-pro-agents', 'post-pro-latest.cjs');
  if (fs.existsSync(poster)) run('node', [poster]);
}

function start(mode = 'continuous') {
  log('🚀 LinkedIn Pro orchestrator started');
  if (mode === 'continuous') {
    const loop = () => { cycle(); setTimeout(loop, 6 * 60 * 60 * 1000); };
    loop();
  } else {
    cycle();
  }
}

if (require.main === module) start(process.argv[2] || 'continuous');

module.exports = { start };


