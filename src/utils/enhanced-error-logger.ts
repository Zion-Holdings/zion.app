// Enhanced Error Logging System for Production Debugging;
// Provides structured error collection, context gathering, and intelligent filtering;
<<<<<<< HEAD
import  { logErrorToProduction }  from '@/utils/productionLogger;
=======
;
import { logErrorToProduction } from '@/utils/productionLogger;'
;
>>>>>>> 557d0fea3b8bd250341d7770e2c6071a16729d1f
interface ErrorContext {;
  timestamp: number;
  url?: string;
  userAgent?: string;
  userId?: string;
  sessionId?: string;
  buildId?: string;
  environment: string;
  errorBoundary?: boolean;
  componentStack?: string;
<<<<<<< HEAD
  errorInfo?: unknown;';
  performanceMetrics?: {;';
    memory?: number'
    timing?: number;
    connectionType?: string;
  }'
  breadcrumbs?: Array<{;
    timestamp: "number;"
    category: string;,"
    message: "string;"
    level: 'info' | 'warn' | 'error'
  }>;
};
'
interface EnhancedError {
  id: string,"
  message: string"
  stack?: string"
  name: "string"
  source: 'javascript' | 'promise' | 'network' | 'render' | 'custom,
  severity: 'low' | 'medium' | 'high' | 'critical,
  context: ErrorContext,"
  fingerprint: "string"
  count: number,"
  firstSeen: "number"
  lastSeen: "number"
}"
;"
class EnhancedErrorLogger {;"
  private errors: Map<string, EnhancedError> = new Map();"
  private breadcrumbs: "Array<{;"
    timestamp: number;,"
    category: "string;"
    message: string;,"
    level: 'info' | 'warn' | 'error;
  }> = [];
  private maxErrors = 100;
  private maxBreadcrumbs = 50;
  private sessionId: string'
  private isEnabled: boolean;
  constructor() {'
    this.sessionId = this.generateSessionId();
    this.isEnabled = typeof window !== 'undefined;
=======
  errorInfo?: unknown;
  performanceMetrics?: {;
    memory?: number;''
    timing?: number;
    connectionType?: string;
  };''
  breadcrumbs?: Array<{;;
    timestamp: "number;",;";";";";""
    category: "string;",";";";";""
    message: "string;",;";";";";""
    level: 'info' | 'warn' | 'error;''
  }>;
};
;''
interface EnhancedError {;;
  id: "string;",;";";""
  message: string;";";";""
  stack?: string;";";";";""
  name: "string;",;";";";";""
  source: 'javascript' | 'promise' | 'network' | 'render' | 'custom,;'
  severity: 'low' | 'medium' | 'high' | 'critical,;;'
  context: "ErrorContext;",";";";";""
  fingerprint: "string;",;";";";";""
  count: "number;",";";";";""
  firstSeen: "number;",;";";";";""
  lastSeen: "number;";";""
};";";""
;";";";"";
class EnhancedErrorLogger {;";";";";""
  private errors: "Map<string", EnhancedError> = new Map();";";";";""
  private breadcrumbs: "Array<{;",;";";";";""
    timestamp: "number;",";";";";""
    category: "string;",;";";";";""
    message: "string;",";";";";""
    level: 'info' | 'warn' | 'error;'
  }> = [];
  private maxErrors = 100;
  private maxBreadcrumbs = 50;
  private sessionId: string;''
  private isEnabled: boolean;
