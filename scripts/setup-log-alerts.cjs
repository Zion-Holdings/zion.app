#!/usr/bin/env node
const fs = require('fs');
const path = require('path');
const { ErrorMonitor, CONFIG } = require('./error-monitor.cjs');

async function main() {
  const monitor = new ErrorMonitor();
  if (!monitor.init()) {
    process.exit(1);
  }
  await monitor.readLogs();
  const criticals = monitor.errors.filter(
    e => e.level === 'critical' || monitor.containsCriticalKeyword(e.message)
  );
  if (criticals.length > 0) {
    const alertMsg = `[${new Date().toISOString()}] CRITICAL ERRORS DETECTED: ${criticals.length}\n`;
    const alertFile = path.join(CONFIG.logsDir, 'alerts.log');
    fs.appendFileSync(alertFile, alertMsg);
    console.log(alertMsg.trim());
  } else {
    console.log('No critical errors found.');
  }
}

if (require.main === module) {
  main().catch(err => {
    console.error('Failed to setup log alerts:', err);
    process.exit(1);
  });
}
