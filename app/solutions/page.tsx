// app/solutions/page.tsx
import Link from 'next/link';

export const metadata = {
  title: 'Solutions — Zion Tech Group',
  description: 'Industry-specific AI, IT, and Micro-SaaS solutions for Healthcare, Financial Services, Manufacturing, and more.',
};

const industries = [
  { name: 'Healthcare',                    desc: 'HIPAA-compliant AI diagnostics, patient engagement, and clinical automation.' },
  { name: 'Financial Services',            desc: 'RegTech, fraud detection, trading bots, and KYC automation.' },
  { name: 'Manufacturing & Industrial',    desc: 'Predictive maintenance, supply chain, quality inspection AI.' },
  { name: 'Retail & E-Commerce',           desc: 'Recommendation engines, inventory AI, dynamic pricing.' },
  { name: 'Technology & SaaS',             desc: 'Developer tools, platform engineering, observability.' },
  { name: 'Logistics & Supply Chain',      desc: 'Route optimization, warehouse automation, fleet tracking.' },
  { name: 'Government & Public Sector',    desc: 'Citizen services, compliance automation, civic AI.' },
  { name: 'Insurance',                     desc: 'Claims automation, underwriting AI, fraud prevention.' },
];

export default function SolutionsPage() {
  return (
    <div className="container-page py-16">
      <h1 className="text-4xl font-bold text-white mb-4">Industry Solutions</h1>
      <p className="text-slate-400 mb-12 max-w-2xl">
        Tailored AI, IT, and Micro-SaaS solutions purpose-built for your industry&apos;s unique challenges and compliance requirements.
        Click any industry to see challenges we solve, our specific solutions, and how we can help.
      </p>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        {[
          { name: 'Healthcare', href: '/industries/healthcare' },
          { name: 'Financial Services', href: '/case-studies/financial-fraud-detection' },
          { name: 'Manufacturing & Industrial', href: '/services?category=automation' },
          { name: 'Retail & E-Commerce', href: '/case-studies/retail-personalization-engine' },
          { name: 'Technology & SaaS', href: '/services?category=it' },
          { name: 'Logistics & Supply Chain', href: '/services?category=cloud' },
          { name: 'Government & Public Sector', href: '/services' },
          { name: 'Insurance', href: '/services?category=security' },
        ].map((ind, i) => (
          <Link key={i} href={ind.href} className="glass-card">
            <h3 className="font-semibold text-white mb-2">{ind.name}</h3>
            <span className="text-purple-400 text-xs mt-3 inline-block">Explore solutions →</span>
          </Link>
        ))}
      </div>
    </div>
  );
}
