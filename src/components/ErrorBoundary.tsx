import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { AlertTriangle, RefreshCw, Home, ArrowLeft } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';

interface ErrorBoundaryProps {
  children: React.ReactNode;
  fallback?: React.ReactNode;
  onError?: (error: Error, errorInfo: any) => void;
}

interface ErrorFallbackProps {
  error?: Error;
  resetError: () => void;
}

function ErrorFallback({ error, resetError }: ErrorFallbackProps) {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-zion-blue-dark flex items-center justify-center p-4">
      <div className="max-w-md w-full text-center">
        <div className="mb-6">
          <div className="w-20 h-20 bg-zion-purple/20 rounded-full flex items-center justify-center mx-auto mb-4">
            <AlertTriangle className="w-10 h-10 text-zion-purple" />
          </div>
          <h1 className="text-2xl font-bold text-white mb-2">Oops! Something went wrong</h1>
          <p className="text-zion-slate-light">
            We encountered an unexpected error. Don't worry, our team has been notified.
          </p>
        </div>

        {error && process.env.NODE_ENV === 'development' && (
          <details className="mb-6 text-left">
            <summary className="cursor-pointer text-zion-cyan hover:text-zion-cyan-light mb-2">
              Error Details (Development)
            </summary>
            <div className="bg-zion-slate-dark p-3 rounded text-xs text-zion-slate-light overflow-auto">
              <pre>{error.stack}</pre>
            </div>
          </details>
        )}

        <div className="space-y-3">
          <Button
            onClick={resetError}
            className="w-full bg-zion-purple hover:bg-zion-purple-dark text-white"
          >
            <RefreshCw className="w-4 h-4 mr-2" />
            Try Again
          </Button>
          
          <Button
            variant="outline"
            onClick={() => navigate(-1)}
            className="w-full border-zion-cyan text-zion-cyan hover:bg-zion-cyan hover:text-zion-blue-dark"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Go Back
          </Button>
          
          <Link
            to="/"
            className="block w-full px-4 py-2 text-center border border-zion-purple text-zion-purple rounded-md hover:bg-zion-purple hover:text-white transition-colors"
          >
            <Home className="w-4 h-4 inline mr-2" />
            Go Home
          </Link>
        </div>

        <div className="mt-6 text-xs text-zion-slate-light">
          <p>If this problem persists, please contact our support team.</p>
          <p className="mt-1">
            Error ID: {error?.name || 'Unknown'} - {new Date().toISOString()}
          </p>
        </div>
      </div>
    </div>
  );
}

export function ErrorBoundary({ children, fallback, onError }: ErrorBoundaryProps) {
  const [hasError, setHasError] = useState(false);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const handleError = (event: ErrorEvent) => {
      setHasError(true);
      setError(event.error);
      
      if (onError) {
        onError(event.error, { componentStack: event.error?.stack });
      }
      
      // Log error to console in development
      if (process.env.NODE_ENV === 'development') {
        console.error('ErrorBoundary caught an error:', event.error);
      }
    };

    const handleUnhandledRejection = (event: PromiseRejectionEvent) => {
      setHasError(true);
      setError(new Error(event.reason));
      
      if (onError) {
        onError(new Error(event.reason), { componentStack: event.reason?.stack });
      }
      
      // Log error to console in development
      if (process.env.NODE_ENV === 'development') {
        console.error('ErrorBoundary caught an unhandled rejection:', event.reason);
      }
    };

    window.addEventListener('error', handleError);
    window.addEventListener('unhandledrejection', handleUnhandledRejection);

    return () => {
      window.removeEventListener('error', handleError);
      window.removeEventListener('unhandledrejection', handleUnhandledRejection);
    };
  }, [onError]);

  const resetError = () => {
    setHasError(false);
    setError(null);
  };

  if (hasError) {
    if (fallback) {
      return fallback;
    }
    
    return (
      <ErrorFallback
        error={error || undefined}
        resetError={resetError}
      />
    );
  }

  return <>{children}</>;
}

// Hook for functional components to handle errors
export function useErrorHandler() {
  const [error, setError] = useState<Error | null>(null);

  const handleError = React.useCallback((error: Error) => {
    setError(error);
    console.error('Error caught by useErrorHandler:', error);
  }, []);

  const clearError = React.useCallback(() => {
    setError(null);
  }, []);

  return { error, handleError, clearError };
}

// Higher-order component for wrapping components with error handling
export function withErrorBoundary<P extends object>(
  Component: React.ComponentType<P>,
  errorBoundaryProps?: Omit<ErrorBoundaryProps, 'children'>
) {
  return function WithErrorBoundary(props: P) {
    return (
      <ErrorBoundary {...errorBoundaryProps}>
        <Component {...props} />
      </ErrorBoundary>
    );
  };
}