#!/usr/bin/env node
'use strict';

const { execSync } = require('child_process');

function run(cmd){
  try { console.log(`[pm2:resurrect] $ ${cmd}`); execSync(cmd, { stdio: 'inherit' }); }
  catch(e){ console.error('[pm2:resurrect] failed:', e?.message || e); }
}

function main(){
  // Rehydrate from last good state, then ensure logrotate, then save again
  run('pm2 resurrect || true');
  run('pm2 install pm2-logrotate || true');
  run("pm2 set pm2-logrotate:max_size 10M");
  run("pm2 set pm2-logrotate:retain 30");
  run("pm2 set pm2-logrotate:compress true");
  run("pm2 set pm2-logrotate:workerInterval 60");
  run("pm2 set pm2-logrotate:rotateInterval '0 0 * * *'");
  run('pm2 save');
}

main();


