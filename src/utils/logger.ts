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

  debug(message?: string, ...args: any[]): void {
    if (this.isDebugEnabled) {
      if (message) {
        // eslint-disable-next-line no-console
        console.debug(message, ...args);
      }
    }
  }

  info(message?: string, ...args: any[]): void {
    if (this.isDevelopment) {
      if (message) {
        // eslint-disable-next-line no-console
        console.info(message, ...args);
      }
    }
  }

  warn(message?: string, ...args: any[]): void {
    if (this.isDevelopment) {
      if (message) {
        // eslint-disable-next-line no-console
        console.warn(message, ...args);
      }
    }
  }

  error(message?: string, ...args: any[]): void {
    if (this.isDevelopment) {
      if (message) {
        // eslint-disable-next-line no-console
        console.error(message, ...args);
      }
    }
  }

  // Conditional development logging
  devLog(message?: string, ...args: any[]): void {
    if (this.isDevelopment) {
      if (message) {
        // eslint-disable-next-line no-console
        console.log('[DEV]', message, ...args);
      }
    }
  }

  // Performance timing
  time(label?: string): void {
    if (this.isDevelopment && label) {
      // eslint-disable-next-line no-console
      console.time(label);
    }
  }

  timeEnd(label?: string): void {
    if (this.isDevelopment && label) {
      // eslint-disable-next-line no-console
      console.timeEnd(label);
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