import React, { useState, useEffect, ReactNode } from 'react';
import { AlertTriangle, RefreshCw, Home } from 'lucide-react';
import { Link } from 'react-router-dom';

interface Props {
  children: ReactNode;
  fallback?: ReactNode;
}

export function ErrorBoundary({ children, fallback }: Props) {
  const [hasError, setHasError] = useState(false);
  const [error, setError] = useState<Error | null>(null);
  const [errorInfo, setErrorInfo] = useState<any>(null);

  useEffect(() => {
    const handleError = (error: Error, errorInfo: any) => {
      console.error('ErrorBoundary caught an error:', error, errorInfo);
      setHasError(true);
      setError(error);
      setErrorInfo(errorInfo);
    };

    // Add global error handler
    window.addEventListener('error', (event) => {
      handleError(event.error, event);
    });

    window.addEventListener('unhandledrejection', (event) => {
      handleError(new Error(event.reason), event);
    });

    return () => {
      window.removeEventListener('error', (event) => {
        handleError(event.error, event);
      });
      window.removeEventListener('unhandledrejection', (event) => {
        handleError(new Error(event.reason), event);
      });
    };
  }, []);

  if (hasError) {
    if (fallback) {
      return <>{fallback}</>;
    }

    return (
      <div className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple flex items-center justify-center p-4">
        <div className="max-w-md w-full bg-zion-slate-dark/80 backdrop-blur-sm border border-zion-blue-light/20 rounded-2xl p-8 text-center">
          <div className="w-20 h-20 mx-auto mb-6 bg-red-500/20 rounded-full flex items-center justify-center">
            <AlertTriangle className="w-10 h-10 text-red-400" />
          </div>
          
          <h1 className="text-2xl font-bold text-white mb-4">
            Oops! Something went wrong
          </h1>
          
          <p className="text-zion-slate-light mb-6">
            We encountered an unexpected error. Please try refreshing the page or return to the home page.
          </p>

          {process.env.NODE_ENV === 'development' && error && (
            <details className="text-left mb-6 p-4 bg-zion-slate-dark/50 rounded-lg border border-zion-blue-light/20">
              <summary className="text-zion-cyan cursor-pointer mb-2 font-medium">
                Error Details (Development)
              </summary>
              <pre className="text-xs text-zion-slate-light overflow-auto">
                {error.toString()}
                {errorInfo?.componentStack}
              </pre>
            </details>
          )}

          <div className="flex flex-col sm:flex-row gap-3">
            <button
              onClick={() => window.location.reload()}
              className="flex-1 flex items-center justify-center gap-2 px-4 py-3 bg-zion-purple hover:bg-zion-purple-dark text-white rounded-lg transition-colors"
            >
              <RefreshCw className="w-4 h-4" />
              Refresh Page
            </button>
            
            <Link
              to="/"
              className="flex-1 flex items-center justify-center gap-2 px-4 py-3 border border-zion-cyan text-zion-cyan hover:bg-zion-cyan hover:text-zion-slate-dark rounded-lg transition-colors"
            >
              <Home className="w-4 h-4" />
              Go Home
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
    console.error('Error caught by useErrorHandler:', error, errorInfo);
    // You can add error reporting logic here
  };
}