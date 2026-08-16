import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: `Smart Retail Personalization Platform | Zion Tech Group`,
  description: `Real-time product recommendations, dynamic pricing, and inventory optimization. Omnichannel personalization across web, mobile, and in-store.`,
  keywords: 'Product recommendations, Dynamic pricing, Inventory optimization, Customer segmentation, A/B testing, Omnichannel personalization, retail-tech, retail-and-ecommerce, Zion Tech Group',
  alternates: {
    canonical: `https://ziontechgroup.com/services/w129-retail-personalization/`,
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
        
        <h1 className="text-4xl font-bold mb-6 text-white">Smart Retail Personalization Platform</h1>
        <p className="text-lg text-slate-300 mb-8">Real-time product recommendations, dynamic pricing, and inventory optimization. Omnichannel personalization across web, mobile, and in-store.</p>
        
        <div class="bg-slate-900 rounded-xl p-6 mb-8">
          <div class="flex flex-wrap gap-2 mb-4">
            <span class="text-xs px-3 py-1 bg-purple-900/30 rounded-full text-purple-300">retail-tech</span>
            <span class="text-xs px-3 py-1 bg-blue-900/30 rounded-full text-blue-300">retail-and-ecommerce</span>
          </div>
          <h2 class="text-2xl font-semibold mb-4 text-white">Key Features</h2>
          <ul class="list-disc list-inside space-y-2">
        <li class="text-slate-300">Product recommendations</li>
        <li class="text-slate-300">Dynamic pricing</li>
        <li class="text-slate-300">Inventory optimization</li>
        <li class="text-slate-300">Customer segmentation</li>
        <li class="text-slate-300">A/B testing</li>
        <li class="text-slate-300">Omnichannel personalization</li>
      </ul>
        </div>
        
        <div class="bg-slate-900 rounded-xl p-6 mb-8">
          <h2 class="text-2xl font-semibold mb-4 text-white">Benefits</h2>
          <ul class="list-disc list-inside space-y-2">
        <li class="text-slate-300">340% conversion lift</li>
        <li class="text-slate-300">28% higher AOV</li>
        <li class="text-slate-300">62% less abandonment</li>
        <li class="text-slate-300">Real-time optimization</li>
      </ul>
        </div>
        
        
        <div class="border border-purple-500/30 rounded-xl p-6 mb-8">
          <h2 class="text-2xl font-semibold text-white mb-4">Pricing</h2>
          <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div class="bg-slate-800 rounded-lg p-4 text-center">
              <h3 class="font-semibold text-white mb-2">Basic</h3>
              <p class="text-2xl font-bold text-purple-400 mb-2">Custom</p>
              <p class="text-sm text-slate-400">Getting started plan</p>
            </div>
            <div class="bg-slate-800 rounded-lg p-4 text-center border-2 border-purple-500">
              <h3 class="font-semibold text-white mb-2">Pro</h3>
              <p class="text-2xl font-bold text-purple-400 mb-2">14997</p>
              <p class="text-sm text-slate-400">Most popular</p>
            </div>
            <div class="bg-slate-800 rounded-lg p-4 text-center">
              <h3 class="font-semibold text-white mb-2">Enterprise</h3>
              <p class="text-2xl font-bold text-purple-400 mb-2">32997</p>
              <p class="text-sm text-slate-400">Full-featured solution</p>
            </div>
          </div>
        </div>
        
        <div class="bg-slate-900/60 border border-slate-700/50 rounded-xl p-6 mb-8">
          <h2 class="text-2xl font-semibold text-white mb-4">Related Services</h2>
          <div class="grid md:grid-cols-2 gap-4">
            
              <div>
                <a href="/services/retail-inventory-optimization/" class="text-purple-300 hover:text-purple-200 font-medium">AI Retail Inventory Optimization</a>
                <p class="text-slate-400 text-sm mt-1">AI-powered inventory optimization for retail chains. Demand forecasting, automatic replenishment, markdown optimization,...</p>
              </div>
            
            
              <div>
                <a href="/services/retail-loss-prevention-system/" class="text-purple-300 hover:text-purple-200 font-medium">AI Retail Loss Prevention System</a>
                <p class="text-slate-400 text-sm mt-1">Computer vision and AI-powered loss prevention for retail. Detect shoplifting, employee theft, and inventory shrinkage i...</p>
              </div>
            
            
              <div>
                <a href="/services/retail-personalization-engine/" class="text-purple-300 hover:text-purple-200 font-medium">Retail Personalization Engine</a>
                <p class="text-slate-400 text-sm mt-1">AI-powered product recommendations and personalized shopping experiences. Real-time personalization across web, mobile, ...</p>
              </div>
            
            
              <div>
                <a href="/services/retail-tech-personalization-engine/" class="text-purple-300 hover:text-purple-200 font-medium">AI Retail Personalization Engine</a>
                <p class="text-slate-400 text-sm mt-1">Hyper-personalized shopping experiences. Product recommendations, dynamic pricing, customer segmentation, and omnichanne...</p>
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
