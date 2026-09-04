import type { Metadata } from 'next';
import StandardPage from '@/components/StandardPage';

export const metadata: Metadata = {
  title: "Smart Building Platform | Zion Tech Group",
  description: "IoT platform for intelligent building management. Energy optimization, occupancy tracking, predictive maintenance, and environmental monitoring via unified dashboard.",
  openGraph: {
    title: "Smart Building Platform | Zion Tech Group",
    description: "IoT platform for intelligent building management. Energy optimization, occupancy tracking, predictive maintenance, and environmental monitoring via unified dashboard.",
    url: "https://ziontechgroup.com/services/smart-building-platform/",
    type: 'website',
  },
  alternates: { canonical: "/services/smart-building-platform/" },
};

export default function SmartBuildingPlatformPage() {
  return (
    <StandardPage
      title="Smart Building Platform"
      subtitle="IoT platform for intelligent building management. Energy optimization, occupancy tracking, predictive maintenance, and environmental monitoring via unified dashboard."
      breadcrumbItems={[
        { label: "Home", href: "/" },
        { label: "Services", href: "/services/" },
        { label: "Smart Building Platform" }
      ]}
      actions={[
        { label: 'Talk to us', href: '/contact/', style: 'primary' },
        { label: 'Browse services', href: '/services/', style: 'secondary' },
      ]}
    >
      <p className="text-slate-300 text-lg leading-relaxed mb-8 max-w-5xl mx-auto">IoT platform for intelligent building management. Energy optimization, occupancy tracking, predictive maintenance, and environmental monitoring via unified dashboard.</p>
      <p className="text-slate-500 text-sm max-w-5xl mx-auto">Restored from a Wayback Machine snapshot (20260614134614) of ziontechgroup.com.</p>
    </StandardPage>
  );
}
