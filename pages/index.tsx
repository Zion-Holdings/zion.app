import Link from 'next/link';

export default function HomePage() {
  return (
    <div className="space-y-10">
      <section className="space-y-3">
        <h1 className="text-3xl font-semibold">Autonomous AI Automations</h1>
        <p className="text-gray-700 max-w-2xl">
          Always-on, cloud-native agents continuously analyze trends, enrich talent profiles, and keep your pipeline moving — no servers to manage, no manual steps required.
        </p>
        <div className="flex flex-wrap gap-3">
          <Link href="/automation/ai-trends"><a className="px-4 py-2 rounded bg-black text-white">View AI Trend Watch</a></Link>
          <Link href="/automation/talent-updates"><a className="px-4 py-2 rounded bg-gray-100">Talent AI Updates</a></Link>
        </div>
      </section>

      <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="border rounded p-5 space-y-2">
          <div className="text-lg font-medium">AI Trend Watch</div>
          <p className="text-sm text-gray-700">A scheduled agent curates and summarizes the latest in AI, cloud, and devtools — automatically committed to the site.</p>
          <Link href="/automation/ai-trends"><a className="text-sm font-medium text-blue-600">Explore updates →</a></Link>
        </div>
        <div className="border rounded p-5 space-y-2">
          <div className="text-lg font-medium">Talent AI Enrichment</div>
          <p className="text-sm text-gray-700">Profiles are periodically refined with AI-written summaries tuned for client evaluation.</p>
          <Link href="/automation/talent-updates"><a className="text-sm font-medium text-blue-600">See latest summaries →</a></Link>
        </div>
      </section>

      <section className="space-y-3">
        <div className="text-lg font-medium">Hire Top Talent</div>
        <p className="text-sm text-gray-700">Browse experts and request quotes seamlessly.</p>
        <div className="flex items-center gap-3">
          <Link href="/talent"><a className="px-4 py-2 rounded bg-black text-white">Browse Talent</a></Link>
          <Link href="/favorites"><a className="px-4 py-2 rounded bg-gray-100">Your Favorites</a></Link>
        </div>
      </section>
    </div>
  );
}