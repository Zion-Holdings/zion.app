import React, { useState, useEffect, ReactNode } from 'react';
import { Button } from './button';
import { AlertTriangle, RefreshCw, Home } from 'lucide-react';

interface ErrorBoundaryProps {
  children: ReactNode;
  fallback?: ReactNode;
}

interface ErrorState {
  hasError: boolean;
  error?: Error;
}

export function ErrorBoundary({ children, fallback }: ErrorBoundaryProps) {
  const [errorState, setErrorState] = useState<ErrorState>({ hasError: false });

  useEffect(() => {
    const handleError = (error: ErrorEvent) => {
      console.error('ErrorBoundary caught an error:', error);
      setErrorState({
        hasError: true,
        error: error.error
      });
    };

    const handleUnhandledRejection = (event: PromiseRejectionEvent) => {
      console.error('ErrorBoundary caught an unhandled rejection:', event);
      setErrorState({
        hasError: true,
        error: new Error(event.reason?.message || 'Unhandled promise rejection')
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
    setErrorState({ hasError: false, error: undefined });
  };

  const handleGoHome = () => {
    window.location.href = '/';
  };

  if (errorState.hasError) {
    if (fallback) {
      return <>{fallback}</>;
    }

    return (
      <div className="min-h-screen bg-zion-blue flex items-center justify-center p-4">
        <div className="max-w-md w-full text-center space-y-6">
          <div className="mx-auto w-16 h-16 bg-red-500/20 rounded-full flex items-center justify-center">
            <AlertTriangle className="w-8 h-8 text-red-400" />
          </div>
          
          <div className="space-y-2">
            <h1 className="text-2xl font-bold text-white">
              Something went wrong
            </h1>
            <p className="text-zion-slate-light">
              We encountered an unexpected error. Please try again or return to the home page.
            </p>
          </div>

          {process.env.NODE_ENV === 'development' && errorState.error && (
            <details className="text-left bg-zion-slate/20 rounded-lg p-4 text-sm">
              <summary className="cursor-pointer text-zion-cyan mb-2">
                Error Details (Development)
              </summary>
              <pre className="text-red-400 text-xs overflow-auto">
                {errorState.error.toString()}
              </pre>
            </details>
          )}

          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Button
              onClick={handleRetry}
              className="bg-zion-purple hover:bg-zion-purple-dark"
            >
              <RefreshCw className="w-4 h-4 mr-2" />
              Try Again
            </Button>
            <Button
              onClick={handleGoHome}
              variant="outline"
              className="border-zion-cyan text-zion-cyan hover:bg-zion-cyan hover:text-zion-blue-dark"
            >
              <Home className="w-4 h-4 mr-2" />
              Go Home
            </Button>
          </div>
        </div>
      </div>
    );
  }

  return <>{children}</>;
}

// Hook for functional components to handle errors
export function useErrorHandler() {
  return (error: Error) => {
    console.error('Error caught by useErrorHandler:', error);
    // You can add error reporting logic here
  };
}