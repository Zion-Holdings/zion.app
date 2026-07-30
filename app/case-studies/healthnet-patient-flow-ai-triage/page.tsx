import { Metadata } from 'next';
import IndustryLayout from '@/components/IndustryLayout';

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
    <IndustryLayout
      industry="Healthcare"
      title="HealthNet cut patient wait times 40% with AI triage"
      heroBadge="Healthcare AI"
      heroBadgeEmoji="🏥"
      intro="HealthNet’s front-desk and nursing workflow were bottlenecks. We added AI intake triage, documentation assistance, and smart scheduling to move patients faster without sacrificing safety."
      ctaLabel="Improve patient flow"
      ctaHref="/contact/"
      secondaryCtaLabel="Healthcare AI Services"
      secondaryCtaHref="/services/ai-telemedicine-platform/"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
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
    </IndustryLayout>
  );
}
