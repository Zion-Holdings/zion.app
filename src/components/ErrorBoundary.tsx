import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { AlertTriangle, RefreshCw, Home, ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';

interface ErrorBoundaryProps {
  children: React.ReactNode;
  fallback?: React.ReactNode;
  onError?: (error: Error, errorInfo: any) => void;
}

interface ErrorState {
  hasError: boolean;
  error: Error | null;
}

// Error Fallback Component
function ErrorFallback({ error, resetError }: { error: Error; resetError: () => void }) {
  const navigate = useNavigate();

  const handleGoHome = () => {
    navigate('/');
    resetError();
  };

  const handleGoBack = () => {
    navigate(-1);
    resetError();
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple flex items-center justify-center p-4"
    >
      <div className="max-w-2xl mx-auto text-center">
        {/* Error Icon */}
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
          className="mx-auto w-24 h-24 bg-red-500/20 rounded-full flex items-center justify-center mb-8"
        >
          <AlertTriangle className="w-12 h-12 text-red-400" />
        </motion.div>

        {/* Error Message */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="text-4xl font-bold text-white mb-4"
        >
          Oops! Something went wrong
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="text-xl text-zion-slate-light mb-8"
        >
          We're sorry, but something unexpected happened. Our team has been notified and is working to fix this issue.
        </motion.p>

        {/* Error Details (Development Only) */}
        {process.env.NODE_ENV === 'development' && error && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="bg-red-500/10 border border-red-500/20 rounded-lg p-4 mb-8 text-left"
          >
            <h3 className="text-lg font-semibold text-red-400 mb-2">Error Details (Development)</h3>
            <p className="text-red-300 text-sm font-mono break-words">
              {error.message}
            </p>
            {error.stack && (
              <details className="mt-2">
                <summary className="text-red-300 text-sm cursor-pointer">Stack Trace</summary>
                <pre className="text-red-300 text-xs mt-2 whitespace-pre-wrap overflow-auto max-h-32">
                  {error.stack}
                </pre>
              </details>
            )}
          </motion.div>
        )}

        {/* Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <Button
            onClick={resetError}
            className="bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple text-lg py-3 px-6 shadow-2xl hover:shadow-zion-purple/25 transition-all duration-300 transform hover:scale-105"
          >
            <RefreshCw className="w-5 h-5 mr-2" />
            Try Again
          </Button>

          <Button
            onClick={handleGoBack}
            variant="outline"
            className="border-2 border-zion-cyan text-zion-cyan hover:bg-zion-cyan hover:text-zion-blue-dark text-lg py-3 px-6 transition-all duration-300 transform hover:scale-105"
          >
            <ArrowLeft className="w-5 h-5 mr-2" />
            Go Back
          </Button>

          <Button
            onClick={handleGoHome}
            variant="outline"
            className="border-2 border-zion-cyan text-zion-cyan hover:bg-zion-cyan hover:text-zion-blue-dark text-lg py-3 px-6 transition-all duration-300 transform hover:scale-105"
          >
            <Home className="w-5 h-5 mr-2" />
            Go Home
          </Button>
        </motion.div>

        {/* Contact Support */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="mt-8 text-zion-slate-light"
        >
          <p className="mb-2">Still having issues?</p>
          <Button
            variant="link"
            className="text-zion-cyan hover:text-zion-cyan-light underline"
            onClick={() => navigate('/contact')}
          >
            Contact Support
          </Button>
        </motion.div>
      </div>
    </motion.div>
  );
}

// Functional Error Boundary using React hooks
export function ErrorBoundary({ children, fallback, onError }: ErrorBoundaryProps) {
  const [errorState, setErrorState] = useState<ErrorState>({
    hasError: false,
    error: null
  });

  useEffect(() => {
    const handleError = (error: Error, errorInfo: any) => {
      console.error('ErrorBoundary caught an error:', error, errorInfo);
      
      setErrorState({
        hasError: true,
        error
      });

      // Call custom error handler if provided
      if (onError) {
        onError(error, errorInfo);
      }

      // Log to external error reporting service in production
      if (process.env.NODE_ENV === 'production') {
        console.error('Production error:', error.message);
      }
    };

    // Global error handler
    window.addEventListener('error', (event) => {
      handleError(event.error || new Error(event.message), { type: 'window.error' });
    });

    // Unhandled promise rejection handler
    window.addEventListener('unhandledrejection', (event) => {
      handleError(new Error(event.reason), { type: 'unhandledrejection' });
    });

    return () => {
      window.removeEventListener('error', () => {});
      window.removeEventListener('unhandledrejection', () => {});
    };
  }, [onError]);

  const resetError = () => {
    setErrorState({
      hasError: false,
      error: null
    });
  };

  if (errorState.hasError) {
    if (fallback) {
      return <>{fallback}</>;
    }

    return (
      <ErrorFallback
        error={errorState.error!}
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
  }, []);

  const clearError = React.useCallback(() => {
    setError(null);
  }, []);

  return { error, handleError, clearError };
}

// Higher-order component for error handling
export function withErrorBoundary<P extends object>(
  Component: React.ComponentType<P>,
  fallback?: React.ReactNode,
  onError?: (error: Error, errorInfo: any) => void
) {
  const WrappedComponent = (props: P) => (
    <ErrorBoundary fallback={fallback} onError={onError}>
      <Component {...props} />
    </ErrorBoundary>
  );

  WrappedComponent.displayName = `withErrorBoundary(${Component.displayName || Component.name})`;

  return WrappedComponent;
}