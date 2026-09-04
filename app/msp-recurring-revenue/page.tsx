import type { Metadata } from 'next';
import StandardPage from '@/components/StandardPage';

export const metadata: Metadata = {
  title: "Msp Recurring Revenue | Zion Tech Group",
  description: "Automate msp recurring revenue with Zion Tech Group. Increase recurring revenue, reduce manual work, and scale your IT agency with proven automation systems.",
  openGraph: {
    title: "Msp Recurring Revenue | Zion Tech Group",
    description: "Automate msp recurring revenue with Zion Tech Group. Increase recurring revenue, reduce manual work, and scale your IT agency with proven automation systems.",
    url: "https://ziontechgroup.com/msp-recurring-revenue/",
    type: 'website',
  },
  alternates: { canonical: "/msp-recurring-revenue/" },
};

export default function MspRecurringRevenuePage() {
  return (
    <StandardPage
      title="Msp Recurring Revenue"
      subtitle="Automate msp recurring revenue with Zion Tech Group. Increase recurring revenue, reduce manual work, and scale your IT agency with proven automation systems."
      breadcrumbItems={[
        { label: "Home", href: "/" },
        { label: "Msp Recurring Revenue" }
      ]}
      actions={[
        { label: 'Talk to us', href: '/contact/', style: 'primary' },
        { label: 'Browse services', href: '/services/', style: 'secondary' },
      ]}
    >
      <p className="text-slate-300 text-lg leading-relaxed mb-8 max-w-5xl mx-auto">Automate msp recurring revenue with Zion Tech Group. Increase recurring revenue, reduce manual work, and scale your IT agency with proven automation systems.</p>
      <p className="text-slate-500 text-sm max-w-5xl mx-auto">Restored from current main / live Pages HTML so this route is not lost in the source recovery merge.</p>
    </StandardPage>
  );
}
