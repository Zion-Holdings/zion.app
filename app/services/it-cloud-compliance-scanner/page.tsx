import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: `IT Cloud Compliance Scanner | Zion Tech Group`,
  description: `Continuous cloud infrastructure compliance scanning for AWS, Azure, and GCP against CIS, NIST, HIPAA, and PCI-DSS benchmarks.`,
  keywords: 'CIS and NIST benchmark library, Multi-cloud account scanning, NIST 800-53 and HIPAA profiles, Continuous daily compliance scans, Auto-generated remediation tickets, it, Healthcare, Zion Tech Group',
  alternates: {
    canonical: `https://ziontechgroup.com/services/it-cloud-compliance-scanner/`,
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
        
        <h1 className="text-4xl font-bold mb-6 text-white">IT Cloud Compliance Scanner</h1>
        <p className="text-lg text-slate-300 mb-8">Continuous cloud infrastructure compliance scanning for AWS, Azure, and GCP against CIS, NIST, HIPAA, and PCI-DSS benchmarks.</p>
        
        <div class="bg-slate-900 rounded-xl p-6 mb-8">
          <div class="flex flex-wrap gap-2 mb-4">
            <span class="text-xs px-3 py-1 bg-purple-900/30 rounded-full text-purple-300">it</span>
            <span class="text-xs px-3 py-1 bg-blue-900/30 rounded-full text-blue-300">Healthcare</span>
          </div>
          <h2 class="text-2xl font-semibold mb-4 text-white">Key Features</h2>
          <ul class="list-disc list-inside space-y-2">
        <li class="text-slate-300">CIS and NIST benchmark library</li>
        <li class="text-slate-300">Multi-cloud account scanning</li>
        <li class="text-slate-300">NIST 800-53 and HIPAA profiles</li>
        <li class="text-slate-300">Continuous daily compliance scans</li>
        <li class="text-slate-300">Auto-generated remediation tickets</li>
      </ul>
        </div>
        
        <div class="bg-slate-900 rounded-xl p-6 mb-8">
          <h2 class="text-2xl font-semibold mb-4 text-white">Benefits</h2>
          <ul class="list-disc list-inside space-y-2">
        <li class="text-slate-300">Reduce costs with it cloud compliance scanner</li>
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
                <a href="/services/accessibility-compliance/" class="text-purple-300 hover:text-purple-200 font-medium">Accessibility & WCAG Compliance</a>
                <p class="text-slate-400 text-sm mt-1">Automated WCAG 2.2 auditing, AI-powered remediation suggestions, screen reader simulation, and continuous accessibility ...</p>
              </div>
            
            
              <div>
                <a href="/services/ai-chronic-disease-tracker/" class="text-purple-300 hover:text-purple-200 font-medium">AI Chronic Disease Progression Tracker</a>
                <p class="text-slate-400 text-sm mt-1">Longitudinal patient analytics: track chronic disease progression across EHR data, lab results, and wearables. AI identi...</p>
              </div>
            
            
              <div>
                <a href="/services/ai-clinical-trial-design-optimizer/" class="text-purple-300 hover:text-purple-200 font-medium">AI Clinical Trial Design & Protocol Optimizer</a>
                <p class="text-slate-400 text-sm mt-1">Optimize clinical trial protocols: patient recruitment prediction, site selection, endpoint analysis, and regulatory sub...</p>
              </div>
            
            
              <div>
                <a href="/services/ai-cold-chain-monitor/" class="text-purple-300 hover:text-purple-200 font-medium">AI Cold Chain Monitoring for Pharmaceuticals</a>
                <p class="text-slate-400 text-sm mt-1">IoT + AI for pharma cold chain: real-time temperature monitoring, excursion prediction, compliance reporting (GDP/FDA), ...</p>
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
