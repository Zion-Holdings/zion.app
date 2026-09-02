import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Fintech Seed reduced onboarding fraud by 48% | Case Study',
  description: 'AI identity verification and behavioral fraud detection cut onboarding fraud by 48% for Fintech Seed Series B.',
  openGraph: {
    title: 'Fintech Seed reduced onboarding fraud 48%',
    description: 'How Zion implemented AI identity verification and fraud scoring for a fast-growing fintech.',
    url: 'https://ziontechgroup.com/case-studies/fintech-seed-fraud-prevention/',
    siteName: 'Zion Tech Group',
    type: 'website',
    locale: 'en_US',
  },
  alternates: { canonical: '/case-studies/fintech-seed-fraud-prevention/' },
};

export default function Page() {
  return (
    <div className="min-h-screen bg-slate-950">
      <section className="pt-20 pb-16 bg-gradient-to-b from-slate-950 to-slate-900">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-xs font-semibold uppercase tracking-widest text-blue-400 mb-3">Technology & SaaS</p>
          <h1 className="text-4xl font-bold text-white sm:text-5xl">Fintech Seed reduced onboarding fraud <span className="text-blue-400">48%</span></h1>
          <p className="mt-6 text-lg text-slate-300 max-w-2xl">
            Fraudulent account creation was rising as Fintech Seed scaled. We layered AI identity verification, device trust scoring, and behavior analytics into onboarding without adding friction.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <a href="/contact/" className="inline-flex items-center px-6 py-3 rounded-xl bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold">Reduce fraud</a>
            <a href="/services/ai-fraud-prevention/" className="inline-flex items-center px-6 py-3 rounded-xl border border-slate-700 text-slate-200 font-semibold hover:border-purple-500/60 hover:text-white transition-colors">AI Fraud Services</a>
          </div>
        </div>
      </section>
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          <div className="grid md:grid-cols-3 gap-6">
            {['Fraudulent accounts down 48%.','False-positive rate under 1.2%.','Onboarding completion improved 9%.'].map((result) => (
              <div key={result} className="rounded-2xl bg-slate-950/60 border border-slate-800 p-5">
                <p className="text-sm text-slate-300">{result}</p>
              </div>
            ))}
          </div>
          <div className="mt-8 p-6 rounded-2xl border border-slate-800 bg-slate-900/60">
            <p className="text-slate-300 italic">“We needed security without ruining conversion. Zion got both.”</p>
            <p className="text-slate-400 text-sm mt-2">Catherine Reeves, CTO, Fintech Seed</p>
          </div>
        </div>
      </section>
    </div>
  );
}
