import Link from 'next/link';

export default function Home() {
  return (
    <div className="space-y-10">
      <section className="text-center py-10">
        <h1 className="text-3xl md:text-5xl font-bold">Zion AI Marketplace Automations</h1>
        <p className="mt-3 text-gray-600 dark:text-gray-300">
          Autonomous, cloud-native agents that improve your app, content, and growth—continuously.
        </p>
        <div className="mt-6 flex items-center justify-center gap-3">
          <Link href="/automation"><a className="px-4 py-2 rounded bg-black text-white dark:bg-white dark:text-black">Explore Automations</a></Link>
          <Link href="/reports"><a className="px-4 py-2 rounded border">View Reports</a></Link>
          <Link href="/blog"><a className="px-4 py-2 rounded border">Learn More</a></Link>
        </div>
      </section>

      <section className="grid md:grid-cols-3 gap-6">
        <div className="p-5 rounded border">
          <h3 className="font-semibold">Continuous Frontend Sync</h3>
          <p className="text-sm opacity-80">Keeps UI components consistent, repairs links, and syncs content.</p>
          <Link href="/automation"><a className="text-blue-600">View details →</a></Link>
        </div>
        <div className="p-5 rounded border">
          <h3 className="font-semibold">Self-Healing & Linting</h3>
          <p className="text-sm opacity-80">Detects and fixes issues automatically via CI.</p>
          <Link href="/automation"><a className="text-blue-600">View details →</a></Link>
        </div>
        <div className="p-5 rounded border">
          <h3 className="font-semibold">Growth & SEO Agents</h3>
          <p className="text-sm opacity-80">Publishes content, improves SEO, and monitors performance.</p>
          <Link href="/automation"><a className="text-blue-600">View details →</a></Link>
        </div>
      </section>

      <section className="rounded border p-6">
        <h2 className="text-xl font-semibold">What runs in the cloud?</h2>
        <ul className="list-disc pl-6 mt-3 space-y-2 text-sm">
          <li>GitHub Actions schedules: daily, weekly, and event-driven jobs</li>
          <li>Automated content generation and UI improvements</li>
          <li>Health checks and sync monitors with auto-fixes</li>
        </ul>
        <div className="mt-4">
          <Link href="/automation"><a className="text-blue-600">See the full automation catalog →</a></Link>
        </div>
      </section>
    </div>
  );
}