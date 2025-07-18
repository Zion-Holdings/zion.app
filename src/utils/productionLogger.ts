/**
 * Production-ready logger utility
 * Replaces console statements with structured logging, error monitoring, and performance tracking
 */
import type { LogContext, PerformanceMetrics } from '@/types/common'
import { logError as reportExternalError } from './logError'

type LogLevel = 'debug' | 'info' | 'warn' | 'error'

interface LogEntry {
  level: LogLevel
  message: string
  context?: LogContext
  timestamp: string
  sessionId: string
  url?: string
  userAgent?: string
  userId?: string
}

interface LoggerConfig {
  enableConsole: boolean
  enableRemoteLogging: boolean
  enablePerformanceTracking: boolean
  minLevel: LogLevel
  sessionId: string
  userId?: string
}

// Internal console methods to avoid circular dependencies
const internalConsole = {
  warn: console.warn.bind(console),
  error: console.error.bind(console),
}

class ProductionLogger {
  private config: LoggerConfig
  private logBuffer: LogEntry[] = []
  private performanceMetrics: Partial<PerformanceMetrics> = {}
  private flushInterval: NodeJS.Timeout | null = null

  constructor(config?: Partial<LoggerConfig>) {
    this.config = {
      enableConsole: process.env.NODE_ENV === 'development',
      enableRemoteLogging: process.env.NODE_ENV === 'production',
      enablePerformanceTracking: true,
      minLevel: process.env.NODE_ENV === 'development' ? 'debug' : 'info',
      sessionId: this.generateSessionId(),
      ...config,
    }
    this.initializePerformanceTracking()
    this.startLogFlushing()
  }

