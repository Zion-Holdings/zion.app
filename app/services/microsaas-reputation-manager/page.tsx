import type { Metadata } from 'next';
import StandardPage from '@/components/StandardPage';

export const metadata: Metadata = {
  title: "Reputation Manager | Zion Tech Group",
  description: "Monitor and manage online reviews across Google, Yelp, and social media with AI response suggestions.",
  openGraph: {
    title: "Reputation Manager | Zion Tech Group",
    description: "Monitor and manage online reviews across Google, Yelp, and social media with AI response suggestions.",
    url: "https://ziontechgroup.com/services/microsaas-reputation-manager/",
    type: 'website',
  },
  alternates: { canonical: "/services/microsaas-reputation-manager/" },
};

export default function MicrosaasReputationManagerPage() {
  return (
    <StandardPage
      title="Reputation Manager"
      subtitle="Monitor and manage online reviews across Google, Yelp, and social media with AI response suggestions."
      breadcrumbItems={[
        { label: "Home", href: "/" },
        { label: "Services", href: "/services/" },
        { label: "Reputation Manager" }
      ]}
      actions={[
        { label: 'Talk to us', href: '/contact/', style: 'primary' },
        { label: 'Browse services', href: '/services/', style: 'secondary' },
      ]}
    >
      <p className="text-slate-300 text-lg leading-relaxed mb-8 max-w-5xl mx-auto">Monitor and manage online reviews across Google, Yelp, and social media with AI response suggestions.</p>
      <p className="text-slate-500 text-sm max-w-5xl mx-auto">Restored from a Wayback Machine snapshot (20260614102216) of ziontechgroup.com.</p>
    </StandardPage>
  );
}
