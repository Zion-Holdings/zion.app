import type { Metadata } from 'next';
import StandardPage from '@/components/StandardPage';

export const metadata: Metadata = {
  title: "Feature Voting Board | Zion Tech Group",
  description: "Customer feedback and feature voting platform to democratize your product roadmap.",
  openGraph: {
    title: "Feature Voting Board | Zion Tech Group",
    description: "Customer feedback and feature voting platform to democratize your product roadmap.",
    url: "https://ziontechgroup.com/services/microsaas-feature-voting/",
    type: 'website',
  },
  alternates: { canonical: "/services/microsaas-feature-voting/" },
};

export default function MicrosaasFeatureVotingPage() {
  return (
    <StandardPage
      title="Feature Voting Board"
      subtitle="Customer feedback and feature voting platform to democratize your product roadmap."
      breadcrumbItems={[
        { label: "Home", href: "/" },
        { label: "Services", href: "/services/" },
        { label: "Feature Voting Board" }
      ]}
      actions={[
        { label: 'Talk to us', href: '/contact/', style: 'primary' },
        { label: 'Browse services', href: '/services/', style: 'secondary' },
      ]}
    >
      <p className="text-slate-300 text-lg leading-relaxed mb-8 max-w-5xl mx-auto">Customer feedback and feature voting platform to democratize your product roadmap.</p>
      <p className="text-slate-500 text-sm max-w-5xl mx-auto">Restored from a Wayback Machine snapshot (20260607201319) of ziontechgroup.com.</p>
    </StandardPage>
  );
}
