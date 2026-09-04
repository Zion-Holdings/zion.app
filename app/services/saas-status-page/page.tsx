import type { Metadata } from 'next';
import StandardPage from '@/components/StandardPage';

export const metadata: Metadata = {
  title: "Real-Time Status Page & Incident Manager | Zion Tech Group",
  description: "Beautiful public status pages with automatic incident detection, subscriber notifications, and post-mortem templates. Custom domain, SSL included.",
  openGraph: {
    title: "Real-Time Status Page & Incident Manager | Zion Tech Group",
    description: "Beautiful public status pages with automatic incident detection, subscriber notifications, and post-mortem templates. Custom domain, SSL included.",
    url: "https://ziontechgroup.com/services/saas-status-page/",
    type: 'website',
  },
  alternates: { canonical: "/services/saas-status-page/" },
};

export default function SaasStatusPagePage() {
  return (
    <StandardPage
      title="Real-Time Status Page & Incident Manager"
      subtitle="Beautiful public status pages with automatic incident detection, subscriber notifications, and post-mortem templates. Custom domain, SSL included."
      breadcrumbItems={[
        { label: "Home", href: "/" },
        { label: "Services", href: "/services/" },
        { label: "Real-Time Status Page & Incident Manager" }
      ]}
      actions={[
        { label: 'Talk to us', href: '/contact/', style: 'primary' },
        { label: 'Browse services', href: '/services/', style: 'secondary' },
      ]}
    >
      <p className="text-slate-300 text-lg leading-relaxed mb-8 max-w-5xl mx-auto">Beautiful public status pages with automatic incident detection, subscriber notifications, and post-mortem templates. Custom domain, SSL included.</p>
      <p className="text-slate-500 text-sm max-w-5xl mx-auto">Restored from a Wayback Machine snapshot (20260614131926) of ziontechgroup.com.</p>
    </StandardPage>
  );
}
