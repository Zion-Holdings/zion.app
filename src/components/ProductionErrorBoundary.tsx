import React, { Component, ReactNode } from 'react';
import { ErrorBoundary, FallbackProps } from 'react-error-boundary';
import * as Sentry from '@sentry/nextjs';
import { RefreshCw, AlertCircle, Home, RotateCcw } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';

interface ProductionErrorFallbackProps extends FallbackProps {
  retryCount?: number;
  maxRetries?: number;
}

interface ErrorDetails {
  message: string;
  stack?: string;
  timestamp: string;
  url: string;
  userAgent: string;
  userId?: string;
}

function ProductionErrorFallback({ 
  error, 
  resetErrorBoundary, 
  retryCount = 0, 
  maxRetries = 2 
}: ProductionErrorFallbackProps) {
  const [isRetrying, setIsRetrying] = React.useState(false);
  const [hasTriedReload, setHasTriedReload] = React.useState(false);

  const handleRetry = async () => {
    setIsRetrying(true);
    
    try {
      // Clear any cached data that might be causing issues
      if ('caches' in window) {
        const cacheNames = await caches.keys();
        await Promise.all(cacheNames.map(name => caches.delete(name)));
      }
      
      // Clear localStorage items that might be corrupted
      const itemsToClean = [
        'sb-placeholder-auth-token',
        'theme',
        'wallet-connect',
        'reown-wallet'
      ];
      
      itemsToClean.forEach(item => {
        try {
          localStorage.removeItem(item);
        } catch (e) {
          // Ignore localStorage errors
        }
      });

      // Wait a moment before retrying
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      resetErrorBoundary();
    } catch (retryError) {
      console.error('Error during retry:', retryError);
      Sentry.captureException(retryError);
    } finally {
      setIsRetrying(false);
    }
  };

  const handleReload = () => {
    setHasTriedReload(true);
    window.location.reload();
  };

  const handleGoHome = () => {
    window.location.href = '/';
  };

  const reportError = () => {
    const errorDetails: ErrorDetails = {
      message: error.message,
      stack: error.stack,
      timestamp: new Date().toISOString(),
      url: window.location.href,
      userAgent: navigator.userAgent,
    };

         // Send detailed error report
     Sentry.withScope((scope) => {
       scope.setTag('errorBoundary', 'ProductionErrorBoundary');
       scope.setTag('retryCount', retryCount);
       scope.setLevel('error');
       scope.setContext('errorDetails', {
         message: errorDetails.message,
         stack: errorDetails.stack,
         timestamp: errorDetails.timestamp,
         url: errorDetails.url,
         userAgent: errorDetails.userAgent,
         userId: errorDetails.userId
       });
       Sentry.captureException(error);
     });
  };

  React.useEffect(() => {
    reportError();
  }, [error]);

  // Determine error type for better messaging
  const isNetworkError = error.message?.includes('fetch') ||
                        error.message?.includes('network') ||
                        error.message?.includes('timeout') ||
                        !navigator.onLine;

  const isConfigError = error.message?.includes('Supabase') ||
                       error.message?.includes('environment') ||
                       error.message?.includes('configuration');

  const canRetry = retryCount < maxRetries && !isConfigError;

  return (
    <div className="min-h-screen flex items-center justify-center p-4 bg-gray-50 dark:bg-gray-900">
      <div className="w-full max-w-md space-y-6">
        <div className="text-center">
          <AlertCircle className="mx-auto h-12 w-12 text-red-500 mb-4" />
          <h1 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
            Oops! Something went wrong
          </h1>
          <p className="text-gray-600 dark:text-gray-400">
            {isNetworkError 
              ? "We're having trouble connecting to our servers. Please check your internet connection."
              : isConfigError
              ? "There's a configuration issue with the application. Our team has been notified."
              : "An unexpected error occurred. We apologize for the inconvenience."
            }
          </p>
        </div>

        <Alert variant="destructive">
          <AlertCircle className="h-4 w-4" />
          <AlertTitle>
            {isNetworkError ? 'Connection Problem' : 
             isConfigError ? 'Configuration Error' : 
             'Application Error'}
          </AlertTitle>
          <AlertDescription className="mt-2">
            {error.message || 'An unknown error occurred'}
          </AlertDescription>
        </Alert>

        {retryCount > 0 && (
          <div className="text-sm text-gray-500 text-center">
            Retry attempt {retryCount} of {maxRetries}
          </div>
        )}

        <div className="space-y-3">
          {canRetry && (
            <Button
              onClick={handleRetry}
              disabled={isRetrying}
              className="w-full"
              variant="default"
            >
              {isRetrying ? (
                <>
                  <RefreshCw className="mr-2 h-4 w-4 animate-spin" />
                  Retrying...
                </>
              ) : (
                <>
                  <RotateCcw className="mr-2 h-4 w-4" />
                  Try Again
                </>
              )}
            </Button>
          )}

          <Button
            onClick={handleReload}
            variant="outline"
            className="w-full"
            disabled={hasTriedReload}
          >
            <RefreshCw className="mr-2 h-4 w-4" />
            {hasTriedReload ? 'Reloading...' : 'Reload Page'}
          </Button>

          <Button
            onClick={handleGoHome}
            variant="ghost"
            className="w-full"
          >
            <Home className="mr-2 h-4 w-4" />
            Go to Homepage
          </Button>
        </div>

        <div className="text-center text-sm text-gray-500">
          <p>Error ID: {Date.now().toString(36)}</p>
          <p className="mt-1">
            If this problem persists, please{' '}
            <a 
              href={`mailto:${process.env.NEXT_PUBLIC_SUPPORT_EMAIL || 'support@ziontechgroup.com'}`}
              className="text-blue-600 hover:underline"
            >
              contact support
            </a>
          </p>
        </div>

        {process.env.NODE_ENV === 'development' && (
          <details className="mt-4 rounded border p-2 text-xs">
            <summary className="cursor-pointer font-medium">
              Debug Info (Development Only)
            </summary>
            <pre className="mt-2 whitespace-pre-wrap break-all text-red-600">
              {error.stack}
            </pre>
          </details>
        )}
      </div>
    </div>
  );
}

