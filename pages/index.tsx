import Link from 'next/link';

export default function Home() {
  const cards = [
    { title: 'Autonomous Improvement', desc: 'Continuous code, UX, and content evolution in the cloud', href: '/docs/automation#infinite-loop' },
    { title: 'Governance (DAO)', desc: 'On-chain proposals, voting, and timelock execution', href: '/dao' },
    { title: 'UI Evolution', desc: 'AI-driven UI beautification and navigation improvements', href: '/docs/automation#ui-evolution' },
    { title: 'SEO & Content', desc: 'Automated content generation and SEO optimization', href: '/blog' },
    { title: 'Security & Health', desc: 'Self-healing, security scans, and link/site maintenance', href: '/docs/automation#health' },
  ];
  return (
    <div className="max-w-5xl mx-auto p-8 space-y-8">
      <div>
        <h1 className="text-3xl font-bold">Zion Autonomous Cloud</h1>
        <p className="text-gray-600 mt-2">Always-on, intelligent automations running in the cloud. No human intervention. Changes sync back to the repo automatically.</p>
      </div>

      <div className="grid md:grid-cols-2 gap-4">
        {cards.map((c) => (
          <Link key={c.title} href={c.href}>
            <div className="border rounded p-4 hover:bg-gray-50 cursor-pointer">
              <div className="font-semibold">{c.title}</div>
              <div className="text-sm text-gray-600">{c.desc}</div>
            </div>
          </Link>
        ))}
      </div>

      <div className="space-y-2">
        <h2 className="text-xl font-semibold">What runs autonomously</h2>
        <ul className="list-disc ml-6 text-sm text-gray-700 space-y-1">
          <li>Infinite Improvement Loop: `automation/infinite-improvement-runner.cjs`</li>
          <li>Intelligent Orchestrator: prioritizes systems based on repo state</li>
          <li>Self-healing, security scanning, SEO/content, UI evolution, link/site maintenance</li>
        </ul>
      </div>

      <div className="space-y-2">
        <h2 className="text-xl font-semibold">Triggers</h2>
        <ul className="list-disc ml-6 text-sm text-gray-700 space-y-1">
          <li>GitHub Actions schedules run every 30 minutes</li>
          <li>Each successful run auto-commits improvements</li>
        </ul>
      </div>

      <div>
        <Link href="/blog"><span className="px-3 py-2 rounded bg-blue-600 text-white cursor-pointer">See Latest Changes</span></Link>
      </div>
    </div>
  );
}