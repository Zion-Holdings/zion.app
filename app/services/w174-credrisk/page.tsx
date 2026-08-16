import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: `CredRisk — Credit Decisioning Engine | Zion Tech Group`,
  description: `AI-powered credit scoring and loan decisioning for fintech and lenders. Alternative data scoring, real-time decisions, and fair lending compliance.`,
  keywords: 'AI credit scoring with alternative data, Real-time loan decisioning (< 2 seconds), Underwriting rules engine with exceptions, Fair lending compliance (ECOA, FCRA), Explainable decisions for adverse action notices, Portfolio risk monitoring, Integration with Plaid, Experian, Equifax, TransUnion, micro-saas, Financial Services, Zion Tech Group',
  alternates: {
    canonical: `https://ziontechgroup.com/services/w174-credrisk/`,
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
        
        <h1 className="text-4xl font-bold mb-6 text-white">CredRisk — Credit Decisioning Engine</h1>
        <p className="text-lg text-slate-300 mb-8">AI-powered credit scoring and loan decisioning for fintech and lenders. Alternative data scoring, real-time decisions, and fair lending compliance.</p>
        
        <div class="bg-slate-900 rounded-xl p-6 mb-8">
          <div class="flex flex-wrap gap-2 mb-4">
            <span class="text-xs px-3 py-1 bg-purple-900/30 rounded-full text-purple-300">micro-saas</span>
            <span class="text-xs px-3 py-1 bg-blue-900/30 rounded-full text-blue-300">Financial Services</span>
          </div>
          <h2 class="text-2xl font-semibold mb-4 text-white">Key Features</h2>
          <ul class="list-disc list-inside space-y-2">
        <li class="text-slate-300">AI credit scoring with alternative data</li>
        <li class="text-slate-300">Real-time loan decisioning (&lt; 2 seconds)</li>
        <li class="text-slate-300">Underwriting rules engine with exceptions</li>
        <li class="text-slate-300">Fair lending compliance (ECOA, FCRA)</li>
        <li class="text-slate-300">Explainable decisions for adverse action notices</li>
        <li class="text-slate-300">Portfolio risk monitoring</li>
        <li class="text-slate-300">Integration with Plaid, Experian, Equifax, TransUnion</li>
      </ul>
        </div>
        
        <div class="bg-slate-900 rounded-xl p-6 mb-8">
          <h2 class="text-2xl font-semibold mb-4 text-white">Benefits</h2>
          <ul class="list-disc list-inside space-y-2">
        <li class="text-slate-300">Approve more good borrowers with AI</li>
        <li class="text-slate-300">Sub-2-second decisions improve conversion</li>
        <li class="text-slate-300">Alternative data serves thin-file applicants</li>
        <li class="text-slate-300">Fair lending compliance with explainability</li>
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
                <a href="/services/ai-bank-fraud-investigator/" class="text-purple-300 hover:text-purple-200 font-medium">AI Bank Fraud Investigation Platform</a>
                <p class="text-slate-400 text-sm mt-1">Automate fraud investigation workstreams: transaction link analysis, entity resolution, SAR filing automation, and regul...</p>
              </div>
            
            
              <div>
                <a href="/services/ai-identity-verification-kyc/" class="text-purple-300 hover:text-purple-200 font-medium">AI Identity Verification & KYC Platform</a>
                <p class="text-slate-400 text-sm mt-1">Automated KYC/AML for fintechs and banks: document verification, biometric matching, liveness detection, PEP/sanctions s...</p>
              </div>
            
            
              <div>
                <a href="/services/ai-loan-underwriting-engine/" class="text-purple-300 hover:text-purple-200 font-medium">AI Loan Underwriting & Risk Scoring Engine</a>
                <p class="text-slate-400 text-sm mt-1">Automate consumer and commercial loan underwriting: alternative data scoring, income verification, fraud detection, and ...</p>
              </div>
            
            
              <div>
                <a href="/services/ai-powered-form-builder/" class="text-purple-300 hover:text-purple-200 font-medium">AI-Powered Form & Survey Builder</a>
                <p class="text-slate-400 text-sm mt-1">Create intelligent forms and surveys with AI that suggests questions, analyzes responses, and generates insights. Includ...</p>
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
