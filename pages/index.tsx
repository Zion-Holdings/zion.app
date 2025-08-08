import React from 'react';

export default function Home() {
  return (
    <div className="min-h-screen p-8 space-y-8">
      <header>
        <h1 className="text-3xl font-semibold">Zion App</h1>
        <p className="text-gray-600">Governance, Automations, and Autonomous Cloud Agents.</p>
      </header>

      <section className="border rounded p-6">
        <h2 className="text-xl font-medium mb-2">Autonomous Cloud Automations</h2>
        <p className="text-gray-600 mb-4">These agents run in the cloud via GitHub Actions—no servers to manage, no human interaction required.</p>
        <ul className="list-disc pl-5 space-y-2">
          <li>
            <span className="font-medium">ZGP Archive Publisher</span> — Exports all proposals to PDF and publishes a browsable archive.
            <div className="text-sm">
              <a className="text-blue-600 underline mr-3" href="/governance/archive/" target="_blank" rel="noreferrer">View Archive</a>
              <a className="text-blue-600 underline" href="https://github.com/Zion-Holdings/zion.app/actions/workflows/zgp-archive.yml" target="_blank" rel="noreferrer">Workflow Status</a>
            </div>
          </li>
          <li>
            <span className="font-medium">ZGP Weekly Digest</span> — Generates a weekly digest of proposal updates.
            <div className="text-sm">
              <a className="text-blue-600 underline mr-3" href="/docs/digests/" target="_blank" rel="noreferrer">Read Digests</a>
              <a className="text-blue-600 underline" href="https://github.com/Zion-Holdings/zion.app/actions/workflows/zgp-digest.yml" target="_blank" rel="noreferrer">Workflow Status</a>
            </div>
          </li>
          <li>
            <span className="font-medium">Nightly Sitemap</span> — Keeps the public sitemap fresh for better SEO and navigation.
            <div className="text-sm">
              <a className="text-blue-600 underline" href="https://github.com/Zion-Holdings/zion.app/actions/workflows/sitemap.yml" target="_blank" rel="noreferrer">Workflow Status</a>
            </div>
          </li>
        </ul>
      </section>

      <section className="border rounded p-6">
        <h2 className="text-xl font-medium mb-2">Zion Governance Proposals</h2>
        <p className="text-gray-600 mb-4">Draft and submit proposals with AI assist and automatic versioning.</p>
        <a className="inline-block px-4 py-2 rounded bg-blue-600 text-white" href="/dao/templates">Open Template Library</a>
      </section>
    </div>
  );
}