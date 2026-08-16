import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: `Cloud Disaster Recovery-as-a-Service (DRaaS) | Zion Tech Group`,
  description: `Automated disaster recovery for cloud and hybrid environments. Continuous replication, automated failover, and regular DR testing. RPO under 15 minutes, RTO under 1 hour.`,
  keywords: 'Continuous data replication, Automated failover and failback, Regular DR testing (non-disruptive), Multi-region deployment, RPO < 15 min, RTO < 1 hour, Compliance reporting, Runbook automation, 24/7 monitoring, cloud, Technology, Zion Tech Group',
  alternates: {
    canonical: `https://ziontechgroup.com/services/cloud-disaster-recovery-service/`,
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
        
        <h1 className="text-4xl font-bold mb-6 text-white">Cloud Disaster Recovery-as-a-Service (DRaaS)</h1>
        <p className="text-lg text-slate-300 mb-8">Automated disaster recovery for cloud and hybrid environments. Continuous replication, automated failover, and regular DR testing. RPO under 15 minutes, RTO under 1 hour.</p>
        
        <div class="bg-slate-900 rounded-xl p-6 mb-8">
          <div class="flex flex-wrap gap-2 mb-4">
            <span class="text-xs px-3 py-1 bg-purple-900/30 rounded-full text-purple-300">cloud</span>
            <span class="text-xs px-3 py-1 bg-blue-900/30 rounded-full text-blue-300">Technology</span>
          </div>
          <h2 class="text-2xl font-semibold mb-4 text-white">Key Features</h2>
          <ul class="list-disc list-inside space-y-2">
        <li class="text-slate-300">Continuous data replication</li>
        <li class="text-slate-300">Automated failover and failback</li>
        <li class="text-slate-300">Regular DR testing (non-disruptive)</li>
        <li class="text-slate-300">Multi-region deployment</li>
        <li class="text-slate-300">RPO &lt; 15 min, RTO &lt; 1 hour</li>
        <li class="text-slate-300">Compliance reporting</li>
        <li class="text-slate-300">Runbook automation</li>
        <li class="text-slate-300">24/7 monitoring</li>
      </ul>
        </div>
        
        <div class="bg-slate-900 rounded-xl p-6 mb-8">
          <h2 class="text-2xl font-semibold mb-4 text-white">Benefits</h2>
          <ul class="list-disc list-inside space-y-2">
        <li class="text-slate-300">Meet business continuity requirements</li>
        <li class="text-slate-300">Automated DR testing</li>
        <li class="text-slate-300">Minimize data loss and downtime</li>
        <li class="text-slate-300">Reduce DR infrastructure costs</li>
      </ul>
        </div>
        
        
        <div class="border border-purple-500/30 rounded-xl p-6 mb-8">
          <h2 class="text-2xl font-semibold text-white mb-4">Pricing</h2>
          <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div class="bg-slate-800 rounded-lg p-4 text-center">
              <h3 class="font-semibold text-white mb-2">Basic</h3>
              <p class="text-2xl font-bold text-purple-400 mb-2">$1,499/mo</p>
              <p class="text-sm text-slate-400">Getting started plan</p>
            </div>
            <div class="bg-slate-800 rounded-lg p-4 text-center border-2 border-purple-500">
              <h3 class="font-semibold text-white mb-2">Pro</h3>
              <p class="text-2xl font-bold text-purple-400 mb-2">$4,499/mo</p>
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
            
            
              <div>
                <a href="/services/ai-cdn-edge-optimizer/" class="text-purple-300 hover:text-purple-200 font-medium">AI CDN & Edge Performance Optimizer</a>
                <p class="text-slate-400 text-sm mt-1">Optimize content delivery: intelligent caching, edge compute routing, image/video optimization, and DDoS protection. Rea...</p>
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
