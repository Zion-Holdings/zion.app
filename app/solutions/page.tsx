// app/solutions/page.tsx
import Link from 'next/link';
import type { Metadata } from 'next';
import PageTemplate from '@/components/PageTemplate';

export const metadata: Metadata = {
  title: 'Industry Solutions | Zion Tech Group',
  description: 'Tailored AI, IT, and Micro-SaaS solutions purpose-built for your industry\'s unique challenges and compliance requirements. Click any industry to see challenges we solve.',
  alternates: { canonical: '/solutions' },
};

const industries = [
  { name: 'Healthcare',                    desc: 'HIPAA-compliant AI diagnostics, patient engagement, and clinical automation.', path: '/industries/healthcare' },
  { name: 'Financial Services',            desc: 'RegTech, fraud detection, trading bots, and KYC automation.', path: '/industries/finance' },
  { name: 'Manufacturing & Industrial',    desc: 'Predictive maintenance, supply chain, quality inspection AI.', path: '/industries/manufacturing' },
  { name: 'E-Commerce & Retail',           desc: 'Recommendation engines, inventory AI, dynamic pricing.', path: '/industries/retail' },
  { name: 'Technology & SaaS',             desc: 'Developer tools, platform engineering, dev tooling.', path: '/industries/technology-saas' },
  { name: 'Logistics & Supply Chain',      desc: 'Route optimization, warehouse automation, fleet tracking.', path: '/industries/logistics' },
  { name: 'Government & Public Sector',    desc: 'Citizen services, compliance automation, civic AI.', path: '/industries/government-and-public-sector' },
  { name: 'Insurance',                     desc: 'Claims automation, underwriting AI, fraud prevention.', path: '/industries/insurance' },
];

export default function SolutionsPage() {
  return (
    <PageTemplate
      title="Industry Solutions"
      description="Tailored AI, IT, and Micro-SaaS solutions purpose-built for your industry's unique challenges and compliance requirements. Click any industry to see challenges we solve, our specific solutions, and how we can help."
      category="Industries"
      heroIcon="🏭"
      actions={[
        { label: 'Browse Industries', href: '/industries', style: 'primary' },
        { label: 'View All Services', href: '/services', style: 'secondary' },
      ]}
      breadcrumbItems={[
        { label: 'Home', href: '/' },
        { label: 'Solutions', href: '/solutions' },
      ]}
      layout="hero"
    >
      <div className="max-w-4xl mx-auto">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {industries.map((ind) => (
            <Link key={ind.name} href={ind.path} className="glass-card group">
              <h3 className="font-semibold text-white mb-2 group-hover:text-purple-300 transition">{ind.name}</h3>
              <p className="text-slate-400 text-sm">{ind.desc}</p>
              <span className="text-purple-400 text-xs mt-3 inline-block group-hover:translate-x-1 transition-transform">
                Learn more →
              </span>
            </Link>
          ))}
        </div>
      </div>
    </PageTemplate>
  );
}