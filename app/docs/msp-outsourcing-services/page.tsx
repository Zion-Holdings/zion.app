import type { Metadata } from 'next';
import StandardPage from '@/components/StandardPage';

export const metadata: Metadata = {
  title: "MSP Outsourcing Services | Zion Tech Group",
  description: "MSP outsourcing: NOC, SOC, helpdesk, cloud management, and AI automation for managed service providers.",
  openGraph: {
    title: "MSP Outsourcing Services | Zion Tech Group",
    description: "MSP outsourcing: NOC, SOC, helpdesk, cloud management, and AI automation for managed service providers.",
    url: "https://ziontechgroup.com/docs/msp-outsourcing-services/",
    type: 'website',
  },
  alternates: { canonical: "/docs/msp-outsourcing-services/" },
};

export default function DocsMspOutsourcingServicesPage() {
  return (
    <StandardPage
      title="MSP Outsourcing Services"
      subtitle="MSP outsourcing: NOC, SOC, helpdesk, cloud management, and AI automation for managed service providers."
      breadcrumbItems={[
        { label: "Home", href: "/" },
        { label: "Docs", href: "/docs/" },
        { label: "Msp Outsourcing Services" }
      ]}
      actions={[
        { label: 'Talk to us', href: '/contact/', style: 'primary' },
        { label: 'Browse services', href: '/services/', style: 'secondary' },
      ]}
    >
      <p className="text-slate-300 text-lg leading-relaxed mb-6 max-w-5xl mx-auto">MSP outsourcing: NOC, SOC, helpdesk, cloud management, and AI automation for managed service providers.</p>
      <p className="text-slate-500 text-sm max-w-5xl mx-auto">Restored from current main /docs HTML so this published route is not lost.</p>
    </StandardPage>
  );
}
