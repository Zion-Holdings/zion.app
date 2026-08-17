import type { Metadata } from 'next';
import PageTemplate from '@/components/PageTemplate';

export const metadata: Metadata = {
  title: 'Business Impact | Measurable Results from Zion Tech Group',
  description: 'Measurable cost savings, revenue enablement, automation wins, and operational resilience from Zion Tech Group AI and IT engagements.',
  openGraph: {
    title: 'Business Impact | Zion Tech Group',
    description: 'Measurable cost savings, revenue enablement, automation wins, and operational resilience from our AI and IT engagements.',
    url: 'https://ziontechgroup.com/business-impact/',
    type: 'website',
  },
  alternates: { canonical: 'https://ziontechgroup.com/business-impact/' },
};

const IMPACT_METRICS = [
  { metric: '70% reduction', detail: 'Manual work hours eliminated through agentic workflow automation', category: 'Automation' },
  { metric: '99.9% uptime', detail: 'SLA-guaranteed infrastructure and monitoring coverage', category: 'Infrastructure' },
  { metric: '65% faster', detail: 'Incident response and remediation with AI-powered AIOps', category: 'Security' },
  { metric: '45% cost savings', detail: 'Cloud cost optimization through intelligent rightsizing and FinOps', category: 'Cloud' },
  { metric: '90% accuracy', detail: 'AI-powered invoice processing and data reconciliation', category: 'AI' },
  { metric: '24/7 coverage', detail: 'Continuous monitoring with autonomous issue resolution', category: 'Operations' },
];

export default function BusinessImpactPage() {
  return (
    <PageTemplate
      title="Measurable Business Impact"
      description="Real results from AI and IT engagements — cost savings, revenue enablement, automation wins, and operational resilience."
      breadcrumbItems={[
        { label: 'Home', href: '/' },
        { label: 'Business Impact', href: '/business-impact' },
      ]}
      layout="hero"
      heroIcon="📈"
      actions={[
        { label: 'See Our Services', href: '/services/', style: 'primary' },
        { label: 'Calculate Your ROI', href: '/ai-roi-calculator/', style: 'secondary' },
      ]}
      showBottomCta={false}
    >
      <div className="max-w-4xl mx-auto">
        <div className="glass-card p-8 mb-8">
          <h2 className="text-2xl font-bold text-white mb-4">Impact Metrics That Matter</h2>
          <p className="text-slate-300 mb-6">
            These are the measurable outcomes our clients achieve within 90 days of
            implementation. Every metric below is tracked through our continuous monitoring
            platform and verified against baseline KPIs.
          </p>

          <div className="grid md:grid-cols-2 gap-6">
            {IMPACT_METRICS.map((item, i) => (
              <div key={i} className="border border-slate-700/50 rounded-xl p-6 bg-slate-900/30">
                <div className="text-3xl font-bold text-purple-400 mb-1">{item.metric}</div>
                <div className="text-sm text-slate-400 mb-2">{item.category}</div>
                <p className="text-slate-300">{item.detail}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="glass-card p-8 mb-8">
          <h2 className="text-2xl font-bold text-white mb-4">Client Results</h2>
          <div className="space-y-6">
            <div>
              <h3 className="font-semibold text-white">Healthcare Network</h3>
              <p className="text-slate-400 text-sm">Reduced incident MTTR from 45 min to 7 min using AI-powered observability. Saved $850K annually in downtime.</p>
            </div>
            <div>
              <h3 className="font-semibold text-white">Financial Services Firm</h3>
              <p className="text-slate-400 text-sm">Automated loan application processing from intake to approval in under 3 minutes, cutting 120 hours/week of manual review.</p>
            </div>
            <div>
              <h3 className="font-semibold text-white">Manufacturing Client</h3>
              <p className="text-slate-400 text-sm">Computer vision quality inspection reduced defect rates by 85% and eliminated $2.1M in annual rework costs.</p>
            </div>
          </div>
        </div>

        <div className="text-center">
          <p className="text-slate-400 mb-4">
            Ready to achieve similar results? Start with a free AI readiness audit.
          </p>
          <a href="/free-ai-readiness-audit/" className="btn-primary">Run Free AI Readiness Audit</a>
        </div>
      </div>
    </PageTemplate>
  );
}
