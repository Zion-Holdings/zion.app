import React, { Component, ErrorInfo, ReactNode } from 'react';
import { motion } from 'framer-motion';
import { 
  AlertTriangle, RefreshCw, Home, Bug, 
  X, Info, ArrowLeft, RotateCcw
} from 'lucide-react';

interface Props {
  children: ReactNode;
  fallback?: ReactNode;
  onError?: (error: Error, errorInfo: ErrorInfo) => void;
  showDetails?: boolean;
  enableRecovery?: boolean;
}

interface State {
  hasError: boolean;
  error: Error | null;
  errorInfo: ErrorInfo | null;
  errorId: string | null;
  retryCount: number;
  isRecovering: boolean;
}

class ErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      hasError: false,
      error: null,
      errorInfo: null,
      errorId: null,
      retryCount: 0,
      isRecovering: false
    };
  }

  static getDerivedStateFromError(error: Error): Partial<State> {
    return {
      hasError: true,
      error,
      errorId: null
    };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    this.setState({
      errorInfo,
      errorId: this.generateErrorId(error)
    });

    // Log error to console in development
    if (process.env.NODE_ENV === 'development') {
      console.error('ErrorBoundary caught an error:', error, errorInfo);
    }

    // Call custom error handler if provided
    if (this.props.onError) {
      this.props.onError(error, errorInfo);
    }

    // Send error to error reporting service (if configured)
    this.reportError(error, errorInfo);
  }

  private generateErrorId(error: Error): string {
    const timestamp = Date.now();
    const errorHash = this.hashString(error.message + error.stack);
    return `ERR_${timestamp}_${errorHash}`;
  }

  private hashString(str: string): string {
    let hash = 0;
    for (let i = 0; i < str.length; i++) {
      const char = str.charCodeAt(i);
      hash = ((hash << 5) - hash) + char;
      hash = hash & hash; // Convert to 32-bit integer
    }
    return Math.abs(hash).toString(16);
  }

  private reportError(error: Error, errorInfo: ErrorInfo) {
    // In a real application, you would send this to your error reporting service
    // For example: Sentry, LogRocket, Bugsnag, etc.
    
    const errorReport = {
      errorId: this.state.errorId,
      message: error.message,
      stack: error.stack,
      componentStack: errorInfo.componentStack,
      timestamp: new Date().toISOString(),
      userAgent: navigator.userAgent,
      url: window.location.href,
      retryCount: this.state.retryCount
    };

    // Store error in localStorage for debugging
    try {
      const existingErrors = JSON.parse(localStorage.getItem('zion-errors') || '[]');
      existingErrors.push(errorReport);
      localStorage.setItem('zion-errors', JSON.stringify(existingErrors.slice(-10))); // Keep last 10 errors
    } catch (e) {
      console.warn('Failed to store error in localStorage:', e);
    }

    // Send to analytics or error reporting service
    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('event', 'exception', {
        description: error.message,
        fatal: true
      });
    }
  }

  private handleRetry = () => {
    this.setState({ isRecovering: true });
    
    // Clear the error state
    this.setState({
      hasError: false,
      error: null,
      errorInfo: null,
      errorId: null,
      retryCount: this.state.retryCount + 1
    });
  };

  private handleGoHome = () => {
    if (typeof window !== 'undefined') {
      window.location.href = '/';
    }
  };

  private handleGoBack = () => {
    if (typeof window !== 'undefined' && window.history.length > 1) {
      window.history.back();
    } else {
      this.handleGoHome();
    }
  };

  private handleReload = () => {
    if (typeof window !== 'undefined') {
      window.location.reload();
    }
  };

  private getErrorType(): string {
    if (!this.state.error) return 'Unknown Error';
    
    const error = this.state.error;
    
    if (error.name === 'TypeError') return 'Type Error';
    if (error.name === 'ReferenceError') return 'Reference Error';
    if (error.name === 'SyntaxError') return 'Syntax Error';
    if (error.name === 'RangeError') return 'Range Error';
    if (error.name === 'URIError') return 'URI Error';
    if (error.name === 'EvalError') return 'Evaluation Error';
    
    return error.name || 'Runtime Error';
  }

  private getErrorMessage(): string {
    if (!this.state.error) return 'An unexpected error occurred';
    
    const error = this.state.error;
    
    // Provide user-friendly error messages
    if (error.message.includes('Failed to fetch')) {
      return 'Network connection error. Please check your internet connection and try again.';
    }
    
    if (error.message.includes('Chunk load failed')) {
      return 'Application update error. Please refresh the page to get the latest version.';
    }
    
    if (error.message.includes('Loading chunk')) {
      return 'Resource loading error. Please refresh the page and try again.';
    }
    
    if (error.message.includes('Unexpected token')) {
      return 'Application configuration error. Please contact support if this persists.';
    }
    
    return error.message || 'An unexpected error occurred while processing your request.';
  }

  private getRecoverySuggestions(): string[] {
    const suggestions: string[] = [];
    
    if (this.state.retryCount < 2) {
      suggestions.push('Try refreshing the page');
    }
    
    if (this.state.retryCount < 3) {
      suggestions.push('Check your internet connection');
    }
    
    suggestions.push('Clear your browser cache and cookies');
    suggestions.push('Try using a different browser');
    
    if (this.state.retryCount > 2) {
      suggestions.push('Contact support if the issue persists');
    }
    
    return suggestions;
  }

  render() {
    if (this.state.hasError) {
      // Custom fallback UI
      if (this.props.fallback) {
        return this.props.fallback;
      }

      return (
        <div className="min-h-screen bg-black text-white flex items-center justify-center p-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-2xl w-full bg-gray-900/90 backdrop-blur-sm border border-red-500/30 rounded-2xl p-8 shadow-2xl"
          >
            {/* Error Header */}
            <div className="text-center mb-8">
              <div className="inline-flex items-center justify-center w-20 h-20 bg-red-500/20 border border-red-500/30 rounded-full mb-6">
                <AlertTriangle className="w-10 h-10 text-red-400" />
              </div>
              <h1 className="text-3xl font-bold text-white mb-2">
                Oops! Something went wrong
              </h1>
              <p className="text-gray-400 text-lg">
                We encountered an unexpected error while processing your request
              </p>
            </div>

            {/* Error Details */}
            <div className="bg-gray-800/50 border border-gray-700 rounded-xl p-6 mb-8">
              <div className="flex items-center gap-2 mb-4">
                <Bug className="w-5 h-5 text-red-400" />
                <h2 className="text-lg font-semibold text-white">
                  {this.getErrorType()}
                </h2>
              </div>
              
              <p className="text-gray-300 mb-4">
                {this.getErrorMessage()}
              </p>

              {this.state.errorId && (
                <div className="text-sm text-gray-500 font-mono bg-gray-900/50 p-3 rounded-lg">
                  Error ID: {this.state.errorId}
                </div>
              )}

              {/* Recovery Suggestions */}
              <div className="mt-6">
                <h3 className="text-sm font-medium text-gray-400 mb-3 flex items-center gap-2">
                  <Info className="w-4 h-4" />
                  Try these solutions:
                </h3>
                <ul className="space-y-2">
                  {this.getRecoverySuggestions().map((suggestion, index) => (
                    <li key={index} className="text-sm text-gray-300 flex items-center gap-2">
                      <div className="w-1.5 h-1.5 bg-red-400 rounded-full"></div>
                      {suggestion}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <button
                onClick={this.handleRetry}
                disabled={this.state.isRecovering}
                className="flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 disabled:from-gray-600 disabled:to-gray-700 text-white font-medium rounded-lg transition-all duration-200 transform hover:scale-105 disabled:scale-100 disabled:cursor-not-allowed"
              >
                {this.state.isRecovering ? (
                  <>
                    <RefreshCw className="w-4 h-4 animate-spin" />
                    Recovering...
                  </>
                ) : (
                  <>
                    <RotateCcw className="w-4 h-4" />
                    Try Again
                  </>
                )}
              </button>

              <button
                onClick={this.handleGoBack}
                className="flex items-center justify-center gap-2 px-6 py-3 border-2 border-gray-600 hover:border-gray-500 text-gray-300 hover:text-white font-medium rounded-lg transition-all duration-200 transform hover:scale-105"
              >
                <ArrowLeft className="w-4 h-4" />
                Go Back
              </button>

              <button
                onClick={this.handleReload}
                className="flex items-center justify-center gap-2 px-6 py-3 border-2 border-gray-600 hover:border-gray-500 text-gray-300 hover:text-white font-medium rounded-lg transition-all duration-200 transform hover:scale-105"
              >
                <RefreshCw className="w-4 h-4" />
                Refresh Page
              </button>

              <button
                onClick={this.handleGoHome}
                className="flex items-center justify-center gap-2 px-6 py-3 border-2 border-gray-600 hover:border-gray-500 text-gray-300 hover:text-white font-medium rounded-lg transition-all duration-200 transform hover:scale-105"
              >
                <Home className="w-4 h-4" />
                Go Home
              </button>
            </div>

            {/* Technical Details (Development Only) */}
            {this.props.showDetails && process.env.NODE_ENV === 'development' && this.state.error && (
              <details className="mt-8">
                <summary className="text-sm text-gray-400 cursor-pointer hover:text-gray-300 mb-4">
                  Technical Details (Development)
                </summary>
                <div className="bg-gray-800/50 border border-gray-700 rounded-lg p-4 space-y-4">
                  <div>
                    <h4 className="text-sm font-medium text-gray-300 mb-2">Error Stack:</h4>
                    <pre className="text-xs text-gray-400 bg-gray-900/50 p-3 rounded overflow-x-auto">
                      {this.state.error.stack}
                    </pre>
                  </div>
                  
                  {this.state.errorInfo && (
                    <div>
                      <h4 className="text-sm font-medium text-gray-300 mb-2">Component Stack:</h4>
                      <pre className="text-xs text-gray-400 bg-gray-900/50 p-3 rounded overflow-x-auto">
                        {this.state.errorInfo.componentStack}
                      </pre>
                    </div>
                  )}
                </div>
              </details>
            )}

            {/* Support Information */}
            <div className="mt-8 text-center">
              <p className="text-sm text-gray-500">
                If this problem continues, please contact our support team
              </p>
              <div className="mt-2 text-sm text-gray-400">
                <span>Email: </span>
                <a 
                  href="mailto:support@ziontechgroup.com" 
                  className="text-blue-400 hover:text-blue-300 underline"
                >
                  support@ziontechgroup.com
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