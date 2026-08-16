import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'AI Solutions for Financial Services | Zion Tech Group',
  description: 'AI-powered financial services: fraud detection, algorithmic trading, risk modeling, regulatory compliance automation, and customer intelligence.',
  alternates: { canonical: '/industries/finance/' },
};

const solutions = [
  {
    title: 'Fraud Detection & AML',
    desc: 'Real-time anomaly detection for transaction monitoring, money laundering patterns, and identity fraud across digital channels.',
    features: ['Graph neural networks', 'Behavioral biometrics', 'Real-time scoring', 'Regulatory reporting (BSA, FATF)'],
  },
  {
    title: 'Algorithmic Trading',
    desc: 'ML-driven trading signals, market regime detection, and portfolio optimization for hedge funds and proprietary trading desks.',
    features: ['Reinforcement learning agents', 'Multi-asset signals', 'Risk-adjusted execution', 'Backtesting framework'],
  },
  {
    title: 'Risk Modeling & Analytics',
    desc: 'Predictive credit risk, market risk VaR, and stress-testing models that adapt to changing economic conditions.',
    features: ['Dynamic PD/LGD models', 'Macroeconomic scenarios', 'Real-time dashboards', 'Regulatory submission ready'],
  },
  {
    title: 'Regulatory Compliance Automation',
    desc: 'Automate KYC onboarding, regulatory reporting (CCAR, MiFID II), and compliance monitoring with explainable AI.',
    features: ['NLP for regulatory documents', 'Audit trail generation', 'Continuous monitoring', 'Explainable AI for regulators'],
  },
];

const complianceBadges = [
  'SOX Compliant',
  'PCI DSS',
  'Basel III',
  'MiFID II',
  'GDPR Ready',
];

export default function FinanceIndustryPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-white py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="mb-12">
            <span className="text-sm font-semibold text-emerald-400 uppercase tracking-wider">
              Industry • Financial Services
            </span>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 mt-3">
              AI for Finance — Trust, Speed, and Compliance at Scale
            </h1>
            <p className="text-xl text-slate-300 max-w-3xl leading-relaxed">
              From real-time fraud prevention to algorithmic trading signals, Zion Tech Group
              helps banks, fintech startups, and asset managers deploy AI that delivers alpha
              while meeting the strictest regulatory and security requirements.
            </p>
          </div>

          <div className="mb-12">
            <p className="text-sm text-slate-400 mb-3">Compliance & Certifications:</p>
            <div className="flex flex-wrap gap-3">
              {complianceBadges.map((b) => (
                <span key={b} className="px-4 py-2 bg-emerald-900/20 border border-emerald-500/30 rounded-full text-xs text-emerald-300">
                  {b}
                </span>
              ))}
            </div>
          </div>

          <div className="space-y-12">
            {solutions.map((sol) => (
              <div key={sol.title} className="bg-slate-900/40 border border-slate-800 rounded-xl p-8">
                <h2 className="text-2xl font-bold text-white mb-3">{sol.title}</h2>
                <p className="text-slate-300 mb-4">{sol.desc}</p>
                <ul className="grid sm:grid-cols-2 gap-2 text-sm text-slate-400">
                  {sol.features.map((f) => (
                    <li key={f} className="flex items-center gap-2">
                      <span className="text-emerald-400">✓</span>
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="mt-16 text-center">
            <Link
              href="/configurator/"
              className="inline-block btn-primary text-lg px-10 py-4"
            >
              ⚡ AI Readiness Assessment for Finance
            </Link>
          </div>
        </div>
      </main>
    </main>
  );
}
