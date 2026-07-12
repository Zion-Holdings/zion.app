// app/not-found.tsx — Custom 404 Page
import Link from 'next/link';

const POPULAR = [
  { href: '/', label: 'Home' },
  { href: '/services/', label: 'Services' },
  { href: '/about/', label: 'About' },
  { href: '/contact/', label: 'Contact' },
  { href: '/pricing/', label: 'Pricing' },
  { href: '/blog/', label: 'Blog' },
  { href: '/dashboard/', label: 'Dashboard' },
  { href: '/status/', label: 'Status' },
  { href: '/health/', label: 'Health' },
];

export default function NotFound() {
  return (
    <main className="min-h-screen bg-slate-950 text-white flex items-center justify-center px-4">
      <div className="text-center max-w-2xl w-full">
        <div className="text-8xl font-bold gradient-text mb-4">404</div>
        <h1 className="text-3xl font-bold mb-3">Page Not Found</h1>
        <p className="text-slate-400 mb-8 text-lg">
          This page doesn&apos;t exist or has been moved. Let&apos;s get you back on track.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-10">
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

        <div className="bg-slate-900/60 border border-slate-800 rounded-xl p-6 text-left">
          <h2 className="text-lg font-semibold text-white mb-3">Popular pages</h2>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            {POPULAR.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 text-sm px-3 py-2 transition-colors"
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
