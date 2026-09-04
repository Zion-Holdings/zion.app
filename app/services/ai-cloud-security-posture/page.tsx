import type { Metadata } from 'next';
import StandardPage from '@/components/StandardPage';

export const metadata: Metadata = {
  title: "AI Cloud Security Posture Service | Zion Tech Group",
  description: "Continuous cloud security posture management powered by AI: misconfiguration detection, IAM permission analysis, public exposure alerts, and automated remediation across AWS, Azure, and GCP.",
  openGraph: {
    title: "AI Cloud Security Posture Service | Zion Tech Group",
    description: "Continuous cloud security posture management powered by AI: misconfiguration detection, IAM permission analysis, public exposure alerts, and automated remediation across AWS, Azure, and GCP.",
    url: "https://ziontechgroup.com/services/ai-cloud-security-posture/",
    type: 'website',
  },
  alternates: { canonical: "/services/ai-cloud-security-posture/" },
};

export default function ServicesAiCloudSecurityPosturePage() {
  return (
    <StandardPage
      title="AI Cloud Security Posture Service"
      subtitle="Continuous cloud security posture management powered by AI: misconfiguration detection, IAM permission analysis, public exposure alerts, and automated remediation across AWS, Azure, and GCP."
      breadcrumbItems={[
        { label: "Home", href: "/" },
        { label: "Services", href: "/services/" },
        { label: "Ai Cloud Security Posture" }
      ]}
      actions={[
        { label: 'Talk to us', href: '/contact/', style: 'primary' },
        { label: 'Browse services', href: '/services/', style: 'secondary' },
      ]}
    >
      <p className="text-slate-300 text-lg leading-relaxed mb-8 max-w-5xl mx-auto">Continuous cloud security posture management powered by AI: misconfiguration detection, IAM permission analysis, public exposure alerts, and automated remediation across AWS, Azure, and GCP.</p>
      <p className="text-slate-500 text-sm max-w-5xl mx-auto">Restored from current main / live Pages HTML so this route is not lost in the source recovery merge.</p>
    </StandardPage>
  );
}
