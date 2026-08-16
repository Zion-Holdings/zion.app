import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: `AI Construction Project Management | Zion Tech Group`,
  description: `AI-powered construction project management with schedule optimization, resource allocation, risk prediction, and progress tracking using drone and camera imagery.`,
  keywords: 'Schedule optimization (CPM/PERT), Resource allocation AI, Risk prediction and mitigation, Drone progress tracking, Safety violation detection, Budget forecasting, Subcontractor management, Integration with Procore, PlanGrid, construction-tech, Construction, Zion Tech Group',
  alternates: {
    canonical: `https://ziontechgroup.com/services/construction-project-management-ai/`,
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
        
        <h1 className="text-4xl font-bold mb-6 text-white">AI Construction Project Management</h1>
        <p className="text-lg text-slate-300 mb-8">AI-powered construction project management with schedule optimization, resource allocation, risk prediction, and progress tracking using drone and camera imagery.</p>
        
        <div class="bg-slate-900 rounded-xl p-6 mb-8">
          <div class="flex flex-wrap gap-2 mb-4">
            <span class="text-xs px-3 py-1 bg-purple-900/30 rounded-full text-purple-300">construction-tech</span>
            <span class="text-xs px-3 py-1 bg-blue-900/30 rounded-full text-blue-300">Construction</span>
          </div>
          <h2 class="text-2xl font-semibold mb-4 text-white">Key Features</h2>
          <ul class="list-disc list-inside space-y-2">
        <li class="text-slate-300">Schedule optimization (CPM/PERT)</li>
        <li class="text-slate-300">Resource allocation AI</li>
        <li class="text-slate-300">Risk prediction and mitigation</li>
        <li class="text-slate-300">Drone progress tracking</li>
        <li class="text-slate-300">Safety violation detection</li>
        <li class="text-slate-300">Budget forecasting</li>
        <li class="text-slate-300">Subcontractor management</li>
        <li class="text-slate-300">Integration with Procore, PlanGrid</li>
      </ul>
        </div>
        
        <div class="bg-slate-900 rounded-xl p-6 mb-8">
          <h2 class="text-2xl font-semibold mb-4 text-white">Benefits</h2>
          <ul class="list-disc list-inside space-y-2">
        <li class="text-slate-300">Reduce project delays by 30%</li>
        <li class="text-slate-300">Improve safety compliance</li>
        <li class="text-slate-300">Optimize resource utilization</li>
        <li class="text-slate-300">Real-time progress visibility</li>
      </ul>
        </div>
        
        
        <div class="border border-purple-500/30 rounded-xl p-6 mb-8">
          <h2 class="text-2xl font-semibold text-white mb-4">Pricing</h2>
          <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div class="bg-slate-800 rounded-lg p-4 text-center">
              <h3 class="font-semibold text-white mb-2">Basic</h3>
              <p class="text-2xl font-bold text-purple-400 mb-2">$999/mo</p>
              <p class="text-sm text-slate-400">Getting started plan</p>
            </div>
            <div class="bg-slate-800 rounded-lg p-4 text-center border-2 border-purple-500">
              <h3 class="font-semibold text-white mb-2">Pro</h3>
              <p class="text-2xl font-bold text-purple-400 mb-2">$2,999/mo</p>
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
                <a href="/services/ai-workplace-safety-monitor/" class="text-purple-300 hover:text-purple-200 font-medium">AI Workplace Safety & Compliance Monitor</a>
                <p class="text-slate-400 text-sm mt-1">Computer vision safety system: PPE compliance detection, fall detection, forklift proximity alerts, incident reporting. ...</p>
              </div>
            
            
              <div>
                <a href="/services/construction-bim-platform/" class="text-purple-300 hover:text-purple-200 font-medium">AI BIM Collaboration Platform</a>
                <p class="text-slate-400 text-sm mt-1">AI-enhanced Building Information Modeling platform. Clash detection, design optimization, cost estimation, and 4D/5D BIM...</p>
              </div>
            
            
              <div>
                <a href="/services/construction-tech-bim-management/" class="text-purple-300 hover:text-purple-200 font-medium">BIM Management Platform for Construction</a>
                <p class="text-slate-400 text-sm mt-1">Building Information Modeling management for construction teams. 3D model collaboration, clash detection, version contro...</p>
              </div>
            
            
              <div>
                <a href="/services/construction-tech-safety-monitoring/" class="text-purple-300 hover:text-purple-200 font-medium">AI Construction Safety Monitoring</a>
                <p class="text-slate-400 text-sm mt-1">AI-powered construction site safety. PPE detection, hazard identification, incident prediction, and compliance reporting...</p>
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
