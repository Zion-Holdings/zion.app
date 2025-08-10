import React from "react";
import Link from "next/link";

export default function HomePage() {
  return (
    <main className="mx-auto max-w-6xl px-4 py-12">
      <section className="mb-10">
        <h1 className="text-3xl font-bold text-gray-900">Zion AI Marketplace</h1>
        <p className="mt-2 text-gray-600">
          Autonomous cloud automations now run continuously, innovating, improving, and syncing updates back to this repository without human intervention.
        </p>
      </section>

      <section className="grid grid-cols-1 gap-6 md:grid-cols-3">
        <div className="rounded-2xl border border-indigo-100 bg-white p-6 shadow-sm">
          <h2 className="text-lg font-semibold text-gray-900">Autonomous Smart Runner</h2>
          <p className="mt-2 text-sm text-gray-600">
            Intelligent orchestrator that detects changes, runs selected automations in parallel, and commits results fast.
          </p>
          <div className="mt-4 flex gap-3">
            <Link href="/automations"><a className="rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-medium text-white hover:bg-indigo-700">View Details</a></Link>
            <a
              href="https://github.com/Zion-Holdings/zion.app/actions"
              target="_blank"
              rel="noreferrer"
              className="rounded-md border border-gray-200 px-3 py-1.5 text-sm font-medium text-gray-700 hover:bg-gray-50"
            >
              Live Runs
            </a>
          </div>
        </div>

        <div className="rounded-2xl border border-emerald-100 bg-white p-6 shadow-sm">
          <h2 className="text-lg font-semibold text-gray-900">AI Content Curator</h2>
          <p className="mt-2 text-sm text-gray-600">
            If enabled, continuously curates growth experiments and helpful artifacts using AI.
          </p>
          <div className="mt-4 flex gap-3">
            <Link href="/automations/curation"><a className="rounded-md bg-emerald-600 px-3 py-1.5 text-sm font-medium text-white hover:bg-emerald-700">View Curated Output</a></Link>
          </div>
        </div>

        <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
          <h2 className="text-lg font-semibold text-gray-900">Cloud Schedules</h2>
          <p className="mt-2 text-sm text-gray-600">
            High-frequency, concurrent workflows ensure fresh content, healthy links, and continuous improvements.
          </p>
          <div className="mt-4 flex gap-3">
            <a
              href="https://github.com/Zion-Holdings/zion.app/actions"
              target="_blank"
              rel="noreferrer"
              className="rounded-md border border-gray-200 px-3 py-1.5 text-sm font-medium text-gray-700 hover:bg-gray-50"
            >
              View Workflows
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}