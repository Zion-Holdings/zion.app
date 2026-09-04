import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Northgate Finance cut cloud costs 35% | Case Study',
  description: 'Cloud cost optimization, rightsizing, and automated governance reduced Northgate Finance infrastructure costs by 35% with zero downtime.',
  openGraph: {
    title: 'Northgate Finance cut cloud costs 35%',
    description: 'How Zion delivered cloud cost optimization and FinOps automation for a regulated financial services firm.',
    url: 'https://ziontechgroup.com/case-studies/cloud-cost-optimization-35pct-savings/',
    siteName: 'Zion Tech Group',
    type: 'website',
    locale: 'en_US',
  },
  alternates: { canonical: '/case-studies/cloud-cost-optimization-35pct-savings/' },
};

export default function Page() {
  return (
    <div className="min-h-screen bg-slate-950">
      <section className="pt-20 pb-16 bg-gradient-to-b from-slate-950 to-slate-900">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-xs font-semibold uppercase tracking-widest text-amber-400 mb-3">Cloud & Financial Services</p>
          <h1 className="text-4xl font-bold text-white sm:text-5xl">Northgate Finance cut cloud costs <span className="text-amber-400">35%</span></h1>
          <p className="mt-6 text-lg text-slate-300 max-w-2xl">
            Northgate Finance had grown cloud spend with little governance or tagging discipline. We introduced FinOps automation, rightsizing, and budget controls while keeping regulated workloads stable.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <a href="/contact/" className="inline-flex items-center px-6 py-3 rounded-xl bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold">Reduce cloud costs</a>
            <a href="/services/cloud-cost-optimization/" className="inline-flex items-center px-6 py-3 rounded-xl border border-slate-700 text-slate-200 font-semibold hover:border-purple-500/60 hover:text-white transition-colors">Cloud Services</a>
          </div>
        </div>
      </section>
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          <div className="grid md:grid-cols-3 gap-6">
            {['Infrastructure spend down 35%.','Idle resource recovery $420k/year.','Governance policy coverage increased to 94%.'].map((result) => (
              <div key={result} className="rounded-2xl bg-slate-950/60 border border-slate-800 p-5">
                <p className="text-sm text-slate-300">{result}</p>
              </div>
            ))}
          </div>
          <div className="mt-8 p-6 rounded-2xl border border-slate-800 bg-slate-900/60">
            <p className="text-slate-300 italic">“We cut spend without cutting availability. Finance and engineering both approved.”</p>
            <p className="text-slate-400 text-sm mt-2">James Whitfield, CTO, Northgate Finance</p>
          </div>
        </div>
      </section>
    </div>
  );
}
