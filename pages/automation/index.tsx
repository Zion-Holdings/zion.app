import Link from 'next/link';

export default function Automation() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-xl font-semibold">Autonomous Cloud Automations</h1>
        <p className="text-gray-700 dark:text-gray-300">Zero‑touch jobs that run on a schedule in the cloud.</p>
      </div>

      <ul className="space-y-3 text-sm">
        <li>
          <span className="font-medium">Autonomous Content</span> — hourly blog generation.
          <div><Link href="https://github.com/Zion-Holdings/zion.app/actions/workflows/content.yml"><a className="text-indigo-600 hover:underline">View workflow</a></Link></div>
        </li>
        <li>
          <span className="font-medium">Search Index Refresh</span> — every 6 minutes index rebuild.
          <div><Link href="https://github.com/Zion-Holdings/zion.app/actions/workflows/search-index.yml"><a className="text-indigo-600 hover:underline">View workflow</a></Link></div>
        </li>
        <li>
          <span className="font-medium">Nightly Automation</span> — 03:00 UTC health checks and scans.
          <div><Link href="https://github.com/Zion-Holdings/zion.app/actions/workflows/nightly.yml"><a className="text-indigo-600 hover:underline">View workflow</a></Link></div>
        </li>
        <li>
          <span className="font-medium">Weekly Deep Automation</span> — Monday 04:00 UTC audits and proposals.
          <div><Link href="https://github.com/Zion-Holdings/zion.app/actions/workflows/weekly.yml"><a className="text-indigo-600 hover:underline">View workflow</a></Link></div>
        </li>
      </ul>
    </div>
  );
}