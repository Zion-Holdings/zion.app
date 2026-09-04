import type { Metadata } from 'next';
import StandardPage from '@/components/StandardPage';

export const metadata: Metadata = {
  title: "Security Cloud Security Posture Management | Zion Tech Group",
  description: "Continuous multi-cloud security posture assessment with auto-remediation and compliance mapping.",
  openGraph: {
    title: "Security Cloud Security Posture Management | Zion Tech Group",
    description: "Continuous multi-cloud security posture assessment with auto-remediation and compliance mapping.",
    url: "https://ziontechgroup.com/services/security-cloud-posture-management/",
    type: 'website',
  },
  alternates: { canonical: "/services/security-cloud-posture-management/" },
};

export default function SecurityCloudPostureManagementPage() {
  return (
    <StandardPage
      title="Security Cloud Security Posture Management"
      subtitle="Continuous multi-cloud security posture assessment with auto-remediation and compliance mapping."
      breadcrumbItems={[
        { label: "Home", href: "/" },
        { label: "Services", href: "/services/" },
        { label: "Security Cloud Security Posture Management" }
      ]}
      actions={[
        { label: 'Talk to us', href: '/contact/', style: 'primary' },
        { label: 'Browse services', href: '/services/', style: 'secondary' },
      ]}
    >
      <p className="text-slate-300 text-lg leading-relaxed mb-8 max-w-5xl mx-auto">Continuous multi-cloud security posture assessment with auto-remediation and compliance mapping.</p>
      <p className="text-slate-500 text-sm max-w-5xl mx-auto">Restored from a Wayback Machine snapshot (20260614134349) of ziontechgroup.com.</p>
    </StandardPage>
  );
}
