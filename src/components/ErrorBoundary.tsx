import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

interface ErrorBoundaryProps {
  children: React.ReactNode;
  fallback?: React.ReactNode;
}

interface ErrorState {
  hasError: boolean;
  error: Error | null;
  errorInfo: any;
  errorId: string;
}

// Extend the Window interface to include gtag
declare global {
  interface Window {
    gtag?: (command: string, action: string, params: any) => void;
  }
}

export function ErrorBoundary({ children, fallback }: ErrorBoundaryProps) {
  const [errorState, setErrorState] = useState<ErrorState>({
    hasError: false,
    error: null,
    errorInfo: null,
    errorId: '',
  });

  useEffect(() => {
    const handleError = (event: ErrorEvent) => {
      const errorId = `error_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
      
      setErrorState({
        hasError: true,
        error: event.error || new Error(event.message),
        errorInfo: { componentStack: event.filename },
        errorId,
      });

      // Log error to console
      console.error('Error caught by boundary:', event.error, event);

      // Log to analytics if available
      if (window.gtag) {
        window.gtag('event', 'exception', {
          description: event.message,
          fatal: true,
          error_id: errorId,
        });
      }
    };

    const handleUnhandledRejection = (event: PromiseRejectionEvent) => {
      const errorId = `error_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
      
      setErrorState({
        hasError: true,
        error: event.reason instanceof Error ? event.reason : new Error(String(event.reason)),
        errorInfo: { componentStack: 'Unhandled Promise Rejection' },
        errorId,
      });
    };

    window.addEventListener('error', handleError);
    window.addEventListener('unhandledrejection', handleUnhandledRejection);

    return () => {
      window.removeEventListener('error', handleError);
      window.removeEventListener('unhandledrejection', handleUnhandledRejection);
    };
  }, []);

  const handleRetry = () => {
    setErrorState({
      hasError: false,
      error: null,
      errorInfo: null,
      errorId: '',
    });
  };

  const handleGoHome = () => {
    window.location.href = '/';
  };

  const handleReportBug = () => {
    const errorDetails = {
      message: errorState.error?.message,
      stack: errorState.error?.stack,
      componentStack: errorState.errorInfo?.componentStack,
      errorId: errorState.errorId,
      url: window.location.href,
      userAgent: navigator.userAgent,
      timestamp: new Date().toISOString(),
    };

    // Copy error details to clipboard
    navigator.clipboard.writeText(JSON.stringify(errorDetails, null, 2))
      .then(() => {
        alert('Error details copied to clipboard. Please report this to support.');
      })
      .catch(() => {
        // Fallback: open email with error details
        const subject = encodeURIComponent(`Bug Report - Error ID: ${errorState.errorId}`);
        const body = encodeURIComponent(JSON.stringify(errorDetails, null, 2));
        window.open(`mailto:support@ziontechgroup.com?subject=${subject}&body=${body}`);
      });
  };

  if (errorState.hasError) {
    if (fallback) {
      return <>{fallback}</>;
    }

    return (
      <div className="min-h-screen bg-background flex items-center justify-center p-4">
        <Card className="w-full max-w-md border-red-500/20 bg-background/95 backdrop-blur-sm">
          <CardHeader className="text-center pb-4">
            <div className="mx-auto w-16 h-16 bg-red-500/10 rounded-full flex items-center justify-center mb-4">
              <span className="text-red-500 text-2xl">⚠️</span>
            </div>
            <CardTitle className="text-xl text-red-500">Something went wrong</CardTitle>
            <CardDescription className="text-muted-foreground">
              We've encountered an unexpected error. Our team has been notified.
            </CardDescription>
          </CardHeader>
          
          <CardContent className="space-y-4">
            <div className="bg-muted/50 rounded-lg p-3">
              <p className="text-sm text-muted-foreground font-mono break-all">
                Error ID: {errorState.errorId}
              </p>
              {errorState.error && (
                <p className="text-sm text-muted-foreground mt-2">
                  {errorState.error.message}
                </p>
              )}
            </div>
            
            <div className="flex flex-col gap-2">
              <Button onClick={handleRetry} className="w-full">
                <span className="mr-2">🔄</span>
                Try Again
              </Button>
              
              <Button variant="outline" onClick={handleGoHome} className="w-full">
                <span className="mr-2">🏠</span>
                Go Home
              </Button>
              
              <Button variant="outline" onClick={handleReportBug} className="w-full">
                <span className="mr-2">🐛</span>
                Report Bug
              </Button>
            </div>
            
            <div className="text-center">
              <p className="text-xs text-muted-foreground">
                If this problem persists, please contact support
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    );
  }

  return <>{children}</>;
}

// Hook for functional components to handle errors
export function useErrorHandler() {
  const [error, setError] = useState<Error | null>(null);

  const handleError = React.useCallback((error: Error) => {
    setError(error);
    console.error('Error caught by hook:', error);
  }, []);

  const clearError = React.useCallback(() => {
    setError(null);
  }, []);

  return { error, handleError, clearError };
}