import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: `Employee Engagement Analytics | Zion Tech Group`,
  description: `AI-powered employee engagement platform that analyzes survey data, communication patterns, and productivity metrics to predict turnover and recommend interventions.`,
  keywords: 'Sentiment Analysis, Turnover Prediction, Engagement Scoring, Action Recommendations, Anonymous Feedback, AI, Human Resources, Zion Tech Group',
  alternates: {
    canonical: `https://ziontechgroup.com/services/ai-employee-engagement-analytics/`,
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
        
        <h1 className="text-4xl font-bold mb-6 text-white">Employee Engagement Analytics</h1>
        <p className="text-lg text-slate-300 mb-8">AI-powered employee engagement platform that analyzes survey data, communication patterns, and productivity metrics to predict turnover and recommend interventions.</p>
        
        <div class="bg-slate-900 rounded-xl p-6 mb-8">
          <div class="flex flex-wrap gap-2 mb-4">
            <span class="text-xs px-3 py-1 bg-purple-900/30 rounded-full text-purple-300">AI</span>
            <span class="text-xs px-3 py-1 bg-blue-900/30 rounded-full text-blue-300">Human Resources</span>
          </div>
          <h2 class="text-2xl font-semibold mb-4 text-white">Key Features</h2>
          <ul class="list-disc list-inside space-y-2">
        <li class="text-slate-300">Sentiment Analysis</li>
        <li class="text-slate-300">Turnover Prediction</li>
        <li class="text-slate-300">Engagement Scoring</li>
        <li class="text-slate-300">Action Recommendations</li>
        <li class="text-slate-300">Anonymous Feedback</li>
      </ul>
        </div>
        
        <div class="bg-slate-900 rounded-xl p-6 mb-8">
          <h2 class="text-2xl font-semibold mb-4 text-white">Benefits</h2>
          <ul class="list-disc list-inside space-y-2">
        <li class="text-slate-300">Reduce turnover 30%</li>
        <li class="text-slate-300">Improve satisfaction</li>
        <li class="text-slate-300">Data-driven HR decisions</li>
      </ul>
        </div>
        
        
        <div class="border border-purple-500/30 rounded-xl p-6 mb-8">
          <h2 class="text-2xl font-semibold text-white mb-4">Pricing</h2>
          <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div class="bg-slate-800 rounded-lg p-4 text-center">
              <h3 class="font-semibold text-white mb-2">Basic</h3>
              <p class="text-2xl font-bold text-purple-400 mb-2">$179/mo</p>
              <p class="text-sm text-slate-400">Getting started plan</p>
            </div>
            <div class="bg-slate-800 rounded-lg p-4 text-center border-2 border-purple-500">
              <h3 class="font-semibold text-white mb-2">Pro</h3>
              <p class="text-2xl font-bold text-purple-400 mb-2">$499/mo</p>
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
                <a href="/services/ai-customer-lifetime-value-prediction/" class="text-purple-300 hover:text-purple-200 font-medium">Customer Lifetime Value Prediction</a>
                <p class="text-slate-400 text-sm mt-1">ML-powered CLV prediction engine that forecasts customer revenue potential using behavioral data, purchase history, and ...</p>
              </div>
            
            
              <div>
                <a href="/services/ai-legal-document-summarizer/" class="text-purple-300 hover:text-purple-200 font-medium">Legal Document AI Summarizer</a>
                <p class="text-slate-400 text-sm mt-1">AI-powered legal document analysis and summarization tool. Extracts key clauses, obligations, and risks from contracts, ...</p>
              </div>
            
            
              <div>
                <a href="/services/w174-hr-automation/" class="text-purple-300 hover:text-purple-200 font-medium">HR Process Automation Platform</a>
                <p class="text-slate-400 text-sm mt-1">Automate HR processes: onboarding, offboarding, time tracking, benefits enrollment, performance reviews, and compliance ...</p>
              </div>
            
            
              <div>
                <a href="/services/w174-teampulse/" class="text-purple-300 hover:text-purple-200 font-medium">TeamPulse — Employee Engagement</a>
                <p class="text-slate-400 text-sm mt-1">Continuous employee engagement: pulse surveys, 1-on-1 templates, OKR tracking, and burnout detection. Actionable insight...</p>
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
