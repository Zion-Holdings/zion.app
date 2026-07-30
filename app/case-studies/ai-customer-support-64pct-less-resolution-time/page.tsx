import { Metadata } from 'next';
import IndustryLayout from '@/components/IndustryLayout';

export const metadata: Metadata = {
  title: 'NovaStream cut ticket resolution time by 64% | Case Study',
  description: 'AI customer support agent transformed NovaStream support: 64% faster resolution, first-contact resolution from 28% to 71%, and agent satisfaction up to 4.4/5.',
  openGraph: {
    title: 'NovaStream cut ticket resolution time by 64%',
    description: 'How Zion deployed an AI support agent that triaged, routed, and resolved common issues instantly.',
    url: 'https://ziontechgroup.com/case-studies/ai-customer-support-64pct-less-resolution-time/',
    siteName: 'Zion Tech Group',
    type: 'website',
    locale: 'en_US',
  },
  alternates: { canonical: '/case-studies/ai-customer-support-64pct-less-resolution-time/' },
};

export default function Page() {
  return (
    <IndustryLayout
      industry="Technology & SaaS"
      title="NovaStream cut ticket resolution time by 64%"
      heroBadge="Customer Support AI"
      heroBadgeEmoji="🎧"
      intro="NovaStream’s support team was buried under 1,200 weekly tickets. We deployed an AI customer support agent that triaged, routed, and resolved common issues instantly — while escalating complex cases to the right human engineer."
      ctaLabel="Get similar results"
      ctaHref="/contact/"
      secondaryCtaLabel="Explore AI Support Services"
      secondaryCtaHref="/services/ai-customer-support-pro/"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-6">
          {['First-contact resolution rose from 28% to 71%.','Average handle time dropped from 18 minutes to 6.5 minutes.','Agent satisfaction score improved from 3.1 to 4.4/5.'].map((result) => (
            <div key={result} className="rounded-2xl bg-slate-950/60 border border-slate-800 p-5">
              <p className="text-sm text-slate-300">{result}</p>
            </div>
          ))}
        </div>
        <div className="mt-8 p-6 rounded-2xl border border-slate-800 bg-slate-900/60">
          <p className="text-slate-300 italic">“Zion Tech Group understood our stack instantly and had it live in 3 days.”</p>
          <p className="text-slate-400 text-sm mt-2">Sarah Chen, VP of Engineering, NovaStream Inc.</p>
        </div>
      </div>
    </IndustryLayout>
  );
}
