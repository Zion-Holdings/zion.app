import { Metadata } from 'next';
import IndustryLayout from '@/components/IndustryLayout';

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
    <IndustryLayout
      industry="Manufacturing & Industrial"
      title="AtlasIndustrial collapsed reporting from 2 weeks to overnight"
      heroBadge="Automation & Reporting"
      heroBadgeEmoji="📊"
      intro="AtlasIndustrial’s monthly reporting cycle consumed 120+ hours across operations, finance, and safety teams. We built an automated reporting pipeline with anomaly detection and executive-ready narratives."
      ctaLabel="Automate reporting"
      ctaHref="/contact/"
      secondaryCtaLabel="Business Intelligence Services"
      secondaryCtaHref="/services/ai-report-generator/"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-6">
          {['Reporting cycle reduced from 14 days to overnight.','120 hours/month of manual work recovered.','Executive confidence score improved from 3.4 to 4.7/5.'].map((result) => (
            <div key={result} className="rounded-2xl bg-slate-950/60 border border-slate-800 p-5">
              <p className="text-sm text-slate-300">{result}</p>
            </div>
          ))}
        </div>
        <div className="mt-8 p-6 rounded-2xl border border-slate-800 bg-slate-900/60">
          <p className="text-slate-300 italic">“Decision-making used to wait for reports. Now reports wait for decisions.”</p>
          <p className="text-slate-400 text-sm mt-2">David Park, VP Operations, AtlasIndustrial</p>
        </div>
      </div>
    </IndustryLayout>
  );
}
