import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Services | Zion Tech Group',
  description: 'AI, cybersecurity, automation, and managed IT services from Zion Tech Group.',
  alternates: { canonical: '/services/' },
};

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <main className="mx-auto max-w-6xl px-6 py-16">
        <h1 className="text-4xl font-bold">Services</h1>
        <p className="mt-4 text-slate-400">Explore our AI and IT service portfolio.</p>
        <div className="mt-8 grid gap-6 md:grid-cols-2">
          <Link href="/services/ai-email-intelligence/" className="rounded-2xl border border-slate-800 bg-slate-900/50 p-6 hover:border-purple-500/40">
            <h2 className="text-lg font-semibold text-white">AI Email Intelligence</h2>
            <p className="mt-2 text-sm text-slate-400">Email coaching, monitoring, and triage.</p>
          </Link>
          <Link href="/services/ai-cybersecurity/" className="rounded-2xl border border-slate-800 bg-slate-900/50 p-6 hover:border-purple-500/40">
            <h2 className="text-lg font-semibold text-white">AI Cybersecurity</h2>
            <p className="mt-2 text-sm text-slate-400">Threat detection, response, and compliance automation.</p>
          </Link>
          <Link href="/services/ai-development-acceleration/" className="rounded-2xl border border-slate-800 bg-slate-900/50 p-6 hover:border-purple-500/40">
            <h2 className="text-lg font-semibold text-white">Development Acceleration</h2>
            <p className="mt-2 text-sm text-slate-400">Ship faster with AI-assisted delivery.</p>
          </Link>
          <Link href="/services/cloud-cost-optimization-platform/" className="rounded-2xl border border-slate-800 bg-slate-900/50 p-6 hover:border-purple-500/40">
            <h2 className="text-lg font-semibold text-white">Cloud Cost Optimization</h2>
            <p className="mt-2 text-sm text-slate-400">Reduce waste and right-size spend.</p>
          </Link>
        </div>
      </main>
    </div>
  );
}
