import React from 'react';
import { ErrorBoundary, FallbackProps } from 'react-error-boundary';
import { logError } from '@/utils/logError';

function PageFallback({ error }: FallbackProps) {
  return (
    <div role="alert" className="p-4 text-center text-red-600">
      <p>Something went wrong.</p>
      {error && <pre className="whitespace-pre-wrap">{error.message}</pre>}
    </div>
  );
}

export default function ErrorGuard({ children }: { children: React.ReactNode }) {
  return (
    <ErrorBoundary FallbackComponent={PageFallback} onError={(err) => logError(err)}>
      {children}
    </ErrorBoundary>
  );
}
