import Link from 'next/link';

export default function Home() {
  return (
    <div className="p-8 space-y-6">
      <div>
        <h1 className="text-2xl font-semibold">Zion Platform</h1>
        <p className="text-gray-600">Cloud-native autonomous automations, running continuously and syncing results.</p>
      </div>

      <div className="space-y-3">
        <h2 className="text-xl font-medium">Intelligent Cloud Automations</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>
            IPO Readiness Watchdog — <Link href="/data/ipo-portal/watchdog-report.md"><a className="underline">Latest Report</a></Link>
          </li>
          <li>
            Audit Log Analyzer — <Link href="/data/ipo-portal/audit-summary.md"><a className="underline">Summary</a></Link>
          </li>
          <li>
            Investor Update Drafts — <Link href="/data/ipo-portal/drafts/latest.md"><a className="underline">Latest Draft</a></Link>
          </li>
          <li>
            Admin IPO Portal — <Link href="/admin/ipo-portal"><a className="underline">Open</a></Link>
          </li>
        </ul>
      </div>

      <div className="space-y-2">
        <h2 className="text-xl font-medium">How it works</h2>
        <p className="text-gray-600">Automations run on GitHub Actions schedules every 15 minutes, hourly, daily and weekly, requiring no human intervention.</p>
      </div>
    </div>
  );
}