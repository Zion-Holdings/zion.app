/**
 * @file scripts/watchdog.config.js
 * @description Configuration file for the watchdog monitoring system
 */

export const WATCHDOG_CONFIG = {
  // Resource monitoring thresholds
  MEMORY_THRESHOLD: parseFloat(process.env.WATCHDOG_MEMORY_THRESHOLD) || 0.95,
  CPU_THRESHOLD: parseFloat(process.env.WATCHDOG_CPU_THRESHOLD) || 0.95,
  CPU_SUSTAINED_CHECKS: parseInt(process.env.WATCHDOG_CPU_CHECKS) || 3,
  
  // Timing intervals (in milliseconds)
  SYSTEM_CHECK_INTERVAL: parseInt(process.env.WATCHDOG_CHECK_INTERVAL) || 30000,
  SELF_HEAL_COOLDOWN: parseInt(process.env.WATCHDOG_COOLDOWN) || 5 * 60 * 1000,
  
  // Alert configuration
  DISCORD_WEBHOOK_URL: process.env.DISCORD_WEBHOOK_URL || null,
  
  // Log file patterns
  PERF_ERROR_REGEX: new RegExp(process.env.WATCHDOG_PERF_PATTERN || 'error', 'i'),
  SECURITY_PATCH_REGEX: new RegExp(process.env.WATCHDOG_SECURITY_PATTERN || 'patch', 'i'),
  
  // Self-heal command
  HEAL_COMMAND: process.env.WATCHDOG_HEAL_COMMAND || 'git pull && npm install && npm run build && pm2 restart all',
  
  // Logging
  LOG_LEVEL: process.env.WATCHDOG_LOG_LEVEL || 'info', // 'debug', 'info', 'warn', 'error'
  
  // Development mode (less aggressive monitoring)
  DEVELOPMENT_MODE: process.env.NODE_ENV === 'development' || process.env.WATCHDOG_DEV_MODE === 'true'
};

// Adjust thresholds for development mode
if (WATCHDOG_CONFIG.DEVELOPMENT_MODE) {
  WATCHDOG_CONFIG.MEMORY_THRESHOLD = 0.98; // Even more conservative in dev
  WATCHDOG_CONFIG.CPU_THRESHOLD = 0.98;
  WATCHDOG_CONFIG.CPU_SUSTAINED_CHECKS = 5; // Require more checks in dev
  WATCHDOG_CONFIG.SYSTEM_CHECK_INTERVAL = 60000; // Check less frequently in dev
  console.log('Watchdog running in development mode with relaxed thresholds');
} 