import PageWrapper from '@/components/PageWrapper';
import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Test Page | Zion Tech Group',
  description: 'Internal test page for monitoring and validation.',
  alternates: { canonical: 'https://ziontechgroup.com/test-123/' },
  robots: 'noindex, nofollow',
};

export default function Test123Page() {
  return (
    <PageWrapper>
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-white mb-4">Test Page</h1>
        <p className="text-slate-300 mb-6">
          This is a test page for internal validation and smoke testing.
          It verifies that dynamic routing and static export work correctly.
          This page is intentionally minimal and should not appear in search results.
        </p>

        <div className="glass-card p-6 mb-8">
          <h2 className="text-xl font-bold text-white mb-3">Validation Checklist</h2>
          <ul className="text-slate-300 text-sm space-y-2">
            <li>✓ Next.js routing resolves this path correctly</li>
            <li>✓ Static export generates the corresponding HTML file</li>
            <li>✓ PageShell and global components load without errors</li>
            <li>✓ Navigation links and redirects behave as expected</li>
            <li>✓ Metadata (title, description, canonical) is rendered</li>
          </ul>
        </div>

        <div className="glass-card p-6 mb-8">
          <h2 className="text-xl font-bold text-white mb-3">Environment Notes</h2>
          <p className="text-slate-300 text-sm mb-4">
            This page is part of the Zion Tech Group website infrastructure.
            It is used by automated monitoring systems to verify deployment health
            and routing integrity after builds and deploys.
          </p>
          <p className="text-slate-300 text-sm">
            If you are a visitor and landed here, please use the navigation or the link below
            to return to the main site. We apologize for the inconvenience.
          </p>
        </div>

        <div className="glass-card p-6 mb-8">
          <h2 className="text-xl font-bold text-white mb-3">Quick Links</h2>
          <div className="flex flex-wrap gap-3">
            <Link href="/" className="text-purple-400 hover:underline text-sm">Home</Link>
            <Link href="/about" className="text-purple-400 hover:underline text-sm">About</Link>
            <Link href="/services" className="text-purple-400 hover:underline text-sm">Services</Link>
            <Link href="/contact" className="text-purple-400 hover:underline text-sm">Contact</Link>
            <Link href="/solutions" className="text-purple-400 hover:underline text-sm">Solutions</Link>
            <Link href="/blog" className="text-purple-400 hover:underline text-sm">Blog</Link>
            <Link href="/case-studies" className="text-purple-400 hover:underline text-sm">Case Studies</Link>
            <Link href="/industries" className="text-purple-400 hover:underline text-sm">Industries</Link>
            <Link href="/tools" className="text-purple-400 hover:underline text-sm">Tools</Link>
            <Link href="/pricing" className="text-purple-400 hover:underline text-sm">Pricing</Link>
          </div>
        </div>

        <Link
          href="/"
          className="inline-flex items-center rounded-2xl bg-gradient-to-r from-purple-600 to-pink-600 px-6 py-3 text-sm font-semibold text-white hover:opacity-90 transition-opacity"
        >
          ← Back to Home
        </Link>
      </div>
    </PageWrapper>
  );
}
