import PageTemplate from '@/components/PageTemplate';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Zion AI Fraud Detection | Zion Tech Group',
  description: 'AI-powered fraud detection for real-time transaction monitoring and anomaly detection.',
  alternates: { canonical: '/zion-ai-fraud-detection/' },
};

export default function Page() {
  return (
    <PageTemplate
      title="Zion AI Fraud Detection"
      description="Real-time AI fraud detection with 99.5%+ accuracy. Sub-100ms transaction analysis, adaptive ML models, and automated compliance for financial institutions."
      actions={[
        { label: 'Get Started', href: '/contact', style: 'primary' },
        { label: 'View Pricing', href: '/pricing', style: 'secondary' },
      ]}
    >
      <div className="py-16">
        <h2 className="text-3xl font-bold text-white mb-8 text-center">Key Features</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="rounded-xl border border-slate-700/60 bg-slate-800/40 p-6 text-center">
            <div className="text-3xl mb-3">🔍</div>
            <h3 className="text-lg font-semibold text-white mb-2">Real-Time Detection</h3>
            <p className="text-sm text-slate-400">Analyze transactions in milliseconds with sub-100ms latency.</p>
          </div>
          <div className="rounded-xl border border-slate-700/60 bg-slate-800/40 p-6 text-center">
            <div className="text-3xl mb-3">📉</div>
            <h3 className="text-lg font-semibold text-white mb-2">99.5%+ Accuracy</h3>
            <p className="text-sm text-slate-400">Industry-leading detection rate with minimal false positives.</p>
          </div>
          <div className="rounded-xl border border-slate-700/60 bg-slate-800/40 p-6 text-center">
            <div className="text-3xl mb-3">🛡️</div>
            <h3 className="text-lg font-semibold text-white mb-2">AML Compliance</h3>
            <p className="text-sm text-slate-400">Automated anti-money laundering and suspicious activity reporting.</p>
          </div>
        </div>
      </div>
      <div className="text-center py-16 border-t border-slate-800/60">
        <p className="text-slate-400 mb-8 max-w-xl mx-auto">+1 302 464 0950 | kleber@ziontechgroup.com | 364 E Main St STE 1008, Middletown, DE 19709</p>
        <a href="/contact" className="inline-flex items-center px-8 py-3 rounded-lg bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold text-lg">Free Consultation</a>
      </div>
    </PageTemplate>
  );
}