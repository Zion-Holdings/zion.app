import PageWrapper from '@/components/PageWrapper';
import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'System Status',
  description: 'Real-time status of Zion Tech Group services — APIs, infrastructure, and platform endpoints.',
  alternates: { canonical: 'https://ziontechgroup.com/status-page/' },
};

export default function StatusPagePage() {
  return (
    <PageWrapper>
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="mb-3 text-xs font-bold uppercase tracking-[0.2em] text-purple-400">
            System Status
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-5">
            System Status
          </h1>
          <p className="text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed">
            Real-time status of Zion Tech Group services, APIs, and platform endpoints.
            All systems are monitored 24/7 with automated incident response.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 mb-12">
          {[
            { name: 'Main Website', status: 'Operational', uptime: '99.98%' },
            { name: 'API Gateway', status: 'Operational', uptime: '99.95%' },
            { name: 'AI Service Endpoints', status: 'Operational', uptime: '99.92%' },
            { name: 'Email Infrastructure', status: 'Operational', uptime: '99.99%' },
          ].map((s) => (
            <div key={s.name} className="bg-slate-900/60 border border-slate-800 rounded-xl p-6 flex items-center justify-between">
              <div>
                <h3 className="text-white font-semibold">{s.name}</h3>
                <p className="text-slate-400 text-sm">{s.uptime} uptime</p>
              </div>
              <span className="text-green-400 text-sm font-medium">● {s.status}</span>
            </div>
          ))}
        </div>

        <div className="bg-slate-900/60 border border-slate-800 rounded-xl p-6 mb-8">
          <h2 className="text-xl font-bold text-white mb-3">Report an Issue</h2>
          <p className="text-slate-300 text-sm mb-4">
            If you are experiencing an outage not listed above, contact our operations team immediately.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="mailto:ops@ziontechgroup.com"
              className="btn-primary px-6 py-3 text-sm"
            >
              ✉ Email Operations
            </a>
            <Link href="/status" className="btn-secondary px-6 py-3 text-sm">
              → Live Status Tool
            </Link>
          </div>
        </div>
      </PageWrapper>
  );
}
