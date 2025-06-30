import { enhancedGlobalErrorHandler, ToastType, ToastPriority } from './globalToastManager';
import {logErrorToProduction} from '@/utils/productionLogger';
import { isPublicRoute } from '../config/publicRoutes';
import { logDebug } from '@/utils/productionLogger';


/**
 * Enhanced API Error Handler
 */
export class EnhancedApiErrorHandler {
  private static instance: EnhancedApiErrorHandler;

  static getInstance(): EnhancedApiErrorHandler {
    if (!EnhancedApiErrorHandler.instance) {
      EnhancedApiErrorHandler.instance = new EnhancedApiErrorHandler();
    }
    return EnhancedApiErrorHandler.instance;
  }

  /**
   * Handle API errors with intelligent toast management
   */
  handleApiError(error: any, options?: {
    retryAction?: () => void;
    showToast?: boolean;
    context?: string;
  }): void {
    const { retryAction, showToast = true, context } = options || {};

    const status = error.response?.status;
    const method = error.config?.method?.toUpperCase() || 'UNKNOWN';
    const url = error.config?.url || '';

    // Skip certain URLs that shouldn't show user-facing errors
    const silentPatterns = [
      '/health', '/status', '/heartbeat', '/ping',
      '/analytics', '/metrics', '/telemetry',
      'supabase.co', 'googleapis.com', 'github.com/api'
    ];

    const shouldFailSilently = silentPatterns.some(pattern => url.includes(pattern));
    if (shouldFailSilently) {
      logDebug('Silent API error (${status} ${method}): ${url}', { data: error.response?.data });
      return;
    }

    // If it's an auth error (401/403) and the user is currently on a public page,
    // log it but don't show a toast.
    if (
      (status === 401 || status === 403) &&
      typeof window !== 'undefined' && isPublicRoute(window.location.pathname)
    ) {
      logErrorToProduction(`Auth error (${status}) for API ${url} on public page ${window.location.pathname} suppressed.`, error instanceof Error ? error : undefined, {
        context: context || 'apiRequestPublicPageContext',
        status,
        method,
        apiUrl: url,
        pageUrl: window.location.pathname,
      });
      // If showToast was explicitly false, we might still want other logic.
      // However, the primary goal is to suppress the user-facing toast.
      // If options.showToast is explicitly false, this won't show a toast anyway.
      // This check ensures that even if showToast was true or undefined, it's suppressed on public pages.
      if (showToast !== false) { // Default is true, so if not explicitly false, we suppress and return.
        return;
      }
    }

    // Determine error type and priority based on status code
    let type: ToastType;
    let priority: ToastPriority;
    let message: string;

    switch (status) {
      case 401:
        type = ToastType.AUTH_ERROR;
        priority = ToastPriority.HIGH;
        message = 'Authentication required - please log in';
        break;
      case 403:
        type = ToastType.AUTH_ERROR;
        priority = ToastPriority.HIGH;
        message = 'Access denied - insufficient permissions';
        break;
      case 404:
        type = ToastType.ERROR;
        priority = ToastPriority.NORMAL;
        message = 'Requested resource not found';
        break;
      case 422:
        type = ToastType.VALIDATION_ERROR;
        priority = ToastPriority.NORMAL;
        message = 'Validation failed - please check your input';
        break;
      case 429:
        type = ToastType.ERROR;
        priority = ToastPriority.HIGH;
        message = 'Too many requests - please wait a moment';
        break;
      case 500:
      case 502:
      case 503:
      case 504:
        type = ToastType.ERROR;
        priority = ToastPriority.HIGH;
        message = 'Server error - please try again later';
        break;
      default:
        if (!navigator.onLine) {
          type = ToastType.NETWORK_ERROR;
          priority = ToastPriority.HIGH;
          message = 'No internet connection - please check your network';
        } else {
          type = ToastType.ERROR;
          priority = ToastPriority.NORMAL;
          message = 'Request failed - please try again';
        }
        break;
    }

    // Try to get more specific error message from response
    try {
      const responseData = error.response?.data;
      if (responseData?.error && typeof responseData.error === 'string') {
        message = responseData.error;
      } else if (responseData?.message && typeof responseData.message === 'string') {
        message = responseData.message;
      }
    } catch (e) {
      // Use default message
    }

    // Report error with enhanced handler
    enhancedGlobalErrorHandler.reportError(error, {
      type,
      priority,
      retryAction,
      showToast,
      metadata: {
        context: context || 'apiRequest',
        status,
        method,
        url,
        timestamp: new Date().toISOString(),
      },
    });
  }

