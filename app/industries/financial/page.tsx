'use client';

import Link from 'next/link';

export const metadata = {
  title: 'Financial Services AI Solutions | Zion Tech Group',
  description: 'AI-powered financial technology for fraud detection, risk management, algorithmic trading, and regulatory compliance. Secure and scalable.',
};

const financialServices = [
  {
    id: 'ai-fraud-detection',
    title: 'AI Fraud Detection Platform',
    description: 'Real-time fraud detection with behavioral analytics, anomaly detection, and transaction monitoring.',
    icon: '🕵️',
    href: '/services/ai-fraud-detection/',
    pricing: 'From $299/mo',
    category: 'ai',
  },
  {
    id: 'ai-credit-risk-scoring',
    title: 'AI Credit Risk Scoring',
    description: 'Machine learning models for credit assessment, default prediction, and risk stratification.',
    icon: '📊',
    href: '/services/ai-credit-risk-scoring',
    pricing: 'From $199/mo',
    category: 'ai',
  },
  {
    id: 'ai-algorithmic-trading',
    title: 'Algorithmic Trading AI',
    description: 'Automated trading strategies with market prediction, portfolio optimization, and risk management.',
    icon: '📈',
    href: '/services/ai-algorithmic-trading',
    pricing: 'Custom',
    category: 'ai',
  },
  {
    id: 'ai-regulatory-compliance',
    title: 'Regulatory Compliance AI',
    description: 'Automated compliance monitoring, AML detection, and regulatory reporting for financial institutions.',
    icon: '⚖️',
    href: '/services/ai-regulatory-compliance',
    pricing: 'Custom',
    category: 'ai',
  },
  {
    id: 'ai-financial-planning-analysis',
    title: 'Financial Planning & Analysis',
    description: 'AI-driven financial forecasting, budgeting, and business intelligence for financial institutions.',
    icon: '💼',
    href: '/services/ai-financial-planning-analysis',
    pricing: 'From $149/mo',
    category: 'ai',
  },
  {
    id: 'ai-insurance-analytics',
    title: 'Insurance Analytics',
    description: 'Claims processing, risk assessment, and customer analytics for the insurance industry.',
    icon: '🛡️',
    href: '/services/ai-insurance-analytics',
    pricing: 'Custom',
    category: 'ai',
  },
];

export default function FinancialIndustryPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950">
      {/* Hero Section */}
      <section className="relative overflow-hidden py-20">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_30%,rgba(16,185,129,0.15),rgba(59,130,246,0.12))]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_70%_70%,rgba(236,72,153,0.1),transparent_50%)]" />
        <div className="container-page text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-500/20 border border-emerald-500/30 text-emerald-300 text-sm mb-6">
            <span className="text-green-400">●</span> SEC & FINRA Compliant AI
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
            <span className="bg-gradient-to-r from-emerald-400 via-teal-300 to-cyan-400 bg-clip-text text-transparent">
              AI Solutions for Financial Services
            </span>
          </h1>
          <p className="text-xl text-slate-300 mb-10 max-w-3xl mx-auto leading-relaxed">
            Transform banking, insurance, and investment with AI-powered fraud detection, risk management, 
            and automated compliance solutions.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Link href="/contact" className="btn-primary text-lg px-8 py-4">
              💼 Get Financial Consultation
            </Link>
            <Link href="/services/?category=ai" className="btn-secondary text-lg px-8 py-4">
              📊 View AI Services
            </Link>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-slate-950/30">
        <div className="container-page">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl mx-auto">
            <div className="bg-slate-900/50 rounded-xl p-6 border border-slate-800/50 text-center">
              <div className="text-3xl font-bold text-emerald-400">23+</div>
              <div className="text-sm text-slate-400 mt-1">Financial Services</div>
            </div>
            <div className="bg-slate-900/50 rounded-xl p-6 border border-slate-800/50 text-center">
              <div className="text-3xl font-bold text-cyan-400">SEC</div>
              <div className="text-sm text-slate-400 mt-1">Compliant</div>
            </div>
            <div className="bg-slate-900/50 rounded-xl p-6 border border-slate-800/50 text-center">
              <div className="text-3xl font-bold text-green-400">99.9%</div>
              <div className="text-sm text-slate-400 mt-1">Accuracy</div>
            </div>
            <div className="bg-slate-900/50 rounded-xl p-6 border border-slate-800/50 text-center">
              <div className="text-3xl font-bold text-blue-400">0ms</div>
              <div className="text-sm text-slate-400 mt-1">Latency</div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="container-page">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">Financial AI Solutions</h2>
            <p className="text-slate-400 max-w-2xl mx-auto">
              AI-powered tools for fraud detection, risk management, trading, and compliance.
            </p>
          </div>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {financialServices.map((service) => (
              <Link
                key={service.id}
                href={service.href}
                className="group bg-slate-900/50 border border-slate-800/50 rounded-2xl p-6 hover:border-emerald-500/40 transition-all"
              >
                <div className="text-3xl mb-3">{service.icon}</div>
                <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-emerald-300 transition-colors">
                  {service.title}
                </h3>
                <p className="text-slate-400 text-sm mb-3 line-clamp-3">{service.description}</p>
                <div className="flex items-center justify-between">
                  <span className="text-xs font-semibold uppercase tracking-wider bg-emerald-500/20 text-emerald-300 px-2 py-1 rounded">
                    AI Service
                  </span>
                  <span className="text-xs text-slate-500">{service.pricing}</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-slate-950/30 rounded-t-3xl">
        <div className="container-page">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">Financial AI Advantages</h2>
            <p className="text-slate-400 max-w-2xl mx-auto">
              Built for financial institutions with security, compliance, and regulatory requirements.
            </p>
          </div>
          
          <div className="grid md:grid-cols-4 gap-6">
            {[
              { 
                title: 'Real-time Detection', 
                desc: 'Fraud and anomalies detected in milliseconds',
                icon: '⚡'
              },
              { 
                title: 'Regulatory Compliance', 
                desc: 'SEC, FINRA, and MiFID II compliant',
                icon: '📜'
              },
              { 
                title: 'Model Explainability', 
                desc: 'Auditable AI decisions with clear reasoning',
                icon: '🔍'
              },
              { 
                title: 'Zero Downtime', 
                desc: '99.9% uptime with automatic failover',
                icon: '🔒'
              },
            ].map((benefit, i) => (
              <div key={i} className="bg-slate-900/50 border border-slate-800/50 rounded-xl p-6 text-center">
                <div className="text-3xl mb-3">{benefit.icon}</div>
                <h3 className="text-lg font-semibold text-white mb-2">{benefit.title}</h3>
                <p className="text-slate-400 text-sm">{benefit.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container-page text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Ready to Secure Your Financial Operations?</h2>
          <p className="text-slate-300 mb-8 max-w-2xl mx-auto">
            Schedule a free consultation to discuss AI solutions for your financial institution. 
            We'll provide a custom proposal with implementation timeline and ROI projections.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="btn-primary text-lg px-8 py-4">
              💼 Book Financial Consultation
            </Link>
            <Link href="/request-proposal/" className="btn-secondary text-lg px-8 py-4">
              📋 Request Proposal
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}