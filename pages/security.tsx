import React from 'react';
import Head from 'next/head';
import Link from 'next/link';

export default function SecurityPage() {
  return (
    <>
      <Head>
        <title>Security | Zion Tech Group</title>
        <meta name="description" content="Security practices, compliance, and protections at Zion Tech Group." />
      </Head>
      <div className="min-h-screen bg-gradient-to-br from-indigo-950 via-purple-950 to-slate-950 text-white">
        <main className="container mx-auto px-6 py-12">
          <nav className="mb-8">
            <Link href="/" className="text-cyan-400 hover:text-cyan-300">← Back to Home</Link>
          </nav>
          <h1 className="text-5xl font-extrabold mb-6 bg-gradient-to-r from-red-400 to-pink-400 bg-clip-text text-transparent">Security</h1>
          <p className="text-white/80 max-w-3xl mb-8">We implement layered security controls, automated scanning, and continuous monitoring to protect data and ensure compliance.</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white/10 rounded-xl p-6 border border-white/20">
              <h2 className="text-lg font-semibold text-red-400 mb-3">Core Practices</h2>
              <ul className="text-white/80 text-sm space-y-2">
                <li>• Automated dependency and vulnerability scanning</li>
                <li>• Principle of least privilege</li>
                <li>• Continuous monitoring and alerting</li>
                <li>• Secrets management and key rotation</li>
              </ul>
            </div>
            <div className="bg-white/10 rounded-xl p-6 border border-white/20">
              <h2 className="text-lg font-semibold text-red-400 mb-3">Documentation</h2>
              <ul className="text-white/80 text-sm space-y-2">
                <li><Link href="/SECURITY.md" className="text-red-300 hover:text-red-200">Security Guide →</Link></li>
              </ul>
            </div>
          </div>
        </main>
      </div>
    </>
  );
}

