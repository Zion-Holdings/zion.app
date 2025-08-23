/**
 * Centralized Error Monitoring Utility
 * Provides consistent error tracking across the application
 */

interface ErrorContext {
  userId?: string;
  page?: string;
  action?: string;
  timestamp: number;
  userAgent?: string;
  url?: string;
}

class ErrorMonitor {
  private isProduction: boolean;
  private errors: Array<{ error: Error; context: ErrorContext }> = [];

  constructor() {
    this.isProduction = process.env.NODE_ENV === 'production';
    
    if (typeof window !== 'undefined') {
      this.setupGlobalErrorHandlers();
    }
  }

  private setupGlobalErrorHandlers() {
    // Handle uncaught JavaScript errors
    window.addEventListener('error', (event) => {
      this.captureError(new Error(event.message), {
        timestamp: Date.now(),
        page: window.location.pathname,
        url: window.location.href,
        userAgent: navigator.userAgent,
      });
    });

    // Handle unhandled promise rejections
    window.addEventListener('unhandledrejection', (event) => {
      this.captureError(
        new Error(`Unhandled Promise Rejection: ${event.reason}`),
        {
          timestamp: Date.now(),
          page: window.location.pathname,
          url: window.location.href,
          userAgent: navigator.userAgent,
        }
      );
    });
  }

  captureError(error: Error, context: Partial<ErrorContext> = {}) {
    const fullContext: ErrorContext = {
      timestamp: Date.now(),
      page: typeof window !== 'undefined' ? window.location.pathname : undefined,
      url: typeof window !== 'undefined' ? window.location.href : undefined,
      userAgent: typeof window !== 'undefined' ? navigator.userAgent : undefined,
      ...context,
    };

    this.errors.push({ error, context: fullContext });

    // Keep only last 100 errors in memory
    if (this.errors.length > 100) {
      this.errors = this.errors.slice(-100);
    }

    if (this.isProduction) {
      this.reportToService(error, fullContext);
    } else {
      console.error('Error captured:', error, fullContext);
    }
  }

  private async reportToService(error: Error, context: ErrorContext) {
    try {
      // Report to external service (Sentry, LogRocket, etc.)
      // This is a placeholder for actual error reporting
      await fetch('/api/log-error', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          message: error.message,
          stack: error.stack,
          context,
        }),
      });
    } catch (reportingError) {
      // Silently fail if error reporting fails
      console.warn('Failed to report error:', reportingError);
    }
  }

  getRecentErrors(limit = 10) {
    return this.errors.slice(-limit);
  }

  clearErrors() {
    this.errors = [];
  }
}

// Create singleton instance
export const errorMonitor = new ErrorMonitor();

// Export convenience functions
export const captureError = (error: Error, context?: Partial<ErrorContext>) => {
  errorMonitor.captureError(error, context);
};

export const captureException = captureError; // Alias for Sentry compatibility

export default errorMonitor;