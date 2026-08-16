import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: `AI Video Summarization & Knowledge Extraction Platform | Zion Tech Group`,
  description: `Automatically transcribe, summarize, and extract key insights from video content. Generate chapters, highlight reels, and searchable transcripts.`,
  keywords: 'Automatic transcription in 50+ languages, AI-generated video summaries and chapters, Key moment and highlight detection, Searchable video knowledge base, Action item and decision extraction, Speaker identification and diarization, Zoom, Teams, YouTube integration, API for embedding, ai, media, Zion Tech Group',
  alternates: {
    canonical: `https://ziontechgroup.com/services/ai-video-knowledge-summarization/`,
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
        
        <h1 className="text-4xl font-bold mb-6 text-white">AI Video Summarization &amp; Knowledge Extraction Platform</h1>
        <p className="text-lg text-slate-300 mb-8">Automatically transcribe, summarize, and extract key insights from video content. Generate chapters, highlight reels, and searchable transcripts.</p>
        
        <div class="bg-slate-900 rounded-xl p-6 mb-8">
          <div class="flex flex-wrap gap-2 mb-4">
            <span class="text-xs px-3 py-1 bg-purple-900/30 rounded-full text-purple-300">ai</span>
            <span class="text-xs px-3 py-1 bg-blue-900/30 rounded-full text-blue-300">media</span>
          </div>
          <h2 class="text-2xl font-semibold mb-4 text-white">Key Features</h2>
          <ul class="list-disc list-inside space-y-2">
        <li class="text-slate-300">Automatic transcription in 50+ languages</li>
        <li class="text-slate-300">AI-generated video summaries and chapters</li>
        <li class="text-slate-300">Key moment and highlight detection</li>
        <li class="text-slate-300">Searchable video knowledge base</li>
        <li class="text-slate-300">Action item and decision extraction</li>
        <li class="text-slate-300">Speaker identification and diarization</li>
        <li class="text-slate-300">Zoom, Teams, YouTube integration</li>
        <li class="text-slate-300">API for embedding</li>
      </ul>
        </div>
        
        <div class="bg-slate-900 rounded-xl p-6 mb-8">
          <h2 class="text-2xl font-semibold mb-4 text-white">Benefits</h2>
          <ul class="list-disc list-inside space-y-2">
        <li class="text-slate-300">Turn hours of video into minutes of insights</li>
        <li class="text-slate-300">Make all video content searchable</li>
        <li class="text-slate-300">Never miss important decisions</li>
        <li class="text-slate-300">Increase video content ROI by 5x</li>
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
              <p class="text-2xl font-bold text-purple-400 mb-2">$149/mo</p>
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
                <a href="/services/adaptive-analyzer-media-6418ae54/" class="text-purple-300 hover:text-purple-200 font-medium">Adaptive analyzer-media</a>
                <p class="text-slate-400 text-sm mt-1">Unlock unprecedented growth with Adaptive analyzer-media. This autonomous system provides user experience with zero manu...</p>
              </div>
            
            
              <div>
                <a href="/services/adaptive-automation-media-6b73f3c1/" class="text-purple-300 hover:text-purple-200 font-medium">Adaptive automation-media</a>
                <p class="text-slate-400 text-sm mt-1">Transform your media operations with our Adaptive automation-media. This AI-driven solution automates inventory manageme...</p>
              </div>
            
            
              <div>
                <a href="/services/adaptive-director-media-d7843949/" class="text-purple-300 hover:text-purple-200 font-medium">Adaptive director-media</a>
                <p class="text-slate-400 text-sm mt-1">Next-generation media solution: Adaptive director-media. Combines decision support with adaptive intelligence for optima...</p>
              </div>
            
            
              <div>
                <a href="/services/adaptive-energy-orchestrator-e94975fd/" class="text-purple-300 hover:text-purple-200 font-medium">Adaptive Energy Orchestrator</a>
                <p class="text-slate-400 text-sm mt-1">Revolutionize media through intelligent automation. Our Adaptive Energy Orchestrator leverages advanced machine learning...</p>
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
