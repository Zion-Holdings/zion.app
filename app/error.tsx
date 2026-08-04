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
    <main className="min-h-screen bg-slate-950 flex items-center justify-center">
      <div className="container-page text-center">
        <h1 className="text-4xl font-bold text-white mb-4">Something went wrong</h1>
        <p className="text-slate-400 mb-8">We encountered an unexpected error. Please try again.</p>
        <div className="flex gap-4 justify-center">
          <button className="btn-primary" onClick={reset}>Try again</button>
          <Link href="/" className="btn-secondary">Go Home</Link>
        </div>
      </div>
    </main>
  );
}
