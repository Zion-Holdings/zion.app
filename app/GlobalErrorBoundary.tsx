'use client';

import { useEffect, useState } from 'react';

export default function GlobalErrorBoundary({ children }: { children: React.ReactNode }) {
  const [error, setError] = useState<Error | null>(null);
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    const handler = (event: ErrorEvent) => {
      setHasError(true);
      setError(event.error ?? new Error(event.message));
      event.preventDefault();
    };
    const unhandled = (event: PromiseRejectionEvent) => {
      setHasError(true);
      setError(event.reason instanceof Error ? event.reason : new Error(String(event.reason)));
      event.preventDefault();
    };
    window.addEventListener('error', handler);
    window.addEventListener('unhandledrejection', unhandled);
    return () => {
      window.removeEventListener('error', handler);
      window.removeEventListener('unhandledrejection', unhandled);
    };
  }, []);

  if (hasError) {
    return (
      <main className="min-h-screen bg-slate-950 text-white flex items-center justify-center px-4">
        <div className="text-center max-w-lg">
          <span className="text-7xl block mb-6">⚠️</span>
          <h1 className="text-4xl font-bold text-white mb-4">Unexpected runtime error</h1>
          <p className="text-slate-400 mb-8">
            {error?.message || 'Something went wrong while loading the site. We’ve caught the error and kept navigation available.'}
          </p>
          <div className="flex gap-4 justify-center">
            <button
              onClick={() => {
                setHasError(false);
                setError(null);
              }}
              className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-3 rounded-lg font-semibold transition"
            >
              Try Again
            </button>
            <a
              href="/"
              className="bg-slate-700 hover:bg-slate-600 text-white px-8 py-3 rounded-lg font-semibold transition inline-flex items-center"
            >
              Go Home
            </a>
          </div>
          <p className="text-slate-500 text-sm mt-8">
            Need help? Contact us at{' '}
            <a href="mailto:kleber@ziontechgroup.com" className="text-purple-400 hover:underline">
              kleber@ziontechgroup.com
            </a>
          </p>
        </div>
      </main>
    );
  }

  return <>{children}</>;
}
