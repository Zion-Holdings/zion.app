import type { Metadata } from 'next';
import StandardPage from '@/components/StandardPage';

export const metadata: Metadata = {
  title: "Lightweight CRM & Lead Management | Zion Tech Group",
  description: "Simple but powerful CRM for small teams and solopreneurs. Pipeline management, lead scoring, email integration, task tracking, and automated follow-up reminders. No bloat - just what you need to close more deals.",
  openGraph: {
    title: "Lightweight CRM & Lead Management | Zion Tech Group",
    description: "Simple but powerful CRM for small teams and solopreneurs. Pipeline management, lead scoring, email integration, task tracking, and automated follow-up reminders. No bloat - just what you need to close more deals.",
    url: "https://ziontechgroup.com/services/saas-lead-crm/",
    type: 'website',
  },
  alternates: { canonical: "/services/saas-lead-crm/" },
};

export default function SaasLeadCrmPage() {
  return (
    <StandardPage
      title="Lightweight CRM & Lead Management"
      subtitle="Simple but powerful CRM for small teams and solopreneurs. Pipeline management, lead scoring, email integration, task tracking, and automated follow-up reminders. No bloat - just what you need to close more deals."
      breadcrumbItems={[
        { label: "Home", href: "/" },
        { label: "Services", href: "/services/" },
        { label: "Lightweight CRM & Lead Management" }
      ]}
      actions={[
        { label: 'Talk to us', href: '/contact/', style: 'primary' },
        { label: 'Browse services', href: '/services/', style: 'secondary' },
      ]}
    >
      <p className="text-slate-300 text-lg leading-relaxed mb-8 max-w-5xl mx-auto">Simple but powerful CRM for small teams and solopreneurs. Pipeline management, lead scoring, email integration, task tracking, and automated follow-up reminders. No bloat - just what you need to close more deals.</p>
      <p className="text-slate-500 text-sm max-w-5xl mx-auto">Restored from a Wayback Machine snapshot (20260614124914) of ziontechgroup.com.</p>
    </StandardPage>
  );
}
