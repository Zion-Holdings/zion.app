#!/usr/bin/env node
/*
 Alignment Orchestrator
 - Runs fetchers, crawler, analyzer, and factory in sequence
*/

const { execSync } = require('child_process');
const path = require('path');

function run(cmd){
  console.log(`[orchestrator] $ ${cmd}`);
  execSync(cmd, { stdio: 'inherit', cwd: path.resolve(__dirname, '..') });
}

async function main(){
  run('node automation/alignment-chat-fetcher.cjs');
  run('node automation/alignment-google-doc-fetcher.cjs');
  run('node automation/alignment-site-crawler.cjs');
  run('node automation/alignment-analyzer.cjs');
  run('node automation/alignment-factory.cjs');
  console.log('[orchestrator] Alignment pipeline complete');
}

main().catch(err=>{ console.error('[orchestrator] Error:', err); process.exitCode=1; });


