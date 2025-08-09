import Link from 'next/link';
import EnhancedLayout from '../../components/layout/EnhancedLayout';

export default function AutomationHub() {
  const items = [
    { title: 'Innovation Radar', href: '/automation/innovation-radar', desc: 'Hourly AI/DAO research signals aggregated from public sources.' },
    { title: 'Global Bounties', href: '/automation/global-bounties', desc: 'Open issues and bounties across GitHub for immediate contribution.' },
    { title: 'Governance Pulse', href: '/automation/governance-pulse', desc: 'Latest proposals across notable DAOs on Snapshot.' },
  ];
  return (
    <EnhancedLayout>
      <div className="max-w-5xl mx-auto py-12">
        <h1 className="text-3xl md:text-5xl font-bold">Automation Hub</h1>
        <p className="mt-3 text-gray-600 dark:text-gray-300">Explore autonomous agents that run in the cloud and sync updates to this repository.</p>
        <div className="mt-8 grid md:grid-cols-3 gap-6">
          {items.map((it) => (
            <Link key={it.href} href={it.href}>
              <a className="block p-6 rounded-lg border border-gray-200 dark:border-gray-800 hover:border-black dark:hover:border-white transition-colors">
                <h3 className="text-lg font-semibold">{it.title}</h3>
                <p className="mt-2 text-sm text-gray-600 dark:text-gray-300">{it.desc}</p>
                <span className="mt-4 inline-block text-sm font-medium text-blue-600 dark:text-blue-400">Open →</span>
              </a>
            </Link>
          ))}
          <FeatureCard title="ArXiv Research" href="/automation/arxiv-research" desc="Fresh AI governance and agents research papers." />
          <FeatureCard title="Remote Roles" href="/automation/remote-roles" desc="Remote jobs in AI/Agents/Web3 filtered for relevance." />
        </div>
      </div>
    </EnhancedLayout>
  );
}

function FeatureCard({ title, desc, href }: { title: string; desc: string; href: string }) {
  return (
    <Link href={href}>
      <a className="block p-6 rounded-lg border border-gray-200 dark:border-gray-800 hover:border-black dark:hover:border-white transition-colors">
        <h3 className="text-lg font-semibold">{title}</h3>
        <p className="mt-2 text-sm text-gray-600 dark:text-gray-300">{desc}</p>
        <span className="mt-4 inline-block text-sm font-medium text-blue-600 dark:text-blue-400">Open →</span>
      </a>
    </Link>
  );
}