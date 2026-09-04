import type { Metadata } from 'next';
import StandardPage from '@/components/StandardPage';

export const metadata: Metadata = {
  title: "SOC as a Service | Zion Tech Group",
  description: "Zion SOC as a Service: 24/7 threat monitoring, incident response, and compliance-ready security operations for AI and IT environments.",
  openGraph: {
    title: "SOC as a Service | Zion Tech Group",
    description: "Zion SOC as a Service: 24/7 threat monitoring, incident response, and compliance-ready security operations for AI and IT environments.",
    url: "https://ziontechgroup.com/docs/soc-as-a-service/",
    type: 'website',
  },
  alternates: { canonical: "/docs/soc-as-a-service/" },
};

export default function DocsSocAsAServicePage() {
  return (
    <StandardPage
      title="SOC as a Service"
      subtitle="Zion SOC as a Service: 24/7 threat monitoring, incident response, and compliance-ready security operations for AI and IT environments."
      breadcrumbItems={[
        { label: "Home", href: "/" },
        { label: "Docs", href: "/docs/" },
        { label: "Soc As A Service" }
      ]}
      actions={[
        { label: 'Talk to us', href: '/contact/', style: 'primary' },
        { label: 'Browse services', href: '/services/', style: 'secondary' },
      ]}
    >
      <p className="text-slate-300 text-lg leading-relaxed mb-6 max-w-5xl mx-auto">Zion SOC as a Service: 24/7 threat monitoring, incident response, and compliance-ready security operations for AI and IT environments.</p>
      <p className="text-slate-500 text-sm max-w-5xl mx-auto">Restored from current main /docs HTML so this published route is not lost.</p>
    </StandardPage>
  );
}
