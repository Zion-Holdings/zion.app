#!/usr/bin/env node

const { spawnSync } = require('child_process');
const fs = require('fs');
const path = require('path');

const LOG = path.join(__dirname, 'logs', 'instagram-marketing-orchestrator.log');
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
}

function cycle() {
  run('node', [path.join(__dirname, 'instagram-marketing-analyzer.cjs')]);
  run('node', [path.join(__dirname, 'instagram-marketing-factory.cjs')]);
  const poster = path.join(__dirname, 'instagram-agents', 'post-latest.cjs');
  if (fs.existsSync(poster)) run('node', [poster]);
}

function start(mode = 'continuous') {
  log('🚀 Instagram marketing orchestrator started');
  if (mode === 'continuous') {
    const loop = () => { cycle(); setTimeout(loop, 6 * 60 * 60 * 1000); };
    loop();
  } else {
    cycle();
  }
}

if (require.main === module) start(process.argv[2] || 'continuous');

module.exports = { start };


