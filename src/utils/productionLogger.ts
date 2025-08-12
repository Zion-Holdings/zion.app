/**
 * Production-ready logger utility
 * Replaces console statements with structured logging, error monitoring, and performance tracking
 */

import type { LogContext, PerformanceMetrics } from '@/types/common';
import { logError as reportExternalError } from './logError';

type LogLevel = 'debug' | 'info' | 'warn' | 'error';

interface LogEntry {
  level: LogLevel;
  message: string;
  context?: LogContext;
  timestamp: string;
  sessionId: string;
  url?: string;
  userAgent?: string;
  userId?: string;
}

interface LoggerConfig {
  enableConsole: boolean;
  enableRemoteLogging: boolean;
  enablePerformanceTracking: boolean;
  minLevel: LogLevel;
  sessionId: string;
  userId?: string;
}

// Internal console methods to avoid circular dependencies
const internalConsole = {
  log: console.log.bind(console),
  warn: console.warn.bind(console),
  error: console.error.bind(console),
  info: console.info.bind(console),
};

class ProductionLogger {
  private config: LoggerConfig;
  private logBuffer: LogEntry[] = [];
  private performanceMetrics: Partial<PerformanceMetrics> = {};
  private flushInterval: NodeJS.Timeout | null = null;

  constructor(config?: Partial<LoggerConfig>) {
    this.config = {
      enableConsole: process.env.NODE_ENV === 'development',
      enableRemoteLogging: process.env.NODE_ENV === 'production',
      enablePerformanceTracking: true,
      minLevel: process.env.NODE_ENV === 'development' ? 'debug' : 'info',
      sessionId: this.generateSessionId(),
      ...config,
    };

    this.initializePerformanceTracking();
    this.startLogFlushing();
  }

