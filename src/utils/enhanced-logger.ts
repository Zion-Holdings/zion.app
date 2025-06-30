import { logInfo, logError } from '@/utils/productionLogger';

/**
 * Enhanced Structured Logger
 * Provides comprehensive logging with metadata, categorization, and structured output
 */

export interface LogMetadata {
  component?: string;
  action?: string;
  userId?: string;
  sessionId?: string;
  requestId?: string;
  userAgent?: string;
  ip?: string;
  duration?: number;
  memoryUsage?: number;
  stackTrace?: string;
  errorCode?: string;
  context?: Record<string, any>;
}

export interface LogEntry {
  timestamp: string;
  level: 'debug' | 'info' | 'warn' | 'error' | 'critical';
  message: string;
  category: string;
  metadata?: LogMetadata;
  environment: string;
  version: string;
}

export type LogLevel = 'debug' | 'info' | 'warn' | 'error' | 'critical';
export type LogCategory = 
  | 'auth' 
  | 'api' 
  | 'ui' 
  | 'performance' 
  | 'security' 
  | 'database' 
  | 'payment' 
  | 'system' 
  | 'build' 
  | 'test'
  | 'user-action'
  | 'integration'
  | 'deployment';

class EnhancedLogger {
  private environment: string;
  private version: string;
  private minLevel: LogLevel;
  private sessionId: string;
  private enabledCategories: Set<LogCategory>;
  
  constructor() {
    this.environment = process.env.NODE_ENV || 'development';
    this.version = process.env.npm_package_version || '1.0.0';
    this.minLevel = (process.env.LOG_LEVEL as LogLevel) || 'info';
    this.sessionId = this.generateSessionId();
    this.enabledCategories = new Set([
      'auth', 'api', 'ui', 'performance', 'security', 
      'database', 'payment', 'system', 'user-action'
    ]);
  }

