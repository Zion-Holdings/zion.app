import React from 'react';
import { ErrorBoundary, FallbackProps } from 'react-error-boundary';
import { useRouter } from 'next/router';
import { useAuth } from '@/hooks/useAuth';
import {logErrorToProduction} from '@/utils/logError';

function ErrorFallback({ error, resetErrorBoundary }: FallbackProps) {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center text-center space-y-4 p-4">
      <h1 className="text-2xl font-semibold">Something went wrong.</h1>
      {error?.message && <p className="text-red-500 break-words">{error.message}</p>}
      <button
        onClick={resetErrorBoundary}
        className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
      >
        Retry
      </button>
    </div>
  );
}

export default function Custom500() {
  const { user } = useAuth();
  const router = useRouter();

  const handleError = (error: Error, info: React.ErrorInfo) => {
    logErrorToProduction(error, {
      route: router.asPath,
      componentStack: info.componentStack ?? undefined,
      userId: user?.id,
    });
  };

  const handleReset = () => {
    router.reload();
  };

  return (
    <ErrorBoundary
      FallbackComponent={ErrorFallback}
      onError={handleError}
      onReset={handleReset}
    >
      <div />
    </ErrorBoundary>
  );
}
