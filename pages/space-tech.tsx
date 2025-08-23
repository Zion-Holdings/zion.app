import React from 'react';
import Head from 'next/head';
import UltraAdvancedFuturisticBackground from '../components/ui/UltraAdvancedFuturisticBackground';
import Button from '../components/ui/Button';
import { Satellite, CheckCircle, Globe2 } from 'lucide-react';

export default function SpaceTechPage() {
  const features = [
    'Mission control dashboards and telemetry pipelines',
    'Satellite operations playbooks and anomaly response',
    'Ground station integrations and data delivery SLAs',
    'Secure communications and zero-trust segmentation',
  ];

  return (
    <UltraAdvancedFuturisticBackground>
      <Head>
        <title>Space Technology | Zion Tech Group</title>
        <meta name="description" content="Space mission control, satellite operations, and secure communications consulting." />
        <link rel="canonical" href="https://ziontechgroup.com/space-tech" />
      </Head>
      <div className="min-h-screen pt-24 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto space-y-12">
          <header className="text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-r from-cyan-500 to-purple-600 mb-4">
              <Satellite className="w-8 h-8 text-white" />
            </div>
            <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent mb-4">Space Technology</h1>
            <p className="text-gray-300 text-lg max-w-3xl mx-auto">Secure, reliable operations for space and earth observation missions.</p>
            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button href="/contact" className="px-8 py-4">Discuss a Mission</Button>
              <Button href="/market-pricing" variant="outline" className="px-8 py-4">See Market Pricing</Button>
            </div>
          </header>

          <section>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 text-center">Capabilities</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {features.map((f) => (
                <div key={f} className="flex items-start gap-3 p-4 rounded-xl bg-black/40 border border-gray-700/60">
                  <CheckCircle className="w-5 h-5 text-emerald-400 mt-0.5" />
                  <span className="text-gray-200">{f}</span>
                </div>
              ))}
            </div>
          </section>

          <section className="text-center">
            <a href="/space-technology" className="inline-flex items-center gap-2 text-cyan-300 hover:text-cyan-200">
              <Globe2 className="w-4 h-4" />
              <span>Explore detailed Space Technology offerings</span>
            </a>
          </section>
        </div>
      </div>
    </UltraAdvancedFuturisticBackground>
  );
}