interface ProductionErrorBoundaryProps {
  children: ReactNode;
  maxRetries?: number;
  fallback?: ReactNode;
}

interface ProductionErrorBoundaryState {
  retryCount: number;
}

export class ProductionErrorBoundary extends Component<
  ProductionErrorBoundaryProps, 
  ProductionErrorBoundaryState
> {
  constructor(props: ProductionErrorBoundaryProps) {
    super(props);
    this.state = { retryCount: 0 };
  }

  handleError = (error: Error, errorInfo: React.ErrorInfo) => {
    console.error('ProductionErrorBoundary caught an error:', error, errorInfo);
    
    Sentry.withScope((scope) => {
      scope.setTag('errorBoundary', 'ProductionErrorBoundary');
      scope.setTag('retryCount', this.state.retryCount);
      scope.setContext('errorInfo', {
        componentStack: errorInfo.componentStack,
      });
      scope.setLevel('error');
      Sentry.captureException(error);
    });
  };

  handleReset = () => {
    this.setState(prevState => ({ 
      retryCount: prevState.retryCount + 1 
    }));
  };

  render() {
    const { children, maxRetries = 2, fallback } = this.props;
    const { retryCount } = this.state;

    if (fallback && retryCount > maxRetries) {
      return fallback;
    }

    return (
      <ErrorBoundary
        FallbackComponent={(props) => (
          <ProductionErrorFallback
            {...props}
            retryCount={retryCount}
            maxRetries={maxRetries}
          />
        )}
        onError={this.handleError}
        onReset={this.handleReset}
        resetKeys={[retryCount]}
      >
        {children}
      </ErrorBoundary>
    );
  }
}

export default ProductionErrorBoundary; 