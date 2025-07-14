import { logInfo, logWarn, logErrorToProduction } from '@/utils/productionLogger';

// Removed circular dependency with productionLogger - using direct console methods instead

interface LogLevel {
  DEBUG: 'debug';
  INFO: 'info';
  WARN: 'warn';
  ERROR: 'error';
}

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

  debug(message: string, context?: Record<string, unknown>): void {
    if (this.isDebugEnabled) {
      logInfo('[DEBUG] ${message}', { data: context });
    }
  }

  info(message: string, context?: Record<string, unknown>): void {
    if (this.isDevelopment) {
      logInfo('[INFO] ${message}', { data: context });
    }
  }

  warn(message: string, context?: Record<string, unknown>): void {
    logWarn('[WARN] ${message}', { data: context });
  }

  error(message: string, error?: Error | unknown, context?: Record<string, unknown>): void {
    logErrorToProduction(`[ERROR] ${message}`, error, context);
    
    // In production, also send to error monitoring service
    if (!this.isDevelopment && typeof window !== 'undefined') {
      try {
        // Integration with Sentry or other error monitoring
        const globalWindow = window as Window & { Sentry?: { captureException: (error: Error) => void } };
        if (globalWindow.Sentry) {
          globalWindow.Sentry.captureException(error instanceof Error ? error : new Error(message));
        }
      } catch (sentryError) {
        // Fallback if Sentry fails
        logErrorToProduction('Failed to report error to monitoring service:', sentryError);
      }
    }
  }

  // Conditional development logging
  devLog(message: string, context?: Record<string, unknown>): void {
    if (this.isDevelopment) {
      logInfo('[DEV] ${message}', { data: context });
    }
  }

  // Performance timing
  time(label: string): void {
    if (this.isDevelopment) {
      // Use structured logging instead of console.time
      logInfo(`[TIMER] Starting: ${label}`);
    }
  }

  timeEnd(label: string): void {
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