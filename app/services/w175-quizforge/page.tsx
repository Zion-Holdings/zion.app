import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: `QuizForge — Assessment & Quiz Builder | Zion Tech Group`,
  description: `AI-powered quiz and assessment builder for education and training. Auto-generate from content, adaptive difficulty, and detailed analytics.`,
  keywords: 'AI question generation from content, Multiple question types (MC, short, essay, code), Adaptive difficulty adjustment, Timed assessments with anti-cheat, Detailed analytics and learning gaps, LMS integration (SCORM, Canvas, Moodle), Peer review and rubric support, micro-saas, Education, Zion Tech Group',
  alternates: {
    canonical: `https://ziontechgroup.com/services/w175-quizforge/`,
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
        
        <h1 className="text-4xl font-bold mb-6 text-white">QuizForge — Assessment &amp; Quiz Builder</h1>
        <p className="text-lg text-slate-300 mb-8">AI-powered quiz and assessment builder for education and training. Auto-generate from content, adaptive difficulty, and detailed analytics.</p>
        
        <div class="bg-slate-900 rounded-xl p-6 mb-8">
          <div class="flex flex-wrap gap-2 mb-4">
            <span class="text-xs px-3 py-1 bg-purple-900/30 rounded-full text-purple-300">micro-saas</span>
            <span class="text-xs px-3 py-1 bg-blue-900/30 rounded-full text-blue-300">Education</span>
          </div>
          <h2 class="text-2xl font-semibold mb-4 text-white">Key Features</h2>
          <ul class="list-disc list-inside space-y-2">
        <li class="text-slate-300">AI question generation from content</li>
        <li class="text-slate-300">Multiple question types (MC, short, essay, code)</li>
        <li class="text-slate-300">Adaptive difficulty adjustment</li>
        <li class="text-slate-300">Timed assessments with anti-cheat</li>
        <li class="text-slate-300">Detailed analytics and learning gaps</li>
        <li class="text-slate-300">LMS integration (SCORM, Canvas, Moodle)</li>
        <li class="text-slate-300">Peer review and rubric support</li>
      </ul>
        </div>
        
        <div class="bg-slate-900 rounded-xl p-6 mb-8">
          <h2 class="text-2xl font-semibold mb-4 text-white">Benefits</h2>
          <ul class="list-disc list-inside space-y-2">
        <li class="text-slate-300">Generate assessments from any content in minutes</li>
        <li class="text-slate-300">Adaptive difficulty challenges every student</li>
        <li class="text-slate-300">Analytics reveal learning gaps</li>
        <li class="text-slate-300">LMS-compatible delivery</li>
      </ul>
        </div>
        
        
        <div class="border border-purple-500/30 rounded-xl p-6 mb-8">
          <h2 class="text-2xl font-semibold text-white mb-4">Pricing</h2>
          <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div class="bg-slate-800 rounded-lg p-4 text-center">
              <h3 class="font-semibold text-white mb-2">Basic</h3>
              <p class="text-2xl font-bold text-purple-400 mb-2">$19/mo</p>
              <p class="text-sm text-slate-400">Getting started plan</p>
            </div>
            <div class="bg-slate-800 rounded-lg p-4 text-center border-2 border-purple-500">
              <h3 class="font-semibold text-white mb-2">Pro</h3>
              <p class="text-2xl font-bold text-purple-400 mb-2">$59/mo</p>
              <p class="text-sm text-slate-400">Most popular</p>
            </div>
            <div class="bg-slate-800 rounded-lg p-4 text-center">
              <h3 class="font-semibold text-white mb-2">Enterprise</h3>
              <p class="text-2xl font-bold text-purple-400 mb-2">$199/mo</p>
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
