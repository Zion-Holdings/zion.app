import type { Metadata } from 'next';
import StandardPage from '@/components/StandardPage';

export const metadata: Metadata = {
  title: "Event Management Automation | Zion Tech Group",
  description: "Automate events: registration, ticketing, email sequences, virtual events.",
  openGraph: {
    title: "Event Management Automation | Zion Tech Group",
    description: "Automate events: registration, ticketing, email sequences, virtual events.",
    url: "https://ziontechgroup.com/services/w180-event/",
    type: 'website',
  },
  alternates: { canonical: "/services/w180-event/" },
};

export default function W180EventPage() {
  return (
    <StandardPage
      title="Event Management Automation"
      subtitle="Automate events: registration, ticketing, email sequences, virtual events."
      breadcrumbItems={[
        { label: "Home", href: "/" },
        { label: "Services", href: "/services/" },
        { label: "Event Management Automation" }
      ]}
      actions={[
        { label: 'Talk to us', href: '/contact/', style: 'primary' },
        { label: 'Browse services', href: '/services/', style: 'secondary' },
      ]}
    >
      <p className="text-slate-300 text-lg leading-relaxed mb-8 max-w-5xl mx-auto">Automate events: registration, ticketing, email sequences, virtual events.</p>
      <p className="text-slate-500 text-sm max-w-5xl mx-auto">Restored from a Wayback Machine snapshot (20260607113244) of ziontechgroup.com.</p>
    </StandardPage>
  );
}
