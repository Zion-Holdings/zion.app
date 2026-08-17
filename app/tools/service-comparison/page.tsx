import type { Metadata } from 'next';
import StandardPage from '@/components/StandardPage';

export const metadata: Metadata = {
  title: 'Service Comparison | Zion Tech Group',
  description: 'Compare AI, IT, and automation service models by scope, fit, and speed.',
  openGraph: { title: 'Service Comparison', description: 'Side-by-side service fit comparison.', url: 'https://ziontechgroup.com/service-comparison/', type: 'website' },
  alternates: { canonical: '/service-comparison/' },
};

const FACTORS = [
  'Implementation speed',
  'Ongoing staffing',
  'Data dependency',
  'Compliance scope',
  'Automation depth',
  'Support model',
];

export default function ServiceComparisonPage() {
  return (
    <StandardPage title="Service Comparison" subtitle="Use this comparison to route a project faster." breadcrumbItems={[{ label: 'Home', href: '/' }, { label: 'Tools' }, { label: 'Service Comparison' }]}>
      <div className="max-w-5xl mx-auto grid gap-6 md:grid-cols-2">
        <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6">
          <h3 className="text-white font-semibold mb-2">Managed AI</h3>
          <p className="text-slate-400 text-sm">Best when you need outcomes faster than hiring cycles allow.</p>
        </div>
        <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6">
          <h3 className="text-white font-semibold mb-2">Co-development</h3>
          <p className="text-slate-400 text-sm">Best when you already have internal delivery capacity.</p>
        </div>
        <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6">
          <h3 className="text-white font-semibold mb-2">Automation-first</h3>
          <p className="text-slate-400 text-sm">Best for repeatable workflows with measurable targets.</p>
        </div>
        <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6">
          <h3 className="text-white font-semibold mb-2">Advisory</h3>
          <p className="text-slate-400 text-sm">Best for evaluation, selection, and policy decisions.</p>
        </div>
      </div>
      <div className="max-w-3xl mx-auto mt-10">
        <h3 className="text-white font-semibold mb-3">Factors</h3>
        <div className="flex flex-wrap gap-2">
          {FACTORS.map((item) => (
            <span key={item} className="rounded-xl border border-slate-800 bg-slate-900/60 px-3 py-2 text-sm text-slate-300">{item}</span>
          ))}
        </div>
      </div>
    </StandardPage>
  );
}
