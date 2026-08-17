import type { Metadata } from 'next';
import StandardPage from '@/components/StandardPage';

export const metadata: Metadata = {
  title: 'Service Recommender | Zion Tech Group',
  description: 'Find best-fit services from goals and constraints.',
  openGraph: { title: 'Service Recommender', description: 'Quick service recommendation helper.', url: 'https://ziontechgroup.com/tools/service-recommender/', type: 'website' },
  alternates: { canonical: '/tools/service-recommender/' },
};

export default function ServiceRecommenderPage() {
  return (
    <StandardPage title="Service Recommender" subtitle="Answer a few questions and get a short list of recommended services." breadcrumbItems={[{ label: 'Home', href: '/' }, { label: 'Tools' }, { label: 'Service Recommender' }]}>
      <div className="max-w-3xl mx-auto grid gap-4">
        <label className="rounded-2xl border border-slate-800 bg-slate-900/60 p-4 flex flex-col gap-1">
          <span className="text-sm text-slate-300">Primary goal</span>
          <select className="rounded-lg border border-slate-700 bg-slate-950 px-3 py-2 text-white outline-none focus:border-purple-500">
            <option>Automation</option>
            <option>Analytics</option>
            <option>Security</option>
            <option>AI</option>
            <option>Infrastructure</option>
          </select>
        </label>
        <label className="rounded-2xl border border-slate-800 bg-slate-900/60 p-4 flex flex-col gap-1">
          <span className="text-sm text-slate-300">Timeline</span>
          <input type="text" placeholder="e.g. 8 weeks" className="rounded-lg border border-slate-700 bg-slate-950 px-3 py-2 text-white outline-none focus:border-purple-500" />
        </label>
        <button className="rounded-xl bg-gradient-to-r from-purple-600 to-pink-600 px-5 py-3 text-sm font-semibold text-white">Recommend services</button>
        <p className="text-xs text-slate-500">Placeholder recommender — wire scoring logic when available.</p>
      </div>
    </StandardPage>
  );
}
