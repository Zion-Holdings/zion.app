import { useState, useCallback, useEffect } from 'react';
import { motion } from 'framer-motion';
import { AlertTriangle, RefreshCw, Home, ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

// Simple error display component
export function ErrorDisplay({ 
  error, 
  onRetry, 
  className 
}: { 
  error: string | Error;
  onRetry?: () => void;
  className?: string;
}) {
  const errorMessage = typeof error === 'string' ? error : error.message;

  return (
    <motion.div
      className={`bg-red-500/10 border border-red-500/20 rounded-lg p-4 text-center ${className || ''}`}
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.3 }}
    >
      <div className="flex items-center justify-center gap-2 mb-3">
        <AlertTriangle className="w-5 h-5 text-red-400" />
        <span className="text-red-400 font-medium">Error</span>
      </div>
      <p className="text-red-300 mb-3">{errorMessage}</p>
      {onRetry && (
        <Button
          onClick={onRetry}
          size="sm"
          variant="outline"
          className="border-red-500/30 text-red-400 hover:bg-red-500/20"
        >
          <RefreshCw className="w-4 h-4 mr-2" />
          Try Again
        </Button>
      )}
    </motion.div>
  );
}

// Hook for functional components to handle errors
export function useErrorHandler() {
  const [error, setError] = useState<Error | null>(null);

  const handleError = useCallback((error: Error) => {
    console.error('Error caught by hook:', error);
    setError(error);
  }, []);

  const clearError = useCallback(() => {
    setError(null);
  }, []);

  return { error, handleError, clearError };
}

// Error fallback component for full page errors
export function ErrorFallback({ 
  error, 
  onRetry 
}: { 
  error?: Error;
  onRetry: () => void;
}) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-slate-dark flex items-center justify-center p-4">
      <motion.div
        className="max-w-md w-full text-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        {/* Error Icon */}
        <motion.div
          className="w-20 h-20 mx-auto mb-6 rounded-full bg-red-500/20 border border-red-500/30 flex items-center justify-center"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
        >
          <AlertTriangle className="w-10 h-10 text-red-400" />
        </motion.div>

        {/* Error Message */}
        <motion.h1
          className="text-2xl font-bold text-white mb-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          Oops! Something went wrong
        </motion.h1>

        <motion.p
          className="text-zion-slate-light mb-6 leading-relaxed"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          We encountered an unexpected error. Don't worry, our team has been notified and is working to fix it.
        </motion.p>

        {/* Error Details (Development only) */}
        {process.env.NODE_ENV === 'development' && error && (
          <motion.div
            className="mb-6 p-4 bg-zion-blue-dark/50 border border-zion-blue-light/30 rounded-lg text-left"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            transition={{ delay: 0.5 }}
          >
            <details className="text-sm">
              <summary className="cursor-pointer text-zion-cyan font-medium mb-2">
                Error Details (Development)
              </summary>
              <div className="text-zion-slate-light space-y-2">
                <p><strong>Message:</strong> {error.message}</p>
                <p><strong>Stack:</strong></p>
                <pre className="text-xs overflow-auto bg-zion-slate-dark p-2 rounded">
                  {error.stack}
                </pre>
              </div>
            </details>
          </motion.div>
        )}

        {/* Action Buttons */}
        <motion.div
          className="flex flex-col sm:flex-row gap-3 justify-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
        >
          <Button
            onClick={onRetry}
            className="bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-zion-purple/25"
          >
            <RefreshCw className="w-4 h-4 mr-2" />
            Try Again
          </Button>

          <Button
            variant="outline"
            className="border-2 border-zion-cyan text-zion-cyan hover:bg-zion-cyan hover:text-zion-blue-dark px-6 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105"
            asChild
          >
            <Link to="/">
              <Home className="w-4 h-4 mr-2" />
              Go Home
            </Link>
          </Button>
        </motion.div>

        {/* Additional Help */}
        <motion.div
          className="mt-8 p-4 bg-zion-blue/20 border border-zion-blue-light/20 rounded-lg"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7 }}
        >
          <p className="text-sm text-zion-slate-light mb-2">
            Still having issues?
          </p>
          <div className="flex flex-col sm:flex-row gap-2 justify-center text-sm">
            <Link
              to="/contact"
              className="text-zion-cyan hover:text-zion-cyan-light transition-colors"
            >
              Contact Support
            </Link>
            <span className="text-zion-slate-light hidden sm:inline">•</span>
            <Link
              to="/help"
              className="text-zion-cyan hover:text-zion-cyan-light transition-colors"
            >
              Help Center
            </Link>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
}

// Simple error boundary wrapper
export function ErrorBoundary({ children }: { children: React.ReactNode }) {
  const [hasError, setHasError] = useState(false);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const handleError = (event: ErrorEvent) => {
      console.error('Error caught by boundary:', event.error);
      setError(event.error);
      setHasError(true);
    };

    const handleUnhandledRejection = (event: PromiseRejectionEvent) => {
      console.error('Unhandled promise rejection:', event.reason);
      setError(new Error(event.reason));
      setHasError(true);
    };

    window.addEventListener('error', handleError);
    window.addEventListener('unhandledrejection', handleUnhandledRejection);

    return () => {
      window.removeEventListener('error', handleError);
      window.removeEventListener('unhandledrejection', handleUnhandledRejection);
    };
  }, []);

  if (hasError) {
    return (
      <ErrorFallback 
        error={error || undefined} 
        onRetry={() => {
          setHasError(false);
          setError(null);
          window.location.reload();
        }} 
      />
    );
  }

  return <>{children}</>;
}