import React from 'react';
import Head from 'next/head';
import Link from 'next/link';

export default function SecurityPage() {
  return (
    <>
      <Head>
        <title>Security & Compliance — Zion Tech Group</title>
        <meta name="description" content="Learn about our security practices, compliance posture, and guidance for responsible disclosure." />
      </Head>

      <div className="min-h-screen bg-gradient-to-br from-indigo-950 via-purple-950 to-slate-950 text-white">
        <main className="container mx-auto px-6 py-12">
          <h1 className="text-4xl font-extrabold mb-6 bg-gradient-to-r from-cyan-400 via-fuchsia-400 to-blue-400 bg-clip-text text-transparent">Security & Compliance</h1>
          <p className="text-white/90 max-w-3xl mb-8">
            We operate with a defense-in-depth approach, continuous monitoring, automated scanning, and zero-trust principles. Explore our security policy and guidance below.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <a
              href="https://github.com/Zion-Holdings/zion.app/blob/main/SECURITY.md"
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-white/10 backdrop-blur-xl rounded-xl p-6 border border-white/20 hover:border-cyan-400/40 transition-all duration-300"
            >
              <h2 className="text-xl font-semibold text-cyan-400 mb-2">Security Policy (GitHub)</h2>
              <p className="text-white/80 text-sm">Responsible disclosure program, supported versions, and reporting process.</p>
              <div className="mt-3 text-cyan-300 text-sm">Open on GitHub →</div>
            </a>

            <Link
              href="/privacy"
              className="group bg-white/10 backdrop-blur-xl rounded-xl p-6 border border-white/20 hover:border-green-400/40 transition-all duration-300"
            >
              <h2 className="text-xl font-semibold text-green-400 mb-2">Privacy & Data Protection</h2>
              <p className="text-white/80 text-sm">How we protect user data, retention policies, and compliance posture.</p>
              <div className="mt-3 text-green-300 text-sm">View privacy page →</div>
            </Link>
          </div>

          <div className="mt-10">
            <Link href="/" className="text-white/80 hover:text-white">← Back to homepage</Link>
          </div>
        </main>
      </div>
    </>
  );
}

