import type { Metadata } from 'next';
import StandardPage from '@/components/StandardPage';

export const metadata: Metadata = {
  title: "Telehealth Platform | Zion Tech Group",
  description: "HIPAA-compliant telehealth platform with video consultations, e-prescribing, patient scheduling, and integrated billing. Supports multi-provider practices.",
  openGraph: {
    title: "Telehealth Platform | Zion Tech Group",
    description: "HIPAA-compliant telehealth platform with video consultations, e-prescribing, patient scheduling, and integrated billing. Supports multi-provider practices.",
    url: "https://ziontechgroup.com/services/telehealth-platform/",
    type: 'website',
  },
  alternates: { canonical: "/services/telehealth-platform/" },
};

export default function TelehealthPlatformPage() {
  return (
    <StandardPage
      title="Telehealth Platform"
      subtitle="HIPAA-compliant telehealth platform with video consultations, e-prescribing, patient scheduling, and integrated billing. Supports multi-provider practices."
      breadcrumbItems={[
        { label: "Home", href: "/" },
        { label: "Services", href: "/services/" },
        { label: "Telehealth Platform" }
      ]}
      actions={[
        { label: 'Talk to us', href: '/contact/', style: 'primary' },
        { label: 'Browse services', href: '/services/', style: 'secondary' },
      ]}
    >
      <p className="text-slate-300 text-lg leading-relaxed mb-8 max-w-5xl mx-auto">HIPAA-compliant telehealth platform with video consultations, e-prescribing, patient scheduling, and integrated billing. Supports multi-provider practices.</p>
      <p className="text-slate-500 text-sm max-w-5xl mx-auto">Restored from a Wayback Machine snapshot (20260607201147) of ziontechgroup.com.</p>
    </StandardPage>
  );
}
