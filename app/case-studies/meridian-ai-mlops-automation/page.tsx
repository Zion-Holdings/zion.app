import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Meridian AI shortened model deployment time 55% | Case Study',
  description: 'AI/MLOps automation cut model deployment time 55% and improved rollout reliability for Meridian AI.',
  openGraph: {
    title: 'Meridian AI shortened model deployment 55%',
    description: 'How Zion implemented MLOps automation for a fast-growing AI company.',
    url: 'https://ziontechgroup.com/case-studies/meridian-ai-mlops-automation/',
    siteName: 'Zion Tech Group',
    type: 'website',
    locale: 'en_US',
  },
  alternates: { canonical: '/case-studies/meridian-ai-mlops-automation/' },
};

export default function Page() {
  return (
    <div className="min-h-screen bg-slate-950">
      <section className="pt-20 pb-16 bg-gradient-to-b from-slate-950 to-slate-900">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-xs font-semibold uppercase tracking-widest text-amber-400 mb-3">Technology & SaaS</p>
          <h1 className="text-4xl font-bold text-white sm:text-5xl">Meridian AI shortened model deployment <span className="text-amber-400">55%</span></h1>
          <p className="mt-6 text-lg text-slate-300 max-w-2xl">
            Meridian AI was releasing models inconsistently across staging and production. We introduced CI/CD for ML, automated validation gates, and model registry hygiene so deployments became repeatable and safe.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <a href="/contact/" className="inline-flex items-center px-6 py-3 rounded-xl bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold">Ship models faster</a>
            <a href="/services/ai-devops-automation/" className="inline-flex items-center px-6 py-3 rounded-xl border border-slate-700 text-slate-200 font-semibold hover:border-purple-500/60 hover:text-white transition-colors">AI/MLOps Services</a>
          </div>
        </div>
      </section>
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          <div className="grid md:grid-cols-3 gap-6">
            {['Deployment time down 55%.','Rollback incidents down 70%.','Release cadence increased from monthly to weekly.'].map((result) => (
              <div key={result} className="rounded-2xl bg-slate-950/60 border border-slate-800 p-5">
                <p className="text-sm text-slate-300">{result}</p>
              </div>
            ))}
          </div>
          <div className="mt-8 p-6 rounded-2xl border border-slate-800 bg-slate-900/60">
            <p className="text-slate-300 italic">“Our engineers stopped fearing deployments. That changed everything.”</p>
            <p className="text-slate-400 text-sm mt-2">Rachel Nolan, VP Engineering, Meridian AI</p>
          </div>
        </div>
      </section>
    </div>
  );
}
