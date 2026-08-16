import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: `Identity Governance & Administration (IGA) | Zion Tech Group`,
  description: `Automated identity lifecycle management, access governance, and compliance. AI-powered access reviews and anomaly detection for identity threats.`,
  keywords: 'Automated provisioning/deprovisioning, Access certification campaigns, Role-based access control (RBAC), AI access anomaly detection, Segregation of duties (SoD), Compliance reporting, Privileged access management, Multi-cloud identity federation, it-services, cybersecurity, Zion Tech Group',
  alternates: {
    canonical: `https://ziontechgroup.com/services/w130-it-identity/`,
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
        <p className="text-lg text-slate-300 mb-8">Automated identity lifecycle management, access governance, and compliance. AI-powered access reviews and anomaly detection for identity threats.</p>
        
        <div class="bg-slate-900 rounded-xl p-6 mb-8">
          <div class="flex flex-wrap gap-2 mb-4">
            <span class="text-xs px-3 py-1 bg-purple-900/30 rounded-full text-purple-300">it-services</span>
            <span class="text-xs px-3 py-1 bg-blue-900/30 rounded-full text-blue-300">cybersecurity</span>
          </div>
          <h2 class="text-2xl font-semibold mb-4 text-white">Key Features</h2>
          <ul class="list-disc list-inside space-y-2">
        <li class="text-slate-300">Automated provisioning/deprovisioning</li>
        <li class="text-slate-300">Access certification campaigns</li>
        <li class="text-slate-300">Role-based access control (RBAC)</li>
        <li class="text-slate-300">AI access anomaly detection</li>
        <li class="text-slate-300">Segregation of duties (SoD)</li>
        <li class="text-slate-300">Compliance reporting</li>
        <li class="text-slate-300">Privileged access management</li>
        <li class="text-slate-300">Multi-cloud identity federation</li>
      </ul>
        </div>
        
        <div class="bg-slate-900 rounded-xl p-6 mb-8">
          <h2 class="text-2xl font-semibold mb-4 text-white">Benefits</h2>
          <ul class="list-disc list-inside space-y-2">
        <li class="text-slate-300">95% faster provisioning</li>
        <li class="text-slate-300">Continuous compliance</li>
        <li class="text-slate-300">Reduce insider threat risk</li>
        <li class="text-slate-300">Automated access reviews</li>
        <li class="text-slate-300">Zero standing privileges</li>
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
              <p class="text-2xl font-bold text-purple-400 mb-2">12997</p>
              <p class="text-sm text-slate-400">Most popular</p>
            </div>
            <div class="bg-slate-800 rounded-lg p-4 text-center">
              <h3 class="font-semibold text-white mb-2">Enterprise</h3>
              <p class="text-2xl font-bold text-purple-400 mb-2">29997</p>
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
