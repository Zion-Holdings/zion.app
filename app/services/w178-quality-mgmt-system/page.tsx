import type { Metadata } from 'next';
import StandardPage from '@/components/StandardPage';

export const metadata: Metadata = {
  title: "Quality Management System (QMS) | Zion Tech Group",
  description: "Manage quality: CAPA, audits, document control, compliance. ISO 9001, ISO 13485 aligned.",
  openGraph: {
    title: "Quality Management System (QMS) | Zion Tech Group",
    description: "Manage quality: CAPA, audits, document control, compliance. ISO 9001, ISO 13485 aligned.",
    url: "https://ziontechgroup.com/services/w178-quality-mgmt-system/",
    type: 'website',
  },
  alternates: { canonical: "/services/w178-quality-mgmt-system/" },
};

export default function W178QualityMgmtSystemPage() {
  return (
    <StandardPage
      title="Quality Management System (QMS)"
      subtitle="Manage quality: CAPA, audits, document control, compliance. ISO 9001, ISO 13485 aligned."
      breadcrumbItems={[
        { label: "Home", href: "/" },
        { label: "Services", href: "/services/" },
        { label: "Quality Management System (QMS)" }
      ]}
      actions={[
        { label: 'Talk to us', href: '/contact/', style: 'primary' },
        { label: 'Browse services', href: '/services/', style: 'secondary' },
      ]}
    >
      <p className="text-slate-300 text-lg leading-relaxed mb-8 max-w-5xl mx-auto">Manage quality: CAPA, audits, document control, compliance. ISO 9001, ISO 13485 aligned.</p>
      <p className="text-slate-500 text-sm max-w-5xl mx-auto">Restored from a Wayback Machine snapshot (20260608112036) of ziontechgroup.com.</p>
    </StandardPage>
  );
}
