import type { Metadata } from 'next';
import StandardPage from '@/components/StandardPage';

export const metadata: Metadata = {
  title: "Partners | Zion Tech Group",
  description: "Partner with Zion Tech Group. We collaborate with technology vendors, resellers, and service providers to deliver AI, cybersecurity, and cloud solutions.",
  openGraph: {
    title: "Partners | Zion Tech Group",
    description: "Partner with Zion Tech Group. We collaborate with technology vendors, resellers, and service providers to deliver AI, cybersecurity, and cloud solutions.",
    url: "https://ziontechgroup.com/docs/partners/",
    type: 'website',
  },
  alternates: { canonical: "/docs/partners/" },
};

export default function DocsPartnersPage() {
  return (
    <StandardPage
      title="Partners"
      subtitle="Partner with Zion Tech Group. We collaborate with technology vendors, resellers, and service providers to deliver AI, cybersecurity, and cloud solutions."
      breadcrumbItems={[
        { label: "Home", href: "/" },
        { label: "Docs", href: "/docs/" },
        { label: "Partners" }
      ]}
      actions={[
        { label: 'Talk to us', href: '/contact/', style: 'primary' },
        { label: 'Browse services', href: '/services/', style: 'secondary' },
      ]}
    >
      <p className="text-slate-300 text-lg leading-relaxed mb-6 max-w-5xl mx-auto">Partner with Zion Tech Group. We collaborate with technology vendors, resellers, and service providers to deliver AI, cybersecurity, and cloud solutions.</p>
      <p className="text-slate-500 text-sm max-w-5xl mx-auto">Restored from current main /docs HTML so this published route is not lost.</p>
    </StandardPage>
  );
}
