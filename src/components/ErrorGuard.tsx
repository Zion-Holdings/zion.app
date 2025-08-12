import React from 'react';
import { ErrorBoundary, FallbackProps } from 'react-error-boundary';
import {logErrorToProduction} from '@/utils/productionLogger';

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
    <ErrorBoundary FallbackComponent={PageFallback} onError={(err) => logErrorToProduction(err instanceof Error ? err.message : String(err), err instanceof Error ? err : undefined)}>
      {children}
    </ErrorBoundary>
  );
}
