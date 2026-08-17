import Link from 'next/link';
import StandardPage from '@/components/StandardPage';

export const metadata = {
  title: 'Industry Solutions | Zion Tech Group',
  description: 'Tailored AI, IT, and Micro-SaaS solutions purpose-built for your industry\'s unique challenges and compliance requirements.',
  openGraph: {
    title: 'Industry Solutions | Zion Tech Group',
    description: 'Purpose-built AI and IT solutions by industry.',
    url: 'https://ziontechgroup.com/solutions/',
    type: 'website',
  },
  alternates: { canonical: '/solutions/' },
};

const industries = [
  { name: 'Healthcare', desc: 'HIPAA-compliant AI diagnostics, patient engagement, and clinical automation.', path: '/services?category=ai' },
  { name: 'Financial Services', desc: 'RegTech, fraud detection, trading bots, and KYC automation.', path: '/services?category=ai' },
  { name: 'Manufacturing & Industrial', desc: 'Predictive maintenance, supply chain, quality inspection AI.', path: '/services?category=ai' },
  { name: 'E-Commerce & Retail', desc: 'Recommendation engines, inventory AI, dynamic pricing.', path: '/services?category=ai' },
  { name: 'Technology & SaaS', desc: 'Developer tools, platform engineering, dev tooling.', path: '/services?category=it' },
  { name: 'Logistics & Supply Chain', desc: 'Route optimization, warehouse automation, fleet tracking.', path: '/services?category=ai' },
  { name: 'Government & Public Sector', desc: 'Citizen services, compliance automation, civic AI.', path: '/services?category=ai' },
  { name: 'Insurance', desc: 'Claims automation, underwriting AI, fraud prevention.', path: '/services?category=ai' },
];

export default function SolutionsPage() {
  return (
    <StandardPage
      title="Industry Solutions"
      subtitle="Tailored AI, IT, and Micro-SaaS solutions purpose-built for your industry's unique challenges and compliance requirements."
      breadcrumbItems={[
        { label: 'Home', href: '/' },
        { label: 'Solutions' },
      ]}
      actions={[
        { label: 'Start a project', href: '/contact/', style: 'primary' },
        { label: 'Browse services', href: '/services/', style: 'secondary' },
      ]}
    >
      <div className="max-w-6xl mx-auto">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {industries.map((ind) => (
            <Link key={ind.name} href={ind.path} className="glass-card">
              <h3 className="font-semibold text-white mb-2">{ind.name}</h3>
              <p className="text-slate-400 text-sm">{ind.desc}</p>
              <span className="text-purple-400 text-xs mt-3 inline-block">Learn more →</span>
            </Link>
          ))}
        </div>

        <div className="mt-16 rounded-2xl border border-slate-800 bg-slate-900/60 p-6 md:p-8">
          <h2 className="text-2xl font-bold text-white mb-3">How we select a solution path</h2>
          <p className="text-slate-300 text-sm leading-relaxed mb-4">
            We align the solution to measurable outcomes, compliance constraints, and operational ownership before recommending architecture or tooling.
          </p>
          <div className="grid gap-4 sm:grid-cols-3">
            <div>
              <h3 className="text-white font-semibold mb-1">Outcome clarity</h3>
              <p className="text-slate-400 text-xs">Define the business result first, then choose the minimum viable capability to achieve it.</p>
            </div>
            <div>
              <h3 className="text-white font-semibold mb-1">Compliance fit</h3>
              <p className="text-slate-400 text-xs">Map regulations, data residency, and audit requirements before selecting vendors or models.</p>
            </div>
            <div>
              <h3 className="text-white font-semibold mb-1">Operational handoff</h3>
              <p className="text-slate-400 text-xs">Build runbooks, ownership, and review cycles before scaling beyond pilot.</p>
            </div>
          </div>
        </div>

        <div className="mt-10 rounded-2xl border border-purple-500/30 bg-purple-900/20 p-6">
          <h2 className="text-xl font-bold text-white mb-2">Want a tailored recommendation?</h2>
          <p className="text-slate-300 text-sm mb-4">
            Tell us your industry, constraints, and timeline. We will return a short list of best-fit services with estimated ROI and timeline.
          </p>
          <div className="flex flex-col sm:flex-row gap-3">
            <Link href="/contact/" className="btn-primary text-center">Contact us</Link>
            <Link href="/services/" className="btn-secondary text-center">Browse services</Link>
          </div>
        </div>
      </div>
    </StandardPage>
  );
}
