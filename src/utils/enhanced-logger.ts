// import { logInfo, logError } from '@/utils/productionLogger';
import fs from 'fs';
import path from 'path';

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
  level: LogLevel;
  message: string;
  category: LogCategory;
  timestamp: string;
  environment: string;
  sessionId: string;
  metadata?: Record<string, unknown>;
  performanceMarker?: {
    start: number;
    end?: number;
    duration?: number;
  };
}

export interface PerformanceMetric {
  timestamp: string;
  memory: NodeJS.MemoryUsage;
  cpu: NodeJS.CpuUsage;
  uptime: number;
  eventLoopDelay: number;
}

export type LogLevel = 'debug' | 'info' | 'warn' | 'error' | 'critical';
export type LogCategory = 'api' | 'auth' | 'database' | 'payment' | 'system' | 'user-action';

class EnhancedLogger {
  private environment: string;
  private version: string;
  private minLevel: LogLevel;
  private sessionId: string;
  private enabledCategories: Set<LogCategory>;
  private logBuffer: LogEntry[] = [];
  private errorPatterns: Map<string, number> = new Map();
  private performanceMetrics: PerformanceMetric[] = [];
  private alertThresholds = {
    errorRate: 0.05, // 5%
    criticalErrors: 3, // 3 in 5 minutes
    performanceThreshold: 5000, // 5 seconds
  };
  
  constructor() {
    this.environment = process.env.NODE_ENV || 'development';
    this.version = process.env.npm_package_version || '1.0.0';
    this.minLevel = (process.env.LOG_LEVEL as LogLevel) || 'info';
    this.sessionId = this.generateSessionId();
    this.enabledCategories = new Set([
      'auth', 'api', 'ui', 'performance', 'security', 
      'database', 'payment', 'system', 'user-action'
    ]);
    this.initializeErrorTracking();
    this.setupPeriodicFlush();
    this.setupRealTimeMonitoring();
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
    
    console.log(`[${entry.timestamp}] ${coloredLevel} [${entry.category}] ${shortMessage}`);
    
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
      console.error('Failed to write log to file:', error);
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
      console.error('Failed to send to monitoring:', error);
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

  private initializeErrorTracking(): void {
    // Track error patterns for trend analysis
    this.setupErrorPatternTracking();
    
    // Setup automated alerts
    this.setupAutomatedAlerts();
    
    // Initialize performance monitoring
    this.initializePerformanceTracking();
  }

  private setupErrorPatternTracking(): void {
    setInterval(() => {
      this.analyzeErrorPatterns();
    }, 60000); // Every minute
  }

  private analyzeErrorPatterns(): void {
    const recentErrors = this.logBuffer
      .filter(entry => entry.level === 'error')
      .filter(entry => Date.now() - new Date(entry.timestamp).getTime() < 300000); // Last 5 minutes

    // Count error patterns
    recentErrors.forEach(error => {
      const pattern = this.extractErrorPattern(error.message);
      this.errorPatterns.set(pattern, (this.errorPatterns.get(pattern) || 0) + 1);
    });

    // Check for critical error rates
    const totalRecent = this.logBuffer
      .filter(entry => Date.now() - new Date(entry.timestamp).getTime() < 300000).length;
    
    const errorRate = totalRecent > 0 ? recentErrors.length / totalRecent : 0;
    
    if (errorRate > this.alertThresholds.errorRate) {
      this.triggerAlert('high_error_rate', {
        errorRate,
        threshold: this.alertThresholds.errorRate,
        recentErrors: recentErrors.length,
        totalLogs: totalRecent,
      });
    }

    // Check for repeated critical errors
    for (const [pattern, count] of this.errorPatterns.entries()) {
      if (count >= this.alertThresholds.criticalErrors) {
        this.triggerAlert('repeated_error_pattern', {
          pattern,
          count,
          threshold: this.alertThresholds.criticalErrors,
        });
        this.errorPatterns.delete(pattern); // Reset after alert
      }
    }
  }

  private extractErrorPattern(message: string): string {
    // Extract meaningful error patterns by removing dynamic data
    return message
      .replace(/\d+/g, 'N') // Replace numbers
      .replace(/[a-f0-9-]{8,}/gi, 'ID') // Replace IDs/hashes
      .replace(/https?:\/\/[^\s]+/gi, 'URL') // Replace URLs
      .substring(0, 100); // Limit length
  }

  private setupAutomatedAlerts(): void {
    // Setup different alert channels
    this.setupEmailAlerts();
    this.setupWebhookAlerts();
    this.setupSlackAlerts();
  }

  private setupEmailAlerts(): void {
    // Email alerting setup would go here
    // Integration with SendGrid, Nodemailer, etc.
  }

  private setupWebhookAlerts(): void {
    // Webhook alerting for external monitoring systems
  }

  private setupSlackAlerts(): void {
    // Slack integration for team notifications
  }

  private triggerAlert(type: string, data: any): void {
    const alert = {
      type,
      timestamp: new Date().toISOString(),
      environment: this.environment,
      data,
      severity: this.determineAlertSeverity(type),
    };

    // Log the alert with proper error formatting
    this.logEntry('error', `ALERT: ${type}`, 'system', alert);

    // Send to monitoring systems
    this.sendToMonitoringSystems(alert);

    // Store alert history
    this.storeAlertHistory(alert);
  }

  private determineAlertSeverity(type: string): 'low' | 'medium' | 'high' | 'critical' {
    const severityMap: Record<string, 'low' | 'medium' | 'high' | 'critical'> = {
      'high_error_rate': 'high',
      'repeated_error_pattern': 'high',
      'performance_degradation': 'medium',
      'security_event': 'critical',
      'system_failure': 'critical',
    };
    
    return severityMap[type] || 'medium';
  }

  private sendToMonitoringSystems(alert: any): void {
    // Send to external monitoring systems
    if (process.env.MONITORING_WEBHOOK_URL) {
      this.sendWebhookAlert(alert);
    }

    if (process.env.SLACK_WEBHOOK_URL) {
      this.sendSlackAlert(alert);
    }

    // Store in local alerting system
    this.storeLocalAlert(alert);
  }

  private async sendWebhookAlert(alert: any): Promise<void> {
    try {
      const response = await fetch(process.env.MONITORING_WEBHOOK_URL!, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(alert),
      });
      
      if (!response.ok) {
        this.logEntry('warn', `Failed to send webhook alert: ${response.statusText}`, 'system');
      }
    } catch (error) {
      this.logEntry('warn', `Error sending webhook alert: ${error}`, 'system');
    }
  }

