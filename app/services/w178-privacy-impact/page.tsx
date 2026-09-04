import type { Metadata } from 'next';
import StandardPage from '@/components/StandardPage';

export const metadata: Metadata = {
  title: "Privacy Impact Assessment (PIA) | Zion Tech Group",
  description: "Automate privacy impact assessments: data flow mapping, risk scoring, compliance documentation.",
  openGraph: {
    title: "Privacy Impact Assessment (PIA) | Zion Tech Group",
    description: "Automate privacy impact assessments: data flow mapping, risk scoring, compliance documentation.",
    url: "https://ziontechgroup.com/services/w178-privacy-impact/",
    type: 'website',
  },
  alternates: { canonical: "/services/w178-privacy-impact/" },
};

export default function W178PrivacyImpactPage() {
  return (
    <StandardPage
      title="Privacy Impact Assessment (PIA)"
      subtitle="Automate privacy impact assessments: data flow mapping, risk scoring, compliance documentation."
      breadcrumbItems={[
        { label: "Home", href: "/" },
        { label: "Services", href: "/services/" },
        { label: "Privacy Impact Assessment (PIA)" }
      ]}
      actions={[
        { label: 'Talk to us', href: '/contact/', style: 'primary' },
        { label: 'Browse services', href: '/services/', style: 'secondary' },
      ]}
    >
      <p className="text-slate-300 text-lg leading-relaxed mb-8 max-w-5xl mx-auto">Automate privacy impact assessments: data flow mapping, risk scoring, compliance documentation.</p>
      <p className="text-slate-500 text-sm max-w-5xl mx-auto">Restored from a Wayback Machine snapshot (20260607105954) of ziontechgroup.com.</p>
    </StandardPage>
  );
}
