import React, { Component, ErrorInfo, ReactNode } from 'react';
import { motion } from 'framer-motion';
import { AlertTriangle, RefreshCw, Home, Mail, Phone, ArrowLeft } from 'lucide-react';

interface Props {
  children: ReactNode;
  fallback?: ReactNode;
}

interface State {
  hasError: boolean;
  error?: Error;
  errorInfo?: ErrorInfo;
  errorId?: string;
}

class ErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    // Generate unique error ID for tracking
    const errorId = `error-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;
    
    this.setState({
      error,
      errorInfo,
      errorId
    });

    // Send error to analytics if available
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', 'exception', {
        description: error.message,
        fatal: false,
        custom_parameter_1: errorId,
        custom_parameter_2: errorInfo.componentStack
      });
    }

    // Send error to error reporting service (if configured)
    this.reportError(error, errorInfo, errorId);
  }

  private reportError = (error: Error, errorInfo: ErrorInfo, errorId: string) => {
    // You can integrate with services like Sentry, LogRocket, etc.
    try {
      fetch('/api/error-reporting', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          errorId,
          message: error.message,
          stack: error.stack,
          componentStack: errorInfo.componentStack,
          url: window.location.href,
          userAgent: navigator.userAgent,
          timestamp: new Date().toISOString()
        })
      }).catch(() => {
        // Silently handle fetch errors
      });
    } catch {
      // Silently handle reporting errors
    }
  };

  private handleRetry = () => {
    this.setState({ hasError: false, error: undefined, errorInfo: undefined, errorId: undefined });
  };

  private handleGoHome = () => {
    window.location.href = '/';
  };

  private handleContactSupport = () => {
    window.location.href = '/contact';
  };

  private handleGoBack = () => {
    window.history.back();
  };

  render() {
    if (this.state.hasError) {
      // Custom fallback UI
      if (this.props.fallback) {
        return this.props.fallback;
      }

      // Default error UI
      return (
        <div className="min-h-screen bg-black text-white flex items-center justify-center px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-2xl mx-auto text-center"
          >
            {/* Error Icon */}
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="mb-8"
            >
              <div className="w-24 h-24 mx-auto bg-gradient-to-r from-red-500 to-red-600 rounded-full flex items-center justify-center">
                <AlertTriangle className="w-12 h-12 text-white" />
              </div>
            </motion.div>

            {/* Error Message */}
            <motion.h1
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-red-400 to-red-600 bg-clip-text text-transparent"
            >
              Oops! Something went wrong
            </motion.h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="text-lg text-gray-400 mb-8"
            >
              We're sorry, but something unexpected happened. Our team has been notified and is working to fix this issue.
            </motion.p>

            {/* Error Details (Development Only) */}
            {process.env.NODE_ENV === 'development' && this.state.error && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className="mb-8 p-4 bg-gray-800 rounded-lg text-left"
              >
                <details className="text-sm">
                  <summary className="cursor-pointer text-cyan-400 hover:text-cyan-300 mb-2">
                    Error Details (Development)
                  </summary>
                  <div className="space-y-2 text-gray-300">
                    <div>
                      <strong>Error ID:</strong> {this.state.errorId}
                    </div>
                    <div>
                      <strong>Message:</strong> {this.state.error.message}
                    </div>
                    <div>
                      <strong>Stack:</strong>
                      <pre className="mt-2 text-xs bg-gray-900 p-2 rounded overflow-x-auto">
                        {this.state.error.stack}
                      </pre>
                    </div>
                  </div>
                </details>
              </motion.div>
            )}

            {/* Action Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <button
                onClick={this.handleRetry}
                className="flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105"
              >
                <RefreshCw className="w-5 h-5" />
                Try Again
              </button>

              <button
                onClick={this.handleGoBack}
                className="flex items-center justify-center gap-2 px-6 py-3 border-2 border-gray-600 text-gray-300 font-semibold rounded-lg hover:border-gray-500 hover:text-white transition-all duration-300"
              >
                <ArrowLeft className="w-5 h-5" />
                Go Back
              </button>

              <button
                onClick={this.handleGoHome}
                className="flex items-center justify-center gap-2 px-6 py-3 border-2 border-gray-600 text-gray-300 font-semibold rounded-lg hover:border-gray-500 hover:text-white transition-all duration-300"
              >
                <Home className="w-5 h-5" />
                Go Home
              </button>
            </motion.div>

            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.7 }}
              className="mt-12 p-6 bg-gradient-to-r from-gray-800/50 to-gray-900/50 rounded-xl border border-gray-700/50"
            >
              <h3 className="text-lg font-semibold mb-4 text-cyan-400">
                Need Help?
              </h3>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="mailto:kleber@ziontechgroup.com"
                  className="flex items-center justify-center gap-2 px-4 py-2 text-gray-300 hover:text-cyan-400 transition-colors duration-300"
                >
                  <Mail className="w-4 h-4" />
                  Email Support
                </a>
                <a
                  href="tel:+13024640950"
                  className="flex items-center justify-center gap-2 px-4 py-2 text-gray-300 hover:text-cyan-400 transition-colors duration-300"
                >
                  <Phone className="w-4 h-4" />
                  Call Support
                </a>
                <button
                  onClick={this.handleContactSupport}
                  className="flex items-center justify-center gap-2 px-4 py-2 text-gray-300 hover:text-cyan-400 transition-colors duration-300"
                >
                  Contact Form
                </button>
              </div>
            </motion.div>

            {/* Error ID for Support */}
            {this.state.errorId && (
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.8 }}
                className="mt-6 text-sm text-gray-500"
              >
                Error ID: {this.state.errorId}
              </motion.p>
            )}
          </motion.div>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;