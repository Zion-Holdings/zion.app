import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: `EVM Smart Contract Audit | Zion Tech Group`,
  description: `Comprehensive audit: static analysis (Slither), manual line-by-line review, fuzz testing (Foundry), formal verification for critical invariants, post-audit re-audit.`,
  keywords: 'Static analysis + re-entrancy + overflow checks, Manual line-by-line expert review, Fuzz + invariant testing (Foundry), Formal verification for critical invariants, Post-fix re-audit within 72 hours, it, E-Commerce, Zion Tech Group',
  alternates: {
    canonical: `https://ziontechgroup.com/services/evm-smart-contract-audit/`,
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
        
        <h1 className="text-4xl font-bold mb-6 text-white">EVM Smart Contract Audit</h1>
        <p className="text-lg text-slate-300 mb-8">Comprehensive audit: static analysis (Slither), manual line-by-line review, fuzz testing (Foundry), formal verification for critical invariants, post-audit re-audit.</p>
        
        <div class="bg-slate-900 rounded-xl p-6 mb-8">
          <div class="flex flex-wrap gap-2 mb-4">
            <span class="text-xs px-3 py-1 bg-purple-900/30 rounded-full text-purple-300">it</span>
            <span class="text-xs px-3 py-1 bg-blue-900/30 rounded-full text-blue-300">E-Commerce</span>
          </div>
          <h2 class="text-2xl font-semibold mb-4 text-white">Key Features</h2>
          <ul class="list-disc list-inside space-y-2">
        <li class="text-slate-300">Static analysis + re-entrancy + overflow checks</li>
        <li class="text-slate-300">Manual line-by-line expert review</li>
        <li class="text-slate-300">Fuzz + invariant testing (Foundry)</li>
        <li class="text-slate-300">Formal verification for critical invariants</li>
        <li class="text-slate-300">Post-fix re-audit within 72 hours</li>
      </ul>
        </div>
        
        <div class="bg-slate-900 rounded-xl p-6 mb-8">
          <h2 class="text-2xl font-semibold mb-4 text-white">Benefits</h2>
          <ul class="list-disc list-inside space-y-2">
        <li class="text-slate-300">Reduce costs with evm smart contract audit</li>
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
                <a href="/services/ai-aiops-anomaly-detection/" class="text-purple-300 hover:text-purple-200 font-medium">AI-AIOps Anomaly Detection</a>
                <p class="text-slate-400 text-sm mt-1">Detects infrastructure anomalies (CPU, memory, error rates) before they cause outages using unsupervised learning and se...</p>
              </div>
            
            
              <div>
                <a href="/services/ai-codebase-doc-generator/" class="text-purple-300 hover:text-purple-200 font-medium">AI Codebase Documentation Generator</a>
                <p class="text-slate-400 text-sm mt-1">Automatically generates architecture diagrams, API docs, and README files by analyzing your Git repository and code depe...</p>
              </div>
            
            
              <div>
                <a href="/services/ai-content-generation/" class="text-purple-300 hover:text-purple-200 font-medium">AI Content Generation</a>
                <p class="text-slate-400 text-sm mt-1">Generate high-quality blog posts, social media content, ad copy, product descriptions, and email campaigns powered by ad...</p>
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
