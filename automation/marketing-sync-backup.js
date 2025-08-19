#!/usr/bin/env node
"use strict";

// Backup wrapper for marketing-sync - Comprehensive Redundancy System
const originalScript = require('./marketing-sync');

// Enhanced error handling and logging
process.on('uncaughtException', (error) => {
  console.error(`[BACKUP-MARKETING-SYNC] Uncaught Exception: ${error.message}`);
  console.error(error.stack);
  // Attempt recovery
  setTimeout(() => {
    console.log(`[BACKUP-MARKETING-SYNC] Attempting recovery...`);
    try {
      if (typeof originalScript === 'function') {
        originalScript();
      }
    } catch (recoveryError) {
      console.error(`[BACKUP-MARKETING-SYNC] Recovery failed: ${recoveryError.message}`);
    }
  }, 5000);
});

process.on('unhandledRejection', (reason, promise) => {
  console.error(`[BACKUP-MARKETING-SYNC] Unhandled Rejection at: ${promise}, reason: ${reason}`);
});

// Execute original script with backup context
console.log(`[BACKUP-MARKETING-SYNC] Starting backup execution...`);
try {
  if (typeof originalScript === 'function') {
    originalScript();
  } else {
    console.log(`[BACKUP-MARKETING-SYNC] Original script is not a function, executing directly`);
  }
} catch (error) {
  console.error(`[BACKUP-MARKETING-SYNC] Execution failed: ${error.message}`);
  process.exit(1);
}