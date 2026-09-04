import type { Metadata } from 'next';
import StandardPage from '@/components/StandardPage';

export const metadata: Metadata = {
  title: "Construction Project Automation | Zion Tech Group",
  description: "Automate construction: scheduling, RFIs, change orders, progress tracking.",
  openGraph: {
    title: "Construction Project Automation | Zion Tech Group",
    description: "Automate construction: scheduling, RFIs, change orders, progress tracking.",
    url: "https://ziontechgroup.com/services/w180-construct/",
    type: 'website',
  },
  alternates: { canonical: "/services/w180-construct/" },
};

export default function W180ConstructPage() {
  return (
    <StandardPage
      title="Construction Project Automation"
      subtitle="Automate construction: scheduling, RFIs, change orders, progress tracking."
      breadcrumbItems={[
        { label: "Home", href: "/" },
        { label: "Services", href: "/services/" },
        { label: "Construction Project Automation" }
      ]}
      actions={[
        { label: 'Talk to us', href: '/contact/', style: 'primary' },
        { label: 'Browse services', href: '/services/', style: 'secondary' },
      ]}
    >
      <p className="text-slate-300 text-lg leading-relaxed mb-8 max-w-5xl mx-auto">Automate construction: scheduling, RFIs, change orders, progress tracking.</p>
      <p className="text-slate-500 text-sm max-w-5xl mx-auto">Restored from a Wayback Machine snapshot (20260608115842) of ziontechgroup.com.</p>
    </StandardPage>
  );
}
