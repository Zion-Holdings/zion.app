import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description: 'How Zion Tech Group collects, uses, and protects your personal information.',
  alternates: { canonical: '/privacy/' },
};

export default function PrivacyPage() {
  return (
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
    </main>
  );
}