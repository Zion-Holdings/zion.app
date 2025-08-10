import Link from 'next/link';

export default function HomePage() {
  return (
    <div className="space-y-8">
      <div className="space-y-2">
        <h1 className="text-3xl font-bold">Welcome to Zion</h1>
        <p className="text-gray-600 dark:text-gray-300">Explore our portals and autonomous systems:</p>
      </div>

      <div className="flex flex-wrap gap-4">
        <Link href="/investors"><a className="px-4 py-2 rounded bg-gray-900 text-white">Investor Portal</a></Link>
        <Link href="/franchise-portal"><a className="px-4 py-2 rounded bg-gray-200 dark:bg-gray-800">Franchise Portal</a></Link>
        <Link href="/changelog"><a className="px-4 py-2 rounded bg-blue-600 text-white">Changelog</a></Link>
      </div>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold">Autonomous Cloud Automations</h2>
        <p className="text-gray-600 dark:text-gray-400">Intelligent agents run on a schedule in the cloud—no human or local machine required. Results are committed back to the repo and surfaced in the admin dashboard.</p>
        <ul className="list-disc pl-5 space-y-1 text-sm">
          <li>
            Weekly Feedback Intelligence → <Link href="/admin/feedback-insights"><a className="text-blue-600">Feedback Insights</a></Link>
          </li>
          <li>
            Journey Friction Detector → <Link href="/api/admin/journey-report"><a className="text-blue-600">Latest Report (Admin)</a></Link>
          </li>
          <li>
            Market Health Forecaster → <Link href="/api/admin/forecast-report"><a className="text-blue-600">Latest Forecast (Admin)</a></Link>
          </li>
          <li>
            Weekly Changelog Summarizer → <Link href="/changelog"><a className="text-blue-600">Read Changelog</a></Link>
          </li>
          <li>
            Sync Health & Git Automation → <Link href="/admin/automation-status"><a className="text-blue-600">Automation Status (Admin)</a></Link>
          </li>
        </ul>
      </section>
    </div>
  );
}