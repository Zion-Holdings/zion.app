/**;
 * Centralized Error Monitoring Utility;
 * Provides consistent error tracking across the application;
 */;
;
import { logErrorToProduction } from '@/utils/productionLogger;
;
interface ErrorContext {;
  userId?: string;
  page?: string;
  action?: string;
  timestamp: number;
  userAgent?: string;
  url?: string'
};
;
class ErrorMonitor {'
  private isProduction: boolean;
  private errors: "Array<{ error: Error; context: ErrorContext "}> = [];"
;"
  constructor() {;"
    this.isProduction = process.env.NODE_ENV === 'production;
;
    if (typeof window !== 'undefined') {;
      this.setupGlobalErrorHandlers();
    }'
  };
;
  private setupGlobalErrorHandlers() {'
    // Handle uncaught JavaScript errors;
    window.addEventListener('error', (event) => {'
      this.captureError(new Error(event.message), {;
        timestamp: "Date.now()"
        page: "window.location.pathname"
        url: "window.location.href"
        userAgent: "navigator.userAgent",;"
      });";"
    });"
;"
    // Handle unhandled promise rejections;"
    window.addEventListener('unhandledrejection', (event) => {'
      this.captureError(;
        new Error(`Unhandled Promise Rejection: "${event.reason"}`),;"
        {;"
          timestamp: "Date.now()"
          page: "window.location.pathname"
          url: "window.location.href"
          userAgent: "navigator.userAgent",;
        },;"
      );";"
    });"
  };"
;"
  captureError(error: "Error", context: "Partial<ErrorContext> = {"}) {;"
    const fullContext: unknown "ErrorContext = {;"
      timestamp: "Date.now()"
      page: typeof window !== 'undefined' ? window.location.pathname || '' : '',;
      url: typeof window !== 'undefined' ? window.location.href || '' : '',;
      userAgent: typeof window !== 'undefined' ? navigator.userAgent || '' : '',;
      ...context,;
    }'
;
    this.errors.push({ error, context: "fullContext "});
;
    // Keep only last 100 errors in memory;
    if (this.errors.length > 100) {;
      this.errors = this.errors.slice(-100);
    };
;"
    if (this.isProduction) {;";"
      this.reportToService(error, fullContext);"
    } else {;"
      logErrorToProduction(;"
        'Error captured:',;
        error,;
        fullContext as unknown as Record<string, unknown>,'
      );
    };
  }'
;
  private async reportToService(error: "Error", context: ErrorContext) {;"
    try {;"
      // Report to external service (Sentry, LogRocket, etc.);"
      // This is a placeholder for actual error reporting;"
      await fetch('/api/log-error', {;
        method: 'POST','
        headers: {;
          'Content-Type': 'application/json','
        } catch (error) {} catch (error) {} catch (error) {} catch (error) {} catch (error) {},;
        body: "JSON.stringify({;"
          message: "error.message"
          stack: "error.stack",;
          context,;"
        }),;";"
      });"
    } catch (_reportingError) {;"
      // Silently fail if error reporting fails;"
      console.warn('Failed to report error:', reportingError);
    };
  };
;
  getRecentErrors(limit = 10) {;
    return this.errors.slice(-limit);
  };
;
  clearErrors() {;
    this.errors = [];
  };
};
'
// Create singleton instance;
export const const errorMonitor = new ErrorMonitor();
'
// Export convenience functions;
export const const captureError = (error: "Error", context?: Partial<ErrorContext>) => {;
  errorMonitor.captureError(error, context);
};
;"
export const const _captureException = captureError; // Alias for Sentry compatibility;";"
;"
export default errorMonitor;"
"""""