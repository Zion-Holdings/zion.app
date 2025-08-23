import React, { Component, ErrorInfo, ReactNode } from 'react';
import { motion } from 'framer-motion';
import { AlertTriangle, RefreshCw, Home, ArrowLeft, Bug, ChevronDown } from 'lucide-react';
import Link from 'next/link';

// Extend Window interface for gtag
declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
  }
}

interface Props {
  children: ReactNode;
  fallback?: ReactNode;
}

interface State {
  hasError: boolean;
  error: Error | null;
  errorInfo: ErrorInfo | null;
  errorId: string;
  showDetails: boolean;
}

class ErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      hasError: false,
      error: null,
      errorInfo: null,
      errorId: ErrorBoundary.generateErrorId(),
      showDetails: false
    };
  }

  static getDerivedStateFromError(error: Error): State {
    return {
      hasError: true,
      error,
      errorInfo: null,
      errorId: ErrorBoundary.generateErrorId(),
      showDetails: false
    };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    this.setState({
      error,
      errorInfo
    });

    // Send to error tracking service
    try {
      if (typeof window !== 'undefined' && window.gtag) {
        window.gtag('event', 'exception', {
          description: error.message,
          fatal: false,
          error_id: this.state.errorId
        });
      }
    } catch {
      // Silently handle errors in production
    }

    // Send to custom error tracking endpoint
    try {
      if (typeof window !== 'undefined' && 'fetch' in window) {
        fetch('/api/error-reporting', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            error: {
              message: error.message,
              stack: error.stack,
              name: error.name
            },
            errorInfo: {
              componentStack: errorInfo.componentStack
            },
            errorId: this.state.errorId,
            url: window.location.href,
            userAgent: navigator.userAgent,
            timestamp: new Date().toISOString()
          })
        }).catch(() => {
          // Silently handle errors in production
        });
      }
    } catch {
      // Silently handle errors in production
    }
  }

  private static generateErrorId(): string {
    return `error_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
  }

  private handleRetry = () => {
    this.setState({
      hasError: false,
      error: null,
      errorInfo: null,
      errorId: ErrorBoundary.generateErrorId(),
      showDetails: false
    });
  };

  private handleGoBack = () => {
    if (typeof window !== 'undefined' && window.history.length > 1) {
      window.history.back();
    } else {
      window.location.href = '/';
    }
  };

  private toggleDetails = () => {
    this.setState(prevState => ({
      showDetails: !prevState.showDetails
    }));
  };

  render() {
    if (this.state.hasError) {
      const { error, errorInfo, errorId, showDetails } = this.state;

      return (
        <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900 text-white flex items-center justify-center p-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-2xl w-full"
          >
            {/* Error Header */}
            <div className="text-center mb-8">
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="w-20 h-20 bg-red-500/20 rounded-full flex items-center justify-center mx-auto mb-6"
              >
                <AlertTriangle className="w-10 h-10 text-red-400" />
              </motion.div>
              <h1 className="text-3xl font-bold mb-4">Oops! Something went wrong</h1>
              <p className="text-gray-400 text-lg">
                We've encountered an unexpected error. Our team has been notified.
              </p>
              <div className="mt-4 text-sm text-gray-500">
                Error ID: <code className="bg-gray-800 px-2 py-1 rounded">{errorId}</code>
              </div>
            </div>

            {/* Error Details */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-6 mb-6"
            >
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-lg font-semibold text-red-400">Error Details</h2>
                <button
                  onClick={this.toggleDetails}
                  className="flex items-center space-x-2 text-gray-400 hover:text-white transition-colors"
                >
                  <span>{showDetails ? 'Hide' : 'Show'} Details</span>
                  <ChevronDown className={`w-4 h-4 transition-transform ${showDetails ? 'rotate-180' : ''}`} />
                </button>
              </div>

              {showDetails && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.3 }}
                  className="space-y-4"
                >
                  {error && (
                    <div>
                      <h3 className="font-medium text-gray-300 mb-2">Error Message:</h3>
                      <div className="bg-gray-900 p-3 rounded-lg text-red-300 font-mono text-sm overflow-x-auto">
                        {error.message}
                      </div>
                    </div>
                  )}

                  {errorInfo && (
                    <div>
                      <h3 className="font-medium text-gray-300 mb-2">Component Stack:</h3>
                      <div className="bg-gray-900 p-3 rounded-lg text-gray-300 font-mono text-sm overflow-x-auto max-h-40 overflow-y-auto">
                        {errorInfo.componentStack}
                      </div>
                    </div>
                  )}

                  {error?.stack && (
                    <div>
                      <h3 className="font-medium text-gray-300 mb-2">Stack Trace:</h3>
                      <div className="bg-gray-900 p-3 rounded-lg text-gray-300 font-mono text-sm overflow-x-auto max-h-40 overflow-y-auto">
                        {error.stack}
                      </div>
                    </div>
                  )}
                </motion.div>
              )}
            </motion.div>

            {/* Action Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <button
                onClick={this.handleRetry}
                className="flex items-center justify-center space-x-2 px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-medium rounded-xl hover:from-blue-700 hover:to-purple-700 transition-all duration-200 transform hover:scale-105"
              >
                <RefreshCw className="w-5 h-5" />
                <span>Try Again</span>
              </button>

              <button
                onClick={this.handleGoBack}
                className="flex items-center justify-center space-x-2 px-6 py-3 border-2 border-white/30 text-white font-medium rounded-xl hover:border-white/60 hover:bg-white/10 transition-all duration-200"
              >
                <ArrowLeft className="w-5 h-5" />
                <span>Go Back</span>
              </button>

              <Link
                href="/"
                className="flex items-center justify-center space-x-2 px-6 py-3 border-2 border-white/30 text-white font-medium rounded-xl hover:border-white/60 hover:bg-white/10 transition-all duration-200"
              >
                <Home className="w-5 h-5" />
                <span>Go Home</span>
              </Link>
            </motion.div>

            {/* Additional Help */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="mt-8 text-center"
            >
              <p className="text-gray-400 mb-4">
                If this problem persists, please contact our support team.
              </p>
              <div className="flex items-center justify-center space-x-6 text-sm">
                <Link
                  href="/contact"
                  className="flex items-center space-x-2 text-blue-400 hover:text-blue-300 transition-colors"
                >
                  <Bug className="w-4 h-4" />
                  <span>Report Issue</span>
                </Link>
                <Link
                  href="/support"
                  className="flex items-center justify-center space-x-2 text-blue-400 hover:text-blue-300 transition-colors"
                >
                  <Bug className="w-4 h-4" />
                  <span>Get Help</span>
                </Link>
              </div>
            </motion.div>
          </motion.div>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;