import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: `Identity Governance & Administration (IGA) | Zion Tech Group`,
  description: `Automated access review, SoD policy check, certification campaign, identity auto-provisioning/revocation, and entitlement analytics.`,
  keywords: 'Automated access-review campaign per user/role, SoD (Segregation of Duties) rule engine, Auto-provision/revoke via SCIM API, Entitlement analytics + orphaned-access detection, security, Marketing, Zion Tech Group',
  alternates: {
    canonical: `https://ziontechgroup.com/services/security-identity-governance-igac/`,
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
        
        <h1 className="text-4xl font-bold mb-6 text-white">Identity Governance &amp; Administration (IGA)</h1>
        <p className="text-lg text-slate-300 mb-8">Automated access review, SoD policy check, certification campaign, identity auto-provisioning/revocation, and entitlement analytics.</p>
        
        <div class="bg-slate-900 rounded-xl p-6 mb-8">
          <div class="flex flex-wrap gap-2 mb-4">
            <span class="text-xs px-3 py-1 bg-purple-900/30 rounded-full text-purple-300">security</span>
            <span class="text-xs px-3 py-1 bg-blue-900/30 rounded-full text-blue-300">Marketing</span>
          </div>
          <h2 class="text-2xl font-semibold mb-4 text-white">Key Features</h2>
          <ul class="list-disc list-inside space-y-2">
        <li class="text-slate-300">Automated access-review campaign per user/role</li>
        <li class="text-slate-300">SoD (Segregation of Duties) rule engine</li>
        <li class="text-slate-300">Auto-provision/revoke via SCIM API</li>
        <li class="text-slate-300">Entitlement analytics + orphaned-access detection</li>
      </ul>
        </div>
        
        <div class="bg-slate-900 rounded-xl p-6 mb-8">
          <h2 class="text-2xl font-semibold mb-4 text-white">Benefits</h2>
          <ul class="list-disc list-inside space-y-2">
        <li class="text-slate-300">Reduce costs with identity governance &amp; administration (iga)</li>
        <li class="text-slate-300">Improve operational efficiency</li>
        <li class="text-slate-300">Scale without complexity</li>
        <li class="text-slate-300">Enterprise-grade reliability</li>
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
              <p class="text-2xl font-bold text-purple-400 mb-2">$2,999/mo</p>
              <p class="text-sm text-slate-400">Full-featured solution</p>
            </div>
          </div>
        </div>
        
        <div class="bg-slate-900/60 border border-slate-700/50 rounded-xl p-6 mb-8">
          <h2 class="text-2xl font-semibold text-white mb-4">Related Services</h2>
          <div class="grid md:grid-cols-2 gap-4">
            
              <div>
                <a href="/services/ai-accessibility-optimizer/" class="text-purple-300 hover:text-purple-200 font-medium">AI Accessibility Content Optimizer</a>
                <p class="text-slate-400 text-sm mt-1">Suggests alt-text for images, transcript generation for videos, and semantic HTML improvements to boost accessibility an...</p>
              </div>
            
            
              <div>
                <a href="/services/ai-ad-copy-generator/" class="text-purple-300 hover:text-purple-200 font-medium">Ai Ad Copy Generator</a>
                <p class="text-slate-400 text-sm mt-1">AI Ad Copy Generator — enterprise-grade solution with AI-powered automation, real-time analytics, and seamless integrati...</p>
              </div>
            
            
              <div>
                <a href="/services/ai-bank-fraud-investigator/" class="text-purple-300 hover:text-purple-200 font-medium">AI Bank Fraud Investigation Platform</a>
                <p class="text-slate-400 text-sm mt-1">Automate fraud investigation workstreams: transaction link analysis, entity resolution, SAR filing automation, and regul...</p>
              </div>
            
            
              <div>
                <a href="/services/ai-brand-voice-guardian/" class="text-purple-300 hover:text-purple-200 font-medium">AI Brand Voice Guardian</a>
                <p class="text-slate-400 text-sm mt-1">Maintain consistent brand voice. AI audits existing content, generates tone guidelines, and rewrites copy in real time t...</p>
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
