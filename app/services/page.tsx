import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Services | Zion Tech Group',
  description: 'Explore Zion Tech Group services: AI implementation, managed IT, cybersecurity, cloud cost optimization, and automation.',
  alternates: { canonical: '/services/' },
};

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <main className="mx-auto max-w-6xl px-6 py-16">
        <h1 className="text-4xl font-bold">Our Services</h1>
        <p className="mt-4 text-slate-300">End-to-end AI and IT services with measurable outcomes.</p>
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          <a href="/services/ai-implementation/" className="rounded-2xl border border-slate-800 bg-slate-900/50 p-5 hover:border-purple-500/40 transition-colors">AI Implementation</a>
          <a href="/services/managed-it/" className="rounded-2xl border border-slate-800 bg-slate-900/50 p-5 hover:border-purple-500/40 transition-colors">Managed IT</a>
          <a href="/services/cybersecurity/" className="rounded-2xl border border-slate-800 bg-slate-900/50 p-5 hover:border-purple-500/40 transition-colors">Cybersecurity</a>
          <a href="/services/cloud-cost-optimization/" className="rounded-2xl border border-slate-800 bg-slate-900/50 p-5 hover:border-purple-500/40 transition-colors">Cloud Cost Optimization</a>
          <a href="/services/automation/" className="rounded-2xl border border-slate-800 bg-slate-900/50 p-5 hover:border-purple-500/40 transition-colors">Automation</a>
          <a href="/contact/" className="rounded-2xl border border-slate-800 bg-slate-900/50 p-5 hover:border-purple-500/40 transition-colors">Contact Us</a>
        </div>
      </main>
    </div>
  );
}
