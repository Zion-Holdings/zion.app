import type { Metadata } from 'next';
import StandardPage from '@/components/StandardPage';

export const metadata: Metadata = {
  title: "Automation Stack for AI & IT Agencies | Zion Tech Group",
  description: "Complete automation stack for AI and IT agencies: billing, bookings, notifications, CRM, search, and secrets management.",
  openGraph: {
    title: "Automation Stack for AI & IT Agencies | Zion Tech Group",
    description: "Complete automation stack for AI and IT agencies: billing, bookings, notifications, CRM, search, and secrets management.",
    url: "https://ziontechgroup.com/docs/automation-stack/",
    type: 'website',
  },
  alternates: { canonical: "/docs/automation-stack/" },
};

export default function DocsAutomationStackPage() {
  return (
    <StandardPage
      title="Automation Stack for AI & IT Agencies"
      subtitle="Complete automation stack for AI and IT agencies: billing, bookings, notifications, CRM, search, and secrets management."
      breadcrumbItems={[
        { label: "Home", href: "/" },
        { label: "Docs", href: "/docs/" },
        { label: "Automation Stack" }
      ]}
      actions={[
        { label: 'Talk to us', href: '/contact/', style: 'primary' },
        { label: 'Browse services', href: '/services/', style: 'secondary' },
      ]}
    >
      <p className="text-slate-300 text-lg leading-relaxed mb-6 max-w-5xl mx-auto">Complete automation stack for AI and IT agencies: billing, bookings, notifications, CRM, search, and secrets management.</p>
      <p className="text-slate-500 text-sm max-w-5xl mx-auto">Restored from current main /docs HTML so this published route is not lost.</p>
    </StandardPage>
  );
}
