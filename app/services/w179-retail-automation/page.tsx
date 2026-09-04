import type { Metadata } from 'next';
import StandardPage from '@/components/StandardPage';

export const metadata: Metadata = {
  title: "W179 Retail Automation | Zion Tech Group",
  description: "W179 Retail Automation from Zion Tech Group.",
  openGraph: {
    title: "W179 Retail Automation | Zion Tech Group",
    description: "W179 Retail Automation from Zion Tech Group.",
    url: "https://ziontechgroup.com/services/w179-retail-automation/",
    type: 'website',
  },
  alternates: { canonical: "/services/w179-retail-automation/" },
};

export default function W179RetailAutomationPage() {
  return (
    <StandardPage
      title="W179 Retail Automation"
      subtitle="W179 Retail Automation from Zion Tech Group."
      breadcrumbItems={[
        { label: "Home", href: "/" },
        { label: "Services", href: "/services/" },
        { label: "W179 Retail Automation" }
      ]}
      actions={[
        { label: 'Talk to us', href: '/contact/', style: 'primary' },
        { label: 'Browse services', href: '/services/', style: 'secondary' },
      ]}
    >
      <p className="text-slate-300 text-lg leading-relaxed mb-8 max-w-5xl mx-auto">W179 Retail Automation from Zion Tech Group.</p>
      <p className="text-slate-500 text-sm max-w-5xl mx-auto">Restored from a Wayback Machine snapshot (20260607105232) of ziontechgroup.com.</p>
    </StandardPage>
  );
}
