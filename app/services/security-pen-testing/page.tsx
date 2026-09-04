import type { Metadata } from 'next';
import StandardPage from '@/components/StandardPage';

export const metadata: Metadata = {
  title: "Security Pen Testing | Zion Tech Group",
  description: "Security Pen Testing from Zion Tech Group.",
  openGraph: {
    title: "Security Pen Testing | Zion Tech Group",
    description: "Security Pen Testing from Zion Tech Group.",
    url: "https://ziontechgroup.com/services/security-pen-testing/",
    type: 'website',
  },
  alternates: { canonical: "/services/security-pen-testing/" },
};

export default function SecurityPenTestingPage() {
  return (
    <StandardPage
      title="Security Pen Testing"
      subtitle="Security Pen Testing from Zion Tech Group."
      breadcrumbItems={[
        { label: "Home", href: "/" },
        { label: "Services", href: "/services/" },
        { label: "Security Pen Testing" }
      ]}
      actions={[
        { label: 'Talk to us', href: '/contact/', style: 'primary' },
        { label: 'Browse services', href: '/services/', style: 'secondary' },
      ]}
    >
      <p className="text-slate-300 text-lg leading-relaxed mb-8 max-w-5xl mx-auto">Security Pen Testing from Zion Tech Group.</p>
      <p className="text-slate-500 text-sm max-w-5xl mx-auto">Restored from a Wayback Machine snapshot (20260614104813) of ziontechgroup.com.</p>
    </StandardPage>
  );
}
