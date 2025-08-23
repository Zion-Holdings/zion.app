import React from 'react';
import Head from 'next/head';
import UltraAdvancedFuturisticBackground from '../components/ui/UltraAdvancedFuturisticBackground';
import { Button } from '../components/ui/Button';
import { Server, CheckCircle, Database, Cloud } from 'lucide-react';

export default function EnterpriseITPage() {
  const features = [
    'Cloud migration and landing zones with cost governance',
    'DevOps automation, CI/CD, and platform engineering',
    'Data platforms, lineage, and quality monitoring',
    'Observability, SLOs, and incident automation',
  ];

  const solutions = [
    { name: 'Cloud Landing Zone', href: '/cloud-landing-zone' },
    { name: 'Cloud Cost Optimizer', href: '/cloud-cost-optimizer' },
    { name: 'Data Pipeline Observability', href: '/data-pipeline-observability' },
    { name: 'Uptime & SLO Monitor', href: '/uptime-slo-monitor' },
  ];

  return (
    <UltraAdvancedFuturisticBackground>
      <Head>
        <title>Enterprise IT | Zion Tech Group</title>
        <meta name="description" content="Cloud, DevOps, data platforms, and SRE with cost, performance, and reliability in focus." />
        <link rel="canonical" href="https://ziontechgroup.com/enterprise-it" />
      </Head>
      <div className="min-h-screen pt-24 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto space-y-12">
          <header className="text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-r from-cyan-500 to-purple-600 mb-4">
              <Server className="w-8 h-8 text-white" />
            </div>
            <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent mb-4">Enterprise IT</h1>
            <p className="text-gray-300 text-lg max-w-3xl mx-auto">Ship secure, reliable platforms with measurable business outcomes.</p>
            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link href="/contact" className="px-8 py-4">Get a Roadmap</Button>
              <Link href="/market-pricing" variant="outline" className="px-8 py-4">See Market Pricing</Button>
            </div>
          </header>

          <section>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 text-center">Core Capabilities</h2>
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
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              {solutions.map((s) => (
                <a key={s.name} href={s.href} className="p-6 rounded-2xl bg-black/40 border border-gray-700/60 hover:border-cyan-500/40 transition-colors">
                  <div className="text-gray-200 font-semibold mb-2">{s.name}</div>
                  <p className="text-gray-300 text-sm">Learn more</p>
                </a>
              ))}
            </div>
          </section>
        </div>
      </div>
    </UltraAdvancedFuturisticBackground>
  );
}