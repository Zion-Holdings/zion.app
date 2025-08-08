#!/usr/bin/env node

const { spawnSync } = require('child_process');
const fs = require('fs');
const path = require('path');

const LOG = path.join(__dirname, 'logs', 'site-promo-orchestrator.log');
if (!fs.existsSync(path.dirname(LOG))) fs.mkdirSync(path.dirname(LOG), { recursive: true });

function log(m) { const line = `[${new Date().toISOString()}] ${m}\n`; console.log(m); fs.appendFileSync(LOG, line); }
function run(cmd, args) { log(`▶ ${cmd} ${args.join(' ')}`); const r = spawnSync(cmd, args, { stdio: 'pipe', encoding: 'utf8' }); if (r.stdout) fs.appendFileSync(LOG, r.stdout); if (r.stderr) fs.appendFileSync(LOG, r.stderr); }

function cycle() {
  // Pull discovered links -> feed homepage promo -> apply
  run('node', [path.join(__dirname, 'site-link-crawler.cjs')]);
  run('node', [path.join(__dirname, 'site-promo-analyzer.cjs')]);
  run('node', [path.join(__dirname, 'homepage-promo-analyzer.cjs')]);
  run('node', [path.join(__dirname, 'homepage-promo-factory.cjs')]);
  run('node', [path.join(__dirname, 'homepage-promo-applier.cjs')]);
  // Fix links if broken
  run('node', [path.join(__dirname, 'site-link-fixer.cjs')]);
}

function start(mode = 'continuous') {
  log('🚀 Site promo orchestrator started');
  if (mode === 'continuous') {
    const loop = () => { cycle(); setTimeout(loop, 30 * 60 * 1000); };
    loop();
  } else {
    cycle();
  }
}

if (require.main === module) start(process.argv[2] || 'continuous');

module.exports = { start };


