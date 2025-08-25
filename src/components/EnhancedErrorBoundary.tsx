import React, { Component, ErrorInfo, ReactNode } from 'react';
import { motion } from 'framer-motion';
import { AlertTriangle, RefreshCw, Home, Bug, XCircle } from 'lucide-react';

interface Props {
  children: ReactNode;
  fallback?: ReactNode;
  onError?: (error: Error, errorInfo: ErrorInfo) => void;
  showDetails?: boolean;
}

interface State {
  hasError: boolean;
  error: Error | null;
  errorInfo: ErrorInfo | null;
  errorId: string | null;
}

export class EnhancedErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      hasError: false,
      error: null,
      errorInfo: null,
      errorId: null
    };
  }

  static getDerivedStateFromError(error: Error): Partial<State> {
    return {
      hasError: true,
      error,
      errorId: `error_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`
    };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    this.setState({ errorInfo });
    
    // Log error to console in development
    if (import.meta.env.DEV) {
      console.group('🚨 Error Boundary Caught Error');
      console.error('Error:', error);
      console.error('Error Info:', errorInfo);
      console.error('Error ID:', this.state.errorId);
      console.groupEnd();
    }

    // Call custom error handler if provided
    if (this.props.onError) {
      this.props.onError(error, errorInfo);
    }

    // Send error to error reporting service (e.g., Sentry)
    this.reportError(error, errorInfo);
  }

  private reportError = (error: Error, errorInfo: ErrorInfo) => {
    // In production, you would send this to your error reporting service
    if (import.meta.env.PROD) {
      // Example: send to analytics or error reporting service
      try {
        // You can implement error reporting logic here
        // Example: analytics.track('error_boundary', { error: error.message, stack: error.stack });
        console.warn('Error would be reported to error service in production');
      } catch (reportingError) {
        console.warn('Failed to report error:', reportingError);
      }
    }
  };

  private handleRetry = () => {
    this.setState({
      hasError: false,
      error: null,
      errorInfo: null,
      errorId: null
    });
  };

  private handleGoHome = () => {
    window.location.href = '/';
  };

  private handleReload = () => {
    window.location.reload();
  };

  private copyErrorDetails = () => {
    const errorDetails = `
Error ID: ${this.state.errorId}
Error: ${this.state.error?.message}
Stack: ${this.state.error?.stack}
Component Stack: ${this.state.errorInfo?.componentStack}
Time: ${new Date().toISOString()}
URL: ${window.location.href}
User Agent: ${navigator.userAgent}
    `.trim();

    navigator.clipboard.writeText(errorDetails).then(() => {
      // Show success message
      alert('Error details copied to clipboard');
    }).catch(() => {
      // Fallback for older browsers
      const textArea = document.createElement('textarea');
      textArea.value = errorDetails;
      document.body.appendChild(textArea);
      textArea.select();
      document.execCommand('copy');
      document.body.removeChild(textArea);
      alert('Error details copied to clipboard');
    });
  };

  render() {
    if (this.state.hasError) {
      // Custom fallback UI
      if (this.props.fallback) {
        return this.props.fallback;
      }

      // Default error UI
      return (
        <div className="min-h-screen bg-gradient-to-br from-red-900 via-gray-900 to-red-800 flex items-center justify-center p-4">
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="max-w-2xl w-full bg-gray-900 border border-red-500/30 rounded-2xl shadow-2xl overflow-hidden"
          >
            {/* Header */}
            <div className="bg-gradient-to-r from-red-600 to-red-700 p-6 text-center">
              <motion.div
                animate={{ rotate: [0, -10, 10, -10, 0] }}
                transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
                className="inline-flex items-center justify-center w-16 h-16 bg-red-500 rounded-full mb-4"
              >
                <XCircle className="w-8 h-8 text-white" />
              </motion.div>
              <h1 className="text-2xl font-bold text-white mb-2">
                Oops! Something went wrong
              </h1>
              <p className="text-red-100">
                We've encountered an unexpected error. Our team has been notified.
              </p>
            </div>

            {/* Error Details */}
            <div className="p-6 space-y-4">
              <div className="bg-gray-800 rounded-lg p-4 border border-gray-700">
                <div className="flex items-center gap-2 mb-2">
                  <Bug className="w-5 h-5 text-red-400" />
                  <span className="text-white font-medium">Error Details</span>
                </div>
                <div className="text-gray-300 text-sm space-y-1">
                  <p><strong>Error ID:</strong> {this.state.errorId}</p>
                  <p><strong>Message:</strong> {this.state.error?.message}</p>
                  {this.props.showDetails && this.state.errorInfo && (
                    <details className="mt-2">
                      <summary className="cursor-pointer text-cyan-400 hover:text-cyan-300">
                        Component Stack Trace
                      </summary>
                      <pre className="mt-2 text-xs text-gray-400 bg-gray-900 p-2 rounded overflow-x-auto">
                        {this.state.errorInfo.componentStack}
                      </pre>
                    </details>
                  )}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={this.handleRetry}
                  className="flex items-center justify-center gap-2 p-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium transition-colors duration-200"
                >
                  <RefreshCw className="w-4 h-4" />
                  Try Again
                </motion.button>

                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={this.handleGoHome}
                  className="flex items-center justify-center gap-2 p-3 bg-green-600 hover:bg-green-700 text-white rounded-lg font-medium transition-colors duration-200"
                >
                  <Home className="w-4 h-4" />
                  Go Home
                </motion.button>

                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={this.handleReload}
                  className="flex items-center justify-center gap-2 p-3 bg-purple-600 hover:bg-purple-700 text-white rounded-lg font-medium transition-colors duration-200"
                >
                  <RefreshCw className="w-4 h-4" />
                  Reload Page
                </motion.button>
              </div>

              {/* Additional Help */}
              <div className="text-center">
                <button
                  onClick={this.copyErrorDetails}
                  className="text-cyan-400 hover:text-cyan-300 text-sm underline"
                >
                  Copy Error Details
                </button>
                <p className="text-gray-400 text-xs mt-2">
                  If this problem persists, please contact support with the Error ID above.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      );
    }

    return this.props.children;
  }
}

// Hook version for functional components
export const useErrorBoundary = () => {
  const [error, setError] = React.useState<Error | null>(null);

  const handleError = React.useCallback((error: Error) => {
    setError(error);
  }, []);

  const clearError = React.useCallback(() => {
    setError(null);
  }, []);

  return { error, handleError, clearError };
};