import type { Metadata } from 'next';
import StandardPage from '@/components/StandardPage';

export const metadata: Metadata = {
  title: "It Agency Billing Automation | Zion Tech Group",
  description: "Automate it agency billing automation with Zion Tech Group. Increase recurring revenue, reduce manual work, and scale your IT agency with proven automation systems.",
  openGraph: {
    title: "It Agency Billing Automation | Zion Tech Group",
    description: "Automate it agency billing automation with Zion Tech Group. Increase recurring revenue, reduce manual work, and scale your IT agency with proven automation systems.",
    url: "https://ziontechgroup.com/it-agency-billing-automation/",
    type: 'website',
  },
  alternates: { canonical: "/it-agency-billing-automation/" },
};

export default function ItAgencyBillingAutomationPage() {
  return (
    <StandardPage
      title="It Agency Billing Automation"
      subtitle="Automate it agency billing automation with Zion Tech Group. Increase recurring revenue, reduce manual work, and scale your IT agency with proven automation systems."
      breadcrumbItems={[
        { label: "Home", href: "/" },
        { label: "It Agency Billing Automation" }
      ]}
      actions={[
        { label: 'Talk to us', href: '/contact/', style: 'primary' },
        { label: 'Browse services', href: '/services/', style: 'secondary' },
      ]}
    >
      <p className="text-slate-300 text-lg leading-relaxed mb-8 max-w-5xl mx-auto">Automate it agency billing automation with Zion Tech Group. Increase recurring revenue, reduce manual work, and scale your IT agency with proven automation systems.</p>
      <p className="text-slate-500 text-sm max-w-5xl mx-auto">Restored from current main / live Pages HTML so this route is not lost in the source recovery merge.</p>
    </StandardPage>
  );
}
