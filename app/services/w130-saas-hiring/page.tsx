import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: `AI Hiring & Recruitment Platform | Zion Tech Group`,
  description: `End-to-end AI recruitment: JD writing, candidate sourcing, resume screening, interview scheduling, and offer management. Reduces time-to-hire by 65%.`,
  keywords: 'AI job description writing, Multi-platform candidate sourcing, Resume parsing & scoring, Automated interview scheduling, Video interview analysis, Offer letter generation, Onboarding automation, DEI analytics, micro-saas, hr-tech, Zion Tech Group',
  alternates: {
    canonical: `https://ziontechgroup.com/services/w130-saas-hiring/`,
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
        
        <h1 className="text-4xl font-bold mb-6 text-white">AI Hiring &amp; Recruitment Platform</h1>
        <p className="text-lg text-slate-300 mb-8">End-to-end AI recruitment: JD writing, candidate sourcing, resume screening, interview scheduling, and offer management. Reduces time-to-hire by 65%.</p>
        
        <div class="bg-slate-900 rounded-xl p-6 mb-8">
          <div class="flex flex-wrap gap-2 mb-4">
            <span class="text-xs px-3 py-1 bg-purple-900/30 rounded-full text-purple-300">micro-saas</span>
            <span class="text-xs px-3 py-1 bg-blue-900/30 rounded-full text-blue-300">hr-tech</span>
          </div>
          <h2 class="text-2xl font-semibold mb-4 text-white">Key Features</h2>
          <ul class="list-disc list-inside space-y-2">
        <li class="text-slate-300">AI job description writing</li>
        <li class="text-slate-300">Multi-platform candidate sourcing</li>
        <li class="text-slate-300">Resume parsing &amp; scoring</li>
        <li class="text-slate-300">Automated interview scheduling</li>
        <li class="text-slate-300">Video interview analysis</li>
        <li class="text-slate-300">Offer letter generation</li>
        <li class="text-slate-300">Onboarding automation</li>
        <li class="text-slate-300">DEI analytics</li>
      </ul>
        </div>
        
        <div class="bg-slate-900 rounded-xl p-6 mb-8">
          <h2 class="text-2xl font-semibold mb-4 text-white">Benefits</h2>
          <ul class="list-disc list-inside space-y-2">
        <li class="text-slate-300">65% faster hiring</li>
        <li class="text-slate-300">40% better quality of hire</li>
        <li class="text-slate-300">Reduce recruiter workload by 70%</li>
        <li class="text-slate-300">Improve candidate experience</li>
        <li class="text-slate-300">Bias reduction in screening</li>
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
              <p class="text-2xl font-bold text-purple-400 mb-2">1997</p>
              <p class="text-sm text-slate-400">Most popular</p>
            </div>
            <div class="bg-slate-800 rounded-lg p-4 text-center">
              <h3 class="font-semibold text-white mb-2">Enterprise</h3>
              <p class="text-2xl font-bold text-purple-400 mb-2">4997</p>
              <p class="text-sm text-slate-400">Full-featured solution</p>
            </div>
          </div>
        </div>
        
        <div class="bg-slate-900/60 border border-slate-700/50 rounded-xl p-6 mb-8">
          <h2 class="text-2xl font-semibold text-white mb-4">Related Services</h2>
          <div class="grid md:grid-cols-2 gap-4">
            
              <div>
                <a href="/services/ai-employee-engagement/" class="text-purple-300 hover:text-purple-200 font-medium">AI Employee Engagement & Retention Platform</a>
                <p class="text-slate-400 text-sm mt-1">AI platform that measures employee engagement in real-time, predicts flight risk, and recommends retention actions. Puls...</p>
              </div>
            
            
              <div>
                <a href="/services/ai-hr-talent-analytics/" class="text-purple-300 hover:text-purple-200 font-medium">AI HR Talent Analytics & Workforce Planning</a>
                <p class="text-slate-400 text-sm mt-1">AI-powered workforce analytics for hiring, retention, and organizational planning. Predict attrition, identify high-pote...</p>
              </div>
            
            
              <div>
                <a href="/services/ai-powered-form-builder/" class="text-purple-300 hover:text-purple-200 font-medium">AI-Powered Form & Survey Builder</a>
                <p class="text-slate-400 text-sm mt-1">Create intelligent forms and surveys with AI that suggests questions, analyzes responses, and generates insights. Includ...</p>
              </div>
            
            
              <div>
                <a href="/services/appointment-scheduling-suite/" class="text-purple-300 hover:text-purple-200 font-medium">Appointment Scheduling & Booking Suite</a>
                <p class="text-slate-400 text-sm mt-1">Professional scheduling solution for service businesses. Online booking, calendar sync (Google, Outlook), automated remi...</p>
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
