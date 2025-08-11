'use strict';

const path = require('path');
const { spawn } = require('child_process');
const cron = require('node-cron');

const SCRIPT = path.join(process.cwd(), 'automation', 'front-auto-advertiser.cjs');

function runOnce() {
  const child = spawn(process.execPath, [SCRIPT], { stdio: 'inherit' });
  child.on('close', (code) => {
    console.log(`[front-advertiser-cron] run finished with code ${code}`);
  });
}

console.log('[front-advertiser-cron] starting schedule: every 6 hours');
runOnce();
cron.schedule('0 */6 * * *', () => {
  console.log('[front-advertiser-cron] scheduled run');
  runOnce();
});