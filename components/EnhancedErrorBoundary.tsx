import React, { Component, ErrorInfo, ReactNode } from 'react';
import { AlertTriangle, RefreshCw, Home, ArrowLeft, Bug, MessageCircle } from 'lucide-react';
import Link from 'next/link';

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
  errorId: string;
}

class EnhancedErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      hasError: false,
      error: null,
      errorInfo: null,
      showDetails: false,
      errorId: this.generateErrorId()
    };
  }

  static getDerivedStateFromError(error: Error): Partial<State> {
    return {
      hasError: true,
      error
    };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    this.setState({
      errorInfo,
      errorId: this.generateErrorId()
    });

    // Log error to monitoring service in production
    if (process.env.NODE_ENV === 'development') {
      // Log error in development mode
    }

    // Call custom error handler if provided
    if (this.props.onError) {
      this.props.onError(error, errorInfo);
    }

    // Log to external service in production
    if (process.env.NODE_ENV === 'production') {
      this.logErrorToService(error, errorInfo);
    }
  }

  private generateErrorId(): string {
    return `error_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
  }

  private logErrorToService(error: Error, errorInfo: ErrorInfo) {
    try {
      // Send error to external service (e.g., Sentry, LogRocket, etc.)
      const errorData = {
        errorId: this.state.errorId,
        message: error.message,
        stack: error.stack,
        componentStack: errorInfo.componentStack,
        timestamp: new Date().toISOString(),
        url: typeof window !== 'undefined' ? window.location.href : '',
        userAgent: typeof navigator !== 'undefined' ? navigator.userAgent : '',
        viewport: typeof window !== 'undefined' ? `${window.innerWidth}x${window.innerHeight}` : ''
      };

      // Example: Send to API endpoint
      fetch('/api/error-reporting', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(errorData),
      }).catch(() => {
        // Silently fail if error reporting fails
      });
    } catch {
      // Silently fail if error reporting setup fails
    }
  }

  private handleRetry = () => {
    this.setState({
      hasError: false,
      error: null,
      errorInfo: null,
      showDetails: false
    });
  };

  private handleGoHome = () => {
    window.location.href = '/';
  };

  private handleGoBack = () => {
    if (typeof window !== 'undefined' && window.history.length > 1) {
      window.history.back();
    } else {
      this.handleGoHome();
    }
  };

  private toggleDetails = () => {
    this.setState(prevState => ({
      showDetails: !prevState.showDetails
    }));
  };

  private copyErrorDetails = async () => {
    if (!this.state.error || !this.state.errorInfo) return;

    const errorText = `
Error ID: ${this.state.errorId}
Error: ${this.state.error.message}
Stack: ${this.state.error.stack}
Component Stack: ${this.state.errorInfo.componentStack}
URL: ${typeof window !== 'undefined' ? window.location.href : ''}
Timestamp: ${new Date().toISOString()}
    `.trim();

    try {
      await navigator.clipboard.writeText(errorText);
      // You could add a toast notification here
    } catch {
      // Fallback for older browsers
      const textArea = document.createElement('textarea');
      textArea.value = errorText;
      document.body.appendChild(textArea);
      textArea.select();
      document.execCommand('copy');
      document.body.removeChild(textArea);
    }
  };

  render() {
    if (this.state.hasError) {
      // Custom fallback UI
      if (this.props.fallback) {
        return this.props.fallback;
      }

      return (
        <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900 flex items-center justify-center p-4">
          <div className="max-w-2xl mx-auto text-center">
            {/* Error Icon */}
            <div className="w-24 h-24 bg-gradient-to-r from-red-500 to-orange-500 rounded-full flex items-center justify-center mx-auto mb-8">
              <AlertTriangle className="w-12 h-12 text-white" />
            </div>

            {/* Error Message */}
            <h1 className="text-3xl font-bold text-white mb-4">
              Oops! Something went wrong
            </h1>
            
            <p className="text-gray-300 text-lg mb-8 leading-relaxed">
              We're sorry, but something unexpected happened. Our team has been notified and is working to fix this issue.
            </p>

            {/* Error ID */}
            <div className="bg-gray-800/50 rounded-lg p-4 mb-8">
              <p className="text-gray-400 text-sm mb-2">Error ID:</p>
              <code className="text-cyan-400 font-mono text-sm break-all">
                {this.state.errorId}
              </code>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
              <button
                onClick={this.handleRetry}
                className="px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-lg font-medium hover:from-cyan-600 hover:to-blue-600 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:ring-offset-2 focus:ring-offset-black flex items-center gap-2"
              >
                <RefreshCw className="w-5 h-5" />
                Try Again
              </button>

              <button
                onClick={this.handleGoBack}
                className="px-6 py-3 border-2 border-gray-600 text-gray-300 rounded-lg font-medium hover:border-gray-500 hover:text-white transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 focus:ring-offset-black flex items-center gap-2"
              >
                <ArrowLeft className="w-5 h-5" />
                Go Back
              </button>

              <Link href="/">
                <button className="px-6 py-3 border-2 border-cyan-500 text-cyan-400 rounded-lg font-medium hover:bg-cyan-500 hover:text-white transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:ring-offset-2 focus:ring-offset-black flex items-center gap-2">
                  <Home className="w-5 h-5" />
                  Go Home
                </button>
              </Link>
            </div>

            {/* Additional Options */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
              <button
                onClick={this.toggleDetails}
                className="px-4 py-2 text-gray-400 hover:text-white transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 focus:ring-offset-black rounded-lg flex items-center gap-2"
              >
                <Bug className="w-4 h-4" />
                {this.state.showDetails ? 'Hide' : 'Show'} Details
              </button>

              <button
                onClick={this.copyErrorDetails}
                className="px-4 py-2 text-gray-400 hover:text-white transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 focus:ring-offset-black rounded-lg flex items-center gap-2"
              >
                Copy Error Details
              </button>
            </div>

            {/* Error Details */}
            {this.state.showDetails && (
              <div className="bg-gray-800/50 rounded-lg p-6 text-left mb-8">
                <h3 className="text-lg font-semibold text-white mb-4">Error Details</h3>
                
                {this.state.error && (
                  <div className="mb-4">
                    <h4 className="text-red-400 font-medium mb-2">Error Message:</h4>
                    <p className="text-gray-300 font-mono text-sm break-words">
                      {this.state.error.message}
                    </p>
                  </div>
                )}

                {this.state.error?.stack && (
                  <div className="mb-4">
                    <h4 className="text-red-400 font-medium mb-2">Stack Trace:</h4>
                    <pre className="text-gray-300 font-mono text-xs overflow-x-auto bg-gray-900/50 p-3 rounded border border-gray-700">
                      {this.state.error.stack}
                    </pre>
                  </div>
                )}

                {this.state.errorInfo?.componentStack && (
                  <div className="mb-4">
                    <h4 className="text-red-400 font-medium mb-2">Component Stack:</h4>
                    <pre className="text-gray-300 font-mono text-xs overflow-x-auto bg-gray-900/50 p-3 rounded border border-gray-700">
                      {this.state.errorInfo.componentStack}
                    </pre>
                  </div>
                )}
              </div>
            )}

            {/* Contact Support */}
            <div className="bg-gradient-to-r from-cyan-900/20 to-blue-900/20 rounded-lg p-6 border border-cyan-500/20">
              <h3 className="text-lg font-semibold text-white mb-2">Need Help?</h3>
              <p className="text-gray-300 mb-4">
                If this problem persists, please contact our support team with the Error ID above.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <Link href="/contact">
                  <button className="px-4 py-2 bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-lg font-medium hover:from-cyan-600 hover:to-blue-600 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:ring-offset-2 focus:ring-offset-black flex items-center gap-2">
                    <MessageCircle className="w-4 h-4" />
                    Contact Support
                  </button>
                </Link>
                <a
                  href="mailto:kleber@ziontechgroup.com?subject=Error Report - ID: ${this.state.errorId}"
                  className="px-4 py-2 border-2 border-cyan-500 text-cyan-400 rounded-lg font-medium hover:bg-cyan-500 hover:text-white transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:ring-offset-2 focus:ring-offset-black flex items-center gap-2"
                >
                  Email Support
                </a>
              </div>
            </div>

            {/* Footer */}
            <div className="mt-8 text-center">
              <p className="text-gray-500 text-sm">
                Zion Tech Group - Revolutionary Technology Solutions
              </p>
            </div>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

export default EnhancedErrorBoundary;