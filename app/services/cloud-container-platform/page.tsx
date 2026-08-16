import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: `Managed Kubernetes Platform | Zion Tech Group`,
  description: `Fully managed Kubernetes platform with automated scaling, monitoring, and security. Includes Helm charts, service mesh, and CI/CD pipeline integration.`,
  keywords: 'Managed K8s Clusters, Auto-scaling, Monitoring & Alerts, Service Mesh, CI/CD Integration, Cloud, Cloud Infrastructure, Zion Tech Group',
  alternates: {
    canonical: `https://ziontechgroup.com/services/cloud-container-platform/`,
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
        
        <h1 className="text-4xl font-bold mb-6 text-white">Managed Kubernetes Platform</h1>
        <p className="text-lg text-slate-300 mb-8">Fully managed Kubernetes platform with automated scaling, monitoring, and security. Includes Helm charts, service mesh, and CI/CD pipeline integration.</p>
        
        <div class="bg-slate-900 rounded-xl p-6 mb-8">
          <div class="flex flex-wrap gap-2 mb-4">
            <span class="text-xs px-3 py-1 bg-purple-900/30 rounded-full text-purple-300">Cloud</span>
            <span class="text-xs px-3 py-1 bg-blue-900/30 rounded-full text-blue-300">Cloud Infrastructure</span>
          </div>
          <h2 class="text-2xl font-semibold mb-4 text-white">Key Features</h2>
          <ul class="list-disc list-inside space-y-2">
        <li class="text-slate-300">Managed K8s Clusters</li>
        <li class="text-slate-300">Auto-scaling</li>
        <li class="text-slate-300">Monitoring &amp; Alerts</li>
        <li class="text-slate-300">Service Mesh</li>
        <li class="text-slate-300">CI/CD Integration</li>
      </ul>
        </div>
        
        <div class="bg-slate-900 rounded-xl p-6 mb-8">
          <h2 class="text-2xl font-semibold mb-4 text-white">Benefits</h2>
          <ul class="list-disc list-inside space-y-2">
        <li class="text-slate-300">Reduce ops burden</li>
        <li class="text-slate-300">Auto-scale on demand</li>
        <li class="text-slate-300">Built-in security</li>
      </ul>
        </div>
        
        
        <div class="border border-purple-500/30 rounded-xl p-6 mb-8">
          <h2 class="text-2xl font-semibold text-white mb-4">Pricing</h2>
          <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div class="bg-slate-800 rounded-lg p-4 text-center">
              <h3 class="font-semibold text-white mb-2">Basic</h3>
              <p class="text-2xl font-bold text-purple-400 mb-2">$349/mo</p>
              <p class="text-sm text-slate-400">Getting started plan</p>
            </div>
            <div class="bg-slate-800 rounded-lg p-4 text-center border-2 border-purple-500">
              <h3 class="font-semibold text-white mb-2">Pro</h3>
              <p class="text-2xl font-bold text-purple-400 mb-2">$999/mo</p>
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
                <a href="/services/cloud-cost-optimization/" class="text-purple-300 hover:text-purple-200 font-medium">Cloud Cost Optimization Service</a>
                <p class="text-slate-400 text-sm mt-1">Expert cloud cost optimization service including resource right-sizing, reserved instance planning, waste elimination, a...</p>
              </div>
            
            
              <div>
                <a href="/services/wave126-cloud-cost-optimization/" class="text-purple-300 hover:text-purple-200 font-medium">Cloud Cost Optimization Consulting</a>
                <p class="text-slate-400 text-sm mt-1">FinOps-led cloud spend management that delivers guaranteed savings. Right-sizes workloads, optimizes reserved instance a...</p>
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
