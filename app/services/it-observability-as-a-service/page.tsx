import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: `IT Observability-as-a-Service (OaaS) | Zion Tech Group`,
  description: `Full-stack observability platform covering metrics, logs, traces, and user experience. AI-powered anomaly detection, root cause analysis, and automated remediation. Unified dashboard for infrastructure, applications, and business metrics.`,
  keywords: 'Unified metrics, logs, and traces, AI-powered anomaly detection, Automated root cause analysis, Real user monitoring (RUM), Synthetic monitoring, Custom alerting and escalation, Cost optimization insights, OpenTelemetry native, it, Technology, Zion Tech Group',
  alternates: {
    canonical: `https://ziontechgroup.com/services/it-observability-as-a-service/`,
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
        
        <h1 className="text-4xl font-bold mb-6 text-white">IT Observability-as-a-Service (OaaS)</h1>
        <p className="text-lg text-slate-300 mb-8">Full-stack observability platform covering metrics, logs, traces, and user experience. AI-powered anomaly detection, root cause analysis, and automated remediation. Unified dashboard for infrastructure, applications, and business metrics.</p>
        
        <div class="bg-slate-900 rounded-xl p-6 mb-8">
          <div class="flex flex-wrap gap-2 mb-4">
            <span class="text-xs px-3 py-1 bg-purple-900/30 rounded-full text-purple-300">it</span>
            <span class="text-xs px-3 py-1 bg-blue-900/30 rounded-full text-blue-300">Technology</span>
          </div>
          <h2 class="text-2xl font-semibold mb-4 text-white">Key Features</h2>
          <ul class="list-disc list-inside space-y-2">
        <li class="text-slate-300">Unified metrics, logs, and traces</li>
        <li class="text-slate-300">AI-powered anomaly detection</li>
        <li class="text-slate-300">Automated root cause analysis</li>
        <li class="text-slate-300">Real user monitoring (RUM)</li>
        <li class="text-slate-300">Synthetic monitoring</li>
        <li class="text-slate-300">Custom alerting and escalation</li>
        <li class="text-slate-300">Cost optimization insights</li>
        <li class="text-slate-300">OpenTelemetry native</li>
      </ul>
        </div>
        
        <div class="bg-slate-900 rounded-xl p-6 mb-8">
          <h2 class="text-2xl font-semibold mb-4 text-white">Benefits</h2>
          <ul class="list-disc list-inside space-y-2">
        <li class="text-slate-300">Reduce MTTR by 80%</li>
        <li class="text-slate-300">Proactive issue detection</li>
        <li class="text-slate-300">Unified visibility across stacks</li>
        <li class="text-slate-300">Optimize cloud spending</li>
      </ul>
        </div>
        
        
        <div class="border border-purple-500/30 rounded-xl p-6 mb-8">
          <h2 class="text-2xl font-semibold text-white mb-4">Pricing</h2>
          <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div class="bg-slate-800 rounded-lg p-4 text-center">
              <h3 class="font-semibold text-white mb-2">Basic</h3>
              <p class="text-2xl font-bold text-purple-400 mb-2">$399/mo</p>
              <p class="text-sm text-slate-400">Getting started plan</p>
            </div>
            <div class="bg-slate-800 rounded-lg p-4 text-center border-2 border-purple-500">
              <h3 class="font-semibold text-white mb-2">Pro</h3>
              <p class="text-2xl font-bold text-purple-400 mb-2">$1,299/mo</p>
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
