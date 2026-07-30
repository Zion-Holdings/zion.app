import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'ApexManufacturing delivered 30% fewer defects with AI vision | Case Study',
  description: 'AI computer vision quality inspection cut defect escape rate by 30% and improved throughput on a high-volume automotive line.',
  openGraph: {
    title: 'ApexManufacturing: 30% fewer defects with AI vision',
    description: 'How Zion deployed an AI vision inspection system on an automotive production line.',
    url: 'https://ziontechgroup.com/case-studies/ai-manufacturing-quality-inspection/',
    siteName: 'Zion Tech Group',
    type: 'website',
    locale: 'en_US',
  },
  alternates: { canonical: '/case-studies/ai-manufacturing-quality-inspection/' },
};

export default function Page() {
  return (
    <div className="min-h-screen bg-slate-950">
      <section className="pt-20 pb-16 bg-gradient-to-b from-slate-950 to-slate-900">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-xs font-semibold uppercase tracking-widest text-purple-400 mb-3">Manufacturing</p>
          <h1 className="text-4xl font-bold text-white sm:text-5xl">ApexManufacturing cut defects <span className="text-purple-400">30%</span> with AI vision</h1>
          <p className="mt-6 text-lg text-slate-300 max-w-2xl">
            ApexManufacturing was seeing inconsistent defect detection across three production shifts. We deployed an AI computer vision inspection system that flags defects in real time and quarantines outliers automatically.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <a href="/contact/" className="inline-flex items-center px-6 py-3 rounded-xl bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold">Improve quality</a>
            <a href="/services/ai-computer-vision-quality-inspection/" className="inline-flex items-center px-6 py-3 rounded-xl border border-slate-700 text-slate-200 font-semibold hover:border-purple-500/60 hover:text-white transition-colors">AI Quality Services</a>
          </div>
        </div>
      </section>
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          <div className="grid md:grid-cols-3 gap-6">
            {['Defect escape down 30%.','False positives reduced 42%.','Inspection throughput up 25%.'].map((result) => (
              <div key={result} className="rounded-2xl bg-slate-950/60 border border-slate-800 p-5">
                <p className="text-sm text-slate-300">{result}</p>
              </div>
            ))}
          </div>
          <div className="mt-8 p-6 rounded-2xl border border-slate-800 bg-slate-900/60">
            <p className="text-slate-300 italic">“The vision system caught issues our human inspectors were missing during night shift. It paid for itself in 6 weeks.”</p>
            <p className="text-slate-400 text-sm mt-2">Robert Liu, VP Operations, ApexManufacturing</p>
          </div>
        </div>
      </section>
    </div>
  );
}
