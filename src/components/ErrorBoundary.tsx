import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { AlertTriangle, RefreshCw, Home, ArrowLeft } from 'lucide-react';

interface ErrorBoundaryProps {
  children: React.ReactNode;
  fallback?: React.ReactNode;
  onError?: (error: Error, errorInfo?: any) => void;
}

interface ErrorState {
  hasError: boolean;
  error: Error | null;
  errorInfo: any;
}

export function ErrorBoundary({ children, fallback, onError }: ErrorBoundaryProps) {
  const [errorState, setErrorState] = useState<ErrorState>({
    hasError: false,
    error: null,
    errorInfo: null,
  });

  useEffect(() => {
    const handleError = (error: Error, errorInfo?: any) => {
      setErrorState({
        hasError: true,
        error,
        errorInfo,
      });

      // Log error to console in development
      if (process.env.NODE_ENV === 'development') {
        console.error('ErrorBoundary caught an error:', error, errorInfo);
      }

      // Call custom error handler if provided
      if (onError) {
        onError(error, errorInfo);
      }
    };

    // Global error handler
    const handleGlobalError = (event: ErrorEvent) => {
      handleError(event.error || new Error(event.message), {
        filename: event.filename,
        lineno: event.lineno,
        colno: event.colno,
      });
    };

    // Unhandled promise rejection handler
    const handleUnhandledRejection = (event: PromiseRejectionEvent) => {
      handleError(new Error(event.reason), {
        type: 'unhandledrejection',
        reason: event.reason,
      });
    };

    // Add global error listeners
    window.addEventListener('error', handleGlobalError);
    window.addEventListener('unhandledrejection', handleUnhandledRejection);

    return () => {
      window.removeEventListener('error', handleGlobalError);
      window.removeEventListener('unhandledrejection', handleUnhandledRejection);
    };
  }, [onError]);

  const handleRetry = () => {
    setErrorState({
      hasError: false,
      error: null,
      errorInfo: null,
    });
  };

  const handleGoBack = () => {
    window.history.back();
  };

  if (errorState.hasError) {
    // Custom fallback UI
    if (fallback) {
      return fallback;
    }

    // Default error UI
    return (
      <div className="min-h-screen bg-zion-blue-dark flex items-center justify-center p-4">
        <div className="max-w-md w-full bg-zion-blue rounded-xl border border-zion-purple/20 p-8 text-center">
          {/* Error Icon */}
          <div className="w-20 h-20 bg-red-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
            <AlertTriangle className="w-10 h-10 text-red-400" />
          </div>

          {/* Error Message */}
          <h1 className="text-2xl font-bold text-white mb-4">
            Oops! Something went wrong
          </h1>
          
          <p className="text-zion-slate-light mb-6 leading-relaxed">
            We're sorry, but something unexpected happened. Our team has been notified and is working to fix this issue.
          </p>

          {/* Error Details (Development Only) */}
          {process.env.NODE_ENV === 'development' && errorState.error && (
            <details className="text-left mb-6 p-4 bg-zion-blue-dark rounded-lg border border-zion-purple/20">
              <summary className="text-zion-cyan cursor-pointer font-medium mb-2">
                Error Details (Development)
              </summary>
              <div className="text-xs text-zion-slate-light space-y-2">
                <div>
                  <strong>Error:</strong> {errorState.error.toString()}
                </div>
                {errorState.errorInfo && (
                  <div>
                    <strong>Error Info:</strong>
                    <pre className="mt-2 p-2 bg-zion-blue rounded text-xs overflow-auto">
                      {JSON.stringify(errorState.errorInfo, null, 2)}
                    </pre>
                  </div>
                )}
              </div>
            </details>
          )}

          {/* Action Buttons */}
          <div className="space-y-3">
            <button
              onClick={handleRetry}
              className="w-full bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple text-white py-3 px-6 rounded-lg font-medium transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2"
            >
              <RefreshCw className="w-5 h-5" />
              Try Again
            </button>

            <button
              onClick={handleGoBack}
              className="w-full bg-zion-blue hover:bg-zion-blue-dark border border-zion-purple/30 text-zion-cyan py-3 px-6 rounded-lg font-medium transition-all duration-300 flex items-center justify-center gap-2"
            >
              <ArrowLeft className="w-5 h-5" />
              Go Back
            </button>

            <Link
              to="/"
              className="w-full bg-zion-blue-dark hover:bg-zion-blue border border-zion-purple/20 text-zion-slate-light py-3 px-6 rounded-lg font-medium transition-all duration-300 flex items-center justify-center gap-2"
            >
              <Home className="w-5 h-5" />
              Go Home
            </Link>
          </div>

          {/* Contact Support */}
          <div className="mt-6 pt-6 border-t border-zion-purple/20">
            <p className="text-sm text-zion-slate-light mb-2">
              Still having issues?
            </p>
            <Link
              to="/contact"
              className="text-zion-cyan hover:text-zion-cyan-light text-sm font-medium transition-colors duration-300"
            >
              Contact Support
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return <>{children}</>;
}

// Hook for functional components to use error boundaries
export function useErrorHandler() {
  return (error: Error, errorInfo?: any) => {
    if (process.env.NODE_ENV === 'development') {
      console.error('Error caught by useErrorHandler:', error, errorInfo);
    }
    
    // You can add additional error handling logic here
    // For example, sending to an error reporting service
  };
}

// Higher-order component for wrapping components with error boundaries
export function withErrorBoundary<P extends object>(
  Component: React.ComponentType<P>,
  fallback?: React.ReactNode,
  onError?: (error: Error, errorInfo?: any) => void
) {
  return function WrappedComponent(props: P) {
    return (
      <ErrorBoundary fallback={fallback} onError={onError}>
        <Component {...props} />
      </ErrorBoundary>
    );
  };
}