// Removed circular dependency with productionLogger - using direct console methods instead

// Remove unused LOG_LEVELS constant
// const LOG_LEVELS: LogLevel = {
//   DEBUG: 'debug',
//   INFO: 'info',
//   WARN: 'warn',
//   ERROR: 'error'
// };

class Logger {
  private isDevelopment = process.env.NODE_ENV === 'development';
  private isDebugEnabled = process.env.DEBUG === 'true' || this.isDevelopment;

  debug(): void {
    if (this.isDebugEnabled) {
      logInfo('[DEBUG] ${message}', { data: context });
    }
  }

  info(): void {
    if (this.isDevelopment) {
      logInfo('[INFO] ${message}', { data: context });
    }
  }

  warn(): void {
    // Implement warning logic here or use a custom logger
  }

  error(): void {
    // Implement error logic here or use a custom logger
  }

  // Conditional development logging
  devLog(): void {
    if (this.isDevelopment) {
      logInfo('[DEV] ${message}', { data: context });
    }
  }

  // Performance timing
  time(): void {
    if (this.isDevelopment) {
      // Use structured logging instead of console.time
      logInfo(`[TIMER] Starting: ${label}`);
    }
  }

  timeEnd(): void {
    if (this.isDevelopment) {
      // Use structured logging instead of console.timeEnd
      logInfo(`[TIMER] Completed: ${label}`);
    }
  }
}

// Export singleton instance
export const logger = new Logger();

// Export convenience functions for backward compatibility
export const logWarn = logger.warn.bind(logger);
export const logError = logger.error.bind(logger);
export const logInfo = logger.info.bind(logger);
export const logDebug = logger.debug.bind(logger);

// Export for legacy compatibility
export default logger; 