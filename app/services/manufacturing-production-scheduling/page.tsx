import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: `AI Production Scheduling Optimizer | Zion Tech Group`,
  description: `AI-powered production scheduling that optimizes for delivery, cost, and resource utilization. Handle complex constraints, changeovers, and multi-site scheduling.`,
  keywords: 'Constraint-based scheduling, Multi-site optimization, Changeover minimization, What-if scenario planning, Real-time schedule adjustment, Integration with MES/ERP, Resource utilization analytics, On-time delivery tracking, manufacturing-tech, Manufacturing, Zion Tech Group',
  alternates: {
    canonical: `https://ziontechgroup.com/services/manufacturing-production-scheduling/`,
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
        
        <h1 className="text-4xl font-bold mb-6 text-white">AI Production Scheduling Optimizer</h1>
        <p className="text-lg text-slate-300 mb-8">AI-powered production scheduling that optimizes for delivery, cost, and resource utilization. Handle complex constraints, changeovers, and multi-site scheduling.</p>
        
        <div class="bg-slate-900 rounded-xl p-6 mb-8">
          <div class="flex flex-wrap gap-2 mb-4">
            <span class="text-xs px-3 py-1 bg-purple-900/30 rounded-full text-purple-300">manufacturing-tech</span>
            <span class="text-xs px-3 py-1 bg-blue-900/30 rounded-full text-blue-300">Manufacturing</span>
          </div>
          <h2 class="text-2xl font-semibold mb-4 text-white">Key Features</h2>
          <ul class="list-disc list-inside space-y-2">
        <li class="text-slate-300">Constraint-based scheduling</li>
        <li class="text-slate-300">Multi-site optimization</li>
        <li class="text-slate-300">Changeover minimization</li>
        <li class="text-slate-300">What-if scenario planning</li>
        <li class="text-slate-300">Real-time schedule adjustment</li>
        <li class="text-slate-300">Integration with MES/ERP</li>
        <li class="text-slate-300">Resource utilization analytics</li>
        <li class="text-slate-300">On-time delivery tracking</li>
      </ul>
        </div>
        
        <div class="bg-slate-900 rounded-xl p-6 mb-8">
          <h2 class="text-2xl font-semibold mb-4 text-white">Benefits</h2>
          <ul class="list-disc list-inside space-y-2">
        <li class="text-slate-300">Improve on-time delivery by 25%</li>
        <li class="text-slate-300">Reduce changeover time by 30%</li>
        <li class="text-slate-300">Optimize resource utilization</li>
        <li class="text-slate-300">Handle complex scheduling constraints</li>
      </ul>
        </div>
        
        
        <div class="border border-purple-500/30 rounded-xl p-6 mb-8">
          <h2 class="text-2xl font-semibold text-white mb-4">Pricing</h2>
          <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div class="bg-slate-800 rounded-lg p-4 text-center">
              <h3 class="font-semibold text-white mb-2">Basic</h3>
              <p class="text-2xl font-bold text-purple-400 mb-2">$1,999/mo</p>
              <p class="text-sm text-slate-400">Getting started plan</p>
            </div>
            <div class="bg-slate-800 rounded-lg p-4 text-center border-2 border-purple-500">
              <h3 class="font-semibold text-white mb-2">Pro</h3>
              <p class="text-2xl font-bold text-purple-400 mb-2">$5,999/mo</p>
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
                <a href="/services/ai-3d-printing-optimizer/" class="text-purple-300 hover:text-purple-200 font-medium">AI 3D Print Optimization & Quality Control</a>
                <p class="text-slate-400 text-sm mt-1">Optimize additive manufacturing: support structure minimization, print orientation optimization, defect detection during...</p>
              </div>
            
            
              <div>
                <a href="/services/ai-bom-procurement/" class="text-purple-300 hover:text-purple-200 font-medium">AI BOM & Procurement Optimiser</a>
                <p class="text-slate-400 text-sm mt-1">Multi-tier bill-of-materials analyser. Optimises part sourcing, predicts shortages, recommends alternative components, a...</p>
              </div>
            
            
              <div>
                <a href="/services/ai-code-reviewer-pro/" class="text-purple-300 hover:text-purple-200 font-medium">AI Code Reviewer Pro</a>
                <p class="text-slate-400 text-sm mt-1">Automated code review that catches bugs, security issues, performance problems, and style violations before production....</p>
              </div>
            
            
              <div>
                <a href="/services/ai-computer-vision-inspection/" class="text-purple-300 hover:text-purple-200 font-medium">AI Computer Vision for Visual Inspection</a>
                <p class="text-slate-400 text-sm mt-1">Automated visual inspection for manufacturing, logistics, and quality control. Detect defects, classify objects, and ver...</p>
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
