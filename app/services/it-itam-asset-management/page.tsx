import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: `IT Asset Management (ITAM) & Lifecycle | Zion Tech Group`,
  description: `Complete IT asset management from procurement to disposal. Track hardware, software licenses, and cloud resources. Optimize costs and ensure compliance.`,
  keywords: 'Automated hardware and software discovery, Software license management and optimization, Cloud resource tracking and cost optimization, Asset lifecycle management (procure to retire), Contract and warranty tracking, Compliance auditing and reporting, Integration with ServiceNow, Jira, SCCM, Executive dashboards and cost analytics, it, technology, Zion Tech Group',
  alternates: {
    canonical: `https://ziontechgroup.com/services/it-itam-asset-management/`,
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
        
        <h1 className="text-4xl font-bold mb-6 text-white">IT Asset Management (ITAM) &amp; Lifecycle</h1>
        <p className="text-lg text-slate-300 mb-8">Complete IT asset management from procurement to disposal. Track hardware, software licenses, and cloud resources. Optimize costs and ensure compliance.</p>
        
        <div class="bg-slate-900 rounded-xl p-6 mb-8">
          <div class="flex flex-wrap gap-2 mb-4">
            <span class="text-xs px-3 py-1 bg-purple-900/30 rounded-full text-purple-300">it</span>
            <span class="text-xs px-3 py-1 bg-blue-900/30 rounded-full text-blue-300">technology</span>
          </div>
          <h2 class="text-2xl font-semibold mb-4 text-white">Key Features</h2>
          <ul class="list-disc list-inside space-y-2">
        <li class="text-slate-300">Automated hardware and software discovery</li>
        <li class="text-slate-300">Software license management and optimization</li>
        <li class="text-slate-300">Cloud resource tracking and cost optimization</li>
        <li class="text-slate-300">Asset lifecycle management (procure to retire)</li>
        <li class="text-slate-300">Contract and warranty tracking</li>
        <li class="text-slate-300">Compliance auditing and reporting</li>
        <li class="text-slate-300">Integration with ServiceNow, Jira, SCCM</li>
        <li class="text-slate-300">Executive dashboards and cost analytics</li>
      </ul>
        </div>
        
        <div class="bg-slate-900 rounded-xl p-6 mb-8">
          <h2 class="text-2xl font-semibold mb-4 text-white">Benefits</h2>
          <ul class="list-disc list-inside space-y-2">
        <li class="text-slate-300">Reduce software license costs by 25%</li>
        <li class="text-slate-300">Eliminate unused hardware and cloud waste</li>
        <li class="text-slate-300">Pass software audits with confidence</li>
        <li class="text-slate-300">Optimize IT spend with data-driven decisions</li>
      </ul>
        </div>
        
        
        <div class="border border-purple-500/30 rounded-xl p-6 mb-8">
          <h2 class="text-2xl font-semibold text-white mb-4">Pricing</h2>
          <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div class="bg-slate-800 rounded-lg p-4 text-center">
              <h3 class="font-semibold text-white mb-2">Basic</h3>
              <p class="text-2xl font-bold text-purple-400 mb-2">$1,500/mo</p>
              <p class="text-sm text-slate-400">Getting started plan</p>
            </div>
            <div class="bg-slate-800 rounded-lg p-4 text-center border-2 border-purple-500">
              <h3 class="font-semibold text-white mb-2">Pro</h3>
              <p class="text-2xl font-bold text-purple-400 mb-2">$4,000/mo</p>
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
                <a href="/services/accessibility-compliance/" class="text-purple-300 hover:text-purple-200 font-medium">Accessibility & WCAG Compliance</a>
                <p class="text-slate-400 text-sm mt-1">Automated WCAG 2.2 auditing, AI-powered remediation suggestions, screen reader simulation, and continuous accessibility ...</p>
              </div>
            
            
              <div>
                <a href="/services/adaptive-advisor-for-tech-e6a61693/" class="text-purple-300 hover:text-purple-200 font-medium">Adaptive Advisor for Tech</a>
                <p class="text-slate-400 text-sm mt-1">Transform your technology operations with our Adaptive Advisor for Tech. This AI-driven solution automates workflow mana...</p>
              </div>
            
            
              <div>
                <a href="/services/adaptive-insights-tech-3772eff5/" class="text-purple-300 hover:text-purple-200 font-medium">Adaptive insights-tech</a>
                <p class="text-slate-400 text-sm mt-1">Unlock unprecedented growth with Adaptive insights-tech. This autonomous system provides risk assessment with zero manua...</p>
              </div>
            
            
              <div>
                <a href="/services/adaptive-manager-tech-32a17ff6/" class="text-purple-300 hover:text-purple-200 font-medium">Adaptive manager-tech</a>
                <p class="text-slate-400 text-sm mt-1">Transform your technology operations with our Adaptive manager-tech. This AI-driven solution automates code optimization...</p>
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
