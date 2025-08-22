import React from 'react';
import UltraFuturisticBackground from '../components/ui/UltraFuturisticBackground';

export default function APIDocsPage() {
  return (
    <UltraFuturisticBackground variant="quantum" intensity="high">
      <div className="container mx-auto px-4 pt-28 pb-20 text-white">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">API Documentation</h1>
          <p className="text-gray-300 mt-4">Explore endpoints, auth, webhooks, and SDKs. Contact us for enterprise features and SLAs.</p>
          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
            <a href="/docs" className="p-6 rounded-2xl bg-black/40 border border-gray-700/60 hover:border-cyan-500/50">Getting Started Guide</a>
            <a href="/market-pricing" className="p-6 rounded-2xl bg-black/40 border border-gray-700/60 hover:border-cyan-500/50">Pricing & References</a>
            <a href="https://github.com/Zion-Holdings" target="_blank" rel="noreferrer" className="p-6 rounded-2xl bg-black/40 border border-gray-700/60 hover:border-cyan-500/50">GitHub Organization</a>
            <a href="/support" className="p-6 rounded-2xl bg-black/40 border border-gray-700/60 hover:border-cyan-500/50">Support & SLAs</a>
          </div>
        </div>
      </div>
    </UltraFuturisticBackground>
  );
}