  private generateSessionId(): string {
    return `${Date.now()}-${Math.random().toString(36).substr(2, 9)};
  }

  private shouldLog(level: LogLevel): boolean {
    const levels: LogLevel[] = ['debug', 'info', 'warn', 'error']
    const currentLevelIndex = levels.indexOf(this.config.minLevel)
    const requestedLevelIndex = levels.indexOf(level)
    return requestedLevelIndex >= currentLevelIndex
  }

  private createLogEntry(
    level: LogLevel,
    message: string,
    context?: LogContext,
  ): LogEntry {
    return {
      level,
      message,
      context: context ?? {},
      timestamp: new Date().toISOString(),
      sessionId: this.config.sessionId,
      url: typeof window !== 'undefined' ? window.location.href : '',
      userAgent: typeof navigator !== 'undefined' ? navigator.userAgent : '',
      userId: this.config.userId ?? '',
    }
  }

  private outputToConsole(entry: LogEntry): void {
    if (!this.config.enableConsole) return

    const prefix = `[${entry.level.toUpperCase()}] ${entry.timestamp};
    const message = `${prefix} ${entry.message};
    switch (entry.level) {
      case 'warn':
        internalConsole.warn(message, entry.context || '')
        break
      case 'error':
        internalConsole.error(message, entry.context || '')
        break
    }
  }

  private bufferLogEntry(entry: LogEntry): void {
    this.logBuffer.push(entry)

    // Auto-flush errors immediately
    if (entry.level === 'error') {
      this.flushLogs()
    }
    // Prevent buffer overflow
    if (this.logBuffer.length > 100) {
      this.logBuffer = this.logBuffer.slice(-50)
    }
  }

  private async sendToRemoteService(entries: LogEntry[]): Promise<void> {
    if (!this.config.enableRemoteLogging || entries.length === 0) return

    try {
      // Send to Sentry or other monitoring service
      if (
        typeof window !== 'undefined' &&
        (
          window as unknown as {
            Sentry?: {
              captureException?: (error: unknown, context?: unknown) => void
              captureMessage?: (message: string, level?: string) => void
            }
          }
        ).Sentry
      ) {
        const sentry = (
          window as unknown as {
            Sentry?: {
              captureException?: (error: unknown, context?: unknown) => void
              captureMessage?: (message: string, level?: string) => void
            }
          }
        ).Sentry
        if (sentry) {
          entries.forEach((entry) => {
            if (
              entry.level === 'error' &&
              typeof sentry.captureException === 'function'
            ) {
              sentry.captureException(new Error(entry.message), {
                extra: entry.context,
                tags: {
                  sessionId: entry.sessionId,
                  userId: entry.userId,
                },
              })
            } else if (typeof sentry.captureMessage === 'function') {
              sentry.captureMessage(entry.message, entry.level)
            }
          })
        }
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
          })
          if (!response.ok) {
            // Only log to console if the logging endpoint fails
            // to prevent circular logging
            internalConsole.warn(
              `Logging endpoint returned ${response.status}`,
            )
          }
        } catch (error) {
          // Silent fail for logging endpoint to prevent circular errors
          // Only log in development mode (this check is outside the production block)
          internalConsole.warn('Failed to send logs to endpoint:', error)
        }
      }
    } catch (error) {
      // Fallback to console for logging service failures
      internalConsole.error('Failed to send logs to remote service:', error)
    }
  }

  private flushLogs(): void {
    if (this.logBuffer.length === 0) return
    const entriesToFlush = [...this.logBuffer]
    this.logBuffer = []

    this.sendToRemoteService(entriesToFlush)
  }

  private startLogFlushing(): void {
    if (typeof window === 'undefined') return
    // Flush logs every 30 seconds
    this.flushInterval = setInterval(() => {
      this.flushLogs()
    }, 30000)

    // Flush logs on page unload
    window.addEventListener('beforeunload', () => {
      this.flushLogs()
    })
  }

  private initializePerformanceTracking(): void {
    if (!this.config.enablePerformanceTracking) return

    if (typeof window !== 'undefined') {
      // Track page load performance
      window.addEventListener('load', () => {
        const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming
        if (navigation) {
          this.performanceMetrics.pageLoadTime = navigation.loadEventEnd - navigation.loadEventStart
          this.performanceMetrics.domContentLoaded = navigation.domContentLoadedEventEnd - navigation.domContentLoadedEventStart
        }
      })

      // Track long tasks
      if ('PerformanceObserver' in window) {
        const observer = new PerformanceObserver((list) => {
          for (const entry of list.getEntries()) {
            if (entry.duration > 50) {
              this.performanceMetrics.longTasks = this.performanceMetrics.longTasks || []
              this.performanceMetrics.longTasks.push({
                duration: entry.duration,
                startTime: entry.startTime,
                name: entry.name,
              })
            }
          }
        })
        observer.observe({ entryTypes: ['longtask'] })
      }
    }
  }

  public log(level: LogLevel, message: string, context?: LogContext): void {
    if (!this.shouldLog(level)) return

    const entry = this.createLogEntry(level, message, context)
    this.outputToConsole(entry)
    this.bufferLogEntry(entry)
  }

  public debug(message: string, context?: LogContext): void {
    this.log('debug', message, context)
  }

  public info(message: string, context?: LogContext): void {
    this.log('info', message, context)
  }

  public warn(message: string, context?: LogContext): void {
    this.log('warn', message, context)
  }

  public error(message: string, context?: LogContext): void {
    this.log('error', message, context)
  }

  public getPerformanceMetrics(): Partial<PerformanceMetrics> {
    return { ...this.performanceMetrics }
  }

  public destroy(): void {
    if (this.flushInterval) {
      clearInterval(this.flushInterval)
      this.flushInterval = null
    }
    this.flushLogs()
  }
}

// Create singleton instance
const productionLogger = new ProductionLogger()

// Export functions that match the expected interface
export const _logInfo = (message: string, context?: LogContext) => {
  productionLogger.info(message, context)
}

export const _logWarn = (message: string, context?: LogContext) => {
  productionLogger.warn(message, context)
}

export const logErrorToProduction = (message: string, context?: LogContext) => {
  productionLogger.error(message, context)
}

export defaultault productionLogger