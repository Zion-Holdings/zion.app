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

const { Tail } = require('tail');
const path =require('path');
const { exec } = require('child_process');
const fs = require('fs');
const os = require('os-utils');
const axios = require('axios');

// --- Discord Configuration ---
const DISCORD_WEBHOOK_URL = process.env.DISCORD_WEBHOOK_URL;

// --- Global Error Logging Function ---
/**
 * Logs an error message to the console with a timestamp and a standard prefix.
 * Optionally includes details from an error object.
 * @param {string} message - The primary error message.
 * @param {Error|null} [errorObject=null] - Optional error object to log its message and stack.
 */
function logError(message, errorObject = null) {
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
    logError(errorMessage); // Log full error to console via logError
    appendToSelfHealLog(`[${new Date().toISOString()}] ERROR: ${errorMessage}\n`); // Log concise error to self-heal log
  }
}

// --- Global Unhandled Error Handlers ---
/**
 * Handles unhandled promise rejections.
 * Logs the error details using the logError function.
 */
process.on('unhandledRejection', (reason, promise) => {
  logError('Unhandled Rejection. Promise: ' + promise + ' Reason: ' + (reason instanceof Error ? reason.message : reason), reason instanceof Error ? reason : null);
});

/**
 * Handles uncaught exceptions.
 * Logs the error details using the logError function.
 * Note: After an uncaught exception, the application might be in an unstable state.
 * Depending on the severity, a process manager (like PM2) might be configured to restart it.
 */
process.on('uncaughtException', (error) => {
  logError('Uncaught Exception.', error);
  // process.exit(1); // Optionally exit. For a watchdog, continuous monitoring is often preferred if possible.
});

// --- Configuration: File Paths ---
/** @const {string} PERF_LOG_FILE - Path to the performance log file to be monitored. */
const PERF_LOG_FILE = path.resolve(__dirname, '../logs/perf/hourly.log');
/** @const {string} SECURITY_LOG_FILE - Path to the security log file to be monitored for patch notifications. */
const SECURITY_LOG_FILE = path.resolve(__dirname, '../logs/security/hourly-fix.log');
/** @const {string} SELF_HEAL_LOG_FILE - Path to the log file where this watchdog script records its own actions and errors. */
const SELF_HEAL_LOG_FILE = path.resolve(__dirname, '../logs/self-heal.log');

// Ensure log directories and files exist to avoid Tail initialization errors
function ensureFileExists(filePath) {
  try {
    fs.mkdirSync(path.dirname(filePath), { recursive: true });
    if (!fs.existsSync(filePath)) {
      fs.closeSync(fs.openSync(filePath, 'a'));
    }
  } catch (err) {
    logError(`Failed to create log file: ${filePath}`, err);
  }
}

[PERF_LOG_FILE, SECURITY_LOG_FILE, SELF_HEAL_LOG_FILE].forEach(ensureFileExists);

// --- Configuration: Regex Patterns ---
/**
 * @const {RegExp} PERF_ERROR_REGEX
 * Regex to detect performance error lines in PERF_LOG_FILE.
 * This is a placeholder and should be adjusted to match actual log content.
 */
const PERF_ERROR_REGEX = /PERF_ERROR/;
/**
 * @const {RegExp} SECURITY_PATCH_REGEX
 * Regex to detect critical security patch notifications in SECURITY_LOG_FILE.
 * This is a placeholder and should be adjusted to match actual log content.
 */
const SECURITY_PATCH_REGEX = /CRIT_SECURITY_PATCH/;

// --- Configuration: Self-Healing ---
/**
 * @const {string} HEAL_COMMAND
 * The command executed when a self-heal action is triggered.
 * Components:
 *   - `git pull`: Fetches the latest code from the remote repository.
 *   - `npm install`: Installs or updates dependencies based on package-lock.json.
 *   - `npm run build`: Executes the build script defined in package.json.
 *   - `pm2 restart all`: Restarts all applications managed by PM2.
 */
