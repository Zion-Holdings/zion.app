// src/utils/consoleErrorToast.ts
import { toast } from '@/hooks/use-toast';
import {logErrorToProduction} from '@/utils/productionLogger';

const originalConsoleError = console.error;

// Add recursion prevention
let isProcessingError = false;

console.error = (...args: any[]) => {
  // Prevent infinite recursion
  if (isProcessingError) {
    originalConsoleError(...args);
    return;
  }
  
  isProcessingError = true;
  
  try {
    const first = args[0];
    const message = first instanceof Error ? first.message : String(first);

    // Patterns that should not trigger user-facing toasts
    const SILENT_ERROR_PATTERNS = [
      'Warning:', // React warnings
      'Failed to fetch', // Network errors already handled elsewhere
      'Non-Error promise rejection captured', // Promise rejections
      'ResizeObserver loop limit exceeded', // Benign browser warnings
      'Script error', // Cross-origin script errors
      'Network request failed', // Network errors
      'AuthProvider DEBUG', // Debug messages
      'LOGIN TRACE', // Debug messages  
      'Background request failed', // Background API failures
      'getUser()', // Supabase auth debug
      'Session expired', // Already handled by auth
      'chunk-', // Webpack chunk loading errors
      'Loading chunk', // Webpack errors
      'Abort fetching component for route', // Next.js navigation aborted
      '_next', // Next.js internal errors
      'hydration', // React hydration warnings
      'act()', // React testing warnings
    ];

    // Check if this error should be shown to user
    const shouldShowErrorToUser = (message: string): boolean => {
      // Don't show toasts for known background/debug errors
      if (SILENT_ERROR_PATTERNS.some(pattern => 
        message.toLowerCase().includes(pattern.toLowerCase()))) {
        return false;
      }

      // Don't show toasts for HTTP status errors (handled elsewhere)
      if (/error\s+\d{3}/i.test(message)) {
        return false;
      }

      // Don't show toasts for React development warnings
      if (process.env.NODE_ENV === 'development' && 
          (message.includes('Warning:') || message.includes('React'))) {
        return false;
      }

      // Only show critical user-facing errors
      return message.includes('Uncaught') || 
             message.includes('TypeError') ||
             message.includes('ReferenceError') ||
             message.includes('critical') ||
             message.includes('failed to load') ||
             message.includes('initialization');
    };

    let traceId: string | undefined;
    try {
      logErrorToProduction(first instanceof Error ? first.message : message, first instanceof Error ? first : undefined);
    } catch (sentryError) {
      originalConsoleError('Error reporting to logger in console.error override:', sentryError);
    }

    // Only show toast for critical user-facing errors
    if (shouldShowErrorToUser(message)) {
      try {
        toast({
          title: "Unexpected Error",
          description: "Something went wrong. Please refresh the page if the issue persists.",
          variant: "destructive",
        });
      } catch (snackbarError) {
        originalConsoleError('Error showing toast in console.error override:', snackbarError);
      }
    }

  } catch (overallError) {
    // Fallback if determining message or other initial logic failed.
    originalConsoleError('Critical error in console.error override:', overallError);
  } finally {
    // Reset recursion flag
    isProcessingError = false;
  }

  // Call the original console.error in all cases to maintain original behavior
  originalConsoleError(...args);
};
