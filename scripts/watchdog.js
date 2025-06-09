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
const path = require('path');
const { exec } = require('child_process');
const fs = require('fs');

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
 *   - `npm audit fix --force`: Attempts to fix known vulnerabilities, using `--force` for potentially breaking changes.
 *   - `pm2 restart all`: Restarts all applications managed by PM2.
 */
const HEAL_COMMAND = 'git pull && npm install && npm audit fix --force && pm2 restart all';

// --- State Variables ---
/** @type {number} perfErrorStreak - Counter for consecutive performance errors detected. Resets on a normal line or after a heal. */
let perfErrorStreak = 0;
/** @type {number} securityPatchStreak - Counter for consecutive security patches detected. Resets on a normal line or after a heal. */
let securityPatchStreak = 0;
/** @type {boolean} isHealing - Flag to prevent concurrent self-heal actions (cooldown mechanism). True if a heal is in progress. */
let isHealing = false;

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

    isHealing = false; // Release cooldown
  });
}

// --- Tailing Logic for Performance Log File ---
try {
  // Initialize Tail instance for the Performance Log File.
  const perfTail = new Tail(PERF_LOG_FILE);

  /**
   * Event listener for new lines in the performance log (PERF_LOG_FILE).
   * - Logs the raw data.
   * - Tests the line against PERF_ERROR_REGEX.
   * - If it matches:
   *   - Increments perfErrorStreak.
   *   - If perfErrorStreak reaches 3, calls triggerSelfHeal.
   * - If it does not match and perfErrorStreak was > 0:
   *   - Resets perfErrorStreak to 0 and logs the reset.
   */
  perfTail.on('line', function(data) {
    console.log('Perf log: ' + data); // Log each line for context
    if (PERF_ERROR_REGEX.test(data)) {
      perfErrorStreak++;
      console.log(`Performance error detected. Streak: ${perfErrorStreak}`);
      if (perfErrorStreak >= 3) {
        triggerSelfHeal('3 consecutive performance errors');
      }
    } else if (perfErrorStreak > 0) {
      // Line does not match, and there was an active streak.
      console.log('Performance log normal. Resetting streak.');
      perfErrorStreak = 0;
    }
  });

  /**
   * Event listener for errors during tailing of the performance log.
   * Logs the error using logError and also to the self-heal log.
   */
  perfTail.on('error', function(error) {
    logError(`Error tailing performance log file: ${PERF_LOG_FILE}`, error);
    appendToSelfHealLog(`[${new Date().toISOString()}] Error tailing performance log file ${PERF_LOG_FILE}: ${error.message}\n`);
  });

  perfTail.watch(); // Start watching the file.
  console.log(`Watching performance log: ${PERF_LOG_FILE}`);

} catch (e) {
    // Handles errors during the construction of the Tail instance for performance log.
    logError(`Failed to initialize tail for performance log: ${PERF_LOG_FILE}`, e);
    appendToSelfHealLog(`[${new Date().toISOString()}] Failed to initialize tail for ${PERF_LOG_FILE}: ${e.message}\n`);
}

// --- Tailing Logic for Security Log File ---
try {
  // Initialize Tail instance for the Security Log File.
  const securityTail = new Tail(SECURITY_LOG_FILE);

  /**
   * Event listener for new lines in the security log (SECURITY_LOG_FILE).
   * - Logs the raw data.
   * - Tests the line against SECURITY_PATCH_REGEX.
   * - If it matches:
   *   - Increments securityPatchStreak.
   *   - If securityPatchStreak reaches 3, calls triggerSelfHeal.
   * - If it does not match and securityPatchStreak was > 0:
   *   - Resets securityPatchStreak to 0 and logs the reset.
   */
  securityTail.on('line', function(data) {
    console.log('Security log: ' + data); // Log each line for context
    if (SECURITY_PATCH_REGEX.test(data)) {
      securityPatchStreak++;
      console.log(`Security patch detected. Streak: ${securityPatchStreak}`);
      if (securityPatchStreak >= 3) {
        triggerSelfHeal('3 consecutive security patches');
      }
    } else if (securityPatchStreak > 0) {
      // Line does not match, and there was an active streak.
      console.log('Security log normal. Resetting streak.');
      securityPatchStreak = 0;
    }
  });

  /**
   * Event listener for errors during tailing of the security log.
   * Logs the error using logError and also to the self-heal log.
   */
  securityTail.on('error', function(error) {
    logError(`Error tailing security log file: ${SECURITY_LOG_FILE}`, error);
    appendToSelfHealLog(`[${new Date().toISOString()}] Error tailing security log file ${SECURITY_LOG_FILE}: ${error.message}\n`);
  });

  securityTail.watch(); // Start watching the file.
  console.log(`Watching security log: ${SECURITY_LOG_FILE}`);

} catch (e) {
    // Handles errors during the construction of the Tail instance for security log.
    logError(`Failed to initialize tail for security log: ${SECURITY_LOG_FILE}`, e);
    appendToSelfHealLog(`[${new Date().toISOString()}] Failed to initialize tail for ${SECURITY_LOG_FILE}: ${e.message}\n`);
}