const HEAL_COMMAND = 'echo "Watchdog detected issue. Performing git pull, dependency update, and build. Manual K8s check for zion-app may be needed." && git pull && npm install && npm run build';

// --- State Variables ---
/** @type {number} perfErrorStreak - Counter for consecutive performance errors detected. Resets on a normal line or after a heal. */
let perfErrorStreak = 0;
/** @type {number} securityPatchStreak - Counter for consecutive security patches detected. Resets on a normal line or after a heal. */
let securityPatchStreak = 0;
/** @type {boolean} isHealing - Flag to prevent concurrent self-heal actions (cooldown mechanism). True if a heal is in progress. */
let isHealing = false;
/** @type {number} highCpuUsageCount - Counter for consecutive high CPU usage detections. */
let highCpuUsageCount = 0;

// --- System Monitoring Configuration ---
const MEMORY_THRESHOLD = 0.80; // 80% memory usage
const CPU_THRESHOLD = 0.80;    // 80% CPU usage
const CPU_SUSTAINED_CHECKS = 3; // 3 consecutive checks for CPU
const SYSTEM_CHECK_INTERVAL = 10000; // 10 seconds in milliseconds

// --- Helper Functions ---
/**
 * Safely appends a message to the self-heal log file (SELF_HEAL_LOG_FILE).
 * Includes error handling in case the file write fails, logging the error to console.
 * @param {string} message - The message to append.
 */
function appendToSelfHealLog(message) {
  try {
    fs.appendFileSync(SELF_HEAL_LOG_FILE, message);
  } catch (err) {
    logError(`Failed to write to self-heal log: ${SELF_HEAL_LOG_FILE}`, err);
  }
}

console.log('Watchdog script started. Monitoring log files...');
appendToSelfHealLog(`[${new Date().toISOString()}] Watchdog script started.\n`);

/**
 * Triggers the self-healing process.
 * - Checks the cooldown (`isHealing`) to prevent concurrent executions.
 * - Logs the trigger reason and action to console and SELF_HEAL_LOG_FILE.
 * - Executes the HEAL_COMMAND.
 * - Logs the output (stdout/stderr) of the HEAL_COMMAND.
 * - Resets both perfErrorStreak and securityPatchStreak.
 * - Releases the cooldown by setting `isHealing` back to false.
 * @param {string} reason - The reason why the self-heal action is being triggered.
 */
function triggerSelfHeal(reason) {
  if (isHealing) {
    const message = `Self-heal action already in progress. Skipping trigger for: ${reason}`;
    console.log(message);
    appendToSelfHealLog(`[${new Date().toISOString()}] ${message}\n`);
    return;
  }

  isHealing = true; // Activate cooldown
  const timestamp = new Date().toISOString();
  const logMessage = `Triggering self-heal due to: ${reason}`;
  console.log(logMessage);
  appendToSelfHealLog(`[${timestamp}] ${logMessage}\n`);

  // Send Discord Alert
  const discordAlertMessage = `🚨 **Watchdog Alert** 🚨\n\n**Reason:** ${reason}\n\n**Action:** Initiating self-heal sequence (code update & build). Manual K8s check for zion-app may be needed.\n**Command:** \`\`\`${HEAL_COMMAND}\`\`\``;
  // We don't await sendDiscordAlert here to prevent blocking the healing process
  // if Discord is slow or unresponsive. It has its own internal logging.
  sendDiscordAlert(discordAlertMessage);

  const healCmdLog = `Executing self-heal command: ${HEAL_COMMAND}`;
  console.log(healCmdLog);
  appendToSelfHealLog(`[${timestamp}] ${healCmdLog}\n`);

  // Execute the self-heal command
  exec(HEAL_COMMAND, (error, stdout, stderr) => {
    const executionTimestamp = new Date().toISOString();
    if (error) {
      logError(`Self-heal command error: ${error.message}`, error);
      appendToSelfHealLog(`[${executionTimestamp}] Error executing self-heal command: ${error.message}\n`);
      if (stderr) {
        // Stderr might contain useful info even if error object is present
        logError(`Self-heal command stderr: ${stderr}`);
        appendToSelfHealLog(`[${executionTimestamp}] Self-heal command stderr: ${stderr}\n`);
      }
    }
    if (stdout) {
      console.log(`Self-heal command stdout: ${stdout}`);
      appendToSelfHealLog(`[${executionTimestamp}] Self-heal command stdout: ${stdout}\n`);
    }

    const completionMessage = 'Self-heal action complete. Resetting streaks.';
    console.log(completionMessage);
    appendToSelfHealLog(`[${executionTimestamp}] ${completionMessage}\n`);

    // Reset streaks after successful or failed healing attempt to avoid immediate re-trigger for the same issue.
    perfErrorStreak = 0;
    securityPatchStreak = 0;
    highCpuUsageCount = 0; // Reset CPU usage count as well

    isHealing = false; // Release cooldown
  });
}

