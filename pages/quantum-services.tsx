import React from 'react';
import Head from 'next/head';
import Layout from '../components/layout/Layout';

import { Atom, CheckCircle, Shield, Sparkles } from 'lucide-react';

export default function QuantumServicesPage() {
  const features = [
    'Quantum-inspired optimization & annealing strategies',
    'Hybrid quantum-classical pipelines (QAOA, VQE) where applicable',
    'Quantum-safe cryptography assessments and roadmaps',
    'R&D ideation for quantum-ready workloads',
  ];

  const solutions = [
    { name: 'Quantum Internet Security', href: '/quantum-internet-security-platform' },
    { name: 'Quantum AI Cognitive', href: '/quantum-ai-cognitive' },
    { name: 'Quantum Cloud Infrastructure', href: '/quantum-cloud-infrastructure' },
  ];

  return (
    <Layout>
      <Head>
        <title>Quantum Services | Zion Tech Group</title>
        <meta name="description" content="Quantum computing strategy, hybrid pipelines, and quantum-safe security initiatives." />
        <link rel="canonical" href="https://ziontechgroup.com/quantum-services" />
      </Head>
      <div className="min-h-screen pt-24 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto space-y-12">
          <header className="text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-r from-cyan-500 to-purple-600 mb-4">
              <Atom className="w-8 h-8 text-white" />
            </div>
            <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent mb-4">Quantum Services</h1>
            <p className="text-gray-300 text-lg max-w-3xl mx-auto">Pragmatic, vendor-neutral guidance on quantum opportunities and post-quantum security.</p>
            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
              <a href="/contact" className="px-8 py-4">Talk to Experts</a>
              <a href="/market-pricing" className="px-8 py-4">See Market Pricing</a>
            </div>
          </header>

          <section>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 text-center">Focus Areas</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {features.map((f) => (
                <div key={f} className="flex items-start gap-3 p-4 rounded-xl bg-black/40 border border-gray-700/60">
                  <CheckCircle className="w-5 h-5 text-emerald-400 mt-0.5" />
                  <span className="text-gray-200">{f}</span>
                </div>
              ))}
            </div>
          </section>

          <section>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 text-center">Highlighted Solutions</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {solutions.map((s) => (
                <a key={s.name} href={s.href} className="p-6 rounded-2xl bg-black/40 border border-gray-700/60 hover:border-cyan-500/40 transition-colors">
                  <div className="flex items-center gap-3 text-cyan-300 mb-2 w-5 h-5 font-semibold"><Sparkles /><span >{s.name}</span></div>
                  <p className="text-gray-300 text-sm">Learn more</p>
                </a>
              ))}
            </div>
          </section>

          <section className="text-center">
            <div className="inline-flex items-center justify-center gap-3 text-gray-300">
              <Shield className="w-5 h-5 text-purple-400" />
              <span>Post-quantum readiness assessments and migration planning</span>
            </div>
          </section>
        </div>
      </div>
    </Layout>
  );
}