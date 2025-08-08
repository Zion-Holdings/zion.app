#!/usr/bin/env node

const { spawnSync } = require('child_process');
const fs = require('fs');
const path = require('path');

const LOG = path.join(__dirname, 'logs', 'alignment-orchestrator.log');
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
  if (res.status !== 0) log(`⚠️ Exit ${res.status}`);
  return res;
}

function orchestrateOnce() {
  // 1) Fetch external guidance (chat + google doc)
  run('node', [path.join(__dirname, 'chat-fetcher.cjs')]);
  run('node', [path.join(__dirname, 'google-doc-fetcher.cjs')]);

  // 2) Crawl the deployed site
  run('node', [path.join(__dirname, 'alignment-crawler.cjs')]);

  // 3) Analyze alignment and generate tasks
  run('node', [path.join(__dirname, 'alignment-analyzer.cjs')]);

  // 4) Feed tasks to alignment factory (creates autonomous agents/scripts)
  run('node', [path.join(__dirname, 'alignment-factory.cjs')]);

  // 5) Run compliance checker to validate project against chat instructions
  run('node', [path.join(__dirname, 'compliance-checker.cjs')]);
}

function start(mode = 'once') {
  log('🚀 Alignment orchestrator started');
  if (mode === 'continuous') {
    const run = async () => {
      orchestrateOnce();
      setTimeout(run, 5 * 60 * 1000);
    };
    run();
  } else {
    orchestrateOnce();
  }
}

if (require.main === module) start(process.argv[2] || 'once');

module.exports = { start, orchestrateOnce };


