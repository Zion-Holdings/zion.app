import React from 'react';
import Head from 'next/head';
import UltraAdvancedFuturisticBackground from '../components/ui/UltraAdvancedFuturisticBackground';
import { innovativeAIServices } from '../data/innovative-ai-services';
import { nextGenerationAIServices } from '../data/next-generation-ai-services';
import { marketValidatedServices } from '../data/market-validated-services';
import { curatedMarketServices } from '../data/curated-market-services';
import { realMarketServices } from '../data/real-market-services';
import { new2025Services } from '../data/new-2025-services';
import { newRealInnovations } from '../data/new-real-innovations';

export default function AIServicesPage() {
  const aiDatasets = [
    ...innovativeAIServices,
    ...nextGenerationAIServices,
    ...marketValidatedServices,
    ...curatedMarketServices,
    ...realMarketServices.filter((s: any) => (s.category || '').includes('AI')),
    ...new2025Services.filter((s: any) => (s.category || '').includes('AI')),
    ...newRealInnovations.filter((s: any) => (s.category || '').includes('AI'))
  ];

  return (
    <UltraAdvancedFuturisticBackground 
      intensity="high" 
      colorScheme="quantum-fusion"
      particleCount={300}
      animationSpeed={1.5}
      enableHolographic={true}
      enableQuantumEffects={true}
    >
      <Head>
        <title>AI Services | Zion Tech Group</title>
        <meta name="description" content="Explore production-ready AI services: agents, guardrails, RAG, observability, governance, and more." />
        <link rel="canonical" href="https://ziontechgroup.com/ai-services" />
      </Head>

      <div className="min-h-screen pt-24 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <header className="text-center mb-10">
            <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent mb-4">
              AI Services
            </h1>
            <p className="text-gray-300 text-lg">Agents, evaluations, data pipelines, privacy, RAG, and platform governance.</p>
          </header>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {aiDatasets.map((svc: any) => (
              <a key={svc.id + svc.name} href={svc.link || '/services'} className="block p-6 rounded-2xl bg-black/40 border border-gray-700/60 hover:border-cyan-500/40 transition-colors">
                <div className="flex items-start justify-between mb-3">
                  <div className="text-3xl">{svc.icon || '🧠'}</div>
                  {svc.popular ? <div className="text-xs text-yellow-400">Popular</div> : null}
                </div>
                <div className="text-xl font-semibold text-white mb-1">{svc.name}</div>
                <div className="text-sm text-gray-400 mb-3">{svc.tagline || svc.description}</div>
                <div className="text-2xl font-bold text-cyan-400">{(svc as any).price}<span className="text-base text-gray-400">{(svc as any).period || ''}</span></div>
                <div className="mt-3 text-sm text-gray-300">
                  <div className="text-gray-400 mb-1">Key Features</div>
                  <ul className="space-y-1">
                    {(svc.features || []).slice(0, 3).map((f: string) => (
                      <li key={f} className="line-clamp-1">{f}</li>
                    ))}
                  </ul>
                </div>
              </a>
            ))}
          </div>

          <div className="text-center mt-10">
            <a href="/services" className="inline-block px-8 py-4 rounded-xl bg-gradient-to-r from-cyan-600 to-blue-700 text-white hover:from-cyan-500 hover:to-blue-600">
              Browse All Services
            </a>
          </div>
        </div>
      </div>
    </UltraAdvancedFuturisticBackground>
  );
}
