import type { Metadata } from 'next';
import StandardPage from '@/components/StandardPage';

export const metadata: Metadata = {
  title: "Customer Feedback Platform | Zion Tech Group",
  description: "Collect, analyze, and act on customer feedback. In-app surveys, NPS tracking, sentiment analysis, and automated follow-up workflows.",
  openGraph: {
    title: "Customer Feedback Platform | Zion Tech Group",
    description: "Collect, analyze, and act on customer feedback. In-app surveys, NPS tracking, sentiment analysis, and automated follow-up workflows.",
    url: "https://ziontechgroup.com/services/customer-feedback-platform/",
    type: 'website',
  },
  alternates: { canonical: "/services/customer-feedback-platform/" },
};

export default function CustomerFeedbackPlatformPage() {
  return (
    <StandardPage
      title="Customer Feedback Platform"
      subtitle="Collect, analyze, and act on customer feedback. In-app surveys, NPS tracking, sentiment analysis, and automated follow-up workflows."
      breadcrumbItems={[
        { label: "Home", href: "/" },
        { label: "Services", href: "/services/" },
        { label: "Customer Feedback Platform" }
      ]}
      actions={[
        { label: 'Talk to us', href: '/contact/', style: 'primary' },
        { label: 'Browse services', href: '/services/', style: 'secondary' },
      ]}
    >
            <div className="grid gap-4 sm:grid-cols-2 mb-8 max-w-5xl mx-auto Recovered-archive-sections">
        <div className="rounded-2xl border border-white/10 bg-slate-900/40 p-5"><h2 className="text-white font-semibold mb-2">Customer Feedback Platform</h2><p className="text-slate-400 text-sm">Archived section recovered from the live site snapshot.</p></div>
        <div className="rounded-2xl border border-white/10 bg-slate-900/40 p-5"><h2 className="text-white font-semibold mb-2">Get Started</h2><p className="text-slate-400 text-sm">Archived section recovered from the live site snapshot.</p></div>
        <div className="rounded-2xl border border-white/10 bg-slate-900/40 p-5"><h2 className="text-white font-semibold mb-2">📊 ROI Calculator</h2><p className="text-slate-400 text-sm">Archived section recovered from the live site snapshot.</p></div>
        <div className="rounded-2xl border border-white/10 bg-slate-900/40 p-5"><h2 className="text-white font-semibold mb-2">Your Current Operations</h2><p className="text-slate-400 text-sm">Archived section recovered from the live site snapshot.</p></div>
        <div className="rounded-2xl border border-white/10 bg-slate-900/40 p-5"><h2 className="text-white font-semibold mb-2">Deployment Roadmap</h2><p className="text-slate-400 text-sm">Archived section recovered from the live site snapshot.</p></div>
        <div className="rounded-2xl border border-white/10 bg-slate-900/40 p-5"><h2 className="text-white font-semibold mb-2">1. Requirements &amp; Design</h2><p className="text-slate-400 text-sm">Archived section recovered from the live site snapshot.</p></div>
      </div>
      <p className="text-slate-400 leading-relaxed mb-4 max-w-5xl mx-auto">Estimated timeline for Customer Feedback Platform — adapt to your team size and complexity.</p>
      <p className="text-slate-400 leading-relaxed mb-4 max-w-5xl mx-auto">AI-powered invoice creation with automatic tax calculation, multi-currency support, payment tracking, and recurring billing. Integrates with Stripe, PayPal, and QuickBooks.</p>
      <p className="text-slate-400 leading-relaxed mb-4 max-w-5xl mx-auto">Complete MRR, churn, LTV, and cohort analysis dashboard for subscription businesses. Track expansion revenue, contraction, and net revenue retention in real-time.</p>
      <p className="text-slate-400 leading-relaxed mb-4 max-w-5xl mx-auto">LaunchDarkly-style feature flags with A/B testing, gradual rollouts, and kill switches. Target users by segment, percentage, or custom attributes.</p>
      <p className="text-slate-500 text-sm max-w-5xl mx-auto">Restored from a Wayback Machine snapshot (20260614135240) of ziontechgroup.com.</p>
    </StandardPage>
  );
}
