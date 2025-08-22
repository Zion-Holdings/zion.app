import React, { Component, ErrorInfo, ReactNode } from 'react';

interface Props {
  children: ReactNode;
  fallback?: ReactNode;
  onError?: (error: Error, errorInfo: ErrorInfo) => void;
  className?: string;
}

interface State {
  hasError: boolean;
  error: Error | null;
  errorInfo: ErrorInfo | null;
}

class ErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      hasError: false,
      error: null,
      errorInfo: null
    };
  }

  static getDerivedStateFromError(error: Error): State {
    return {
      hasError: true,
      error,
      errorInfo: null
    };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    this.setState({
      error,
      errorInfo
    });

    // Call the onError callback if provided
    if (this.props.onError) {
      this.props.onError(error, errorInfo);
    }

    // Send error report to API
    this.reportError(error, errorInfo);
  }

  private reportError = async (error: Error, errorInfo: ErrorInfo) => {
    try {
      const errorReport = {
        message: error.message,
        stack: error.stack,
        componentStack: errorInfo.componentStack,
        timestamp: new Date().toISOString(),
        url: typeof window !== 'undefined' ? window.location.href : 'unknown',
        userAgent: typeof navigator !== 'undefined' ? navigator.userAgent : 'unknown',
        viewport: typeof window !== 'undefined' ? {
          width: window.innerWidth,
          height: window.innerHeight
        } : null
      };

      await fetch('/api/error-reporting', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(errorReport)
      });
    } catch {
      // Silently handle error reporting failures
    }
  };

  private handleRetry = () => {
    this.setState({
      hasError: false,
      error: null,
      errorInfo: null
    });
  };

  private handleReportIssue = () => {
    if (this.state.error) {
      const errorDetails = `
Error: ${this.state.error.message}
Stack: ${this.state.error.stack}
Component Stack: ${this.state.errorInfo?.componentStack}
URL: ${typeof window !== 'undefined' ? window.location.href : 'unknown'}
      `.trim();

      // Copy to clipboard if available
      if (navigator.clipboard) {
        navigator.clipboard.writeText(errorDetails).catch(() => {
          // Fallback: open email client
          const mailtoLink = `mailto:support@ziontechgroup.com?subject=Website Error Report&body=${encodeURIComponent(errorDetails)}`;
          window.open(mailtoLink);
        });
      } else {
        // Fallback: open email client
        const mailtoLink = `mailto:support@ziontechgroup.com?subject=Website Error Report&body=${encodeURIComponent(errorDetails)}`;
        window.open(mailtoLink);
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
        <div className={`min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900 flex items-center justify-center p-4 ${this.props.className || ''}`}>
          <div className="max-w-md w-full bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl p-8 text-center">
            {/* Error Icon */}
            <div className="mx-auto w-16 h-16 bg-red-500/20 rounded-full flex items-center justify-center mb-6">
              <svg className="w-8 h-8 text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z" />
              </svg>
            </div>

            {/* Error Message */}
            <h1 className="text-2xl font-bold text-white mb-4">
              Oops! Something went wrong
            </h1>
            
            <p className="text-gray-300 mb-6">
              We're sorry, but something unexpected happened. Our team has been notified and is working to fix this issue.
            </p>

            {/* Error Details (Collapsible) */}
            <details className="text-left mb-6">
              <summary className="text-sm text-gray-400 cursor-pointer hover:text-white transition-colors mb-2">
                Technical Details
              </summary>
              <div className="bg-black/30 rounded-lg p-4 text-xs text-gray-300 font-mono overflow-auto max-h-32">
                <div className="mb-2">
                  <strong>Error:</strong> {this.state.error?.message}
                </div>
                {this.state.errorInfo?.componentStack && (
                  <div>
                    <strong>Component Stack:</strong>
                    <pre className="whitespace-pre-wrap mt-1">
                      {this.state.errorInfo.componentStack}
                    </pre>
                  </div>
                )}
              </div>
            </details>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-3">
              <button
                onClick={this.handleRetry}
                className="flex-1 bg-gradient-to-r from-blue-500 to-purple-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-blue-600 hover:to-purple-700 transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-blue-400 focus:ring-offset-2 focus:ring-offset-black"
              >
                Try Again
              </button>
              
              <button
                onClick={this.handleReportIssue}
                className="flex-1 bg-white/10 text-white px-6 py-3 rounded-lg font-semibold hover:bg-white/20 transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-white/20 focus:ring-offset-2 focus:ring-offset-black"
              >
                Report Issue
              </button>
            </div>

            {/* Contact Information */}
            <div className="mt-6 pt-6 border-t border-white/10">
              <p className="text-sm text-gray-400 mb-2">
                Need immediate help?
              </p>
              <div className="flex justify-center space-x-4 text-sm">
                <a
                  href="mailto:support@ziontechgroup.com"
                  className="text-blue-400 hover:text-blue-300 transition-colors"
                >
                  Email Support
                </a>
                <a
                  href="tel:+1-800-ZION-TECH"
                  className="text-blue-400 hover:text-blue-300 transition-colors"
                >
                  Call Us
                </a>
              </div>
            </div>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;