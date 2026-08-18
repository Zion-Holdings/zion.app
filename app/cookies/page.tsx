import PageWrapper from '@/components/PageWrapper';
import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Cookie Policy | Zion Tech Group',
  description: 'How Zion Tech Group uses cookies and similar technologies on our website.',
  openGraph: {
    title: 'Cookie Policy | Zion Tech Group',
    description: 'Cookie usage and preferences.',
    url: 'https://ziontechgroup.com/cookies/',
    type: 'website',
  },
  alternates: { canonical: '/cookies/' },
};

export default function CookiesPage() {
  return (
    <PageWrapper>
      <div className="container-page">
        <h1 className="text-4xl font-bold text-white mb-4">Cookie Policy</h1>
        <p className="text-slate-300 mb-8">Last updated: 2025</p>

        <section className="mb-10">
          <h2 className="text-xl font-semibold text-white mb-3">What Are Cookies</h2>
          <p className="text-slate-400 text-sm">Cookies are small text files stored on your device to improve your experience.</p>
        </section>

        <section className="mb-10">
          <h2 className="text-xl font-semibold text-white mb-3">How We Use Cookies</h2>
          <p className="text-slate-400 text-sm">We use cookies for analytics, preferences, and security.</p>
        </section>

        <section className="mb-10">
          <h2 className="text-xl font-semibold text-white mb-3">Managing Cookies</h2>
          <p className="text-slate-400 text-sm">You can manage cookies through your browser settings.</p>
        </section>

        <div className="mt-10 flex flex-col sm:flex-row gap-3">
          <Link href="/privacy/" className="btn-primary text-center">Privacy Policy</Link>
          <Link href="/contact/" className="btn-secondary text-center">Contact us</Link>
        </div>
      </div>
    </PageWrapper>
  );
}
