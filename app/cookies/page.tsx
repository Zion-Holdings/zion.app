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
    <section className="mt-12 rounded-2xl border border-slate-700 bg-slate-900/60 p-6">
<h2 className="text-xl font-bold text-white mb-2">Why it matters</h2>
<p className="text-slate-300">This page is part of Zion Tech Group's core catalog. It connects visitors to the right service, tool, or workflow without leaving the site.</p>
<ul className="list-disc pl-6 text-slate-300 space-y-1">
<li>Clear next steps aligned to the current page topic</li>
<li>Direct paths to contact, proposal, or demo flows</li>
<li>Consistent navigation and footer on every route</li>
</ul>
</section>
</main>
  
      <Footer />
    </div>);
}
