import React from 'react';
import Head from 'next/head';
import UltraAdvancedFuturisticBackground from '../components/ui/UltraAdvancedFuturisticBackground';
import Button from '../components/ui/Button';
import { Rocket, Network, Boxes, CheckCircle } from 'lucide-react';

export default function EmergingTechPage() {
  const features = [
    'Blockchain, tokenization, and smart contract audits',
    'IoT and edge orchestration with zero-trust patterns',
    '5G private networks and campus connectivity',
    'Metaverse and spatial computing experimentation',
  ];

  const solutions = [
    { name: 'Blockchain Infrastructure', href: '/blockchain-infrastructure-platform' },
    { name: 'Edge Computing Orchestration', href: '/edge-computing-orchestration' },
    { name: '5G Private Networks', href: '/5g-private-network-solutions' },
    { name: 'Metaverse AI Platform', href: '/metaverse-ai-development-platform' },
  ];

  return (
    <UltraAdvancedFuturisticBackground>
      <Head>
        <title>Emerging Tech | Zion Tech Group</title>
        <meta name="description" content="Blockchain, IoT/edge, 5G, and metaverse initiatives with secure, scalable architectures." />
        <link rel="canonical" href="https://ziontechgroup.com/emerging-tech" />
      </Head>
      <div className="min-h-screen pt-24 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto space-y-12">
          <header className="text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-r from-cyan-500 to-purple-600 mb-4">
              <Rocket className="w-8 h-8 text-white" />
            </div>
            <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent mb-4">Emerging Technology</h1>
            <p className="text-gray-300 text-lg max-w-3xl mx-auto">Accelerate innovation responsibly across blockchain, IoT/edge, 5G, and spatial computing.</p>
            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button href="/contact" className="px-8 py-4">Start a Pilot</Button>
              <Button href="/market-pricing" variant="outline" className="px-8 py-4">See Market Pricing</Button>
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