  private generateSessionId(): string {
    return `sess_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
  }

  private shouldLog(level: LogLevel, category?: LogCategory): boolean {
    const levelPriority = { debug: 0, info: 1, warn: 2, error: 3, critical: 4 };
    const minPriority = levelPriority[this.minLevel];
    const currentPriority = levelPriority[level];
    
    if (currentPriority < minPriority) return false;
    if (category && !this.enabledCategories.has(category)) return false;
    
    return true;
  }

  private formatLogEntry(
    level: LogLevel,
    message: string,
    category: LogCategory,
    metadata?: LogMetadata
  ): LogEntry {
    return {
      timestamp: new Date().toISOString(),
      level,
      message,
      category,
      metadata: {
        ...metadata,
        sessionId: this.sessionId,
        memoryUsage: this.getMemoryUsage(),
      },
      environment: this.environment,
      version: this.version,
    };
  }

  private getMemoryUsage(): number {
    if (typeof process !== 'undefined' && process.memoryUsage) {
      return process.memoryUsage().heapUsed;
    }
    return 0;
  }

  private writeLog(entry: LogEntry): void {
    const logString = JSON.stringify(entry);
    
    // Console output with color coding
    const colors = {
      debug: '\x1b[36m',    // Cyan
      info: '\x1b[32m',     // Green
      warn: '\x1b[33m',     // Yellow
      error: '\x1b[31m',    // Red
      critical: '\x1b[35m', // Magenta
    };
    const reset = '\x1b[0m';
    
    const coloredLevel = `${colors[entry.level]}${entry.level.toUpperCase()}${reset}`;
    const shortMessage = entry.message.length > 100 
      ? entry.message.substring(0, 100) + '...' 
      : entry.message;
    
    logInfo(`[${entry.timestamp}] ${coloredLevel} [${entry.category}] ${shortMessage}`);
    
    // Write to log files in production
    if (this.environment === 'production') {
      this.writeToFile(entry);
    }
  }

  private async writeToFile(entry: LogEntry): Promise<void> {
    try {
      const fs = await import('fs');
      const path = await import('path');
      
      const logDir = path.join(process.cwd(), 'logs');
      if (!fs.existsSync(logDir)) {
        fs.mkdirSync(logDir, { recursive: true });
      }
      
      const logFile = path.join(logDir, `${entry.category}-${new Date().toISOString().split('T')[0]}.log`);
      const logLine = JSON.stringify(entry) + '\n';
      
      fs.appendFileSync(logFile, logLine);
    } catch (error) {
      logError('Failed to write log to file:', error);
    }
  }

  // Public logging methods
  debug(message: string, category: LogCategory = 'system', metadata?: LogMetadata): void {
    if (!this.shouldLog('debug', category)) return;
    const entry = this.formatLogEntry('debug', message, category, metadata);
    this.writeLog(entry);
  }

  info(message: string, category: LogCategory = 'system', metadata?: LogMetadata): void {
    if (!this.shouldLog('info', category)) return;
    const entry = this.formatLogEntry('info', message, category, metadata);
    this.writeLog(entry);
  }

  warn(message: string, category: LogCategory = 'system', metadata?: LogMetadata): void {
    if (!this.shouldLog('warn', category)) return;
    const entry = this.formatLogEntry('warn', message, category, metadata);
    this.writeLog(entry);
  }

  error(message: string, category: LogCategory = 'system', metadata?: LogMetadata): void {
    if (!this.shouldLog('error', category)) return;
    const entry = this.formatLogEntry('error', message, category, {
      ...metadata,
      stackTrace: new Error().stack,
    });
    this.writeLog(entry);
  }

  critical(message: string, category: LogCategory = 'system', metadata?: LogMetadata): void {
    if (!this.shouldLog('critical', category)) return;
    const entry = this.formatLogEntry('critical', message, category, {
      ...metadata,
      stackTrace: new Error().stack,
    });
    this.writeLog(entry);
    
    // Send to external monitoring in production
    if (this.environment === 'production') {
      this.sendToMonitoring(entry);
    }
  }

  // Specialized logging methods
  logUserAction(action: string, userId?: string, context?: Record<string, any>): void {
    this.info(`User action: ${action}`, 'user-action', {
      action,
      userId,
      context,
    });
  }

  logAPICall(method: string, url: string, statusCode: number, duration: number, metadata?: LogMetadata): void {
    const level = statusCode >= 500 ? 'error' : statusCode >= 400 ? 'warn' : 'info';
    this.log(level, `API ${method} ${url} - ${statusCode}`, 'api', {
      ...metadata,
      action: 'api_call',
      duration,
      context: { method, url, statusCode },
    });
  }

  logPerformance(metric: string, value: number, threshold?: number, metadata?: LogMetadata): void {
    const level = threshold && value > threshold ? 'warn' : 'info';
    this.log(level, `Performance metric ${metric}: ${value}ms`, 'performance', {
      ...metadata,
      action: 'performance_metric',
      context: { metric, value, threshold },
    });
  }

  logError(error: Error, category: LogCategory = 'system', metadata?: LogMetadata): void {
    this.error(error.message, category, {
      ...metadata,
      errorCode: error.name,
      stackTrace: error.stack,
      context: { ...metadata?.context, errorName: error.name },
    });
  }

  // Generic log method
  log(level: LogLevel, message: string, category: LogCategory = 'system', metadata?: LogMetadata): void {
    if (!this.shouldLog(level, category)) return;
    const entry = this.formatLogEntry(level, message, category, metadata);
    this.writeLog(entry);
  }

  // Configuration methods
  setMinLevel(level: LogLevel): void {
    this.minLevel = level;
  }

  enableCategory(category: LogCategory): void {
    this.enabledCategories.add(category);
  }

  disableCategory(category: LogCategory): void {
    this.enabledCategories.delete(category);
  }

  // Monitoring integration
  private async sendToMonitoring(entry: LogEntry): Promise<void> {
    try {
      // Send to Sentry, DataDog, or other monitoring services
      if (typeof window !== 'undefined' && (window as any).Sentry) {
        const sentry = (window as any).Sentry;
        if (entry.level === 'error' || entry.level === 'critical') {
          const error = new Error(entry.message);
          sentry.captureException(error, entry.metadata);
        }
      }
    } catch (error) {
      logError('Failed to send to monitoring:', error);
    }
  }

  // Context management
  createChild(additionalMetadata: LogMetadata): EnhancedLogger {
    const child = new EnhancedLogger();
    child.defaultMetadata = { ...this.defaultMetadata, ...additionalMetadata };
    return child;
  }

  private defaultMetadata: LogMetadata = {};

  setDefaultMetadata(metadata: LogMetadata): void {
    this.defaultMetadata = metadata;
  }

  // Utility methods
  time(label: string): void {
    console.time(label);
  }

  timeEnd(label: string, category: LogCategory = 'performance'): void {
    console.timeEnd(label);
    // Note: Console.timeEnd doesn't return the duration, so we track it manually
    this.info(`Timer ${label} completed`, category, {
      action: 'timer_end',
      context: { label },
    });
  }

  // Health check logging
  logHealthCheck(service: string, status: 'healthy' | 'unhealthy', details?: Record<string, any>): void {
    const level = status === 'healthy' ? 'info' : 'error';
    this.log(level, `Health check ${service}: ${status}`, 'system', {
      action: 'health_check',
      context: { service, status, ...details },
    });
  }
}

// Create singleton instance
export const logger = new EnhancedLogger();

// Export helper functions for common use cases
export const logAPI = (method: string, url: string, statusCode: number, duration: number) => {
  logger.logAPICall(method, url, statusCode, duration);
};

export const logError = (error: Error, category: LogCategory = 'system') => {
  logger.logError(error, category);
};

export const logUserAction = (action: string, userId?: string, context?: Record<string, any>) => {
  logger.logUserAction(action, userId, context);
};

export const logPerformance = (metric: string, value: number, threshold?: number) => {
  logger.logPerformance(metric, value, threshold);
};

export default logger; 