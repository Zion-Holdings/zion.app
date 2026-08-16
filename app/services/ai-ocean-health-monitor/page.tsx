import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: `AI Ocean Health & Marine Ecosystem Monitor | Zion Tech Group`,
  description: `Satellite + sensor analysis for ocean health: algae bloom prediction, microplastic tracking, coral reef bleaching early warning, and illegal fishing detection.`,
  keywords: 'Satellite ocean color analysis, Algae bloom prediction (7-day), Microplastic density mapping, Coral bleaching early warning, illegal fishing vessel detection, Marine biodiversity tracking, ai, Environmental, Zion Tech Group',
  alternates: {
    canonical: `https://ziontechgroup.com/services/ai-ocean-health-monitor/`,
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
        
        <h1 className="text-4xl font-bold mb-6 text-white">AI Ocean Health &amp; Marine Ecosystem Monitor</h1>
        <p className="text-lg text-slate-300 mb-8">Satellite + sensor analysis for ocean health: algae bloom prediction, microplastic tracking, coral reef bleaching early warning, and illegal fishing detection.</p>
        
        <div class="bg-slate-900 rounded-xl p-6 mb-8">
          <div class="flex flex-wrap gap-2 mb-4">
            <span class="text-xs px-3 py-1 bg-purple-900/30 rounded-full text-purple-300">ai</span>
            <span class="text-xs px-3 py-1 bg-blue-900/30 rounded-full text-blue-300">Environmental</span>
          </div>
          <h2 class="text-2xl font-semibold mb-4 text-white">Key Features</h2>
          <ul class="list-disc list-inside space-y-2">
        <li class="text-slate-300">Satellite ocean color analysis</li>
        <li class="text-slate-300">Algae bloom prediction (7-day)</li>
        <li class="text-slate-300">Microplastic density mapping</li>
        <li class="text-slate-300">Coral bleaching early warning</li>
        <li class="text-slate-300">illegal fishing vessel detection</li>
        <li class="text-slate-300">Marine biodiversity tracking</li>
      </ul>
        </div>
        
        <div class="bg-slate-900 rounded-xl p-6 mb-8">
          <h2 class="text-2xl font-semibold mb-4 text-white">Benefits</h2>
          <ul class="list-disc list-inside space-y-2">
        <li class="text-slate-300">Predict algae blooms 7 days ahead</li>
        <li class="text-slate-300">Track marine pollution in real-time</li>
        <li class="text-slate-300">Protect coral reef ecosystems</li>
      </ul>
        </div>
        
        
        <div class="border border-purple-500/30 rounded-xl p-6 mb-8">
          <h2 class="text-2xl font-semibold text-white mb-4">Pricing</h2>
          <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div class="bg-slate-800 rounded-lg p-4 text-center">
              <h3 class="font-semibold text-white mb-2">Basic</h3>
              <p class="text-2xl font-bold text-purple-400 mb-2">299</p>
              <p class="text-sm text-slate-400">Getting started plan</p>
            </div>
            <div class="bg-slate-800 rounded-lg p-4 text-center border-2 border-purple-500">
              <h3 class="font-semibold text-white mb-2">Pro</h3>
              <p class="text-2xl font-bold text-purple-400 mb-2">799</p>
              <p class="text-sm text-slate-400">Most popular</p>
            </div>
            <div class="bg-slate-800 rounded-lg p-4 text-center">
              <h3 class="font-semibold text-white mb-2">Enterprise</h3>
              <p class="text-2xl font-bold text-purple-400 mb-2">3499</p>
              <p class="text-sm text-slate-400">Full-featured solution</p>
            </div>
          </div>
        </div>
        
        <div class="bg-slate-900/60 border border-slate-700/50 rounded-xl p-6 mb-8">
          <h2 class="text-2xl font-semibold text-white mb-4">Related Services</h2>
          <div class="grid md:grid-cols-2 gap-4">
            
              <div>
                <a href="/services/advanced-ai-enterprise-intelligence-hub/" class="text-purple-300 hover:text-purple-200 font-medium">Advanced AI & Enterprise Intelligence Hub</a>
                <p class="text-slate-400 text-sm mt-1">Unify generative AI, autonomous agents, multimodal intelligence, RAG, governance, observability, and enterprise copilots...</p>
              </div>
            
            
              <div>
                <a href="/services/agritech-precision-farming/" class="text-purple-300 hover:text-purple-200 font-medium">Precision Agriculture Platform</a>
                <p class="text-slate-400 text-sm mt-1">AI-powered precision farming with satellite imagery, soil analysis, crop health monitoring, yield prediction, and automa...</p>
              </div>
            
            
              <div>
                <a href="/services/ai-3d-asset-generator/" class="text-purple-300 hover:text-purple-200 font-medium">Ai 3D Asset Generator</a>
                <p class="text-slate-400 text-sm mt-1">AI 3D Asset Generator — enterprise-grade solution with AI-powered automation, real-time analytics, and seamless integrat...</p>
              </div>
            
            
              <div>
                <a href="/services/ai-3d-printing-optimizer/" class="text-purple-300 hover:text-purple-200 font-medium">AI 3D Print Optimization & Quality Control</a>
                <p class="text-slate-400 text-sm mt-1">Optimize additive manufacturing: support structure minimization, print orientation optimization, defect detection during...</p>
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
