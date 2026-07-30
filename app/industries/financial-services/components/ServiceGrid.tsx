// app/industries/financial-services/components/ServiceGrid.tsx
import Link from 'next/link';
import { Shield, TrendingUp, FileText, Users, BarChart3, Bot, CreditCard, Globe } from 'lucide-react';

const services = [
  {
    id: 'ai-fraud-detection',
    title: 'AI Fraud Detection Platform',
    description: 'Real-time machine learning detection of fraudulent transactions, account takeovers, and money laundering patterns with zero false positives.',
    features: [
      'Real-time transaction monitoring',
      'Behavioral anomaly detection',
      'AML screening & sanctions lists',
      'Zero false positive optimization',
      'Regulatory compliance reporting',
    ],
    pricing: 'Starting at $4,999/month',
    icon: Shield,
    category: 'security',
  },
  {
    id: 'algorithmic-trading-ai',
    title: 'Algorithmic Trading AI',
    description: 'AI-powered trading algorithms that analyze market patterns, execute trades, and optimize portfolio performance with machine learning-driven insights.',
    features: [
      'Quantitative trading strategies',
      'Market sentiment analysis',
      'Risk-adjusted returns optimization',
      'Real-time market data integration',
      'Automated trade execution',
    ],
    pricing: 'Contact for custom pricing',
    icon: TrendingUp,
    category: 'ai',
  },
  {
    id: 'compliance-automation',
    title: 'Regulatory Compliance Automation',
    description: 'Automated monitoring, reporting, and remediation for SOX, PCI-DSS, GDPR, FINRA, and other financial regulations with AI-powered audit trails.',
    features: [
      'Multi-regulation compliance monitoring',
      'Automated audit trail generation',
      'Real-time policy violation alerts',
      'Compliance dashboard & reporting',
      'Evidence collection automation',
    ],
    pricing: 'Starting at $2,999/month',
    icon: FileText,
    category: 'security',
  },
  {
    id: 'customer-360-unified-view',
    title: 'Customer 360 Unified View',
    description: 'Create a single, AI-powered customer profile across all touchpoints - digital, branch, call center, and transactional data.',
    features: [
      '360-degree customer profiling',
      'Cross-channel behavior analysis',
      'Personalized product recommendations',
      'Lifetime value prediction',
      'Churn risk identification',
    ],
    pricing: 'Starting at $3,499/month',
    icon: Users,
    category: 'ai',
  },
  {
    id: 'predictive-analytics',
    title: 'Financial Predictive Analytics',
    description: 'Forecast cash flow, credit risk, market trends, and operational metrics with AI models trained on financial data.',
    features: [
      'Cash flow forecasting',
      'Credit risk scoring',
      'Market trend prediction',
      'Customer lifetime value',
      'Operational efficiency modeling',
    ],
    pricing: 'Starting at $4,499/month',
    icon: BarChart3,
    category: 'data',
  },
  {
    id: 'ai-email-outreach-for-fintech',
    title: 'AI Email Outreach Automation',
    description: 'Automate lead generation, client onboarding, and retention campaigns with AI-powered personalized email sequences for financial services.',
    features: [
      'Personalized email sequences',
      'Compliance-safe templates',
      'Lead qualification automation',
      'Client onboarding workflows',
      'Performance analytics',
    ],
    pricing: 'Starting at $1,999/month',
    icon: Bot,
    category: 'automation',
  },
  {
    id: 'payment-processing-automation',
    title: 'Smart Payment Processing',
    description: 'Automate invoice processing, payment reconciliation, and expense management with AI-powered document understanding.',
    features: [
      'Invoice OCR & data extraction',
      'Automated payment matching',
      'Expense categorization',
      'Multi-currency support',
      'Integration with accounting systems',
    ],
    pricing: 'Starting at $2,499/month',
    icon: CreditCard,
    category: 'automation',
  },
  {
    id: 'global- Banking-compliance',
    title: 'Global Banking Compliance',
    description: 'Ensure compliance across multiple jurisdictions with AI-powered regulatory monitoring for international banking operations.',
    features: [
      'Multi-jurisdiction compliance',
      'Currency & exchange monitoring',
      'Cross-border transaction tracking',
      'Regulatory change alerts',
      'Global risk assessment',
    ],
    pricing: 'Contact for pricing',
    icon: Globe,
    category: 'security',
  },
];

export default function FinancialServicesGrid() {
  const categoryLabels: Record<string, string> = {
    ai: 'AI Services',
    security: 'Security',
    data: 'Data & Analytics',
    automation: 'Automation',
  };

  return (
    <section className="py-20 px-4 bg-slate-950/50">
      <div className="container-page">
        <h2 className="text-3xl font-bold text-center mb-12 text-purple-400">
          Financial Services Solutions
        </h2>
        <p className="text-center text-slate-400 mb-12 max-w-2xl mx-auto">
          Enterprise-grade AI solutions designed specifically for the unique challenges of financial services, banking, insurance, and fintech companies.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service) => (
            <div key={service.id} className="glass-card flex flex-col h-full">
              <div className="flex-1">
                <div className="flex items-center justify-between mb-3">
                  <div className="w-10 h-10 bg-purple-600/20 rounded-full flex items-center justify-center">
                    <service.icon className="w-5 h-5 text-purple-400" />
                  </div>
                  <span className="text-xs font-semibold px-3 py-1 rounded-full bg-purple-900/30 text-purple-300">
                    {categoryLabels[service.category] || service.category}
                  </span>
                </div>
                <h3 className="text-lg font-semibold text-white mb-2 leading-snug">
                  {service.title}
                </h3>
                <p className="text-slate-400 text-sm mb-4 leading-relaxed">
                  {service.description}
                </p>
                <ul className="space-y-2 mb-4">
                  {service.features.slice(0, 4).map((feature, i) => (
                    <li key={i} className="text-slate-300 text-sm flex items-start gap-2">
                      <span className="text-purple-400 mt-1 shrink-0">•</span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-auto pt-4 border-t border-slate-700/50">
                <div className="flex justify-between items-center mb-3">
                  <span className="text-purple-300 text-sm font-medium">{service.pricing}</span>
                </div>
                <Link
                  href={`/services/${service.id}`}
                  className="text-sm text-purple-400 hover:underline inline-flex items-center gap-1"
                >
                  View Details →
                </Link>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <Link href="/services/financial-services" className="btn-primary text-lg">
            View All Financial Services →
          </Link>
        </div>
      </div>
    </section>
  );
}