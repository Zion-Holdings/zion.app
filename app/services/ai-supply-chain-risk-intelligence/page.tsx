import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: `AI Supply Chain Risk Intelligence Platform | Zion Tech Group`,
  description: `Real-time supply chain risk monitoring using AI to analyze supplier financial health, geopolitical events, weather disruptions, and logistics bottlenecks. Predicts disruptions 30-90 days in advance.`,
  keywords: 'Multi-tier supplier risk scoring and monitoring, Geopolitical and regulatory change impact analysis, Weather and natural disaster disruption forecasting, Logistics bottleneck prediction with alternative routing, Supplier financial health monitoring and early warning, Inventory optimization with demand sensing, ESG compliance tracking across supply chain, Executive risk dashboard with scenario modeling, ai, logistics, Zion Tech Group',
  alternates: {
    canonical: `https://ziontechgroup.com/services/ai-supply-chain-risk-intelligence/`,
  },
};

export default function ServicePage() {
  return (
    <main className="min-h-screen bg-slate-950 text-white py-12 px-4">
      <div className="max-w-4xl mx-auto">
        
        <div class="mb-6">
          <a href="/services/" class="text-purple-400 hover:text-purple-300 text-sm flex items-center gap-2">
            ← Back to All Services
          </a>
        </div>
        
        <h1 className="text-4xl font-bold mb-6 text-white">AI Supply Chain Risk Intelligence Platform</h1>
        <p className="text-lg text-slate-300 mb-8">Real-time supply chain risk monitoring using AI to analyze supplier financial health, geopolitical events, weather disruptions, and logistics bottlenecks. Predicts disruptions 30-90 days in advance.</p>
        
        <div class="bg-slate-900 rounded-xl p-6 mb-8">
          <div class="flex flex-wrap gap-2 mb-4">
            <span class="text-xs px-3 py-1 bg-purple-900/30 rounded-full text-purple-300">ai</span>
            <span class="text-xs px-3 py-1 bg-blue-900/30 rounded-full text-blue-300">logistics</span>
          </div>
          <h2 class="text-2xl font-semibold mb-4 text-white">Key Features</h2>
          <ul class="list-disc list-inside space-y-2">
        <li class="text-slate-300">Multi-tier supplier risk scoring and monitoring</li>
        <li class="text-slate-300">Geopolitical and regulatory change impact analysis</li>
        <li class="text-slate-300">Weather and natural disaster disruption forecasting</li>
        <li class="text-slate-300">Logistics bottleneck prediction with alternative routing</li>
        <li class="text-slate-300">Supplier financial health monitoring and early warning</li>
        <li class="text-slate-300">Inventory optimization with demand sensing</li>
        <li class="text-slate-300">ESG compliance tracking across supply chain</li>
        <li class="text-slate-300">Executive risk dashboard with scenario modeling</li>
      </ul>
        </div>
        
        <div class="bg-slate-900 rounded-xl p-6 mb-8">
          <h2 class="text-2xl font-semibold mb-4 text-white">Benefits</h2>
          <ul class="list-disc list-inside space-y-2">
        <li class="text-slate-300">Predict supply chain disruptions 30-90 days ahead</li>
        <li class="text-slate-300">Reduce stockouts by 45% with demand sensing</li>
        <li class="text-slate-300">Diversify supplier base with data-driven insights</li>
        <li class="text-slate-300">Meet ESG reporting requirements across supply chain</li>
      </ul>
        </div>
        
        
        <div class="border border-purple-500/30 rounded-xl p-6 mb-8">
          <h2 class="text-2xl font-semibold text-white mb-4">Pricing</h2>
          <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div class="bg-slate-800 rounded-lg p-4 text-center">
              <h3 class="font-semibold text-white mb-2">Basic</h3>
              <p class="text-2xl font-bold text-purple-400 mb-2">$2,999/mo</p>
              <p class="text-sm text-slate-400">Getting started plan</p>
            </div>
            <div class="bg-slate-800 rounded-lg p-4 text-center border-2 border-purple-500">
              <h3 class="font-semibold text-white mb-2">Pro</h3>
              <p class="text-2xl font-bold text-purple-400 mb-2">$6,999/mo</p>
              <p class="text-sm text-slate-400">Most popular</p>
            </div>
            <div class="bg-slate-800 rounded-lg p-4 text-center">
              <h3 class="font-semibold text-white mb-2">Enterprise</h3>
              <p class="text-2xl font-bold text-purple-400 mb-2">Custom</p>
              <p class="text-sm text-slate-400">Full-featured solution</p>
            </div>
          </div>
        </div>
        
        <div class="bg-slate-900/60 border border-slate-700/50 rounded-xl p-6 mb-8">
          <h2 class="text-2xl font-semibold text-white mb-4">Related Services</h2>
          <div class="grid md:grid-cols-2 gap-4">
            
              <div>
                <a href="/services/adaptive-advisor-for-logistics-bbb5a349/" class="text-purple-300 hover:text-purple-200 font-medium">Adaptive Advisor for Logistics</a>
                <p class="text-slate-400 text-sm mt-1">The future of logistics is here with Adaptive Advisor for Logistics. Powered by cutting-edge AI, this platform delivers ...</p>
              </div>
            
            
              <div>
                <a href="/services/adaptive-data-intelligence-464bea7c/" class="text-purple-300 hover:text-purple-200 font-medium">Adaptive Data Intelligence</a>
                <p class="text-slate-400 text-sm mt-1">Unlock unprecedented growth with Adaptive Data Intelligence. This autonomous system provides supply chain with zero manu...</p>
              </div>
            
            
              <div>
                <a href="/services/adaptive-fraud-management-daa6a09a/" class="text-purple-300 hover:text-purple-200 font-medium">Adaptive Fraud Management</a>
                <p class="text-slate-400 text-sm mt-1">Unlock unprecedented growth with Adaptive Fraud Management. This autonomous system provides risk assessment with zero ma...</p>
              </div>
            
            
              <div>
                <a href="/services/adaptive-insights-logistics-aa427732/" class="text-purple-300 hover:text-purple-200 font-medium">Adaptive insights-logistics</a>
                <p class="text-slate-400 text-sm mt-1">Next-generation logistics solution: Adaptive insights-logistics. Combines maintenance scheduling with adaptive intellige...</p>
              </div>
            
          </div>
        </div>
        
        <div class="text-center">
          <Link
            href="/contact/"
            class="inline-block bg-purple-600 hover:bg-purple-700 text-white font-bold py-3 px-8 rounded-full text-lg transition-colors"
          >
            Book a Consultation
          </Link>
        </div>
      </div>
    </main>
  );
}
