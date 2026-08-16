// app/how-it-works/page.tsx
import Link from 'next/link';
import PageTemplate from '@/components/PageTemplate';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'How It Works | Zion Tech Group',
  description: 'Our proven onboarding process: discover, plan, deliver, improve. Zero-friction AI/IT adoption with 30-day pilot KPIs.',
  alternates: { canonical: 'https://ziontechgroup.com/how-it-works/' },
};

export default function HowItWorks() {
  return (
    <PageTemplate
      title="How It Works"
      description="From inquiry to implementation in 4 simple steps."
      canonical="https://ziontechgroup.com/how-it-works/"
      hero={{ variant: 'none', actions: [
        { label: '⚡ Get Your Custom Proposal', href: '/configurator/', style: 'primary' },
      ] }}
      breadcrumbItems={[
        { label: 'Home', href: '/' },
        { label: 'How It Works' },
      ]}
    >
      <div className="space-y-8">
        {[
          { step: 1, title: 'Tell Us Your Needs', desc: 'Share your business goals, budget, and technical requirements.' },
          { step: 2, title: 'AI-Powered Matching', desc: 'Our AI engine recommends the best-fit services from our catalog.' },
          { step: 3, title: 'Custom Proposal', desc: 'Receive a detailed proposal with pricing, timeline, and next steps.' },
          { step: 4, title: 'Launch & Scale', desc: 'We implement, monitor, and optimize your solution for maximum ROI.' },
        ].map((s) => (
          <div key={s.step} className="glass-card flex items-start gap-4">
            <div className="w-10 h-10 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center font-bold shrink-0">
              {s.step}
            </div>
            <div>
              <h2 className="text-xl font-semibold text-white mb-1">{s.title}</h2>
              <p className="text-slate-300">{s.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </PageTemplate>
  );
}
