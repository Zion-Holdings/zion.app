import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: `Customer Lifetime Value Prediction | Zion Tech Group`,
  description: `ML-powered CLV prediction engine that forecasts customer revenue potential using behavioral data, purchase history, and engagement metrics.`,
  keywords: 'CLV Forecasting, Behavioral Segmentation, Churn Risk Scoring, Retention Recommendations, Revenue Attribution, AI, Analytics, Zion Tech Group',
  alternates: {
    canonical: `https://ziontechgroup.com/services/ai-customer-lifetime-value-prediction/`,
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
        
        <h1 className="text-4xl font-bold mb-6 text-white">Customer Lifetime Value Prediction</h1>
        <p className="text-lg text-slate-300 mb-8">ML-powered CLV prediction engine that forecasts customer revenue potential using behavioral data, purchase history, and engagement metrics.</p>
        
        <div class="bg-slate-900 rounded-xl p-6 mb-8">
          <div class="flex flex-wrap gap-2 mb-4">
            <span class="text-xs px-3 py-1 bg-purple-900/30 rounded-full text-purple-300">AI</span>
            <span class="text-xs px-3 py-1 bg-blue-900/30 rounded-full text-blue-300">Analytics</span>
          </div>
          <h2 class="text-2xl font-semibold mb-4 text-white">Key Features</h2>
          <ul class="list-disc list-inside space-y-2">
        <li class="text-slate-300">CLV Forecasting</li>
        <li class="text-slate-300">Behavioral Segmentation</li>
        <li class="text-slate-300">Churn Risk Scoring</li>
        <li class="text-slate-300">Retention Recommendations</li>
        <li class="text-slate-300">Revenue Attribution</li>
      </ul>
        </div>
        
        <div class="bg-slate-900 rounded-xl p-6 mb-8">
          <h2 class="text-2xl font-semibold mb-4 text-white">Benefits</h2>
          <ul class="list-disc list-inside space-y-2">
        <li class="text-slate-300">Increase retention 25%</li>
        <li class="text-slate-300">Optimize marketing spend</li>
        <li class="text-slate-300">Identify high-value segments</li>
      </ul>
        </div>
        
        
        <div class="border border-purple-500/30 rounded-xl p-6 mb-8">
          <h2 class="text-2xl font-semibold text-white mb-4">Pricing</h2>
          <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div class="bg-slate-800 rounded-lg p-4 text-center">
              <h3 class="font-semibold text-white mb-2">Basic</h3>
              <p class="text-2xl font-bold text-purple-400 mb-2">$149/mo</p>
              <p class="text-sm text-slate-400">Getting started plan</p>
            </div>
            <div class="bg-slate-800 rounded-lg p-4 text-center border-2 border-purple-500">
              <h3 class="font-semibold text-white mb-2">Pro</h3>
              <p class="text-2xl font-bold text-purple-400 mb-2">$449/mo</p>
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
                <a href="/services/ai-employee-engagement-analytics/" class="text-purple-300 hover:text-purple-200 font-medium">Employee Engagement Analytics</a>
                <p class="text-slate-400 text-sm mt-1">AI-powered employee engagement platform that analyzes survey data, communication patterns, and productivity metrics to p...</p>
              </div>
            
            
              <div>
                <a href="/services/ai-legal-document-summarizer/" class="text-purple-300 hover:text-purple-200 font-medium">Legal Document AI Summarizer</a>
                <p class="text-slate-400 text-sm mt-1">AI-powered legal document analysis and summarization tool. Extracts key clauses, obligations, and risks from contracts, ...</p>
              </div>
            
            
              <div>
                <a href="/services/w174-realtime-analytics/" class="text-purple-300 hover:text-purple-200 font-medium">Real-Time Analytics Engine</a>
                <p class="text-slate-400 text-sm mt-1">Sub-second analytics on streaming data with pre-aggregation, materialized views, and real-time dashboards. ClickHouse, D...</p>
              </div>
            
            
              <div>
                <a href="/services/w175-graph-analytics/" class="text-purple-300 hover:text-purple-200 font-medium">Graph Analytics & Network Intelligence</a>
                <p class="text-slate-400 text-sm mt-1">Graph database and analytics: Neo4j/Neptune, social network analysis, fraud ring detection, recommendation graphs, and p...</p>
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
