import { enhancedGlobalErrorHandler } from './globalToastManager';
import { apiErrorHandler, consoleErrorHandler, fetchErrorHandler } from './enhancedErrorHandlers';
import { logInfo, logErrorToProduction } from '@/utils/productionLogger';


/**
 * Initialize global error handlers with enhanced toast management
 */
export function initializeGlobalErrorHandlers(): void {
  // Console error handler is automatically initialized when the module loads
  // Fetch error handler is automatically initialized when the module loads
  // API error handler is a singleton that can be used throughout the app

  // Set up global unhandled error handlers
  if (typeof window !== 'undefined') {
    // Handle unhandled promise rejections
    window.addEventListener('unhandledrejection', (event) => {
      logErrorToProduction('Unhandled promise rejection:', { data: event.reason });
      
      // Only show toast for user-facing errors
      if (event.reason && !shouldIgnoreError(event.reason)) {
        enhancedGlobalErrorHandler.reportError(
          event.reason instanceof Error ? event.reason : new Error(String(event.reason)),
          {
            showToast: true,
            metadata: { context: 'unhandledPromiseRejection' }
          }
        );
      }
    });

    // Handle global errors
    window.addEventListener('error', (event) => {
      logErrorToProduction('Global error:', { data: event.error });
      
      // Only show toast for critical errors
      if (event.error && !shouldIgnoreError(event.error)) {
        enhancedGlobalErrorHandler.reportError(event.error, {
          showToast: true,
          metadata: { 
            context: 'globalError',
            filename: event.filename,
            lineno: event.lineno,
            colno: event.colno
          }
        });
      }
    });
  }

  logInfo('Enhanced global error handlers initialized');
}

/**
 * Determine if an error should be ignored (not shown to user)
 */
function shouldIgnoreError(error: any): boolean {
  const message = error?.message || String(error);
  
  const ignorePatterns = [
    'Script error',
    'Network request failed',
    'Loading chunk',
    'ChunkLoadError',
    'ResizeObserver loop limit exceeded',
    'Non-Error promise rejection captured',
    '_next',
    'webpack',
    'HMR'
  ];

  return ignorePatterns.some(pattern => 
    message.toLowerCase().includes(pattern.toLowerCase())
  );
}

/**
 * Clean up global error handlers
 */
export function cleanupGlobalErrorHandlers(): void {
  consoleErrorHandler.restoreConsoleError();
  fetchErrorHandler.restoreFetch();
  logInfo('Global error handlers cleaned up');
}
