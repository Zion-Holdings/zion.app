import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: `Green Cloud & Sustainability Optimizer | Zion Tech Group`,
  description: `Optimize cloud workloads for carbon efficiency: right-size for energy, choose green regions, schedule non-critical workloads off-peak, and report carbon metrics.`,
  keywords: 'Carbon footprint tracking per workload, Green region recommendation (AWS, Azure, GCP), Right-sizing for energy efficiency, Non-critical workload scheduling (off-peak), Carbon offset integration, Sustainability reporting (ESG-aligned), API for carbon metrics in your dashboard, cloud, Sustainability, Zion Tech Group',
  alternates: {
    canonical: `https://ziontechgroup.com/services/w174-green-cloud/`,
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
        
        <h1 className="text-4xl font-bold mb-6 text-white">Green Cloud &amp; Sustainability Optimizer</h1>
        <p className="text-lg text-slate-300 mb-8">Optimize cloud workloads for carbon efficiency: right-size for energy, choose green regions, schedule non-critical workloads off-peak, and report carbon metrics.</p>
        
        <div class="bg-slate-900 rounded-xl p-6 mb-8">
          <div class="flex flex-wrap gap-2 mb-4">
            <span class="text-xs px-3 py-1 bg-purple-900/30 rounded-full text-purple-300">cloud</span>
            <span class="text-xs px-3 py-1 bg-blue-900/30 rounded-full text-blue-300">Sustainability</span>
          </div>
          <h2 class="text-2xl font-semibold mb-4 text-white">Key Features</h2>
          <ul class="list-disc list-inside space-y-2">
        <li class="text-slate-300">Carbon footprint tracking per workload</li>
        <li class="text-slate-300">Green region recommendation (AWS, Azure, GCP)</li>
        <li class="text-slate-300">Right-sizing for energy efficiency</li>
        <li class="text-slate-300">Non-critical workload scheduling (off-peak)</li>
        <li class="text-slate-300">Carbon offset integration</li>
        <li class="text-slate-300">Sustainability reporting (ESG-aligned)</li>
        <li class="text-slate-300">API for carbon metrics in your dashboard</li>
      </ul>
        </div>
        
        <div class="bg-slate-900 rounded-xl p-6 mb-8">
          <h2 class="text-2xl font-semibold mb-4 text-white">Benefits</h2>
          <ul class="list-disc list-inside space-y-2">
        <li class="text-slate-300">Reduce cloud carbon footprint by 30-50%</li>
        <li class="text-slate-300">Green regions use renewable energy</li>
        <li class="text-slate-300">Off-peak scheduling reduces grid impact</li>
        <li class="text-slate-300">ESG-aligned reporting for sustainability goals</li>
      </ul>
        </div>
        
        
        <div class="border border-purple-500/30 rounded-xl p-6 mb-8">
          <h2 class="text-2xl font-semibold text-white mb-4">Pricing</h2>
          <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div class="bg-slate-800 rounded-lg p-4 text-center">
              <h3 class="font-semibold text-white mb-2">Basic</h3>
              <p class="text-2xl font-bold text-purple-400 mb-2">$199/mo</p>
              <p class="text-sm text-slate-400">Getting started plan</p>
            </div>
            <div class="bg-slate-800 rounded-lg p-4 text-center border-2 border-purple-500">
              <h3 class="font-semibold text-white mb-2">Pro</h3>
              <p class="text-2xl font-bold text-purple-400 mb-2">$599/mo</p>
              <p class="text-sm text-slate-400">Most popular</p>
            </div>
            <div class="bg-slate-800 rounded-lg p-4 text-center">
              <h3 class="font-semibold text-white mb-2">Enterprise</h3>
              <p class="text-2xl font-bold text-purple-400 mb-2">$1,999/mo</p>
              <p class="text-sm text-slate-400">Full-featured solution</p>
            </div>
          </div>
        </div>
        
        <div class="bg-slate-900/60 border border-slate-700/50 rounded-xl p-6 mb-8">
          <h2 class="text-2xl font-semibold text-white mb-4">Related Services</h2>
          <div class="grid md:grid-cols-2 gap-4">
            
              <div>
                <a href="/services/ai-cdn-edge-optimizer/" class="text-purple-300 hover:text-purple-200 font-medium">AI CDN & Edge Performance Optimizer</a>
                <p class="text-slate-400 text-sm mt-1">Optimize content delivery: intelligent caching, edge compute routing, image/video optimization, and DDoS protection. Rea...</p>
              </div>
            
            
              <div>
                <a href="/services/ai-project-planning/" class="text-purple-300 hover:text-purple-200 font-medium">AI Project Planning & Scheduling</a>
                <p class="text-slate-400 text-sm mt-1">PM-grade AI: scope→WBS→resource allocation→critical path→risk register→milestone tracking. Syncs to Jira Asana Monday au...</p>
              </div>
            
            
              <div>
                <a href="/services/ai-sustainability-carbon-tracker/" class="text-purple-300 hover:text-purple-200 font-medium">AI Sustainability & Carbon Tracker</a>
                <p class="text-slate-400 text-sm mt-1">Automatically calculates organizational carbon footprint from operational data (energy, travel, cloud usage) and suggest...</p>
              </div>
            
            
              <div>
                <a href="/services/ai-sustainable-ops/" class="text-purple-300 hover:text-purple-200 font-medium">AI for Sustainable Operations (Green AI)</a>
                <p class="text-slate-400 text-sm mt-1">Optimize compute & cloud resource usage to reduce carbon footprint: model carbon-aware scheduling, energy profiling, and...</p>
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
