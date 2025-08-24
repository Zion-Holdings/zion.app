import React from 'react';
import { ErrorBoundary } from './components/ErrorBoundary';
import { FullPageSkeleton } from './components/LoadingSkeleton';
import App from './App';

export function AppWrapper() {
  return (
    <ErrorBoundary>
      <App />
    </ErrorBoundary>
  );
}