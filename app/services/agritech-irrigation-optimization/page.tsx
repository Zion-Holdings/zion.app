import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: `AI Smart Irrigation Optimization | Zion Tech Group`,
  description: `AI-powered irrigation control. Soil moisture monitoring, weather-adaptive scheduling, water usage optimization, and crop-specific recommendations.`,
  keywords: 'Soil moisture sensor integration, Weather-adaptive scheduling, Water usage optimization, Crop-specific recommendations, Remote valve control, Integration with Rainbird, Hunter, Water cost tracking, Drought response automation, agritech, Agriculture, Zion Tech Group',
  alternates: {
    canonical: `https://ziontechgroup.com/services/agritech-irrigation-optimization/`,
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
        
        <h1 className="text-4xl font-bold mb-6 text-white">AI Smart Irrigation Optimization</h1>
        <p className="text-lg text-slate-300 mb-8">AI-powered irrigation control. Soil moisture monitoring, weather-adaptive scheduling, water usage optimization, and crop-specific recommendations.</p>
        
        <div class="bg-slate-900 rounded-xl p-6 mb-8">
          <div class="flex flex-wrap gap-2 mb-4">
            <span class="text-xs px-3 py-1 bg-purple-900/30 rounded-full text-purple-300">agritech</span>
            <span class="text-xs px-3 py-1 bg-blue-900/30 rounded-full text-blue-300">Agriculture</span>
          </div>
          <h2 class="text-2xl font-semibold mb-4 text-white">Key Features</h2>
          <ul class="list-disc list-inside space-y-2">
        <li class="text-slate-300">Soil moisture sensor integration</li>
        <li class="text-slate-300">Weather-adaptive scheduling</li>
        <li class="text-slate-300">Water usage optimization</li>
        <li class="text-slate-300">Crop-specific recommendations</li>
        <li class="text-slate-300">Remote valve control</li>
        <li class="text-slate-300">Integration with Rainbird, Hunter</li>
        <li class="text-slate-300">Water cost tracking</li>
        <li class="text-slate-300">Drought response automation</li>
      </ul>
        </div>
        
        <div class="bg-slate-900 rounded-xl p-6 mb-8">
          <h2 class="text-2xl font-semibold mb-4 text-white">Benefits</h2>
          <ul class="list-disc list-inside space-y-2">
        <li class="text-slate-300">Reduce water usage 35%</li>
        <li class="text-slate-300">Lower irrigation costs</li>
        <li class="text-slate-300">Improve crop yields</li>
        <li class="text-slate-300">Remote monitoring and control</li>
      </ul>
        </div>
        
        
        <div class="border border-purple-500/30 rounded-xl p-6 mb-8">
          <h2 class="text-2xl font-semibold text-white mb-4">Pricing</h2>
          <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div class="bg-slate-800 rounded-lg p-4 text-center">
              <h3 class="font-semibold text-white mb-2">Basic</h3>
              <p class="text-2xl font-bold text-purple-400 mb-2">$99/mo</p>
              <p class="text-sm text-slate-400">Getting started plan</p>
            </div>
            <div class="bg-slate-800 rounded-lg p-4 text-center border-2 border-purple-500">
              <h3 class="font-semibold text-white mb-2">Pro</h3>
              <p class="text-2xl font-bold text-purple-400 mb-2">$299/mo</p>
              <p class="text-sm text-slate-400">Most popular</p>
            </div>
            <div class="bg-slate-800 rounded-lg p-4 text-center">
              <h3 class="font-semibold text-white mb-2">Enterprise</h3>
              <p class="text-2xl font-bold text-purple-400 mb-2">$899/mo</p>
              <p class="text-sm text-slate-400">Full-featured solution</p>
            </div>
          </div>
        </div>
        
        <div class="bg-slate-900/60 border border-slate-700/50 rounded-xl p-6 mb-8">
          <h2 class="text-2xl font-semibold text-white mb-4">Related Services</h2>
          <div class="grid md:grid-cols-2 gap-4">
            
              <div>
                <a href="/services/agritech-crop-disease-detection/" class="text-purple-300 hover:text-purple-200 font-medium">AI Crop Disease Detection Platform</a>
                <p class="text-slate-400 text-sm mt-1">Detect crop diseases, pest infestations, and nutrient deficiencies from drone and smartphone imagery. Early detection sa...</p>
              </div>
            
            
              <div>
                <a href="/services/agritech-greenhouse-automation/" class="text-purple-300 hover:text-purple-200 font-medium">AI Greenhouse Climate Control</a>
                <p class="text-slate-400 text-sm mt-1">AI-powered greenhouse automation. Climate optimization, lighting control, CO2 management, and yield prediction for contr...</p>
              </div>
            
            
              <div>
                <a href="/services/agritech-livestock-monitoring/" class="text-purple-300 hover:text-purple-200 font-medium">AI Livestock Health Monitoring</a>
                <p class="text-slate-400 text-sm mt-1">IoT and AI-powered livestock health monitoring. Track animal behavior, detect illness early, monitor feeding patterns, a...</p>
              </div>
            
            
              <div>
                <a href="/services/agritech-precision-farming/" class="text-purple-300 hover:text-purple-200 font-medium">Precision Agriculture Platform</a>
                <p class="text-slate-400 text-sm mt-1">AI-powered precision farming with satellite imagery, soil analysis, crop health monitoring, yield prediction, and automa...</p>
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
