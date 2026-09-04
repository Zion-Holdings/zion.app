import type { Metadata } from 'next';
import StandardPage from '@/components/StandardPage';

export const metadata: Metadata = {
  title: "Digital Twin Platform | Zion Tech Group",
  description: "Create virtual replicas of physical assets, processes, or systems. Real-time simulation, predictive maintenance, and what-if scenario planning.",
  openGraph: {
    title: "Digital Twin Platform | Zion Tech Group",
    description: "Create virtual replicas of physical assets, processes, or systems. Real-time simulation, predictive maintenance, and what-if scenario planning.",
    url: "https://ziontechgroup.com/services/digital-twin/",
    type: 'website',
  },
  alternates: { canonical: "/services/digital-twin/" },
};

export default function DigitalTwinPage() {
  return (
    <StandardPage
      title="Digital Twin Platform"
      subtitle="Create virtual replicas of physical assets, processes, or systems. Real-time simulation, predictive maintenance, and what-if scenario planning."
      breadcrumbItems={[
        { label: "Home", href: "/" },
        { label: "Services", href: "/services/" },
        { label: "Digital Twin Platform" }
      ]}
      actions={[
        { label: 'Talk to us', href: '/contact/', style: 'primary' },
        { label: 'Browse services', href: '/services/', style: 'secondary' },
      ]}
    >
      <p className="text-slate-300 text-lg leading-relaxed mb-8 max-w-5xl mx-auto">Create virtual replicas of physical assets, processes, or systems. Real-time simulation, predictive maintenance, and what-if scenario planning.</p>
      <p className="text-slate-500 text-sm max-w-5xl mx-auto">Restored from a Wayback Machine snapshot (20260614133435) of ziontechgroup.com.</p>
    </StandardPage>
  );
}
