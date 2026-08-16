import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: `AI Predictive Customer Lifetime Value | Zion Tech Group`,
  description: `Predict customer LTV from day one: behavioral scoring, churn prediction, upsell timing optimization, and cohort analysis. Integrates with Shopify, Stripe, HubSpot.`,
  keywords: 'Day-one LTV prediction, Behavioral scoring models, Churn prediction (90-day window), Upsell timing optimization, Cohort value comparison, 20+ CRM/payment integrations, data, SaaS, Zion Tech Group',
  alternates: {
    canonical: `https://ziontechgroup.com/services/ai-predictive-customer-ltv/`,
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
        
        <h1 className="text-4xl font-bold mb-6 text-white">AI Predictive Customer Lifetime Value</h1>
        <p className="text-lg text-slate-300 mb-8">Predict customer LTV from day one: behavioral scoring, churn prediction, upsell timing optimization, and cohort analysis. Integrates with Shopify, Stripe, HubSpot.</p>
        
        <div class="bg-slate-900 rounded-xl p-6 mb-8">
          <div class="flex flex-wrap gap-2 mb-4">
            <span class="text-xs px-3 py-1 bg-purple-900/30 rounded-full text-purple-300">data</span>
            <span class="text-xs px-3 py-1 bg-blue-900/30 rounded-full text-blue-300">SaaS</span>
          </div>
          <h2 class="text-2xl font-semibold mb-4 text-white">Key Features</h2>
          <ul class="list-disc list-inside space-y-2">
        <li class="text-slate-300">Day-one LTV prediction</li>
        <li class="text-slate-300">Behavioral scoring models</li>
        <li class="text-slate-300">Churn prediction (90-day window)</li>
        <li class="text-slate-300">Upsell timing optimization</li>
        <li class="text-slate-300">Cohort value comparison</li>
        <li class="text-slate-300">20+ CRM/payment integrations</li>
      </ul>
        </div>
        
        <div class="bg-slate-900 rounded-xl p-6 mb-8">
          <h2 class="text-2xl font-semibold mb-4 text-white">Benefits</h2>
          <ul class="list-disc list-inside space-y-2">
        <li class="text-slate-300">Know LTV before first purchase</li>
        <li class="text-slate-300">Reduce churn by 30%</li>
        <li class="text-slate-300">Perfect upsell timing</li>
      </ul>
        </div>
        
        
        <div class="border border-purple-500/30 rounded-xl p-6 mb-8">
          <h2 class="text-2xl font-semibold text-white mb-4">Pricing</h2>
          <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div class="bg-slate-800 rounded-lg p-4 text-center">
              <h3 class="font-semibold text-white mb-2">Basic</h3>
              <p class="text-2xl font-bold text-purple-400 mb-2">99</p>
              <p class="text-sm text-slate-400">Getting started plan</p>
            </div>
            <div class="bg-slate-800 rounded-lg p-4 text-center border-2 border-purple-500">
              <h3 class="font-semibold text-white mb-2">Pro</h3>
              <p class="text-2xl font-bold text-purple-400 mb-2">299</p>
              <p class="text-sm text-slate-400">Most popular</p>
            </div>
            <div class="bg-slate-800 rounded-lg p-4 text-center">
              <h3 class="font-semibold text-white mb-2">Enterprise</h3>
              <p class="text-2xl font-bold text-purple-400 mb-2">999</p>
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
                <a href="/services/ai-data-quality-engine/" class="text-purple-300 hover:text-purple-200 font-medium">AI Data Quality & Enforcement Engine</a>
                <p class="text-slate-400 text-sm mt-1">Continuous data quality at pipeline scale: automated profiling, statistical anomaly detection, schema drift + auto-fix. ...</p>
              </div>
            
            
              <div>
                <a href="/services/ai-esg-reporting-platform/" class="text-purple-300 hover:text-purple-200 font-medium">AI ESG Reporting & Sustainability Platform</a>
                <p class="text-slate-400 text-sm mt-1">Automated ESG data collection, scoring, and reporting: GHG emissions tracking, social impact measurement, governance sco...</p>
              </div>
            
            
              <div>
                <a href="/services/ai-etl-pipeline-builder/" class="text-purple-300 hover:text-purple-200 font-medium">AI ETL Pipeline Builder</a>
                <p class="text-slate-400 text-sm mt-1">Natural language ETL builder: describe source, target, transformation — AI generates production-ready dbt/Glue/Dataflow ...</p>
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
