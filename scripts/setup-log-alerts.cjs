#!/usr/bin/env node

/**
 * Setup Log Alerts
 * Launches the realtime log monitor and checks webhook configuration.
 */
const { spawn } = require('child_process');
const path = require('path');

function ensureWebhook() {
  const webhook = process.env.DISCORD_WEBHOOK_URL || process.env.SLACK_WEBHOOK_URL;
  if (!webhook) {
    console.warn('⚠️  No webhook configured for log alerts. Set DISCORD_WEBHOOK_URL or SLACK_WEBHOOK_URL.');
  } else {
    console.log('✅ Alert webhook detected');
  }
}

function startMonitor() {
  const monitorScript = path.join(__dirname, 'realtime-log-monitor.cjs');
  const child = spawn('node', [monitorScript], { stdio: 'inherit' });
  child.on('exit', code => {
    console.log(`Realtime log monitor exited with code ${code}`);
  });
}

function main() {
  console.log('🔧 Setting up automated log alerts...');
  ensureWebhook();
  startMonitor();
}

if (require.main === module) {
  main();
}
