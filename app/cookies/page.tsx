import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Cookie Policy',
  description: 'How Zion Tech Group uses cookies and similar technologies on our website.',
  alternates: { canonical: '/cookies/' },
};

export default function CookiesPage() {
  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <Navigation />
      <main className="min-h-screen bg-slate-950 py-20">
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
      </div>
    </main>
  
      <Footer />
    </div>);
}
