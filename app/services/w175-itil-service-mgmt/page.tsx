import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: `ITIL Service Management Platform | Zion Tech Group`,
  description: `ITIL-aligned ITSM: incident, problem, change, and release management with CMDB, knowledge base, and self-service portal.`,
  keywords: 'Incident and problem management, Change and release management, CMDB with auto-discovery, Knowledge base and self-service, Service catalog and request management, SLA and OLA tracking, Integration with Jira, ServiceNow, Freshservice, automation, IT Operations, Zion Tech Group',
  alternates: {
    canonical: `https://ziontechgroup.com/services/w175-itil-service-mgmt/`,
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
        
        <h1 className="text-4xl font-bold mb-6 text-white">ITIL Service Management Platform</h1>
        <p className="text-lg text-slate-300 mb-8">ITIL-aligned ITSM: incident, problem, change, and release management with CMDB, knowledge base, and self-service portal.</p>
        
        <div class="bg-slate-900 rounded-xl p-6 mb-8">
          <div class="flex flex-wrap gap-2 mb-4">
            <span class="text-xs px-3 py-1 bg-purple-900/30 rounded-full text-purple-300">automation</span>
            <span class="text-xs px-3 py-1 bg-blue-900/30 rounded-full text-blue-300">IT Operations</span>
          </div>
          <h2 class="text-2xl font-semibold mb-4 text-white">Key Features</h2>
          <ul class="list-disc list-inside space-y-2">
        <li class="text-slate-300">Incident and problem management</li>
        <li class="text-slate-300">Change and release management</li>
        <li class="text-slate-300">CMDB with auto-discovery</li>
        <li class="text-slate-300">Knowledge base and self-service</li>
        <li class="text-slate-300">Service catalog and request management</li>
        <li class="text-slate-300">SLA and OLA tracking</li>
        <li class="text-slate-300">Integration with Jira, ServiceNow, Freshservice</li>
      </ul>
        </div>
        
        <div class="bg-slate-900 rounded-xl p-6 mb-8">
          <h2 class="text-2xl font-semibold mb-4 text-white">Benefits</h2>
          <ul class="list-disc list-inside space-y-2">
        <li class="text-slate-300">ITIL best practices out of the box</li>
        <li class="text-slate-300">CMDB auto-discovery keeps data current</li>
        <li class="text-slate-300">Self-service portal reduces ticket volume</li>
        <li class="text-slate-300">SLA tracking ensures service quality</li>
      </ul>
        </div>
        
        
        <div class="border border-purple-500/30 rounded-xl p-6 mb-8">
          <h2 class="text-2xl font-semibold text-white mb-4">Pricing</h2>
          <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div class="bg-slate-800 rounded-lg p-4 text-center">
              <h3 class="font-semibold text-white mb-2">Basic</h3>
              <p class="text-2xl font-bold text-purple-400 mb-2">$399/mo</p>
              <p class="text-sm text-slate-400">Getting started plan</p>
            </div>
            <div class="bg-slate-800 rounded-lg p-4 text-center border-2 border-purple-500">
              <h3 class="font-semibold text-white mb-2">Pro</h3>
              <p class="text-2xl font-bold text-purple-400 mb-2">$1,199/mo</p>
              <p class="text-sm text-slate-400">Most popular</p>
            </div>
            <div class="bg-slate-800 rounded-lg p-4 text-center">
              <h3 class="font-semibold text-white mb-2">Enterprise</h3>
              <p class="text-2xl font-bold text-purple-400 mb-2">$3,999/mo</p>
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
                <a href="/services/adaptive-advisor-gaming-65cb3d65/" class="text-purple-300 hover:text-purple-200 font-medium">Adaptive advisor-gaming</a>
                <p class="text-slate-400 text-sm mt-1">Revolutionize gaming through intelligent automation. Our Adaptive advisor-gaming leverages advanced machine learning to ...</p>
              </div>
            
            
              <div>
                <a href="/services/adaptive-analytics-insurance-535020e8/" class="text-purple-300 hover:text-purple-200 font-medium">Adaptive analytics-insurance</a>
                <p class="text-slate-400 text-sm mt-1">The future of insurance is here with Adaptive analytics-insurance. Powered by cutting-edge AI, this platform delivers fr...</p>
              </div>
            
            
              <div>
                <a href="/services/adaptive-coordinator-agriculture-ff3d6aa8/" class="text-purple-300 hover:text-purple-200 font-medium">Adaptive coordinator-agriculture</a>
                <p class="text-slate-400 text-sm mt-1">Next-generation agriculture solution: Adaptive coordinator-agriculture. Combines predictive analytics with adaptive inte...</p>
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
