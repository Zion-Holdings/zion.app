import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { AlertTriangle, RefreshCw, Home, Mail, HelpCircle } from 'lucide-react';
import { Button } from './ui/button';
import { Link } from 'react-router-dom';

interface ErrorBoundaryProps {
  children: React.ReactNode;
}

interface ErrorState {
  hasError: boolean;
  error: Error | null;
}

const ErrorBoundary: React.FC<ErrorBoundaryProps> = ({ children }) => {
  const [errorState, setErrorState] = useState<ErrorState>({
    hasError: false,
    error: null
  });

  useEffect(() => {
    const handleError = (event: ErrorEvent) => {
      console.error('Error caught by boundary:', event.error);
      setErrorState({
        hasError: true,
        error: event.error
      });
    };

    const handleUnhandledRejection = (event: PromiseRejectionEvent) => {
      console.error('Unhandled promise rejection:', event.reason);
      setErrorState({
        hasError: true,
        error: new Error(event.reason)
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
      error: null
    });
    window.location.reload();
  };

  if (errorState.hasError) {
    return <ErrorFallback error={errorState.error} onRetry={handleRetry} />;
  }

  return <>{children}</>;
};

interface ErrorFallbackProps {
  error: Error | null;
  onRetry: () => void;
}

const ErrorFallback: React.FC<ErrorFallbackProps> = ({ error, onRetry }) => {
  const errorMessage = error?.message || 'An unexpected error occurred';
  const errorStack = error?.stack || 'No stack trace available';

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

        {/* Error Title */}
        <motion.h1
          className="text-2xl font-bold text-white mb-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          Oops! Something went wrong
        </motion.h1>

        {/* Error Message */}
        <motion.p
          className="text-zion-slate-light mb-6 leading-relaxed"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          We encountered an unexpected error. Don't worry, our team has been notified and is working to fix it.
        </motion.p>

        {/* Error Details */}
        <motion.div
          className="mb-6 p-4 bg-zion-blue-dark/50 border border-zion-blue-light/30 rounded-lg text-left"
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          transition={{ delay: 0.5 }}
        >
          <details className="text-sm">
            <summary className="cursor-pointer text-zion-cyan font-medium mb-2">
              Technical Details
            </summary>
            <div className="text-zion-slate-light space-y-2">
              <p><strong>Message:</strong> {errorMessage}</p>
              <p><strong>Stack:</strong></p>
              <pre className="text-xs overflow-auto bg-zion-slate-dark p-2 rounded">
                {errorStack}
              </pre>
            </div>
          </details>
        </motion.div>

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
            size="lg"
            asChild
          >
            <Link to="/">
              <Home className="w-4 h-4 mr-2" />
              Go Home
            </Link>
          </Button>
        </motion.div>

        {/* Help Section */}
        <motion.div
          className="mt-8 p-4 bg-zion-blue/20 border border-zion-blue-light/20 rounded-lg"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7 }}
        >
          <p className="text-sm text-zion-slate-light mb-2">
            Need help? We're here for you:
          </p>
          <div className="flex flex-col sm:flex-row gap-2 justify-center text-sm">
            <Link
              to="/contact"
              className="text-zion-cyan hover:text-zion-cyan-light transition-colors flex items-center justify-center gap-1"
            >
              <Mail className="w-3 h-3" />
              Contact Support
            </Link>
            <span className="text-zion-slate-light hidden sm:inline">•</span>
            <Link
              to="/help"
              className="text-zion-cyan hover:text-zion-cyan-light transition-colors flex items-center justify-center gap-1"
            >
              <HelpCircle className="w-3 h-3" />
              Help Center
            </Link>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default ErrorBoundary;