// --- System Resource Monitoring Function ---
/**
 * Monitors system memory and CPU usage.
 * Triggers self-healing if thresholds are breached.
 */
function monitorSystemResources() {
  if (isHealing) {
    // Don't check resources if a healing process is already underway
    return;
  }

  // Check Memory Usage
  os.memUsage(memUsagePercent => {
    const currentMemoryUsage = 1 - memUsagePercent.freeMemPercentage; // os-utils provides freeMemPercentage
    // console.log(`Current memory usage: ${(currentMemoryUsage * 100).toFixed(2)}%`); // Optional: for debugging
    if (currentMemoryUsage > MEMORY_THRESHOLD) {
      const message = `High memory usage detected: ${(currentMemoryUsage * 100).toFixed(2)}% (Threshold: ${MEMORY_THRESHOLD * 100}%)`;
      appendToSelfHealLog(`[${new Date().toISOString()}] ${message}\n`);
      triggerSelfHeal(message);
    }
  });

  // Check CPU Usage
  os.cpuUsage(cpuUsagePercent => {
    // console.log(`Current CPU usage: ${(cpuUsagePercent * 100).toFixed(2)}%`); // Optional: for debugging
    if (cpuUsagePercent > CPU_THRESHOLD) {
      highCpuUsageCount++;
      const message = `High CPU usage detected: ${(cpuUsagePercent * 100).toFixed(2)}% (Threshold: ${CPU_THRESHOLD * 100}%). Count: ${highCpuUsageCount}/${CPU_SUSTAINED_CHECKS}`;
      console.log(message);
      appendToSelfHealLog(`[${new Date().toISOString()}] ${message}\n`);
      if (highCpuUsageCount >= CPU_SUSTAINED_CHECKS) {
        const triggerMessage = `Sustained high CPU usage for ${CPU_SUSTAINED_CHECKS} checks. Current: ${(cpuUsagePercent * 100).toFixed(2)}%`;
        appendToSelfHealLog(`[${new Date().toISOString()}] ${triggerMessage}\n`);
        triggerSelfHeal(triggerMessage);
        // highCpuUsageCount is reset inside triggerSelfHeal
      }
    } else {
      if (highCpuUsageCount > 0) {
        const resetMessage = `CPU usage back to normal. Resetting high CPU usage count. Was: ${highCpuUsageCount}`;
        console.log(resetMessage);
        appendToSelfHealLog(`[${new Date().toISOString()}] ${resetMessage}\n`);
        highCpuUsageCount = 0; // Reset if CPU usage is below threshold
      }
    }
  });
}


