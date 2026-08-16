import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: `Network Infrastructure Audit | Zion Tech Group`,
  description: `Comprehensive network assessment covering topology analysis, bandwidth optimization, security posture, and hardware lifecycle management.`,
  keywords: 'Topology Analysis, Bandwidth Optimization, Security Assessment, Hardware Lifecycle, Recommendations Report, IT, IT Services, Zion Tech Group',
  alternates: {
    canonical: `https://ziontechgroup.com/services/it-network-infrastructure-audit/`,
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
        
        <h1 className="text-4xl font-bold mb-6 text-white">Network Infrastructure Audit</h1>
        <p className="text-lg text-slate-300 mb-8">Comprehensive network assessment covering topology analysis, bandwidth optimization, security posture, and hardware lifecycle management.</p>
        
        <div class="bg-slate-900 rounded-xl p-6 mb-8">
          <div class="flex flex-wrap gap-2 mb-4">
            <span class="text-xs px-3 py-1 bg-purple-900/30 rounded-full text-purple-300">IT</span>
            <span class="text-xs px-3 py-1 bg-blue-900/30 rounded-full text-blue-300">IT Services</span>
          </div>
          <h2 class="text-2xl font-semibold mb-4 text-white">Key Features</h2>
          <ul class="list-disc list-inside space-y-2">
        <li class="text-slate-300">Topology Analysis</li>
        <li class="text-slate-300">Bandwidth Optimization</li>
        <li class="text-slate-300">Security Assessment</li>
        <li class="text-slate-300">Hardware Lifecycle</li>
        <li class="text-slate-300">Recommendations Report</li>
      </ul>
        </div>
        
        <div class="bg-slate-900 rounded-xl p-6 mb-8">
          <h2 class="text-2xl font-semibold mb-4 text-white">Benefits</h2>
          <ul class="list-disc list-inside space-y-2">
        <li class="text-slate-300">Optimize network performance</li>
        <li class="text-slate-300">Identify security gaps</li>
        <li class="text-slate-300">Plan upgrades</li>
      </ul>
        </div>
        
        
        <div class="border border-purple-500/30 rounded-xl p-6 mb-8">
          <h2 class="text-2xl font-semibold text-white mb-4">Pricing</h2>
          <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div class="bg-slate-800 rounded-lg p-4 text-center">
              <h3 class="font-semibold text-white mb-2">Basic</h3>
              <p class="text-2xl font-bold text-purple-400 mb-2">$2,000/project</p>
              <p class="text-sm text-slate-400">Getting started plan</p>
            </div>
            <div class="bg-slate-800 rounded-lg p-4 text-center border-2 border-purple-500">
              <h3 class="font-semibold text-white mb-2">Pro</h3>
              <p class="text-2xl font-bold text-purple-400 mb-2">$5,000/project</p>
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
                <a href="/services/it-data-center-optimization/" class="text-purple-300 hover:text-purple-200 font-medium">Data Center Optimization</a>
                <p class="text-slate-400 text-sm mt-1">Comprehensive data center assessment and optimization service covering cooling, power, space utilization, and workload p...</p>
              </div>
            
            
              <div>
                <a href="/services/it-disaster-recovery-planning/" class="text-purple-300 hover:text-purple-200 font-medium">IT Disaster Recovery Planning</a>
                <p class="text-slate-400 text-sm mt-1">Comprehensive disaster recovery assessment, planning, and implementation service. Includes RTO/RPO analysis, backup stra...</p>
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
