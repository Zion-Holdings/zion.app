import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: `Cloud Access Security Broker (CASB) | Zion Tech Group`,
  description: `CASB for SaaS security: shadow IT discovery, DLP, access control, and threat detection across M365, Google Workspace, Salesforce, and 1000+ SaaS apps.`,
  keywords: 'Shadow IT discovery and risk scoring, SaaS DLP and data exposure detection, Inline and API-based access control, Threat detection and anomaly alerts, Session control and activity monitoring, Compliance assessment for SaaS apps, Integration with Netskope, Zscaler, McAfee, security, Cloud Security, Zion Tech Group',
  alternates: {
    canonical: `https://ziontechgroup.com/services/w175-casb-platform/`,
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
        
        <h1 className="text-4xl font-bold mb-6 text-white">Cloud Access Security Broker (CASB)</h1>
        <p className="text-lg text-slate-300 mb-8">CASB for SaaS security: shadow IT discovery, DLP, access control, and threat detection across M365, Google Workspace, Salesforce, and 1000+ SaaS apps.</p>
        
        <div class="bg-slate-900 rounded-xl p-6 mb-8">
          <div class="flex flex-wrap gap-2 mb-4">
            <span class="text-xs px-3 py-1 bg-purple-900/30 rounded-full text-purple-300">security</span>
            <span class="text-xs px-3 py-1 bg-blue-900/30 rounded-full text-blue-300">Cloud Security</span>
          </div>
          <h2 class="text-2xl font-semibold mb-4 text-white">Key Features</h2>
          <ul class="list-disc list-inside space-y-2">
        <li class="text-slate-300">Shadow IT discovery and risk scoring</li>
        <li class="text-slate-300">SaaS DLP and data exposure detection</li>
        <li class="text-slate-300">Inline and API-based access control</li>
        <li class="text-slate-300">Threat detection and anomaly alerts</li>
        <li class="text-slate-300">Session control and activity monitoring</li>
        <li class="text-slate-300">Compliance assessment for SaaS apps</li>
        <li class="text-slate-300">Integration with Netskope, Zscaler, McAfee</li>
      </ul>
        </div>
        
        <div class="bg-slate-900 rounded-xl p-6 mb-8">
          <h2 class="text-2xl font-semibold mb-4 text-white">Benefits</h2>
          <ul class="list-disc list-inside space-y-2">
        <li class="text-slate-300">Discover shadow IT before it causes breaches</li>
        <li class="text-slate-300">DLP prevents sensitive data in SaaS apps</li>
        <li class="text-slate-300">Access control enforces least privilege</li>
        <li class="text-slate-300">Threat detection catches compromised accounts</li>
      </ul>
        </div>
        
        
        <div class="border border-purple-500/30 rounded-xl p-6 mb-8">
          <h2 class="text-2xl font-semibold text-white mb-4">Pricing</h2>
          <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div class="bg-slate-800 rounded-lg p-4 text-center">
              <h3 class="font-semibold text-white mb-2">Basic</h3>
              <p class="text-2xl font-bold text-purple-400 mb-2">$599/mo</p>
              <p class="text-sm text-slate-400">Getting started plan</p>
            </div>
            <div class="bg-slate-800 rounded-lg p-4 text-center border-2 border-purple-500">
              <h3 class="font-semibold text-white mb-2">Pro</h3>
              <p class="text-2xl font-bold text-purple-400 mb-2">$1,799/mo</p>
              <p class="text-sm text-slate-400">Most popular</p>
            </div>
            <div class="bg-slate-800 rounded-lg p-4 text-center">
              <h3 class="font-semibold text-white mb-2">Enterprise</h3>
              <p class="text-2xl font-bold text-purple-400 mb-2">$5,999/mo</p>
              <p class="text-sm text-slate-400">Full-featured solution</p>
            </div>
          </div>
        </div>
        
        <div class="bg-slate-900/60 border border-slate-700/50 rounded-xl p-6 mb-8">
          <h2 class="text-2xl font-semibold text-white mb-4">Related Services</h2>
          <div class="grid md:grid-cols-2 gap-4">
            
              <div>
                <a href="/services/ai-bank-fraud-investigator/" class="text-purple-300 hover:text-purple-200 font-medium">AI Bank Fraud Investigation Platform</a>
                <p class="text-slate-400 text-sm mt-1">Automate fraud investigation workstreams: transaction link analysis, entity resolution, SAR filing automation, and regul...</p>
              </div>
            
            
              <div>
                <a href="/services/ai-child-online-safety/" class="text-purple-300 hover:text-purple-200 font-medium">AI Child Online Safety & Parental Control Platform</a>
                <p class="text-slate-400 text-sm mt-1">Protect children online: content filtering, cyberbullying detection, screen time management, location tracking, and app ...</p>
              </div>
            
            
              <div>
                <a href="/services/ai-code-compliance-auditor/" class="text-purple-300 hover:text-purple-200 font-medium">AI Code Compliance & License Auditor</a>
                <p class="text-slate-400 text-sm mt-1">Scan codebases for license compliance, security vulnerabilities, and quality issues. Supports 50+ languages, 200+ licens...</p>
              </div>
            
            
              <div>
                <a href="/services/ai-cyber-threat-intelligence/" class="text-purple-300 hover:text-purple-200 font-medium">AI Cyber Threat Intelligence Platform</a>
                <p class="text-slate-400 text-sm mt-1">AI-powered threat intelligence platform that aggregates, analyzes, and contextualizes threat data from 100+ sources. Pro...</p>
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
