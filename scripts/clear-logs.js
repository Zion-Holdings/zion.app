#!/usr/bin/env node

/**
 * @file scripts/clear-logs.js
 * @description Clears watchdog logs and resets monitoring state
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

// Use different variable name to avoid conflict with built-in globals
const currentDirname = path.dirname(fileURLToPath(import.meta.url));
const LOGS_DIR = path.resolve(__dirname, '../logs');

function clearLogs() {
  console.warn('🧹 Clearing watchdog logs...');
  
  try {
    // Clear self-heal log
    const selfHealLog = path.join(LOGS_DIR, 'self-heal.log');
    if (fs.existsSync(selfHealLog)) {
      fs.writeFileSync(selfHealLog, `[${new Date().toISOString()}] Logs cleared manually\n`);
      console.warn('✅ Cleared self-heal.log');
    }
    
    // Remove PID file if exists
    const pidFile = path.join(LOGS_DIR, 'watchdog.pid');
    if (fs.existsSync(pidFile)) {
      fs.unlinkSync(pidFile);
      console.warn('✅ Removed watchdog.pid');
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
          console.warn(`✅ Cleared ${path.basename(logFile)}`);
        }
      } catch {
        console.warn(`⚠️  Could not clear ${logFile}: ${err.message}`);
      }
    });
    
    console.warn('🎉 Log cleanup complete!');
    console.warn('You can now restart the watchdog service.');
    
  } catch {
    console.('❌ Error clearing logs:', .message);
    process.exit(1);
  }
}

// Run if called directly
if (import.meta.url === `file://${process.argv[1]}`) {
  clearLogs();
} 