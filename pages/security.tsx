import React from 'react';
import Head from 'next/head';
import Link from 'next/link';

export default function SecurityPage() {
  return (
    <>
      <Head>
        <title>Security & Compliance — Zion Tech Group</title>
        <meta name="description" content="Enterprise-grade security, automated scanning, and zero-trust architecture at Zion Tech Group." />
      </Head>
      <div className="min-h-screen bg-gradient-to-br from-indigo-950 via-purple-950 to-slate-950 text-white">
        <main className="container mx-auto px-6 py-12">
          <h1 className="text-4xl font-extrabold mb-6 bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">Security & Compliance</h1>
          <p className="text-white/80 max-w-3xl">We employ automated scanning, vulnerability detection, and policy enforcement across the stack. Learn more in the detailed guide.</p>
          <div className="mt-6">
            <Link href="/SECURITY.md" className="text-cyan-400 hover:text-cyan-300 font-semibold">Open SECURITY.md →</Link>
          </div>
          <div className="mt-10">
            <Link href="/" className="text-white/80 hover:text-white">← Back to Home</Link>
          </div>
        </main>
      </div>
    </>
  );
}

