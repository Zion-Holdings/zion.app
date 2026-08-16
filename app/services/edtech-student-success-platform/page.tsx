import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: `AI Student Success Platform | Zion Tech Group`,
  description: `Predict and prevent student dropout with AI. Analyze engagement, performance, and behavioral data to identify at-risk students and recommend interventions.`,
  keywords: 'Early warning system for at-risk students, Engagement tracking across platforms, Predictive analytics for retention, Automated intervention recommendations, Advisor dashboard, Communication automation, Success outcome tracking, Integration with SIS and LMS, edtech, Education, Zion Tech Group',
  alternates: {
    canonical: `https://ziontechgroup.com/services/edtech-student-success-platform/`,
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
        
        <h1 className="text-4xl font-bold mb-6 text-white">AI Student Success Platform</h1>
        <p className="text-lg text-slate-300 mb-8">Predict and prevent student dropout with AI. Analyze engagement, performance, and behavioral data to identify at-risk students and recommend interventions.</p>
        
        <div class="bg-slate-900 rounded-xl p-6 mb-8">
          <div class="flex flex-wrap gap-2 mb-4">
            <span class="text-xs px-3 py-1 bg-purple-900/30 rounded-full text-purple-300">edtech</span>
            <span class="text-xs px-3 py-1 bg-blue-900/30 rounded-full text-blue-300">Education</span>
          </div>
          <h2 class="text-2xl font-semibold mb-4 text-white">Key Features</h2>
          <ul class="list-disc list-inside space-y-2">
        <li class="text-slate-300">Early warning system for at-risk students</li>
        <li class="text-slate-300">Engagement tracking across platforms</li>
        <li class="text-slate-300">Predictive analytics for retention</li>
        <li class="text-slate-300">Automated intervention recommendations</li>
        <li class="text-slate-300">Advisor dashboard</li>
        <li class="text-slate-300">Communication automation</li>
        <li class="text-slate-300">Success outcome tracking</li>
        <li class="text-slate-300">Integration with SIS and LMS</li>
      </ul>
        </div>
        
        <div class="bg-slate-900 rounded-xl p-6 mb-8">
          <h2 class="text-2xl font-semibold mb-4 text-white">Benefits</h2>
          <ul class="list-disc list-inside space-y-2">
        <li class="text-slate-300">Improve retention rates by 20%</li>
        <li class="text-slate-300">Identify at-risk students early</li>
        <li class="text-slate-300">Data-driven intervention strategies</li>
        <li class="text-slate-300">Improve graduation rates</li>
      </ul>
        </div>
        
        
        <div class="border border-purple-500/30 rounded-xl p-6 mb-8">
          <h2 class="text-2xl font-semibold text-white mb-4">Pricing</h2>
          <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div class="bg-slate-800 rounded-lg p-4 text-center">
              <h3 class="font-semibold text-white mb-2">Basic</h3>
              <p class="text-2xl font-bold text-purple-400 mb-2">$499/mo</p>
              <p class="text-sm text-slate-400">Getting started plan</p>
            </div>
            <div class="bg-slate-800 rounded-lg p-4 text-center border-2 border-purple-500">
              <h3 class="font-semibold text-white mb-2">Pro</h3>
              <p class="text-2xl font-bold text-purple-400 mb-2">$1,499/mo</p>
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
                <a href="/services/ai-citation-generation-platform/" class="text-purple-300 hover:text-purple-200 font-medium">AI Citation Generation Platform</a>
                <p class="text-slate-400 text-sm mt-1">Automatic citation generation and management for academic and professional writing. Supports APA, MLA, Chicago, Harvard,...</p>
              </div>
            
            
              <div>
                <a href="/services/ai-education-adaptive-tutor/" class="text-purple-300 hover:text-purple-200 font-medium">AI Adaptive Tutoring System</a>
                <p class="text-slate-400 text-sm mt-1">Personalized K-12 adaptive: adjusts difficulty by mastery scaffolds strugglers accelerates high performers curriculum-st...</p>
              </div>
            
            
              <div>
                <a href="/services/ai-education-tutor/" class="text-purple-300 hover:text-purple-200 font-medium">AI 1:1 Tutor for K–12 & Higher Ed</a>
                <p class="text-slate-400 text-sm mt-1">Personalized learning companion that adapts to student\...</p>
              </div>
            
            
              <div>
                <a href="/services/ai-personalized-learning-platform/" class="text-purple-300 hover:text-purple-200 font-medium">AI Personalized Learning Platform</a>
                <p class="text-slate-400 text-sm mt-1">Adaptive learning platform that creates personalized curricula based on individual learning styles, goals, and progress....</p>
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
