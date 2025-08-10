import Link from 'next/link';
import EnhancedLayout from '../components/layout/EnhancedLayout';

export default function Home() {
  return (
    <EnhancedLayout>
      <section className="py-16">
        <div className="max-w-5xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight">Autonomous Cloud Agents</h1>
          <p className="mt-4 text-lg text-gray-600 dark:text-gray-300">
            Always-on automations that research, curate opportunities, and track governance — no servers to manage, no humans required.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/automation/innovation-radar"><a className="px-6 py-3 rounded-md bg-black text-white dark:bg-white dark:text-black font-semibold">Innovation Radar</a></Link>
            <Link href="/automation/global-bounties"><a className="px-6 py-3 rounded-md bg-gray-900/10 dark:bg-white/10 font-semibold">Global Bounties</a></Link>
            <Link href="/automation/governance-pulse"><a className="px-6 py-3 rounded-md bg-gray-900/10 dark:bg-white/10 font-semibold">Governance Pulse</a></Link>
            <Link href="/automation/arxiv-research"><a className="px-6 py-3 rounded-md bg-gray-900/10 dark:bg-white/10 font-semibold">ArXiv Research</a></Link>
            <Link href="/automation/remote-roles"><a className="px-6 py-3 rounded-md bg-gray-900/10 dark:bg-white/10 font-semibold">Remote Roles</a></Link>
            <Link href="/automation/github-agent-repos"><a className="px-6 py-3 rounded-md bg-gray-900/10 dark:bg-white/10 font-semibold">GitHub Agent Repos</a></Link>
            <Link href="/automation/hf-datasets"><a className="px-6 py-3 rounded-md bg-gray-900/10 dark:bg-white/10 font-semibold">HF Datasets</a></Link>
            <Link href="/automation/agentic-news"><a className="px-6 py-3 rounded-md bg-gray-900/10 dark:bg-white/10 font-semibold">Agentic News</a></Link>
            <Link href="/automation/github-contributors"><a className="px-6 py-3 rounded-md bg-gray-900/10 dark:bg-white/10 font-semibold">GitHub Contributors</a></Link>
          </div>
        </div>
      </section>

      <section className="py-8 border-t border-gray-200 dark:border-gray-800">
        <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-6">
          <FeatureCard title="Innovation Radar" href="/automation/innovation-radar" desc="Hourly AI/DAO research signals from the global stream." />
          <FeatureCard title="Global Bounties" href="/automation/global-bounties" desc="Fresh open-source bounties and help-wanted issues." />
          <FeatureCard title="Governance Pulse" href="/automation/governance-pulse" desc="Live proposals across leading DAOs via Snapshot." />
        </div>
        <div className="max-w-5xl mx-auto mt-10 text-center text-sm text-gray-500 dark:text-gray-400">
          Runs serverlessly on scheduled cloud workflows. Changes sync back to this repo automatically.
        </div>
      </section>
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