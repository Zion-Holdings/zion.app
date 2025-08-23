#!/usr/bin/env node

const { spawnSync } = require('child_process');
const fs = require('fs');
const path = require('path');

const LOG = path.join(__dirname, 'logs', 'spec-dev-orchestrator.log');
if (!fs.existsSync(path.dirname(LOG))) fs.mkdirSync(path.dirname(LOG), { recursive: true });

function log(m) { const line = `[${new Date().toISOString()}] ${m}\n`; console.log(m); fs.appendFileSync(LOG, line); }
function run(cmd, args) { log(`▶ ${cmd} ${args.join(' ')}`); const r = spawnSync(cmd, args, { stdio: 'pipe', encoding: 'utf8' }); if (r.stdout) fs.appendFileSync(LOG, r.stdout); if (r.stderr) fs.appendFileSync(LOG, r.stderr); }

function cycle() {
  // Fetch spec chat, crawl the netlify app, analyze actions, and apply missing pages
  run('node', [path.join(__dirname, 'spec-dev-chat-fetcher.cjs')]);
  run('node', [path.join(__dirname, 'spec-dev-site-crawler.cjs')]);
  run('node', [path.join(__dirname, 'spec-dev-analyzer.cjs')]);
  run('node', [path.join(__dirname, 'spec-dev-dev-applier.cjs')]);
  // Optionally generate auxiliary agents for follow-up work
  run('node', [path.join(__dirname, 'spec-dev-factory.cjs')]);
}

function start(mode = 'continuous') {
  log('🚀 Spec-dev orchestrator started');
  if (mode === 'continuous') {
    const loop = () => { cycle(); setTimeout(loop, 2 * 60 * 60 * 1000); }; // every 2h
    loop();
  } else {
    cycle();
  }
}

if (require.main === module) start(process.argv[2] || 'continuous');

module.exports = { start };


