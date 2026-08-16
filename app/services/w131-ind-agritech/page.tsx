import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: `AgriTech AI Platform | Zion Tech Group`,
  description: `Precision agriculture with AI: crop monitoring, yield prediction, pest detection, and irrigation optimization. Satellite and drone imagery analysis.`,
  keywords: 'Crop monitoring, Yield prediction, Pest detection, Irrigation optimization, Soil analysis, Weather integration, Drone imagery analysis, Farm management dashboard, agritech, agriculture, Zion Tech Group',
  alternates: {
    canonical: `https://ziontechgroup.com/services/w131-ind-agritech/`,
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
        
        <h1 className="text-4xl font-bold mb-6 text-white">AgriTech AI Platform</h1>
        <p className="text-lg text-slate-300 mb-8">Precision agriculture with AI: crop monitoring, yield prediction, pest detection, and irrigation optimization. Satellite and drone imagery analysis.</p>
        
        <div class="bg-slate-900 rounded-xl p-6 mb-8">
          <div class="flex flex-wrap gap-2 mb-4">
            <span class="text-xs px-3 py-1 bg-purple-900/30 rounded-full text-purple-300">agritech</span>
            <span class="text-xs px-3 py-1 bg-blue-900/30 rounded-full text-blue-300">agriculture</span>
          </div>
          <h2 class="text-2xl font-semibold mb-4 text-white">Key Features</h2>
          <ul class="list-disc list-inside space-y-2">
        <li class="text-slate-300">Crop monitoring</li>
        <li class="text-slate-300">Yield prediction</li>
        <li class="text-slate-300">Pest detection</li>
        <li class="text-slate-300">Irrigation optimization</li>
        <li class="text-slate-300">Soil analysis</li>
        <li class="text-slate-300">Weather integration</li>
        <li class="text-slate-300">Drone imagery analysis</li>
        <li class="text-slate-300">Farm management dashboard</li>
      </ul>
        </div>
        
        <div class="bg-slate-900 rounded-xl p-6 mb-8">
          <h2 class="text-2xl font-semibold mb-4 text-white">Benefits</h2>
          <ul class="list-disc list-inside space-y-2">
        <li class="text-slate-300">20% yield increase</li>
        <li class="text-slate-300">30% water savings</li>
        <li class="text-slate-300">Early pest detection</li>
        <li class="text-slate-300">Data-driven decisions</li>
        <li class="text-slate-300">Reduced pesticide use</li>
      </ul>
        </div>
        
        
        <div class="border border-purple-500/30 rounded-xl p-6 mb-8">
          <h2 class="text-2xl font-semibold text-white mb-4">Pricing</h2>
          <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div class="bg-slate-800 rounded-lg p-4 text-center">
              <h3 class="font-semibold text-white mb-2">Basic</h3>
              <p class="text-2xl font-bold text-purple-400 mb-2">Custom</p>
              <p class="text-sm text-slate-400">Getting started plan</p>
            </div>
            <div class="bg-slate-800 rounded-lg p-4 text-center border-2 border-purple-500">
              <h3 class="font-semibold text-white mb-2">Pro</h3>
              <p class="text-2xl font-bold text-purple-400 mb-2">5997</p>
              <p class="text-sm text-slate-400">Most popular</p>
            </div>
            <div class="bg-slate-800 rounded-lg p-4 text-center">
              <h3 class="font-semibold text-white mb-2">Enterprise</h3>
              <p class="text-2xl font-bold text-purple-400 mb-2">14997</p>
              <p class="text-sm text-slate-400">Full-featured solution</p>
            </div>
          </div>
        </div>
        
        <div class="bg-slate-900/60 border border-slate-700/50 rounded-xl p-6 mb-8">
          <h2 class="text-2xl font-semibold text-white mb-4">Related Services</h2>
          <div class="grid md:grid-cols-2 gap-4">
            
              <div>
                <a href="/services/adaptive-analyzer-agriculture-0f8775d9/" class="text-purple-300 hover:text-purple-200 font-medium">Adaptive analyzer-agriculture</a>
                <p class="text-slate-400 text-sm mt-1">Next-generation agriculture solution: Adaptive analyzer-agriculture. Combines predictive analytics with adaptive intelli...</p>
              </div>
            
            
              <div>
                <a href="/services/adaptive-analyzer-agriculture-1-26dffc8d/" class="text-purple-300 hover:text-purple-200 font-medium">Adaptive analyzer-agriculture #1</a>
                <p class="text-slate-400 text-sm mt-1">Unlock unprecedented growth with Adaptive analyzer-agriculture #1. This autonomous system provides decision support with...</p>
              </div>
            
            
              <div>
                <a href="/services/adaptive-coordinator-agriculture-ff3d6aa8/" class="text-purple-300 hover:text-purple-200 font-medium">Adaptive coordinator-agriculture</a>
                <p class="text-slate-400 text-sm mt-1">Next-generation agriculture solution: Adaptive coordinator-agriculture. Combines predictive analytics with adaptive inte...</p>
              </div>
            
            
              <div>
                <a href="/services/adaptive-insights-agriculture-2ed2ff43/" class="text-purple-300 hover:text-purple-200 font-medium">Adaptive insights-agriculture</a>
                <p class="text-slate-400 text-sm mt-1">Next-generation agriculture solution: Adaptive insights-agriculture. Combines language processing with adaptive intellig...</p>
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
