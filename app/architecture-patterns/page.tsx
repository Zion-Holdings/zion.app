import Link from 'next/link';

export const metadata = {
  title: 'Architecture Patterns | Zion Tech Group',
  description: 'Curated architecture patterns for common scales and constraints.',
};

export default function ArchitecturePatterns() {
  const patterns = [
    { title: 'Event-driven SaaS', points: ['API gateway','Message broker','Worker pools','Event store'] },
    { title: 'Multi-tenant platform', points: ['Tenant isolation','Schema strategy','Quota enforcement','Billing integration'] },
    { title: 'Edge-first delivery', points: ['CDN + cache','Origin shielding','Regional failover','Signed URLs'] },
    { title: 'Resilient monolith', points: ['Modular boundaries','Transactional consistency','Operational visibility','Gradual extraction'] },
  ];
  return (
    <div className="min-h-screen bg-slate-950 text-white p-8">
      <div className="mx-auto max-w-5xl">
        <Link href="/" className="mb-2 inline-flex items-center gap-2 text-slate-400 hover:text-white">← Home</Link>
        <h1 className="text-3xl font-bold">Architecture Patterns</h1>
        <p className="mt-2 text-slate-400">Proven system patterns for scale, resilience, and maintainability.</p>
        <div className="mt-8 grid gap-4 md:grid-cols-2">
          {patterns.map(p => (
            <div key={p.title} className="rounded-xl border border-slate-800 bg-slate-900/50 p-5">
              <h3 className="text-white font-semibold">{p.title}</h3>
              <ul className="mt-2 list-disc pl-5 text-sm text-slate-300">
                {p.points.map(item => <li key={item}>{item}</li>)}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
