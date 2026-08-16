import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: `TravelExpense — T and E Management | Zion Tech Group`,
  description: `Travel and expense management: booking, receipt capture, per diem calculation, policy enforcement.`,
  keywords: 'Travel booking with policy compliance, Receipt capture and OCR, Per diem calculation by destination, Corporate card reconciliation, Mileage and distance tracking, Approval workflows and audit, Integration with QuickBooks, Xero, SAP Concur, micro-saas, Finance, Zion Tech Group',
  alternates: {
    canonical: `https://ziontechgroup.com/services/w177-travel-expense/`,
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
        
        <h1 className="text-4xl font-bold mb-6 text-white">TravelExpense — T and E Management</h1>
        <p className="text-lg text-slate-300 mb-8">Travel and expense management: booking, receipt capture, per diem calculation, policy enforcement.</p>
        
        <div class="bg-slate-900 rounded-xl p-6 mb-8">
          <div class="flex flex-wrap gap-2 mb-4">
            <span class="text-xs px-3 py-1 bg-purple-900/30 rounded-full text-purple-300">micro-saas</span>
            <span class="text-xs px-3 py-1 bg-blue-900/30 rounded-full text-blue-300">Finance</span>
          </div>
          <h2 class="text-2xl font-semibold mb-4 text-white">Key Features</h2>
          <ul class="list-disc list-inside space-y-2">
        <li class="text-slate-300">Travel booking with policy compliance</li>
        <li class="text-slate-300">Receipt capture and OCR</li>
        <li class="text-slate-300">Per diem calculation by destination</li>
        <li class="text-slate-300">Corporate card reconciliation</li>
        <li class="text-slate-300">Mileage and distance tracking</li>
        <li class="text-slate-300">Approval workflows and audit</li>
        <li class="text-slate-300">Integration with QuickBooks</li>
        <li class="text-slate-300">Xero</li>
        <li class="text-slate-300">SAP Concur</li>
      </ul>
        </div>
        
        <div class="bg-slate-900 rounded-xl p-6 mb-8">
          <h2 class="text-2xl font-semibold mb-4 text-white">Benefits</h2>
          <ul class="list-disc list-inside space-y-2">
        <li class="text-slate-300">Policy compliance at booking time</li>
        <li class="text-slate-300">Receipt OCR eliminates manual entry</li>
        <li class="text-slate-300">Per diem accuracy by destination</li>
        <li class="text-slate-300">Corporate card reconciliation automated</li>
      </ul>
        </div>
        
        
        <div class="border border-purple-500/30 rounded-xl p-6 mb-8">
          <h2 class="text-2xl font-semibold text-white mb-4">Pricing</h2>
          <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div class="bg-slate-800 rounded-lg p-4 text-center">
              <h3 class="font-semibold text-white mb-2">Basic</h3>
              <p class="text-2xl font-bold text-purple-400 mb-2">$8/user/mo</p>
              <p class="text-sm text-slate-400">Getting started plan</p>
            </div>
            <div class="bg-slate-800 rounded-lg p-4 text-center border-2 border-purple-500">
              <h3 class="font-semibold text-white mb-2">Pro</h3>
              <p class="text-2xl font-bold text-purple-400 mb-2">$15/user/mo</p>
              <p class="text-sm text-slate-400">Most popular</p>
            </div>
            <div class="bg-slate-800 rounded-lg p-4 text-center">
              <h3 class="font-semibold text-white mb-2">Enterprise</h3>
              <p class="text-2xl font-bold text-purple-400 mb-2">$30/user/mo</p>
              <p class="text-sm text-slate-400">Full-featured solution</p>
            </div>
          </div>
        </div>
        
        <div class="bg-slate-900/60 border border-slate-700/50 rounded-xl p-6 mb-8">
          <h2 class="text-2xl font-semibold text-white mb-4">Related Services</h2>
          <div class="grid md:grid-cols-2 gap-4">
            
              <div>
                <a href="/services/advanced-ai-enterprise-intelligence-hub/" class="text-purple-300 hover:text-purple-200 font-medium">Advanced AI & Enterprise Intelligence Hub</a>
                <p class="text-slate-400 text-sm mt-1">Unify generative AI, autonomous agents, multimodal intelligence, RAG, governance, observability, and enterprise copilots...</p>
              </div>
            
            
              <div>
                <a href="/services/ai-3d-asset-generator/" class="text-purple-300 hover:text-purple-200 font-medium">Ai 3D Asset Generator</a>
                <p class="text-slate-400 text-sm mt-1">AI 3D Asset Generator — enterprise-grade solution with AI-powered automation, real-time analytics, and seamless integrat...</p>
              </div>
            
            
              <div>
                <a href="/services/ai-agents-autonomous/" class="text-purple-300 hover:text-purple-200 font-medium">AI Agents & Autonomous Workflows</a>
                <p class="text-slate-400 text-sm mt-1">Deploy autonomous AI agents that reason, plan, and act. Multi-step task execution, tool use, and human-in-the-loop contr...</p>
              </div>
            
            
              <div>
                <a href="/services/ai-automation/" class="text-purple-300 hover:text-purple-200 font-medium">AI Automation</a>
                <p class="text-slate-400 text-sm mt-1">Streamline your business processes with intelligent automation solutions....</p>
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
