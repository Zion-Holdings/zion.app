import React, { Component, ReactNode } from 'react';
import * as Sentry from '@sentry/nextjs';
import { ENV_CONFIG } from '@/utils/environmentConfig';
import {logErrorToProduction} from '@/utils/productionLogger';


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
    logErrorToProduction('ProductionErrorBoundary caught an error:', error, { componentStack: errorInfo.componentStack });
    
    if (ENV_CONFIG.sentry.isConfigured) {
      Sentry.withScope((scope) => {
        scope.setTag('errorBoundary', 'ProductionErrorBoundary');
        scope.setTag('errorType', this.state.errorType);
        scope.setTag('retryCount', this.state.retryCount);
        scope.setContext('errorInfo', {
          componentStack: errorInfo.componentStack || 'Unknown'
        });
        Sentry.captureException(error);
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
    } else {
      window.location.reload();
    }
  };

  componentDidUpdate(_prevProps: Props, prevState: State) {
    if (this.state.hasError && !prevState.hasError && this.state.errorType === 'network') {
      this.retryTimeoutId = setTimeout(() => {
        this.handleRetry();
      }, 3000);
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
            : 'The application is not properly configured.',
          actionText: ENV_CONFIG.app.isDevelopment ? 'Continue Anyway' : 'Contact Support'
        };
      
      case 'network':
        return {
          title: 'Connection Problem',
          description: retryCount > 0 
            ? `Retrying connection... (Attempt ${retryCount + 1}/3)`
            : 'Unable to connect to the server.',
          actionText: 'Retry Now'
        };
      
      case 'runtime':
        return {
          title: 'Application Update Required',
          description: 'A new version is available. Please refresh to continue.',
          actionText: 'Refresh Page'
        };
      
      default:
        return {
          title: 'Something Went Wrong',
          description: 'An unexpected error occurred.',
          actionText: retryCount < 3 ? 'Try Again' : 'Reload Page'
        };
    }
  }

  render() {
    if (this.state.hasError) {
      const { title, description, actionText } = this.getErrorMessage();

      return (
        <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
          <div className="max-w-md w-full bg-white rounded-lg shadow-lg p-6">
            <div className="flex items-center mb-4">
              <div className="bg-red-100 rounded-full p-2 mr-3">
                <svg className="w-6 h-6 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.732-.833-2.5 0L4.314 15.5c-.77.833.192 2.5 1.732 2.5z" />
                </svg>
              </div>
              <h1 className="text-lg font-semibold text-gray-900">{title}</h1>
            </div>
            
            <p className="text-gray-600 mb-6">{description}</p>
            
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

    return this.props.children;
  }
}

export default ProductionErrorBoundary; 