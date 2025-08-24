import React from 'react';
import Head from 'next/head';
import Button from '../components/ui/Button';

export default function QuantumCloudInfrastructurePlatform() {
  return (
    <>
      <Head>
        <title>Quantum Cloud Infrastructure Platform | Zion Tech Group</title>
        <meta name="description" content="Quantum-enhanced cloud infrastructure with PQC-ready encryption and zero-trust." />
        <link rel="canonical" href="https://ziontechgroup.com/quantum-cloud-infrastructure-platform" />
      </Head>
      <div className="min-h-screen pt-24 pb-20 px-4 sm:px-6 lg:px-8 bg-black text-white">
        <div className="max-w-6xl mx-auto space-y-10">
          <header className="text-center">
            <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent mb-4">Quantum Cloud Infrastructure</h1>
            <p className="text-gray-300 text-lg">Post-quantum security, zero-trust, and high-performance compute for sensitive workloads.</p>
          </header>
          <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              'PQC-ready encryption and key management',
              'Zero-trust network segmentation',
              'Confidential compute and runtime attestation',
              'Observability and compliance built-in',
              'Managed deployments and migration playbooks',
              'From $3,500/mo'
            ].map((f) => (
              <div key={f} className="p-6 rounded-2xl bg-black/40 border border-gray-700/60 text-gray-200">{f}</div>
            ))}
          </section>
          <div className="text-center">
            <Button href="/contact" className="px-8 py-4 bg-gradient-to-r from-cyan-600 to-blue-700 text-white">Request a Quote</Button>
          </div>
        </div>
      </div>
    </>
  );
}