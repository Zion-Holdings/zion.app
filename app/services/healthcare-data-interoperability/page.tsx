import type { Metadata } from 'next';
import StandardPage from '@/components/StandardPage';

export const metadata: Metadata = {
  title: "Healthcare Data Interoperability Hub | Zion Tech Group",
  description: "HL7 FHIR-compliant data integration platform that connects EHRs, labs, pharmacies, and medical devices. Real-time data exchange with patient identity matching and consent management.",
  openGraph: {
    title: "Healthcare Data Interoperability Hub | Zion Tech Group",
    description: "HL7 FHIR-compliant data integration platform that connects EHRs, labs, pharmacies, and medical devices. Real-time data exchange with patient identity matching and consent management.",
    url: "https://ziontechgroup.com/services/healthcare-data-interoperability/",
    type: 'website',
  },
  alternates: { canonical: "/services/healthcare-data-interoperability/" },
};

export default function HealthcareDataInteroperabilityPage() {
  return (
    <StandardPage
      title="Healthcare Data Interoperability Hub"
      subtitle="HL7 FHIR-compliant data integration platform that connects EHRs, labs, pharmacies, and medical devices. Real-time data exchange with patient identity matching and consent management."
      breadcrumbItems={[
        { label: "Home", href: "/" },
        { label: "Services", href: "/services/" },
        { label: "Healthcare Data Interoperability Hub" }
      ]}
      actions={[
        { label: 'Talk to us', href: '/contact/', style: 'primary' },
        { label: 'Browse services', href: '/services/', style: 'secondary' },
      ]}
    >
      <p className="text-slate-300 text-lg leading-relaxed mb-8 max-w-5xl mx-auto">HL7 FHIR-compliant data integration platform that connects EHRs, labs, pharmacies, and medical devices. Real-time data exchange with patient identity matching and consent management.</p>
      <p className="text-slate-500 text-sm max-w-5xl mx-auto">Restored from a Wayback Machine snapshot (20260614140136) of ziontechgroup.com.</p>
    </StandardPage>
  );
}
