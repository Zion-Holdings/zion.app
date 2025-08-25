import React, { Component, ErrorInfo, ReactNode } from 'react';
import { 
  AlertTriangle, 
  RefreshCw, 
  Home, 
  Bug, 
  X,
  Info
} from 'lucide-react';

interface Props {
  children: ReactNode;
  fallback?: ReactNode;
  onError?: (error: Error, errorInfo: ErrorInfo) => void;
  showDetails?: boolean;
  enableReporting?: boolean;
}

interface State {
  hasError: boolean;
  error: Error | null;
  errorInfo: ErrorInfo | null;
  showDetails: boolean;
  isReporting: boolean;
}

export class EnhancedErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      hasError: false,
      error: null,
      errorInfo: null,
      showDetails: false,
      isReporting: false
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
      error,
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

    // Report error to external service if enabled
    if (this.props.enableReporting) {
      this.reportError(error, errorInfo);
    }
  }

  private reportError = async (error: Error, errorInfo: ErrorInfo) => {
    this.setState({ isReporting: true });
    
    try {
      // Example error reporting to external service
      const errorReport = {
        message: error.message,
        stack: error.stack,
        componentStack: errorInfo.componentStack,
        timestamp: new Date().toISOString(),
        userAgent: navigator.userAgent,
        url: window.location.href,
        version: process.env.REACT_APP_VERSION || '1.0.0'
      };

      // You can replace this with your actual error reporting service
      console.log('Error report:', errorReport);
      
      // Example: Send to error reporting service
      // await fetch('/api/error-report', {
      //   method: 'POST',
      //   headers: { 'Content-Type': 'application/json' },
      //   body: JSON.stringify(errorReport)
      // });
      
    } catch (reportingError) {
      console.error('Failed to report error:', reportingError);
    } finally {
      this.setState({ isReporting: false });
    }
  };

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

  private handleToggleDetails = () => {
    this.setState(prev => ({ showDetails: !prev.showDetails }));
  };

  private handleCopyError = () => {
    if (this.state.error) {
      const errorText = `
Error: ${this.state.error.message}
Stack: ${this.state.error.stack}
Component Stack: ${this.state.errorInfo?.componentStack}
URL: ${window.location.href}
Timestamp: ${new Date().toISOString()}
      `.trim();
      
      navigator.clipboard.writeText(errorText).then(() => {
        // Show success feedback
        const button = document.getElementById('copy-error-btn');
        if (button) {
          const originalText = button.textContent;
          button.textContent = 'Copied!';
          setTimeout(() => {
            button.textContent = originalText;
          }, 2000);
        }
      });
    }
  };

  render() {
    if (this.state.hasError) {
      // Custom fallback UI
      if (this.props.fallback) {
        return this.props.fallback;
      }

      return (
        <div className="min-h-screen bg-gradient-to-br from-red-900 via-gray-900 to-black flex items-center justify-center p-4">
          <div className="max-w-2xl w-full bg-black/80 backdrop-blur-md rounded-2xl border border-red-500/20 p-8 text-center">
            {/* Error Icon */}
            <div className="w-20 h-20 bg-red-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
              <AlertTriangle className="w-10 h-10 text-red-400" />
            </div>

            {/* Error Message */}
            <h1 className="text-2xl font-bold text-white mb-4">
              Oops! Something went wrong
            </h1>
            
            <p className="text-gray-300 mb-6 leading-relaxed">
              We encountered an unexpected error. Our team has been notified and is working to fix this issue.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-6">
              <button
                onClick={this.handleRetry}
                className="flex items-center justify-center space-x-2 px-6 py-3 bg-cyan-600 hover:bg-cyan-700 text-white rounded-lg transition-colors duration-200 font-medium"
              >
                <RefreshCw className="w-5 h-5" />
                <span>Try Again</span>
              </button>
              
              <button
                onClick={this.handleGoHome}
                className="flex items-center justify-center space-x-2 px-6 py-3 bg-gray-600 hover:bg-gray-700 text-white rounded-lg transition-colors duration-200 font-medium"
              >
                <Home className="w-5 h-5" />
                <span>Go Home</span>
              </button>
            </div>

            {/* Error Details Toggle */}
            <div className="border-t border-gray-700 pt-6">
              <button
                onClick={this.handleToggleDetails}
                className="flex items-center justify-center space-x-2 text-gray-400 hover:text-white transition-colors duration-200 mx-auto"
              >
                <Info className="w-4 h-4" />
                <span className="text-sm">
                  {this.state.showDetails ? 'Hide' : 'Show'} Error Details
                </span>
              </button>
            </div>

            {/* Error Details */}
            {this.state.showDetails && this.state.error && (
              <div className="mt-6 p-4 bg-gray-800/50 rounded-lg text-left">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-sm font-medium text-white">Error Details</h3>
                  <button
                    id="copy-error-btn"
                    onClick={this.handleCopyError}
                    className="text-xs text-cyan-400 hover:text-cyan-300 transition-colors duration-200"
                  >
                    Copy Error
                  </button>
                </div>
                
                <div className="space-y-3 text-xs">
                  <div>
                    <span className="text-gray-400">Message:</span>
                    <div className="text-red-300 font-mono break-words">
                      {this.state.error.message}
                    </div>
                  </div>
                  
                  {this.state.error.stack && (
                    <div>
                      <span className="text-gray-400">Stack Trace:</span>
                      <div className="text-gray-300 font-mono break-words max-h-32 overflow-y-auto">
                        {this.state.error.stack}
                      </div>
                    </div>
                  )}
                  
                  {this.state.errorInfo?.componentStack && (
                    <div>
                      <span className="text-gray-400">Component Stack:</span>
                      <div className="text-gray-300 font-mono break-words max-h-32 overflow-y-auto">
                        {this.state.errorInfo.componentStack}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            )}

            {/* Error Reporting Status */}
            {this.props.enableReporting && (
              <div className="mt-4 text-xs text-gray-500">
                {this.state.isReporting ? (
                  <div className="flex items-center justify-center space-x-2">
                    <RefreshCw className="w-3 h-3 animate-spin" />
                    <span>Reporting error...</span>
                  </div>
                ) : (
                  <div className="flex items-center justify-center space-x-2">
                    <Bug className="w-3 h-3" />
                    <span>Error reported to our team</span>
                  </div>
                )}
              </div>
            )}

            {/* Help Text */}
            <div className="mt-6 text-xs text-gray-500">
              <p>If this problem persists, please contact our support team.</p>
              <p className="mt-1">
                Error ID: {this.state.error?.name || 'Unknown'}-{Date.now().toString(36)}
              </p>
            </div>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

// Hook version for functional components
export const useErrorBoundary = () => {
  const [error, setError] = React.useState<Error | null>(null);

  const handleError = React.useCallback((error: Error) => {
    setError(error);
  }, []);

  const clearError = React.useCallback(() => {
    setError(null);
  }, []);

  return { error, handleError, clearError };
};