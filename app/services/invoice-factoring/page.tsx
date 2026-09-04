import type { Metadata } from 'next';
import StandardPage from '@/components/StandardPage';

export const metadata: Metadata = {
  title: "Invoice Factoring Platform | Zion Tech Group",
  description: "Instant working capital for B2B businesses. Upload invoices, get approved in minutes, receive funds within 24 hours. AI-powered risk assessment.",
  openGraph: {
    title: "Invoice Factoring Platform | Zion Tech Group",
    description: "Instant working capital for B2B businesses. Upload invoices, get approved in minutes, receive funds within 24 hours. AI-powered risk assessment.",
    url: "https://ziontechgroup.com/services/invoice-factoring/",
    type: 'website',
  },
  alternates: { canonical: "/services/invoice-factoring/" },
};

export default function InvoiceFactoringPage() {
  return (
    <StandardPage
      title="Invoice Factoring Platform"
      subtitle="Instant working capital for B2B businesses. Upload invoices, get approved in minutes, receive funds within 24 hours. AI-powered risk assessment."
      breadcrumbItems={[
        { label: "Home", href: "/" },
        { label: "Services", href: "/services/" },
        { label: "Invoice Factoring Platform" }
      ]}
      actions={[
        { label: 'Talk to us', href: '/contact/', style: 'primary' },
        { label: 'Browse services', href: '/services/', style: 'secondary' },
      ]}
    >
      <p className="text-slate-300 text-lg leading-relaxed mb-8 max-w-5xl mx-auto">Instant working capital for B2B businesses. Upload invoices, get approved in minutes, receive funds within 24 hours. AI-powered risk assessment.</p>
      <p className="text-slate-500 text-sm max-w-5xl mx-auto">Restored from a Wayback Machine snapshot (20260608104453) of ziontechgroup.com.</p>
    </StandardPage>
  );
}
