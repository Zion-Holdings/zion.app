import React, { Component } from 'react';
import { RefreshCw, WifiOff } from '@/components/ui/icons';
import type { ReactNode } from 'react';
import { QueryClient } from '@tanstack/react-query';
import { Button } from '@/components/ui/button';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';

import { logErrorToProduction } from '@/utils/productionLogger';

interface ApiErrorBoundaryProps {
  children: ReactNode;
  queryClient?: QueryClient;
  fallback?: ReactNode;
}

interface ApiErrorBoundaryState {
  hasError: boolean;
  error: Error | null;
  errorInfo: unknown;
  isRetrying: boolean;
  isOnline: boolean;
}

export class ApiErrorBoundary extends Component<
  ApiErrorBoundaryProps,
  ApiErrorBoundaryState
> {
  private retryTimeoutId: NodeJS.Timeout | null = null;

  constructor(props: ApiErrorBoundaryProps) {
    super(props);
    this.state = {
      hasError: false,
      error: null,
      errorInfo: null,
      isRetrying: false,
      isOnline: typeof navigator !== 'undefined' ? navigator.onLine : true,
    };
  }

  static getDerivedStateFromError(
    error: Error,
  ): Partial<ApiErrorBoundaryState> {
    return {
      hasError: true,
      error,
    };
  }

  override async componentDidCatch(error: Error, errorInfo: unknown) {
    // Log to Sentry
    if (typeof window === 'undefined') {
      const Sentry = (await import('@sentry/nextjs')).default;
      Sentry.withScope((scope) => {
        scope.setTag('errorBoundary', 'ApiErrorBoundary');
        if (typeof errorInfo === 'object' && errorInfo !== null) {
          scope.setContext('errorInfo', errorInfo as Record<string, unknown>);
        } else {
          scope.setContext('errorInfo', null);
        }
        scope.setLevel('error');
        Sentry.captureException(error);
      });
    }

    this.setState({
      error,
      errorInfo,
    });

    if (typeof errorInfo === 'object' && errorInfo !== null) {
      logErrorToProduction(
        'ApiErrorBoundary caught an error:',
        error,
        errorInfo as Record<string, unknown>,
      );
    } else {
      logErrorToProduction('ApiErrorBoundary caught an error:', error);
    }
  }

  override componentDidMount() {
    // Listen for online/offline events
    if (typeof window !== 'undefined') {
      window.addEventListener('online', this.handleOnline);
      window.addEventListener('offline', this.handleOffline);
    }
  }

  override componentWillUnmount() {
    if (typeof window !== 'undefined') {
      window.removeEventListener('online', this.handleOnline);
      window.removeEventListener('offline', this.handleOffline);
    }
    if (this.retryTimeoutId) {
      clearTimeout(this.retryTimeoutId);
    }
  }

  handleOnline = () => {
    this.setState({ isOnline: true });
    // Auto-retry when coming back online
    if (this.state.hasError) {
      this.handleRetry();
    }
  };

  handleOffline = () => {
    this.setState({ isOnline: false });
  };

  handleRetry = async () => {
    this.setState({ isRetrying: true });

    try {
      // Invalidate all queries to force refetch
      if (this.props.queryClient) {
        await this.props.queryClient.invalidateQueries();
        await this.props.queryClient.refetchQueries();
      }

      // Reset error state after a brief delay
      this.retryTimeoutId = setTimeout(() => {
        this.setState({
          hasError: false,
          error: null,
          errorInfo: null,
          isRetrying: false,
        });
      }, 500);
    } catch (retryError) {
      logErrorToProduction('Retry failed:', { data: retryError });
      if (typeof window === 'undefined') {
        const Sentry = (await import('@sentry/nextjs')).default;
        Sentry.captureException(retryError);
      }
      this.setState({ isRetrying: false });
    }
  };

  override render() {
    if (this.state.hasError) {
      // Check if it's a network-related error
      const isNetworkError =
        this.state.error?.message?.includes('fetch') ||
        this.state.error?.message?.includes('network') ||
        this.state.error?.message?.includes('timeout') ||
        !this.state.isOnline;

      // Use custom fallback if provided
      if (this.props.fallback) {
        return this.props.fallback;
      }

      return (
        <div className="flex min-h-screen items-center justify-center p-4">
          <div className="w-full max-w-md space-y-4">
            <Alert variant="destructive">
              <div className="flex items-center gap-2">
                {isNetworkError ? (
                  <WifiOff className="h-4 w-4" />
                ) : (
                  <RefreshCw className="h-4 w-4" />
                )}
                <AlertTitle>
                  {isNetworkError
                    ? 'Connection Problem'
                    : 'Something went wrong'}
                </AlertTitle>
              </div>
              <AlertDescription className="mt-2">
                {isNetworkError
                  ? !this.state.isOnline
                    ? 'You appear to be offline. Please check your internet connection.'
                    : 'Unable to connect to our servers. This might be a temporary network issue.'
                  : 'An unexpected error occurred while loading the page.'}
              </AlertDescription>
            </Alert>

            <div className="flex flex-col gap-2">
              <Button
                onClick={this.handleRetry}
                disabled={this.state.isRetrying}
                className="w-full"
              >
                {this.state.isRetrying ? (
                  <>
                    <RefreshCw className="mr-2 h-4 w-4 animate-spin" />
                    Retrying...
                  </>
                ) : (
                  <>
                    <RefreshCw className="mr-2 h-4 w-4" />
                    Try Again
                  </>
                )}
              </Button>

              <Button
                variant="outline"
                onClick={() => window.location.reload()}
                className="w-full"
              >
                Reload Page
              </Button>
            </div>

            {!this.state.isOnline && (
              <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground">
                <WifiOff className="h-4 w-4" />
                <span>Offline</span>
              </div>
            )}

            {process.env.NODE_ENV === 'development' && this.state.error && (
              <details className="mt-4 rounded border p-2 text-xs">
                <summary className="cursor-pointer font-medium">
                  Debug Info (Development Only)
                </summary>
                <pre className="mt-2 whitespace-pre-wrap break-all">
                  {this.state.error.toString()}
                  {typeof this.state.errorInfo === 'object' &&
                  this.state.errorInfo !== null &&
                  'componentStack' in this.state.errorInfo &&
                  typeof (this.state.errorInfo as { componentStack?: unknown })
                    .componentStack === 'string'
                    ? (this.state.errorInfo as { componentStack: string })
                        .componentStack
                    : ''}
                </pre>
              </details>
            )}
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

// Hook for accessing query client in function components
export const useApiErrorHandler = () => {
  const handleApiError = (_error: Error) => {
    if (typeof window === 'undefined') {
      import('@sentry/nextjs').then((mod) => {
        const Sentry = mod.default;
        Sentry.withScope((scope) => {
          scope.setTag('source', 'useApiErrorHandler');
          scope.setLevel('error');
          Sentry.captureException(error);
        });
      });
    }
  };

  return { handleApiError };
};
