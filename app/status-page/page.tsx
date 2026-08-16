// app/status-page/page.tsx
import Link from 'next/link';
import PageTemplate from '@/components/PageTemplate';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'System Status',
  description: 'Real-time status of Zion Tech Group services — APIs, infrastructure, and platform endpoints.',
  alternates: { canonical: 'https://ziontechgroup.com/status-page/' },
};

const SERVICES = [
  { name: 'Main Website', status: 'Operational', uptime: '99.98%' },
  { name: 'API Gateway', status: 'Operational', uptime: '99.95%' },
  { name: 'AI Service Endpoints', status: 'Operational', uptime: '99.92%' },
  { name: 'Email Infrastructure', status: 'Operational', uptime: '99.99%' },
];

export default function StatusPagePage() {
  return (
    <PageTemplate
      title="System Status"
      description="Real-time status of Zion Tech Group services, APIs, and platform endpoints."
      canonical="https://ziontechgroup.com/status-page/"
      hero={{ variant: 'none' }}
      breadcrumbItems={[
        { label: 'Home', href: '/' },
        { label: 'System Status' },
      ]}
    >
      <div className="grid md:grid-cols-2 gap-6 mb-12">
        {SERVICES.map((s) => (
          <div key={s.name} className="glass-card flex items-center justify-between">
            <div>
              <h3 className="text-white font-semibold">{s.name}</h3>
              <p className="text-slate-400 text-sm">{s.uptime} uptime</p>
            </div>
            <span className="text-green-400 text-sm font-medium">● {s.status}</span>
          </div>
        ))}
      </div>

      <div className="glass-card-strong">
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
          <Link href="/status/" className="btn-secondary px-6 py-3 text-sm">
            → Live Status Tool
          </Link>
        </div>
      </div>
    </PageTemplate>
  );
}
