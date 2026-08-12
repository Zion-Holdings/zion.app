// app/not-found.tsx — Custom 404 Page with navigation
import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: '404 - Page Not Found | Zion Tech Group',
  description: "This page doesn't exist or has been moved. Browse our AI services, IT solutions, and enterprise automation offerings.",
  alternates: { canonical: 'https://ziontechgroup.com/404' },
};

const quickLinks = [
  { href: '/', label: '🏠 Home' },
  { href: '/services/', label: '🛠️ Browse Services' },
  { href: '/about/', label: 'About Us' },
  { href: '/ai-lab/', label: 'AI Lab' },
  { href: '/blog/', label: 'Blog' },
  { href: '/case-studies/', label: 'Case Studies' },
  { href: '/pricing/', label: 'Pricing' },
  { href: '/contact/', label: '📧 Contact Us' },
];

const serviceLinks = [
  { href: '/ai/', label: 'AI & Machine Learning' },
  { href: '/automation/', label: 'Workflow Automation' },
  { href: '/cloud/', label: 'Cloud & Infrastructure' },
  { href: '/cybersecurity/', label: 'Cybersecurity' },
  { href: '/data-analytics/', label: 'Data & Analytics' },
  { href: '/products/', label: 'AI Products' },
  { href: '/free-tools/', label: 'Free AI Tools' },
  { href: '/tools/', label: 'Developer Tools' },
];

export default function NotFound() {
  return (
    <main className="min-h-screen bg-slate-950 text-white flex items-center justify-center px-4 py-20">
      <div className="text-center max-w-4xl mx-auto">
        <div className="text-8xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent mb-4">404</div>
        <h1 className="text-3xl font-bold text-white mb-3">Page Not Found</h1>
        <p className="text-slate-400 mb-8 text-lg max-w-2xl mx-auto">
          This page doesn't exist or has been moved. Let's get you back on track.
          Browse our AI services, IT solutions, and enterprise automation offerings below.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
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

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left mb-12">
          <div>
            <h2 className="text-xl font-semibold text-white mb-4">Quick Links</h2>
            <div className="grid grid-cols-1 gap-2">
              {quickLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-slate-300 hover:text-purple-400 transition block py-1"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
          <div>
            <h2 className="text-xl font-semibold text-white mb-4">Services & Solutions</h2>
            <div className="grid grid-cols-1 gap-2">
              {serviceLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-slate-300 hover:text-purple-400 transition block py-1"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-slate-800 text-center text-sm text-slate-500">
          <p>Can't find what you're looking for? Email <a href="mailto:kleber@ziontechgroup.com" className="text-purple-400 hover:underline">kleber@ziontechgroup.com</a></p>
        </div>
      </div>
    </main>
  );
}
