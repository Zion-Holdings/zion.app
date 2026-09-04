import type { Metadata } from 'next';
import StandardPage from '@/components/StandardPage';

export const metadata: Metadata = {
  title: "Identity Governance & Administration | Zion Tech Group",
  description: "Comprehensive identity governance platform that manages the complete identity lifecycle \u2014 joiner, mover, leaver processes, access certifications, role management, and compliance reporting. Ensures least-privilege access ",
  openGraph: {
    title: "Identity Governance & Administration | Zion Tech Group",
    description: "Comprehensive identity governance platform that manages the complete identity lifecycle \u2014 joiner, mover, leaver processes, access certifications, role management, and compliance reporting. Ensures least-privilege access ",
    url: "https://ziontechgroup.com/services/identity-governance-platform/",
    type: 'website',
  },
  alternates: { canonical: "/services/identity-governance-platform/" },
};

export default function IdentityGovernancePlatformPage() {
  return (
    <StandardPage
      title="Identity Governance & Administration"
      subtitle="Comprehensive identity governance platform that manages the complete identity lifecycle \u2014 joiner, mover, leaver processes, access certifications, role management, and compliance reporting. Ensures least-privilege access "
      breadcrumbItems={[
        { label: "Home", href: "/" },
        { label: "Services", href: "/services/" },
        { label: "Identity Governance & Administration" }
      ]}
      actions={[
        { label: 'Talk to us', href: '/contact/', style: 'primary' },
        { label: 'Browse services', href: '/services/', style: 'secondary' },
      ]}
    >
      <p className="text-slate-300 text-lg leading-relaxed mb-8 max-w-5xl mx-auto">Comprehensive identity governance platform that manages the complete identity lifecycle — joiner, mover, leaver processes, access certifications, role management, and compliance reporting. Ensures least-privilege access </p>
      <p className="text-slate-500 text-sm max-w-5xl mx-auto">Restored from a Wayback Machine snapshot (20260607203558) of ziontechgroup.com.</p>
    </StandardPage>
  );
}
