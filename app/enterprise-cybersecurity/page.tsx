import type { Metadata } from 'next';
import StandardPage from '@/components/StandardPage';

export const metadata: Metadata = {
  title: "Enterprise Cybersecurity | Zion Tech Group",
  description: "Enterprise cybersecurity services: threat detection, incident response, compliance, and security architecture.",
  openGraph: {
    title: "Enterprise Cybersecurity | Zion Tech Group",
    description: "Enterprise cybersecurity services: threat detection, incident response, compliance, and security architecture.",
    url: "https://ziontechgroup.com/enterprise-cybersecurity/",
    type: 'website',
  },
  alternates: { canonical: "/enterprise-cybersecurity/" },
};

export default function EnterpriseCybersecurityPage() {
  return (
    <StandardPage
      title="Enterprise Cybersecurity"
      subtitle="Enterprise cybersecurity services: threat detection, incident response, compliance, and security architecture."
      breadcrumbItems={[
        { label: "Home", href: "/" },
        { label: "Enterprise Cybersecurity" }
      ]}
      actions={[
        { label: 'Talk to us', href: '/contact/', style: 'primary' },
        { label: 'Browse services', href: '/services/', style: 'secondary' },
      ]}
    >
      <p className="text-slate-300 text-lg leading-relaxed mb-8 max-w-5xl mx-auto">Enterprise cybersecurity services: threat detection, incident response, compliance, and security architecture.</p>
      <p className="text-slate-500 text-sm max-w-5xl mx-auto">Restored from current main / live Pages HTML so this route is not lost in the source recovery merge.</p>
    </StandardPage>
  );
}
