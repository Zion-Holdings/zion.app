// app/industries/financial-services/components/CaseStudy.tsx
import { Quote } from 'lucide-react';

export default function FinancialServicesCaseStudy() {
  return (
    <section className="py-20 px-4 bg-gradient-to-br from-slate-900 to-slate-950">
      <div className="container-page">
        <div className="max-w-4xl mx-auto">
          <div className="glass-card p-8 md:p-12">
            <div className="absolute top-4 right-4 w-10 h-10 bg-purple-600/20 rounded-full" />
            
            <div className="relative z-10">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-purple-600/30 rounded-full flex items-center justify-center">
                  <Quote className="w-6 h-6 text-purple-400" />
                </div>
                <span className="text-sm font-semibold text-purple-300 uppercase tracking-wider">
                  Case Study
                </span>
              </div>
              
              <h3 className="text-2xl font-bold text-white mb-4">
                Global Investment Bank
              </h3>
              
              <p className="text-lg text-slate-300 mb-6 italic">
                Reduced fraud losses by 87% and automated 95% of compliance reporting
              </p>

              <div className="grid md:grid-cols-3 gap-6 mb-8">
                <div className="text-center p-4 bg-slate-900/50 rounded-lg">
                  <div className="text-3xl font-bold text-purple-400 mb-2">87%</div>
                  <p className="text-slate-400 text-sm">Fraud Loss Reduction</p>
                </div>
                <div className="text-center p-4 bg-slate-900/50 rounded-lg">
                  <div className="text-3xl font-bold text-purple-400 mb-2">95%</div>
                  <p className="text-slate-400 text-sm">Compliance Automation</p>
                </div>
                <div className="text-center p-4 bg-slate-900/50 rounded-lg">
                  <div className="text-3xl font-bold text-purple-400 mb-2">300%</div>
                  <p className="text-slate-400 text-sm">ROI Improvement</p>
                </div>
              </div>

              <blockquote className="border-l-4 border-purple-500/50 pl-6 italic">
                <p className="text-slate-300 mb-4">
                  "Zion Tech Group's AI Fraud Detection platform eliminated our manual review process and caught fraud patterns we never saw before. The compliance automation saved us 40 hours per week in regulatory reporting."
                </p>
                <footer className="text-right">
                  <div className="font-semibold text-white">Sarah Johnson</div>
                  <div className="text-slate-500 text-sm">CTO, Global Investment Bank</div>
                </footer>
              </blockquote>

              <div className="mt-8 pt-6 border-t border-slate-700/50">
                <Link href="/case-studies/financial-services-fraud-detection" className="text-purple-400 hover:underline inline-flex items-center gap-1">
                  Read full case study →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

import Link from 'next/link';