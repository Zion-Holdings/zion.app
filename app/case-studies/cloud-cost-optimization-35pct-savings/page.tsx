import { Metadata } from 'next';
import IndustryLayout from '@/components/IndustryLayout';

export const metadata: Metadata = {
  title: 'GlobalRetail cut cloud costs 35% | Case Study',
  description: 'Cloud cost optimization and FinOps automation reduced spend by 35%, recovered $1.2M, and improved forecasting confidence.',
  openGraph: {
    title: 'GlobalRetail cut cloud costs 35%',
    description: 'How Zion built a FinOps automation layer over multi-cloud accounts for sustainable savings.',
    url: 'https://ziontechgroup.com/case-studies/cloud-cost-optimization-35pct-savings/',
    siteName: 'Zion Tech Group',
    type: 'website',
    locale: 'en_US',
  },
  alternates: { canonical: '/case-studies/cloud-cost-optimization-35pct-savings/' },
};

export default function Page() {
  return (
    <IndustryLayout
      industry="Retail & E-Commerce"
      title="GlobalRetail cut cloud costs 35%"
      heroBadge="Cloud Cost Optimization"
      heroBadgeEmoji="☁️"
      intro="GlobalRetail’s cloud footprint grew faster than its governance model. We implemented FinOps automation, anomaly detection, and scheduling rightsizing across multi-cloud accounts."
      ctaLabel="Cut cloud waste"
      ctaHref="/contact/"
      secondaryCtaLabel="Cloud & DevOps Services"
      secondaryCtaHref="/services/cloud-cost-optimization-service/"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-6">
          {['35% reduction in cloud spend.','$1.2M recovered in 8 months.','Forecast accuracy improved to 94%.'].map((result) => (
            <div key={result} className="rounded-2xl bg-slate-950/60 border border-slate-800 p-5">
              <p className="text-sm text-slate-300">{result}</p>
            </div>
          ))}
        </div>
        <div className="mt-8 p-6 rounded-2xl border border-slate-800 bg-slate-900/60">
          <p className="text-slate-300 italic">“We had visibility before, but not action. Zion made savings operational.”</p>
          <p className="text-slate-400 text-sm mt-2">Maya Thompson, CIO, GlobalRetail</p>
        </div>
      </div>
    </IndustryLayout>
  );
}
