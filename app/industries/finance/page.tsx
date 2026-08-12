import type { Metadata } from 'next';
import Link from 'next/link';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'AI Solutions for Financial Services | Zion Tech Group',
  description: 'AI for fraud detection, algorithmic trading, risk modeling, and regulatory compliance (KYC/AML) for banks, fintechs, and asset managers.',
  alternates: { canonical: '/industries/finance/' },
};

const solutions = [
  {
    title: 'Fraud Detection (Streaming)',
    desc: 'Real-time anomaly detection on transaction streams to catch fraud before it settles, with sub-second latency.',
    features: ['Sub-sec inference', 'Graph-based link analysis', 'Behavioral profiling', 'False-positive optimization'],
  },
  {
    title: 'Risk & Credit Modeling',
    desc: 'ML-powered credit-scoring and market-risk engines that update continuously as new data arrives.',
    features: ['Real-time features pipeline', 'SHAP explainability', 'Regulatory audit trails', 'Model drift monitoring'],
  },
  {
    title: 'Regulatory Compliance (GRC)',
    desc: 'Automated KYC/AML screening, transaction monitoring, and regulatory-reporting pipelines.',
    features: ['KYC/AML automation', 'Sanctions screening', 'Real-time alerts', 'Compliance dashboards'],
  },
  {
    title: 'Algorithmic Trading',
    desc: 'Low-latency trading signals generated from news sentiment, order-book dynamics, and macro feeds.',
    features: ['News sentiment NLP', 'Order-book analytics', 'Backtesting engine', 'Latency < 5ms'],
  },
];

export default function FinanceIndustryPage() {
  return (
    <>
      <Navigation />
      <main className="min-h-screen bg-slate-950 text-white py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="mb-12">
            <span className="text-sm font-semibold text-blue-400 uppercase tracking-wider">
              Industry • Financial Services
            </span>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 mt-3">
              AI for Finance — Fraud, Risk, and Alpha
            </h1>
            <p className="text-xl text-slate-300 max-w-3xl leading-relaxed">
              Zion Tech Group brings battle-tested AI to banks, fintechs, and asset managers —
              delivering real-time fraud detection, explainable risk models, and automated
              compliance that stands up to the strictest regulators.
            </p>
          </div>

          <div className="space-y-12">
            {solutions.map((sol) => (
              <div key={sol.title} className="bg-slate-900/40 border border-slate-800 rounded-xl p-8">
                <h2 className="text-2xl font-bold text-white mb-3">{sol.title}</h2>
                <p className="text-slate-300 mb-4">{sol.desc}</p>
                <ul className="grid sm:grid-cols-2 gap-2 text-sm text-slate-400">
                  {sol.features.map((f) => (
                    <li key={f} className="flex items-center gap-2">
                      <span className="text-blue-400">✓</span>
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="mt-16 text-center">
            <Link
              href="/tools/service-recommender/"
              className="inline-block btn-primary text-lg px-10 py-4"
            >
              ⚡ Find Your Finance AI Solution →
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
