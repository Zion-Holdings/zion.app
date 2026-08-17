// app/error.tsx — Error Boundary (uses PageShell from layout.tsx for nav/footer consistency)
'use client';

import Link from 'next/link';

export default function ErrorPage({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <div className="container-page py-24 text-center">
      <span className="text-7xl block mb-6">⚠️</span>
      <h1 className="text-4xl font-bold text-white mb-4">Something went wrong</h1>
      <p className="text-slate-400 mb-8 max-w-lg mx-auto">
        {error?.message || 'An unexpected error occurred. Please try again.'}
      </p>
      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <button
          onClick={reset}
          className="btn-secondary px-8 py-3 text-lg"
        >
          Try Again
        </button>
        <Link
          href="/"
          className="btn-secondary px-8 py-3 text-lg"
        >
          Go Home
        </Link>
      </div>
      <p className="text-slate-500 text-sm mt-8">
        Need help? Contact us at{' '}
        <a href="mailto:kleber@ziontechgroup.com" className="text-purple-400 hover:underline">
          kleber@ziontechgroup.com
        </a>
      </p>
    </div>
  );
}
