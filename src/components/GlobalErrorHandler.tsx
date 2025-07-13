import React, { createContext, useContext, useState, useCallback } from 'react';
import type { ReactNode } from 'react';
import { toast } from '@/hooks/use-toast';





import {logErrorToProduction} from '@/utils/productionLogger';


interface ErrorContextType {
  reportError: (error: Error, context?: unknown) => void;
  showRetryableError: (error: Error, retryAction?: () => void) => void;
  showNetworkError: (retryAction?: () => void) => void;
  showAuthError: (loginAction?: () => void) => void;
  clearAllErrors: () => void;
}

const ErrorContext = createContext<ErrorContextType | null>(null);

interface GlobalErrorHandlerProps {
  children: ReactNode;
}

export function GlobalErrorHandler({ children }: GlobalErrorHandlerProps) {
  const [retryCount, setRetryCount] = useState<Record<string, number>>({});

  const reportError = useCallback((error: Error, context?: unknown) => {
    // Log to console for development
    if (process.env.NODE_ENV === 'development') {
      logErrorToProduction('Global Error Handler:', error, context);
    }

    // Report to Sentry for production
    if (process.env.NODE_ENV === 'production') {
      if (typeof window === 'undefined') {
        // const Sentry = await import('@sentry/nextjs'); // This line was removed
        // Sentry.captureException(error); // This line was removed
      }
    }
  }, []);

  const showRetryableError = useCallback((error: Error, retryAction?: () => void) => {
    const errorKey = error.message;
    const currentRetryCount = retryCount[errorKey] || 0;

    reportError(error, { retryCount: currentRetryCount });

    // Show user-friendly error message with retry option
    const action = retryAction ? {
      label: "Try Again",
      onClick: () => {
        setRetryCount(prev => ({
          ...prev,
          [errorKey]: currentRetryCount + 1
        }));
        retryAction();
      }
    } : undefined;

    const toastProps = {
      title: "Something went wrong",
      description: getErrorMessage(error),
      variant: "destructive" as const,
      ...(action ? { action } : {}),
    };
    toast(toastProps);
  }, [retryCount, reportError]);

  const showNetworkError = useCallback((retryAction?: () => void) => {
    const action = retryAction ? {
      label: "Try Again",
      onClick: () => {
        retryAction();
      }
    } : undefined;

    const isOnline = typeof navigator !== 'undefined' ? navigator.onLine : true;

    const toastProps = {
      title: isOnline ? "Connection Issue" : "No Internet Connection",
      description: isOnline 
        ? "Unable to connect to our servers. Please check your connection and try again."
        : "You appear to be offline. Please check your internet connection.",
      variant: "destructive" as const,
      ...(action ? { action } : {}),
    };
    toast(toastProps);
  }, []);

  const showAuthError = useCallback((loginAction?: () => void) => {
    const action = loginAction ? {
      label: "Log In",
      onClick: () => {
        loginAction();
      }
    } : undefined;

    const toastProps = {
      title: "Authentication Required",
      description: "Please log in to continue with this action.",
      variant: "destructive" as const,
      ...(action ? { action } : {}),
    };
    toast(toastProps);
  }, []);

  const clearAllErrors = useCallback(() => {
    setRetryCount({});
    // Clear any active toasts would go here if the toast system supports it
  }, []);

  const contextValue: ErrorContextType = {
    reportError,
    showRetryableError,
    showNetworkError,
    showAuthError,
    clearAllErrors,
  };

  return (
    <ErrorContext.Provider value={contextValue}>
      {children}
    </ErrorContext.Provider>
  );
}

export function useGlobalErrorHandler(): ErrorContextType {
  const context = useContext(ErrorContext);
  if (!context) {
    throw new Error('useGlobalErrorHandler must be used within a GlobalErrorHandler');
  }
  return context;
}

// Helper function to convert technical errors to user-friendly messages
function getErrorMessage(error: Error): string {
  const message = error.message.toLowerCase();

  if (message.includes('fetch') || message.includes('network') || message.includes('connection')) {
    return "Unable to connect to our servers. Please check your internet connection.";
  }

  if (message.includes('auth') || message.includes('unauthorized') || message.includes('401')) {
    return "Your session has expired. Please log in again.";
  }

  if (message.includes('forbidden') || message.includes('403')) {
    return "You don't have permission to perform this action.";
  }

  if (message.includes('not found') || message.includes('404')) {
    return "The requested information could not be found.";
  }

  if (message.includes('timeout')) {
    return "Request timed out. Please try again.";
  }

  if (message.includes('validation') || message.includes('invalid')) {
    return "Please check your input and try again.";
  }

  if (message.includes('server') || message.includes('500')) {
    return "Our servers are experiencing issues. Please try again in a moment.";
  }

  // Fallback for unknown errors
  return "An unexpected error occurred. Please try again.";
}

// Utility hook for common error scenarios
export function useErrorHandler() {
  const { reportError, showRetryableError, showNetworkError, showAuthError } = useGlobalErrorHandler();

  const handleApiError = useCallback((error: unknown, retryAction?: () => void) => {
    if ((error as { response?: { status?: number } }).response?.status === 401 || (error as { response?: { status?: number } }).response?.status === 403) {
      showAuthError();
    } else if ((error as { code?: string }).code === 'NETWORK_ERROR' || !navigator.onLine) {
      showNetworkError(retryAction);
    } else {
      showRetryableError(error as Error, retryAction);
    }
  }, [showRetryableError, showNetworkError, showAuthError]);

  const handleAsyncOperation = useCallback(async <T,>(
    operation: () => Promise<T>,
    options?: {
      onError?: (error: Error) => void;
      retryAction?: () => void;
      successMessage?: string;
    }
  ): Promise<T | null> => {
    try {
      const result = await operation();
      
      if (options?.successMessage) {
        toast({
          title: "Success",
          description: options.successMessage,
        });
      }
      
      return result;
    } catch (error: unknown) {
      reportError(error as Error);
      
      if (options?.onError) {
        options.onError(error as Error);
      } else {
        handleApiError(error, options?.retryAction);
      }
      
      return null;
    }
  }, [reportError, handleApiError]);

  return {
    reportError,
    handleApiError,
    handleAsyncOperation,
  };
} 