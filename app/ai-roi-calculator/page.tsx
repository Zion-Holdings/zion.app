import type { Metadata } from 'next';
import PageTemplate from '@/components/PageTemplate';

export const metadata: Metadata = {
  title: 'AI ROI Calculator | Zion Tech Group',
  description: 'Estimate time and cost savings from AI, automation, and managed IT services in about 2 minutes. See measurable ROI with our free AI ROI calculator.',
  openGraph: {
    title: 'AI ROI Calculator | Zion Tech Group',
    description: 'Estimate time and cost savings from AI, automation, and managed IT services in about 2 minutes.',
    url: 'https://ziontechgroup.com/ai-roi-calculator/',
    type: 'website',
  },
  alternates: { canonical: 'https://ziontechgroup.com/ai-roi-calculator/' },
};

const ROI_FACTORS = [
  { id: 'ticket-routing', label: 'Ticket routing & classification', timeSaved: 3 },
  { id: 'data-entry', label: 'Invoice & data entry processing', timeSaved: 4 },
  { id: 'report-gen', label: 'Report generation & dashboards', timeSaved: 2 },
  { id: 'alert-triage', label: 'Monitoring & alert triage', timeSaved: 2 },
  { id: 'email-handling', label: 'Email & support ticket handling', timeSaved: 2 },
  { id: 'compliance', label: 'Compliance & audit checks', timeSaved: 3 },
];

export default function AiRoiCalculatorPage() {
  const { useState, useMemo } = require('react');
  const [selections, setSelections] = useState<Record<string, boolean>>({});
  const { totalHours, monthlySavings } = useMemo(() => {
    const hours = ROI_FACTORS.filter(f => selections[f.id]).reduce((sum, f) => sum + f.timeSaved, 0);
    const savings = hours * 5 * 4; // $5/hour * 4 weeks
    return { totalHours: hours, monthlySavings: savings };
  }, [selections]);

  return (
    <PageTemplate
      title="AI ROI Calculator"
      description="Estimate time and cost savings from AI, automation, and managed IT services in about 2 minutes. See measurable ROI with our free AI ROI calculator."
      breadcrumbItems={[
        { label: 'Home', href: '/' },
        { label: 'AI ROI Calculator', href: '/ai-roi-calculator' },
      ]}
      layout="hero"
      heroIcon="🧮"
      actions={[
        { label: 'Start AI Audit', href: '/free-ai-readiness-audit/', style: 'primary' },
        { label: 'Contact Sales', href: '/contact/', style: 'secondary' },
      ]}
      showBottomCta={false}
    >
      <div className="max-w-4xl mx-auto">
        <div className="glass-card p-8 mb-8">
          <h2 className="text-2xl font-bold text-white mb-4">Calculate Your AI ROI</h2>
          <p className="text-slate-300 mb-6">
            Check the areas where manual work takes the most time. Each area you select saves an
            estimated 2-4 hours per week through automation.
          </p>

          <div className="space-y-3 mb-8">
            {ROI_FACTORS.map((factor) => (
              <label
                key={factor.id}
                className={`flex items-center gap-3 p-4 rounded-xl border cursor-pointer transition-all ${
                  selections[factor.id]
                    ? 'border-purple-500 bg-purple-900/20'
                    : 'border-slate-700 bg-slate-900/50 hover:border-slate-600'
                }`}
              >
                <input
                  type="checkbox"
                  checked={!!selections[factor.id]}
                  onChange={(e) =>
                    setSelections((prev) => ({ ...prev, [factor.id]: e.target.checked }))
                  }
                  className="w-5 h-5 rounded bg-slate-800 border-slate-600 text-purple-500 focus:ring-purple-500"
                />
                <span className="text-slate-200">{factor.label}</span>
                <span className="ml-auto text-xs text-slate-500">{factor.timeSaved}h/week saved</span>
              </label>
            ))}
          </div>

          {totalHours > 0 && (
            <div className="bg-gradient-to-r from-purple-900/30 to-pink-900/30 rounded-xl p-6 border border-purple-500/20">
              <h3 className="text-xl font-bold text-white mb-2">Estimated Weekly Savings</h3>
              <p className="text-3xl font-bold text-purple-400 mb-1">{totalHours} hours/week</p>
              <p className="text-slate-300">~${monthlySavings.toLocaleString()}/month in labor cost savings</p>
            </div>
          )}

          {totalHours === 0 && (
            <p className="text-slate-400 text-sm">Select areas above to see your projected savings.</p>
          )}
        </div>

        <div className="text-center">
          <p className="text-slate-400 mb-4">
            Ready to automate your workflows and see real ROI? We'll identify your top 3 automation opportunities in a free 30-minute audit.
          </p>
          <a href="/contact/" className="btn-primary">Get Your Free AI Readiness Audit</a>
        </div>
      </div>
    </PageTemplate>
  );
}
