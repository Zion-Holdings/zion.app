import React from 'react';

export default function CloudAgents() {
  return (
    <div className="min-h-screen p-8 space-y-6 max-w-3xl mx-auto">
      <h1 className="text-2xl font-semibold">Autonomous Cloud Automations</h1>
      <p className="text-gray-600">These agents run on schedules in GitHub Actions and commit results back to the repository.</p>

      <div className="space-y-4">
        <div className="border rounded p-4">
          <h2 className="font-medium">ZGP Archive Publisher</h2>
          <p className="text-gray-600 text-sm">Builds PDF exports for each proposal and publishes an index.</p>
          <div className="text-sm space-x-4 mt-2">
            <a className="text-blue-600 underline" href="/governance/archive/" target="_blank" rel="noreferrer">Archive</a>
            <a className="text-blue-600 underline" href="https://github.com/Zion-Holdings/zion.app/actions/workflows/zgp-archive.yml" target="_blank" rel="noreferrer">Workflow</a>
          </div>
        </div>

        <div className="border rounded p-4">
          <h2 className="font-medium">ZGP Weekly Digest</h2>
          <p className="text-gray-600 text-sm">Summarizes proposal updates over the last 7 days.</p>
          <div className="text-sm space-x-4 mt-2">
            <a className="text-blue-600 underline" href="/docs/digests/" target="_blank" rel="noreferrer">Digests</a>
            <a className="text-blue-600 underline" href="https://github.com/Zion-Holdings/zion.app/actions/workflows/zgp-digest.yml" target="_blank" rel="noreferrer">Workflow</a>
          </div>
        </div>

        <div className="border rounded p-4">
          <h2 className="font-medium">Nightly Sitemap</h2>
          <p className="text-gray-600 text-sm">Regenerates the sitemap to keep search engines up-to-date.</p>
          <div className="text-sm space-x-4 mt-2">
            <a className="text-blue-600 underline" href="https://github.com/Zion-Holdings/zion.app/actions/workflows/sitemap.yml" target="_blank" rel="noreferrer">Workflow</a>
          </div>
        </div>
      </div>
    </div>
  );
}