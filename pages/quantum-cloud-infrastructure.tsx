import React from 'react';
import Head from 'next/head';
import UltraAdvancedFuturisticBackground from '../components/ui/UltraAdvancedFuturisticBackground';
import Button from '../components/ui/Button';

export default function QuantumCloudInfrastructurePage() {
  const contactInfo = {
    mobile: '+1 302 464 0950',
    email: 'kleber@ziontechgroup.com',
    address: '364 E Main St STE 1008 Middletown DE 19709',
    website: 'https://ziontechgroup.com'
  };

  return (
    <UltraAdvancedFuturisticBackground>
      <Head>
        <title>Quantum & Space Technology Services | Zion Tech Group</title>
        <meta name="description" content="Exploratory quantum computing strategy, simulation, and space-tech data platforms with practical roadmaps and proof-of-value pilots." />
        <link rel="canonical" href="https://ziontechgroup.com/quantum-cloud-infrastructure" />
      </Head>

      <div className="min-h-screen pt-24 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto space-y-10">
          <header className="text-center space-y-4">
            <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              Quantum & Space Technology
            </h1>
            <p className="text-slate-300 text-lg max-w-3xl mx-auto">
              Practical pilots for quantum-inspired optimization, simulation frameworks, and
              space-tech analytics. Clear milestones and outcomes.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Button href="/services" variant="primary">Browse All Services</Button>
              <Button href="/market-pricing" variant="secondary">See Market Pricing</Button>
              <Button href="/contact" variant="secondary">Get a Roadmap</Button>
            </div>
            <div className="text-sm text-slate-400">
              Contact: <a className="underline text-cyan-300" href="tel:+13024640950">{contactInfo.mobile}</a> •
              <a className="underline text-purple-300 ml-1" href="mailto:kleber@ziontechgroup.com">{contactInfo.email}</a>
            </div>
          </header>

          <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-black/30 rounded-2xl border border-fuchsia-500/30 p-6">
              <h2 className="text-2xl font-semibold mb-2">Quantum Strategy</h2>
              <p className="text-slate-300 mb-3">Identify candidate problems and value paths with readiness assessments.</p>
              <ul className="list-disc list-inside text-slate-300 space-y-1 text-sm">
                <li>Use-case discovery</li>
                <li>PoV design and metrics</li>
                <li>Exec-ready roadmaps</li>
              </ul>
            </div>
            <div className="bg-black/30 rounded-2xl border border-purple-500/30 p-6">
              <h2 className="text-2xl font-semibold mb-2">Simulation & Tooling</h2>
              <p className="text-slate-300 mb-3">Explore simulators and quantum-inspired approaches before hardware.</p>
              <ul className="list-disc list-inside text-slate-300 space-y-1 text-sm">
                <li>QAOA/annealing demos</li>
                <li>Python/TypeScript SDKs</li>
                <li>Observability & cost tracking</li>
              </ul>
            </div>
            <div className="bg-black/30 rounded-2xl border border-cyan-500/30 p-6">
              <h2 className="text-2xl font-semibold mb-2">Space-Tech Analytics</h2>
              <p className="text-slate-300 mb-3">Ingest satellite APIs, telemetry and imagery into dashboards and alerts.</p>
              <ul className="list-disc list-inside text-slate-300 space-y-1 text-sm">
                <li>Data pipelines and storage</li>
                <li>ML scoring and anomalies</li>
                <li>API products and access</li>
              </ul>
            </div>
          </section>
        </div>
      </div>
    </UltraAdvancedFuturisticBackground>
  );
}
