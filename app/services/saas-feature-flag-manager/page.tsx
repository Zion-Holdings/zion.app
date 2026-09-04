import type { Metadata } from 'next';
import StandardPage from '@/components/StandardPage';

export const metadata: Metadata = {
  title: "Feature Flag & Experiment Platform | Zion Tech Group",
  description: "LaunchDarkly-style feature flags with A/B testing, gradual rollouts, and kill switches. Target users by segment, percentage, or custom attributes.",
  openGraph: {
    title: "Feature Flag & Experiment Platform | Zion Tech Group",
    description: "LaunchDarkly-style feature flags with A/B testing, gradual rollouts, and kill switches. Target users by segment, percentage, or custom attributes.",
    url: "https://ziontechgroup.com/services/saas-feature-flag-manager/",
    type: 'website',
  },
  alternates: { canonical: "/services/saas-feature-flag-manager/" },
};

export default function SaasFeatureFlagManagerPage() {
  return (
    <StandardPage
      title="Feature Flag & Experiment Platform"
      subtitle="LaunchDarkly-style feature flags with A/B testing, gradual rollouts, and kill switches. Target users by segment, percentage, or custom attributes."
      breadcrumbItems={[
        { label: "Home", href: "/" },
        { label: "Services", href: "/services/" },
        { label: "Feature Flag & Experiment Platform" }
      ]}
      actions={[
        { label: 'Talk to us', href: '/contact/', style: 'primary' },
        { label: 'Browse services', href: '/services/', style: 'secondary' },
      ]}
    >
      <p className="text-slate-300 text-lg leading-relaxed mb-8 max-w-5xl mx-auto">LaunchDarkly-style feature flags with A/B testing, gradual rollouts, and kill switches. Target users by segment, percentage, or custom attributes.</p>
      <p className="text-slate-500 text-sm max-w-5xl mx-auto">Restored from a Wayback Machine snapshot (20260614140628) of ziontechgroup.com.</p>
    </StandardPage>
  );
}
