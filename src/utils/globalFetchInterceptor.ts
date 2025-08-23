import { toast } from '@/hooks/use-toast';
import {logErrorToProduction} from '@/utils/productionLogger';
import { isPublicRoute } from '../config/publicRoutes';
import { logDebug } from '@/utils/productionLogger';


if (typeof window !== "undefined" && window.fetch) {
  const originalFetch = window.fetch.bind(window);
  let lastMessage = '';
  let lastTime = 0;

  // URLs that should not trigger user-facing error toasts (background/polling requests)
  const SILENT_ERROR_PATTERNS = [
    '/_next/',
    '/api/auth/session',
    '/api/health',
    '/api/status',
    '/api/heartbeat',
    '/api/ping',
    '/analytics',
    '/metrics',
    '/telemetry',
    'supabase.co', // Supabase internal calls
    'googleapis.com', // Google API calls
    'github.com/api', // GitHub API calls
  ];

  // Check if URL should fail silently
  const shouldFailSilently = (url: string): boolean => {
    return SILENT_ERROR_PATTERNS.some(pattern => url.includes(pattern));
  };

  // Check if error should be shown to user
  const shouldShowErrorToUser = (status: number, url: string): boolean => {
    // Never show errors for silent URLs
    if (shouldFailSilently(url)) {
      return false;
    }

    // If it's an auth error (401/403) and the user is on a public page, don't show the toast.
    if (
      (status === 401 || status === 403) &&
      typeof window !== 'undefined' && isPublicRoute(window.location.pathname)
    ) {
      logErrorToProduction(`GlobalFetchInterceptor: Auth error ${status} for API ${url} on public page ${window.location.pathname} suppressed.`, undefined, {
        context: 'globalFetchInterceptorPublicPageContext',
        status,
        apiUrl: url,
        pageUrl: window.location.pathname,
      });
      return false; // Suppress toast
    }

    // Original logic for showing user-facing errors for specific status codes,
    // now only applies if not an auth error on a public page.
    switch (status) {
      case 401: // Unauthorized - for auth-related API endpoints (and not on a public page)
        return url.includes('/api/auth/') || url.includes('/login') || url.includes('/signup');
      case 403: // Forbidden - for API actions (and not on a public page)
        return url.includes('/api/');
      case 404: // Not found - for main resource API requests
        return url.includes('/api/user/') || url.includes('/api/profile/') || !url.includes('/api/'); // Show for non-API or specific API resource not found
      case 422: // Validation errors - for API actions
        return url.includes('/api/');
      case 429: // Rate limiting - show to user for any API
        return url.includes('/api/');
      case 500: // Server errors - for API actions
      case 502:
      case 503:
      case 504:
        return url.includes('/api/');
      default:
        return false; // Do not show toast for other statuses or non-API URLs unless specified
    }
  };

  window.fetch = async (...args: Parameters<typeof fetch>): Promise<Response> => {
    try {
      const response = await originalFetch(...args);
      
      if (!response.ok) {
        const url = typeof args[0] === 'string'
          ? args[0]
          : (args[0] instanceof URL ? args[0].href : args[0].url);

        // Skip Next.js internal requests
        if (url.includes('/_next/')) {
          return response;
        }

        // Check if we should show this error to the user
        // This check now incorporates isPublicRoute for 401/403 cases
        if (!shouldShowErrorToUser(response.status, url)) {
          // Log the error but don't show toast if shouldShowErrorToUser is false
          // (which could be due to it being a silent URL or a public auth error)
          if (!shouldFailSilently(url) && !((response.status === 401 || response.status === 403) && isPublicRoute(url))) {
            // Log only if not already logged by the isPublicRoute check inside shouldShowErrorToUser
            logDebug(`GlobalFetchInterceptor: Error not shown to user (${response.status}): ${url}`);
          }
          return response;
        }

        // If shouldShowErrorToUser is true, proceed to notify.
        const statusTitle = (status: number): string => {
          switch (status) {
            case 401:
              return 'Unauthorized';
            case 403:
              return 'Forbidden';
            case 404:
              return 'Not Found';
            case 422:
              return 'Validation Error';
            case 429:
              return 'Too Many Requests';
            case 500:
            case 502:
            case 503:
            case 504:
              return 'Server Error';
            default:
              return 'Request Failed';
          }
        };

        const notify = (msg: string, status?: number) => {
          const now = Date.now();
          if (msg !== lastMessage || now - lastTime > 5000) {
            toast({
              title: status !== undefined ? statusTitle(status) : "Request Failed",
              description: msg,
              variant: "destructive",
            });
            lastMessage = msg;
            lastTime = now;
          }
        };

        // Handle specific error cases with user-friendly messages
        if (response.status === 401 && url.includes('/api/auth/session')) {
          notify('Your session has expired. Please log in again.', response.status);
        } else if (response.status === 429) {
          notify('Too many requests. Please wait a moment before trying again.', response.status);
        } else if (response.status === 403) {
          notify('Access denied. You may not have permission for this action.', response.status);
        } else if (response.status >= 500) {
          notify('Server error. Please try again in a moment.', response.status);
        } else {
          // Try to get a more specific error message from the response
          try {
            const data = await response.clone().json();
            if (data) {
              const code = data.code || data.error;
              const message = data.message || data.error;
              if (message) {
                notify(code ? `${code}: ${message}` : String(message), response.status);
              } else {
                notify('Request failed. Please try again.', response.status);
              }
            } else {
              notify('Request failed. Please try again.', response.status);
            }
          } catch {
            notify('Request failed. Please try again.', response.status);
          }
        }
      }
      return response;
    } catch (err: any) {
      // Only show network errors for user-initiated requests
      const url = typeof args[0] === 'string' ? args[0] : '';
      
      if (!shouldFailSilently(url)) {
        const data = err?.response?.data;
        const code = data?.code || data?.error;
        const message = data?.message || data?.error || 'Network error – please retry';
        const text = code ? `${code}: ${message}` : message;
        if (text !== lastMessage || Date.now() - lastTime > 5000) {
          toast({
            title: "Network Error",
            description: text,
            variant: "destructive",
          });
          lastMessage = text;
          lastTime = Date.now();
        }
      }
      
      logErrorToProduction(err instanceof Error ? err.message : String(err), err instanceof Error ? err : undefined, { context: 'globalFetchInterceptor', url });
      throw err;
    }
  };
}

