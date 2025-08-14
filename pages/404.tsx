import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="mx-auto max-w-2xl px-6 py-24 text-center">
      <p className="text-sm text-white/60">404</p>
      <h1 className="mt-2 text-3xl font-bold">Page not found</h1>
      <p className="mt-2 text-white/70">The page you’re looking for doesn’t exist or has moved.</p>
      <div className="mt-6 flex justify-center gap-3">
        <Link href="/" className="rounded-md bg-white/90 px-5 py-2 font-semibold text-slate-900 hover:bg-white">Go home</Link>
        <Link href="/search" className="rounded-md border border-white/10 bg-white/5 px-5 py-2 font-semibold hover:bg-white/10">Search</Link>
      </div>
    </div>
  );
}


