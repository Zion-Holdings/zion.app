import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: `MeetingMind — AI Meeting Notes Micro-SaaS | Zion Tech Group`,
  description: `AI-powered meeting notes and action item extraction. Integrates with Zoom, Google Meet, and Teams to automatically transcribe, summarize, and extract action items from meetings. Share notes with one click.`,
  keywords: 'Auto-transcribe meetings (Zoom, Meet, Teams), AI summary with key decisions, Action item extraction and assignment, Search across all meeting notes, Integration with Slack, Notion, Asana, Speaker identification, Custom note templates, Export to PDF, Markdown, DOCX, micro-saas, Productivity, Zion Tech Group',
  alternates: {
    canonical: `https://ziontechgroup.com/services/micro-saas-meeting-notes-ai/`,
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
        
        <h1 className="text-4xl font-bold mb-6 text-white">MeetingMind — AI Meeting Notes Micro-SaaS</h1>
        <p className="text-lg text-slate-300 mb-8">AI-powered meeting notes and action item extraction. Integrates with Zoom, Google Meet, and Teams to automatically transcribe, summarize, and extract action items from meetings. Share notes with one click.</p>
        
        <div class="bg-slate-900 rounded-xl p-6 mb-8">
          <div class="flex flex-wrap gap-2 mb-4">
            <span class="text-xs px-3 py-1 bg-purple-900/30 rounded-full text-purple-300">micro-saas</span>
            <span class="text-xs px-3 py-1 bg-blue-900/30 rounded-full text-blue-300">Productivity</span>
          </div>
          <h2 class="text-2xl font-semibold mb-4 text-white">Key Features</h2>
          <ul class="list-disc list-inside space-y-2">
        <li class="text-slate-300">Auto-transcribe meetings (Zoom, Meet, Teams)</li>
        <li class="text-slate-300">AI summary with key decisions</li>
        <li class="text-slate-300">Action item extraction and assignment</li>
        <li class="text-slate-300">Search across all meeting notes</li>
        <li class="text-slate-300">Integration with Slack, Notion, Asana</li>
        <li class="text-slate-300">Speaker identification</li>
        <li class="text-slate-300">Custom note templates</li>
        <li class="text-slate-300">Export to PDF, Markdown, DOCX</li>
      </ul>
        </div>
        
        <div class="bg-slate-900 rounded-xl p-6 mb-8">
          <h2 class="text-2xl font-semibold mb-4 text-white">Benefits</h2>
          <ul class="list-disc list-inside space-y-2">
        <li class="text-slate-300">Never take manual meeting notes</li>
        <li class="text-slate-300">Find any decision in seconds</li>
        <li class="text-slate-300">Automatic action item tracking</li>
        <li class="text-slate-300">10x faster meeting follow-up</li>
      </ul>
        </div>
        
        
        <div class="border border-purple-500/30 rounded-xl p-6 mb-8">
          <h2 class="text-2xl font-semibold text-white mb-4">Pricing</h2>
          <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div class="bg-slate-800 rounded-lg p-4 text-center">
              <h3 class="font-semibold text-white mb-2">Basic</h3>
              <p class="text-2xl font-bold text-purple-400 mb-2">$39/mo</p>
              <p class="text-sm text-slate-400">Getting started plan</p>
            </div>
            <div class="bg-slate-800 rounded-lg p-4 text-center border-2 border-purple-500">
              <h3 class="font-semibold text-white mb-2">Pro</h3>
              <p class="text-2xl font-bold text-purple-400 mb-2">$119/mo</p>
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
                <a href="/services/ai-powered-form-builder/" class="text-purple-300 hover:text-purple-200 font-medium">AI-Powered Form & Survey Builder</a>
                <p class="text-slate-400 text-sm mt-1">Create intelligent forms and surveys with AI that suggests questions, analyzes responses, and generates insights. Includ...</p>
              </div>
            
            
              <div>
                <a href="/services/appointment-scheduling-suite/" class="text-purple-300 hover:text-purple-200 font-medium">Appointment Scheduling & Booking Suite</a>
                <p class="text-slate-400 text-sm mt-1">Professional scheduling solution for service businesses. Online booking, calendar sync (Google, Outlook), automated remi...</p>
              </div>
            
            
              <div>
                <a href="/services/customer-portal-builder/" class="text-purple-300 hover:text-purple-200 font-medium">Customer Self-Service Portal Builder</a>
                <p class="text-slate-400 text-sm mt-1">Build branded customer portals where clients can manage accounts, view invoices, submit tickets, track orders, and acces...</p>
              </div>
            
            
              <div>
                <a href="/services/digital-business-card-platform/" class="text-purple-300 hover:text-purple-200 font-medium">Digital Business Card & Networking Platform</a>
                <p class="text-slate-400 text-sm mt-1">Replace paper cards with smart digital business cards. NFC-enabled, analytics-tracked, with CRM sync and lead capture. I...</p>
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
