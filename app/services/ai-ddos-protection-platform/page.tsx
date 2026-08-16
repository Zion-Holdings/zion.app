import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: `AI DDoS Protection & Mitigation Platform | Zion Tech Group`,
  description: `Edge-based DDoS mitigation tuned by ML: absorbs multi-Tbps volumetric attacks, distinguishes legitimate traffic spikes from attacks, and auto-scales scrubbing capacity — all with sub-millisecond routing overhead.`,
  keywords: 'Multi-Tbps scrubbing capacity (anycast edge), ML traffic classification (attack vs legitimate), HTTP/3 + QUIC + TCP SYN flood protection, Auto-scaling scrubbing clusters, Attack forensics + IoC export to SIEM, security, General, Zion Tech Group',
  alternates: {
    canonical: `https://ziontechgroup.com/services/ai-ddos-protection-platform/`,
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
        
        <h1 className="text-4xl font-bold mb-6 text-white">AI DDoS Protection &amp; Mitigation Platform</h1>
        <p className="text-lg text-slate-300 mb-8">Edge-based DDoS mitigation tuned by ML: absorbs multi-Tbps volumetric attacks, distinguishes legitimate traffic spikes from attacks, and auto-scales scrubbing capacity — all with sub-millisecond routing overhead.</p>
        
        <div class="bg-slate-900 rounded-xl p-6 mb-8">
          <div class="flex flex-wrap gap-2 mb-4">
            <span class="text-xs px-3 py-1 bg-purple-900/30 rounded-full text-purple-300">security</span>
            <span class="text-xs px-3 py-1 bg-blue-900/30 rounded-full text-blue-300">General</span>
          </div>
          <h2 class="text-2xl font-semibold mb-4 text-white">Key Features</h2>
          <ul class="list-disc list-inside space-y-2">
        <li class="text-slate-300">Multi-Tbps scrubbing capacity (anycast edge)</li>
        <li class="text-slate-300">ML traffic classification (attack vs legitimate)</li>
        <li class="text-slate-300">HTTP/3 + QUIC + TCP SYN flood protection</li>
        <li class="text-slate-300">Auto-scaling scrubbing clusters</li>
        <li class="text-slate-300">Attack forensics + IoC export to SIEM</li>
      </ul>
        </div>
        
        <div class="bg-slate-900 rounded-xl p-6 mb-8">
          <h2 class="text-2xl font-semibold mb-4 text-white">Benefits</h2>
          <ul class="list-disc list-inside space-y-2">
        <li class="text-slate-300">Reduce costs with ai ddos protection &amp; mitigation platform</li>
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
              <p class="text-2xl font-bold text-purple-400 mb-2">$99/mo</p>
              <p class="text-sm text-slate-400">Getting started plan</p>
            </div>
            <div class="bg-slate-800 rounded-lg p-4 text-center border-2 border-purple-500">
              <h3 class="font-semibold text-white mb-2">Pro</h3>
              <p class="text-2xl font-bold text-purple-400 mb-2">$349/mo</p>
              <p class="text-sm text-slate-400">Most popular</p>
            </div>
            <div class="bg-slate-800 rounded-lg p-4 text-center">
              <h3 class="font-semibold text-white mb-2">Enterprise</h3>
              <p class="text-2xl font-bold text-purple-400 mb-2">$1,299/mo</p>
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
                <a href="/services/agentic-workflow-orchestrator/" class="text-purple-300 hover:text-purple-200 font-medium">Agentic Workflow Orchestrator</a>
                <p class="text-slate-400 text-sm mt-1">Orchestrate multi-agent AI workflows: DAG of agents with routing, handoff, conditional branches, state persistence, retr...</p>
              </div>
            
            
              <div>
                <a href="/services/ai-accessibility-auditor/" class="text-purple-300 hover:text-purple-200 font-medium">AI Accessibility Auditor</a>
                <p class="text-slate-400 text-sm mt-1">Automated WCAG 2.1 AA compliance scans for websites & apps with screen-reader simulation, color contrast testing, and ke...</p>
              </div>
            
            
              <div>
                <a href="/services/ai-agent-safety-evaluation/" class="text-purple-300 hover:text-purple-200 font-medium">Ai Agent Safety Evaluation</a>
                <p class="text-slate-400 text-sm mt-1">Ai Agent Safety Evaluation — comprehensive managed service with expert support and proven delivery methodology....</p>
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
