import React, { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { AlertTriangle, RefreshCw, Home, Mail } from "lucide-react";

interface ErrorBoundaryProps {
  children: React.ReactNode;
  fallback?: React.ReactNode;
}

interface ErrorState {
  hasError: boolean;
  error?: Error;
  errorInfo?: any;
}

export function ErrorBoundary({ children, fallback }: ErrorBoundaryProps) {
  const [errorState, setErrorState] = useState<ErrorState>({ hasError: false });

  useEffect(() => {
    const handleError = (error: Error, errorInfo: any) => {
      console.error('ErrorBoundary caught an error:', error, errorInfo);
      setErrorState({
        hasError: true,
        error,
        errorInfo
      });
      logErrorToService(error, errorInfo);
    };

    window.addEventListener('error', (event) => {
      handleError(event.error || new Error(event.message), { componentStack: event.filename });
    });

    window.addEventListener('unhandledrejection', (event) => {
      handleError(new Error(event.reason), { componentStack: 'Unhandled Promise Rejection' });
    });

    return () => {
      window.removeEventListener('error', handleError as any);
      window.removeEventListener('unhandledrejection', handleError as any);
    };
  }, []);

  const logErrorToService = (error: Error, errorInfo: any) => {
    // In production, this would send to a monitoring service
    console.log('Sending error to monitoring service:', { error, errorInfo });
  };

  const handleRetry = () => {
    setErrorState({ hasError: false, error: undefined, errorInfo: undefined });
  };

  const handleGoHome = () => {
    window.location.href = '/';
  };

  const handleReportIssue = () => {
    const subject = encodeURIComponent('Error Report - Zion Tech Group');
    const body = encodeURIComponent(`
Error Details:
${errorState.error?.message || 'Unknown error'}

Stack Trace:
${errorState.error?.stack || 'No stack trace available'}

Component Stack:
${errorState.errorInfo?.componentStack || 'No component stack available'}

User Agent:
${navigator.userAgent}

URL:
${window.location.href}

Please describe what you were doing when this error occurred:
    `);
    window.location.href = `mailto:support@ziontechgroup.com?subject=${subject}&body=${body}`;
  };

  if (errorState.hasError) {
    if (fallback) {
      return <>{fallback}</>;
    }

    return (
      <div className="min-h-screen bg-background flex items-center justify-center p-4">
        <div className="max-w-md w-full text-center space-y-6">
          <div className="mx-auto w-16 h-16 bg-red-500/10 rounded-full flex items-center justify-center">
            <AlertTriangle className="w-8 h-8 text-red-500" />
          </div>
          <div className="space-y-2">
            <h1 className="text-2xl font-bold text-foreground">
              Oops! Something went wrong
            </h1>
            <p className="text-muted-foreground">
              We're sorry, but something unexpected happened. Our team has been notified and is working to fix this issue.
            </p>
          </div>
          {errorState.error && (
            <details className="text-left bg-muted p-4 rounded-lg">
              <summary className="cursor-pointer font-medium text-sm mb-2">
                Error Details
              </summary>
              <div className="text-xs space-y-2">
                <div>
                  <strong>Message:</strong> {errorState.error.message}
                </div>
                {errorState.error.stack && (
                  <div>
                    <strong>Stack:</strong>
                    <pre className="whitespace-pre-wrap mt-1 bg-background p-2 rounded text-xs">
                      {errorState.error.stack}
                    </pre>
                  </div>
                )}
              </div>
            </details>
          )}
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Button
              onClick={handleRetry}
              className="flex items-center gap-2"
              variant="default"
            >
              <RefreshCw className="w-4 h-4" />
              Try Again
            </Button>
            <Button
              onClick={handleGoHome}
              variant="outline"
              className="flex items-center gap-2"
            >
              <Home className="w-4 h-4" />
              Go Home
            </Button>
          </div>
          <div className="pt-4 border-t border-border">
            <p className="text-sm text-muted-foreground mb-3">
              Still having issues?
            </p>
            <Button
              onClick={handleReportIssue}
              variant="ghost"
              size="sm"
              className="flex items-center gap-2 mx-auto"
            >
              <Mail className="w-4 h-4" />
              Report Issue
            </Button>
          </div>
          <div className="text-xs text-muted-foreground">
            <p>Need immediate help? Contact our support team:</p>
            <p className="font-medium">support@ziontechgroup.com</p>
          </div>
        </div>
      </div>
    );
  }
  return <>{children}</>;
}

export function useErrorHandler() {
  return (error: Error, errorInfo?: any) => {
    console.error('Error caught by useErrorHandler:', error, errorInfo);
    // In production, this would send to a monitoring service
    console.log('Sending error to monitoring service:', { error, errorInfo });
  };
}

export function ErrorDisplay({
  error,
  onRetry,
  className
}: {
  error: Error;
  onRetry?: () => void;
  className?: string;
}) {
  return (
    <div className={`p-4 border border-red-200 bg-red-50 rounded-lg ${className || ''}`}>
      <div className="flex items-start gap-3">
        <AlertTriangle className="w-5 h-5 text-red-500 mt-0.5 flex-shrink-0" />
        <div className="flex-1">
          <h3 className="font-medium text-red-800">Something went wrong</h3>
          <p className="text-sm text-red-700 mt-1">{error.message}</p>
          {onRetry && (
            <Button
              onClick={onRetry}
              variant="outline"
              size="sm"
              className="mt-3"
            >
              Try Again
            </Button>
          )}
        </div>
      </div>
    </div>
  );
}