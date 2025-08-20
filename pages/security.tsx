import React from 'react';
import Head from 'next/head';
import Link from 'next/link';

export default function SecurityPage() {
  return (
    <>
      <Head>
        <title>Security & Compliance | Zion Tech Group</title>
        <meta name="description" content="Enterprise-grade security, automated scanning, and zero-trust architecture at Zion Tech Group." />
        <meta property="og:title" content="Security & Compliance" />
        <meta property="og:description" content="Enterprise-grade security, automated scanning, and zero-trust architecture." />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>

      <div className="min-h-screen bg-gradient-to-br from-indigo-950 via-purple-950 to-slate-950 text-white">
        <main className="container mx-auto px-6 py-12">
          <section className="text-center mb-12">
            <h1 className="text-5xl font-extrabold mb-4 bg-gradient-to-r from-red-400 to-pink-500 bg-clip-text text-transparent">Security & Compliance</h1>
            <p className="text-white/80 max-w-3xl mx-auto">Bank-grade security with automated threat detection, compliance monitoring, and zero-trust architecture.</p>
          </section>

          <section className="mx-auto max-w-5xl grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-6 border border-white/20">
              <h2 className="text-xl font-semibold text-red-300 mb-3">Capabilities</h2>
              <ul className="text-white/80 space-y-2 text-sm">
                <li>• Automated security scanning</li>
                <li>• Vulnerability assessment</li>
                <li>• Compliance monitoring</li>
                <li>• Threat detection & response</li>
                <li>• Zero-trust architecture</li>
              </ul>
            </div>
            <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-6 border border-white/20">
              <h2 className="text-xl font-semibold text-red-300 mb-3">Resources</h2>
              <ul className="text-white/80 space-y-2 text-sm">
                <li>
                  <a className="text-red-300 hover:text-red-200" href="https://github.com/Zion-Holdings/zion.app/blob/main/SECURITY.md" target="_blank" rel="noreferrer">Security Guide on GitHub →</a>
                </li>
                <li>
                  <Link className="text-cyan-300 hover:text-cyan-200" href="/privacy">Privacy Policy →</Link>
                </li>
              </ul>
            </div>
          </section>

          <div className="text-center mt-10">
            <Link href="/" className="px-6 py-3 bg-white/10 hover:bg-white/20 border border-white/20 rounded-lg transition-all">Back to Home</Link>
          </div>
        </main>
      </div>
    </>
  );
}

