import React, { Component, ErrorInfo, ReactNode } from 'react';
import { AlertTriangle, RefreshCw, Home, ArrowLeft } from 'lucide-react';

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
}

export class ErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      hasError: false,
      error: null,
      errorInfo: null,
      showDetails: false
    };
  }

  static getDerivedStateFromError(error: Error): State {
    return {
      hasError: true,
      error,
      errorInfo: null,
      showDetails: false
    };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    this.setState({
      error,
      errorInfo
    });

    // Log error to console in development
    if (import.meta.env.DEV) {
      console.error('Error caught by boundary:', error, errorInfo);
    }

    // Call custom error handler if provided
    if (this.props.onError) {
      this.props.onError(error, errorInfo);
    }

    // Log to external service in production
    if (import.meta.env.PROD) {
      // You can integrate with services like Sentry here
      console.error('Production error:', error.message);
    }
  }

  handleRetry = () => {
    this.setState({
      hasError: false,
      error: null,
      errorInfo: null,
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
    this.setState(prev => ({
      showDetails: !prev.showDetails
    }));
  };

  render() {
    if (this.state.hasError) {
      // Custom fallback UI
      if (this.props.fallback) {
        return this.props.fallback;
      }

      return (
        <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-blue-900 flex items-center justify-center p-4">
          <div className="max-w-2xl w-full bg-gray-800/50 backdrop-blur-sm rounded-2xl border border-gray-700/50 p-8 text-center">
            {/* Error Icon */}
            <div className="w-20 h-20 mx-auto mb-6 bg-red-500/20 rounded-full flex items-center justify-center">
              <AlertTriangle className="w-10 h-10 text-red-400" />
            </div>

            {/* Error Message */}
            <h1 className="text-3xl font-bold text-white mb-4">
              Oops! Something went wrong
            </h1>
            <p className="text-gray-300 mb-6 text-lg">
              We encountered an unexpected error. Our team has been notified and is working to fix it.
            </p>

            {/* Error Details (Development Only) */}
            {import.meta.env.DEV && this.state.error && (
              <div className="mb-6 text-left">
                <button
                  onClick={this.toggleDetails}
                  className="text-cyan-400 hover:text-cyan-300 text-sm mb-2 flex items-center gap-2"
                >
                  {this.state.showDetails ? 'Hide' : 'Show'} Error Details
                </button>
                
                {this.state.showDetails && (
                  <div className="bg-gray-900/50 rounded-lg p-4 text-sm font-mono text-red-300 border border-red-500/20">
                    <div className="mb-2">
                      <strong>Error:</strong> {this.state.error.message}
                    </div>
                    {this.state.errorInfo && (
                      <div>
                        <strong>Component Stack:</strong>
                        <pre className="mt-2 text-xs overflow-x-auto">
                          {this.state.errorInfo.componentStack}
                        </pre>
                      </div>
                    )}
                  </div>
                )}
              </div>
            )}

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={this.handleRetry}
                className="flex items-center justify-center gap-2 px-6 py-3 bg-cyan-600 hover:bg-cyan-700 text-white rounded-lg font-medium transition-colors"
              >
                <RefreshCw className="w-4 h-4" />
                Try Again
              </button>
              
              <button
                onClick={this.handleGoBack}
                className="flex items-center justify-center gap-2 px-6 py-3 bg-gray-600 hover:bg-gray-700 text-white rounded-lg font-medium transition-colors"
              >
                <ArrowLeft className="w-4 h-4" />
                Go Back
              </button>
              
              <button
                onClick={this.handleGoHome}
                className="flex items-center justify-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium transition-colors"
              >
                <Home className="w-4 h-4" />
                Go Home
              </button>
            </div>

            {/* Contact Information */}
            <div className="mt-8 pt-6 border-t border-gray-700/50">
              <p className="text-gray-400 text-sm mb-2">
                Still having issues? Contact our support team:
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center text-sm">
                <a
                  href="mailto:support@ziontechgroup.com"
                  className="text-cyan-400 hover:text-cyan-300"
                >
                  support@ziontechgroup.com
                </a>
                <a
                  href="tel:+13024640950"
                  className="text-cyan-400 hover:text-cyan-300"
                >
                  +1 (302) 464-0950
                </a>
              </div>
            </div>

            {/* Error ID for Support */}
            {this.state.error && (
              <div className="mt-4 text-xs text-gray-500">
                Error ID: {this.state.error.name}-{Date.now()}
              </div>
            )}
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;