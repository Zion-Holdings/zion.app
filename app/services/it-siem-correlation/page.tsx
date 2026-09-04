import type { Metadata } from 'next';
import StandardPage from '@/components/StandardPage';

export const metadata: Metadata = {
  title: "SIEM Log Correlation Engine | Zion Tech Group",
  description: "Advanced log correlation with rule-based and ML-powered threat detection and response automation.",
  openGraph: {
    title: "SIEM Log Correlation Engine | Zion Tech Group",
    description: "Advanced log correlation with rule-based and ML-powered threat detection and response automation.",
    url: "https://ziontechgroup.com/services/it-siem-correlation/",
    type: 'website',
  },
  alternates: { canonical: "/services/it-siem-correlation/" },
};

export default function ItSiemCorrelationPage() {
  return (
    <StandardPage
      title="SIEM Log Correlation Engine"
      subtitle="Advanced log correlation with rule-based and ML-powered threat detection and response automation."
      breadcrumbItems={[
        { label: "Home", href: "/" },
        { label: "Services", href: "/services/" },
        { label: "SIEM Log Correlation Engine" }
      ]}
      actions={[
        { label: 'Talk to us', href: '/contact/', style: 'primary' },
        { label: 'Browse services', href: '/services/', style: 'secondary' },
      ]}
    >
      <p className="text-slate-300 text-lg leading-relaxed mb-8 max-w-5xl mx-auto">Advanced log correlation with rule-based and ML-powered threat detection and response automation.</p>
      <p className="text-slate-500 text-sm max-w-5xl mx-auto">Restored from a Wayback Machine snapshot (20260614103427) of ziontechgroup.com.</p>
    </StandardPage>
  );
}
