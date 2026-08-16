import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: `Data Consent Management Platform | Zion Tech Group`,
  description: `Enterprise consent and preference management for GDPR, CCPA, and LGPD compliance. Unified consent collection, audit trails, and real-time enforcement.`,
  keywords: 'Consent collection banners, Preference center for users, Consent audit trails, Cross-domain consent syncing, Real-time enforcement APIs, Integration with analytics and marketing tools, Automated data subject request processing, Multi-regulation support (GDPR, CCPA, LGPD, POPIA), data, Legal, Zion Tech Group',
  alternates: {
    canonical: `https://ziontechgroup.com/services/data-consent-management-platform/`,
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
        
        <h1 className="text-4xl font-bold mb-6 text-white">Data Consent Management Platform</h1>
        <p className="text-lg text-slate-300 mb-8">Enterprise consent and preference management for GDPR, CCPA, and LGPD compliance. Unified consent collection, audit trails, and real-time enforcement.</p>
        
        <div class="bg-slate-900 rounded-xl p-6 mb-8">
          <div class="flex flex-wrap gap-2 mb-4">
            <span class="text-xs px-3 py-1 bg-purple-900/30 rounded-full text-purple-300">data</span>
            <span class="text-xs px-3 py-1 bg-blue-900/30 rounded-full text-blue-300">Legal</span>
          </div>
          <h2 class="text-2xl font-semibold mb-4 text-white">Key Features</h2>
          <ul class="list-disc list-inside space-y-2">
        <li class="text-slate-300">Consent collection banners</li>
        <li class="text-slate-300">Preference center for users</li>
        <li class="text-slate-300">Consent audit trails</li>
        <li class="text-slate-300">Cross-domain consent syncing</li>
        <li class="text-slate-300">Real-time enforcement APIs</li>
        <li class="text-slate-300">Integration with analytics and marketing tools</li>
        <li class="text-slate-300">Automated data subject request processing</li>
        <li class="text-slate-300">Multi-regulation support (GDPR, CCPA, LGPD, POPIA)</li>
      </ul>
        </div>
        
        <div class="bg-slate-900 rounded-xl p-6 mb-8">
          <h2 class="text-2xl font-semibold mb-4 text-white">Benefits</h2>
          <ul class="list-disc list-inside space-y-2">
        <li class="text-slate-300">Achieve regulatory compliance</li>
        <li class="text-slate-300">Avoid fines up to 4% of revenue</li>
        <li class="text-slate-300">Build customer trust</li>
        <li class="text-slate-300">Automate DSAR workflows</li>
      </ul>
        </div>
        
        
        <div class="border border-purple-500/30 rounded-xl p-6 mb-8">
          <h2 class="text-2xl font-semibold text-white mb-4">Pricing</h2>
          <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div class="bg-slate-800 rounded-lg p-4 text-center">
              <h3 class="font-semibold text-white mb-2">Basic</h3>
              <p class="text-2xl font-bold text-purple-400 mb-2">$299/mo</p>
              <p class="text-sm text-slate-400">Getting started plan</p>
            </div>
            <div class="bg-slate-800 rounded-lg p-4 text-center border-2 border-purple-500">
              <h3 class="font-semibold text-white mb-2">Pro</h3>
              <p class="text-2xl font-bold text-purple-400 mb-2">$899/mo</p>
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
                <a href="/services/ai-data-quality-engine/" class="text-purple-300 hover:text-purple-200 font-medium">AI Data Quality & Enforcement Engine</a>
                <p class="text-slate-400 text-sm mt-1">Continuous data quality at pipeline scale: automated profiling, statistical anomaly detection, schema drift + auto-fix. ...</p>
              </div>
            
            
              <div>
                <a href="/services/ai-document-generation/" class="text-purple-300 hover:text-purple-200 font-medium">AI Document Generation Platform</a>
                <p class="text-slate-400 text-sm mt-1">Auto-generate contracts, proposals, reports, and emails from templates and data. Conditional logic, data merging, e-sign...</p>
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
