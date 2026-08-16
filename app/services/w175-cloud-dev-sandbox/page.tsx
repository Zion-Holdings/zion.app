import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: `Cloud Developer Sandboxes | Zion Tech Group`,
  description: `Self-service cloud sandboxes for developers: pre-configured environments, auto-cleanup, cost caps, and production-like data. Dev without breaking prod.`,
  keywords: 'Self-service environment provisioning, Pre-configured with your stack, Production-like test data (anonymized), Auto-cleanup and TTL management, Per-developer cost caps, Infrastructure-as-code templates, Ephemeral and persistent sandbox modes, cloud, Developer Tools, Zion Tech Group',
  alternates: {
    canonical: `https://ziontechgroup.com/services/w175-cloud-dev-sandbox/`,
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
        
        <h1 className="text-4xl font-bold mb-6 text-white">Cloud Developer Sandboxes</h1>
        <p className="text-lg text-slate-300 mb-8">Self-service cloud sandboxes for developers: pre-configured environments, auto-cleanup, cost caps, and production-like data. Dev without breaking prod.</p>
        
        <div class="bg-slate-900 rounded-xl p-6 mb-8">
          <div class="flex flex-wrap gap-2 mb-4">
            <span class="text-xs px-3 py-1 bg-purple-900/30 rounded-full text-purple-300">cloud</span>
            <span class="text-xs px-3 py-1 bg-blue-900/30 rounded-full text-blue-300">Developer Tools</span>
          </div>
          <h2 class="text-2xl font-semibold mb-4 text-white">Key Features</h2>
          <ul class="list-disc list-inside space-y-2">
        <li class="text-slate-300">Self-service environment provisioning</li>
        <li class="text-slate-300">Pre-configured with your stack</li>
        <li class="text-slate-300">Production-like test data (anonymized)</li>
        <li class="text-slate-300">Auto-cleanup and TTL management</li>
        <li class="text-slate-300">Per-developer cost caps</li>
        <li class="text-slate-300">Infrastructure-as-code templates</li>
        <li class="text-slate-300">Ephemeral and persistent sandbox modes</li>
      </ul>
        </div>
        
        <div class="bg-slate-900 rounded-xl p-6 mb-8">
          <h2 class="text-2xl font-semibold mb-4 text-white">Benefits</h2>
          <ul class="list-disc list-inside space-y-2">
        <li class="text-slate-300">Developers get environments in seconds</li>
        <li class="text-slate-300">Auto-cleanup prevents cloud sprawl</li>
        <li class="text-slate-300">Cost caps prevent runaway spend</li>
        <li class="text-slate-300">Production-like data improves testing</li>
      </ul>
        </div>
        
        
        <div class="border border-purple-500/30 rounded-xl p-6 mb-8">
          <h2 class="text-2xl font-semibold text-white mb-4">Pricing</h2>
          <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div class="bg-slate-800 rounded-lg p-4 text-center">
              <h3 class="font-semibold text-white mb-2">Basic</h3>
              <p class="text-2xl font-bold text-purple-400 mb-2">$49/dev/mo</p>
              <p class="text-sm text-slate-400">Getting started plan</p>
            </div>
            <div class="bg-slate-800 rounded-lg p-4 text-center border-2 border-purple-500">
              <h3 class="font-semibold text-white mb-2">Pro</h3>
              <p class="text-2xl font-bold text-purple-400 mb-2">$99/dev/mo</p>
              <p class="text-sm text-slate-400">Most popular</p>
            </div>
            <div class="bg-slate-800 rounded-lg p-4 text-center">
              <h3 class="font-semibold text-white mb-2">Enterprise</h3>
              <p class="text-2xl font-bold text-purple-400 mb-2">$199/dev/mo</p>
              <p class="text-sm text-slate-400">Full-featured solution</p>
            </div>
          </div>
        </div>
        
        <div class="bg-slate-900/60 border border-slate-700/50 rounded-xl p-6 mb-8">
          <h2 class="text-2xl font-semibold text-white mb-4">Related Services</h2>
          <div class="grid md:grid-cols-2 gap-4">
            
              <div>
                <a href="/services/ai-cdn-edge-optimizer/" class="text-purple-300 hover:text-purple-200 font-medium">AI CDN & Edge Performance Optimizer</a>
                <p class="text-slate-400 text-sm mt-1">Optimize content delivery: intelligent caching, edge compute routing, image/video optimization, and DDoS protection. Rea...</p>
              </div>
            
            
              <div>
                <a href="/services/api-development/" class="text-purple-300 hover:text-purple-200 font-medium">API Development & Integration</a>
                <p class="text-slate-400 text-sm mt-1">Design, build, and manage high-performance APIs that connect systems, enable automation, and power digital products at e...</p>
              </div>
            
            
              <div>
                <a href="/services/aws-serverless-migration/" class="text-purple-300 hover:text-purple-200 font-medium">AWS Serverless Migration</a>
                <p class="text-slate-400 text-sm mt-1">Migrate EC2/S3 apps to serverless: Lambda + API Gateway + DynamoDB event-driven. Schema migration dual-write zero-downti...</p>
              </div>
            
            
              <div>
                <a href="/services/backup-disaster-recovery/" class="text-purple-300 hover:text-purple-200 font-medium">Backup & Disaster Recovery</a>
                <p class="text-slate-400 text-sm mt-1">Enterprise backup solutions with automated disaster recovery, RPO/RSL guarantees, geo-redundant storage, and instant fai...</p>
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
