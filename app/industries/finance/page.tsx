// app/industries/finance/page.tsx - Finance industry landing page
'use client';

import Link from 'next/link';
import { ArrowLeftIcon, CheckCircleIcon, StarIcon } from 'lucide-react';

const FINANCE_SERVICES = [
  {
    id: 'ai-invoice-processor',
    title: 'AI Invoice Processor',
    icon: '🧾',
    description: 'Automated invoice data extraction and processing using AI.',
    href: '/services/ai-invoice-processor',
    color: 'from-emerald-500 to-teal-600'
  },
  {
    id: 'ai-fraud-detection',
    title: 'AI Fraud Detection Platform',
    icon: '🛡️',
    description: 'Real-time fraud detection for payments and transactions.',
    href: '/services/ai-fraud-detection',
    color: 'from-red-500 to-amber-600'
  },
  {
    id: 'ai-customer-churn-prediction',
    title: 'AI Customer Churn Prediction',
    icon: '📉',
    description: 'Predict which customers are likely to leave before they do.',
    href: '/services/ai-customer-churn-prediction',
    color: 'from-violet-500 to-fuchsia-600'
  },
  {
    id: 'ai-expense-tracker',
    title: 'AI Expense Tracker & Approval',
    icon: '💰',
    description: 'Smart expense management with AI receipt scanning.',
    href: '/services/ai-expense-tracker',
    color: 'from-green-500 to-emerald-600'
  }
];

export default function FinanceIndustryPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-white">
      {/* Breadcrumb */}
      <div className="container-page py-4">
        <nav className="text-sm text-slate-400">
          <Link href="/" className="hover:text-white">Home</Link>
          <span className="mx-2">›</span>
          <Link href="/industries" className="hover:text-white">Industries</Link>
          <span className="mx-2">›</span>
          <span className="text-slate-300">Finance</span>
        </nav>
      </div>

      {/* Hero Section */}
      <section className="relative py-16 px-4">
        <div className="container-page max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-800/50 border border-slate-700/50 text-slate-300 text-sm mb-6">
            <span className="text-green-400">●</span> AI Solutions for Finance
          </div>
          
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-emerald-400 to-blue-400 bg-clip-text text-transparent">
              Finance Industry AI Solutions
            </span>
          </h1>
          
          <p className="text-xl text-slate-300 mb-10 max-w-3xl mx-auto">
            AI-powered automation for invoice processing, fraud detection, compliance, and financial operations. 
            Reduce costs, improve accuracy, and accelerate your finance workflows.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            <div className="bg-slate-900/50 rounded-xl p-6 border border-slate-700/50">
              <h3 className="text-lg font-semibold text-white mb-4">Key Challenges</h3>
              <ul className="space-y-2 text-slate-300">
                <li className="flex items-center gap-2">
                  <CheckCircleIcon className="w-4 h-4 text-purple-400" />
                  Manual invoice processing and data entry
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircleIcon className="w-4 h-4 text-purple-400" />
                  Fraud detection and risk management
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircleIcon className="w-4 h-4 text-purple-400" />
                  Regulatory compliance and reporting
                </li>
              </ul>
            </div>
            <div className="bg-slate-900/50 rounded-xl p-6 border border-slate-700/50">
              <h3 className="text-lg font-semibold text-white mb-4">AI Solutions</h3>
              <ul className="space-y-2 text-slate-300">
                <li className="flex items-center gap-2">
                  <StarIcon className="w-4 h-4 text-emerald-400" />
                  AI Invoice Processor for automated data extraction
                </li>
                <li className="flex items-center gap-2">
                  <StarIcon className="w-4 h-4 text-emerald-400" />
                  AI Fraud Detection Platform for real-time threat monitoring
                </li>
                <li className="flex items-center gap-2">
                  <StarIcon className="w-4 h-4 text-emerald-400" />
                  AI Customer Churn Prediction to prevent revenue loss
                </li>
              </ul>
            </div>
          </div>

          <Link 
            href="/contact" 
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-gradient-to-r from-purple-600 to-pink-600 text-lg font-semibold text-white hover:from-purple-500 hover:to-pink-500 transition-all"
          >
            Get Finance-Specific Consultation
            <ArrowLeftIcon className="w-4 h-4" />
          </Link>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16">
        <div className="container-page max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">
            <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Finance AI Solutions
            </span>
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {FINANCE_SERVICES.map((service) => (
              <Link
                key={service.id}
                href={service.href}
                className="group bg-slate-900/50 border border-slate-700/50 rounded-xl p-6 hover:border-purple-500/30 transition-all"
              >
                <div className="flex items-start gap-4">
                  <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${service.color} flex items-center justify-center text-2xl flex-shrink-0`}>
                    {service.icon}
                  </div>
                  <div>
                    <h3 className="font-semibold text-white text-base mb-1 group-hover:text-purple-300 transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-xs text-slate-400">{service.description}</p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}