import React, { Component, ErrorInfo, ReactNode } from 'react';
import { motion } from 'framer-motion';
import { 
  AlertTriangle, RefreshCw, Bug, 
  Home, ArrowLeft, X, Info,
  FileText, Terminal, Shield
} from 'lucide-react';
import { AnimatePresence } from 'framer-motion';

interface Props {
  children: ReactNode;
  fallback?: ReactNode;
  onError?: (error: Error, errorInfo: ErrorInfo) => void;
  showDetails?: boolean;
  allowRetry?: boolean;
  showHomeButton?: boolean;
}

interface State {
  hasError: boolean;
  error: Error | null;
  errorInfo: ErrorInfo | null;
  showDetails: boolean;
  retryCount: number;
}

class ErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      hasError: false,
      error: null,
      errorInfo: null,
      showDetails: false,
      retryCount: 0
    };
  }

  static getDerivedStateFromError(error: Error): State {
    return {
      hasError: true,
      error,
      errorInfo: null,
      showDetails: false,
      retryCount: 0
    };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('ErrorBoundary caught an error:', error, errorInfo);
    
    this.setState({
      error,
      errorInfo
    });

    // Call custom error handler if provided
    if (this.props.onError) {
      this.props.onError(error, errorInfo);
    }

    // Log to external service in production
    if (process.env.NODE_ENV === 'production') {
      this.logErrorToService(error, errorInfo);
    }
  }

  private logErrorToService = (error: Error, errorInfo: ErrorInfo) => {
    try {
      // Example: Send to error reporting service
      // analytics.track('error', { error: error.message, stack: error.stack });
      console.log('Error logged to service:', { error: error.message, stack: error.stack });
    } catch (logError) {
      console.error('Failed to log error to service:', logError);
    }
  };

  private handleRetry = () => {
    this.setState(prevState => ({
      hasError: false,
      error: null,
      errorInfo: null,
      retryCount: prevState.retryCount + 1
    }));
  };

  private handleGoHome = () => {
    window.location.href = '/';
  };

  private handleGoBack = () => {
    window.history.back();
  };

  private toggleDetails = () => {
    this.setState(prevState => ({
      showDetails: !prevState.showDetails
    }));
  };

  private copyErrorDetails = () => {
    if (this.state.error && this.state.errorInfo) {
      const errorDetails = `
Error: ${this.state.error.message}
Stack: ${this.state.error.stack}
Component Stack: ${this.state.errorInfo.componentStack}
      `.trim();
      
      navigator.clipboard.writeText(errorDetails).then(() => {
        // Show success feedback
        console.log('Error details copied to clipboard');
      }).catch(() => {
        console.error('Failed to copy error details');
      });
    }
  };

  render() {
    if (this.state.hasError) {
      // Custom fallback UI
      if (this.props.fallback) {
        return this.props.fallback;
      }

      const { error, errorInfo, showDetails, retryCount } = this.state;
      const { allowRetry = true, showHomeButton = true } = this.props;

      return (
        <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900 flex items-center justify-center p-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="max-w-2xl w-full bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-8 shadow-2xl"
          >
            {/* Header */}
            <div className="text-center mb-8">
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
                className="w-20 h-20 mx-auto mb-6 bg-red-500/20 rounded-full flex items-center justify-center border border-red-500/30"
              >
                <AlertTriangle className="w-10 h-10 text-red-400" />
              </motion.div>
              
              <h1 className="text-3xl font-bold text-white mb-2">
                Oops! Something went wrong
              </h1>
              <p className="text-gray-400 text-lg">
                We encountered an unexpected error. Don't worry, our team has been notified.
              </p>
            </div>

            {/* Error Message */}
            {error && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="bg-red-500/10 border border-red-500/20 rounded-lg p-4 mb-6"
              >
                <div className="flex items-start gap-3">
                  <Bug className="w-5 h-5 text-red-400 mt-0.5 flex-shrink-0" />
                  <div className="flex-1">
                    <h3 className="text-red-400 font-semibold mb-1">Error Details</h3>
                    <p className="text-red-300 text-sm">{error.message}</p>
                  </div>
                </div>
              </motion.div>
            )}

            {/* Action Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="flex flex-wrap gap-4 justify-center mb-6"
            >
              {allowRetry && (
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={this.handleRetry}
                  className="flex items-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors duration-200"
                >
                  <RefreshCw className="w-4 h-4" />
                  Try Again
                  {retryCount > 0 && (
                    <span className="text-xs bg-blue-500 px-2 py-1 rounded-full">
                      {retryCount}
                    </span>
                  )}
                </motion.button>
              )}

              {showHomeButton && (
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={this.handleGoHome}
                  className="flex items-center gap-2 px-6 py-3 bg-gray-600 hover:bg-gray-700 text-white font-medium rounded-lg transition-colors duration-200"
                >
                  <Home className="w-4 h-4" />
                  Go Home
                </motion.button>
              )}

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={this.handleGoBack}
                className="flex items-center gap-2 px-6 py-3 bg-gray-600 hover:bg-gray-700 text-white font-medium rounded-lg transition-colors duration-200"
              >
                <ArrowLeft className="w-4 h-4" />
                Go Back
              </motion.button>
            </motion.div>

            {/* Technical Details Toggle */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="text-center"
            >
              <button
                onClick={this.toggleDetails}
                className="flex items-center gap-2 mx-auto text-gray-400 hover:text-white transition-colors duration-200"
              >
                <Info className="w-4 h-4" />
                {showDetails ? 'Hide' : 'Show'} Technical Details
              </button>
            </motion.div>

            {/* Technical Details */}
            <AnimatePresence>
              {showDetails && errorInfo && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.3 }}
                  className="mt-6 overflow-hidden"
                >
                  <div className="bg-gray-900/50 border border-gray-700/50 rounded-lg p-4">
                    <div className="flex items-center justify-between mb-3">
                      <h4 className="text-white font-semibold flex items-center gap-2">
                        <Terminal className="w-4 h-4" />
                        Technical Information
                      </h4>
                      <button
                        onClick={this.copyErrorDetails}
                        className="text-gray-400 hover:text-white transition-colors duration-200"
                        title="Copy error details"
                      >
                        <FileText className="w-4 h-4" />
                      </button>
                    </div>
                    
                    <div className="space-y-3 text-sm">
                      <div>
                        <span className="text-gray-400">Component Stack:</span>
                        <pre className="mt-1 text-gray-300 bg-gray-800/50 p-3 rounded border border-gray-700/50 overflow-x-auto">
                          {errorInfo.componentStack}
                        </pre>
                      </div>
                      
                      {error?.stack && (
                        <div>
                          <span className="text-gray-400">Error Stack:</span>
                          <pre className="mt-1 text-gray-300 bg-gray-800/50 p-3 rounded border border-gray-700/50 overflow-x-auto">
                            {error.stack}
                          </pre>
                        </div>
                      )}
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Footer */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="text-center mt-8 pt-6 border-t border-gray-700/50"
            >
              <div className="flex items-center justify-center gap-2 text-gray-500 text-sm">
                <Shield className="w-4 h-4" />
                <span>Error ID: {Date.now().toString(36)}</span>
                <span>•</span>
                <span>Retry Count: {retryCount}</span>
              </div>
              
              <p className="text-gray-600 text-xs mt-2">
                If this problem persists, please contact our support team
              </p>
            </motion.div>
          </motion.div>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;