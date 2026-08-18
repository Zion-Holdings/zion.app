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
        </p>
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
