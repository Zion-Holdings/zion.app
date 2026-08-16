import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: `Smart Grid Energy Management | Zion Tech Group`,
  description: `AI-powered smart grid management platform. Real-time energy monitoring, demand forecasting, renewable integration, and outage prediction.`,
  keywords: 'Real-time grid monitoring, Demand forecasting, Renewable energy integration, Outage prediction and prevention, Energy storage optimization, Carbon footprint tracking, Integration with IoT sensors, Regulatory reporting, energy-tech, Energy, Zion Tech Group',
  alternates: {
    canonical: `https://ziontechgroup.com/services/energy-tech-smart-grid-management/`,
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
        
        <h1 className="text-4xl font-bold mb-6 text-white">Smart Grid Energy Management</h1>
        <p className="text-lg text-slate-300 mb-8">AI-powered smart grid management platform. Real-time energy monitoring, demand forecasting, renewable integration, and outage prediction.</p>
        
        <div class="bg-slate-900 rounded-xl p-6 mb-8">
          <div class="flex flex-wrap gap-2 mb-4">
            <span class="text-xs px-3 py-1 bg-purple-900/30 rounded-full text-purple-300">energy-tech</span>
            <span class="text-xs px-3 py-1 bg-blue-900/30 rounded-full text-blue-300">Energy</span>
          </div>
          <h2 class="text-2xl font-semibold mb-4 text-white">Key Features</h2>
          <ul class="list-disc list-inside space-y-2">
        <li class="text-slate-300">Real-time grid monitoring</li>
        <li class="text-slate-300">Demand forecasting</li>
        <li class="text-slate-300">Renewable energy integration</li>
        <li class="text-slate-300">Outage prediction and prevention</li>
        <li class="text-slate-300">Energy storage optimization</li>
        <li class="text-slate-300">Carbon footprint tracking</li>
        <li class="text-slate-300">Integration with IoT sensors</li>
        <li class="text-slate-300">Regulatory reporting</li>
      </ul>
        </div>
        
        <div class="bg-slate-900 rounded-xl p-6 mb-8">
          <h2 class="text-2xl font-semibold mb-4 text-white">Benefits</h2>
          <ul class="list-disc list-inside space-y-2">
        <li class="text-slate-300">Reduce energy waste 30%</li>
        <li class="text-slate-300">Optimize renewable usage</li>
        <li class="text-slate-300">Prevent outages</li>
        <li class="text-slate-300">Meet sustainability goals</li>
      </ul>
        </div>
        
        
        <div class="border border-purple-500/30 rounded-xl p-6 mb-8">
          <h2 class="text-2xl font-semibold text-white mb-4">Pricing</h2>
          <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div class="bg-slate-800 rounded-lg p-4 text-center">
              <h3 class="font-semibold text-white mb-2">Basic</h3>
              <p class="text-2xl font-bold text-purple-400 mb-2">$1,499/mo</p>
              <p class="text-sm text-slate-400">Getting started plan</p>
            </div>
            <div class="bg-slate-800 rounded-lg p-4 text-center border-2 border-purple-500">
              <h3 class="font-semibold text-white mb-2">Pro</h3>
              <p class="text-2xl font-bold text-purple-400 mb-2">$4,499/mo</p>
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
                <a href="/services/ai-energy-optimization-platform/" class="text-purple-300 hover:text-purple-200 font-medium">AI Energy Optimization Platform</a>
                <p class="text-slate-400 text-sm mt-1">Optimize energy consumption across buildings, factories, and data centers using AI. Predict demand, optimize HVAC, manag...</p>
              </div>
            
            
              <div>
                <a href="/services/ai-oil-gas-predictive-analytics/" class="text-purple-300 hover:text-purple-200 font-medium">AI Oil & Gas Predictive Analytics</a>
                <p class="text-slate-400 text-sm mt-1">Predictive analytics for oil and gas operations. Reservoir modeling, production optimization, and equipment failure pred...</p>
              </div>
            
            
              <div>
                <a href="/services/energy-carbon-capture-optimization/" class="text-purple-300 hover:text-purple-200 font-medium">AI Carbon Capture Optimization</a>
                <p class="text-slate-400 text-sm mt-1">Optimize carbon capture and storage operations with AI. Process optimization, monitoring, and reporting for industrial c...</p>
              </div>
            
            
              <div>
                <a href="/services/energy-grid-optimization/" class="text-purple-300 hover:text-purple-200 font-medium">AI Energy Grid Optimization</a>
                <p class="text-slate-400 text-sm mt-1">Smart grid optimization with demand forecasting and renewable integration....</p>
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
