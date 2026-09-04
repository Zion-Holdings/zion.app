import type { Metadata } from 'next';
import StandardPage from '@/components/StandardPage';

export const metadata: Metadata = {
  title: "Microsoft 365 Management & Security | Zion Tech Group",
  description: "Complete Microsoft 365 setup, migration, management, and security hardening. Includes Exchange Online, Teams, SharePoint, OneDrive, Intune, and Defender configuration. Ongoing management and user support included.",
  openGraph: {
    title: "Microsoft 365 Management & Security | Zion Tech Group",
    description: "Complete Microsoft 365 setup, migration, management, and security hardening. Includes Exchange Online, Teams, SharePoint, OneDrive, Intune, and Defender configuration. Ongoing management and user support included.",
    url: "https://ziontechgroup.com/services/microsoft-365-management/",
    type: 'website',
  },
  alternates: { canonical: "/services/microsoft-365-management/" },
};

export default function Microsoft365ManagementPage() {
  return (
    <StandardPage
      title="Microsoft 365 Management & Security"
      subtitle="Complete Microsoft 365 setup, migration, management, and security hardening. Includes Exchange Online, Teams, SharePoint, OneDrive, Intune, and Defender configuration. Ongoing management and user support included."
      breadcrumbItems={[
        { label: "Home", href: "/" },
        { label: "Services", href: "/services/" },
        { label: "Microsoft 365 Management & Security" }
      ]}
      actions={[
        { label: 'Talk to us', href: '/contact/', style: 'primary' },
        { label: 'Browse services', href: '/services/', style: 'secondary' },
      ]}
    >
      <p className="text-slate-300 text-lg leading-relaxed mb-8 max-w-5xl mx-auto">Complete Microsoft 365 setup, migration, management, and security hardening. Includes Exchange Online, Teams, SharePoint, OneDrive, Intune, and Defender configuration. Ongoing management and user support included.</p>
      <p className="text-slate-500 text-sm max-w-5xl mx-auto">Restored from a Wayback Machine snapshot (20260614094301) of ziontechgroup.com.</p>
    </StandardPage>
  );
}
