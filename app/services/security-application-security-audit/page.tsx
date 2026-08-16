import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: `Application Security Audit | Zion Tech Group`,
  description: `In-depth application security assessment covering OWASP Top 10, API security, authentication flows, and data protection.`,
  keywords: 'OWASP Top 10 Analysis, API Security Testing, Manual Pentest, Automated Scanning, Remediation Roadmap, Security, Cybersecurity, Zion Tech Group',
  alternates: {
    canonical: `https://ziontechgroup.com/services/security-application-security-audit/`,
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
        
        <h1 className="text-4xl font-bold mb-6 text-white">Application Security Audit</h1>
        <p className="text-lg text-slate-300 mb-8">In-depth application security assessment covering OWASP Top 10, API security, authentication flows, and data protection.</p>
        
        <div class="bg-slate-900 rounded-xl p-6 mb-8">
          <div class="flex flex-wrap gap-2 mb-4">
            <span class="text-xs px-3 py-1 bg-purple-900/30 rounded-full text-purple-300">Security</span>
            <span class="text-xs px-3 py-1 bg-blue-900/30 rounded-full text-blue-300">Cybersecurity</span>
          </div>
          <h2 class="text-2xl font-semibold mb-4 text-white">Key Features</h2>
          <ul class="list-disc list-inside space-y-2">
        <li class="text-slate-300">OWASP Top 10 Analysis</li>
        <li class="text-slate-300">API Security Testing</li>
        <li class="text-slate-300">Manual Pentest</li>
        <li class="text-slate-300">Automated Scanning</li>
        <li class="text-slate-300">Remediation Roadmap</li>
      </ul>
        </div>
        
        <div class="bg-slate-900 rounded-xl p-6 mb-8">
          <h2 class="text-2xl font-semibold mb-4 text-white">Benefits</h2>
          <ul class="list-disc list-inside space-y-2">
        <li class="text-slate-300">Identify vulnerabilities</li>
        <li class="text-slate-300">Protect customer data</li>
        <li class="text-slate-300">Achieve compliance</li>
      </ul>
        </div>
        
        
        <div class="border border-purple-500/30 rounded-xl p-6 mb-8">
          <h2 class="text-2xl font-semibold text-white mb-4">Pricing</h2>
          <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div class="bg-slate-800 rounded-lg p-4 text-center">
              <h3 class="font-semibold text-white mb-2">Basic</h3>
              <p class="text-2xl font-bold text-purple-400 mb-2">$3,000/project</p>
              <p class="text-sm text-slate-400">Getting started plan</p>
            </div>
            <div class="bg-slate-800 rounded-lg p-4 text-center border-2 border-purple-500">
              <h3 class="font-semibold text-white mb-2">Pro</h3>
              <p class="text-2xl font-bold text-purple-400 mb-2">$8,000/project</p>
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
                <a href="/services/ai-cybersecurity-operations/" class="text-purple-300 hover:text-purple-200 font-medium">AI Cybersecurity Operations Center</a>
                <p class="text-slate-400 text-sm mt-1">AI-powered SOC that automates threat detection, investigation, and response. Reduce alert fatigue by 90% and mean time t...</p>
              </div>
            
            
              <div>
                <a href="/services/ai-cybersecurity-threat-hunting/" class="text-purple-300 hover:text-purple-200 font-medium">AI Cybersecurity Threat Hunting Platform</a>
                <p class="text-slate-400 text-sm mt-1">Proactively hunt for advanced threats using AI-driven behavioral analytics, anomaly detection, and automated investigati...</p>
              </div>
            
            
              <div>
                <a href="/services/ai-deepfake-detection-enterprise/" class="text-purple-300 hover:text-purple-200 font-medium">AI Deepfake Detection Enterprise</a>
                <p class="text-slate-400 text-sm mt-1">Enterprise-grade deepfake detection for images, video, and audio. Real-time API for content moderation, identity verific...</p>
              </div>
            
            
              <div>
                <a href="/services/ai-synthetic-media-detection/" class="text-purple-300 hover:text-purple-200 font-medium">AI Synthetic Media Detection Suite</a>
                <p class="text-slate-400 text-sm mt-1">Detect AI-generated text, images, video, and audio. Protect against deepfakes, AI-written content fraud, and synthetic i...</p>
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
