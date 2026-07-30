import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'HealthNet cut patient wait times 40% with AI triage | Case Study',
  description: 'AI triage and scheduling automation reduced patient wait times 40% while increasing capacity at HealthNet Systems.',
  openGraph: {
    title: 'HealthNet cut patient wait times 40% with AI triage',
    description: 'How Zion deployed AI triage, intake automation, and scheduling optimization for a health system.',
    url: 'https://ziontechgroup.com/case-studies/healthnet-patient-flow-ai-triage/',
    siteName: 'Zion Tech Group',
    type: 'website',
    locale: 'en_US',
  },
  alternates: { canonical: '/case-studies/healthnet-patient-flow-ai-triage/' },
};

export default function Page() {
  return (
    <div className="min-h-screen bg-slate-950">
      <section className="pt-20 pb-16 bg-gradient-to-b from-slate-950 to-slate-900">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-xs font-semibold uppercase tracking-widest text-emerald-400 mb-3">Healthcare</p>
          <h1 className="text-4xl font-bold text-white sm:text-5xl">HealthNet cut patient wait times <span className="text-emerald-400">40%</span> with AI triage</h1>
          <p className="mt-6 text-lg text-slate-300 max-w-2xl">
            HealthNet’s front-desk and nursing workflow were bottlenecks. We added AI intake triage, documentation assistance, and smart scheduling to move patients faster without sacrificing safety.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <a href="/contact/" className="inline-flex items-center px-6 py-3 rounded-xl bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold">Improve patient flow</a>
            <a href="/services/ai-telemedicine-platform/" className="inline-flex items-center px-6 py-3 rounded-xl border border-slate-700 text-slate-200 font-semibold hover:border-purple-500/60 hover:text-white transition-colors">Healthcare AI Services</a>
          </div>
        </div>
      </section>
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          <div className="grid md:grid-cols-3 gap-6">
            {['Patient wait times down 40%.','Provider documentation time down 18%.','Same-day access up 27%.'].map((result) => (
              <div key={result} className="rounded-2xl bg-slate-950/60 border border-slate-800 p-5">
                <p className="text-sm text-slate-300">{result}</p>
              </div>
            ))}
          </div>
          <div className="mt-8 p-6 rounded-2xl border border-slate-800 bg-slate-900/60">
            <p className="text-slate-300 italic">“The triage assistant changed our front office. Nurses spend more time on care, less on paperwork.”</p>
            <p className="text-slate-400 text-sm mt-2">Robert Kim, Operations Director, HealthNet Systems</p>
          </div>
        </div>
      </section>
    </div>
  );
}
