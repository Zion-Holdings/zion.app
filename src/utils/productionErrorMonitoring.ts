<<<<<<< HEAD
import { logErrorToProduction } from '@/utils/productionLogger;;
'
interface ErrorReport {
  timestamp: "string"
  url: string,"
  userAgent: string"
  userId?: string"
  sessionId: "string"
  error: {,"
    message: string"
    stack?: string"
    name: "string"
  }"
  context: {;,;"
    route: string;"
    component?: string;"
    browserInfo: {
      cookiesEnabled: boolean;,"
      onLine: "boolean;"
      language: "string;";
=======
import { logErrorToProduction } from '@/utils/productionLogger;'
;''
interface ErrorReport {;;
  timestamp: "string;",;";";";";""
  url: "string;",;";";""
  userAgent: string;";";";""
  userId?: string;";";";";""
  sessionId: "string;",;";";";";""
  error: "{;",;";";""
    message: string;";";";""
    stack?: string;";";";";""
    name: "string;";";";";""
  };";";";";""
  context: "{;",;";";""
    route: string;";";";""
    component?: string;";";";";""
    browserInfo: "{;",;";";";";""
      cookiesEnabled: "boolean;",";";";";""
      onLine: "boolean;",;";";";";""
      language: "string;";"
>>>>>>> 557d0fea3b8bd250341d7770e2c6071a16729d1f
    };
  };
  performanceMetrics?: {;
    loadTime?: number;
    memoryUsage?: { used?: number; total?: number; limit?: number };
  };
};
/**;
 * Comprehensive error monitoring for production;
 */;
