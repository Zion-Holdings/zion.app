/**
 * @file scripts/watchdog.js
 * @description Monitors specified log files for recurring error patterns or critical update messages.
 * If a predefined number of consecutive issues are detected (e.g., 3 performance errors or 3 security patches),
 * it automatically triggers a self-healing process.
 * This script is intended to be run continuously, ideally with a process manager like PM2.
 *
 * To run: node scripts/watchdog.js
 * For production, run this script using a process manager like PM2 (e.g., pm2 start scripts/watchdog.js --name my-watchdog)
 */

import { Tail } from 'tail';
import path from 'path';
import { exec } from 'child_process';
import fs from 'fs';
import os from 'os-utils';
import axios from 'axios';
import { pathToFileURL, fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

// --- Discord Configuration ---
const DISCORD_WEBHOOK_URL = process.env.DISCORD_WEBHOOK_URL;

// --- Global Error Logging Function ---
/**
 * Logs an error message to the console with a timestamp and a standard prefix.
 * Optionally includes details from an error object.
 * @param {string} message - The primary error message.
 * @param {Error|null} [errorObject=null] - Optional error object to log its message and stack.
 */
function logErrorToProduction(message, errorObject = null) {
  const timestamp = new Date().toISOString();
  console.error(`[${timestamp}] WATCHDOG ERROR: ${message}`);
  if (errorObject) {
    console.error(errorObject.message);
    if (errorObject.stack) {
      console.error(errorObject.stack);
    }
  }
}

// --- Discord Alert Function ---
/**
 * Sends an alert message to a configured Discord webhook.
 * @param {string} alertMessage - The message to send to Discord.
 */
async function sendDiscordAlert(alertMessage) {
  if (!DISCORD_WEBHOOK_URL) {
    const logMsg = 'Discord Webhook URL not configured (DISCORD_WEBHOOK_URL environment variable is not set). Skipping alert.';
    console.warn(logMsg);
    appendToSelfHealLog(`[${new Date().toISOString()}] WARN: ${logMsg}\n`);
    return;
  }

  try {
    const payload = { content: alertMessage };
    // It's important to set a timeout for the HTTP request
    // to prevent the watchdog from hanging indefinitely.
    await axios.post(DISCORD_WEBHOOK_URL, payload, { timeout: 10000 }); // 10 seconds timeout
    const logMsg = `Successfully sent alert to Discord.`; // Message itself can be long, so not logging it here.
    console.log(logMsg);
    appendToSelfHealLog(`[${new Date().toISOString()}] ${logMsg}\n`);
  } catch (error) {
    let errorMessage = `Failed to send alert to Discord.`;
    if (error.code === 'ECONNABORTED') {
        errorMessage += ` Request timed out.`;
    } else if (error.response) {
      errorMessage += ` Status: ${error.response.status}, Data: ${JSON.stringify(error.response.data)}`;
    } else if (error.request) {
      errorMessage += ` No response received.`;
    } else {
      errorMessage += ` Error: ${error.message}`;
    }
    logErrorToProduction(errorMessage); // Log full error to console via logError
    appendToSelfHealLog(`[${new Date().toISOString()}] ERROR: ${errorMessage}\n`); // Log concise error to self-heal log
  }
}

// --- Global Unhandled Error Handlers ---
/**
 * Handles unhandled promise rejections.
 * Logs the error details using the logError function.
 */
process.on('unhandledRejection', (reason, promise) => {
  logErrorToProduction('Unhandled Rejection. Promise: ' + promise + ' Reason: ' + (reason instanceof Error ? reason.message : reason), reason instanceof Error ? reason : null);
});

/**
 * Handles uncaught exceptions.
 * Logs the error details using the logError function.
 * Note: After an uncaught exception, the application might be in an unstable state.
 * Depending on the severity, a process manager (like PM2) might be configured to restart it.
 */
process.on('uncaughtException', (error) => {
  logErrorToProduction('Uncaught Exception.', error);
  // process.exit(1); // Optionally exit. For a watchdog, continuous monitoring is often preferred if possible.
});

// --- Configuration: File Paths ---
/**
 * Base path for all watchdog logs. Defaults to a `logs` directory within the
 * current working directory. This avoids issues where `__dirname` resolves to
 * a read-only path such as `/app` in some deploy environments.
 */
// Determine the base path for logs. If WATCHDOG_LOG_PATH is provided but
// cannot be created/written (e.g., due to permissions or non-existent mount),
// fall back to a `logs` directory within the current working directory.
function determineBaseLogPath() {
  const envPath = process.env.WATCHDOG_LOG_PATH;
  if (envPath) {
    try {
      fs.mkdirSync(envPath, { recursive: true });
      fs.accessSync(envPath, fs.constants.W_OK);
      return envPath;
    } catch (e) {
      logErrorToProduction(`Failed to use WATCHDOG_LOG_PATH at ${envPath}. Falling back to local logs directory.`, e);
    }
  }

  const cwdPath = path.resolve(process.cwd(), 'logs');
  try {
    fs.mkdirSync(cwdPath, { recursive: true });
    fs.accessSync(cwdPath, fs.constants.W_OK);
    return cwdPath;
  } catch (e) {
    logErrorToProduction(`Failed to create cwd log directory at ${cwdPath}`, e);
  }

  const fallback = path.resolve(__dirname, '../logs');
  try {
    fs.mkdirSync(fallback, { recursive: true });
    fs.accessSync(fallback, fs.constants.W_OK);
    return fallback;
  } catch (e) {
    logErrorToProduction(`Failed to create fallback log directory at ${fallback}`, e);
  }

  const tmpPath = '/tmp/watchdog-logs';
  try {
    fs.mkdirSync(tmpPath, { recursive: true });
    fs.accessSync(tmpPath, fs.constants.W_OK);
    return tmpPath;
  } catch (e) {
    logErrorToProduction(`Failed to create tmp log directory at ${tmpPath}`, e);
  }

  return cwdPath;
}

const BASE_LOG_PATH = determineBaseLogPath();
/** @const {string} PERF_LOG_FILE - Path to the performance log file to be monitored. */
const PERF_LOG_FILE = path.join(BASE_LOG_PATH, 'perf', 'hourly.log');
/** @const {string} SECURITY_LOG_FILE - Path to the security log file to be monitored for patch notifications. */
const SECURITY_LOG_FILE = path.join(BASE_LOG_PATH, 'security', 'hourly-fix.log');
/** @const {string} SELF_HEAL_LOG_FILE - Path to the log file where this watchdog script records its own actions and errors. */
const SELF_HEAL_LOG_FILE = path.join(BASE_LOG_PATH, 'self-heal.log');

// Ensure log directories and files exist to avoid Tail initialization errors
function ensureFileExists(filePath) {
  try {
    fs.mkdirSync(path.dirname(filePath), { recursive: true });
    if (!fs.existsSync(filePath)) {
      fs.closeSync(fs.openSync(filePath, 'a'));
    }
  } catch (err) {
    logErrorToProduction(`Failed to create log file: ${filePath}`, err);
  }
}

[PERF_LOG_FILE, SECURITY_LOG_FILE, SELF_HEAL_LOG_FILE].forEach(ensureFileExists);

// --- Configuration: Error Patterns and Healing Actions ---
const CODEX_API_URL = process.env.CODEX_API_URL || 'http://localhost:3001/api/codex/suggest-fix'; // Assuming server runs on 3001

const HEAL_ACTION_TYPES = {
  GENERAL_RESTART: 'GENERAL_RESTART',
  CODEX_FIX_FILE: 'CODEX_FIX_FILE',
  RESTART_SERVICE: 'RESTART_SERVICE',
  CHECK_DB_HEALTH: 'CHECK_DB_HEALTH',
};

const ERROR_PATTERNS_CONFIG = [
  {
    name: 'DatabaseConnectionError',
    regex: /Error: connect ECONNREFUSED .*?:5432/i, // Example for PostgreSQL
    logFile: 'perf', // 'perf' or 'security' or 'generic'
    actionType: HEAL_ACTION_TYPES.CHECK_DB_HEALTH,
    priority: 1,
    maxStreak: 2,
    extractContext: (logLine) => ({ details: logLine.match(/Error: connect ECONNREFUSED (.*?):5432/i)?.[0] })
  },
  {
    name: 'NextJSComponentRenderError',
    regex: /TypeError: Cannot read properties of undefined \(reading '.*?'\) at .*? (\/.*?\.js:\d+:\d+)/i,
    logFile: 'perf',
    actionType: HEAL_ACTION_TYPES.CODEX_FIX_FILE,
    priority: 2,
    maxStreak: 3,
    extractContext: (logLine) => {
      const match = logLine.match(/TypeError: Cannot read properties of undefined \(reading '.*?'\) at .*? (\/.*?\.js:\d+:\d+)/i);
      return {
        filePathPattern: match ? match[1].replace(/.*\/src\//, 'src/') : null, // Attempt to get relative path
        errorDetails: match ? match[0] : logLine
      };
    }
  },
  {
    name: 'AuthServiceFailure',
    regex: /AuthServiceError: Token validation failed/i,
    logFile: 'perf',
    actionType: HEAL_ACTION_TYPES.RESTART_SERVICE,
    serviceName: 'auth-service', // Example service name, needs to map to actual pm2 name or script
    priority: 1,
    maxStreak: 2,
    extractContext: (logLine) => ({ details: logLine })
  },
  {
    name: 'GenericPerformanceError', // Fallback for general errors
    regex: /error/i,
    logFile: 'perf',
    actionType: HEAL_ACTION_TYPES.GENERAL_RESTART,
    priority: 10, // Lower priority
    maxStreak: 3,
    extractContext: (logLine) => ({ details: logLine })
  },
  {
    name: 'SecurityPatchNotification',
    regex: /security patch applied/i, // More specific than just "patch"
    logFile: 'security',
    actionType: HEAL_ACTION_TYPES.GENERAL_RESTART, // Or a more specific action if applicable
    priority: 1,
    maxStreak: 1, // Apply immediately
    extractContext: (logLine) => ({ details: logLine })
  }
];

// Endpoint for triggering the Codex AI fix pipeline
const CODEX_TRIGGER_URL = process.env.CODEX_TRIGGER_URL || 'http://localhost:3001/api/codex/suggest-fix';

// --- State Variables ---
let errorStreaks = {}; // Stores streaks for each error pattern config name
/** @type {boolean} isHealing - Flag to prevent concurrent self-heal actions (cooldown mechanism). True if a heal is in progress. */
let isHealing = false;
/** @type {number} highCpuUsageCount - Counter for consecutive high CPU usage detections. */
let highCpuUsageCount = 0;

// --- System Monitoring Configuration ---
const MEMORY_THRESHOLD = 0.95; // 95% memory usage (more conservative)
const CPU_THRESHOLD = 0.95;    // 95% CPU usage (more conservative)
const CPU_SUSTAINED_CHECKS = 3; // 3 consecutive checks instead of 10
const SYSTEM_CHECK_INTERVAL = 30000; // 30 seconds instead of 60 (more frequent but conservative thresholds)

// --- Cooldown and Rate Limiting ---
const SELF_HEAL_COOLDOWN = 5 * 60 * 1000; // 5 minutes cooldown between self-heal attempts
let lastSelfHealTime = 0;

// --- Process Management ---
const WATCHDOG_PID_FILE = path.join(BASE_LOG_PATH, 'watchdog.pid');

// --- Helper Functions ---

/**
 * Ensures only one instance of watchdog runs at a time
 */
function ensureSingleInstance() {
  try {
    if (fs.existsSync(WATCHDOG_PID_FILE)) {
      const existingPid = parseInt(fs.readFileSync(WATCHDOG_PID_FILE, 'utf8').trim());
      try {
        // Check if process is still running
        process.kill(existingPid, 0);
        console.log(`Another watchdog instance is already running (PID: ${existingPid}). Exiting.`);
        process.exit(0);
      } catch (err) {
        // Process not found, remove stale PID file
        fs.unlinkSync(WATCHDOG_PID_FILE);
        console.log('Removed stale PID file.');
      }
    }
    
    // Write current PID
    fs.writeFileSync(WATCHDOG_PID_FILE, process.pid.toString());
    
    // Clean up PID file on exit
    process.on('exit', () => {
      try {
        if (fs.existsSync(WATCHDOG_PID_FILE)) {
          fs.unlinkSync(WATCHDOG_PID_FILE);
        }
      } catch (err) {
        // Ignore cleanup errors
      }
    });
    
    process.on('SIGINT', () => {
      console.log('\nReceived SIGINT. Shutting down watchdog gracefully...');
      process.exit(0);
    });
    
    process.on('SIGTERM', () => {
      console.log('\nReceived SIGTERM. Shutting down watchdog gracefully...');
      process.exit(0);
    });
  } catch (err) {
    logErrorToProduction('Failed to ensure single instance', err);
  }
}

/**
 * Safely appends a message to the self-heal log file (SELF_HEAL_LOG_FILE).
 * Includes error handling in case the file write fails, logging the error to console.
 * @param {string} message - The message to append.
 */
function appendToSelfHealLog(message) {
  // Do not write to physical log file during test runs to avoid polluting it.
  // Tests can spy on this function to ensure it's called, without needing file I/O.
  if (process.env.NODE_ENV === 'test') {
    return;
  }
  try {
    fs.appendFileSync(SELF_HEAL_LOG_FILE, message);
  } catch (err) {
    logErrorToProduction(`Failed to write to self-heal log: ${SELF_HEAL_LOG_FILE}`, err);
  }
}

// Trigger the Codex AI fix pipeline via HTTP request
async function triggerCodexFix(reason) {
  if (!CODEX_TRIGGER_URL) {
    const warnMsg = 'CODEX_TRIGGER_URL not set. Skipping Codex fix trigger.';
    console.warn(warnMsg);
    appendToSelfHealLog(`[${new Date().toISOString()}] WARN: ${warnMsg}\n`);
    return;
  }

  try {
    await axios.post(CODEX_TRIGGER_URL, { reason, timestamp: new Date().toISOString() }, { timeout: 10000 });
    const successMsg = `Codex fix triggered via ${CODEX_TRIGGER_URL}`;
    console.log(successMsg);
    appendToSelfHealLog(`[${new Date().toISOString()}] ${successMsg}\n`);
  } catch (err) {
    logErrorToProduction('Failed to trigger Codex fix', err);
    appendToSelfHealLog(`[${new Date().toISOString()}] ERROR: Failed to trigger Codex fix: ${err.message}\n`);
  }
}

console.log('Watchdog script started. Monitoring log files...');
appendToSelfHealLog(`[${new Date().toISOString()}] Watchdog script started.\n`);

/**
 * Triggers the self-healing process.
 * - Checks the cooldown (`isHealing`) to prevent concurrent executions.
 * - Checks rate limiting to prevent too frequent self-heal attempts.
 * - Logs the trigger reason and action to console and SELF_HEAL_LOG_FILE.
 * - Executes the HEAL_COMMAND.
 * - Logs the output (stdout/stderr) of the HEAL_COMMAND.
 * - Resets both perfErrorStreak and securityPatchStreak.
 * - Releases the cooldown by setting `isHealing` back to false.
 * @param {string} reason - The reason why the self-heal action is being triggered.
 */
function triggerSelfHeal(reason) {
  const currentTime = Date.now();
  
  // Check if already healing
  if (isHealing) {
    const message = `Self-heal action already in progress. Skipping trigger for: ${reason}`;
    console.log(message);
    appendToSelfHealLog(`[${new Date().toISOString()}] ${message}\n`);
    return;
  }

  // Check cooldown period
  if (currentTime - lastSelfHealTime < SELF_HEAL_COOLDOWN) {
    const remainingCooldown = Math.ceil((SELF_HEAL_COOLDOWN - (currentTime - lastSelfHealTime)) / 1000);
    const message = `Self-heal cooldown active. ${remainingCooldown}s remaining. Skipping trigger for: ${reason}`;
    console.log(message);
    appendToSelfHealLog(`[${new Date().toISOString()}] ${message}\n`);
    return;
  }

  isHealing = true; // Activate cooldown
  lastSelfHealTime = currentTime;
  
  const timestamp = new Date().toISOString();
  const logMessage = `Triggering self-heal due to: ${reason}`;
  console.log(logMessage);
  appendToSelfHealLog(`[${timestamp}] ${logMessage}\n`);

  // Send Discord Alert if configured
  if (DISCORD_WEBHOOK_URL) {
    const discordAlertMessage = `🚨 **Watchdog Alert** 🚨\n\n**Reason:** ${reason}\n\n**Action:** Initiating self-heal sequence (code update & build).\n**Command:** \`\`\`${HEAL_COMMAND}\`\`\``;
    sendDiscordAlert(discordAlertMessage).catch(err => {
      logErrorToProduction('Failed to send Discord alert', err);
    });
  }

  const healCmdLog = `Executing self-heal command: ${HEAL_COMMAND}`;
  console.log(healCmdLog);
  appendToSelfHealLog(`[${timestamp}] ${healCmdLog}\n`);

  // Execute the self-heal command with timeout
  const childProcess = exec(HEAL_COMMAND, { timeout: 10 * 60 * 1000 }, (error, stdout, stderr) => {
    const executionTimestamp = new Date().toISOString();
    
    if (error) {
      if (error.killed && error.signal === 'SIGTERM') {
        logErrorToProduction('Self-heal command timed out after 10 minutes');
        appendToSelfHealLog(`[${executionTimestamp}] Self-heal command timed out after 10 minutes\n`);
      } else {
        logErrorToProduction(`Self-heal command error: ${error.message}`, error);
        appendToSelfHealLog(`[${executionTimestamp}] Error executing self-heal command: ${error.message}\n`);
      }
    }
    
    if (stderr && stderr.trim()) {
      console.log(`Self-heal command stderr: ${stderr}`);
      appendToSelfHealLog(`[${executionTimestamp}] Self-heal command stderr: ${stderr}\n`);
    }
    
    if (stdout && stdout.trim()) {
      console.log(`Self-heal command stdout: ${stdout}`);
      appendToSelfHealLog(`[${executionTimestamp}] Self-heal command stdout: ${stdout}\n`);
    }

    const completionMessage = error ? 'Self-heal action completed with errors. Resetting streaks.' : 'Self-heal action completed successfully. Resetting streaks.';
    console.log(completionMessage);
    appendToSelfHealLog(`[${executionTimestamp}] ${completionMessage}\n`);

    // Trigger Codex automation for additional healing steps
    triggerCodexFix(reason);

    // Reset streaks after successful or failed healing attempt to avoid immediate re-trigger for the same issue.
    perfErrorStreak = 0;
    securityPatchStreak = 0;
    highCpuUsageCount = 0; // Reset CPU usage count as well

    isHealing = false; // Release cooldown
  });

  // Handle process errors
  childProcess.on('error', (err) => {
    logErrorToProduction('Failed to start self-heal command', err);
    appendToSelfHealLog(`[${new Date().toISOString()}] Failed to start self-heal command: ${err.message}\n`);
    isHealing = false;
  });
}

// --- System Resource Monitoring Function ---
/**
 * Monitors system memory and CPU usage.
 * Triggers self-healing if thresholds are breached consistently.
 */
function monitorSystemResources() {
  if (isHealing) {
    // Don't check resources if a healing process is already underway
    return;
  }

  // Check Memory Usage
  os.memUsage(memUsagePercent => {
    const currentMemoryUsage = 1 - memUsagePercent.freeMemPercentage; // os-utils provides freeMemPercentage
    
    // Only log memory usage if it's concerning (above 85%)
    if (currentMemoryUsage > 0.85) {
      console.log(`Current memory usage: ${(currentMemoryUsage * 100).toFixed(2)}%`);
    }
    
    if (currentMemoryUsage > MEMORY_THRESHOLD) {
      const message = `High memory usage detected: ${(currentMemoryUsage * 100).toFixed(2)}% (Threshold: ${MEMORY_THRESHOLD * 100}%)`;
      console.log(message);
      appendToSelfHealLog(`[${new Date().toISOString()}] ${message}\n`);
      triggerSelfHeal(message);
    }
  });

  // Check CPU Usage
  os.cpuUsage(cpuUsagePercent => {
    // Only log CPU usage if it's concerning (above 85%)
    if (cpuUsagePercent > 0.85) {
      console.log(`Current CPU usage: ${(cpuUsagePercent * 100).toFixed(2)}%`);
    }
    
    if (cpuUsagePercent > CPU_THRESHOLD) {
      highCpuUsageCount++;
      const message = `High CPU usage detected: ${(cpuUsagePercent * 100).toFixed(2)}% (Threshold: ${CPU_THRESHOLD * 100}%). Count: ${highCpuUsageCount}/${CPU_SUSTAINED_CHECKS}`;
      console.log(message);
      appendToSelfHealLog(`[${new Date().toISOString()}] ${message}\n`);
      
      if (highCpuUsageCount >= CPU_SUSTAINED_CHECKS) {
        const triggerMessage = `Sustained high CPU usage for ${CPU_SUSTAINED_CHECKS} checks. Current: ${(cpuUsagePercent * 100).toFixed(2)}%`;
        console.log(triggerMessage);
        appendToSelfHealLog(`[${new Date().toISOString()}] ${triggerMessage}\n`);
        triggerSelfHeal(triggerMessage);
        // highCpuUsageCount is reset inside triggerSelfHeal
      }
    } else {
      if (highCpuUsageCount > 0) {
        const resetMessage = `CPU usage back to normal (${(cpuUsagePercent * 100).toFixed(2)}%). Resetting high CPU usage count. Was: ${highCpuUsageCount}`;
        console.log(resetMessage);
        appendToSelfHealLog(`[${new Date().toISOString()}] ${resetMessage}\n`);
        highCpuUsageCount = 0; // Reset if CPU usage is below threshold
      }
    }
  });
}


// --- Main script execution / initialization logic ---
function startMonitoring() {
  // This function should only be called when running the script directly, not during tests.
  if (process.env.NODE_ENV === 'test') {
    // This check provides an additional layer of safety, though the primary guard
    // is in the `if (require.main === module ...)` block below.
    console.log('Test environment detected, skipping startMonitoring() content.');
    return;
  }

  // Ensure only one instance runs
  ensureSingleInstance();

  console.log('Watchdog script started. Monitoring log files...');
  appendToSelfHealLog(
    `[${new Date().toISOString()}] Watchdog script started. PID: ${process.pid}, Logs directory: ${BASE_LOG_PATH}\n`
  );

  // Log configuration
  console.log(`Configuration:
  - Memory Threshold: ${MEMORY_THRESHOLD * 100}%
  - CPU Threshold: ${CPU_THRESHOLD * 100}%
  - CPU Sustained Checks: ${CPU_SUSTAINED_CHECKS}
  - System Check Interval: ${SYSTEM_CHECK_INTERVAL / 1000}s
  - Self-Heal Cooldown: ${SELF_HEAL_COOLDOWN / 1000}s
  - Discord Alerts: ${DISCORD_WEBHOOK_URL ? 'Enabled' : 'Disabled'}
  `);

  // Initialize Tailing Logic for Performance Log File
  if (fs.existsSync(PERF_LOG_FILE)) {
    try {
      const perfTail = new Tail(PERF_LOG_FILE);
      perfTail.on('line', function(data) {
        if (PERF_ERROR_REGEX.test(data)) {
          perfErrorStreak++;
          console.log(`Performance error detected. Streak: ${perfErrorStreak}`);
          if (perfErrorStreak >= 3) {
            triggerSelfHeal('3 consecutive performance errors');
          }
        } else if (perfErrorStreak > 0) {
          console.log('Performance log normal. Resetting streak.');
          perfErrorStreak = 0;
        }
      });
      perfTail.on('error', function(error) {
        logErrorToProduction(`Error tailing performance log file: ${PERF_LOG_FILE}`, error);
        appendToSelfHealLog(`[${new Date().toISOString()}] Error tailing performance log file ${PERF_LOG_FILE}: ${error.message}\n`);
      });
      perfTail.watch();
      console.log(`Watching performance log: ${PERF_LOG_FILE}`);
    } catch (e) {
      logErrorToProduction(`Failed to initialize tail for performance log: ${PERF_LOG_FILE}`, e);
      appendToSelfHealLog(`[${new Date().toISOString()}] Failed to initialize tail for ${PERF_LOG_FILE}: ${e.message}\n`);
    }
  } else {
    const missingPerfLogMsg = `Performance log file not found: ${PERF_LOG_FILE}. Skipping tailing for this file. Ensure 'scripts/perf/monitor.js' is running via a process manager (e.g., PM2).`;
    console.warn(missingPerfLogMsg);
    appendToSelfHealLog(`[${new Date().toISOString()}] WARN: ${missingPerfLogMsg}\n`);
  }

  // Initialize Tailing Logic for Security Log File
  if (fs.existsSync(SECURITY_LOG_FILE)) {
    try {
      const securityTail = new Tail(SECURITY_LOG_FILE);
      securityTail.on('line', function(data) {
        if (SECURITY_PATCH_REGEX.test(data)) {
          securityPatchStreak++;
          console.log(`Security patch detected. Streak: ${securityPatchStreak}`);
          if (securityPatchStreak >= 3) {
            triggerSelfHeal('3 consecutive security patches');
          }
        } else if (securityPatchStreak > 0) {
          console.log('Security log normal. Resetting streak.');
          securityPatchStreak = 0;
        }
      });
      securityTail.on('error', function(error) {
        logErrorToProduction(`Error tailing security log file: ${SECURITY_LOG_FILE}`, error);
        appendToSelfHealLog(`[${new Date().toISOString()}] Error tailing security log file ${SECURITY_LOG_FILE}: ${error.message}\n`);
      });
      securityTail.watch();
      console.log(`Watching security log: ${SECURITY_LOG_FILE}`);
    } catch (e) {
      logErrorToProduction(`Failed to initialize tail for security log: ${SECURITY_LOG_FILE}`, e);
      appendToSelfHealLog(`[${new Date().toISOString()}] Failed to initialize tail for ${SECURITY_LOG_FILE}: ${e.message}\n`);
    }
  } else {
    const missingSecLogMsg = `Security log file not found: ${SECURITY_LOG_FILE}. Skipping tailing for this file. Ensure 'scripts/hourly_audit.sh' is running via cron.`;
    console.warn(missingSecLogMsg);
    appendToSelfHealLog(`[${new Date().toISOString()}] WARN: ${missingSecLogMsg}\n`);
  }

  // Initialize System Resource Monitoring
  console.log(`Initializing system resource monitoring. Check interval: ${SYSTEM_CHECK_INTERVAL / 1000} seconds.`);
  appendToSelfHealLog(`[${new Date().toISOString()}] Initializing system resource monitoring. Memory Threshold: ${MEMORY_THRESHOLD * 100}%, CPU Threshold: ${CPU_THRESHOLD * 100}% for ${CPU_SUSTAINED_CHECKS} checks.\n`);
  setInterval(monitorSystemResources, SYSTEM_CHECK_INTERVAL);
  
  // Perform initial resource check after 5 seconds
  setTimeout(monitorSystemResources, 5000);
}

// This part runs when the script is executed directly
// and not when imported as a module (e.g., for testing)
if (process.env.NODE_ENV !== 'test' && import.meta.url === pathToFileURL(process.argv[1]).href) {
  startMonitoring();
}

// --- Exports for Testing ---
// This allows Jest to import and test these functions and states.
export {
  logErrorToProduction,
  sendDiscordAlert,
  appendToSelfHealLog,
  triggerCodexFix,
  triggerSelfHeal,
  monitorSystemResources,
};

export const _getStateForTests = () => ({
  perfErrorStreak,
  securityPatchStreak,
  isHealing,
  highCpuUsageCount,
});

export const _setStateForTests = (newState) => {
  if (Object.prototype.hasOwnProperty.call(newState, 'perfErrorStreak')) perfErrorStreak = newState.perfErrorStreak;
  if (Object.prototype.hasOwnProperty.call(newState, 'securityPatchStreak')) securityPatchStreak = newState.securityPatchStreak;
  if (Object.prototype.hasOwnProperty.call(newState, 'isHealing')) isHealing = newState.isHealing;
  if (Object.prototype.hasOwnProperty.call(newState, 'highCpuUsageCount')) highCpuUsageCount = newState.highCpuUsageCount;
};

export const _resetStateForTests = () => {
  perfErrorStreak = 0;
  securityPatchStreak = 0;
  isHealing = false;
  highCpuUsageCount = 0;
};

export const _getConstantsForTests = () => ({
  BASE_LOG_PATH,
  PERF_LOG_FILE,
  SECURITY_LOG_FILE,
  SELF_HEAL_LOG_FILE,
  PERF_ERROR_REGEX,
  SECURITY_PATCH_REGEX,
  HEAL_COMMAND,
  MEMORY_THRESHOLD,
  CPU_THRESHOLD,
  CPU_SUSTAINED_CHECKS,
  SYSTEM_CHECK_INTERVAL,
  DISCORD_WEBHOOK_URL,
  CODEX_TRIGGER_URL,
});
