import React, { Component, ErrorInfo, ReactNode } from 'react';
import { AlertTriangle, RefreshCw, Home, Bug } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface Props {
  children: ReactNode;
  fallback?: ReactNode;
  onError?: (error: Error, errorInfo: ErrorInfo) => void;
}

interface State {
  hasError: boolean;
  error: Error | null;
  errorInfo: ErrorInfo | null;
  errorId: string;
}

export class ErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      hasError: false,
      error: null,
      errorInfo: null,
      errorId: ''
    };
  }

  static getDerivedStateFromError(error: Error): Partial<State> {
    return {
      hasError: true,
      error,
      errorId: `error-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`
    };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    this.setState({
      errorInfo
    });

    // Log error to console in development
    if (process.env.NODE_ENV === 'development') {
      console.error('Error caught by boundary:', error, errorInfo);
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

  private logErrorToService = async (error: Error, errorInfo: ErrorInfo) => {
    try {
      const errorData = {
        errorId: this.state.errorId,
        message: error.message,
        stack: error.stack,
        componentStack: errorInfo.componentStack,
        timestamp: new Date().toISOString(),
        userAgent: navigator.userAgent,
        url: window.location.href,
        version: process.env.REACT_APP_VERSION || 'unknown'
      };

      // Send to error logging service (replace with your service)
      await fetch('/api/errors', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(errorData)
      });
    } catch (logError) {
      console.error('Failed to log error:', logError);
    }
  };

  private handleRetry = () => {
    this.setState({
      hasError: false,
      error: null,
      errorInfo: null,
      errorId: ''
    });
  };

  private handleGoHome = () => {
    window.location.href = '/';
  };

  private handleReportBug = () => {
    const errorDetails = `
Error ID: ${this.state.errorId}
Message: ${this.state.error?.message}
Stack: ${this.state.error?.stack}
Component Stack: ${this.state.errorInfo?.componentStack}
URL: ${window.location.href}
User Agent: ${navigator.userAgent}
    `.trim();

    const mailtoLink = `mailto:support@ziontechgroup.com?subject=Bug Report - Error ID: ${this.state.errorId}&body=${encodeURIComponent(errorDetails)}`;
    window.open(mailtoLink);
  };

  render() {
    if (this.state.hasError) {
      // Custom fallback UI
      if (this.props.fallback) {
        return this.props.fallback;
      }

      // Default error UI
      return (
        <div className="min-h-screen bg-zion-blue-dark flex items-center justify-center p-4">
          <div className="max-w-2xl w-full bg-zion-blue-light/10 backdrop-blur-md border border-zion-cyan/20 rounded-2xl p-8 text-center">
            {/* Error Icon */}
            <div className="w-20 h-20 bg-gradient-to-br from-red-500 to-orange-500 rounded-full mx-auto mb-6 flex items-center justify-center">
              <AlertTriangle className="w-10 h-10 text-white" />
            </div>

            {/* Error Title */}
            <h1 className="text-3xl font-bold text-white mb-4">
              Oops! Something went wrong
            </h1>

            {/* Error Message */}
            <p className="text-zion-slate-light mb-6 text-lg">
              We're sorry, but something unexpected happened. Our team has been notified and is working to fix this issue.
            </p>

            {/* Error Details (Development Only) */}
            {process.env.NODE_ENV === 'development' && this.state.error && (
              <details className="mb-6 text-left bg-zion-blue-dark/50 rounded-lg p-4">
                <summary className="text-zion-cyan cursor-pointer font-medium mb-2">
                  Error Details (Development)
                </summary>
                <div className="text-sm text-zion-slate-light space-y-2">
                  <div>
                    <strong>Message:</strong> {this.state.error.message}
                  </div>
                  <div>
                    <strong>Stack:</strong>
                    <pre className="mt-1 text-xs overflow-x-auto">
                      {this.state.error.stack}
                    </pre>
                  </div>
                  {this.state.errorInfo && (
                    <div>
                      <strong>Component Stack:</strong>
                      <pre className="mt-1 text-xs overflow-x-auto">
                        {this.state.errorInfo.componentStack}
                      </pre>
                    </div>
                  )}
                </div>
              </details>
            )}

            {/* Error ID */}
            <div className="mb-6 p-3 bg-zion-blue-dark/50 rounded-lg">
              <p className="text-sm text-zion-slate-light">
                Error ID: <span className="font-mono text-zion-cyan">{this.state.errorId}</span>
              </p>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                onClick={this.handleRetry}
                className="bg-gradient-to-r from-zion-cyan to-zion-purple text-white hover:shadow-lg hover:shadow-zion-cyan/25 transition-all duration-300 flex items-center gap-2"
              >
                <RefreshCw className="w-4 h-4" />
                Try Again
              </Button>

              <Button
                onClick={this.handleGoHome}
                variant="outline"
                className="border-zion-cyan/30 text-zion-cyan hover:bg-zion-cyan hover:text-white transition-all duration-300 flex items-center gap-2"
              >
                <Home className="w-4 h-4" />
                Go Home
              </Button>

              <Button
                onClick={this.handleReportBug}
                variant="outline"
                className="border-zion-purple/30 text-zion-purple hover:bg-zion-purple hover:text-white transition-all duration-300 flex items-center gap-2"
              >
                <Bug className="w-4 h-4" />
                Report Bug
              </Button>
            </div>

            {/* Additional Help */}
            <div className="mt-8 pt-6 border-t border-zion-cyan/20">
              <p className="text-sm text-zion-slate-light mb-2">
                Still having issues? We're here to help!
              </p>
              <div className="flex justify-center gap-4 text-sm">
                <a
                  href="/contact"
                  className="text-zion-cyan hover:text-white transition-colors duration-300"
                >
                  Contact Support
                </a>
                <span className="text-zion-slate-light">•</span>
                <a
                  href="/help"
                  className="text-zion-cyan hover:text-white transition-colors duration-300"
                >
                  Help Center
                </a>
                <span className="text-zion-slate-light">•</span>
                <a
                  href="https://status.ziontechgroup.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-zion-cyan hover:text-white transition-colors duration-300"
                >
                  System Status
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

// Hook for functional components to handle errors
export const useErrorHandler = () => {
  const handleError = (error: Error, errorInfo?: any) => {
    console.error('Error caught by hook:', error, errorInfo);
    
    // Log to external service
    if (process.env.NODE_ENV === 'production') {
      fetch('/api/errors', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          message: error.message,
          stack: error.stack,
          componentStack: errorInfo?.componentStack,
          timestamp: new Date().toISOString(),
          url: window.location.href
        })
      }).catch(console.error);
    }
  };

  return { handleError };
};

export default ErrorBoundary;