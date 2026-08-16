import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: `Hybrid Cloud Connectivity Design | Zion Tech Group`,
  description: `Design hybrid connectivity: ExpressRoute, Direct Connect, VPN, SD-WAN, and inter-cloud peering. Secure, performant networking across on-prem and cloud.`,
  keywords: 'Hybrid connectivity architecture design, ExpressRoute and Direct Connect planning, VPN and SD-WAN integration, Inter-cloud peering and transit, DNS and identity federation, Bandwidth sizing and latency optimization, Implementation and validation, cloud, Networking, Zion Tech Group',
  alternates: {
    canonical: `https://ziontechgroup.com/services/w175-hybrid-cloud-connect/`,
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
        
        <h1 className="text-4xl font-bold mb-6 text-white">Hybrid Cloud Connectivity Design</h1>
        <p className="text-lg text-slate-300 mb-8">Design hybrid connectivity: ExpressRoute, Direct Connect, VPN, SD-WAN, and inter-cloud peering. Secure, performant networking across on-prem and cloud.</p>
        
        <div class="bg-slate-900 rounded-xl p-6 mb-8">
          <div class="flex flex-wrap gap-2 mb-4">
            <span class="text-xs px-3 py-1 bg-purple-900/30 rounded-full text-purple-300">cloud</span>
            <span class="text-xs px-3 py-1 bg-blue-900/30 rounded-full text-blue-300">Networking</span>
          </div>
          <h2 class="text-2xl font-semibold mb-4 text-white">Key Features</h2>
          <ul class="list-disc list-inside space-y-2">
        <li class="text-slate-300">Hybrid connectivity architecture design</li>
        <li class="text-slate-300">ExpressRoute and Direct Connect planning</li>
        <li class="text-slate-300">VPN and SD-WAN integration</li>
        <li class="text-slate-300">Inter-cloud peering and transit</li>
        <li class="text-slate-300">DNS and identity federation</li>
        <li class="text-slate-300">Bandwidth sizing and latency optimization</li>
        <li class="text-slate-300">Implementation and validation</li>
      </ul>
        </div>
        
        <div class="bg-slate-900 rounded-xl p-6 mb-8">
          <h2 class="text-2xl font-semibold mb-4 text-white">Benefits</h2>
          <ul class="list-disc list-inside space-y-2">
        <li class="text-slate-300">Enterprise hybrid cloud networking</li>
        <li class="text-slate-300">Optimized for performance and cost</li>
        <li class="text-slate-300">Identity federation for seamless auth</li>
        <li class="text-slate-300">Validated end-to-end connectivity</li>
      </ul>
        </div>
        
        
        <div class="border border-purple-500/30 rounded-xl p-6 mb-8">
          <h2 class="text-2xl font-semibold text-white mb-4">Pricing</h2>
          <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div class="bg-slate-800 rounded-lg p-4 text-center">
              <h3 class="font-semibold text-white mb-2">Basic</h3>
              <p class="text-2xl font-bold text-purple-400 mb-2">$4,999</p>
              <p class="text-sm text-slate-400">Getting started plan</p>
            </div>
            <div class="bg-slate-800 rounded-lg p-4 text-center border-2 border-purple-500">
              <h3 class="font-semibold text-white mb-2">Pro</h3>
              <p class="text-2xl font-bold text-purple-400 mb-2">$14,999</p>
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
