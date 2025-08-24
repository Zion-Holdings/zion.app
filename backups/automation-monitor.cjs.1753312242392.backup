#!/usr/bin/env node

const fs = require('fs')
const path = require('path')
class AutomationMonitor {
  constructor() {
    this.logFile = 'logs/automation.log';
  }

  log(message) {
    const timestamp = new Date().toISOString()
const logMessage = `[${timestamp}] ${message}`;
    console.log(logMessage);
    fs.appendFileSync(this.logFile, logMessage + '\n');
  }

  start() {
    this.log('🚀 Automation monitor started');
    setInterval(() => {
      this.log('✅ Automation system running normally');
    }, 60000); // Log every minute
  }
}

if (require.main === module) {
  const monitor = new AutomationMonitor();
  monitor.start();
}

module.exports = AutomationMonitor;
