console.log("GlobalErrorBoundary.tsx: Script start");
import React from 'react';
import { ErrorBoundary, FallbackProps } from 'react-error-boundary';
import { getEnqueueSnackbar } from '@/context/SnackbarContext';

function GlobalErrorFallback({ error, resetErrorBoundary }: FallbackProps) {
  console.log("GlobalErrorBoundary.tsx: GlobalErrorFallback rendered");
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
    console.log("GlobalErrorBoundary.tsx: handleError called", error);
    try {
      const enqueueSnackbar = getEnqueueSnackbar();
      enqueueSnackbar(error.message, { variant: 'error' });
    } catch {
      // noop
    }
  };

  console.log("GlobalErrorBoundary.tsx: Rendering children");
  return (
    <ErrorBoundary FallbackComponent={GlobalErrorFallback} onError={handleError}>
      {children}
    </ErrorBoundary>
  );
}
