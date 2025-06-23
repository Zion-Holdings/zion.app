import { toast } from '@/hooks/use-toast';
import { logError } from './logError';

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

    // Only show user-facing errors for specific status codes
    switch (status) {
      case 401: // Unauthorized - only for auth-related endpoints
        return url.includes('/api/auth/') || url.includes('/login') || url.includes('/signup');
      case 403: // Forbidden - only for user-initiated actions
        return url.includes('/api/') && (url.includes('POST') || url.includes('PUT') || url.includes('DELETE'));
      case 404: // Not found - only for main resource requests, not background calls
        return !url.includes('/api/') || url.includes('/api/user/') || url.includes('/api/profile/');
      case 422: // Validation errors - show for user forms
        return url.includes('/api/') && (url.includes('POST') || url.includes('PUT'));
      case 429: // Rate limiting - show to user
        return true;
      case 500: // Server errors - only for user-initiated actions
      case 502:
      case 503:
      case 504:
        return url.includes('/api/') && (url.includes('POST') || url.includes('PUT') || url.includes('DELETE'));
      default:
        return false;
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
        if (!shouldShowErrorToUser(response.status, url)) {
          // Log the error but don't show toast
          console.debug(`Background request failed (${response.status}): ${url}`);
          return response;
        }

        const notify = (msg: string) => {
          const now = Date.now();
          if (msg !== lastMessage || now - lastTime > 5000) {
            toast({
              title: "Request Failed",
              description: msg,
              variant: "destructive",
            });
            lastMessage = msg;
            lastTime = now;
          }
        };

        // Handle specific error cases with user-friendly messages
        if (response.status === 401 && url.includes('/api/auth/session')) {
          notify('Your session has expired. Please log in again.');
        } else if (response.status === 429) {
          notify('Too many requests. Please wait a moment before trying again.');
        } else if (response.status === 403) {
          notify('Access denied. You may not have permission for this action.');
        } else if (response.status >= 500) {
          notify('Server error. Please try again in a moment.');
        } else {
          // Try to get a more specific error message from the response
          try {
            const data = await response.clone().json();
            if (data && data.error) {
              notify(String(data.error));
            } else if (data && data.message) {
              notify(String(data.message));
            } else {
              notify('Request failed. Please try again.');
            }
          } catch {
            notify('Request failed. Please try again.');
          }
        }
      }
      return response;
    } catch (err: any) {
      // Only show network errors for user-initiated requests
      const url = typeof args[0] === 'string' ? args[0] : '';
      
      if (!shouldFailSilently(url)) {
        const message = err?.response?.data?.error ?? 'Network error - please check your connection';
        if (message !== lastMessage || Date.now() - lastTime > 5000) {
          toast({
            title: "Network Error",
            description: message,
            variant: "destructive",
          });
          lastMessage = message;
          lastTime = Date.now();
        }
      }
      
      logError(err, { context: 'globalFetchInterceptor', url });
      throw err;
    }
  };
}

