import Link from 'next/link';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

export const metadata = {
  title: 'Agents Monitoring | Zion Tech Group',
  description: 'Monitor AI agents, workflow performance, and deployment health from one dashboard.',
  alternates: { canonical: '/agents-monitoring/' },
  openGraph: {
    title: 'Agents Monitoring | Zion Tech Group',
    description: 'Monitor AI agents, workflow performance, and deployment health from one dashboard.',
    url: 'https://ziontechgroup.com/agents-monitoring/',
    type: 'page',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Agents Monitoring | Zion Tech Group',
    description: 'Monitor AI agents, workflow performance, and deployment health from one dashboard.',
  },
};

export default function AgentsMonitoringPage() {
  return (
    <>
      <Navigation />
      <main className="min-h-screen bg-slate-950 py-20 px-4">
        <div className="container mx-auto max-w-4xl">
          <h1 className="text-4xl font-bold text-white mb-6">Agents Monitoring</h1>
          <p className="text-slate-300 text-lg mb-8">
            Track latency, failure rate, and task throughput across autonomous agents.
          </p>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="rounded-2xl border border-violet-500/30 bg-slate-900/60 p-6">
              <h2 className="text-xl font-bold text-white mb-2">Monitoring</h2>
              <p className="text-slate-300">Track latency, failure rate, and task throughput across autonomous agents.</p>
            </div>
            <div className="rounded-2xl border border-violet-500/30 bg-slate-900/60 p-6">
              <h2 className="text-xl font-bold text-white mb-2">Operations</h2>
              <p className="text-slate-300">Review runbooks, escalation paths, and operator handoff status.</p>
            </div>
          </div>
          <div className="mt-10 flex flex-wrap gap-4">
            <Link href="/dashboard/" className="rounded-xl bg-white px-6 py-3 text-sm font-semibold text-slate-900">Dashboard</Link>
            <Link href="/contact" className="rounded-xl border border-white/30 px-6 py-3 text-sm font-semibold text-white">Talk to us</Link>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
