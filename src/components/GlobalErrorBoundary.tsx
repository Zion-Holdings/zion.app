import React from 'react';
import { ErrorBoundary, FallbackProps } from 'react-error-boundary';
import { getEnqueueSnackbar } from '@/context/SnackbarContext';

function GlobalErrorFallback({ error, resetErrorBoundary }: FallbackProps) {
  return (
    <div role="alert" className="p-4 text-center space-y-2">
      <p>Something went wrong:</p>
      <pre className="text-red-500">{error.message}</pre>
      <button onClick={resetErrorBoundary} className="underline">
        Retry
      </button>
    </div>
  );
}

export default function GlobalErrorBoundary({ children }: { children: React.ReactNode }) {
  const handleError = (error: Error) => {
    try {
      const enqueueSnackbar = getEnqueueSnackbar();
      enqueueSnackbar(error.message, { variant: 'error' });
    } catch {
      // noop
    }
  };

  return (
    <ErrorBoundary FallbackComponent={GlobalErrorFallback} onError={handleError}>
      {children}
    </ErrorBoundary>
  );
}