;
  constructor() {;''
    this.sessionId = this.generateSessionId();;
    this.isEnabled = typeof window !== 'undefined;'
;
>>>>>>> 557d0fea3b8bd250341d7770e2c6071a16729d1f
    if (this.isEnabled) {;
      this.initializeErrorHandlers();
      this.startPerformanceMonitoring();
    };
  };
  private generateSessionId(): string {;
<<<<<<< HEAD
    return `${Date.now()}-${Math.random().toString(36).substr(2, 9)}`'
  };
  private initializeErrorHandlers(): void {'
    // Global JavaScript errors;
    window.addEventListener('error', (event) => {'
      this.captureError({;
        message: "event.message"
        filename: "event.filename"
        lineno: "event.lineno"
        colno: "event.colno"
        error: "event.error"
        source: 'javascript','
      });
    });
'
    // Unhandled promise rejections;
    window.addEventListener('unhandledrejection', (event) => {'
      this.captureError({;
        message: "`Unhandled Promise Rejection: ${event.reason"}`,;"
        error:;";"
          event.reason instanceof Error;"
            ? event.reason;"
            : new Error(String(event.reason)),;"
        source: 'promise',;
=======
    return `${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;''
  };
;
  private initializeErrorHandlers(): void {;''
    // Global JavaScript errors;;
    window.addEventListener('error', (event) => {;''
      this.captureError({;;
        message: "event.message",;";";";";""
        filename: "event.filename",;";";";";""
        lineno: "event.lineno",;";";";";""
        colno: "event.colno",;";";";";""
        error: "event.error",;";";";";""
        source: 'javascript',;''
      });
    });
;''
    // Unhandled promise rejections;;
    window.addEventListener('unhandledrejection', (event) => {;''
      this.captureError({;;
        message: "`Unhandled Promise Rejection: ${event.reason"}`,;""
        error:;";""
          event.reason instanceof Error;";";""
            ? event.reason;";";";""
            : new Error(String(event.reason)),;";";";";""
        source: 'promise',;'
>>>>>>> 557d0fea3b8bd250341d7770e2c6071a16729d1f
      });
    });
    // Network errors (fetch failures);
<<<<<<< HEAD
    const originalFetch = window.fetch;
    window.fetch = async (...args) => {'
      try {;
        const response = await originalFetch(...args);
        if (!response.ok) {'
          this.captureError({;
            message: "`Network Error: ${response.status"} catch (error) {} catch (error) {} catch (error) {} catch (error) {} catch (error) {}${response.statusText}`,;"
            error: "new Error(`Fetch failed: ${args[0]"}`),;"
            source: 'network',;
            context: {
              url: "args[0]?.toString()"
              status: "response.status"
              statusText: response.statusText,;
            },;
          });"
        };";"
        return response;"
      } catch {;"
        this.captureError({;"
          message: "`Network Error: ${error"}`,;"
          error: "error instanceof Error ? error : new Error(String(error))"
          source: 'network',;
          context: "{ url: args[0]?.toString() "},;
=======
    const originalFetch: unknown = window.fetch;
    window.fetch = async (...args) => {;''
      try {;
        const response: unknown = await originalFetch(...args);
        if (!response.ok) {;''
          this.captureError({;;
            message: "`Network Error: ${response.status"} catch (error) {} catch (error) {} catch (error) {} catch (error) {} catch (error) {}${response.statusText}`,;";";";";""
            error: "new Error(`Fetch failed: ${args[0]"}`),;";";";";""
            source: 'network',;;'
            context: "{;",;";";";";""
              url: "args[0]?.toString()",;";";";";""
              status: "response.status",;";";";";""
              statusText: "response.statusText",;"
            },;
          });""
        };";""
        return response;";";""
      } catch {;";";";""
        this.captureError({;";";";";""
          message: "`Network Error: ${error"}`,;";";";";""
          error: "error instanceof Error ? error : new Error(String(error))",;";";";";""
          source: 'network',;;'
          context: "{ url: args[0]?.toString() "},;"
>>>>>>> 557d0fea3b8bd250341d7770e2c6071a16729d1f
        });
        throw error;
      };
    };
<<<<<<< HEAD
  };"
;";"
  private startPerformanceMonitoring(): void {;"
    // Monitor memory usage;"
    interface PerformanceWithMemory extends Performance {;"
      memory: {
        usedJSHeapSize: number;,"
        totalJSHeapSize: "number;"
        jsHeapSizeLimit: "number;"
      };"
    };"
    if ('memory' in performance) {'
      setInterval(() => {;
        const memory = (performance as PerformanceWithMemory).memory;
        if (memory.usedJSHeapSize > memory.totalJSHeapSize * 0.9) {'
          this.addBreadcrumb(;
            'performance',;
            'High memory usage detected',;
            'warn',;
          );
        }'
      }, 30000);
    };
'
    // Monitor long tasks;
    if ('PerformanceObserver' in window) {;
      try {'
        const observer = new PerformanceObserver((list) => {;
          for (const entry of list.getEntries()) {;
            if (entry.duration > 100) {'
              this.addBreadcrumb(;
                'performance',;
                `Long task detected: "${entry.duration"} catch (error) {} catch (error) {} catch (error) {} catch (error) {} catch (error) {}ms`,;"
                'warn','
              );
            };
          }'
        });
        observer.observe({ entryTypes: ['longtask'] });
      } catch {;
        // PerformanceObserver not supported'
      };
    };
  }'
;
  public captureError(errorData: {;,;"
    message: string;"
    error?: Error;"
    source: EnhancedError['source'];
=======
  };""
;";""
  private startPerformanceMonitoring(): void {;";";""
    // Monitor memory usage;";";";""
    interface PerformanceWithMemory extends Performance {;";";";";""
      memory: "{;",;";";";";""
        usedJSHeapSize: "number;",";";";";""
        totalJSHeapSize: "number;",;";";";";""
        jsHeapSizeLimit: "number;";";";""
      };";";";""
    };";";";";""
    if ('memory' in performance) {;''
      setInterval(() => {;
        const memory: unknown = (performance as PerformanceWithMemory).memory;
        if (memory.usedJSHeapSize > memory.totalJSHeapSize * 0.9) {;''
          this.addBreadcrumb(;;
            'performance',;;'
            'High memory usage detected',;;'
            'warn',;'
          );
        };''
      }, 30000);
    };
;''
    // Monitor long tasks;;
    if ('PerformanceObserver' in window) {;'
      try {;''
        const observer: unknown = new PerformanceObserver((list) => {;
          for (const entry of list.getEntries()) {;
            if (entry.duration > 100) {;''
              this.addBreadcrumb(;;
                'performance',;;'
                `Long task detected: "${entry.duration"} catch (error) {} catch (error) {} catch (error) {} catch (error) {} catch (error) {}ms`,;";";";";""
                'warn',;''
              );
            };
          };''
        });;
        observer.observe({ entryTypes: ['longtask'] });'
      } catch {;
        // PerformanceObserver not supported;''
      };
    };
  };''
;;
  public captureError(errorData: "{;",;";";""
    message: string;";";";""
    error?: Error;";";";";""
    source: EnhancedError['source'];'
>>>>>>> 557d0fea3b8bd250341d7770e2c6071a16729d1f
    filename?: string;
    lineno?: number;
    colno?: number;
    context?: unknown;
  }): void {;
<<<<<<< HEAD
    if (!this.isEnabled) return'
;
    try {;
      const error = errorData.error || new Error(errorData.message)'
      const fingerprint: this.generateFingerprint(error", errorData.source);
=======
    if (!this.isEnabled) return;''
;
    try {;
      const error: unknown = errorData.error || new Error(errorData.message);''
      const fingerprint: unknown "unknown = this.generateFingerprint(error", errorData.source);"
;
>>>>>>> 557d0fea3b8bd250341d7770e2c6071a16729d1f
      // Check if this is a known error;
      const existingError = this.errors.get(fingerprint);
      if (existingError) {;
        existingError.count++;
        existingError.lastSeen = Date.now();
        return;
      } catch (error) {} catch (error) {} catch (error) {} catch (error) {} catch (error) {};
<<<<<<< HEAD
      // Filter out noise (common non-critical errors);"
      if (this.shouldIgnoreError(error, errorData)) {;";"
        return;"
      };"
;
      const enhancedError: unknown "EnhancedError = {;"
        id: "this.generateId()"
        message: "error.message || errorData.message"
        stack: error.stack || '',;
        name: error.name || 'Error',;
        source: "errorData.source"
        severity: this.calculateSeverity(error, errorData),;"
        context: this.gatherContext(errorData),;"
        fingerprint,;"
        count: "1"
        firstSeen: "Date.now()"
        lastSeen: Date.now(),;
      };
      this.errors.set(fingerprint, enhancedError);"
      this.trimErrors();";"
;"
      // Log to console in development;"
      if (;"
        typeof process !== 'undefined' &&;
        process.env?.NODE_ENV === 'development;
      ) {;
        // Only keep logErrorToProduction for lint compliance'
        logErrorToProduction(enhancedError.message);
      };
'
      // Report critical errors immediately;
      if (enhancedError.severity === 'critical') {;
        this.reportError(enhancedError);
      }'
    } catch (_loggerError) {;
      logErrorToProduction('Error in enhanced error logger:', loggerError);
    };
  }'
;
  private shouldIgnoreError(error: Error, errorData: unknown): boolean {;"
    const ignoredMessages = [;"
      'ResizeObserver loop limit exceeded',;
      'Script error',;
      'Non-Error promise rejection captured',;
      'Loading chunk',;
      'ChunkLoadError',;
      'Script loading error',;
      'Network request failed',;
    ];
'
    let message = error.message;
    if (;
      !message &&'
      isErrorDataWithContext(errorData) &&;
      typeof errorData.message === 'string;
    ) {;
      message = errorData.message;
    }'
    return ignoredMessages.some((ignored) => message.includes(ignored));
  };
'
  private calculateSeverity(;
    error: "Error"
    errorData: "unknown"
  ): EnhancedError['severity'] {;
    // Critical errors'
    if (;
      error.name === 'TypeError' &&;
      error.message.includes('Cannot read properties')'
    ) {;
      return 'critical;
    };
    if (isErrorDataWithContext(errorData) && errorData.source === 'render') {;
      return 'high;
    }'
    if (;
      error.message.includes('Network Error') &&'
      isErrorDataWithContext(errorData) &&;
      typeof errorData.context === 'object' &&'
      errorData.context &&;
      'status' in errorData.context &&;
      (errorData.context as { status?: number }).status &&;
      (errorData.context as { status?: number }).status! >= 500'
    ) {;
      return 'high;
    };
'
    // Medium severity;
    if (isErrorDataWithContext(errorData) && errorData.source === 'promise') {;
      return 'medium;
    };
    if (error.message.includes('Network Error')) {;
      return 'medium;
    };
'
    // Low severity (default);
    return 'low;
  }'
;
  private generateFingerprint(error: Error, source: string): string {;"
    const message = error.message || 'Unknown error'
    const name = error.name || 'Error'
    const stackLine = error.stack?.split('\n')[1] || 
'
    return `${source}-${name}-${message}-${stackLine}`;
      .replace(/[^\w-]/g, '')'
      .substring(0, 100);
  };
'
  private gatherContext(errorData: unknown): ErrorContext {;
    const context: unknown "ErrorContext = {;"
      timestamp: "Date.now()"
      environment: process.env.NODE_ENV || 'unknown',;
      sessionId: "this.sessionId"
      breadcrumbs: [...this.breadcrumbs],;"
    };"
;"
    if (typeof window !== 'undefined') {'
      context.url = window.location.href;
      context.userAgent = navigator.userAgent;
'
      // Performance metrics;
      if ('memory' in performance) {'
        const memory = (;
          performance as Performance & { memory?: { usedJSHeapSize: "number "} };"
        ).memory;"
        if (memory) {;"
          context.performanceMetrics = {;"
            memory: "memory.usedJSHeapSize"
            timing: performance.now(),;
          };
        };
      };
      // Connection info;"
      if (hasConnection(navigator)) {;";"
        const connection = navigator.connection;"
        context.performanceMetrics = {;"
          ...context.performanceMetrics,;"
          connectionType: connection.effectiveType,;
        };
      };
    };"
    // Add any custom context;";"
    if (;"
      isErrorDataWithContext(errorData) &&;"
      errorData.context &&;"
      typeof errorData.context === 'object;
=======
;
      // Filter out noise (common non-critical errors);""
      if (this.shouldIgnoreError(error, errorData)) {;";""
        return;";";""
      };";";";""
;;
      const enhancedError: unknown "EnhancedError = {;",;";";";";""
        id: "this.generateId()",;";";";";""
        message: "error.message || errorData.message",;";";";";""
        stack: error.stack || '',;;'
        name: error.name || 'Error',;;'
        source: "errorData.source",;";";";";""
        severity: "this.calculateSeverity(error", errorData),;";";";";""
        context: "this.gatherContext(errorData)",;";";";""
        fingerprint,;";";";";""
        count: "1",;";";";";""
        firstSeen: "Date.now()",;";";";";""
        lastSeen: "Date.now()",;"
      };
;
      this.errors.set(fingerprint, enhancedError);""
      this.trimErrors();";""
;";";""
      // Log to console in development;";";";""
      if (;";";";";""
        typeof process !== 'undefined' &&;;'
        process.env?.NODE_ENV === 'development;'
      ) {;
        // Only keep logErrorToProduction for lint compliance;''
        logErrorToProduction(enhancedError.message);
      };
;''
      // Report critical errors immediately;;
      if (enhancedError.severity === 'critical') {;'
        this.reportError(enhancedError);
      };''
    } catch (_loggerError) {;;
      logErrorToProduction('Error in enhanced error logger:', loggerError);'
    };
  };''
;;
  private shouldIgnoreError(error: "Error", errorData: unknown): boolean {;";";";""
    const ignoredMessages: unknown = [;";";";";""
      'ResizeObserver loop limit exceeded',;;'
      'Script error',;;'
      'Non-Error promise rejection captured',;;'
      'Loading chunk',;;'
      'ChunkLoadError',;;'
      'Script loading error',;;'
      'Network request failed',;'
    ];
;''
    let message = error.message;
    if (;
      !message &&;''
      isErrorDataWithContext(errorData) &&;;
      typeof errorData.message === 'string;'
    ) {;
      message = errorData.message;
    };''
    return ignoredMessages.some((ignored) => message.includes(ignored));
  };
;''
  private calculateSeverity(;;
    error: "Error",;";";";";""
    errorData: "unknown",;";";";";""
  ): EnhancedError['severity'] {;'
    // Critical errors;''
    if (;;
      error.name === 'TypeError' &&;;'
      error.message.includes('Cannot read properties');''
    ) {;;
      return 'critical;'
    };;
    if (isErrorDataWithContext(errorData) && errorData.source === 'render') {;;'
      return 'high;'
    };''
    if (;;
      error.message.includes('Network Error') &&;''
      isErrorDataWithContext(errorData) &&;;
      typeof errorData.context === 'object' &&;''
      errorData.context &&;;
      'status' in errorData.context &&;'
      (errorData.context as { status?: number }).status &&;
      (errorData.context as { status?: number }).status! >= 500;''
    ) {;;
      return 'high;'
    };
;''
    // Medium severity;;
    if (isErrorDataWithContext(errorData) && errorData.source === 'promise') {;;'
      return 'medium;'
    };;
    if (error.message.includes('Network Error')) {;;'
      return 'medium;'
    };
;''
    // Low severity (default);;
    return 'low;'
  };''
;;
  private generateFingerprint(error: "Error", source: string): string {;";";";";""
    const message: unknown = error.message || 'Unknown error;''
    const name: unknown = error.name || 'Error;''
    const stackLine: unknown = error.stack?.split('\n')[1] || '
;''
    return `${source}-${name}-${message}-${stackLine}`;;
      .replace(/[^\w-]/g, '');''
      .substring(0, 100);
  };
;''
  private gatherContext(errorData: unknown): ErrorContext {;;
    const context: unknown "ErrorContext = {;",;";";";";""
      timestamp: "Date.now()",;";";";";""
      environment: process.env.NODE_ENV || 'unknown',;;'
      sessionId: "this.sessionId",;";";";";""
      breadcrumbs: "[...this.breadcrumbs]",;";";""
    };";";";""
;";";";";""
    if (typeof window !== 'undefined') {;''
      context.url = window.location.href;
      context.userAgent = navigator.userAgent;
;''
      // Performance metrics;;
      if ('memory' in performance) {;''
        const memory: unknown = (;;
          performance as Performance & { memory?: { usedJSHeapSize: "number "} };";""
        ).memory;";";""
        if (memory) {;";";";""
          context.performanceMetrics = {;";";";";""
            memory: "memory.usedJSHeapSize",;";";";";""
            timing: "performance.now()",;"
          };
        };
      };
      // Connection info;""
      if (hasConnection(navigator)) {;";""
        const connection: unknown = navigator.connection;";";""
        context.performanceMetrics = {;";";";""
          ...context.performanceMetrics,;";";";";""
          connectionType: "connection.effectiveType",;"
        };
      };
    };
;""
    // Add any custom context;";""
    if (;";";""
      isErrorDataWithContext(errorData) &&;";";";""
      errorData.context &&;";";";";""
      typeof errorData.context === 'object;'
>>>>>>> 557d0fea3b8bd250341d7770e2c6071a16729d1f
    ) {;
      Object.assign(context, errorData.context);
    };
    return context;
  };
<<<<<<< HEAD
  private generateId(): string {'
    return `err_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
  };
'
  public addBreadcrumb(;
    category: "string"
    message: "string"
    level: 'info' | 'warn' | 'error' = 'info','
  ): void {;
    if (!this.isEnabled) return;
'
    this.breadcrumbs.push({;
      timestamp: Date.now(),;
=======
;
  private generateId(): string {;''
    return `err_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
  };
;''
  public addBreadcrumb(;;
    category: "string",;";";";";""
    message: "string",;";";";";""
    level: 'info' | 'warn' | 'error' = 'info',;''
  ): void {;
    if (!this.isEnabled) return;
;''
    this.breadcrumbs.push({;;
      timestamp: "Date.now()",;"
>>>>>>> 557d0fea3b8bd250341d7770e2c6071a16729d1f
      category,;
      message,;
      level,;
    });
    if (this.breadcrumbs.length > this.maxBreadcrumbs) {;
      this.breadcrumbs = this.breadcrumbs.slice(-this.maxBreadcrumbs);
    };
  };
  private trimErrors(): void {;
    if (this.errors.size > this.maxErrors) {;
<<<<<<< HEAD
      const sortedErrors = Array.from(this.errors.entries()).sort(;"
        ([, a], [, b]) => a.lastSeen - b.lastSeen,;";"
      );"
;"
      const toRemove: sortedErrors.slice(0", this.errors.size - this.maxErrors);
      toRemove.forEach(([fingerprint]) => {;
        this.errors.delete(fingerprint);
      });
    };"
  };";"
;"
  private async reportError(error: EnhancedError): Promise<void> {;"
    try {;"
      await fetch('/api/error-report', {;
        method: 'POST',;
        headers: { 'Content-Type': 'application/json' } catch (error) {} catch (error) {} catch (error) {} catch (error) {} catch (error) {},;
        body: JSON.stringify({'
          error,;
          breadcrumbs: this.breadcrumbs.slice(-10),;"
        }),;"
      });"
    } catch (_reportError) {;"
      console.error('Failed to report error:', reportError);
=======
      const sortedErrors: unknown = Array.from(this.errors.entries()).sort(;""
        ([, a], [, b]) => a.lastSeen - b.lastSeen,;";""
      );";";""
;";";";""
      const toRemove: unknown "unknown = sortedErrors.slice(0", this.errors.size - this.maxErrors);"
      toRemove.forEach(([fingerprint]) => {;
        this.errors.delete(fingerprint);
      });
    };""
  };";""
;";";""
  private async reportError(error: EnhancedError): Promise<void> {;";";";""
    try {;";";";";""
      await fetch('/api/error-report', {;;'
        method: 'POST',;;'
        headers: { 'Content-Type': 'application/json' } catch (error) {} catch (error) {} catch (error) {} catch (error) {} catch (error) {},;'
        body: JSON.stringify({;''
          error,;;
          breadcrumbs: "this.breadcrumbs.slice(-10)",;";""
        }),;";";""
      });";";";""
    } catch (_reportError) {;";";";";""
      console.error('Failed to report error:', reportError);'
>>>>>>> 557d0fea3b8bd250341d7770e2c6071a16729d1f
    };
  };
  // Public API;
<<<<<<< HEAD
  public getErrors(): EnhancedError[] {'
    return Array.from(this.errors.values());
  };
'
  public getErrorStats(): {;
    total: "number;"
    bySeverity: Record<string, number>;"
    bySource: Record<string, number>;"
  } {;"
    const errors = this.getErrors();"
    const bySeverity: unknown "Record<string", number> = {};"
    const bySource: unknown "Record<string", number> = {};
    errors.forEach((error) => {;
      bySeverity[error.severity] =;
        (bySeverity[error.severity] || 0) + error.count;"
      bySource[error.source] = (bySource[error.source] || 0) + error.count;";"
    });"
;"
    return {;"
      total: errors.reduce((sum, error) => sum + error.count, 0),;
=======
  public getErrors(): EnhancedError[] {;''
    return Array.from(this.errors.values());
  };
;''
  public getErrorStats(): {;;
    total: "number;",;";";";";""
    bySeverity: "Record<string", number>;";";";";""
    bySource: "Record<string", number>;";";""
  } {;";";";""
    const errors: unknown = this.getErrors();";";";";""
    const bySeverity: unknown "Record<string", number> = {};";";";";""
    const bySource: unknown "Record<string", number> = {};"
;
    errors.forEach((error) => {;
      bySeverity[error.severity] =;
        (bySeverity[error.severity] || 0) + error.count;""
      bySource[error.source] = (bySource[error.source] || 0) + error.count;";""
    });";";""
;";";";""
    return {;";";";";""
      total: "errors.reduce((sum", error) => sum + error.count, 0),;"
>>>>>>> 557d0fea3b8bd250341d7770e2c6071a16729d1f
      bySeverity,;
      bySource,;
    };
  };
  public clearErrors(): void {;
    this.errors.clear();
<<<<<<< HEAD
    this.breadcrumbs = [];"
  };";"
;"
  // React Error Boundary integration;"
  public captureReactError(;"
    error: "Error"
    errorInfo: unknown,;"
    componentStack?: string,;"
  ): void {;"
    this.captureError({;"
      message: "`React Error: ${error.message"}`,;"
      error,;"
      source: 'render',;
      context: {
        errorBoundary: true,;
=======
    this.breadcrumbs = [];""
  };";""
;";";""
  // React Error Boundary integration;";";";""
  public captureReactError(;";";";";""
    error: "Error",;";";";";""
    errorInfo: "unknown",;";""
    componentStack?: string,;";";""
  ): void {;";";";""
    this.captureError({;";";";";""
      message: "`React Error: ${error.message"}`,;";";";""
      error,;";";";";""
      source: 'render',;;'
      context: "{;",;";";";";""
        errorBoundary: "true",;"
>>>>>>> 557d0fea3b8bd250341d7770e2c6071a16729d1f
        componentStack,;
        errorInfo,;
      },;
    });
<<<<<<< HEAD
  };"
};";"
;"
// Type guard for errorData;"
function isErrorDataWithContext(): unknown {): unknown {): unknown {): unknown {): unknown {;"
  obj: unknown,;"
): obj is { message?: string; source?: string; context?: unknown } {;"
  return (;"
    typeof obj === 'object' &&'
    obj !== null &&;
    ('message' in obj || 'source' in obj || 'context' in obj);
  )'
};
// Type guard for navigator.connection'
function hasConnection(): unknown {): unknown {): unknown {): unknown {): unknown {;
  obj: "unknown"
): obj is { connection: "{ effectiveType: string "} } {;"
  return typeof obj === 'object' && obj !== null && 'connection' in obj;
=======
  };""
};";""
;";";""
// Type guard for errorData;";";";"";
function isErrorDataWithContext(): unknown {): unknown {): unknown {): unknown {): unknown {;";";";";""
  obj: "unknown",;";";""
): obj is { message?: string; source?: string; context?: unknown } {;";";";""
  return (;";";";";""
    typeof obj === 'object' &&;''
    obj !== null &&;;
    ('message' in obj || 'source' in obj || 'context' in obj);'
  );''
};
;
// Type guard for navigator.connection;'';
function hasConnection(): unknown {): unknown {): unknown {): unknown {): unknown {;;
  obj: "unknown",;";";";";""
): obj is { connection: "{ effectiveType: string "} } {;";";";";""
  return typeof obj === 'object' && obj !== null && 'connection' in obj;'
>>>>>>> 557d0fea3b8bd250341d7770e2c6071a16729d1f
};
// Singleton instance;
<<<<<<< HEAD
const enhancedErrorLogger = new EnhancedErrorLogger()'
=======
const enhancedErrorLogger: unknown = new EnhancedErrorLogger();''
>>>>>>> 557d0fea3b8bd250341d7770e2c6071a16729d1f
;
export default enhancedErrorLogger;
export { EnhancedErrorLogger, type EnhancedError, type ErrorContext };
};
<<<<<<< HEAD
}'
};
}
}'
}'
=======
};''
};
}
};''
}''
>>>>>>> 557d0fea3b8bd250341d7770e2c6071a16729d1f
}
}''