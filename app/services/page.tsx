import Link from 'next/link';

export const metadata = {
  title: 'Services | Zion Tech Group',
  description: 'End-to-end AI, cloud, and growth operations services: help desk automation, development acceleration, outreach, cost optimization, DevOps, fleet, observability, data, and more.',
  alternates: { canonical: '/services' },
};

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-slate-950 py-20">
      <div className="container-page max-w-6xl">
        <h1 className="text-4xl font-bold text-white mb-4">Services</h1>
        <p className="text-slate-300 text-lg leading-relaxed max-w-3xl mb-10">
          Browse AI, IT, cloud, security, data, automation, and DevOps services across our catalog.
        </p>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            { title: 'AI Agents & Autonomous Workflows', href: '/services/ai-agents-autonomous', desc: 'Multi-agent orchestration, tool use, and human-in-the-loop automation.' },
            { title: 'AI Observability & AIOps', href: '/services/ai-observability', desc: 'Monitoring, anomaly detection, and incident automation.' },
            { title: 'Energy & Utilities AI', href: '/services/ai-energy-utilities-analytics', desc: 'Grid forecasting, asset operations, and compliance analytics.' },
            { title: 'IT & Managed Services', href: '/services/managed-it', desc: 'Help desk, endpoint management, and on-site rapid response.' },
            { title: 'Cybersecurity', href: '/services/siem-security-platform', desc: 'SIEM, zero trust access, and ransomware recovery.' },
            { title: 'Cloud & Data', href: '/services/cloud-cost-optimization-platform', desc: 'FinOps, data pipelines, and cloud optimization.' },
          ].map((item) => (
            <Link key={item.href} href={item.href} className="glass-card p-6 block hover:border-purple-500/40 transition-colors">
              <h2 className="text-white font-semibold mb-2">{item.title}</h2>
              <p className="text-slate-300 text-sm leading-relaxed">{item.desc}</p>
              <span className="text-purple-400 text-sm mt-4 inline-block">View service →</span>
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}
