import React from 'react';
import { ErrorBoundary, FallbackProps } from 'react-error-boundary';
import { logError } from '@/utils/logError';

function RootFallback({ error, resetErrorBoundary }: FallbackProps) {
  return (
    <div role="alert" className="p-4 text-center">
      <p>Something went wrong.</p>
      {error && (
        <>
          <pre className="text-red-500 whitespace-pre-wrap">{error.message}</pre>
          {error.stack && (
            <pre className="text-xs mt-2 whitespace-pre-wrap text-left overflow-x-auto">
              {error.stack}
            </pre>
          )}
        </>
      )}
      <button onClick={resetErrorBoundary} className="mt-2 px-4 py-2 bg-blue-500 text-white rounded">Try again</button>
    </div>
  );
}

export default function RootErrorBoundary({ children }: { children: React.ReactNode }) {
  return (
    <ErrorBoundary FallbackComponent={RootFallback} onError={(error) => logError(error, { type: 'UI Error' })}>
      <React.Suspense fallback={<div>Loading...</div>}>
        {children}
      </React.Suspense>
    </ErrorBoundary>
  );
}
