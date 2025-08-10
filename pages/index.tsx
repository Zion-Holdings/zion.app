import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-900">
      <div className="max-w-5xl mx-auto py-16 px-4">
        <h1 className="text-4xl font-semibold mb-4">Zion Platform</h1>
        <p className="text-gray-600 mb-10">AI-native talent, training, and integrations.</p>

        <section className="mb-12">
          <h2 className="text-2xl font-medium mb-2">Autonomous Cloud Automations</h2>
          <p className="text-gray-600 mb-4">These agents run in the cloud on a schedule, with zero human intervention.</p>
          <ul className="list-disc ml-6 space-y-2">
            <li>
              Partner KPIs Generator → <Link className="text-blue-600 underline" href="/data/reports/partners/kpis-latest.json">kpis-latest.json</Link>
            </li>
            <li>
              AI Talent Intake → <span className="text-gray-700">Adds sample AI graduates to the talent pool automatically</span>
            </li>
            <li>
              Impact Metrics → <Link className="text-blue-600 underline" href="/data/reports/impact/impact-latest.json">impact-latest.json</Link>
            </li>
            <li>
              Sitemap Maintenance → <Link className="text-blue-600 underline" href="/sitemap.xml">sitemap.xml</Link>
            </li>
          </ul>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-medium mb-2">Partner Integrations</h2>
          <p className="text-gray-600 mb-4">Register and get instant API access.</p>
          <Link className="text-white bg-black px-4 py-2 rounded" href="/partners">Partner Portal</Link>
        </section>
      </div>
    </div>
  );
}