import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'AI Services Index | Zion Tech Group',
  description: 'Index of Zion Tech Group AI services and solutions.',
  openGraph: {
    title: 'Page',
    description: 'Index of Zion Tech Group AI services and solutions.',
    url: 'https://ziontechgroup.com',
    type: 'website',
  },
  alternates: { canonical: '/ai-services/' },
};

export default function AiServicesIndexPage() {
  return (
    <div className="max-w-5xl mx-auto px-6 py-16">
      <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">AI Services</h1>
      <p className="text-slate-300 text-lg leading-relaxed mb-8">
        A focused view of AI-native services for automation, assistants, analytics, and infrastructure.
      </p>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6">
          <h3 className="text-white font-semibold mb-2">AI automation</h3>
          <p className="text-slate-400 text-sm">Reduce manual work with triage, routing, and knowledge assistants.</p>
          <Link href="/services" className="text-purple-300 text-xs font-semibold mt-3 inline-block">Services →</Link>
        </div>
        <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6">
          <h3 className="text-white font-semibold mb-2">Managed AI</h3>
          <p className="text-slate-400 text-sm">Production monitoring, cost controls, and governance for AI features.</p>
          <Link href="/services" className="text-purple-300 text-xs font-semibold mt-3 inline-block">Services →</Link>
        </div>
        <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6">
          <h3 className="text-white font-semibold mb-2">AI strategy</h3>
          <p className="text-slate-400 text-sm">Roadmaps, use-case selection, and executive-ready ROI planning.</p>
          <Link href="/contact" className="text-purple-300 text-xs font-semibold mt-3 inline-block">Talk to us →</Link>
        </div>
      </div>
      <div className="flex flex-col sm:flex-row gap-3 mt-10">
        <Link href="/contact" className="btn-primary text-center">Talk to an Engineer</Link>
        <Link href="/services" className="btn-secondary text-center">All Services</Link>
      </div>
    </div>
  );
}
