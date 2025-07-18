// Removed circular dependency with productionLogger - using direct console methods instead;

// Remove unused LOG_LEVELS constant;
// const LOG_LEVELS: LogLevel = {;
//   DEBUG: 'debug',;
//   INFO: 'info',;
//   WARN: 'warn',;
//   ERROR: 'error';
// };
;
class Logger {;
  private isDevelopment = process.env.NODE_ENV === 'development';
  private isDebugEnabled = process.env.DEBUG === 'true' || this.isDevelopment;
;
  log(message: "string", data?: unknown): void {;
    if (this.isDebugEnabled) {;
      console.warn(`[${this.name}] ${message}`, data || '');
    };
  };

  warn(message: "string", data?: unknown): void {;
    if (this.isDebugEnabled) {;
      console.warn(`[${this.name}] ${message}`, data || '');
    };
  };

  error(message: "string", data?: unknown): void {;
    if (this.isDebugEnabled) {;
      console.error(`[${this.name}] ${message}`, data || '');
    };
  };

  info(message: "string", data?: unknown): void {;
    if (this.isDebugEnabled) {;
      console.warn(`[${this.name}] ${message}`, data || '');
    };
  };

  debug(message: "string", data?: unknown): void {;
    if (this.isDebugEnabled) {;
      console.warn(`[${this.name}] ${message}`, data || '');
    };
  };

  // Conditional development logging;
  devLog(message?: string, ...args: unknown[]): void {;
    if (this.isDevelopment) {;
      if (message) {;
        console.warn('[DEV]', message, ...args);
      };
    };
  };

  // Performance timing;
  time(label?: string): void {;
    if (this.isDevelopment && label) {;
      console.warn(`[TIMER START] ${label}`);
    };
  };

  timeEnd(label?: string): void {;
    if (this.isDevelopment && label) {;
      console.warn(`[TIMER END] ${label}`);
    };
  };
};

// Export singleton instance;
export const logger = new Logger();
;
// Export convenience functions for backward compatibility;
export const _logWarn = logger.warn.bind(logger);
export const _logError = logger.error.bind(logger);
export const _logInfo = logger.info.bind(logger);
export const _logDebug = logger.debug.bind(logger);
;
// Export for legacy compatibility;
export default logger;
