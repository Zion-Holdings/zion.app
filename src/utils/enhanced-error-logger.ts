// Enhanced Error Logging System for Production Debugging
// Provides structured error collection, context gathering, and intelligent filtering

interface ErrorContext {
  timestamp: number;
  url?: string;
  userAgent?: string;
  userId?: string;
  sessionId?: string;
  buildId?: string;
  environment: string;
  errorBoundary?: boolean;
  componentStack?: string;
  errorInfo?: any;
  performanceMetrics?: {
    memory?: number;
    timing?: number;
    connectionType?: string;
  };
  breadcrumbs?: Array<{
    timestamp: number;
    category: string;
    message: string;
    level: 'info' | 'warn' | 'error';
  }>;
}

interface EnhancedError {
  id: string;
  message: string;
  stack?: string;
  name: string;
  source: 'javascript' | 'promise' | 'network' | 'render' | 'custom';
  severity: 'low' | 'medium' | 'high' | 'critical';
  context: ErrorContext;
  fingerprint: string;
  count: number;
  firstSeen: number;
  lastSeen: number;
}

class EnhancedErrorLogger {
  private errors: Map<string, EnhancedError> = new Map();
  private breadcrumbs: Array<{
    timestamp: number;
    category: string;
    message: string;
    level: 'info' | 'warn' | 'error';
  }> = [];
  private maxErrors = 100;
  private maxBreadcrumbs = 50;
  private sessionId: string;
  private isEnabled: boolean;

  constructor() {
    this.sessionId = this.generateSessionId();
    this.isEnabled = typeof window !== 'undefined';
    
    if (this.isEnabled) {
      this.initializeErrorHandlers();
      this.startPerformanceMonitoring();
    }
  }

  private generateSessionId(): string {
    return `${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;
  }

  private initializeErrorHandlers(): void {
    // Global JavaScript errors
    window.addEventListener('error', (event) => {
      this.captureError({
        message: event.message,
        filename: event.filename,
        lineno: event.lineno,
        colno: event.colno,
        error: event.error,
        source: 'javascript'
      });
    });

    // Unhandled promise rejections
    window.addEventListener('unhandledrejection', (event) => {
      this.captureError({
        message: `Unhandled Promise Rejection: ${event.reason}`,
        error: event.reason instanceof Error ? event.reason : new Error(String(event.reason)),
        source: 'promise'
      });
    });

    // Network errors (fetch failures)
    const originalFetch = window.fetch;
    window.fetch = async (...args) => {
      try {
        const response = await originalFetch(...args);
        if (!response.ok) {
          this.captureError({
            message: `Network Error: ${response.status} ${response.statusText}`,
            error: new Error(`Fetch failed: ${args[0]}`),
            source: 'network',
            context: {
              url: args[0]?.toString(),
              status: response.status,
              statusText: response.statusText
            }
          });
        }
        return response;
             } catch (error) {
         this.captureError({
           message: `Network Error: ${error}`,
           error: error instanceof Error ? error : new Error(String(error)),
           source: 'network',
           context: { url: args[0]?.toString() }
         });
         throw error;
       }
    };
  }

  private startPerformanceMonitoring(): void {
    // Monitor memory usage
    if ('memory' in performance) {
      setInterval(() => {
        const memory = (performance as any).memory;
        if (memory.usedJSHeapSize > memory.totalJSHeapSize * 0.9) {
          this.addBreadcrumb('performance', 'High memory usage detected', 'warn');
        }
      }, 30000);
    }

    // Monitor long tasks
    if ('PerformanceObserver' in window) {
      try {
        const observer = new PerformanceObserver((list) => {
          for (const entry of list.getEntries()) {
            if (entry.duration > 100) {
              this.addBreadcrumb('performance', `Long task detected: ${entry.duration}ms`, 'warn');
            }
          }
        });
        observer.observe({ entryTypes: ['longtask'] });
      } catch (error) {
        // PerformanceObserver not supported
      }
    }
  }

  public captureError(errorData: {
    message: string;
    error?: Error;
    source: EnhancedError['source'];
    filename?: string;
    lineno?: number;
    colno?: number;
    context?: any;
  }): void {
    if (!this.isEnabled) return;

    try {
      const error = errorData.error || new Error(errorData.message);
      const fingerprint = this.generateFingerprint(error, errorData.source);
      
      // Check if this is a known error
      const existingError = this.errors.get(fingerprint);
      if (existingError) {
        existingError.count++;
        existingError.lastSeen = Date.now();
        return;
      }

      // Filter out noise (common non-critical errors)
      if (this.shouldIgnoreError(error, errorData)) {
        return;
      }

      const enhancedError: EnhancedError = {
        id: this.generateId(),
        message: error.message || errorData.message,
        stack: error.stack,
        name: error.name || 'Error',
        source: errorData.source,
        severity: this.calculateSeverity(error, errorData),
        context: this.gatherContext(errorData),
        fingerprint,
        count: 1,
        firstSeen: Date.now(),
        lastSeen: Date.now()
      };

      this.errors.set(fingerprint, enhancedError);
      this.trimErrors();

      // Log to console in development
      if (process.env.NODE_ENV === 'development') {
        console.group(`🚨 Enhanced Error [${enhancedError.severity}]`);
        console.error(enhancedError.message);
        console.log('Context:', enhancedError.context);
        console.log('Breadcrumbs:', this.breadcrumbs.slice(-5));
        console.groupEnd();
      }

      // Report critical errors immediately
      if (enhancedError.severity === 'critical') {
        this.reportError(enhancedError);
      }

    } catch (loggerError) {
      console.error('Error in enhanced error logger:', loggerError);
    }
  }

  private shouldIgnoreError(error: Error, errorData: any): boolean {
    const ignoredMessages = [
      'ResizeObserver loop limit exceeded',
      'Script error',
      'Non-Error promise rejection captured',
      'Loading chunk',
      'ChunkLoadError',
      'Script loading error',
      'Network request failed'
    ];

    const message = error.message || errorData.message || '';
    return ignoredMessages.some(ignored => message.includes(ignored));
  }

  private calculateSeverity(error: Error, errorData: any): EnhancedError['severity'] {
    // Critical errors
    if (error.name === 'TypeError' && error.message.includes('Cannot read properties')) {
      return 'critical';
    }
    if (errorData.source === 'render') {
      return 'high';
    }
    if (error.message.includes('Network Error') && errorData.context?.status >= 500) {
      return 'high';
    }
    
    // Medium severity
    if (errorData.source === 'promise') {
      return 'medium';
    }
    if (error.message.includes('Network Error')) {
      return 'medium';
    }
    
    // Low severity (default)
    return 'low';
  }

  private generateFingerprint(error: Error, source: string): string {
    const message = error.message || 'Unknown error';
    const name = error.name || 'Error';
    const stackLine = error.stack?.split('\n')[1] || '';
    
    return `${source}-${name}-${message}-${stackLine}`.replace(/[^\w-]/g, '').substring(0, 100);
  }

  private gatherContext(errorData: any): ErrorContext {
    const context: ErrorContext = {
      timestamp: Date.now(),
      environment: process.env.NODE_ENV || 'unknown',
      sessionId: this.sessionId,
      breadcrumbs: [...this.breadcrumbs]
    };

    if (typeof window !== 'undefined') {
      context.url = window.location.href;
      context.userAgent = navigator.userAgent;
      
      // Performance metrics
      if ('memory' in performance) {
        const memory = (performance as any).memory;
        context.performanceMetrics = {
          memory: memory.usedJSHeapSize,
          timing: performance.now()
        };
      }
      
      // Connection info
      if ('connection' in navigator) {
        const connection = (navigator as any).connection;
        context.performanceMetrics = {
          ...context.performanceMetrics,
          connectionType: connection.effectiveType
        };
      }
    }

    // Add any custom context
    if (errorData.context) {
      Object.assign(context, errorData.context);
    }

    return context;
  }

  private generateId(): string {
    return `err_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
  }

