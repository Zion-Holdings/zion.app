import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: `AI Retail Inventory Optimization | Zion Tech Group`,
  description: `AI-powered inventory optimization for retail chains. Demand forecasting, automatic replenishment, markdown optimization, and omnichannel inventory visibility.`,
  keywords: 'Demand forecasting by SKU and location, Automatic purchase orders, Markdown optimization, Omnichannel inventory visibility, Seasonal trend analysis, Supplier lead time optimization, Dead stock identification, Integration with POS and ERP, retail-tech, Retail, Zion Tech Group',
  alternates: {
    canonical: `https://ziontechgroup.com/services/retail-inventory-optimization/`,
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
        
        <h1 className="text-4xl font-bold mb-6 text-white">AI Retail Inventory Optimization</h1>
        <p className="text-lg text-slate-300 mb-8">AI-powered inventory optimization for retail chains. Demand forecasting, automatic replenishment, markdown optimization, and omnichannel inventory visibility.</p>
        
        <div class="bg-slate-900 rounded-xl p-6 mb-8">
          <div class="flex flex-wrap gap-2 mb-4">
            <span class="text-xs px-3 py-1 bg-purple-900/30 rounded-full text-purple-300">retail-tech</span>
            <span class="text-xs px-3 py-1 bg-blue-900/30 rounded-full text-blue-300">Retail</span>
          </div>
          <h2 class="text-2xl font-semibold mb-4 text-white">Key Features</h2>
          <ul class="list-disc list-inside space-y-2">
        <li class="text-slate-300">Demand forecasting by SKU and location</li>
        <li class="text-slate-300">Automatic purchase orders</li>
        <li class="text-slate-300">Markdown optimization</li>
        <li class="text-slate-300">Omnichannel inventory visibility</li>
        <li class="text-slate-300">Seasonal trend analysis</li>
        <li class="text-slate-300">Supplier lead time optimization</li>
        <li class="text-slate-300">Dead stock identification</li>
        <li class="text-slate-300">Integration with POS and ERP</li>
      </ul>
        </div>
        
        <div class="bg-slate-900 rounded-xl p-6 mb-8">
          <h2 class="text-2xl font-semibold mb-4 text-white">Benefits</h2>
          <ul class="list-disc list-inside space-y-2">
        <li class="text-slate-300">Reduce stockouts by 45%</li>
        <li class="text-slate-300">Decrease excess inventory by 30%</li>
        <li class="text-slate-300">Optimize markdown timing</li>
        <li class="text-slate-300">Improve inventory turnover</li>
      </ul>
        </div>
        
        
        <div class="border border-purple-500/30 rounded-xl p-6 mb-8">
          <h2 class="text-2xl font-semibold text-white mb-4">Pricing</h2>
          <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div class="bg-slate-800 rounded-lg p-4 text-center">
              <h3 class="font-semibold text-white mb-2">Basic</h3>
              <p class="text-2xl font-bold text-purple-400 mb-2">$799/mo</p>
              <p class="text-sm text-slate-400">Getting started plan</p>
            </div>
            <div class="bg-slate-800 rounded-lg p-4 text-center border-2 border-purple-500">
              <h3 class="font-semibold text-white mb-2">Pro</h3>
              <p class="text-2xl font-bold text-purple-400 mb-2">$2,499/mo</p>
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
                <a href="/services/ai-conversational-commerce-platform/" class="text-purple-300 hover:text-purple-200 font-medium">AI Conversational Commerce Platform</a>
                <p class="text-slate-400 text-sm mt-1">AI-powered shopping assistant that engages customers via chat, voice, and messaging apps. Product recommendations, order...</p>
              </div>
            
            
              <div>
                <a href="/services/ai-pricing-intelligence/" class="text-purple-300 hover:text-purple-200 font-medium">AI Pricing Intelligence Platform</a>
                <p class="text-slate-400 text-sm mt-1">Dynamic pricing optimization using competitor monitoring, demand elasticity, and A/B testing....</p>
              </div>
            
            
              <div>
                <a href="/services/ai-recommendation-engine/" class="text-purple-300 hover:text-purple-200 font-medium">Enterprise Recommendation Engine</a>
                <p class="text-slate-400 text-sm mt-1">AI recommendations for e-commerce with collaborative filtering and A/B testing....</p>
              </div>
            
            
              <div>
                <a href="/services/retail-ai-personalization-engine/" class="text-purple-300 hover:text-purple-200 font-medium">Retail AI Personalization Engine</a>
                <p class="text-slate-400 text-sm mt-1">Real-time product recommendations, personalized search, dynamic pricing, and customer segmentation for e-commerce and re...</p>
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
