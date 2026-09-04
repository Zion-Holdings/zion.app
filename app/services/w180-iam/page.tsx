import type { Metadata } from 'next';
import StandardPage from '@/components/StandardPage';

export const metadata: Metadata = {
  title: "Identity and Access Management | Zion Tech Group",
  description: "Deploy IAM: SSO, MFA, directory sync, lifecycle management.",
  openGraph: {
    title: "Identity and Access Management | Zion Tech Group",
    description: "Deploy IAM: SSO, MFA, directory sync, lifecycle management.",
    url: "https://ziontechgroup.com/services/w180-iam/",
    type: 'website',
  },
  alternates: { canonical: "/services/w180-iam/" },
};

export default function W180IamPage() {
  return (
    <StandardPage
      title="Identity and Access Management"
      subtitle="Deploy IAM: SSO, MFA, directory sync, lifecycle management."
      breadcrumbItems={[
        { label: "Home", href: "/" },
        { label: "Services", href: "/services/" },
        { label: "Identity and Access Management" }
      ]}
      actions={[
        { label: 'Talk to us', href: '/contact/', style: 'primary' },
        { label: 'Browse services', href: '/services/', style: 'secondary' },
      ]}
    >
      <p className="text-slate-300 text-lg leading-relaxed mb-8 max-w-5xl mx-auto">Deploy IAM: SSO, MFA, directory sync, lifecycle management.</p>
      <p className="text-slate-500 text-sm max-w-5xl mx-auto">Restored from a Wayback Machine snapshot (20260607111903) of ziontechgroup.com.</p>
    </StandardPage>
  );
}
