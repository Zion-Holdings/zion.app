import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: `IT Incident Response & War Room | Zion Tech Group`,
  description: `Structured incident response with war rooms, runbooks, automated triage, and post-mortem workflows. Reduce MTTR by 60% with orchestrated response.`,
  keywords: 'Automated incident triage and classification, War room creation with Slack/Teams bridge, Runbook execution (manual and automated), Escalation policies and on-call management, Status page integration, Post-mortem templates and tracking, PagerDuty, Opsgenie, VictorOps integration, it, IT Operations, Zion Tech Group',
  alternates: {
    canonical: `https://ziontechgroup.com/services/w174-incident-response/`,
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
        
        <h1 className="text-4xl font-bold mb-6 text-white">IT Incident Response &amp; War Room</h1>
        <p className="text-lg text-slate-300 mb-8">Structured incident response with war rooms, runbooks, automated triage, and post-mortem workflows. Reduce MTTR by 60% with orchestrated response.</p>
        
        <div class="bg-slate-900 rounded-xl p-6 mb-8">
          <div class="flex flex-wrap gap-2 mb-4">
            <span class="text-xs px-3 py-1 bg-purple-900/30 rounded-full text-purple-300">it</span>
            <span class="text-xs px-3 py-1 bg-blue-900/30 rounded-full text-blue-300">IT Operations</span>
          </div>
          <h2 class="text-2xl font-semibold mb-4 text-white">Key Features</h2>
          <ul class="list-disc list-inside space-y-2">
        <li class="text-slate-300">Automated incident triage and classification</li>
        <li class="text-slate-300">War room creation with Slack/Teams bridge</li>
        <li class="text-slate-300">Runbook execution (manual and automated)</li>
        <li class="text-slate-300">Escalation policies and on-call management</li>
        <li class="text-slate-300">Status page integration</li>
        <li class="text-slate-300">Post-mortem templates and tracking</li>
        <li class="text-slate-300">PagerDuty, Opsgenie, VictorOps integration</li>
      </ul>
        </div>
        
        <div class="bg-slate-900 rounded-xl p-6 mb-8">
          <h2 class="text-2xl font-semibold mb-4 text-white">Benefits</h2>
          <ul class="list-disc list-inside space-y-2">
        <li class="text-slate-300">Reduce MTTR by 60% with structured response</li>
        <li class="text-slate-300">War rooms unify communication instantly</li>
        <li class="text-slate-300">Runbooks ensure consistent response</li>
        <li class="text-slate-300">Post-mortems drive continuous improvement</li>
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
              <p class="text-2xl font-bold text-purple-400 mb-2">$1,199/mo</p>
              <p class="text-sm text-slate-400">Most popular</p>
            </div>
            <div class="bg-slate-800 rounded-lg p-4 text-center">
              <h3 class="font-semibold text-white mb-2">Enterprise</h3>
              <p class="text-2xl font-bold text-purple-400 mb-2">$3,999/mo</p>
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
                <a href="/services/ai-performance-monitoring/" class="text-purple-300 hover:text-purple-200 font-medium">AI-Powered Performance Monitoring</a>
                <p class="text-slate-400 text-sm mt-1">Infrastructure + application performance monitoring powered by AI: anomaly detection, root-cause analysis, predictive al...</p>
              </div>
            
            
              <div>
                <a href="/services/api-gateway-management/" class="text-purple-300 hover:text-purple-200 font-medium">API Gateway & Management</a>
                <p class="text-slate-400 text-sm mt-1">Secure, scale, and monitor your APIs with enterprise-grade gateway management, rate limiting, and developer portal....</p>
              </div>
            
            
              <div>
                <a href="/services/api-integration/" class="text-purple-300 hover:text-purple-200 font-medium">API Development & Integration</a>
                <p class="text-slate-400 text-sm mt-1">Custom API design, development, and integration — REST, GraphQL, Webhooks, and third-party service connectors....</p>
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
