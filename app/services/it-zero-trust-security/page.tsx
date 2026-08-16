import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: `Zero Trust Security Architecture | Zion Tech Group`,
  description: `Implement zero trust across your organization. Identity verification, micro-segmentation, least-privilege access, and continuous validation for every user, device, and application.`,
  keywords: 'Identity verification, Micro-segmentation, Least-privilege access, Continuous validation, Device trust scoring, Network encryption, Policy automation, Compliance reporting, it, Security, Zion Tech Group',
  alternates: {
    canonical: `https://ziontechgroup.com/services/it-zero-trust-security/`,
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
        
        <h1 className="text-4xl font-bold mb-6 text-white">Zero Trust Security Architecture</h1>
        <p className="text-lg text-slate-300 mb-8">Implement zero trust across your organization. Identity verification, micro-segmentation, least-privilege access, and continuous validation for every user, device, and application.</p>
        
        <div class="bg-slate-900 rounded-xl p-6 mb-8">
          <div class="flex flex-wrap gap-2 mb-4">
            <span class="text-xs px-3 py-1 bg-purple-900/30 rounded-full text-purple-300">it</span>
            <span class="text-xs px-3 py-1 bg-blue-900/30 rounded-full text-blue-300">Security</span>
          </div>
          <h2 class="text-2xl font-semibold mb-4 text-white">Key Features</h2>
          <ul class="list-disc list-inside space-y-2">
        <li class="text-slate-300">Identity verification</li>
        <li class="text-slate-300">Micro-segmentation</li>
        <li class="text-slate-300">Least-privilege access</li>
        <li class="text-slate-300">Continuous validation</li>
        <li class="text-slate-300">Device trust scoring</li>
        <li class="text-slate-300">Network encryption</li>
        <li class="text-slate-300">Policy automation</li>
        <li class="text-slate-300">Compliance reporting</li>
      </ul>
        </div>
        
        <div class="bg-slate-900 rounded-xl p-6 mb-8">
          <h2 class="text-2xl font-semibold mb-4 text-white">Benefits</h2>
          <ul class="list-disc list-inside space-y-2">
        <li class="text-slate-300">90% reduction in breach risk</li>
        <li class="text-slate-300">Granular access control</li>
        <li class="text-slate-300">Compliance automation</li>
        <li class="text-slate-300">Reduced attack surface</li>
        <li class="text-slate-300">Remote work security</li>
      </ul>
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
