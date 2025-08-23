import React, { Component, ErrorInfo, ReactNode } from 'react';
import { motion } from 'framer-motion';
import { AlertTriangle, RefreshCw, Home, Bug, Shield, Zap } from 'lucide-react';

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

export default class ErrorBoundary extends Component<Props, State> {
  public state: State = {
    hasError: false
  };

  public static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    // Generate unique error ID for tracking
    const errorId = `error_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
    
    this.setState({
      error,
      errorInfo,
      errorId
    });

    // Log error to console in development
    if (process.env.NODE_ENV === 'development') {
      // console.error('ErrorBoundary caught an error:', error, errorInfo);
    }

    // Send error to analytics if available
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', 'exception', {
        description: error.message,
        fatal: true,
        error_id: errorId
      });
    }

    // Send error to custom error reporting endpoint
    this.reportError(error, errorInfo, errorId);
  }

  private async reportError(error: Error, errorInfo: ErrorInfo, errorId: string) {
    try {
      await fetch('/api/error-reporting', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          errorId,
          message: error.message,
          stack: error.stack,
          componentStack: errorInfo.componentStack,
          url: window.location.href,
          userAgent: navigator.userAgent,
          timestamp: new Date().toISOString()
        })
      });
    } catch {
      // Silently handle reporting errors
      // console.warn('Failed to report error:', reportError);
    }
  }

  private handleRetry = () => {
    this.setState({ hasError: false, error: undefined, errorInfo: undefined, errorId: undefined });
  };

  private handleGoHome = () => {
    window.location.href = '/';
  };

  private handleReload = () => {
    window.location.reload();
  };

  public render() {
    if (this.state.hasError) {
      // Custom fallback UI
      if (this.props.fallback) {
        return this.props.fallback;
      }

      return (
        <div className="min-h-screen bg-black text-white flex items-center justify-center p-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="max-w-2xl mx-auto text-center"
          >
            {/* Error Icon */}
            <motion.div
              initial={{ rotate: 0 }}
              animate={{ rotate: [0, -10, 10, -10, 0] }}
              transition={{ duration: 0.6, repeat: Infinity, repeatDelay: 2 }}
              className="w-24 h-24 mx-auto mb-8"
            >
              <div className="w-full h-full bg-gradient-to-r from-red-500 to-orange-500 rounded-full flex items-center justify-center">
                <AlertTriangle className="w-12 h-12 text-white" />
              </div>
            </motion.div>

            {/* Error Message */}
            <h1 className="text-4xl font-bold text-white mb-4">
              Oops! Something went wrong
            </h1>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              We encountered an unexpected error while loading this page. Our team has been notified and is working to fix it.
            </p>

            {/* Error Details (Development Only) */}
            {process.env.NODE_ENV === 'development' && this.state.error && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: 'auto', opacity: 1 }}
                className="bg-gray-900/50 rounded-xl p-6 mb-8 text-left"
              >
                <h3 className="text-lg font-semibold text-white mb-3 flex items-center gap-2">
                  <Bug className="w-5 h-5 text-red-400" />
                  Error Details (Development)
                </h3>
                <div className="space-y-3 text-sm">
                  <div>
                    <span className="text-gray-400">Error ID:</span>
                    <span className="text-cyan-400 ml-2 font-mono">{this.state.errorId}</span>
                  </div>
                  <div>
                    <span className="text-gray-400">Message:</span>
                    <span className="text-red-400 ml-2">{this.state.error.message}</span>
                  </div>
                  {this.state.error.stack && (
                    <div>
                      <span className="text-gray-400">Stack:</span>
                      <pre className="text-gray-300 mt-2 p-3 bg-gray-800/50 rounded-lg overflow-x-auto text-xs">
                        {this.state.error.stack}
                      </pre>
                    </div>
                  )}
                </div>
              </motion.div>
            )}

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={this.handleRetry}
                className="px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-xl hover:from-cyan-600 hover:to-blue-700 transition-all duration-200 font-medium flex items-center justify-center gap-2"
              >
                <RefreshCw className="w-5 h-5" />
                Try Again
              </motion.button>
              
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={this.handleGoHome}
                className="px-6 py-3 border-2 border-cyan-400 text-cyan-400 rounded-xl hover:bg-cyan-400 hover:text-black transition-all duration-200 font-medium flex items-center justify-center gap-2"
              >
                <Home className="w-5 h-5" />
                Go Home
              </motion.button>
              
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={this.handleReload}
                className="px-6 py-3 border-2 border-gray-600 text-gray-300 rounded-xl hover:bg-gray-600 hover:text-white transition-all duration-200 font-medium flex items-center justify-center gap-2"
              >
                <Zap className="w-5 h-5" />
                Reload Page
              </motion.button>
            </div>

            {/* Additional Help */}
            <div className="bg-gradient-to-r from-cyan-500/10 to-blue-500/10 rounded-2xl p-6 border border-cyan-500/20">
              <h3 className="text-lg font-semibold text-white mb-3 flex items-center gap-2">
                <Shield className="w-5 h-5 text-cyan-400" />
                Need Help?
              </h3>
              <p className="text-gray-300 mb-4">
                If this problem persists, please contact our support team.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <a
                  href="mailto:support@ziontechgroup.com"
                  className="text-cyan-400 hover:text-cyan-300 transition-colors duration-200"
                >
                  support@ziontechgroup.com
                </a>
                <span className="text-gray-500 hidden sm:inline">•</span>
                <a
                  href="tel:+18009466832"
                  className="text-cyan-400 hover:text-cyan-300 transition-colors duration-200"
                >
                  +1 (800) ZION-TECH
                </a>
              </div>
            </div>

            {/* Error ID for Support */}
            {this.state.errorId && (
              <div className="mt-6 text-sm text-gray-500">
                Error ID: <span className="font-mono text-gray-400">{this.state.errorId}</span>
              </div>
            )}
          </motion.div>
        </div>
      );
    }

    return this.props.children;
  }
}