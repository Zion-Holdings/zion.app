import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: `AI Construction Site Safety & Compliance | Zion Tech Group`,
  description: `Computer vision-based construction site safety monitoring with PPE detection, hazard identification, and automated compliance reporting.`,
  keywords: 'Real-time PPE detection (hard hats, vests, gloves), Hazard zone intrusion alerts, Heavy equipment proximity warnings, Fall detection and prevention, Automated safety compliance reports, Integration with site cameras and IoT sensors, Worker safety scoring, Historical incident analysis, ai, construction, Zion Tech Group',
  alternates: {
    canonical: `https://ziontechgroup.com/services/ai-construction-site-safety/`,
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
        
        <h1 className="text-4xl font-bold mb-6 text-white">AI Construction Site Safety &amp; Compliance</h1>
        <p className="text-lg text-slate-300 mb-8">Computer vision-based construction site safety monitoring with PPE detection, hazard identification, and automated compliance reporting.</p>
        
        <div class="bg-slate-900 rounded-xl p-6 mb-8">
          <div class="flex flex-wrap gap-2 mb-4">
            <span class="text-xs px-3 py-1 bg-purple-900/30 rounded-full text-purple-300">ai</span>
            <span class="text-xs px-3 py-1 bg-blue-900/30 rounded-full text-blue-300">construction</span>
          </div>
          <h2 class="text-2xl font-semibold mb-4 text-white">Key Features</h2>
          <ul class="list-disc list-inside space-y-2">
        <li class="text-slate-300">Real-time PPE detection (hard hats, vests, gloves)</li>
        <li class="text-slate-300">Hazard zone intrusion alerts</li>
        <li class="text-slate-300">Heavy equipment proximity warnings</li>
        <li class="text-slate-300">Fall detection and prevention</li>
        <li class="text-slate-300">Automated safety compliance reports</li>
        <li class="text-slate-300">Integration with site cameras and IoT sensors</li>
        <li class="text-slate-300">Worker safety scoring</li>
        <li class="text-slate-300">Historical incident analysis</li>
      </ul>
        </div>
        
        <div class="bg-slate-900 rounded-xl p-6 mb-8">
          <h2 class="text-2xl font-semibold mb-4 text-white">Benefits</h2>
          <ul class="list-disc list-inside space-y-2">
        <li class="text-slate-300">Reduce workplace incidents by 60%</li>
        <li class="text-slate-300">Automate safety compliance</li>
        <li class="text-slate-300">Lower insurance premiums</li>
        <li class="text-slate-300">Protect worker lives</li>
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
                <a href="/services/adaptive-advisor-construction-fcb356b8/" class="text-purple-300 hover:text-purple-200 font-medium">Adaptive advisor-construction</a>
                <p class="text-slate-400 text-sm mt-1">Transform your construction operations with our Adaptive advisor-construction. This AI-driven solution automates sales f...</p>
              </div>
            
            
              <div>
                <a href="/services/adaptive-advisor-for-construction-5b6000aa/" class="text-purple-300 hover:text-purple-200 font-medium">Adaptive Advisor for Construction</a>
                <p class="text-slate-400 text-sm mt-1">Next-generation construction solution: Adaptive Advisor for Construction. Combines inventory management with adaptive in...</p>
              </div>
            
            
              <div>
                <a href="/services/adaptive-analytics-for-construction-1c694cae/" class="text-purple-300 hover:text-purple-200 font-medium">Adaptive Analytics for Construction</a>
                <p class="text-slate-400 text-sm mt-1">Revolutionize construction through intelligent automation. Our Adaptive Analytics for Construction leverages advanced ma...</p>
              </div>
            
            
              <div>
                <a href="/services/adaptive-analyzer-for-construction-43c8a544/" class="text-purple-300 hover:text-purple-200 font-medium">Adaptive Analyzer for Construction</a>
                <p class="text-slate-400 text-sm mt-1">Unlock unprecedented growth with Adaptive Analyzer for Construction. This autonomous system provides workflow management...</p>
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
