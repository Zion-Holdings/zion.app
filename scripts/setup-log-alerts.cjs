const fs = require('fs')
const path = require('path')
const { ErrorMonitor, CONFIG } = require('./error-monitor.cjs');

async function main() {
  const monitor = new ErrorMonitor();
  if (!monitor.init()) {
    process.exit(1);
  }
  await monitor.readLogs()
const criticals = monitor.errors.filter(
    (e) => e.level === 'critical' || monitor.containsCriticalKeyword(e.message),
  );
  if (criticals.length > 0) {
    const alertMsg = `[ALERT] [${new Date().toISOString()}] CRITICAL ERRORS DETECTED: ${criticals.length}\n`
const alertFile = path.join(CONFIG.logsDir, 'alerts.log');
    fs.appendFileSync(alertFile, alertMsg);
    console.warn(alertMsg.trim());
  } else {
    console.warn('No critical errors found.');
  }
}

if (require.main === module) {
  main().catch((err) => {
    console.error('Failed to setup log alerts:', err);
    process.exit(1);
  });
}


// Graceful shutdown handling
process.on('SIGINT', () => {
  console.log('\n🛑 Received SIGINT, shutting down gracefully...');
  // Add cleanup logic here
  process.exit(0);
});

process.on('SIGTERM', () => {
  console.log('\n🛑 Received SIGTERM, shutting down gracefully...');
  // Add cleanup logic here
  process.exit(0);
});

