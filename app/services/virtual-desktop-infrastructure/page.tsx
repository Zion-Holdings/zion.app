import type { Metadata } from 'next';
import StandardPage from '@/components/StandardPage';

export const metadata: Metadata = {
  title: "Virtual Desktop Infrastructure (VDI) | Zion Tech Group",
  description: "Cloud-hosted virtual desktop platform that delivers Windows and Linux desktops to any device. Centralized management, GPU acceleration for design workloads, and enterprise security with zero-trust access.",
  openGraph: {
    title: "Virtual Desktop Infrastructure (VDI) | Zion Tech Group",
    description: "Cloud-hosted virtual desktop platform that delivers Windows and Linux desktops to any device. Centralized management, GPU acceleration for design workloads, and enterprise security with zero-trust access.",
    url: "https://ziontechgroup.com/services/virtual-desktop-infrastructure/",
    type: 'website',
  },
  alternates: { canonical: "/services/virtual-desktop-infrastructure/" },
};

export default function VirtualDesktopInfrastructurePage() {
  return (
    <StandardPage
      title="Virtual Desktop Infrastructure (VDI)"
      subtitle="Cloud-hosted virtual desktop platform that delivers Windows and Linux desktops to any device. Centralized management, GPU acceleration for design workloads, and enterprise security with zero-trust access."
      breadcrumbItems={[
        { label: "Home", href: "/" },
        { label: "Services", href: "/services/" },
        { label: "Virtual Desktop Infrastructure (VDI)" }
      ]}
      actions={[
        { label: 'Talk to us', href: '/contact/', style: 'primary' },
        { label: 'Browse services', href: '/services/', style: 'secondary' },
      ]}
    >
      <p className="text-slate-300 text-lg leading-relaxed mb-8 max-w-5xl mx-auto">Cloud-hosted virtual desktop platform that delivers Windows and Linux desktops to any device. Centralized management, GPU acceleration for design workloads, and enterprise security with zero-trust access.</p>
      <p className="text-slate-500 text-sm max-w-5xl mx-auto">Restored from a Wayback Machine snapshot (20260614100325) of ziontechgroup.com.</p>
    </StandardPage>
  );
}
