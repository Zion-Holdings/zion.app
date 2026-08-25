// app/not-found.tsx — Custom 404 Page (wrapped by PageShell from layout.tsx for nav/footer)
import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: '404 - Page Not Found | Zion Tech Group',
  description: 'This page doesn\'t exist or has been moved. Let\'s get you back on track to our AI and IT services.',
  alternates: {
    canonical: 'https://ziontechgroup.com/404',
  },
};

const POPULAR = [
  { href: '/', label: 'Home' },
  { href: '/services/', label: 'Services' },
  { href: '/about/', label: 'About' },
  { href: '/contact/', label: 'Contact' },
  { href: '/pricing/', label: 'Pricing' },
  { href: '/blog/', label: 'Blog' },
  { href: '/agents-monitoring/', label: 'AI Agents' },
  { href: '/status/', label: 'Status' },
];

export default function NotFound() {
  return (
    <div className="container-page py-24 text-center">
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

      <div className="glass-card max-w-2xl mx-auto text-left p-6">
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
  );
}
