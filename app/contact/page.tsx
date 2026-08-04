import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Contact | Zion Tech Group',
  description: 'Talk to Zion Tech Group about AI, automation, security, and IT services.',
  alternates: { canonical: '/contact/' },
};

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <main className="mx-auto max-w-6xl px-6 py-16">
        <h1 className="text-4xl font-bold">Contact</h1>
        <p className="mt-4 text-slate-400">Tell us about your project. We respond within one business day.</p>
        <div className="mt-8 grid gap-6 md:grid-cols-2">
          <div className="rounded-2xl border border-slate-800 bg-slate-900/50 p-6">
            <h2 className="text-lg font-semibold text-white">Sales</h2>
            <p className="mt-2 text-sm text-slate-400">General inquiries, pricing, and partnerships.</p>
            <Link href="/consultation/" className="mt-4 inline-flex rounded-lg bg-white px-4 py-2 text-sm font-semibold text-slate-900">
              Book a consultation
            </Link>
          </div>
          <div className="rounded-2xl border border-slate-800 bg-slate-900/50 p-6">
            <h2 className="text-lg font-semibold text-white">Support</h2>
            <p className="mt-2 text-sm text-slate-400">Existing customers and urgent assistance.</p>
            <Link href="/configurator/" className="mt-4 inline-flex rounded-lg bg-white px-4 py-2 text-sm font-semibold text-slate-900">
              Open support configurator
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
}
