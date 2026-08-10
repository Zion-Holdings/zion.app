import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Case Studies',
  description: 'Real-world AI and IT implementations from Zion Tech Group clients.',
  alternates: { canonical: '/case-studies/' },
};

export default function CaseStudiesPage() {
  const cases = [
    {
      title: 'Reducing Cloud Spend by 40%',
      client: 'Enterprise SaaS',
      summary: 'Implemented FinOps practices and rightsizing across AWS accounts, cutting monthly cloud cost without impacting performance.',
    },
    {
      title: 'AI Support Assistant at Scale',
      client: 'Mid-Market Retailer',
      summary: 'Deployed an LLM-powered support assistant that deflected 35% of Tier-1 tickets and improved CSAT.',
    },
    {
      title: 'Zero-Trust Network Rollout',
      client: 'Healthcare Provider',
      summary: 'Migrated from perimeter security to zero-trust access with identity verification and microsegmentation.',
    },
  ];

  return (
    <main className="min-h-screen bg-slate-950 py-20">
      <div className="container-page">
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Case Studies</h1>
        <p className="text-slate-400 text-lg max-w-2xl mb-10">
          Proof that AI and infrastructure modernization can be delivered with measurable business outcomes.
        </p>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {cases.map((item) => (
            <div key={item.title} className="glass-card p-6">
              <h3 className="text-white font-semibold mb-2">{item.title}</h3>
              <p className="text-slate-300 text-sm mb-3">{item.client}</p>
              <p className="text-slate-400 text-sm">{item.summary}</p>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