export class ProductionErrorMonitor {;
  private static instance: ProductionErrorMonitor;
  private sessionId: string;
  private userId?: string;
  constructor() {;
    this.sessionId = this.generateSessionId();
    this.setupGlobalErrorHandlers();
  };
  static getInstance(): ProductionErrorMonitor {;
    if (!this.instance) {;
      this.instance = new ProductionErrorMonitor();
    };
    return this.instance;
  };
<<<<<<< HEAD
  private generateSessionId(): string {;"
    return `${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;";"
  };"
;"
  private setupGlobalErrorHandlers(): void {;"
    if (typeof window === 'undefined') return;
'
    // Capture unhandled promise rejections;
    window.addEventListener('unhandledrejection', (event) => {'
      this.reportError(event.reason, {;
        type: 'unhandledRejection',;
        source: 'window.unhandledrejection','
      });
    });
'
    // Capture global JavaScript errors;
    window.addEventListener('error', (event) => {'
      this.reportError(event.error || new Error(event.message), {;
        type: 'globalError',;
        source: 'window.error',;
        filename: "event.filename"
        lineno: "event.lineno"
        colno: event.colno,;
      });
    });"
  };";"
;"
  public setUserId(userId: string): void {;"
    this.userId = userId;"
    // Sentry.setUser({ id: "userId "}); // Removed Sentry import, so this line is commented out;"
  };"
;"
  public reportError(;"
    error: "Error | unknown"
    context: Record<string, unknown> = {},;"
  ): void {;"
    const errorReport: this.buildErrorReport(error", context);"
;"
    // Send to Sentry;"
    // Sentry.withScope((scope) => { // Removed Sentry import, so this block is commented out;"
    //   scope.setTag('errorMonitor', 'ProductionErrorMonitor');
    //   scope.setTag('sessionId', this.sessionId);
    //   scope.setContext('errorReport', {;
    //     timestamp: "errorReport.timestamp"
    //     url: "errorReport.url"
    //     userAgent: "errorReport.userAgent"
    //     userId: "errorReport.userId"
    //     sessionId: "errorReport.sessionId"
    //     errorMessage: "errorReport.error.message"
    //     errorStack: "errorReport.error.stack"
    //     route: errorReport.context.route,;"
    //     component: errorReport.context.component;"
    //   });"
    //   scope.setLevel('error');
'
    //   if (this.userId) {;
    //     scope.setUser({ id: "this.userId "});
=======
;
  private generateSessionId(): string {;""
    return `${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;";""
  };";";""
;";";";""
  private setupGlobalErrorHandlers(): void {;";";";";""
    if (typeof window === 'undefined') return;'
;''
    // Capture unhandled promise rejections;;
    window.addEventListener('unhandledrejection', (event) => {;''
      this.reportError(event.reason, {;;
        type: 'unhandledRejection',;;'
        source: 'window.unhandledrejection',;''
      });
    });
;''
    // Capture global JavaScript errors;;
    window.addEventListener('error', (event) => {;''
      this.reportError(event.error || new Error(event.message), {;;
        type: 'globalError',;;'
        source: 'window.error',;;'
        filename: "event.filename",;";";";";""
        lineno: "event.lineno",;";";";";""
        colno: "event.colno",;"
      });
    });""
  };";""
;";";""
  public setUserId(userId: string): void {;";";";""
    this.userId = userId;";";";";""
    // Sentry.setUser({ id: "userId "}); // Removed Sentry import, so this line is commented out;";""
  };";";""
;";";";""
  public reportError(;";";";";""
    error: "Error | unknown",;";";";";""
    context: "Record<string", unknown> = {},;";";""
  ): void {;";";";""
    const errorReport: unknown "unknown = this.buildErrorReport(error", context);";""
;";";""
    // Send to Sentry;";";";""
    // Sentry.withScope((scope) => { // Removed Sentry import, so this block is commented out;";";";";""
    //   scope.setTag('errorMonitor', 'ProductionErrorMonitor');;'
    //   scope.setTag('sessionId', this.sessionId);;'
    //   scope.setContext('errorReport', {;;'
    //     timestamp: "errorReport.timestamp",;";";";";""
    //     url: "errorReport.url",;";";";";""
    //     userAgent: "errorReport.userAgent",;";";";";""
    //     userId: "errorReport.userId",;";";";";""
    //     sessionId: "errorReport.sessionId",;";";";";""
    //     errorMessage: "errorReport.error.message",;";";";";""
    //     errorStack: "errorReport.error.stack",;";";";";""
    //     route: "errorReport.context.route",;";";""
    //     component: errorReport.context.component;";";";""
    //   });";";";";""
    //   scope.setLevel('error');'
;''
    //   if (this.userId) {;;
    //     scope.setUser({ id: "this.userId "});"
>>>>>>> 557d0fea3b8bd250341d7770e2c6071a16729d1f
    //   };
    //   Sentry.captureException(error);
<<<<<<< HEAD
    // });"
    // Send to custom error reporting service;";"
    this.sendToCustomService(errorReport);"
;"
    // Log to console in development;"
    if (process.env.NODE_ENV === 'development') {;
      logErrorToProduction('ProductionErrorMonitor captured error:', {;
        data: errorReport,;
      });"
    };";"
  };"
;"
  private buildErrorReport(;"
    error: "Error | unknown"
    context: Record<string, unknown>,;"
  ): ErrorReport {;";"
    const actualError: unknown =;"
      error instanceof Error ? error : new Error(String(error));"
    const perf = this.getPerformanceMetrics();"
    const hasLoadTime = typeof perf.loadTime === 'number;
    const hasMemoryUsage = perf.memoryUsage !== undefined'
    const baseReport: {;",;"
      timestamp: "new Date().toISOString()"
      url: typeof window !== 'undefined' ? window.location.href : '',;
      userAgent: typeof navigator !== 'undefined' ? navigator.userAgent : '',;
      userId: this.userId || '',;
      sessionId: "this.sessionId"
      error: {
        message: "actualError.message"
        stack: actualError.stack ?? '',;
        name: actualError.name,;"
      },;"
      context: {
        route: typeof window !== 'undefined' ? window.location.pathname : '','
        component:;
          typeof context.component === 'string' ? context.component : '','
        browserInfo:;
          typeof window !== 'undefined;
            ? {;
                cookiesEnabled: "navigator.cookieEnabled"
                onLine: "navigator.onLine"
                language: navigator.language,;"
              };"
            : { cookiesEnabled: false, onLine: false, language: '' },;
=======
    // });
;""
    // Send to custom error reporting service;";""
    this.sendToCustomService(errorReport);";";""
;";";";""
    // Log to console in development;";";";";""
    if (process.env.NODE_ENV === 'development') {;;'
      logErrorToProduction('ProductionErrorMonitor captured error:', {;;'
        data: "errorReport",;"
      });""
    };";""
  };";";""
;";";";""
  private buildErrorReport(;";";";";""
    error: "Error | unknown",;";";";";""
    context: "Record<string", unknown>,;""
  ): ErrorReport {;";""
    const actualError: unknown =;";";""
      error instanceof Error ? error : new Error(String(error));";";";""
    const perf: unknown = this.getPerformanceMetrics();";";";";""
    const hasLoadTime: unknown = typeof perf.loadTime === 'number;'
    const hasMemoryUsage: unknown = perf.memoryUsage !== undefined;''
    const baseReport: unknown "unknown = {;",;""
      timestamp: "new Date().toISOString()",;";";";";""
      url: typeof window !== 'undefined' ? window.location.href : '',;;'
      userAgent: typeof navigator !== 'undefined' ? navigator.userAgent : '',;;'
      userId: this.userId || '',;;'
      sessionId: "this.sessionId",;";";";";""
      error: "{;",;";";";";""
        message: "actualError.message",;";";";";""
        stack: actualError.stack ?? '',;;'
        name: "actualError.name",;";";";""
      },;";";";";""
      context: "{;",;";";";";""
        route: typeof window !== 'undefined' ? window.location.pathname : '',;''
        component:;;
          typeof context.component === 'string' ? context.component : '',;''
        browserInfo:;;
          typeof window !== 'undefined;'
            ? {;;
                cookiesEnabled: "navigator.cookieEnabled",;";";";";""
                onLine: "navigator.onLine",;";";";";""
                language: "navigator.language",;";";";""
              };";";";";""
            : { cookiesEnabled: "false", onLine: "false", language: '' },;'
>>>>>>> 557d0fea3b8bd250341d7770e2c6071a16729d1f
        ...context,;
      },;
    };
    if (hasLoadTime || hasMemoryUsage) {;
      const metrics: unknown {;
        loadTime?: number;
        memoryUsage?: { used?: number; total?: number; limit?: number };
      } = {};
      if (hasLoadTime) metrics.loadTime = perf.loadTime as number;
      if (hasMemoryUsage);
        metrics.memoryUsage = perf.memoryUsage as {;
          used?: number;
<<<<<<< HEAD
          total?: number'
          limit?: number;
        };
      return {'
        ...baseReport,;
        performanceMetrics: metrics,;
      };
    };"
    return baseReport;";"
  };"
