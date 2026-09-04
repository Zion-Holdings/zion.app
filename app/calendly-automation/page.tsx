import type { Metadata } from 'next';
import StandardPage from '@/components/StandardPage';

export const metadata: Metadata = {
  title: "Calendly Automation for Revenue Teams | Zion Tech Group",
  description: "Package paid scheduling offers, collect payment at booking, and automate reminders with Calendly.",
  openGraph: {
    title: "Calendly Automation for Revenue Teams | Zion Tech Group",
    description: "Package paid scheduling offers, collect payment at booking, and automate reminders with Calendly.",
    url: "https://ziontechgroup.com/calendly-automation/",
    type: 'website',
  },
  alternates: { canonical: "/calendly-automation/" },
};

export default function CalendlyAutomationPage() {
  return (
    <StandardPage
      title="Calendly Automation for Revenue Teams"
      subtitle="Package paid scheduling offers, collect payment at booking, and automate reminders with Calendly."
      breadcrumbItems={[
        { label: "Home", href: "/" },
        { label: "Calendly Automation" }
      ]}
      actions={[
        { label: 'Talk to us', href: '/contact/', style: 'primary' },
        { label: 'Browse services', href: '/services/', style: 'secondary' },
      ]}
    >
      <p className="text-slate-300 text-lg leading-relaxed mb-8 max-w-5xl mx-auto">Package paid scheduling offers, collect payment at booking, and automate reminders with Calendly.</p>
      <p className="text-slate-500 text-sm max-w-5xl mx-auto">Restored from current main / live Pages HTML so this route is not lost in the source recovery merge.</p>
    </StandardPage>
  );
}
