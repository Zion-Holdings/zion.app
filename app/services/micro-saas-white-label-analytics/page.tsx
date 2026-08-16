import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: `White-Label Analytics Dashboard | Zion Tech Group`,
  description: `Embed analytics into your SaaS product with tenant isolation and real-time visualization.`,
  keywords: 'Pre-built dashboard widgets, Custom report builder, Tenant isolation, Real-time visualization, White-label branding, API access, Scheduled reports, Role-based access, micro-saas, SaaS, Zion Tech Group',
  alternates: {
    canonical: `https://ziontechgroup.com/services/micro-saas-white-label-analytics/`,
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
        
        <h1 className="text-4xl font-bold mb-6 text-white">White-Label Analytics Dashboard</h1>
        <p className="text-lg text-slate-300 mb-8">Embed analytics into your SaaS product with tenant isolation and real-time visualization.</p>
        
        <div class="bg-slate-900 rounded-xl p-6 mb-8">
          <div class="flex flex-wrap gap-2 mb-4">
            <span class="text-xs px-3 py-1 bg-purple-900/30 rounded-full text-purple-300">micro-saas</span>
            <span class="text-xs px-3 py-1 bg-blue-900/30 rounded-full text-blue-300">SaaS</span>
          </div>
          <h2 class="text-2xl font-semibold mb-4 text-white">Key Features</h2>
          <ul class="list-disc list-inside space-y-2">
        <li class="text-slate-300">Pre-built dashboard widgets</li>
        <li class="text-slate-300">Custom report builder</li>
        <li class="text-slate-300">Tenant isolation</li>
        <li class="text-slate-300">Real-time visualization</li>
        <li class="text-slate-300">White-label branding</li>
        <li class="text-slate-300">API access</li>
        <li class="text-slate-300">Scheduled reports</li>
        <li class="text-slate-300">Role-based access</li>
      </ul>
        </div>
        
        <div class="bg-slate-900 rounded-xl p-6 mb-8">
          <h2 class="text-2xl font-semibold mb-4 text-white">Benefits</h2>
          <ul class="list-disc list-inside space-y-2">
        <li class="text-slate-300">New revenue stream</li>
        <li class="text-slate-300">25% higher retention</li>
        <li class="text-slate-300">Reduced dev time</li>
        <li class="text-slate-300">Customer self-service</li>
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
              <p class="text-2xl font-bold text-purple-400 mb-2">$999/mo</p>
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
                <a href="/services/ai-customer-churn-prediction/" class="text-purple-300 hover:text-purple-200 font-medium">Customer Churn Prediction & Prevention</a>
                <p class="text-slate-400 text-sm mt-1">Predict which customers are at risk of leaving, understand why, and trigger automated retention campaigns. Integrates wi...</p>
              </div>
            
            
              <div>
                <a href="/services/ai-powered-form-builder/" class="text-purple-300 hover:text-purple-200 font-medium">AI-Powered Form & Survey Builder</a>
                <p class="text-slate-400 text-sm mt-1">Create intelligent forms and surveys with AI that suggests questions, analyzes responses, and generates insights. Includ...</p>
              </div>
            
            
              <div>
                <a href="/services/ai-predictive-customer-analytics/" class="text-purple-300 hover:text-purple-200 font-medium">Predictive Customer Analytics</a>
                <p class="text-slate-400 text-sm mt-1">Predict churn, LTV, and next-best-action with ML models....</p>
              </div>
            
            
              <div>
                <a href="/services/ai-predictive-customer-ltv/" class="text-purple-300 hover:text-purple-200 font-medium">AI Predictive Customer Lifetime Value</a>
                <p class="text-slate-400 text-sm mt-1">Predict customer LTV from day one: behavioral scoring, churn prediction, upsell timing optimization, and cohort analysis...</p>
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
