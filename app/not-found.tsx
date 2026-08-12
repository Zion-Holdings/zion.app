// app/not-found.tsx — Custom 404 Page with navigation
import Link from 'next/link';

export const metadata = {
  title: '404 - Page Not Found | Zion Tech Group',
  description: 'This page doesn\'t exist or has been moved. Browse our AI services, IT solutions, and enterprise automation offerings.',
  alternates: { canonical: 'https://ziontechgroup.com/404' },
};

export default function NotFound() {
  return (
    <main className="min-h-screen bg-slate-950 text-white flex items-center justify-center px-4 py-20">
      <div className="text-center max-w-lg">
        <div className="text-8xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent mb-4">404</div>
        <h1 className="text-3xl font-bold text-white mb-3">Page Not Found</h1>
        <p className="text-slate-400 mb-8 text-lg">
          This page doesn&apos;t exist or has been moved. Let&apos;s get you back on track.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/" className="btn-primary px-8 py-3 text-lg">
            🏠 Go Home
          </Link>
          <Link href="/services/" className="btn-secondary px-8 py-3 text-lg">
            🛠️ Browse Services
          </Link>
          <Link href="/contact/" className="btn-secondary px-8 py-3 text-lg">
            📧 Contact Us
          </Link>
        </div>
        <div className="mt-12 grid grid-cols-2 md:grid-cols-3 gap-3 text-sm">
          <Link href="/about/" className="text-slate-400 hover:text-purple-400 transition">About</Link>
          <Link href="/pricing/" className="text-slate-400 hover:text-purple-400 transition">Pricing</Link>
          <Link href="/blog/" className="text-slate-400 hover:text-purple-400 transition">Blog</Link>
          <Link href="/careers/" className="text-slate-400 hover:text-purple-400 transition">Careers</Link>
          <Link href="/ai-lab/" className="text-slate-400 hover:text-purple-400 transition">AI Lab</Link>
          <Link href="/contact/" className="text-slate-400 hover:text-purple-400 transition">Contact</Link>
        </div>
      </div>
    </main>
  );
}
