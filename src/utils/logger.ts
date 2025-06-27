import { logInfo, logWarn, logError } from '@/utils/productionLogger';

interface LogLevel {
  DEBUG: 'debug';
  INFO: 'info';
  WARN: 'warn';
  ERROR: 'error';
}

const LOG_LEVELS: LogLevel = {
  DEBUG: 'debug',
  INFO: 'info',
  WARN: 'warn',
  ERROR: 'error'
};

class Logger {
  private isDevelopment = process.env.NODE_ENV === 'development';
  private isDebugEnabled = process.env.DEBUG === 'true' || this.isDevelopment;

  debug(message: string, ...args: unknown[]): void {
    if (this.isDebugEnabled) {
      logInfo(`[DEBUG] ${message}`, { data: args });
    }
  }

  info(message: string, ...args: unknown[]): void {
    if (this.isDevelopment) {
      logInfo(`[INFO] ${message}`, { data: args });
    }
  }

  warn(message: string, ...args: unknown[]): void {
    logWarn(`[WARN] ${message}`, { data: args });
  }

  error(message: string, error?: Error | unknown, ...args: unknown[]): void {
    logError(`[ERROR] ${message}`, error, { args });
    
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
        logError('Failed to report error to monitoring service:', { data: sentryError });
      }
    }
  }

  // Conditional development logging
  devLog(message: string, ...args: unknown[]): void {
    if (this.isDevelopment) {
      logInfo(`[DEV] ${message}`, { data: args });
    }
  }

  // Performance timing
  time(label: string): void {
    if (this.isDevelopment) {
      console.time(label);
    }
  }

  timeEnd(label: string): void {
    if (this.isDevelopment) {
      console.timeEnd(label);
    }
  }
}

// Export singleton instance
export const logger = new Logger();

// Export for legacy compatibility
export default logger; 