import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: `ContractForge — Contract Management Micro-SaaS | Zion Tech Group`,
  description: `Contract lifecycle management for small and medium businesses. Template library, e-signatures, renewal tracking, and AI-powered clause analysis. Integrates with CRM and accounting software.`,
  keywords: 'Contract template library, E-signature (legally binding), Renewal and expiration alerts, AI clause risk analysis, Obligation tracking, Approval workflows, Integration with HubSpot, Salesforce, QuickBooks, Audit trail and version history, micro-saas, Legal, Zion Tech Group',
  alternates: {
    canonical: `https://ziontechgroup.com/services/micro-saas-contract-management/`,
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
        
        <h1 className="text-4xl font-bold mb-6 text-white">ContractForge — Contract Management Micro-SaaS</h1>
        <p className="text-lg text-slate-300 mb-8">Contract lifecycle management for small and medium businesses. Template library, e-signatures, renewal tracking, and AI-powered clause analysis. Integrates with CRM and accounting software.</p>
        
        <div class="bg-slate-900 rounded-xl p-6 mb-8">
          <div class="flex flex-wrap gap-2 mb-4">
            <span class="text-xs px-3 py-1 bg-purple-900/30 rounded-full text-purple-300">micro-saas</span>
            <span class="text-xs px-3 py-1 bg-blue-900/30 rounded-full text-blue-300">Legal</span>
          </div>
          <h2 class="text-2xl font-semibold mb-4 text-white">Key Features</h2>
          <ul class="list-disc list-inside space-y-2">
        <li class="text-slate-300">Contract template library</li>
        <li class="text-slate-300">E-signature (legally binding)</li>
        <li class="text-slate-300">Renewal and expiration alerts</li>
        <li class="text-slate-300">AI clause risk analysis</li>
        <li class="text-slate-300">Obligation tracking</li>
        <li class="text-slate-300">Approval workflows</li>
        <li class="text-slate-300">Integration with HubSpot, Salesforce, QuickBooks</li>
        <li class="text-slate-300">Audit trail and version history</li>
      </ul>
        </div>
        
        <div class="bg-slate-900 rounded-xl p-6 mb-8">
          <h2 class="text-2xl font-semibold mb-4 text-white">Benefits</h2>
          <ul class="list-disc list-inside space-y-2">
        <li class="text-slate-300">Never miss a contract renewal</li>
        <li class="text-slate-300">Reduce contract risk with AI analysis</li>
        <li class="text-slate-300">Speed up contract cycles by 60%</li>
        <li class="text-slate-300">Centralized contract repository</li>
      </ul>
        </div>
        
        
        <div class="border border-purple-500/30 rounded-xl p-6 mb-8">
          <h2 class="text-2xl font-semibold text-white mb-4">Pricing</h2>
          <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div class="bg-slate-800 rounded-lg p-4 text-center">
              <h3 class="font-semibold text-white mb-2">Basic</h3>
              <p class="text-2xl font-bold text-purple-400 mb-2">$89/mo</p>
              <p class="text-sm text-slate-400">Getting started plan</p>
            </div>
            <div class="bg-slate-800 rounded-lg p-4 text-center border-2 border-purple-500">
              <h3 class="font-semibold text-white mb-2">Pro</h3>
              <p class="text-2xl font-bold text-purple-400 mb-2">$279/mo</p>
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
                <a href="/services/ai-contract-lifecycle/" class="text-purple-300 hover:text-purple-200 font-medium">AI Contract Lifecycle Management</a>
                <p class="text-slate-400 text-sm mt-1">End-to-end contract management with AI drafting, review, approval workflows, and risk analysis....</p>
              </div>
            
            
              <div>
                <a href="/services/ai-contract-risk-analyzer/" class="text-purple-300 hover:text-purple-200 font-medium">AI Contract Risk Analyzer</a>
                <p class="text-slate-400 text-sm mt-1">Analyze contract risk with AI. Identify unfavorable clauses, missing provisions, and compliance gaps. Compare against in...</p>
              </div>
            
            
              <div>
                <a href="/services/ai-document-generation/" class="text-purple-300 hover:text-purple-200 font-medium">AI Document Generation Platform</a>
                <p class="text-slate-400 text-sm mt-1">Auto-generate contracts, proposals, reports, and emails from templates and data. Conditional logic, data merging, e-sign...</p>
              </div>
            
            
              <div>
                <a href="/services/ai-intellectual-property-management/" class="text-purple-300 hover:text-purple-200 font-medium">AI Intellectual Property Management</a>
                <p class="text-slate-400 text-sm mt-1">AI-powered IP management for patents, trademarks, and copyrights. Prior art search, infringement detection, portfolio an...</p>
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
