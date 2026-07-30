import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Cloud Systems cut support resolution time 64% | Case Study',
  description: 'AI customer support automation, intent classification, and proactive incident handling reduced resolution time 64% for Cloud Systems Inc.',
  openGraph: {
    title: 'Cloud Systems cut support resolution time 64%',
    description: 'How Zion deployed AI customer support automation for a fast-growing cloud infrastructure provider.',
    url: 'https://ziontechgroup.com/case-studies/ai-customer-support-64pct-less-resolution-time/',
    siteName: 'Zion Tech Group',
    type: 'website',
    locale: 'en_US',
  },
  alternates: { canonical: '/case-studies/ai-customer-support-64pct-less-resolution-time/' },
};

export default function Page() {
  return (
    <div className="min-h-screen bg-slate-950">
      <section className="pt-20 pb-16 bg-gradient-to-b from-slate-950 to-slate-900">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-xs font-semibold uppercase tracking-widest text-blue-400 mb-3">Cloud & Infrastructure</p>
          <h1 className="text-4xl font-bold text-white sm:text-5xl">Cloud Systems cut support resolution time <span className="text-blue-400">64%</span></h1>
          <p className="mt-6 text-lg text-slate-300 max-w-2xl">
            Cloud Systems Inc. was scaling fast, but support tickets were piling up. We deployed AI intent classification, automated triage, and proactive incident handling to reduce mean resolution without losing the human touch.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <a href="/contact/" className="inline-flex items-center px-6 py-3 rounded-xl bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold">Cut resolution time</a>
            <a href="/services/ai-customer-support/" className="inline-flex items-center px-6 py-3 rounded-xl border border-slate-700 text-slate-200 font-semibold hover:border-purple-500/60 hover:text-white transition-colors">Support AI Services</a>
          </div>
        </div>
      </section>
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          <div className="grid md:grid-cols-3 gap-6">
            {['Mean resolution time down 64%.','First-contact resolution up 41%.','Support ticket volume handled without headcount increase.'].map((result) => (
              <div key={result} className="rounded-2xl bg-slate-950/60 border border-slate-800 p-5">
                <p className="text-sm text-slate-300">{result}</p>
              </div>
            ))}
          </div>
          <div className="mt-8 p-6 rounded-2xl border border-slate-800 bg-slate-900/60">
            <p className="text-slate-300 italic">“Customers noticed the speed before we announced the change. That’s the best feedback possible.”</p>
            <p className="text-slate-400 text-sm mt-2">David Park, VP Support, Cloud Systems Inc.</p>
          </div>
        </div>
      </section>
    </div>
  );
}
