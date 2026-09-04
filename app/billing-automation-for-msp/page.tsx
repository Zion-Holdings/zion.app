import type { Metadata } from 'next';
import StandardPage from '@/components/StandardPage';

export const metadata: Metadata = {
  title: "Billing Automation For Msp | Zion Tech Group",
  description: "Automate billing automation for msp with Zion Tech Group. Increase recurring revenue and reduce manual work with proven IT automation systems.",
  openGraph: {
    title: "Billing Automation For Msp | Zion Tech Group",
    description: "Automate billing automation for msp with Zion Tech Group. Increase recurring revenue and reduce manual work with proven IT automation systems.",
    url: "https://ziontechgroup.com/billing-automation-for-msp/",
    type: 'website',
  },
  alternates: { canonical: "/billing-automation-for-msp/" },
};

export default function BillingAutomationForMspPage() {
  return (
    <StandardPage
      title="Billing Automation For Msp"
      subtitle="Automate billing automation for msp with Zion Tech Group. Increase recurring revenue and reduce manual work with proven IT automation systems."
      breadcrumbItems={[
        { label: "Home", href: "/" },
        { label: "Billing Automation For Msp" }
      ]}
      actions={[
        { label: 'Talk to us', href: '/contact/', style: 'primary' },
        { label: 'Browse services', href: '/services/', style: 'secondary' },
      ]}
    >
      <p className="text-slate-300 text-lg leading-relaxed mb-8 max-w-5xl mx-auto">Automate billing automation for msp with Zion Tech Group. Increase recurring revenue and reduce manual work with proven IT automation systems.</p>
      <p className="text-slate-500 text-sm max-w-5xl mx-auto">Restored from current main / live Pages HTML so this route is not lost in the source recovery merge.</p>
    </StandardPage>
  );
}
