import type { Metadata } from 'next';
import StandardPage from '@/components/StandardPage';

export const metadata: Metadata = {
  title: "Enterprise | Zion Tech Group",
  description: "Enterprise-grade AI, IT, and cybersecurity solutions from Zion Tech Group. SOC 2, HIPAA, ISO 27001 compliant. Dedicated support and private deployment.",
  openGraph: {
    title: "Enterprise | Zion Tech Group",
    description: "Enterprise-grade AI, IT, and cybersecurity solutions from Zion Tech Group. SOC 2, HIPAA, ISO 27001 compliant. Dedicated support and private deployment.",
    url: "https://ziontechgroup.com/docs/enterprise/",
    type: 'website',
  },
  alternates: { canonical: "/docs/enterprise/" },
};

export default function DocsEnterprisePage() {
  return (
    <StandardPage
      title="Enterprise"
      subtitle="Enterprise-grade AI, IT, and cybersecurity solutions from Zion Tech Group. SOC 2, HIPAA, ISO 27001 compliant. Dedicated support and private deployment."
      breadcrumbItems={[
        { label: "Home", href: "/" },
        { label: "Docs", href: "/docs/" },
        { label: "Enterprise" }
      ]}
      actions={[
        { label: 'Talk to us', href: '/contact/', style: 'primary' },
        { label: 'Browse services', href: '/services/', style: 'secondary' },
      ]}
    >
      <p className="text-slate-300 text-lg leading-relaxed mb-6 max-w-5xl mx-auto">Enterprise-grade AI, IT, and cybersecurity solutions from Zion Tech Group. SOC 2, HIPAA, ISO 27001 compliant. Dedicated support and private deployment.</p>
      <p className="text-slate-500 text-sm max-w-5xl mx-auto">Restored from current main /docs HTML so this published route is not lost.</p>
    </StandardPage>
  );
}
