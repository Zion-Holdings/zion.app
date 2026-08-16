import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: `Disaster Recovery as a Service (DRaaS) | Zion Tech Group`,
  description: `Cloud-based disaster recovery with automated failover, continuous replication, and sub-minute RTO. Protects against ransomware, outages, and natural disasters.`,
  keywords: 'Continuous data replication, Automated failover, Sub-minute RTO, Ransomware protection, Multi-cloud DR, Automated testing, Runbook automation, Compliance reporting, it-services, cloud-services, Zion Tech Group',
  alternates: {
    canonical: `https://ziontechgroup.com/services/w130-it-dr/`,
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
        
        <h1 className="text-4xl font-bold mb-6 text-white">Disaster Recovery as a Service (DRaaS)</h1>
        <p className="text-lg text-slate-300 mb-8">Cloud-based disaster recovery with automated failover, continuous replication, and sub-minute RTO. Protects against ransomware, outages, and natural disasters.</p>
        
        <div class="bg-slate-900 rounded-xl p-6 mb-8">
          <div class="flex flex-wrap gap-2 mb-4">
            <span class="text-xs px-3 py-1 bg-purple-900/30 rounded-full text-purple-300">it-services</span>
            <span class="text-xs px-3 py-1 bg-blue-900/30 rounded-full text-blue-300">cloud-services</span>
          </div>
          <h2 class="text-2xl font-semibold mb-4 text-white">Key Features</h2>
          <ul class="list-disc list-inside space-y-2">
        <li class="text-slate-300">Continuous data replication</li>
        <li class="text-slate-300">Automated failover</li>
        <li class="text-slate-300">Sub-minute RTO</li>
        <li class="text-slate-300">Ransomware protection</li>
        <li class="text-slate-300">Multi-cloud DR</li>
        <li class="text-slate-300">Automated testing</li>
        <li class="text-slate-300">Runbook automation</li>
        <li class="text-slate-300">Compliance reporting</li>
      </ul>
        </div>
        
        <div class="bg-slate-900 rounded-xl p-6 mb-8">
          <h2 class="text-2xl font-semibold mb-4 text-white">Benefits</h2>
          <ul class="list-disc list-inside space-y-2">
        <li class="text-slate-300">Sub-minute recovery</li>
        <li class="text-slate-300">Ransomware resilience</li>
        <li class="text-slate-300">Automated testing</li>
        <li class="text-slate-300">Multi-cloud protection</li>
        <li class="text-slate-300">Compliance-ready</li>
      </ul>
        </div>
        
        
        <div class="border border-purple-500/30 rounded-xl p-6 mb-8">
          <h2 class="text-2xl font-semibold text-white mb-4">Pricing</h2>
          <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div class="bg-slate-800 rounded-lg p-4 text-center">
              <h3 class="font-semibold text-white mb-2">Basic</h3>
              <p class="text-2xl font-bold text-purple-400 mb-2">Custom</p>
              <p class="text-sm text-slate-400">Getting started plan</p>
            </div>
            <div class="bg-slate-800 rounded-lg p-4 text-center border-2 border-purple-500">
              <h3 class="font-semibold text-white mb-2">Pro</h3>
              <p class="text-2xl font-bold text-purple-400 mb-2">9997</p>
              <p class="text-sm text-slate-400">Most popular</p>
            </div>
            <div class="bg-slate-800 rounded-lg p-4 text-center">
              <h3 class="font-semibold text-white mb-2">Enterprise</h3>
              <p class="text-2xl font-bold text-purple-400 mb-2">24997</p>
              <p class="text-sm text-slate-400">Full-featured solution</p>
            </div>
          </div>
        </div>
        
        <div class="bg-slate-900/60 border border-slate-700/50 rounded-xl p-6 mb-8">
          <h2 class="text-2xl font-semibold text-white mb-4">Related Services</h2>
          <div class="grid md:grid-cols-2 gap-4">
            
              <div>
                <a href="/services/it-services-asset-management/" class="text-purple-300 hover:text-purple-200 font-medium">IT Asset Management Platform</a>
                <p class="text-slate-400 text-sm mt-1">Comprehensive IT asset lifecycle management. Hardware and software tracking, license compliance, procurement workflows, ...</p>
              </div>
            
            
              <div>
                <a href="/services/it-services-saml-sso/" class="text-purple-300 hover:text-purple-200 font-medium">SAML/SSO Identity Provider</a>
                <p class="text-slate-400 text-sm mt-1">Enterprise Single Sign-On and identity management. SAML, OIDC, MFA, and directory integration for seamless access contro...</p>
              </div>
            
            
              <div>
                <a href="/services/w128-dlp/" class="text-purple-300 hover:text-purple-200 font-medium">Data Loss Prevention (DLP)</a>
                <p class="text-slate-400 text-sm mt-1">Comprehensive DLP across endpoints, cloud, email, and network. AI-powered classification and policy enforcement....</p>
              </div>
            
            
              <div>
                <a href="/services/w128-finops/" class="text-purple-300 hover:text-purple-200 font-medium">Cloud Cost Optimization Consulting</a>
                <p class="text-slate-400 text-sm mt-1">FinOps consulting to reduce cloud spend by 30-50%. Reserved instance management, rightsizing, and waste elimination....</p>
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
