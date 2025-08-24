import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { AlertTriangle, RefreshCw, Home, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

interface ErrorBoundaryProps {
  children: React.ReactNode;
  fallback?: React.ReactNode;
}

export function ErrorBoundary({ children, fallback }: ErrorBoundaryProps) {
  const [hasError, setHasError] = useState(false);
  const [error, setError] = useState<Error | null>(null);
  const [errorInfo, setErrorInfo] = useState<React.ErrorInfo | null>(null);

  useEffect(() => {
    const handleError = (error: Error, errorInfo: React.ErrorInfo) => {
      console.error('Error caught by boundary:', error, errorInfo);
      setError(error);
      setErrorInfo(errorInfo);
      setHasError(true);
    };

    // Add global error handler
    window.addEventListener('error', (event) => {
      handleError(event.error, { componentStack: event.error?.stack || '' });
    });

    // Add unhandled rejection handler
    window.addEventListener('unhandledrejection', (event) => {
      handleError(new Error(event.reason), { componentStack: '' });
    });

    return () => {
      window.removeEventListener('error', () => {});
      window.removeEventListener('unhandledrejection', () => {});
    };
  }, []);

  const handleRetry = () => {
    setHasError(false);
    setError(null);
    setErrorInfo(null);
  };

  if (hasError) {
    if (fallback) {
      return <>{fallback}</>;
    }

    return (
      <div className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple flex items-center justify-center p-4">
        <motion.div
          className="max-w-md w-full bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20 text-center"
          initial={{ opacity: 0, scale: 0.9, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          {/* Error Icon */}
          <motion.div
            className="w-20 h-20 bg-red-500/20 rounded-full flex items-center justify-center mx-auto mb-6"
            animate={{ 
              scale: [1, 1.1, 1],
              rotate: [0, 5, -5, 0]
            }}
            transition={{ 
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            <AlertTriangle className="h-10 w-10 text-red-400" />
          </motion.div>

          {/* Error Message */}
          <h1 className="text-2xl font-bold text-white mb-4">
            Oops! Something went wrong
          </h1>
          
          <p className="text-zion-slate-light mb-6 leading-relaxed">
            We encountered an unexpected error. Don't worry, our team has been notified and is working to fix it.
          </p>

          {/* Error Details (Development only) */}
          {process.env.NODE_ENV === 'development' && error && (
            <motion.div
              className="bg-black/20 rounded-lg p-4 mb-6 text-left"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              transition={{ delay: 0.3 }}
            >
              <details className="text-xs text-zion-slate-light">
                <summary className="cursor-pointer text-zion-cyan hover:text-zion-cyan-light mb-2">
                  Error Details
                </summary>
                <div className="space-y-2">
                  <div>
                    <strong>Error:</strong> {error.message}
                  </div>
                  {errorInfo && (
                    <div>
                      <strong>Stack:</strong>
                      <pre className="mt-2 text-xs overflow-x-auto">
                        {errorInfo.componentStack}
                      </pre>
                    </div>
                  )}
                </div>
              </details>
            </motion.div>
          )}

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-3">
            <motion.button
              onClick={handleRetry}
              className="flex-1 bg-gradient-to-r from-zion-cyan to-zion-purple text-white px-6 py-3 rounded-lg font-medium hover:from-zion-cyan-light hover:to-zion-purple-light transition-all duration-300 flex items-center justify-center gap-2"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <RefreshCw className="h-4 w-4" />
              Try Again
            </motion.button>
            
            <Link
              to="/"
              className="flex-1 bg-white/10 text-white px-6 py-3 rounded-lg font-medium hover:bg-white/20 transition-all duration-300 flex items-center justify-center gap-2 border border-white/20"
            >
              <Home className="h-4 w-4" />
              Go Home
            </Link>
          </div>

          {/* Back Button */}
          <motion.button
            onClick={() => window.history.back()}
            className="mt-4 text-zion-cyan hover:text-zion-cyan-light transition-colors duration-300 flex items-center justify-center gap-2 mx-auto text-sm"
            whileHover={{ x: -2 }}
          >
            <ArrowLeft className="h-4 w-4" />
            Go Back
          </motion.button>
        </motion.div>
      </div>
    );
  }

  return <>{children}</>;
}

// Hook for functional components
export function useErrorHandler() {
  const [error, setError] = useState<Error | null>(null);

  const handleError = React.useCallback((error: Error) => {
    console.error('Error caught by hook:', error);
    setError(error);
  }, []);

  const clearError = React.useCallback(() => {
    setError(null);
  }, []);

  return { error, handleError, clearError };
}