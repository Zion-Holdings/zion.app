#!/usr/bin/env node
"use strict";

// Backup wrapper for pm2-auto-sync - Comprehensive Redundancy System
const originalScript = require('./pm2-auto-sync');

// Enhanced error handling and logging
process.on('uncaughtException', (error) => {
  console.error(`[BACKUP-PM2-AUTO-SYNC] Uncaught Exception: ${error.message}`);
  console.error(error.stack);
  // Attempt recovery
  setTimeout(() => {
    console.log(`[BACKUP-PM2-AUTO-SYNC] Attempting recovery...`);
    try {
      if (typeof originalScript === 'function') {
        originalScript();
      }
    } catch (recoveryError) {
      console.error(`[BACKUP-PM2-AUTO-SYNC] Recovery failed: ${recoveryError.message}`);
    }
  }, 5000);
});

process.on('unhandledRejection', (reason, promise) => {
  console.error(`[BACKUP-PM2-AUTO-SYNC] Unhandled Rejection at: ${promise}, reason: ${reason}`);
});

// Execute original script with backup context
console.log(`[BACKUP-PM2-AUTO-SYNC] Starting backup execution...`);
try {
  if (typeof originalScript === 'function') {
    originalScript();
  } else {
    console.log(`[BACKUP-PM2-AUTO-SYNC] Original script is not a function, executing directly`);
  }
} catch (error) {
  console.error(`[BACKUP-PM2-AUTO-SYNC] Execution failed: ${error.message}`);
  process.exit(1);
}