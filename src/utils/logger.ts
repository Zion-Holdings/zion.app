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

  log(message: string, data?: unknown): void {
    if (this.isDebugEnabled) {
      console.log(`[${this.name}] ${message}`, data || '');
    }
  }

  warn(message: string, data?: unknown): void {
    if (this.isDebugEnabled) {
      console.warn(`[${this.name}] ${message}`, data || '');
    }
  }

  error(message: string, data?: unknown): void {
    if (this.isDebugEnabled) {
      console.error(`[${this.name}] ${message}`, data || '');
    }
  }

  info(message: string, data?: unknown): void {
    if (this.isDebugEnabled) {
      console.info(`[${this.name}] ${message}`, data || '');
    }
  }

  debug(message: string, data?: unknown): void {
    if (this.isDebugEnabled) {
      console.debug(`[${this.name}] ${message}`, data || '');
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