  public addBreadcrumb(category: string, message: string, level: 'info' | 'warn' | 'error' = 'info'): void {
    if (!this.isEnabled) return;

    this.breadcrumbs.push({
      timestamp: Date.now(),
      category,
      message,
      level
    });

    if (this.breadcrumbs.length > this.maxBreadcrumbs) {
      this.breadcrumbs = this.breadcrumbs.slice(-this.maxBreadcrumbs);
    }
  }

  private trimErrors(): void {
    if (this.errors.size > this.maxErrors) {
      const sortedErrors = Array.from(this.errors.entries())
        .sort(([, a], [, b]) => a.lastSeen - b.lastSeen);
      
      const toRemove = sortedErrors.slice(0, this.errors.size - this.maxErrors);
      toRemove.forEach(([fingerprint]) => {
        this.errors.delete(fingerprint);
      });
    }
  }

  private async reportError(error: EnhancedError): Promise<void> {
    try {
      await fetch('/api/error-report', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          error,
          breadcrumbs: this.breadcrumbs.slice(-10)
        })
      });
    } catch (reportError) {
      console.error('Failed to report error:', reportError);
    }
  }

  // Public API
  public getErrors(): EnhancedError[] {
    return Array.from(this.errors.values());
  }

  public getErrorStats(): {
    total: number;
    bySeverity: Record<string, number>;
    bySource: Record<string, number>;
  } {
    const errors = this.getErrors();
    const bySeverity: Record<string, number> = {};
    const bySource: Record<string, number> = {};

    errors.forEach(error => {
      bySeverity[error.severity] = (bySeverity[error.severity] || 0) + error.count;
      bySource[error.source] = (bySource[error.source] || 0) + error.count;
    });

    return {
      total: errors.reduce((sum, error) => sum + error.count, 0),
      bySeverity,
      bySource
    };
  }

  public clearErrors(): void {
    this.errors.clear();
    this.breadcrumbs = [];
  }

  // React Error Boundary integration
  public captureReactError(error: Error, errorInfo: any, componentStack?: string): void {
    this.captureError({
      message: `React Error: ${error.message}`,
      error,
      source: 'render',
      context: {
        errorBoundary: true,
        componentStack,
        errorInfo
      }
    });
  }
}

// Singleton instance
const enhancedErrorLogger = new EnhancedErrorLogger();

export default enhancedErrorLogger;
export { EnhancedErrorLogger, type EnhancedError, type ErrorContext };