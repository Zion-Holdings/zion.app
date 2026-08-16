import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: `AI Fleet Management & Route Optimizer | Zion Tech Group`,
  description: `AI-powered fleet management with real-time route optimization, fuel savings, driver safety scoring, and predictive maintenance. Reduce fleet costs by 20%.`,
  keywords: 'Real-time GPS tracking and geofencing, AI route optimization with traffic prediction, Fuel consumption analysis and savings, Driver safety scoring and coaching, Predictive maintenance scheduling, Integration with Samsara, Geotab, Verizon Connect, Compliance (ELD, HOS, DVIR), Carbon emissions tracking and reporting, ai, logistics, Zion Tech Group',
  alternates: {
    canonical: `https://ziontechgroup.com/services/micro-saas-ai-fleet-optimizer/`,
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
        
        <h1 className="text-4xl font-bold mb-6 text-white">AI Fleet Management &amp; Route Optimizer</h1>
        <p className="text-lg text-slate-300 mb-8">AI-powered fleet management with real-time route optimization, fuel savings, driver safety scoring, and predictive maintenance. Reduce fleet costs by 20%.</p>
        
        <div class="bg-slate-900 rounded-xl p-6 mb-8">
          <div class="flex flex-wrap gap-2 mb-4">
            <span class="text-xs px-3 py-1 bg-purple-900/30 rounded-full text-purple-300">ai</span>
            <span class="text-xs px-3 py-1 bg-blue-900/30 rounded-full text-blue-300">logistics</span>
          </div>
          <h2 class="text-2xl font-semibold mb-4 text-white">Key Features</h2>
          <ul class="list-disc list-inside space-y-2">
        <li class="text-slate-300">Real-time GPS tracking and geofencing</li>
        <li class="text-slate-300">AI route optimization with traffic prediction</li>
        <li class="text-slate-300">Fuel consumption analysis and savings</li>
        <li class="text-slate-300">Driver safety scoring and coaching</li>
        <li class="text-slate-300">Predictive maintenance scheduling</li>
        <li class="text-slate-300">Integration with Samsara, Geotab, Verizon Connect</li>
        <li class="text-slate-300">Compliance (ELD, HOS, DVIR)</li>
        <li class="text-slate-300">Carbon emissions tracking and reporting</li>
      </ul>
        </div>
        
        <div class="bg-slate-900 rounded-xl p-6 mb-8">
          <h2 class="text-2xl font-semibold mb-4 text-white">Benefits</h2>
          <ul class="list-disc list-inside space-y-2">
        <li class="text-slate-300">Reduce fuel costs by 20%</li>
        <li class="text-slate-300">Improve on-time delivery by 30%</li>
        <li class="text-slate-300">Lower accident rates with driver coaching</li>
        <li class="text-slate-300">Extend vehicle life with predictive maintenance</li>
      </ul>
        </div>
        
        
        <div class="border border-purple-500/30 rounded-xl p-6 mb-8">
          <h2 class="text-2xl font-semibold text-white mb-4">Pricing</h2>
          <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div class="bg-slate-800 rounded-lg p-4 text-center">
              <h3 class="font-semibold text-white mb-2">Basic</h3>
              <p class="text-2xl font-bold text-purple-400 mb-2">$12/vehicle/mo</p>
              <p class="text-sm text-slate-400">Getting started plan</p>
            </div>
            <div class="bg-slate-800 rounded-lg p-4 text-center border-2 border-purple-500">
              <h3 class="font-semibold text-white mb-2">Pro</h3>
              <p class="text-2xl font-bold text-purple-400 mb-2">$24/vehicle/mo</p>
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
