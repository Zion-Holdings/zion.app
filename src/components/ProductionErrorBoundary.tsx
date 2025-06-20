import React, { Component, ReactNode } from 'react';
import * as Sentry from '@sentry/nextjs';
import { ENV_CONFIG } from '@/utils/environmentConfig';

interface Props {
  children: ReactNode;
  fallback?: ReactNode;
}

interface State {
  hasError: boolean;
  error: Error | null;
  errorType: 'config' | 'network' | 'runtime' | 'unknown';
  retryCount: number;
  showDetails: boolean;
}

class ProductionErrorBoundary extends Component<Props, State> {
  private retryTimeoutId: NodeJS.Timeout | null = null;

  constructor(props: Props) {
    super(props);
    this.state = {
      hasError: false,
      error: null,
      errorType: 'unknown',
      retryCount: 0,
      showDetails: false
    };
  }

  static getDerivedStateFromError(error: Error): Partial<State> {
    // Determine error type based on error message
    let errorType: State['errorType'] = 'unknown';
    
    if (error.message.includes('Environment configuration') || 
        error.message.includes('supabaseUrl is required') ||
        error.message.includes('Sentry DSN') ||
        error.message.includes('NEXT_PUBLIC_')) {
      errorType = 'config';
    } else if (error.message.includes('fetch') || 
               error.message.includes('network') ||
               error.message.includes('offline') ||
               error.message.includes('ENOTFOUND')) {
      errorType = 'network';
    } else if (error.name === 'ChunkLoadError' || 
               error.message.includes('Loading chunk')) {
      errorType = 'runtime';
    }

    return {
      hasError: true,
      error,
      errorType
    };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    console.error('ProductionErrorBoundary caught an error:', error, errorInfo);
    
    // Only send to Sentry if it's configured
    if (ENV_CONFIG.sentry.isConfigured) {
      Sentry.withScope((scope) => {
        scope.setTag('errorBoundary', 'ProductionErrorBoundary');
        scope.setTag('errorType', this.state.errorType);
        scope.setTag('retryCount', this.state.retryCount);
        // Convert ErrorInfo to plain object for Sentry context
        scope.setContext('errorInfo', {
          componentStack: errorInfo.componentStack || 'Unknown'
        });
        scope.setContext('environmentConfig', {
          supabaseConfigured: ENV_CONFIG.supabase.isConfigured,
          sentryConfigured: ENV_CONFIG.sentry.isConfigured,
          reownConfigured: ENV_CONFIG.reown.isConfigured,
          environment: ENV_CONFIG.app.environment
        });
        Sentry.captureException(error);
      });
    } else {
      // Log locally if Sentry is not configured
      console.error('Error details (Sentry not configured):', {
        error: error.message,
        stack: error.stack,
        errorInfo,
        environmentConfig: ENV_CONFIG
      });
    }
  }

  handleRetry = () => {
    if (this.state.retryCount < 3) {
      this.setState(prevState => ({
        hasError: false,
        error: null,
        retryCount: prevState.retryCount + 1
      }));

      // Clear any pending retry
      if (this.retryTimeoutId) {
        clearTimeout(this.retryTimeoutId);
      }
    } else {
      // Max retries reached, force reload
      window.location.reload();
    }
  };

  handleAutoRetry = () => {
    if (this.state.errorType === 'network' && this.state.retryCount < 2) {
      this.retryTimeoutId = setTimeout(() => {
        this.handleRetry();
      }, 3000); // Auto-retry after 3 seconds for network errors
    }
  };

  toggleDetails = () => {
    this.setState(prevState => ({
      showDetails: !prevState.showDetails
    }));
  };

  componentDidUpdate(prevProps: Props, prevState: State) { // Corrected the syntax here
=======
  componentDidUpdate(_prevProps: Props, prevState: State) {
>>>>>>> b58c5582360917c4f917cac488a34dcf3e504b83
    // Auto-retry for network errors
    if (this.state.hasError && !prevState.hasError && this.state.errorType === 'network') {
      this.handleAutoRetry();
    }
  }

  componentWillUnmount() {
    if (this.retryTimeoutId) {
      clearTimeout(this.retryTimeoutId);
    }
  }

  getErrorMessage(): { title: string; description: string; actionText: string } {
    const { errorType, retryCount } = this.state;

    switch (errorType) {
      case 'config':
        return {
          title: 'Configuration Error',
          description: ENV_CONFIG.app.isDevelopment 
            ? 'Some services are not configured for development. The app will work with limited functionality.'
            : 'The application is not properly configured. Please check the environment variables.',
          actionText: ENV_CONFIG.app.isDevelopment ? 'Continue Anyway' : 'Contact Support'
        };
      
      case 'network':
        return {
          title: 'Connection Problem',
          description: retryCount > 0 
            ? `Retrying connection... (Attempt ${retryCount + 1}/3)`
            : 'Unable to connect to the server. Checking your connection...',
          actionText: 'Retry Now'
        };
      
      case 'runtime':
        return {
          title: 'Application Update Required',
          description: 'A new version of the application is available. Please refresh to continue.',
          actionText: 'Refresh Page'
        };
      
      default:
        return {
          title: 'Something Went Wrong',
          description: 'An unexpected error occurred. Our team has been notified.',
          actionText: retryCount < 3 ? 'Try Again' : 'Reload Page'
        };
    }
  }

  render() {
    if (this.state.hasError) {
      const { title, description, actionText } = this.getErrorMessage();
      const { error, errorType, retryCount, showDetails } = this.state;

      // For development configuration errors, show a less alarming message
      if (errorType === 'config' && ENV_CONFIG.app.isDevelopment) {
        return (
          <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
            <div className="max-w-md w-full bg-white rounded-lg shadow-lg p-6">
              <div className="flex items-center mb-4">
                <div className="bg-yellow-100 rounded-full p-2 mr-3">
                  <svg className="w-6 h-6 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.732-.833-2.5 0L4.314 15.5c-.77.833.192 2.5 1.732 2.5z" />
                  </svg>
                </div>
                <h1 className="text-lg font-semibold text-gray-900">{title}</h1>
              </div>
              
              <p className="text-gray-600 mb-4">{description}</p>
              
              <div className="mb-4 p-3 bg-blue-50 rounded">
                <p className="text-sm text-blue-800">
                  💡 <strong>Development Mode:</strong> Some features require environment variables to be configured. 
                  Check the <code>docs/PRODUCTION_ENV_SETUP.md</code> file for setup instructions.
                </p>
              </div>

              <button
                onClick={this.handleRetry}
                className="w-full bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 transition-colors"
              >
                {actionText}
              </button>
            </div>
          </div>
        );
      }

      // Production or other error types
      return (
        <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
          <div className="max-w-md w-full bg-white rounded-lg shadow-lg p-6">
            <div className="flex items-center mb-4">
              <div className={`rounded-full p-2 mr-3 ${
                errorType === 'network' ? 'bg-orange-100' :
                errorType === 'config' ? 'bg-red-100' :
                errorType === 'runtime' ? 'bg-blue-100' :
                'bg-gray-100'
              }`}>
                <svg className={`w-6 h-6 ${
                  errorType === 'network' ? 'text-orange-600' :
                  errorType === 'config' ? 'text-red-600' :
                  errorType === 'runtime' ? 'text-blue-600' :
                  'text-gray-600'
                }`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  {errorType === 'network' ? (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  ) : errorType === 'runtime' ? (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                  ) : (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.732-.833-2.5 0L4.314 15.5c-.77.833.192 2.5 1.732 2.5z" />
                  )}
                </svg>
              </div>
