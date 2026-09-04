import type { Metadata } from 'next';
import StandardPage from '@/components/StandardPage';

export const metadata: Metadata = {
  title: "Intelligent Process Mining | Zion Tech Group",
  description: "AI-powered process mining platform that discovers actual process flows from event logs, identifies bottlenecks and deviations, and recommends automation opportunities. Bridges the gap between process analysis and RPA imp",
  openGraph: {
    title: "Intelligent Process Mining | Zion Tech Group",
    description: "AI-powered process mining platform that discovers actual process flows from event logs, identifies bottlenecks and deviations, and recommends automation opportunities. Bridges the gap between process analysis and RPA imp",
    url: "https://ziontechgroup.com/services/intelligent-process-mining/",
    type: 'website',
  },
  alternates: { canonical: "/services/intelligent-process-mining/" },
};

export default function IntelligentProcessMiningPage() {
  return (
    <StandardPage
      title="Intelligent Process Mining"
      subtitle="AI-powered process mining platform that discovers actual process flows from event logs, identifies bottlenecks and deviations, and recommends automation opportunities. Bridges the gap between process analysis and RPA imp"
      breadcrumbItems={[
        { label: "Home", href: "/" },
        { label: "Services", href: "/services/" },
        { label: "Intelligent Process Mining" }
      ]}
      actions={[
        { label: 'Talk to us', href: '/contact/', style: 'primary' },
        { label: 'Browse services', href: '/services/', style: 'secondary' },
      ]}
    >
      <p className="text-slate-300 text-lg leading-relaxed mb-8 max-w-5xl mx-auto">AI-powered process mining platform that discovers actual process flows from event logs, identifies bottlenecks and deviations, and recommends automation opportunities. Bridges the gap between process analysis and RPA imp</p>
      <p className="text-slate-500 text-sm max-w-5xl mx-auto">Restored from a Wayback Machine snapshot (20260607111124) of ziontechgroup.com.</p>
    </StandardPage>
  );
}
