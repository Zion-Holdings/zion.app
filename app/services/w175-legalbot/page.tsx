import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: `LegalBot — AI Legal Q&A Assistant | Zion Tech Group`,
  description: `AI legal assistant for common legal questions: employment law, IP basics, contract review, and regulatory queries. Not legal advice, but legal information at scale.`,
  keywords: 'Employment law Q&A (wage, leave, termination), IP basics (trademark, copyright, patent), Contract clause explanation and risk flags, Regulatory requirement lookup, Jurisdiction-aware responses, Disclaimer and liability management, Escalation to human attorney workflow, micro-saas, Legal, Zion Tech Group',
  alternates: {
    canonical: `https://ziontechgroup.com/services/w175-legalbot/`,
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
        
        <h1 className="text-4xl font-bold mb-6 text-white">LegalBot — AI Legal Q&amp;A Assistant</h1>
        <p className="text-lg text-slate-300 mb-8">AI legal assistant for common legal questions: employment law, IP basics, contract review, and regulatory queries. Not legal advice, but legal information at scale.</p>
        
        <div class="bg-slate-900 rounded-xl p-6 mb-8">
          <div class="flex flex-wrap gap-2 mb-4">
            <span class="text-xs px-3 py-1 bg-purple-900/30 rounded-full text-purple-300">micro-saas</span>
            <span class="text-xs px-3 py-1 bg-blue-900/30 rounded-full text-blue-300">Legal</span>
          </div>
          <h2 class="text-2xl font-semibold mb-4 text-white">Key Features</h2>
          <ul class="list-disc list-inside space-y-2">
        <li class="text-slate-300">Employment law Q&amp;A (wage, leave, termination)</li>
        <li class="text-slate-300">IP basics (trademark, copyright, patent)</li>
        <li class="text-slate-300">Contract clause explanation and risk flags</li>
        <li class="text-slate-300">Regulatory requirement lookup</li>
        <li class="text-slate-300">Jurisdiction-aware responses</li>
        <li class="text-slate-300">Disclaimer and liability management</li>
        <li class="text-slate-300">Escalation to human attorney workflow</li>
      </ul>
        </div>
        
        <div class="bg-slate-900 rounded-xl p-6 mb-8">
          <h2 class="text-2xl font-semibold mb-4 text-white">Benefits</h2>
          <ul class="list-disc list-inside space-y-2">
        <li class="text-slate-300">Get legal information in seconds, not days</li>
        <li class="text-slate-300">Reduce routine attorney inquiries by 70%</li>
        <li class="text-slate-300">Jurisdiction-aware for multi-state ops</li>
        <li class="text-slate-300">Escalation to attorney for real advice</li>
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
              <p class="text-2xl font-bold text-purple-400 mb-2">$299/mo</p>
              <p class="text-sm text-slate-400">Most popular</p>
            </div>
            <div class="bg-slate-800 rounded-lg p-4 text-center">
              <h3 class="font-semibold text-white mb-2">Enterprise</h3>
              <p class="text-2xl font-bold text-purple-400 mb-2">$999/mo</p>
              <p class="text-sm text-slate-400">Full-featured solution</p>
            </div>
          </div>
        </div>
        
        <div class="bg-slate-900/60 border border-slate-700/50 rounded-xl p-6 mb-8">
          <h2 class="text-2xl font-semibold text-white mb-4">Related Services</h2>
          <div class="grid md:grid-cols-2 gap-4">
            
              <div>
                <a href="/services/ai-contract-lifecycle/" class="text-purple-300 hover:text-purple-200 font-medium">AI Contract Lifecycle Management</a>
                <p class="text-slate-400 text-sm mt-1">End-to-end contract management with AI drafting, review, approval workflows, and risk analysis....</p>
              </div>
            
            
              <div>
                <a href="/services/ai-contract-risk-analyzer/" class="text-purple-300 hover:text-purple-200 font-medium">AI Contract Risk Analyzer</a>
                <p class="text-slate-400 text-sm mt-1">Analyze contract risk with AI. Identify unfavorable clauses, missing provisions, and compliance gaps. Compare against in...</p>
              </div>
            
            
              <div>
                <a href="/services/ai-document-generation/" class="text-purple-300 hover:text-purple-200 font-medium">AI Document Generation Platform</a>
                <p class="text-slate-400 text-sm mt-1">Auto-generate contracts, proposals, reports, and emails from templates and data. Conditional logic, data merging, e-sign...</p>
              </div>
            
            
              <div>
                <a href="/services/ai-intellectual-property-management/" class="text-purple-300 hover:text-purple-200 font-medium">AI Intellectual Property Management</a>
                <p class="text-slate-400 text-sm mt-1">AI-powered IP management for patents, trademarks, and copyrights. Prior art search, infringement detection, portfolio an...</p>
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
