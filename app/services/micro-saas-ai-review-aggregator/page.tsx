import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: `Micro-SaaS AI Review Aggregator & Response Manager | Zion Tech Group`,
  description: `Aggregate reviews from Google, Yelp, Amazon, Trustpilot, and 20+ platforms into one dashboard. AI analyzes sentiment, generates response drafts, and tracks review trends.`,
  keywords: 'Multi-platform review aggregation (20+ sources), AI sentiment and topic analysis, Auto-generated response drafts, Competitor review benchmarking, Review request automation via email/SMS, Alert system for negative reviews, micro-saas, marketing, Zion Tech Group',
  alternates: {
    canonical: `https://ziontechgroup.com/services/micro-saas-ai-review-aggregator/`,
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
        
        <h1 className="text-4xl font-bold mb-6 text-white">Micro-SaaS AI Review Aggregator &amp; Response Manager</h1>
        <p className="text-lg text-slate-300 mb-8">Aggregate reviews from Google, Yelp, Amazon, Trustpilot, and 20+ platforms into one dashboard. AI analyzes sentiment, generates response drafts, and tracks review trends.</p>
        
        <div class="bg-slate-900 rounded-xl p-6 mb-8">
          <div class="flex flex-wrap gap-2 mb-4">
            <span class="text-xs px-3 py-1 bg-purple-900/30 rounded-full text-purple-300">micro-saas</span>
            <span class="text-xs px-3 py-1 bg-blue-900/30 rounded-full text-blue-300">Digital Marketing</span>
          </div>
          <h2 class="text-2xl font-semibold mb-4 text-white">Key Features</h2>
          <ul class="list-disc list-inside space-y-2">
        <li class="text-slate-300">Multi-platform review aggregation (20+ sources)</li>
        <li class="text-slate-300">AI sentiment and topic analysis</li>
        <li class="text-slate-300">Auto-generated response drafts</li>
        <li class="text-slate-300">Competitor review benchmarking</li>
        <li class="text-slate-300">Review request automation via email/SMS</li>
        <li class="text-slate-300">Alert system for negative reviews</li>
      </ul>
        </div>
        
        <div class="bg-slate-900 rounded-xl p-6 mb-8">
          <h2 class="text-2xl font-semibold mb-4 text-white">Benefits</h2>
          <ul class="list-disc list-inside space-y-2">
        <li class="text-slate-300">Manage all reviews from one place</li>
        <li class="text-slate-300">Respond 5x faster with AI drafts</li>
        <li class="text-slate-300">Improve ratings with proactive requests</li>
        <li class="text-slate-300">Benchmark against competitors</li>
      </ul>
        </div>
        
        
        <div class="border border-purple-500/30 rounded-xl p-6 mb-8">
          <h2 class="text-2xl font-semibold text-white mb-4">Pricing</h2>
          <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div class="bg-slate-800 rounded-lg p-4 text-center">
              <h3 class="font-semibold text-white mb-2">Basic</h3>
              <p class="text-2xl font-bold text-purple-400 mb-2">$59/mo</p>
              <p class="text-sm text-slate-400">Getting started plan</p>
            </div>
            <div class="bg-slate-800 rounded-lg p-4 text-center border-2 border-purple-500">
              <h3 class="font-semibold text-white mb-2">Pro</h3>
              <p class="text-2xl font-bold text-purple-400 mb-2">$149/mo</p>
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
                <a href="/services/ai-customer-data-platform/" class="text-purple-300 hover:text-purple-200 font-medium">AI Customer Data Platform (CDP) & Unification</a>
                <p class="text-slate-400 text-sm mt-1">Enterprise customer data platform that unifies data from all touchpoints, creates 360-degree customer profiles, and powe...</p>
              </div>
            
            
              <div>
                <a href="/services/ai-customer-intent-prediction/" class="text-purple-300 hover:text-purple-200 font-medium">AI Customer Intent Prediction Engine</a>
                <p class="text-slate-400 text-sm mt-1">Real-time customer intent prediction using behavioral signals, browsing patterns, and historical data. Identifies buying...</p>
              </div>
            
            
              <div>
                <a href="/services/ai-customer-segmentation/" class="text-purple-300 hover:text-purple-200 font-medium">AI Customer Segmentation & Lifetime Value Prediction</a>
                <p class="text-slate-400 text-sm mt-1">AI-powered customer segmentation that goes beyond demographics. Behavioral clustering, lifetime value prediction, and ne...</p>
              </div>
            
            
              <div>
                <a href="/services/ai-personalized-newsletter-curation-engine/" class="text-purple-300 hover:text-purple-200 font-medium">AI Personalized Newsletter & Content Curation Engine</a>
                <p class="text-slate-400 text-sm mt-1">Automatically curate, personalize, and deliver newsletters tailored to each subscriber's interests. AI analyzes reading ...</p>
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
