// app/solutions/page.tsx
import Link from 'next/link';
import PageWrapper from '@/components/PageWrapper';

const industries = [
  { name: 'Healthcare',                    desc: 'HIPAA-compliant AI diagnostics, patient engagement, and clinical automation.', path: '/services?category=ai' },
  { name: 'Financial Services',            desc: 'RegTech, fraud detection, trading bots, and KYC automation.', path: '/services?category=ai' },
  { name: 'Manufacturing & Industrial',    desc: 'Predictive maintenance, supply chain, quality inspection AI.', path: '/services?category=ai' },
  { name: 'E-Commerce & Retail',           desc: 'Recommendation engines, inventory AI, dynamic pricing.', path: '/services?category=ai' },
  { name: 'Technology & SaaS',             desc: 'Developer tools, platform engineering, dev tooling.', path: '/services?category=it' },
  { name: 'Logistics & Supply Chain',      desc: 'Route optimization, warehouse automation, fleet tracking.', path: '/services?category=ai' },
  { name: 'Government & Public Sector',    desc: 'Citizen services, compliance automation, civic AI.', path: '/services?category=ai' },
  { name: 'Insurance',                     desc: 'Claims automation, underwriting AI, fraud prevention.', path: '/services?category=ai' },
];

export default function SolutionsPage() {
  return (
    <PageWrapper breadcrumb={[{ label: 'Home', href: '/' }, { label: 'Solutions' }]}>
      <h1 className="text-4xl font-bold text-white mb-4">Industry Solutions</h1>
      <p className="text-slate-400 mb-12 max-w-2xl">
        Tailored AI, IT, and Micro-SaaS solutions purpose-built for your industry's unique challenges and compliance requirements.
        Click any industry to see challenges we solve, our specific solutions, and how we can help.
      </p>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        {(industries).map((ind) => (
          <Link key={ind.name} href={ind.path} className="glass-card">
            <h3 className="font-semibold text-white mb-2">{ind.name}</h3>
            <p className="text-slate-400 text-sm">{ind.desc}</p>
            <span className="text-purple-400 text-xs mt-3 inline-block">Learn more →</span>
          </Link>
        ))}
      </div>
    </PageWrapper>
  );
}
