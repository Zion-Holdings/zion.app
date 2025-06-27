/**
 * Production-ready logger utility
 * Replaces console statements with structured logging, error monitoring, and performance tracking
 */

import type { LogContext, PerformanceMetrics } from '@/types/common';

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
        console.log(message, entry.context || '');
        break;
      case 'info':
        console.info(message, entry.context || '');
        break;
      case 'warn':
        console.warn(message, entry.context || '');
        break;
      case 'error':
        console.error(message, entry.context || '');
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
        await fetch('/api/logs', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ entries }),
        }).catch(() => {
          // Silent fail for logging endpoint
        });
      }
    } catch (error) {
      // Fallback to console for logging service failures
      console.error('Failed to send logs to remote service:', error);
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
      console.warn('Performance tracking initialization failed:', error);
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
    this.bufferLogEntry(entry);
  }

  error(message: string, error?: Error | unknown, context?: LogContext): void {
    if (!this.shouldLog('error')) return;

    const errorContext = {
      ...context,
      error: error instanceof Error ? {
        name: error.name,
        message: error.message,
        stack: error.stack,
      } : error,
    };

    const entry = this.createLogEntry('error', message, errorContext);
    this.outputToConsole(entry);
    this.bufferLogEntry(entry);
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
export const logError = productionLogger.error.bind(productionLogger);
export const logPerformance = productionLogger.logPerformanceMetric.bind(productionLogger);
export const timeStart = productionLogger.time.bind(productionLogger);
export const timeEnd = productionLogger.timeEnd.bind(productionLogger);

export { ProductionLogger };
export default productionLogger; 