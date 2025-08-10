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
      <main className="relative overflow-hidden">
        <div className="bg-aurora a" />
        <div className="bg-aurora b" />
        <div className="grid-overlay" />
        <div className="floating-dots" />

        <section className="relative z-10 max-w-6xl mx-auto px-4 py-20 text-center">
          <h1 className="animated-gradient-text neon-text text-4xl md:text-6xl font-extrabold tracking-tight">Autonomous Cloud Automations</h1>
          <p className="mt-4 text-gray-200 max-w-2xl mx-auto">Runs 100% in the cloud. No servers. No humans. Continuous improvements synced back to this repository.</p>
          <div className="mt-8 flex flex-wrap gap-4 justify-center">
            <a href="https://github.com/Zion-Holdings/zion.app/actions" className="button-glow px-5 py-2 rounded bg-indigo-600 text-white">View Live Workflows</a>
            <a href="/docs/AUTONOMOUS_AUTOMATIONS.md" className="button-glow px-5 py-2 rounded bg-cyan-600 text-white">Read Automation Docs</a>
          </div>
        </section>

        <section className="relative z-10 max-w-6xl mx-auto px-4 pb-20 grid md:grid-cols-3 gap-6">
          <GlassCard title="Spec-Dev & Alignment" desc="Continuously scans specs and site, applies targeted fixes and updates automatically." />
          <GlassCard title="Self-Healing & Linting" desc="Finds and fixes errors, empty files, and conventions across the codebase." />
          <GlassCard title="UI Evolution" desc="Analyzes and beautifies UI for consistency, accessibility, and performance." />
          <GlassCard title="Responsive & Links" desc="Ensures responsive content and fixes broken links site-wide." />
          <GlassCard title="Dependencies" desc="Daily patch bumps and weekly minor updates keep the stack fresh and secure." />
          <GlassCard title="Image Optimization" desc="Optimizes images automatically to keep page loads fast." />
        </section>

        <section className="relative z-10 max-w-6xl mx-auto px-4 pb-24">
          <h2 className="animated-gradient-text text-2xl font-bold mb-3">How it works</h2>
          <ol className="list-decimal list-inside text-gray-200 space-y-1">
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

function GlassCard({ title, desc }: { title: string; desc: string }) {
  return (
    <div className="glass rounded-xl p-5 text-white">
      <div className="font-semibold">{title}</div>
      <div className="text-sm text-gray-200 mt-1">{desc}</div>
    </div>
  );
}