import type { Metadata } from 'next';
import StandardPage from '@/components/StandardPage';

export const metadata: Metadata = {
  title: "Smart Manufacturing Operations Platform | Zion Tech Group",
  description: "Industry 4.0 platform that connects factory equipment, monitors production in real-time, and optimizes manufacturing processes. OEE tracking, predictive quality, and digital twin integration.",
  openGraph: {
    title: "Smart Manufacturing Operations Platform | Zion Tech Group",
    description: "Industry 4.0 platform that connects factory equipment, monitors production in real-time, and optimizes manufacturing processes. OEE tracking, predictive quality, and digital twin integration.",
    url: "https://ziontechgroup.com/services/smart-manufacturing-ops/",
    type: 'website',
  },
  alternates: { canonical: "/services/smart-manufacturing-ops/" },
};

export default function SmartManufacturingOpsPage() {
  return (
    <StandardPage
      title="Smart Manufacturing Operations Platform"
      subtitle="Industry 4.0 platform that connects factory equipment, monitors production in real-time, and optimizes manufacturing processes. OEE tracking, predictive quality, and digital twin integration."
      breadcrumbItems={[
        { label: "Home", href: "/" },
        { label: "Services", href: "/services/" },
        { label: "Smart Manufacturing Operations Platform" }
      ]}
      actions={[
        { label: 'Talk to us', href: '/contact/', style: 'primary' },
        { label: 'Browse services', href: '/services/', style: 'secondary' },
      ]}
    >
      <p className="text-slate-300 text-lg leading-relaxed mb-8 max-w-5xl mx-auto">Industry 4.0 platform that connects factory equipment, monitors production in real-time, and optimizes manufacturing processes. OEE tracking, predictive quality, and digital twin integration.</p>
      <p className="text-slate-500 text-sm max-w-5xl mx-auto">Restored from a Wayback Machine snapshot (20260614130931) of ziontechgroup.com.</p>
    </StandardPage>
  );
}
