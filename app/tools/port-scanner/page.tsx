import type { Metadata } from 'next';
import StandardPage from '@/components/StandardPage';

export const metadata: Metadata = {
  title: 'Port Scanner | Zion Tech Group',
  description: 'Check common service ports and surface open or filtered results.',
  openGraph: { title: 'Port Scanner', description: 'Network port scan helper.', url: 'https://ziontechgroup.com/tools/port-scanner/', type: 'website' },
  alternates: { canonical: '/tools/port-scanner/' },
};

export default function PortScannerPage() {
  return (
    <StandardPage title="Port Scanner" subtitle="Enter a host and see common port status summary." breadcrumbItems={[{ label: 'Home', href: '/' }, { label: 'Tools' }, { label: 'Port Scanner' }]}>
      <div className="max-w-3xl mx-auto grid gap-4">
        <label className="rounded-2xl border border-slate-800 bg-slate-900/60 p-4 flex flex-col gap-1">
          <span className="text-sm text-slate-300">Host</span>
          <input type="text" placeholder="example.com" className="rounded-lg border border-slate-700 bg-slate-950 px-3 py-2 text-white outline-none focus:border-purple-500" />
        </label>
        <button className="rounded-xl bg-gradient-to-r from-purple-600 to-pink-600 px-5 py-3 text-sm font-semibold text-white">Scan common ports</button>
        <p className="text-xs text-slate-500">Placeholder scanner — replace with audited backend scan integration.</p>
      </div>
    </StandardPage>
  );
}
