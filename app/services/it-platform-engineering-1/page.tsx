import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: `Internal Developer Platform (IDP) Engineering | Zion Tech Group`,
  description: `Design and build an Internal Developer Platform (IDP) that provides self-service capabilities for developers — spinning up environments, deploying applications, and managing infrastructure through golden paths.`,
  keywords: 'Self-service environment provisioning (Backstage, Port, or custom), Golden path templates for common architectures, Internal API marketplace and service catalog, Automated deployment pipelines per service type, Developer portal with documentation and onboarding, Abstractions over cloud services for simplicity, Usage tracking and cost attribution per team, Platform observability and SLO management, it, SaaS, Zion Tech Group',
  alternates: {
    canonical: `https://ziontechgroup.com/services/it-platform-engineering-1/`,
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
        
        <h1 className="text-4xl font-bold mb-6 text-white">Internal Developer Platform (IDP) Engineering</h1>
        <p className="text-lg text-slate-300 mb-8">Design and build an Internal Developer Platform (IDP) that provides self-service capabilities for developers — spinning up environments, deploying applications, and managing infrastructure through golden paths.</p>
        
        <div class="bg-slate-900 rounded-xl p-6 mb-8">
          <div class="flex flex-wrap gap-2 mb-4">
            <span class="text-xs px-3 py-1 bg-purple-900/30 rounded-full text-purple-300">it</span>
            <span class="text-xs px-3 py-1 bg-blue-900/30 rounded-full text-blue-300">SaaS</span>
          </div>
          <h2 class="text-2xl font-semibold mb-4 text-white">Key Features</h2>
          <ul class="list-disc list-inside space-y-2">
        <li class="text-slate-300">Self-service environment provisioning (Backstage, Port, or custom)</li>
        <li class="text-slate-300">Golden path templates for common architectures</li>
        <li class="text-slate-300">Internal API marketplace and service catalog</li>
        <li class="text-slate-300">Automated deployment pipelines per service type</li>
        <li class="text-slate-300">Developer portal with documentation and onboarding</li>
        <li class="text-slate-300">Abstractions over cloud services for simplicity</li>
        <li class="text-slate-300">Usage tracking and cost attribution per team</li>
        <li class="text-slate-300">Platform observability and SLO management</li>
      </ul>
        </div>
        
        <div class="bg-slate-900 rounded-xl p-6 mb-8">
          <h2 class="text-2xl font-semibold mb-4 text-white">Benefits</h2>
          <ul class="list-disc list-inside space-y-2">
        <li class="text-slate-300">Reduce costs with internal developer platform (idp) engineering</li>
        <li class="text-slate-300">Improve operational efficiency</li>
        <li class="text-slate-300">Scale without complexity</li>
        <li class="text-slate-300">Enterprise-grade reliability</li>
      </ul>
        </div>
        
        
        <div class="border border-purple-500/30 rounded-xl p-6 mb-8">
          <h2 class="text-2xl font-semibold text-white mb-4">Pricing</h2>
          <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div class="bg-slate-800 rounded-lg p-4 text-center">
              <h3 class="font-semibold text-white mb-2">Basic</h3>
              <p class="text-2xl font-bold text-purple-400 mb-2">$2,999/mo</p>
              <p class="text-sm text-slate-400">Getting started plan</p>
            </div>
            <div class="bg-slate-800 rounded-lg p-4 text-center border-2 border-purple-500">
              <h3 class="font-semibold text-white mb-2">Pro</h3>
              <p class="text-2xl font-bold text-purple-400 mb-2">Custom</p>
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
                <a href="/services/ai-customer-churn-prediction/" class="text-purple-300 hover:text-purple-200 font-medium">Customer Churn Prediction & Prevention</a>
                <p class="text-slate-400 text-sm mt-1">Predict which customers are at risk of leaving, understand why, and trigger automated retention campaigns. Integrates wi...</p>
              </div>
            
            
              <div>
                <a href="/services/ai-performance-monitoring/" class="text-purple-300 hover:text-purple-200 font-medium">AI-Powered Performance Monitoring</a>
                <p class="text-slate-400 text-sm mt-1">Infrastructure + application performance monitoring powered by AI: anomaly detection, root-cause analysis, predictive al...</p>
              </div>
            
            
              <div>
                <a href="/services/ai-predictive-customer-analytics/" class="text-purple-300 hover:text-purple-200 font-medium">Predictive Customer Analytics</a>
                <p class="text-slate-400 text-sm mt-1">Predict churn, LTV, and next-best-action with ML models....</p>
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
