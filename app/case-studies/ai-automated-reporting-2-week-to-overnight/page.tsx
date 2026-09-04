import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'AtlasIndustrial collapsed reporting from 2 weeks to overnight | Case Study',
  description: 'AI automated reporting replaced a 2-week manual reporting cycle with an overnight delivery model across operations, finance, and safety.',
  openGraph: {
    title: 'AtlasIndustrial collapsed reporting from 2 weeks to overnight',
    description: 'How Zion delivered automated reporting, anomaly highlighting, and executive-ready narratives.',
    url: 'https://ziontechgroup.com/case-studies/ai-automated-reporting-2-week-to-overnight/',
    siteName: 'Zion Tech Group',
    type: 'website',
    locale: 'en_US',
  },
  alternates: { canonical: '/case-studies/ai-automated-reporting-2-week-to-overnight/' },
};

export default function Page() {
  return (
    <div className="min-h-screen bg-slate-950">
      <section className="pt-20 pb-16 bg-gradient-to-b from-slate-950 to-slate-900">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-xs font-semibold uppercase tracking-widest text-emerald-400 mb-3">Manufacturing & Industrial</p>
          <h1 className="text-4xl font-bold text-white sm:text-5xl">AtlasIndustrial collapsed reporting from <span className="text-emerald-400">2 weeks</span> to overnight</h1>
          <p className="mt-6 text-lg text-slate-300 max-w-2xl">
            AtlasIndustrial’s monthly reporting cycle consumed 120+ hours across operations, finance, and safety teams. We built an automated reporting pipeline with anomaly detection and executive-ready narratives.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <a href="/contact/" className="inline-flex items-center px-6 py-3 rounded-xl bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold">Automate reporting</a>
            <a href="/services/ai-report-generator/" className="inline-flex items-center px-6 py-3 rounded-xl border border-slate-700 text-slate-200 font-semibold hover:border-purple-500/60 hover:text-white transition-colors">BI Services</a>
          </div>
        </div>
      </section>
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          <div className="grid md:grid-cols-3 gap-6">
            {['Reporting cycle reduced from 14 days to overnight.', '120 hours/month of manual work recovered.', 'Executive confidence score improved from 3.4 to 4.7/5.'].map((result) => (
              <div key={result} className="rounded-2xl bg-slate-950/60 border border-slate-800 p-5">
                <p className="text-sm text-slate-300">{result}</p>
              </div>
            ))}
          </div>
          <div className="mt-8 p-6 rounded-2xl border border-slate-800 bg-slate-900/60">
            <p className="text-slate-300 italic">“Decision-making used to wait for reports. Now reports wait for decisions.”</p>
            <p className="text-slate-400 text-sm mt-2">Maria Gonzalez, COO, AtlasIndustrial</p>
          </div>
        </div>
      </section>
    </div>
  );
}
