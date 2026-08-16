import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: `AI Meeting Minutes Generator | Zion Tech Group`,
  description: `Transform every meeting into structured, actionable records in real time. AI transcribes conversations, identifies decisions and action items, assigns owners, and distributes summaries — ensuring nothing falls through the cracks.`,
  keywords: 'Real-time transcription with speaker diarization, Action item extraction with owner assignment, Decision & key takeaway summarization, Multi-language support (40+ languages), Calendar & project management integration, Searchable meeting archive with semantic search, Customizable output templates (Slack, email, Notion), micro-saas, General, Zion Tech Group',
  alternates: {
    canonical: `https://ziontechgroup.com/services/wave126-ai-meeting-minutes/`,
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
        
        <h1 className="text-4xl font-bold mb-6 text-white">AI Meeting Minutes Generator</h1>
        <p className="text-lg text-slate-300 mb-8">Transform every meeting into structured, actionable records in real time. AI transcribes conversations, identifies decisions and action items, assigns owners, and distributes summaries — ensuring nothing falls through the cracks.</p>
        
        <div class="bg-slate-900 rounded-xl p-6 mb-8">
          <div class="flex flex-wrap gap-2 mb-4">
            <span class="text-xs px-3 py-1 bg-purple-900/30 rounded-full text-purple-300">micro-saas</span>
            <span class="text-xs px-3 py-1 bg-blue-900/30 rounded-full text-blue-300">General</span>
          </div>
          <h2 class="text-2xl font-semibold mb-4 text-white">Key Features</h2>
          <ul class="list-disc list-inside space-y-2">
        <li class="text-slate-300">Real-time transcription with speaker diarization</li>
        <li class="text-slate-300">Action item extraction with owner assignment</li>
        <li class="text-slate-300">Decision &amp; key takeaway summarization</li>
        <li class="text-slate-300">Multi-language support (40+ languages)</li>
        <li class="text-slate-300">Calendar &amp; project management integration</li>
        <li class="text-slate-300">Searchable meeting archive with semantic search</li>
        <li class="text-slate-300">Customizable output templates (Slack, email, Notion)</li>
      </ul>
        </div>
        
        <div class="bg-slate-900 rounded-xl p-6 mb-8">
          <h2 class="text-2xl font-semibold mb-4 text-white">Benefits</h2>
          <ul class="list-disc list-inside space-y-2">
        <li class="text-slate-300">Never take manual notes again</li>
        <li class="text-slate-300">100% capture of decisions and commitments</li>
        <li class="text-slate-300">Instant accountability through action item tracking</li>
        <li class="text-slate-300">Searchable institutional memory across all meetings</li>
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
              <p class="text-2xl font-bold text-purple-400 mb-2">297</p>
              <p class="text-sm text-slate-400">Most popular</p>
            </div>
            <div class="bg-slate-800 rounded-lg p-4 text-center">
              <h3 class="font-semibold text-white mb-2">Enterprise</h3>
              <p class="text-2xl font-bold text-purple-400 mb-2">697</p>
              <p class="text-sm text-slate-400">Full-featured solution</p>
            </div>
          </div>
        </div>
        
        <div class="bg-slate-900/60 border border-slate-700/50 rounded-xl p-6 mb-8">
          <h2 class="text-2xl font-semibold text-white mb-4">Related Services</h2>
          <div class="grid md:grid-cols-2 gap-4">
            
              <div>
                <a href="/services/accessibility-compliance/" class="text-purple-300 hover:text-purple-200 font-medium">Accessibility & WCAG Compliance</a>
                <p class="text-slate-400 text-sm mt-1">Automated WCAG 2.2 auditing, AI-powered remediation suggestions, screen reader simulation, and continuous accessibility ...</p>
              </div>
            
            
              <div>
                <a href="/services/agentic-workflow-orchestrator/" class="text-purple-300 hover:text-purple-200 font-medium">Agentic Workflow Orchestrator</a>
                <p class="text-slate-400 text-sm mt-1">Orchestrate multi-agent AI workflows: DAG of agents with routing, handoff, conditional branches, state persistence, retr...</p>
              </div>
            
            
              <div>
                <a href="/services/ai-accessibility-auditor/" class="text-purple-300 hover:text-purple-200 font-medium">AI Accessibility Auditor</a>
                <p class="text-slate-400 text-sm mt-1">Automated WCAG 2.1 AA compliance scans for websites & apps with screen-reader simulation, color contrast testing, and ke...</p>
              </div>
            
            
              <div>
                <a href="/services/ai-agent-safety-evaluation/" class="text-purple-300 hover:text-purple-200 font-medium">Ai Agent Safety Evaluation</a>
                <p class="text-slate-400 text-sm mt-1">Ai Agent Safety Evaluation — comprehensive managed service with expert support and proven delivery methodology....</p>
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