  /**
   * Handle network errors specifically
   */
  handleNetworkError(error: any, options?: {
    retryAction?: () => void;
    context?: string;
  }): void {
    this.handleApiError(error, {
      ...options,
      showToast: true,
    });
  }
}

/**
 * Enhanced Console Error Handler
 */
export class EnhancedConsoleErrorHandler {
  private static instance: EnhancedConsoleErrorHandler;
  private isProcessingError = false;
  private originalConsoleError: typeof console.error;

  constructor() {
    this.originalConsoleError = console.error;
    this.overrideConsoleError();
  }

  static getInstance(): EnhancedConsoleErrorHandler {
    if (!EnhancedConsoleErrorHandler.instance) {
      EnhancedConsoleErrorHandler.instance = new EnhancedConsoleErrorHandler();
    }
    return EnhancedConsoleErrorHandler.instance;
  }

  private overrideConsoleError(): void {
    console.error = (...args: any[]) => {
      // Prevent infinite recursion
      if (this.isProcessingError) {
        this.originalConsoleError(...args);
        return;
      }

      this.isProcessingError = true;

      try {
        const first = args[0];
        const message = first instanceof Error ? first.message : String(first);

        // Patterns that should not trigger user-facing toasts
        const silentPatterns = [
          'Warning:', 'Failed to fetch', 'Non-Error promise rejection captured',
          'ResizeObserver loop limit exceeded', 'Script error', 'Network request failed',
          'AuthProvider DEBUG', 'LOGIN TRACE', 'Background request failed',
          'getUser()', 'Session expired', 'chunk-', 'Loading chunk', '_next',
          'hydration', 'act()', 'HMR', 'webpack'
        ];

        const shouldShowErrorToUser = !silentPatterns.some(pattern =>
          message.toLowerCase().includes(pattern.toLowerCase())
        ) && (
          message.includes('Uncaught') ||
          message.includes('TypeError') ||
          message.includes('ReferenceError') ||
          message.includes('critical') ||
          message.includes('failed to load') ||
          message.includes('initialization')
        );

        // Log error for debugging
        try {
          logErrorToProduction(first instanceof Error ? first.message : message, first instanceof Error ? first : undefined, {
            context: 'consoleError',
            args: args.slice(1),
          });
        } catch (sentryError) {
          this.originalConsoleError('Error reporting to logger:', sentryError);
        }

        // Show toast for critical user-facing errors
        if (shouldShowErrorToUser) {
          enhancedGlobalErrorHandler.reportError(message, {
            type: ToastType.CRITICAL_ERROR,
            priority: ToastPriority.HIGH,
            showToast: true,
            metadata: {
              context: 'consoleError',
              originalArgs: args,
              timestamp: new Date().toISOString(),
            },
          });
        }

        // Always call original console.error
        this.originalConsoleError(...args);

      } catch (overallError) {
        this.originalConsoleError('Critical error in console.error override:', overallError);
      } finally {
        this.isProcessingError = false;
      }
    };
  }

  /**
   * Restore original console.error
   */
  restoreConsoleError(): void {
    console.error = this.originalConsoleError;
  }
}

/**
 * Enhanced Fetch Error Handler
 */
export class EnhancedFetchErrorHandler {
  private static instance: EnhancedFetchErrorHandler;
  private originalFetch: typeof fetch;

  constructor() {
    this.originalFetch = window.fetch?.bind(window);
    this.overrideFetch();
  }

  static getInstance(): EnhancedFetchErrorHandler {
    if (!EnhancedFetchErrorHandler.instance && typeof window !== 'undefined') {
      EnhancedFetchErrorHandler.instance = new EnhancedFetchErrorHandler();
    }
    return EnhancedFetchErrorHandler.instance;
  }

