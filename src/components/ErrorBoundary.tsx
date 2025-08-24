<<<<<<< HEAD
import React, { Component, ErrorInfo, ReactNode } from 'react';

interface Props {
  children: ReactNode;
=======
import React, { useState, useEffect, ReactNode } from 'react';
import { motion } from 'framer-motion';
import { AlertTriangle, RefreshCw, Home, ChevronUp } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';

interface Props {
  children: ReactNode;
  fallback?: ReactNode;
>>>>>>> cfb04f63b138e721e668a86f56f120d011c10c16
}

interface State {
  hasError: boolean;
  error?: Error;
}

<<<<<<< HEAD
export class ErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('Error caught by boundary:', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen flex items-center justify-center bg-gray-900 text-white">
          <div className="text-center">
            <h1 className="text-2xl font-bold mb-4">Something went wrong</h1>
            <p className="text-gray-300 mb-4">
              We're sorry, but something unexpected happened.
            </p>
            <button
              onClick={() => window.location.reload()}
              className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
            >
              Reload Page
            </button>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
=======
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
  const [errorState, setErrorState] = useState<ErrorState>({ hasError: false });

  useEffect(() => {
    const handleError = (error: ErrorEvent) => {
      console.error('Error caught by boundary:', error);
      setErrorState({ hasError: true, error: error.error });
    };

    const handleUnhandledRejection = (event: PromiseRejectionEvent) => {
      console.error('Unhandled promise rejection:', event);
      setErrorState({ hasError: true, error: new Error(event.reason) });
    };

    window.addEventListener('error', handleError);
    window.addEventListener('unhandledrejection', handleUnhandledRejection);

    return () => {
      window.removeEventListener('error', handleError);
      window.removeEventListener('unhandledrejection', handleUnhandledRejection);
    };
  }, []);

  const resetError = () => {
    setErrorState({ hasError: false, error: undefined });
  };

  if (errorState.hasError) {
    if (fallback) {
      return fallback;
    }
    return <ErrorFallback error={errorState.error!} resetError={resetError} />;
  }

  return <>{children}</>;
>>>>>>> cfb04f63b138e721e668a86f56f120d011c10c16
}