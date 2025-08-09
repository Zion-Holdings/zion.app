import Link from 'next/link';

export default function Home() {
  return (
    <div className="max-w-5xl mx-auto p-8 space-y-8">
      {/* AUTO:START - DO NOT EDIT BELOW. This section is managed by automation/homepage-auto-updater.cjs */}
      <div>
        <h1 className="text-3xl font-bold">Zion Autonomous Cloud</h1>
        <p className="text-gray-600 mt-2">Always-on, intelligent automations running in the cloud. No human intervention. Changes sync back to the repo automatically.</p>
      </div>

      <div className="grid md:grid-cols-2 gap-4">
        <Link href="/docs/automation#infinite-loop">
          <div className="border rounded p-4 hover:bg-gray-50 cursor-pointer">
            <div className="font-semibold">Autonomous Improvement</div>
            <div className="text-sm text-gray-600">Continuous code, UX, and content evolution in the cloud</div>
          </div>
        </Link>
        <Link href="/dao">
          <div className="border rounded p-4 hover:bg-gray-50 cursor-pointer">
            <div className="font-semibold">Governance (DAO)</div>
            <div className="text-sm text-gray-600">On-chain proposals, voting, and timelock execution</div>
          </div>
        </Link>
        <Link href="/docs/automation#ui-evolution">
          <div className="border rounded p-4 hover:bg-gray-50 cursor-pointer">
            <div className="font-semibold">UI Evolution</div>
            <div className="text-sm text-gray-600">AI-driven UI beautification and navigation improvements</div>
          </div>
        </Link>
        <Link href="/blog">
          <div className="border rounded p-4 hover:bg-gray-50 cursor-pointer">
            <div className="font-semibold">SEO & Content</div>
            <div className="text-sm text-gray-600">Automated content generation and SEO optimization</div>
          </div>
        </Link>
        <Link href="/docs/automation#health">
          <div className="border rounded p-4 hover:bg-gray-50 cursor-pointer">
            <div className="font-semibold">Security & Health</div>
            <div className="text-sm text-gray-600">Self-healing, security scans, and link/site maintenance</div>
          </div>
        </Link>
      </div>

      <div className="space-y-2">
        <h2 className="text-xl font-semibold">What runs autonomously</h2>
        <ul className="list-disc ml-6 text-sm text-gray-700 space-y-1">
          <li>Infinite Improvement Loop: automation/infinite-improvement-runner.cjs</li>
          <li>AI PR Reviewer, Issue Triager, Release Notes & Auto-Changelog</li>
          <li>Self-healing, security scanning, SEO/content, UI evolution, link/site maintenance</li>
        </ul>
      </div>

      <div className="space-y-2">
        <h2 className="text-xl font-semibold">Triggers</h2>
        <ul className="list-disc ml-6 text-sm text-gray-700 space-y-1">
          <li>GitHub Actions schedules run multiple times per hour</li>
          <li>Each successful run auto-commits improvements</li>
        </ul>
      </div>

      <div>
        <Link href="/blog"><span className="px-3 py-2 rounded bg-blue-600 text-white cursor-pointer">See Latest Changes</span></Link>
      </div>
      {/* AUTO:END - DO NOT EDIT ABOVE */}
    </div>
  );
}