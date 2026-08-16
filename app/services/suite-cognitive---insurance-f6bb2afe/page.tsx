import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: `Suite Cognitive - Insurance | Zion Tech Group`,
  description: `Transform your insurance operations with our Suite Cognitive - Insurance. This AI-driven solution automates process automation with unprecedented accuracy and efficiency.`,
  keywords: 'Offline capabilities, Open-source friendly, Serverless functions, Mobile-responsive interface, suite, insurance, Zion Tech Group',
  alternates: {
    canonical: `https://ziontechgroup.com/services/suite-cognitive---insurance-f6bb2afe/`,
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
        
        <h1 className="text-4xl font-bold mb-6 text-white">Suite Cognitive - Insurance</h1>
        <p className="text-lg text-slate-300 mb-8">Transform your insurance operations with our Suite Cognitive - Insurance. This AI-driven solution automates process automation with unprecedented accuracy and efficiency.</p>
        
        <div class="bg-slate-900 rounded-xl p-6 mb-8">
          <div class="flex flex-wrap gap-2 mb-4">
            <span class="text-xs px-3 py-1 bg-purple-900/30 rounded-full text-purple-300">suite</span>
            <span class="text-xs px-3 py-1 bg-blue-900/30 rounded-full text-blue-300">insurance</span>
          </div>
          <h2 class="text-2xl font-semibold mb-4 text-white">Key Features</h2>
          <ul class="list-disc list-inside space-y-2">
        <li class="text-slate-300">Offline capabilities</li>
        <li class="text-slate-300">Open-source friendly</li>
        <li class="text-slate-300">Serverless functions</li>
        <li class="text-slate-300">Mobile-responsive interface</li>
      </ul>
        </div>
        
        <div class="bg-slate-900 rounded-xl p-6 mb-8">
          <h2 class="text-2xl font-semibold mb-4 text-white">Benefits</h2>
          <ul class="list-disc list-inside space-y-2">
        <li class="text-slate-300">Predictive maintenance scheduling</li>
        <li class="text-slate-300">Seamless integration with existing systems</li>
        <li class="text-slate-300">24/7 automated operations</li>
        <li class="text-slate-300">ROI in under 90 days</li>
        <li class="text-slate-300">50% reduction in operational costs</li>
      </ul>
        </div>
        
        
        <div class="border border-purple-500/30 rounded-xl p-6 mb-8">
          <h2 class="text-2xl font-semibold text-white mb-4">Pricing</h2>
          <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div class="bg-slate-800 rounded-lg p-4 text-center">
              <h3 class="font-semibold text-white mb-2">Basic</h3>
              <p class="text-2xl font-bold text-purple-400 mb-2">199</p>
              <p class="text-sm text-slate-400">Getting started plan</p>
            </div>
            <div class="bg-slate-800 rounded-lg p-4 text-center border-2 border-purple-500">
              <h3 class="font-semibold text-white mb-2">Pro</h3>
              <p class="text-2xl font-bold text-purple-400 mb-2">499</p>
              <p class="text-sm text-slate-400">Most popular</p>
            </div>
            <div class="bg-slate-800 rounded-lg p-4 text-center">
              <h3 class="font-semibold text-white mb-2">Enterprise</h3>
              <p class="text-2xl font-bold text-purple-400 mb-2">1499</p>
              <p class="text-sm text-slate-400">Full-featured solution</p>
            </div>
          </div>
        </div>
        
        <div class="bg-slate-900/60 border border-slate-700/50 rounded-xl p-6 mb-8">
          <h2 class="text-2xl font-semibold text-white mb-4">Related Services</h2>
          <div class="grid md:grid-cols-2 gap-4">
            
              <div>
                <a href="/services/adaptive-analytics-insurance-535020e8/" class="text-purple-300 hover:text-purple-200 font-medium">Adaptive analytics-insurance</a>
                <p class="text-slate-400 text-sm mt-1">The future of insurance is here with Adaptive analytics-insurance. Powered by cutting-edge AI, this platform delivers fr...</p>
              </div>
            
            
              <div>
                <a href="/services/adaptive-analyzer-for-insurance-1-3f31237b/" class="text-purple-300 hover:text-purple-200 font-medium">Adaptive Analyzer for Insurance #1</a>
                <p class="text-slate-400 text-sm mt-1">Unlock unprecedented growth with Adaptive Analyzer for Insurance #1. This autonomous system provides network optimizatio...</p>
              </div>
            
            
              <div>
                <a href="/services/adaptive-analyzer-for-insurance-3da6b7a1/" class="text-purple-300 hover:text-purple-200 font-medium">Adaptive Analyzer for Insurance</a>
                <p class="text-slate-400 text-sm mt-1">Next-generation insurance solution: Adaptive Analyzer for Insurance. Combines compliance monitoring with adaptive intell...</p>
              </div>
            
            
              <div>
                <a href="/services/adaptive-data-intelligence-464bea7c/" class="text-purple-300 hover:text-purple-200 font-medium">Adaptive Data Intelligence</a>
                <p class="text-slate-400 text-sm mt-1">Unlock unprecedented growth with Adaptive Data Intelligence. This autonomous system provides supply chain with zero manu...</p>
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
