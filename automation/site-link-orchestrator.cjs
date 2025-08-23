#!/usr/bin/env node

const { spawnSync } = require('child_process');
const fs = require('fs');
const path = require('path');

const LOG = path.join(__dirname, 'logs', 'site-link-orchestrator.log');
if (!fs.existsSync(path.dirname(LOG))) fs.mkdirSync(path.dirname(LOG), { recursive: true });

function log(m) { const line = `[${new Date().toISOString()}] ${m}\n`; console.log(m); fs.appendFileSync(LOG, line); }
function run(cmd, args) { log(`▶ ${cmd} ${args.join(' ')}`); const r = spawnSync(cmd, args, { stdio: 'pipe', encoding: 'utf8' }); if (r.stdout) fs.appendFileSync(LOG, r.stdout); if (r.stderr) fs.appendFileSync(LOG, r.stderr); }

function cycle() {
  // Generate fresh agents for this cycle as part of the new autonomous link factory
  try { run('node', [path.join(__dirname, 'site-link-factory.cjs')]); } catch {}
  run('node', [path.join(__dirname, 'site-link-crawler.cjs')]);
  run('node', [path.join(__dirname, 'site-link-fixer.cjs')]);
}

function start(mode = 'continuous') {
  log('🚀 Site link orchestrator started');
  if (mode === 'continuous') {
    const loop = () => { cycle(); setTimeout(loop, 30 * 60 * 1000); }; // every 30 minutes
    loop();
  } else {
    cycle();
  }
}

if (require.main === module) start(process.argv[2] || 'continuous');

module.exports = { start };


