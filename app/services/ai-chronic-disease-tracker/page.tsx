// app/services/ai-chronic-disease-tracker/page.tsx
'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';

export default function AiChronicDiseaseTrackerPage() {
  const searchParams = useSearchParams();
  const query = searchParams!.get('q') || '';

  return (
    <main className="min-h-screen bg-slate-950 py-20">
      <div className="container-page">
        <div className="mb-12">
          <Link href="/services/" className="text-sm text-slate-400 hover:text-purple-300">
            ← Back to All Services
          </Link>
        </div>
        
        <h1 className="text-4xl font-bold text-white mb-4">AI Chronic Disease Progression Tracker</h1>
        <p className="text-slate-400 mb-8">
          Longitudinal patient analytics: track chronic disease progression across EHR data, lab results, and wearables. 
          AI identifies early deterioration signals, predicts hospitalisation risk, and generates personalised care plans.
        </p>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Features */}
          <div className="bg-slate-900/50 rounded-xl p-6">
            <h2 className="text-2xl font-semibold text-white mb-4">Key Features</h2>
            <ul className="space-y-3 text-slate-300">
              <li className="flex items-start gap-3">
                <span className="text-purple-400 mt-1 flex-shrink-0">•</span>
                <span>Multi-source EHR + wearable data fusion</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-purple-400 mt-1 flex-shrink-0">•</span>
                <span>Early-deterioration signal detection</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-purple-400 mt-1 flex-shrink-0">•</span>
                <span>Personalised care plan generation</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-purple-400 mt-1 flex-shrink-0">•</span>
                <span>Hospitalisation risk prediction</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-purple-400 mt-1 flex-shrink-0">•</span>
                <span>Care-team dashboards + alerts</span>
              </li>
            </ul>
          </div>
          
          {/* Benefits */}
          <div className="bg-slate-900/50 rounded-xl p-6">
            <h2 className="text-2xl font-semibold text-white mb-4">Benefits</h2>
            <ul className="space-y-3 text-slate-300">
              <li className="flex items-start gap-3">
                <span className="text-purple-400 mt-1 flex-shrink-0">•</span>
                <span>Improved patient outcomes through proactive intervention</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-purple-400 mt-1 flex-shrink-0">•</span>
                <span>Reduced hospitalization rates and associated costs</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-purple-400 mt-1 flex-shrink-0">•</span>
                <span>Enhanced patient engagement and adherence to care plans</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-purple-400 mt-1 flex-shrink-0">•</span>
                <span>Data-driven insights for healthcare providers</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-purple-400 mt-1 flex-shrink-0">•</span>
                <span>Scalable solution for populations of any size</span>
              </li>
            </ul>
          </div>
          
          {/* Pricing */}
          <div className="bg-slate-900/50 rounded-xl p-6">
            <h2 className="text-2xl font-semibold text-white mb-4">Pricing</h2>
            <div className="space-y-4">
              <div className="border-t border-slate-700/50 pt-4">
                <h3 className="text-lg font-semibold text-white mb-2">Basic</h3>
                <p className="text-slate-300 mb-2">$499/mo</p>
                <p className="text-sm text-slate-400">Essential tracking for small clinics</p>
              </div>
              <div className="border-t border-slate-700/50 pt-4">
                <h3 className="text-lg font-semibold text-white mb-2">Pro</h3>
                <p className="text-slate-300 mb-2">$1,299/mo</p>
                <p className="text-sm text-slate-400">Advanced analytics for growing practices</p>
              </div>
              <div className="border-t border-slate-700/50 pt-4">
                <h3 className="text-lg font-semibold text-white mb-2">Enterprise</h3>
                <p className="text-slate-300 mb-2">Custom</p>
                <p className="text-sm text-slate-400">Tailored solutions for large healthcare systems</p>
              </div>
            </div>
          </div>
        </div>
        
        <div className="mt-12 text-center">
          <Link 
            href="/configurator/" 
            className="btn-primary text-lg px-8 py-3"
          >
            Get Custom Implementation Plan →
          </Link>
          <p className="mt-6 text-slate-500 text-sm">
            Or contact us directly: <a href="tel:+130****0950" className="text-purple-300">+1 302 464 0950</a>
          </p>
        </div>
      </div>
    </main>
  );
}