  private async sendSlackAlert(alert: any): Promise<void> {
    try {
      const slackMessage = {
        text: `🚨 ${alert.type.toUpperCase()} Alert`,
        blocks: [
          {
            type: 'section',
            text: {
              type: 'mrkdwn',
              text: `*Alert Type:* ${alert.type}\n*Severity:* ${alert.severity}\n*Environment:* ${alert.environment}\n*Time:* ${alert.timestamp}`,
            },
          },
          {
            type: 'section',
            text: {
              type: 'mrkdwn',
              text: `*Details:*\n\`\`\`${JSON.stringify(alert.data, null, 2)}\`\`\``,
            },
          },
        ],
      };

      const response = await fetch(process.env.SLACK_WEBHOOK_URL!, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(slackMessage),
      });

      if (!response.ok) {
        this.logEntry('warn', `Failed to send Slack alert: ${response.statusText}`, 'system');
      }
    } catch (error) {
      this.logEntry('warn', `Error sending Slack alert: ${error}`, 'system');
    }
  }

  private storeLocalAlert(alert: any): void {
    const alertsFile = path.join(process.cwd(), 'logs', 'alerts.jsonl');
    const alertLine = JSON.stringify(alert) + '\n';
    
    try {
      fs.appendFileSync(alertsFile, alertLine);
    } catch (error) {
      this.warn(`Failed to store alert locally: ${error}`);
    }
  }

  private storeAlertHistory(alert: any): void {
    // Store in a rotating alert history for dashboard access
    const historyFile = path.join(process.cwd(), 'logs', 'alert-history.json');
    
    try {
      let history = [];
      if (fs.existsSync(historyFile)) {
        history = JSON.parse(fs.readFileSync(historyFile, 'utf8'));
      }
      
      history.push(alert);
      
      // Keep only last 100 alerts
      if (history.length > 100) {
        history = history.slice(-100);
      }
      
      fs.writeFileSync(historyFile, JSON.stringify(history, null, 2));
    } catch (error) {
      this.warn(`Failed to store alert history: ${error}`);
    }
  }

  private initializePerformanceTracking(): void {
    setInterval(() => {
      this.collectPerformanceMetrics();
    }, 30000); // Every 30 seconds
  }

  private collectPerformanceMetrics(): void {
    const metric: PerformanceMetric = {
      timestamp: new Date().toISOString(),
      memory: process.memoryUsage(),
      cpu: process.cpuUsage(),
      uptime: process.uptime(),
      eventLoopDelay: this.measureEventLoopDelay(),
    };

    this.performanceMetrics.push(metric);

    // Keep only last 100 metrics
    if (this.performanceMetrics.length > 100) {
      this.performanceMetrics = this.performanceMetrics.slice(-100);
    }

    // Check for performance issues
    this.checkPerformanceThresholds(metric);
  }

  private measureEventLoopDelay(): number {
    const start = process.hrtime.bigint();
    setImmediate(() => {
      const delay = Number(process.hrtime.bigint() - start) / 1000000; // Convert to milliseconds
      return delay;
    });
    return 0; // Simplified implementation
  }

  private checkPerformanceThresholds(metric: PerformanceMetric): void {
    // Check memory usage
    const memoryUsageMB = metric.memory.heapUsed / (1024 * 1024);
    if (memoryUsageMB > 500) { // 500MB threshold
      this.triggerAlert('high_memory_usage', {
        currentUsage: memoryUsageMB,
        threshold: 500,
        metric,
      });
    }

    // Check event loop delay
    if (metric.eventLoopDelay > 100) { // 100ms threshold
      this.triggerAlert('event_loop_delay', {
        currentDelay: metric.eventLoopDelay,
        threshold: 100,
        metric,
      });
    }
  }

  private setupPeriodicFlush(): void {
    setInterval(() => {
      this.flushLogs();
    }, 30000); // Flush every 30 seconds
  }

  private setupRealTimeMonitoring(): void {
    // Setup real-time log streaming for dashboard
    this.setupLogStreaming();
  }

  private setupLogStreaming(): void {
    // WebSocket or Server-Sent Events for real-time log streaming
    // This would integrate with a dashboard interface
  }

  private flushLogs(): void {
    if (this.logBuffer.length === 0) return;

    const logsToFlush = [...this.logBuffer];
    this.logBuffer = [];

    // Write to files
    this.writeLogsToFiles(logsToFlush);

    // Send to remote services
    this.sendLogsToRemoteServices(logsToFlush);
  }

  private writeLogsToFiles(logs: LogEntry[]): void {
    const logsDir = path.join(process.cwd(), 'logs');
    
    // Ensure logs directory exists
    if (!fs.existsSync(logsDir)) {
      fs.mkdirSync(logsDir, { recursive: true });
    }

    // Group logs by level
    const logsByLevel = logs.reduce((acc, log) => {
      if (!acc[log.level]) acc[log.level] = [];
      acc[log.level].push(log);
      return acc;
    }, {} as Record<string, LogEntry[]>);

    // Write to separate files by level
    Object.entries(logsByLevel).forEach(([level, levelLogs]) => {
      const filename = path.join(logsDir, `${level}-${new Date().toISOString().split('T')[0]}.jsonl`);
      const logLines = levelLogs.map(log => JSON.stringify(log)).join('\n') + '\n';
      
      try {
        fs.appendFileSync(filename, logLines);
      } catch (error) {
        console.error(`Failed to write to log file ${filename}:`, error);
      }
    });
  }

  private async sendLogsToRemoteServices(logs: LogEntry[]): Promise<void> {
    // Send to external logging services
    const remoteServices = [
      this.sendToDatadog,
      this.sendToElasticsearch,
      this.sendToCustomEndpoint,
    ];

    await Promise.allSettled(
      remoteServices.map(service => service.call(this, logs))
    );
  }

  private async sendToDatadog(logs: LogEntry[]): Promise<void> {
    if (!process.env.DATADOG_API_KEY) return;

    try {
      // Datadog logs API integration would go here
      this.logEntry('debug', `Would send ${logs.length} logs to Datadog`, 'system');
    } catch (error) {
      this.logEntry('warn', `Failed to send logs to Datadog: ${error}`, 'system');
    }
  }

  private async sendToElasticsearch(logs: LogEntry[]): Promise<void> {
    if (!process.env.ELASTICSEARCH_URL) return;

    try {
      // Elasticsearch integration would go here
      this.logEntry('debug', `Would send ${logs.length} logs to Elasticsearch`, 'system');
    } catch (error) {
      this.logEntry('warn', `Failed to send logs to Elasticsearch: ${error}`, 'system');
    }
  }

  private async sendToCustomEndpoint(logs: LogEntry[]): Promise<void> {
    if (!process.env.CUSTOM_LOGS_ENDPOINT) return;

    try {
      const response = await fetch(process.env.CUSTOM_LOGS_ENDPOINT, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ logs }),
      });

      if (!response.ok) {
        this.logEntry('warn', `Custom logs endpoint returned ${response.status}`, 'system');
      }
    } catch (error) {
      this.logEntry('warn', `Failed to send logs to custom endpoint: ${error}`, 'system');
    }
  }

  // Public API for accessing metrics
  public getMetrics() {
    return {
      errorPatterns: Object.fromEntries(this.errorPatterns),
      performanceMetrics: this.performanceMetrics.slice(-10), // Last 10 metrics
      bufferSize: this.logBuffer.length,
      environment: this.environment,
    };
  }

  public getAlertHistory() {
    try {
      const historyFile = path.join(process.cwd(), 'logs', 'alert-history.json');
      if (fs.existsSync(historyFile)) {
        return JSON.parse(fs.readFileSync(historyFile, 'utf8'));
      }
    } catch (error) {
      this.warn(`Failed to read alert history: ${error}`);
    }
    return [];
  }

  public getRecentLogs(level?: LogLevel, count = 50) {
    let logs = this.logBuffer;
    
    if (level) {
      logs = logs.filter(log => log.level === level);
    }
    
    return logs.slice(-count);
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