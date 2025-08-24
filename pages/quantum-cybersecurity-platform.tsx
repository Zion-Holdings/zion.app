import React from 'react';
import Head from 'next/head';
import Button from '../components/ui/Button';

export default function QuantumCybersecurityPlatform() {
  return (
    <>
      <Head>
        <title>Quantum Cybersecurity Platform | Zion Tech Group</title>
        <meta name="description" content="Next-gen quantum-resistant cybersecurity solutions for enterprise workloads." />
        <link rel="canonical" href="https://ziontechgroup.com/quantum-cybersecurity-platform" />
      </Head>
      <div className="min-h-screen pt-24 pb-20 px-4 sm:px-6 lg:px-8 bg-black text-white">
        <div className="max-w-6xl mx-auto space-y-10">
          <header className="text-center">
            <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent mb-4">Quantum Cybersecurity</h1>
            <p className="text-gray-300 text-lg">Quantum-safe encryption, threat detection, and secure communications.</p>
          </header>
          <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              'Post-quantum cryptography integration',
              'Quantum key distribution options',
              'Advanced anomaly and threat detection',
              'Security analytics and incident workflows',
              'Compliance and reporting',
              'From $4,999/mo'
            ].map((f) => (
              <div key={f} className="p-6 rounded-2xl bg-black/40 border border-gray-700/60 text-gray-200">{f}</div>
            ))}
          </section>
          <div className="text-center">
            <Button href="/contact" className="px-8 py-4 bg-gradient-to-r from-cyan-600 to-blue-700 text-white">Contact Security Team</Button>
          </div>
        </div>
      </div>
    </>
  );
}