import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: `Network Detection & Response (NDR) | Zion Tech Group`,
  description: `Network-level threat detection: traffic analysis, lateral movement detection, encrypted traffic inspection, and beacon detection. See what EDR misses.`,
  keywords: 'Full network traffic analysis, Lateral movement and C2 detection, Encrypted traffic inspection (JA3/JA3S), Beacon and exfiltration pattern detection, Network forensics and PCAP storage, SOAR integration for automated response, Integration with Zeek, Suricata, Darktrace, security, Cybersecurity, Zion Tech Group',
  alternates: {
    canonical: `https://ziontechgroup.com/services/w176-network-detection/`,
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
        
        <h1 className="text-4xl font-bold mb-6 text-white">Network Detection &amp; Response (NDR)</h1>
        <p className="text-lg text-slate-300 mb-8">Network-level threat detection: traffic analysis, lateral movement detection, encrypted traffic inspection, and beacon detection. See what EDR misses.</p>
        
        <div class="bg-slate-900 rounded-xl p-6 mb-8">
          <div class="flex flex-wrap gap-2 mb-4">
            <span class="text-xs px-3 py-1 bg-purple-900/30 rounded-full text-purple-300">security</span>
            <span class="text-xs px-3 py-1 bg-blue-900/30 rounded-full text-blue-300">Cybersecurity</span>
          </div>
          <h2 class="text-2xl font-semibold mb-4 text-white">Key Features</h2>
          <ul class="list-disc list-inside space-y-2">
        <li class="text-slate-300">Full network traffic analysis</li>
        <li class="text-slate-300">Lateral movement and C2 detection</li>
        <li class="text-slate-300">Encrypted traffic inspection (JA3/JA3S)</li>
        <li class="text-slate-300">Beacon and exfiltration pattern detection</li>
        <li class="text-slate-300">Network forensics and PCAP storage</li>
        <li class="text-slate-300">SOAR integration for automated response</li>
        <li class="text-slate-300">Integration with Zeek, Suricata, Darktrace</li>
      </ul>
        </div>
        
        <div class="bg-slate-900 rounded-xl p-6 mb-8">
          <h2 class="text-2xl font-semibold mb-4 text-white">Benefits</h2>
          <ul class="list-disc list-inside space-y-2">
        <li class="text-slate-300">Detect threats EDR and SIEM miss</li>
        <li class="text-slate-300">See lateral movement across the network</li>
        <li class="text-slate-300">Encrypted traffic inspection without MITM</li>
        <li class="text-slate-300">Forensics data for incident investigation</li>
      </ul>
        </div>
        
        
        <div class="border border-purple-500/30 rounded-xl p-6 mb-8">
          <h2 class="text-2xl font-semibold text-white mb-4">Pricing</h2>
          <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div class="bg-slate-800 rounded-lg p-4 text-center">
              <h3 class="font-semibold text-white mb-2">Basic</h3>
              <p class="text-2xl font-bold text-purple-400 mb-2">$799/mo</p>
              <p class="text-sm text-slate-400">Getting started plan</p>
            </div>
            <div class="bg-slate-800 rounded-lg p-4 text-center border-2 border-purple-500">
              <h3 class="font-semibold text-white mb-2">Pro</h3>
              <p class="text-2xl font-bold text-purple-400 mb-2">$2,499/mo</p>
              <p class="text-sm text-slate-400">Most popular</p>
            </div>
            <div class="bg-slate-800 rounded-lg p-4 text-center">
              <h3 class="font-semibold text-white mb-2">Enterprise</h3>
              <p class="text-2xl font-bold text-purple-400 mb-2">$7,999/mo</p>
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
