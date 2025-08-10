import React from 'react';
import Head from 'next/head';

export default function HomePage() {
  return (
    <>
      <Head>
        <title>Zion — Autonomous Cloud Automations</title>
        <meta name="description" content="Fully autonomous cloud automations: self-healing, analysis, optimization, and releases." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <main className="max-w-5xl mx-auto px-4 py-12">
        <section className="text-center mb-10">
          <h1 className="text-3xl md:text-4xl font-extrabold">Autonomous Cloud Automations</h1>
          <p className="mt-3 text-gray-600">Runs 100% in the cloud. No servers. No humans. Continuous improvements synced back to this repository.</p>
          <div className="mt-6 flex flex-wrap gap-3 justify-center">
            <a href="https://github.com/Zion-Holdings/zion.app/actions" className="px-4 py-2 rounded bg-blue-600 text-white">View Live Workflows</a>
            <a href="/docs/AUTONOMOUS_AUTOMATIONS.md" className="px-4 py-2 rounded bg-gray-900 text-white">Read Automation Docs</a>
          </div>
        </section>

        <section className="grid md:grid-cols-3 gap-5">
          <Card title="Spec-Dev & Alignment" desc="Continuously scans specs and site, applies targeted fixes and updates automatically." />
          <Card title="Self-Healing & Linting" desc="Finds and fixes errors, empty files, and conventions across the codebase." />
          <Card title="UI Evolution" desc="Analyzes and beautifies UI for consistency, accessibility, and performance." />
          <Card title="Responsive & Links" desc="Ensures responsive content and fixes broken links site-wide." />
          <Card title="Dependencies" desc="Daily patch bumps and weekly minor updates keep the stack fresh and secure." />
          <Card title="Image Optimization" desc="Optimizes images automatically to keep page loads fast." />
        </section>

        <section className="mt-12">
          <h2 className="text-xl font-bold mb-2">How it works</h2>
          <ol className="list-decimal list-inside text-gray-700 space-y-1">
            <li>Workflows run on schedules and on-demand in GitHub-hosted runners.</li>
            <li>Automations perform analysis, fixes, and optimization using npm scripts.</li>
            <li>Changes are committed back to the current branch with safe concurrency guards.</li>
            <li>Prereleases are tagged automatically when updates land.</li>
          </ol>
        </section>
      </main>
    </>
  );
}

function Card({ title, desc }: { title: string; desc: string }) {
  return (
    <div className="border rounded-lg p-4 bg-white shadow-sm">
      <div className="font-semibold">{title}</div>
      <div className="text-sm text-gray-600 mt-1">{desc}</div>
    </div>
  );
}