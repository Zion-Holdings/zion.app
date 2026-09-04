import type { Metadata } from 'next';
import StandardPage from '@/components/StandardPage';

export const metadata: Metadata = {
  title: "Enterprise AI Services — Zion Tech Group | Zion Tech Group",
  description: "Enterprise AI, automation, and IT services from Zion Tech Group. AI readiness, automation, cybersecurity, cloud optimization, custom development — fixed-scope packages, transparent pricing, delivery-first.",
  openGraph: {
    title: "Enterprise AI Services — Zion Tech Group | Zion Tech Group",
    description: "Enterprise AI, automation, and IT services from Zion Tech Group. AI readiness, automation, cybersecurity, cloud optimization, custom development — fixed-scope packages, transparent pricing, delivery-first.",
    url: "https://ziontechgroup.com/enterprise-ai-services/",
    type: 'website',
  },
  alternates: { canonical: "/enterprise-ai-services/" },
};

export default function EnterpriseAiServicesPage() {
  return (
    <StandardPage
      title="Enterprise AI Services — Zion Tech Group"
      subtitle="Enterprise AI, automation, and IT services from Zion Tech Group. AI readiness, automation, cybersecurity, cloud optimization, custom development — fixed-scope packages, transparent pricing, delivery-first."
      breadcrumbItems={[
        { label: "Home", href: "/" },
        { label: "Enterprise Ai Services" }
      ]}
      actions={[
        { label: 'Talk to us', href: '/contact/', style: 'primary' },
        { label: 'Browse services', href: '/services/', style: 'secondary' },
      ]}
    >
      <p className="text-slate-300 text-lg leading-relaxed mb-8 max-w-5xl mx-auto">Enterprise AI, automation, and IT services from Zion Tech Group. AI readiness, automation, cybersecurity, cloud optimization, custom development — fixed-scope packages, transparent pricing, delivery-first.</p>
      <p className="text-slate-500 text-sm max-w-5xl mx-auto">Restored from current main / live Pages HTML so this route is not lost in the source recovery merge.</p>
    </StandardPage>
  );
}
