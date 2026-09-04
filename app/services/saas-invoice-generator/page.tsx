import type { Metadata } from 'next';
import StandardPage from '@/components/StandardPage';

export const metadata: Metadata = {
  title: "Smart Invoice Generator Pro | Zion Tech Group",
  description: "AI-powered invoice creation with automatic tax calculation, multi-currency support, payment tracking, and recurring billing. Integrates with Stripe, PayPal, and QuickBooks.",
  openGraph: {
    title: "Smart Invoice Generator Pro | Zion Tech Group",
    description: "AI-powered invoice creation with automatic tax calculation, multi-currency support, payment tracking, and recurring billing. Integrates with Stripe, PayPal, and QuickBooks.",
    url: "https://ziontechgroup.com/services/saas-invoice-generator/",
    type: 'website',
  },
  alternates: { canonical: "/services/saas-invoice-generator/" },
};

export default function SaasInvoiceGeneratorPage() {
  return (
    <StandardPage
      title="Smart Invoice Generator Pro"
      subtitle="AI-powered invoice creation with automatic tax calculation, multi-currency support, payment tracking, and recurring billing. Integrates with Stripe, PayPal, and QuickBooks."
      breadcrumbItems={[
        { label: "Home", href: "/" },
        { label: "Services", href: "/services/" },
        { label: "Smart Invoice Generator Pro" }
      ]}
      actions={[
        { label: 'Talk to us', href: '/contact/', style: 'primary' },
        { label: 'Browse services', href: '/services/', style: 'secondary' },
      ]}
    >
      <p className="text-slate-300 text-lg leading-relaxed mb-8 max-w-5xl mx-auto">AI-powered invoice creation with automatic tax calculation, multi-currency support, payment tracking, and recurring billing. Integrates with Stripe, PayPal, and QuickBooks.</p>
      <p className="text-slate-500 text-sm max-w-5xl mx-auto">Restored from a Wayback Machine snapshot (20260614105135) of ziontechgroup.com.</p>
    </StandardPage>
  );
}
