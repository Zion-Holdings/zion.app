import type { Metadata } from 'next';
import StandardPage from '@/components/StandardPage';

export const metadata: Metadata = {
  title: 'ROI Calculator | Zion Tech Group',
  description: 'Estimate project ROI and timeline from baseline metrics.',
  openGraph: { title: 'ROI Calculator', description: 'Simple AI/IT ROI estimator.', url: 'https://ziontechgroup.com/tools/roi-calculator/', type: 'website' },
  alternates: { canonical: '/tools/roi-calculator/' },
};

const INPUTS = ['Monthly operational cost', 'Automation target', 'Implementation weeks', 'Risk allowance'];

export default function RoiCalculatorPage() {
  return (
    <StandardPage title="ROI Calculator" subtitle="High-level ROI input form placeholder." breadcrumbItems={[{ label: 'Home', href: '/' }, { label: 'Tools' }, { label: 'ROI Calculator' }]}>
      <div className="max-w-3xl mx-auto grid gap-4">
        {INPUTS.map((label) => (
          <label key={label} className="rounded-2xl border border-slate-800 bg-slate-900/60 p-4 flex flex-col gap-1">
            <span className="text-sm text-slate-300">{label}</span>
            <input type="text" placeholder="0" className="rounded-lg border border-slate-700 bg-slate-950 px-3 py-2 text-white outline-none focus:border-purple-500" />
          </label>
        ))}
        <button className="rounded-xl bg-gradient-to-r from-purple-600 to-pink-600 px-5 py-3 text-sm font-semibold text-white">Calculate estimate</button>
        <p className="text-xs text-slate-500">Placeholder form — replace with validated estimator logic before production use.</p>
      </div>
    </StandardPage>
  );
}
