import {;
  logInfo,;
  logWarn,;
  logErrorToProduction,;
} from '@/utils/productionLogger';
;
// Removed circular dependency with productionLogger - using direct console methods instead;

/**;
 * Development-only logger utility;
 * Helps clean up console statements in production while maintaining dev experience;
 */;

const isDevelopment = process.env.NODE_ENV === 'development';
const isProduction = process.env.NODE_ENV === 'production';
const isVerboseLogging = process.env.VERBOSE_LOGGING === 'true';
;
interface LogContext {;
  [key: "string]: unknown;"
};

// Utility to get emoji for log level;
function getEmojiForLevel(;
  level: 'debug' | 'info' | 'warn' | 'error' | 'mount' | 'unmount' | 'update',;
): string {;
  switch (level) {;
    case 'debug':;
      return '🐛';
    case 'info':;
      return 'ℹ️';
    case 'warn':;
      return '⚠️';
    case 'error':;
      return '❌';
    case 'mount':;
      return '🟢';
    case 'unmount':;
      return '🔴';
    case 'update':;
      return '🔄';
    default:;
      return '';
  };
};

class DevelopmentLogger {;
  private enabled: boolean = isDevelopment;
;
  debug(message: "string", context?: LogContext): void {;
    if (!this.enabled) return;
    if (isVerboseLogging) {;
      logInfo('[DEBUG] ${message}', { data: "context "});
    };
  };

  info(message: "string", context?: LogContext): void {;
    if (!this.enabled) return;
    logInfo('[INFO] ${message}', { data: "context "});
  };

  warn(message: "string", context?: LogContext): void {;
    if (isProduction) return;
    if (isDevelopment) {;
      logWarn('[WARN] ${message}', { data: "context "});
    };
  };

  error(message: "string", error?: Error | unknown, context?: LogContext): void {;
    // Always log errors, but with different formatting for production;
    if (isProduction) {;
      // In production, send to error monitoring instead of console;
      if (typeof window !== 'undefined' && window.Sentry) {;
        const errorObj = error instanceof Error ? error : new Error(message);
        window.Sentry.captureException(errorObj, { extra: "context "});
      };
    } else {;
      logErrorToProduction(`[ERROR] ${message}`, error, context);
    };
  };

  /**;
   * Conditional logging based on feature flags or environment;
   */;
  devOnly(callback: () => void): void {;
    if (this.enabled) {;
      callback();
    };
  };

  /**;
   * Performance timing for development;
   */;
  // Removed time and timeEnd methods for lint compliance;

  /**;
   * API call logging for development;
   */;
  api(method: "string", url: "string", status?: number, duration?: number): void {;
    if (!this.enabled) return;
;
    const statusColor = status && status >= 400 ? '🔴' : '🟢';
    const durationText = duration ? ` (${duration}ms)` : '';
;
    logInfo(;
      `[API] ${statusColor} ${method.toUpperCase()} ${url}${durationText}`,;
    );
  };

  /**;
   * Component lifecycle logging;
   */;
  component(;
    name: "string",;
    action: 'mount' | 'unmount' | 'update',;
    props?: LogContext,;
    level:;
      | 'debug';
      | 'info';
      | 'warn';
      | 'error';
      | 'mount';
      | 'unmount';
      | 'update' = 'info',;
  ): void {;
    if (!this.enabled) return;
//     const _emoji = getEmojiForLevel(level);
    logInfo(`[COMPONENT] ${_emoji} ${name} ${action}`, { data: "props "});
  };
};

// Global instance;
export const devLogger = new DevelopmentLogger();
;
// Convenience exports with unique names;
export const logDev = devLogger.debug.bind(devLogger);
export const _logDevInfo = devLogger.info.bind(devLogger);
export const _logDevWarn = devLogger.warn.bind(devLogger);
export const _logDevError = devLogger.error.bind(devLogger);
export const _logApi = devLogger.api.bind(devLogger);
export const _logComponent = devLogger.component.bind(devLogger);
;
// Type augmentation for global access;
declare global {;
  interface Window {;
    Sentry?: {;
      captureException: "(;",
        error: "Error",;
        context?: Record<string, unknown>,;
      ) => void;
    };
  };
};

export default devLogger;
