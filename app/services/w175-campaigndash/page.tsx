import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: `CampaignDash — Ad Campaign Analytics | Zion Tech Group`,
  description: `Unified ad campaign analytics across Google, Meta, LinkedIn, TikTok, and X. Cross-channel ROI, attribution, and optimization recommendations.`,
  keywords: 'Cross-channel campaign aggregation, ROAS and CPA tracking by channel and campaign, Attribution modeling (first, last, multi-touch), AI optimization recommendations, Budget pacing and reallocation alerts, Custom dashboards and reports, Google, Meta, LinkedIn, TikTok, X integration, micro-saas, Marketing, Zion Tech Group',
  alternates: {
    canonical: `https://ziontechgroup.com/services/w175-campaigndash/`,
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
        
        <h1 className="text-4xl font-bold mb-6 text-white">CampaignDash — Ad Campaign Analytics</h1>
        <p className="text-lg text-slate-300 mb-8">Unified ad campaign analytics across Google, Meta, LinkedIn, TikTok, and X. Cross-channel ROI, attribution, and optimization recommendations.</p>
        
        <div class="bg-slate-900 rounded-xl p-6 mb-8">
          <div class="flex flex-wrap gap-2 mb-4">
            <span class="text-xs px-3 py-1 bg-purple-900/30 rounded-full text-purple-300">micro-saas</span>
            <span class="text-xs px-3 py-1 bg-blue-900/30 rounded-full text-blue-300">Marketing</span>
          </div>
          <h2 class="text-2xl font-semibold mb-4 text-white">Key Features</h2>
          <ul class="list-disc list-inside space-y-2">
        <li class="text-slate-300">Cross-channel campaign aggregation</li>
        <li class="text-slate-300">ROAS and CPA tracking by channel and campaign</li>
        <li class="text-slate-300">Attribution modeling (first, last, multi-touch)</li>
        <li class="text-slate-300">AI optimization recommendations</li>
        <li class="text-slate-300">Budget pacing and reallocation alerts</li>
        <li class="text-slate-300">Custom dashboards and reports</li>
        <li class="text-slate-300">Google, Meta, LinkedIn, TikTok, X integration</li>
      </ul>
        </div>
        
        <div class="bg-slate-900 rounded-xl p-6 mb-8">
          <h2 class="text-2xl font-semibold mb-4 text-white">Benefits</h2>
          <ul class="list-disc list-inside space-y-2">
        <li class="text-slate-300">See all ad performance in one dashboard</li>
        <li class="text-slate-300">Attribution reveals true channel value</li>
        <li class="text-slate-300">AI recommendations improve ROAS 15%</li>
        <li class="text-slate-300">Budget pacing prevents overspend</li>
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
                <a href="/services/ai-accessibility-optimizer/" class="text-purple-300 hover:text-purple-200 font-medium">AI Accessibility Content Optimizer</a>
                <p class="text-slate-400 text-sm mt-1">Suggests alt-text for images, transcript generation for videos, and semantic HTML improvements to boost accessibility an...</p>
              </div>
            
            
              <div>
                <a href="/services/ai-ad-copy-generator/" class="text-purple-300 hover:text-purple-200 font-medium">Ai Ad Copy Generator</a>
                <p class="text-slate-400 text-sm mt-1">AI Ad Copy Generator — enterprise-grade solution with AI-powered automation, real-time analytics, and seamless integrati...</p>
              </div>
            
            
              <div>
                <a href="/services/ai-brand-voice-guardian/" class="text-purple-300 hover:text-purple-200 font-medium">AI Brand Voice Guardian</a>
                <p class="text-slate-400 text-sm mt-1">Maintain consistent brand voice. AI audits existing content, generates tone guidelines, and rewrites copy in real time t...</p>
              </div>
            
            
              <div>
                <a href="/services/ai-competitor-intelligence/" class="text-purple-300 hover:text-purple-200 font-medium">Competitor Intelligence Engine</a>
                <p class="text-slate-400 text-sm mt-1">Automated competitor tracking: pricing changes, feature releases, marketing campaigns from 10K+ sources. Weekly digest +...</p>
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
