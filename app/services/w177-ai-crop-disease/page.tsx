import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: `AI Crop Disease Detector | Zion Tech Group`,
  description: `Detect crop diseases from smartphone photos: 200+ disease types, treatment recommendations, outbreak prediction. Offline mode.`,
  keywords: '200+ crop disease identification, Treatment and prevention recommendations, Outbreak prediction and spread modeling, Offline mobile inference, Weather and soil condition integration, Spray timing recommendations, Integration with John Deere, Climate FieldView, ai, Agriculture, Zion Tech Group',
  alternates: {
    canonical: `https://ziontechgroup.com/services/w177-ai-crop-disease/`,
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
        
        <h1 className="text-4xl font-bold mb-6 text-white">AI Crop Disease Detector</h1>
        <p className="text-lg text-slate-300 mb-8">Detect crop diseases from smartphone photos: 200+ disease types, treatment recommendations, outbreak prediction. Offline mode.</p>
        
        <div class="bg-slate-900 rounded-xl p-6 mb-8">
          <div class="flex flex-wrap gap-2 mb-4">
            <span class="text-xs px-3 py-1 bg-purple-900/30 rounded-full text-purple-300">ai</span>
            <span class="text-xs px-3 py-1 bg-blue-900/30 rounded-full text-blue-300">Agriculture</span>
          </div>
          <h2 class="text-2xl font-semibold mb-4 text-white">Key Features</h2>
          <ul class="list-disc list-inside space-y-2">
        <li class="text-slate-300">200+ crop disease identification</li>
        <li class="text-slate-300">Treatment and prevention recommendations</li>
        <li class="text-slate-300">Outbreak prediction and spread modeling</li>
        <li class="text-slate-300">Offline mobile inference</li>
        <li class="text-slate-300">Weather and soil condition integration</li>
        <li class="text-slate-300">Spray timing recommendations</li>
        <li class="text-slate-300">Integration with John Deere</li>
        <li class="text-slate-300">Climate FieldView</li>
      </ul>
        </div>
        
        <div class="bg-slate-900 rounded-xl p-6 mb-8">
          <h2 class="text-2xl font-semibold mb-4 text-white">Benefits</h2>
          <ul class="list-disc list-inside space-y-2">
        <li class="text-slate-300">Detect diseases early from a photo</li>
        <li class="text-slate-300">Treatment recommendations by disease</li>
        <li class="text-slate-300">Outbreak prediction prevents spread</li>
        <li class="text-slate-300">Offline mode works anywhere</li>
      </ul>
        </div>
        
        
        <div class="border border-purple-500/30 rounded-xl p-6 mb-8">
          <h2 class="text-2xl font-semibold text-white mb-4">Pricing</h2>
          <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div class="bg-slate-800 rounded-lg p-4 text-center">
              <h3 class="font-semibold text-white mb-2">Basic</h3>
              <p class="text-2xl font-bold text-purple-400 mb-2">$49/mo</p>
              <p class="text-sm text-slate-400">Getting started plan</p>
            </div>
            <div class="bg-slate-800 rounded-lg p-4 text-center border-2 border-purple-500">
              <h3 class="font-semibold text-white mb-2">Pro</h3>
              <p class="text-2xl font-bold text-purple-400 mb-2">$149/mo</p>
              <p class="text-sm text-slate-400">Most popular</p>
            </div>
            <div class="bg-slate-800 rounded-lg p-4 text-center">
              <h3 class="font-semibold text-white mb-2">Enterprise</h3>
              <p class="text-2xl font-bold text-purple-400 mb-2">$499/mo</p>
              <p class="text-sm text-slate-400">Full-featured solution</p>
            </div>
          </div>
        </div>
        
        <div class="bg-slate-900/60 border border-slate-700/50 rounded-xl p-6 mb-8">
          <h2 class="text-2xl font-semibold text-white mb-4">Related Services</h2>
          <div class="grid md:grid-cols-2 gap-4">
            
              <div>
                <a href="/services/advanced-ai-enterprise-intelligence-hub/" class="text-purple-300 hover:text-purple-200 font-medium">Advanced AI & Enterprise Intelligence Hub</a>
                <p class="text-slate-400 text-sm mt-1">Unify generative AI, autonomous agents, multimodal intelligence, RAG, governance, observability, and enterprise copilots...</p>
              </div>
            
            
              <div>
                <a href="/services/agritech-crop-disease-detection/" class="text-purple-300 hover:text-purple-200 font-medium">AI Crop Disease Detection Platform</a>
                <p class="text-slate-400 text-sm mt-1">Detect crop diseases, pest infestations, and nutrient deficiencies from drone and smartphone imagery. Early detection sa...</p>
              </div>
            
            
              <div>
                <a href="/services/agritech-greenhouse-automation/" class="text-purple-300 hover:text-purple-200 font-medium">AI Greenhouse Climate Control</a>
                <p class="text-slate-400 text-sm mt-1">AI-powered greenhouse automation. Climate optimization, lighting control, CO2 management, and yield prediction for contr...</p>
              </div>
            
            
              <div>
                <a href="/services/agritech-irrigation-optimization/" class="text-purple-300 hover:text-purple-200 font-medium">AI Smart Irrigation Optimization</a>
                <p class="text-slate-400 text-sm mt-1">AI-powered irrigation control. Soil moisture monitoring, weather-adaptive scheduling, water usage optimization, and crop...</p>
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
