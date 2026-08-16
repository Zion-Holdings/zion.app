import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: `SurveyLab - Survey Builder | Zion Tech Group`,
  description: `Professional survey and feedback collection platform with advanced logic, branching, and analytics. Perfect for market research and customer feedback.`,
  keywords: 'Drag-drop Builder, Conditional Logic, Multi-language, Analytics Dashboard, API Access, Micro-SaaS, Research, Zion Tech Group',
  alternates: {
    canonical: `https://ziontechgroup.com/services/microsaas-survey-builder/`,
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
        
        <h1 className="text-4xl font-bold mb-6 text-white">SurveyLab - Survey Builder</h1>
        <p className="text-lg text-slate-300 mb-8">Professional survey and feedback collection platform with advanced logic, branching, and analytics. Perfect for market research and customer feedback.</p>
        
        <div class="bg-slate-900 rounded-xl p-6 mb-8">
          <div class="flex flex-wrap gap-2 mb-4">
            <span class="text-xs px-3 py-1 bg-purple-900/30 rounded-full text-purple-300">Micro-SaaS</span>
            <span class="text-xs px-3 py-1 bg-blue-900/30 rounded-full text-blue-300">Research</span>
          </div>
          <h2 class="text-2xl font-semibold mb-4 text-white">Key Features</h2>
          <ul class="list-disc list-inside space-y-2">
        <li class="text-slate-300">Drag-drop Builder</li>
        <li class="text-slate-300">Conditional Logic</li>
        <li class="text-slate-300">Multi-language</li>
        <li class="text-slate-300">Analytics Dashboard</li>
        <li class="text-slate-300">API Access</li>
      </ul>
        </div>
        
        <div class="bg-slate-900 rounded-xl p-6 mb-8">
          <h2 class="text-2xl font-semibold mb-4 text-white">Benefits</h2>
          <ul class="list-disc list-inside space-y-2">
        <li class="text-slate-300">Collect better feedback</li>
        <li class="text-slate-300">Increase response rates</li>
        <li class="text-slate-300">Actionable insights</li>
      </ul>
        </div>
        
        
        <div class="border border-purple-500/30 rounded-xl p-6 mb-8">
          <h2 class="text-2xl font-semibold text-white mb-4">Pricing</h2>
          <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div class="bg-slate-800 rounded-lg p-4 text-center">
              <h3 class="font-semibold text-white mb-2">Basic</h3>
              <p class="text-2xl font-bold text-purple-400 mb-2">$25/mo</p>
              <p class="text-sm text-slate-400">Getting started plan</p>
            </div>
            <div class="bg-slate-800 rounded-lg p-4 text-center border-2 border-purple-500">
              <h3 class="font-semibold text-white mb-2">Pro</h3>
              <p class="text-2xl font-bold text-purple-400 mb-2">$69/mo</p>
              <p class="text-sm text-slate-400">Most popular</p>
            </div>
            <div class="bg-slate-800 rounded-lg p-4 text-center">
              <h3 class="font-semibold text-white mb-2">Enterprise</h3>
              <p class="text-2xl font-bold text-purple-400 mb-2">$129/mo</p>
              <p class="text-sm text-slate-400">Full-featured solution</p>
            </div>
          </div>
        </div>
        
        <div class="bg-slate-900/60 border border-slate-700/50 rounded-xl p-6 mb-8">
          <h2 class="text-2xl font-semibold text-white mb-4">Related Services</h2>
          <div class="grid md:grid-cols-2 gap-4">
            
              <div>
                <a href="/services/ai-autonomous-research-assistant/" class="text-purple-300 hover:text-purple-200 font-medium">AI Autonomous Research Assistant</a>
                <p class="text-slate-400 text-sm mt-1">AI agent that autonomously conducts deep research across academic papers, patents, news, and databases. Produces cited r...</p>
              </div>
            
            
              <div>
                <a href="/services/microsaas-customer-portal/" class="text-purple-300 hover:text-purple-200 font-medium">ClientPortal - Customer Portal</a>
                <p class="text-slate-400 text-sm mt-1">White-label customer portal with ticket management, knowledge base, billing overview, and self-service options. Reduces ...</p>
              </div>
            
            
              <div>
                <a href="/services/microsaas-email-campaign-manager/" class="text-purple-300 hover:text-purple-200 font-medium">CampaignHub - Email Campaign Manager</a>
                <p class="text-slate-400 text-sm mt-1">All-in-one email campaign platform with drag-and-drop editor, A/B testing, automation workflows, and deliverability opti...</p>
              </div>
            
            
              <div>
                <a href="/services/microsaas-project-management/" class="text-purple-300 hover:text-purple-200 font-medium">ProjectHub - Project Management</a>
                <p class="text-slate-400 text-sm mt-1">Intuitive project management platform with Kanban boards, Gantt charts, time tracking, and team collaboration features. ...</p>
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
