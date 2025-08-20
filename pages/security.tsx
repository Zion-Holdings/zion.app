import React from 'react';
import Head from 'next/head';
import Link from 'next/link';

export default function SecurityPage() {
  return (
    <>
      <Head>
        <title>Security & Compliance — Zion Tech Group</title>
        <meta name="description" content="Our approach to security, compliance, and trust: zero-trust architecture, automated scanning, vulnerability management, and incident response." />
      </Head>
      <div className="min-h-screen bg-gradient-to-br from-indigo-950 via-purple-950 to-slate-950 text-white">
        <main className="container mx-auto px-6 py-12">
          <section className="text-center mb-12">
            <h1 className="text-4xl font-extrabold bg-gradient-to-r from-cyan-400 via-fuchsia-400 to-blue-400 bg-clip-text text-transparent">Security & Compliance</h1>
            <p className="mt-4 text-white/85 max-w-3xl mx-auto">Bank‑grade protections across our autonomous platform: proactive scanning, continuous compliance, and zero‑trust by default.</p>
          </section>

          <section className="mx-auto max-w-5xl grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white/10 border border-white/20 rounded-xl p-6">
              <h2 className="text-cyan-400 font-semibold mb-3">Core Controls</h2>
              <ul className="text-white/80 text-sm space-y-2">
                <li>• Zero‑trust network segmentation</li>
                <li>• Automated dependency & container scanning</li>
                <li>• Vulnerability triage & patch orchestration</li>
                <li>• Secrets hygiene and rotation</li>
                <li>• SBOM and supply‑chain integrity</li>
              </ul>
            </div>

            <div className="bg-white/10 border border-white/20 rounded-xl p-6">
              <h2 className="text-cyan-400 font-semibold mb-3">Compliance & Monitoring</h2>
              <ul className="text-white/80 text-sm space-y-2">
                <li>• Continuous compliance monitoring</li>
                <li>• Threat detection & incident response runbooks</li>
                <li>• Audit logs and immutable evidence</li>
                <li>• Least‑privilege enforcement</li>
                <li>• Data protection and retention</li>
              </ul>
            </div>
          </section>

          <section className="mx-auto max-w-5xl mt-10 text-center">
            <Link href="https://github.com/Zion-Holdings/zion.app/blob/main/SECURITY.md" className="text-cyan-300 hover:text-cyan-200 font-semibold">
              View detailed Security policy →
            </Link>
          </section>
        </main>
      </div>
    </>
  );
}

