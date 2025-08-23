import React, { Component, ErrorInfo, ReactNode } from 'react';
import { motion } from 'framer-motion';
import { 
  AlertTriangle, RefreshCw, Home, ArrowLeft, 
  Bug, Shield, Zap, MessageCircle
} from 'lucide-react';
import { AnimatePresence } from 'framer-motion';

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
      errorId: '',
      showDetails: false
    };
  }

  static getDerivedStateFromError(error: Error): Partial<State> {
    // Generate unique error ID for tracking
    const errorId = `error_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
    
    return {
      hasError: true,
      error,
      errorId,
      showDetails: false
    };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    this.setState({ errorInfo });
    
    // Call custom error handler if provided
    if (this.props.onError) {
      this.props.onError(error, errorInfo);
    }

    // Send error to analytics/error tracking service
    this.trackError(error, errorInfo);
  }

  trackError = (error: Error, errorInfo: ErrorInfo) => {
    try {
      // Send to error tracking service
      if (typeof window !== 'undefined' && window.gtag) {
        window.gtag('event', 'exception', {
          description: error.message,
          fatal: false,
          error_id: this.state.errorId,
          stack_trace: error.stack,
          component_stack: errorInfo.componentStack
        });
      }

      // Send to custom error endpoint
      if (process.env.NODE_ENV === 'production') {
        fetch('/api/errors', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            errorId: this.state.errorId,
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
      }
    } catch {
      // Silently handle tracking errors
    }
  };

  handleRetry = () => {
    this.setState({
      hasError: false,
      error: null,
      errorInfo: null,
      errorId: '',
      showDetails: false
    });
  };

  handleGoHome = () => {
    window.location.href = '/';
  };

  handleGoBack = () => {
    window.history.back();
  };

  toggleDetails = () => {
    this.setState(prevState => ({
      showDetails: !prevState.showDetails
    }));
  };

  render() {
    if (this.state.hasError) {
      // Custom fallback UI
      if (this.props.fallback) {
        return this.props.fallback;
      }

      // Default error UI
      return (
        <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900 flex items-center justify-center p-4">
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="max-w-2xl w-full bg-gray-800/50 backdrop-blur-xl border border-gray-700/50 rounded-2xl p-8 text-center"
          >
            {/* Error Icon */}
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="w-20 h-20 bg-gradient-to-r from-red-500/20 to-orange-500/20 border border-red-500/30 rounded-full flex items-center justify-center mx-auto mb-6"
            >
              <AlertTriangle className="w-10 h-10 text-red-400" />
            </motion.div>

            {/* Error Message */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="text-3xl font-bold text-white mb-4"
            >
              Oops! Something went wrong
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="text-gray-300 mb-8 text-lg"
            >
              We encountered an unexpected error while loading this page. 
              Our team has been notified and is working to fix it.
            </motion.p>

            {/* Error ID */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="bg-gray-700/50 border border-gray-600/50 rounded-lg p-4 mb-6"
            >
              <p className="text-sm text-gray-400 mb-2">Error Reference ID:</p>
              <code className="text-cyan-400 font-mono text-sm break-all">
                {this.state.errorId}
              </code>
            </motion.div>

            {/* Action Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-4 justify-center mb-6"
            >
              <button
                onClick={this.handleRetry}
                className="flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-xl hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-cyan-500/25"
              >
                <RefreshCw className="w-5 h-5" />
                Try Again
              </button>
              
              <button
                onClick={this.handleGoBack}
                className="flex items-center justify-center gap-2 px-6 py-3 border-2 border-gray-600 text-gray-300 font-semibold rounded-xl hover:border-gray-500 hover:text-white transition-all duration-300 transform hover:scale-105"
              >
                <ArrowLeft className="w-5 h-5" />
                Go Back
              </button>
              
              <button
                onClick={this.handleGoHome}
                className="flex items-center justify-center gap-2 px-6 py-3 border-2 border-gray-600 text-gray-300 font-semibold rounded-xl hover:border-gray-500 hover:text-white transition-all duration-300 transform hover:scale-105"
              >
                <Home className="w-5 h-5" />
                Go Home
              </button>
            </motion.div>

            {/* Additional Help */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.7 }}
              className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6"
            >
              <div className="flex items-center justify-center gap-2 text-gray-400 hover:text-cyan-400 transition-colors cursor-pointer">
                <Bug className="w-4 h-4" />
                <span className="text-sm">Report Bug</span>
              </div>
              <div className="flex items-center justify-center gap-2 text-gray-400 hover:text-cyan-400 transition-colors cursor-pointer">
                <MessageCircle className="w-4 h-4" />
                <span className="text-sm">Get Help</span>
              </div>
              <div className="flex items-center justify-center gap-2 text-gray-400 hover:text-cyan-400 transition-colors cursor-pointer">
                <Shield className="w-4 h-4" />
                <span className="text-sm">Status Page</span>
              </div>
            </motion.div>

            {/* Error Details Toggle */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.8 }}
              className="border-t border-gray-700/50 pt-6"
            >
              <button
                onClick={this.toggleDetails}
                className="flex items-center justify-center gap-2 mx-auto text-gray-400 hover:text-cyan-400 transition-colors"
              >
                <Zap className="w-4 h-4" />
                <span className="text-sm">
                  {this.state.showDetails ? 'Hide' : 'Show'} Technical Details
                </span>
              </button>
            </motion.div>

            {/* Error Details */}
            <AnimatePresence>
              {this.state.showDetails && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.3 }}
                  className="mt-6 text-left"
                >
                  <div className="bg-gray-900/50 border border-gray-700/50 rounded-lg p-4 space-y-4">
                    {this.state.error && (
                      <div>
                        <h4 className="text-red-400 font-semibold mb-2">Error Message:</h4>
                        <code className="text-red-300 text-sm break-all">
                          {this.state.error.message}
                        </code>
                      </div>
                    )}
                    
                    {this.state.error && this.state.error.stack && (
                      <div>
                        <h4 className="text-red-400 font-semibold mb-2">Stack Trace:</h4>
                        <pre className="text-red-300 text-xs overflow-auto max-h-40 bg-gray-800/50 p-3 rounded border border-gray-700/50">
                          {this.state.error.stack}
                        </pre>
                      </div>
                    )}
                    
                    {this.state.errorInfo && (
                      <div>
                        <h4 className="text-red-400 font-semibold mb-2">Component Stack:</h4>
                        <pre className="text-red-300 text-xs overflow-auto max-h-40 bg-gray-800/50 p-3 rounded border border-gray-700/50">
                          {this.state.errorInfo.componentStack}
                        </pre>
                      </div>
                    )}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;