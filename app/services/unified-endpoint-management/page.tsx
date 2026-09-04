import type { Metadata } from 'next';
import StandardPage from '@/components/StandardPage';

export const metadata: Metadata = {
  title: "Unified Endpoint Management (UEM) | Zion Tech Group",
  description: "Comprehensive endpoint management platform that secures and manages laptops, desktops, mobile devices, and IoT from a single console. Zero-touch enrollment, compliance enforcement, and remote troubleshooting.",
  openGraph: {
    title: "Unified Endpoint Management (UEM) | Zion Tech Group",
    description: "Comprehensive endpoint management platform that secures and manages laptops, desktops, mobile devices, and IoT from a single console. Zero-touch enrollment, compliance enforcement, and remote troubleshooting.",
    url: "https://ziontechgroup.com/services/unified-endpoint-management/",
    type: 'website',
  },
  alternates: { canonical: "/services/unified-endpoint-management/" },
};

export default function UnifiedEndpointManagementPage() {
  return (
    <StandardPage
      title="Unified Endpoint Management (UEM)"
      subtitle="Comprehensive endpoint management platform that secures and manages laptops, desktops, mobile devices, and IoT from a single console. Zero-touch enrollment, compliance enforcement, and remote troubleshooting."
      breadcrumbItems={[
        { label: "Home", href: "/" },
        { label: "Services", href: "/services/" },
        { label: "Unified Endpoint Management (UEM)" }
      ]}
      actions={[
        { label: 'Talk to us', href: '/contact/', style: 'primary' },
        { label: 'Browse services', href: '/services/', style: 'secondary' },
      ]}
    >
      <p className="text-slate-300 text-lg leading-relaxed mb-8 max-w-5xl mx-auto">Comprehensive endpoint management platform that secures and manages laptops, desktops, mobile devices, and IoT from a single console. Zero-touch enrollment, compliance enforcement, and remote troubleshooting.</p>
      <p className="text-slate-500 text-sm max-w-5xl mx-auto">Restored from a Wayback Machine snapshot (20260607110924) of ziontechgroup.com.</p>
    </StandardPage>
  );
}
