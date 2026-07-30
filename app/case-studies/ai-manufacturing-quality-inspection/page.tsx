import { Metadata } from 'next';
import IndustryLayout from '@/components/IndustryLayout';

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
    <IndustryLayout
      industry="Manufacturing"
      title="ApexManufacturing cut defects 30% with AI vision"
      heroBadge="Quality AI"
      heroBadgeEmoji="🔍"
      intro="ApexManufacturing was seeing inconsistent defect detection across three production shifts. We deployed an AI computer vision inspection system that flags defects in real time and quarantines outliers automatically."
      ctaLabel="Improve quality"
      ctaHref="/contact/"
      secondaryCtaLabel="AI Quality Services"
      secondaryCtaHref="/services/ai-computer-vision-quality-inspection/"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
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
    </IndustryLayout>
  );
}