// --- Initialize System Resource Monitoring ---
// --- Main script execution / initialization logic ---
function startMonitoring() {
  // This function should only be called when running the script directly, not during tests.
  if (process.env.NODE_ENV === 'test') {
    // This check provides an additional layer of safety, though the primary guard
    // is in the `if (require.main === module ...)` block below.
    console.log('Test environment detected, skipping startMonitoring() content.');
    return;
  }

  console.log('Watchdog script started. Monitoring log files...');
  appendToSelfHealLog(`[${new Date().toISOString()}] Watchdog script started.\n`);

  // Initialize Tailing Logic for Performance Log File
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
      logError(`Error tailing performance log file: ${PERF_LOG_FILE}`, error);
      appendToSelfHealLog(`[${new Date().toISOString()}] Error tailing performance log file ${PERF_LOG_FILE}: ${error.message}\n`);
    });
    perfTail.watch();
    console.log(`Watching performance log: ${PERF_LOG_FILE}`);
  } catch (e) {
    logError(`Failed to initialize tail for performance log: ${PERF_LOG_FILE}`, e);
    appendToSelfHealLog(`[${new Date().toISOString()}] Failed to initialize tail for ${PERF_LOG_FILE}: ${e.message}\n`);
  }

  // Initialize Tailing Logic for Security Log File
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
      logError(`Error tailing security log file: ${SECURITY_LOG_FILE}`, error);
      appendToSelfHealLog(`[${new Date().toISOString()}] Error tailing security log file ${SECURITY_LOG_FILE}: ${error.message}\n`);
    });
    securityTail.watch();
    console.log(`Watching security log: ${SECURITY_LOG_FILE}`);
  } catch (e) {
    logError(`Failed to initialize tail for security log: ${SECURITY_LOG_FILE}`, e);
    appendToSelfHealLog(`[${new Date().toISOString()}] Failed to initialize tail for ${SECURITY_LOG_FILE}: ${e.message}\n`);
  }

  // Initialize System Resource Monitoring
  console.log(`Initializing system resource monitoring. Check interval: ${SYSTEM_CHECK_INTERVAL / 1000} seconds.`);
  appendToSelfHealLog(`[${new Date().toISOString()}] Initializing system resource monitoring. Memory Threshold: ${MEMORY_THRESHOLD * 100}%, CPU Threshold: ${CPU_THRESHOLD * 100}% for ${CPU_SUSTAINED_CHECKS} checks.\n`);
  setInterval(monitorSystemResources, SYSTEM_CHECK_INTERVAL);
}

// This part runs when the script is executed directly
// and not when imported as a module (e.g., for testing)
if (require.main === module && process.env.NODE_ENV !== 'test') {
  startMonitoring();
}

// --- Exports for Testing ---
// This allows Jest to import and test these functions and states.
module.exports = {
  // Functions
  logError,
  sendDiscordAlert,
  appendToSelfHealLog,
  triggerSelfHeal,
  monitorSystemResources,

  // State (exposed via helpers for controlled access)
  _getStateForTests: () => ({
    perfErrorStreak,
    securityPatchStreak,
    isHealing,
    highCpuUsageCount,
  }),
  _setStateForTests: (newState) => {
    if (newState.hasOwnProperty('perfErrorStreak')) perfErrorStreak = newState.perfErrorStreak;
    if (newState.hasOwnProperty('securityPatchStreak')) securityPatchStreak = newState.securityPatchStreak;
    if (newState.hasOwnProperty('isHealing')) isHealing = newState.isHealing;
    if (newState.hasOwnProperty('highCpuUsageCount')) highCpuUsageCount = newState.highCpuUsageCount;
  },
  _resetStateForTests: () => {
    perfErrorStreak = 0;
    securityPatchStreak = 0;
    isHealing = false;
    highCpuUsageCount = 0;
  },
  // Constants (if needed for test validation)
  _getConstantsForTests: () => ({
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
    DISCORD_WEBHOOK_URL // Include this to allow tests to check its usage if needed, though process.env is usually better for this one
  })
};
