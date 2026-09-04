import type { Metadata } from 'next';
import StandardPage from '@/components/StandardPage';

export const metadata: Metadata = {
  title: "AI Invoice Processing | Zion Tech Group",
  description: "Automated invoice processing: line-item extraction, approval routing, GL coding, ERP posting.",
  openGraph: {
    title: "AI Invoice Processing | Zion Tech Group",
    description: "Automated invoice processing: line-item extraction, approval routing, GL coding, ERP posting.",
    url: "https://ziontechgroup.com/services/w178-ai-invoice-process/",
    type: 'website',
  },
  alternates: { canonical: "/services/w178-ai-invoice-process/" },
};

export default function W178AiInvoiceProcessPage() {
  return (
    <StandardPage
      title="AI Invoice Processing"
      subtitle="Automated invoice processing: line-item extraction, approval routing, GL coding, ERP posting."
      breadcrumbItems={[
        { label: "Home", href: "/" },
        { label: "Services", href: "/services/" },
        { label: "AI Invoice Processing" }
      ]}
      actions={[
        { label: 'Talk to us', href: '/contact/', style: 'primary' },
        { label: 'Browse services', href: '/services/', style: 'secondary' },
      ]}
    >
      <p className="text-slate-300 text-lg leading-relaxed mb-8 max-w-5xl mx-auto">Automated invoice processing: line-item extraction, approval routing, GL coding, ERP posting.</p>
      <p className="text-slate-500 text-sm max-w-5xl mx-auto">Restored from a Wayback Machine snapshot (20260607104241) of ziontechgroup.com.</p>
    </StandardPage>
  );
}
