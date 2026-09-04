import type { Metadata } from 'next';
import StandardPage from '@/components/StandardPage';

export const metadata: Metadata = {
  title: "Subscription Analytics | Zion Tech Group",
  description: "SaaS metrics dashboard: MRR, churn, LTV, cohort analysis, and revenue forecasting. Integrates with Stripe, PayPal, and major billing platforms.",
  openGraph: {
    title: "Subscription Analytics | Zion Tech Group",
    description: "SaaS metrics dashboard: MRR, churn, LTV, cohort analysis, and revenue forecasting. Integrates with Stripe, PayPal, and major billing platforms.",
    url: "https://ziontechgroup.com/services/subscription-analytics/",
    type: 'website',
  },
  alternates: { canonical: "/services/subscription-analytics/" },
};

export default function SubscriptionAnalyticsPage() {
  return (
    <StandardPage
      title="Subscription Analytics"
      subtitle="SaaS metrics dashboard: MRR, churn, LTV, cohort analysis, and revenue forecasting. Integrates with Stripe, PayPal, and major billing platforms."
      breadcrumbItems={[
        { label: "Home", href: "/" },
        { label: "Services", href: "/services/" },
        { label: "Subscription Analytics" }
      ]}
      actions={[
        { label: 'Talk to us', href: '/contact/', style: 'primary' },
        { label: 'Browse services', href: '/services/', style: 'secondary' },
      ]}
    >
      <p className="text-slate-300 text-lg leading-relaxed mb-8 max-w-5xl mx-auto">SaaS metrics dashboard: MRR, churn, LTV, cohort analysis, and revenue forecasting. Integrates with Stripe, PayPal, and major billing platforms.</p>
      <p className="text-slate-500 text-sm max-w-5xl mx-auto">Restored from a Wayback Machine snapshot (20260607202749) of ziontechgroup.com.</p>
    </StandardPage>
  );
}
