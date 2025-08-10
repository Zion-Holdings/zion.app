import Link from 'next/link';

export default function Home() {
  return (
    <div className="space-y-10">
      <section className="text-center py-10">
        <h1 className="text-4xl font-bold">Zion Autonomous Cloud Agents</h1>
        <p className="mt-3 text-gray-600 dark:text-gray-300">
          Fully automated, AI-native systems that run continuously in the cloud. No human-in-the-loop required.
        </p>
        <div className="mt-6 flex justify-center gap-4">
          <Link href="/automation"><a className="px-4 py-2 rounded bg-black text-white dark:bg-white dark:text-black">Explore Automations</a></Link>
          <Link href="/docs/gitbook"><a className="px-4 py-2 rounded border border-gray-300 dark:border-gray-700">Read Docs</a></Link>
        </div>
      </section>

      <section className="grid md:grid-cols-3 gap-6">
        <div className="border rounded-lg p-6">
          <h3 className="font-semibold text-lg">Docs Intelligence Agent</h3>
          <p className="mt-2 text-sm text-gray-600 dark:text-gray-300">Scans docs, builds content maps, checks links, and publishes reports automatically.</p>
          <div className="mt-3 flex gap-3 text-sm">
            <Link href="/automation"><a className="underline">Status</a></Link>
            <Link href="/docs/gitbook"><a className="underline">Docs</a></Link>
          </div>
        </div>
        <div className="border rounded-lg p-6">
          <h3 className="font-semibold text-lg">API Spec Generator</h3>
          <p className="mt-2 text-sm text-gray-600 dark:text-gray-300">Parses API docs and emits an OpenAPI spec for tooling and mocks.</p>
          <div className="mt-3 flex gap-3 text-sm">
            <Link href="/openapi.json"><a className="underline">OpenAPI</a></Link>
            <Link href="/automation"><a className="underline">Status</a></Link>
          </div>
        </div>
        <div className="border rounded-lg p-6">
          <h3 className="font-semibold text-lg">Governance Insights</h3>
          <p className="mt-2 text-sm text-gray-600 dark:text-gray-300">Summarizes quorum, thresholds, and health signals into actionable reports.</p>
          <div className="mt-3 flex gap-3 text-sm">
            <Link href="/automation"><a className="underline">Reports</a></Link>
            <Link href="/docs/gitbook/governance/proposal-lifecycle.md"><a className="underline">Governance Docs</a></Link>
          </div>
        </div>
      </section>
    </div>
  );
}