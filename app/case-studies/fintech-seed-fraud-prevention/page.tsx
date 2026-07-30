import { Metadata } from 'next';
import IndustryLayout from '@/components/IndustryLayout';

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
    <IndustryLayout
      industry="Technology & SaaS"
      title="Fintech Seed reduced onboarding fraud 48%"
      heroBadge="Fraud Prevention"
      heroBadgeEmoji="🛡️"
      intro="Fraudulent account creation was rising as Fintech Seed scaled. We layered AI identity verification, device trust scoring, and behavior analytics into onboarding without adding friction."
      ctaLabel="Reduce fraud"
      ctaHref="/contact/"
      secondaryCtaLabel="AI Fraud Services"
      secondaryCtaHref="/services/ai-fraud-prevention/"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
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
    </IndustryLayout>
  );
}
