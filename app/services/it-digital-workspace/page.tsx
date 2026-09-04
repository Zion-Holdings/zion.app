import type { Metadata } from 'next';
import StandardPage from '@/components/StandardPage';

export const metadata: Metadata = {
  title: "Digital Workspace Platform | Zion Tech Group",
  description: "Unified workspace with VDI, app virtualization, endpoint management, and zero trust access.",
  openGraph: {
    title: "Digital Workspace Platform | Zion Tech Group",
    description: "Unified workspace with VDI, app virtualization, endpoint management, and zero trust access.",
    url: "https://ziontechgroup.com/services/it-digital-workspace/",
    type: 'website',
  },
  alternates: { canonical: "/services/it-digital-workspace/" },
};

export default function ItDigitalWorkspacePage() {
  return (
    <StandardPage
      title="Digital Workspace Platform"
      subtitle="Unified workspace with VDI, app virtualization, endpoint management, and zero trust access."
      breadcrumbItems={[
        { label: "Home", href: "/" },
        { label: "Services", href: "/services/" },
        { label: "Digital Workspace Platform" }
      ]}
      actions={[
        { label: 'Talk to us', href: '/contact/', style: 'primary' },
        { label: 'Browse services', href: '/services/', style: 'secondary' },
      ]}
    >
      <p className="text-slate-300 text-lg leading-relaxed mb-8 max-w-5xl mx-auto">Unified workspace with VDI, app virtualization, endpoint management, and zero trust access.</p>
      <p className="text-slate-500 text-sm max-w-5xl mx-auto">Restored from a Wayback Machine snapshot (20260607195742) of ziontechgroup.com.</p>
    </StandardPage>
  );
}
