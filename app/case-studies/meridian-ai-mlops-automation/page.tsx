import { Metadata } from 'next';
import IndustryLayout from '@/components/IndustryLayout';

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
    <IndustryLayout
      industry="Technology & SaaS"
      title="Meridian AI shortened model deployment 55%"
      heroBadge="MLOps"
      heroBadgeEmoji="⚙️"
      intro="Meridian AI was releasing models inconsistently across staging and production. We introduced CI/CD for ML, automated validation gates, and model registry hygiene so deployments became repeatable and safe."
      ctaLabel="Ship models faster"
      ctaHref="/contact/"
      secondaryCtaLabel="AI/MLOps Services"
      secondaryCtaHref="/services/ai-devops-automation/"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
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
    </IndustryLayout>
  );
}
