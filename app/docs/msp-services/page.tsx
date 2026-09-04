import type { Metadata } from 'next';
import StandardPage from '@/components/StandardPage';

export const metadata: Metadata = {
  title: "MSP Services & AI Solutions | Zion Tech Group",
  description: "AI-enhanced MSP services for IT service providers. Automate operations, improve client outcomes, and scale your MSP with AI-powered tools.",
  openGraph: {
    title: "MSP Services & AI Solutions | Zion Tech Group",
    description: "AI-enhanced MSP services for IT service providers. Automate operations, improve client outcomes, and scale your MSP with AI-powered tools.",
    url: "https://ziontechgroup.com/docs/msp-services/",
    type: 'website',
  },
  alternates: { canonical: "/docs/msp-services/" },
};

export default function DocsMspServicesPage() {
  return (
    <StandardPage
      title="MSP Services & AI Solutions"
      subtitle="AI-enhanced MSP services for IT service providers. Automate operations, improve client outcomes, and scale your MSP with AI-powered tools."
      breadcrumbItems={[
        { label: "Home", href: "/" },
        { label: "Docs", href: "/docs/" },
        { label: "Msp Services" }
      ]}
      actions={[
        { label: 'Talk to us', href: '/contact/', style: 'primary' },
        { label: 'Browse services', href: '/services/', style: 'secondary' },
      ]}
    >
      <p className="text-slate-300 text-lg leading-relaxed mb-6 max-w-5xl mx-auto">AI-enhanced MSP services for IT service providers. Automate operations, improve client outcomes, and scale your MSP with AI-powered tools.</p>
      <p className="text-slate-500 text-sm max-w-5xl mx-auto">Restored from current main /docs HTML so this published route is not lost.</p>
    </StandardPage>
  );
}
