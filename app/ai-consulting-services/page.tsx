import PageTemplate from '@/components/PageTemplate';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'AI Consulting Services | Zion Tech Group',
  description: 'AI consulting services for strategy, implementation, and measurable outcomes.',
  alternates: { canonical: '/ai-consulting-services/' },
};

const breadcrumbItems = [
  { label: 'Home', href: '/' },
  { label: 'AI Consulting', href: '/ai-consulting-services' },
];

export default function Page() {
  return (
    <PageTemplate
      title="AI Consulting Services"
      subtitle="From strategy to deployment — we build AI systems that ship."
      description="AI consulting services for strategy, implementation, and measurable outcomes."
      category="AI Services"
      heroIcon="💡"
      actions={[
        { label: 'Contact us', href: '/contact/', style: 'primary' },
        { label: 'Services', href: '/services/', style: 'secondary' },
      ]}
      breadcrumbItems={breadcrumbItems}
      layout="hero"
    >
      <div className="grid md:grid-cols-2 gap-8">
        <div className="glass-card p-6">
          <h2 className="text-xl font-semibold text-white mb-3">Strategy &amp; Roadmap</h2>
          <p className="text-slate-400">We map your AI opportunity to a phased delivery plan with clear milestones and ROI targets.</p>
        </div>
        <div className="glass-card p-6">
          <h2 className="text-xl font-semibold text-white mb-3">Proof of Concept</h2>
          <p className="text-slate-400">Rapid prototyping on real data to validate feasibility and user value within 2 weeks.</p>
        </div>
        <div className="glass-card p-6">
          <h2 className="text-xl font-semibold text-white mb-3">Production Deployment</h2>
          <p className="text-slate-400">Full MLOps pipeline, monitoring, and scaling — from model to reliable production service.</p>
        </div>
        <div className="glass-card p-6">
          <h2 className="text-xl font-semibold text-white mb-3">Continuous Optimization</h2>
          <p className="text-slate-400">Ongoing performance tuning, retraining, and cost optimization to maximize ROI.</p>
        </div>
      </div>
    </PageTemplate>
  );
}
