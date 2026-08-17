import type { Metadata } from 'next';
import StandardPage from '@/components/StandardPage';

export const metadata: Metadata = {
  title: 'AI Service Router | Zion Tech Group',
  description: 'Route requests by intent, data sensitivity, and latency target.',
  openGraph: { title: 'AI Service Router', description: 'Routing helper for AI services.', url: 'https://ziontechgroup.com/tools/ai-service-router/', type: 'website' },
  alternates: { canonical: '/tools/ai-service-router/' },
};

export default function AiServiceRouterPage() {
  return (
    <StandardPage title="AI Service Router" subtitle="Match intake requirements to the right AI service path." breadcrumbItems={[{ label: 'Home', href: '/' }, { label: 'Tools' }, { label: 'AI Service Router' }]}>
      <div className="max-w-3xl mx-auto grid gap-4">
        <label className="rounded-2xl border border-slate-800 bg-slate-900/60 p-4 flex flex-col gap-1">
          <span className="text-sm text-slate-300">Use case</span>
          <input type="text" placeholder="e.g. document QA, support, analytics" className="rounded-lg border border-slate-700 bg-slate-950 px-3 py-2 text-white outline-none focus:border-purple-500" />
        </label>
        <label className="rounded-2xl border border-slate-800 bg-slate-900/60 p-4 flex flex-col gap-1">
          <span className="text-sm text-slate-300">Data sensitivity</span>
          <select className="rounded-lg border border-slate-700 bg-slate-950 px-3 py-2 text-white outline-none focus:border-purple-500">
            <option>Internal</option>
            <option>Confidential</option>
            <option>Public</option>
          </select>
        </label>
        <button className="rounded-xl bg-gradient-to-r from-purple-600 to-pink-600 px-5 py-3 text-sm font-semibold text-white">Route request</button>
        <p className="text-xs text-slate-500">Placeholder router — replace with rule/model routing when available.</p>
      </div>
    </StandardPage>
  );
}
