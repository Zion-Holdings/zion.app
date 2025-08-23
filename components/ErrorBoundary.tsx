import React, { Component, ErrorInfo, ReactNode } from 'react';
import { motion } from 'framer-motion';
import { 
  AlertTriangle, RefreshCw, Home, Bug, 
  MessageCircle, ArrowLeft, ExternalLink
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
  showTechnicalDetails: boolean;
}

class ErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      hasError: false,
      error: null,
      errorInfo: null,
      errorId: '',
      showTechnicalDetails: false
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

    // Log error to console
    console.error('ErrorBoundary caught an error:', error, errorInfo);

    // Call custom error handler if provided
    if (this.props.onError) {
      this.props.onError(error, errorInfo);
    }

    // Log error to external service (if available)
    this.logErrorToService(error, errorInfo);
  }

  private logErrorToService = (error: Error, errorInfo: ErrorInfo) => {
    try {
      // You can integrate with error reporting services here
      // Example: Sentry, LogRocket, Bugsnag, etc.
      
      const errorData = {
        errorId: this.state.errorId,
        message: error.message,
        stack: error.stack,
        componentStack: errorInfo.componentStack,
        timestamp: new Date().toISOString(),
        url: window.location.href,
        userAgent: navigator.userAgent,
        // Add any other relevant information
      };

      // For now, we'll just log to console
      console.group('Error Report');
      console.log('Error ID:', this.state.errorId);
      console.log('Error Data:', errorData);
      console.groupEnd();

      // You can send this data to your error reporting service
      // fetch('/api/error-reporting', {
      //   method: 'POST',
      //   headers: { 'Content-Type': 'application/json' },
      //   body: JSON.stringify(errorData)
      // });

    } catch (loggingError) {
      console.warn('Failed to log error to service:', loggingError);
    }
  };

  private handleRetry = () => {
    this.setState({
      hasError: false,
      error: null,
      errorInfo: null,
      errorId: '',
      showTechnicalDetails: false
    });
  };

  private handleGoHome = () => {
    window.location.href = '/';
  };

  private handleGoBack = () => {
    window.history.back();
  };

  private handleReportIssue = () => {
    const error = this.state.error;
    const errorInfo = this.state.errorInfo;
    
    if (!error || !errorInfo) return;

    const issueBody = `
## Error Report

**Error ID:** ${this.state.errorId}
**Error Message:** ${error.message}
**URL:** ${window.location.href}
**Timestamp:** ${new Date().toISOString()}

### Error Stack:
\`\`\`
${error.stack}
\`\`\`

### Component Stack:
\`\`\`
${errorInfo.componentStack}
\`\`\`

### User Agent:
${navigator.userAgent}

### Additional Context:
Please provide any additional context about what you were doing when this error occurred.
    `;

    const githubUrl = `https://github.com/Zion-Holdings/zion.app/issues/new?title=Error: ${encodeURIComponent(error.message)}&body=${encodeURIComponent(issueBody)}`;
    
    window.open(githubUrl, '_blank');
  };

  private toggleTechnicalDetails = () => {
    this.setState(prev => ({
      showTechnicalDetails: !prev.showTechnicalDetails
    }));
  };

  render() {
    if (this.state.hasError) {
      // Custom fallback UI
      if (this.props.fallback) {
        return this.props.fallback;
      }

      const { error, errorInfo, errorId, showTechnicalDetails } = this.state;

      return (
        <div className="min-h-screen bg-black text-white flex items-center justify-center p-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-2xl w-full bg-gray-900/90 backdrop-blur-sm border border-gray-700 rounded-lg shadow-2xl p-8"
          >
            {/* Error Header */}
            <div className="text-center mb-8">
              <div className="w-20 h-20 bg-red-600/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <AlertTriangle className="w-10 h-10 text-red-400" />
              </div>
              <h1 className="text-3xl font-bold text-white mb-2">
                Oops! Something went wrong
              </h1>
              <p className="text-gray-300 text-lg">
                We're sorry, but something unexpected happened. Our team has been notified.
              </p>
              <div className="mt-2 text-sm text-gray-500">
                Error ID: <code className="bg-gray-800 px-2 py-1 rounded">{errorId}</code>
              </div>
            </div>

            {/* Error Message */}
            {error && (
              <div className="mb-6 p-4 bg-red-900/20 border border-red-700/50 rounded-lg">
                <h2 className="text-lg font-semibold text-red-400 mb-2">Error Details</h2>
                <p className="text-red-300 font-mono text-sm break-words">
                  {error.message}
                </p>
              </div>
            )}

            {/* Action Buttons */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
              <button
                onClick={this.handleRetry}
                className="flex items-center justify-center space-x-2 p-4 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors font-medium"
              >
                <RefreshCw className="w-5 h-5" />
                <span>Try Again</span>
              </button>
              
              <button
                onClick={this.handleGoHome}
                className="flex items-center justify-center space-x-2 p-4 bg-gray-700 hover:bg-gray-600 text-white rounded-lg transition-colors font-medium"
              >
                <Home className="w-5 h-5" />
                <span>Go Home</span>
              </button>
              
              <button
                onClick={this.handleGoBack}
                className="flex items-center justify-center space-x-2 p-4 bg-gray-700 hover:bg-gray-600 text-white rounded-lg transition-colors font-medium"
              >
                <ArrowLeft className="w-5 h-5" />
                <span>Go Back</span>
              </button>
              
              <button
                onClick={this.handleReportIssue}
                className="flex items-center justify-center space-x-2 p-4 bg-orange-600 hover:bg-orange-700 text-white rounded-lg transition-colors font-medium"
              >
                <Bug className="w-5 h-5" />
                <span>Report Issue</span>
              </button>
            </div>

            {/* Technical Details Toggle */}
            <div className="text-center mb-4">
              <button
                onClick={this.toggleTechnicalDetails}
                className="text-gray-400 hover:text-white transition-colors text-sm flex items-center space-x-2 mx-auto"
              >
                <span>{showTechnicalDetails ? 'Hide' : 'Show'} Technical Details</span>
              </button>
            </div>

            {/* Technical Details */}
            <AnimatePresence>
              {showTechnicalDetails && errorInfo && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  className="overflow-hidden"
                >
                  <div className="space-y-4">
                    {/* Component Stack */}
                    <div className="p-4 bg-gray-800/50 rounded-lg">
                      <h3 className="text-white font-semibold mb-2">Component Stack</h3>
                      <pre className="text-gray-300 text-xs overflow-x-auto whitespace-pre-wrap">
                        {errorInfo.componentStack}
                      </pre>
                    </div>

                    {/* Error Stack */}
                    {error && error.stack && (
                      <div className="p-4 bg-gray-800/50 rounded-lg">
                        <h3 className="text-white font-semibold mb-2">Error Stack</h3>
                        <pre className="text-gray-300 text-xs overflow-x-auto whitespace-pre-wrap">
                          {error.stack}
                        </pre>
                      </div>
                    )}

                    {/* Environment Info */}
                    <div className="p-4 bg-gray-800/50 rounded-lg">
                      <h3 className="text-white font-semibold mb-2">Environment Information</h3>
                      <div className="text-gray-300 text-xs space-y-1">
                        <div><strong>URL:</strong> {window.location.href}</div>
                        <div><strong>User Agent:</strong> {navigator.userAgent}</div>
                        <div><strong>Platform:</strong> {navigator.platform}</div>
                        <div><strong>Language:</strong> {navigator.language}</div>
                        <div><strong>Timestamp:</strong> {new Date().toISOString()}</div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Help Section */}
            <div className="mt-6 p-4 bg-blue-900/20 border border-blue-700/50 rounded-lg">
              <h3 className="text-lg font-semibold text-blue-400 mb-2">Need Help?</h3>
              <p className="text-blue-300 text-sm mb-3">
                If this error persists, please contact our support team or report the issue on GitHub.
              </p>
              <div className="flex flex-wrap gap-2">
                <a
                  href="mailto:support@ziontechgroup.com"
                  className="inline-flex items-center space-x-2 px-3 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors text-sm"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Contact Support</span>
                </a>
                <a
                  href="https://github.com/Zion-Holdings/zion.app/issues"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center space-x-2 px-3 py-2 bg-gray-700 hover:bg-gray-600 text-white rounded-lg transition-colors text-sm"
                >
                  <ExternalLink className="w-4 h-4" />
                  <span>View Issues</span>
                </a>
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