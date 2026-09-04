import type { Metadata } from 'next';
import StandardPage from '@/components/StandardPage';

export const metadata: Metadata = {
  title: "Virtual CIO & IT Strategy Service | Zion Tech Group",
  description: "Fractional CIO providing technology strategy, vendor management, budget planning, and board-level reporting. Includes quarterly roadmap reviews, security assessments, and technology procurement advisory.",
  openGraph: {
    title: "Virtual CIO & IT Strategy Service | Zion Tech Group",
    description: "Fractional CIO providing technology strategy, vendor management, budget planning, and board-level reporting. Includes quarterly roadmap reviews, security assessments, and technology procurement advisory.",
    url: "https://ziontechgroup.com/services/it-vcio-service/",
    type: 'website',
  },
  alternates: { canonical: "/services/it-vcio-service/" },
};

export default function ItVcioServicePage() {
  return (
    <StandardPage
      title="Virtual CIO & IT Strategy Service"
      subtitle="Fractional CIO providing technology strategy, vendor management, budget planning, and board-level reporting. Includes quarterly roadmap reviews, security assessments, and technology procurement advisory."
      breadcrumbItems={[
        { label: "Home", href: "/" },
        { label: "Services", href: "/services/" },
        { label: "Virtual CIO & IT Strategy Service" }
      ]}
      actions={[
        { label: 'Talk to us', href: '/contact/', style: 'primary' },
        { label: 'Browse services', href: '/services/', style: 'secondary' },
      ]}
    >
      <p className="text-slate-300 text-lg leading-relaxed mb-8 max-w-5xl mx-auto">Fractional CIO providing technology strategy, vendor management, budget planning, and board-level reporting. Includes quarterly roadmap reviews, security assessments, and technology procurement advisory.</p>
      <p className="text-slate-500 text-sm max-w-5xl mx-auto">Restored from a Wayback Machine snapshot (20260614140404) of ziontechgroup.com.</p>
    </StandardPage>
  );
}
