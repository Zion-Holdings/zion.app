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
      </div>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold">Autonomous Cloud Automations</h2>
        <p className="text-gray-600 dark:text-gray-400">Intelligent agents run on a schedule in the cloud—no human or local machine required. Results are committed back to the repo and surfaced in the admin dashboard.</p>
        <ul className="list-disc pl-5 space-y-1 text-sm">
          <li>
            Weekly Feedback Intelligence: batches chat logs and ratings, groups by feature and sentiment, summarizes top insights, and generates a prioritized backlog. View in{' '}
            <Link href="/admin/feedback-insights"><a className="text-blue-600">Feedback Insights</a></Link>.
          </li>
          <li>
            UI Evolution & Responsive Optimizer: scheduled refactors to improve UX, accessibility, and responsive behaviors with safe edits and PRs.
          </li>
          <li>
            Security & SEO Agents: scan, detect, and propose remediations, committing reports and opening tasks.
          </li>
          <li>
            Sync Health & Git Automation: background loops ensure repository stays up-to-date and healthy; see{' '}
            <Link href="/admin/automation-status"><a className="text-blue-600">Automation Status</a></Link>.
          </li>
        </ul>
      </section>
    </div>
  );
}