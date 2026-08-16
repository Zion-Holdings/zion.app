import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: `Telemedicine Platform for Healthcare IT | Zion Tech Group`,
  description: `HIPAA-compliant telemedicine platform with video consultations, e-prescribing, patient scheduling, and EHR integration.`,
  keywords: 'HD video consultations, HIPAA-compliant messaging, E-prescribing (EPCS), Patient scheduling and reminders, EHR/EMR integration, Insurance verification, Multi-language support, Analytics dashboard, healthcare-it, Healthcare, Zion Tech Group',
  alternates: {
    canonical: `https://ziontechgroup.com/services/healthcare-it-telemedicine-platform/`,
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
        
        <h1 className="text-4xl font-bold mb-6 text-white">Telemedicine Platform for Healthcare IT</h1>
        <p className="text-lg text-slate-300 mb-8">HIPAA-compliant telemedicine platform with video consultations, e-prescribing, patient scheduling, and EHR integration.</p>
        
        <div class="bg-slate-900 rounded-xl p-6 mb-8">
          <div class="flex flex-wrap gap-2 mb-4">
            <span class="text-xs px-3 py-1 bg-purple-900/30 rounded-full text-purple-300">healthcare-it</span>
            <span class="text-xs px-3 py-1 bg-blue-900/30 rounded-full text-blue-300">Healthcare</span>
          </div>
          <h2 class="text-2xl font-semibold mb-4 text-white">Key Features</h2>
          <ul class="list-disc list-inside space-y-2">
        <li class="text-slate-300">HD video consultations</li>
        <li class="text-slate-300">HIPAA-compliant messaging</li>
        <li class="text-slate-300">E-prescribing (EPCS)</li>
        <li class="text-slate-300">Patient scheduling and reminders</li>
        <li class="text-slate-300">EHR/EMR integration</li>
        <li class="text-slate-300">Insurance verification</li>
        <li class="text-slate-300">Multi-language support</li>
        <li class="text-slate-300">Analytics dashboard</li>
      </ul>
        </div>
        
        <div class="bg-slate-900 rounded-xl p-6 mb-8">
          <h2 class="text-2xl font-semibold mb-4 text-white">Benefits</h2>
          <ul class="list-disc list-inside space-y-2">
        <li class="text-slate-300">Expand patient reach</li>
        <li class="text-slate-300">Reduce no-show rates</li>
        <li class="text-slate-300">Streamline workflows</li>
        <li class="text-slate-300">Ensure HIPAA compliance</li>
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
              <p class="text-2xl font-bold text-purple-400 mb-2">Custom</p>
              <p class="text-sm text-slate-400">Full-featured solution</p>
            </div>
          </div>
        </div>
        
        <div class="bg-slate-900/60 border border-slate-700/50 rounded-xl p-6 mb-8">
          <h2 class="text-2xl font-semibold text-white mb-4">Related Services</h2>
          <div class="grid md:grid-cols-2 gap-4">
            
              <div>
                <a href="/services/ai-chronic-disease-tracker/" class="text-purple-300 hover:text-purple-200 font-medium">AI Chronic Disease Progression Tracker</a>
                <p class="text-slate-400 text-sm mt-1">Longitudinal patient analytics: track chronic disease progression across EHR data, lab results, and wearables. AI identi...</p>
              </div>
            
            
              <div>
                <a href="/services/ai-clinical-trial-design-optimizer/" class="text-purple-300 hover:text-purple-200 font-medium">AI Clinical Trial Design & Protocol Optimizer</a>
                <p class="text-slate-400 text-sm mt-1">Optimize clinical trial protocols: patient recruitment prediction, site selection, endpoint analysis, and regulatory sub...</p>
              </div>
            
            
              <div>
                <a href="/services/ai-cold-chain-monitor/" class="text-purple-300 hover:text-purple-200 font-medium">AI Cold Chain Monitoring for Pharmaceuticals</a>
                <p class="text-slate-400 text-sm mt-1">IoT + AI for pharma cold chain: real-time temperature monitoring, excursion prediction, compliance reporting (GDP/FDA), ...</p>
              </div>
            
            
              <div>
                <a href="/services/ai-compliance/" class="text-purple-300 hover:text-purple-200 font-medium">AI Compliance & Regulatory</a>
                <p class="text-slate-400 text-sm mt-1">Automated compliance monitoring, risk assessment, and audit trail management for GDPR, HIPAA, SOC 2, and more....</p>
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
