import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: `Green Computing & Carbon-Neutral IT Consulting | Zion Tech Group`,
  description: `Sustainability-first IT consulting. Carbon footprint assessment, green cloud migration strategies, and regulatory compliance for ESG reporting.`,
  keywords: 'IT carbon footprint assessment, Green cloud migration roadmap, Energy-efficient architecture design, ESG compliance reporting (GRI, CDP), Vendor sustainability scoring, Carbon offset integration, Green SLA frameworks, Executive sustainability dashboards, it, Technology, Zion Tech Group',
  alternates: {
    canonical: `https://ziontechgroup.com/services/it-green-computing-consulting/`,
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
        
        <h1 className="text-4xl font-bold mb-6 text-white">Green Computing &amp; Carbon-Neutral IT Consulting</h1>
        <p className="text-lg text-slate-300 mb-8">Sustainability-first IT consulting. Carbon footprint assessment, green cloud migration strategies, and regulatory compliance for ESG reporting.</p>
        
        <div class="bg-slate-900 rounded-xl p-6 mb-8">
          <div class="flex flex-wrap gap-2 mb-4">
            <span class="text-xs px-3 py-1 bg-purple-900/30 rounded-full text-purple-300">it</span>
            <span class="text-xs px-3 py-1 bg-blue-900/30 rounded-full text-blue-300">Technology</span>
          </div>
          <h2 class="text-2xl font-semibold mb-4 text-white">Key Features</h2>
          <ul class="list-disc list-inside space-y-2">
        <li class="text-slate-300">IT carbon footprint assessment</li>
        <li class="text-slate-300">Green cloud migration roadmap</li>
        <li class="text-slate-300">Energy-efficient architecture design</li>
        <li class="text-slate-300">ESG compliance reporting (GRI, CDP)</li>
        <li class="text-slate-300">Vendor sustainability scoring</li>
        <li class="text-slate-300">Carbon offset integration</li>
        <li class="text-slate-300">Green SLA frameworks</li>
        <li class="text-slate-300">Executive sustainability dashboards</li>
      </ul>
        </div>
        
        <div class="bg-slate-900 rounded-xl p-6 mb-8">
          <h2 class="text-2xl font-semibold mb-4 text-white">Benefits</h2>
          <ul class="list-disc list-inside space-y-2">
        <li class="text-slate-300">Meet ESG regulatory requirements</li>
        <li class="text-slate-300">Reduce cloud costs by 20%</li>
        <li class="text-slate-300">Attract sustainability-conscious customers</li>
        <li class="text-slate-300">Future-proof IT operations</li>
      </ul>
        </div>
        
        
        <div class="border border-purple-500/30 rounded-xl p-6 mb-8">
          <h2 class="text-2xl font-semibold text-white mb-4">Pricing</h2>
          <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div class="bg-slate-800 rounded-lg p-4 text-center">
              <h3 class="font-semibold text-white mb-2">Basic</h3>
              <p class="text-2xl font-bold text-purple-400 mb-2">$2,499/mo</p>
              <p class="text-sm text-slate-400">Getting started plan</p>
            </div>
            <div class="bg-slate-800 rounded-lg p-4 text-center border-2 border-purple-500">
              <h3 class="font-semibold text-white mb-2">Pro</h3>
              <p class="text-2xl font-bold text-purple-400 mb-2">$7,499/mo</p>
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
                <a href="/services/accessibility-compliance/" class="text-purple-300 hover:text-purple-200 font-medium">Accessibility & WCAG Compliance</a>
                <p class="text-slate-400 text-sm mt-1">Automated WCAG 2.2 auditing, AI-powered remediation suggestions, screen reader simulation, and continuous accessibility ...</p>
              </div>
            
            
              <div>
                <a href="/services/ai-accessibility-compliance-auditor/" class="text-purple-300 hover:text-purple-200 font-medium">AI Accessibility Compliance Auditor</a>
                <p class="text-slate-400 text-sm mt-1">Automated WCAG 2.1/2.2 compliance auditing for websites and applications. Detect accessibility violations, generate reme...</p>
              </div>
            
            
              <div>
                <a href="/services/ai-agent-orchestration-platform/" class="text-purple-300 hover:text-purple-200 font-medium">AI Agent Orchestration Platform</a>
                <p class="text-slate-400 text-sm mt-1">Build, deploy, and manage autonomous AI agents. Multi-agent workflows, tool integration, memory management, and human-in...</p>
              </div>
            
            
              <div>
                <a href="/services/ai-anomaly-detection-platform/" class="text-purple-300 hover:text-purple-200 font-medium">Real-Time Anomaly Detection Platform</a>
                <p class="text-slate-400 text-sm mt-1">AI-powered anomaly detection for metrics, logs, and events. Unsupervised learning, adaptive thresholds, root cause analy...</p>
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