  private generateSessionId(): string {
    return `${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;
  }

  private shouldLog(level: LogLevel): boolean {
    const levels: LogLevel[] = ['debug', 'info', 'warn', 'error'];
    const currentLevelIndex = levels.indexOf(this.config.minLevel);
    const requestedLevelIndex = levels.indexOf(level);
    return requestedLevelIndex >= currentLevelIndex;
  }

  private createLogEntry(
    level: LogLevel,
    message: string,
    context?: LogContext
  ): LogEntry {
    return {
      level,
      message,
      context,
      timestamp: new Date().toISOString(),
      sessionId: this.config.sessionId,
      url: typeof window !== 'undefined' ? window.location.href : undefined,
      userAgent: typeof navigator !== 'undefined' ? navigator.userAgent : undefined,
      userId: this.config.userId,
    };
  }

  private outputToConsole(entry: LogEntry): void {
    if (!this.config.enableConsole) return;

    const prefix = `[${entry.level.toUpperCase()}] ${entry.timestamp}`;
    const message = `${prefix} ${entry.message}`;

    switch (entry.level) {
      case 'debug':
        internalConsole.info(message, entry.context || '');
        break;
      case 'info':
        internalConsole.info(message, entry.context || '');
        break;
      case 'warn':
        internalConsole.warn(message, entry.context || '');
        break;
      case 'error':
        internalConsole.error(message, entry.context || '');
        break;
    }
  }

  private bufferLogEntry(entry: LogEntry): void {
    this.logBuffer.push(entry);

    // Auto-flush errors immediately
    if (entry.level === 'error') {
      this.flushLogs();
    }

    // Prevent buffer overflow
    if (this.logBuffer.length > 100) {
      this.logBuffer = this.logBuffer.slice(-50);
    }
  }

  private async sendToRemoteService(entries: LogEntry[]): Promise<void> {
    if (!this.config.enableRemoteLogging || entries.length === 0) return;

    try {
      // Send to Sentry or other monitoring service
      if (typeof window !== 'undefined' && (window as any).Sentry) {
        const sentry = (window as any).Sentry;
        entries.forEach(entry => {
          if (entry.level === 'error') {
            sentry.captureException(new Error(entry.message), {
              extra: entry.context,
              tags: {
                sessionId: entry.sessionId,
                userId: entry.userId,
              },
            });
          } else if (sentry.captureMessage) {
            sentry.captureMessage(entry.message, entry.level);
          }
        });
      }

      // Send to custom logging endpoint
      if (process.env.NODE_ENV === 'production') {
        try {
          const response = await fetch('/api/logs', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({ entries }),
          });
          
          if (!response.ok) {
            // Only log to console if the logging endpoint fails
            // to prevent circular logging
            internalConsole.warn(`Logging endpoint returned ${response.status}`);
          }
        } catch (error) {
          // Silent fail for logging endpoint to prevent circular errors
          // Only log in development mode (this check is outside the production block)
          internalConsole.warn('Failed to send logs to endpoint:', error);
        }
      }
    } catch (error) {
      // Fallback to console for logging service failures
      internalConsole.error('Failed to send logs to remote service:', error);
    }
  }

  private flushLogs(): void {
    if (this.logBuffer.length === 0) return;

    const entriesToFlush = [...this.logBuffer];
    this.logBuffer = [];

    this.sendToRemoteService(entriesToFlush);
  }

  private startLogFlushing(): void {
    if (typeof window === 'undefined') return;

    // Flush logs every 30 seconds
    this.flushInterval = setInterval(() => {
      this.flushLogs();
    }, 30000);

    // Flush logs on page unload
    window.addEventListener('beforeunload', () => {
      this.flushLogs();
    });

    // Flush logs on visibility change (tab switch)
    document.addEventListener('visibilitychange', () => {
      if (document.visibilityState === 'hidden') {
        this.flushLogs();
      }
    });
  }

  private initializePerformanceTracking(): void {
    if (!this.config.enablePerformanceTracking || typeof window === 'undefined') {
      return;
    }

    // Track Core Web Vitals
    try {
      // First Contentful Paint
      const paintEntries = performance.getEntriesByType('paint');
      const fcpEntry = paintEntries.find(entry => entry.name === 'first-contentful-paint');
      if (fcpEntry) {
        this.performanceMetrics.firstContentfulPaint = fcpEntry.startTime;
      }

      // Navigation timing
      const navigationEntry = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
      if (navigationEntry) {
        this.performanceMetrics.pageLoadTime = navigationEntry.loadEventEnd - navigationEntry.fetchStart;
        this.performanceMetrics.timeToInteractive = navigationEntry.loadEventEnd;
      }

      // Observe LCP and CLS
      if ('PerformanceObserver' in window) {
        const observer = new PerformanceObserver((list) => {
          for (const entry of list.getEntries()) {
            if (entry.entryType === 'largest-contentful-paint') {
              this.performanceMetrics.largestContentfulPaint = entry.startTime;
            }
            if (entry.entryType === 'layout-shift' && !(entry as any).hadRecentInput) {
              this.performanceMetrics.cumulativeLayoutShift = 
                (this.performanceMetrics.cumulativeLayoutShift || 0) + (entry as any).value;
            }
          }
        });

        observer.observe({ entryTypes: ['largest-contentful-paint', 'layout-shift'] });
      }
    } catch (error) {
      internalConsole.warn('Performance tracking initialization failed:', error);
    }
  }

  // Public logging methods
  debug(message: string, context?: LogContext): void {
    if (!this.shouldLog('debug')) return;

    const entry = this.createLogEntry('debug', message, context);
    this.outputToConsole(entry);
    this.bufferLogEntry(entry);
  }

  info(message: string, context?: LogContext): void {
    if (!this.shouldLog('info')) return;

    const entry = this.createLogEntry('info', message, context);
    this.outputToConsole(entry);
    this.bufferLogEntry(entry);
  }

  warn(message: string, context?: LogContext): void {
    if (!this.shouldLog('warn')) return;

    const entry = this.createLogEntry('warn', message, context);
    this.outputToConsole(entry);
    this.bufferLogEntry(entry); // Warnings will still be buffered and sent to /api/logs and Sentry via that route if configured
  }

  error(message: string, errorPayload?: Error | unknown, context?: LogContext): void {
    if (!this.shouldLog('error')) return;

    // 1. Create a basic log entry for console output
    // The 'error' field in errorContext is primarily for the console log here.
    // reportExternalError will handle the raw errorPayload.
    const errorForConsoleContext = {
      ...context,
      errorDetails: errorPayload instanceof Error ? {
        name: errorPayload.name,
        message: errorPayload.message,
        stack: errorPayload.stack,
      } : { message: String(errorPayload) },
    };
    const entry = this.createLogEntry('error', message, errorForConsoleContext);
    this.outputToConsole(entry); // Log to console for immediate visibility

    // 2. Report to external services using the imported logError (now reportExternalError)
    // If message is meant to be the primary error description when errorPayload isn't an Error instance:
    const actualErrorToReport = errorPayload instanceof Error ? errorPayload : new Error(`${message}${errorPayload ? `: ${String(errorPayload)}` : ''}`);
    if (!(errorPayload instanceof Error) && errorPayload) {
        // If the original errorPayload was not an error, but some other data,
        // attach it to the new error's context if possible, or ensure it's in the main context.
        if (typeof context === 'object' && context !== null) {
            (actualErrorToReport as any).originalPayload = errorPayload;
        }
    }

    // The context for reportExternalError can include componentStack and other structured data
    // productionLogger's context is LogContext (Record<string, any>)
    // logError's context is { componentStack?: string } & Record<string, unknown>
    // We can pass productionLogger's context directly. If componentStack is needed,
    // it should be part of the context passed to productionLogger.error().
    reportExternalError(actualErrorToReport, context);

    // 3. We do NOT call this.bufferLogEntry(entry) for errors here anymore,
    // because reportExternalError handles Sentry, Datadog, LogRocket, and the custom webhook.
    // /api/logs also sends to Sentry, which could lead to duplication if we also buffer.
    // The primary path for errors to Sentry should be direct (via reportExternalError).
    // If /api/logs is also to report to Sentry, it should ideally deduplicate or have specific roles.
    // For now, this simplifies and prevents double reporting from client via productionLogger.
  }

  // Performance logging
  logPerformanceMetric(name: string, value: number, context?: LogContext): void {
    this.info(`Performance: ${name}`, {
      metric: name,
      value,
      unit: 'ms',
      ...context,
    });
  }

  logPerformanceMetrics(): void {
    if (Object.keys(this.performanceMetrics).length > 0) {
      this.info('Performance Metrics Summary', {
        metrics: this.performanceMetrics,
      });
    }
  }

  // Timer utilities
  time(label: string): void {
    if (typeof window !== 'undefined') {
      performance.mark(`${label}-start`);
    }
  }

  timeEnd(label: string): number | undefined {
    if (typeof window === 'undefined') return undefined;

    try {
      performance.mark(`${label}-end`);
      performance.measure(label, `${label}-start`, `${label}-end`);
      
      const measure = performance.getEntriesByName(label, 'measure')[0];
      const duration = measure?.duration || 0;

      this.logPerformanceMetric(label, duration);
      
      // Clean up marks and measures
      performance.clearMarks(`${label}-start`);
      performance.clearMarks(`${label}-end`);
      performance.clearMeasures(label);

      return duration;
    } catch (error) {
      this.warn(`Timer measurement failed for ${label}`, { error });
      return undefined;
    }
  }

  // Utility methods
  setUserId(userId: string): void {
    this.config.userId = userId;
  }

  setLogLevel(level: LogLevel): void {
    this.config.minLevel = level;
  }

  getSessionId(): string {
    return this.config.sessionId;
  }

  // Cleanup
  destroy(): void {
    if (this.flushInterval) {
      clearInterval(this.flushInterval);
    }
    this.flushLogs();
  }
}

// Create singleton instance
const productionLogger = new ProductionLogger();

// Export convenience methods
export const logDebug = productionLogger.debug.bind(productionLogger);
export const logInfo = productionLogger.info.bind(productionLogger);
export const logWarn = productionLogger.warn.bind(productionLogger);
export const logErrorToProduction = productionLogger.error.bind(productionLogger);
export const logPerformance = productionLogger.logPerformanceMetric.bind(productionLogger);
export const timeStart = productionLogger.time.bind(productionLogger);
export const timeEnd = productionLogger.timeEnd.bind(productionLogger);

// Note: logError is not exported here to avoid conflicts with utils/logError.ts
// Use logErrorToProduction for production logging or import logError from utils/logError.ts for external error reporting

export { ProductionLogger };
export default productionLogger; 