#!/usr/bin/env node

/**
 * @file scripts/clear-logs.js
 * @description Clears watchdog logs and resets monitoring state
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const LOGS_DIR = path.resolve(__dirname, '../logs');

function clearLogs() {
  console.log('🧹 Clearing watchdog logs...');
  
  try {
    // Clear self-heal log
    const selfHealLog = path.join(LOGS_DIR, 'self-heal.log');
    if (fs.existsSync(selfHealLog)) {
      fs.writeFileSync(selfHealLog, `[${new Date().toISOString()}] Logs cleared manually\n`);
      console.log('✅ Cleared self-heal.log');
    }
    
    // Remove PID file if exists
    const pidFile = path.join(LOGS_DIR, 'watchdog.pid');
    if (fs.existsSync(pidFile)) {
      fs.unlinkSync(pidFile);
      console.log('✅ Removed watchdog.pid');
    }
    
    // Clear other log files
    const logFiles = [
      path.join(LOGS_DIR, 'perf', 'hourly.log'),
      path.join(LOGS_DIR, 'security', 'hourly-fix.log')
    ];
    
    logFiles.forEach(logFile => {
      try {
        if (fs.existsSync(logFile)) {
          fs.writeFileSync(logFile, '');
          console.log(`✅ Cleared ${path.basename(logFile)}`);
        }
      } catch (err) {
        console.warn(`⚠️  Could not clear ${logFile}: ${err.message}`);
      }
    });
    
    console.log('🎉 Log cleanup complete!');
    console.log('You can now restart the watchdog service.');
    
  } catch (error) {
    console.error('❌ Error clearing logs:', error.message);
    process.exit(1);
  }
}

// Run if called directly
if (import.meta.url === `file://${process.argv[1]}`) {
  clearLogs();
} 