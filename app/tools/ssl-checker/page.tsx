import type { Metadata } from 'next';
import StandardPage from '@/components/StandardPage';

export const metadata: Metadata = {
  title: 'SSL Checker | Zion Tech Group',
  description: 'Inspect certificate basics and expiry window.',
  openGraph: { title: 'SSL Checker', description: 'TLS certificate helper.', url: 'https://ziontechgroup.com/tools/ssl-checker/', type: 'website' },
  alternates: { canonical: '/tools/ssl-checker/' },
};

export default function SslCheckerPage() {
  return (
    <StandardPage title="SSL Checker" subtitle="Paste a hostname and inspect certificate basics." breadcrumbItems={[{ label: 'Home', href: '/' }, { label: 'Tools' }, { label: 'SSL Checker' }]}>
      <div className="max-w-3xl mx-auto grid gap-4">
        <label className="rounded-2xl border border-slate-800 bg-slate-900/60 p-4 flex flex-col gap-1">
          <span className="text-sm text-slate-300">Host</span>
          <input type="text" placeholder="ziontechgroup.com" className="rounded-lg border border-slate-700 bg-slate-950 px-3 py-2 text-white outline-none focus:border-purple-500" />
        </label>
        <button className="rounded-xl bg-gradient-to-r from-purple-600 to-pink-600 px-5 py-3 text-sm font-semibold text-white">Check certificate</button>
        <p className="text-xs text-slate-500">Placeholder SSL helper — replace with certificate probe before production use.</p>
      </div>
    </StandardPage>
  );
}
