import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: `End-to-End Supply Chain Visibility | Zion Tech Group`,
  description: `Real-time supply chain tracking and optimization. IoT integration, predictive analytics, route optimization, and supplier risk management.`,
  keywords: 'Real-time shipment tracking, Predictive ETA, Route optimization, Supplier risk scoring, Inventory optimization, Integration with ERP/WMS, Exception management, Carbon tracking, logistics-tech, Logistics, Zion Tech Group',
  alternates: {
    canonical: `https://ziontechgroup.com/services/logistics-tech-supply-chain-visibility/`,
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
        
        <h1 className="text-4xl font-bold mb-6 text-white">End-to-End Supply Chain Visibility</h1>
        <p className="text-lg text-slate-300 mb-8">Real-time supply chain tracking and optimization. IoT integration, predictive analytics, route optimization, and supplier risk management.</p>
        
        <div class="bg-slate-900 rounded-xl p-6 mb-8">
          <div class="flex flex-wrap gap-2 mb-4">
            <span class="text-xs px-3 py-1 bg-purple-900/30 rounded-full text-purple-300">logistics-tech</span>
            <span class="text-xs px-3 py-1 bg-blue-900/30 rounded-full text-blue-300">Logistics</span>
          </div>
          <h2 class="text-2xl font-semibold mb-4 text-white">Key Features</h2>
          <ul class="list-disc list-inside space-y-2">
        <li class="text-slate-300">Real-time shipment tracking</li>
        <li class="text-slate-300">Predictive ETA</li>
        <li class="text-slate-300">Route optimization</li>
        <li class="text-slate-300">Supplier risk scoring</li>
        <li class="text-slate-300">Inventory optimization</li>
        <li class="text-slate-300">Integration with ERP/WMS</li>
        <li class="text-slate-300">Exception management</li>
        <li class="text-slate-300">Carbon tracking</li>
      </ul>
        </div>
        
        <div class="bg-slate-900 rounded-xl p-6 mb-8">
          <h2 class="text-2xl font-semibold mb-4 text-white">Benefits</h2>
          <ul class="list-disc list-inside space-y-2">
        <li class="text-slate-300">Reduce logistics costs 25%</li>
        <li class="text-slate-300">Improve delivery times</li>
        <li class="text-slate-300">Mitigate supply risk</li>
        <li class="text-slate-300">End-to-end visibility</li>
      </ul>
        </div>
        
        
        <div class="border border-purple-500/30 rounded-xl p-6 mb-8">
          <h2 class="text-2xl font-semibold text-white mb-4">Pricing</h2>
          <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div class="bg-slate-800 rounded-lg p-4 text-center">
              <h3 class="font-semibold text-white mb-2">Basic</h3>
              <p class="text-2xl font-bold text-purple-400 mb-2">$599/mo</p>
              <p class="text-sm text-slate-400">Getting started plan</p>
            </div>
            <div class="bg-slate-800 rounded-lg p-4 text-center border-2 border-purple-500">
              <h3 class="font-semibold text-white mb-2">Pro</h3>
              <p class="text-2xl font-bold text-purple-400 mb-2">$1,799/mo</p>
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
                <a href="/services/ai-warehouse-picking-optimization/" class="text-purple-300 hover:text-purple-200 font-medium">AI Warehouse Picking Optimization</a>
                <p class="text-slate-400 text-sm mt-1">Optimize warehouse picking routes and batch assignments with AI. Reduce picker travel time, increase throughput, and imp...</p>
              </div>
            
            
              <div>
                <a href="/services/logistics-fleet-management-ai/" class="text-purple-300 hover:text-purple-200 font-medium">AI Fleet Management Platform</a>
                <p class="text-slate-400 text-sm mt-1">AI-powered fleet management with route optimization, fuel management, driver safety monitoring, and predictive maintenan...</p>
              </div>
            
            
              <div>
                <a href="/services/logistics-route-optimizer/" class="text-purple-300 hover:text-purple-200 font-medium">Logistics Route Optimizer</a>
                <p class="text-slate-400 text-sm mt-1">AI-powered route optimization for delivery fleets. Real-time traffic, driver hours, vehicle capacity, and customer prefe...</p>
              </div>
            
            
              <div>
                <a href="/services/logistics-warehouse-robotics/" class="text-purple-300 hover:text-purple-200 font-medium">AI Warehouse Robotics Platform</a>
                <p class="text-slate-400 text-sm mt-1">Orchestrate autonomous mobile robots (AMRs) for warehouse operations. Pick-and-place, inventory counting, and goods-to-p...</p>
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