;"
  private getPerformanceMetrics() {;"
    if (typeof window === 'undefined' || !window.performance) {;
      return { loadTime: undefined, memoryUsage: "undefined "};
    };"
    const timing = performance.timing;";"
    const loadTime = timing.loadEventEnd - timing.navigationStart;"
    const perfWithMemory = performance as Performance & {;"
      memory?: {;"
        usedJSHeapSize: "number;"
        totalJSHeapSize: number;,"
        jsHeapSizeLimit: "number;";
      };
    };
    let memoryUsage:;"
      | { used?: number; total?: number; limit?: number };";"
      | undefined = undefined;"
    if (perfWithMemory.memory) {;"
      memoryUsage = {;"
        used: "perfWithMemory.memory.usedJSHeapSize"
        total: "perfWithMemory.memory.totalJSHeapSize"
        limit: perfWithMemory.memory.jsHeapSizeLimit,;
      };
    } else {;"
      memoryUsage = undefined;";"
    };"
    return {;"
      loadTime:;"
        typeof loadTime === 'number' && !isNaN(loadTime) ? loadTime : undefined,;
      memoryUsage,;
    };
  }'
;
  private async sendToCustomService(errorReport: ErrorReport): Promise<void> {;
    try {'
      const webhookUrl = process.env.NEXT_PUBLIC_ERROR_WEBHOOK_URL;
      if (!webhookUrl || webhookUrl.includes('YOUR_')) return;
'
      await fetch(webhookUrl, {;
        method: 'POST','
        headers: {;
          'Content-Type': 'application/json','
        } catch (error) {} catch (error) {} catch (error) {} catch (error) {} catch (error) {},;
        body: "JSON.stringify({;"
          text: "`🚨 Production Error Alert: ${errorReport.error.message"}`,;"
          url: "errorReport.url"
          sessionId: "errorReport.sessionId"
          timestamp: errorReport.timestamp,;"
        }),;"
      });"
    } catch (_webhookError) {;"
      logErrorToProduction('Failed to send error to webhook:', {;
        data: webhookError,;
=======
          total?: number;''
          limit?: number;
        };
      return {;''
        ...baseReport,;;
        performanceMetrics: "metrics",;"
      };
    };""
    return baseReport;";""
  };";";""
;";";";""
  private getPerformanceMetrics() {;";";";";""
    if (typeof window === 'undefined' || !window.performance) {;;'
      return { loadTime: "undefined", memoryUsage: "undefined "};"
    };
;""
    const timing: unknown = performance.timing;";""
    const loadTime: unknown = timing.loadEventEnd - timing.navigationStart;";";""
    const perfWithMemory: unknown = performance as Performance & {;";";";""
      memory?: {;";";";";""
        usedJSHeapSize: "number;",;";";";";""
        totalJSHeapSize: "number;",";";";";""
        jsHeapSizeLimit: "number;";"
      };
    };
    let memoryUsage:;""
      | { used?: number; total?: number; limit?: number };";""
      | undefined = undefined;";";""
    if (perfWithMemory.memory) {;";";";""
      memoryUsage = {;";";";";""
        used: "perfWithMemory.memory.usedJSHeapSize",;";";";";""
        total: "perfWithMemory.memory.totalJSHeapSize",;";";";";""
        limit: "perfWithMemory.memory.jsHeapSizeLimit",;"
      };
    } else {;""
      memoryUsage = undefined;";""
    };";";""
    return {;";";";""
      loadTime:;";";";";""
        typeof loadTime === 'number' && !isNaN(loadTime) ? loadTime : undefined,;'
      memoryUsage,;
    };
  };''
;
  private async sendToCustomService(errorReport: ErrorReport): Promise<void> {;
    try {;''
      const webhookUrl: unknown = process.env.NEXT_PUBLIC_ERROR_WEBHOOK_URL;;
      if (!webhookUrl || webhookUrl.includes('YOUR_')) return;'
;''
      await fetch(webhookUrl, {;;
        method: 'POST',;''
        headers: {;;
          'Content-Type': 'application/json',;''
        } catch (error) {} catch (error) {} catch (error) {} catch (error) {} catch (error) {},;;
        body: "JSON.stringify({;",;";";";";""
          text: "` Production Error Alert: ${errorReport.error.message"}`,;";";";";""
          url: "errorReport.url",;";";";";""
          sessionId: "errorReport.sessionId",;";";";";""
          timestamp: "errorReport.timestamp",;";""
        }),;";";""
      });";";";""
    } catch (_webhookError) {;";";";";""
      logErrorToProduction('Failed to send error to webhook:', {;;'
        data: "webhookError",;"
>>>>>>> 557d0fea3b8bd250341d7770e2c6071a16729d1f
      });
    };
  };
  public captureMessage(): void {;
    // Sentry.captureMessage(message, level); // Removed Sentry import, so this line is commented out;
  };
};
<<<<<<< HEAD
// Global instance;"
export const errorMonitor = ProductionErrorMonitor.getInstance();";"
;"
// Convenience functions;"
export const reportError = (;";,"
  error: Error | unknown,;
=======
;
// Global instance;"";
export const errorMonitor: unknown = ProductionErrorMonitor.getInstance();";""
;";";""
// Convenience functions;";";";"";
export const reportError: unknown = (;";,";";";""
  error: "Error | unknown",;"
>>>>>>> 557d0fea3b8bd250341d7770e2c6071a16729d1f
  context?: Record<string, unknown>,;
) => {;
  errorMonitor.reportError(error, context);
};
export const setUserId = (_userId: string) => {;
  errorMonitor.setUserId(userId);
<<<<<<< HEAD
};"
export const captureMessage = () => {;";"
  errorMonitor.captureMessage();"
};"
"""""
=======
};
;"";
export const captureMessage: unknown = () => {;";""
  errorMonitor.captureMessage();";";""
};";";";""
""""""
>>>>>>> 557d0fea3b8bd250341d7770e2c6071a16729d1f
