import Link from 'next/link';

export default function Home() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-semibold">Zion AI Marketplace</h1>
        <p className="text-sm text-gray-600">Welcome.</p>
      </div>

      <section className="border rounded p-4">
        <div className="font-medium mb-2">Autonomous Cloud Automations</div>
        <ul className="list-disc pl-5 text-sm space-y-1">
          <li>
            Weekly DAO Metrics Refresh — updates on-chain holder distribution, top holders, and governance stats.
            <Link href="/dao"><a className="ml-2 text-blue-600 hover:underline">View DAO Panel</a></Link>
          </li>
          <li>
            Weekly Learning Insights — aggregates completions and top badges for Zion Academy.
            <Link href="/certifications"><a className="ml-2 text-blue-600 hover:underline">See Certifications</a></Link>
          </li>
          <li>
            Daily Marketplace Rankings — recalculates top learner rankings for talent discovery.
            <Link href="/learn"><a className="ml-2 text-blue-600 hover:underline">Explore Courses</a></Link>
          </li>
        </ul>
        <div className="text-xs text-gray-500 mt-2">Runs automatically in the cloud via scheduled functions. Syncs changes back to the repository.</div>

<div className="mt-4 text-sm">
  <div className="font-medium mb-1">More automations</div>
  <ul className="list-disc pl-5 space-y-1">
    <li>Hourly Uptime Monitoring — logs status and response time.</li>
    <li>Weekly SEO Score — basic title/meta/h1 checks.</li>
    <li>Weekly Link Checker — finds broken links.</li>
    <li>Weekly Dependency Insights — checks latest versions on npm.</li>
  </ul>
</div>
      </section>
    </div>
  );
}