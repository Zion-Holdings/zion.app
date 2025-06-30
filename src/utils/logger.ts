/**
 * @deprecated Prefer using specific log functions from `@/utils/productionLogger` (e.g., `logInfo`, `logError`, `logDev`)
 * or the comprehensive `logError` function from `@/utils/logError` for detailed error reporting.
 */
import {
  logInfo as prodLogInfo,
  logWarn as prodLogWarn,
  logError as prodLogError,
  logDebug as prodLogDev, // Using logDebug from productionLogger for logger.devLog
  timeStart,
  timeEnd
} from './productionLogger';

// Wrapper functions to maintain the old logger's interface while using the new productionLogger
// This helps in phasing out the old logger by providing a deprecated but functional alternative.

const isDevelopment = process.env.NODE_ENV === 'development';
const isDebugEnabled = process.env.DEBUG === 'true' || isDevelopment;

const debug = (message: string, ...args: unknown[]): void => {
  if (isDebugEnabled) { // Mimic old logger's debug enabling logic
    prodLogDev(`[DEPRECATED LOGGER] ${message}`, { args });
  }
};

const info = (message: string, ...args: unknown[]): void => {
  // productionLogger.info only logs in dev by default, this makes it behave like old logger.info
  if (isDevelopment) {
    prodLogInfo(`[DEPRECATED LOGGER] ${message}`, { args });
  }
};

const warn = (message: string, ...args: unknown[]): void => {
  prodLogWarn(`[DEPRECATED LOGGER] ${message}`, { args });
};

const error = (message: string, errorObj?: Error | unknown, ...args: unknown[]): void => {
  // Using productionLogger.error which handles Sentry integration
  prodLogError(`[DEPRECATED LOGGER] ${message}`, errorObj, { args });
};

const devLog = (message: string, ...args: unknown[]): void => {
  if (isDevelopment) { // Mimic old logger's devLog logic
    prodLogDev(`[DEPRECATED LOGGER (devLog)] ${message}`, { args });
  }
};

const time = (label: string): void => {
  if (isDevelopment) { // Mimic old logger's time logic
    timeStart(`[DEPRECATED LOGGER] ${label}`);
  }
};

const timeEndLogger = (label: string): void => {
  if (isDevelopment) { // Mimic old logger's timeEnd logic
    timeEnd(`[DEPRECATED LOGGER] ${label}`);
  }
};

/**
 * @deprecated Prefer using specific log functions from `@/utils/productionLogger` or `@/utils/logError`.
 */
export const logger = {
  debug,
  info,
  warn,
  error,
  devLog,
  time,
  timeEnd: timeEndLogger,
};

// Export for legacy compatibility
/**
 * @deprecated Prefer using specific log functions from `@/utils/productionLogger` or `@/utils/logError`.
 */
export default logger;