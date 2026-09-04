import type { Metadata } from 'next';
import StandardPage from '@/components/StandardPage';

export const metadata: Metadata = {
  title: "Invoice Builder & Payments | Zion Tech Group",
  description: "Professional invoicing with payment tracking, recurring billing, and multi-currency support.",
  openGraph: {
    title: "Invoice Builder & Payments | Zion Tech Group",
    description: "Professional invoicing with payment tracking, recurring billing, and multi-currency support.",
    url: "https://ziontechgroup.com/services/microsaas-invoice-builder/",
    type: 'website',
  },
  alternates: { canonical: "/services/microsaas-invoice-builder/" },
};

export default function MicrosaasInvoiceBuilderPage() {
  return (
    <StandardPage
      title="Invoice Builder & Payments"
      subtitle="Professional invoicing with payment tracking, recurring billing, and multi-currency support."
      breadcrumbItems={[
        { label: "Home", href: "/" },
        { label: "Services", href: "/services/" },
        { label: "Invoice Builder & Payments" }
      ]}
      actions={[
        { label: 'Talk to us', href: '/contact/', style: 'primary' },
        { label: 'Browse services', href: '/services/', style: 'secondary' },
      ]}
    >
      <p className="text-slate-300 text-lg leading-relaxed mb-8 max-w-5xl mx-auto">Professional invoicing with payment tracking, recurring billing, and multi-currency support.</p>
      <p className="text-slate-500 text-sm max-w-5xl mx-auto">Restored from a Wayback Machine snapshot (20260614103104) of ziontechgroup.com.</p>
    </StandardPage>
  );
}
