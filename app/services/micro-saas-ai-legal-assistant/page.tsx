import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: `Micro-SaaS AI Legal Assistant for SMBs | Zion Tech Group`,
  description: `AI legal assistant that drafts contracts, reviews NDAs, generates privacy policies, and answers legal questions. Not a replacement for lawyers — a force multiplier for small businesses.`,
  keywords: 'Contract drafting from templates + AI customization, NDA review with risk flagging and redlines, Privacy policy and terms of service generator, Legal Q&A chatbot trained on US business law, Document comparison (original vs modified), E-signature integration with audit trail, micro-saas, legal-tech, Zion Tech Group',
  alternates: {
    canonical: `https://ziontechgroup.com/services/micro-saas-ai-legal-assistant/`,
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
        
        <h1 className="text-4xl font-bold mb-6 text-white">Micro-SaaS AI Legal Assistant for SMBs</h1>
        <p className="text-lg text-slate-300 mb-8">AI legal assistant that drafts contracts, reviews NDAs, generates privacy policies, and answers legal questions. Not a replacement for lawyers — a force multiplier for small businesses.</p>
        
        <div class="bg-slate-900 rounded-xl p-6 mb-8">
          <div class="flex flex-wrap gap-2 mb-4">
            <span class="text-xs px-3 py-1 bg-purple-900/30 rounded-full text-purple-300">micro-saas</span>
            <span class="text-xs px-3 py-1 bg-blue-900/30 rounded-full text-blue-300">legal-tech</span>
          </div>
          <h2 class="text-2xl font-semibold mb-4 text-white">Key Features</h2>
          <ul class="list-disc list-inside space-y-2">
        <li class="text-slate-300">Contract drafting from templates + AI customization</li>
        <li class="text-slate-300">NDA review with risk flagging and redlines</li>
        <li class="text-slate-300">Privacy policy and terms of service generator</li>
        <li class="text-slate-300">Legal Q&amp;A chatbot trained on US business law</li>
        <li class="text-slate-300">Document comparison (original vs modified)</li>
        <li class="text-slate-300">E-signature integration with audit trail</li>
      </ul>
        </div>
        
        <div class="bg-slate-900 rounded-xl p-6 mb-8">
          <h2 class="text-2xl font-semibold mb-4 text-white">Benefits</h2>
          <ul class="list-disc list-inside space-y-2">
        <li class="text-slate-300">Save $10K+/year on routine legal work</li>
        <li class="text-slate-300">Draft contracts in minutes not days</li>
        <li class="text-slate-300">Catch risky clauses before signing</li>
        <li class="text-slate-300">Always up-to-date with current regulations</li>
      </ul>
        </div>
        
        
        <div class="border border-purple-500/30 rounded-xl p-6 mb-8">
          <h2 class="text-2xl font-semibold text-white mb-4">Pricing</h2>
          <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div class="bg-slate-800 rounded-lg p-4 text-center">
              <h3 class="font-semibold text-white mb-2">Basic</h3>
              <p class="text-2xl font-bold text-purple-400 mb-2">$79/mo</p>
              <p class="text-sm text-slate-400">Getting started plan</p>
            </div>
            <div class="bg-slate-800 rounded-lg p-4 text-center border-2 border-purple-500">
              <h3 class="font-semibold text-white mb-2">Pro</h3>
              <p class="text-2xl font-bold text-purple-400 mb-2">$199/mo</p>
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
                <a href="/services/ai-legal-document-drafter/" class="text-purple-300 hover:text-purple-200 font-medium">AI Legal Document Drafting & Automation</a>
                <p class="text-slate-400 text-sm mt-1">AI-powered legal document drafting that generates contracts, NDAs, and legal letters from templates and natural language...</p>
              </div>
            
            
              <div>
                <a href="/services/ai-legal-research-assistant/" class="text-purple-300 hover:text-purple-200 font-medium">AI Legal Research & Case Analysis</a>
                <p class="text-slate-400 text-sm mt-1">AI legal research assistant that analyzes case law, statutes, and regulations in seconds. Generate legal memos, find rel...</p>
              </div>
            
            
              <div>
                <a href="/services/ai-powered-form-builder/" class="text-purple-300 hover:text-purple-200 font-medium">AI-Powered Form & Survey Builder</a>
                <p class="text-slate-400 text-sm mt-1">Create intelligent forms and surveys with AI that suggests questions, analyzes responses, and generates insights. Includ...</p>
              </div>
            
            
              <div>
                <a href="/services/ai-smart-contract-management/" class="text-purple-300 hover:text-purple-200 font-medium">AI Smart Contract Lifecycle Management</a>
                <p class="text-slate-400 text-sm mt-1">AI-powered contract management with automated drafting, clause extraction, risk analysis, and renewal tracking. Manage t...</p>
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
