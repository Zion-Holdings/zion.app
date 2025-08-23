import React, { Component, ErrorInfo, ReactNode } from 'react';
import { motion } from 'framer-motion';
import { AlertTriangle, RefreshCw, Home, Mail, Bug } from 'lucide-react';
import Link from 'next/link';

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

class EnhancedErrorBoundary extends Component<Props, State> {
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

    // Log error to console in development
    if (process.env.NODE_ENV === 'development') {
      console.error('Error caught by boundary:', error, errorInfo);
    }

    // Send error to monitoring service in production
    if (process.env.NODE_ENV === 'production') {
      this.logErrorToService(error, errorInfo, errorId);
    }
  }

  private logErrorToService(error: Error, errorInfo: ErrorInfo, errorId: string) {
    try {
      // This would typically send to a service like Sentry, LogRocket, etc.
      const errorData = {
        errorId,
        message: error.message,
        stack: error.stack,
        componentStack: errorInfo.componentStack,
        timestamp: new Date().toISOString(),
        url: typeof window !== 'undefined' ? window.location.href : 'unknown',
        userAgent: typeof navigator !== 'undefined' ? navigator.userAgent : 'unknown'
      };

      // Example: Send to analytics or monitoring service
      if (typeof window !== 'undefined' && (window as any).gtag) {
        (window as any).gtag('event', 'exception', {
          description: error.message,
          fatal: false,
          custom_parameter: errorId
        });
      }

      console.log('Error logged to service:', errorData);
    } catch (loggingError) {
      console.error('Failed to log error to service:', loggingError);
    }
  }

  private handleRetry = () => {
    this.setState({ hasError: false, error: undefined, errorInfo: undefined, errorId: undefined });
  };

  private handleReportError = () => {
    const { error, errorInfo, errorId } = this.state;
    
    if (!error) return;

    const errorReport = `
Error Report (ID: ${errorId})

Error: ${error.message}
Stack: ${error.stack}

Component Stack: ${errorInfo?.componentStack}

URL: ${typeof window !== 'undefined' ? window.location.href : 'unknown'}
User Agent: ${typeof navigator !== 'undefined' ? navigator.userAgent : 'unknown'}
Timestamp: ${new Date().toISOString()}
    `;

    // Copy to clipboard
    if (navigator.clipboard) {
      navigator.clipboard.writeText(errorReport).then(() => {
        // Use a more modern approach instead of alert
        if (typeof window !== 'undefined') {
          const notification = document.createElement('div');
          notification.style.cssText = `
            position: fixed;
            top: 20px;
            right: 20px;
            background: #10b981;
            color: white;
            padding: 16px;
            border-radius: 8px;
            z-index: 10000;
            font-family: system-ui, sans-serif;
            box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
          `;
          notification.textContent = 'Error report copied to clipboard. Please send this to support.';
          document.body.appendChild(notification);
          
          setTimeout(() => {
            if (document.body.contains(notification)) {
              document.body.removeChild(notification);
            }
          }, 5000);
        }
      });
    } else {
      // Fallback for older browsers
      const textArea = document.createElement('textarea');
      textArea.value = errorReport;
      document.body.appendChild(textArea);
      textArea.select();
      document.execCommand('copy');
      document.body.removeChild(textArea);
      
      // Use the same notification approach
      if (typeof window !== 'undefined') {
        const notification = document.createElement('div');
        notification.style.cssText = `
          position: fixed;
          top: 20px;
          right: 20px;
          background: #10b981;
          color: white;
          padding: 16px;
          border-radius: 8px;
          z-index: 10000;
          font-family: system-ui, sans-serif;
          box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
        `;
        notification.textContent = 'Error report copied to clipboard. Please send this to support.';
        document.body.appendChild(notification);
        
        setTimeout(() => {
          if (document.body.contains(notification)) {
            document.body.removeChild(notification);
          }
        }, 5000);
      }
    }
  };

  render() {
    if (this.state.hasError) {
      // Custom fallback UI
      if (this.props.fallback) {
        return this.props.fallback;
      }

      // Default error UI
      return (
        <div className="min-h-screen bg-black text-white flex items-center justify-center p-4">
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
              transition={{ delay: 0.2, type: 'spring', stiffness: 200 }}
              className="w-24 h-24 bg-red-500/20 rounded-full flex items-center justify-center mx-auto mb-8"
            >
              <AlertTriangle className="w-12 h-12 text-red-400" />
            </motion.div>

            {/* Error Message */}
            <h1 className="text-3xl font-bold mb-4 text-red-400">
              Oops! Something went wrong
            </h1>
            
            <p className="text-gray-300 mb-8 text-lg">
              We're sorry, but something unexpected happened. Our team has been notified and is working to fix this issue.
            </p>

            {/* Error Details (Development Only) */}
            {process.env.NODE_ENV === 'development' && this.state.error && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                transition={{ delay: 0.4 }}
                className="mb-8 p-4 bg-red-500/10 border border-red-500/20 rounded-lg text-left"
              >
                <h3 className="text-red-400 font-semibold mb-2">Error Details:</h3>
                <p className="text-red-300 text-sm mb-2">{this.state.error.message}</p>
                <details className="text-xs text-gray-400">
                  <summary className="cursor-pointer hover:text-gray-300">Stack Trace</summary>
                  <pre className="mt-2 whitespace-pre-wrap">{this.state.error.stack}</pre>
                </details>
              </motion.div>
            )}

            {/* Error ID */}
            {this.state.errorId && (
              <div className="mb-8 p-3 bg-gray-800/50 rounded-lg">
                <p className="text-gray-400 text-sm">
                  Error ID: <code className="text-cyan-400">{this.state.errorId}</code>
                </p>
                <p className="text-gray-500 text-xs mt-1">
                  Please include this ID when reporting the issue
                </p>
              </div>
            )}

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={this.handleRetry}
                className="flex items-center justify-center space-x-2 px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-300"
              >
                <RefreshCw className="w-4 h-4" />
                <span>Try Again</span>
              </motion.button>

              <Link href="/">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex items-center justify-center space-x-2 px-6 py-3 border-2 border-cyan-400 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-400 hover:text-black transition-all duration-300"
                >
                  <Home className="w-4 h-4" />
                  <span>Go Home</span>
                </motion.button>
              </Link>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={this.handleReportError}
                className="flex items-center justify-center space-x-2 px-6 py-3 border-2 border-red-400 text-red-400 font-semibold rounded-lg hover:bg-red-400 hover:text-black transition-all duration-300"
              >
                <Bug className="w-4 h-4" />
                <span>Report Issue</span>
              </motion.button>
            </div>

            {/* Contact Support */}
            <div className="mt-8 p-4 bg-gray-800/30 rounded-lg">
              <p className="text-gray-400 mb-2">Still having issues?</p>
              <Link href="/contact" className="inline-flex items-center space-x-2 text-cyan-400 hover:text-cyan-300 transition-colors">
                <Mail className="w-4 h-4" />
                <span>Contact Support</span>
              </Link>
            </div>
          </motion.div>
        </div>
      );
    }

    return this.props.children;
  }
}

export default EnhancedErrorBoundary;