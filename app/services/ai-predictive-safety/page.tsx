import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: `AI Predictive Safety & Workplace Risk Prevention | Zion Tech Group`,
  description: `AI-powered workplace safety that predicts accidents before they happen. Computer vision for PPE detection, behavior analysis, and risk scoring. Reduce incidents by 60%.`,
  keywords: 'Real-time PPE detection (hard hats, vests, gloves), Unsafe behavior identification, Near-miss detection and reporting, Risk scoring by area and time, Integration with CCTV and safety systems, Automated safety alerts and notifications, Safety compliance dashboards, Historical incident pattern analysis, ai, manufacturing, Zion Tech Group',
  alternates: {
    canonical: `https://ziontechgroup.com/services/ai-predictive-safety/`,
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
        
        <h1 className="text-4xl font-bold mb-6 text-white">AI Predictive Safety &amp; Workplace Risk Prevention</h1>
        <p className="text-lg text-slate-300 mb-8">AI-powered workplace safety that predicts accidents before they happen. Computer vision for PPE detection, behavior analysis, and risk scoring. Reduce incidents by 60%.</p>
        
        <div class="bg-slate-900 rounded-xl p-6 mb-8">
          <div class="flex flex-wrap gap-2 mb-4">
            <span class="text-xs px-3 py-1 bg-purple-900/30 rounded-full text-purple-300">ai</span>
            <span class="text-xs px-3 py-1 bg-blue-900/30 rounded-full text-blue-300">manufacturing</span>
          </div>
          <h2 class="text-2xl font-semibold mb-4 text-white">Key Features</h2>
          <ul class="list-disc list-inside space-y-2">
        <li class="text-slate-300">Real-time PPE detection (hard hats, vests, gloves)</li>
        <li class="text-slate-300">Unsafe behavior identification</li>
        <li class="text-slate-300">Near-miss detection and reporting</li>
        <li class="text-slate-300">Risk scoring by area and time</li>
        <li class="text-slate-300">Integration with CCTV and safety systems</li>
        <li class="text-slate-300">Automated safety alerts and notifications</li>
        <li class="text-slate-300">Safety compliance dashboards</li>
        <li class="text-slate-300">Historical incident pattern analysis</li>
      </ul>
        </div>
        
        <div class="bg-slate-900 rounded-xl p-6 mb-8">
          <h2 class="text-2xl font-semibold mb-4 text-white">Benefits</h2>
          <ul class="list-disc list-inside space-y-2">
        <li class="text-slate-300">Reduce workplace incidents by 60%</li>
        <li class="text-slate-300">Detect PPE violations in real-time</li>
        <li class="text-slate-300">Identify near-misses before they become incidents</li>
        <li class="text-slate-300">Create a data-driven safety culture</li>
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
              <p class="text-2xl font-bold text-purple-400 mb-2">$3,999/mo</p>
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
                <a href="/services/adaptive-analytics-for-manufacturing-5c30c0e2/" class="text-purple-300 hover:text-purple-200 font-medium">Adaptive Analytics for Manufacturing</a>
                <p class="text-slate-400 text-sm mt-1">Unlock unprecedented growth with Adaptive Analytics for Manufacturing. This autonomous system provides threat detection ...</p>
              </div>
            
            
              <div>
                <a href="/services/adaptive-analyzer-for-manufacturing-0f9ad2a8/" class="text-purple-300 hover:text-purple-200 font-medium">Adaptive Analyzer for Manufacturing</a>
                <p class="text-slate-400 text-sm mt-1">Unlock unprecedented growth with Adaptive Analyzer for Manufacturing. This autonomous system provides language processin...</p>
              </div>
            
            
              <div>
                <a href="/services/adaptive-analyzer-manufacturing-1-1a3fe3d6/" class="text-purple-300 hover:text-purple-200 font-medium">Adaptive analyzer-manufacturing #1</a>
                <p class="text-slate-400 text-sm mt-1">The future of manufacturing is here with Adaptive analyzer-manufacturing #1. Powered by cutting-edge AI, this platform d...</p>
              </div>
            
            
              <div>
                <a href="/services/adaptive-analyzer-manufacturing-20ec4bac/" class="text-purple-300 hover:text-purple-200 font-medium">Adaptive analyzer-manufacturing</a>
                <p class="text-slate-400 text-sm mt-1">Next-generation manufacturing solution: Adaptive analyzer-manufacturing. Combines supply chain with adaptive intelligenc...</p>
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
