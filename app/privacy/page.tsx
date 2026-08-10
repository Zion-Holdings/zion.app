import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description: 'How Zion Tech Group collects, uses, and protects your personal information.',
  alternates: { canonical: '/privacy/' },
};

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <Navigation />
      <main className="min-h-screen bg-slate-950 py-20">
      <div className="container-page">
        <h1 className="text-4xl font-bold text-white mb-4">Privacy Policy</h1>
        <p className="text-slate-300 mb-8">Last updated: 2025</p>
        <section className="mb-10">
          <h2 className="text-xl font-semibold text-white mb-3">Information We Collect</h2>
          <p className="text-slate-400 text-sm">We collect contact information, usage data, and cookies to improve our services.</p>
        </section>
        <section className="mb-10">
          <h2 className="text-xl font-semibold text-white mb-3">How We Use Information</h2>
          <p className="text-slate-400 text-sm">We use data to provide services, communicate, and improve the platform.</p>
        </section>
        <section className="mb-10">
          <h2 className="text-xl font-semibold text-white mb-3">Data Protection</h2>
          <p className="text-slate-400 text-sm">We implement security controls to protect your information.</p>
        </section>
        <section className="mb-10">
          <h2 className="text-xl font-semibold text-white mb-3">Contact</h2>
          <p className="text-slate-400 text-sm">For privacy questions, contact kleber@ziontechgroup.com.</p>
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