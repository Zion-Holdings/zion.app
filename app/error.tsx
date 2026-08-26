// app/error.tsx — Error Boundary
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
    <main className="min-h-screen bg-slate-950 flex items-center justify-center px-4">
      <div className="text-center max-w-lg">
        <span className="text-7xl block mb-6">⚠️</span>
        <h1 className="text-4xl font-bold text-white mb-4">Something went wrong</h1>
        <p className="text-slate-400 mb-8">
          {error?.message || 'An unexpected error occurred. Please try again.'}
        </p>
        <div className="flex gap-4 justify-center">
          <button
            onClick={reset}
            className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-3 rounded-lg font-semibold transition"
          >
            Try Again
          </button>
          <Link
            href="/"
            className="bg-slate-700 hover:bg-slate-600 text-white px-8 py-3 rounded-lg font-semibold transition"
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
    </main>
  );
}
