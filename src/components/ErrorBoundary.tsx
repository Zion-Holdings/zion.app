<<<<<<< HEAD
import React, { useState, useEffect, ReactNode } from 'react';
import { motion } from 'framer-motion';
import { AlertTriangle, RefreshCw, Home, ChevronUp } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';

interface Props {
  children: ReactNode;
  fallback?: ReactNode;
}

interface State {
  hasError: boolean;
  error?: Error;
}

function ErrorFallback({ error, resetError }: { error: Error; resetError: () => void }) {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-zion-blue-dark flex items-center justify-center p-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-md w-full text-center"
      >
        <div className="mb-8">
          <motion.div
            animate={{ rotate: [0, 10, -10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="mx-auto w-20 h-20 bg-zion-purple/20 rounded-full flex items-center justify-center mb-4"
          >
            <AlertTriangle className="w-10 h-10 text-zion-purple" />
          </motion.div>
          <h1 className="text-2xl font-bold text-white mb-2">Oops! Something went wrong</h1>
          <p className="text-zion-slate-light">
            We're sorry, but something unexpected happened. Our team has been notified.
          </p>
        </div>

        <div className="space-y-3 mb-8">
          <button
            onClick={resetError}
            className="w-full bg-zion-purple hover:bg-zion-purple-dark text-white py-3 px-6 rounded-md transition-colors flex items-center justify-center gap-2"
          >
            <RefreshCw className="w-4 h-4" />
            Try Again
          </button>
          
          <button
            onClick={() => navigate(-1)}
            className="w-full bg-zion-blue hover:bg-zion-blue-dark text-white py-3 px-6 rounded-md transition-colors flex items-center justify-center gap-2"
          >
            <ChevronUp className="w-4 h-4" />
            Go Back
          </button>
          
          <Link
            to="/"
            className="w-full bg-zion-cyan hover:bg-zion-cyan-dark text-zion-blue-dark py-3 px-6 rounded-md transition-colors flex items-center justify-center gap-2"
          >
            <Home className="w-4 h-4" />
            Go Home
          </Link>
        </div>

        {process.env.NODE_ENV === 'development' && error && (
          <details className="text-left bg-zion-blue/20 rounded-md p-4">
            <summary className="text-zion-cyan cursor-pointer mb-2 font-medium">
              Error Details (Development)
            </summary>
            <pre className="text-xs text-zion-slate-light overflow-auto">
              {error.stack}
            </pre>
          </details>
        )}
      </motion.div>
    </div>
  );
}

export function ErrorBoundary({ children, fallback }: Props) {
  const [errorState, setErrorState] = useState<State>({ hasError: false });
=======
import React, { useState, useEffect } from 'react';
import { AlertTriangle, RefreshCw, Home } from 'lucide-react';

interface ErrorBoundaryProps {
  children: React.ReactNode;
  fallback?: React.ReactNode;
}

export function ErrorBoundary({ children, fallback }: ErrorBoundaryProps) {
  const [hasError, setHasError] = useState(false);
  const [error, setError] = useState<Error | null>(null);
>>>>>>> d0d58136d327183e53cdbb308d5ed67246f24274

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

  const handleRetry = () => {
    setHasError(false);
    setError(null);
    window.location.reload();
  };

  if (hasError) {
    if (fallback) {
      return <>{fallback}</>;
    }

    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 flex items-center justify-center p-4">
        <div className="max-w-md w-full text-center">
          <div className="mb-6">
            <div className="w-20 h-20 bg-red-500/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <AlertTriangle className="w-10 h-10 text-red-500" />
            </div>
            <h1 className="text-2xl font-bold text-white mb-2">
              Something went wrong
            </h1>
            <p className="text-white/70 mb-6">
              We're sorry, but something unexpected happened. Please try again or return to the home page.
            </p>
          </div>

          <div className="space-y-3">
            <button
              onClick={handleRetry}
              className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 flex items-center justify-center gap-2"
            >
              <RefreshCw className="w-4 h-4" />
              Try Again
            </button>
            
            <button
              onClick={() => window.location.href = '/'}
              className="w-full bg-white/10 backdrop-blur-sm text-white px-6 py-3 rounded-lg font-semibold hover:bg-white/20 transition-all duration-300 flex items-center justify-center gap-2 border border-white/20"
            >
              <Home className="w-4 h-4" />
              Go Home
            </button>
          </div>

          {process.env.NODE_ENV === 'development' && error && (
            <details className="mt-6 text-left">
              <summary className="cursor-pointer text-sm text-white/60 hover:text-white">
                Error Details (Development)
              </summary>
              <div className="mt-2 p-3 bg-white/10 rounded text-xs font-mono text-white/80 overflow-auto">
                <div className="mb-2">
                  <strong>Error:</strong> {error.toString()}
                </div>
                <div>
                  <strong>Stack:</strong>
                  <pre className="whitespace-pre-wrap mt-1">
                    {error.stack}
                  </pre>
                </div>
              </div>
            </details>
          )}
        </div>
      </div>
    );
  }

  return <>{children}</>;
}