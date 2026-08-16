import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: `AI Sustainability & ESG Compliance Tracker | Zion Tech Group`,
  description: `AI-powered sustainability tracking and ESG compliance platform. Automate data collection, calculate carbon footprint, and generate reports for GRI, CDP, TCFD, and SASB frameworks.`,
  keywords: 'Automated carbon footprint calculation, Scope 1/2/3 emissions tracking, ESG framework mapping (GRI,  CDP,  TCFD,  SASB), Supply chain sustainability scoring, AI-powered reduction recommendations, Automated ESG report generation, Benchmarking against industry peers, Integration with ERP and utility providers, ai, energy, Zion Tech Group',
  alternates: {
    canonical: `https://ziontechgroup.com/services/micro-saas-ai-sustainability-tracker/`,
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
        
        <h1 className="text-4xl font-bold mb-6 text-white">AI Sustainability &amp; ESG Compliance Tracker</h1>
        <p className="text-lg text-slate-300 mb-8">AI-powered sustainability tracking and ESG compliance platform. Automate data collection, calculate carbon footprint, and generate reports for GRI, CDP, TCFD, and SASB frameworks.</p>
        
        <div class="bg-slate-900 rounded-xl p-6 mb-8">
          <div class="flex flex-wrap gap-2 mb-4">
            <span class="text-xs px-3 py-1 bg-purple-900/30 rounded-full text-purple-300">ai</span>
            <span class="text-xs px-3 py-1 bg-blue-900/30 rounded-full text-blue-300">energy</span>
          </div>
          <h2 class="text-2xl font-semibold mb-4 text-white">Key Features</h2>
          <ul class="list-disc list-inside space-y-2">
        <li class="text-slate-300">Automated carbon footprint calculation</li>
        <li class="text-slate-300">Scope 1/2/3 emissions tracking</li>
        <li class="text-slate-300">ESG framework mapping (GRI</li>
        <li class="text-slate-300"> CDP</li>
        <li class="text-slate-300"> TCFD</li>
        <li class="text-slate-300"> SASB)</li>
        <li class="text-slate-300">Supply chain sustainability scoring</li>
        <li class="text-slate-300">AI-powered reduction recommendations</li>
        <li class="text-slate-300">Automated ESG report generation</li>
        <li class="text-slate-300">Benchmarking against industry peers</li>
        <li class="text-slate-300">Integration with ERP and utility providers</li>
      </ul>
        </div>
        
        <div class="bg-slate-900 rounded-xl p-6 mb-8">
          <h2 class="text-2xl font-semibold mb-4 text-white">Benefits</h2>
          <ul class="list-disc list-inside space-y-2">
        <li class="text-slate-300">Reduce ESG reporting time by 80%</li>
        <li class="text-slate-300">Identify carbon reduction opportunities</li>
        <li class="text-slate-300">Meet investor and regulatory ESG requirements</li>
        <li class="text-slate-300">Benchmark sustainability performance</li>
      </ul>
        </div>
        
        
        <div class="border border-purple-500/30 rounded-xl p-6 mb-8">
          <h2 class="text-2xl font-semibold text-white mb-4">Pricing</h2>
          <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div class="bg-slate-800 rounded-lg p-4 text-center">
              <h3 class="font-semibold text-white mb-2">Basic</h3>
              <p class="text-2xl font-bold text-purple-400 mb-2">$999/mo</p>
              <p class="text-sm text-slate-400">Getting started plan</p>
            </div>
            <div class="bg-slate-800 rounded-lg p-4 text-center border-2 border-purple-500">
              <h3 class="font-semibold text-white mb-2">Pro</h3>
              <p class="text-2xl font-bold text-purple-400 mb-2">$2,999/mo</p>
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
                <a href="/services/adaptive-analytics-energy-1-0c76478a/" class="text-purple-300 hover:text-purple-200 font-medium">Adaptive analytics-energy #1</a>
                <p class="text-slate-400 text-sm mt-1">Transform your energy operations with our Adaptive analytics-energy #1. This AI-driven solution automates decision suppo...</p>
              </div>
            
            
              <div>
                <a href="/services/adaptive-analytics-energy-26ebe9e2/" class="text-purple-300 hover:text-purple-200 font-medium">Adaptive analytics-energy</a>
                <p class="text-slate-400 text-sm mt-1">Revolutionize energy through intelligent automation. Our Adaptive analytics-energy leverages advanced machine learning t...</p>
              </div>
            
            
              <div>
                <a href="/services/adaptive-analyzer-energy-6dff1516/" class="text-purple-300 hover:text-purple-200 font-medium">Adaptive analyzer-energy</a>
                <p class="text-slate-400 text-sm mt-1">Revolutionize energy through intelligent automation. Our Adaptive analyzer-energy leverages advanced machine learning to...</p>
              </div>
            
            
              <div>
                <a href="/services/adaptive-decision-predictor-a0b270b2/" class="text-purple-300 hover:text-purple-200 font-medium">Adaptive Decision Predictor</a>
                <p class="text-slate-400 text-sm mt-1">Next-generation energy solution: Adaptive Decision Predictor. Combines risk assessment with adaptive intelligence for op...</p>
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
