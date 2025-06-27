import { logInfo, logWarn, logError } from '@/utils/productionLogger';

/**
 * Development-only logger utility
 * Helps clean up console statements in production while maintaining dev experience
 */

const isDevelopment = process.env.NODE_ENV === 'development';
const isProduction = process.env.NODE_ENV === 'production';

interface LogContext {
  [key: string]: unknown;
}

class DevelopmentLogger {
  private enabled: boolean = isDevelopment;

  debug(message: string, context?: LogContext): void {
    if (!this.enabled) return;
    logInfo('[DEBUG] ${message}', { data: context ? context : '' });
  }

  info(message: string, context?: LogContext): void {
    if (!this.enabled) return;
    logInfo('[INFO] ${message}', { data: context ? context : '' });
  }

  warn(message: string, context?: LogContext): void {
    if (isProduction) return;
    logWarn('[WARN] ${message}', { data: context ? context : '' });
  }

  error(message: string, error?: Error | unknown, context?: LogContext): void {
    // Always log errors, but with different formatting for production
    if (isProduction) {
      // In production, send to error monitoring instead of console
      if (typeof window !== 'undefined' && window.Sentry) {
        const errorObj = error instanceof Error ? error : new Error(message);
        window.Sentry.captureException(errorObj, { extra: context });
      }
    } else {
      logError(`[ERROR] ${message}`, error, context ? context : '');
    }
  }

  /**
   * Conditional logging based on feature flags or environment
   */
  devOnly(callback: () => void): void {
    if (this.enabled) {
      callback();
    }
  }

  /**
   * Performance timing for development
   */
  time(label: string): void {
    if (this.enabled) {
      console.time(`[TIMER] ${label}`);
    }
  }

  timeEnd(label: string): void {
    if (this.enabled) {
      console.timeEnd(`[TIMER] ${label}`);
    }
  }

  /**
   * API call logging for development
   */
  api(method: string, url: string, status?: number, duration?: number): void {
    if (!this.enabled) return;
    
    const statusColor = status && status >= 400 ? '🔴' : '🟢';
    const durationText = duration ? ` (${duration}ms)` : '';
    
    logInfo(`[API] ${statusColor} ${method.toUpperCase()} ${url}${durationText}`);
  }

  /**
   * Component lifecycle logging
   */
  component(name: string, action: 'mount' | 'unmount' | 'update', props?: LogContext): void {
    if (!this.enabled) return;
    
    const emoji = action === 'mount' ? '🟢' : action === 'unmount' ? '🔴' : '🔄';
    logInfo('[COMPONENT] ${emoji} ${name} ${action}', { data: props ? props : '' });
  }
}

// Global instance
export const devLogger = new DevelopmentLogger();

// Convenience exports
export const logDev = devLogger.debug.bind(devLogger);
export const logInfo = devLogger.info.bind(devLogger);
export const logWarn = devLogger.warn.bind(devLogger);
export const logError = devLogger.error.bind(devLogger);
export const logApi = devLogger.api.bind(devLogger);
export const logComponent = devLogger.component.bind(devLogger);
export const timeLog = devLogger.time.bind(devLogger);
export const timeEndLog = devLogger.timeEnd.bind(devLogger);

// Type augmentation for global access
declare global {
  interface Window {
    Sentry?: {
      captureException: (error: Error, context?: any) => void;
    };
  }
}

export default devLogger; 