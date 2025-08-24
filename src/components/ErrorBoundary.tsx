import React, { useState, useEffect, ReactNode } from 'react';
import { motion } from 'framer-motion';
import { AlertTriangle, RefreshCw, Home, ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';

interface Props {
  children: ReactNode;
  fallback?: ReactNode;
}

interface ErrorState {
  hasError: boolean;
  error?: Error;
  errorInfo?: any;
}

export function ErrorBoundary({ children, fallback }: Props) {
  const [errorState, setErrorState] = useState<ErrorState>({ hasError: false });
  const navigate = useNavigate();

  useEffect(() => {
    const handleError = (error: ErrorEvent) => {
      console.error('Error caught by boundary:', error);
      setErrorState({
        hasError: true,
        error: error.error,
        errorInfo: { componentStack: error.error?.stack || 'No stack trace available' }
      });
    };

    const handleUnhandledRejection = (event: PromiseRejectionEvent) => {
      console.error('Unhandled promise rejection:', event);
      setErrorState({
        hasError: true,
        error: new Error(event.reason?.message || 'Unhandled promise rejection'),
        errorInfo: { componentStack: 'Promise rejection' }
      });
    };

    window.addEventListener('error', handleError);
    window.addEventListener('unhandledrejection', handleUnhandledRejection);

    return () => {
      window.removeEventListener('error', handleError);
      window.removeEventListener('unhandledrejection', handleUnhandledRejection);
    };
  }, []);

  const handleReset = () => {
    setErrorState({ hasError: false });
  };

  if (errorState.hasError) {
    if (fallback) {
      return <>{fallback}</>;
    }

    return (
      <ErrorFallback 
        error={errorState.error} 
        errorInfo={errorState.errorInfo}
        onReset={handleReset}
        navigate={navigate}
      />
    );
  }

  return <>{children}</>;
}

interface ErrorFallbackProps {
  error?: Error;
  errorInfo?: any;
  onReset: () => void;
  navigate: (path: string) => void;
}

function ErrorFallback({ error, errorInfo, onReset, navigate }: ErrorFallbackProps) {
  return (
    <div className="min-h-screen bg-zion-blue-dark flex items-center justify-center p-4">
      <motion.div
        className="max-w-2xl w-full bg-zion-blue-light/10 backdrop-blur-sm rounded-2xl p-8 border border-zion-purple/20"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="text-center mb-8">
          <motion.div
            className="mx-auto w-20 h-20 bg-red-500/20 rounded-full flex items-center justify-center mb-6"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <AlertTriangle className="w-10 h-10 text-red-400" />
          </motion.div>
          
          <h1 className="text-3xl font-bold text-white mb-4">
            Oops! Something went wrong
          </h1>
          
          <p className="text-zion-slate-light text-lg mb-6">
            We encountered an unexpected error. Don't worry, our team has been notified.
          </p>
        </div>

        <div className="space-y-4 mb-8">
          <Button
            onClick={onReset}
            className="w-full bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple py-6 text-lg"
          >
            <RefreshCw className="w-5 h-5 mr-2" />
            Try Again
          </Button>
          
          <div className="grid grid-cols-2 gap-4">
            <Button
              onClick={() => navigate('/')}
              variant="outline"
              className="border-zion-cyan text-zion-cyan hover:bg-zion-cyan hover:text-zion-blue-dark py-6"
            >
              <Home className="w-5 h-5 mr-2" />
              Go Home
            </Button>
            
            <Button
              onClick={() => navigate(-1 as any)}
              variant="outline"
              className="border-zion-purple text-zion-purple hover:bg-zion-purple hover:text-white py-6"
            >
              <ArrowLeft className="w-5 h-5 mr-2" />
              Go Back
            </Button>
          </div>
        </div>

        {typeof window !== 'undefined' && window.location.hostname === 'localhost' && error && (
          <motion.div
            className="mt-8 p-4 bg-zion-blue-dark/50 rounded-lg border border-zion-blue-light/30"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <details className="text-left">
              <summary className="cursor-pointer text-zion-cyan font-medium mb-2">
                Error Details (Development)
              </summary>
              <div className="text-sm text-zion-slate-light space-y-2">
                <div>
                  <strong>Error:</strong> {error.message}
                </div>
                {errorInfo && (
                  <div>
                    <strong>Stack:</strong>
                    <pre className="mt-2 p-2 bg-zion-blue-dark rounded text-xs overflow-x-auto">
                      {errorInfo.componentStack}
                    </pre>
                  </div>
                )}
              </div>
            </details>
          </motion.div>
        )}
      </motion.div>
    </div>
  );
}

// Hook for functional components to handle errors
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