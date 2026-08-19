import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Micro SaaS | Zion Tech Group',
  description: 'Repeatable tools, automation products, and Micro SaaS offerings from Zion Tech Group.',
  openGraph: {
    title: 'Page',
    description: metadata.description,
    url: 'https://ziontechgroup.com',
    type: 'website',
  },
  alternates: { canonical: '/micro-saas/' },
};

export default function MicroSaaSPage() {
  return (
    <div className="max-w-5xl mx-auto px-6 py-16">
      <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">Micro SaaS</h1>
      <p className="text-slate-300 text-lg leading-relaxed mb-8">
        Repeatable, monetizable tools built on proven infrastructure and real customer feedback.
      </p>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6">
          <h3 className="text-white font-semibold mb-2">Developer tools</h3>
          <p className="text-slate-400 text-sm">Utilities, validators, and helpers that save time in daily workflows.</p>
          <Link href="/tools" className="text-purple-300 text-xs font-semibold mt-3 inline-block">Tools →</Link>
        </div>
        <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6">
          <h3 className="text-white font-semibold mb-2">Automation products</h3>
          <p className="text-slate-400 text-sm">Self-service automations that reduce manual work without custom builds.</p>
          <Link href="/services" className="text-purple-300 text-xs font-semibold mt-3 inline-block">Services →</Link>
        </div>
        <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6">
          <h3 className="text-white font-semibold mb-2">Go-to-market</h3>
          <p className="text-slate-400 text-sm">Pricing, onboarding, and support patterns for repeatable SaaS delivery.</p>
          <Link href="/contact" className="text-purple-300 text-xs font-semibold mt-3 inline-block">Talk to us →</Link>
        </div>
      </div>
      <div className="flex flex-col sm:flex-row gap-3 mt-10">
        <Link href="/contact" className="btn-primary text-center">Talk to an Engineer</Link>
        <Link href="/ai-services" className="btn-secondary text-center">AI Services</Link>
      </div>
    </div>
  );
}
