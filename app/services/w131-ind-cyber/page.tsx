import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: `Cybersecurity Operations Center (SOC) | Zion Tech Group`,
  description: `AI-powered 24/7 security operations center. Threat detection, incident response, vulnerability management, and compliance monitoring with human-in-the-loop.`,
  keywords: '24/7 threat monitoring, AI threat detection, Incident response, Vulnerability management, SIEM/SOAR integration, Compliance monitoring, Threat intelligence, Digital forensics, cybersecurity, cybersecurity, Zion Tech Group',
  alternates: {
    canonical: `https://ziontechgroup.com/services/w131-ind-cyber/`,
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
        
        <h1 className="text-4xl font-bold mb-6 text-white">Cybersecurity Operations Center (SOC)</h1>
        <p className="text-lg text-slate-300 mb-8">AI-powered 24/7 security operations center. Threat detection, incident response, vulnerability management, and compliance monitoring with human-in-the-loop.</p>
        
        <div class="bg-slate-900 rounded-xl p-6 mb-8">
          <div class="flex flex-wrap gap-2 mb-4">
            <span class="text-xs px-3 py-1 bg-purple-900/30 rounded-full text-purple-300">cybersecurity</span>
            <span class="text-xs px-3 py-1 bg-blue-900/30 rounded-full text-blue-300">cybersecurity</span>
          </div>
          <h2 class="text-2xl font-semibold mb-4 text-white">Key Features</h2>
          <ul class="list-disc list-inside space-y-2">
        <li class="text-slate-300">24/7 threat monitoring</li>
        <li class="text-slate-300">AI threat detection</li>
        <li class="text-slate-300">Incident response</li>
        <li class="text-slate-300">Vulnerability management</li>
        <li class="text-slate-300">SIEM/SOAR integration</li>
        <li class="text-slate-300">Compliance monitoring</li>
        <li class="text-slate-300">Threat intelligence</li>
        <li class="text-slate-300">Digital forensics</li>
      </ul>
        </div>
        
        <div class="bg-slate-900 rounded-xl p-6 mb-8">
          <h2 class="text-2xl font-semibold mb-4 text-white">Benefits</h2>
          <ul class="list-disc list-inside space-y-2">
        <li class="text-slate-300">75% faster threat detection</li>
        <li class="text-slate-300">24/7 expert monitoring</li>
        <li class="text-slate-300">Automated incident response</li>
        <li class="text-slate-300">Compliance-ready</li>
        <li class="text-slate-300">Reduce breach risk by 85%</li>
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
              <p class="text-2xl font-bold text-purple-400 mb-2">24997</p>
              <p class="text-sm text-slate-400">Most popular</p>
            </div>
            <div class="bg-slate-800 rounded-lg p-4 text-center">
              <h3 class="font-semibold text-white mb-2">Enterprise</h3>
              <p class="text-2xl font-bold text-purple-400 mb-2">59997</p>
              <p class="text-sm text-slate-400">Full-featured solution</p>
            </div>
          </div>
        </div>
        
        <div class="bg-slate-900/60 border border-slate-700/50 rounded-xl p-6 mb-8">
          <h2 class="text-2xl font-semibold text-white mb-4">Related Services</h2>
          <div class="grid md:grid-cols-2 gap-4">
            
              <div>
                <a href="/services/cybersecurity-security-awareness-training/" class="text-purple-300 hover:text-purple-200 font-medium">AI Security Awareness Training Platform</a>
                <p class="text-slate-400 text-sm mt-1">AI-powered cybersecurity awareness training with personalized learning paths, phishing simulations, and behavior analyti...</p>
              </div>
            
            
              <div>
                <a href="/services/cybersecurity-threat-intelligence-platform/" class="text-purple-300 hover:text-purple-200 font-medium">Cybersecurity Threat Intelligence Platform</a>
                <p class="text-slate-400 text-sm mt-1">Real-time threat intelligence aggregation, analysis, and response. Monitor dark web, IOC feeds, and attack surface with ...</p>
              </div>
            
            
              <div>
                <a href="/services/cybersecurity-zero-trust-architecture/" class="text-purple-300 hover:text-purple-200 font-medium">Zero Trust Architecture Implementation</a>
                <p class="text-slate-400 text-sm mt-1">End-to-end zero trust architecture design and implementation. Identity verification, micro-segmentation, continuous moni...</p>
              </div>
            
            
              <div>
                <a href="/services/w128-dlp/" class="text-purple-300 hover:text-purple-200 font-medium">Data Loss Prevention (DLP)</a>
                <p class="text-slate-400 text-sm mt-1">Comprehensive DLP across endpoints, cloud, email, and network. AI-powered classification and policy enforcement....</p>
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
