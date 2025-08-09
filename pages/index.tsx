import Link from 'next/link';
export default function Home() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-2xl font-semibold">Welcome to Zion</h1>
        <p className="text-gray-600 mt-1">A modern platform powered by autonomous cloud agents.</p>
      </div>

      <div className="space-y-3">
        <h2 className="text-lg font-medium">Featured</h2>
        <ul className="list-disc pl-6 space-y-1 text-sm">
          <li><Link href="/governance"><a className="underline">Zion Governance</a></Link> — Propose, vote, and track results.</li>
          <li><Link href="/automation/governance"><a className="underline">Autonomous Governance Engine</a></Link> — Snapshots, status updates, roadmap queueing, and metrics.</li>
          <li><Link href="/automation/news"><a className="underline">Autonomous News Digest</a></Link> — Curated tech digest, published on schedule.</li>
          <li><Link href="/automation/repo"><a className="underline">Repo Stats</a></Link> — Tracks content stats and updates README badges.</li>
          <li><Link href="/automation/stale"><a className="underline">Stale Content Detector</a></Link> — Flags content older than 30 days.</li>
          <li><Link href="/automation/seo"><a className="underline">SEO Auditor</a></Link> — Finds missing alt, headings, thin content; updates reports.</li>
          <li><Link href="/automation/security"><a className="underline">Security Scanner</a></Link> — Flags risky code patterns and vulnerable deps.</li>
        </ul>
      </div>

      <div className="space-y-3">
        <h2 className="text-lg font-medium">Autonomous Cloud Agents</h2>
        <p className="text-gray-600 text-sm">Agents run on a schedule in the cloud, continuously improving and syncing the site—no manual intervention.</p>
        <div className="grid md:grid-cols-2 gap-3 text-sm">
          <div className="border rounded p-3">
            <div className="font-medium">Governance Snapshotter</div>
            <div className="text-gray-600">Publishes proposal and vote snapshots to JSON for transparency.</div>
            <Link href="/automation/governance"><a className="underline mt-1 inline-block">View dashboard</a></Link>
          </div>
          <div className="border rounded p-3">
            <div className="font-medium">Roadmap Queue</div>
            <div className="text-gray-600">Automatically queues approved proposals into the public roadmap.</div>
            <a className="underline mt-1 inline-block" href="/ROADMAP.md">View ROADMAP</a>
          </div>
          <div className="border rounded p-3">
            <div className="font-medium">News Digest Generator</div>
            <div className="text-gray-600">Fetches trending tech stories and publishes a digest as a new page.</div>
            <Link href="/automation/news"><a className="underline mt-1 inline-block">View digests</a></Link>
          </div>
          <div className="border rounded p-3">
            <div className="font-medium">Links Auto-Fix</div>
            <div className="text-gray-600">Scans for broken links and commits fixes automatically.</div>
            <a className="underline mt-1 inline-block" href="https://github.com/Zion-Holdings/zion.app/actions">View runs</a>
          </div>
          <div className="border rounded p-3">
            <div className="font-medium">SEO Auditor</div>
            <div className="text-gray-600">Audits pages and reports issues; runs on a schedule.</div>
            <Link href="/automation/seo"><a className="underline mt-1 inline-block">View SEO report</a></Link>
          </div>
          <div className="border rounded p-3">
            <div className="font-medium">Security Scanner</div>
            <div className="text-gray-600">Scans code and dependencies, publishing a security score.</div>
            <Link href="/automation/security"><a className="underline mt-1 inline-block">View security report</a></Link>
          </div>
        </div>
      </div>
    </div>
  );
}