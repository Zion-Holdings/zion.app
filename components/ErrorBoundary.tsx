import React, { Component, ErrorInfo, ReactNode } from 'react';
import { motion } from 'framer-motion';
import { 
  AlertTriangle, 
  RefreshCw, 
  Home, 
  Bug, 
  X, 
  Copy, 
  ExternalLink,
  MessageCircle
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
  showDetails: boolean;
  isReporting: boolean;
}

class ErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      hasError: false,
      error: null,
      errorInfo: null,
      showDetails: props.showDetails || false,
      isReporting: false
    };
  }

  static getDerivedStateFromError(error: Error): State {
    return {
      hasError: true,
      error,
      errorInfo: null,
      showDetails: false,
      isReporting: false
    };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    this.setState({
      error,
      errorInfo
    });

    // Call custom error handler if provided
    if (this.props.onError) {
      this.props.onError(error, errorInfo);
    }

    // Log error to console in development
    if (process.env.NODE_ENV === 'development') {
      console.error('ErrorBoundary caught an error:', error, errorInfo);
    }

    // In production, you might want to send this to an error reporting service
    // this.reportError(error, errorInfo);
  }

  private reportError = async (error: Error, errorInfo: ErrorInfo) => {
    this.setState({ isReporting: true });
    
    try {
      // Simulate error reporting to external service
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      // Here you would typically send the error to your error reporting service
      // await fetch('/api/error-report', {
      //   method: 'POST',
      //   headers: { 'Content-Type': 'application/json' },
      //   body: JSON.stringify({
      //     error: error.message,
      //     stack: error.stack,
      //     componentStack: errorInfo.componentStack,
      //     url: window.location.href,
      //     userAgent: navigator.userAgent,
      //     timestamp: new Date().toISOString()
      //   })
      // });
      
      console.log('Error reported successfully');
    } catch (reportError) {
      console.error('Failed to report error:', reportError);
    } finally {
      this.setState({ isReporting: false });
    }
  };

  private handleRetry = () => {
    this.setState({
      hasError: false,
      error: null,
      errorInfo: null
    });
  };

  private handleGoHome = () => {
    window.location.href = '/';
  };

  private handleCopyError = () => {
    if (this.state.error && this.state.errorInfo) {
      const errorText = `
Error: ${this.state.error.message}
Stack: ${this.state.error.stack}
Component Stack: ${this.state.errorInfo.componentStack}
URL: ${window.location.href}
User Agent: ${navigator.userAgent}
Timestamp: ${new Date().toISOString()}
      `.trim();
      
      navigator.clipboard.writeText(errorText).then(() => {
        // Show success feedback
        const button = document.querySelector('[data-copy-button]') as HTMLButtonElement;
        if (button) {
          const originalText = button.innerHTML;
          button.innerHTML = 'Copied!';
          button.classList.add('text-green-400');
          setTimeout(() => {
            button.innerHTML = originalText;
            button.classList.remove('text-green-400');
          }, 2000);
        }
      }).catch(() => {
        // Fallback for older browsers
        const textArea = document.createElement('textarea');
        textArea.value = errorText;
        document.body.appendChild(textArea);
        textArea.select();
        document.execCommand('copy');
        document.body.removeChild(textArea);
      });
    }
  };

  private toggleDetails = () => {
    this.setState(prev => ({ showDetails: !prev.showDetails }));
  };

  render() {
    if (this.state.hasError) {
      // Custom fallback UI
      if (this.props.fallback) {
        return this.props.fallback;
      }

      return (
        <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900 flex items-center justify-center p-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-2xl w-full bg-gray-800/50 backdrop-blur-xl border border-gray-700 rounded-2xl shadow-2xl overflow-hidden"
          >
            {/* Header */}
            <div className="bg-gradient-to-r from-red-600/20 to-orange-600/20 border-b border-red-500/30 p-6">
              <div className="flex items-center space-x-3">
                <div className="p-2 bg-red-500/20 rounded-lg">
                  <AlertTriangle className="w-8 h-8 text-red-400" />
                </div>
                <div>
                  <h1 className="text-2xl font-bold text-white">Something went wrong</h1>
                  <p className="text-gray-300">We encountered an unexpected error</p>
                </div>
              </div>
            </div>

            {/* Content */}
            <div className="p-6 space-y-6">
              {/* Error Message */}
              <div className="bg-gray-900/50 rounded-lg p-4 border border-gray-700">
                <h2 className="text-lg font-semibold text-white mb-2">Error Details</h2>
                <p className="text-red-400 font-mono text-sm break-words">
                  {this.state.error?.message || 'An unknown error occurred'}
                </p>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-3">
                <motion.button
                  onClick={this.handleRetry}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="flex-1 flex items-center justify-center space-x-2 px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-medium rounded-lg hover:from-cyan-600 hover:to-blue-600 transition-all duration-300"
                >
                  <RefreshCw className="w-5 h-5" />
                  <span>Try Again</span>
                </motion.button>
                
                <motion.button
                  onClick={this.handleGoHome}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="flex-1 flex items-center justify-center space-x-2 px-6 py-3 bg-gray-700 text-white font-medium rounded-lg hover:bg-gray-600 transition-all duration-300"
                >
                  <Home className="w-5 h-5" />
                  <span>Go Home</span>
                </motion.button>
              </div>

              {/* Additional Actions */}
              <div className="flex flex-wrap gap-2">
                <motion.button
                  onClick={this.toggleDetails}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="flex items-center space-x-2 px-4 py-2 bg-gray-700 text-gray-300 rounded-lg hover:bg-gray-600 transition-colors"
                >
                  <Bug className="w-4 h-4" />
                  <span>{this.state.showDetails ? 'Hide' : 'Show'} Details</span>
                </motion.button>
                
                <motion.button
                  onClick={this.handleCopyError}
                  data-copy-button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="flex items-center space-x-2 px-4 py-2 bg-gray-700 text-gray-300 rounded-lg hover:bg-gray-600 transition-colors"
                >
                  <Copy className="w-4 h-4" />
                  <span>Copy Error</span>
                </motion.button>
                
                <motion.button
                  onClick={() => this.reportError(this.state.error!, this.state.errorInfo!)}
                  disabled={this.state.isReporting}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="flex items-center space-x-2 px-4 py-2 bg-orange-600 text-white rounded-lg hover:bg-orange-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>{this.state.isReporting ? 'Reporting...' : 'Report Error'}</span>
                </motion.button>
              </div>

              {/* Error Details */}
              <AnimatePresence>
                {this.state.showDetails && this.state.error && this.state.errorInfo && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                    className="bg-gray-900/50 rounded-lg border border-gray-700 overflow-hidden"
                  >
                    <div className="p-4 border-b border-gray-700 bg-gray-800/50">
                      <h3 className="text-sm font-medium text-white">Technical Details</h3>
                    </div>
                    <div className="p-4 space-y-3">
                      <div>
                        <h4 className="text-xs font-medium text-gray-400 mb-1">Error Stack</h4>
                        <pre className="text-xs text-gray-300 bg-gray-900 p-3 rounded overflow-x-auto">
                          {this.state.error.stack}
                        </pre>
                      </div>
                      <div>
                        <h4 className="text-xs font-medium text-gray-400 mb-1">Component Stack</h4>
                        <pre className="text-xs text-gray-300 bg-gray-900 p-3 rounded overflow-x-auto">
                          {this.state.errorInfo.componentStack}
                        </pre>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Help Section */}
              <div className="bg-blue-900/20 border border-blue-500/30 rounded-lg p-4">
                <h3 className="text-sm font-medium text-blue-300 mb-2">Need Help?</h3>
                <p className="text-sm text-gray-300 mb-3">
                  If this error persists, please contact our support team or check our documentation.
                </p>
                <div className="flex flex-wrap gap-2">
                  <a
                    href="/contact"
                    className="inline-flex items-center space-x-2 px-3 py-2 bg-blue-600 text-white text-sm rounded-lg hover:bg-blue-700 transition-colors"
                  >
                    <MessageCircle className="w-4 h-4" />
                    <span>Contact Support</span>
                  </a>
                  <a
                    href="/docs"
                    className="inline-flex items-center space-x-2 px-3 py-2 bg-gray-700 text-gray-300 text-sm rounded-lg hover:bg-gray-600 transition-colors"
                  >
                    <ExternalLink className="w-4 h-4" />
                    <span>Documentation</span>
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;