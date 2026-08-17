import type { Metadata } from 'next';
import StandardPage from '@/components/StandardPage';

export const metadata: Metadata = {
  title: 'Platform Status | Zion Tech Group',
  description: 'Service health, uptime targets, and incident cadence.',
  openGraph: { title: 'Platform Status', description: 'Zion operational status summary.', url: 'https://ziontechgroup.com/tools/health-check/', type: 'website' },
  alternates: { canonical: '/tools/health-check/' },
};

const SYSTEMS = [
  { name: 'Website', status: 'Operational' },
  { name: 'API', status: 'Operational' },
  { name: 'Support intake', status: 'Operational' },
  { name: 'Deploy pipeline', status: 'Operational' },
];

export default function HealthCheckPage() {
  return (
    <StandardPage title="Platform Status" subtitle="Current system status and uptime targets." breadcrumbItems={[{ label: 'Home', href: '/' }, { label: 'Tools' }, { label: 'Platform Status' }]}>
      <div className="max-w-3xl mx-auto grid gap-3">
        {SYSTEMS.map((item) => (
          <div key={item.name} className="rounded-2xl border border-slate-800 bg-slate-900/60 px-5 py-4 flex items-center justify-between">
            <span className="text-white text-sm font-medium">{item.name}</span>
            <span className="text-xs font-semibold text-purple-300">{item.status}</span>
          </div>
        ))}
        <p className="text-xs text-slate-500">Placeholder status page — replace with live checks and incident history.</p>
      </div>
    </StandardPage>
  );
}