  private overrideFetch(): void {
    if (typeof window === 'undefined' || !this.originalFetch) return;

    window.fetch = async (...args: Parameters<typeof fetch>): Promise<Response> => {
      try {
        const response = await this.originalFetch(...args);

        if (!response.ok) {
          const url = typeof args[0] === 'string' ? args[0] : 
                     (args[0] instanceof URL ? args[0].href : args[0].url);

          // Skip Next.js internal requests
          if (url.includes('/_next/')) {
            return response;
          }

          // Check if we should show this error to the user
          const shouldShowError = this.shouldShowFetchError(response.status, url);

          if (shouldShowError) {
            // Check if the CURRENT PAGE is public before showing auth-related errors for API calls
            if (
              (response.status === 401 || response.status === 403) &&
              typeof window !== 'undefined' && isPublicRoute(window.location.pathname)
            ) {
              // Log the error for debugging but don't show a toast if on a public page
              logErrorToProduction(`Auth error (${response.status}) for API ${url} on public page ${window.location.pathname} suppressed.`, undefined, {
                context: 'fetchRequestPublicPageContext',
                status: response.status,
                apiUrl: url,
                pageUrl: window.location.pathname,
              });
              return response; // Skip toast for auth errors if user is on a public page
            }

            let errorMessage = 'Request failed';

            // Try to get specific error message
            try {
              const data = await response.clone().json();
              if (data?.error) errorMessage = String(data.error);
              else if (data?.message) errorMessage = String(data.message);
            } catch {
              // Use status-based message
              if (response.status === 401) errorMessage = 'Authentication required';
              else if (response.status === 403) errorMessage = 'Access denied';
              else if (response.status === 429) errorMessage = 'Too many requests';
              else if (response.status >= 500) errorMessage = 'Server error';
            }

            enhancedGlobalErrorHandler.reportError(errorMessage, {
              type: this.getToastTypeForStatus(response.status),
              priority: this.getPriorityForStatus(response.status),
              showToast: true,
              metadata: {
                context: 'fetchRequest',
                status: response.status,
                url,
                timestamp: new Date().toISOString(),
              },
            });
          }
        }

        return response;
      } catch (err: any) {
        const url = typeof args[0] === 'string' ? args[0] : '';

        // Only show network errors for user-initiated requests
        if (!this.shouldFailSilently(url)) {
        const message = 'Network error – please retry';
          
          enhancedGlobalErrorHandler.reportError(message, {
            type: ToastType.NETWORK_ERROR,
            priority: ToastPriority.HIGH,
            showToast: true,
            metadata: {
              context: 'fetchNetworkError',
              url,
              originalError: err.message,
              timestamp: new Date().toISOString(),
            },
          });
        }

        logErrorToProduction(err instanceof Error ? err.message : String(err), err instanceof Error ? err : undefined, { context: 'fetchInterceptor', url });
        throw err;
      }
    };
  }

  private shouldShowFetchError(status: number, url: string): boolean {
    // Don't show errors for background/monitoring URLs
    if (this.shouldFailSilently(url)) return false;

    // Show errors for user-facing failures
    return status === 401 || status === 403 || status === 429 || status >= 500;
  }

  private shouldFailSilently(url: string): boolean {
    const silentPatterns = [
      '/_next/', '/api/auth/session', '/api/health', '/api/status',
      '/api/heartbeat', '/api/ping', '/analytics', '/metrics',
      '/telemetry', 'supabase.co', 'googleapis.com', 'github.com/api'
    ];

    return silentPatterns.some(pattern => url.includes(pattern));
  }

  private getToastTypeForStatus(status: number): ToastType {
    if (status === 401 || status === 403) return ToastType.AUTH_ERROR;
    if (status >= 500) return ToastType.ERROR;
    return ToastType.ERROR;
  }

  private getPriorityForStatus(status: number): ToastPriority {
    if (status === 401 || status === 403 || status >= 500) return ToastPriority.HIGH;
    return ToastPriority.NORMAL;
  }

  /**
   * Restore original fetch
   */
  restoreFetch(): void {
    if (this.originalFetch) {
      window.fetch = this.originalFetch;
    }
  }
}

// Initialize error handlers when module loads
if (typeof window !== 'undefined') {
  EnhancedConsoleErrorHandler.getInstance();
  EnhancedFetchErrorHandler.getInstance();
}

// Export singleton instances
export const apiErrorHandler = EnhancedApiErrorHandler.getInstance();
export const consoleErrorHandler = EnhancedConsoleErrorHandler.getInstance();
export const fetchErrorHandler = EnhancedFetchErrorHandler.getInstance(); 