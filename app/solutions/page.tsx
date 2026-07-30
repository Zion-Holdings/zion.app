// app/solutions/page.tsx
import Link from 'next/link';

export const metadata = {
  title: 'Solutions — Zion Tech Group',
  description: 'Industry-specific AI, IT, and Micro-SaaS solutions for Healthcare, Financial Services, Manufacturing, and more.',
};

const industries = [
  { name: 'Healthcare', slug: 'healthcare', desc: 'HIPAA-compliant AI diagnostics, patient engagement, and clinical automation.' },
  { name: 'Financial Services', slug: 'financial-services', desc: 'RegTech, fraud detection, trading bots, and KYC automation.' },
  { name: 'Manufacturing & Industrial', slug: 'manufacturing-industrial', desc: 'Predictive maintenance, supply chain, quality inspection AI.' },
  { name: 'E-Commerce & Retail', slug: 'ecommerce-retail', desc: 'Recommendation engines, inventory AI, dynamic pricing.' },
  { name: 'Technology & SaaS', slug: 'technology-saas', desc: 'Developer tools, platform engineering, dev tooling.' },
  { name: 'Logistics & Supply Chain', slug: 'logistics-supply-chain', desc: 'Route optimization, warehouse automation, fleet tracking.' },
  { name: 'Government & Public Sector', slug: 'government-public-sector', desc: 'Citizen services, compliance automation, civic AI.' },
  { name: 'Insurance', slug: 'insurance', desc: 'Claims automation, underwriting AI, fraud prevention.' },
];

export default function SolutionsPage() {
  return (
    <div className="container-page py-16">
      <h1 className="text-4xl font-bold text-white mb-4">Industry Solutions</h1>
      <p className="text-slate-400 mb-12 max-w-2xl">
        Tailored AI, IT, and Micro-SaaS solutions purpose-built for your industry's unique challenges and compliance requirements.
        Click any industry to see challenges we solve, our specific solutions, and how we can help.
      </p>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        {industries.map((ind) => (
          <Link key={ind.name} href={`/solutions/${ind.slug}/`} className="glass-card">
            <h3 className="font-semibold text-white mb-2">{ind.name}</h3>
            <p className="text-slate-400 text-sm">{ind.desc}</p>
            <span className="text-purple-400 text-xs mt-3 inline-block">Learn more →</span>
          </Link>
        ))}
      </div>
    </div>
  );
}